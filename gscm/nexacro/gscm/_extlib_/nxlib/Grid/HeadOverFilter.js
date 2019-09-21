/**
 * @fileoverview 그리드 헤드 오버 필터 기능 라이브러리
 */

/**
 * Filter 가능 표시 이미지 URL
 * @type {String}
 * @const
 */
nxlib.grid.HEAD_OVER_FILTER_ENABLE_IMAGE_URL = "img::Grid/grd_filter_combo.png";

/**
 * Filter 가능 표시 이미지 크기<br>
 * [가로, 세로]
 * @type {Array}
 * @const
 */
nxlib.grid.HEAD_OVER_FILTER_ENABLE_IMAGE_SIZE = [21, 20];

/**
 * Filter 적용 표시 이미지 URL
 * @type {String}
 * @const
 */
nxlib.grid.HEAD_OVER_FILTER_APPLY_IMAGE_URL = "img::Grid/grd_filter_check.png";

/**
 * Filter 적용 표시 이미지 크기<br>
 * [가로, 세로]
 * @type {Array}
 * @const
 */
nxlib.grid.HEAD_OVER_FILTER_APPLY_IMAGE_SIZE = [21, 20];

/**
 * Grid mouseover 시 filter 버튼 보이기 초기화
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridHeadOverFilter = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridHeadOverFilter) return;

    // 필터 적용 표시를 위해 추가한 컴포넌트 name 목록 속성 추가
    grid.overFilterCompNameList = [];

    // 필터 정보를 담아둘 속성 추가
    grid.filterInfos = {};

    // add onmousemove handler - 마우스 이동 시 필터 가능 이미지 표시
    grid.addEventHandler("onmousemove", nxlib.grid.filterGridOnMouseMoveHandler, form);

    // add onhscroll handler - 가로 스크롤 발생 시 컴포넌트 재배치
    grid.addEventHandler("onhscroll", nxlib.grid.arrangeOverFilterComps, form);

    // 사용자에 의해 셀이 이동된 경우 필터 관련 컴포넌트 재배치
    nxlib.grid.setUserGridOnCellMoved(grid, nxlib.grid.arrangeOverFilterComps, form);

    // 사용자에 의해 컬럼 사이즈가 변경된 경우 필터 관련 컴포넌트 재배치
    nxlib.grid.setUserGridOnColResized(grid, nxlib.grid.arrangeOverFilterComps, form);

    // 필터 조건 팝업 컴포넌트 추가
    var form = grid.parent;
    var pdiv = form.overFilterPopupDiv;

    if (nexacro._isUndefined(pdiv))
    {
        var name = Eco.getUniqueId("pdiv_");

        pdiv = new PopupDiv();
        pdiv.init(name, "absolute", 0, 0, 200, 150);
        form.addChild(pdiv.name, pdiv);
        pdiv.set_url("comm::GridFilterPop.xfdl");
        pdiv.set_scrollbars("none");
        pdiv.style.set_background_color("#e8e8e8ff");
        pdiv.style.set_border("1px solid gray");
        pdiv.addEventHandler("oncloseup", nxlib.grid.filterPdivOnCloseUpHandler, form);
        pdiv.show();

        form.overFilterPopupDiv = pdiv;
    }

    // 필터 가능 표시 컴포넌트 추가 - 대상 그리드 별로 추가
    var img = new ImageViewer();
    var name = Eco.getUniqueId("img_");
    var imageSize = nxlib.grid.HEAD_OVER_FILTER_ENABLE_IMAGE_SIZE;

    img.init(name, "absolute", 0, 0, imageSize[0], imageSize[1]);
    img.style.set_background("transparent URL('" + nxlib.grid.HEAD_OVER_FILTER_ENABLE_IMAGE_URL + "') center middle");
    img.style.set_border("0px none #ffffffff");
    img.style.set_cursor("hand");
    img.set_visible(false);
    img.addEventHandler("onclick", nxlib.grid.filterImgOnClickHandler, form);
    grid.parent.addChild(img.name, img);
    img.show();

    img.grid = grid; // 이미지에서 그리드 참조
    img.overFilterPopupDiv = pdiv; // 이미지에서 팝업 참조
    grid.filterEnableImage = img; // 그리드에서 이미지 참조

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (!Eco.isEmpty(ds) && ds.findRow("id", "filterCancel") == -1)
    {
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

    grid.initGridHeadOverFilter = true;
}

/**
 * onmousemove Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {GridMouseEventInfo} e GridMouseEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.filterGridOnMouseMoveHandler = function(obj, e)
{
    if (obj.getCellProperty("body", e.cell, "displaytype") == "checkbox")
    {
        return;
    }

    var filterEnableImage = obj.filterEnableImage;
    var pdiv = filterEnableImage.overFilterPopupDiv;

    // 팝업이 떠있는 상태일 경우엔 skip
    if (pdiv.visible) return;

    // 사용자에 의해 컬럼 사이즈가 변경 중인 경우 필터 가능 이미지 숨기기
    if (nxlib.grid.isGridColResizing(obj) && e.row == -1)
    {
        filterEnableImage.set_visible(false);
        return;
    }

    // 현재 마우스 위치의 cell 에 필터 이미지 보여주기 및 대상 지정
    var x = e.clientX;
    var y = e.clientY;
    var headRowSize = obj.getRealRowFullSize("head");

    if (y < headRowSize)
    {
        var headCellIndex = e.cell;

        if (headCellIndex < 0)
        {
            filterEnableImage.set_visible(false);
            return;
        }

        if (nxlib.grid.getBodyCellIndex(obj, headCellIndex) > -1)
        {
            var xy = nxlib.grid.getCompXYFromGridHeadCellRight(obj, headCellIndex, filterEnableImage);

            if (xy[0] > -1 && xy[1] > -1)
            {
                filterEnableImage.move(xy[0], xy[1]);
                filterEnableImage.set_visible(true);
            }
            else
            {
                filterEnableImage.set_visible(false);
            }

            // 현재 cell object 를 속성에 달아두자...
            var refCell = nxlib.grid.getGridCellObject(obj, "head", headCellIndex);
            filterEnableImage.refCell = refCell;
        }
        else
        {
            filterEnableImage.set_visible(false);
        }
    }
    else
    {
        filterEnableImage.set_visible(false);
    }
}

/**
 * Grid column 이 사용자에 의해 resizing 중인지 여부를 반환
 * @param {Grid} grid 대상 Grid Component
 * @return {boolean} resizing 여부 반환
 * @memberOf nxlib.grid
 */
