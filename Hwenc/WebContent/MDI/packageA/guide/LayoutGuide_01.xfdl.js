(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LayoutGuide_01");
            this.set_titletext("Input Area Layout Guide 01");
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

            obj = new Static("Static07","284","211",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","284","189","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Input Area 1단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","284","239",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","284","267",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","284","329",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","284","307","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Input Area 2단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","284","357",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","284","385",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","284","447",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","284","425","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Input Area 3단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","284","475",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","284","503",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","284","565",null,"30","19",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","284","543","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Input Area 4단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","284","593",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","284","621",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","19","212","255","562",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("silver");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","284","212","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("가나다라마바..");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_tooltiptext("가나다라마바사아자차카타파하");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","284","240","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","284","268","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","284","386","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","284","358","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","284","330","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","771","386","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","771","358","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","771","330","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","284","504","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","284","476","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","284","448","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","609","448","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","609","476","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","609","504","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","934","504","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","934","476","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","934","448","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","284","622","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","284","594","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","284","566","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","528","566","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","528","594","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","528","622","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","772","566","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","772","594","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","772","622","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","1016","566","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","1016","594","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","1016","622","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","379","215","877","21",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_value("Width - 877");
            obj.set_text("Width - 877");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","379","243","877","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","379","271","877","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","379","333","389","21",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_value("Width - 389");
            obj.set_text("Width - 389");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","379","361","389","21",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","379","389","389","21",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","866","333","390","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_value("Width - 390");
            obj.set_text("Width - 390");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","866","361","390","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","866","389","390","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","379","451","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_value("Width - 227");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","379","479","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","379","507","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","704","507","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","704","479","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","704","451","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_value("Width - 227");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","1029","507","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","1029","479","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","1029","451","227","21",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_value("Width - 227");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18","379","569","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_value("Width - 146");
            obj.set_text("Width - 146");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19","379","597","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20","379","625","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21","623","625","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22","623","597","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23","623","569","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_value("Width - 146");
            obj.set_text("Width - 146");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24","867","625","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25","867","597","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26","867","569","146","21",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_value("Width - 146");
            obj.set_text("Width - 146");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27","1111","625","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28","1111","597","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29","1111","569","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_value("Width - 145");
            obj.set_text("Width - 145");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","19","111",null,"78","19",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("- 1Depth 타이틀은 92px 로 고정하여 배치.\r\n- 컴퍼넌트 영역은 가변사이즈 적용 가능.\r\n- 최대글자수는 7자이며  최대글자수 이상부터는 \'..\' 처리하며 상세타이틀은 툴팁으로 처리.\r\n");
            obj.set_color("firebrick");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","19","85",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("좌/우에 컨텐츠가 있는 테이블");
            obj.set_color("black");
            obj.set_font("bold 14px \"Ma\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","284","689",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_InputBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","284","667",null,"16","19",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("(기타  :  예외적인 필드라벨이 있는경우 - 글자수는 제한이 없음)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","284","717",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_InputBgM");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","284","745",null,"29","19",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_InputBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","284","746","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","284","718","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","284","690","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","609","690","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","609","718","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","609","746","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","934","746","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","934","718","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","934","690","92","27",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_InputLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30","456","693","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31","456","721","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32","456","749","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","381","697","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","381","725","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","380","753","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","376","689","6","29",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("6");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","448","689","8","29",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("8");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit33","781","749","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","705","753","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","706","725","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34","781","721","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit35","781","693","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","706","697","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit36","1083","749","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("가변사이즈 적용가능");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","1030","753","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("필드라벨");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","1031","725","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("필드라벨");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","1031","697","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("필드라벨");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit37","1083","693","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("Width - 227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit38","1083","721","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("112");
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
        this.registerScript("LayoutGuide_01.xfdl", function() {

        this.Static07_onclick = function(obj,e)
        {

        };

        this.Static12_onclick = function(obj,e)
        {

        };

        this.Edit01_onchanged = function(obj,e)
        {

        };

        this.Static64_onclick = function(obj,e)
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
            this.Static17.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static30.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static32.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static33.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static07_onclick,this);
            this.Edit01.addEventHandler("onchanged",this.Edit01_onchanged,this);
            this.Static48.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static50.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static51.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static52.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static64.addEventHandler("onclick",this.Static64_onclick,this);
        };

        this.loadIncludeScript("LayoutGuide_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
