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
                this._setFormPosition(980,596);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03_01","7","245","234","121",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_background("#a8a8a8");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","12","248","223","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Piot1: ");
            obj.set_background("#a8a8a8");
            obj.set_color("white");
            obj.set_border("0px none,0px none,1px solid black");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#515151");
            obj.set_font("normal bold 16pt/normal \"Baskerville Old Face\"");
            obj.set_color("#5ccbf4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","565",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#c4c4c4");
            obj.set_color("white");
            obj.set_font("normal 700 16pt/normal \"Baskerville Old Face\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"569","72","22","9",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_escapebutton("true");
            obj.set_cssclass("btn_WF_btnY");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,"569","72","22","89",null,null,null,null,null,this);
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

            obj = new WebBrowser("WebBrowser00","249","44",null,"513","7",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","47","254","96","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("transparent");
            obj.set_border("0px none,0px none,0px none,0px none transparent");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("Indexed");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","98","232","147",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("#a8a8a8");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","8","211","232","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("#a8a8a8");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","69","291","163","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("transparent");
            obj.set_border("0px none,0px none,0px none,0px none transparent");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("Price");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","198","219","35","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Piot");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","11","289","65","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Serires 1: ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","46","232","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("  CHARTS");
            obj.set_background("#848484");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","7","374","234","121",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_background("#a8a8a8");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","209","46","31","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","8","72","232","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("  PLOT OPTIONS");
            obj.set_background("#848484");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","209","72","31","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01","175","328","57","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Series");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_00","175","461","57","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Series");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01","69","427","163","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("transparent");
            obj.set_border("0px none,0px none,0px none,0px none transparent");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("Volume");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00","13","426","65","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Serires 1: ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","12","380","225","41",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Piot2: ");
            obj.set_background("#a8a8a8");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_border("0px none,0px none,1px solid black");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","47","385","104","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("transparent");
            obj.set_border("0px none,0px none,0px none,0px none transparent");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("Absolute");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","8","531","232","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("  DRAWING");
            obj.set_background("#848484");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","209","531","31","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","17","219","43","19",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Piots");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","17","107","59","19",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Compare");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","16","133","176","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("AIR-USA");
            obj.set_text("AIR-USA");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","197","133","17","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("transparent");
            obj.set_border("0px none,0px none,0px none,0px none transparent");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("Price");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","187","223","14","13",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("+");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("green");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","165","331","16","18",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("+");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("green");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","165","464","16","18",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("+");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("green");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,596,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("commPopup_copy.xfdl","lib::lib_Form.xjs");
        this.addIncludeScript("commPopup_copy.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("commPopup_copy.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("commPopup_copy.xfdl", function() {
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
        	this.WebBrowser00.set_url("http://localhost/MIRAEASSET/service/rChart/Samples/History_2D_Line.html");
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

        this.loadIncludeScript("commPopup_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
