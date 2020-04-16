//XJS=comLib_Grid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /************************************************************************************************
         * Name     : comLib_Grid.xjs
         * Title    : Grid 관련 함수
         * Desc     : Grid 관련 함수
         * 작성자	: 투비소프트
         * 작성일	: 2018-04-05
         *************************************************************************************************
         *      수정일          이름          사유
         *************************************************************************************************
         *    2018.04.05        투비소프트       최초작성
         ************************************************************************************************/

        /************************************************************************************************
         ● gfn_gridSort           : 그리드의 Sort를 처리
         ● gfn_clearSortMark      : 그리드의 Sort Mark 제거
         ● gfn_setGridCheckAll    : 전체 row에 대한 check/uncheck 설정 함수
         ● gfn_getBodyCellIndex   : head cell에 match되는 body cell을 얻어오는 함수
         ● gfn_getBindColName     : body cell index로 binding 된 컬럼명을 얻어오는 함수
         ● gfn_form_ontimer       : gfn_form_ontimer
         *************************************************************************************************/
        // 헤더 클릭시 정렬
        this.lv_constAscMark = "▼";
        this.lv_constDescMark = "▲";
        this.lv_constSortFlag = false;

        var lv_IsGridCheckAll = 0;

        this.lv_nTotalPage1;

        /************************************************************************************************
         * functionName: gfn_gridSort
         * Description  : 그리드의 Sort를 처리한다.
         * Arguments    : object Grid, GridClickEventInfo e
         * Return       : None
         *************************************************************************************************/
        this.gfn_gridSort = function (obj, e)
        {
        	// 컬럼의 정렬방식을 'head'의 text에 "↑,↓"여부로 판단 (이미지로 대체가능)
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	var i;

        	if (strType == "checkbox")
        	{
        		return;
        	}

        	var bindDs = this.objects[obj.binddataset];
        	if (bindDs.rowcount == 0)
        	{
        		return false;
        	}

        	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");

        	bindDs.set_enableevent(false);

        	for (i = 0; i < obj.getCellCount("head"); i++)
        	{
        		if (obj.getCellText(-1, i) == "undefined")
        		{
        			continue;
        		}

        		var strHeadText = obj.getCellText(-1, i);
        		if (i == e.cell)
        		{
        			if (strHeadText.substr(strHeadText.length - 1) == this.lv_constAscMark)
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.lv_constDescMark);
        				bindDs.set_keystring(("S:-" + BodyColId[1]));
        			}
        			else if (strHeadText.substr(strHeadText.length - 1) == this.lv_constDescMark)
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.lv_constAscMark);
        				bindDs.set_keystring(("S:+" + BodyColId[1]));
        			}
        			else
        			{
        				obj.setCellProperty("head", i, "text", strHeadText + this.lv_constAscMark);
        				bindDs.set_keystring(("S:+" + BodyColId[1]));
        			}
        		}
        		else
        		{
        			// 정렬표시 삭제
        			if (strHeadText.substr(strHeadText.length - 1) == this.lv_constAscMark || strHeadText.substr(strHeadText.length - 1) == this.lv_constDescMark)
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1));
        			}
        		}
        	}

        	bindDs.set_enableevent(true);
        };

        /************************************************************************************************
         * functionName: gfn_clearSortMark
         * Description  : 그리드의 Sort Mark 제거
         * Arguments    : grdObj: Grid, nCell: cell index
         * Return       : None
         *************************************************************************************************/
        this.gfn_clearSortMark = function (obj, nCell)
        {
        	var nCellCnt = objGrid.getCellCount('head');
        	var objDataset = objGrid.getBindDataset();

        	// Dataset Sort Clear
        	objDataset.set_keystring("");

        	for (var i = 0; i < objGrid.getCellCount("head"); i++)
        	{
        		if (objGrid.getCellText(-1, i) == "undefined")
        		{
        			continue;
        		}

        		var strHeadText = objGrid.getCellText(-1, i);

        		// 정렬표시 삭제
        		if (strHeadText.substr(strHeadText.length - 2) == this.lv_constAscMark || strHeadText.substr(strHeadText.length - 2) == this.lv_constDescMark)
        		{
        			objGrid.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 2));
        		}
        	}
        };

        /************************************************************************************************
         * functionName	: gfnSetGridCheckAll
         * Desc			: Grid Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체
         row에 대한 check/uncheck 설정 함수
         * Parameter	: obj - Grid
         *				  e   - GridClickEventInfo
         * Return 		: 없음
         *************************************************************************************************/
        this.gfn_setGridCheckAll = function (obj, e)
        {
        	var i;
        	var dsObj = eval("this." + obj.binddataset);
        	var v_Colid = obj.getCellProperty("body", e.cell, "text").split("bind:").join("");

        	this.lv_IsGridCheckAll = (this.lv_IsGridCheckAll ? 0 : 1);

        	dsObj.set_enableevent(false);

        	for (i = 0; i < dsObj.getRowCount(); i++)
        	{
        		dsObj.setColumn(i, v_Colid, this.lv_IsGridCheckAll);
        	}

        	obj.setCellProperty("Head", e.cell, "expr", this.lv_IsGridCheckAll);
        	dsObj.set_enableevent(true);
        };

        /************************************************************************************************
         * functionName	: gfn_getBodyCellIndex
         * Desc			: body cell에 match되는 body cell을 얻어온다
         * Parameter	: grid          - grid 대상 Grid Component
         *				  headCellIndex - headCellIndex head cell index
         * Return 		: 없음
         *************************************************************************************************/
        this.gfn_getBodyCellIndex = function (grid, headCellIndex)
        {
        	// Max Head Row Index
        	var maxHeadRow = 0;
        	for (var i = 0,len = grid.getCellCount("head"); i < len; i++)
        	{
        		var row = grid.getCellProperty("head", i, "row");
        		if (maxHeadRow < row)
        		{
        			maxHeadRow = row;
        		}
        	}

        	// Max Body Row Index
        	var maxBodyRow = 0;
        	for (var i = 0,len = grid.getCellCount("body"); i < len; i++)
        	{
        		var row = grid.getCellProperty("body", i, "row");
        		if (maxBodyRow < row)
        		{
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0)
        	{
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

        	if (maxHeadRow > maxBodyRow)
        	{
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	}
        	else
        	{
        		sRow = nRow;
        	}

        	var cRow,cCol,cColspan;
        	for (var i = 0,len = grid.getCellCount("body"); i < len; i++)
        	{
        		cRow = parseInt(grid.getCellProperty("body", i, "row"));
        		cCol = parseInt(grid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

        		// 실제로 매칭되는 body cell 이 없지만 colspan으로 첫번째 항목을 찾을 경우..
        		// if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan))
        		if (sRow == cRow && nCol == cCol && nColspan == cColspan)
        		{
        			cellIndex = i;
        			break;
        		}
        	}

        	return cellIndex;
        };

        /************************************************************************************************
         * functionName	: gfn_getBindColName
         * Desc			: body cell index로 binding 된 컬럼명을 얻어온다.
         * Parameter	: grid  - grid 대상 Grid Component
         *				  index - index body cell index
         * Return 		: 없음
         *************************************************************************************************/
        this.gfn_getBindColName = function (grid, index)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = grid.getCellProperty("body", index, "subcell");

        	if (subCell > 0)
        	{
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	}
        	else
        	{
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if (!this.gfn_isEmpty(text))
        	{
        		if (text.search(/^BIND\(/) > -1)
        		{
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length - 1);
        		}
        		else if (text.search(/^bind:/) > -1)
        		{
        			columnid = text.replace(/^bind:/, "");
        		}
        	}

        	return columnid;
        };

        /************************************************************************************************
         * Function Name: gfn_form_ontimer
         * Description  :
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.gfn_gfn_form_ontimer = function (obj, e)
        {
        	if (e.timerid == 1)
        	{
        		this.killTimer(1);
        		this.targetDiv.edFilterString00.setFocus();
        		this.targetDiv.edFilterString.setFocus();
        	}
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