nxlib.grid.isGridColResizing = function(grid)
{
    // 내부 속성을 확인한다.
    var resizer = grid._resizer_elem;
    if (resizer && resizer._is_tracking)
    {
        return true;
    }
    return false;
}

/**
 * 그리드 헤드 셀 우측영역에 위치할 컴포넌트의 좌표를 반환
 * @param {Grid} grid 대상 Grid Component
 * @param {number} headCellIndex Grid Head Cell Index
 * @param {XPComp} comp 대상 컴포넌트
 * @return {array} x, y 좌표 (위치할 수 없을 경우 -1)
 * @memberOf nxlib.grid
 */
nxlib.grid.getCompXYFromGridHeadCellRight = function(grid, headCellIndex, comp)
{
    var col = grid.getCellProperty("head", headCellIndex, "col");
    var band = grid.getFormatColProperty(col, "band");
    var pivotIndex = Eco.decode(band, "left", -1, "right", -2, 0);
    var cellRect = grid.getCellRect(-1, headCellIndex, pivotIndex);

    var scrollWidth = nxlib.grid.getCurrentScrollBarSize(grid, "vert");
    var gridLeft = grid.getOffsetLeft();
    var gridTop = grid.getOffsetTop();
    var gridAvailRight = gridLeft + grid.getOffsetWidth() - scrollWidth;

    var x = -1,
        y = -1;

    if (gridLeft + cellRect.left < gridAvailRight)
    {
        var l = cellRect.left;
        var r = cellRect.right;
        if (l < gridLeft)
        {
            l = 0;
        }
        if (gridLeft + r > gridAvailRight)
        {
            r = gridAvailRight - gridLeft;
        }

        x = gridLeft + l + ((r - l) - comp.getOffsetWidth());
        y = gridTop + cellRect.top + Math.round((cellRect.height - comp.getOffsetHeight()) / 2);

        if (x < gridLeft)
        {
            x = -1;
        }
        if (y < gridTop)
        {
            y = -1;
        }
    }

    return [x, y];
}

