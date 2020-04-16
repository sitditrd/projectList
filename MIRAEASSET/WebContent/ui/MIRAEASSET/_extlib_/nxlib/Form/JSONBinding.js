nexacro.TransactionItem.prototype._parseDSParam = function(paramStr)
{
    if (!paramStr)
    {
        return undefined;
    }

    var list = [];

    var expr = /([a-zA-Z가-힣_$][a-zA-Z가-힣0-9_$]*)\s*=\s*([a-zA-Z가-힣_$][a-zA-Z가-힣0-9_$]*(\.?[a-zA-Z가-힣0-9_$]*)*(?:\:[aAuUnN])?)/g; // 2014-07-31 case hangle , $

    var splitedParams = paramStr.match(expr);

    if (!splitedParams || splitedParams.length == 0)
    {
        return undefined;
    }
    var splitedParamCnt = splitedParams.length;

    for (var i = 0; i < splitedParamCnt; i++)
    {
        var param = splitedParams[i].split("=");
        var key = param[0].trim();
        var value = param[1].trim();

        var bduplicate = false;
        for (var j = 0; j < i; j++)
        {
            var checkparam = splitedParams[j].split("=");
            var checkkey = checkparam[0].trim();
            if (key == checkkey)
            {
                bduplicate = true;
            }
        }
        if (bduplicate)
        {
            i++;
            return false;
        }

        var type = "N";

        var index = value.indexOf(":");
        if (index > -1)
        {
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

nexacro.TransactionItem.prototype._serializeData = function()
{
    if (this.datatype == 1)
    {
        return this.__serializeBIN();
    }
    else if (this.datatype == 2)
    {
        return this.__serializeSSV();
    }
    //JSON start
    else if (this.datatype == 4)
    {
        return this.__serializeJSON();
    }
    //JSON end
    else
    {
        return this.__serializeXML();
    }
};

nexacro.TransactionItem.prototype._deserializeData = function(strRecvData, bPending)
{
    if (!strRecvData)
    {
        return [-1, "Stream Data is null!"];
    }

    strRecvData = strRecvData.trim();
    var fstr = strRecvData.substring(0, 3);

    if (fstr == "SSV") // SSV Type (HEX:53,53,56)
    {
        return this.__deserializeSSV(strRecvData);
    }
    else if (fstr == "CSV") // CSV Type (HEX:43,53,56)
    {
        return this.__deserializeCSV(strRecvData);
    }
    else if (fstr == "PPX") // PPX Type : Runtime only
    {
        return this.__deserializePPX(strRecvData);
    }
    //JSON start
    else if (this.datatype == 4) // JSON Type
    {
        return this.__deserializeJSON(strRecvData);
    }
    //JSON end
    else // XML Type (HEX:3C,3F)
    {
        return this.__deserializeXML(strRecvData);
    }

};

// nexacro.TransactionItem.prototype._getAllDatasets = function()
// {
//     var form = this.context;
//     var outDatasets = this.outputDatasets;
//     var datasetObjects = [];
//     if (outDatasets && outDatasets.length)
//     {
//         var outDataCnt = outDatasets.length;
//         for (var i = 0; i < outDataCnt; i++)
//         {
//             var param = outDatasets[i];
//             datasetObjects[i] = form._getDatasetObject(param.lval);
//         }
//     }
//     return datasetObjects;
// };

nexacro.TransactionItem.prototype.__serializeJSON = function()
{
    var depth = 0;
    var json = {};
    var cookievar = nexacro._getLocalStorage("_cookie_variables", []);
    var id, val, ds;

    var argParamsCnt = 0;
    var cookievarCnt = 0;

    var argParams = this.parameters;
    if (argParams)
    {
        argParamsCnt = argParams.length;
    }
    if (cookievar)
    {
        cookievarCnt = cookievar.length;
    }

    json.meta = {};

    if (cookievarCnt > 0)
    {
        for (i = 0; i < cookievarCnt; i++)
        {
            id = cookievar[i];
            val = application[id];

            if (val && val.length)
            {
                val = val;
                json.meta[id] = val;
            }
        }
    }
    if (argParamsCnt > 0)
    {
        for (i = 0; i < argParamsCnt; i++)
        {
            id = argParams[i].lval;
            val = argParams[i].rval;

            if (val)
            {
                val = val;
                json.meta[id] = val;
            }
        }
    }

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
                json["request"][datasetParams[i].lval] = ds.toArray(datasetParams[i].saveType);
            }
        }
    }

    return JSON.stringify(json);
};

