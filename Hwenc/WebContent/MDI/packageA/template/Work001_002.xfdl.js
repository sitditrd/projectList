(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work001_002");
            this.set_titletext("개인별옵션등록");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","0","27",null,"39","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","12","12","65","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("계약자유형");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","Static03:11","8","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","600","19",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("template::WF_LocationForm.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","500","21","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"0","42","21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","93","500",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"계약자이름\"/><Cell col=\"2\" text=\"계약동\"/><Cell col=\"3\" text=\"계약호\"/><Cell col=\"4\" text=\"평형\"/><Cell col=\"5\" text=\"유형\"/><Cell col=\"6\" text=\"전용㎡\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band><Band id=\"summary\"><Cell text=\"0건\" displaytype=\"text\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","75","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계약자 정보");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","510","75","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택항목 정보");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","510","93",null,"259","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none default");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"옵션항목\"/><Cell col=\"2\" text=\"적용평형\"/><Cell col=\"3\" text=\"선택코드\"/><Cell col=\"4\" text=\"선택\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","510","381",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("등록된 옵션항목");
            obj.set_url("template::Work001_002_Tab01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("등록된 옵션금액");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("등록된 옵션항목금액");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div03","510","356",null,"19","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div03");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","46.85%","0","45","19",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("Div03");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button15","0","0","20","19",null,null,null,null,null,null,this.Div03.form.Div04.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconD");
            this.Div03.form.Div04.addChild(obj.name, obj);

            obj = new Button("Button16","25","0","20","19",null,null,null,null,null,null,this.Div03.form.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconU");
            this.Div03.form.Div04.addChild(obj.name, obj);

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
            this._addPreloadList("fdl","template::Work001_002_Tab01.xfdl");
        };
        
        // User Script
        this.registerScript("Work001_002.xfdl", function() {

        this.Div04_TextArea01_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WF_MainForm_onload,this);
            this.Div01.form.Combo01.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.addEventHandler("onmouseenter",this.Tab00_onmouseup,this);
        };

        this.loadIncludeScript("Work001_002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
