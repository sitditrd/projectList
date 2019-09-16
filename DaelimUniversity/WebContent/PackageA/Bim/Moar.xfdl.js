(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Motsys");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_CODE\" type=\"bigdecimal\" size=\"39\"/><Column id=\"BACHELOR_ABILITY_TYPE\" type=\"bigdecimal\" size=\"39\"/><Column id=\"START_DATE\" type=\"string\" size=\"10\"/><Column id=\"START_TIME\" type=\"string\" size=\"10\"/><Column id=\"END_DATE\" type=\"string\" size=\"10\"/><Column id=\"END_TIME\" type=\"string\" size=\"10\"/><Column id=\"REMARK\" type=\"string\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_SYSTEM_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">성적시스템</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_BACHELOR_ABILITY_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">성적입력기간</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_SearchType","8","12",null,"62","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_SearchType",this.tab_SearchType);
            obj.set_text("검색조건");
            this.tab_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_SchoolYear","4","4","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("1");
            obj.set_text("학년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_Semester","182","4","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("2");
            obj.set_text("학기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_Semester00","360","4","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("5");
            obj.set_text("시스템");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Edit("edt_SchoolYear","91","4","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("5");
            obj.set_value("2018");
            obj.set_readonly("true");
            obj.set_cssclass("edit_WF_edit01");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Combo("cmb_SemesterData2","269","4","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_SearchType_tpg_SearchType_form_cmb_SemesterData2_innerdataset = new nexacro.NormalDataset("tab_SearchType_tpg_SearchType_form_cmb_SemesterData2_innerdataset", obj);
            tab_SearchType_tpg_SearchType_form_cmb_SemesterData2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(tab_SearchType_tpg_SearchType_form_cmb_SemesterData2_innerdataset);
            obj.set_text("2학기");
            obj.set_value("0");
            obj.set_index("0");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Combo("cmb_SemesterData00","447","4","104","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_SearchType_tpg_SearchType_form_cmb_SemesterData00_innerdataset = new nexacro.NormalDataset("tab_SearchType_tpg_SearchType_form_cmb_SemesterData00_innerdataset", obj);
            tab_SearchType_tpg_SearchType_form_cmb_SemesterData00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">성적시스템</Col></Row></Rows>");
            obj.set_innerdataset(tab_SearchType_tpg_SearchType_form_cmb_SemesterData00_innerdataset);
            obj.set_text("성적시스템");
            obj.set_value("0");
            obj.set_index("0");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Tab("tab_Data","8","tab_SearchType:8",null,null,"8","4",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Data",this.tab_Data);
            obj.set_text("Data");
            this.tab_Data.addChild(obj.name, obj);

            obj = new Grid("grd_Data","4","4",null,null,"4","4",null,null,null,null,this.tab_Data.tpg_Data.form);
            obj.set_taborder("0");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"시스템\"/><Cell col=\"2\" text=\"학사력구분\"/><Cell col=\"3\" text=\"시작일자\"/><Cell col=\"4\" text=\"시작시간\"/><Cell col=\"5\" text=\"종료일자\"/><Cell col=\"6\" text=\"종료시간\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" displaytype=\"combocontrol\" combodataset=\"ds_CD_SYSTEM_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:SYSTEM_CODE\"/><Cell col=\"2\" displaytype=\"combocontrol\" combodataset=\"ds_CD_BACHELOR_ABILITY_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:BACHELOR_ABILITY_TYPE\"/><Cell col=\"3\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\" edittype=\"date\" text=\"bind:START_DATE\"/><Cell col=\"4\" text=\"bind:START_TIME\"/><Cell col=\"5\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\" edittype=\"date\" text=\"bind:END_DATE\"/><Cell col=\"6\" text=\"bind:END_TIME\"/><Cell col=\"7\" text=\"bind:REMARK\"/></Band></Format></Formats>");
            this.tab_Data.tpg_Data.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","72","24","11",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,608,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Moar.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Moar.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Moar.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 성적학사력관리 ()
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


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	var dsName = "MOTSYS";

        	this.transaction
        	(
        		"Select"
        	   ,"svc::DaelimUniversity/Service/select.jsp?dsName=" + dsName
        	   ,""
        	   ,"dsOutput=dsOutput"
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
        			//trace(this.dsOutput.saveXML()); //Console에 기록된 Dataset ColumnInfo를 복사한다.
        		}
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
        			this.fnSearch();
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("Moar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
