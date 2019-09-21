/**
 * @fileoverview 그리드 정렬 기능 라이브러리
 */

/**
 * 정렬이 토글될 때 취소를 실행할지 여부<br>
 * true 일 경우 오름차순/내림차순/취소 반복<br>
 * false 일 경우 오름차순/내림차순 반복
 * @type {Boolean}
 * @const
 */
nxlib.grid.SORT_TOGGLE_CANCEL = true;

/**
 * 정렬 표시자 구분 (text or image)
 * @type {String}
 * @const
 */
nxlib.grid.MARKER_TYPE = "image";

/**
 * Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정<br>
 * [오름차순표시, 내림차순표시]
 * @type {Array}
 * @const
 */
nxlib.grid.MARKER = ["URL('img::Grid/grd_sort_up.png')", "URL('img::Grid/grd_sort_dn.png')"]; // ["▲", "▼"]

/**
 * Grid head click 시 소팅 처리하기 위한 초기 지정
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridHeadClickSort = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridHeadClickSort) return;

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (ds)
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "sort");
        ds.setColumn(row, "id", "sortAsc");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "오름차순");
        ds.setColumn(row, "icon", "img::Grid/grd_sort_up.png");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "sort");
        ds.setColumn(row, "id", "sortDesc");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "내림차순");
        ds.setColumn(row, "icon", "img::Grid/grd_sort_dn.png");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "sort");
        ds.setColumn(row, "id", "sortClear");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "정렬취소");
        ds.setColumn(row, "enable", "false");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorSort");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.addEventHandler("onheadclick", nxlib.grid.sortGridOnHeadClickHandler, form);

    grid.initGridHeadClickSort = true;
}

/**
 * onheadclick Event Handler
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {GridClickEventInfo} e GridClickEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.sortGridOnHeadClickHandler = function(obj, e)
{
    if (obj.getCellProperty("body", e.cell, "displaytype") == "checkbox")
    {
        if (obj.getCellProperty("head", e.cell, "displaytype") == "checkbox")
        {
            // Head셋팅
            var strVal = obj.getCellProperty("head", e.cell, "text");
            var colId = obj.getCellProperty("body", e.cell, "text").split("bind:").join("");
            var objDS = obj.getBindDataset();

            if (Eco.isEmpty(strVal)) strVal = "0";

            if (strVal == "0")
            {
                obj.setCellProperty("head", e.cell, "text", "1");
                strVal = "1";
            }
            else
            {
                obj.setCellProperty("head", e.cell, "text", "0");
                strVal = "0";
            }

            // Body셋팅
            for (var i = 0; i < objDS.rowcount; i++)
            {
                objDS.setColumn(i, colId, strVal);
            }
        }
    }
    else
    {
        var multiple = false;

        // Shift 키
        if (e.shiftKey) multiple = true;

        // Ctrl 키
        if (e.ctrlKey) multiple = true;

        // 정렬 상태 변경이 성공하면 정렬을 실행한다.
        if (nxlib.grid.setSortStatus(obj, e.cell, multiple))
        {
            nxlib.grid.executeSort(obj);
        }
    }
}

/**
 * 정렬 상태를 얻어온다.
 * @param {Grid} grid 대상 Grid Component
 * @param {number} headCellIndex head cell index
 * @return {number} sort status (-1:N/A, 0: 초기상태, 1:오름차순상태, 2:내림차순상태)
 * @memberOf nxlib.grid
 */
nxlib.grid.getSortStatus = function(grid, headCellIndex)
{
    var bodyCellIndex = nxlib.grid.getBodyCellIndex(grid, headCellIndex);
    if (bodyCellIndex < 0) return -1;

    var columnName = nxlib.grid.getBindColumnNameByIndex(grid, bodyCellIndex);

    var sortInfos = grid.sortInfos;
    if (sortInfos && sortInfos[columnName])
    {
        return sortInfos[columnName].status;
    }
    return -1;
}

