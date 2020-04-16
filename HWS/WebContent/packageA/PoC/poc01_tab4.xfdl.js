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
                this._setFormPosition(1040,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static36","6","10","398","170",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","410","10","398","170",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","422","18","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Status");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","422","48","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Customer Status");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","597","50","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("2016/06/21");
            obj.set_text("2016/06/21");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","422","78","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Location Country");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","597","81","38","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("KR");
            obj.set_text("KR");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","422","108","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Customer Deposit Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","422","138","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Financial Institutioin Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","690","26","118","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("VIP");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","66","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("ABBR Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","180","69","215","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","14","43","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("English Name");
            obj.set_cssclass("sta_WF_label02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","14","96","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Korean Name");
            obj.set_cssclass("sta_WF_label02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","119","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","180","122","215","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","690","49","118","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Black Customer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","597","20","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("3300");
            obj.set_text("3300");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","637","81","165","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","597","141","205","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","597","111","205","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","15","13","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,840,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01_tab4.xfdl", function() {

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
            this.Edit11.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit12.addEventHandler("onchanged",this.Common_onchanged,this);
            this.CheckBox00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit01.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit03.addEventHandler("onchanged",this.Common_onchanged,this);
            this.CheckBox01.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit04.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Edit05.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Combo01.addEventHandler("oncloseup",this.Common_onchanged,this);
            this.Edit08.addEventHandler("onchanged",this.Common_onchanged,this);
        };

        this.loadIncludeScript("poc01_tab4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
