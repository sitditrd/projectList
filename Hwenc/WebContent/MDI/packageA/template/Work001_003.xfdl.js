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
            obj.set_text("찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","64","21","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("평가제출");
            obj.set_cssclass("btn_WF_SubAction");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","93","530","262",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"평가명\"/><Cell col=\"1\" text=\"평가상태\"/><Cell col=\"2\" text=\"평가구분\"/><Cell col=\"3\" text=\"평가시작일\"/><Cell col=\"4\" text=\"평가종료일\"/><Cell col=\"5\" text=\"평가\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"summary\"><Cell text=\"총 00 건\" displaytype=\"text\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","75","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("평가");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","540","75","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("평가대상 업체");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","540","93",null,"262","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("none");
            obj.set_scrollbartype("default default");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업자번호\"/><Cell col=\"1\" text=\"업체명\" autosizecol=\"default\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"신용평가사\"/><Cell col=\"5\" text=\"신용평가일\"/><Cell col=\"6\" text=\"부문\"/><Cell col=\"7\" text=\"공종\"/><Cell col=\"8\" text=\"등록유형\"/><Cell col=\"9\" text=\"제출\"/><Cell col=\"10\" text=\"업체번호\"/><Cell col=\"11\" text=\"추천사\"/><Cell col=\"12\" text=\"부서코드\"/><Cell col=\"13\" text=\"평가부서\"/><Cell col=\"14\" text=\"SEQ\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"총 00 건\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","0","365",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"160\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"26\"/><Row size=\"20\" band=\"summ\"/><Row size=\"20\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"평가&#13;&#10;주관\"/><Cell col=\"2\" text=\"평가항목&#13;&#10;(대분류)\"/><Cell col=\"3\" text=\"평가항목&#13;&#10;(중분류)\"/><Cell col=\"4\" text=\"평가항목&#13;&#10;(세분류)\"/><Cell col=\"5\" text=\"배점\"/><Cell col=\"6\" text=\"점수\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\"/><Cell col=\"8\" text=\"-5(10)점&#13;&#10;감사(10)점&#13;&#10;A(100%)\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"-4(8)점&#13;&#10;감사(0)점&#13;&#10;B(80%)\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"12\" text=\"-3(6)점&#13;&#10;감사(8 or 3)점&#13;&#10;C(60%)\"/><Cell col=\"13\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"14\" text=\"-2(4)점&#13;&#10;감사(7 or 2)점&#13;&#10;D(40%)\"/><Cell col=\"15\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"16\" text=\"-1(2)점&#13;&#10;감사(6 or 1)점&#13;&#10;E(20%)\"/><Cell col=\"17\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"18\" text=\"-0점&#13;&#10;감사(5)점&#13;&#10;F(20%미만)\"/><Cell col=\"19\" text=\"제출\"/><Cell col=\"20\" text=\"부서코드\"/><Cell col=\"21\" text=\"평가부서\"/><Cell col=\"22\" text=\"수정자\"/><Cell col=\"23\" text=\"최종수정일시\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"5\" text=\"총 00 건\" displaytype=\"text\"/><Cell col=\"5\" rowspan=\"2\"><Cell text=\"공사\" displaytype=\"text\"/><Cell row=\"1\" displaytype=\"text\" text=\"감사\"/></Cell><Cell col=\"6\" rowspan=\"2\"><Cell displaytype=\"text\" text=\"00.00\"/><Cell row=\"1\" displaytype=\"text\" text=\"00.00\"/></Cell><Cell col=\"7\" rowspan=\"2\" colspan=\"17\" displaytype=\"text\" text=\"73\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","427","522","346","170",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" 그리드 데이터 셀 폰트색상 Class명\r\n\r\n녹색 : grd_WF_BodyCellGreen\r\n파랑 : grd_WF_BodyCellBlue\r\n빨강 : grd_WF_BodyCellRed\r\n\r\n");
            obj.set_background("yellow");
            obj.set_boxShadow("10px 10px 10px gray");
            obj.set_padding("10px 10px 10px 30px");
            obj.set_font("14px/21px \"Malgun Gothic\"");
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
        this.registerScript("Work001_003.xfdl", function() {

        this.Div04_TextArea01_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WF_MainForm_onload,this);
        };

        this.loadIncludeScript("Work001_003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
