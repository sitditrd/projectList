/**
 * @fileoverview 그리드 헤드 추가 필터 기능 라이브러리
 */

/**
 * Filter 가능 표시 이미지 URL
 * @type {String}
 * @const
 */
nxlib.grid.HEAD_APPEND_FILTER_ENABLE_IMAGE_URL = "img::Grid/grd_filter_combo.png";

/**
 * Filter 가능 표시 이미지 크기<br>
 * [가로, 세로]
 * @type {Array}
 * @const
 */
nxlib.grid.HEAD_APPEND_FILTER_ENABLE_IMAGE_SIZE = [21, 20];

/**
 * Filter 적용 표시 이미지 URL
 * @type {String}
 * @const
 */
nxlib.grid.HEAD_APPEND_FILTER_APPLY_IMAGE_URL = "img::Grid/grd_filter_check.png";

/**
 * Filter 적용 표시 이미지 크기<br>
 * [가로, 세로]
 * @type {Array}
 * @const
 */
nxlib.grid.HEAD_APPEND_FILTER_APPLY_IMAGE_SIZE = [21, 20];

/**
 * Grid head에 filer 기능 추가하기 초기화
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridHeadAppendFilter = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridHeadAppendFilter) return;

    // 필터영역(Div) 를 담아둘 속성 추가
    if (nexacro._isUndefined(grid.makeCompList))
    {
        grid.makeCompList = [];
    }

    // 필터적용 정보를 담아둘 속성 추가
    if (nexacro._isUndefined(grid.filterItems))
    {
        grid.filterItems = {};
    }

    grid.pForm = form;
    grid.showGridFilter = false;

    // add ondragmove handler
    grid.addEventHandler("ondragmove", nxlib.grid.filterGridOnDragMoveHandler, form);

    // add ondrop handler
    grid.addEventHandler("ondrop", nxlib.grid.headAppendFilterOnDropHandler, form);

    // add onlbuttonup handler
    grid.addEventHandler("onlbuttonup", nxlib.grid.headAppendFilterOnLButtonUpHandler, form);

    // add onmousemove handler
    grid.addEventHandler("onmousemove", nxlib.grid.headAppendFilterOnMouseMoveHandler, form);

    // add onhscroll handler
    grid.addEventHandler("onhscroll", nxlib.grid.headAppendFilterOnHScrollHandler, form);

    // add onsize handler
    grid.addEventHandler("onsize", nxlib.grid.headAppendFilterOnSizeHandler, form);

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (!Eco.isEmpty(ds) && ds.findRow("id", "filterCancel") == -1)
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "filter");
        ds.setColumn(row, "id", "showFilter");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "필터추가");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "filter");
        ds.setColumn(row, "id", "hideFilter");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "필터제거");
        ds.setColumn(row, "enable", "false");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "filter");
        ds.setColumn(row, "id", "filterCancel");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "필터취소");
        ds.setColumn(row, "enable", "false");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorFilter");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.initGridHeadAppendFilter = true;
}

/**
 * ondragmove Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {GridDragEventInfo} e GridDragEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.filterGridOnDragMoveHandler = function(obj, e)
{
    // cell moving 을 체크하기 위해 내부 속성 확인...
    if (obj._movingcell)
    {
        var curCol = e.col;
        var col, colspan;
        var merged = false;
        var movingStartCol = obj._movingcell._refobj._col;
        var movingEndCol = curCol;

        // 병합된 cell 이 존재하는 col 에 들어올 수 없으므로 체크
        for (var i = 0, len = obj.getCellCount("head"); i < len; i++)
        {
            colspan = obj.getCellProperty("head", i, "colspan") - 1;

            if (colspan > 0)
            {
                col = obj.getCellProperty("head", i, "col");

                if ((col <= curCol && curCol <= (col + colspan)) || ((col + colspan) <= curCol && curCol <= col))
                {
                    if (movingStartCol > movingEndCol)
                    {
                        movingEndCol = col;
                    }
                    else
                    {
                        movingEndCol = (col + colspan);
                    }
                    break;
                }
            }
        }

        if (movingStartCol != movingEndCol)
        {
            obj.isMovingCell = true;
            obj.movingStartCol = movingStartCol;
            obj.movingEndCol = movingEndCol;
            return;
        }
    }

    obj.isMovingCell = false;
}

/**
 * ondrop Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {GridDragEventInfo} e GridDragEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.headAppendFilterOnDropHandler = function(obj, e)
{
    // onformatchanged 기능이 현재 없어서 movecell 이 발생될 때를 알 수 없다.
    // 따라서 ondrop 에서 내부 속성값을 체크하여 기능처리
    var s = e.sourcereferenceobject;
    var f = e.fromreferenceobject;

    if (s._type_name == "GridCell" && f._type_name == "GridCell")
    {
        if (s.parent == f.parent && s._cellidx != f._cellidx)
        {
            nxlib.grid.arrangeFilterComps(obj.pForm, obj);
        }
    }
}

/**
 * onlbuttonup Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {GridMouseEventInfo} e GridMouseEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.headAppendFilterOnLButtonUpHandler = function(obj, e)
{
    // oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
    var resizer = obj._resizer_elem;
    if (obj.colResizing && resizer && resizer._movedPos != 0)
    {
        nxlib.grid.arrangeFilterComps(obj.pForm, obj);
    }
}

/**
 * onmousemove Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {GridMouseEventInfo} e GridMouseEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.headAppendFilterOnMouseMoveHandler = function(obj, e)
{
    // oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
    var resizer = obj._resizer_elem;
    if (resizer && resizer._is_tracking)
    {
        obj.colResizing = true;
    }
    else
    {
        obj.colResizing = false;
    }
}

/**
 * onhscroll Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {ScrollEventInfo} e ScrollEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.headAppendFilterOnHScrollHandler = function(obj, e)
{
    nxlib.grid.arrangeFilterComps(obj.pForm, obj);
}

/**
 * onsize Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {SizeEventInfo} e SizeEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.headAppendFilterOnSizeHandler = function(obj, e)
{
    nxlib.grid.arrangeFilterComps(obj.pForm, obj);
}

/**
 * Grid head append filter 보이기
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.showGridFilter = function(form, grid)
{
    if (grid.showGridFilter) return;

    var rowIdx = grid.appendContentsRow("head");

    // 추가된 head row index를 담아두자.
    grid.appendHeadRowIndex = rowIdx;

    nxlib.grid.arrangeFilterComps(form, grid);

    grid.showGridFilter = true;
}

/**
 * Grid head append filter 숨기기 (필터제거 포함)
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.hideGridFilter = function(form, grid)
{
    if (!grid.showGridFilter) return;

    var index = grid.appendHeadRowIndex;
    if (!nexacro._isUndefined(index))
    {
        grid.deleteContentsRow("head", index);

        // Div 숨기기 및 값 초기화
        var comps = grid.parent.components;
        var comp, list = grid.makeCompList;
        for (var i = 0, len = list.length; i < len; i++)
        {
            comp = comps[list[i]];
            if (comp)
            {
                comp.set_visible(false);
                comp.initValue();
            }
        }

        // 데이터셋 필터 제거
        var ds = grid.getBindDataset();
        ds.filter("");

        grid.appendHeadRowIndex = null;
    }

    grid.filterItems = {};

    grid.showGridFilter = false;
}

/**
 * Grid head append filter 기능에 필요한 컴포넌트 생성 및 위치 조정
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.arrangeFilterComps = function(form, grid)
{
    var index = grid.appendHeadRowIndex;
    var rect, rects = [];
    var cellCnt = grid.getCellCount("Head");
    var bodyCellIndex, column, comp, name, type;
    var l, t, w, h;
    var list = grid.makeCompList;
    var gridLeftPos = grid.getOffsetLeft();
    var gridTopPos = grid.getOffsetTop();
    var gridPos = [gridLeftPos, gridTopPos, gridLeftPos + grid.getOffsetWidth(), gridTopPos + grid.getOffsetBottom()];
    var first = true;
    var col, band, pivotIndex;

    // 각 cell 영역에 필터 입력 영역 생성
    for (var i = 0; i < cellCnt; i++)
    {
        if (grid.getCellProperty("head", i, "row") == index)
        {
            col = grid.getCellProperty("head", i, "col");
            band = grid.getFormatColProperty(col, "band");
            pivotIndex = Eco.decode(band, "left", -1, "right", -2, 0);
            rect = grid.getCellRect(-1, i, pivotIndex);
            bodyCellIndex = nxlib.grid.getBodyCellIndex(grid, i);
            column = nxlib.grid.getBindColumnNameByIndex(grid, bodyCellIndex);
            type = grid.getCellProperty("body", bodyCellIndex, "displaytype");

            if (nexacro._isUndefined(type)) type = "normal";

            name = Eco.getUniqueId(grid.name + "_headAppendComp");

            var borderWidths = nxlib.grid.getBorderWidth(grid);

            l = gridPos[0] + rect.left;
            t = gridPos[1] + rect.top + borderWidths[1];
            w = rect.width - 1;
            h = rect.height - 1;

            // 컴포넌트가 존재하지 않으면 추가
            if (list.indexOf(name) < 0)
            {
                list.push(name);
                comp = new Div(name, "absolute", l, t, w, h);
                comp.style.set_border("0px none white");
                comp.set_scrollbars("none");
                comp.set_async(false);
                comp.set_visible(false);
                //comp.style.set_background("red");
                form.addChild(comp.name, comp);

                comp.set_url("comm::GridFilterDiv.xfdl");

                comp.show();
            }
            else
            {
                comp = form.components[name];
            }

            // Div에 참조값 지정
            comp.grid = grid;
            comp.headCellIndex = i;
            comp.bodyCellIndex = bodyCellIndex;
            comp.filterType = type;
            comp.filterColumn = column;

            var filterItems = grid.filterItems;
            if (!Eco.isEmpty(filterItem))
            {
                var filterItem = filterItems[column];
                if (!Eco.isEmpty(filterItem))
                {
                    comp.filterData = filterItem.filterData;
                }
            }

            // 필터타입 지정
            comp.setFilterType();

            // 위치 조정
            if (l < gridPos[0])
            {
                l = gridPos[0];
            }

            if (l + grid.vscrollbar.getOffsetWidth() > gridPos[2])
            {
                comp.set_visible(false);
            }
            else
            {
                var scrollWidth = grid.vscrollbar.getOffsetWidth();
                if ((l + w) > gridPos[2] - scrollWidth)
                {
                    w = gridPos[2] - l;
                    if (grid.vscrollbar)
                    {
                        w = w - scrollWidth - 1;
                    }
                }
                comp.move(l + 1, t + 1, w, h);
                comp.set_visible(true);
            }
        }
    }

    var div = form.components[list[0]];
    if (!Eco.isEmpty(div)) div.setFocus();
}

/**
 * nexacro Component의 boder width를 리턴한다.
 * @param {object} comp nexacro Component
 * @return {array.<number>} [ leftWdith, topWdith, rightWdith, bottomWdith ]
 * @memberOf nxlib.grid
 */