/**
 * 스크롤바가 표시됐을 때에만 size를 반환한다.
 * @param {XComp} XComp nexacro Component
 * @param {string} type 스크롤바 종류(수평스크롤바:"horz", 수직스크롤바:"vert")
 * @return {number} 스크롤바 size(스크롤바가 없거나 표시되지 않을 때는 0).
 * @memberOf nxlib.grid
 */
nxlib.grid.getCurrentScrollBarSize = function(XComp, type)
{
    var scrollBar = (type == "horz") ? XComp.hscrollbar : XComp.vscrollbar;

    return (scrollBar && scrollBar.visible ? (type == "horz" ? scrollBar.getOffsetHeight() : scrollBar.getOffsetWidth()) : 0);
}

/**
 * 대상 그리드에서 주어진 컬럼에 해당하는 필터 정보를 반환한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {string} columnName 적용할 조건식
 * @return {array} 필터 정보로 {logic, operator, value} 형태의 object 배열이다.
 * @memberOf nxlib.grid
 */
nxlib.grid.getFilterInfo = function(grid, columnName)
{
    var filterInfos = grid.filterInfos;

    return filterInfos[columnName];
}

/**
 * 대상 그리드에 주어진 컬럼에 해당하는 필터 정보를 지정한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {string} columnName 적용할 조건식
 * @param {array} datas 필터 데이터로 {logic, operator, value} 형태의 object 배열이다.
 * @memberOf nxlib.grid
 */
nxlib.grid.setFilterInfo = function(grid, columnName, datas)
{
    var filterInfos = grid.filterInfos;

    filterInfos[columnName] = datas;
}

/**
 * Grid head over filter 기능에 필요한 컴포넌트 위치 조정
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.arrangeOverFilterComps = function(grid)
{
    var form = grid.parent;
    var comps = form.components;
    var comp, list = grid.overFilterCompNameList;
    var xy, column, removed;

    for (var i = 0; i < list.length; i++)
    {
        comp = comps[list[i]];
        column = comp.gridBindColumn;

        // 대상 그리드에 존재하지 않는 컬럼이면 컴포넌트 및 필터 정보 제거
        if (grid.getBindCellIndex("body", column) < 0)
        {
            comps.removeAt(i);
            removed = form.removeChild(comp.name);
            removed.destroy();
            i--;
        }
        else
        {
            if (comp && comp.filtered)
            {
                refCell = comp.refCell;

                xy = nxlib.grid.getCompXYFromGridHeadCellRight(grid, nxlib.grid.getCellObjectIndex(refCell), comp);
                if (xy[0] > -1 && xy[1] > -1)
                {
                    comp.move(xy[0], xy[1]);
                    comp.set_visible(true);
                }
                else
                {
                    comp.set_visible(false);
                }
            }
        }
    }
}

/**
 * Grid head over filter 기능에 추가된 컴포넌트 제거
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.removeOverFilterComps = function(grid)
{
    var form = grid.parent;
    var comps = form.components;
    var comp, list = grid.overFilterCompNameList;
    var removed;

    for (var i = 0, len = list.length; i < len; i++)
    {
        comp = comps[list[i]];
        if (comp)
        {
            removed = form.removeChild(comp.name);
            removed.destroy();
        }
    }

    // 정보 초기화
    grid.overFilterCompNameList = [];

    nxlib.grid.clearFilter(grid);
}

/**
 * cell move 가 발생할 때 주어진 함수를 호출한다.<br>
 * (cell moving 이벤트가 없으므로 내부속성을 이용하여 확인한다.)
 * @param {Grid} grid 대상 Grid Component
 * @param {function} func moving이 발생했을 때 호출할 함수 (호출시 넘겨줄 인자 object는 {col, oldcell, newcell, oldcol, newcol} )
 * @param {scope=} scope 함수 내부에서 this 로 사용할 scope (인자 값이 없다면 grid parent)
 * @memberOf nxlib.grid
 */
