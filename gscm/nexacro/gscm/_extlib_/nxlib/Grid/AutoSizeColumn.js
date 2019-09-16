/**
 * @fileoverview 그리드 칼럼 너비 자동 맞춤 기능 라이브러리
 */

/**
 * 칼럼 너비 자동 맟춤시 컨텐츠 크기에 추가할 너비
 * @type {Number}
 * @const
 */
nxlib.grid.GRID_AUTOSIZE_ADD_WIDTH = 4;

/**
 * 칼럼 너비 자동 맟춤시 wordwrap 속성이 지정된 경우 제한할 너비 (null: 제한없음)
 * @type {Number}
 * @const
 */
nxlib.grid.GRID_AUTOSIZE_WORDWRAP_LIMIT_WIDTH = null;

/**
 * 그리드 칼럼 너비 자동 맞춤 기능 초기화
 * @param {Form} form Form Object
 * @param {Grid} obj 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridAutoSizeColumn = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridAutoSizeColumn) return;

    grid._hidingInfos = [];

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (ds)
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "autoSizeColumn");
        ds.setColumn(row, "id", "autoSizeCurCol");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "현재 열 너비 맞춤");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "autoSizeColumn");
        ds.setColumn(row, "id", "autoSizeAllCol");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "전체 열 너비 맞춤");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorAutoSizeColumn");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.initGridAutoSizeColumn = true;
}

/**
 * 그리드 컬럼 너비 자동 맞춤 적용
 * @param  {Grid} grid 대상 Grid Component
 * @param  {number} col 컬럼 인덱스
 * @param  {string} type 현재 열 너비 맞춤(autoSizeCurCol) 또는 전체 열 너비 맞춤(autoSizeAllCol)
 * @memberOf nxlib.grid
 */
nxlib.grid.applyAutoSizeColumn = function(grid, col, type)
{
    grid.set_enableredraw(false);

    var chkRow, chkCol, subcell;
    var displayType, wordWrap;
    for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
    {
        chkCol = grid.getCellProperty("body", i, "col");

        if (type == "autoSizeCurCol" && chkCol != col) continue;

        chkRow = grid.getCellProperty("body", i, "row");
        subcell = grid.getCellProperty("body", i, "subcell");

        // 첫번째 body row
        if (chkRow == 0)
        {
            if (subcell > 0)
            {
                for (var j = 0; j < subcell; j++)
                {
                    displayType = grid.getSubCellProperty("body", i, j, "displaytype");
                    wordWrap = grid.getSubCellProperty("body", i, j, "wordwrap");
                    nxlib.grid.setAutoSizeColumn(grid, chkCol + j, displayType, wordWrap);
                }
            }
            else
            {
                displayType = grid.getCellProperty("body", i, "displaytype");
                wordWrap = grid.getCellProperty("body", i, "wordwrap");
                nxlib.grid.setAutoSizeColumn(grid, chkCol, displayType, wordWrap);
            }
        }
    }

    grid.set_enableredraw(true);
}

/**
 * 열너비 맞춤
 * @param {Grid} grid 대상 Grid Component
 * @param {number} col 대상 열 인덱스
 * @param {string} displayType 대상 셀의 displaytype 속성
 * @param {string} wordWrap 대상 셀의 wordwrap 속성
 * @memberOf nxlib.grid
 */
nxlib.grid.setAutoSizeColumn = function(grid, col, displayType, wordWrap)
{
    var size = limit;
    // wordwrap 속성이 지정된 경우 limit 체크
    if (!Eco.isEmpty(wordWrap))
    {
        var limit = nxlib.grid.GRID_AUTOSIZE_WORDWRAP_LIMIT_WIDTH;
        if (Eco.isEmpty(limit))
        {
            grid.set_enableevent(false);
            grid.autoSizeCol("col", col);
            grid.set_enableevent(true);

            size = grid.getRealColSize(col);
            grid.setFormatColProperty(col, "size", size);
        }
        else
        {
            grid.setFormatColProperty(col, "size", limit);
        }
    }
    else
    {
        switch (displayType)
        {
            case 'bar':
                // progressbar 의 경우 max 값이 100 이므로 100 을 컨텐츠 크기로 지정
                size = 100;
                grid.setFormatColProperty(col, size);
                break;
            default:
                grid.set_enableevent(false);
                grid.autoSizeCol("col", col);
                grid.set_enableevent(true);

                size = grid.getRealColSize(col);
                grid.setFormatColProperty(col, "size", size);
        }
    }

    // 너비를 추가할 경우 추가
    if (nexacro._isNumber(nxlib.grid.GRID_AUTOSIZE_ADD_WIDTH))
    {
        size = grid.getRealColSize(col) + nxlib.grid.GRID_AUTOSIZE_ADD_WIDTH;
        grid.setFormatColProperty(col, "size", size);
    }

    // oncolresized 이벤트 발생을 위해 강제 세팅
    grid.setRealColSize(col, size);
}

nxlib.grid.useAutoSizeColumn = true;