/**
 * 정렬 상태를 지정한다. (실제 소팅 처리는 executeSort 에서 담당한다.)
 * @param {Grid} grid 대상 Grid Component
 * @param {number} headCellIndex 대상 head cell index
 * @param {boolean=} isMultiple 다중선택여부
 * @param {number=} sortStatus 정렬상태 강제 지정 (미지정시 현재 상태 반전)
 * @return {boolean} 상태 변경 여부
 * @memberOf nxlib.grid
 */
nxlib.grid.setSortStatus = function(grid, headCellIndex, isMultiple, sortStatus)
{
    // head cell index 에 해당하는 body cell index
    var bodyCellIndex = nxlib.grid.getBodyCellIndex(grid, headCellIndex);
    if (bodyCellIndex < 0) return false;

    // body cell index 에 해당하는 바인드 컬럼명
    var columnName = nxlib.grid.getBindColumnNameByIndex(grid, bodyCellIndex);
    if (Eco.isEmpty(columnName))
    {
        trace("Check Grid body cell bind value");
        return false;
    }

    if (Eco.isEmpty(isMultiple)) isMultiple = false;

    if (Eco.isEmpty(sortStatus)) sortStatus = -1;

    // 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
    if (nexacro._isUndefined(grid.sortInfos))
    {
        grid.sortInfos = {};
    }

    // 정렬대상컬럼 (순서중요)
    if (nexacro._isUndefined(grid.sortItems))
    {
        grid.sortItems = [];
    }

    var sortInfos = grid.sortInfos,
        sortItems = grid.sortItems,
        sortInfo = sortInfos[columnName],
        sortItem,
        status;

    if (Eco.isEmpty(sortInfo))
    {
        var headText = grid.getCellText(-1, headCellIndex);

        // executeSort에서 정렬 표시를 위해 cell index 가 필요한데
        // cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다.
        var refCell = nxlib.grid.getGridCellObject(grid, "head", headCellIndex);

        sortInfo = sortInfos[columnName] = {
            status: 0,
            text: headText,
            refCell: refCell
        };
    }

    // set sort status
    if (isMultiple)
    {
        status = sortInfo.status;
        if (sortStatus == -1)
        {
            if (status == 0)
            {
                sortInfo.status = 1;
            }
            else if (status == 1)
            {
                sortInfo.status = 2;
            }
            else if (status == 2)
            {
                sortInfo.status = (nxlib.grid.SORT_TOGGLE_CANCEL ? 0 : 1);
            }
        }
        else
        {
            sortInfo.status = sortStatus;
        }
    }
    else
    {
        for (var p in sortInfos)
        {
            if (sortInfos.hasOwnProperty(p))
            {
                sortInfo = sortInfos[p];

                if (p == columnName)
                {
                    status = sortInfo.status;
                    if (sortStatus == -1)
                    {
                        if (status == 0)
                        {
                            sortInfo.status = 1;
                        }
                        else if (status == 1)
                        {
                            sortInfo.status = 2;
                        }
                        else if (status == 2)
                        {
                            sortInfo.status = (nxlib.grid.SORT_TOGGLE_CANCEL ? 0 : 1);
                        }
                    }
                    else
                    {
                        sortInfo.status = sortStatus;
                    }
                }
                else
                {
                    sortInfo.status = 0;
                }

                if (sortInfo.status == 0)
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
    }

    // 컬럼정보 등록
    if (!Eco.array.contains(sortItems, columnName))
    {
        sortItems.push(columnName);
    }
    return true;
}

/**
 * 정렬 적용
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.executeSort = function(grid)
{
    var sortInfo,
        sortItem,
        sortInfos = grid.sortInfos,
        sortItems = grid.sortItems,
        columnName,
        status,
        cell,
        sortString = "";

    if (Eco.isEmpty(sortInfos) || Eco.isEmpty(sortItems)) return;

    // keystring 조합
    for (var i = 0; i < sortItems.length; i++)
    {
        columnName = sortItems[i];
        sortInfo = sortInfos[columnName];
        status = sortInfo.status;
        cell = sortInfo.refCell;

        // 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
        // 확인하여 없으면 제거해 준다.
        if (Eco.isEmpty(cell) || grid.getBindCellIndex("body", columnName) < 0)
        {
            sortItems.splice(i, 1);
            sortInfos[columnName] = null;
            delete sortInfos[columnName];

            i--;
        }
        else if (status > 0)
        {
            sortString += (status == 1 ? "+" : "-") + columnName;
        }
    }

    var ds = grid.getBindDataset();

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
                groupKeyString = "G:" + curKeyString;
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
                if (temp.indexOf("G:") < 0)
                {
                    groupKeyString = "G:" + temp;
                }
                else
                {
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

    // 정렬표시
    var type = nxlib.grid.MARKER_TYPE;
    var index, marker;
    for (var p in sortInfos)
    {
        if (sortInfos.hasOwnProperty(p))
        {
            sortInfo = sortInfos[p];
            cell = sortInfo.refCell;

            if (cell)
            {
                index = nxlib.grid.getCellObjectIndex(cell);

                marker = Eco.decode(sortInfo.status, 1, nxlib.grid.MARKER[0], 2, nxlib.grid.MARKER[1], "");

                if (type == "text")
                {
                    grid.setCellProperty("head", index, "text", sortInfo.text + marker);
                }
                else if (type == "image")
                {
                    grid.setCellProperty("head", index, "style", "background:" + marker + " 50 5;");
                }
            }
        }
    }
}

/**
 * 주어진 bind column에 해당하는 정렬을 처리한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {string} columnName bind column name
 * @param {boolean=} clear 기존 정렬 상태 초기화 여부
 * @memberOf nxlib.grid
 */
nxlib.grid.sortByColumnName = function(obj, columnName, clear)
{
    var cellIndex = obj.getBindCellIndex("body", columnName);

    if (cellIndex == -1)
    {
        trace("There are no cells bind to " + columnName + ".");
        return;
    }

    var multiple = true;

    if (clear) multiple = false;

    // 정렬 상태 변경이 성공하면 정렬을 실행한다.
    if (nxlib.grid.setSortStatus(obj, cellIndex, multiple))
    {
        nxlib.grid.executeSort(obj);
    }
}

/**
 * 주어진 head cell index에 해당하는 정렬을 제거한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {number} headCellIndex head cell index
 * @memberOf nxlib.grid
 */
nxlib.grid.clearSortByHeadCellIndex = function(grid, headCellIndex)
{
    var bodyCellIndex = nxlib.grid.getBodyCellIndex(grid, headCellIndex);

    if (bodyCellIndex < 0) return;

    var columnName = nxlib.grid.getBindColumnNameByIndex(grid, bodyCellIndex);

    if (!Eco.isEmpty(columnName))
    {
        nxlib.grid.clearSortByColumnName(grid, columnName);
    }
}

/**
 * 주어진 bind column에 해당하는 정렬을 제거한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {string} columnName bind column name
 * @memberOf nxlib.grid
 */
nxlib.grid.clearSortByColumnName = function(grid, columnName)
{
    var sortInfos = grid.sortInfos;
    var sortItems = grid.sortItems;

    if (Eco.isEmpty(sortInfos) || Eco.isEmpty(sortItems)) return;

    if (Eco.isEmpty(columnName) || Eco.isEmpty(sortInfos[columnName])) return;

    // 정렬상태를 변경
    sortInfos[columnName].status = 0;

    // 정렬실행
    nxlib.grid.executeSort(grid);

    // 컬럼정보 제거
    nxlib.remove(sortItems, columnName);

    // 소트정보 제거
    delete sortInfos[columnName];
}

/**
 * 현재 적용된 모든 정렬을 제거한다.
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.clearAllSort = function(grid)
{
    var sortInfos = grid.sortInfos;
    var sortItems = grid.sortItems;

    if (Eco.isEmpty(sortInfos) || Eco.isEmpty(sortItems)) return;

    // 정렬상태 초기화.
    Eco.Each(sortInfos, function(nm, val, o)
    {
        val.status = 0;
    });

    // 정렬실행
    nxlib.grid.executeSort(grid);

    // 정보 초기화
    grid.sortInfos = {};
    grid.sortItems = [];
}

nxlib.grid.useSort = true;