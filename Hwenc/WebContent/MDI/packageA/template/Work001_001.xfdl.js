(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work001_001");
            this.set_titletext("프로젝트 및 계약자 등록");
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

            obj = new Button("Button01",null,"0","42","21","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","42","21","90",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03",null,"0","42","21","135",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04",null,"0","42","21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05",null,"0","86","21","180",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("해지자료이관");
            obj.set_cssclass("btn_WF_SubAction");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","76","615",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계약번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"동\"/><Cell col=\"3\" text=\"호수\"/><Cell col=\"4\" text=\"평형\"/><Cell col=\"5\" text=\"유형\"/><Cell col=\"6\" text=\"옵션\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band><Band id=\"summary\"><Cell text=\"0건\" displaytype=\"text\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","625","76",null,"337","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div03");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","0","0",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static12","0","28",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","0","56",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","84",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","112",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","140",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","0","168",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","0","196",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","0","224",null,"57","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static13","0","280",null,"57","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_InputBgB");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static49","0","1","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("계약자번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static45","307","1","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","0","29","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_text("계약자이름");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","0","57","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("계약동");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10","0","85","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("평  형");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11","0","113","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_text("옵  션");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static14","0","141","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_text("옛  동");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static15","0","169","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_text("전화번호1");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static16","0","197","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static17","0","225","92","55",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static19","307","29","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static20","307","57","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            obj.set_text("계약호수");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static21","307","85","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_text("유  형");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static22","307","113","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static23","307","141","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("24");
            obj.set_text("옛호수");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static24","307","169","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("25");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static25","307","197","92","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("26");
            obj.set_text("가상계좌");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","0","281","92","55",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("27");
            obj.set_text("참고사항");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","95","4","209","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("28");
            obj.set_type("string");
            obj.set_value("dfefe");
            obj.set_limitbymask("none");
            obj.set_cssclass("com_WF_Essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","402","4","210","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("29");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("com_WF_Essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit15","95","32","209","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_cssclass("com_WF_Essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","402","32","210","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("31");
            obj.set_readonly("false");
            obj.set_cssclass("com_WF_Essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit01","95","60","209","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("32");
            obj.set_readonly("false");
            obj.set_cssclass("com_WF_Essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit02","402","60","210","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("33");
            obj.set_readonly("false");
            obj.set_cssclass("com_WF_Essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit06","95","88","59","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("34");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edl_WF_MCpadding, com_WF_Essential");
            obj.set_text("745");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button07","134","89","19","19",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static64","158","93","39","13",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("36");
            obj.set_text("전용㎡");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit03","203","88","101","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("74.976");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit04","402","88","210","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit05","95","116","209","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit07","402","116","210","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("40");
            obj.set_readonly("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit08","95","144","209","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("41");
            obj.set_readonly("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit09","402","144","210","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("42");
            obj.set_readonly("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit10","95","172","209","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("43");
            obj.set_readonly("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit11","402","172","210","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("44");
            obj.set_readonly("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit12","95","200","209","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("45");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button12","284","201","19","19",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","95","227","517","51",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("47");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","95","283","517","51",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("48");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","625","446",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div03");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","0","0",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static12","0","28",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","0","56",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","0","84",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","0","112",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","0","140",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static04","0","168",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static05","0","196",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static13","0","308",null,null,"0","0",null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgB");
            obj.set_text("");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static49","0","1","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static08","0","29","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("10");
            obj.set_text("현  장");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static09","0","57","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("11");
            obj.set_text("상  태");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static10","0","85","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("12");
            obj.set_text("Web조회");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static11","0","113","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("13");
            obj.set_text("현장주소");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static14","0","141","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("14");
            obj.set_text("현장전화번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static15","0","169","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("15");
            obj.set_text("조합전화번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static16","0","197","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("16");
            obj.set_text("입금은행 1");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static20","307","57","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("17");
            obj.set_text("입주일자");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static23","307","141","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("18");
            obj.set_text("조합명");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static24","307","169","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("19");
            obj.set_text("조합장 성명");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static25","307","197","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("20");
            obj.set_text("계좌번호 1");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static07","0","309","92",null,null,"1",null,null,null,null,this.Div04.form);
            obj.set_taborder("21");
            obj.set_text("비  고");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit07","95","116","517","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit08","95","144","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit09","402","144","210","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit10","95","172","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit11","402","172","210","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","95","312","517",null,null,"4",null,null,null,null,this.Div04.form);
            obj.set_taborder("27");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit13","256","4","356","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("28");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit14","95","4","158","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","95","32","158","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("30");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00","233","33","19","19",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit15","256","32","356","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.Div04.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","402","60","210","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("33");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo01","95","60","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("34");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00","95","88","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit01","95","200","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("36");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit02","402","200","210","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static06","0","224",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static17","0","225","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("39");
            obj.set_text("입금은행 2");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit03","95","228","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("40");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static18","307","225","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("41");
            obj.set_text("계좌번호 2");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit04","402","228","210","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("42");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static19","0","252",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static21","0","253","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("44");
            obj.set_text("입금은행 3");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit05","95","256","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("45");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static22","307","253","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("46");
            obj.set_text("계좌번호 3");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit06","402","256","210","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("47");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static26","0","280",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static27","0","281","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("49");
            obj.set_text("입금은행 4");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit12","95","284","209","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("50");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static28","307","281","92","27",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("51");
            obj.set_text("계좌번호 4");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit16","402","284","210","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("52");
            obj.set_readonly("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static31","625","428","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("프로젝트 정보");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"423","75","18","108",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("분양율 조회");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"423","105","18","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("프로젝트정보 저장");
            obj.set_cssclass("btn_WF_Associated");
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
        this.registerScript("Work001_001.xfdl", function() {

        this.Div04_TextArea01_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WF_MainForm_onload,this);
            this.Div01.form.Combo01.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Div03.form.Static48.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static12.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static00.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static01.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static03.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static04.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static06.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static13.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Edit06.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Div03.form.Static64.addEventHandler("onclick",this.Static64_onclick,this);
            this.Div03.form.Edit12.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Div04.form.Static48.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static12.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static00.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static01.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static03.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static04.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static13.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Edit00.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Div04.form.Combo01.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Div04.form.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Div04.form.Static06.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static19.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div04.form.Static26.addEventHandler("onclick",this.Static07_onclick,this);
        };

        this.loadIncludeScript("Work001_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
