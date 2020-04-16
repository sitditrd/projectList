(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work002_002_Tab01");
            this.set_titletext("입고관리 Tab01");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(653,722);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","12","12",null,null,"12","12",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","0","0",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","0","28",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","0","224",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgB");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static49","0","1","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","0","29","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("입고현장");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","95","4","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static36","314","1","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("자재수");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","56",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","0","57","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("입고번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","84",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","112",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","140",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","168",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","196",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","314","57","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("발주년월/번호");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","314","85","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","0","85","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("납입기한");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","314","113","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","0","113","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("업체번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","314","141","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("부가세액");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","0","141","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("입고금액");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","314","169","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("Invoice 일자");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","0","169","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("Invoice No");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","314","197","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("거래통화금액");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21","0","225","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("매출법인 출고..");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_tooltiptext("매출법인 출고번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","0","197","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("거래통화코드");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_tooltiptext("매출법인출고번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","314","225","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("매출법인 출고..");
            obj.set_cssclass("sta_WF_InputLabel");
            obj.set_tooltiptext("매출법인 출고행번");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","409","4","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit09","95","32","106","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("C909000");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button12","181","33","19","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","204","32","422","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","409","60","107","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","519","60","107","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","606","61","19","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","95","60","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","95","88","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","409","88","107","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","496","89","19","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","517","88","107","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("주식회사 유니온물산");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit07","95","116","146","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","243","116","14","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("-");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","255","116","56","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","409","116","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","95","144","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","409","144","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10","95","172","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","409","172","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit11","95","200","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit12","95","228","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","409","200","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit13","409","228","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static25","0","260","93","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("내역");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","275",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none default");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"자재코드\"/><Cell col=\"2\" colspan=\"2\" text=\"자재명\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" colspan=\"2\" text=\"규격\"/><Cell col=\"7\" text=\"자재구분\"/><Cell row=\"1\" col=\"1\" text=\"입고수량\"/><Cell row=\"1\" col=\"2\" text=\"입고단가\"/><Cell row=\"1\" col=\"3\" text=\"입고금액\"/><Cell row=\"1\" col=\"4\" text=\"청구금액\"/><Cell row=\"1\" col=\"5\" text=\"전출현장\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"현장명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" displaytype=\"text\"/><Cell col=\"2\" text=\"999,999,999\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button23",null,"259","13","13","16",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_Inc");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button24",null,"259","13","13","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_Dec");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",653,722,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static48.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static12.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static13.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static04.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Edit09.addEventHandler("onchanged",this.Edit04_onchanged,this);
        };

        this.loadIncludeScript("Work002_002_Tab01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
