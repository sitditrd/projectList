(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LayoutGuide_02");
            this.set_titletext("Input Area Layout Guide 02");
            this.set_scrollbartype("none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,951);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Input Area Layout Guide 02");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_background("#d1d1d1");
            obj.set_border("1px solid #cccccc");
            obj.set_textAlign("center");
            obj.set_font("12px/normal verdana");
            obj.set_letterSpacing("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","284","189","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Input Area 1단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","284","240",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","284","268",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","19","212","255","698",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("silver");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","330","269","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("232");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","330","241","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","284","212",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","330","213","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","284","212","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","284","317","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Input Area 2단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","284","368",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","284","396",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","330","397","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","330","369","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","284","340",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","330","341","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","284","340","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","794","397","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","794","369","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","794","341","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","284","573","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Input Area 4단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","284","624",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","284","652",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","330","653","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","330","625","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","284","596",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","330","597","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","284","596","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","562","597","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","562","625","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","562","653","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","794","653","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","794","625","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","794","597","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","1026","597","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","1026","625","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","1026","653","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","425","216","831","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("Width - 834");
            obj.set_text("Width - 834");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","425","244","831","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","425","272","831","21",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","425","344","366","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("Width - 366");
            obj.set_text("Width - 366");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","425","600","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_value("Width - 134");
            obj.set_text("Width - 134");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","657","600","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_value("Width - 134");
            obj.set_text("Width - 134");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","889","600","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_value("Width - 134");
            obj.set_text("Width - 134");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","1121","600","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_value("Width - 134");
            obj.set_text("Width - 134");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","889","344","366","21",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_value("Width - 366");
            obj.set_text("Width - 366");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","425","628","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","657","628","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","889","628","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","1121","628","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","425","656","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","657","656","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","889","656","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","1121","656","134","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","425","372","366","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18","889","372","366","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19","425","400","366","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20","889","400","366","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","284","445","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Input Area 3단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","284","496",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","284","524",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","330","525","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("310");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","330","497","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","284","468",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","330","469","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","284","468","46","85",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("가나\r\n다라\r\n마바\r\n사");
            obj.set_cssclass("sta_WF_InputBtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","641","525","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","641","497","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","641","469","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","950","469","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","950","497","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","950","525","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21","426","472","212","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_value("Width - 212");
            obj.set_text("Width - 212");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22","426","500","212","21",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23","426","528","212","21",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("Width - 213");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24","736","528","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25","736","500","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26","736","472","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_value("Width - 211");
            obj.set_text("Width - 211");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27","1045","528","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28","1045","500","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29","1045","472","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_value("Width - 211");
            obj.set_text("Width - 211");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","19","85",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("테이블에 대타이틀이 있을경우");
            obj.set_color("black");
            obj.set_font("bold 14px \"Ma\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","19","112",null,"78","19",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("- 대타이틀은 1줄에 2글자씩 배치 하며 크기는 W46px로 고정하여 배치\r\n- 1Depth 타이틀은 W92px 로 고정하여 배치.\r\n- 컴퍼넌트 영역은 가변사이즈 적용 가능.\r\n- 최대글자수는 7자이며  최대글자수 이상부터는 \'..\' 처리하며 상세타이틀은 툴팁으로 처리.");
            obj.set_color("firebrick");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,951,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("LayoutGuide_02.xfdl", function() {

        this.Static07_onclick = function(obj,e)
        {

        };

        this.Static12_onclick = function(obj,e)
        {

        };

        this.Edit01_onchanged = function(obj,e)
        {

        };

        this.Static10_onclick = function(obj,e)
        {

        };

        this.Static75_onclick = function(obj,e)
        {

        };

        this.Static19_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static75.addEventHandler("onclick",this.Static75_onclick,this);
            this.Static33.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static48.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static16.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static28.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static29.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static30.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static37.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static19_onclick,this);
        };

        this.loadIncludeScript("LayoutGuide_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
