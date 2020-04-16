/**
 * @fileoverview 그리드 찾기/바꾸기 기능 라이브러리
 */

/**
 *  Grid 지원 String Mask 문자<br><br>
 *
 *  @ : 모든 Ascii 문자(한글등 다국언어 불가)<br>
 *  # : 모든 10진수 숫자(0-9)<br>
 *  * : 모든 알파벳 문자(a-zA-Z)<br>
 *  9 : 모든 알파벳, 숫자(a-zA-Z0-9)<br>
 *  A : 대문자 알파벳(A-Z)<br>
 *  a : 소문자 알파벳(a-z)<br>
 *  Z : 대문자 알파벳, 숫자(A-Z0-9)<br>
 *  z : 소문자 알파벳, 숫자(a-z0-9)
 * @type {Object}
 * @const
 */
nxlib.grid._STRING_MASK_CHAR = {
    "@": /[\x20-\x7D]/, // /[\u0020-\u00ff]/,
    "#": /[0-9]/,
    "*": /[a-zA-Z]/,
    "9": /[a-zA-Z0-9]/,
    "A": /[A-Z]/,
    "a": /[a-z]/,
    "Z": /[A-Z0-9]/,
    "z": /[a-z0-9]/
};

/**
 * 빈 값
 * @type {String}
 * @const
 */
nxlib.grid._CHK_EMPTY = String.fromCharCode(0x08);

/**
 * 찾기 결과가 없을 때 표시할 메시지
 * @type {String}
 * @const
 */
nxlib.grid.GRID_FIND_NO_RESULT_MESSAGE = "\"{0}\" 을(를) 더 이상 찾을 수 없습니다.";

/**
 * 모두 바꾸기시 변경 개수를 표시할 메시지
 * @type {String}
 * @const
 */
nxlib.grid.GRID_REPLACE_COUNT_MESSAGE = "{0}개 항목이 변경되었습니다.";

/**
 * 그리드 찾기/바꾸기 기능 초기화 함수
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridFindReplace = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridFindReplace) return;

    grid.addEventHandler("onkeydown", nxlib.grid.gridFindReplaceOnkeydown, form);

    var ds = form.gridRClickDataset; // 우클릭 메뉴 데이터셋
    var row = -1;

    if (ds)
    {
        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "findReplace");
        ds.setColumn(row, "id", "find");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "찾기");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "findReplace");
        ds.setColumn(row, "id", "replace");
        ds.setColumn(row, "level", "0");
        ds.setColumn(row, "caption", "찾기 및 바꾸기");
        ds.setColumn(row, "enable", "true");

        row = ds.addRow();
        ds.setColumn(row, "band", "body");
        ds.setColumn(row, "groupId", "");
        ds.setColumn(row, "id", "separatorFix");
        ds.setColumn(row, "level", "");
        ds.setColumn(row, "caption", "-");
        ds.setColumn(row, "enable", "false");
    }

    grid.initGridFindReplace = true;
}

/**
 * 찾기/바꾸기 팝업 호출
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {KeyEventInfo} e KeyEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.gridFindReplaceOnkeydown = function(obj, e)
{
    var keycode = e.keycode;

    if (e.ctrlKey)
    {
        // Ctrl + F (찾기 팝업)
        if (keycode == 70)
        {
            nxlib.grid.showGridFindReplace(obj, "find");
        }
        // Ctrl + R (바꾸기 팝업)
        else if (keycode == 82)
        {
            nxlib.grid.showGridFindReplace(obj, "replace");
        }
    }
}

/**
 * 찾기/바꾸기 팝업
 * @param {Grid} grid 대상 Grid Component
 * @param {string} type 찾기(find) 또는 바꾸기(replace)
 * @memberOf nxlib.grid
 */
nxlib.grid.showGridFindReplace = function(grid, type)
{
    var name, url;
    var width, height;
    var form = grid.parent;
    var div;

    if (type == "find")
    {
        name = "_GridFindPop";
        url = "comm::GridFindPop.xfdl";
        width = 318;
        height = 200;

        div = form.components["_GridFindReplacePop"];
        if (div && div.visible)
        {
            div.set_visible(false);
        }
    }
    else
    {
        name = "_GridFindReplacePop";
        url = "comm::GridFindReplacePop.xfdl";
        width = 318;
        height = 220;

        div = form.components["_GridFindPop"];
        if (div && div.visible)
        {
            div.set_visible(false);
        }
    }

    div = form.components[name];
    if (Eco.isEmpty(div))
    {
        // add div component
        var x = Math.round((form.getOffsetWidth() - width) / 2);
        var y = Math.round((form.getOffsetHeight() - height) / 2);

        div = new Div();
        div.init(name, "absolute", x, y, width, height);
        div.style.set_border("1px solid gray");
        form.addChild(div.name, div);

        div.set_async(false);

        // 찾기/바꾸기 대상 그리드 지정
        div.targetGrid = grid;

        div.set_url(url);
        div.show();

        form.components[name].addEventHandler("ondrag", nxlib.grid.findReplaceOnDragHandler, form);
        form.components[name].addEventHandler("ondragmove", nxlib.grid.findReplaceOnDragMoveHandler, form);
    }
    else
    {
        // 찾기/바꾸기 대상 그리드 지정
        div.targetGrid = grid;
        div.set_visible(true);
        div.setFocus();
        div.edt_find.setFocus();
    }
}

