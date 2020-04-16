(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main_phone");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_newHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">최근접속 메뉴 01</Col><Col id=\"date\">01-01 13:20</Col></Row><Row><Col id=\"title\">최근접속 메뉴 02</Col><Col id=\"date\">01-01 13:18</Col></Row><Row><Col id=\"title\">최근접속 메뉴 03</Col><Col id=\"date\">01-01 13:10</Col></Row><Row><Col id=\"title\">최근접속 메뉴 04</Col><Col id=\"date\">01-01 13:05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notice", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">공지사항 01</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 02</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 03</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 04</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 05</Col><Col id=\"date\">2019-01-01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"val1\" type=\"FLOAT\" size=\"256\"/><Column id=\"val2\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">2019.1</Col><Col id=\"val1\">60</Col><Col id=\"val2\">50</Col></Row><Row><Col id=\"name\">2019.2</Col><Col id=\"val1\">70</Col><Col id=\"val2\">40</Col></Row><Row><Col id=\"name\">2019.3</Col><Col id=\"val1\">70</Col><Col id=\"val2\">60</Col></Row><Row><Col id=\"name\">2019.4</Col><Col id=\"val1\">80</Col><Col id=\"val2\">90</Col></Row><Row><Col id=\"name\">2019.5</Col><Col id=\"val1\">80</Col></Row><Row><Col id=\"name\">2019.6</Col><Col id=\"val1\">90</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top","0","0",null,"64","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            obj.set_background("url(\'theme://images/img_top_logo02.png\') no-repeat center center #e7590b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftMenu","9","15","34","34",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_TF_LeftOpen");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("Static00","0","276",null,"179","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MAIN_FieldBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","11","296","58","16",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("경영실적");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","77","295","65","18",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(단위 : 억)");
            obj.set_cssclass("sta_MAIN_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","70","333","96","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("2019 목표실적");
            obj.set_cssclass("sta_MAIN_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","69","346","143","64",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("99,900");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_MAIN_Goal");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","70","412","55","13",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전년대비");
            obj.set_cssclass("sta_MAIN_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","122","412","70","13",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("▼ 99.99%");
            obj.set_cssclass("sta_MAIN_DecText");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","465",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MAIN_FieldBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","68",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_MAIN_PointBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","11","493","58","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("수주실적");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","21","537",null,null,"21","21",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#F2F2F2");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","10","10",null,null,"11","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj.set_bargrouping("false");
            obj._setContents({
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"ticksize": "5",
            		"labelgap": "5",
            		"labelrotate": "-30"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "9pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"labelgap": "5",
            			"ticksize": "5"
            		}
            	],
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "rainfall",
            			"barvisible": "false",
            			"barsize": "75",
            			"itemtextcolor": "#16a185",
            			"itemtextfont": "normal bold 10pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:val1",
            			"itemtextposition": "inside start",
            			"itemtextvisible": "true",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1abd9c",
            			"barfillstyle": "#39b54a",
            			"linevisible": "true",
            			"linestyle": "1px solid #1abd9c",
            			"linefillstyle": "#1abd9c"
            		},
            		{
            			"id": "series1",
            			"titletext": "mean",
            			"barvisible": true,
            			"barsize": "20",
            			"itemtextcolor": "whitesmoke",
            			"itemtextfont": "normal bold 10pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:val2",
            			"itemtextposition": "inside middle",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1a85be",
            			"barfillstyle": "#006cb7",
            			"itemtextvisible": "true",
            			"baropacity": "0.7"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22",null,"493","16","16","143",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#006cb7");
            this.addChild(obj.name, obj);

            obj = new Static("Static23",null,"493","16","16","69",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#39b54a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26",null,"492","39","18","97",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("월계획");
            this.addChild(obj.name, obj);

            obj = new Static("Static27",null,"492","39","18","23",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("월실적");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01",null,"86","41","26","85.63%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_image("url(\'theme://images/img_MAIN_insa.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static36",null,"130","33","15","90.63%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("인사");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static37",null,"124","27","27","83.75%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("0");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new Static("Static38",null,"91","1","40","76.88%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02",null,"176","35","36","59.79%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_image("url(\'theme://images/img_MAIN_const.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40",null,"226","33","15","64.38%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("건설");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static39",null,"220","26","27","57.08%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("99");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03",null,"84","28","30","61.04%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_image("url(\'theme://images/img_MAIN_accou.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static41",null,"130","33","15","64.38%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("회계");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static42",null,"124","27","27","56.88%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("11");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04",null,"178","33","32","87.08%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_image("url(\'theme://images/img_MAIN_resou.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static44",null,"226","33","15","90.63%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("자원");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static45",null,"220","26","27","83.96%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("99");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer05",null,"86","34","26","34.58%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_image("url(\'theme://images/img_MAIN_field.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static46",null,"130","33","15","39.17%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("현장");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static47",null,"124","27","27","31.88%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("1");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new Static("Static49",null,"124","27","27","6.25%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("1");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new Static("Static50",null,"130","33","15","13.13%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("안전");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer06",null,"82","34","34","9.17%",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_image("url(\'theme://images/img_MAIN_Safe.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10",null,"91","1","40","24.79%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"91","1","40","50.83%",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"189","1","40","50.83%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new Static("Static11",null,"189","1","40","76.88%",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new Static("Static09",null,"346","165","64","44",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("99,900");
            obj.set_cssclass("sta_MAIN_Accu");
            obj.set_font("normal 30pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static12",null,"333","96","15","113",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("2019 누계실적");
            obj.set_cssclass("sta_MAIN_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13",null,"412","71","17","85",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("▲ 99.99%");
            obj.set_cssclass("sta_MAIN_IncText");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static14",null,"412","57","17","152",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("전년대비");
            obj.set_cssclass("sta_MAIN_Text");
            this.addChild(obj.name, obj);

            obj = new Div("div_lgn","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("div00");
            obj.set_url("frame::logIn.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","ScreenPhone",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::logIn.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_top.form.btn_leftMenu.addEventHandler("onclick",this.div_top_btn_leftMenu_onclick,this);
            this.Static50.addEventHandler("onclick",this.Static50_onclick,this);
        };

        this.loadIncludeScript("main_phone.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
