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
            this.set_titletext("Search Area Layout Guide 01");
            this.set_scrolltype("vertical");
            this.set_scrollbartype("auto auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,951);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Search Area Layout Guide 01");
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

            obj = new Div("Div00","19","116",null,"39","19",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static125","247","12","93","13",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit20","312","8","158","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","547","8","158","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","482","12","93","13",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","782","8","158","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","717","12","93","13",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","1017","8","158","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","952","12","93","13",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","12","12","93","13",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","77","8","158","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static75","19","94","406","16",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1줄 검색 - 기본 스타일  5단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","19","332",null,"39","19",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static125","247","12","93","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit20","312","8","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","547","8","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","482","12","93","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","782","8","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","717","12","93","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","1017","8","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","952","12","93","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","12","12","98","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("가나다라마바사아");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","121","8","114","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","19","310","700","16",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1줄 검색 - 기본 스타일 :  라벨 글자수에 따른 스타일 적용 가능 다만 컴퍼넌트와 필드라벨 사이의 거리는 11px로 한다");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","130","332","11","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("11");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","19","406",null,"39","19",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static125","247","12","93","13",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit20","312","8","193","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","582","8","357","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","517","12","93","13",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","12","12","98","13",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("가나다라마바사아");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","121","8","114","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_value("가변사이즈 적용가능");
            obj.set_text("가변사이즈 적용가능");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","235","-1","12","39",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("12");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","19","381","444","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("1줄 검색 - 변형스타일(프리)  : 검색필드 갯수에 따른 스타일 - 검색조건이 1줄일 경우만 적용");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","525","406","12","39",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("12");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","19","188",null,"39","19",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static125","306","12","93","13",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit20","371","8","216","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_value("Width - 216");
            obj.set_text("Width - 216");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","664","8","217","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_value("Width - 217");
            obj.set_text("Width - 217");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","599","12","93","13",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit01","958","8","216","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_value("Width - 216");
            obj.set_text("Width - 216");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","893","12","93","13",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","12","12","93","13",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit02","77","8","217","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_value("Width - 217");
            obj.set_text("Width - 217");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","19","166","146","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("1줄 검색 - 기본 스타일  4단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","19","260",null,"39","19",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static125","403","12","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit20","468","8","314","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_value("Width - 314");
            obj.set_text("Width - 314");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","859","8","314","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_value("Width - 314");
            obj.set_text("Width - 314");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","794","12","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static09","12","12","93","13",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit03","77","8","314","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_value("Width - 314");
            obj.set_text("Width - 314");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static10","19","238","146","16",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("1줄 검색 - 기본 스타일  3단");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","19","488","529","16",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("2줄 이상검색 - 기본 스타일  5단 - 높이값은 1줄 추가 될때마다 25 px씩 늘어나며 줄의 간격은 4px로 한다.");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","1153","406","40","39",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("H39");
            obj.set_background("#b89bfc");
            obj.set_opacity("0.5");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","19","513",null,"64","19",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static125","247","12","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit20","312","8","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("2");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit00","547","8","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("3");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00","482","12","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit01","782","8","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("5");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static01","717","12","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("6");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit02","1017","8","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("7");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static02","952","12","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("8");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static03","12","12","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("9");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit03","77","8","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("10");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static04","12","37","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("11");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit04","77","33","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("12");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static05","247","37","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("13");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit05","312","33","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("14");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static06","482","37","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("15");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit06","547","33","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("16");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static07","717","37","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("17");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit07","782","33","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("18");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static08","952","37","93","13",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("19");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div05.addChild(obj.name, obj);

            obj = new Edit("Edit08","1017","33","158","21",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("20");
            obj.set_text("Width - 158");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div06","19","587",null,"89","19",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static125","247","12","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit20","312","8","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit00","547","8","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","482","12","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit01","782","8","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","717","12","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit02","1017","8","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","952","12","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static03","12","12","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit03","77","8","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static04","12","37","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit04","77","33","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static05","247","37","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("13");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit05","312","33","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("14");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static06","482","37","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("15");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit06","547","33","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("16");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static07","717","37","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("17");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit07","782","33","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("18");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static08","952","37","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("19");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit08","1017","33","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("20");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static09","12","62","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("21");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit09","77","58","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("22");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static10","247","62","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("23");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit10","312","58","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("24");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static11","482","62","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("25");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit11","547","58","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("26");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static12","717","62","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("27");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit12","782","58","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("28");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static13","952","62","93","13",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("29");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit13","1017","58","158","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("30");
            obj.set_text("Width - 158");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static14","1133","-1","40","89",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("31");
            obj.set_text("H89");
            obj.set_background("#b89bfc");
            obj.set_opacity("0.5");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("Div07","19","844",null,"64","19",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div07.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static125","247","12","98","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마바사아");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit20","356","8","114","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("2");
            obj.set_value("Width - 114");
            obj.set_text("Width - 114");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit00","536","8","169","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("3");
            obj.set_value("Width - 169");
            obj.set_text("Width - 169");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static00","482","12","43","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("4");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit01","760","8","180","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("5");
            obj.set_value("Width - 180");
            obj.set_text("Width - 180");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static01","717","12","32","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("6");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit02","1017","8","158","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("7");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static02","952","12","58","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("8");
            obj.set_text("가나다라..");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("가나다라마바사아자차카타파하");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static03","12","12","32","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("9");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit03","77","8","158","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("10");
            obj.set_value("Width - 158");
            obj.set_text("Width - 158");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static04","12","37","54","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("11");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit04","77","33","158","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("12");
            obj.set_text("Width - 158");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static05","247","37","54","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("13");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit05","356","33","114","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("14");
            obj.set_text("Width - 114");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static06","482","37","43","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("15");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit06","536","33","169","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("16");
            obj.set_text("Width - 169");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static07","717","37","32","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("17");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit07","760","33","180","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("18");
            obj.set_text("Width - 180");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static08","952","37","54","13",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("19");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit08","1017","33","158","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("20");
            obj.set_text("Width - 158");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static10","525","-1","11","30",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("21");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("11");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static11","749","-1","11","30",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("22");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("11");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static00","19","820","446","16",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("2줄 이상검색 - 라벨글자수에 따른 스타일 : 라벨 글자수에 따라 컴퍼넌트의 길이가 결정된다.");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","365","844","11","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("11");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","1153","513","40","64",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("H64");
            obj.set_background("#b89bfc");
            obj.set_opacity("0.5");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Div("Div08","18","738",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div08.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static125","306","12","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("0");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit20","371","8","216","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("2");
            obj.set_value("Width - 216");
            obj.set_text("Width - 216");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit00","664","8","217","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("3");
            obj.set_value("Width - 217");
            obj.set_text("Width - 217");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static00","599","12","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit01","958","8","216","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("5");
            obj.set_value("Width - 216");
            obj.set_text("Width - 216");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static01","893","12","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("6");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static07","12","12","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("7");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit02","77","8","217","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("8");
            obj.set_value("Width - 217");
            obj.set_text("Width - 217");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static02","12","37","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("9");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit03","77","33","217","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("10");
            obj.set_text("Width - 217");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static03","306","37","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("11");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit04","371","33","216","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("12");
            obj.set_text("Width - 216");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static04","599","37","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("13");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit05","664","33","217","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("14");
            obj.set_text("Width - 217");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static05","893","37","93","13",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("15");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit06","958","33","216","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("16");
            obj.set_text("Width - 216");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static09","18","716","303","16",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("2줄 이상 검색 - 1줄 기본 스타일에서 \'단\' 별로 1줄씩 추가 된다.");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
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
        this.registerScript("LayoutGuide_04.xfdl", function() {

        this.Static07_onclick = function(obj,e)
        {

        };

        this.Static12_onclick = function(obj,e)
        {

        };

        this.Div04_Edit20_onchanged = function(obj,e)
        {

        };

        this.Div07_Static06_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static75.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static46_onclick,this);
            this.Div04.form.Edit20.addEventHandler("onchanged",this.Div04_Edit20_onchanged,this);
            this.Static10.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static46_onclick,this);
            this.Div07.form.Static06.addEventHandler("onclick",this.Div07_Static06_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static46_onclick,this);
        };

        this.loadIncludeScript("LayoutGuide_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