/**
 * 찾기/바꾸기 Div drag 이벤트
 * @param  {Div} obj Div Component
 * @param  {object} e DragEventInfo object
 */
nxlib.grid.findReplaceOnDragHandler = function(obj, e)
{
    obj.dragXPos = obj.getOffsetLeft() - e.screenX;
    obj.dragYPos = obj.getOffsetTop() - e.screenY;
    return true;
}

/**
 * 찾기/바꾸기 Div dragmove 이벤트
 * @param  {Div} obj Div Component
 * @param  {object} e DragEventInfo object
 */
nxlib.grid.findReplaceOnDragMoveHandler = function(obj, e)
{
    obj.move(e.screenX + obj.dragXPos, e.screenY + obj.dragYPos);
}

/**
 * 주어진 문자열을 그리드에서 찾는다.
 * @param {Grid} grid 대상 Grid Component
 * @param {string} findText 찾을 문자열
 * @param {object} option 찾을 옵션
 * @return {array} 찾은 [행, 셀] 인덱스.
 * @memberOf nxlib.grid
 */
nxlib.grid.findGridText = function(grid, findText, option)
{
    // F3 발생 시 마지막 찾은 문자열 계속 찾기 위해 값 지정
    grid.lastFindText = findText;
    grid.lastFindOption = option;

    // 찾을 옵션
    var direction = option.direction;
    var position = option.position;
    var scope = option.scope;
    var condition = option.condition;
    var strict = option.strict;

    var dataset = grid.getBindDataset();
    var startCell = (position == "current" ? grid.currentcell : grid.lastFindCell);
    var startRow = (position == "current" ? grid.currentrow : grid.lastFindRow);

    // 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
    if (scope == "col" && !Eco.isEmpty(option.cell))
    {
        startCell = option.cell;
    }

    var findRow = findCell = -1;
    var rowCnt = dataset.rowcount;
    var bodyCellCnt = grid.getCellCount("body");
    var loopCnt;

    // findText 를 가공하기 전에 찾을 문자열 목록에 등록
    nxlib.grid.appendFindReplaceCache("find", findText);

    // 대소문자 구분
    if (!strict)
    {
        findText = findText.toUpperCase();
    }

    // 전체 범위 찾기
    if (scope == "all")
    {
        // 시작 cell 조정
        if (direction == "prev")
        {
            startCell -= 1;
            if (startCell < 0)
            {
                startCell = bodyCellCnt - 1;
                startRow -= 1;
                if (startRow < 0)
                {
                    startRow = rowCnt - 1;
                }
            }
        }
        else
        {
            startCell += 1;
            if (startCell > (bodyCellCnt - 1))
            {
                startCell = 0;
                startRow += 1;
                if (startRow > (rowCnt - 1))
                {
                    startRow = 0;
                }
            }
        }

        loopCnt = rowCnt;
        while (loopCnt > 0)
        {
            while (true)
            {
                // 문자열 비교
                if (nxlib.grid.compareFindText(grid, startRow, startCell, findText, condition, strict))
                {
                    findRow = startRow;
                    findCell = startCell;
                    break;
                }

                // 방향 (이전, 다음)
                if (direction == "prev")
                {
                    startCell -= 1;
                    if (startCell < 0)
                    {
                        break;
                    }
                }
                else
                {
                    startCell += 1;
                    if (startCell > (bodyCellCnt - 1))
                    {
                        break;
                    }
                }
            }

            if (findRow > -1 && findCell > -1) break;

            // 방향 (이전, 다음)
            if (direction == "prev")
            {
                startRow -= 1;
                if (startRow < 0)
                {
                    startRow = rowCnt - 1;
                }
                startCell = (bodyCellCnt - 1);
            }
            else
            {
                startRow += 1;
                if (startRow > (rowCnt - 1))
                {
                    startRow = 0;
                }
                startCell = 0;
            }

            loopCnt--;
        }
    }
    else if (scope == "row")
    {
        // 행 범위 찾기

        // 시작 cell 조정
        if (direction == "prev")
        {
            startCell -= 1;
            if (startCell < 0)
            {
                startCell = bodyCellCnt - 1;
            }
        }
        else
        {
            startCell += 1;
            if (startCell > (bodyCellCnt - 1))
            {
                startCell = 0;
            }
        }

        var loopCnt = startCell + bodyCellCnt;
        while (loopCnt > 0)
        {
            // 문자열 비교
            if (nxlib.grid.compareFindText(grid, startRow, startCell, findText, condition, strict))
            {
                findRow = startRow;
                findCell = startCell;
                break;
            }

            // 방향 (이전, 다음)
            if (direction == "prev")
            {
                startCell -= 1;
                if (startCell < 0)
                {
                    startCell = bodyCellCnt - 1;
                }
            }
            else
            {
                startCell += 1;
                if (startCell > (bodyCellCnt - 1))
                {
                    startCell = 0;
                }
            }
            loopCnt--;
        }
    }
    else if (scope == "col")
    {
        // 열 범위 찾기

        // 시작 cell 조정
        if (direction == "prev")
        {
            startRow -= 1;
            if (startRow < 0)
            {
                startRow = rowCnt - 1;
            }
        }
        else
        {
            startRow += 1;
            if (startRow > rowCnt)
            {
                startRow = 0;
            }
        }

        var loopCnt = rowCnt;
        while (loopCnt > 0)
        {
            // 문자열 비교
            if (nxlib.grid.compareFindText(grid, startRow, startCell, findText, condition, strict))
            {
                findRow = startRow;
                findCell = startCell;
                break;
            }

            // 방향 (이전, 다음)
            if (direction == "prev")
            {
                startRow -= 1;
                if (startRow < 0)
                {
                    startRow = rowCnt - 1;
                }
            }
            else
            {
                startRow += 1;
                if (startRow > (rowCnt - 1))
                {
                    startRow = 0;
                }
            }

            loopCnt--;
        }
    }

    // 마지막 찾은 위치 지정
    // 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
    if (findRow > -1 && findCell > -1)
    {
        grid.lastFindRow = findRow;
        grid.lastFindCell = findCell;
    }

    return [findRow, findCell];
}

