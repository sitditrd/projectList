//XJS=excel.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::CommUtil.xjs");
        this.addIncludeScript(path,"lib::ext_CommEco.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;
        this.executeIncludeScript("lib::ext_CommEco.xjs"); /*include "lib::ext_CommEco.xjs"*/;

        this.targetGrid = null;

        this.fn_setCPGrid = function(obj)
        {
        	obj.pForm = this;
        	var form = obj.parent;

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
        			if(keycode == 67)
        			{
        				if(obj.selectstartrow.length >= 2 || obj.selectendrow.length >= 2 || obj.selectstartcol.length >= 2 || obj.selectendcol.length >= 2)
        				{
        					//가로영역 지정 변수
        					var nFlag1 = 0, nFlag3 = 0;

        					//세로영역 지정 변수
        					var nFlag2 = 0, nFlag4 = 0;

        					//nFlag1 가 1일때 : 여러개의 행 지정
        					//nFlag1 가 0일때 : 단일 행 지정
        					for(var i=1; i<obj.selectstartrow.length; i++)
        					{
        						if(obj.selectstartrow[0] != obj.selectstartrow[i])
        							nFlag1 = 1;
        					}

        					//nFlag2 가 1일때 : 여러개의 열 지정
        					//nFlag2 가 0일때 : 단일 열 지정
        					for(var i=1; i<obj.selectstartcol.length; i++)
        					{
        						if(obj.selectstartcol[0] != obj.selectstartcol[i])
        							nFlag2 = 1;
        					}

        					//가로영역 드래그 지정 후 CTRL 셀 지정시
        					//row가 같고 col이 다를 때
        					if(nFlag1 == 0 && nFlag2 == 1)
        					{
        						var clipText = "";

        						//nFlag3 가 0일때 : 하나의 col에 대해
        						//nFlag3 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							if(obj.selectstartrow[i] != obj.selectendrow[i])
        								nFlag3 = 1;
        						}

        						if(nFlag3 == 0)
        						{
        							//오름차순으로 정렬 : 순서대로 출력하기 위해
        							obj.selectstartcol.sort(function(left, right) {
        								return left-right;
        							});

        							obj.selectendcol.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartcol.length; k++)
        							{
        								for(var i=obj.selectstartcol[k]; i<=obj.selectendcol[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsEmpty(obj.getCellValue(obj.selectstartrow[k], i)))
        									{
        										value = obj.getCellValue(obj.selectstartrow[k], i);
        										clipText += value + this.COL_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag3 == 1)
        						{
        							var temp = Math.abs(obj.selectendrow[0] - obj.selectstartrow[0]);

        							var arrayRowIndex_Start = new Array();
        							var arrayRowIndex_End = new Array();
        							var arrayColIndex_Start = new Array();
        							var arrayColIndex_End = new Array();

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendrow[i] - obj.selectstartrow[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								arrayRowIndex_Start.push(nexacro.toNumber(obj.selectstartrow[i]));
        								arrayRowIndex_End.push(nexacro.toNumber(obj.selectendrow[i]));
        								arrayColIndex_Start.push(nexacro.toNumber(obj.selectstartcol[i]));
        								arrayColIndex_End.push(nexacro.toNumber(obj.selectendcol[i]));
        							}

        							//오름차순으로 정렬 : 최외각 좌표를 구하기 위해.
        							arrayRowIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayRowIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							var startrow = arrayRowIndex_Start[0];
        							var endrow = arrayRowIndex_End[arrayRowIndex_End.length-1];
        							var startcol = arrayColIndex_Start[0];
        							var endcol = arrayColIndex_End[arrayColIndex_End.length-1];

        							//최외각 좌표를 돌면서 멀티로 드래그한 영역에 좌표점이 있다면 아래의 로직을 수행한다.
        							for(var i = startrow; i <= endrow; i++)
        							{
        								for (var j = startcol; j <= endcol; j++)
        								{
        									for(var n = obj.selectstartrow[0]; n<=obj.selectendrow[0]; n++)
        									{
        										for(var p = 0; p < obj.selectendrow.length; p++)
        										{
        											for(var m = obj.selectstartcol[p]; m <= obj.selectendcol[p]; m++)
        											{
        												if(i == n && j == m)
        												{
        													var value = "";

        													if(!this.gfnIsEmpty(obj.getCellValue(i, j)))
        													{
        														value = obj.getCellValue(i, j);

        														if (j < endcol)
        															clipText += value + this.COL_SEPERATOR;
        														else
        															clipText += value + this.COL_SEPERATOR;
        														break;
        													}
        												}
        											}
        										}
        									}
        								}
        								clipText += this.ROW_SEPERATOR;
        							}
        					    }
        					}
        					//세로영역 드래그 지정 후 CTRL 셀 지정
        					//row가 다르고 col이 같을 때
        					else if(nFlag1 == 1 && nFlag2 == 0)
        					{
        						var clipText = "";

        						//nFlag4 가 0일때 : 하나의 col에 대해
        						//nFlag4 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartcol.length; i++)
        						{
        							if(obj.selectstartcol[i] != obj.selectendcol[i])
        								nFlag4 = 1;
        						}

        						if(nFlag4 == 0)
        						{
        							//오름차순으로 정렬
        							obj.selectstartrow.sort(function(left, right) {
        								return left-right;
        							});

        							//오름차순으로 정렬
        							obj.selectendrow.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartrow.length; k++)
        							{
        								for(var i=obj.selectstartrow[k]; i<=obj.selectendrow[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsEmpty(obj.getCellValue(i, obj.selectstartcol[k])))
        									{
        										value = obj.getCellValue(i, obj.selectstartcol[k]);
        										clipText += value + this.ROW_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag4 == 1)
        						{
        							var temp = Math.abs(obj.selectendcol[0] - obj.selectstartcol[0]);

        							for(var i=0; i<obj.selectstartcol.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendcol[i] - obj.selectstartcol[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var q=0; q<obj.selectstartrow.length; q++)
        							{
        								var startrow = obj.selectstartrow[q];
        								var endrow = obj.selectendrow[q];
        								var startcol = obj.selectstartcol[q];
        								var endcol = obj.selectendcol[q];

        								for(var i = startrow; i <= endrow; i++)
        								{
        									for (var j = startcol; j <= endcol; j++)
        									{
        										var value = "";

        										if(!this.gfnIsEmpty(obj.getCellValue(i, j)))
        										{
        											value = obj.getCellValue(i, j);

        											if(j < endcol)
        												clipText += value + this.COL_SEPERATOR;
        											else
        												clipText += value + this.COL_SEPERATOR;
        										}
        									}
        									clipText += this.ROW_SEPERATOR;
        								}
        						    }
        						}
        					}
        					//CTRL 셀만 지정시 (미완성)
        					else
        					{
        						alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        						return;

        						form.targetGrid = undefined;
        						var clipText = "";

        						//CTRL 여러개 셀 클릭 시 selectstartrow, selectendrow, selectstartcol, selectendcol의 각 구조는 배열로 넘어온다.
        						//기존의 로직을 수행하기 위해서는 구조를 변경해야한다.
        						var arrayRowIndex = new Array();
        						var arrayColIndex = new Array();

        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							arrayRowIndex.push(nexacro.toNumber(obj.selectstartrow[i]));
        							arrayColIndex.push(nexacro.toNumber(obj.selectstartcol[i]));
        						}

        						//오름차순으로 정렬
        						arrayRowIndex.sort(function(left, right) {
        							return left-right;
        						});

        						//오름차순으로 정렬
        						arrayColIndex.sort(function(left, right) {
        							return left-right;
        						});

        						var startrow = arrayRowIndex[0];
        						var endrow = arrayRowIndex[arrayRowIndex.length-1];
        						var startcol = arrayColIndex[0];
        						var endcol = arrayColIndex[arrayColIndex.length-1];

        						for(var i = startrow; i <= endrow; i++)
        						{
        							var nFlag = 0;

        							for (var j = startcol; j <= endcol; j++)
        							{
        								for(var pi=0; pi<obj.selectstartrow.length; pi++)
        								{
        									if(i == obj.selectstartrow[pi] && j == obj.selectstartcol[pi])
        									{
        										nFlag = 1;
        										var value = "";
        										var colFlag = 0;

        										if(!this.gfnIsEmpty(obj.getCellValue(i, j)))
        											value = obj.getCellValue(i, j);
        										else
        											colFlag = 1;

        										if (j < endcol && colFlag != 1)
        										{
        											clipText += value + this.COL_SEPERATOR;
        											colFlag = 0;
        										}
        										else
        											clipText += value + this.COL_SEPERATOR;
        										break;
        									}
        									else
        										nFlag = 0;
        								}
        							}

        							if(nFlag == 1)
        								clipText += this.ROW_SEPERATOR;
        						}
        					}

        					system.clearClipboard();
        					system.setClipboard("CF_TEXT", clipText);

        					form.targetGrid = obj;
        				}
        				else
        				{
        					var startrow = nexacro.toNumber(obj.selectstartrow);
        					var endrow = nexacro.toNumber(obj.selectendrow);
        					var startcol = nexacro.toNumber(obj.selectstartcol);
        					var endcol = nexacro.toNumber(obj.selectendcol);

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

        				var startrow = nexacro.toNumber(obj.selectstartrow);
        				var endrow = nexacro.toNumber(obj.selectendrow);
        				var startcol = nexacro.toNumber(obj.selectstartcol);
        				var endcol = 0;

        				var currRow = startrow;
        				var cellIndex = startcol;
        				var maxColumnCount = 0;

        				var checkIndex = {};

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
        			if(keycode == 67)
        			{
        				if(obj.selectstartrow.length >= 2 || obj.selectendrow.length >= 2 || obj.selectstartcol.length >= 2 || obj.selectendcol.length >= 2)
        				{
        					//가로영역 지정 변수
        					var nFlag1 = 0, nFlag3 = 0;

        					//세로영역 지정 변수
        					var nFlag2 = 0, nFlag4 = 0;

        					//nFlag1 가 1일때 : 여러개의 행 지정
        					//nFlag1 가 0일때 : 단일 행 지정
        					for(var i=1; i<obj.selectstartrow.length; i++)
        					{
        						if(obj.selectstartrow[0] != obj.selectstartrow[i])
        							nFlag1 = 1;
        					}

        					//nFlag2 가 1일때 : 여러개의 열 지정
        					//nFlag2 가 0일때 : 단일 열 지정
        					for(var i=1; i<obj.selectstartcol.length; i++)
        					{
        						if(obj.selectstartcol[0] != obj.selectstartcol[i])
        							nFlag2 = 1;
        					}

        					//가로영역 드래그 지정 후 CTRL 셀 지정시
        					//row가 같고 col이 다를 때
        					if(nFlag1 == 0 && nFlag2 == 1)
        					{
        						var clipText = "";

        						//nFlag3 가 0일때 : 하나의 col에 대해
        						//nFlag3 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							if(obj.selectstartrow[i] != obj.selectendrow[i])
        								nFlag3 = 1;
        						}

        						if(nFlag3 == 0)
        						{
        							//오름차순으로 정렬 : 순서대로 출력하기 위해
        							obj.selectstartcol.sort(function(left, right) {
        								return left-right;
        							});

        							obj.selectendcol.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartcol.length; k++)
        							{
        								for(var i=obj.selectstartcol[k]; i<=obj.selectendcol[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsEmpty(obj.getCellValue(obj.selectstartrow[k], i)))
        									{
        										value = obj.getCellValue(obj.selectstartrow[k], i);
        										clipText += value + this.COL_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag3 == 1)
        						{
        							var temp = Math.abs(obj.selectendrow[0] - obj.selectstartrow[0]);

        							var arrayRowIndex_Start = new Array();
        							var arrayRowIndex_End = new Array();
        							var arrayColIndex_Start = new Array();
        							var arrayColIndex_End = new Array();

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendrow[i] - obj.selectstartrow[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								arrayRowIndex_Start.push(nexacro.toNumber(obj.selectstartrow[i]));
        								arrayRowIndex_End.push(nexacro.toNumber(obj.selectendrow[i]));
        								arrayColIndex_Start.push(nexacro.toNumber(obj.selectstartcol[i]));
        								arrayColIndex_End.push(nexacro.toNumber(obj.selectendcol[i]));
        							}

        							//오름차순으로 정렬 : 최외각 좌표를 구하기 위해.
        							arrayRowIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayRowIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							var startrow = arrayRowIndex_Start[0];
        							var endrow = arrayRowIndex_End[arrayRowIndex_End.length-1];
        							var startcol = arrayColIndex_Start[0];
        							var endcol = arrayColIndex_End[arrayColIndex_End.length-1];

        							//최외각 좌표를 돌면서 멀티로 드래그한 영역에 좌표점이 있다면 아래의 로직을 수행한다.
        							for(var i = startrow; i <= endrow; i++)
        							{
        								for (var j = startcol; j <= endcol; j++)
        								{
        									for(var n = obj.selectstartrow[0]; n<=obj.selectendrow[0]; n++)
        									{
        										for(var p = 0; p < obj.selectendrow.length; p++)
        										{
        											for(var m = obj.selectstartcol[p]; m <= obj.selectendcol[p]; m++)
        											{
        												if(i == n && j == m)
        												{
        													var value = "";

        													if(!this.gfnIsEmpty(obj.getCellValue(i, j)))
        													{
        														value = obj.getCellValue(i, j);

        														if (j < endcol)
        															clipText += value + this.COL_SEPERATOR;
        														else
        															clipText += value + this.COL_SEPERATOR;
        														break;
        													}
        												}
        											}
        										}
        									}
        								}
        								clipText += this.ROW_SEPERATOR;
        							}
        					    }
        					}
        					//세로영역 드래그 지정 후 CTRL 셀 지정
        					//row가 다르고 col이 같을 때
        					else if(nFlag1 == 1 && nFlag2 == 0)
        					{
        						var clipText = "";

        						//nFlag4 가 0일때 : 하나의 col에 대해
        						//nFlag4 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartcol.length; i++)
        						{
        							if(obj.selectstartcol[i] != obj.selectendcol[i])
        								nFlag4 = 1;
        						}

        						if(nFlag4 == 0)
        						{
        							//오름차순으로 정렬
        							obj.selectstartrow.sort(function(left, right) {
        								return left-right;
        							});

        							//오름차순으로 정렬
        							obj.selectendrow.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartrow.length; k++)
        							{
        								for(var i=obj.selectstartrow[k]; i<=obj.selectendrow[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsEmpty(obj.getCellValue(i, obj.selectstartcol[k])))
        									{
        										value = obj.getCellValue(i, obj.selectstartcol[k]);
        										clipText += value + this.ROW_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag4 == 1)
        						{
        							var temp = Math.abs(obj.selectendcol[0] - obj.selectstartcol[0]);

        							for(var i=0; i<obj.selectstartcol.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendcol[i] - obj.selectstartcol[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var q=0; q<obj.selectstartrow.length; q++)
        							{
        								var startrow = obj.selectstartrow[q];
        								var endrow = obj.selectendrow[q];
        								var startcol = obj.selectstartcol[q];
        								var endcol = obj.selectendcol[q];

        								for(var i = startrow; i <= endrow; i++)
        								{
        									for (var j = startcol; j <= endcol; j++)
        									{
        										var value = "";

        										if(!this.gfnIsEmpty(obj.getCellValue(i, j)))
        										{
        											value = obj.getCellValue(i, j);

        											if(j < endcol)
        												clipText += value + this.COL_SEPERATOR;
        											else
        												clipText += value + this.COL_SEPERATOR;
        										}
        									}
        									clipText += this.ROW_SEPERATOR;
        								}
        						    }
        						}
        					}
        					//CTRL 셀만 지정시 (미완성)
        					else
        					{
        						alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        						return;

        						form.targetGrid = undefined;
        						var clipText = "";

        						//CTRL 여러개 셀 클릭 시 selectstartrow, selectendrow, selectstartcol, selectendcol의 각 구조는 배열로 넘어온다.
        						//기존의 로직을 수행하기 위해서는 구조를 변경해야한다.
        						var arrayRowIndex = new Array();
        						var arrayColIndex = new Array();

        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							arrayRowIndex.push(nexacro.toNumber(obj.selectstartrow[i]));
        							arrayColIndex.push(nexacro.toNumber(obj.selectstartcol[i]));
        						}

        						//오름차순으로 정렬
        						arrayRowIndex.sort(function(left, right) {
        							return left-right;
        						});

        						//오름차순으로 정렬
        						arrayColIndex.sort(function(left, right) {
        							return left-right;
        						});

        						var startrow = arrayRowIndex[0];
        						var endrow = arrayRowIndex[arrayRowIndex.length-1];
        						var startcol = arrayColIndex[0];
        						var endcol = arrayColIndex[arrayColIndex.length-1];

        						for(var i = startrow; i <= endrow; i++)
        						{
        							var nFlag = 0;

        							for (var j = startcol; j <= endcol; j++)
        							{
        								for(var pi=0; pi<obj.selectstartrow.length; pi++)
        								{
        									if(i == obj.selectstartrow[pi] && j == obj.selectstartcol[pi])
        									{
        										nFlag = 1;
        										var value = "";
        										var colFlag = 0;

        										if(!this.gfnIsEmpty(obj.getCellValue(i, j)))
        											value = obj.getCellValue(i, j);
        										else
        											colFlag = 1;

        										if (j < endcol && colFlag != 1)
        										{
        											clipText += value + this.COL_SEPERATOR;
        											colFlag = 0;
        										}
        										else
        											clipText += value + this.COL_SEPERATOR;
        										break;
        									}
        									else
        										nFlag = 0;
        								}
        							}

        							if(nFlag == 1)
        								clipText += this.ROW_SEPERATOR;
        						}
        					}

        					form.targetGrid = obj;
        					var ta = this._createTextarea(clipText);
        					form.targetGrid["ta"] = ta;
        					form.setTimer(777, 100);
        					e.stopPropagation();
        				}
        				else
        				{
        					var startrow = nexacro.toNumber(obj.selectstartrow);
        					var endrow = nexacro.toNumber(obj.selectendrow);
        					var startcol = nexacro.toNumber(obj.selectstartcol);
        					var endcol = nexacro.toNumber(obj.selectendcol);

        					var checkIndex = {};

        					form.targetGrid = undefined;

        					var clipText = "";

        					for (var i = startrow; i <= endrow; i++)
        					{
        						for (var j = startcol; j <= endcol; j++)
        						{
        							var value = "";
        							var colFlag = 0;

        							if(!this.gfnIsEmpty(obj.getCellValue(i, j)))
        							{
        								value = obj.getCellValue(i, j);
        							}
        							else
        								colFlag = 1;

        							if (j < endcol && colFlag != 1)
        							{
        								clipText += value + this.COL_SEPERATOR;
        								colFlag = 0;
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
