//XJS=excel.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.targetGrid = null;

        this.fn_setCPGrid = function(obj)
        {
        	obj.pForm = this;
        	var form = obj.parent;
        	this.v_Form = form;

        	//add onkeydown handler
        	obj.addEventHandler("onkeydown", this.gridCopyOnkeydown, this);
        	this.addEventHandler("ontimer", this.gridCopyTimerHandler, form);
        };

        this.COL_SEPERATOR = "\t";
        this.ROW_SEPERATOR = "\r\n";

        /**
         * copy & paste 처리
         * @param {Grid} obj Event가 발생한 Grid Component
         * @param {KeyEventInfo} e KeyEventInfo
         * @memberOf nxlib.grid
         */

        this.gridCopyOnkeydown = function (obj, e)
        {
        	var keycode = e.keycode;
        	var form = obj.pForm;

        	if (system.navigatorname == "nexacro")
        	{
        		if (e.ctrlkey && !e.shiftkey && !e.altkey)
        		{
        			if (keycode == 67)
        			{
        				var startrow = nexacro.toNumber(obj.selectstartrow),endrow = nexacro.toNumber(obj.selectendrow),startcol = nexacro.toNumber(obj.selectstartcol),endcol = nexacro.toNumber(obj.selectendcol);

        				var copyData = "";

        				var checkIndex = {
        				};

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

        						if (!this.gfn_isEmpty(value) && value != "undefined")
        						{
        							if (j < obj.selectendcol)
        							{
        								copyData += obj.getCellValue(i, j) + this.COL_SEPERATOR;
        							}
        							else
        							{
        								copyData += obj.getCellValue(i, j);
        							}
        						}
        					}

        					if (i < obj.selectendrow)
        					{
        						copyData += this.ROW_SEPERATOR;
        					}
        				}

        				copyData += this.ROW_SEPERATOR;

        				system.clearClipboard();
        				system.setClipboard("CF_TEXT", copyData);

        				form.targetGrid = obj;
        			}
        			else if (keycode == 86)
        			{
        				var copyData = system.getClipboard("CF_TEXT");
        				copyData = new String(copyData);
        				var rowData = copyData.split(this.ROW_SEPERATOR);
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
        				var startrow = nexacro.toNumber(obj.selectstartrow),endrow = nexacro.toNumber(obj.selectendrow),startcol = nexacro.toNumber(obj.selectstartcol),endcol = 0;

        				var currRow = startrow;
        				var cellIndex = startcol;
        				var maxColumnCount = 0;
        				var checkIndex = {
        				};
        				// check current cell editType
        				for (var i = 0; i < rowDataCount; i++)
        				{
        					if (rowCount <= currRow)
        					{
        						ds.addRow();
        					}

        					var columnData = rowData[i].split(this.COL_SEPERATOR);
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
        						if (!this.gfn_isEmpty(tempValue) && tempValue != "undefined")
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

        				// grid enableredraw가 false일 경우
        				// event 전파과정에서 error발생을 막기위한 처리.2015.02.25 버전.
        				e.stopPropagation();
        			}
        		}
        	}
        	else
        	{
        		if (e.ctrlkey && !e.shiftkey && !e.altkey)
        		{
        			if (keycode == 67)
        			{
        				var startrow = nexacro.toNumber(obj.selectstartrow),endrow = nexacro.toNumber(obj.selectendrow),startcol = nexacro.toNumber(obj.selectstartcol),endcol = nexacro.toNumber(obj.selectendcol);

        				var checkIndex = {
        				};

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
        							clipText += value + this.COL_SEPERATOR;
        						}
        						else
        						{
        							clipText += value;
        						}
        					}

        					clipText += this.ROW_SEPERATOR;
        				}

        				form.targetGrid = obj;

        				var ta = this._createTextarea(clipText);

        				form.targetGrid["ta"] = ta;

        				form.setTimer(777, 100);

        				e.stopPropagation();
        			}
        			else if (keycode == 86)
        			{
        				form.targetGrid = obj;
        				form.targetEvent = e;

        				var ta = this._createTextarea('');
        				form.targetGrid["ta"] = ta;

        				form.setTimer(888, 100);

        				e.stopPropagation();
        			}
        		}
        	}
        };

        /**
         * 그리드 복사 타이머 이벤트
         * @param {Form} obj Event가 발생한 Form Component
         * @param {TimerEventInfo} e TimerEventInfo
         * @memberOf nxlib.grid
         */
        this.gridCopyTimerHandler = function (obj, e)
        {
        	if (nexacro._browser == "Runtime" || nexacro._browser == "IE")
        	{
        	}
        	else
        	{
        		var timerid = e.timerid;
        		obj.killTimer(timerid);

        		if (timerid == 777)
        		{
        			var ta = obj.targetGrid["ta"];
        			if (!ta)
        			{
        				return;
        			}

        			document.body.removeChild(ta);
        			obj.targetGrid["ta"] = undefined;
        		}
        		else if (timerid == 888)
        		{
        			var ta = obj.targetGrid["ta"];

        			if (!ta)
        			{
        				return;
        			}

        			var clipText = ta.value;
        			document.body.removeChild(ta);
        			this.pasteData(obj, clipText);
        			obj.targetGrid["ta"] = undefined;
        		}
        	}
        };

        /**
         * Textarea 생성 함수
         * @param {String} innerText 복사할 텍스트
         * @memberOf nxlib.grid
         */
        this._createTextarea = function (innerText)
        {
        	var ta = document.createElement('textarea');
        	ta.style.position = 'absolute';
        	ta.style.left = '-1000px';
        	ta.style.top = document.body.scrollTop + 'px';
        	ta.value = innerText;
        	document.body.appendChild(ta);
        	ta.select();

        	return ta;
        };

        /**
         * 붙여넣기
         * @param {Form} form Form object
         * @param {string} clipText 붙여 넣을 텍스트
         * @memberOf nxlib.grid
         */
        this.pasteData = function (form, clipText)
        {
        	var obj = form.targetGrid;

        	obj.set_enableevent(false);
        	obj.set_enableredraw(false);

        	var ds = obj.getBindDataset();
        	ds.set_enableevent(false);

        	var grdCellCount = obj.getCellCount("body");
        	var rowCount = ds.getRowCount();
        	var startrow = nexacro.toNumber(obj.selectstartrow),endrow = nexacro.toNumber(obj.selectendrow),startcol = nexacro.toNumber(obj.selectstartcol),endcol = nexacro.toNumber(obj.selectendcol);

        	var currRow = startrow;
        	var cellIndex = startcol;

        	copyData = clipText;

        	var rowData = copyData.split(/[\n\f\r]/);
        	var rowDataCount = rowData.length - 1;
        	var checkIndex = {
        	};

        	for (var i = 0; i < rowDataCount; i++)
        	{
        		if (rowCount <= currRow)
        		{
        			ds.addRow();
        		}

        		var columnData = rowData[i].split(this.COL_SEPERATOR);
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
        			if (!this.gfn_isEmpty(tempValue) && tempValue != "undefined")
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
        };

        /**
        * alphabet character code.
        * @private
        * @constant
        * @memberOf Base
        */
        _ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70]

        /**
        * value의 빈값 여부 반환.
        * <pre>
        * 1. null, undefined type : true 반환
        * 2. string, array type : length 가 0인 경우 true 반환
        * 3. object type : 하위 속성이 존재할 경우 true 반환
        * 4. boolean, number, date type : false 반환
        * </pre>
        * @param {*} value 확인할 value.
        * @return {boolean} empty 여부.
        */
        this.gfn_isEmpty = function (value)
        {
        	// null, undefined ==> true
        	if (value === null || value === undefined) return true;

        	// String, Array ==> length == 0
        	if ( this.gfn_isString(value) || this.gfn_isArray(value) )
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if ( this.gfn_isObject(value) )
        	{
        		for (var p in value)
        		{
        			if ( value.hasOwnProperty(p) )
        			{
        				return false;
        			}
        		}
        		return true;
        	}

        	return false;
        }

        /**
         * value의 string 여부 반환
         * @param {*} value 확인할 value.
         * @return {boolean} string 여부.
         */
        this.gfn_isString = function(value)
        {
        	return typeof value === 'string';
        }

        /**
        * value의 Array 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} Array 여부.
        */
        this.gfn_isArray = function(value)
        {
           //TODO
           /*
           V13에서는 아래처럼하자(또는 HTML5)
        	return Object.prototype.toString.call( value ) === '[object Array]';
           */

        	if ( value === null || value === undefined ) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	//if ( this.gfn_isXpComponent(value) ) return false;

        	return typeof value == "object" &&
        		   'constructor' in value &&
        		   value.constructor === Array;
        }

        /**
        * value의 XPLATFORM component 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} XPLATFORM component 여부.
        */
        this.gfn_isXpComponent = function(value)
        {
        	if ( value === null || value === undefined  ) return false;

        	// 9.2 Runtime 기준 XP Comp에 공통된 속성은 style
        	return ( 'style' in value ) &&
        		   ( typeof value.style == 'object' ) &&
        		   ( value.style.toString() == '[object StyleObject]' );
        }

        /**
        * value의 Object 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} Object 여부.
        */
        this.gfn_isObject = function(value)
        {
        	if ( value === null || value === undefined ) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	//if ( this.gfn_isXpComponent(value) ) return false;

        	return typeof value == "object" &&
        		   'constructor' in value &&
        		   value.constructor === Object;
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