nxlib.grid.setUserGridOnCellMoved = function(grid, func, scope)
{
    // check grid argument
    if (Eco.isEmpty(grid) || !(grid instanceof nexacro.Grid))
    {
        trace("1'st argument must be a Grid Component");
    }

    // check func argument
    if (Eco.isEmpty(func) || !nexacro._isFunction(func))
    {
        trace("2'nd argument must be a Function");
    }

    // check scope argument
    if (Eco.isEmpty(scope))
    {
        scope = grid.parent;
    }

    // 대상 그리드에 이미 추가 되었는지 확인
    if (grid.setUserGridOnCellMoved)
    {
        return;
    }

    // add onlbuttondown handler
    grid.addEventHandler("onlbuttondown", function(obj, e)
    {
        if (obj.cellmovingtype == "col" && e.row == -1)
        {
            var cellMovingInfo = {
                'oldcell': e.cell,
                'oldcol': e.col,
                'refCell': nxlib.grid.getGridCellObject(obj, "head", e.cell)
            };
            obj.cellMovingInfo = cellMovingInfo;
        }
        else
        {
            obj.cellMovingInfo = null;
        }

    }, scope);

    // add onlbuttonup handler
    grid.addEventHandler("onlbuttonup", function(obj, e)
    {
        if (obj.cellmovingtype == "col" && e.row < 0)
        {
            var cellMovingInfo = obj.cellMovingInfo;

            if (!Eco.isEmpty(cellMovingInfo))
            {
                if (cellMovingInfo.oldcell != e.cell)
                {
                    var info = {
                        'oldcell': cellMovingInfo.oldcell,
                        'newcell': cellMovingInfo.refCell._cellidx,
                        'oldcol': cellMovingInfo.oldcol,
                        'newcol': cellMovingInfo.refCell._col
                    };

                    func.call(scope, obj, info);

                    obj.cellMovingInfo = null;
                }
            }
        }

    }, scope);

    grid.setUserGridOnCellMoved = true;
}

/**
 * column resize 가 완료되었을 때 주어진 함수를 호출한다.<br>
 * (Column resize 이벤트가 없으므로 내부속성을 이용하여 확인한다.)
 * @param {Grid} grid 대상 Grid Component
 * @param {function} func resize가 발생했을 때 호출할 함수 (호출시 넘겨줄 인자 object는 {col, oldvalue, newvalue} )
 * @param {scope=} scope 함수 내부에서 this 로 사용할 scope (인자 값이 없다면 grid parent)
 * @memberOf nxlib.grid
 */
nxlib.grid.setUserGridOnColResized = function(grid, func, scope)
{
    // check grid argument
    if (Eco.isEmpty(grid) || !(grid instanceof nexacro.Grid))
    {
        trace("1'st argument must be a Grid Component");
    }

    // check func argument
    if (Eco.isEmpty(func) || !nexacro._isFunction(func))
    {
        trace("2'nd argument must be a Function");
    }

    // check scope argument
    if (Eco.isEmpty(scope))
    {
        scope = grid.parent;
    }

    // 대상 그리드에 이미 추가 되었는지 확인
    if (grid.setUserGridOnColResized)
    {
        return;
    }

    // add onmousemove handler
    // 마우스 이동 시 내부 속성을 확인하여 리사이즈 정보를 지정한다.
    grid.addEventHandler("onmousemove", function(obj, e)
    {

        if (obj.cellsizingtype == "col" || obj.cellsizingtype == "both")
        {
            obj.colResizeInfo = null;

            var resizer = obj._resizer_elem;
            if (resizer && resizer._is_tracking)
            {
                var idx = resizer._index;
                var pos = resizer._movedPos;
                if (idx > -1 && pos != 0)
                {
                    obj.colResizeInfo = {
                        'col': idx,
                        'oldvalue': obj.getRealColSize(idx)
                    };
                }
            }
        }

    }, scope);

    // add onlbuttonup handler
    grid.addEventHandler("onlbuttonup", function(obj, e)
    {

        if (obj.cellsizingtype == "col" || obj.cellsizingtype == "both")
        {
            var colResizeInfo = obj.colResizeInfo;
            if (!Eco.isEmpty(colResizeInfo))
            {
                var info = {
                    'col': colResizeInfo.col,
                    'oldvalue': colResizeInfo.oldvalue,
                    'newvalue': obj.getRealColSize(colResizeInfo.col)
                };
                func.call(scope, obj, info);
            }
        }

    }, scope);

    // 재정의 방지용
    grid.setUserGridOnColResized = true;
}

