(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("Main Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_newHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">최근접속 메뉴 01</Col><Col id=\"date\">01-01 13:20</Col></Row><Row><Col id=\"title\">최근접속 메뉴 02</Col><Col id=\"date\">01-01 13:18</Col></Row><Row><Col id=\"title\">최근접속 메뉴 03</Col><Col id=\"date\">01-01 13:10</Col></Row><Row><Col id=\"title\">최근접속 메뉴 04</Col><Col id=\"date\">01-01 13:05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notice", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">공지사항 01</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 02</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 03</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 04</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">공지사항 05</Col><Col id=\"date\">2019-01-01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_news", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">보도자료 01</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">보도자료 02</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">보도자료 03</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">보도자료 04</Col><Col id=\"date\">2019-01-01</Col></Row><Row><Col id=\"title\">보도자료 05</Col><Col id=\"date\">2019-01-01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_faq", this);
            obj._setContents("<ColumnInfo><Column id=\"icotitle\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">시스템 사용시 로그인 방법</Col><Col id=\"date\">2019-01-01</Col><Col id=\"icotitle\">시스템</Col></Row><Row><Col id=\"title\">자주하는 문의 01</Col><Col id=\"date\">2019-01-01</Col><Col id=\"icotitle\">기타</Col></Row><Row><Col id=\"title\">자주하는 문의 02</Col><Col id=\"date\">2019-01-01</Col><Col id=\"icotitle\">업무</Col></Row><Row><Col id=\"title\">자주하는 문의 03</Col><Col id=\"date\">2019-01-01</Col><Col id=\"icotitle\">시스템</Col></Row><Row><Col id=\"title\">자주하는 문의 04</Col><Col id=\"date\">2019-01-01</Col><Col id=\"icotitle\">시스템</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"val1\" type=\"FLOAT\" size=\"256\"/><Column id=\"val2\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">2019.1</Col><Col id=\"val1\">60</Col><Col id=\"val2\">50</Col></Row><Row><Col id=\"name\">2019.2</Col><Col id=\"val1\">70</Col><Col id=\"val2\">40</Col></Row><Row><Col id=\"name\">2019.3</Col><Col id=\"val1\">70</Col><Col id=\"val2\">60</Col></Row><Row><Col id=\"name\">2019.4</Col><Col id=\"val1\">80</Col><Col id=\"val2\">90</Col></Row><Row><Col id=\"name\">2019.5</Col><Col id=\"val1\">80</Col></Row><Row><Col id=\"name\">2019.6</Col><Col id=\"val1\">90</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","1240","179",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MAIN_FieldBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","956","0","284","179",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MAIN_PointBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","31","30","58","16",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("경영실적");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","31","50","65","18",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(단위 : 억)");
            obj.set_cssclass("sta_MAIN_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","140","70","96","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("2019 목표실적");
            obj.set_cssclass("sta_MAIN_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","280","53","223","64",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("99,900");
            obj.set_cssclass("sta_MAIN_Goal");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","140","93","55","17",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전년대비");
            obj.set_cssclass("sta_MAIN_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","192","93","70","17",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("▼ 99.99%");
            obj.set_cssclass("sta_MAIN_DecText");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","711","53","224","64",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("99,900");
            obj.set_cssclass("sta_MAIN_Accu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","561","70","96","15",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2019 누계실적");
            obj.set_cssclass("sta_MAIN_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","561","93","56","17",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전년대비");
            obj.set_cssclass("sta_MAIN_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","614","93","70","17",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("▲ 99.99%");
            obj.set_cssclass("sta_MAIN_IncText");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","984","31","94","16",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("최근접속화면");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","985","62","226","100",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("grd_MAIN_ListGrid");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_newHistory");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj.set_autosizingtype("col");
            obj.set_selectscrollmode("select");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:title\" cssclass=\"grd_MAIN_NewTit\"/><Cell col=\"1\" text=\"bind:date\" textAlign=\"right\" cssclass=\"grd_MAIN_Date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","189","1240","342",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MAIN_FieldBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","956","189","284","342",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MAIN_PointBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","31","217","58","16",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("수주실적");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","31","261","750","240",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#F2F2F2");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","10","10",null,null,"10","10",null,null,null,null,this.Div00.form);
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

            obj = new Calendar("Calendar01","606","215","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_value("20190101");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","750","215","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_value("20190630");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","735","215","13","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","791","260","136","240",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_MAIN_FieldBg");
            obj.set_opacity("0.4");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","817","291","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#006cb7");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","817","321","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#39b54a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","817","349","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#113367");
            obj.set_borderRadius("10px 10PX 10PX 10PX");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","817","379","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("#f90371");
            obj.set_borderRadius("10px 10PX 10PX 10PX");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","840","290","39","18",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("월계획");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","840","320","39","18",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("월실적");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","840","348","50","18",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("누계계획");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","840","378","50","18",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("누계실적");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","541","407","240",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_MAIN_FieldBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","417","541","407","240",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_MAIN_FieldBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","834","541","407","240",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_MAIN_FieldBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","31","571","41","16",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("FAQ");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","447","571","68","16",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","864","571","68","16",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("보도자료");
            obj.set_cssclass("sta_MAIN_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","448","602","346","169",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("grd_MAIN_ListGrid");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_notice");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj.set_autosizingtype("col");
            obj.set_selectscrollmode("select");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:title\" cssclass=\"grd_MAIN_BoardTit\"/><Cell col=\"1\" text=\"bind:date\" textAlign=\"right\" cssclass=\"grd_MAIN_Date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","864","602","346","169",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("grd_MAIN_ListGrid");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_news");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj.set_autosizingtype("col");
            obj.set_selectscrollmode("select");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:title\" cssclass=\"grd_MAIN_BoardTit\"/><Cell col=\"1\" text=\"bind:date\" textAlign=\"right\" cssclass=\"grd_MAIN_Date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","361","572","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_MAIN_More");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","778","572","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_MAIN_More");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1195","572","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_MAIN_More");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","31","602","346","169",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("grd_MAIN_ListGrid");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_faq");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj.set_autosizingtype("col");
            obj.set_selectscrollmode("select");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\" band=\"left\"/><Column size=\"95\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" cssclass=\"grd_MAIN_FaqIcon\" text=\"bind:icotitle\"/><Cell col=\"1\" text=\"bind:title\" cssclass=\"grd_MAIN_FaqTit\"/><Cell col=\"2\" text=\"bind:date\" textAlign=\"right\" cssclass=\"grd_MAIN_Date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","1022","231","41","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_image("url(\'theme://images/img_MAIN_insa.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","1013","274","30","15",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("인사");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","1045","268","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("0");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","1098","250","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","1135","224","35","36",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_image("url(\'theme://images/img_MAIN_const.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","1124","273","30","15",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("건설");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","1156","267","26","27",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("99");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","1028","324","28","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_image("url(\'theme://images/img_MAIN_accou.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","1013","368","30","15",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("회계");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","1045","362","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("11");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","1098","344","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","1135","323","33","32",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_image("url(\'theme://images/img_MAIN_resou.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","1124","367","30","15",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("자원");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","1156","361","26","27",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("99");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer05","1028","416","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_image("url(\'theme://images/img_MAIN_field.png\')");
            obj.set_cssclass("img_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","1013","457","30","15",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("현장");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","1045","451","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("1");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","1098","433","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_background("#e7e8ea");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","885","215","42","21",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","1156","452","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("1");
            obj.set_cssclass("sta_MAIN_Rdisplay");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","1124","458","30","15",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("안전");
            obj.set_cssclass("sta_MAIN_Board");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer06","1139","410","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_image("url(\'theme://images/img_MAIN_Safe.png\')");
            obj.set_cssclass("img_TF_Bg");
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
            this.Static50.addEventHandler("onclick",this.Static50_onclick,this);
        };

        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
