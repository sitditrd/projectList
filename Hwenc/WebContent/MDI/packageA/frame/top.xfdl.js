(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("Top Frame");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,64);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NM\">비밀번호변경</Col></Row><Row><Col id=\"MENU_NM\">사용자정보변경</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top","0","0",null,"64","0",null,"1278",null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e7590b");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftMenu","9","15","34","34",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_TF_LeftOpen");
            this.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","65","12","134","40",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_TF_Bg");
            obj.set_image("url(\'theme://images/img_top_logo02.png\')");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_pre",null,"17","30","30","186",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TF_MenuLspin");
            obj.set_enable("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"17","30","30","152",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_MenuRspin");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_logOut",null,"17","30","30","109",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_LogOut");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_sysConfig",null,"17","30","30","70",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_TF_Setting");
            this.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("img_userInfo",null,"14","37","37","19",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("9");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'theme://images/testPersonPhoto.jpg\')");
            obj.set_imagealign("center middle");
            obj.set_cssclass("img_TF_Person");
            this.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("img_user",null,"0","46","64","15",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("10");
            obj.set_cssclass("img_TF_Bg");
            obj.set_image("url(\'theme://images/img_TF_personMask.png\')");
            this.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("img_userBg",null,"38","14","16","17",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("11");
            obj.set_cssclass("img_TF_Bg");
            obj.set_image("url(\'theme://images/img_TF_personIcon.png\')");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_userInfo",null,"13","39","40","18",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_TF_Trans");
            this.div_top.addChild(obj.name, obj);

            obj = new Div("div_topBtn","220","0",null,"64","225",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("13");
            this.div_top.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_leftFrame","20","116","280","730",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_enable("true");
            obj.set_url("frame::left.xfdl");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_userInfo","866","97","148","154",null,null,null,null,null,null,this);
            obj.set_background("#373737");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_usr","22","12","12","12",null,null,null,null,null,null,this.pdiv_userInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_TF_Bg");
            obj.set_image("url(\'theme://images/img_TF_popupIcon.png\')");
            this.pdiv_userInfo.addChild(obj.name, obj);

            obj = new Static("sta_logInUser","39","8","57","18",null,null,null,null,null,null,this.pdiv_userInfo.form);
            obj.set_taborder("1");
            obj.set_text("홍길동 님");
            obj.set_cssclass("sta_TF_LoginName");
            obj.set_fittocontents("width");
            this.pdiv_userInfo.addChild(obj.name, obj);

            obj = new Grid("grd_userInfo","0","34",null,null,"0","0",null,null,null,null,this.pdiv_userInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_TF_LogPopup");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_userInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.pdiv_userInfo.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,64,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::left.xfdl");
        };
        
        // User Script
        this.registerScript("top.xfdl", function() {

        this.frmTop_onload = function(obj,e)
        {
        	this.div_top.form.div_topBtn.form.set_scrollbartype("none");
        	//this.initTopMenu();
        };

        this.initTopMenu = function ()
        {
        	var objApp = nexacro.getApplication();
        	objApp.gdsMenu.filter("LVL<1");

        	var nMenuCnt = this.ds_menu.copyData(objApp.gdsMenu, true);
        	//objApp.gdsMenu.filter("");
        	var nWidth = 80, nHeight = 40;
        	var nLeft = 20;
        	var nTop = 10;
        	var topObj, topId, topName, topGrpId;
        	var preTopId;

        	for(var i = 0; i<nMenuCnt; i++){
        		topObj = new Button();
        		topId = this.ds_menu.getColumn(i,"MENU_ID");
        		topName = this.ds_menu.getColumn(i,"MENU_NM");
        		topGrpId = this.ds_menu.getColumn(i,"GROUP_ID");
        		topObj.init("btn_"+topId, (i == 0 ? nLeft : preTopId + ":20px"), nTop, nWidth, nHeight);

        		topObj.menuid = topId;
        		topObj.menunm = topName;
        		topObj.grpid = topGrpId;
        		topObj.set_fittocontents("width");
        		topObj.set_text(topName);
        		topObj.set_cssclass("btn_TF_Menu");
        		topObj.setEventHandler("onclick", this.btn_menu_onclick, this);

        		this.div_top.form.div_topBtn.addChild("btn_"+topId,topObj);
        		topObj.show();

        		preTopId = "btn_"+topId;
        	}
        };

        this.btn_menu_onclick = function (obj, e)
        {
        	obj.set_cssclass("btn_TF_MenuPix");

        	for(var i=0;i<this.ds_menu.getRowCount();i++){
        		var sBtnId = "btn_" + this.ds_menu.getColumn(i, "MENU_ID");
        		if(sBtnId != obj.id){
        			this.div_top.form.div_topBtn.form[sBtnId].set_cssclass("btn_TF_Menu");
        		}
        	}

        	this.pdiv_leftFrame.form.btn_leftMenu_onclick();
        	this.pdiv_leftFrame.form.fnChangeMenu(obj.menuid, obj.menunm, obj.grpid);

        	this.div_top_btn_leftMenu_onclick(this.div_top.form.btn_leftMenu);
        };

        this.div_top_btn_leftMenu_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var nXpos = 0, nYpos = this.height;
        	var nWidth = this.pdiv_leftFrame.width;
        	var nMdiHeight = objApp.mainframe.VFrameSet.OpenMenuFrame.getOffsetHeight();
        	var nHeight = nexacro.toNumber(objApp.mainframe.VFrameSet.getOffsetHeight()) - nexacro.toNumber(nMdiHeight);

        	this.pdiv_leftFrame.trackPopupByComponent(this, nXpos, nYpos, nWidth, nHeight, null, false);
        };

        this.div_top_btn_logOut_onclick = function(obj,e)
        {
        	try
        	{
        		var objApp = nexacro.getApplication();
        		var objForm = objApp.mainframe.VFrameSet.OpenMenuFrame.form;
        		objForm.components["btn_closeAll"].click();
        		objApp.mainframe.VFrameSet.set_separatesize("*,0,0,0,0");
        	}
        	catch (err)
        	{
        		trace("[Error] in frame::top.xfdl logout : " + err.message);
        	}
        	//Xpush 접속 끊기
        	objApp.mainframe.VFrameSet.LoginFrame.form.XPush00.disconnect();
        };

        this.div_top_btn_userInfo_onclick = function(obj,e)
        {
        	var nXpos = 0;
        	var nYpos = obj.height;

        	this.pdiv_userInfo.trackPopupByComponent(obj, nXpos, nYpos);
        };

        this.fnOpenMenu = function(menuId, aSend, sNew, sText)
        {
        	var objApp = nexacro.getApplication();
        	var nRow = objApp.gdsMenu.findRow("MENU_ID", menuId);

        	if (nRow < 0) return;

        	var menuNm = objApp.gdsMenu.getColumn(nRow, "MENU_NM");
        	var menuUrl = objApp.gdsMenu.getColumn(nRow, "MENU_URL");

        	if (!menuUrl)	return;

        	var objChildFrame;
        	var winId = "win_" + menuId;

        	objChildFrame = objApp.mainframe.VFrameSet.MDIFrameSet[winId];

        	if (objChildFrame && sNew != true)
        	{
        		objChildFrame.setFocus();

        		if (aSend && aSend != null)
        		{
        			objChildFrame.form.all["fnLinkSearch"].call(objChildFrame.form, aSend);
        		}

        		return;
        	}

        	if (sNew)
        	{
        		var openCnt = objApp.gdsOpenMenu.getCaseCount("MENU_ID=='" + menuId + "'");

        		for (var i = 0; i < (openCnt + 1); i++)
        		{
        			var tmp_winId = winId;
        			tmp_winId = tmp_winId + "_temp_" + (i + 1);

        			if (objApp.gdsOpenMenu.findRow("WIN_ID", tmp_winId) == -1)
        			{
        				winId = tmp_winId;
        				openCnt = (i + 1);
        				break;
        			}
        		}

        		if (sText != undefined && sText != null)
        		{
        			menuNm += " (" + openCnt + ")";
        		}
        		else
        		{
        			menuNm += " (" + sText + ")";
        		}
        	}
        	else
        	{
        		var nTempRow = objApp.gdsOpenMenu.findRow("WIN_ID", winId);

        		if (nTempRow != -1)
        		{
        			objApp.mainframe.VFrameSet.MDIFrameSet[winId] && objApp.mainframe.VFrameSet.MDIFrameSet[winId].setFocus();
        			return;
        		}
        	}

        	objChildFrame = new ChildFrame();

        	objChildFrame.init(winId, 0, 0, 824, 608);

        	objChildFrame.set_formurl("frame::work.xfdl");
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_showcascadetitletext(false);

        	objChildFrame.menuId = menuId;
        	objChildFrame.menuNm = menuNm;
        	objChildFrame.menuUrl = menuUrl;
        	objChildFrame.aSend = aSend;

        	objChildFrame.addEventHandler("onactivate", this.workFrame_onactivate, this);
        	objChildFrame.addEventHandler("onclose", this.workFrame_onclose, this);

        	objApp.mainframe.VFrameSet.MDIFrameSet.addChild(winId, objChildFrame);

        	objChildFrame.show();

        	var nFromRow = objApp.gdsMenu.findRow("MENU_ID", menuId);
        	var nToRow = objApp.gdsOpenMenu.addRow();

        	objApp.gdsOpenMenu.copyRow(nToRow, objApp.gdsMenu, nFromRow);
        	objApp.gdsOpenMenu.setColumn(nToRow, "WIN_ID", winId);

        	try
        	{
        		var objForm = objApp.mainframe.VFrameSet.OpenMenuFrame.form;
        		objForm["fnAddTabPage"].call(objForm, winId, menuNm);
        	}
        	catch (err)
        	{
        		trace("[Error] in frame::top.xfdl fnOpenMenu : " + err.message);
        	}
        };

        this.workFrame_onactivate = function(obj, e)
        {
        	try
        	{
        		var objApp = nexacro.getApplication();
        		var objForm = objApp.mainframe.VFrameSet.OpenMenuFrame.form;
        		objForm["fnActiveTabPage"].call(objForm, obj.name);
        	}
        	catch (err)
        	{
        		trace("[Error] in frame::top.xfdl workFrame_onactivate : " + err.message);
        	}
        };

        this.workFrame_onclose = function(obj, e)
        {
        	if (e.fromobject.name.substr(0, 4) != "win_")	return;

        	try
        	{
        		var objApp = nexacro.getApplication();
        		var objForm = objApp.mainframe.VFrameSet.OpenMenuFrame.form;
        		objForm["fnDeleteTabpage"].call(objForm, obj.name);
        	}
        	catch (err)
        	{
        		trace("[Error] in frame::top.xfdl workFrame_onclose : " + err.message);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmTop_onload,this);
            this.div_top.form.btn_leftMenu.addEventHandler("onclick",this.div_top_btn_leftMenu_onclick,this);
            this.div_top.form.btn_logOut.addEventHandler("onclick",this.div_top_btn_logOut_onclick,this);
            this.div_top.form.btn_userInfo.addEventHandler("onclick",this.div_top_btn_userInfo_onclick,this);
        };

        this.loadIncludeScript("top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