/**
 * 주어진 행, 셀 인덱스에 해당하는 그리드 데이터와
 * 문자열을 비교하여 찾아진 결과를 반환
 * @param {Grid} grid 대상 Grid Component
 * @param {number} row 찾을 행 인덱스
 * @param {number} cell 찾을 셀 인덱스
 * @param {string} findText 찾을 문자열
 * @param {string} condition 찾을 조건(equal/inclusion)
 * @param {boolean} strict 대소문자 구분 (true/false)
 * @return {boolean} 찾기 성공.
 * @memberOf nxlib.grid
 */
nxlib.grid.compareFindText = function(grid, row, cell, findText, condition, strict)
{
    var cellText = grid.getCellText(row, cell);
    var displayType = grid.getCellProperty("body", cell, "displaytype");

    // displayType 이 normal일 경우
    // dataType 을 체크하여 displayType 을 변경
    if (Eco.isEmpty(displayType) || displayType == "normal")
    {
        var dataType = nxlib.grid.getBindColumnType(grid, cell);
        switch (dataType)
        {
            case 'INT':
            case 'FLOAT':
            case 'BIGDECIMAL':
                displayType = "number";
                break;
            case 'DATE':
            case 'DATETIME':
            case 'TIME':
                displayType = "date";
                break;
            default:
                displayType = "strign";
                break;
        }
    }

    // currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
    if (displayType == "currency")
    {
        var code = cellText.charCodeAt(0);
        if (code == 65510 || code == 92)
        {
            cellText = cellText.substr(1);
        }

        code = findText.charCodeAt(0);
        if (code == 65510 || code == 92)
        {
            findText = findText.substr(1);
        }
    }

    // 대소문자 구분
    if (!strict)
    {
        cellText = cellText.toUpperCase();
    }

    // 일치/포함
    if (condition == "equal")
    {
        if (findText == cellText)
        {
            return true;
        }
    }
    else
    {
        if (cellText.indexOf(findText) > -1)
        {
            return true;
        }
    }

    return false;
}

/**
 * 찾기/바꾸기 문자열 추가
 * @param {string} type 찾기(find) 또는 바꾸기(replace)
 * @param {string} text 대상 문자열
 * @memberOf nxlib.grid
 */
nxlib.grid.appendFindReplaceCache = function(type, text)
{
    // 문자열 캐시 생성 (application에 추가)
    var stringCache = application.gridFindReplaceStringCache;
    if (nexacro._isUndefined(stringCache))
    {
        stringCache = {
            'findList': [],
            'replaceList': []
        };

        application.gridFindReplaceStringCache = stringCache;
    }

    // 목록에 없으면 첫번째에 삽입하고 이미 등록된 문자열은 첫번째로 이동
    var list = stringCache[type + "List"];
    var index = list.indexOf(text);
    if (index < 0)
    {
        list.splice(0, 0, text);
    }
    else
    {
        var i, tmp;
        index = parseInt(index, 10);

        if (index !== 0 &&
            0 <= index && index <= list.length &&
            0 <= 0 && 0 <= list.length)
        {

            tmp = list[index];
            if (index < 0)
            {
                for (i = index; i < 0; i++)
                {
                    list[i] = list[i + 1];
                }
            }
            else
            {
                for (i = index; i > 0; i--)
                {
                    list[i] = list[i - 1];
                }
            }
            list[0] = tmp;
        }
    }
}

/**
 * 찾기/바꾸기 문자열 목록 얻어오기
 * @param {string} type 찾기(find) 또는 바꾸기(replace)
 * @return {array} 문자열 캐시 배열
 * @memberOf nxlib.grid
 */
nxlib.grid.getFindReplaceCache = function(type)
{
    // 문자열 캐시
    var stringCache = application.gridFindReplaceStringCache;
    if (nexacro._isUndefined(stringCache))
    {
        return [];
    }

    return stringCache[type + "List"];
}

