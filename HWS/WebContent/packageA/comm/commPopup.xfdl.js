(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commPopup");
            this.set_titletext("공통팝업");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,524);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#515151");
            obj.set_font("normal bold 16pt/normal \"Baskerville Old Face\"");
            obj.set_color("#5ccbf4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","493",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#c4c4c4");
            obj.set_color("white");
            obj.set_font("normal 700 16pt/normal \"Baskerville Old Face\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"497","72","22","9",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_escapebutton("true");
            obj.set_cssclass("btn_WF_btnY");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,"497","72","22","89",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_btnY");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Exit","960","8","13","18",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("x");
            obj.set_font("normal 700 13pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","8","44",null,"441","7",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,524,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("commPopup.xfdl","lib::lib_Form.xjs");
        this.addIncludeScript("commPopup.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("commPopup.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("commPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 팝업샘플
        * 03. 화면설명 :
        * 04. 작성일   : 2018.11.11
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;
        this.executeIncludeScript("lib::ext_CommEco.xjs"); /*include "lib::ext_CommEco.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.commPopup_onload = function(obj,e)
        {
        	var rootPath = nexacro.getProjectPath();
        	this.WebBrowser00.set_url(rootPath + "../service/rChart/Samples/History_2D_Line.html");
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Close" :
        			this.commUtil.popupClose("");
        			break;

        		case "stc_Exit" :
        			this.commUtil.popupClose("");
        			break;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.stc_Exit.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("commPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
