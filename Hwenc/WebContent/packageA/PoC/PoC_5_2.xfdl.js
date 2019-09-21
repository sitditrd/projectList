(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_5_2");
            this.set_titletext("Fit To Contents");
            if (Form == this.constructor)
            {
                this._setFormPosition(650,617);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLocale", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ko_KR</Col><Col id=\"name\"/></Row><Row><Col id=\"code\">en_US</Col><Col id=\"name\"/></Row><Row><Col id=\"code\">zh_CN</Col><Col id=\"name\"/></Row><Row><Col id=\"code\">ru_RU</Col><Col id=\"name\"/></Row><Row><Col id=\"code\">cs_CZ</Col><Col id=\"name\"/></Row><Row><Col id=\"code\">de_CH</Col><Col id=\"name\"/></Row><Row><Col id=\"code\">es_ES</Col><Col id=\"name\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">손흥민</Col><Col id=\"Column1\">1992</Col><Col id=\"Column2\">183</Col><Col id=\"Column3\">77</Col><Col id=\"Column4\">토트넘 훗스퍼 FC</Col><Col id=\"Column5\">FW 공격수</Col><Col id=\"Column6\">imagerc::FW01.jpg</Col></Row><Row><Col id=\"Column0\">이승우</Col><Col id=\"Column1\">1998</Col><Col id=\"Column2\">173</Col><Col id=\"Column3\">63</Col><Col id=\"Column4\">헬라스 베로나 FC</Col><Col id=\"Column5\">FW 공격수</Col><Col id=\"Column6\">imagerc::FW02.jpg</Col></Row><Row><Col id=\"Column0\">황희찬</Col><Col id=\"Column1\">1996</Col><Col id=\"Column2\">177</Col><Col id=\"Column3\">77</Col><Col id=\"Column4\">FC 레드불 잘츠부르크</Col><Col id=\"Column5\">FW 공격수</Col><Col id=\"Column6\">imagerc::FW03.jpg</Col></Row><Row><Col id=\"Column0\">황희조</Col><Col id=\"Column1\">1992</Col><Col id=\"Column2\">184</Col><Col id=\"Column3\">73</Col><Col id=\"Column4\">감바 오사카</Col><Col id=\"Column5\">FW 공격수</Col><Col id=\"Column6\">imagerc::FW04.jpg</Col></Row><Row><Col id=\"Column0\">조현우</Col><Col id=\"Column1\">1991</Col><Col id=\"Column2\">189</Col><Col id=\"Column3\">76</Col><Col id=\"Column4\">대구 FC</Col><Col id=\"Column5\">GK 골키퍼</Col><Col id=\"Column6\">imagerc::GK.jpg</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLocale00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ko_KR</Col><Col id=\"name\">Korean</Col></Row><Row><Col id=\"code\">en_US</Col><Col id=\"name\">English (United States)</Col></Row><Row><Col id=\"code\">zh_CN</Col><Col id=\"name\">Chinese (China)</Col></Row><Row><Col id=\"code\">ru_RU</Col><Col id=\"name\">Russian</Col></Row><Row><Col id=\"code\">cs_CZ</Col><Col id=\"name\">Czech</Col></Row><Row><Col id=\"code\">de_CH</Col><Col id=\"name\">German (Switzerland)</Col></Row><Row><Col id=\"code\">es_ES</Col><Col id=\"name\">Spanish (Spain)</Col></Row><Row><Col id=\"code\">ar_SA</Col><Col id=\"name\">Arabic (Saudi Arabia)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"msgCd\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"msgSbc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"msgSbc\">성명</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0001</Col></Row><Row><Col id=\"msgSbc\">출생년도</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0002</Col></Row><Row><Col id=\"msgSbc\">키</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0003</Col></Row><Row><Col id=\"msgSbc\">몸무게</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0004</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgSbc\">소속</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgSbc\">포지션</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Name</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Birth year</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Stature</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Weight</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Belong</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Position</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">名</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">出生年份</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">关键</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">重量</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"msgSbc\">部门</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"msgSbc\">位置</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">имя</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">Год рождения</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">ключ</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">вес</Col></Row><Row><Col id=\"msgSbc\">отдел</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgCd\">L0005</Col></Row><Row><Col id=\"msgSbc\">позиции</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgCd\">L0006</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Jméno</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Rok narození</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Klíč</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Hmotnost</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Přidružení</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Poloha</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Name</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Geburtsjahr</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Schlüssel</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Gewicht</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Zugehörigkeit</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Position</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Nombre</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Año de nacimiento</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Clave</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Peso</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Afiliación</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Posición</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLabelInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"Label1\" type=\"STRING\" size=\"256\"/><Column id=\"Label2\" type=\"STRING\" size=\"256\"/><Column id=\"Label3\" type=\"STRING\" size=\"256\"/><Column id=\"Label4\" type=\"STRING\" size=\"256\"/><Column id=\"Label5\" type=\"STRING\" size=\"256\"/><Column id=\"Label6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Radio("rdoLocale","26","42","600","211",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsLocale");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_columncount("4");
            obj.set_direction("horizontal");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","63","64","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_iconKorea");
            obj.set_text("Korea");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","212","64","62","83",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("USA");
            obj.set_cssclass("sta_WF_iconUSA");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","362","64","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("China");
            obj.set_cssclass("sta_WF_iconChina");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","512","64","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Russia");
            obj.set_cssclass("sta_WF_iconRussia");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","362","168","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Spanish");
            obj.set_cssclass("sta_WF_iconSpain");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","212","168","62","83",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("German");
            obj.set_cssclass("sta_WF_iconGeman");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","63","168","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Czech");
            obj.set_cssclass("sta_WF_iconCzech");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","206","247","75","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("(Switzerland)");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","370","247","44","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("(Spain)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","287",null,"122","8",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"출생년도\"/><Cell col=\"2\" text=\"키\"/><Cell col=\"3\" text=\"몸무게\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"포지션\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","8","419",null,"190","8",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("3px solid #ff5151");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_image","16","425","132","177",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #bdc2c9");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","158","425","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("darkblue");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0001");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title00","stc_00:5","425","143","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","158","455","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_color("darkblue");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0002");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("출생년도");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title01","stc_01:5","455","143","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","158","485","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_color("darkblue");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0003");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("키");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title02","stc_02:5","485","143","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","158","515","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_color("darkblue");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0004");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("몸무게");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title03","stc_03:5","515","143","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","158","545","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_color("darkblue");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0005");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("소속");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","158","575","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_color("darkblue");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0006");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("포지션");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title04","stc_04:5","545","143","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("st_title05","stc_05:5","575","143","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("성능 확인");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoLocale","value","gdsLocale","locale");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","img_image","image","dsList","Column6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","st_title00","text","dsList","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","st_title01","text","dsList","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","st_title02","text","dsList","Column2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","st_title03","text","dsList","Column3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","st_title04","text","dsList","Column4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","st_title05","text","dsList","Column5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","stc_00","text","dsLabelInfo","Label1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stc_01","text","dsLabelInfo","Label2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","stc_02","text","dsLabelInfo","Label3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","stc_03","text","dsLabelInfo","Label4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","stc_04","text","dsLabelInfo","Label5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","stc_05","text","dsLabelInfo","Label6");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PoC_5_2.xfdl", function() {
        this.gvLangCd = "ko_KR";
        this.msgCdCnt = 0;

        this.FitToContents_onload = function(obj,e)
        {
        	// alert("system.locale : " + system.locale);
        	this.gvLangCd = this.dsLocale.lookupAs("code", system.locale.substr(0, 2), "code");
        	this.rdoLocale.set_value(this.gvLangCd);

        	this.gfnSetLocale(this.gvLangCd);
        	this.gfnSetLanguage(this);

        	var number = 123456789.01;
        	var number2 = new nexacro.Number(123456789.01);

        	// alert("123456789.01 ==> " + number.toLocaleString() + "\n" + "nexacro.Number(123456789.01) ==> " + number2.toLocaleString());

        	/*
        	 * Grid 다국어 처리용 메시지코드 설정(Cell index 순으로)
        	 */
        	var arrMessages = new Array();

        	arrMessages.push("L0001"); //0 : 이름
        	arrMessages.push("L0002"); //1 : 출생년도
        	arrMessages.push("L0003"); //2 : 키
        	arrMessages.push("L0004"); //3 : 몸무게
        	arrMessages.push("L0005"); //4 : 소속
        	arrMessages.push("L0006"); //5 : 포지션

        	this.msgCdCnt = arrMessages.length;
        	this.Grid00.msgCd = arrMessages;
        };

        this.FitToContents_onbeforeclose = function(obj,e)
        {
        	nexacro.getEnvironment().set_locale("ko_KR");
        };

        this.rdoLocale_onitemchanged = function (obj, e)
        {
        	this.gvLangCd = e.postvalue;

        	nexacro.getEnvironment().locale = null;

        	this.gfnSetLocale(e.postvalue);
        	this.gfnSetLanguage(this);

        	this.fn_setCompFitToContents();
        	this.Grid00.set_locale(e.postvalue);
        };

        this.fn_setCompFitToContents = function()
        {
        	this.stc_00.set_fittocontents("width");
        	this.stc_01.set_fittocontents("width");
        	this.stc_02.set_fittocontents("width");
        	this.stc_03.set_fittocontents("width");
        	this.stc_04.set_fittocontents("width");
        	this.stc_05.set_fittocontents("width");

        	this.resetScroll();
        }

        this.gfnSetLocale = function (val)
        {
         	nexacro.getEnvironment().set_locale(val);
        // 	this.Calendar00.set_locale(val);
        // 	this.Calendar01.set_locale(val);
        // 	this.MaskEdit00.set_locale(val);
        // 	this.MaskEdit01.set_locale(val);
        };

        this.gfnSetLanguage = function (obj)
        {
        	var aComponents = obj.components;
        	var i;

        	var arrMatrix = new Array();
        	var nCnt = 0;

        	for (i = 0; i < aComponents.length; i++)
        	{
        		if (aComponents[i] instanceof CheckBox ||
        			aComponents[i] instanceof GroupBox ||
        			aComponents[i] instanceof Static ||
        			aComponents[i] instanceof ImageViewer ||
        			aComponents[i] instanceof Button)
        		{
        			if (!Eco.isEmpty(aComponents[i].msgCd)) {

        				//소스수정 2019.09.10 Meta_Data로 관리
        				arrMatrix.push(this.gfnGetMessage(aComponents[i].msgCd, null, this.gvLangCd));
        				nCnt++;

        				if(nCnt == this.msgCdCnt)
        				{
        					for(var i=0; i<this.msgCdCnt; i++)
        					{
        						this.dsLabelInfo.setColumn(0, "Label" + parseInt(i+1), arrMatrix[i]);
        					}
        				}

        				//aComponents[i].set_text(this.gfnGetMessage(aComponents[i].msgCd, null, this.gvLangCd));
        			}
        		}
        		else if (aComponents[i] instanceof Edit)
        		{
        			if (!Eco.isEmpty(aComponents[i].nulltextMsgCd)) {
        				aComponents[i].set_displaynulltext(this.gfnGetMessage(aComponents[i].nulltextMsgCd, null, this.gvLangCd));
        			}
        		}
        		else if (aComponents[i] instanceof Grid)
        		{
        			var nCount = aComponents[i].getCellCount("Head");
        			//trace("aComponents[i].msgCd = " + aComponents[i].msgCd + " >>> " + aComponents[i].name);
        			if (!Eco.isEmpty(aComponents[i].msgCd))
        			{
        				for (var j = 0; j < nCount; j++)
        				{
        					//trace(aComponents[i].getCellProperty("Head", j));
        					aComponents[i].setCellProperty("Head", j, "text", this.gfnGetMessage(aComponents[i].msgCd[j], null, this.gvLangCd));

        					// if (!Eco.isEmpty(aComponents[i].getCellProperty("Head", j, "msgCd")))
        					// {
        					// aComponents[i].setCellProperty("Head", j, "text", this.gfnGetMessage(aComponents[i].getCellProperty("Head", j, "msgCd"), null, this.gvLangCd));
        					// }
        				}
        			}
        		}
        	}
        };

        this.gfnGetMessage = function (sMsgCd, aMsgAgr, sLangId)
        {
        	if (Eco.isEmpty(sMsgCd))
        		return sMsgCd;
        	if (Eco.isEmpty(sLangId))
        		sLangId = this.gvLangCd;

        	var iRow = this.dsMessage.findRowExpr("msgCd=='" + sMsgCd + "' && langCd=='" + sLangId + "'");

        	if (iRow == -1)
        		iRow = this.dsMessage.findRowExpr("msgCd=='" + sMsgCd + "' && langCd=='en_US'");
        	if (iRow == -1)
        		return sMsgCd;

        	var sMessage = String(this.dsMessage.getColumn(iRow, "msgSbc"));

        	if (Eco.isEmpty(sMessage))
        		return this.dsMessage.lookupExpr("msgCd=='" + sMsgCd + "' && langCd=='en_US'", "msgSbc");
        	if (Eco.isEmpty(sMessage))
        		return sMsgCd;

        	if (!Eco.isEmpty(aMsgAgr))
        	{
        		if (typeof aMsgAgr == "string")
        			aMsgAgr = new Array(aMsgAgr);

        		var sSlip1 = "",sSlip2 = "";
        		var i;

        		for (i = 0; i < aMsgAgr.length; i++)
        		{
        			if (sMessage.indexOf("[@]") == -1) break;

        			sSlip1 = sMessage.substr(0, sMessage.indexOf("[@]"));
        			sSlip2 = sMessage.substr(sMessage.indexOf("[@]") + 3, sMessage.length);
        			sMessage = sSlip1 + aMsgAgr[i] + sSlip2;
        		}
        	}

        	if (sMessage.indexOf("\\n") != -1)
        	{
        		var arr = sMessage.split("\\n");
        		var sTemp = "";
        		var i;

        		for (i = 0; i < arr.length; i++)
        		{
        			if (i > 0) sTemp += String.fromCharCode(10);

        			sTemp += arr[i];
        		}

        		sMessage = sTemp;
        	}

        	return sMessage;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FitToContents_onload,this);
            this.addEventHandler("onbeforeclose",this.FitToContents_onbeforeclose,this);
            this.rdoLocale.addEventHandler("onitemchanged",this.rdoLocale_onitemchanged,this);
            this.Grid00.addEventHandler("onlbuttonup",this.Grid00_onlbuttonup,this);
        };

        this.loadIncludeScript("PoC_5_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
