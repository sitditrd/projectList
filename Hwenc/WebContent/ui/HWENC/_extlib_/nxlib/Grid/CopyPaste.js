/**
 * @fileoverview 그리드 복사/붙여넣기 기능 라이브러리
 */

/**
 * 컬럼 구분자
 * @type {String}
 * @const
 */
nxlib.grid.COL_SEPERATOR = "\t";

/**
 * 로우 구분자
 * @type {String}
 * @const
 */
nxlib.grid.ROW_SEPERATOR = "\r\n";

/**
 * Grid head에 filer 기능 추가하기 초기화
 * @param {Form} form Form Object
 * @param {Grid} grid 대상 Grid Component
 * @memberOf nxlib.grid
 */
nxlib.grid.initGridCopyPaste = function(form, grid)
{
    // 대상이 이미 초기화 되었는지 확인
    if (grid.initGridCopyPaste) return;

    form.targetGrid = null;
    grid.pForm = form;

    form.addEventHandler("ontimer", nxlib.grid.gridCopyTimerHandler, form);
    grid.addEventHandler("onkeydown", nxlib.grid.gridCopyOnkeydown, form);

    grid.initGridCopyPaste = true;
}

/**
 * copy & paste 처리
 * @param {Grid} obj Event가 발생한 Grid Component
 * @param {KeyEventInfo} e KeyEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.gridCopyOnkeydown = function(obj, e)
{
    var keycode = e.keycode;
    var form = obj.pForm;

    if (nexacro.Browser == "Runtime" || nexacro.Browser == "IE")
    {
        if (e.ctrlKey && !e.shiftKey && !e.altKey)
        {
            if (keycode == 67)
            {
                var startrow = nexacro.toNumber(obj.selectstartrow),
                    endrow = nexacro.toNumber(obj.selectendrow),
                    startcol = nexacro.toNumber(obj.selectstartcol),
                    endcol = nexacro.toNumber(obj.selectendcol);

                var copyData = "";
                var checkIndex = {};

                form.targetGrid = null;

                for (var i = startrow; i <= endrow; i++)
                {
                    for (var j = startcol; j <= endcol; j++)
                    {
                        if (!checkIndex[j])
                        {
                            checkIndex[j] = 1;
                        }

                        var value = obj.getCellValue(i, j);

                        if (!Eco.isEmpty(value) && value != "undefined")
                        {
                            if (j < obj.selectendcol)
                            {
                                copyData += obj.getCellValue(i, j) + nxlib.grid.COL_SEPERATOR;
                            }
                            else
                            {
                                copyData += obj.getCellValue(i, j);
                            }
                        }
                    }

                    if (i < obj.selectendrow)
                    {
                        copyData += nxlib.grid.ROW_SEPERATOR;
                    }
                }

                copyData += nxlib.grid.ROW_SEPERATOR;

                system.clearClipboard();
                system.setClipboard("CF_TEXT", copyData);

                form.targetGrid = obj;
            }
            else if (keycode == 86)
            {
                var copyData = system.getClipboard("CF_TEXT");
                copyData = new String(copyData);
                var rowData = copyData.split(nxlib.grid.ROW_SEPERATOR);
                var rowDataCount = rowData.length - 1;

                if (rowDataCount < 1)
                {
                    e.stopPropagation();
                    return;
                }

                obj.set_enableevent(false);
                obj.set_enableredraw(false);

                var ds = obj.getBindDataset();
                ds.set_enableevent(false);

                var grdCellCount = obj.getCellCount("body");
                var rowCount = ds.getRowCount();
                var startrow = nexacro.toNumber(obj.selectstartrow),
                    endrow = nexacro.toNumber(obj.selectendrow),
                    startcol = nexacro.toNumber(obj.selectstartcol),
                    endcol = 0;

                var currRow = startrow;
                var cellIndex = startcol;
                var maxColumnCount = 0;
                var checkIndex = {};
                //check current cell editType
                for (var i = 0; i < rowDataCount; i++)
                {
                    if (rowCount <= currRow)
                    {
                        ds.addRow();
                    }

                    var columnData = rowData[i].split(nxlib.grid.COL_SEPERATOR);
                    var columnLoopCount = cellIndex + columnData.length;

                    if (columnLoopCount > grdCellCount)
                    {
                        columnLoopCount = grdCellCount;
                    }

                    if (maxColumnCount < columnLoopCount)
                    {
                        maxColumnCount = columnLoopCount;
                    }

                    var k = 0;
                    for (var j = cellIndex; j < columnLoopCount; j++)
                    {
                        if (!checkIndex[j])
                        {
                            checkIndex[j] = 1;
                        }

                        var colid = obj.getCellProperty("body", j, "text").substr(5);
                        var tempValue = columnData[k];
                        if (!Eco.isEmpty(tempValue) && tempValue != "undefined")
                        {
                            ds.setColumn(currRow, colid, tempValue);
                        }

                        k++;
                    }

                    currRow++;
                }

                ds.rowposition = currRow;

                endrow = endrow + rowDataCount - 1;
                endcol = maxColumnCount - 1;

                obj.set_enableredraw(true);
                obj.set_enableevent(true);
                ds.set_enableevent(true);

                obj.selectArea(startrow, startcol, endrow, endcol);

                form.targetGrid = obj;

                //grid enableredraw가 false일 경우
                //event 전파과정에서 error발생을 막기위한 처리.2015.02.25 버전.
                e.stopPropagation();
            }
        }
    }
    else
    {
        if (e.ctrlKey && !e.shiftKey && !e.altKey)
        {
            if (keycode == 67)
            {
                var startrow = nexacro.toNumber(obj.selectstartrow),
                    endrow = nexacro.toNumber(obj.selectendrow),
                    startcol = nexacro.toNumber(obj.selectstartcol),
                    endcol = nexacro.toNumber(obj.selectendcol);

                var checkIndex = {};

                form.targetGrid = undefined;

                var clipText = "";
                for (var i = startrow; i <= endrow; i++)
                {
                    var copyData = [];
                    var styleData = [];

                    for (var j = startcol; j <= endcol; j++)
                    {
                        var value = obj.getCellValue(i, j);
                        copyData.push(value);

                        if (!checkIndex[j])
                        {
                            checkIndex[j] = 1;
                        }

                        if (j < endcol)
                        {
                            clipText += value + nxlib.grid.COL_SEPERATOR;
                        }
                        else
                        {
                            clipText += value;
                        }
                    }

                    clipText += nxlib.grid.ROW_SEPERATOR;
                }

                form.targetGrid = obj;

                var ta = nxlib.grid._createTextarea(clipText);

                form.targetGrid["ta"] = ta;

                form.setTimer(777, 100);

                e.stopPropagation();
            }
            else if (keycode == 86)
            {
                form.targetGrid = obj;
                form.targetEvent = e;

                var ta = nxlib.grid._createTextarea('');
                form.targetGrid["ta"] = ta;

                form.setTimer(888, 100);

                e.stopPropagation();
            }
        }
    }
}

/**
 * 그리드 복사 타이머 이벤트
 * @param {Form} obj Event가 발생한 Form Component
 * @param {TimerEventInfo} e TimerEventInfo
 * @memberOf nxlib.grid
 */