/**
 * 주어진 바디셀에 지정된 bind 정보를 통해
 * 데이터셋의 칼럼 타입을 반환.
 * @param {Grid} grid 대상 Grid Component
 * @param {number} cell 찾을 셀 인덱스
 * @return {boolean} 데이터 타입.
 * @memberOf nxlib.grid
 */
nxlib.grid.getBindColumnType = function(grid, cell)
{
    var dataType = null;
    var dataset = grid.getBindDataset();
    var bindColid = grid.getCellProperty("body", cell, "text");
    bindColid = bindColid.replace("bind:", "");

    if (!Eco.isEmpty(bindColid))
    {
        var colInfo = dataset.getColumnInfo(bindColid);
        if (!Eco.isEmpty(colInfo))
        {
            dataType = colInfo.type;
        }
    }

    return dataType;
}

/**
 * 찾기 결과를 그리드에 표시한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {number} findRow 찾아진 행 인덱스
 * @param {number} findCell 찾아진 셀 인덱스
 * @memberOf nxlib.grid
 */
nxlib.grid.markGridFindResult = function(grid, findRow, findCell)
{
    var dataset = grid.getBindDataset();

    dataset.set_rowposition(findRow);
    grid.set_selecttype("cell");
    grid.setCellPos(findCell);
    grid.set_selecttype("area");
}

/**
 * 주어진 문자열을 그리드에서 찾아서 바꿀 문자열로 변경한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {string} findText 찾을 문자열
 * @param {string} replaceText 바꿀 문자열
 * @param {object} option 찾을 옵션
 * @param {boolean} all 모두 바꾸기 여부
 * @return {number} 변경 항목 개수.
 * @memberOf nxlib.grid
 */
nxlib.grid.replaceGridText = function(grid, findText, replaceText, option, all)
{
    // F3 발생 시 마지막 찾은 문자열 계속 찾기 위해 값 지정
    grid.lastFindText = findText;
    grid.lastFindOption = option;

    if (Eco.isEmpty(all))
    {
        all = false;
    }

    // 찾을 옵션 ( 바꾸기의 범위는 특정 칼럼만 지원)
    var direction = option.direction;
    var position = option.position;
    var condition = option.condition;
    var strict = option.strict;
    var cell = option.cell;

    var dataset = grid.getBindDataset();

    // 바꾸기의 범위는 특정 칼럼만 지원
    var startCell = option.cell;
    var startRow;

    if (position == "current")
    {
        startRow = grid.currentrow;
    }
    else
    {
        var lastReplaceRow = grid.lastReplaceRow;
        if (nexacro._isUndefined(lastReplaceRow))
        {
            startRow = 0;
        }
        else
        {
            startRow = lastReplaceRow;
        }
    }

    var results = [];
    var findRow = findCell = -1;
    var rowCnt = dataset.rowcount;
    var bodyCellCnt = grid.getCellCount("body");

    // 바꿀 문자열 목록에 등록
    nxlib.grid.appendFindReplaceCache("replace", replaceText);

    // 대소문자 구분
    if (!strict)
    {
        findText = findText.toUpperCase();
    }

    // 열 범위 바꾸기
    var result;
    var loopCnt = rowCnt;
    while (loopCnt > 0)
    {
        // 문자열 비교
        if (nxlib.grid.compareFindText(grid, startRow, startCell, findText, condition, strict))
        {
            findRow = startRow;
            findCell = startCell;
            result = nxlib.grid.replaceGridCellText(grid, findRow, findCell, findText, replaceText, strict);
            results.push(result);
            if (!all) break;
        }

        // 방향 (이전, 다음)
        if (direction == "prev")
        {
            startRow -= 1;
            if (startRow < 0)
            {
                startRow = rowCnt - 1;
            }
        }
        else
        {
            startRow += 1;
            if (startRow > (rowCnt - 1))
            {
                startRow = 0;
            }
        }

        loopCnt--;
    }

    // 마지막 바꾸기 위치 지정
    grid.lastReplaceRow = findRow;

    return results;
}

/**
 * 바꾸기에 의해 찾아진 행, 셀 인덱스에 해당하는 데이터를 실제 변경한다.
 * @param {Grid} grid 대상 Grid Component
 * @param {number} findRow 찾아진 행 인덱스
 * @param {number} findCell 찾아진 셀 인덱스
 * @param {string} findText 찾을 문자열
 * @param {string} replaceText 바꿀 문자열
 * @param {boolean} strict 대소문자 구분
 * @memberOf nxlib.grid
 */
