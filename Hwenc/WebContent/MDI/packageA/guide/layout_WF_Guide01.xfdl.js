(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("layout_WF_Guide01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","-19","-135",null,"50","-19",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Input Area Layout Guide 01");
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

            obj = new Static("Static07","265","66",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","265","104",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","265","142",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","265","184",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","265","222",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","265","260",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","265","302",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","265","340",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","265","378",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","265","420",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","265","458",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","265","496",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","255",null,null,"0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("silver");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","265","67","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나다라마바..");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_tooltiptext("가나다라마바사아자차카타파하");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","265","105","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","265","143","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","265","261","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","265","223","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","265","185","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","752","261","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","752","223","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","752","185","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","265","379","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","265","341","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","265","303","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","590","303","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","590","341","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","590","379","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","915","379","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","915","341","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","915","303","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","265","497","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","265","459","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","265","421","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","509","421","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","509","459","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","509","497","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","753","421","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","753","459","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","753","497","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","997","421","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","997","459","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","997","497","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","265","544",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","265","582",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","265","620",null,"29","0",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","265","621","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","265","583","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","265","545","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","590","545","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","590","583","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","590","621","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","915","621","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","915","583","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","915","545","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30","437","548","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31","437","586","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32","437","624","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","362","552","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","362","590","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","361","628","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","357","544","6","29",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("6");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","429","544","8","29",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("8");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit33","762","624","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","686","628","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","687","590","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34","762","586","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit35","762","548","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","687","552","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit36","1064","624","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","1011","628","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("필드라벨");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","1012","590","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("필드라벨");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","1012","552","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("필드라벨");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit37","1064","548","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit38","1064","586","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("75");
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

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static30.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static33.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static51.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static52.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static64.addEventHandler("onclick",this.Static64_onclick,this);
        };

        this.loadIncludeScript("layout_WF_Guide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