nexacro.TransactionItem.prototype.__deserializeJSON = function(strRecvData, doc)
{

    var parameters = [];
    var datasets = new nexacro.Collection();
    var code = 0;
    var message = "SUCCESS";

    var errorinfo = [code, message];
    doc = strRecvData.trim();

    if (doc)
    {
        doc = JSON.parse(doc);
    }

    var ret = nexacro._getCommDataFromObj(doc, this);

    return [errorinfo, parameters, datasets];
}

nexacro._getCommDataFromObj = function(doc, target)
{
    var variablelist = [];

    var datasetlist = [];

    var form = target.context;
    var outDatasets = target.outputDatasets;
    var datasetObjects = [];
    if (outDatasets && outDatasets.length)
    {
        var outDataCnt = outDatasets.length;
        for (var i = 0; i < outDataCnt; i++)
        {
            var param = outDatasets[i];
            datasetObject = form._getDatasetObject(param.lval);
            datasetObject.rowposition = -1;
            datasetObject.bindJSON(nexacro._queryJSON(doc, param.rval));
            datasetObjects[i] = datasetObject;
        }
    }

    return [variablelist, datasetlist];
}

nexacro._queryJSON = function(obj, query)
{
    if (!query)
        return obj;

    if (obj instanceof Array)
        return obj;

    var queryTerms = query.split(".");

    var result;
    var target = obj

    for (var i = 0; i < queryTerms.length; i++)
    {
        result = target[queryTerms[i]];
        target = result;
    }
    return result;
}

nexacro.Dataset.prototype.bindJSON = function(data)
{
    var dataset = this;
    // var columns = [];

    // if (dataset.useclientlayout)
    // {
    //     dataset.deleteAll();

    //     for (i = 0; i < dataset.getColCount(); i++)
    //     {
    //         columns[i] = dataset.getColumnInfo(i);
    //     }
    // }
    // else
    // {
    //     dataset.clearData();

    //     var firstdata = data;

    //     if (data.constructor === Array)
    //     {
    //         firstdata = data[0];
    //     }

    //     for (a in firstdata)
    //     {
    //         if (firstdata[a] instanceof Object)
    //             continue;

    //         var colinfo = new ColumnInfo(a, "STRING", 256);

    //         dataset.addColumn(a, "STRING", 256);

    //         columns.push(colinfo);
    //     }
    // }

    // if (data.constructor === Array)
    // {
    //     data.forEach(function(currentValue)
    //     {
    //         var row = dataset.addRow();
    //         columns.forEach(function(curCol)
    //         {
    //             dataset.setColumn(row, curCol.name, nexacro._queryJSON(currentValue, curCol.name));
    //         });
    //     });
    // }
    // else
    // {
    //     var row = dataset.addRow();
    //     columns.forEach(function(curCol)
    //     {
    //         dataset.setColumn(row, curCol.name, nexacro._queryJSON(data, curCol.name));
    //     });
    // }

    if (data.constructor === Array)
    {
        var results = Papa.unparse(data,
        {
            header: true
        });

        function convertCSVtoDatasetCSV(csvString)
        {
            var CRLF = String.fromCharCode(13) + String.fromCharCode(10);
            var headerString = csvString.substr(0, csvString.indexOf(CRLF));
            var bodyString = csvString.substr(csvString.indexOf(CRLF) + CRLF.length);
            var columnInfos = headerString.split(",");
            var headerInfo = "Dataset:" + dataset.name + CRLF;

            for (var i = 0, len = columnInfos.length; i < len; i++)
            {
                headerInfo += columnInfos[i] + ":String(256),";
            }

            return headerInfo + CRLF + bodyString;
        }

        var csvData = convertCSVtoDatasetCSV(results);

        dataset.loadCSV(csvData, true);

        results = undefined;
        csvData = undefined;
    }
    else
    {
        var columns = [];

        if (dataset.useclientlayout)
        {
            dataset.deleteAll();

            for (i = 0; i < dataset.getColCount(); i++)
            {
                columns[i] = dataset.getColumnInfo(i);
            }
        }
        else
        {
            dataset.clearData();

            var firstdata = data;

            for (a in firstdata)
            {
                if (firstdata[a] instanceof Object)
                    continue;

                var colinfo = new ColumnInfo(a, "STRING", 256);

                dataset.addColumn(a, "STRING", 256);

                columns.push(colinfo);
            }
        }

        var row = dataset.addRow();
        columns.forEach(function(curCol)
        {
            dataset.setColumn(row, curCol.name, nexacro._queryJSON(data, curCol.name));
        });
    }

    dataset.applyChange();
    dataset.set_rowposition(0);
}

