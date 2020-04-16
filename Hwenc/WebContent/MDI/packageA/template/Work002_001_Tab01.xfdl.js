(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work002_001_Tab01");
            this.set_titletext("지급품의 Tab01");
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

            obj = new Static("Static13","0","56",null,"29","0",null,null,null,null,null,this.Div00.form);
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
            obj.set_text("계약현장");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","0","57","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("업체");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static123","0","92","93","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("기성차수");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","107",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBgTB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","108","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("기성차수");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","95","4","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","95","32","107","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","205","32","106","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","314","32","312","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","95","60","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","314","60","312","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","143","93","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("품의설정");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","158",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","186",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","214",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_InputBgB");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","0","250","93","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","265",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","0","293",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","0","321",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","349",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_InputBgB");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","0","385","93","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("보증상세입력");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","0","400",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","0","428",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_InputBgB");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","0","464","93","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","0","479",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_InputBgTB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","0","515","93","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("세금계산서");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21","0","159","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("품의부서");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","0","187","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("품의일자");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","0","215","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","0","266","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("기성금액");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static25","0","294","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("부가세액");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","322","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("공제합계");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27","0","350","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("차인지급액");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","0","401","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("보증기관");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static29","0","429","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("보증기간");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static30","0","480","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("용역비여부");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static32","0","532",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_InputBgTB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static33","0","533","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("국세청승인번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static35","314","187","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("품의번호");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static37","314","266","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("과세분");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static38","314","294","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("면세분");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static39","314","322","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("지급기한");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static40","314","350","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("지급수단");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static41","314","401","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("보증번호");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static42","314","429","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("기성수령일");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static43","314","480","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("하수급인승인..");
            obj.set_cssclass("sta_WF_InputLabel");
            obj.set_tooltiptext("하수급인승인번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static44","314","533","92","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("세금계산서발..");
            obj.set_cssclass("sta_WF_InputLabel");
            obj.set_tooltiptext("세금계산서발행일");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","95","111","107","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit07","205","111","106","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10","95","190","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","95","162","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit09","314","162","312","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit11","409","190","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit12","95","536","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
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

            obj = new Button("Button12","291","537","19","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit13","205","218","106","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","95","269","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","95","297","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","95","325","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","95","353","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","409","269","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","409","297","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_value("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit14","409","325","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit15","409","353","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit16","95","404","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit18","409","404","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","95","432","101","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","196","432","12","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","210","432","101","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34","511","432","12","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("73");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","525","432","101","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("74");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","409","432","101","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("75");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit17","95","483","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit19","409","483","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("77");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","409","536","217","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("78");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static36","316","4","69","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("79");
            obj.set_text("통제완료");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Red");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit20","95","218","107","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("80");
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

            obj = new Button("Button00","182","219","19","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
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
            this.Div00.form.Static03.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static04.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static11.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static14.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static10.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static16.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static17.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static19.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Static32.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div00.form.Edit12.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Div00.form.Edit20.addEventHandler("onchanged",this.Edit04_onchanged,this);
        };

        this.loadIncludeScript("Work002_001_Tab01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
