(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("component_step");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(184,155);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("1");
            obj.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("2");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Components_step.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴 > Sub 화면
        *  @FileName    Components_step.xfdl
        *  @Creator     presales
        *  @CreateDate  2020/02/06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020/02/06          presales                  최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.elapseTime = 3000;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.component_step_onload = function (obj, e)
        {
        	this.Static00.set_background('url("imagerc::img_cp_step01.png") no-repeat left top');
        	this.Static01.set_background('url("imagerc::img_cp_step02.png") no-repeat left top');
        	this.Static02.set_background('url("imagerc::img_cp_step03.png") no-repeat left top');

        	this.setTimer(0, this.elapseTime);
        };

        this.component_step_onstepchanged = function (obj, e)
        {
        	this.killTimer(0);
        	this.setTimer(0, this.elapseTime);
        };

        this.component_step_ontimer = function (obj, e)
        {
        	if (e.timerid == 0) {
        		this.stepselector.stepIt(true, true);
        	}
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.component_step_onload,this);
            this.addEventHandler("onstepchanged",this.component_step_onstepchanged,this);
            this.addEventHandler("ontimer",this.component_step_ontimer,this);
        };

        this.loadIncludeScript("Components_step.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
