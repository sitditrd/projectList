(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Subject", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">과목을 선택하세요.</Col></Row><Row><Col id=\"CODE\">060320</Col><Col id=\"CAPTION\">060320-건축재료</Col></Row><Row><Col id=\"CODE\">312650</Col><Col id=\"CAPTION\">312650-전산회계실무</Col></Row><Row><Col id=\"CODE\">400160</Col><Col id=\"CAPTION\">400160-운영체제</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_STUDENT_GRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"SUBJECT_KEY\" type=\"STRING\" size=\"100\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"100\"/><Column id=\"GRADE\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"ROOM\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"NUM\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"SEQUENCENUM\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"WORK_FLAG\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"JOB_FLAG\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"STUDY_FLAG\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"MID_GRADE\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"FIN_GRADE\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"HOM_GRADE\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"CUR_GRADE\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"CYBER_FLAG\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"TOTAL_GRADE\" type=\"BIGDECIMAL\" size=\"39\"/><Column id=\"RANK\" type=\"STRING\" size=\"10\"/><Column id=\"PANDF\" type=\"STRING\" size=\"10\"/><Column id=\"REJOIN_FLAG\" type=\"BIGDECIMAL\" size=\"39\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_WORK_FLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">퇴학</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">재학</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CAPTION\">휴학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_District", this);
            obj._setContents("<ColumnInfo><Column id=\"RANK\" type=\"string\" size=\"100\"/><Column id=\"STAND\" type=\"string\" size=\"100\"/><Column id=\"RATIO\" type=\"bigdecimal\" size=\"39\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Rank_Partition", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"bigdecimal\" size=\"39\"/><Column id=\"SUBJECT_KEY\" type=\"string\" size=\"100\"/><Column id=\"RANK\" type=\"string\" size=\"10\"/><Column id=\"NUM\" type=\"bigdecimal\" size=\"39\"/><Column id=\"RATIO\" type=\"bigdecimal\" size=\"39\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_SearchType","8","12",null,"102","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_SearchType",this.tab_SearchType);
            obj.set_text("검색조건");
            this.tab_SearchType.addChild(obj.name, obj);

            obj = new Div("div_Top","4","4",null,"68","4",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
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

            obj = new Static("stc_EmpName",null,"9","95","22","120",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Button("btn_ComSearch",null,"9","22","22","0",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
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
            obj.set_cssclass("edit_WF_edit01");
            obj.set_readonly("true");
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

            obj = new Edit("edt_EmpNo",null,"9","104","22","218",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Edit("edt_EmpName",null,"9","96","22","25",null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form.div_Top.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.form.div_Top.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","72","24","158",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","72","24","84",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic07");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Print",null,"8","72","24","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01",null,"604","215",null,"8","23",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_District");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"69\"/><Column size=\"69\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"등급\"/><Cell col=\"1\" text=\"기준\"/><Cell col=\"2\" text=\"비율(%)\"/></Band><Band id=\"body\"><Cell text=\"bind:RANK\"/><Cell col=\"1\" text=\"bind:STAND\"/><Cell col=\"2\" text=\"bind:RATIO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00",null,"169","215","405","8",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_Rank_Partition");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"등급\"/><Cell col=\"1\" text=\"인원\"/><Cell col=\"2\" text=\"비율(%)\"/></Band><Band id=\"body\"><Cell text=\"bind:RANK\"/><Cell col=\"1\" text=\"bind:NUM\"/><Cell col=\"2\" text=\"bind:RATIO\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" text=\"expr:dataset.getSum(&quot;NUM&quot;)\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;RATIO&quot;)\" displaytype=\"mask\" maskeditformat=\"90.90\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Data","8","214",null,null,"231","22",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Data",this.tab_Data);
            obj.set_text("Data");
            this.tab_Data.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.tab_Data.tpg_Data.form);
            obj.set_taborder("0");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_STUDENT_GRADE");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"반\"/><Cell col=\"4\" text=\"번호\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"학적상태\"/><Cell col=\"8\" text=\"취업상태\"/><Cell col=\"9\" text=\"성적인정\"/><Cell col=\"10\" text=\"중간\"/><Cell col=\"11\" text=\"기말\"/><Cell col=\"12\" text=\"과제\"/><Cell col=\"13\" text=\"출석\"/><Cell col=\"14\" text=\"사이버\"/><Cell col=\"15\" text=\"총점\"/><Cell col=\"16\" text=\"등급\"/><Cell col=\"17\" text=\"P/F\"/><Cell col=\"18\" text=\"재수강\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SUBJECT\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:GRADE\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:ROOM\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:NUM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SEQUENCENUM\" textAlign=\"center\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:EMP_NAME\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:WORK_FLAG\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_CD_WORK_FLAG\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"8\" text=\"bind:JOB_FLAG\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:STUDY_FLAG\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:MID_GRADE\" textAlign=\"right\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:FIN_GRADE\" textAlign=\"right\" edittype=\"text\"/><Cell col=\"12\" text=\"bind:HOM_GRADE\" textAlign=\"right\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:CUR_GRADE\" textAlign=\"right\" edittype=\"text\"/><Cell col=\"14\" text=\"bind:CYBER_FLAG\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:TOTAL_GRADE\" textAlign=\"right\" edittype=\"text\"/><Cell col=\"16\" text=\"bind:RANK\" textAlign=\"right\" edittype=\"text\"/><Cell col=\"17\" text=\"bind:PANDF\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:REJOIN_FLAG\" textAlign=\"center\"/></Band></Format></Formats>");
            this.tab_Data.tpg_Data.addChild(obj.name, obj);

            obj = new Radio("rdo_Type",null,"116","215","22","8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_Type_innerdataset = new nexacro.NormalDataset("rdo_Type_innerdataset", obj);
            rdo_Type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">절대평가</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상대평가</Col></Row></Rows>");
            obj.set_innerdataset(rdo_Type_innerdataset);
            obj.set_text("상대평가");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"144","215","24","8",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등급별 분포현황");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"579","215","24","8",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("상대평가 제한비율");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label04");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","117",null,"97","484",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("※일반과목 : 중간(30점), 기말(30점), 과제(20점), 출석(20점)\r\n※사이버과목 : 중간(30점), 기말(30점), 과제(10점), \r\n   출석(10점), 사이버강좌 퀴즈 및 과정(20점)\r\n※P/F과목 : (출석) 0 ~ 59(N), 60 ~ 100(P)\r\n※계절학기 : 기말(60점), 출석(20점), 과제(20점) 또는\r\n   사이버강좌(20점)");
            obj.set_color("red");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Present",null,"122","124","24","232",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출석부팝업");
            obj.set_cssclass("btn_WF_basic08");
            this.addChild(obj.name, obj);

            obj = new Button("btn_GradeCopy",null,"149","124","24","232",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("현장실습성적 복사");
            obj.set_cssclass("btn_WF_basic08");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CyberCopy",null,"176","124","24","359",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("사이버 점수 복사");
            obj.set_cssclass("btn_WF_basic08");
            this.addChild(obj.name, obj);

            obj = new Button("btn_BeACECopy",null,"176","124","24","232",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("BeACE 점수 복사");
            obj.set_cssclass("btn_WF_basic08");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Minus",null,"217","22","22","Grid00:8",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("-");
            obj.set_cssclass("btn_WF_basic07");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Plus",null,"217","22","22","btn_Minus:4",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("+");
            obj.set_cssclass("btn_WF_basic07");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Pi.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Pi.xfdl","Script::ext_CommEco.xjs");
        this.addIncludeScript("Pi.xfdl","Script::CommTrans.xjs");
        this.registerScript("Pi.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 성적입력 ()
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
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;

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

        this.fnSaveValidation = function(dsTarget, aryChkColKor, aryChkColEng)
        {
        	const aryColId = new Array();
        	var dsChkCol = new Dataset();
        	var i=0,iL=0,j=0,jL=0,nRowType=0,nRow=0;

        	for(i = 0, iL=aryChkColKor.length; i<iL; i++)
        	{
        		dsChkCol.addColumn(aryChkColKor[i], "STRING", 255);
        	}

        	nRow = dsChkCol.addRow();

        	for(i = 0, iL=dsTarget.rowcount; i<iL; i++)
        	{
        		nRowType = dsTarget.getRowType(i);

        		if(nRowType == 2 || nRowType == 4)
        		{
        			for(j = 0, jL=aryChkColEng.length; j<jL; j++)
        			{
        				if(this.gfnIsEmpty(dsTarget.getColumn(i, aryChkColEng[j])))
        				{
        					dsChkCol.setColumn(nRow, aryChkColKor[j], 1);
        				}
        			}
        		}
        	}

        	for(i=0, iL=dsChkCol.colcount; i<iL; i++)
        	{
        		if(!this.gfnIsEmpty(dsChkCol.getColumn(nRow, dsChkCol.getColID(i))))
        		{
        			aryColId.push(dsChkCol.getColID(i));
        		}
        	}

        	return aryColId.join(',');
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
        this.fnSearch = function(empNo, subjectKey)
        {
        	this.transaction
        	(
        		"Select"
        	   ,"svc::DaelimUniversity/Service/select.jsp?dsName=" + "STUDENT_GRADE" + "&empNo=" + empNo + "&subjectKey=" + subjectKey
        	   ,""
        	   ,"ds_STUDENT_GRADE=dsOutput ds_Rank_Partition=dsOutput2 ds_District=dsOutput3"
        	   ,""
        	   ,"fn_callback"
        	   ,true
        	);
        };

        this.fnSave = function()
        {
        	var dsName = "STUDENT_GRADE";
        	var empNo = this.tab_SearchType.tpg_SearchType.form.div_Top.form.edt_EmpNo.value;
        	var subjectKey = this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value;

        	this.transaction
        	(
        		"Save"
        	   ,"svc::DaelimUniversity/Service/save.jsp?dsName=" + dsName + "&empNo=" + empNo + "&subjectKey=" + subjectKey
        	   ,"dsInput=ds_STUDENT_GRADE:U"
        	   ,""
        	   ,""
        	   ,"fn_callback"
        	);
        };

        this.fn_callback = function(svcId, nErrorCode, sErrMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(svcId + " : " + sErrMsg); //실패시 sErrMsg를 띄운다.
        	}
        	else
        	{
        		if(svcId == "Select")
        		{
        			this.ds_Rank_Partition.setColumn(0, "NUM", this.ds_STUDENT_GRADE.rowcount);

        			this.btn_Plus.set_enable(true);
        			this.btn_Minus.set_enable(true);

        			this.btn_Save.set_enable(true);
        		}
        		else if(svcId == "Save")
        		{
        			this.fnSearch(this.tab_SearchType.tpg_SearchType.form.div_Top.form.edt_EmpNo.value, this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value);
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
        			//초기화
        			this.ds_STUDENT_GRADE.clearData();
        			this.ds_Rank_Partition.clearData();
        			this.ds_District.clearData();

        			var ds = new Dataset();
        			ds.loadXML(popupArg);

        			var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;

        			Form.edt_EmpNo.set_value(ds.getColumn(0, "EMP_NO"));
        			Form.edt_EmpName.set_value(ds.getColumn(0, "EMP_NAME"));

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
        				this.fnSearch(this.tab_SearchType.tpg_SearchType.form.div_Top.form.edt_EmpNo.value, this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value);
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
        		case "btn_Save" :
        			var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;

        			if(Form.cmb_Subject.value == 0)
        			{
        				alert("과목을 선택해주세요");
        			}
        			else
        			{
        				var strMsg = this.fnSaveValidation(this.ds_STUDENT_GRADE, ["학번", "성명"], ["SEQUENCENUM", "EMP_NAME"]);

        				if(!this.gfnIsEmpty(strMsg))
        				{
        					alert(strMsg + "을 입력하세요.");
        				}
        				else
        				{
        					this.fnSave();
        				}
        			}
        			break;
        		case "btn_Plus" :
        			var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;

        			if(Form.cmb_Subject.value == 0)
        			{
        				alert("과목을 선택해주세요");
        			}
        			else
        			{
        				var nRow = this.ds_STUDENT_GRADE.addRow();
        				this.ds_STUDENT_GRADE.setColumn(nRow, "EMP_NO", Form.edt_EmpNo.value);
        				this.ds_STUDENT_GRADE.setColumn(nRow, "SUBJECT_KEY", Form.cmb_Subject.value);
        				this.ds_STUDENT_GRADE.setColumn(nRow, "NUM", this.ds_STUDENT_GRADE.getMax("NUM") + 1);
        			}
        			break;
        		case "btn_Minus" :
        			if(this.confirm("정말 삭제하시겠습니까?"))
        			{
        				this.ds_STUDENT_GRADE.deleteRow(this.ds_STUDENT_GRADE.rowposition);
        			}
        			break;
        		case "btn_Print" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_Present" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_GradeCopy" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_CyberCopy" :
        			this.alert("해당 기능은 서비스 중 입니다...");
        			break;
        		case "btn_BeACECopy" :
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
        // * 02. 화면명   : 성적입력 ()
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
        // this.fnSaveValidation = function(dsTarget)
        // {
        // 	const aryChkCol = new Array(new Array([0],[0]), new Array(["학번"], ["이름"]));
        // 	const aryColId = new Array();
        //
        // 	for(var i = 0; i<dsTarget.rowcount; i++)
        // 	{
        // 		var strRowType = dsTarget.getRowType(i);
        //
        // 		if(strRowType == 2) //추가된 행의 상태에서만 Validation Check
        // 		{
        // 			if(this.gfnIsEmpty(dsTarget.getColumn(i, "SEQUENCENUM")))
        // 			{
        // 				aryChkCol[0][0] = 1;
        // 			}
        //
        // 			if(this.gfnIsEmpty(dsTarget.getColumn(i, "EMP_NAME")))
        // 			{
        // 				aryChkCol[0][1] = 1;
        // 			}
        // 		}
        // 	}
        //
        // 	for(var i in aryChkCol)
        // 	{
        // 		for(var j in aryChkCol)
        // 		{
        // 			if(i == 0 && aryChkCol[i][j] > 0)
        // 			{
        // 				aryColId.push(aryChkCol[parseInt(i) + 1][j]);
        // 			}
        // 		}
        // 	}
        // 	return aryColId.join(',');
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
        // this.fnSearch = function(svcId, dsName, dsOutput, empNo, subjectKey)
        // {
        // 	this.transaction
        // 	(
        // 		svcId
        // 	   ,"svc::DaelimUniversity/Service/select.jsp?dsName=" + dsName + "&empNo=" + empNo + "&subjectKey=" + subjectKey
        // 	   ,""
        // 	   ,dsOutput + "=dsOutput"
        // 	   ,""
        // 	   ,"fn_callback"
        // 	   ,true
        // 	);
        // };
        //
        // this.fnSave = function()
        // {
        // 	var dsName = "STUDENT_GRADE";
        // 	var empNo = this.tab_SearchType.tpg_SearchType.form.div_Top.form.edt_EmpNo.value;
        // 	var subjectKey = this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value;
        //
        // 	this.transaction
        // 	(
        // 		"Save"
        // 	   ,"svc::DaelimUniversity/Service/save.jsp?dsName=" + dsName + "&empNo=" + empNo + "&subjectKey=" + subjectKey
        // 	   ,"dsInput=ds_STUDENT_GRADE:U"
        // 	   ,""
        // 	   ,""
        // 	   ,"fn_callback"
        // 	);
        // };
        //
        // this.fn_callback = function(svcId, nErrorCode, sErrMsg)
        // {
        // 	if(nErrorCode < 0)
        // 	{
        // 		this.alert(svcId + " : " + sErrMsg); //실패시 sErrMsg를 띄운다.
        // 	}
        // 	else
        // 	{
        // 		if(svcId == "STUDENT_GRADE")
        // 		{
        // 			this.fnSearch("RANK_RATIO", "RANK_RATIO", "ds_Rank_Partition", this.tab_SearchType.tpg_SearchType.form.div_Top.form.edt_EmpNo.value, this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value);
        // 			this.ds_Rank_Partition.setColumn(0, "NUM", this.ds_STUDENT_GRADE.rowcount);
        // 		}
        // 		else if(svcId == "RANK_RATIO")
        // 		{
        // 			this.fnSearch("DISTRICT", "DISTRICT", "ds_District", "", "");
        // 			this.ds_Rank_Partition.setColumn(0, "NUM", this.ds_STUDENT_GRADE.rowcount);
        // 		}
        // 		else if(svcId == "DISTRICT")
        // 		{
        // 			this.btn_Plus.set_enable(true);
        // 			this.btn_Minus.set_enable(true);
        //
        // 			this.btn_Save.set_enable(true);
        // 		}
        // 		else if(svcId == "Save")
        // 		{
        // 			this.fnSearch("RANK_RATIO", "RANK_RATIO", "ds_Rank_Partition", this.tab_SearchType.tpg_SearchType.form.div_Top.form.edt_EmpNo.value, this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value);
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
        // 			//초기화
        // 			this.ds_STUDENT_GRADE.clearData();
        // 			this.ds_Rank_Partition.clearData();
        // 			this.ds_District.clearData();
        //
        // 			var ds = new Dataset();
        // 			ds.loadXML(popupArg);
        //
        // 			var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;
        //
        // 			Form.edt_EmpNo.set_value(ds.getColumn(0, "EMP_NO"));
        // 			Form.edt_EmpName.set_value(ds.getColumn(0, "EMP_NAME"));
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
        //
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
        // 				this.fnSearch("STUDENT_GRADE", "STUDENT_GRADE", "ds_STUDENT_GRADE", this.tab_SearchType.tpg_SearchType.form.div_Top.form.edt_EmpNo.value, this.tab_SearchType.tpg_SearchType.form.div_Top.form.cmb_Subject.value);
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
        // 		case "btn_Save" :
        // 			var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;
        //
        // 			if(Form.cmb_Subject.value == 0)
        // 			{
        // 				alert("과목을 선택해주세요");
        // 			}
        // 			else
        // 			{
        // 				var strMsg = this.fnSaveValidation(this.ds_STUDENT_GRADE);
        //
        // 				if(!this.gfnIsEmpty(strMsg))
        // 				{
        // 					alert(strMsg + "을 입력하세요.");
        // 				}
        // 				else
        // 				{
        // 					this.fnSave();
        // 				}
        // 			}
        // 			break;
        // 		case "btn_Plus" :
        // 			var Form = this.tab_SearchType.tpg_SearchType.form.div_Top.form;
        //
        // 			if(Form.cmb_Subject.value == 0)
        // 			{
        // 				alert("과목을 선택해주세요");
        // 			}
        // 			else
        // 			{
        // 				var nRow = this.ds_STUDENT_GRADE.addRow();
        // 				this.ds_STUDENT_GRADE.setColumn(nRow, "EMP_NO", Form.edt_EmpNo.value);
        // 				this.ds_STUDENT_GRADE.setColumn(nRow, "SUBJECT_KEY", Form.cmb_Subject.value);
        // 				this.ds_STUDENT_GRADE.setColumn(nRow, "NUM", this.ds_STUDENT_GRADE.getMax("NUM") + 1);
        // 			}
        // 			break;
        // 		case "btn_Minus" :
        // 			if(this.confirm("정말 삭제하시겠습니까?"))
        // 			{
        // 				this.ds_STUDENT_GRADE.deleteRow(this.ds_STUDENT_GRADE.rowposition);
        // 			}
        // 			break;
        // 		case "btn_Print" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_Present" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_GradeCopy" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_CyberCopy" :
        // 			this.alert("해당 기능은 서비스 중 입니다...");
        // 			break;
        // 		case "btn_BeACECopy" :
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

        this.Pi_onload = function(obj,e)
        {
        	this.gfnTransaction();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pi_onload,this);
            this.tab_SearchType.tpg_SearchType.form.div_Top.form.btn_ComSearch.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Print.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Present.addEventHandler("onclick",this.comm_Click,this);
            this.btn_GradeCopy.addEventHandler("onclick",this.comm_Click,this);
            this.btn_CyberCopy.addEventHandler("onclick",this.comm_Click,this);
            this.btn_BeACECopy.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Minus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Plus.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("Pi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
