(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work001_003");
            this.set_titletext("업체평가");
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
            obj.set_text("평가시작일");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","183","8","12","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("~");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","84","8","98","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","197","8","98","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static125","307","12","43","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("평가명");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static125:11","8","217","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("Width - 217");
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
            obj.set_text("출력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","42","21","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","0","75","615",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div03");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","0","93","13",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("평가");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","18",null,"200","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"평가명\"/><Cell col=\"1\" text=\"평가상태\"/><Cell col=\"2\" text=\"평가구분\"/><Cell col=\"3\" text=\"평가시작일\"/><Cell col=\"4\" text=\"평가종료일\"/><Cell col=\"5\" text=\"평가\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"summary\"><Cell text=\"총 00 건\" displaytype=\"text\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","252",null,null,"0","0",null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("default default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"104\"/><Column size=\"170\"/><Column size=\"94\"/><Column size=\"60\"/><Column size=\"73\"/><Column size=\"55\"/><Column size=\"62\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업체번호\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"공사팀\"/><Cell col=\"4\" text=\"기술점수\"/><Cell col=\"5\" text=\"경영지원\"/><Cell col=\"6\" text=\"최종점수\"/><Cell col=\"7\" text=\"심사상태\"/><Cell col=\"8\" text=\"신용평가사\"/><Cell col=\"9\" text=\"신용평가일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" text=\"총 00 건\" displaytype=\"text\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","0","231","93","13",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("업체현황");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button04",null,"228","82","18","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("심사의견입력");
            obj.set_cssclass("btn_WF_Associated");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","625","93",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("리포트 출력 부분");
            obj.set_cssclass("div_WF_DefaultBox");
            this.addChild(obj.name, obj);

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
        };
        
        // User Script
        this.registerScript("Work002_003.xfdl", function() {

        this.Div04_TextArea01_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WF_MainForm_onload,this);
        };

        this.loadIncludeScript("Work002_003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