nxlib.grid.getBorderWidth = function(comp)
{
    var currentBorder = comp.currentstyle.border;
    if (currentBorder)
    {
        var leftWidth = 0,
            topWidth = 0,
            rightWidth = 0,
            bottomWidth = 0;
        leftWidth = currentBorder.left_width;
        topWidth = currentBorder.top_width;
        rightWidth = currentBorder.right_width;
        bottomWidth = currentBorder.bottom_width;

        leftWidth = nexacro.toNumber(leftWidth.replace("px", ""));
        topWidth = nexacro.toNumber(topWidth.replace("px", ""));
        rightWidth = nexacro.toNumber(rightWidth.replace("px", ""));
        bottomWidth = nexacro.toNumber(bottomWidth.replace("px", ""));

        return [leftWidth, topWidth, rightWidth, bottomWidth];
    }
    else
    {
        return [0, 0, 0, 0];
    }
}

/**
 * Grid head append filter 기능에 추가된 컴포넌트 제거
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.removeFilterComps = function(grid)
{
    var form = grid.parent;
    var comps = form.components;
    var comp, list = grid.makeCompList;
    var removed;
    for (var i = 0, len = list.length; i < len; i++)
    {
        comp = comps[list[i]];
        if (comp)
        {
            removed = form.removeChild(comp.name);
            removed.destroy();
            removed = null;
        }
    }
}

/**
 * 현재 적용된 필터를 제거한다.
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.clearHeadAppendFilter = function(grid)
{
    // 데이터셋 필터 제거
    var ds = grid.getBindDataset();
    ds.filter("");

    // 정보 초기화
    grid.filterItems = {};

    var form = grid.pForm;

    for (var i = 0, len = form.components.length; i < len; i++)
    {
        var comp = form.components[i];
        if (comp.name.indexOf(grid.name + "_headAppendComp") > -1)
        {
            comp.clearFilterData();
        }
    }
}

/**
 * 필터 실행
 * @param {Grid} grid 대상 Grid Component
 * @param {number} headCellIndex head cell index
 * @param {string} filterString 적용할 조건식
 * @param {*=} filterData filter 조건 데이터
 * @memberOf nxlib.grid
 */
nxlib.grid.executeFilter = function(grid, headCellIndex, filterString, filterData)
{
    var bodyCellIndex = nxlib.grid.getBodyCellIndex(grid, headCellIndex);
    var column = nxlib.grid.getBindColumnNameByIndex(grid, bodyCellIndex);
    var ds = grid.getBindDataset();
    var filterItems = grid.filterItems;
    var filterItem = filterItems[column];

    // 선택 컬럼명의 필터정보 확인 및 지정
    if (nexacro._isUndefined(filterItem))
    {
        filterItem = filterItems[column] = {
            filterData: filterData,
            filterString: filterString
        };
    }
    else
    {
        filterItem.filterData = filterData;
        filterItem.filterString = filterString;
    }

    // 필터정보에서 필터스트링 조합
    var resultString = "";
    var tempString = "";
    for (var p in filterItems)
    {
        if (!filterItems.hasOwnProperty(p)) return;

        filterItem = filterItems[p];
        tempString = filterItem.filterString;

        if (!Eco.isEmpty(tempString))
        {
            resultString += (Eco.isEmpty(resultString) ? "" : " && ") + tempString;
        }
    }

    // 필터 적용
    ds.filter(resultString);
}

nxlib.grid.useHeadAppendFilter = true;