nxlib.grid.replaceGridCellText = function(grid, findRow, findCell, findText, replaceText, strict)
{
    var result = {
        'replace': true,
        'message': '처리되었습니다.',
        'row': findRow,
        'cell': findCell
    };

    // expr 등에 의해 셀이 실제 입력 가능한지 테스트 후 처리
    var dataset = grid.getBindDataset();
    dataset.set_rowposition(findRow);
    grid.setCellPos(findCell);

    var editable = grid.showEditor(true);
    if (editable)
    {
        grid.showEditor(false);
    }
    else
    {
        return;
    }

    var mask = grid.getCellProperty("body", findCell, "mask");
    if (typeof mask == "object")
    {
        mask = mask.toString();
    }

    var displayType = grid.getCellProperty("body", findCell, "displaytype");
    var editType = grid.getCellProperty("body", findCell, "edittype");
    var text = grid.getCellProperty("body", findCell, "text");
    var bindColid = text.replace("bind:", "");

    // displayType 이 normal일 경우
    // dataType 을 체크하여 displayType 을 변경
    var dataType = nxlib.grid.getBindColumnType(grid, findCell);
    if (Eco.isEmpty(displayType) || displayType == "normal")
    {
        switch (dataType)
        {
            case 'INT':
            case 'FLOAT':
            case 'BIGDECIMAL':
                displayType = "number";
                break;
            case 'DATE':
            case 'DATETIME':
            case 'TIME':
                displayType = "date";
                break;
            default:
                displayType = "string";
                break;
        }
    }

    var replace;
    var replaceVal;
    var columnValue = dataset.getColumn(findRow, bindColid);
    var displayValue = grid.getCellText(findRow, findCell);

    if (displayType == "combo" && editType == "combo")
    {
        // 변경될 문자열에 해당하는 콤보리스트 존재 시 변경
        var comboDataset = grid.getCellProperty("body", findCell, "combodataset");
        comboDataset = nxlib.lookup(grid.parent, comboDataset);
        var comboCodeCol = grid.getCellProperty("body", findCell, "combocodecol");
        var comboDataCol = grid.getCellProperty("body", findCell, "combodatacol");

        var row = comboDataset.findRow(comboDataCol, replaceText);
        if (row > -1)
        {
            replaceVal = comboDataset.getColumn(row, comboCodeCol);
        }
        else
        {
            result.replace = false;
            result.message = "바꿀 문자열에 해당하는 데이터 없음";
        }
    }
    else if (displayType == "number" || displayType == "currency")
    {
        // currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 변경
        if (displayType == "currency")
        {
            var code = findText.charCodeAt(0);
            if (code == 65510 || code == 92)
            {
                findText = findText.substr(1);
            }

            code = replaceText.charCodeAt(0);
            if (code == 65510 || code == 92)
            {
                replaceText = replaceText.substr(1);
            }

            code = displayValue.charCodeAt(0);
            if (code == 65510 || code == 92)
            {
                displayValue = displayValue.substr(1);
            }
        }

        // 셀에 보여지는 값에서 찾는 문자열 값을 변경

        // 대소문자 구분
        if (strict)
        {
            displayValue = displayValue.replace(findText, replaceText);
        }
        else
        {
            displayValue = nxlib.grid.replaceIgnoreCase(displayValue, findText, replaceText);
        }

        // 숫자형 이외 제거
        replaceVal = nxlib.grid.replaceNumberMaskValue(displayValue);
    }
    else if (displayType == "date")
    {
        if (columnValue == null)
        {
            // 값이 없을때 보이는 "0000-01-01" 과 같이
            // 텍스트에서 찾아 질 경우가 있다.
            result.replace = false;
            result.message = "유효한 날짜가 아닙니다.";
        }
        else
        {
            // mask 속성이 없으면 calendar 의 editformat을 가져옴 (yyyy-MM-dd)
            if (Eco.isEmpty(mask))
            {
                mask = grid.controlcalendar.editformat;
            }

            var ret = nxlib.replaceDateMaskValue(columnValue, displayValue, findText, replaceText, mask, strict);
            replaceVal = ret[1];

            if (ret[0] == false)
            {
                result.replace = false;
                result.message = ret[2];
            }
        }
    }
    else
    {
        if (Eco.isEmpty(mask))
        {
            // 대소문자 구분
            if (strict)
            {
                replaceVal = columnValue.replace(findText, replaceText);
            }
            else
            {
                replaceVal = nxlib.grid.replaceIgnoreCase(columnValue, findText, replaceText);
            }
        }
        else
        {
            var maskChar = grid.getCellProperty("body", findCell, "maskchar");
            replaceVal = nxlib.grid.replaceStringMaskValue(columnValue, displayValue, findText, replaceText, mask, maskChar, strict);
        }
    }

    if (result.replace)
    {
        dataset.setColumn(findRow, bindColid, replaceVal);
    }

    return result;
}

/**
 * 문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환한다.
 * @param {string} sOrg 원래 문자열( 예 : "aaBBbbcc" )
 * @param {string} sRepFrom 찾고자 하는 문자열( 예 : "bb" )
 * @param {string} sRepTo 치환될 문자열 ( 예 : "xx" )
 * @return {number} 치환된 문자열 ( 예 : "aaxxxxccxx" )
 * @memberOf nxlib.grid
 */
nxlib.grid.replaceIgnoreCase = function(sOrg, sRepFrom, sRepTo)
{
    var pos, nStart = 0,
        sRet = "";

    while (1)
    {
        pos = sOrg.toLowerCase().indexOf(sRepFrom.toLowerCase(), nStart)

        if (pos < 0)
        {
            sRet += sOrg.substr(nStart);
            break;
        }
        else
        {
            sRet += sOrg.substr(nStart, pos - nStart);
            sRet += sRepTo;
            nStart = pos + sRepFrom.length;
        }
    }

    return sRet;
}

/**
 * 숫자형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
 * @param {string} numString 숫자형 문자열
 * @return {string} 변환값 문자열
 * @memberOf nxlib.grid
 */
