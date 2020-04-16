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
                this._setFormPosition(1000,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">핵심표적</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">표적탐지</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">표적식별</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5","3","497","172",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_box06");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","504","3",null,"172","5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box06");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","19","54","92","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접수시간");
            obj.set_cssclass("sta_WF_label01");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","292","54","92","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("중요도");
            obj.set_cssclass("sta_WF_label01");
            obj.set_visible("true");
            obj.set_padding("0px 10px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","101","54","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_value("2011-05-24 14:57:51");
            obj.set_text("2011-05-24 14:57:51");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","361","54","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("핵심표적");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","5","4","497","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box07");
            obj.set_text("표적정보");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","504","4",null,"34","5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_box07");
            obj.set_text("비고");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","511","44",null,"125","14",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("산술타격필요");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","6","95","496","131",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","86",null,"45","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box05");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28_00","18","96","88","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("추진부서");
            obj.set_cssclass("sta_WF_label01");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit15_00","100","96","156","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","5","93","496","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","12","12","170","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Location Country");
            obj.set_cssclass("sta_WF_label01");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit12","190","15","38","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","12","42","170","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Customer Deposit Type");
            obj.set_cssclass("sta_WF_label01");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","229","15","165","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit08","190","45","205","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","4","78","496","105",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","13","27","177","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Operatioin Country");
            obj.set_cssclass("sta_WF_label01");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit12","191","30","36","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit14","230","30","166","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","13","57","177","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("Parent company Country");
            obj.set_cssclass("sta_WF_label01");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit15","191","60","36","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_value("JP");
            obj.set_text("JP");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit16","230","60","166","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_value("JAPAN");
            obj.set_text("JAPAN");
            this.Div02.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01_tab1.xfdl", function() {

        this.Div00_tabDynamic_Tabpage1_Combo00_onitemchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "1":
        			this.Div00.set_visible(true);
        			this.Div01.set_visible(false);
        			this.Div02.set_visible(false);
        			break;

        		case "2":
        			this.Div00.set_visible(false);
        			this.Div01.set_visible(true);
        			this.Div02.set_visible(false);
        			break;

        		case "3":
        			this.Div00.set_visible(false);
        			this.Div01.set_visible(false);
        			this.Div02.set_visible(true);
        			break;
        	}
        	this.Common_onchanged(obj,e);
        };

        this.Common_onchanged = function(obj,e)
        {
        	this.getOwnerFrame().form.fnUpdated();
        };

        this.Common_onchanged2 = function(obj,e)
        {
        	this.getOwnerFrame().form.fnUpdated2();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.poc01_onload,this);
            this.addEventHandler("onbeforeclose",this.poc01_onbeforeclose,this);
            this.addEventHandler("ontimer",this.poc01_ontimer,this);
            this.Edit15.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Combo00.addEventHandler("onitemchanged",this.Div00_tabDynamic_Tabpage1_Combo00_onitemchanged,this);
            this.TextArea00.addEventHandler("onchanged",this.Common_onchanged2,this);
            this.Div00.form.Edit15_00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Div01.form.Edit12.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Div01.form.Edit05.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Div01.form.Edit08.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Div02.form.Edit12.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Div02.form.Edit14.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Div02.form.Edit15.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Div02.form.Edit16.addEventHandler("onchanged",this.Common_onchanged,this);
        };

        this.loadIncludeScript("poc01_tab1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
