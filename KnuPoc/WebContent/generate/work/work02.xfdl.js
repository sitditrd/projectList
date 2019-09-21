(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work02");
            this.set_titletext("설문관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,718);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Grd_answer", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVEY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWEAR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWEAR_SUBSTANCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Paging", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SUBSTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TotalRowCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","17",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("설문문항");
            obj.set_cssclass("sta_WF_titleBig");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","9","81",null,"161","7",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"5","874","40","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_conLine");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","8",null,"34","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("false");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">주관식</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">객관식</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            obj.set_text("주관식");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03",null,"44","874","106","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_conLine");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","134","51",null,"93","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","1","44","128","106",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설문내용");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","1","5","128","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("설문유형");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","44",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"6","75","32","14",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_btnRed");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01",null,"6","75","32","Button02:3",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_btnWhite");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","75","32","Button01:3",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("문항추가");
            obj.set_cssclass("btn_WF_btnWhite");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","233",null,"173","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_Paging");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"340\"/><Column size=\"30\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"설문내용\"/><Cell col=\"2\" text=\"설문유형\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:SURVEY_SUBSTANCE\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:SURVEY_CODE\" textAlign=\"center\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","120","Grid00:20",null,"30","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("Comm::commPaging.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","473",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("답안항목");
            obj.set_cssclass("sta_WF_titleBig");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","520",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"10\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"답안내용\"/></Band><Band id=\"body\"><Cell text=\"bind:ANSWEAR_NO\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:ANSWEAR_SUBSTANCE\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,718,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_conLine");
                p.Static01.move(null,"5","874","40","5",null);

                p.Combo00.set_taborder("2");
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_autoselect("false");
                p.Combo00.set_innerdataset(Div00_form_Combo00_innerdataset);
                p.Combo00.set_text("주관식");
                p.Combo00.set_value("1");
                p.Combo00.set_index("0");
                p.Combo00.move("134","8",null,"34","5",null);

                p.Static03.set_taborder("4");
                p.Static03.set_cssclass("sta_WF_conLine");
                p.Static03.move(null,"44","874","106","5",null);

                p.TextArea00.set_taborder("5");
                p.TextArea00.move("134","51",null,"93","5",null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("설문내용");
                p.Static02.set_cssclass("sta_WF_labelLine");
                p.Static02.move("1","44","128","106",null,null);

                p.Static00.set_taborder("0");
                p.Static00.set_text("설문유형");
                p.Static00.set_cssclass("sta_WF_labelLine");
                p.Static00.move("1","5","128","40",null,null);
                // this.Div00 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Button02.set_taborder("2");
                p.Button02.set_text("저장");
                p.Button02.set_cssclass("btn_WF_btnRed");
                p.Button02.move(null,"6","75","32","14",null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("삭제");
                p.Button01.set_cssclass("btn_WF_btnWhite");
                p.Button01.move(null,"6","75","32","Button02:3",null);

                p.Button00.set_taborder("0");
                p.Button00.set_text("문항추가");
                p.Button00.set_cssclass("btn_WF_btnWhite");
                p.Button00.move(null,"6","75","32","Button01:3",null);
                // this.Div02 }}
                p = rootobj;
                p.set_titletext("설문관리");

                p.Static00.set_taborder("0");
                p.Static00.set_text("설문문항");
                p.Static00.set_cssclass("sta_WF_titleBig");
                p.Static00.move("10","17",null,"34","10",null);

                p.Div00.set_taborder("1");
                p.Div00.set_text("Div00");
                p.Div00.move("9","81",null,"161","7",null);

                p.Div02.set_taborder("2");
                p.Div02.move("0","44",null,"42","0",null);

                p.Grid00.set_taborder("6");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_binddataset("ds_Paging");
                p.Grid00.move("10","233",null,"173","10",null);

                p.Div01.set_taborder("3");
                p.Div01.set_url("Comm::commPaging.xfdl");
                p.Div01.set_text("");
                p.Div01.move("120","Grid00:20",null,"30","5",null);

                p.Static01.set_taborder("4");
                p.Static01.set_text("답안항목");
                p.Static01.set_cssclass("sta_WF_titleBig");
                p.Static01.move("10","473",null,"34","10",null);

                p.Grid01.set_taborder("5");
                p.Grid01.set_autofittype("col");
                p.Grid01.move("10","520",null,null,"10","10");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen,Desktop_screen",480,880,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static02.move("1","64","128","122",null,null);

                p.Static03.move("0","64",null,"122","5",null);

                p.TextArea00.move("134","71",null,"108","5",null);

                p.Static01.set_text("");
                p.Static01.move("0","5",null,"60","5",null);

                p.Static00.move("1","5","128","60",null,null);

                p.Combo00.move("134","9",null,"52","5",null);
                // this.Div00 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Button00.set_cssclass("btn_WF_btnWhite");
                p.Button00.move(null,"4","94","48","165",null);

                p.Button01.set_cssclass("btn_WF_btnWhite");
                p.Button01.move(null,"4","72","48","90",null);

                p.Button02.set_cssclass("btn_WF_btnRed");
                p.Button02.move(null,"4","72","48","15",null);
                // this.Div02 }}
                p = rootobj;
                p.Div00.move("10","121",null,"196","10",null);

                p.Grid00.move("10","317",null,"188","10",null);

                p.Grid01.move("10","620",null,null,"10","10");

                p.Div01.move("10","508",null,"50","10",null);

                p.Static01.move("10","573",null,"34","10",null);

                p.Div02.move("0","68",null,"56","0",null);

                p.Static00.move("10","20",null,"34","10",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.TextArea00","value","ds_Paging","SURVEY_SUBSTANCE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::commPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("work02.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("work02.xfdl", function() {
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;
        /**
        *  Knu Poc 샘플
        *  @FileName 	work01.xfdl
        *  @Creator 	Presales
        *  @CreateDate 	2019.04.10
        *  @Desction    함수 정의 및 개발
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.04.10    	Presales 	                최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.firstRowNum = 1;
        this.pageRowCount = 5;
        this.chk_Array1 = [];
        this.chk_Array2 = [];
        this.serviceURL = "http://14.63.224.112/KnuPoc/service/";
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.work01_onload = function(obj,e)
        {
        	this.fn_searchPaging(this.firstRowNum, this.pageRowCount);
        };
        //설문 유형 변경
        this.Div00_Combo00_onitemchanged = function(obj,e)
        {
        	this.fn_searchPaging(this.firstRowNum, this.pageRowCount);
        };

        //문항 추가
        this.Div02_Button00_onclick = function(obj,e)
        {
        	var nRow = this.ds_Paging.addRow();
        	if(this.Div00.form.Combo00.value == 1)
        	{
        		this.ds_Paging.setColumn(nRow, "SURVEY_CODE", 1);
        	}else{
        		this.ds_Paging.setColumn(nRow, "SURVEY_CODE", 2);
        		for(var i=nRow-4; i<=nRow; i++)
        		{
        			var nAnsRow = this.ds_Grd_answer.addRow();
        			this.ds_Grd_answer.setColumn(nAnsRow, "SURVEY_CODE", 2);
        			this.ds_Grd_answer.setColumn(nAnsRow, "SURVEY_NO", 1);
        			this.ds_Grd_answer.setColumn(nAnsRow, "SURVEY_NO", 1);
        			this.ds_Grd_answer.setColumn(nAnsRow, "ANSWEAR_NO", i);
        		}
        	}
        	this.ds_Paging.setColumn(nRow, "SURVEY_NO", 1);

        };
        //설문내용 삭제(Chk 값만)
        this.Div02_Button01_onclick = function(obj,e)
        {
        	var nRow = this.ds_Paging.rowposition;
        	var strCd = this.ds_Paging.getColumn(nRow, "SURVEY_CODE");
        	var strNo = this.ds_Paging.getColumn(nRow, "SURVEY_NO");

        	for(var i = 0; i <this.ds_Paging.getRowCount(); i++)
        	{
        		var fRow = this.ds_Paging.findRow("chk", "1");
        		this.ds_Paging.deleteRow(fRow);
        	}
        };
        //변경사항 저장
        this.Div02_Button02_onclick = function(obj,e)
        {
        	for(var i =0 ; i <5; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_Grd_answer.getColumn(i, "SURVEY_SUBSTANCE")) || this.gfnIsEmpty(this.ds_Grd_answer.getColumn(i, "ANSWEAR_SUBSTANCE")))
        		{
        			this.alert("내용을 입력해 주세요");
        			return false;
        		}
        	}
        	this.fn_surveySave();
        };
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /*******************************************************************************
         * Function Name: fn_comCode
         * Description  : 필요한 공통 코드들을 데이터셋에 저장하는 함수
        //  ******************************************************************************/
        // this.fn_comCode = function()
        // {
        // 		var strSvcId = "comCode"; // Service ID
        // 		var strScvUrl = "http://localhost:8080/KnuPoc/service/select.jsp?keywords=comCode"; // URL
        // 		var strInDs = ""; //InputDataSet
        // 		var strOutDs = "gds_comCode=comCode"; // OutputDataSet
        // 		var strArg = ""; // Argument
        // 		var strCallBackFunc = "fn_Callback"; // CallBack Function
        // 		var bAsync = true; //Async
        // 		this.transaction(strSvcId, strScvUrl, strInDs, strOutDs, strArg, strCallBackFunc, bAsync);
        // }

        /*******************************************************************************
         * Function Name: fn_surveySave
         * Description  : 설문 내용,답안내용 변경을 저장하기 위해 호출하는 함수
         * Arguments    :
        ******************************************************************************/
        this.fn_surveySave = function ()
        {
        	var strSvcId = "surveySave"; // Service ID
        	var strScvUrl = this.serviceURL + "surveySave.jsp"; // URL
        	var strInDs = "InSurveyDs=ds_Paging:U InSurveyAnswerDs=ds_Grd_answer:U"; //InputDataSet
        	var strCallBackFunc = "fn_Callback"; // CallBack Function
        	var bAsync = true; //Async
        	this.transaction(strSvcId, strScvUrl, strInDs, "", "", strCallBackFunc, bAsync);
        };
        /*******************************************************************************
         * Function Name: fn_searchPaging
         * Description  : 설문 내용,답안내용 페이징 조회
         * Arguments    : PageNo: 페이지개수, rowCount: 보여질 row 개수, multiple: 주관식,객관식 선택 값
        ******************************************************************************/
        this.fn_searchPaging = function(nPageNo, nRowCnt)
        {
        	var index = 0;

        	if(nPageNo != 1)
        	{
        		index = 1;
        	}

        	this.ds_Paging.clearData();

        	// 페이징처리 transaction
        	// 페이지 no값과 row갯수를 받음
        	var strSvcId = "Page";
        	var strScvUrl = this.serviceURL + "page_sample.jsp?index="+ index;
        	var strInDs = "";
        	var strOutDs = "ds_Paging=PageoutDs ds_Grd_answer=answerDs ds_TotalRowCnt=TotalRowCnt";
        	var strArg = "PageNo=" + nPageNo + " rowCount=" + nRowCnt + " multiple=" + this.Div00.form.Combo00.value; // Argument
        	var strCallBackFunc = "fn_Callback";
        	var bAsync = true; //Async
        	this.transaction(strSvcId, strScvUrl, strInDs, strOutDs, strArg, strCallBackFunc, bAsync);
        };
        /*******************************************************************************
         * Function Name: fn_Callback
         * Description  : Transacion 통신 후 CallBack 함수
         * Arguments    : svcID : Service ID, errorCode : 에러코드, errorMsg : 에러메세지
         * Return       :
         ******************************************************************************/
        this.fn_Callback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		trace("errMsg :::" + errorMsg);
        		return false;
        	}else
        	{
        		if(svcID == 'comCode')
        		{
        			var surveyCdDs = new Dataset();
        			this.gds_comCode.filter("CM_CODE == 'SURVEY_CODE'");
        			surveyCdDs.copyData(this.gds_comCode, true);
        			this.Div00.form.Combo00.set_innerdataset(surveyCdDs);
        			this.Div00.form.Combo00.set_codecolumn("CD_CODE");
        			this.Div00.form.Combo00.set_datacolumn("CAPTION");
        			this.fn_searchPaging(this.firstRowNum, this.pageRowCount);
        		}else if(svcID == 'Page')
        		{
        			var rowPos = this.ds_Paging.rowposition;
        			var strCd = this.ds_Paging.getColumn(rowPos, "SURVEY_CODE");
        			var strNo = this.ds_Paging.getColumn(rowPos, "SURVEY_NO");

        			this.Grid01.set_binddataset("ds_Grd_answer");
        			this.ds_Grd_answer.filter("SURVEY_CODE == '"+strCd+"' && SURVEY_NO =='"+strNo+"'");
        			var totRowCount = this.ds_TotalRowCnt.getColumn(0, "CNT");

        			var nPageBlock	= parseInt(Math.ceil(parseFloat(totRowCount/this.pageRowCount)));
        			var ntype = this.Div00.form.Combo00.value;

        			if(ntype == 1) //주관식
        			{
        				if(this.gfnIsEmpty(this.chk_Array1))
        					this.Div01.form.fn_initPageSet(nPageBlock, true, this.pageRowCount, ntype);

        				this.chk_Array1.push(ntype);
        			}
        			else if(ntype == 2) //객관식
        			{
        				if(this.gfnIsEmpty(this.chk_Array2))
        					this.Div01.form.fn_initPageSet(nPageBlock, true, this.pageRowCount, ntype);

        				this.chk_Array2.push(ntype);
        			}

        			var exRtn = new Array(nPageBlock,totRowCount);
        			this.Div01.form.fn_callAfter(exRtn);

        		}else if (svcID == 'surveySave')
        		{
        			this.alert("저장완료");
        			this.fn_searchPaging(this.firstRowNum, this.pageRowCount);
        		}
        	}
        };

        this.ds_Paging_onrowposchanged = function(obj,e)
        {
        	var nRow = e.newrow;
        	var strCd = this.ds_Paging.getColumn(nRow, "SURVEY_CODE");
        	var strNo = this.ds_Paging.getColumn(nRow, "SURVEY_NO");
        	this.Grid01.set_binddataset("ds_Grd_answer");
        	this.ds_Grd_answer.filter("SURVEY_CODE == '"+strCd+"' && SURVEY_NO =='"+strNo+"'");

        	for(var i = 0; i<this.ds_Paging.rowcount; i++)
        			{
        				if(this.ds_Paging.getColumn(i, "SURVEY_CODE") == 1)
        				{
        					this.Grid00.setCellProperty("body", 2, "text", "주관식");
        				}else{
        					this.Grid00.setCellProperty("body", 2, "text", "객관식");
        				}
        			}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.work01_onload,this);
            this.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.Div00.form.TextArea00.addEventHandler("onchanged",this.Div00_TextArea00_onchanged,this);
            this.Div02.form.Button02.addEventHandler("onclick",this.Div02_Button02_onclick,this);
            this.Div02.form.Button01.addEventHandler("onclick",this.Div02_Button01_onclick,this);
            this.Div02.form.Button00.addEventHandler("onclick",this.Div02_Button00_onclick,this);
            this.ds_Paging.addEventHandler("onrowposchanged",this.ds_Paging_onrowposchanged,this);
        };

        this.loadIncludeScript("work02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
