//XJS=PivotGrid_dw.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        this.fn_calcPivot = function(objPivotInfoDs, objTargetDs, objTargetGrid, bProgress)
        {
        	var i;
        	var arrIdx = 0;
        	var arrColumnList = new Array();
        	var strkeyString = "S:";

        	if(this.gfn_IsNull(bProgress)==true)bProgress = true;

        	objTargetGrid.targetDs = objTargetDs;
        	objTargetGrid.pivotInfoDs = objPivotInfoDs;

        	objPivotInfoDs.filter("pivotInfo=='ROW'");
        	for(i=0;i<objPivotInfoDs.rowcount;i++)
        	{
        		strkeyString += "+" + objPivotInfoDs.getColumn(i, "colID") + "_"+objPivotInfoDs.getColumn(i, "titleText")+"_";
        		arrColumnList[arrIdx] = parseInt(objPivotInfoDs.getColumn(i, "arrIdx"));
        		arrIdx++;
        	}

        	objPivotInfoDs.filter("pivotInfo=='COLUMN'");
        	for(i=0;i<objPivotInfoDs.rowcount;i++)
        	{
        		arrColumnList[arrIdx] = parseInt(objPivotInfoDs.getColumn(i, "arrIdx"));
        		arrIdx++;
        	}
        	objPivotInfoDs.filter("");

        	if(bProgress==true)
        	{
        		this.fn_makeProgress(objTargetGrid);
        		this.fn_runProgress(objTargetGrid, 100, "데이터 분석");
        		nexacro._OnceCallbackTimer.callonce(this, function () {	this.fn_pivotProcess1(objTargetGrid, arrColumnList, strkeyString, objTargetDs);},10);
        	}else
        	{
        		this.fv_arrPivotRawData.sort(this.fn_dataSort.apply(this, arrColumnList));

        		this.fn_makePivotData2(objTargetGrid);

        		objTargetDs.set_keystring(strkeyString);

        		this.fn_makePivotUI(objTargetGrid);

        		objTargetGrid.set_binddataset(objTargetDs);

        		this.fv_EndTime = this.gfn_CheckTime();
        		var nDiffTime = this.gfn_diffTime(this.fv_StartTime, this.fv_EndTime, "ss");
        		this.Static00.set_text(nDiffTime);
        	}
        }

        this.fn_pivotProcess1 = function(objTargetGrid, arrColumnList, strkeyString, objTargetDs)
        {
        	this.fv_arrPivotRawData.sort(this.fn_dataSort.apply(this, arrColumnList));

        	this.fn_runProgress(objTargetGrid, 0, "데이터 만들기");
        	nexacro._OnceCallbackTimer.callonce(this, function () {	this.fn_pivotProcess2(objTargetGrid, strkeyString, objTargetDs);},10);
        }

        this.fn_pivotProcess2 = function(objTargetGrid, strkeyString, objTargetDs)
        {
        	this.fn_makePivotData(objTargetGrid);

        	objTargetDs.set_keystring(strkeyString);
        }

        this.fn_pivotProcess3 = function(objTargetGrid, objTargetDs)
        {
        	this.fn_makePivotUI(objTargetGrid);

        	objTargetGrid.set_binddataset(objTargetDs);

        	this.fn_stopProgress(objTargetGrid);

        	this.fv_EndTime = this.gfn_CheckTime();
        	var nDiffTime = this.gfn_diffTime(this.fv_StartTime, this.fv_EndTime, "ss");
        	this.Static00.set_text(nDiffTime);
        }

        this.fn_dataSort = function (sortIdx1, sortIdx2, sortIdx3, sortIdx4, sortIdx5, sortIdx6, sortIdx7, sortIdx8, sortIdx9, sortIdx10)
        {
        	var arrColumnCount = arguments.length;
        	var test1 = "";
        	var test2 = "";

        	if(arrColumnCount==1)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1];
        			test2 =  b[sortIdx1];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==2)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1]+a[sortIdx2];
        			test2 =  b[sortIdx1]+b[sortIdx2];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==3)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1]+a[sortIdx2]+a[sortIdx3];
        			test2 =  b[sortIdx1]+b[sortIdx2]+b[sortIdx3];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==4)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1]+a[sortIdx2]+a[sortIdx3]+a[sortIdx4];
        			test2 =  b[sortIdx1]+b[sortIdx2]+b[sortIdx3]+b[sortIdx4];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==5)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1]+a[sortIdx2]+a[sortIdx3]+a[sortIdx4]+a[sortIdx5];
        			test2 =  b[sortIdx1]+b[sortIdx2]+b[sortIdx3]+b[sortIdx4]+b[sortIdx5];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==6)
        	{
        		return function (a, b)
        		{
        			test1 = a[sortIdx1]+a[sortIdx2]+a[sortIdx3]+a[sortIdx4]+a[sortIdx5]+a[sortIdx6];
        			test2 = b[sortIdx1]+b[sortIdx2]+b[sortIdx3]+b[sortIdx4]+b[sortIdx5]+b[sortIdx6];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==7)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1]+a[sortIdx2]+a[sortIdx3]+a[sortIdx4]+a[sortIdx5]+a[sortIdx6]+a[sortIdx7];
        			test2 =  b[sortIdx1]+b[sortIdx2]+b[sortIdx3]+b[sortIdx4]+b[sortIdx5]+b[sortIdx6]+b[sortIdx7];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==8)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1]+a[sortIdx2]+a[sortIdx3]+a[sortIdx4]+a[sortIdx5]+a[sortIdx6]+a[sortIdx7]+a[sortIdx8];
        			test2 =  b[sortIdx1]+b[sortIdx2]+b[sortIdx3]+b[sortIdx4]+b[sortIdx5]+b[sortIdx6]+b[sortIdx7]+b[sortIdx8];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==9)
        	{
        		return function (a, b)
        		{
        			test1 = a[sortIdx1]+a[sortIdx2]+a[sortIdx3]+a[sortIdx4]+a[sortIdx5]+a[sortIdx6]+a[sortIdx7]+a[sortIdx8]+a[sortIdx9];
        			test2 = b[sortIdx1]+b[sortIdx2]+b[sortIdx3]+b[sortIdx4]+b[sortIdx5]+b[sortIdx6]+b[sortIdx7]+b[sortIdx8]+b[sortIdx9];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}else if(arrColumnCount==10)
        	{
        		return function (a, b)
        		{
        			test1 =  a[sortIdx1]+a[sortIdx2]+a[sortIdx3]+a[sortIdx4]+a[sortIdx5]+a[sortIdx6]+a[sortIdx7]+a[sortIdx8]+a[sortIdx9]+a[sortIdx10];
        			test2 =  b[sortIdx1]+b[sortIdx2]+b[sortIdx3]+b[sortIdx4]+b[sortIdx5]+b[sortIdx6]+b[sortIdx7]+b[sortIdx8]+b[sortIdx9]+b[sortIdx10];
        			return test1 == test2 ? 0 : (test1 < test2 ? 1 : -1)
        		};
        	}
        }

        this.fn_makePivotData = function(objTargetGrid)
        {
        	var sColumnName;
        	var nACount;
        	var nValue;
        	var arrIdx;
        	var bChk = true;

        	var objTargetDs = objTargetGrid.targetDs;
        	var objPivotInfoDs = objTargetGrid.pivotInfoDs;
        	var arrRows = this.fn_makeArray(objPivotInfoDs, "ROW");
        	var arrColumns = this.fn_makeArray(objPivotInfoDs, "COLUMN");
        	var arrDatas = this.fn_makeArray(objPivotInfoDs, "DATA");

        	objTargetGrid.targetColumns = arrColumns;
        	objTargetGrid.set_binddataset(null);
        	objTargetDs.set_enableevent(false);
        	objTargetDs.clear();

        	for(var i=0;i<arrRows.length;i++)
        	{
        		sColumnName = arrRows[i].testColumn+"_";
        		objTargetDs.addColumn(sColumnName, "STRING");
        	}

        	var nMaxLength = this.fv_arrPivotRawData.length;

        	nexacro._OnceCallbackTimer.callonce(this, function () {	this.fn_makPivotDataLoop(0, nMaxLength, 0, arrRows, arrColumns, arrDatas, objTargetDs, objTargetGrid);},10);
        }

        this.fn_makePivotData2 = function(objTargetGrid)
        {
        	var nRow = 0;
        	var sColumnName;
        	var nACount;
        	var nValue;
        	var arrIdx;
        	var bChk = true;

        	var objTargetDs = objTargetGrid.targetDs;
        	var objPivotInfoDs = objTargetGrid.pivotInfoDs;
        	var arrRows = this.fn_makeArray(objPivotInfoDs, "ROW");
        	var arrColumns = this.fn_makeArray(objPivotInfoDs, "COLUMN");
        	var arrDatas = this.fn_makeArray(objPivotInfoDs, "DATA");

        	objTargetGrid.targetColumns = arrColumns;
        	objTargetGrid.set_binddataset(null);
        	objTargetDs.set_enableevent(false);
        	objTargetDs.clear();

        	for(var i=0;i<arrRows.length;i++)
        	{
        		sColumnName = arrRows[i].testColumn+"_";
        		objTargetDs.addColumn(sColumnName, "STRING");
        	}

        	for(var i=this.fv_arrPivotRawData.length-1;i>-1;i--)
        	{
        		bChk=true;
        		if(i!=this.fv_arrPivotRawData.length-1)
        		{
        			for(var j=0;j<arrRows.length;j++)
        			{
        				arrIdx = arrRows[j].arrIdx;
        				bChk = bChk&&this.fv_arrPivotRawData[i][arrIdx]==this.fv_arrPivotRawData[i+1][arrIdx];

        				if(bChk==false)break;
        			}
        		}

        		if(bChk==false)
        		{
        			nRow = objTargetDs.addRow();

        			for(var j=0;j<arrRows.length;j++)
        			{
        				sColumnName = arrRows[j].testColumn+"_";
        				arrIdx = arrRows[j].arrIdx;
        				objTargetDs.setColumn(nRow, sColumnName, this.fv_arrPivotRawData[i][arrIdx]);
        			}
        		}

        		sColumnName = "";
        		for(var j=0;j<arrColumns.length;j++)
        		{
        			arrIdx = arrColumns[j].arrIdx;

        			sColumnName += "_"+arrColumns[j].testColumn+"_"+this.fv_arrPivotRawData[i][arrIdx];
        		}

        		sColumnName = sColumnName.substr(1);

        		for(var j=0;j<arrDatas.length;j++)
        		{
        			sDataColumnName = sColumnName+"_"+arrDatas[j].testColumn+"_";

        			if(objTargetDs.getColumnInfo(sDataColumnName)==null)
        			{
        				objTargetDs.addColumn(sDataColumnName, "INT");
        			}

        			arrIdx = arrDatas[j].arrIdx;

        			if(objTargetDs.getColumn(nRow, sDataColumnName)==null)
        			{
        				nValue = this.fv_arrPivotRawData[i][arrIdx];
        			}else
        			{
        				nValue = objTargetDs.getColumn(nRow, sDataColumnName) + parseInt(this.fv_arrPivotRawData[i][arrIdx]);
        			}

        			objTargetDs.setColumn(nRow, sDataColumnName, nValue);
        		}
        	}
        	objTargetDs.set_enableevent(true);
        }

        this.fn_makPivotDataLoop = function(nLoopIdx, nMaxLength, nRow, arrRows, arrColumns, arrDatas, objTargetDs, objTargetGrid)
        {
        	var bClose = false;
        	var nStartIdx = 10000*(nLoopIdx);
        	var nEndIdx = 10000*(nLoopIdx+1);

        	if(nEndIdx>=nMaxLength)
        	{
        		bClose = true;
        		nEndIdx = nMaxLength;
        	}

        	var nPer = nexacro.round(nEndIdx/nMaxLength*100);

        	for(var i=nEndIdx-1;i>=nStartIdx;i--)
        	{
        		bChk=true;
        		if(i!=this.fv_arrPivotRawData.length-1)
        		{
        			for(var j=0;j<arrRows.length;j++)
        			{
        				arrIdx = arrRows[j].arrIdx;
        				bChk = bChk&&this.fv_arrPivotRawData[i][arrIdx]==this.fv_arrPivotRawData[i+1][arrIdx];

        				if(bChk==false)break;
        			}
        		}

        		if(bChk==false)
        		{
        			nRow = objTargetDs.addRow();

        			for(var j=0;j<arrRows.length;j++)
        			{
        				sColumnName = arrRows[j].testColumn+"_";
        				arrIdx = arrRows[j].arrIdx;
        				objTargetDs.setColumn(nRow, sColumnName, this.fv_arrPivotRawData[i][arrIdx]);
        			}
        		}

        		sColumnName = "";
        		for(var j=0;j<arrColumns.length;j++)
        		{
        			arrIdx = arrColumns[j].arrIdx;

        			sColumnName += "_"+arrColumns[j].testColumn+"_"+this.fv_arrPivotRawData[i][arrIdx];
        		}

        		sColumnName = sColumnName.substr(1);

        		for(var j=0;j<arrDatas.length;j++)
        		{
        			sDataColumnName = sColumnName+"_"+arrDatas[j].testColumn+"_";

        			if(objTargetDs.getColumnInfo(sDataColumnName)==null)
        			{
        				objTargetDs.addColumn(sDataColumnName, "INT");
        			}

        			arrIdx = arrDatas[j].arrIdx;

        			if(objTargetDs.getColumn(nRow, sDataColumnName)==null)
        			{
        				nValue = this.fv_arrPivotRawData[i][arrIdx];
        			}else
        			{
        				nValue = objTargetDs.getColumn(nRow, sDataColumnName) + parseInt(this.fv_arrPivotRawData[i][arrIdx]);
        			}

        			objTargetDs.setColumn(nRow, sDataColumnName, nValue);
        		}
        	}

        	this.fn_runProgress(objTargetGrid, nPer, "데이터 만들기("+nPer+"%)");

        	if(bClose==false)
        	{
        		nexacro._OnceCallbackTimer.callonce(this, function () {	this.fn_makPivotDataLoop(nLoopIdx+1, nMaxLength, nRow, arrRows, arrColumns, arrDatas, objTargetDs, objTargetGrid);},10);
        	}else
        	{
        		objTargetDs.set_enableevent(true);

        		this.fn_runProgress(objTargetGrid, 100, "UI 만들기");
        		nexacro._OnceCallbackTimer.callonce(this, function () {	this.fn_pivotProcess3(objTargetGrid, objTargetDs);},10);
        	}
        }

        this.fn_makeArray = function(objPivotInfoDs, pivotInfo)
        {
        	var i;
        	var objArrayList = new Array();
        	var sColId;
        	var sTitleText;
        	var arrIdx;

        	objPivotInfoDs.filter("pivotInfo=='"+pivotInfo+"'");

        	for(i=0;i<objPivotInfoDs.rowcount;i++)
        	{
        		sColId = objPivotInfoDs.getColumn(i, "colId");
        		sTitleText = objPivotInfoDs.getColumn(i, "titleText");
        		arrIdx = objPivotInfoDs.getColumn(i, "arrIdx");

        		objArrayList[i] = {"colId":sColId, "titleText": sTitleText, "arrIdx": arrIdx, "testColumn" : sColId+"_"+sTitleText};
        	}

        	objPivotInfoDs.filter("");

        	return objArrayList;
        }

        this.fn_makePivotUI = function(objTargetGrid)
        {
        	var i;
        	var arrColumnInfo;
        	var arrColumnInfo_find;
        	var nIdx = 0;
        	var nCol;
        	var nColSpan = 0;
        	var nRow;
        	var nRowSpan;
        	var sText;
        	var sTextIdx = 2;
        	var sFormatString = "";
        	var objTargetDs = objTargetGrid.targetDs;
        	var arrColumns = objTargetGrid.targetColumns;

        	objTargetGrid.set_formats('<Formats><Format id="default"></Format></Formats>');

        	sFormatString  = '<Formats>\n';
        	sFormatString += '<Format id="default">\n';
        	sFormatString += '<Columns>\n';
        	for(i=0;i<objTargetDs.colcount;i++)
        	{
        		sFormatString += '<Column size="80"/>\n';
        	}
        	sFormatString += '</Columns>\n';

        	sFormatString += '<Rows>\n';
        	for(i=0;i<arrColumns.length+1;i++)
        	{
        		sFormatString += '<Row size="24" band="head"/>\n';
        	}
        	sFormatString += '<Row size="24"/>\n';
        	sFormatString += '</Rows>\n';

        	sFormatString += '<Band id="head">\n';

        	arrTextList = this.fn_makeGridHeadBand(objTargetGrid);

        	for(j=0;j<arrTextList.length;j++)
        	{
        		for(i=0;i<arrTextList[j].length;i++)
        		{
        			sFormatString += '<Cell';

        			if(arrTextList[j][i].row!=0)sFormatString += ' row="'+arrTextList[j][i].row+'"';

        			if(arrTextList[j][i].col!=0)sFormatString += ' col="'+arrTextList[j][i].col+'"';

        			if(arrTextList[j][i].rowspan!=1)sFormatString += ' rowspan="'+arrTextList[j][i].rowspan+'"';

        			if(arrTextList[j][i].colspan!=1)sFormatString += ' colspan="'+arrTextList[j][i].colspan+'"';

        			sFormatString += ' text="'+arrTextList[j][i].text+'"';

        			sFormatString += '/>\n';
        		}
        	}

        	sFormatString += '</Band>\n';

        	sFormatString += '<Band id="body">\n';
        	for(i=0;i<objTargetDs.colcount;i++)
        	{
        		if(i==0)sFormatString += '<Cell text="bind:'+objTargetDs.colinfos[i].name+'"/>\n';
        		else sFormatString += '<Cell col="'+i+'" text="bind:'+objTargetDs.colinfos[i].name+'"/>\n';

        	}
        	sFormatString += '</Band>\n';

        	sFormatString += '</Format>\n';
        	sFormatString += '</Formats>\n';
        	objTargetGrid.set_formats(sFormatString);
        }

        this.fn_makeGridHeadBand = function(objTargetGrid)
        {
        	var i;
        	var nCount;
        	var nTextIdx;
        	var sText;
        	var sText_befor = "";
        	var sColIdx = 0;
        	var arrColumnInfo = "";
        	var sTextColList
        	var arrTextList = [];
        	var objTargetDs = objTargetGrid.targetDs;
        	var arrColumns = objTargetGrid.targetColumns;

        	for(i=0;i<objTargetDs.colcount;i++)
        	{
        		arrColumnInfo = objTargetDs.colinfos[i].name.split("_");
        		nCount = arrColumnInfo.length/3;
        		nRow = (arrColumnInfo.length/3)-1;
        		nRowSpan = arrColumns.length - nRow + 1;

        		for(j=0;j<nCount;j++)
        		{
        			sText = this.fn_getHeadText(arrColumnInfo, j);

        			if(arrTextList[j]==null)
        			{
        				arrTextList[j] = new Array();
        				arrTextList[j][arrTextList[j].length] = {"text":sText, "colspan": 1, "rowspan": nRowSpan, "col" : i, "row" : j};
        			}
        			else
        			{
        				if(arrTextList[j][arrTextList[j].length-1].text!=sText)
        				{
        					arrTextList[j][arrTextList[j].length] = {"text":sText, "colspan": 1, "rowspan": nRowSpan, "col" : i, "row" : j};
        				}else
        				{
        					arrTextList[j][arrTextList[j].length-1].colspan++;
        				}
        			}
        		}
        	}

        	return arrTextList;
        }

        this.fn_getHeadText = function(arrColumnInfo, nIdx)
        {
        	var sHeadText;
        	var nTextIdx = 2;
        	sHeadText = arrColumnInfo[(nIdx*3)+nTextIdx];

        	if(sHeadText=="")
        	{
        		var nTextIdx = 1;
        		sHeadText = arrColumnInfo[(j*3)+nTextIdx];
        	}

        	return sHeadText;
        }

        this.fn_makeProgress = function(objTargetGrid)
        {
        	var objDiv = this.components["divPivotProgress"];
        	if(!objDiv) {
        		objDiv = new Div("divPivotProgress", "0", "0", "160", "42");
        		objDiv.set_background("white");
        		objDiv.set_border("2px solid #808080");
        		objDiv.form.set_scrolltype("none");
        		objDiv.set_visible(false);
        		this.addChild(objDiv.id, objDiv);
        		objDiv.show();
        		var obj = new ProgressBar("ProgressBar00", "3", "4", "148", "14");
        		objDiv.addChild(obj.id, obj);
        		obj.show();
        		obj = new Static("Static00", "5", "21", "146", "14");
        		obj.set_text("Static00");
        		obj.set_textAlign("center");
        		obj.set_verticalAlign("middle");
        		obj.set_font("8pt Verdana");
        		objDiv.addChild(obj.id, obj);
        		obj.show();
        	}

        	var objDiv = this.components["divPivotProgress"];
        	var l = objTargetGrid.getOffsetLeft() + (objTargetGrid.getOffsetWidth()/2) - 80;
        	var t = objTargetGrid.getOffsetTop() + (objTargetGrid.getOffsetHeight()/2) - 40;

        	objDiv.set_left(l);
        	objDiv.set_top(t);
        	objDiv.set_visible(true);
        	objTargetGrid.targetProgress = objDiv;
        }

        this.fn_runProgress = function(objTargetGrid, nPos, sTxt)
        {
        	var objDiv = objTargetGrid.targetProgress;
        	objDiv.form.ProgressBar00.set_pos(nPos);
        	objDiv.form.Static00.set_text(sTxt);
        }

        this.fn_stopProgress = function(objTargetGrid)
        {
        	objTargetGrid.targetProgress.set_visible(false);
        }

        /************************************************************************************************
         * Even   : gfn_IsNull
         * Desc   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Param : {Val} 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return : {boolean}  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true 이외의 경우 = false
         ************************************************************************************************/
        this.gfn_IsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") {
        		return true;
        	}

        	if (Val == null) {
        		return true;
        	}

        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) {
        		return true;
        	}

        	if (Val.length == 0) {
        		return true;
        	}

        	return false;
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
