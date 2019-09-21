(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Mdi");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Tab", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"5","19","19","1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_allX");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vertical",null,"5","19","19","21",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_H");
            this.addChild(obj.name, obj);

            obj = new Button("btn_horizontal",null,"5","19","19","41",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_V");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade",null,"5","19","19","61",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_min");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize",null,"5","19","19","81",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_max");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList","245","1",null,"28","100",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MdiPrev",null,"4","8","19","13",null,null,null,null,null,this.divButtonList.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_prev");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Button("btn_MdiNext",null,"4","8","19","0",null,null,null,null,null,this.divButtonList.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_next");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divButtonList.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Mdi.xfdl", function() {
        this.numLeft = 0;
        this.numTop = 0;
        this.numWidth = 110;
        this.numHeight = 30;
        this.numExBtnLeft = 91;
        this.numExBtnTop = 10;
        this.numExBtnWidth = 12;
        this.numExBtnHeight = 11;
        this.numWidCount = 0;
        this.numStIdx = 0;
        this.numEdIdx = 0;
        this.strFocusBtn = "";

        this.Frame_Mdi_onload = function(obj,e)
        {
        	this.numWidCount = nexacro.floor((this.divButtonList.form.btn_MdiPrev.getOffsetLeft() - 10) / (this.numWidth + 1));
        	this.divButtonList.form.set_scrollbartype("none");
        };

        this.fnAddTabPage = function(pvWinId, pvMenuNm)
        {
        	var nRow = this.dsOpenList.addRow();
        	this.dsOpenList.setColumn(nRow, "code", pvWinId);
        	this.dsOpenList.setColumn(nRow, "caption", pvMenuNm);
        	this.dsOpenList.setColumn(nRow, "BTN_ID", "btn_Menu_" + pvWinId);
        	this.dsOpenList.setColumn(nRow, "BTN_EX_ID", "btn_Close_" + pvWinId);

        	this.fnMenuClear();

        	var objBtn = new Button(); // 메뉴 버튼
        	objBtn.init("btn_Menu_" + pvWinId, this.numLeft, this.numTop, this.numWidth + 1, this.numHeight, null, null);

        	this.divButtonList.form.addChild("btn_Menu_" + pvWinId, objBtn);
        	objBtn.set_cssclass("btn_MF_tab");
        	objBtn.set_tooltiptext(pvMenuNm);
        	objBtn.set_tooltiptype("hover");
        	//objBtn.set_enable(true);

        	var strText = pvMenuNm.length > 10 ? pvMenuNm.substr(0, 10) + "..." : pvMenuNm;

        	objBtn.set_text(strText);
        	objBtn.set_visible(true);
        	objBtn.addEventHandler("onclick", this.div_main_btn_Menu_onclick, this);
        	objBtn.show();

        	var objCloseBtn = new Button(); // 메뉴 닫기 버튼
        	objCloseBtn.init("btn_Close_" + pvWinId, this.numExBtnLeft, this.numExBtnTop, this.numExBtnWidth, this.numExBtnHeight, null, null);
        	this.divButtonList.form.addChild("btn_Close_" + pvWinId, objCloseBtn);

        	objCloseBtn.set_cssclass("btn_MF_tabClose");
        	objCloseBtn.set_visible(true);
        	objCloseBtn.addEventHandler("onclick", this.div_main_btn_Close_onclick, this);
        	objCloseBtn.show();

        	objCloseBtn.bringToFront();

        	this.strFocusBtn = objBtn.name;

        	this.fnMenuMove("ADD");
        };

        this.div_main_btn_Menu_onclick = function(obj,e)
        {
        	var strVar = obj.name.replace("btn_Menu_", "");
        	this.fnActiveTabPage(strVar);
        };

        this.div_main_btn_Close_onclick = function(obj,e)
        {
        	var strVar = obj.name.replace("btn_Close_", "");
        	this.fnMenuClose(strVar);
        };

        this.fnMenuClose = function(pvWinId)
        {
        	var objApp = nexacro.getApplication();
        	var objDelete = objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet.removeChild(pvWinId);

        	if (objDelete) {
        		objDelete.destroy();
        		objDelete = null;
        	}

        	this.fnDeleteTabpage(pvWinId);


        	if(objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet.all.length < 1){
        		this.btn_closeAll.click();
        	}
        };

        this.fnActiveTabPage = function(pvWinId)
        {
        	this.fnMenuClear();
        	var nRow = this.dsOpenList.findRow("code", pvWinId);
        	this.strFocusBtn = this.dsOpenList.getColumn(nRow, "BTN_ID");

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

        		if (this.numStIdx < 0) {
        			this.numStIdx = 0;
        		}
        	}

        	this.fnMenuMove("");

        	var objComps = this.divButtonList.form.components;
        	var i;

        	for (i = 0; i < objComps.length; i++)
        	{
        		if (objComps[i] instanceof Button && objComps[i].name.indexOf("btn_Menu_") >= 0)
        		{
        			if (objComps[i].name == this.strFocusBtn) {
        				objComps[i].set_cssclass("btn_MF_tab_selected");
        			} else {
        				objComps[i].set_cssclass("btn_MF_tab");
        			}
        		}
        	}

        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet[pvWinId].setFocus();
        };

        this.fnMenuClear = function(blnVisi)
        {
        	if (!blnVisi) blnVisi = true;

        	var objComps = this.divButtonList.form.components;
        	var i;

        	for (i = 0; i < objComps.length; i++)
        	{
        		if (objComps[i] instanceof Button && objComps[i].name.indexOf("btn_Menu_") >= 0) {
        			//objComps[i].set_enable(true);
        			//objComps[i].set_cssclass("btn_MF_tab");
        			objComps[i].set_visible(blnVisi);
        		} else if (!blnVisi && objComps[i] instanceof Button && objComps[i].name.indexOf("btn_Close_") >= 0) {
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

        		if (this.numStIdx < 0) {
        			this.numStIdx = 0;
        		}
        	}
        	else if (pvType == "NEXT")
        	{
        		this.numEdIdx += 1;
        		this.numStIdx = this.numEdIdx - this.numWidCount + 1;

        		if (this.numStIdx < 0) {
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
        			numRow = this.dsOpenList.findRow("BTN_ID", this.strFocusBtn);

        			if (((numRow + 1) - this.numWidCount) >= 0) {
        				this.numEdIdx = numRow;
        				this.numStIdx = this.numEdIdx - this.numWidCount + 1;
        			} else {
        				this.numStIdx = 0;
        				this.numEdIdx = this.numStIdx + this.numWidCount - 1;

        				if (this.numEdIdx >= this.dsOpenList.rowcount) this.numEdIdx = this.dsOpenList.rowcount - 1;
        			}
        		}
        	}

        	this.fnMenuClear(false);

        	var objBtn, objExBtn;
        	var nLeft = this.numLeft;
        	var i;

        	for (i = this.numStIdx; i <= this.numEdIdx; i++)
        	{
        		objBtn = this.divButtonList.form.components[this.dsOpenList.getColumn(i, "BTN_ID")];

        		if (this.gfn_isNull(objBtn)) return;

        		objExBtn = this.divButtonList.form.components[this.dsOpenList.getColumn(i, "BTN_EX_ID")];
        		objBtn.move(nLeft, this.numTop);
        		objBtn.set_visible(true);
        		objExBtn.move(nLeft + this.numExBtnLeft, this.numExBtnTop);
        		objExBtn.set_visible(true);

        		nLeft += this.numWidth;
        	}

        	if (this.numStIdx <= 0) {
        		this.divButtonList.form.btn_MdiPrev.set_enable(false);
        	} else {
        		this.divButtonList.form.btn_MdiPrev.set_enable(true);
        	}

        	if ((this.numEdIdx + 1) == this.dsOpenList.rowcount) {
        		this.divButtonList.form.btn_MdiNext.set_enable(false);
        	} else {
        		this.divButtonList.form.btn_MdiNext.set_enable(true);
        	}

        	//this.strFocusBtn && this.divButtonList.form.components[this.strFocusBtn] && this.divButtonList.form.components[this.strFocusBtn].set_cssclass("btn_mdi_mdiBtn_s");
        	//btn_MF_tab_selected
        	this.divButtonList.form.resetScroll();
        };

        this.fnDeleteTabpage = function(pvWinId)
        {
        	var strBtnId, strBtnExId;
        	var objDelete;
        	var nRow = this.dsOpenList.findRow("code", pvWinId);

        	if (nRow < 0) {
        		return;
        	}

        	strBtnId = this.dsOpenList.getColumn(nRow, "BTN_ID");
        	strBtnExId = this.dsOpenList.getColumn(nRow, "BTN_EX_ID");

        	objDelete = this.divButtonList.form.removeChild(strBtnId);

        	if (objDelete) {
        		objDelete.destroy();
        		objDelete = null;
        	}

        	objDelete = this.divButtonList.form.removeChild(strBtnExId);

        	if (objDelete) {
        		objDelete.destroy();
        		objDelete = null;
        	}

        	this.dsOpenList.deleteRow(nRow);
        	this.dsOpenList.applyChange();
        	this.numEdIdx = -1;

        	this.fnMenuMove("RESIZE");

        	var objApp = nexacro.getApplication();
        	objApp.gds_OpenMenu.deleteRow(objApp.gds_OpenMenu.findRow("WIN_ID", pvWinId));

        	var count = objApp.gds_OpenMenu.rowcount;

        	if (count == 0) return;

        	//다음 포커스 설정
        	var preMenuId = objApp.gds_OpenMenu.getColumn(count - 1, "WIN_ID");
        	preMenuId && this.fnActiveTabPage(preMenuId);
        };

        this.divButtonList_btn_MdiPrev_onclick = function(obj,e)
        {
        	this.fnMenuMove("PREV");
        };

        this.divButtonList_btn_MdiNext_onclick = function(obj,e)
        {
        	this.fnMenuMove("NEXT");
        };

        this.btn_arrange_onclick = function(obj,  e)
        {
        	var strType = nexacro.replaceAll(obj.name, "btn_", "");

        	var objApp = nexacro.getApplication();
        	var objMDIFrameSet = objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet;
        	var frameCount = objMDIFrameSet.all.length;
        	var i;

        	if (frameCount > 1)
        	{
        		for (i = 0; i < frameCount; i++)
        		{
        			objMDIFrameSet.frames[i].set_showtitlebar(true);
        			objMDIFrameSet.frames[i].set_openstatus("normal");
        		}

        		objMDIFrameSet.arrange(strType);
        	}
        };

        this.btn_maximize_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objMDIFrameSet = objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet;
        	var frameCount = objMDIFrameSet.all.length;
        	var i;

        	if (frameCount > 1)
        	{
        		var activeFrame = objMDIFrameSet.getActiveFrame();

        		for (i = 0; i < frameCount; i++)
        		{
        			objMDIFrameSet.frames[i].set_showtitlebar(false);
        			objMDIFrameSet.frames[i].set_openstatus("maximize");
        		}

        		activeFrame.form.setFocus();
        	}
        };

        this.btn_closeAll_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objMDIFrameSet = objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet;
        	var frameCount = objMDIFrameSet.all.length;
        	var i;

        	if (frameCount > 0)
        	{
        		var activeFrame = objMDIFrameSet.getActiveFrame();

        		for (i = frameCount - 1; i > -1; i--)
        		{
        			objMDIFrameSet.frames[i].form.close();
        		}

        		objApp.gds_OpenMenu.clearData();
        	}


        	//all close할 경우 main 띄우기
        	if (objMDIFrameSet.all.length < 1)
        	{
        		var objChildFrame = new ChildFrame();

        		objChildFrame.init("HomeFrame", 0, 0, "","",0,0);

        		objChildFrame.set_formurl("frame::Main.xfdl");
        		//objChildFrame.set_resizable(true);
        		objChildFrame.set_openstatus("maximize");
        		objChildFrame.set_showtitlebar(false);
        		objChildFrame.set_showcascadetitletext(false);

        		objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet.addChild("HomeFrame", objChildFrame);

        		objChildFrame.show();
        	}
        };

        this.gfn_isNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") {
        		return true;
        	}

        	if (Val == null) {
        		return true;
        	}

        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) {
        		return true;
        	}

        	if (Val.length == 0) {
        		return true;
        	}

        	return false;
        }

        this.divButtonList_onsize = function(obj,e)
        {
        	this.numWidCount = nexacro.floor((this.divButtonList.form.btn_MdiPrev.getOffsetLeft() - 10) / (this.numWidth + 1));
        	this.fnMenuMove("RESIZE");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Frame_Mdi_onload,this);
            this.btn_closeAll.addEventHandler("onclick",this.btn_closeAll_onclick,this);
            this.btn_vertical.addEventHandler("onclick",this.btn_arrange_onclick,this);
            this.btn_horizontal.addEventHandler("onclick",this.btn_arrange_onclick,this);
            this.btn_cascade.addEventHandler("onclick",this.btn_arrange_onclick,this);
            this.btn_maximize.addEventHandler("onclick",this.btn_maximize_onclick,this);
            this.divButtonList.addEventHandler("onsize",this.divButtonList_onsize,this);
            this.divButtonList.form.btn_MdiPrev.addEventHandler("onclick",this.divButtonList_btn_MdiPrev_onclick,this);
            this.divButtonList.form.btn_MdiNext.addEventHandler("onclick",this.divButtonList_btn_MdiNext_onclick,this);
        };

        this.loadIncludeScript("Frame_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
