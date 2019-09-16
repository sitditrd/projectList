(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Main");
            this.set_titletext("메인");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">조회화면</Col><Col id=\"MENU_ID\">0001</Col><Col id=\"MENU_URL\">Base::poc01.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">여비등록</Col><Col id=\"MENU_ID\">0002</Col><Col id=\"MENU_URL\">Base::poc02.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50000000</Col><Col id=\"menuNm\">통합정보시스템</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50100000</Col><Col id=\"menuNm\">학적기본사항관리</Col><Col id=\"menuUrl\">work::work01.xfdl</Col><Col id=\"upMenuId\">SN50000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50110000</Col><Col id=\"menuNm\">설문관리</Col><Col id=\"menuUrl\">work::work02.xfdl</Col><Col id=\"useYn\">Y</Col><Col id=\"upMenuId\">SN50000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_work","0","88",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_cssclass("div_MB_work");
            obj.set_url("work::poc_main.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"88","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menu","15","35","32","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MB_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home","418","24","44","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MB_home");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","136","14","208","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MB_titlelogo");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","490","0",null,null,"-490","0",null,null,"540",null,this);
            obj.set_taborder("5");
            obj.set_text("divLogin");
            obj.set_background("white");
            obj.set_visible("false");
            obj.set_url("Mobile::frameLogin.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","980","0",null,null,"-980","0",null,null,"540",null,this);
            obj.set_taborder("6");
            obj.set_text("divMenu");
            obj.set_background("transparent");
            obj.set_visible("false");
            obj.set_url("Mobile::frameMenu.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::poc_main.xfdl");
            this._addPreloadList("fdl","Mobile::frameLogin.xfdl");
            this._addPreloadList("fdl","Mobile::frameMenu.xfdl");
        };
        
        // User Script
        this.registerScript("Mobile_Main.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.fvBaseHeight = 768;
        this.fvMinWorkHeight;
        this.sFlag = "";

        this.Mobile_Main_onload = function(obj,e)
        {
        	// Frame 변수 저장
        	this.objApp.gvBase = this;

         	// 로그인 화면 open
        	this.divLogin.set_visible(true);
        	this.divLogin.set_left(0);
        	this.divLogin.set_right(0);
        	this.divMenu.set_left(0);
        	this.divMenu.set_right(0);

        // 	if (system.navigatorname != "nexacro" && system.navigatorname != "nexacro EmbedRuntime")
        // 	{
        // 		MyHistory.init(this.fn_onChangeHistory, this);
        //
        // 		var hash = MyHistory.getLocationHash();
        //
        // 		if (hash)
        // 		{
        // 			var data = MyHistory.getData(hash);
        //
        // 			if (data) {
        // 				this.fnAction("HOME");
        //
        // 				return;
        // 			}
        // 		}
        // 	}

        	if (this.objApp.mainframe.height < this.fvBaseHeight) {
        		this.fvBaseHeight = this.objApp.mainframe.height;
        	}

        	this.fvMinWorkHeight = this.fvBaseHeight - this.div_work.getOffsetTop();
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btn_menu" : // 메뉴
        			this.fnAction("MENU", true);
        			break;

        		case "btn_home" : // 홈
        			this.sFlag = "MainCall";
        			this.fnAction("HOME");
        			break;
        	}
        };

        this.fn_onChangeHistory = function(hash, data)
        {
        	var i;

        	// 히스토리 동작시 팝업 close
        	if (nexacro.getPopupFrames().length > 0)
        	{
        		var objframes = nexacro.getPopupFrames();
        		for (i = 0; i < objframes.length; i++)
        		{
        			objframes[i].form.close();
        		}
        	}

        	if (this.gfnIsNull(hash))
        	{
        		this.fnAction("HOME");
        	}
        	else
        	{
         		if (this.objApp.gvLogin == "in") {
        			var oObj = {
        				sMenuId : hash.split(":")[1]
        			};

                    this.gfnCallM(oObj);
         		}
        	}
        };

        this.fnAction = function (sID, arg)
        {
        	switch (sID)
        	{
        		case "MENU":
        			if (this.div_work.visible == true)
        			{
        // 				if (!this.gfnIsNull(this.div_work.form.divWork.form.lookup("fnMenuCallback"))) {
        // 					this.div_work.form.divWork.form.fnMenuCallback(arg);
        // 				}
        			}

        			if (arg) {
        				this.divMenu.set_visible(true);
        			} else {
        				if (this.sFlag == "MainCall") {
        					this.sFlag = "";
        					this.div_work.set_url("work::poc_main.xfdl");
        				}

        				this.divMenu.set_visible(false);
        			}
        			break;

        		case "LOGIN":
        			if (arg)
        			{
        				this.objApp.gvLogin = "in";

        // 				if (system.navigatorname != "nexacro" && system.navigatorname != "nexacro EmbedRuntime") {
        // 					MyHistory.setLocationHash("LOGIN", ""); // hash setting
        // 				}

                        var sNameCol = "userName";

                        this.divLogin.set_visible(false);
        				this.fnAction("HOME");
        			}
        			else
        			{
        				this.objApp.gvLogout = "out";

        				if (system.navigatorname != "nexacro" && system.navigatorname != "nexacro EmbedRuntime") {
        					window.location.reload(true);
        					//MyHistory.setLocationHash("", ""); // hash setting
        				}
        				else
        				{
        					this.fnAction("MENU", false);
        					this.divLogin.set_visible(true);
        				}
        			}
        			break;

        		case "HOME":
        			this.fnAction("MENU", false);

        			this.divMenu.form.dsMenu.set_rowposition(-1);

        			if (system.navigatorname != "nexacro" && system.navigatorname != "nexacro EmbedRuntime") {
        				//MyHistory.setLocationHash("", "");//hash setting
        			}
        			break;

        		case "EXIT":
                    if (this.confirm("종료하시겠습니까")) {
                        this.objApp.exit();
                    }
        			break;
        	}
        };

        this.fnWorkFrameClose = function(sMenuId, oObj)
        {
        	this._gfnCallM(sMenuId, oObj);
        }

        // /**
        //  * @description 디바이스버튼 클릭 이벤트
        // */
        // this.frameBase_ondevicebuttonup = function(obj:nexacro.Form,e:nexacro.DeviceButtonEventInfo)
        // {
        // 	// MENU(1) CANCEL(2)
        // 	if (e.button == 2)
        // 	{
        // 		// Android단말 취소키 제어
        //
        // 		if (this.divMenu.visible)
        // 		{
        // 			//메뉴초기화
        // 		//	this.divMenu.fn_menuInit();
        // 			this.divMenu.set_visible(false);
        // 		}
        // 		else if (this.div_work.visible)
        // 		{
        //             if (this.div_work.form.divWork.url != "work::poc_main.xfdl")
        // 			{
        //                 if (this.objApp.gvNaviveStatus == "N")
        //                 {
        //                     this.fnAction("HOME");
        //                 }
        //                 this.objApp.gvNaviveStatus = "N";
        // 			}
        // 			else
        // 			{
        // 				this.fnAction("EXIT");
        // 			}
        // 		}
        // 		else
        // 		{
        // 			this.fnAction("EXIT");
        // 		}
        // 	}
        //
        // 	return false;
        // };

        this.gfnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this._gfnCallM = function(sMenuId, oObj)
        {
            var objApp  = nexacro.getApplication();
            var pThis   = objApp.mainframe.chf_mobile.form;

            var aArgs 	= this.gfnIsNull(oObj.oArgs) ? "" : oObj.oArgs;

        	var objDate = new Date();
        	objApp.nStartTime = objDate.getTime();

        	var sColumn  = objApp.gvMenuColumns.menuNm;
        	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
        	if (sNowLang != "KO") {
        		sColumn = sColumn+sNowLang;
        	}

        	var sPageUrl = this.dsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.pageUrl);
        	var sGroupId = this.dsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);
        	var sMenuNm  = this.dsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, sColumn);

        	if(this.gfnIsNull(sPageUrl)) return;
            objApp.gvCurMenuId = sMenuId;

            if (oObj.sMenu != "Y") {
                pThis.divMenu.form.fnMenuSet(arrProw, sMenuId);
            }

            pThis.div_work.set_url(sPageUrl);
            pThis.fnAction("MENU", false);

            pThis.arguments = [];
            pThis.arguments["aArgs"] = aArgs;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Mobile_Main_onload,this);
            this.btn_menu.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_home.addEventHandler("onclick",this.fn_comBtnOnClick,this);
        };

        this.loadIncludeScript("Mobile_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
