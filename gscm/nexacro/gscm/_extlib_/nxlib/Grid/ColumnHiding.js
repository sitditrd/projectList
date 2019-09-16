/**
 * @fileoverview 그리드 컬럼 숨기기 기능 라이브러리
 */

/**
 * 컬럼 숨김 정보 구분자
 * @type {String}
 * @const
 */
nxlib.grid.SEPARATOR_HIDING_INFOS = "||^||";

/**
 * 그리드 컬럼 숨기기 기능 초기화
 * @param {Form} form Form Object
 * @param {Grid} obj 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridColumnHiding = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridColumnHiding) return;

    grid._hidingInfos = [];

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (ds)
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "columnHiding");
        ds.setColumn(row, "id", "hideColumn");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "숨기기");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "columnHiding");
        ds.setColumn(row, "id", "showColumn");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "숨기기 취소");
        ds.setColumn(row, "enable", "false");

        row = ds.addRow();
        ds.setColumn(row, "band", "head");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorHiding");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.initGridColumnHiding = true;
}

/**
 * 주어진 칼럼정보에 해당하는 칼럼을 찾아 숨긴다.
 * @param  {Grid} grid 대상 Grid Component
 * @param  {number} col 컬럼 인덱스
 * @param  {number} headCellIndex 셀 인덱스
 * @memberOf nxlib.grid
 */
nxlib.grid.hideGridColumn = function(grid, col, headCellIndex)
{
    var columns = [];
    var info = {
        'col': col,
        'band': grid.getFormatColProperty(col, "band"),
        'size': grid.getRealColSize(col)
    };
    columns.push(info);

    // 해당 칼럼의 subcell 여부를 체크
    var band, bands = ["head", "body", "summ"];
    var cnt, subCell = 0,
        colspan = 0;
    for (var i = 0, len = bands.length; i < len; i++)
    {
        band = bands[i];
        cnt = grid.getCellCount(band);
        for (var j = 0; j < cnt; j++)
        {
            if (col == grid.getCellProperty(band, j, "col"))
            {
                subCell = Math.max(subCell, grid.getCellProperty(band, j, "subcell"));
                colspan = Math.max(colspan, grid.getCellProperty(band, j, "colspan"));
            }
        }
    }

    if (colspan > 1 && subCell > 0)
    {
        for (var i = 1; i < subCell; i++)
        {
            info = {
                'col': col + 1,
                'band': grid.getFormatColProperty(col + 1, "band"),
                'size': grid.getRealColSize(col + 1)
            };
            columns.push(info);
        }
    }

    var text = "";
    // checkbox 로 사용시
    if (grid.getCellProperty("head", headCellIndex, "displaytype") == "checkbox")
    {
        text = "[선택박스]";
    }
    else
    {
        text = grid.getCellProperty("head", headCellIndex, "text");
        if (Eco.isEmpty(text))
        {
            // subcell 이 존재할 경우
            var subcell = grid.getCellProperty("head", headCellIndex, "subcell");
            if (subcell > 0)
            {
                text = "";
                for (var i = 0; i < subcell; i++)
                {
                    if (i > 0) text += ' ';
                    text += grid.getSubCellProperty("head", headCellIndex, i, "text");
                }
            }
        }
    }

    // 숨김 처리
    grid.set_enableevent(false);
    for (var i = 0, len = columns.length; i < len; i++)
    {
        grid.setFormatColProperty(columns[i].col, "size", 0);
    }
    grid.set_enableevent(true);

    var hidingInfo = {
        'columns': columns,
        'text': text
    };
    grid._hidingInfos.push(hidingInfo);
}

/**
 * 대상 그리드에 숨겨진 모든 칼럼을 보여준다.
 * @param  {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.showGridColumnAll = function(grid)
{
    var hidingInfos = grid._hidingInfos;
    var info, columns;
    grid.set_enableevent(false);
    for (var i = 0, len = hidingInfos.length; i < len; i++)
    {
        info = hidingInfos[i];
        columns = info.columns;

        for (var j = 0, len2 = columns.length; j < len2; j++)
        {
            grid.setFormatColProperty(columns[j].col, "size", columns[j].size);
        }
    }
    grid.set_enableevent(true);

    grid._hidingInfos = [];
}

/**
 * 주어진 칼럼정보 index 에 해당하는 칼럼을 찾아 보여준다.
 * @param  {Grid} grid 대상 Grid Component
 * @param  {array} indexes 보여질 칼럼 정보 index
 * @memberOf nxlib.grid
 */
nxlib.grid.showGridColumnByIndex = function(grid, indexes)
{
    var hidingInfos = grid._hidingInfos;
    var index, info, columns;

    grid.set_enableevent(false);
    for (var i = 0, len = indexes.length; i < len; i++)
    {
        index = indexes[i];
        info = hidingInfos[index];
        columns = info.columns;

        for (var j = 0, len2 = columns.length; j < len2; j++)
        {
            grid.setFormatColProperty(columns[j].col, "size", columns[j].size);
        }

        hidingInfos.removeAt(index);
    }
    grid.set_enableevent(true);
}

/**
 * 컬럼 숨김 정보를 String으로 변환하여 가져온다.
 * @param {Grid} obj 대상 Grid Component
 * @return {string} 컬럼 숨김 정보
 * @memberOf nxlib.grid
 */
nxlib.grid.getHidingInfos = function(grid)
{
    var hidingInfos = grid._hidingInfos;

    if (hidingInfos.length == 0)
    {
        return;
    }

    var tmpStr = "";

    for (var i = 0, len = hidingInfos.length; i < len; i++)
    {
        tmpStr += "{";

        var columns = hidingInfos[i].columns;
        var tmpColStr = "[";

        for (var j = 0, colLen = columns.length; j < colLen; j++)
        {
            tmpColStr += "{'col': " + columns[j].col + ", ";
            tmpColStr += "'band': '" + columns[j].band + "', ";
            tmpColStr += "'size': " + columns[j].size + "}";

            if (j < colLen - 1)   tmpColStr += ", ";
        }

        tmpColStr += "]";

        tmpStr += "'columns': " + tmpColStr + ", ";
        tmpStr += "'text': '" + hidingInfos[i].text + "'";
        tmpStr += "}";

        if (i < len - 1)   tmpStr += nxlib.grid.SEPARATOR_HIDING_INFOS;
    }

    return tmpStr;
}

/**
 * string으로 된 컬럼 숨김 정보를 그리드에 설정한다.
 * @param {Grid} obj 대상 Grid Component
 * @param {string} text 컬럼 숨김 정보
 * @memberOf nxlib.grid
 */
nxlib.grid.setHidingInfos = function(grid, text)
{
    grid._hidingInfos = [];

    var hidingInfos = text.split(nxlib.grid.SEPARATOR_HIDING_INFOS);
    for (var i = 0, len = hidingInfos.length; i < len; i++)
    {
        var hidingInfo = eval("(" + hidingInfos[i] + ")");
        grid._hidingInfos.push(hidingInfo);
    }
}

nxlib.grid.useColumnHiding = true;