nxlib.grid.replaceNumberMaskValue = function(numString)
{
    numString = numString.trim();

    var numReg = /[0-9]/;
    var bPoint = false; // 소숫점은 1개만 인정.
    var bInside = false; // 부호는 숫자가 나오기 전에만 인정.
    var c, buf = [];

    for (var i = 0, len = numString.length; i < len; i++)
    {
        c = numString.charAt(i);
        if ((c == '+' || c == '-') && (bInside === false))
        {
            // 부호는 숫자가 나오기 전에만 인정.
            buf.push(c);
            bInside = true;
        }
        else if (numReg.test(c))
        {
            // 숫자인경우 인정.
            buf.push(c);
            bInside = true;
        }
        else if (c == "." && bPoint === false)
        {
            // 소숫점은 1회만 인정.
            buf.push(c);
            bPoint = true;
            bInside = true;
        }
        else if (c != ",")
        {
            return "";
        }
    }
    return buf.join("");
}

/**
 * 날짜형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
 * @param {*} columnValue 변경전 데이터셋의 실제 값
 * @param {string} displayValue 보여지는 문자열
 * @param {string} findText 찾을 문자열
 * @param {string} replaceText 바꿀 문자열
 * @param {string} mask 마스크 속성값
 * @param {boolean} strict 대소문자 구분 여부
 * @return {object} 변환정보 (날짜여부, 변경된 문자열, 에러메시지)
 * @memberOf nxlib.grid
 */
nxlib.grid.replaceDateMaskValue = function(columnValue, displayValue, findText, replaceText, mask, strict)
{
    if (Eco.isEmpty(replaceText))
    {
        // 바꿀 문자열이 빈값이 되지 않도록 패딩
        replaceText = replaceText.padRight(findText.length, " ");
    }

    // 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
    var replaceDisplayValue;

    // 대소문자 구분
    if (strict)
    {
        replaceDisplayValue = displayValue.replace(findText, replaceText);
    }
    else
    {
        replaceDisplayValue = nxlib.grid.replaceIgnoreCase(displayValue, findText, replaceText);
    }

    // 바꿀 값이 없다면 값을 제거한다.
    if (Eco.isEmpty(replaceDisplayValue.trim()))
    {
        return [true, null];
    }

    // 2. mask 문자 분리
    var arrMask = nxlib.grid.parseDateMask(mask);

    // 3. 변경한 값과 마스크 값을 비교하면서 실제 값을 추출하고 유효날짜 판단
    var tmpStr = "";
    var isDate = true;
    var errorMsg = "";
    var valueIndex = 0;
    var displayIndex = 0;
    var dateValue = [];
    var errorValue = [];
    var checkMask;
    var checkDayIndex = -1;
    var checkYearValue = "";
    var checkMonthValue = "";

    for (var i = 0, len = arrMask.length; i < len; i++)
    {
        checkMask = arrMask[i];
        if (!nexacro._isNumber(checkMask))
        {
            switch (checkMask)
            {
                case 'yyyy':
                    tmpStr = replaceDisplayValue.substr(displayIndex, 4);

                    if (tmpStr.length != 4 || !nexacro.isNumeric(tmpStr))
                    {
                        isDate = false;
                        errorMsg = "연도가 올바르지 않습니다.";
                    }

                    // 일자체크를 위해
                    checkYearValue = tmpStr;

                    dateValue[dateValue.length] = tmpStr.trim(" ");
                    errorValue[errorValue.length] = tmpStr.trim(" ");
                    displayIndex += 4;
                    valueIndex += 4;
                    break;
                case 'yy':
                case 'MM':
                case 'dd':
                case 'hh':
                case 'HH':
                case 'mm':
                case 'ss':
                    tmpStr = replaceDisplayValue.substr(displayIndex, 2);

                    if (tmpStr.length == 2 && nexacro.isNumeric(tmpStr))
                    {
                        if (checkMask == "yy")
                        {
                            // 앞 두자리를 원본 데이터로 채운다.
                            tmpStr = columnValue.substr(valueIndex, 2) + tmpStr;

                            // 일자체크를 위해
                            checkYearValue = tmpStr;
                        }
                        else if (checkMask == "MM")
                        {
                            if (parseInt(tmpStr) < 1 || parseInt(tmpStr) > 12)
                            {
                                isDate = false;
                                errorMsg = "월이 올바르지 않습니다.";
                            }

                            // 일자체크를 위해
                            checkMonthValue = tmpStr;
                        }
                        else if (checkMask == "dd")
                        {
                            // 윤년을 적용하기 위해서는 연도가 필요한데
                            // 무조건 연도(yyyy, yy)가 일(dd) 보다 앞에 온다는
                            // 보장이 없으므로 루프가 끝난 후 체크한다.
                            checkDayIndex = dateValue.length;
                        }
                        else if (checkMask == "hh" || checkMask == "HH")
                        {
                            if (parseInt(tmpStr) < 0 || parseInt(tmpStr) > 23)
                            {
                                isDate = false;
                                errorMsg = "시간이 올바르지 않습니다.";
                            }
                        }
                        else if (checkMask == "mm" || checkMask == "ss")
                        {
                            if (parseInt(tmpStr) < 0 || parseInt(tmpStr) > 59)
                            {
                                isDate = false;
                                errorMsg = "분이 올바르지 않습니다.";
                            }
                        }
                    }
                    else
                    {
                        isDate = false;
                        errorMsg = "날짜 형식이 올바르지 않습니다.";
                    }

                    dateValue[dateValue.length] = tmpStr.trim(" ");
                    errorValue[errorValue.length] = tmpStr.trim(" ");
                    displayIndex += 2;
                    valueIndex += 2;
                    break;
            } // end switch
        }
        else
        {
            // dateValue 는 실제 적용할 값이므로 skip 하자

            // 마스크 문자가 아닌 경우 표시문자 이므로 원래 값의 것을 사용
            errorValue[errorValue.length] = displayValue.charAt(checkMask);
            displayIndex += 1;
        }
    }

    // 일자 유효 체크
    if (!Eco.isEmpty(checkYearValue) &&
        !Eco.isEmpty(checkMonthValue) && checkDayIndex > -1)
    {
        var dt = checkYearValue + checkMonthValue + "01";
        var inputDay = parseInt(dateValue[checkDayIndex]);
        var lastDay = nxlib.grid.getLastDayOfMonth(dt);

        if (inputDay < 1 || inputDay > lastDay)
        {
            isDate = false;

            var isLeapYear = nxlib.grid.isLeapYear(dt);
            if (!isLeapYear && inputDay == 29)
            {
                errorMsg = "해당 연도는 윤년이 아닙니다.";
            }
            else
            {
                errorMsg = "일자가 올바르지 않습니다.";
            }
        }
    }

    if (isDate)
    {
        return [isDate, dateValue.join("")];
    }
    else
    {
        return [isDate, errorValue.join(""), errorMsg];
    }
}

