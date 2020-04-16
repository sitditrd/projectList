(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mdi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_mdi_bg01");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MdiPrev",null,"0","30",null,"58","0",null,null,null,null,this.divButtonList.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_mdi_tabPrev");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Button("btn_MdiNext",null,"0","30",null,"29","0",null,null,null,null,this.divButtonList.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_mdi_tabNext");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Button("btn_AllClose",null,"0","30",null,"0","0",null,null,null,null,this.divButtonList.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_mdi_tabClose");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("stcHome","0","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_mdi_home");
            this.addChild(obj.name, obj);

            obj = new Edit("edtText","1091","57","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mdi.xfdl", function() {
        //MDI버튼 설정 정보
        this.numLeft = 30;
        this.numTop = 0;
        this.numWidth = 150;
        this.numExBtnLeft = 125;
        this.numExBtnTop = 0;
        this.numExBtnWidth = 25;
        this.numWidCount = 0;
        this.numStIdx = 0;
        this.numEdIdx = 0;
        this.objFocusBtn = null;

        this.mdi_onload = function(obj,e)
        {
        	this.numWidCount = nexacro.floor((this.divButtonList.form.btn_MdiPrev.getOffsetLeft() - 10) / (this.numWidth + 1));
        	this.divButtonList.form.set_scrollbartype("none");
        	this.divButtonList.set_border("0px none");
        };

        this.stcHome_onclick = function(obj,e)
        {
        	this.parent.parent["gfnActiveWorkFrame"].call(this.parent.parent, "home");
        };

        this.gfnAddTabPage = function(pvWinId, pvMenuNm)
        {
            var nRow = this.dsOpenList.addRow();
            this.dsOpenList.setColumn(nRow, "code", pvWinId);
            this.dsOpenList.setColumn(nRow, "caption", pvMenuNm);
            this.dsOpenList.setColumn(nRow, "BTN_ID", "btn_Menu_" + pvWinId);
            this.dsOpenList.setColumn(nRow, "BTN_EX_ID", "btn_Close_" + pvWinId);

            this.fnMenuClear();

            var objBtn = new Button(); // 메뉴 버튼
            objBtn.init("btn_Menu_" + pvWinId, this.numLeft, this.numTop, this.numWidth + 1, 30, null, null);

            this.divButtonList.addChild("btn_Menu_" + pvWinId, objBtn);
            objBtn.set_cssclass("btn_mdi_mdiBtn");
            objBtn.set_tooltiptext(pvMenuNm);
            objBtn.set_tooltiptype("hover");

            var strText = this.fnGetByteStr(pvMenuNm, 15);

            objBtn.set_text(strText); // 10Byte 까지 출력
            objBtn.set_visible(true);
            objBtn.addEventHandler("onclick", this.div_main_btn_Menu_onclick, this);
            objBtn.show();

            var objCloseBtn = new Button(); // 메뉴 닫기 버튼
            objCloseBtn.init("btn_Close_" + pvWinId, this.numExBtnLeft, this.numExBtnTop, this.numExBtnWidth, 30, null, null);
            this.divButtonList.addChild("btn_Close_" + pvWinId, objCloseBtn);

            objCloseBtn.set_cssclass("btn_mdi_close");
            objCloseBtn.set_visible(true);
            objCloseBtn.addEventHandler("onclick", this.div_main_btn_Close_onclick, this);
            objCloseBtn.show();

            objCloseBtn.bringToFront();

            this.objFocusBtn = "btn_Menu_" + pvWinId;

            this.fnMenuMove("ADD");
        };

        this.div_main_btn_Menu_onclick = function(obj,e)
        {
            var strVar = obj.name.replace("btn_Menu_", "");
            this.gfnActiveTabPage(strVar);
        };

        this.div_main_btn_Close_onclick = function(obj,e)
        {
            var strVar = obj.name.replace("btn_Close_", "");
            this.fnMenuClose(strVar);
        };

        this.fnGetByteStr = function(strValue, nLen)
        {
            if (Eco.isEmpty(strValue) == true) return "";
            var strReturn = "";
            var strCh;
            var nChLen = 0;
            for (var i = 0; i < strValue.length; i++)
            {
                strCh = strValue.charAt(i);
                this.edtText.set_value(strCh);
                nChLen += this.edtText.getLength("ascii");
                if (nChLen <= nLen)
                {
                    strReturn += strCh;
                }
                else
                {
                    break;
                }
            }

            this.edtText.set_value(strValue);

            if (this.edtText.getLength("ascii") > nLen)
            {
                strReturn += "…";
            }
            return strReturn;
        };

        this.fnMenuClose = function(pvWinId)
        {
            this.parent.parent["gfnCloseWorkForm"].call(this.parent.parent, pvWinId);

            if (this.dsOpenList.rowcount > 0)
            {
                this.divButtonList.form.btn_AllClose.set_enable(true);
            }
            else
            {
                this.divButtonList.form.btn_AllClose.set_enable(false);
            }
        };

        this.gfnActiveTabPage = function(pvWinId)
        {
            this.fnMenuClear();
            var nRow = this.dsOpenList.findRow("code", pvWinId);
            this.objFocusBtn = this.dsOpenList.getColumn(nRow, "BTN_ID");

            //this.objFocusBtn.set_enable(false);
            this.divButtonList.form.components[this.objFocusBtn].set_cssclass("btn_mdi_mdiBtn_s");

            if (nRow < this.numStIdx)
            {
                this.numStIdx = nRow;
                this.numEdIdx = this.numStIdx + this.numWidCount - 1;
                if (this.numEdIdx == this.dsOpenList.rowcount) this.numEdIdx = this.dsOpenList.rowcount - 1;
            }
            else if (nRow > this.numEdIdx)
            {
                this.numEdIdx = nRow;
                this.numStIdx = this.numEdIdx - this.numWidCount + 1;
                if (this.numStIdx < 0)
                {
                    this.numStIdx = 0;
                }
            }

            this.fnMenuMove("");

            this.parent.parent["gfnActiveWorkFrame"].call(this.parent.parent, pvWinId);
        };

        this.fnMenuClear = function(blnVisi)
        {
            if (Eco.isEmpty(blnVisi) == true) blnVisi = true;

            var objComps = this.divButtonList.form.components;
            for (var i = 0; i < objComps.length; i++)
            {
                if (objComps[i] instanceof Button && objComps[i].name.indexOf("btn_Menu_") >= 0)
                {
                    //objComps[i].set_enable(true);
                    objComps[i].set_cssclass("btn_mdi_mdiBtn");
                    objComps[i].set_visible(blnVisi);
                }
                else if (!blnVisi && objComps[i] instanceof Button && objComps[i].name.indexOf("btn_Close_") >= 0)
                {
                    objComps[i].set_visible(blnVisi);
                }
            }
        };

        // NEXT
        // PREV
        // ADD
        // FIRST
        this.fnMenuMove = function(pvType)
        {
            if (pvType == "ADD")
            {
                this.numEdIdx = this.dsOpenList.rowcount - 1;
                this.numStIdx = this.numEdIdx - this.numWidCount + 1;
                if (this.numStIdx < 0)
                {
                    this.numStIdx = 0;
                }
            }
            else if (pvType == "NEXT")
            {
                this.numEdIdx += 1;
                this.numStIdx = this.numEdIdx - this.numWidCount + 1;
                if (this.numStIdx < 0)
                {
                    this.numStIdx = 0;
                }
            }
            else if (pvType == "PREV")
            {
                this.numStIdx -= 1;
                this.numEdIdx = this.numStIdx + this.numWidCount - 1;
                if (this.numEdIdx >= this.dsOpenList.rowcount) this.numEdIdx = this.dsOpenList.rowcount - 1;
            }
            else if (pvType == "FIRST")
            {
                this.numStIdx = 0;
                this.numEdIdx = this.numStIdx + this.numWidCount - 1;
                if (this.numEdIdx >= this.dsOpenList.rowcount) this.numEdIdx = this.dsOpenList.rowcount - 1;
            }
            else if (pvType == "RESIZE")
            {
                var numRow = -1;
                if (this.dsOpenList.rowcount <= this.numWidCount)
                {
                    this.numStIdx = 0;
                    this.numEdIdx = this.numStIdx + this.numWidCount - 1;
                    if (this.numEdIdx >= this.dsOpenList.rowcount) this.numEdIdx = this.dsOpenList.rowcount - 1;
                }
                else
                {
                    numRow = this.dsOpenList.findRow("BTN_ID", this.objFocusBtn);
                    if (((numRow + 1) - this.numWidCount) >= 0)
                    {
                        this.numEdIdx = numRow;
                        this.numStIdx = this.numEdIdx - this.numWidCount + 1;
                    }
                    else
                    {
                        this.numStIdx = 0;
                        this.numEdIdx = this.numStIdx + this.numWidCount - 1;
                        if (this.numEdIdx >= this.dsOpenList.rowcount) this.numEdIdx = this.dsOpenList.rowcount - 1;
                    }
                }
            }

            this.fnMenuClear(false);

            var objBtn, objExBtn;
            var nLeft = this.numLeft;

            for (var i = this.numStIdx; i <= this.numEdIdx; i++)
            {
                objBtn = this.divButtonList.form.components[this.dsOpenList.getColumn(i, "BTN_ID")];
                objExBtn = this.divButtonList.form.components[this.dsOpenList.getColumn(i, "BTN_EX_ID")];
                objBtn.move(nLeft, this.numTop);
                objBtn.set_visible(true);
                objExBtn.move(nLeft + this.numExBtnLeft, this.numExBtnTop);
                objExBtn.set_visible(true);

                nLeft += this.numWidth;
            }

            if (this.numStIdx <= 0)
            {
                this.divButtonList.form.btn_MdiPrev.set_enable(false);
            }
            else
            {
                this.divButtonList.form.btn_MdiPrev.set_enable(true);
            }

            if ((this.numEdIdx + 1) == this.dsOpenList.rowcount)
            {
                this.divButtonList.form.btn_MdiNext.set_enable(false);
            }
            else
            {
                this.divButtonList.form.btn_MdiNext.set_enable(true);
            }

            if (this.dsOpenList.rowcount > 0)
            {
                this.divButtonList.form.btn_AllClose.set_enable(true);
            }
            else
            {
                this.divButtonList.form.btn_AllClose.set_enable(false);
            }

            this.objFocusBtn && this.divButtonList.form.components[this.objFocusBtn] && this.divButtonList.form.components[this.objFocusBtn].set_cssclass("btn_mdi_mdiBtn_s");

            this.divButtonList.form.resetScroll();
        };

        this.gfnDeleteTabpage = function(pvWinId)
        {
            var strBtnId, strBtnExId;
            var objDelete;
            var nRow = this.dsOpenList.findRow("code", pvWinId);

            if (nRow < 0)
            {
                return;
            }

            strBtnId = this.dsOpenList.getColumn(nRow, "BTN_ID");
            strBtnExId = this.dsOpenList.getColumn(nRow, "BTN_EX_ID");

            objDelete = this.divButtonList.form.removeChild(strBtnId);

        	if (objDelete)
        	{
        		objDelete.destroy();
        		objDelete = null;
        	}

            objDelete = this.divButtonList.form.removeChild(strBtnExId);

            if (objDelete)
        	{
        		objDelete.destroy();
        		objDelete = null;
        	}

            this.dsOpenList.deleteRow(nRow);
            this.dsOpenList.applyChange();
            this.numEdIdx = -1;

            this.fnMenuMove("RESIZE");

            if (this.parent.parent.dsOpenMenu.rowcount == 0) return;

            //다음 포커스 설정
            var preMenuId;
            for (var i = this.parent.parent.dsOpenMenu.rowcount - 1; i >= 0; i--)
            {
                preMenuId = this.parent.parent.dsOpenMenu.getColumn(i, "winId");
                break;
            }
            this.gfnActiveTabPage(preMenuId);
        };

        this.mdi_onsize = function(obj,e)
        {
        	this.numWidCount = nexacro.floor((this.divButtonList.form.btn_MdiPrev.getOffsetLeft() - 10) / (this.numWidth + 1));
            if (this.dsOpenList.rowcount == 0) return;
            this.fnMenuMove("RESIZE");
        };

        this.divButtonList_btn_MdiPrev_onclick = function(obj,e)
        {
        	this.fnMenuMove("PREV");
        };

        this.divButtonList_btn_MdiNext_onclick = function(obj,e)
        {
        	this.fnMenuMove("NEXT");
        };

        this.divButtonList_btn_AllClose_onclick = function(obj,e)
        {
        	for (var i = this.parent.parent.dsOpenMenu.rowcount - 1; i >= 0; i--)
            {
                preMenuId = this.parent.parent.dsOpenMenu.getColumn(i, "winId");
                this.parent.parent["gfnCloseWorkForm"].call(this.parent.parent, preMenuId);
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mdi_onload,this);
            this.addEventHandler("onsize",this.mdi_onsize,this);
            this.divButtonList.form.btn_MdiPrev.addEventHandler("onclick",this.divButtonList_btn_MdiPrev_onclick,this);
            this.divButtonList.form.btn_MdiNext.addEventHandler("onclick",this.divButtonList_btn_MdiNext_onclick,this);
            this.divButtonList.form.btn_AllClose.addEventHandler("onclick",this.divButtonList_btn_AllClose_onclick,this);
            this.stcHome.addEventHandler("onclick",this.stcHome_onclick,this);
        };

        this.loadIncludeScript("mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