/**
 * onclick Event Handler
 * @param {ImageViewer} obj Event가 발생한 ImageViewer Component
 * @param {ClickEventInfo} e ClickEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.filterImgOnClickHandler = function(obj, e)
{
    var grid = obj.grid;
    var pdiv = obj.overFilterPopupDiv;
    var form = grid.parent;

    var refCell = obj.refCell;
    var index = nxlib.grid.getBodyCellIndex(grid, nxlib.grid.getCellObjectIndex(refCell));
    var displayType = grid.getCellProperty("body", index, "displaytype");
    var columnName = nxlib.grid.getBindColumnNameByIndex(grid, index);

    var filterType;
    var filterInfo = nxlib.grid.getFilterInfo(grid, columnName);

    // 컬럼 타입별 필터 타입 정보 지정 및 Popup 크기 지정
    var w, h;
    if (displayType == "combo")
    {
        filterType = "combo";

        w = 150;
        h = 150;
    }
    else if (displayType == "date")
    {
        filterType = "date";

        w = 280;
        h = 172;
    }
    else if (displayType == "number" || displayType == "currency")
    {
        filterType = "number";

        w = 280;
        h = 172;
    }
    else
    {
        // 데이터셋 자료형에 맞게 필터타입 지정
        var ds = grid.getBindDataset();
        var colType = ds.getColumnInfo(columnName).type;

        switch (colType)
        {
            case 'INT':
            case 'FLOAT':
            case 'BIGDECIMAL':
                filterType = "number";
                break;
            default:
                filterType = "default";
        }

        w = 280;
        h = 172;
    }

    // PopupDiv 는 form 에 유일하게 하나이고 공통으로 사용하므로 현재 grid 및 정보값을 지정한다.
    pdiv.grid = grid;
    pdiv.refCell = refCell;
    pdiv.filterHeadCellIndex = nxlib.grid.getCellObjectIndex(refCell);
    pdiv.filterColumnName = columnName;

    // 팝업 화면에 필터 정보 지정
    pdiv.setFilterInfo(filterType, filterInfo);

    // 팝업 호출
    pdiv.trackPopupByComponent(obj, 0, obj.getOffsetHeight(), w, h);
}

/**
 * oncloseup Event Handler
 * @param {PopupDiv} obj Event가 발생한 PopupDiv Component
 * @param {EventInfo} e EventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.filterPdivOnCloseUpHandler = function(obj, e)
{
    // 그리드에서 편집중인 내용이 데이타셋에 반영되기 전에 PopupDiv가 먼저 close되므로 강제로 호출
    obj.updateToDataset();

    var grid = obj.grid;
    var form = grid.parent;

    // 필터버튼 숨기기
    var filterEnableImage = grid.filterEnableImage;
    filterEnableImage.set_visible(false);

    // 필터적용 표시
    var headCellIndex = obj.filterHeadCellIndex;
    var bodyCellIndex = nxlib.grid.getBodyCellIndex(grid, headCellIndex);
    var columnName = nxlib.grid.getBindColumnNameByIndex(grid, bodyCellIndex);
    var filterInfo = nxlib.grid.getFilterInfo(grid, columnName);

    var name = grid.name + "_filterApplyImage_" + headCellIndex;
    var image = form.components[name];

    if (Eco.isEmpty(filterInfo))
    {
        if (!Eco.isEmpty(image))
        {
            image.set_visible(false);
            image.filtered = false;
        }
    }
    else
    {
        if (Eco.isEmpty(image))
        {
            var imageSize = nxlib.grid.HEAD_OVER_FILTER_APPLY_IMAGE_SIZE;

            image = new ImageViewer();
            image.init(name, "absolute", 0, 0, imageSize[0], imageSize[1]);
            image.set_image(nxlib.grid.HEAD_OVER_FILTER_APPLY_IMAGE_URL);
            image.style.set_background("transparent");
            image.style.set_border("0px none #ffffffff");
            image.style.set_cursor("hand");
            image.set_visible(false);
            image.addEventHandler("onclick", nxlib.grid.filterImgOnClickHandler, form);
            form.addChild(image.name, image);
            image.show();

            image.grid = grid; // 이미지에서 그리드 참조
            image.overFilterPopupDiv = obj; // 이미지에서 팝업 참조

            image.moveToNext(filterEnableImage);

            // 컬럼명을 속성에 추가하여 실체가 존재하는지 체크함
            image.gridBindColumn = columnName;

            var overFilterCompNameList = grid.overFilterCompNameList;
            overFilterCompNameList.push(image.name);
        }

        var xy = nxlib.grid.getCompXYFromGridHeadCellRight(grid, headCellIndex, image);
        if (xy[0] > -1 && xy[1] > -1)
        {
            image.move(xy[0], xy[1]);
            image.set_visible(true);
        }
        else
        {
            image.set_visible(false);
        }

        image.filtered = true;
        image.refCell = nxlib.grid.getGridCellObject(grid, "head", headCellIndex);
    }
}

/**
 * 대상 그리드에 주어진 컬럼에 해당하는 필터 데이터를 제거한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {string} columnName 대상 데이터셋 컬럼명
 * @memberOf nxlib.grid
 */