/**
 * 날짜형 마스크 구문을 분석합니다.
 * @param {string} mask 마스크 속성값
 * @return {array} 구문값
 * @memberOf nxlib.grid
 */
nxlib.grid.parseDateMask = function(mask)
{
    /*
        Grid 지원 Date Mask 문자

        yyyy,yy : 년도
        MM : 월
        dd : 일
        ddd : 요일
        hh : 시간
        mm : 분
        ss : 초

         그리드 mask 속성이 없으면 Calendar의 editformat을 가져오는데
         더 많은 mask 문자를 지원한다.
         하지만 그리드에서는 제대로 동작하지 않으므로 제외하도록 한다.
    */

    var dateMaskCache = application.dateMaskCache;
    if (nexacro._isUndefined(dateMaskCache))
    {
        application.dateMaskCache = {};

        dateMaskCache = application = dateMaskCache;
    }

    var arrMask = dateMaskCache[mask];
    if (arrMask) return arrMask;

    arrMask = [];

    var maskArr = mask.split("");
    var tmpStr = "";
    var tokenStr = "";
    var seq = 0;

    for (var i = 0, len = mask.length; i < len;)
    {
        tmpStr = mask.substr(i, 4);
        if (tmpStr == "yyyy")
        {
            arrMask[seq] = tmpStr;
            i += 4;
            seq++;
            continue;
        }

        // ddd => 요일은 입력할 수 없다.
        tmpStr = mask.substr(i, 3);
        if (tmpStr == "ddd")
        {
            //arrMask[seq] = tmpStr;
            i += 3;
            //seq++;
            continue;
        }

        // hh의 경우 (Calendar는 HH이며 그리드는 둘다 동작함)
        tmpStr = mask.substr(i, 2);
        if (tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
            tmpStr == "HH" || tmpStr == "hh" || tmpStr == "mm" || tmpStr == "ss")
        {
            arrMask[seq] = tmpStr;
            i += 2;
            seq++;
            continue;
        }

        tokenStr = maskArr[i];

        // 입력되지 않으므로 skip.
        if (tokenStr == "H" || tokenStr == "M" ||
            tokenStr == "d" || tokenStr == "m" || tokenStr == "s")
        {
            //arrMask[seq] = tokenStr;
            //seq++;
        }
        else
        {
            arrMask[seq] = i;
            seq++;
        }
        i++;
    }

    dateMaskCache[mask] = arrMask;

    return arrMask;
}

/**
 * 해당월의 마지막 날짜를 숫자로 구하기.
 * @param {number | string} value yyyyMMdd형태의 날짜 ( 예 : "20121122" ).
 * @return {number} 마지막 날짜 숫자값 ( 예 : 30 ).
 * @memberOf nxlib.grid
 */
nxlib.grid.getLastDayOfMonth = function(value)
{
    var nMonth, nLastDate;

    if (typeof value == 'object' && value instanceof Date)
    {
        nMonth = value.getMonth() + 1;
    }
    else
    {
        nMonth = parseInt(value.substr(4, 2), 10);
    }
    if (nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7 || nMonth == 8 || nMonth == 10 || nMonth == 12)
    {
        nLastDate = 31;
    }
    else if (nMonth == 2)
    {
        if (nxlib.grid.isLeapYear(value) == true)
        {
            nLastDate = 29;
        }
        else
        {
            nLastDate = 28;
        }
    }
    else
    {
        nLastDate = 30;
    }

    return nLastDate;
}

