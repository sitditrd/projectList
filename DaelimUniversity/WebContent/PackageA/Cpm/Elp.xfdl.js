(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Elp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_LECTURE_GUIDE", this);
            obj._setContents("<ColumnInfo><Column id=\"GUIDE_KEY\" type=\"string\" size=\"100\"/><Column id=\"G_GOAL\" type=\"string\" size=\"2000\"/><Column id=\"G_PROCESS\" type=\"string\" size=\"2000\"/><Column id=\"G_EVALUATE\" type=\"string\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LECTURE_CONSULTANT", this);
            obj._setContents("<ColumnInfo><Column id=\"CONSULTANT_KEY\" type=\"string\" size=\"100\"/><Column id=\"C_DATE\" type=\"string\" size=\"10\"/><Column id=\"C_START_DATE\" type=\"string\" size=\"20\"/><Column id=\"C_END_DATE\" type=\"string\" size=\"20\"/><Column id=\"C_REMARK\" type=\"string\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LECTURE_BOOK", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_KEY\" type=\"string\" size=\"100\"/><Column id=\"B_TYPE\" type=\"bigdecimal\" size=\"39\"/><Column id=\"B_NAME\" type=\"string\" size=\"500\"/><Column id=\"B_AUTHOR\" type=\"string\" size=\"100\"/><Column id=\"B_PUBLISHER\" type=\"string\" size=\"100\"/><Column id=\"B_PUBLISH_YEAR\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">부교재</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">주교재</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CAPTION\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LECTURE_PLAN", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_KEY\" type=\"string\" size=\"100\"/><Column id=\"P_WEEK\" type=\"bigdecimal\" size=\"39\"/><Column id=\"P_CONTENT\" type=\"string\" size=\"2000\"/><Column id=\"P_APPARATUS\" type=\"string\" size=\"2000\"/><Column id=\"P_HOMEWORK\" type=\"string\" size=\"2000\"/><Column id=\"P_MATERIAL\" type=\"string\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Subject", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">과목을 선택하세요.</Col></Row><Row><Col id=\"CODE\">060320</Col><Col id=\"CAPTION\">060320-건축재료</Col></Row><Row><Col id=\"CODE\">312650</Col><Col id=\"CAPTION\">312650-전산회계실무</Col></Row><Row><Col id=\"CODE\">400160</Col><Col id=\"CAPTION\">400160-운영체제</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_SearchType","8","12",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_SearchType",this.tab_SearchType);
            obj.set_text("검색조건");
            this.tab_SearchType.addChild(obj.name, obj);

            obj = new Div("div_Bottom","4","52",null,null,"4","4",null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Div("Div04","0","332",null,"39","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.addChild(obj.name, obj);

            obj = new Static("Static00","0","8",null,"24","140",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("주별 강의계획");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_CyberInput",null,"8","136","24","2",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div04.form);
            obj.set_taborder("1");
            obj.set_text("사이버강의입력");
            obj.set_cssclass("btn_WF_basic07");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div04.addChild(obj.name, obj);

            obj = new Div("Div05","0","371",null,null,"0","10",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("beige");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div05.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_LECTURE_PLAN");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"500\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"주\"/><Cell col=\"1\" text=\"강의내용 및 방법\"/><Cell col=\"2\" text=\"기자재\"/><Cell col=\"3\" text=\"과제물\"/><Cell col=\"4\" text=\"학습자료\"/></Band><Band id=\"body\"><Cell text=\"bind:P_WEEK\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:P_CONTENT\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:P_APPARATUS\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:P_HOMEWORK\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:P_MATERIAL\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div05.addChild(obj.name, obj);

            obj = new Div("Div06","0","20",null,"152","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.addChild(obj.name, obj);

            obj = new Div("Div01",null,"0","49.6%",null,"0","0",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","1","8","81","135",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("교과목\r\n상담\r\n시간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label04");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","81","8",null,"135","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div01.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_LECTURE_CONSULTANT");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요일\"/><Cell col=\"1\" text=\"시작시간\"/><Cell col=\"2\" text=\"종료시간\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:C_DATE\"/><Cell col=\"1\" text=\"bind:C_START_DATE\"/><Cell col=\"2\" text=\"bind:C_END_DATE\"/><Cell col=\"3\" text=\"bind:C_REMARK\"/></Band></Format></Formats>");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","49.63%",null,null,"0",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","88","135",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("강의\r\n목표");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label04");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","87","8",null,"135","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div00.form);
            obj.set_taborder("1");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","178",null,"152","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.addChild(obj.name, obj);

            obj = new Div("Div03",null,"0","49.6%",null,"0","0",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","48.98%",null,null,"0",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","81","0",null,null,"0","1",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div00.form);
            obj.set_taborder("0");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","1","0","81",null,null,"1",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("강의\r\n진행\r\n방식");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label04");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01",null,"0","49.39%",null,"0","0",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","81","0",null,null,"0","1",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div01.form);
            obj.set_taborder("0");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","1","0","81",null,null,"1",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("평가\r\n방법");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label04");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","49.63%",null,null,"0",null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","88","151",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("강의\r\n교재");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label04");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","87","0",null,"151","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div02.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_LECTURE_BOOK");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"교재명\"/><Cell col=\"3\" text=\"저자명\"/><Cell col=\"4\" text=\"출판사\"/><Cell col=\"5\" text=\"출판년도\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:B_TYPE\" displaytype=\"combotext\" combodataset=\"ds_CD_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"2\" text=\"bind:B_NAME\"/><Cell col=\"3\" text=\"bind:B_AUTHOR\"/><Cell col=\"4\" text=\"bind:B_PUBLISHER\"/><Cell col=\"5\" text=\"bind:B_PUBLISH_YEAR\"/></Band></Format></Formats>");
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Div("div_Top","4","4",null,"64","4",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_SchoolYear","0","9","95","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("0");
            obj.set_text("학년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Static("stc_Semester","192","9","95","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("2");
            obj.set_text("학기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Static("stc_EmpNo",null,"9","95","22","321",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("4");
            obj.set_text("교직원번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Static("stc_EmpName",null,"9","95","22","118",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Button("btn_ComSearch",null,"9","23","22","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("btn_WF_search");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Combo("cmb_Subject",null,"35","416","22","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_Subject");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("과목을 선택하세요.");
            obj.set_value("0");
            obj.set_index("0");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Edit("edt_SchoolYear","94","9","95","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("1");
            obj.set_value("2018");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_cssclass("edit_WF_edit01");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Combo("cmb_SemesterData2","286","9","95","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("3");
            var tab_SearchType_tpg_SearchType_form_div_Top_form_cmb_SemesterData2_innerdataset = new nexacro.NormalDataset("tab_SearchType_tpg_SearchType_form_div_Top_form_cmb_SemesterData2_innerdataset", obj);
            tab_SearchType_tpg_SearchType_form_div_Top_form_cmb_SemesterData2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(tab_SearchType_tpg_SearchType_form_div_Top_form_cmb_SemesterData2_innerdataset);
            obj.set_text("2학기");
            obj.set_value("0");
            obj.set_index("0");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Edit("edt_EmpNo",null,"9","106","22","216",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Edit("edt_EmpName",null,"9","93","22","26",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","72","24","421",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Button("btn_New",null,"8","72","24","347",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","72","24","273",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Print",null,"8","72","24","125",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"8","72","24","199",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PreCopy",null,"8","112","24","11",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전년 자료 복사");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,740,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div06.form.Div00.form.TextArea00","value","ds_LECTURE_GUIDE","G_GOAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div00.form.TextArea00","value","ds_LECTURE_GUIDE","G_PROCESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div00.form.Div03.form.Div01.form.TextArea01","value","ds_LECTURE_GUIDE","G_EVALUATE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Elp.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Elp.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Elp.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 강의계획서입력 ()
        * 03. 화면설명 :
        * 04. 작성일   : 2019.02.07
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnValidation = function()
        {
        	var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;
        	var strMsg = "";

        	if(this.gfnIsEmpty(Form.edt_EmpNo.value))
        	{
        		strMsg = "교직원번호,";
        	}

        	if(this.gfnIsEmpty(Form.edt_EmpName.value))
        	{
        		strMsg += "성명,";
        	}

        	if(Form.cmb_Subject.value == 0)
        	{
        		strMsg += "과목";
        	}

        	return strMsg;
        };

        this.fnSetCmb = function(CODE)
        {
        	this.ds_Temp.clearData();

        	var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;

        	var fRow = this.ds_Subject.findRow("CODE", CODE);

        	var nRow = this.ds_Temp.addRow();
        	this.ds_Temp.setColumn(nRow, "CODE", 0);
        	this.ds_Temp.setColumn(nRow, "CAPTION", "과목을 선택하세요.");

        	nRow = this.ds_Temp.addRow();
        	this.ds_Temp.setColumn(nRow, "CODE", this.ds_Subject.getColumn(fRow, "CODE"));
        	this.ds_Temp.setColumn(nRow, "CAPTION", this.ds_Subject.getColumn(fRow, "CAPTION"));

        	Form.cmb_Subject.set_innerdataset("ds_Temp");
        	Form.cmb_Subject.set_value("0");
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function(lectureKey)
        {
        	this.transaction
        	(
        		"Select"
        	   ,"svc::DaelimUniversity/Service/select.jsp?dsName=" + "LECTURE_GUIDE" + "&lectureKey=" + lectureKey
        	   ,""
        	   ,"ds_LECTURE_GUIDE=dsOutput ds_LECTURE_CONSULTANT=dsOutput2 ds_LECTURE_BOOK=dsOutput3 ds_LECTURE_PLAN=dsOutput4"
        	   ,""
        	   ,"fn_callback"
        	);
        };

        this.fn_callback = function(svcId, nErrorCode, sErrMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(svcId + ":" + sErrMsg); //실패시 sErrMsg를 띄운다.
        	}
        	else
        	{
        		if(svcId == "Select")
        		{

        		}
        	}
        }

        //Tc에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "TeacherCheckMM" :
        			var ds = new Dataset();
        			ds.loadXML(popupArg);

        			var form = this.tab_SearchType.tpg_SearchType.form;

        			form.div_Top.form.edt_EmpNo.set_value(ds.getColumn(0, "EMP_NO"));
        			form.div_Top.form.edt_EmpName.set_value(ds.getColumn(0, "EMP_NAME"));

        			//박창민일 경우 건축재료 과목명만 보이도록 처리
        			if(ds.getColumn(0, "EMP_NO") == "2007553")
        			{
        				this.fnSetCmb("060320");
        			}
        			//백근택일 경우 전산회계실무 과목명만 보이도록 처리
        			else if(ds.getColumn(0, "EMP_NO") == "2018024")
        			{
        				this.fnSetCmb("312650");
        			}
        			//나정호일 경우 운영체제 과목명만 보이도록 처리
        			else if(ds.getColumn(0, "EMP_NO") == "2018519")
        			{
        				this.fnSetCmb("400160");
        			}
        			break;
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :
        			var strMsg = this.fnValidation();

        			if(this.gfnIsEmpty(strMsg))
        			{
        				this.fnSearch(this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value);
        			}
        			else
        			{
        				if(strMsg.charAt(strMsg.length-1) == ',')
        				{
        					strMsg = strMsg.substr(0, strMsg.length-1);
        				}

        				alert(strMsg + "을 입력하세요");
        			}
        			break;
        		case "btn_New" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_Save" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_Delete" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_Print" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_PreCopy" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_CyberInput" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_ComSearch" :
        			var sArgument = {

        			};
        			this.commUtil.popup(this, "TeacherCheckMM", "Common::Tc.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			break;
        	}
        };

        //코드 수정 전(Multi Select 전)
        // /************************************************************************************************
        // * 01. 업무구분 :
        // * 02. 화면명   : 강의계획서입력 ()
        // * 03. 화면설명 :
        // * 04. 작성일   : 2019.02.07
        // * 05. 작성자   : 안주환
        // * 06. 수정이력 :
        // ***********************************************************************************************
        // *     수정일          이  름    사유
        // ***********************************************************************************************
        // *
        // ************************************************************************************************/
        //
        // /************************************************************************************************
        // * 공통 라이브러리 INCLUDE 영역
        // ************************************************************************************************/
        // include "Script::CommUtil.xjs";
        // include "Script::ext_CommEco.xjs";
        //
        // /************************************************************************************************
        // * 전역 변수 영역
        // ************************************************************************************************/
        //
        // /************************************************************************************************
        // * FORM 영역
        // ************************************************************************************************/
        //
        // /************************************************************************************************
        // * FORM 공통 FUNCTION 영역
        // ************************************************************************************************/
        // this.fnValidation = function()
        // {
        // 	var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;
        // 	var strMsg = "";
        //
        // 	if(this.gfnIsEmpty(Form.edt_EmpNo.value))
        // 	{
        // 		strMsg = "교직원번호,";
        // 	}
        //
        // 	if(this.gfnIsEmpty(Form.edt_EmpName.value))
        // 	{
        // 		strMsg += "성명,";
        // 	}
        //
        // 	if(Form.cmb_Subject.value == 0)
        // 	{
        // 		strMsg += "과목";
        // 	}
        //
        // 	return strMsg;
        // };
        //
        // this.fnSetCmb = function(CODE)
        // {
        // 	this.ds_Temp.clearData();
        //
        // 	var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;
        //
        // 	var fRow = this.ds_Subject.findRow("CODE", CODE);
        //
        // 	var nRow = this.ds_Temp.addRow();
        // 	this.ds_Temp.setColumn(nRow, "CODE", 0);
        // 	this.ds_Temp.setColumn(nRow, "CAPTION", "과목을 선택하세요.");
        //
        // 	nRow = this.ds_Temp.addRow();
        // 	this.ds_Temp.setColumn(nRow, "CODE", this.ds_Subject.getColumn(fRow, "CODE"));
        // 	this.ds_Temp.setColumn(nRow, "CAPTION", this.ds_Subject.getColumn(fRow, "CAPTION"));
        //
        // 	Form.cmb_Subject.set_innerdataset("ds_Temp");
        // 	Form.cmb_Subject.set_value("0");
        // };
        //
        // /************************************************************************************************
        // * TRANSACTION 및 추가 FUNCTION 영역
        // ************************************************************************************************/
        // this.fnSearch = function(svcId, dsName, dsOutput, lectureKey)
        // {
        // 	this.transaction
        // 	(
        // 		svcId
        // 	   ,"svc::DaelimUniversity/Service/select.jsp?dsName=" + dsName + "&lectureKey=" + lectureKey
        // 	   ,""
        // 	   ,dsOutput + "=dsOutput"
        // 	   ,""
        // 	   ,"fn_callback"
        // 	   ,true //동기, 비동기 설정
        // 	);
        // };
        //
        // this.fn_callback = function(svcId, nErrorCode, sErrMsg)
        // {
        // 	if(nErrorCode < 0)
        // 	{
        // 		this.alert(svcId + ":" + sErrMsg); //실패시 sErrMsg를 띄운다.
        // 	}
        // 	else
        // 	{
        // 		var lectureKey = this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value;
        //
        // 		if(svcId == "LECTURE_GUIDE")
        // 		{
        // 			this.fnSearch("LECTURE_CONSULTANT", "LECTURE_CONSULTANT", "ds_LECTURE_CONSULTANT", lectureKey);
        // 		}
        // 		else if(svcId == "LECTURE_CONSULTANT")
        // 		{
        // 			this.fnSearch("LECTURE_BOOK", "LECTURE_BOOK", "ds_LECTURE_BOOK", lectureKey);
        // 		}
        // 		else if(svcId == "LECTURE_BOOK")
        // 		{
        // 			this.fnSearch("LECTURE_PLAN", "LECTURE_PLAN", "ds_LECTURE_PLAN", lectureKey);
        // 		}
        // 		else if(svcId == "LECTURE_PLAN")
        // 		{
        //
        // 		}
        // 	}
        // }
        //
        // //Tc에서 정보 받은것을 가공할 때 사용.
        // this.fnPopupCallBack = function (popupId, popupArg)
        // {
        // 	popupArg = this.commUtil.popupReturn();
        //
        // 	switch(popupId)
        // 	{
        // 		case "TeacherCheckMM" :
        // 			var ds = new Dataset();
        // 			ds.loadXML(popupArg);
        //
        // 			var form = this.tab_SearchType.tpg_SearchType.form;
        //
        // 			form.div_Top.form.edt_EmpNo.set_value(ds.getColumn(0, "EMP_NO"));
        // 			form.div_Top.form.edt_EmpName.set_value(ds.getColumn(0, "EMP_NAME"));
        //
        // 			//박창민일 경우 건축재료 과목명만 보이도록 처리
        // 			if(ds.getColumn(0, "EMP_NO") == "2007553")
        // 			{
        // 				this.fnSetCmb("060320");
        // 			}
        // 			//백근택일 경우 전산회계실무 과목명만 보이도록 처리
        // 			else if(ds.getColumn(0, "EMP_NO") == "2018024")
        // 			{
        // 				this.fnSetCmb("312650");
        // 			}
        // 			//나정호일 경우 운영체제 과목명만 보이도록 처리
        // 			else if(ds.getColumn(0, "EMP_NO") == "2018519")
        // 			{
        // 				this.fnSetCmb("400160");
        // 			}
        // 			break;
        // 	}
        // }
        //
        // /************************************************************************************************
        // * 각 COMPONENT 별 EVENT 영역
        // ************************************************************************************************/
        // this.comm_Click = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	switch(obj.name)
        // 	{
        // 		case "btn_Search" :
        // 			var strMsg = this.fnValidation();
        //
        // 			if(this.gfnIsEmpty(strMsg))
        // 			{
        // 				this.fnSearch("LECTURE_GUIDE", "LECTURE_GUIDE", "ds_LECTURE_GUIDE", this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value);
        // 			}
        // 			else
        // 			{
        // 				if(strMsg.charAt(strMsg.length-1) == ',')
        // 				{
        // 					strMsg = strMsg.substr(0, strMsg.length-1);
        // 				}
        //
        // 				alert(strMsg + "을 입력하세요");
        // 			}
        // 			break;
        // 		case "btn_New" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_Save" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_Delete" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_Print" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_PreCopy" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_CyberInput" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_ComSearch" :
        // 			var sArgument = {
        //
        // 			};
        // 			this.commUtil.popup(this, "TeacherCheckMM", "Common::Tc.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        // 			break;
        // 	}
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.tab_SearchType.tpg_SearchType.form.div_Bottom.form.Div04.form.btn_CyberInput.addEventHandler("onclick",this.comm_Click,this);
            this.tab_SearchType.tpg_SearchType.form.div_Top.form.btn_ComSearch.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.btn_New.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Print.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
            this.btn_PreCopy.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("Elp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