nxlib.grid.removeFilterInfo = function(grid, columnName)
{
    var filterInfos = grid.filterInfos;
    var filterInfo = filterInfos[columnName];

    if (!nexacro._isUndefined(filterInfo))
    {
        filterInfo = null;
        delete filterInfos[columnName];
    }
}

/**
 * 대상 그리드 필터 실행
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.executeOverFilter = function(grid)
{
    var ds = grid.getBindDataset();

    var filterString = "";
    var filterInfos = grid.filterInfos;
    var filterInfo;
    var info, colType, logic;

    // 필터 항목의 데이터를 추출하여 filter string 을 만든다.
    for (var columnName in filterInfos)
    {
        if (filterInfos.hasOwnProperty(columnName))
        {
            if (!Eco.isEmpty(filterString))
            {
                filterString += " && ";
            }

            filterInfo = filterInfos[columnName];
            colType = ds.getColumnInfo(columnName).type;

            filterString += "(";

            for (var i = 0, len = filterInfo.length; i < len; i++)
            {
                info = filterInfo[i];
                logic = info.logic;

                if (i > 0)
                {
                    if (logic == "and")
                    {
                        filterString += " && ";
                    }
                    else if (logic == "or")
                    {
                        filterString += " || ";
                    }
                }

                filterString += nxlib.grid.getFilterExprString(columnName, colType, info.operator, info.value);
            }

            filterString += ")";
        }
    }

    // 필터 적용
    ds.filter(filterString);
}

/**
 * 현재 적용된 필터를 제거한다.
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.clearHeadOverFilter = function(grid)
{
    var form = grid.pForm;

    // 정보 초기화
    grid.filterInfos = {};

    for (var i = 0, len = grid.getCellCount("Head"); i < len; i++)
    {
        var name = grid.name + "_filterApplyImage_" + i;
        var image = form.components[name];

        if (!Eco.isEmpty(image))
        {
            image.set_visible(false);
            image.filtered = false;
        }
    }

    nxlib.grid.executeOverFilter(grid);
}

/**
 * 필터 조건문 문자열을 반환
 * @param {string} columnName 필터 대상 데이터셋 컬럼명
 * @param {string} colType 필터 대상 데이터셋 컬럼형
 * @param {string} operator 연산자
 * @param {*} value 피연산자 값
 * @memberOf nxlib.grid
 */
nxlib.grid.getFilterExprString = function(columnName, colType, operator, value)
{
    var expr = "";
    switch (operator)
    {
        case 'equal':
            expr = "==" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
            break;
        case 'notEqual':
            expr = "!=" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
            break;
        case 'greaterThan':
            expr = ">" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
            break;
        case 'greaterThanOrEqual':
            expr = ">=" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
            break;
        case 'lessThan':
            expr = "<" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
            break;
        case 'lessThanOrEqual':
            expr = "<=" + (colType == "STRING" ? nexacro.wrapQuote(value) : value);
            break;
        case 'startWith':
            expr = ".toString().substr(0, " + value.length + ") == '" + value + "'";
            break;
        case 'endWith':
            expr = ".toString().substr(" + columnName + ".toString().length-" + value.length + ") == '" + value + "'";
            break;
        case 'contains':
            expr = ".toString().search('" + value + "') > -1";
            break;
    }

    if (!Eco.isEmpty(expr))
    {
        expr = columnName + expr;
    }

    return expr;
}

nxlib.grid.useHeadOverFilter = true;