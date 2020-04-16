/**
 * @fileoverview 그리드 틀고정 기능 라이브러리
 */

/**
 * 그리드 틀고정 기능 초기화
 * @param {Form} form Form Object
 * @param {Grid} obj 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridFixCell = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridFixCell) return;

    // 고정 정보 속성 추가
    grid._fixRow = -1;
    grid._fixCol = -1;

    grid.set_scrollpixel("none");

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (ds)
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "fixCell");
        ds.setColumn(row, "id", "fixCol");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "현재 열 고정");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "fixCell");
        ds.setColumn(row, "id", "fixRow");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "현재 행 고정");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "fixCell");
        ds.setColumn(row, "id", "fixColRow");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "현재 행,열 고정");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "fixCell");
        ds.setColumn(row, "id", "unFix");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "고정 취소");
        ds.setColumn(row, "enable", "false");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorFix");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.initGridFixCell = true;
}

/**
 * 주어진 col, row 에 해당하는 cell 고정
 * @param {Grid} grid 대상 Grid Component
 * @param {number} fixCol 열 고정 인덱스 (-1 : 미적용)
 * @param {number} fixRow 행 고정 인덱스 (-1 : 미적용)
 * @memberOf nxlib.grid
 */
nxlib.grid.fixGridCell = function(grid, fixCol, fixRow)
{
    for (var i = 0; i < grid.getFormatColCount(); i++)
    {
        grid.setFormatColProperty(i, "band", "");
    }

    grid.setFixedRow(fixRow);

    // 열고정
    if (fixCol != -1)
    {
        grid.setCellProperty("body", fixCol, "line", "0 none, 2 solid #de5900, 1 solid #ffffff, 2 solid #de5900");
        grid.setCellProperty("body", fixCol, "selectline", "0 none, 2 solid #de5900, 1 solid #ffffff, 2 solid #de5900");
        grid.setFormatColProperty(fixCol, "band", "left");
    }

    // 행고정
    if (fixRow != -1)
    {
        for (var i = 0; i < grid.getFormatColCount(); i++)
        {
            if (fixCol == i)
            {
                grid.setCellProperty("body", i, "line", "EXPR(currow == " + fixRow + " ? '0 none, 2 solid #de5900, 2 solid #de5900, 2 solid #de5900' : '0 none, 2 solid #de5900, 1 solid #ffffff, 2 solid #de5900')");
                grid.setCellProperty("body", i, "selectline", "EXPR(currow == " + fixRow + " ? '0 none, 2 solid #de5900, 2 solid #de5900, 2 solid #de5900' : '0 none, 2 solid #de5900, 1 solid #ffffff, 2 solid #de5900')");
            }
            else
            {
                grid.setCellProperty("body", i, "line", "EXPR(currow == " + fixRow + " ? '0 none, 1 solid #cccccc, 2 solid #de5900, 1 solid #ffffff' : '')");
                grid.setCellProperty("body", i, "selectline", "EXPR(currow == " + fixRow + " ? '0 none, 1 solid #cccccc, 2 solid #de5900, 1 solid #ffffff' : '')");
            }
        }
    }

    // 현재 고정 값 지정
    grid._fixCol = fixCol;
    grid._fixRow = fixRow;
}

/**
 * 현재 그리드에 적용된 행,열 고정 취소
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.unFixGridCell = function(grid)
{
    grid._fixRow = -1;
    grid._fixCol = -1;

    grid.setFixedRow(-1);
    for (var i = 0; i < grid.getFormatColCount(); i++)
    {
        grid.setCellProperty("body", i, "line", "");
        grid.setCellProperty("body", i, "selectline", "");
        grid.setFormatColProperty(i, "band", "");
    }
}

nxlib.grid.useFixCell = true;