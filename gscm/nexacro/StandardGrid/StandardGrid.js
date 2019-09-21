//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html	
//
//==============================================================================
//==============================================================================
// Object : nexacro.StandardGrid
// Group : Component
//==============================================================================
if (!nexacro.StandardGrid)
{
    //==============================================================================
    // nexacro.StandardGrid
    //==============================================================================
    nexacro.StandardGrid = function(id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Grid.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pStandardGrid = nexacro._createPrototype(nexacro.Grid, nexacro.StandardGrid);
    nexacro.StandardGrid.prototype = _pStandardGrid;
    _pStandardGrid._type_name = "StandardGrid";

    /* internal variable */
    _pStandardGrid._editColor = [];
    _pStandardGrid._itemList = [];
    _pStandardGrid._colList = [];
    _pStandardGrid._fixCol = [];
    _pStandardGrid._sortInfo = [];

    _pStandardGrid._ascMark = "▲";
    _pStandardGrid._descMark = "▼";
    _pStandardGrid._filterMark = "ⓕ";

    _pStandardGrid.vHeadCellsFrozen = -1

    _pStandardGrid.vCurrRow = -1;
    _pStandardGrid.vCurrCol = -1;
    _pStandardGrid.vBodyCellID = "";

    _pStandardGrid.vHeadCell = -1;
    _pStandardGrid.vBodyCell = -1;

    _pStandardGrid.eScreen_X = 0;
    _pStandardGrid.eScreen_Y = 0;

    _pStandardGrid.fixClickRow = -1;

    /* accessibility */
    _pStandardGrid.accessibilityrole = "grid";

    //===============================================================
    // nexacro.StandardGrid : Create & Destroy & Update
    //===============================================================
    _pStandardGrid.on_create_contents = function()
    {
        nexacro.Grid.prototype.on_create_contents.call(this);

        this.addEventHandler("onrbuttonup", this._StandardGrid_onrbuttonup, this);
        this.addEventHandler("onheaddblclick", this._StandardGrid_onheaddblclick, this);
        this.addEventHandler("onkeydown", this._StandardGrid_onkeydown, this);

        this.set_summarytype("top");
        this.set_cellsizingtype("col");
        this.set_selecttype("area");
        this.set_autoenter("select");
        this.set_cellsizebandtype("allband");
        this.set_nodatatext("No Data Available");

        this.defaultSort = "";

        this._editColor = [];
        this._editColor[0] = "#ffffff"; // EDIT_AUTH_COLOR
        this._editColor[1] = "#c6e2ff"; // RAMP_UP_COLOR
        this._editColor[2] = "#ff989b"; // POST_EOS_COLOR
        this._editColor[3] = "#ffd0dc"; // EOS_DELAY_COLOR
        this._editColor[4] = "#8bf1ff"; // TOUCH_AUTH_COLOR
        this._editColor[5] = "#eeeedd"; // RATIO_AUTH_COLOR

        this._itemList = [];
        this._colList = [];
        this._fixCol = [];
        this._sortInfo = [];
        this._filterStr = "";
    };

    //    _pStandardGrid.on_created_contents = function (win)
    // {		 
    //   	//control on_created(win);		
    // };

    //===============================================================
    // nexacro.StandardGrid : Properties
    //===============================================================


    //===============================================================
    // nexacro.StandardGrid : Methods
    //===============================================================
    _pStandardGrid.initialize = function()
    {
        this._itemList = [];
        this._colList = [];
        this._fixCol = [];
        this._sortInfo = [];

        var tempName = "",
            tempID = "";

        for (var i = 0; i < this.getCellCount("Head"); i++)
        {
            tempName = this.getCellProperty("head", i, "text");
            tempName = nexacro._nvl(tempName, "");
            tempName = nexacro.replaceAll(tempName, this._ascMark, "");
            tempName = nexacro.replaceAll(tempName, this._descMark, "");
            tempName = nexacro.replaceAll(tempName, this._filterMark, "");

            this.setCellProperty("head", i, "text", tempName);

            tempID = this.getCellProperty("body", i, "text");
            tempID = nexacro._nvl(tempID, "");
            tempID = nexacro.replaceAll(tempID, "BIND:", "");
            tempID = nexacro.replaceAll(tempID, "bind:", "");
            tempID = nexacro.replaceAll(tempID, "Bind:", "");

            if (tempID)
            {
                var colInfo = {
                    "NM": tempName,
                    "ID": tempID,
                    "ISNEW": "1"
                };
                this._colList.push(colInfo);
            }
        }
    };

    _pStandardGrid.addColumnEx = function(colsize, headtitle, headdisplaytype, headedittype, headstyle, bodycelltext, bodydisplaytype, bodyedittype, bodystyle, suppress, fix)
    {
        var idx = this.appendContentsCol();

        this.setFormatColProperty(idx, "size", colsize);

        if (headtitle) this.setCellProperty("head", idx, "text", headtitle);
        if (headstyle) this.setCellProperty("head", idx, "cssclass", headstyle);
        if (headdisplaytype) this.setCellProperty("head", idx, "displaytype", headdisplaytype);
        if (headedittype) this.setCellProperty("head", idx, "edittype", headedittype);

        if (bodycelltext) this.setCellProperty("body", idx, "text", bodycelltext);
        if (bodydisplaytype) this.setCellProperty("body", idx, "displaytype", bodydisplaytype);
        if (bodyedittype) this.setCellProperty("body", idx, "edittype", bodyedittype);
        if (bodystyle) this.setCellProperty("body", idx, "cssclass", bodystyle);

        if (suppress == true) this.setCellProperty("body", idx, "suppress", idx + 1);

        if (fix == true)
        {
            for (var i = idx + 1; i < this.getCellCount("Head"); i++)
            {
                this.setFormatColProperty(i, "band", "Head");
            }
            for (var i = 0; i <= idx; i++)
            {
                this.setFormatColProperty(i, "band", "left");
            }
        }
    };

    _pStandardGrid._setColAutoSizing = function(colIndex, headCell, bodyCell)
    {
        if (this.getRealColSize(colIndex, false) == 0)
        {
            this.setCellProperty("head", headCell, "autosizecol", "none");
            this.setCellProperty("body", bodyCell, "autosizecol", "none");
        }
        else
        {
            this.setCellProperty("head", headCell, "autosizecol", "default");
            this.setCellProperty("body", bodyCell, "autosizecol", "default");
        }
    };

    _pStandardGrid._createTextarea = function(innerText)
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

    _pStandardGrid._pasteData = function(clipText)
    {
        this.set_enableevent(false);
        this.set_enableredraw(false);

        var ds = this.getBindDataset();
        ds.set_enableevent(false);

        var grdCellCount = this.getCellCount("body");
        var rowCount = ds.getRowCount();
        var startrow = nexacro.toNumber(this.selectstartrow),
            endrow = nexacro.toNumber(this.selectendrow),
            startcol = nexacro.toNumber(this.selectstartcol),
            endcol = nexacro.toNumber(this.selectendcol);

        var currRow = startrow;
        var cellIndex = startcol;

        var copyData = clipText;

        var rowData = copyData.split(/[\n\f\r]/);
        var rowDataCount = rowData.length - 1;
        var checkIndex = {};

        for (var i = 0; i < rowDataCount; i++)
        {
            if (rowCount <= currRow)
            {
                ds.addRow();
            }

            var COL_SEPERATOR = "\t";
            var columnData = rowData[i].split(COL_SEPERATOR);
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

                var colid = this.getCellProperty("body", j, "text").substr(5);
                var tempValue = columnData[k];
                if (!nexacro._isNull(tempValue) && tempValue != "undefined")
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

        this.set_enableredraw(true);
        this.set_enableevent(true);
        ds.set_enableevent(true);

        this.selectArea(startrow, startcol, endrow, endcol);
    };

    _pStandardGrid._cellNm_check = function(bodyCell)
    {
        var tCellNM = "";
        try
        {
            tCellNM = this.getCellProperty("body", bodyCell, "text").toString();
            tCellNM = tCellNM.replace("BIND:", "");
            tCellNM = tCellNM.replace("bind:", "");
            tCellNM = tCellNM.replace("Bind:", "");
        }
        catch (e)
        {
            tCellNM = "";
        }

        return tCellNM;
    };

    _pStandardGrid._createPopupMenu = function()
    {
        var obj = new PopupMenu();
        obj.init(this.name + "_pmenu", 0, 0, 100, 100);
        this._refform.addChild(this.name + "_pmenu", obj);

        obj.set_innerdataset("gdsDimensionby");
        obj.set_idcolumn("dimensiontype");
        obj.set_captioncolumn("grd_name");
        obj.set_levelcolumn("grd_level");
        obj.addEventHandler("onmenuclick", this._grid_Menu_onmenuclick, this);

        obj.show();
    };

    _pStandardGrid._sort_proc_one = function(pColNm, pType)
    {
        this._sortInfo = [];

        for (var i = 0; i < this._colList.length; i++)
        {
            this._colList[i].SORT = "";
        }
        var trow = -1;
        for (var i = 0; i < this._colList.length; i++)
        {
            if (this._colList[i].ID == pColNm)
            {
                trow = i;
                break;
            }
        }
        if (trow > -1)
        {
            this._colList[trow].SORT = pType;
        }
    };

    _pStandardGrid._grid_head_reset = function()
    {
        var strAddStr = "";
        var tcol = "";
        var trow = -1;

        for (var i = 0; i < this.getCellCount("Head"); i++)
        {
            strAddStr = "";
            tcol = this._cellNm_check(i);
            if (tcol)
            {
                trow = -1;
                for (var j = 0; j < this._colList.length; j++)
                {
                    if (this._colList[j].ID == tcol)
                    {
                        trow = j;
                        break;
                    }
                }

                if (trow > -1)
                {
                    if (this._colList[trow].SORT)
                    {
                        if (this._colList[trow].SORT == "+")
                        {
                            strAddStr = this._ascMark;
                        }
                        else if (this._colList[trow].SORT == "-")
                        {
                            strAddStr = this._descMark;
                        }
                    }

                    if (this._colList[trow].FSTR || this._colList[trow].FC1 || this._colList[trow].FV1 || this._colList[trow].FC2 || this._colList[trow].FV2)
                    {
                        if (this._colList[trow].FSTR != "@@")
                        {
                            strAddStr = strAddStr + this._filterMark;
                        }
                    }

                    this.setCellProperty("head", i, "text", this._colList[trow].NM + strAddStr);
                }
            }
        }
    };

    _pStandardGrid._createPopupHeadMenu = function()
    {
        var objPopup = new PopupDiv;
        objPopup.init(this.name + "_pdiv", 0, 0, 300, 400);

        this._refform.addChild(this.name + "_pdiv", objPopup);
        objPopup.show();

        objPopup.set_async(false);
        objPopup.set_url("comm::grd_head_pop.xfdl");
        objPopup.form.setGridNm(this.name);
        this._refform._popupDivCallback = this._popupDivCallback;
    };

    _pStandardGrid._PopupHeadMenu = function(selMenu)
    {
        this.vCurrRow = -1;
        for (var i = 0; i < this._colList.length; i++)
        {
            if (this._colList[i].ID == this.vBodyCellID)
            {
                this.vCurrRow = i;
                break;
            }
        }
        if (this.vCurrRow < 0) return;

        var oForm = this._refform;
        var oComp = oForm.components[this.name + "_pdiv"];

        if (!oComp)
        {
            this._createPopupHeadMenu();
            oComp = oForm.components[this.name + "_pdiv"];
        }
        if (oComp.isPopup())
        {
            oComp.closePopup();
        }
        else
        {
            if (nexacro._isNull(this.getCellProperty("head", this.vHeadCell, "text"))) oComp.form.StColNm.set_text("");
            else oComp.form.StColNm.set_text(this.getCellProperty("head", this.vHeadCell, "text"));

            if (selMenu == "sort_m")
            {
                oComp.form.fn_div_go("Div01");
                oComp.form.copyDataset(this._colList, oComp.form.DS_COL);
                oComp.form.copyDataset(this._sortInfo, oComp.form.DS_SORT);
            }
            else if (selMenu == "filter_p")
            {
                var trow = -1;
                var tnullrow = 0;

                oComp.form.fn_div_go("Div02");
                oComp.form.copyDataset(this._colList, oComp.form.DS_COL);

                oComp.form.DS_FILTER.filter("COL == '" + this.vBodyCellID + "' ");

                if (this._colList[this.vCurrRow].ISNEW == "1")
                {
                    var objBindDs = this.getBindDataset();
                    for (var i = 0; i < objBindDs.getRowCount(); i++)
                    {
                        if (!nexacro._isNull(objBindDs.getColumn(i, this.vBodyCellID)))
                        {

                            if (oComp.form.DS_FILTER.findRow("STR", objBindDs.getColumn(i, this.vBodyCellID)) < 0)
                            {
                                trow = oComp.form.DS_FILTER.addRow();
                                oComp.form.DS_FILTER.setColumn(trow, "COL", this.vBodyCellID);
                                oComp.form.DS_FILTER.setColumn(trow, "CHK", "1");
                                oComp.form.DS_FILTER.setColumn(trow, "STR", objBindDs.getColumn(i, this.vBodyCellID));
                            }
                        }
                        else
                        {
                            tnullrow = 1;
                        }
                    }

                    if (oComp.form.DS_FILTER.getColumn(0, "STR") != "모두 선택")
                    {
                        trow = oComp.form.DS_FILTER.insertRow(0);
                        oComp.form.DS_FILTER.setColumn(trow, "COL", this.vBodyCellID);
                        oComp.form.DS_FILTER.setColumn(trow, "CHK", "1");
                        oComp.form.DS_FILTER.setColumn(trow, "STR", "모두 선택");
                    }
                    if (tnullrow == 1)
                    {
                        if (oComp.form.DS_FILTER.findRow("STR", "값 없음") < 0)
                        {
                            trow = oComp.form.DS_FILTER.addRow();
                            oComp.form.DS_FILTER.setColumn(trow, "COL", this.vBodyCellID);
                            oComp.form.DS_FILTER.setColumn(trow, "CHK", "1");
                            oComp.form.DS_FILTER.setColumn(trow, "STR", "값 없음");
                        }
                    }
                    objBindDs.keystring = "S:+STR";
                }
            }

            oComp.form.Div03.form.cboCond1.set_value(this._colList[this.vCurrRow].FC1);
            oComp.form.Div03.form.cboVal1.set_value(this._colList[this.vCurrRow].FV1);
            oComp.form.Div03.form.edVal1.set_value(this._colList[this.vCurrRow].FV1);
            oComp.form.Div03.form.rdoType.set_value(this._colList[this.vCurrRow].FTY);
            oComp.form.Div03.form.cboCond2.set_value(this._colList[this.vCurrRow].FC2);
            oComp.form.Div03.form.cboVal2.set_value(this._colList[this.vCurrRow].FV2);
            oComp.form.Div03.form.edVal2.set_value(this._colList[this.vCurrRow].FV2);

            oComp.trackPopupByComponent(this, this.eScreen_X, this.eScreen_Y, null, null, "_popupDivCallback");
        }
    };

    _pStandardGrid._popupDivCallback = function(id, v)
    {
        if (v)
        {
            var tVal = v.split("||");
            var tFstr = "";
            if (tVal[0] == "SM")
            {
                var grid = this.components[tVal[1]];
                var objBindDs = grid.getBindDataset();
                var trtn = tVal[2];

                if (trtn)
                {
                    if (grid.defaultSort != "")
                    {
                        objBindDs.set_keystring("S:" + grid.defaultSort + trtn);
                    }
                    else
                    {
                        objBindDs.set_keystring("S:" + trtn);
                    }
                }
                else
                {
                    if (grid.defaultSort != "")
                    {
                        objBindDs.set_keystring("S:" + grid.defaultSort);
                    }
                    else
                    {
                        objBindDs.set_keystring("S:+ORGRN");
                    }
                }
                grid._grid_head_reset();
            }
            else if (tVal[0] == "FM")
            {
                var grid = this.components[tVal[2]];
                var objBindDs = grid.getBindDataset();

                grid._colList[grid.vCurrRow].FSTR = ""; // 필터값 멀티
                grid._colList[grid.vCurrRow].FC1 = ""; // 필터연산자1
                grid._colList[grid.vCurrRow].FV1 = ""; // 값1
                grid._colList[grid.vCurrRow].FTY = ""; // 필터연결구분 1.AND, 2.OR
                grid._colList[grid.vCurrRow].FC2 = ""; // 필터연산자2
                grid._colList[grid.vCurrRow].FV2 = ""; // 값2

                if (tVal[1] == "1")
                {
                    grid._colList[grid.vCurrRow].FSTR = tVal[3]; // 필터값 멀티

                    grid._colList[grid.vCurrRow].FC1 = ""; // 필터연산자1
                    grid._colList[grid.vCurrRow].FV1 = ""; // 값1
                    grid._colList[grid.vCurrRow].FTY = ""; // 필터연결구분 1.AND, 2.OR
                    grid._colList[grid.vCurrRow].FC2 = ""; // 필터연산자2
                    grid._colList[grid.vCurrRow].FV2 = ""; // 값2
                }
                else if (tVal[1] == "2")
                {
                    grid._colList[grid.vCurrRow].FSTR = ""; // 필터값 멀티

                    var tFval = tVal[3].split("$#");

                    grid._colList[grid.vCurrRow].FC1 = tFval[0]; // 필터연산자1
                    grid._colList[grid.vCurrRow].FV1 = tFval[1]; // 값1
                    grid._colList[grid.vCurrRow].FTY = tFval[2]; // 필터연결구분 1.AND, 2.OR
                    grid._colList[grid.vCurrRow].FC2 = tFval[3]; // 필터연산자2
                    grid._colList[grid.vCurrRow].FV2 = tFval[4]; // 값2
                }

                var strTemp = "";
                var tColID = "";
                var tFval = "";
                grid._filterStr = "";
                for (var i = 0; i < grid._colList.length; i++)
                {
                    tColID = grid._colList[i].ID;
                    tFval = "";
                    tFstr = "";
                    if (!nexacro._isNull(grid._colList[i].FSTR))
                    {
                        tFval = grid._colList[i].FSTR.split("$$");
                        if (!nexacro._isNull(tFval[0]))
                        {
                            if (tFval[0].toString().trim() != "@@")
                            {
                                for (var j = 0; j < tFval.length; j++)
                                {
                                    if (!nexacro._isNull(tFval[j]))
                                    {
                                        if (tFstr) tFstr = tFstr + " || ";
                                        tFstr = tFstr + tColID + " == '" + tFval[j].toString().trim() + "' ";
                                    }
                                }
                                if (tFval[(tFval.length - 1)].toString().trim() == "^^")
                                {
                                    if (tFstr) tFstr = tFstr + " || ";
                                    tFstr = tFstr + tColID + " == null ";
                                }
                            }
                        }
                    }
                    grid._filterStr = grid._filterStr.toString().trim();
                    tFstr = tFstr.toString().trim();

                    if (tFstr)
                    {
                        if (grid._filterStr) grid._filterStr = grid._filterStr + " && ";
                        grid._filterStr = grid._filterStr + "(" + tFstr + ")";
                    }

                    tFstr = "";
                    if (!nexacro._isNull(grid._colList[i].FC1) && !nexacro._isNull(grid._colList[i].FV1))
                    {
                        strTemp = "";
                        if (!nexacro._isNull(grid._colList[i].FV1))
                        {
                            strTemp = grid._colList[i].FV1.toString().trim();
                        }

                        tFval = grid._colList[i].FC1.toString().trim();
                        switch (tFval)
                        {
                            case "01": // =
                                tFstr = tFstr + tColID + " == '" + strTemp + "' ";
                                break;
                            case "02": // !=
                                tFstr = tFstr + tColID + " != '" + strTemp + "' ";
                                break;
                            case "03": // >
                                tFstr = tFstr + tColID + " > '" + strTemp + "' ";
                                break;
                            case "04": // >=
                                tFstr = tFstr + tColID + " >= '" + strTemp + "' ";
                                break;
                            case "05": // <
                                tFstr = tFstr + tColID + " < '" + strTemp + "' ";
                                break;
                            case "06": // <=
                                tFstr = tFstr + tColID + " <= '" + strTemp + "' ";
                                break;
                            case "11": // 시작문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') == 0";
                                break;
                            case "12": // 제외할 시작문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') != 0";
                                break;
                            case "13": // 끝문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') == (" + tColID + ".toString().length-1-" + strTemp + ".toString().length) ";
                                break;
                            case "14": // 제외할 끝 문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') != (" + tColID + ".toString().length-1-" + strTemp + ".toString().length) ";
                                break;
                            case "15": // 포함
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') >= 0";
                                break;
                            case "16": // 포함하지 않음
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') < 0";
                                break;
                            default:
                                tFval = "";
                                break;
                        }
                    }
                    if (grid._colList[i].FC2 && grid._colList[i].FV2)
                    {
                        if (grid._colList[i].FTY == "1")
                        {
                            if (tFstr) tFstr = "( " + tFstr + " ) && ";
                        }
                        else if (grid._colList[i].FTY == "2")
                        {
                            if (tFstr) tFstr = "( " + tFstr + " ) || ";
                        }
                        tFstr = tFstr + " ( ";

                        strTemp = "";
                        if (!nexacro._isNull(grid._colList[i].FV2))
                        {
                            strTemp = grid._colList[i].FV2.toString().trim();
                        }

                        tFval = grid._colList[i].FC2.toString().trim();
                        switch (tFval)
                        {
                            case "01": // =
                                tFstr = tFstr + tColID + " == '" + strTemp + "' ";
                                break;
                            case "02": // !=
                                tFstr = tFstr + tColID + " != '" + strTemp + "' ";
                                break;
                            case "03": // >
                                tFstr = tFstr + tColID + " > '" + strTemp + "' ";
                                break;
                            case "04": // >=
                                tFstr = tFstr + tColID + " >= '" + strTemp + "' ";
                                break;
                            case "05": // <
                                tFstr = tFstr + tColID + " < '" + strTemp + "' ";
                                break;
                            case "06": // <=
                                tFstr = tFstr + tColID + " <= '" + strTemp + "' ";
                                break;
                            case "11": // 시작문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') == 0";
                                break;
                            case "12": // 제외할 시작문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') != 0";
                                break;
                            case "13": // 끝문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') == (" + tColID + ".toString().length-1-" + strTemp + ".toString().length) ";
                                break;
                            case "14": // 제외할 끝 문자
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') != (" + tColID + ".toString().length-1-" + strTemp + ".toString().length) ";
                                break;
                            case "15": // 포함
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') >= 0";
                                break;
                            case "16": // 포함하지 않음
                                tFstr = tFstr + tColID + ".toString().indexOf('" + strTemp + "') < 0";
                                break;
                            default:
                                tFval = "";
                                break;
                        }
                        tFstr = tFstr + " ) ";
                    }
                    grid._filterStr = grid._filterStr.toString().trim();
                    tFstr = tFstr.toString().trim();
                    trace("tFstr[" + tFstr + "]");
                    if (tFstr)
                    {
                        if (grid._filterStr) grid._filterStr = grid._filterStr + " && ";
                        grid._filterStr = grid._filterStr + "(" + tFstr + ")";
                    }
                }

                // TODO: 확인필요 - fixcol
                //if (grid._filterStr) grid._filterStr = grid._filterStr + " && ";
                //grid._filterStr = grid._filterStr + "(fixcol != 1)";

                trace("--------------------[Filter]--------------------------------------------------------");
                trace(grid._filterStr);
                trace("------------------------------------------------------------------------------------");
                objBindDs.filter(grid._filterStr);
                grid._grid_head_reset();
            }
        }
    };

    _pStandardGrid._setCellBkColor = function(strBand, nStartCell, nEndCell, bkColor)
    {
        for (var nCell = 0; nCell < this.getCellCount(strBand); nCell++)
        {
            if (nCell >= nStartCell && nCell <= nEndCell)
            {
                this.setCellProperty(strBand, nCell, "background", bkColor);
            }
            else
            {
                this.setCellProperty(strBand, nCell, "background", "");
            }
        }
    };


    //===============================================================
    // nexacro.StandardGrid : Events
    //===============================================================
    _pStandardGrid._StandardGrid_onrbuttonup = function(obj, e)
    {
        this.fixClickRow = e.row;
        this.vCurrCol = e.col;

        this.vHeadCell = -1;
        this.vBodyCell = -1;
        var nLoop = obj.getCellCount("head");
        if (nLoop < obj.getCellCount("body")) nLoop = obj.getCellCount("body");
        for (var i = 0; i < nLoop; i++)
        {
            if (obj.getCellProperty("head", i, "col") == this.vCurrCol) this.vHeadCell = i;
            if (obj.getCellProperty("body", i, "col") == this.vCurrCol) this.vBodyCell = i;
            if (this.vHeadCell >= 0 && this.vBodyCell >= 0) break;
        }

        this.vBodyCellID = this._cellNm_check(this.vBodyCell);

        var oForm = this._refform;
        var oComp = oForm.components[this.name + "_pmenu"];

        if (!oComp)
        {
            this._createPopupMenu();
            oComp = oForm.components[this.name + "_pmenu"];
        }

        if (oComp.isPopup())
        {
            oComp.closePopup();
        }
        else
        {
			var dimensioncount = this._refform.ds_dimension.rowcount;

        	// Head Click
            //if ((this.vHeadCell > 0 && this.fixClickRow < 0) || (this.vHeadCell == 0 && this.fixClickRow >= 0))
            if ((this.vHeadCell > 0 && this.fixClickRow < 0) || (this.vHeadCell > dimensioncount && this.fixClickRow >= 0))
            {
                oComp.set_innerdataset("");

                var tfilterstr = "grd_level > -1 && dimensionid == 'grd' ";
                if (this.vHeadCell > 0 && this.fixClickRow < 0)
                {
                    tfilterstr = tfilterstr + " && parentid == 'COL' ";
                }
                //else if (this.vHeadCell == 0 && this.fixClickRow >= 0)
                else if (this.vHeadCell > dimensioncount && this.fixClickRow >= 0)
                {
                    tfilterstr = tfilterstr + " && parentid == 'ROW' ";
                }
                nexacro.getApplication().gdsGridMenu.filter(tfilterstr);

                oComp.set_innerdataset("gdsGridMenu");
            }
            // Body Click
            else if (this.fixClickRow >= 0 && this.vHeadCell > 0)
            {
                oComp.set_innerdataset("");

                var tviewtype = "STD";
                var tfilterstr = "grd_level > -1 && ( dimensionid == '" + this._refform.ds_dimension.getColumn((this.vBodyCell - 1), "dimensionid") + "' ) ";
                tfilterstr = tfilterstr + "&& ( viewtype == null || viewtype == '" + tviewtype + "' ) ";
                nexacro.getApplication().gdsDimensionby.filter(tfilterstr);

                oComp.set_innerdataset("gdsDimensionby");
            }
            else
            {
                //alert("Check!!");
                return;
            }

            this.eScreen_X = e.clientx;
            this.eScreen_Y = e.clienty;

            oComp.trackPopupByComponent(this, e.clientx, e.clienty);
        }
    };

    _pStandardGrid._grid_Menu_onmenuclick = function(obj, e)
    {
        var objBindDs = this.getBindDataset();

        switch (e.id)
        {
            case "sort_a": // 오름차순 정렬
                this._sort_proc_one(this.vBodyCellID, "+");

                if (this.defaultSort != "")
                {
                    objBindDs.set_keystring("S:" + this.defaultSort + "+" + this.vBodyCellID);
                }
                else
                {
                    objBindDs.set_keystring("S:+" + this.vBodyCellID);
                }

                this._grid_head_reset();
                break;

            case "sort_d": // 내림차순 정렬
                this._sort_proc_one(this.vBodyCellID, "-");

                if (this.defaultSort != "")
                {
                    objBindDs.set_keystring("S:" + this.defaultSort + "-" + this.vBodyCellID);
                }
                else
                {
                    objBindDs.set_keystring("S:-" + this.vBodyCellID);
                }
                this._grid_head_reset();
                break;

            case "sort_m": // 멀티 소트
            case "filter_p": // 필터 선택
                this._PopupHeadMenu(e.id);
                break;

            case "sort_c": // 소트 취소
                this._sort_proc_one("NULL", "");

                if (this.defaultSort != "")
                {
                    //objBindDs.set_keystring("S:" + this.defaultSort);
                    objBindDs.set_keystring("");
                }
                else
                {
                    //objBindDs.set_keystring("S:+ORGRN");
                    objBindDs.set_keystring("");
                }
                this._grid_head_reset();
                break;

            case "filter_c": // 필터 취소
                for (var i = 0; i < this._colList.length; i++)
                {
                    this._colList[i].FSTR = ""; // 필터값 멀티

                    this._colList[i].FC1 = ""; // 필터연산자1
                    this._colList[i].FV1 = ""; // 값1
                    this._colList[i].FTY = ""; // 필터연결구분 1.AND, 2.OR
                    this._colList[i].FC2 = ""; // 필터연산자2
                    this._colList[i].FV2 = ""; // 값2
                }

                var oComp = this._refform.components[this.name + "_pdiv"];
                if (oComp)
                {
                    for (var i = 0; i < oComp.form.DS_FILTER.rowcount; i++)
                    {
                        oComp.form.DS_FILTER.setColumn(i, "CHK", "1");
                    }
                }
                // TODO: 확인필요 - fixcol
                //this._filterStr = "(fixcol != 1)";
                this._filterStr = "";
                trace("--------------------[Filter Cancel]-------------------------------------------------");
                trace(this._filterStr);
                trace("------------------------------------------------------------------------------------");

                objBindDs.filter(this._filterStr);
                this._grid_head_reset();
                break;

            case "grd_cf": // freeze col
                this.vHeadCellsFrozen = this.vHeadCell;
                for (var i = (this.vHeadCell + 1); i < this.getCellCount("Head"); i++)
                {
                    this.setFormatColProperty(i, "band", "Head");
                }
                for (var i = 0; i <= this.vHeadCell; i++)
                {
                    this.setFormatColProperty(i, "band", "left");
                }
                this._setCellBkColor("Head", 0, this.vHeadCellsFrozen, "lightgrey");
                break;

            case "grd_cc": // release col
                this.vHeadCellsFrozen = -1;
                for (var i = (this.getCellCount("Head") - 1); i >= 0; i--)
                {
                    this.setFormatColProperty(i, "band", "");
                }
                this._setCellBkColor("Head", 0, this.vHeadCellsFrozen, "");
                break;

            case "grd_rf": // freeze row
                this.setFixedRow(this.fixClickRow);
                break;

            case "grd_rc": // release row
                this.setFixedRow(-1);
                break;

            default: // by menu
                return "";
                break;
        }
    };

    _pStandardGrid._StandardGrid_onheaddblclick = function(obj, e)
    {
        if (obj.getCellProperty("head", e.cell, "text").indexOf("(") >= 0)
        {
            this.vCurrCol = e.col;
            this.vHeadCell = e.cell;
            this.vBodyCell = -1;

            var nLoop = obj.getCellCount("head");
            if (nLoop < obj.getCellCount("body")) nLoop = obj.getCellCount("body");
            for (var i = 0; i < nLoop; i++)
            {
                if (obj.getCellProperty("body", i, "col") == this.vCurrCol) this.vBodyCell = i;
                if (this.vBodyCell >= 0) break;
            }

            var nWidth = 0;
            var strText = obj.getCellProperty("head", this.vHeadCell, "text");
            var strMark = strText.substr(strText.indexOf("(") + 1, 1);

            if (obj.getRealColSize(this.vCurrCol - 1, false) > 0)
            {
                strText = strText.replace(strMark, "+");
                obj.setCellProperty("head", this.vHeadCell, "text", strText);
                nWidth = 0;
            }
            else
            {
                strText = strText.replace(strMark, "-");
                obj.setCellProperty("head", this.vHeadCell, "text", strText);
                nWidth = obj.getRealColSize(this.vCurrCol, false);
            }

            obj.set_enableredraw(false);

            try
            {
                for (var nIdx = 1; nIdx < 7; nIdx++)
                {
                    if (obj.getCellProperty("head", (this.vHeadCell - nIdx), "text").indexOf("(") >= 0) return;
                    if (obj.getCellProperty("head", (this.vHeadCell - nIdx), "text") > 190000 && obj.getCellProperty("head", (this.vHeadCell - nIdx), "text") < 300000)
                    {
                        obj.setFormatColProperty(this.vCurrCol - nIdx, "size", nWidth);
                        obj.setRealColSize("body", this.vCurrCol - nIdx, nWidth, false);
                        //this._setColAutoSizing((this.vCurrCol - nIdx), (this.vHeadCell - nIdx), (this.vBodyCell - nIdx), nWidth);
                    }
                }
            }
            catch (e)
            {}
            finally
            {
                obj.set_enableredraw(true);
            }
        }
    };

    _pStandardGrid._StandardGrid_onkeydown = function(obj, e)
    {
        var keycode = e.keycode;

        var COL_SEPERATOR = "\t";
        var ROW_SEPERATOR = "\r\n";

        if (nexacro._Browser == "Runtime" || nexacro._Browser == "IE")
        {
            if (e.ctrlkey && !e.shiftkey && !e.altkey)
            {
                if (keycode == 67)
                {
                    var startrow = nexacro.toNumber(obj.selectstartrow),
                        endrow = nexacro.toNumber(obj.selectendrow),
                        startcol = nexacro.toNumber(obj.selectstartcol),
                        endcol = nexacro.toNumber(obj.selectendcol);

                    var copyData = "";
                    var checkIndex = {};

                    for (var i = startrow; i <= endrow; i++)
                    {
                        for (var j = startcol; j <= endcol; j++)
                        {
                            if (!checkIndex[j])
                            {
                                checkIndex[j] = 1;
                            }

                            var value = obj.getCellValue(i, j);

                            if (!nexacro._isNull(value) && value != "undefined")
                            {
                                if (j < obj.selectendcol)
                                {
                                    copyData += obj.getCellValue(i, j) + COL_SEPERATOR;
                                }
                                else
                                {
                                    copyData += obj.getCellValue(i, j);
                                }
                            }
                        }

                        if (i < obj.selectendrow)
                        {
                            copyData += ROW_SEPERATOR;
                        }
                    }

                    copyData += ROW_SEPERATOR;

                    system.clearClipboard();
                    system.setClipboard("CF_TEXT", copyData);
                }
                else if (keycode == 86)
                {
                    var copyData = system.getClipboard("CF_TEXT");
                    copyData = new String(copyData);
                    var rowData = copyData.split(ROW_SEPERATOR);
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

                        var columnData = rowData[i].split(COL_SEPERATOR);
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
                            if (!nexacro._isNull(tempValue) && tempValue != "undefined")
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
                    var startrow = nexacro.toNumber(obj.selectstartrow),
                        endrow = nexacro.toNumber(obj.selectendrow),
                        startcol = nexacro.toNumber(obj.selectstartcol),
                        endcol = nexacro.toNumber(obj.selectendcol);

                    var checkIndex = {};

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
                                clipText += value + COL_SEPERATOR;
                            }
                            else
                            {
                                clipText += value;
                            }
                        }

                        clipText += ROW_SEPERATOR;
                    }

                    var ta = this._createTextarea(clipText);
                    nexacro._OnceCallbackTimer.callonce(this, function()
                    {
                        document.body.removeChild(ta);
                    }, 100);

                    e.stopPropagation();
                }
                else if (keycode == 86)
                {
                    var ta = this._createTextarea('');
                    nexacro._OnceCallbackTimer.callonce(this, function()
                    {
                        var clipText = ta.value;
                        document.body.removeChild(ta);
                        this._pasteData(clipText);
                    }, 100);

                    e.stopPropagation();
                }
            }
        }
    };

    delete _pStandardGrid;
}