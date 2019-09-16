(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tc");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"bigdecimal\" size=\"39\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"15\"/><Column id=\"EMP_REG_NUM\" type=\"bigdecimal\" size=\"39\"/><Column id=\"WORK_FLAG\" type=\"bigdecimal\" size=\"39\"/><Column id=\"DUTY_NAME\" type=\"string\" size=\"30\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"20\"/><Column id=\"MAJOR_NAME\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_Work_Flag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">퇴직</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">재직</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CAPTION\">휴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_SearchType","8","12",null,"90","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_SearchType",this.tab_SearchType);
            obj.set_text("검색조건");
            this.tab_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_EmpNo","4","4","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("0");
            obj.set_text("교직원번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_EmpName","198","4","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_Major","4","30","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("4");
            obj.set_text("학과");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Combo("cmb_Major","91","30","104","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_SearchType_tpg_SearchType_form_cmb_Major_innerdataset = new nexacro.NormalDataset("tab_SearchType_tpg_SearchType_form_cmb_Major_innerdataset", obj);
            tab_SearchType_tpg_SearchType_form_cmb_Major_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">건축과</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">경영과</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">모바일 인터넷과</Col></Row></Rows>");
            obj.set_innerdataset(tab_SearchType_tpg_SearchType_form_cmb_Major_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Edit("edt_EmpNo","91","4","104","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_cssclass("edit_WF_edit01");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Static("stc_WorkFlag","198","30","88","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("6");
            obj.set_text("재직구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Combo("cmb_WorkFlag","285","30","104","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_SearchType_tpg_SearchType_form_cmb_WorkFlag_innerdataset = new nexacro.NormalDataset("tab_SearchType_tpg_SearchType_form_cmb_WorkFlag_innerdataset", obj);
            tab_SearchType_tpg_SearchType_form_cmb_WorkFlag_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">재직</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">퇴직</Col></Row></Rows>");
            obj.set_innerdataset(tab_SearchType_tpg_SearchType_form_cmb_WorkFlag_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Edit("edt_EmpName","285","4","104","22",null,null,null,null,null,null,this.tab_SearchType.tpg_SearchType.form);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_cssclass("edit_WF_edit01");
            obj.set_text("2018");
            this.tab_SearchType.tpg_SearchType.addChild(obj.name, obj);

            obj = new Tab("tab_Data","8","tab_SearchType:8",null,null,"8","4",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교직원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"주민등록번호\"/><Cell col=\"4\" text=\"재직구분\"/><Cell col=\"5\" text=\"직급명\"/><Cell col=\"6\" text=\"직종명\"/><Cell col=\"7\" text=\"소속학과명\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" combodataset=\"ds_CD_SYSTEM_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:EMP_NO\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"2\" combodataset=\"ds_CD_BACHELOR_ABILITY_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:EMP_NAME\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"######-#######\" text=\"bind:EMP_REG_NUM\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"combotext\" combodataset=\"ds_CD_Work_Flag\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" textAlign=\"center\" text=\"bind:WORK_FLAG\"/><Cell col=\"5\" text=\"bind:DUTY_NAME\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:WORK_NAME\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:MAJOR_NAME\"/></Band></Format></Formats>");
            this.tab_Data.tpg_Data.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","72","24","85",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic07");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","72","24","11",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_basic03");
            obj.set_escapebutton("true");
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
        this.addIncludeScript("Tc.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Tc.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Tc.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 교원조회 ()
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
        this.Tc_onload = function(obj,e)
        {
        	this.fnSearch();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnReturnOne = function(row)
        {
        	var dsReturn = new nexacro.Dataset();
        	dsReturn.assign(this.dsOutput);
        	dsReturn.clearData();

        	var newrow = dsReturn.addRow();
        	dsReturn.copyRow(newrow, this.dsOutput, row);
        	this.commUtil.popupClose(dsReturn);
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	var Form = this.tab_SearchType.tpg_SearchType.form;
        	var majorName = Form.cmb_Major.value;
        	var workFlag = Form.cmb_WorkFlag.value;

        	var dsName = "EMP_INFO";

        	var type = 0;

        	if(Form.cmb_Major.value == 0 && Form.cmb_WorkFlag.value == 0) //학과, 재직구분이 전체일 때
        	{
        		type = 0;
        	}
        	else if(Form.cmb_Major.value == 0 && Form.cmb_WorkFlag.value != 0) //학과만 전체일 때
        	{
        		type = 1;
        	}
        	else if(Form.cmb_Major.value != 0 && Form.cmb_WorkFlag.value == 0) //재직구분만 전체일 때
        	{
        		type = 2;
        	}
        	else if (Form.cmb_Major.value != 0 && Form.cmb_WorkFlag.value != 0) //학과, 재직구분 모두 전체가 아닐 때
        	{
        		type = 3;
        	}

        	this.transaction
        	(
        		"Select"
        	   ,"svc::DaelimUniversity/Service/select.jsp?dsName=" + dsName + "&majorName=" + majorName + "&workFlag=" + workFlag + "&type=" + type
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
        			this.tab_Data.tpg_Data.form.grd_Data.setFocus(true);
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
        		case "btn_Close" :
        			this.commUtil.popupClose("");
        			break;
        	}
        };

        this.tab_Data_tpg_Data_grd_Data_oncellposchanged = function(obj,e)
        {
        	var form = this.tab_SearchType.tpg_SearchType.form;

        	form.edt_EmpNo.set_value(this.dsOutput.getColumn(e.row, "EMP_NO"));
        	form.edt_EmpName.set_value(this.dsOutput.getColumn(e.row, "EMP_NAME"));
        };

        this.tab_Data_tpg_Data_grd_Data_oncelldblclick = function(obj,e)
        {
        	this.fnReturnOne(obj.currentrow);
        };

        this.tab_Data_tpg_Data_grd_Data_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnReturnOne(obj.currentrow);
        	}
        };

        this.comm_Search = function(obj,e)
        {
        	this.fnSearch();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Tc_onload,this);
            this.tab_SearchType.tpg_SearchType.form.cmb_Major.addEventHandler("onitemchanged",this.comm_Search,this);
            this.tab_SearchType.tpg_SearchType.form.cmb_WorkFlag.addEventHandler("onitemchanged",this.comm_Search,this);
            this.tab_Data.tpg_Data.form.grd_Data.addEventHandler("oncellposchanged",this.tab_Data_tpg_Data_grd_Data_oncellposchanged,this);
            this.tab_Data.tpg_Data.form.grd_Data.addEventHandler("oncelldblclick",this.tab_Data_tpg_Data_grd_Data_oncelldblclick,this);
            this.tab_Data.tpg_Data.form.grd_Data.addEventHandler("onkeydown",this.tab_Data_tpg_Data_grd_Data_onkeydown,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("Tc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
