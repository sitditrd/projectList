//XJS=comLib_Comm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.gfn_todayTime = function ()
        {
        	var sToday = "";
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + "";
        	var sMonth = objDate.getMonth() + 1;
        	var sDate = objDate.getDate();
        	var sHours = objDate.getHours();
        	var sMinutes = objDate.getMinutes();

        	if (sMonth.toString().length == 1)
        	{
        		sMonth = "0" + sMonth;
        	}

        	if (sDate.toString().length == 1)
        	{
        		sDate = "0" + sDate;
        	}

        	sToday = sToday + "." + sMonth + "." + sDate + " " + sHours + ":" + sMinutes;

        	return sToday;
        };

        /*********************************************************************
         * 함 수 명 	: gfn_IsNull
         * 함수설명 	: NULL 여부 체크
         * 입    력 	: 문자열
         * 결    과 	: Boolean형의 여부	- null = true, Not Null = false
         *********************************************************************/
        this.gfn_IsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

        	var v_ChkStr = new String(sValue);

            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0) return true;

            return false;
        }


        /************************************************************************************************
         * Function Name : gfn_isNull
         * Description   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Arguments     : sValue - 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return        : Boolean sValue이 undefined, null, NaN, "", Array.length = 0인 경우 true
         *************************************************************************************************/
        this.gfn_isNull = function (sValue)
        {
        	if (new String(sValue).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (sValue == null)
        	{
        		return true;
        	}

        	var v_ChkStr = new String(sValue);

        	if (v_ChkStr == null)
        	{
        		return true;
        	}
        	if (v_ChkStr.toString().length == 0)
        	{
        		return true;
        	}

        	return false;
        };

        /************************************************************************************************
         * Function Name: gfn_lPad
         * Description  : 자리수 만큼 왼쪽에 문자열 추가
         * Arguments    : sOrg - 원래 문자열
         sPad - Pad할 문자열
         nCnt - 자리수
         * Return       : String Pad된 문자열
         *************************************************************************************************/
        this.gfn_lPad = function (sOrg, sPad, nCnt)
        {
        	var i;
        	var nLength;
        	var sRet = "";

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}

        	if (this.gfn_isNull(sPad))
        	{
        		sPad = " ";
        	}

        	if (this.gfn_isNull(nCnt))
        	{
        		nCnt = 1;
        	}

        	for (i = 0; i < nCnt; i++)
        	{
        		sRet += sPad;
        	}

        	sRet += sOrg;

        	nLength = this.gfn_length(sOrg) > nCnt ? this.gfn_length(sOrg) : nCnt;

        	return this.gfn_right(sRet, nLength);
        };

        /************************************************************************************************
         * Function Name: gfn_length
         * Description  : 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
         * Arguments    : Val - 문자열
         * Return       : Integer Type에 따라 구해진 길이
         *************************************************************************************************/
        this.gfn_length = function (Val)
        {
        	return this.gfn_toString(Val).length;
        };

        /************************************************************************************************
         * Function Name: gfn_left
         * Description  : 문자열의 왼쪽부분을 지정한 길이만큼 Return
         * Arguments    : Val - 왼쪽 부분을 얻어올 원본 문자열
         nSize - 얻어올 크기. [Default Value = 0]
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_left = function (Val, nSize)
        {
        	return this.gfn_toString(Val).substr(0, nSize);
        };

        /************************************************************************************************
         * Function Name: gfn_right
         * Description  : 문자열의 오른쪽부분을 지정한 길이만큼 Return
         * Arguments    : Val - 오른 부분을 얻어올 원본 문자열
         nSize - 얻어올 크기. [Default Value = 0]
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_right = function (Val, nSize)
        {
        	var nStart = this.gfn_toString(Val).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = Val.substring(nStart, nEnd);

        	return rtnVal;
        };

        /************************************************************************************************
         * Function Name: gfn_toString
         * Description  : 입력값을 String으로 변경
         * Arguments    : Val - 문자열
         * Return       : String 문자열
         *************************************************************************************************/
        this.gfn_toString = function (Val)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return new String();
        	}

        	return new String(Val);
        };

        /************************************************************************************************
         * Function Name: gfn_today
         * Description  : 해당 PC의 오늘 날짜를 가져온다.
         * Arguments    :
         * Return       : string 오늘 날짜
         *************************************************************************************************/
        this.gfn_today = function ()
        {
        	var sToday = "";
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + "";
        	var sMonth = objDate.getMonth() + 1;
        	var sDate = objDate.getDate();

        	if (sMonth.toString().length == 1)
        	{
        		sMonth = "0" + sMonth;
        	}

        	if (sDate.toString().length == 1)
        	{
        		sDate = "0" + sDate;
        	}

        	sToday = sToday + sMonth + sDate;

        	return sToday;
        };

        /************************************************************************************************
         * Function Name: gfn_addDate
         * Description  : 입력된 날자에 OffSet 으로 지정된 만큼의 일을 더한다.
         * Arguments    : sDate   - 일자(yyyyMMdd)
         nOffSet - 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * Return       : string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자
         *************************************************************************************************/
        this.gfn_addDate = function (sDate, nOffSet)
        {
        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2));
        	var nDate = parseInt(sDate.substr(6, 2)) + nOffSet;

        	return this.gfn_dateTime(nYear, nMonth, nDate);
        };

        /************************************************************************************************
         * Function Name: gfn_addMonth
         * Description  : 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
         * Arguments    : sDate  - 일자(yyyyMMdd)
         nOffSet  - 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * Return       : string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자
         *************************************************************************************************/
        this.gfn_addMonth = function (sDate, nOffSet)
        {
        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2)) + nOffSet;
        	var nDate = parseInt(sDate.substr(6, 2));

        	return this.gfn_dateTime(nYear, nMonth, nDate);
        };

        /************************************************************************************************
         * Function Name: gfn_dateTime
         * Description  : MiPlatform에서 사용하던 Datetime형식으로 변환 Date Type을 String으로 변환
         * Arguments    : nYear  - nYear (년도)
         nMonth - nMonth (월)
         nDate  - nDate (일)
         * Return       : string 조합한 날짜를 리턴
         *************************************************************************************************/
        this.gfn_dateTime = function (nYear, nMonth, nDate)
        {
        	if (nYear.toString().trim().length >= 5)
        	{
        		var sDate = new String(nYear);
        		var nYear = sDate.substr(0, 4);
        		var nMonth = sDate.substr(4, 2);
        		var nDate = ((sDate.substr(6, 2) == "") ? 1 : sDate.substr(6, 2));
        		var nHours = ((sDate.substr(8, 2) == "") ? 0 : sDate.substr(8, 2));
        		var nMinutes = ((sDate.substr(10, 2) == "") ? 0 : sDate.substr(10, 2));
        		var nSeconds = ((sDate.substr(12, 2) == "") ? 0 : sDate.substr(12, 2));
        		var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(nDate), parseInt(nHours), parseInt(nMinutes), parseInt(nSeconds));
        	}
        	else
        	{
        		var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(((nDate == null) ? 1 : nDate)));
        	}

        	var strYear = (objDate.getYear()).toString();
        	var strMonth = (objDate.getMonth() + 1).toString();
        	var strDate = objDate.getDate().toString();

        	if (strYear.length == 1)
        	{
        		strYear = "0" + strYear;
        	}

        	if (strMonth.length == 1)
        	{
        		strMonth = "0" + strMonth;
        	}

        	if (strDate.length == 1)
        	{
        		strDate = "0" + strDate;
        	}

        	return strYear + strMonth + strDate;
        };

        /************************************************************************************************
         * Function Name: gfn_getDiffDay
         * Description  : 2개의 날짜간의 Day count
         * Arguments    : sFdate - 시작일자
         sTdate - 종료일자
         * Return       : string 양 일자간의 Day count
         *************************************************************************************************/
        this.gfn_getDiffDay = function (sFdate, sTdate)
        {
        	sFdate = new String(sFdate);
        	sFdate = sFdate.split(" ").join("").split("-").join("").split("/").join("");
        	sTdate = new String(sTdate);
        	sTdate = sTdate.split(" ").join("").split("-").join("").split("/").join("");

        	sFdate = this.gfn_left(sFdate, 8);
        	sTdate = this.gfn_left(sTdate, 8);

        	if (sFdate.length != 8 || sTdate.length != 8
        		 || nexacro.isNumeric(sFdate) == false || nexacro.isNumeric(sTdate) == false
        		 || this.gfn_getDay(sFdate) == -1 || this.gfn_getDay(sTdate) == -1)
        	{
        		return null;
        	}

        	var nDiffDate = this.gfn_strToDate(sTdate) - this.gfn_strToDate(sFdate);
        	var nDay = 1000 * 60 * 60 * 24;

        	nDiffDate = parseInt(nDiffDate / nDay);

        	if (nDiffDate < 0)
        	{
        		nDiffDate = nDiffDate - 1;
        	}
        	else
        	{
        		nDiffDate = nDiffDate + 1;
        	}

        	return nDiffDate;
        };

        /************************************************************************************************
         * Function Name: gfn_strToDate
         * Description  : String 타입의 형식을 날짜형식으로 변환
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : Date 날자
         *************************************************************************************************/
        this.gfn_strToDate = function (sDate)
        {
        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2)) - 1;
        	var nDate = parseInt(sDate.substr(6, 2));

        	return new Date(nYear, nMonth, nDate);
        };

        /************************************************************************************************
         * Function Name: gfn_getYearMonth
         * Description  : 해당년월 구하기
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : string yyyyMM형태의 년월 ( 예 : "201211" )
         *************************************************************************************************/
        this.gfn_getYearMonth = function (sDate)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		sDate = this.gfn_today();
        	}

        	return sDate.substr(0, 6);
        };

        /************************************************************************************************
         * Function Name: gfn_getDay
         * Description  : 입력된 날자로부터 요일을 구함
         * Arguments    : sDate  - 일자(yyyyMMdd)
         * Return       : Integer 요일에 따른 숫자
         *************************************************************************************************/
        this.gfn_getDay = function (sDate)
        {
        	var objDate = this.gfn_strToDate(sDate);

        	return objDate.getDay();
        };

        this.getWeekOfYear = function(date)
        {
        	date = this.gfn_strToDate(date);

        	var onejan = new Date();

        	onejan.setYear(date.getFullYear());
        	onejan.setMonth(0);
        	onejan.setDate(1);

        	return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
        }

        /*********************************************************************
        * 함 수 명 	: gfn_Null
        * 함수설명 	: NULL 여부 체크
        * 입    력 	: 문자열
        * 결    과 	: Boolean형의 여부	- null = true, Not Null = false
        *********************************************************************/
        this.gfn_Null = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;
            var v_ChkStr = new String(sValue);

            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0 ) return true;

            return false;
        }

        /***********************************************************
        			Grid Sort
        ***********************************************************/
        /************************************************************************************************
         * Even   : gfn_GetBodyCellIndex
         * Desc   : head cell에 match되는 body cell 가져오기
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} headCellIndex head cell index
         * Return : {boolean} Cell Index
         ************************************************************************************************/
        this.gfn_GetBodyCellIndex = function(grid, headCellIndex)
        {
        	// Max Head Row Index
        	var maxHeadRow = 0;

        	for (var i = 0, len = grid.getCellCount("head"); i < len; i++)
        	{
        		var row = grid.getCellProperty("head", i, "row");
        		if (maxHeadRow < row)
        		{
        			maxHeadRow = row;
        		}
        	}
        	// Max Body Row Index
        	var maxBodyRow = 0;
        	for (var i=0, len=grid.getCellCount("body"); i<len; i++)
        	{
        		var row = grid.getCellProperty("body", i, "row");

        		if (maxBodyRow < row) {
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0) {
        		return headCellIndex;
        	}

        	// Body Row 가 1개 이상일 경우
        	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
        	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
        	var cellIndex = -1;
        	var sRow = -1;
        	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
        	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
        	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));

        	if (maxHeadRow > maxBodyRow) {
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	} else {
        		sRow = nRow;
        	}

        	var cRow, cCol, cColspan;

        	for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
        	{
        		cRow = parseInt(grid.getCellProperty("body", i, "row"));
        		cCol = parseInt(grid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

        		// 실제로 매칭되는 body cell 이 없지만 colspan으로 첫번째 항목을 찾을 경우..
        		if (sRow == cRow && nCol == cCol && nColspan == cColspan) {
        			cellIndex = i;

        			break;
        		}
        	}

        	return cellIndex;
        }

        /************************************************************************************************
         * Even   : gfn_GetBindColumnNameByIndex
         * Desc   : body cell index로 binding 된 컬럼명 가져오기
         * Param : {grid} 대상 Grid Component
                        {index} body cell index
         ************************************************************************************************/
        this.gfn_GetBindColumnNameByIndex = function(grid, index)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = grid.getCellProperty("body", index, "subcell");

        	if (subCell > 0) {
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	} else {
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if (!this.gfn_Null(text))
        	{
        		if (text.search(/^BIND\(/) > -1) {
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		} else if ( text.search(/^bind:/) > -1 ) {
        				columnid = text.replace(/^bind:/, "");
        		}
        	}

        	return columnid;
        }

        /************************************************************************************************
         * Even   : gfn_SetSortStatus
         * Desc   : 정렬 상태 셋팅 (실제 정렬 처리는 gfn_ExecuteSort 에서 담당)
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} headCellIndex head cell index
                        {isMultiple} 다중선택여부
                        {sortStatus} 정렬상태 강제 지정 (미지정시 현재 상태 반전)
         * Return : {boolean} 상태 변경 여부
         ************************************************************************************************/
        this.gfn_SetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus)
        {
        	// Cell별 정렬정보
        	if (this.gfn_IsNull(grid.cellInfos))
        	{
        		grid.cellInfos = {};
        	}

        	// 정렬대상컬럼 (순서중요)
        	if (this.gfn_IsNull(grid.sortItems))
        	{
        		grid.sortItems = [];
        	}

        	var bodyCellIndex = this.gfn_GetBodyCellIndex(grid, headCellIndex);

        	if (bodyCellIndex < 0)
        		return false;

        	var columnName = this.gfn_GetBindColumnNameByIndex(grid, bodyCellIndex);

        	var cellInfo, sortItem, cellInfos = grid.cellInfos, sortItems = grid.sortItems, status;

        	if (this.gfn_Null(columnName))
        	{
        		trace("Check Grid body cell bind value");
        		return false;
        	}

        	if (this.gfn_Null(isMultiple))
        		isMultiple = false;

        	if (this.gfn_Null(sortStatus))
        		sortStatus = -1;

        	cellInfo = cellInfos[columnName];

        	if (this.gfn_Null(cellInfo))
        	{
        		var headText = grid.getCellText(-1, headCellIndex);
        		cellInfo = cellInfos[columnName] = { index: headCellIndex, status: 0, text: headText };
        	}

        	// set sort status
        	if (isMultiple)
        	{
        		status = cellInfo.status;

        		if (sortStatus == -1)
        		{
        			if (status == 0)
        			{
        				cellInfo.status = 1;
        			}
        			else if (status == 1)
        			{
        				cellInfo.status = 2;
        			}
        			else if (status == 2)
        			{
        				cellInfo.status = 1;
        			}
        		}
        		else
        		{
        			cellInfo.status = sortStatus;
        		}
        	}
        	else
        	{
        		for (var p in cellInfos)
        		{
        			if (!cellInfos.hasOwnProperty(p))
        				return;

        			cellInfo = cellInfos[p];

        			if (cellInfo.index == headCellIndex)
        			{
        				status = cellInfo.status;

        				if (sortStatus == -1)
        				{
        					if (status == 0)
        					{
        						cellInfo.status = 1;
        					}
        					else if (status == 1)
        					{
        						cellInfo.status = 2;
        					}
        					else if (status == 2)
        					{
        						cellInfo.status = 1;
        					}
        				}
        				else
        				{
        					cellInfo.status = sortStatus;
        				}
        			}
        			else
        			{
        				cellInfo.status = 0;
        			}

        			if (cellInfo.status == 0)
        			{
        				for (var j = 0, len2 = sortItems.length; j < len2; j++)
        				{
        					if (sortItems[j] !== columnName)
        					{
        						sortItems.splice(j, 1);

        						break;
        					}
        				}
        			}
        		}
        	}

        	var hasItem = false;

        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		if (sortItems[i] == columnName)
        		{
        			hasItem = true;
        			break;
        		}
        	}

        	if (!hasItem)
        	{
        		sortItems.push(columnName);
        	}

        	return true;
        }

        /************************************************************************************************
         * Even   : gfn_ExecuteSort
         * Desc   : 정렬 적용
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.gfn_ExecuteSort = function(grid)
        {
        	var cellInfo, sortItem,
        	cellInfos = grid.cellInfos,
        	sortItems = grid.sortItems,
        	columnName, headCellIndex,
        	status, sortString = "";

        	if (this.gfn_Null(cellInfos) || this.gfn_Null(sortItems))
        		return;

        	// keystring 조합
        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		columnName = sortItems[i];
        		status = cellInfos[columnName].status;

        		if (status > 0) {
        			sortString += (status == 1 ? "+" : "-") + columnName;
        		}
        	}

        	var nCellIdx = grid.getBindCellIndex("body", columnName)

        	if(this.varFlag == "-" &&  nCellIdx == this.colIdx1)
        	{
        		this.varFlag="";
        		this.gfn_ClearSort(grid, nCellIdx);
        		return;
        	}

        	var ds = this.gfn_Lookup(grid.parent, grid.binddataset);

        	// keystring 확인
        	var curKeyString = ds.keystring;
        	var groupKeyString = "";

        	if (curKeyString.length > 0 && curKeyString.indexOf(",") < 0)
        	{
        		var sIndex = curKeyString.indexOf("S:");
        		var gIndex = curKeyString.indexOf("G:");

        		if (sIndex > -1)
        		{
        			groupKeyString = "";
        		}
        		else
        		{
        			if (gIndex < 0)
        			{
        				groupKeyString = "G:"+curKeyString;
        			}
        			else
        			{
        				groupKeyString = curKeyString;
        			}
        		}
        	}
        	else
        	{
        		var temps = curKeyString.split(",");
        		var temp;

        		for (var i = 0, len = temps.length; i < len; i++)
        		{
        			temp = temps[i];

        			if (temp.length > 0 && temp.indexOf("S:") < 0)
        			{
        				if (temp.indexOf("G:") < 0) {
        					groupKeyString = "G:"+temp;
        				} else {
        					groupKeyString = temp;
        				}
        			}
        		}
        	}

        	if (sortString.length > 0)
        	{
        		var sortKeyString = "S:" + sortString;

        		if (groupKeyString.length > 0)
        		{
        			ds.set_keystring(sortKeyString + "," + groupKeyString);
        		}
        		else
        		{
        			ds.set_keystring(sortKeyString);
        		}

        		grid.sortKeyString = sortKeyString;
        	}
        	else
        	{
        		ds.set_keystring(groupKeyString);

        		grid.sortKeyString = "";
        	}

        	this.varFlag = ds.keystring.substr(2, 1);
        	this.colIdx1 = grid.getBindCellIndex("body", columnName);

        	// 정렬표시
        	var index, text, marker, style;

        	for (var p in cellInfos)
        	{
        		if (!cellInfos.hasOwnProperty(p))
        			return;

        		cellInfo = cellInfos[p];
        		status = cellInfo.status;
        		index = cellInfo.index;
        		text = cellInfo.text;

        		marker = this.gfn_Decode(status, 1, this.MARKER[0], 2, this.MARKER[1], "");

        		if (this.MARKER_TYPE == "text")
        		{
        			if(this.gfn_Null(marker)==true)
        			{
        				grid.setCellProperty( "head", index, "text", text);
        			}
        			else
        			{
        				grid.setCellProperty( "head", index, "text", text + marker);
        			}
        		}
        		else if (this.MARKER_TYPE == "image")
        		{
        			var background = marker + " 50 5";
        		}
        	}
        }

        /************************************************************************************************
         * Even   : gfn_ClearSort
         * Desc   : 주어진 head cell 에 해당하는 정렬 상태 제거
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} head cell index
         ************************************************************************************************/
        this.gfn_ClearSort = function(grid, headCellIndex)
        {
        	this.arrHeadClickIdx[headCellIndex] = 0;

        	var bodyCellIndex = this.gfn_GetBodyCellIndex(grid, headCellIndex);

        	if (bodyCellIndex < 0) return;

        	var columnName = this.gfn_GetBindColumnNameByIndex(grid, bodyCellIndex), cellInfos = grid.cellInfos, sortItems = grid.sortItems;

        	if (this.gfn_Null(cellInfos) || this.gfn_Null(sortItems)) return;

        	if (this.gfn_Null(columnName) || this.gfn_Null(cellInfos[columnName])) return;

        	// 정렬상태를 변경
        	cellInfos[columnName].status = 0;

        	// 정렬실행
        	this.gfn_ExecuteSort(grid);

        	// 컬럼정보제거
        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		if (sortItems[i] == columnName) {
        			sortItems.splice(i, 1);
        			break;
        		}
        	}

        	// Cell 정보제거
        	delete cellInfos[columnName];
        }

        /************************************************************************************************
         * Even   : gfn_Lookup
         * Desc   : 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * Param : {p} 찾을 대상
                        {name} id 앞에 붙일 문자열
         * Return : {string} 검색된 component object
         ************************************************************************************************/
        this.gfn_Lookup = function(p, name)
        {
        	var o;

        	while (p)
        	{
        		o = p.components;

        		if (o && o[name]) return o[name];

        		o = p.objects;

        		if (o && o[name]) return o[name];

        		p = p.parent;
        	}

        	return null;
        }

        /************************************************************************************************
         * Even   : gfn_Decode
         * Desc   : 입력된 값 또는 수식을 검사해 적당한 값을 Return
         * Param : 1. 비교값
                        2. CASE
        				3. 결과값 (2, 3 반복)
        				(2, 3 반복)
        				4. 디폴트값
        				디
         * Return : decode에 의해서 선택된 값
         ************************************************************************************************/
        this.gfn_Decode = function()
        {
        	var i;
        	var count = arguments.length;

        	for (i = 1 ; i < count ; i += 2)
        	{
        		if (arguments[0] == arguments[i]) {
        			return arguments[i + 1];
        		}
        	}

        	return arguments[i - 2];
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
