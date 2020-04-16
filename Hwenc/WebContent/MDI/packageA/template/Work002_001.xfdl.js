(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work002_001");
            this.set_titletext("지급품의");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00",null,"0","500","21","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"0","42","21","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03",null,"0","42","21","180",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","42","21","135",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","42","21","90",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","42","21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("출력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05",null,"0","64","21","225",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("일괄출력");
            obj.set_cssclass("btn_WF_SubAction");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","600","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("template::WF_LocationForm.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","118","615",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("default default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"외주공종\"/><Cell col=\"3\" text=\"품의일자\"/><Cell col=\"4\" text=\"품의번호\"/><Cell col=\"5\" text=\"계약현장\"/><Cell col=\"6\" text=\"계약번호\"/><Cell col=\"7\" text=\"기성차수\"/><Cell col=\"8\" text=\"담당자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band><Band id=\"summary\"><Cell text=\"0건\" displaytype=\"text\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","100","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("지급품의");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","625","118",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("지급품의");
            obj.set_url("template::Work002_001_Tab01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("공제내역");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("지금품의누계");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div04","0","27",null,"64","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static125","403","12","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("계약현장");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","859","8","314","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("Width - 314");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","794","12","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static09","12","12","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","12","37","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("담당사번");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit04","469","8","79","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("C909000");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button01","528","9","19","19",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit05","551","8","232","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo01","77","8","314","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_readonly("true");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit01","77","33","79","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("10");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("C909000");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02","136","34","19","19",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit02","159","33","232","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","403","37","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("13");
            obj.set_text("품의일자");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static20","620","33","12","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("14");
            obj.set_text("~");
            this.Div04.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","633","33","150","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("15");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            this.Div04.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","469","33","150","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("16");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            this.Div04.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1240,818,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","template::WF_LocationForm.xfdl");
            this._addPreloadList("fdl","template::Work002_001_Tab01.xfdl");
        };
        
        // User Script
        this.registerScript("Work002_001.xfdl", function() {

        this.Div04_TextArea01_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WF_MainForm_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.addEventHandler("onmouseenter",this.Tab00_onmouseup,this);
            this.Div04.form.Edit04.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Div04.form.Combo01.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Div04.form.Edit01.addEventHandler("onchanged",this.Edit04_onchanged,this);
        };

        this.loadIncludeScript("Work002_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
