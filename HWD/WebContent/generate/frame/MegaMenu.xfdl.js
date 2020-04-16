(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MegaMenu");
            this.set_titletext("New Form");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","0","80",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_megaMenu_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_megaMenu_head");
            this.addChild(obj.name, obj);

            obj = new Static("staTopMenuSample","36","0","194","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid Component");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_navTitle");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuSample","36","105","339","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다양한 그리드 기능");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_navText");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","80",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static01");
            obj.set_background("#e6e6e6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClosePopup",null,"27","24","24","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_navClose");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MegaMenu.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    Frame > Main
        *  @FileName  Main.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.05
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.05      presales                  최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 팝업의 메뉴들을 동적으로 생성해준다.
        */
        this.form_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objMenuDs 	= objApp.gdsMenu;

        	this.dsMenu.copyData(objApp.gdsMenu,true);
        	objMenuDs.filter("");

        	this.fnDrawMenu();
        };

        /**
         * @description 화면사이즈가 변경될 때 메뉴 크기를 조정해준다.
        */
        this.MegaMenu_onsize = function(obj,e)
        {
        	this.fnDrawMenu();
        };

        /**
         * @description 화면사이즈가 변경될 때 메뉴 크기를 조정해준다.
        */
        this.MegaMenu_onhscroll = function(obj,e)
        {
        	this.btnClosePopup.setOffset(this.btnClosePopup.getOffsetLeft() + e.pos);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * fnDrawMenu : 팝업div의 메뉴버튼을 생성해준다.
         * @return : N/A
         * @example :
         */
        this.fnDrawMenu = function()
        {
        	if (this.dsMenu.rowcount < 1) return;

        	// 1.레벨0이 세로 한줄
        	var columnCnt = this.dsMenu.getCaseCount("MENU_LVL=='0'");
        	var dsCnt = this.dsMenu.rowcount;
        	var menuId = "";

        	// 동적으로 Static을 구한다.
        	var objStatic;
        	var nLeft = 36;
        	var nTop = 24;
        	var nHeight = 30;
        	var nGap = 15;
        	var nWidth;//동적으로 계산해서 변경해줌

        	//화면 사이즈
        	var nScreenSize = this.getOffsetWidth();

        	if(nScreenSize >  1500) {
        		nScreenSize = 1500;
        	}

        	//nWidth를 계산한다. pdiv넓이를 구해서 n등분, 화면이 좁아지면,,, 세로로 나열,, 가로줄 넣어줌...
        	nWidth = Math.floor((nScreenSize - 72)/columnCnt) - nGap ;//36*2 = 72가 여백, 10은 버튼간 간격

        	var i;

        	for(i = 0 ; i < dsCnt ; i++)
        	{
        		objId = "sta" + this.dsMenu.getColumn(i, "MENU_ID");

        		if (this.dsMenu.getColumn(i,"MENU_LVL") == '0') { // 대메뉴
        			objId = "L_" + objId;
        			nTop = 0;
        			nHeight = 80;
        			if (i !=0 ) nLeft = nLeft + nWidth + nGap ; // 10은 버튼 간격
        		}
        		else if(this.dsMenu.getColumn((i-1),"MENU_LVL") == '0') { // leaf 메뉴 첫번째
        			nTop = 105;
        			nHeight = 30;
        		} else {
        			nTop = nTop + nHeight;
        			nHeight = 30;
        		}

        		objStatic = this.components[objId];

        		// 기존에 있으면 위치만 변경
        		if(objStatic) {
        			objStatic.move(nLeft, nTop);
        			objStatic.set_width(nWidth);
        		} else {
        			// 버튼생성
        			objStatic = new Static(objId, nLeft, nTop, nWidth, nHeight);
        			objStatic.set_text(this.dsMenu.getColumn(i, "MENU_NM"));

        			if (this.dsMenu.getColumn(i,"MENU_LVL") == '0') {
        				objStatic.set_cssclass(this.staTopMenuSample.cssclass);
        				objStatic.addEventHandler("onmouseenter", this.staTopMenuSample_onmouseenter, this);
        				objStatic.addEventHandler("onmouseleave", this.staTopMenuSample_onmouseleave, this);
        			} else {
        				objStatic.set_cssclass(this.staMenuSample.cssclass);
        				objStatic.set_cursor("pointer");
        				objStatic.addEventHandler("onclick", this.btnMenu_onclick, this);
        			}

        			this.addChild(objId, objStatic);
        			objStatic.show();
        		}

        	}

        	this.btnClosePopup.bringToFront();
        	this.resetScroll();
        };

        /**
         * @description 메뉴버튼 클릭 : 해당 메뉴를 Open해준다.
        */
        this.btnMenu_onclick = function(obj,e)
        {
        	var menuId = String(obj.name).replace("sta","");
        	var type = "Mega";

        	if (this.gfnCloseMegaMenu()) {
        		this.gfnOpenMenu(menuId, type);
        	}
        };

        /**
         * @description 메가메뉴를 닫아준다.
        */
        this.btnClosePopup_onclick = function(obj,e)
        {
        	this.gfnCloseMegaMenu();
        };

        /**
         * @description 대메뉴에 포커스 없애줌
        */
        this.staTopMenuSample_onmouseenter = function(obj,e)
        {
        	var staObj; //L_ 가 들어간..L_sta1000
        	var objSta;

        	for (objSta in this.components)
        	{
        		staObj = this.components[objSta];

        		if (String(staObj.name).indexOf("L_") == 0) {
        			staObj.set_cssclass("sta_WF_navTitle");
        		}
        	}
        };

        /**
         * @description 마지막 대메뉴 포커스 줌
        */
        this.staTopMenuSample_onmouseleave = function(obj,e)
        {
        	obj.set_cssclass("sta_WF_navTitle_S");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.MegaMenu_onsize,this);
            this.addEventHandler("onhscroll",this.MegaMenu_onhscroll,this);
            this.staTopMenuSample.addEventHandler("onsetfocus",this.staTopMenuSample_onsetfocus,this);
            this.staTopMenuSample.addEventHandler("onmouseenter",this.staTopMenuSample_onmouseenter,this);
            this.staTopMenuSample.addEventHandler("onmouseleave",this.staTopMenuSample_onmouseleave,this);
            this.btnClosePopup.addEventHandler("onclick",this.btnClosePopup_onclick,this);
        };

        this.loadIncludeScript("MegaMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
