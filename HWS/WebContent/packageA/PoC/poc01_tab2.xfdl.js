(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("poc01");
            this.set_titletext("속성변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static28","18","19","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Issue Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","130","19","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("21 21");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","49","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Applicant");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","109","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Beneficiary");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","18","79","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("L/C Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","130","49","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","237","49","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_basic04");
            obj.set_text("S");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","130","79","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","203","79","113","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","334","79","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("More/Less");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26","464","79","38","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","456","79","10","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("/");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24","414","79","38","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","130","109","372","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","277","19","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Receive Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","370","19","148","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("21 21");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","265","49","552","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","533","19","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("EDI Msg No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","642","19","175","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","533","79","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Credit Line No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","642","79","148","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","792","79","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_basic04");
            obj.set_text("S");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","533","109","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo06","642","108","175","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","18","139","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Available WIth");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","18","169","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Expiry Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","237","139","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_basic04");
            obj.set_text("S");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","130","139","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","265","139","237","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","130","168","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("21 21");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","533","139","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("By");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo07","642","138","175","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","277","169","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Expiry Place");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","370","169","447","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,220,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01_tab2.xfdl", function() {

        this.Common_onchanged = function(obj,e)
        {
        	this.getOwnerFrame().form.fnUpdated();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.poc01_onload,this);
            this.addEventHandler("onbeforeclose",this.poc01_onbeforeclose,this);
            this.addEventHandler("ontimer",this.poc01_ontimer,this);
            this.Calendar04.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit10.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Combo01.addEventHandler("onitemchanged",this.Common_onchanged,this);
            this.Edit00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit26.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit24.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit01.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Calendar02.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit14.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit15.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit16.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Combo06.addEventHandler("onitemchanged",this.Common_onchanged,this);
            this.Edit02.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Calendar00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Combo07.addEventHandler("onitemchanged",this.Common_onchanged,this);
            this.Edit17.addEventHandler("onchanged",this.Common_onchanged,this);
        };

        this.loadIncludeScript("poc01_tab2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
