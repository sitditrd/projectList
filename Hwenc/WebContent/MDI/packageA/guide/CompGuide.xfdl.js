(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide01");
            this.set_titletext("Static, Edit, MaskEdit,TextArea");
            this.set_tooltiptype("default");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,3796);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">c0001</Col><Col id=\"data\">가나다</Col></Row><Row><Col id=\"code\">c0002</Col><Col id=\"data\">가나다라마</Col></Row><Row><Col id=\"code\">c0003</Col><Col id=\"data\">가나다라마바사</Col></Row><Row><Col id=\"code\">c0004</Col><Col id=\"data\">가나다라</Col></Row><Row><Col id=\"code\">c0005</Col><Col id=\"data\">가나다라마</Col></Row><Row><Col id=\"code\">c0006</Col><Col id=\"data\">가나다라마바사아</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listBox", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"data\">가나다</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"data\">가나다라</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"data\">가나다라마</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"data\">라디오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Check\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"순번\">1</Col><Col id=\"Column01\">가나다라</Col><Col id=\"Check\">0</Col><Col id=\"Column02\">001</Col><Col id=\"Column03\">00000000</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바사</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">2</Col><Col id=\"Column01\">가나다라마바사</Col><Col id=\"Check\">1</Col><Col id=\"Column02\">001</Col><Col id=\"Column03\">00000000</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Check\">0</Col><Col id=\"순번\">3</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column02\">002</Col><Col id=\"Column04\">expand</Col><Col id=\"Column03\">00000000</Col><Col id=\"Column05\">가나다라마사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Check\">1</Col><Col id=\"순번\">4</Col><Col id=\"Column01\">가나다라</Col><Col id=\"Column02\">004</Col><Col id=\"Column03\">00000000</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mnu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"caption\">1뎁스 메뉴01</Col><Col id=\"level\">0</Col><Col id=\"enable\">1</Col><Col id=\"check\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">2</Col><Col id=\"caption\">메뉴02</Col><Col id=\"level\">0</Col><Col id=\"enable\">1</Col><Col id=\"check\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">3</Col><Col id=\"caption\">1뎁스 메뉴03</Col><Col id=\"level\">0</Col><Col id=\"enable\">0</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"id\">4</Col><Col id=\"caption\">1뎁스 메뉴04</Col><Col id=\"level\">0</Col><Col id=\"enable\">1</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"id\">5</Col><Col id=\"caption\">1뎁스 메뉴05</Col><Col id=\"level\">0</Col><Col id=\"enable\">1</Col><Col id=\"check\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"captiion\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"captiion\">1 Depth Menu 01</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 02</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 03</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 04</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"captiion\">1 Depth Menu 02</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"captiion\">3 Depth Menu 01</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"captiion\">3 Depth Menu 02</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"captiion\">3 Depth Menu 03</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"captiion\">3 Depth Menu 04</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 02</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"captiion\">1 Depth Menu 03</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"captiion\">2 Depth Menu 02</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popmnu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"caption\">전체</Col><Col id=\"level\">0</Col><Col id=\"enable\"/><Col id=\"check\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">2</Col><Col id=\"caption\">가나다라01</Col><Col id=\"level\">0</Col><Col id=\"enable\"/><Col id=\"hotkey\"/><Col id=\"icon\">theme://images/pum_WF_mnuItemBG.png</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"caption\">가나다라02</Col><Col id=\"level\">0</Col><Col id=\"check\">0</Col><Col id=\"enable\"/><Col id=\"icon\">theme://images/chk_box_N.png</Col><Col id=\"hotkey\"/></Row><Row><Col id=\"id\">4</Col><Col id=\"caption\">전체</Col><Col id=\"level\">1</Col><Col id=\"enable\"/><Col id=\"icon\">theme://images/pum_WF_mnuItemBG.png</Col><Col id=\"check\">1</Col></Row><Row><Col id=\"id\">5</Col><Col id=\"caption\">가나다라</Col><Col id=\"level\">1</Col><Col id=\"enable\"/><Col id=\"icon\">theme://images/pum_WF_mnuItemBG.png</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"id\">6</Col><Col id=\"caption\">가나다라</Col><Col id=\"level\">1</Col><Col id=\"enable\"/><Col id=\"check\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">7</Col><Col id=\"caption\">가나다라</Col><Col id=\"level\">1</Col><Col id=\"enable\"/><Col id=\"hotkey\"/><Col id=\"icon\">theme://images/pum_WF_mnuItemBG.png</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"id\">8</Col><Col id=\"caption\">가나다라</Col><Col id=\"level\">1</Col><Col id=\"enable\"/><Col id=\"check\">1</Col><Col id=\"icon\">theme://images/ico_check.png</Col></Row><Row><Col id=\"id\">9</Col><Col id=\"caption\">가나다라03</Col><Col id=\"level\">0</Col><Col id=\"hotkey\"/><Col id=\"icon\">theme://images/pum_WF_mnuItemBG.png</Col><Col id=\"enable\"/><Col id=\"check\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid_rowhead", this);
            obj._setContents("<ColumnInfo><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column01\">컬럼1</Col><Col id=\"Column02\">컬럼2</Col><Col id=\"Column03\">컬럼3-1</Col><Col id=\"Column04\">컬럼3-2</Col><Col id=\"Column05\">컬럼3-3</Col><Col id=\"Column06\">컬럼4</Col></Row><Row><Col id=\"Column01\">컬럼1</Col><Col id=\"Column02\">컬럼2</Col><Col id=\"Column03\">컬럼3-1</Col><Col id=\"Column04\">컬럼3-2</Col><Col id=\"Column05\">컬럼3-3</Col><Col id=\"Column06\">컬럼4</Col></Row><Row><Col id=\"Column01\">컬럼1</Col><Col id=\"Column02\">컬럼2</Col><Col id=\"Column04\">컬럼3-2</Col><Col id=\"Column03\">컬럼3-1</Col><Col id=\"Column05\">컬럼3-3</Col><Col id=\"Column06\">컬럼4</Col></Row><Row><Col id=\"Column01\">컬럼1</Col><Col id=\"Column02\">컬럼2</Col><Col id=\"Column03\">컬럼3-1</Col><Col id=\"Column04\">컬럼3-2</Col><Col id=\"Column05\">컬럼3-3</Col><Col id=\"Column06\">컬럼4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static35","123","3103",null,"265","0",null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","123","1936",null,"198","0",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","0","2133","124","110",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("ProgressBar");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","123","2133",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","0","3367","124","174",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("ImageViewer\r\n/ Sketch");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","123","3367",null,"174","0",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","123","602",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","2460","124","219",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","124","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_textAlign("center");
            obj.set_background("#d1d1d1");
            obj.set_border("1px solid #cccccc");
            obj.set_verticalAlign("middle");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","123","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Style");
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
            this.addChild(obj.name, obj);

            obj = new Static("Static03","123","2460",null,"219","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","123","824",null,"225","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","824","124","225",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Edit");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","72","1827",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","1827","124","110",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("MaskEdit");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","133","2481","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","133","2527","150","55",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("가나다라마바사\r\nABCDEFGHIJKLMNOP\r\n0123456789");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","133","880","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","291","880","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("가나다라");
            obj.set_enable("false");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","123","30",null,"185","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","30","124","185",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Button");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","133","846","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","293","846","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","450","880","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("가나다라");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","452","846","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("ReadOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","132","1855","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","289","1855","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","443","1855","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("ReadOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","133","1884","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("number");
            obj.set_value("1234567890");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","289","1884","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_value("1234");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","444","1884","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_value("1234");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","133","57","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","193","57","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","133","86","42","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","193","86","42","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("버튼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","123","214",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","214","124","280",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Calendar");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","133","231","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","293","231","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","133","260","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_value("20190101");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","293","260","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20190101");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","452","260","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20190101");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","452","231","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("ReadOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","133","627","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","293","627","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","452","627","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("ReadOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","133","657","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","0","602","124","110",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Combo");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","711","124","114",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Div");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","123","711",null,"114","0",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","133","729","591","74",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("sdfdsdfsfd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","14","570","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div는 일반적으로 Form을 로드 할때 사용한다.\r\n디자인 요소가 필요할 경우 Class로 지정해서 사용한다. ");
            obj.set_font("normal 12px/24px \"굴림\"");
            obj.set_color("#666666");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static32","0","1048","124","109",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("FileUpload");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","123","1048",null,"109","0",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","133","1073","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","864","240","128","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("MonthOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","864","270","168","181",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20190101");
            obj.set_type("monthonly");
            obj.set_cssclass(" Cal_MonthOnly");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","133","1103","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_buttontext("파일업로드");
            obj.set_itemheight("21");
            obj.set_scrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","133","394","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20190101");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","133","365","118","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Spin - Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","293","365","118","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Spin - Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","293","394","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20190101");
            obj.set_type("spin");
            obj.set_cssclass("CalSpinEdit");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar07","452","394","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20190101");
            obj.set_type("spin");
            obj.set_cssclass("CalSpinEdit");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","452","365","118","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Spin - ReadOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","293","657","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_enable("false");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","452","657","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_readonly("true");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","123","493",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","0","493","124","110",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("CheckBox");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","133","548","92","23",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("체크박스");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","133","528","118","14",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","235","548","92","23",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","235","528","118","14",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Selected");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","342","548","92","23",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("체크박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","342","528","118","14",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","452","548","92","23",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("체크박스");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","452","528","118","14",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("Disabled/Selected");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01","403","1103","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_itemheight("21");
            obj.set_buttontext("파일업로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","123","2351",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","133","2367","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","293","2367","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","452","2367","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("ReadOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","0","2351","124","110",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("Spin");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","133","2407","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_displaycomma("true");
            obj.set_value("9");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","293","2406","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_enable("false");
            obj.set_displaycomma("false");
            obj.set_value("9");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","452","2406","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_displaycomma("true");
            obj.set_value("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","0","1156","124","149",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("GroupBox");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","123","1156",null,"149","0",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","133","1181","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","133","1211","127","57",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("그룹박스");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","293","1211","127","57",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("그룹박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","123","1636",null,"192","0",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","133","1642","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","0","1636","124","192",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("ListBox");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","133","1682","127","111",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_innerdataset("ds_listBox");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("13");
            obj.set_scrollbardecbuttonsize("13");
            obj.set_scrollbarincbuttonsize("13");
            obj.set_enable("true");
            obj.set_text("가나다라");
            obj.set_value("003");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","123","2956",null,"148","0",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","133","2971","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","289","2971","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","452","2971","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("ReadOnly");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","0","2955","124","149",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("TextArea");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","133","3011","113","62",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_value("TextArea");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","290","3011","113","62",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_value("TextArea");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","452","3011","113","62",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_value("TextArea");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","133","3377","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","133","3407","127","106",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_image("URL(\"theme://images/img_WF_defaultImgN.png\")");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","293","3407","127","106",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_enable("false");
            obj.set_image("URL(\"theme://images/img_WF_defaultImgN.png\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","123","2242",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","0","2242","124","110",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("Radio");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","133","2149","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","429","2149","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar02","133","2190","150","14",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("70");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar03","429","2190","150","14",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_smooth("true");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","133","2282","118","12",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","234","2281","118","14",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("Selected");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","337","2282","118","12",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static84","451","2281","118","14",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("Disabled/Selected");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","133","2301","73","23",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","234","2301","65","23",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_columncount("1");
            obj.set_rowcount("1");
            obj.set_text("선택 01");
            obj.set_value("001");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","337","2301","62","23",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_columncount("1");
            obj.set_rowcount("1");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio03","451","2301","63","23",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_columncount("1");
            obj.set_rowcount("1");
            obj.set_enable("false");
            obj.set_text("선택 01");
            obj.set_value("001");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","0","1304","124","333",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("Grid");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","123","1304",null,"333","0",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","133","1320",null,"303","427",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"41\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" autosizecol=\"none\" controlautosizingtype=\"none\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\" edittype=\"none\"/><Cell col=\"2\" text=\"Column01\"/><Cell col=\"3\" text=\"Column02\"/><Cell col=\"4\" text=\"Column03\"/><Cell col=\"5\" text=\"Column04\"/><Cell col=\"6\" text=\"Column05\" cssclass=\"grd_MWF_headColEditBL\"/><Cell col=\"7\" text=\"Column06\"/><Cell col=\"8\" text=\"버튼\" border=\"0px none,0px none,1px solid #c9c9c9,0px none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Check\" controlautosizingtype=\"none\"/><Cell col=\"1\" text=\"bind:순번\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Column01\" displaytype=\"editcontrol\" edittype=\"text\" textareascrolltype=\"vertical\"/><Cell col=\"3\" text=\"bind:Column02\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_listBox\" combodatacol=\"data\" combocodecol=\"code\" combotype=\"dropdown\" combodisplayrowcount=\"5\" comboscrollbarsize=\"10\"/><Cell col=\"4\" text=\"bind:Column03\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" autosizecol=\"default\" edittype=\"date\" calendartype=\"normal\" calendarusetrailingday=\"true\"/><Cell col=\"5\" text=\"bind:Column04\" displaytype=\"editcontrol\" edittype=\"normal\" expandshow=\"show\" expandimage=\"URL(&quot;theme://images/grd_WF_expandBtn.png&quot;)\" expandsize=\"21\"/><Cell col=\"6\" text=\"bind:Column05\" displaytype=\"text\" edittype=\"text\" padding=\"2px 2px 2px 2px\" locale=\"ar_JO\"/><Cell col=\"7\" text=\"bind:Column06\" displaytype=\"number\" edittype=\"none\" cssclass=\"grd_WF_BodyCellPadding\"/><Cell col=\"8\" text=\"bind:Column07\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\" displaytype=\"text\"/><Cell col=\"7\" colspan=\"2\" displaytype=\"number\" text=\"1234567890\" border=\"1px solid #a1d9e9, 0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","293","3376","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","293","1181","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","0","1936","124","198",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("Menu");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","0","3103","124","265",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("Tree Grid");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","401","1075","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","319","86","42","21",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_SubAction");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","319","57","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("(보조버튼)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","413","86","42","21",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_PopupAction");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","809","91","37","18",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","809","57","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("(연관메뉴 버튼)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","515","74","241","55",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("기본 및 보조 버튼 넓이값\r\n최소 42px (두글자) 부터 한글자당 \'12px\'씩 증가\r\n");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","943","74","241","55",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("연관메뉴 버튼 넓이값\r\n최소 37px (두글자) 부터 한글자당 \'10px\'씩 증가\r\n");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","413","57","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("(팝업버튼)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","133","317","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_value("20190101");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","133","289","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","133","424","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08","133","452","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20190101");
            obj.set_type("spin");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","-928","582","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","-928","552","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","-928","805","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","-928","771","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","133","977","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","240","978","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","133","946","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("(Search Edit)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","292","977","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","399","978","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","450","977","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","557","978","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","-928","902","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("com_WF_Essential, edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","Edit08:-20","903","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static94","980","951","288","55",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("참고 : Search Edit는 Edit컴퍼넌트 와 Button컴퍼넌트로\r\n각각 구성되어 있습니다. 상태(disabled등등) 또한\r\n개별 처리되어야 합니다.");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_fittocontents("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","-901","1809","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_type("number");
            obj.set_value("1234");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","-901","1780","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","-901","2332","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_cssclass("com_WF_Essential");
            obj.set_value("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static95","-901","2292","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","142","2016","1008","64",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_background("#006cb7");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","157","2016","89","64",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("1뎁스 메뉴01");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","Button08:12","2016","54","64",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("메뉴02");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static98","142","1968","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("(버튼컴퍼넌트 형태)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","Button10:12","2016","54","64",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("메뉴03");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_fittocontents("width");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","-901","2660","113","62",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_value("TextArea");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","-901","2620","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","-928","3010","113","62",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_value("TextArea");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static100","-928","2970","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","-928","1809","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_type("number");
            obj.set_value("1234");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static101","-928","1780","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin04","-928","2332","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_cssclass("com_WF_Essential");
            obj.set_value("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static102","-928","2292","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","812","657","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static103","812","627","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","811","880","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Static("Static104","811","846","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","811","977","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_value("가나다라");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding, com_WF_Essential");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","918","978","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","790","1882","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_type("number");
            obj.set_value("1234");
            obj.set_cssclass("com_WF_Essential");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static105","790","1853","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin05","788","2407","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_cssclass("com_WF_Essential");
            obj.set_displaycomma("true");
            obj.set_value("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static106","788","2367","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static107","0","2678","124","279",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("Tab");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_textAlign("center");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#f7f7f7");
            obj.set_font("12px/normal verdana");
            this.addChild(obj.name, obj);

            obj = new Static("Static108","123","2678",null,"279","0",null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","132","2749","671","190",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_tabindex("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("탭타이틀 01");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("탭타이틀 02");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("탭타이틀 03");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("탭타이틀 04");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("탭타이틀 05");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Tab00);
            obj.set_text("탭메뉴타이틀..");
            obj.set_tooltiptext("탭메뉴타이틀입니다.");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static109","133","2708","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("Normal");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static110","319","137","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("(셔틀버튼)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","319","166","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconL");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","346","166","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconR");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","372","166","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconD");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","398","166","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconU");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","438","167","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","465","167","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","491","167","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button20","517","167","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_cssclass("btn_WF_ShuttleBox, btn_WF_ShuttleIconU");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09","608","260","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_displaynulltext("선택하세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static111","608","231","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("NullText");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar10","608","394","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            obj.set_displaynulltext("선택하세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static112","608","365","118","24",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("NullText");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","608","657","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_displaynulltext("선택하세요");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static113","608","627","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_text("NullText");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","608","977","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_displaynulltext("입력하세요");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("Button21","715","978","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","608","880","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_displaynulltext("입력하세요");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Static("Static114","608","846","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_text("NullText");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","608","1884","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_type("number");
            obj.set_format("###,###");
            obj.set_displaynulltext("입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static115","608","1855","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_text("NullText");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin06","608","2407","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_displaycomma("true");
            obj.set_displaynulltext("선택하세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static116","608","2367","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_text("NullText");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05","608","3011","113","62",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_displaynulltext("입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("Static117","608","2971","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_text("NullText");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static118","312","2527","150","55",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("가나다라마바사\r\nABCDEFGHIJKLMNOP\r\n0123456789");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static119","312","2481","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static120","491","2481","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("(타이틀)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static121","513","2526","58","14",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("대타이틀");
            obj.set_cssclass("sta_WF_Btitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button22","493","2525",null,"16","Static121:6",null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_cssclass("btn_WF_Btitle");
            obj.set_defaultbutton("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static122","491","2570","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("중타이틀");
            obj.set_cssclass("sta_WF_Mtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static123","491","2616","93","12",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("소타이틀");
            obj.set_cssclass("sta_WF_Stitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static124","704","2481","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_text("(라벨)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static125","705","2570","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_text("조회필드라벨");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static126","705","2527","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("필드라벨");
            obj.set_cssclass("sta_WF_FieldLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea06","785","3011","113","62",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_value("TextArea");
            obj.set_cssclass("com_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static127","785","2971","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("(필수입력)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","132","3125","208","224",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_binddataset("ds_grid_tree");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj.set_cssclass("grd_WF_treeGrd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"176\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:captiion\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static128","705","2616","93","13",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("(123,456건)");
            obj.set_cssclass("sta_WF_ResultLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static129","327","1641","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("Disabled");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","327","1681","127","111",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_innerdataset("ds_listBox");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("13");
            obj.set_scrollbardecbuttonsize("13");
            obj.set_scrollbarincbuttonsize("13");
            obj.set_enable("false");
            obj.set_text("가나다라");
            obj.set_value("003");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button23","809","133","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_cssclass("btn_WF_Inc");
            this.addChild(obj.name, obj);

            obj = new Button("Button24","826","133","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_cssclass("btn_WF_Dec");
            this.addChild(obj.name, obj);

            obj = new Button("Button25","866","92","37","18",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Associated");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","866","133","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_cssclass("btn_WF_Inc");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","883","133","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_cssclass("btn_WF_Dec");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static130","578","135","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_text("(조회영역)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Button("Button28",null,"167","40",null,"660","3608",null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button29",null,"167","40",null,"589","3608",null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","866","1320","385","303",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid_rowhead");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"98\"/><Column size=\"68\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"컬럼1\"/><Cell col=\"1\" colspan=\"2\" text=\"컬럼3\"/><Cell col=\"3\" rowspan=\"2\" text=\"컬럼4\"/><Cell row=\"1\" text=\"컬럼2\"/><Cell row=\"1\" col=\"1\" text=\"컬럼3-1/컬럼3-2\"/><Cell row=\"1\" col=\"2\" text=\"컬럼3-3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column01\" displaytype=\"text\"/><Cell col=\"1\" rowspan=\"2\"><Cell text=\"bind:Column03\" displaytype=\"text\"/><Cell row=\"1\" text=\"bind:Column04\" displaytype=\"text\"/></Cell><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"bind:Column05\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:Column06\" displaytype=\"text\"/><Cell row=\"1\" text=\"bind:Column02\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button30","809","168","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_cssclass("btn_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Button("Button31","867","168","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_cssclass("btn_WF_Help");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static131","871","2481","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_text("(Location)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_color("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Static("Static132","874","2523","188","13",null,null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_text("HOME > 대메뉴 > 중메뉴 > 소메뉴");
            obj.set_cssclass("sta_WF_Location");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button32","681","2033","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("237");
            obj.set_cssclass("btn_TF_MenuLspin");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button33","715","2033","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("238");
            obj.set_cssclass("btn_TF_MenuRspin");
            this.addChild(obj.name, obj);

            obj = new Button("Button34","922","2033","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("239");
            obj.set_cssclass("btn_TF_LogOut");
            this.addChild(obj.name, obj);

            obj = new Button("Button35","955","2033","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("240");
            obj.set_cssclass("btn_TF_LogOut");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button36","1025","2033","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("241");
            obj.set_cssclass("btn_TF_Setting");
            this.addChild(obj.name, obj);

            obj = new Button("Button37","1058","2033","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("242");
            obj.set_cssclass("btn_TF_Setting");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button38","819","2031","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("243");
            obj.set_cssclass("btn_TF_LeftOpen");
            this.addChild(obj.name, obj);

            obj = new Button("Button39","855","2031","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("244");
            obj.set_cssclass("btn_TF_LeftOpen");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button40","434","2016","89","64",null,null,null,null,null,null,this);
            obj.set_taborder("245");
            obj.set_text("1뎁스 메뉴01");
            obj.set_cssclass("btn_TF_MenuPix");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static96","434","1969","118","46",null,null,null,null,null,null,this);
            obj.set_taborder("246");
            obj.set_text("(선택메뉴 고정  )");
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
            obj = new Layout("default","",1280,3796,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompGuide.xfdl", function() {

        this.Static10_onclick = function(obj,e)
        {

        };

        this.Static02_onclick = function(obj,e)
        {

        };

        this.Static41_onclick = function(obj,e)
        {

        };

        this.Static20_onclick = function(obj,e)
        {

        };

        this.Div00_Static00_onclick = function(obj,e)
        {

        };

        this.Static64_onclick = function(obj,e)
        {

        };

        this.Static46_onclick = function(obj,e)
        {

        };

        this.Menu00_onmenuclick = function(obj,e)
        {

        };

        this.FileUpload00_onitemchanged = function(obj,e)
        {

        };

        this.Combo00_onitemchanged = function(obj,e)
        {

        };

        this.Radio00_onitemchanged = function(obj,e)
        {

        };

        this.Edit04_onchanged = function(obj,e)
        {

        };

        this.Edit02_onchanged = function(obj,e)
        {

        };

        this.Tab00_onchanged = function(obj,e)
        {

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static35.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static56.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static79.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static80.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static62.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static71.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static26.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static46_onclick,this);
            this.Edit02.addEventHandler("onchanged",this.Edit02_onchanged,this);
            this.Static12.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static14.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static15.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static16.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static22.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static23.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static24.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static27.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static28.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static29.addEventHandler("onclick",this.Static46_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Static25.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static30.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static31.addEventHandler("onclick",this.Static46_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Static32.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static33.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static36.addEventHandler("onclick",this.Static46_onclick,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.Static37.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static38.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static39.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static40.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static41.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static42.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static43.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static44.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static45.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static46.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static47.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static48.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static50.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static51.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static52.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static53.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static60.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static61.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static64.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static65.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static66.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static67.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static68.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static69.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static63.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static72.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static76.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static77.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static78.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static81.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static82.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static83.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static84.addEventHandler("onclick",this.Static46_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Static73.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static74.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static55.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static54.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static57.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static70.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static58.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static59.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static75.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static85.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static86.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static87.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static88.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static89.addEventHandler("onclick",this.Static46_onclick,this);
            this.Combo03.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Static91.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static90.addEventHandler("onclick",this.Static46_onclick,this);
            this.Edit04.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Static92.addEventHandler("onclick",this.Static46_onclick,this);
            this.Edit05.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Edit06.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Edit08.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Static94.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static93.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static95.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static98.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static99.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static100.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static101.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static102.addEventHandler("onclick",this.Static46_onclick,this);
            this.Combo04.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Static103.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static104.addEventHandler("onclick",this.Static46_onclick,this);
            this.Edit09.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Static105.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static106.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static107.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static108.addEventHandler("onclick",this.Static46_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.addEventHandler("onmouseenter",this.Tab00_onmouseup,this);
            this.Static109.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static110.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static111.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static112.addEventHandler("onclick",this.Static46_onclick,this);
            this.Combo05.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Static113.addEventHandler("onclick",this.Static46_onclick,this);
            this.Edit10.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Static114.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static115.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static116.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static117.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static118.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static119.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static120.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static124.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static127.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static129.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static130.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static131.addEventHandler("onclick",this.Static46_onclick,this);
            this.Static96.addEventHandler("onclick",this.Static46_onclick,this);
        };

        this.loadIncludeScript("CompGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
