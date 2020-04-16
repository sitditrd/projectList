(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LayoutGuide_03");
            this.set_titletext("Input Area Layout Guide 03");
            this.set_scrollbartype("none");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,951);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Input Area Layout Guide 03");
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

            obj = new Static("Static07","19","211",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","19","212","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","19","189","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Input Area 1단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","19","239",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","19","267",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","19","240","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","19","268","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","19","329",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","19","330","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","19","307","118","16",null,null,null,null,null,null,this);
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

            obj = new Static("Static10","19","357",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","19","385",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","19","358","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","19","386","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","639","330","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","639","358","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","639","386","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","19","447",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","19","448","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","19","425","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Input Area 3단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","19","475",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","19","503",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","19","476","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","19","504","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","432","448","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","432","476","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","432","504","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","845","504","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","845","476","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","845","448","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","19","565",null,"30","19",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","19","566","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","18","543","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Input Area 4단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","19","593",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","19","621",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","19","594","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","19","622","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","329","566","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","329","594","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","329","622","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","639","622","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","639","594","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","639","566","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","949","566","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","949","594","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","949","622","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","19","683",null,"30","19",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","19","684","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","18","661","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Input Area 5단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","19","711",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","19","739",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","19","712","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","19","740","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","267","684","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","267","712","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","267","740","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","515","740","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","515","712","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","515","684","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","763","684","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","763","712","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","763","740","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","1011","684","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("가나다 라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","1011","712","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","1011","740","99","27",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","121","215","1135","21",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_value("Width - 1135");
            obj.set_text("Width - 1135");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","121","243","1135","21",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","121","271","1135","21",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","121","333","515","21",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_value("Width - 515");
            obj.set_text("Width - 515");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","121","361","515","21",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","121","389","515","21",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","741","333","515","21",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_value("Left - 515");
            obj.set_text("Left - 515");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","741","361","515","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","741","389","515","21",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","121","451","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_value("Width - 308");
            obj.set_text("Width - 308");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","121","479","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","121","507","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","534","507","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","534","479","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","534","451","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_value("Width -308");
            obj.set_text("Width -308");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","947","507","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","947","479","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","947","451","308","21",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_value("Width - 308");
            obj.set_text("Width - 308");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18","121","569","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_value("Width - 205");
            obj.set_text("Width - 205");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19","121","597","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20","121","625","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21","431","625","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22","431","597","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23","431","569","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_value("Width - 205");
            obj.set_text("Width - 205");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24","741","625","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25","741","597","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26","741","569","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_value("Width - 205");
            obj.set_text("Width - 205");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27","1051","625","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28","1051","597","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29","1051","569","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_value("Width - 205");
            obj.set_text("Width - 205");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30","121","687","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_value("Width - 143");
            obj.set_text("Width - 143");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31","121","715","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32","121","743","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit33","369","743","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34","369","715","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit35","369","687","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_value("Width - 143");
            obj.set_text("Width - 143");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit36","617","743","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit37","617","715","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit38","617","687","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_value("Width - 143");
            obj.set_text("Width - 143");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit39","865","743","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit40","865","715","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit41","865","687","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_value("Width - 143");
            obj.set_text("Width - 143");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit42","1113","743","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit43","1113","715","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit44","1113","687","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_value("Width - 143");
            obj.set_text("Width - 143");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","19","892",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","19","800","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("( Input Area BG ) ");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","19","859",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","19","826",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_InputBgT");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","43","832","45","16",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("TOP");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","42","864","45","16",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("MIDDLE");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","42","898","45","16",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("BOTTOM");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","19","85",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("기본 테이블");
            obj.set_color("black");
            obj.set_font("bold 14px \"Ma\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","19","111",null,"78","19",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("- 1Depth 타이틀은 99px 로 고정하여 배치.\r\n- 컴퍼넌트 영역은 가변사이즈 적용 가능.\r\n- 최대글자수는 7자이며  최대글자수 이상부터는 \'..\' 처리하며 상세타이틀은 툴팁으로 처리.");
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
        this.registerScript("LayoutGuide_03.xfdl", function() {

        this.Static07_onclick = function(obj,e)
        {

        };

        this.Static12_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static75.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static30.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static32.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static33.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static46.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static48.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static50.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static65.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static66.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static67.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static68.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static72.addEventHandler("onclick",this.Static10_onclick,this);
        };

        this.loadIncludeScript("LayoutGuide_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
