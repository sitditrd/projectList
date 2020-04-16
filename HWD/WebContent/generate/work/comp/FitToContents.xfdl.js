(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FitToContents");
            this.set_titletext("Fit To Contents");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,830);
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
            obj._setContents("<ColumnInfo><Column id=\"msgCd\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"msgSbc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"msgSbc\">성명</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0001</Col></Row><Row><Col id=\"msgSbc\">출생년도</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0002</Col></Row><Row><Col id=\"msgSbc\">키</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0003</Col></Row><Row><Col id=\"msgSbc\">몸무게</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0004</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgSbc\">소속</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgSbc\">포지션</Col></Row><Row><Col id=\"msgCd\">L0007</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgSbc\">날짜형식</Col></Row><Row><Col id=\"msgCd\">L0008</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgSbc\">숫자형식</Col></Row><Row><Col id=\"msgSbc\">간단한 날짜</Col><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L0009</Col></Row><Row><Col id=\"langCd\">ko_KR</Col><Col id=\"msgSbc\">자세한 날짜</Col><Col id=\"msgCd\">L00010</Col></Row><Row><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L00011</Col><Col id=\"msgSbc\">양수</Col></Row><Row><Col id=\"langCd\">ko_KR</Col><Col id=\"msgCd\">L00012</Col><Col id=\"msgSbc\">음수</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Name</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Birth year</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Stature</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Weight</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Belong</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Position</Col></Row><Row><Col id=\"msgCd\">L0007</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Date Format</Col></Row><Row><Col id=\"msgCd\">L0008</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Number Format</Col></Row><Row><Col id=\"msgCd\">L0009</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Short Date</Col></Row><Row><Col id=\"msgCd\">L00010</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Long Date</Col></Row><Row><Col id=\"msgCd\">L00011</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Positive</Col></Row><Row><Col id=\"msgCd\">L00012</Col><Col id=\"langCd\">en_US</Col><Col id=\"msgSbc\">Negative</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">名</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">出生年份</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">关键</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">zh_CN</Col><Col id=\"msgSbc\">重量</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"msgSbc\">部门</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"msgSbc\">位置</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgSbc\">日期格式</Col><Col id=\"msgCd\">L0007</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgSbc\">数字格式</Col><Col id=\"msgCd\">L0008</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgSbc\">短日期</Col><Col id=\"msgCd\">L0009</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgSbc\">长日期</Col><Col id=\"msgCd\">L00010</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgSbc\">正面</Col><Col id=\"msgCd\">L00011</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgSbc\">负</Col><Col id=\"msgCd\">L00012</Col><Col id=\"langCd\">zh_CN</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">имя</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">Год рождения</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">ключ</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">вес</Col></Row><Row><Col id=\"msgSbc\">отдел</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgCd\">L0005</Col></Row><Row><Col id=\"msgSbc\">позиции</Col><Col id=\"langCd\">ru_RU</Col><Col id=\"msgCd\">L0006</Col></Row><Row><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">Формат даты</Col><Col id=\"msgCd\">L0007</Col></Row><Row><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">Формат номера</Col><Col id=\"msgCd\">L0008</Col></Row><Row><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\"> Короткие Дата</Col><Col id=\"msgCd\">L0009</Col></Row><Row><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">Длинные Дата</Col><Col id=\"msgCd\">L00010</Col></Row><Row><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">положительный</Col><Col id=\"msgCd\">L00011</Col></Row><Row><Col id=\"langCd\">ru_RU</Col><Col id=\"msgSbc\">отрицательный</Col><Col id=\"msgCd\">L00012</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Jméno</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Rok narození</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Klíč</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Hmotnost</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Přidružení</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Poloha</Col></Row><Row><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Formát data</Col><Col id=\"msgCd\">L0007</Col></Row><Row><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Formát čísel</Col><Col id=\"msgCd\">L0008</Col></Row><Row><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">krátký Datum</Col><Col id=\"msgCd\">L0009</Col></Row><Row><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Long Date</Col><Col id=\"msgCd\">L00010</Col></Row><Row><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Pozitivní</Col><Col id=\"msgCd\">L00011</Col></Row><Row><Col id=\"langCd\">cs_CZ</Col><Col id=\"msgSbc\">Negativní</Col><Col id=\"msgCd\">L00012</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Datumsformat</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Short Date</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Langes Datum</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Nummer Format</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Positiv</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Negativ</Col></Row><Row><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Datumsformat</Col><Col id=\"msgCd\">L0007</Col></Row><Row><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Nummer Format</Col><Col id=\"msgCd\">L0008</Col></Row><Row><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Short Date</Col><Col id=\"msgCd\">L0009</Col></Row><Row><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Langes Datum</Col><Col id=\"msgCd\">L00010</Col></Row><Row><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Positiv</Col><Col id=\"msgCd\">L00011</Col></Row><Row><Col id=\"langCd\">de_CH</Col><Col id=\"msgSbc\">Negativ</Col><Col id=\"msgCd\">L00012</Col></Row><Row><Col id=\"msgCd\">L0001</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Nombre</Col></Row><Row><Col id=\"msgCd\">L0002</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Año de nacimiento</Col></Row><Row><Col id=\"msgCd\">L0003</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Clave</Col></Row><Row><Col id=\"msgCd\">L0004</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Peso</Col></Row><Row><Col id=\"msgCd\">L0005</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Afiliación</Col></Row><Row><Col id=\"msgCd\">L0006</Col><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Posición</Col></Row><Row><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Datumsformat</Col><Col id=\"msgCd\">L0007</Col></Row><Row><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Nummer Format</Col><Col id=\"msgCd\">L0008</Col></Row><Row><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Short Date</Col><Col id=\"msgCd\">L0009</Col></Row><Row><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Langes Datum</Col><Col id=\"msgCd\">L00010</Col></Row><Row><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Positiv</Col><Col id=\"msgCd\">L00011</Col></Row><Row><Col id=\"langCd\">es_ES</Col><Col id=\"msgSbc\">Negativ</Col><Col id=\"msgCd\">L00012</Col></Row><Row><Col id=\"langCd\">sk_SK</Col><Col id=\"msgSbc\">formát dátumu</Col><Col id=\"msgCd\">L0007</Col></Row><Row><Col id=\"langCd\">sk_SK</Col><Col id=\"msgSbc\">formát čísel </Col><Col id=\"msgCd\">L0008</Col></Row><Row><Col id=\"langCd\">sk_SK</Col><Col id=\"msgSbc\">krátky Dátum</Col><Col id=\"msgCd\">L0009</Col></Row><Row><Col id=\"langCd\">sk_SK</Col><Col id=\"msgSbc\">long Date</Col><Col id=\"msgCd\">L00010</Col></Row><Row><Col id=\"langCd\">sk_SK</Col><Col id=\"msgSbc\">pozitívne</Col><Col id=\"msgCd\">L00011</Col></Row><Row><Col id=\"langCd\">sk_SK</Col><Col id=\"msgSbc\">Negatívna</Col><Col id=\"msgCd\">L00012</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Radio("rdoLocale","8","64","852","266",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsLocale");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_columncount("4");
            obj.set_direction("horizontal");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","0",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("넥사크로는 컴포넌트 속성으로 별도의 코딩없이 텍스트 길이에 맞게 자동으로 컴포넌트 사이즈를 조정할 수 있습니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","59","86","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_iconKorea");
            obj.set_text("Korea");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","278","86","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("USA");
            obj.set_cssclass("sta_WF_iconUSA");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","493","86","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("China");
            obj.set_cssclass("sta_WF_iconChina");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","703","86","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Russia");
            obj.set_cssclass("sta_WF_iconRussia");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","493","225","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Spanish");
            obj.set_cssclass("sta_WF_iconSpain");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","278","225","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("German");
            obj.set_cssclass("sta_WF_iconGeman");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","59","225","60","83",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Czech");
            obj.set_cssclass("sta_WF_iconCzech");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","265","304","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("(Switzerland)");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","494","304","64","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(Spain)");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","349","50.00%","200",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"출생년도\"/><Cell col=\"2\" text=\"키\"/><Cell col=\"3\" text=\"몸무게\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"포지션\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","grdMaster:3","349",null,"200","4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("2px solid #f88882");
            obj.set_text("");
            obj.set_background("#fdf9f9");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_image","grdMaster:9","360","122","177",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px solid #bdc2c9");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("staName","img_image:20","360","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_color("#d9381e");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0001");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","staName:6","361","133","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBirth","img_image:20","390","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_color("#d9381e");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0002");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("출생년도");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title01","staBirth:15","390","133","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("staHeight","img_image:20","420","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_color("#d9381e");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0003");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("키");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title02","staHeight:15","420","133","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("staWeight","img_image:20","450","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_color("#d9381e");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0004");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("몸무게");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title03","staWeight:15","450","133","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("staTeam","img_image:20","480","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_color("#d9381e");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0005");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("소속");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staPosition","img_image:20","510","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_color("#d9381e");
            obj.set_font("normal bold 10pt \"Verdana\"");
            obj.getSetter("msgCd").set("L0006");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("포지션");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_title04","staTeam:15","480","133","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("st_title05","staPosition:15","510","133","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_padding("0px 3px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","28",null,"485","20",null,"0",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Static00");
            obj.set_background("aqua");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"7","20","153","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Static00");
            obj.set_background("aqua");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","0","562","50.00%","200",null,null,null,null,null,null,this);
            obj.set_text("날짜 형식");
            obj.set_taborder("28");
            obj.set_visible("true");
            obj.getSetter("msgCd").set("L0007");
            obj.set_cssclass("grb_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","603","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("간단한 날짜 ");
            obj.set_cssclass("sta_WF_cell01R");
            obj.getSetter("msgCd").set("L0009");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","Static00_01:10","603","215","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_dateformat("SHORTDATE");
            obj.set_editformat("SHORTDATE");
            obj.set_value("20160401");
            obj.set_visible("true");
            obj.set_cssclass("cal_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","21","645","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("자세한 날짜 ");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_cell01R");
            obj.getSetter("msgCd").set("L00010");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","Static01:10","645","215","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("LONGDATE");
            obj.set_value("20160401");
            obj.set_visible("true");
            obj.set_cssclass("cal_basic01");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","GroupBox00:4","562",null,"200","4",null,null,null,null,null,this);
            obj.set_text("숫자 형식");
            obj.set_taborder("33");
            obj.set_visible("true");
            obj.getSetter("msgCd").set("L0008");
            obj.set_cssclass("grb_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","GroupBox00:28","603","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("양수");
            obj.set_visible("true");
            obj.getSetter("msgCd").set("L00011");
            obj.set_cssclass("sta_WF_cell01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","GroupBox00:28","645","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("음수");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_cell01R");
            obj.getSetter("msgCd").set("L00012");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","Static02:50","603","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.getSetter("mask").set("###,###,##0.00");
            obj.set_visible("true");
            obj.set_format("###,###,##0.00");
            obj.set_value("123456789.00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","Static03:50","645","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.getSetter("mask").set("###,###,##0.00");
            obj.set_visible("true");
            obj.set_format("###,###,##0.00");
            obj.set_value("-123456789.00");
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

            obj = new BindItem("item2","sta01","text","dsList","Column0");
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

            obj = new BindItem("item8","Calendar00","locale","gdsLocale","locale");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Calendar01","locale","gdsLocale","locale");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","MaskEdit00","locale","gdsLocale","locale");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","MaskEdit01","locale","gdsLocale","locale");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FitToContents.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    FitToContents.xfdl
        *  @Creator     presales
        *  @CreateDate  2019/10/02
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2019/10/02          presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.gvLangCd = "ko_KR";


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.FitToContents_onload = function(obj,e)
        {
        	// alert("system.locale : " + system.locale);
        	this.gvLangCd = this.dsLocale.lookupAs("code", system.locale.substr(0, 2), "code");
        	this.rdoLocale.set_value(this.gvLangCd);

        	this.fnSetLocale(this.gvLangCd);
        	this.fnSetLanguage(this);

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
        	arrMessages.push("L0007"); //7 : 날짜 형식
        	arrMessages.push("L0008"); //8 : 숫자 형식
        	arrMessages.push("L0009"); //9 : 간단한 날짜
        	arrMessages.push("L00010"); //10 : 자세한 날짜
        	arrMessages.push("L00011"); //11 : 양수
        	arrMessages.push("L00012"); //12 : 음수

        	this.grdMaster.msgCd = arrMessages;
        };

        /**
         * @description 화면 닫는경우 언어설정 한국어 변경
        */
        this.FitToContents_onbeforeclose = function(obj,e)
        {
        	nexacro.getEnvironment().set_locale("ko_KR");
        };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnSetCompFitToContents : static에 fit to contents를 설정한다.
        * @param {String}  menuId	- 메뉴 ID
        * @return : N/A
        * @example :
        */
        this.fnSetCompFitToContents = function()
        {
        	this.staName.set_fittocontents("width");
        	this.staBirth.set_fittocontents("width");
        	this.staHeight.set_fittocontents("width");
        	this.staWeight.set_fittocontents("width");
        	this.staTeam.set_fittocontents("width");
        	this.staPosition.set_fittocontents("width");

        	this.resetScroll();
        }

        /**
        * fnGetMessage : 단어사전 ds를 이용해 선택된 언어로 text를 return 한다.
        * @param {String}  sMsgCd	- 단어에 해당되는 메세지 ID
        * @param {String}  aMsgAgr	- 동적으로 변경되는 메세지 아규먼트
        * @param {String}  sLangId	- 선택된 다국어
        * @return : {String} 선택 언어에 해당되는 단어
        * @example :
        */
        this.fnGetMessage = function (sMsgCd, aMsgAgr, sLangId)
        {
        	if (this.gfnIsNull(sMsgCd)) return sMsgCd;
        	if (this.gfnIsNull(sLangId)) sLangId = this.gvLangCd;

        	var iRow = this.dsMessage.findRowExpr("msgCd=='" + sMsgCd + "' && langCd=='" + sLangId + "'");

        	if (iRow == -1) iRow = this.dsMessage.findRowExpr("msgCd=='" + sMsgCd + "' && langCd=='en_US'");
        	if (iRow == -1) return sMsgCd;

        	var sMessage = String(this.dsMessage.getColumn(iRow, "msgSbc"));

        	if (this.gfnIsNull(sMessage)) return this.dsMessage.lookupExpr("msgCd=='" + sMsgCd + "' && langCd=='en_US'", "msgSbc");
        	if (this.gfnIsNull(sMessage)) return sMsgCd;

        	if (!this.gfnIsNull(aMsgAgr))
        	{
        		if (typeof aMsgAgr == "string") aMsgAgr = new Array(aMsgAgr);

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


        /**
        * fnSetLocale : 언어 변경
        * @param {String}  val	- 언어 코드
        * @return : N/A
        * @example :
        */
        this.fnSetLocale = function (val)
        {
         	nexacro.getEnvironment().set_locale(val);
         	this.Calendar00.set_locale(val);
         	this.Calendar01.set_locale(val);
         	this.MaskEdit00.set_locale(val);
         	this.MaskEdit01.set_locale(val);
        };

        /**
        * fnSetLanguage : 컴포넌트의 text부문을 언어설정에 맞게 설정해준다.
        * @param {object}  obj	- components
        * @return : N/A
        * @example :
        */
        this.fnSetLanguage = function (obj)
        {
        	var aComponents = obj.components;
        	var i;

        	for (i = 0; i < aComponents.length; i++)
        	{
        		if (aComponents[i] instanceof CheckBox ||
        			aComponents[i] instanceof GroupBox ||
        			aComponents[i] instanceof Static ||
        			aComponents[i] instanceof ImageViewer ||
        			aComponents[i] instanceof Button)
        		{
        			if (!this.gfnIsNull(aComponents[i].msgCd)) {
        				aComponents[i].set_text(this.fnGetMessage(aComponents[i].msgCd, null, this.gvLangCd));
        			}
        		}
        		else if (aComponents[i] instanceof Edit)
        		{
        			if (!this.gfnIsNull(aComponents[i].nulltextMsgCd)) {
        				aComponents[i].set_displaynulltext(this.fnGetMessage(aComponents[i].nulltextMsgCd, null, this.gvLangCd));
        			}
        		}
        		else if (aComponents[i] instanceof Grid)
        		{
        			var nCount = aComponents[i].getCellCount("Head");
        			//trace("aComponents[i].msgCd = " + aComponents[i].msgCd + " >>> " + aComponents[i].name);
        			if (!this.gfnIsNull(aComponents[i].msgCd))
        			{
        				for (var j = 0; j < nCount; j++)
        				{
        					//trace(aComponents[i].getCellProperty("Head", j));
        					aComponents[i].setCellProperty("Head", j, "text", this.fnGetMessage(aComponents[i].msgCd[j], null, this.gvLangCd));

        					// if (!this.gfnIsNull(aComponents[i].getCellProperty("Head", j, "msgCd")))
        					// {
        					// aComponents[i].setCellProperty("Head", j, "text", this.fnGetMessage(aComponents[i].getCellProperty("Head", j, "msgCd"), null, this.gvLangCd));
        					// }
        				}
        			}
        		}
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 언어 설정 변경시
        */
        this.rdoLocale_onitemchanged = function (obj, e)
        {
        	this.gvLangCd = e.postvalue;

        	nexacro.getEnvironment().locale = null;

        	this.fnSetLocale(e.postvalue);
        	this.fnSetLanguage(this);

        	this.fnSetCompFitToContents();
        	this.grdMaster.set_locale(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FitToContents_onload,this);
            this.addEventHandler("onbeforeclose",this.FitToContents_onbeforeclose,this);
            this.rdoLocale.addEventHandler("onitemchanged",this.rdoLocale_onitemchanged,this);
        };

        this.loadIncludeScript("FitToContents.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