nexacro.Dataset.prototype.getRow = function(rowIndex)
{
    if (rowIndex >= this.getRowCount())
        return undefined;

    var columns = [];
    var data = [];
    for (i = 0; i < this.getColCount(); i++)
    {
        columns[i] = this.getColumnInfo(i).name;
    }

    var datum = {};

    for (j = 0; j < columns.length; j++)
    {
        datum[columns[j]] = this.getColumn(rowIndex, columns[j]);
    }

    return datum;
}

nexacro.Dataset.prototype.getData = function()
{

    var rowIndex = 0;
    var data = [this.getRowCount()];

    for (rowIndex = 0; rowIndex < this.getRowCount(); rowIndex++)
    {
        data[rowIndex] = this.getRow(rowIndex);
    }
    return data;
};

nexacro.Dataset.prototype.toArray = function(type)
{
    var rows = [];
    var saveType = "N";
    switch (type)
    {
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

    var i;
    var n;

    function __getJSON_row_data(colinfos, rowData)
    {
        var jsonData = {};

        jsonData["rowtype"] = rowData._rtype;

        for (var i = 0, len = rowData.length; i < len; i++)
        {
            jsonData[colinfos[i].name] = rowData[i];
        }

        return jsonData;
    }

    n = 0;
    var rawRecords = this._rawRecords;
    var colinfos = this.colinfos;
    if (rawRecords)
    {
        n = rawRecords.length;
    }
    var viewRec = this._viewRecords;
    var viewcount = viewRec ? viewRec.length : 0;
    if (n)
    {
        var rowData;
        if (saveType == "A")
        {
            i = 0;

            function getJSON_row_loop1(pthis)
            {
                if (i < n)
                {
                    rowData = rawRecords[i];
                    if (rowData._rtype == 1 || rowData._rtype == 2 || rowData._rtype == 4 || rowData._rtype == 8)
                    {
                        rows.push(__getJSON_row_data(colinfos, rowData));
                    }
                    i++;
                    return false;
                }
                return true;
            }
            while (true)
            {
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
                if (getJSON_row_loop1(this))
                {
                    break;
                }
            }
        }
        else if (saveType == "U")
        {
            i = 0;

            function getJSON_row_loop2(pthis)
            {
                if (i < n)
                {
                    rowData = rawRecords[i];
                    if (rowData._rtype == 2 || rowData._rtype == 4 || rowData._rtype == 8)
                    {
                        rows.push(__getJSON_row_data(colinfos, rowData));
                    }
                    i++;
                    return false;
                }
                return true;
            }
            while (true)
            {
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
                if (getJSON_row_loop2(this))
                {
                    break;
                }
            }
        }
        else if (saveType == "V")
        {
            i = 0;

            function getJSON_row_loop4(pthis)
            {
                if (i < viewcount)
                {
                    rowData = viewRec[i];
                    rows.push(__getJSON_row_data(colinfos, rowData));
                    i++;
                    return false;
                }
                return true;
            }
            while (true)
            {
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
                if (getJSON_row_loop4(this))
                {
                    break;
                }
            }
        }
        else
        {
            i = 0;

            function getJSON_row_loop3(pthis)
            {
                if (i < n)
                {
                    rowData = rawRecords[i];
                    if (rowData._rtype == 1 || rowData._rtype == 2 || rowData._rtype == 4)
                    {
                        rows.push(__getJSON_row_data(colinfos, rowData));
                    }
                    i++;
                    return false;
                }
                return true;
            }
            while (true)
            {
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
                if (getJSON_row_loop3(this))
                {
                    break;
                }
            }
        }
    }

    rawRecords = undefined;
    colinfos = undefined;
    viewRec = undefined;
    viewcount = undefined;

    return rows;
}