/**
 * 윤년 여부.
 * @param {string} value yyyyMMdd형태의 날짜 ( 예 : "20121122" ).
 * @return {boolean} 윤년 여부.입력되지 않은 경우도 false
 * @memberOf nxlib.grid
 */
nxlib.grid.isLeapYear = function(value)
{
    var result;
    var year;
    if (nexacro._isString(value))
    {
        year = parseInt(value.substring(0, 4), 10);
    }

    if ((year % 4) == 0)
    {
        if ((year % 100) != 0 || (year % 400) == 0)
        {
            result = true;
        }
        else
        {
            result = false;
        }
    }
    else
    {
        result = false;
    }

    return result;
}

/**
 * 문자형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
 * @param {*} columnValue 변경전 데이터셋의 실제 값
 * @param {string} displayValue 보여지는 문자열
 * @param {string} findText 찾을 문자열
 * @param {string} replaceText 바꿀 문자열
 * @param {string} strMask 마스크 속성값
 * @param {string} maskChar 마스크 캐릭터
 * @param {boolean} strict 대소문자 구분 여부
 * @return {string} 변환값 문자열
 * @memberOf nxlib.grid
 */
nxlib.grid.replaceStringMaskValue = function(columnValue, displayValue, findText, replaceText, strMask, maskChar, strict)
{
    if (Eco.isEmpty(replaceText))
    {
        // 바꿀 문자열이 빈값이 되지 않도록 패딩
        replaceText = replaceText.padRight(findText.length, nxlib.grid._CHK_EMPTY);
    }

    // 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
    var replaceDisplayValue;

    // 대소문자 구분
    if (strict)
    {
        replaceDisplayValue = displayValue.replace(findText, replaceText);
    }
    else
    {
        replaceDisplayValue = nxlib.grid.replaceIgnoreCase(displayValue, findText, replaceText);
    }

    // 2. mask 문자 분리
    var maskInfo = nxlib.grid.parseStringMask(strMask, maskChar);

    // 3. 마스크 문자에 매칭되는 실제 값을 추출
    var arrMask = maskInfo[0],
        arrPass = maskInfo[1],
        arrVal = replaceDisplayValue.split(""),
        arrOrg = columnValue.split(""),
        stringValues = [],
        c;

    for (var i = 0, len = arrMask.length; i < len; i++)
    {
        if (arrMask[i] != 0)
        {
            c = arrVal[i];

            if (arrPass[i])
            {
                // 패스워드인데 바꿀 단어가 그대로 이거나 없다면 원본값
                if (c == "*" || Eco.isEmpty(c) || c == nxlib.grid._CHK_EMPTY)
                {
                    c = arrOrg[i];
                }
            }
            else
            {
                if (Eco.isEmpty(c) || c == nxlib.grid._CHK_EMPTY)
                {
                    c = "";
                }
            }
            stringValues[i] = c;
        }
    }

    return stringValues.join("");
}

/**
 * 문자형 마스크 구문을 분석합니다.
 * @param {string} strMask 마스크 속성값
 * @param {string} maskChar 마스크 캐릭터
 * @return {array} 구문값
 * @memberOf nxlib.grid
 */
nxlib.grid.parseStringMask = function(strMask, maskChar)
{
    var stringMaskCache = application.stringMaskCache;
    if (nexacro._isUndefined(stringMaskCache))
    {
        application.stringMaskCache = {};

        stringMaskCache = application.stringMaskCache;
    }

    var res = stringMaskCache[strMask];
    if (res) return res;

    var len = strMask.length,
        arrMask = [],
        arrPass = [],
        arrOrgMask = [],
        bQuote = false,
        bEscape = false,
        bPasswd = false,
        Mask = 0,
        i, nIdx,
        cMasks = strMask.split(""),
        rmaskChar,
        ReserveMasks = nxlib.grid._STRING_MASK_CHAR;

    for (i = 0, nIdx = 0; i < len; i++)
    {
        if (bEscape == false && cMasks[i] == "'")
        { // Mask가 Quotation이 시작될 경우.
            if (bQuote == false)
                bQuote = true;
            else
                bQuote = false;
            continue;
        }
        Mask = 0;
        if (bEscape == false && cMasks[i] == "\\" && !bQuote)
        { // Mask에서 Escape에 진입할 경우.
            bEscape = true;
            continue;
        }
        else if (bEscape)
        { // Mask에서 Escape를 사용할 경우.
            bEscape = false;
        }
        else if (bQuote == false)
        { // Mask에서 Quotation 밖의 글자에 대해.
            rmaskChar = ReserveMasks[cMasks[i]];
            if (rmaskChar)
            {
                Mask = rmaskChar;
            }
            if (cMasks[i] == "{")
            {
                bPasswd = true;
                continue;
            }
            if (cMasks[i] == "}")
            {
                bPasswd = false;
                continue;
            }
        }
        arrMask[nIdx] = Mask;
        arrPass[nIdx] = bPasswd;
        arrOrgMask[nIdx] = cMasks[i];
        nIdx++;
    }

    res = [arrMask, arrPass, arrOrgMask];
    stringMaskCache[strMask] = res;
    return res;
}

nxlib.grid.useFindReplace = true;