(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,64);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_top","0","0",null,"64","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_TF_topBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftMenu","0","7","50","50",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_TF_LeftOpen");
            obj.set_text("");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_sysConfig",null,"17","30","30","10",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_LogOut");
            obj.set_visible("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"19","160","26","50",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("3");
            obj.set_cssclass("edit_TF_topSearch");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("Static00","54","7","306","50",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_logo01");
            obj.set_cursor("pointer");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("Button02_00","1204","19","26","26",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Search");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("Static01",null,"12","270","40","220",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_userInfo");
            this.div_top.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,64,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Top.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    Frame > Top
        *  @FileName  Top.xfdl
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
         * @description MegaMenu를 생성한다.
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnCreateMegaMenu(obj);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 메뉴 프레임을 열고/닫아준다.
        */
        this.Common_onclick = function(obj,e)
        {
        	this.gfnOpenMegaMenu(this);
        };

        /**
         * @description 메인화면을 보여준다.
        */
        this.home_onclick = function(obj,e)
        {
        	var workFrame =  nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Work;

        	while(true)
        	{
        		if (workFrame.frames.length < 1) break;

        		// 활성화된 화면부터 순차적으로 닫는다.
        		workFrame.frames[workFrame.getActiveFrame().name].form.close();
        	}

        	nexacro.getApplication().mainframe.VFrameSet.set_separatesize("*, 0, 0"); // Main, Top, Work 영역
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_top.form.btn_leftMenu.addEventHandler("onclick",this.Common_onclick,this);
            this.div_top.form.Static00.addEventHandler("onclick",this.home_onclick,this);
            this.div_top.form.Static01.addEventHandler("onclick",this.div_top_Static01_onclick,this);
        };

        this.loadIncludeScript("Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
