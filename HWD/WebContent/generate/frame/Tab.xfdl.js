(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tab");
            this.set_scrolltype("none");
            this.set_background("#fafafa");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,33);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divButtonList","5","2",null,"49","174",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("fixed none");
            obj.set_formscrolltype("horizontal");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"0","19","33","93",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("btn_MDI_ScnBg, btn_MDI_ScnFull");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"0","19","33","71",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_ScnBg, btn_MDI_ScnWin");
            obj.set_enable("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"0","18","33","49",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_ScnBg, btn_MDI_ScnVDiv");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnVertical",null,"0","17","33","27",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_ScnBg, btn_MDI_ScnHDiv");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"0","17","33","5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_ScnBg, btn_MDI_ScnClose");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnMdiPrev",null,"0","19","33","144",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_LeftTabCha");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMdiNext",null,"0","19","33","121",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_RightTabCha");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"13","1","6","141",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#bec0c2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,33,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Tab.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    Frame > Tab
        *  @FileName  Tab.xfdl
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
        this.fvLeft = 0; // Tab position
        this.fvTabButtonSize = 200;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
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
        * fnOpenTabMenu : CommFrame.js 의 gfnOpenMenu함수에서 호출한다. TopFrame의 MDI를 컨트롤 한다.
        * @return : N/A
        */
        this.fnOpenTabMenu = function(menuId, menuNm)
        {
        	this.fnInitTab();
        	this.fnCreateTab(menuId, menuNm);
        };

        /**
        * fnInitTab : 탭 버튼을 모두 선택 안된 상태로cssclass(btn_MDI_Tab) 변경
        * @return : N/A
        */
        this.fnInitTab = function()
        {
        	var objDiv;
        	var i;

        	for (i = 0; i < this.divButtonList.form.components.length ; i++)
        	{
        		objDiv = this.divButtonList.form.components[i];

        		if (String(objDiv.name).indexOf("div") > -1) {
        			objDiv.form.btnTab.set_cssclass("btn_MDI_Tab");
        		}
        	}
        };

        /**
        * fnCreateTab : Menu가 Open될때 탭을 동적으로 그려준다.
        * @param {String}  menuId	- 메뉴 ID
        * @param {String}  menuNm	- 메뉴명
        * @return : {object} 생성된 탭버튼 Div
        * @example :
        */
        this.fnCreateTab = function(menuId, menuNm)
        {
        	var nLeft = this.fvLeft;
        	var nWidth = nexacro.getTextSize(menuNm, "")
        	var sMenuId = "div" + menuId; // div1001
        	var objDiv = new Div();
        		objDiv.titletext = menuNm;
        		objDiv.init(sMenuId, nLeft, 0, this.fvTabButtonSize, 31);
        		objDiv.set_async(false);//동기
        		objDiv.set_url("frame::TabButton.xfdl");

        	this.divButtonList.form.addChild(sMenuId, objDiv);

        	objDiv.show();
        	objDiv.form.btnTab.set_tooltiptext(menuNm);

        	this.divButtonList.form.resetScroll();
        	this.divButtonList.form.hscrollbar.set_pos(this.fvLeft);

        	// 다음 탭버튼이 그려질 위치
        	this.fvLeft = nLeft + objDiv.getOffsetWidth(); // 200씩 늘어난다.

        	return objDiv;
        };

        /**
        * fnCloseAllTab : 모든 화면을 닫아준다.
        * @return : N/A
        * @example :
        */
        this.fnCloseAllTab = function()
        {
        	var objDiv;
        	var i;

        	for (i = 0; i < this.divButtonList.form.components.length ; i++)
        	{
        		objDiv = this.divButtonList.form.components[i];

        		if (String(objDiv.name).indexOf("div") > -1) {
        			this.divButtonList.form.components[i].btnTab.set_cssclass("btn_MDI_Tab");
        		}
        	}

        	this.divButtonList.form.resetScroll();
        	this.divButtonList.form.hscrollbar.set_pos(0);
        };

        /**
         * fnSetTabFocus : (ex:화면이 닫히면서 다른 화면에 focus가 갔을때) 해당 탭버튼이 선택된다.
         * @param {string} divNm : 선택하고자 하는 버튼 명
         * @return : N/A
         * @example :
         */
        this.fnSetTabFocus = function(divNm)
        {
        	this.fnInitTab(); // 모든 버튼을 초기화 한 후에 해당 메뉴에만 css를 바꿔준다.

        	var objApp = nexacro.getApplication();
        	var objDiv = this.divButtonList.form.components[divNm];
        	objDiv.form.btnTab.set_cssclass("btn_MDI_TabFix"); // btn_MDI_Tab

        	// 선택된 탭으로 스크롤 이동
        	var nMaxPos = this.divButtonList.form.hscrollbar.max;

        	if (!this.gfnIsNull(nMaxPos) && nMaxPos > 0)
        	{
        		var nLeft = objDiv.getOffsetLeft();

        		if (this.divButtonList.getOffsetWidth() < nLeft) {
        			var nHScollbarPos = nLeft - this.divButtonList.getOffsetWidth() + objDiv.getOffsetWidth();
        			this.divButtonList.form.hscrollbar.set_pos(nHScollbarPos);
        		} else {
        			this.divButtonList.form.hscrollbar.set_pos(0);
        		}
        	}
        	else
        	{
        		this.divButtonList.form.hscrollbar.set_pos(0);
        	}
        };

        /**
         * fnRearrange : 버튼이 삭제되었을 때 버튼 위치를 재정렬 해준다.
         * @param {string} btnNm : 포커스 된 버튼 명
         * @return : N/A
         * @example :
         */
        this.fnRearrange = function(divNm)
        {
        	this.fvLeft = 0;

        	var objDiv;
        	var i;

        	for (i = 0; i < this.divButtonList.form.components.length ; i++)
        	{
        		objDiv = this.divButtonList.form.components[i];

        		if (String(objDiv.name).indexOf("div") > -1) {
        			this.divButtonList.form.components[i].move(this.fvLeft, 0);
        			this.fvLeft = this.fvLeft + objDiv.getOffsetWidth();
        		}
        	}

        	this.divButtonList.form.resetScroll();

        	// < > 버튼 제어 - div_tab_onhscroll 이벤트발생
        	if (this.divButtonList.form.hscrollbar.max < 0) {
        		this.divButtonList.form.hscrollbar.set_pos(0);
        	}
        };

        /**
         * fnMenuMove : 탭버튼 리슽의 포커스를 이동시킨다 - 스크롤이동
         * @param {string} pvType : NEXT | PREV
         * @return : N/A
         * @example :
         */
        this.fnMenuMove = function(pvType)
        {
        	switch(pvType)
        	{
        		case "NEXT":
        			this.divButtonList.form.scrollBy(this.fvTabButtonSize,0);
        			break;

        		case "PREV":
        			this.divButtonList.form.scrollBy(-this.fvTabButtonSize,0);
        			break;
        	}

        	var hVarPos = this.divButtonList.form.hscrollbar.pos;

        	if (hVarPos > 0) {
        		this.btnMdiPrev.set_enable(true);
        	} else {
        		this.btnMdiPrev.set_enable(false);
        	}

        	if (this.divButtonList.form.hscrollbar && hVarPos < this.divButtonList.form.hscrollbar.max) {
        		this.btnMdiNext.set_enable(true);
        	} else {
        		this.btnMdiNext.set_enable(false);
        	}

        	this.divButtonList.form.resetScroll();
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.fnComBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnMdiPrev" : // Tab 앞으로 이동
        			this.fnMenuMove("PREV");
        			break;

        		case "btnMdiNext" : // Tab 뒤로 이동
        			this.fnMenuMove("NEXT");
        			break;

        		case "btnMaximize" : // 창 최대화
        			var workFrame =  nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Work;
        			var childFrame = nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Work.getActiveFrame();

        			workFrame.set_enableevent(false);

        			var i;

        			for (i = 0; i < workFrame.frames.length ; i++)
        			{
        				workFrame.frames[i].set_enableevent(false);
        				workFrame.frames[i].form.set_enableevent(false);
        				workFrame.frames[i].set_showtitlebar(false);
        				workFrame.frames[i].set_border("0px none #808080");
        				workFrame.frames[i].set_openstatus("maximize");
        				workFrame.frames[i].form.set_enableevent(true);
        				workFrame.frames[i].set_enableevent(true);
        			}

        			workFrame.set_enableevent(true);
        			childFrame.setFocus();
        			break;

        		case "btnCascade" : // 창 계단식
        		case "btnHorizontal" : // 창 수평식
        		case "btnVertical" : // 창 수직식
        			var btnNm = obj.name;
        			var workFrame =  nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Work;
        			var childFrame = nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Work.getActiveFrame();

        			workFrame.set_enableevent(false);

        			var i;

        			for (i = 0; i < workFrame.frames.length ; i++)
        			{
        				workFrame.frames[i].set_enableevent(false);
        				workFrame.frames[i].form.set_enableevent(false);
        				workFrame.frames[i].set_showtitlebar(true);
        				workFrame.frames[i].set_border("1px solid #777777");
        				workFrame.frames[i].form.set_enableevent(true);
        				workFrame.frames[i].set_enableevent(true);
        			}

        			workFrame.set_enableevent(true);

        			switch(btnNm)
        			{
        				case "btnCascade":
        					workFrame.arrange("cascade");
        					break;

        				case "btnHorizontal":
        					workFrame.arrange("horizontal");
        					break;

        				case "btnVertical":
        					workFrame.arrange("vertical");
        					break;
        			}
        			break;

        		case "btnCloseAll" :
        			var workFrame =  nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Work;

        			while(true)
        			{
        				if (workFrame.frames.length < 1) break;

        				// 활성화된 화면부터 순차적으로 닫는다.
        				workFrame.frames[workFrame.getActiveFrame().name].form.close();
        			}
        			break;
        	}
        };

        /**
         * @description 화면 추가 삭제 시 탭 스크롤 적용
        */
        this.divButtonList_onhscroll = function(obj,e)
        {
        	if (this.divButtonList.form.hscrollbar.max < 1) {
        		this.btnMdiNext.set_enable(false);
        		this.btnMdiPrev.set_enable(false);

        		return;
        	}

        	var hVarPos = obj.form.hscrollbar.pos;

        	if (hVarPos > 0) {
        		this.btnMdiPrev.set_enable(true);
        	} else {
        		this.btnMdiPrev.set_enable(false);
        	}

        	if (hVarPos < this.divButtonList.form.hscrollbar.max) {
        		this.btnMdiNext.set_enable(true);
        	} else {
        		this.btnMdiNext.set_enable(false);
        	}
        };

        /**
         * @description 리사이즈 시에 탭스크롤
        */
        this.divButtonList_onsize = function(obj,e)
        {
        	this.divButtonList_onhscroll(obj);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divButtonList.addEventHandler("onhscroll",this.divButtonList_onhscroll,this);
            this.divButtonList.addEventHandler("onsize",this.divButtonList_onsize,this);
            this.btnMaximize.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnCascade.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnHorizontal.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnVertical.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnCloseAll.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnMdiPrev.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnMdiNext.addEventHandler("onclick",this.fnComBtnOnClick,this);
        };

        this.loadIncludeScript("Tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