nxlib.grid.gridCopyTimerHandler = function(obj, e)
{
    if (nexacro.Browser == "Runtime" || nexacro.Browser == "IE")
    {

    }
    else
    {
        var timerid = e.timerid;
        obj.killTimer(timerid);

        if (timerid == 777)
        {
            var ta = obj.targetGrid["ta"];
            if (!ta) return;

            document.body.removeChild(ta);
            obj.targetGrid["ta"] = undefined;
        }
        else if (timerid == 888)
        {
            var ta = obj.targetGrid["ta"];

            if (!ta) return;

            var clipText = ta.value;
            document.body.removeChild(ta);
            nxlib.grid.pasteData(obj, clipText);
            obj.targetGrid["ta"] = undefined;
        }
    }
}

/**
 * Textarea 생성 함수
 * @param {String} innerText 복사할 텍스트
 * @memberOf nxlib.grid
 */
nxlib.grid._createTextarea = function(innerText)
{
    var ta = document.createElement('textarea');
    ta.style.position = 'absolute';
    ta.style.left = '-1000px';
    ta.style.top = document.body.scrollTop + 'px';
    ta.value = innerText;
    document.body.appendChild(ta);
    ta.select();

    return ta;
}

/**
 * 붙여넣기
 * @param {Form} form Form object
 * @param {string} clipText 붙여 넣을 텍스트
 * @memberOf nxlib.grid
 */
nxlib.grid.pasteData = function(form, clipText)
{
    var obj = form.targetGrid;

    obj.set_enableevent(false);
    obj.set_enableredraw(false);

    var ds = obj.getBindDataset();
    ds.set_enableevent(false);

    var grdCellCount = obj.getCellCount("body");
    var rowCount = ds.getRowCount();
    var startrow = nexacro.toNumber(obj.selectstartrow),
        endrow = nexacro.toNumber(obj.selectendrow),
        startcol = nexacro.toNumber(obj.selectstartcol),
        endcol = nexacro.toNumber(obj.selectendcol);

    var currRow = startrow;
    var cellIndex = startcol;

    copyData = clipText;

    var rowData = copyData.split(/[\n\f\r]/);
    var rowDataCount = rowData.length - 1;
    var checkIndex = {};

    for (var i = 0; i < rowDataCount; i++)
    {
        if (rowCount <= currRow)
        {
            ds.addRow();
        }

        var columnData = rowData[i].split(nxlib.grid.COL_SEPERATOR);
        var columnLoopCount = cellIndex + columnData.length;

        if (columnLoopCount > grdCellCount)
        {
            columnLoopCount = grdCellCount;
        }

        var k = 0;
        for (var j = cellIndex; j < columnLoopCount; j++)
        {
            if (!checkIndex[j])
            {
                checkIndex[j] = 1;
            }

            var colid = obj.getCellProperty("body", j, "text").substr(5);
            var tempValue = columnData[k];
            if (!Eco.isEmpty(tempValue) && tempValue != "undefined")
            {
                ds.setColumn(currRow, colid, tempValue);
            }

            k++;
        }

        currRow++;
    }

    ds.rowposition = currRow;

    endrow = endrow + rowDataCount - 1;
    endcol = columnLoopCount - 1;

    obj.set_enableredraw(true);
    obj.set_enableevent(true);
    ds.set_enableevent(true);

    obj.selectArea(startrow, startcol, endrow, endcol);
}

nxlib.grid.useCopyPaste = true;