/**
 * @fileoverview 그리드 공통 라이브러리
 */
if (!JsNamespace.exist("nxlib.grid"))
{
	/**
	 * @namespace
	 * @name nxlib.arrange
	 * @memberof! <global>
	 */
	JsNamespace.declare("nxlib.grid",
	{
        /**
         * 정렬 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useSort: false,

        /**
         * 헤드 추가 필터 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useHeadAppendFilter: false,

        /**
         * 헤드 오버 필터 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useHeadOverFilter: false,

        /**
         * 찾기/바꾸기 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useFindReplace: false,

        /**
         * 복사/붙여넣기 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useCopyPaste: false,

        /**
         * 그리드 포맷 저장 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useUserFormat: false,

        /**
         * 그리드 컬럼 숨기기 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useColumnHiding: false,

        /**
         * 그리드 틀고정 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useFixCell: false,

        /**
         * 그리드 칼럼 너비 자동 맞춤 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useAutoSizeColumn: false,

        /**
         * 그리드 엑셀 연계 기능 사용 여부
         * @type {Boolean}
         * @memberOf nxlib.grid
         */
        useExcel: false,

        /**
         * 해당 Grid object에 공통 기능을 설정한다.
         * @param {Form} form Form Object
         * @param {Grid} grid Grid object
         * @memberOf nxlib.grid
         */
        init: function(form, grid)
        {
            // 대상이 이미 초기화 되었는지 확인
            if (grid.isInitialized) return;

            if (Eco.isEmpty(form))
            {
                trace("The first argument is type of Form.");
                return;
            }

            if (Eco.isEmpty(grid) || !nxlib.isNxComponent(grid) || !(grid instanceof nexacro.Grid))
            {
                trace("The second argument is type of Grid.");
                return;
            }

            // 그리드 우클릭 기능 사용을 위한 초기화
            // 아래 각 기능 별로 우클릭 메뉴가 추가되므로 반드시 선행되어서 실행되어야 함
            nxlib.grid.initGridRightClick(form, grid);

            // 정렬 기능 사용 시
            if (nxlib.grid.useSort)
            {
                nxlib.grid.initGridHeadClickSort(form, grid);
            }

            // 헤드 추가 필터 기능 사용 시
            if (nxlib.grid.useHeadAppendFilter)
            {
                nxlib.grid.initGridHeadAppendFilter(form, grid);
            }

            // 헤드 오버 필터 기능 사용 시
            if (nxlib.grid.useHeadOverFilter)
            {
                nxlib.grid.initGridHeadOverFilter(form, grid);
            }

            // 복사/붙여넣기 기능 사용 시
            if (nxlib.grid.useCopyPaste)
            {
                nxlib.grid.initGridCopyPaste(form, grid);
            }

            // 그리드 컬럼 숨기기 기능 사용 시
            if (nxlib.grid.useColumnHiding)
            {
                nxlib.grid.initGridColumnHiding(form, grid);
            }

            // 그리드 틀고정 기능 사용 시
            if (nxlib.grid.useFixCell)
            {
                nxlib.grid.initGridFixCell(form, grid);
            }

            // 그리드 칼럼 너비 자동 맞춤 기능 사용 시
            if (nxlib.grid.useAutoSizeColumn)
            {
                nxlib.grid.initGridAutoSizeColumn(form, grid);
            }

            // 찾기 기능 사용 시
            if (nxlib.grid.useFindReplace)
            {
                nxlib.grid.initGridFindReplace(form, grid);
            }

            // 그리드 엑셀 연계 기능 사용 시
            if (nxlib.grid.useExcel)
            {
                nxlib.grid.initGridExcel(form, grid);
            }

            // 그리드 포맷 저장 기능 사용 시
            if (nxlib.grid.useUserFormat)
            {
                nxlib.grid.initGridUserFormat(form, grid);
            }

            grid.isInitialized = true;
        },

        /**
         * Grid right click 시 메뉴로 처리하기 위한 초기 지정
         * @param {Form} form Form Object
         * @param {Grid} obj 대상 Grid Component
         * @memberOf nxlib.grid
         */
        initGridRightClick: function(form, obj)
        {
            // 대상이 이미 초기화 되었는지 확인
            if (obj.initGridRightClick) return;

            obj.pForm = form;

            var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋 참조
            var pmnu = form.gridRClickPopupMenu; // 팝업메뉴 컴포넌트 참조

            // Dataset, PopupMenu 는 Form에 유일하게 하나만 있으면 됨.
            if (Eco.isEmpty(ds))
            {
                // add popupmenu dataset
                ds = new Dataset;
                ds.set_name(Eco.getUniqueId("ds_"));

                form.addChild(ds.name, ds);

                ds.addColumn("band", "string");
                ds.addColumn("groupId", "string");
                ds.addColumn("id", "string");
                ds.addColumn("level", "string");
                ds.addColumn("caption", "string");
                ds.addColumn("icon", "string");
                ds.addColumn("enable", "string");

                form.gridRClickDataset = ds;
            }

            if (Eco.isEmpty(pmnu))
            {
                // add popupmenu component
                var name = Eco.getUniqueId("pmnu_");

                pmnu = new PopupMenu();
                pmnu.init(name, "absolute", 0, 0, 68, 65);
                form.addChild(pmnu.name, pmnu);
                pmnu.set_innerdataset(ds.name);
                pmnu.set_idcolumn("id");
                pmnu.set_levelcolumn("level");
                pmnu.set_captioncolumn("caption");
                pmnu.set_iconcolumn("icon");
                pmnu.set_enablecolumn("enable");
                pmnu.addEventHandler("onmenuclick", nxlib.grid.gridPopupMenuOnMenuClickHandler, form);
                pmnu.show();

                form.gridRClickPopupMenu = pmnu;
            }

            // 그리드 이벤트에서 팝업메뉴를 참조하기 위해 추가
            obj.rClickPopupMenu = pmnu;

            // add onrbuttondown handler
            obj.addEventHandler("onrbuttondown", nxlib.grid.gridOnRButtonDownHandler, form);

            // 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
            obj.initGridRightClick = true;
        },

        /**
         * onrbuttondown Event Handler
         * @param {Grid} obj Event가 발생한 Grid Component
         * @param {MouseEventInfo} e MouseEventInfo
         * @memberOf nxlib.grid
         */
        gridOnRButtonDownHandler: function(obj, e)
        {
            var row = e.row;
            var col = e.col;
            var cell = e.cell;
            var pmnu = obj.rClickPopupMenu;
            var ds = obj.pForm.gridRClickDataset;
            var filter = "";

            // head
            if (row == -1 && cell > -1)
            {
                filter += "band=='head'";
                var bodyCellIndex = nxlib.grid.getBodyCellIndex(obj, cell);
                if (bodyCellIndex > -1)
                {
                    if (nxlib.grid.useSort)
                    {
                        var sortStatus = nxlib.grid.getSortStatus(obj, cell);
                        var sortAscRowIndex = ds.findRow("id", "sortAsc");
                        var sortDescRowIndex = ds.findRow("id", "sortDesc");
                        var sortClearRowIndex = ds.findRow("id", "sortClear");

                        if (sortStatus == 1)
                        {
                            // 내림차순, 취소 가능
                            ds.setColumn(sortAscRowIndex, "enable", "false");
                            ds.setColumn(sortDescRowIndex, "enable", "true");
                            ds.setColumn(sortClearRowIndex, "enable", "true");
                        }
                        else if (sortStatus == 2)
                        {
                            // 오름차순, 취소 가능
                            ds.setColumn(sortAscRowIndex, "enable", "true");
                            ds.setColumn(sortDescRowIndex, "enable", "false");
                            ds.setColumn(sortClearRowIndex, "enable", "true");
                        }
                        else
                        {
                            // 오름차순, 내림차순 가능
                            ds.setColumn(sortAscRowIndex, "enable", "true");
                            ds.setColumn(sortDescRowIndex, "enable", "true");
                            ds.setColumn(sortClearRowIndex, "enable", "false");
                        }
                    }

                    if (nxlib.grid.useColumnHiding)
                    {
                        for (var i = ds.rowcount - 1; i > -1; i--)
                        {
                            if (ds.getColumn(i, "groupId") == "columnHiding" && ds.getColumn(i, "level") == 1)
                            {
                                ds.deleteRow(i);
                            }
                        }

                        var hide = "false";
                        var show = "false";
                        var hidingInfos = obj._hidingInfos;
                        var hideColumnRowIndex = ds.findRow("id", "hideColumn");
                        var showColumnRowIndex = ds.findRow("id", "showColumn");

                        if (hidingInfos.length > 0)
                        {
                            show = "true";

                            // 숨긴 칼럼 정보 재구성
                            var rowPos = ds.findRow("id", "showColumn");
                            rowPos = ds.insertRow(rowPos + 1);
                            ds.setColumn(rowPos, "band", "head");
                            ds.setColumn(rowPos, "groupId", "columnHiding");
                            ds.setColumn(rowPos, "id", "showColumn_all");
                            ds.setColumn(rowPos, "level", "1");
                            ds.setColumn(rowPos, "caption", "전체");
                            ds.setColumn(rowPos, "icon", "");
                            ds.setColumn(rowPos, "enable", "true");

                            for (var i = 0, len = hidingInfos.length; i < len; i++)
                            {
                                rowPos = ds.insertRow(rowPos + 1);
                                ds.setColumn(rowPos, "band", "head");
                                ds.setColumn(rowPos, "groupId", "columnHiding");
                                ds.setColumn(rowPos, "id", "showColumn_" + i);
                                ds.setColumn(rowPos, "level", "1");
                                ds.setColumn(rowPos, "caption", hidingInfos[i].text);
                                ds.setColumn(rowPos, "icon", "");
                                ds.setColumn(rowPos, "enable", "true");
                            }
                        }

                        if (cell > -1 && nxlib.grid.getBodyCellIndex(obj, cell) > -1)
                        {
                            hide = "true";
                        }
                        else
                        {
                            hide = "false";
                        }

                        ds.setColumn(hideColumnRowIndex, "enable", hide);
                        ds.setColumn(showColumnRowIndex, "enable", show);
                    }

                    if (nxlib.grid.useHeadAppendFilter || nxlib.grid.useHeadOverFilter)
                    {
                        if (nxlib.grid.useHeadAppendFilter)
                        {
                            var showFilterRowIndex = ds.findRow("id", "showFilter");
                            var hideFilterRowIndex = ds.findRow("id", "hideFilter");
                            var shown = obj.showGridFilter;

                            ds.setColumn(showFilterRowIndex, "enable", !shown);
                            ds.setColumn(hideFilterRowIndex, "enable", shown);
                        }

                        var enable = false;

                        if (!Eco.isEmpty(obj.filterInfos) || !Eco.isEmpty(obj.filterItems))
                        {
                            enable = true;
                        }

                        var filterCancelRowIndex = ds.findRow("id", "filterCancel");
                        ds.setColumn(filterCancelRowIndex, "enable", enable);
                    }
                }
            }
            // body
            else if (row > -1)
            {
                filter += "band=='body'";

                // 그리드 틀고정 기능 사용 시
                if (nxlib.grid.useFixCell)
                {
                    var fixColIndex = ds.findRow("id", "fixCol");
                    var fixRowIndex = ds.findRow("id", "fixRow");
                    var fixColRowIndex = ds.findRow("id", "fixColRow");
                    var unFixIndex = ds.findRow("id", "unFix");

                    if (cell > -1)
                    {
                        // 우클릭한 row 를 담아두자.
                        obj._rClickRow = row;

                        var col = obj.getCellProperty("body", cell, "col");
                        var colspan = obj.getCellProperty("body", cell, "colspan");

                        pmnu._fixCurCol = col + (colspan - 1) - 1;
                        pmnu._fixCurRow = row - 1;

                        ds.setColumn(fixColIndex, "enable", "true");
                        ds.setColumn(fixRowIndex, "enable", "true");
                        ds.setColumn(fixColRowIndex, "enable", "true");
                    }
                    else
                    {
                        ds.setColumn(fixColIndex, "enable", "false");
                        ds.setColumn(fixRowIndex, "enable", "false");
                        ds.setColumn(fixColRowIndex, "enable", "false");
                    }

                    // 고정 취소 활성화
                    if (obj._fixRow > -1 || obj._fixCol > -1)
                    {
                        ds.setColumn(unFixIndex, "enable", "true");
                    }
                    else
                    {
                        ds.setColumn(unFixIndex, "enable", "false");
                    }
                }

                // 칼럼 너비 자동 조정
                if (nxlib.grid.useAutoSizeColumn)
                {
                    var autoSizeColIndex = ds.findRow("id", "autoSizeCurCol");
                    if (cell > -1)
                    {
                        ds.setColumn(autoSizeColIndex, "enable", "true");
                    }
                    else
                    {
                        ds.setColumn(autoSizeColIndex, "enable", "false");
                    }
                }
            }
            else
            {
                return;
            }

            // 메뉴 필터
            ds.filter(filter);

            // 대상 그리드와 셀 정보를 추가
            pmnu.grid = obj;
            pmnu.healColIndex = col;
            pmnu.headCellIndex = cell;

            // var rect = obj.getCellRect(row, cell);
            // var x = rect.left;
            // var y = rect.bottom;

            // if (isNaN(x) || isNaN(y))
            // {
            //     x = e.clientX;
            //     y = e.clientY;
            // }

            var x = e.clientX;
            var y = e.clientY;

            pmnu.trackPopupByComponent(obj, x, y);
        },

        /**
         * onmenuclick Event Handler
         * @param {PopupMenu} obj Event가 발생한 PopupMenu Component
         * @param {MenuClickEventInfo} e MenuClickEventInfo
         * @memberOf nxlib.grid
         */
        gridPopupMenuOnMenuClickHandler: function(obj, e)
        {
            var selectId = e.id;
            var col = obj.healColIndex;
            var cell = obj.headCellIndex;
            var grid = obj.grid;
            var form = grid.pForm;

            switch (selectId)
            {
                case "sortAsc":
                case "sortDesc":
                    // 정렬
                    if (nxlib.grid.setSortStatus(grid, cell, false, (selectId == "sortAsc" ? 1 : 2)))
                    {
                        nxlib.grid.executeSort(grid);
                    }
                    break;

                case "sortClear":
                    // 정렬 취소
                    nxlib.grid.clearSortByHeadCellIndex(grid, cell);
                    break;

                case "hideColumn":
                    // 칼럼 숨기기
                    nxlib.grid.hideGridColumn(grid, col, cell);
                    break;

                case "fixCol":
                case "fixRow":
                case "fixColRow":
                    // 틀고정
                    var fixCol = obj._fixCurCol + 1;
                    var fixRow = obj._fixCurRow + 1;

                    if (selectId == "fixCol")
                    {
                        fixRow = -1;
                    }
                    else if (selectId == "fixRow")
                    {
                        fixCol = -1;
                    }

                    nxlib.grid.fixGridCell(grid, fixCol, fixRow);
                    break;

                case "unFix":
                    // 틀고정 취소
                    nxlib.grid.unFixGridCell(grid);
                    break;

                case "autoSizeCurCol":
                case "autoSizeAllCol":
                    // 칼럼 너비 자동 맞춤
                    nxlib.grid.applyAutoSizeColumn(grid, col, selectId);
                    break;

                case "showFilter":
                    // 필터 추가
                    nxlib.grid.showGridFilter(form, grid);
                    break;

                case "hideFilter":
                    // 필터 제거
                    nxlib.grid.hideGridFilter(form, grid);
                    break;

                case "filterCancel":
                    // 필터 취소
                    if (nxlib.grid.useHeadAppendFilter)
                    {
                        nxlib.grid.clearHeadAppendFilter(grid);
                    }

                    if (nxlib.grid.useHeadOverFilter)
                    {
                        nxlib.grid.clearHeadOverFilter(grid);
                    }
                    break;

                case "saveUserFormat":
                    nxlib.grid.saveGridUserFormat(form, grid);
                    break;

                case "removeUserFormat":
                    nxlib.grid.removeGridUserFormat(form, grid);
                    break;

                case "find":
                case "replace":
                    // 찾기/바꾸기 팝업
                    nxlib.grid.showGridFindReplace(grid, selectId);
                    break;

                case "exportExcel":
                    // 엑셀 다운로드
                    nxlib.grid.exportExcel(form, grid);
                    break;

                case "importExcel":
                    // 엑셀 업로드
                    nxlib.grid.importExcel(form, grid);
                    break;

                default:
                    if (selectId.substr(0, 11) == "showColumn_")
                    {
                        // 칼럼 숨기기 취소
                        var showIndex = selectId.substr(11);
                        if (showIndex == "all")
                        {
                            nxlib.grid.showGridColumnAll(grid);
                        }
                        else
                        {
                            showIndex = parseInt(showIndex);
                            nxlib.grid.showGridColumnByIndex(grid, [showIndex]);
                        }
                    }
                    break;
            }
        },

        /**
         * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {Grid} grid 대상 Grid Component
         * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
         * @param {number} index 얻고자 하는 cell 의 index
         * @return {object} cell object
         * @memberOf nxlib.grid
         */
        getGridCellObject: function(grid, band, index)
        {
            // 내부속성을 통해 얻어온다.
            var refCell;
            var format = grid._curFormat;
            if (format)
            {
                if (band == "head")
                {
                    refCell = format._headcells[index];
                }
                else if (band == "body")
                {
                    refCell = format._bodycells[index];
                }
                else if (band == "summ" || band == "summary")
                {
                    refCell = format._summcells[index];
                }
            }

            return refCell;
        },

        /**
         * cell object에서 index 를 얻어온다. (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {object} cell 대상 cell object
         * @return {number} cell index
         * @memberOf nxlib.grid
         */
        getCellObjectIndex: function(cell)
        {
            return cell._cellidx;
        },

        /**
         * body cell index로 binding 된 컬럼명을 얻어온다.
         * @param {Grid} grid 대상 Grid Component
         * @param {number} index body cell index
         * @memberOf nxlib.grid
         */
        getBindColumnNameByIndex: function(grid, index)
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

            if (!Eco.isEmpty(text))
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
        },

        /**
         * head cell에 match되는 body cell을 얻어온다
         * @param {Grid} grid 대상 Grid Component
         * @param {number} headCellIndex head cell index
         * @param {boolean=} useColspan head cell 이 colspan 일 경우에도 반환값을 받을지 여부
         * @memberOf nxlib.grid
         */
        getBodyCellIndex: function(grid, headCellIndex, useColspan)
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
            for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
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

            var cRow, cCol, cColspan;
            for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
            {
                cRow = parseInt(grid.getCellProperty("body", i, "row"));
                cCol = parseInt(grid.getCellProperty("body", i, "col"));
                cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

                // colspan 이 적용된 cell 도 반환값을 사용할 경우 첫번째 항목에 매칭되는 index
                if (useColspan)
                {
                    if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan))
                    {
                        cellIndex = i;
                        break;
                    }
                }
                else
                {
                    if (sRow == cRow && nCol == cCol && nColspan == cColspan)
                    {
                        cellIndex = i;
                        break;
                    }
                }
            }
            return cellIndex;
        }
	});
}