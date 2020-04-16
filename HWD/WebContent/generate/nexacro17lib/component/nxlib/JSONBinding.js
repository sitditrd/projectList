nexacro.TransactionItem.prototype._parseDSParam = function(paramStr) {
    if (!paramStr)
        return undefined;
    
    var list = [];
    var expr = /([a-zA-Z가-힣_$][a-zA-Z가-힣0-9_$]*)\s*=\s*([a-zA-Z가-힣_$][a-zA-Z가-힣0-9_$]*(\.?[a-zA-Z가-힣0-9_$]*)*(?:\:[aAuUnN])?)/g; // 2014-07-31 case hangle , $
    var splitedParams = paramStr.match(expr);

    if (!splitedParams || splitedParams.length == 0)
        return undefined;
    
    var splitedParamCnt = splitedParams.length;

    for (var i = 0; i < splitedParamCnt; i++) {
        var param = splitedParams[i].split("=");
        var key = param[0].trim();
        var value = param[1].trim();
        var bduplicate = false;
        for (var j = 0; j < i; j++) {
            var checkparam = splitedParams[j].split("=");
            var checkkey = checkparam[0].trim();
            if (key == checkkey) {
                bduplicate = true;
            }
        }
        if (bduplicate) {
            i++;
            return false;
        }

        var type = "N";
        var index = value.indexOf(":");
        if (index > -1) {
            type = value.substring(index + 1);
            value = value.substring(0, index);
        }

        var paramObj = {
            lval: key,
            rval: value,
            saveType: type
        };
        list.push(paramObj);
    }
    return list;
};

nexacro.TransactionItem.prototype._serializeData = function() {
    if (this.datatype == 1) {
        return this.__serializeBIN();
    }
    else if (this.datatype == 2) {
        return this.__serializeSSV();
    }
    else if (this.datatype == 4) {
        return this.__serializeJSON();
    }
    else {
        return this.__serializeXML();
    }
};

nexacro.TransactionItem.prototype._deserializeData = function(strRecvData, bPending) {
    if (!strRecvData) {
        return [[-1, "Stream Data is null!"], [], new nexacro.Collection()];
    }
    if (strRecvData.charAt(0) == " ") {
        strRecvData = strRecvData.trim();
    }

    var fstr = strRecvData.substring(0, 3);

    if (fstr == "SSV") {
        return this.__deserializeSSV(strRecvData);
    }
    else if (fstr == "CSV") {
        return this.__deserializeCSV(strRecvData);
    }
    else if (fstr == "PPX") {
        return this.__deserializePPX(strRecvData);
    }
    else if (this.datatype == 4) {
        return this.__deserializeJSON(strRecvData);
    }
    else {
        return this.__deserializeXML(strRecvData);
    }
};

nexacro.TransactionItem.prototype.__serializeJSON = function() {
    var json = {};
    var id, ds;

    var datasetParams = this.inputDatasets;
    if (datasetParams && datasetParams.length)
    {
        json["request"] = {};
        var datasetCnt = datasetParams.length;
        for (var i = 0; i < datasetCnt; i++)
        {
            var id = datasetParams[i].rval;
            var ds = this.context._getDatasetObject(id);
            if (ds)
            {
                json["request"][datasetParams[i].lval] = ds.saveJSON(datasetParams[i].saveType);
            }
        }
    }

    return JSON.stringify(json);
};

nexacro.TransactionItem.prototype.__deserializeJSON = function(strRecvData, doc) {
    var parameters = [];
    var datasets = new nexacro.Collection();
    var code = 0;
    var message = "SUCCESS";

    var errorinfo = [code, message];
    doc = strRecvData.trim();

    if (doc) {
        doc = JSON.parse(doc);
    }
    
    nexacro._getCommDataFromObj(doc, this);

    return [errorinfo, parameters, datasets];
};

nexacro._getCommDataFromObj = function(doc, target) {
    var variablelist = [];
    var datasetlist = [];
    var form = target.context;
    var outDatasets = target.outputDatasets;
    var datasetObjects = [];
    if (outDatasets && outDatasets.length) {
        var outDataCnt = outDatasets.length;
        for (var i = 0; i < outDataCnt; i++) {
            var param = outDatasets[i];
            datasetObject = form._getDatasetObject(param.lval);
            datasetObject.rowposition = -1;
            datasetObject.loadJSON(nexacro._queryJSON(doc, param.rval));
            datasetObjects[i] = datasetObject;
        }
    }

    return [variablelist, datasetlist];
};

nexacro._queryJSON = function(obj, query) {
    if (!query)
        return obj;

    if (obj instanceof Array)
        return obj;

    var queryTerms = query.split(".");
    var result;
    var target = obj

    for (var i = 0; i < queryTerms.length; i++) {
        result = target[queryTerms[i]];
        target = result;
    }
    return result;
};

nexacro.Dataset.prototype.loadJSON = function(data) {
    var dataset = this;

    if (data.constructor === Array) {
        var results = Papa.unparse(data, {
            header: true
        });

        function convertCSVtoDatasetCSV(csvString) {
            var CRLF = String.fromCharCode(13) + String.fromCharCode(10);
            var headerString = csvString.substr(0, csvString.indexOf(CRLF));
            var bodyString = csvString.substr(csvString.indexOf(CRLF) + CRLF.length);
            var columnInfos = headerString.split(",");
            var headerInfo = "Dataset:" + dataset.name + CRLF;

            for (var i = 0, len = columnInfos.length; i < len; i++) {
                headerInfo += columnInfos[i] + ":String(256),";
            }

            return headerInfo + CRLF + bodyString;
        }

        var csvData = convertCSVtoDatasetCSV(results);
        dataset.loadCSV(csvData, true);

        results = undefined;
        csvData = undefined;
    }
    else {
        var columns = [];

        if (dataset.useclientlayout) {
            dataset.clearData();

            for (i = 0; i < dataset.getColCount(); i++) {
                columns[i] = dataset.getColumnInfo(i);
            }
        } 
        else {
            dataset.clear();

            var firstdata = data;

            for (a in firstdata) {
                if (firstdata[a] instanceof Object)
                    continue;

                var colinfo = new ColumnInfo(a, "STRING", 256);

                dataset.addColumn(a, "STRING", 256);

                columns.push(colinfo);
            }
        }

        var row = dataset.addRow();
        columns.forEach(function(curCol) {
            dataset.setColumn(row, curCol.name, nexacro._queryJSON(data, curCol.name));
        });
    }

    dataset.applyChange();
    dataset.set_rowposition(0);
};

nexacro.Dataset.prototype.getRow = function(rowIndex) {
    if (rowIndex >= this.getRowCount())
        return undefined;

    var columns = [];
    var data = {};

    for (var i = 0; i < this.getColCount(); i++) {
        columns[i] = this.getColumnInfo(i).name;
    }
    for (var j = 0; j < columns.length; j++) {
        data[columns[j]] = this.getColumn(rowIndex, columns[j]);
    }

    return data;
};

nexacro.Dataset.prototype.getJSON = function() {
    var i = 0, len = this.getRowCount();
    var data = [len];

    for (i = 0; i < len; i++) {
        var rowData = this.getRow(i);
        if (rowData)
            data[i] = rowData;
    }
    return data;
};

nexacro.Dataset.prototype.saveJSON = function(type) {
    var rows = [];
    var saveType = "N";
    switch (type) {
        case "A":
        case "a":
        case "all":
        case "All":
            saveType = "A";
            break;
        case "U":
        case "u":
        case "update":
        case "Update":
            saveType = "U";
            break;
        case "N":
        case "n":
        case "normal":
        case "Normal":
            saveType = "N";
            break;
        case "V":
        case "v":
        case "view":
        case "View":
            saveType = "V";
            break;
    }

    var i, n;

    function __getJSON_row_data(colinfos, rowData) {
        var jsonData = {};
        jsonData["rowtype"] = rowData._rtype;

        for (var i = 0, len = rowData.length; i < len; i++) {
            jsonData[colinfos[i].name] = rowData[i];
        }
        return jsonData;
    }

    n = 0;
    var rawRecords = this._rawRecords;
    var colinfos = this.colinfos;
    if (rawRecords) {
        n = rawRecords.length;
    }
    var viewRec = this._viewRecords;
    var viewcount = viewRec ? viewRec.length : 0;
    if (n) {
        var rowData;
        if (saveType == "A") {
            i = 0;

            function getJSON_row_loop1(i) {
                rowData = rawRecords[i];
                if (rowData._rtype == 1 || rowData._rtype == 2 || rowData._rtype == 4 || rowData._rtype == 8) {
                    rows.push(__getJSON_row_data(colinfos, rowData));
                }
                i++;
            }
            nexacro.__forLoop(this, i, n, getJSON_row_loop1);
        }
        else if (saveType == "U") {
            i = 0;

            function getJSON_row_loop2(i) {
                rowData = rawRecords[i];
                if (rowData._rtype == 2 || rowData._rtype == 4 || rowData._rtype == 8) {
                    rows.push(__getJSON_row_data(colinfos, rowData));
                }
                i++;
                return false;
            }
            nexacro.__forLoop(this, i, n, getJSON_row_loop2);
        }
        else if (saveType == "V") {
            i = 0;

            function getJSON_row_loop4(i) {
                rowData = viewRec[i];
                rows.push(__getJSON_row_data(colinfos, rowData));
                i++;
                return false;
            }
            nexacro.__forLoop(this, i, viewcount, getJSON_row_loop4);
        }
        else {
            i = 0;

            function getJSON_row_loop3(i) {
                rowData = rawRecords[i];
                if (rowData._rtype == 1 || rowData._rtype == 2 || rowData._rtype == 4) {
                    rows.push(__getJSON_row_data(colinfos, rowData));
                }
                i++;
                return false;
            }
            nexacro.__forLoop(this, i, n, getJSON_row_loop3);
        }
    }

    rawRecords = undefined;
    colinfos = undefined;
    viewRec = undefined;
    viewcount = undefined;

    return rows;
};