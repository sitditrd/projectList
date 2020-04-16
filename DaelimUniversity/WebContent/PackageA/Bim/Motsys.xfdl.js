(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Moar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_Set","8","12",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Set",this.tab_Set);
            obj.set_text("설정");
            this.tab_Set.addChild(obj.name, obj);

            obj = new Static("stc_SchoolYear",null,"4","88","22","268",null,null,null,null,null,this.tab_Set.tpg_Set.form);
            obj.set_taborder("1");
            obj.set_text("학년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_Set.tpg_Set.addChild(obj.name, obj);

            obj = new Static("stc_Semester",null,"4","88","22","90",null,null,null,null,null,this.tab_Set.tpg_Set.form);
            obj.set_taborder("2");
            obj.set_text("학기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label03");
            this.tab_Set.tpg_Set.addChild(obj.name, obj);

            obj = new Edit("edt_SchoolYear",null,"4","88","22","181",null,null,null,null,null,this.tab_Set.tpg_Set.form);
            obj.set_taborder("3");
            obj.set_value("2018");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_cssclass("edit_WF_edit01");
            obj.set_text("2018");
            this.tab_Set.tpg_Set.addChild(obj.name, obj);

            obj = new Combo("cmb_SemesterData",null,"4","88","22","3",null,null,null,null,null,this.tab_Set.tpg_Set.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_Set_tpg_Set_form_cmb_SemesterData_innerdataset = new nexacro.NormalDataset("tab_Set_tpg_Set_form_cmb_SemesterData_innerdataset", obj);
            tab_Set_tpg_Set_form_cmb_SemesterData_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(tab_Set_tpg_Set_form_cmb_SemesterData_innerdataset);
            obj.set_text("2학기");
            obj.set_value("0");
            obj.set_index("0");
            this.tab_Set.tpg_Set.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","72","24","11",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
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
        this.addIncludeScript("Motsys.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Motsys.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Motsys.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 성적년도학기관리 ()
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


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Save" :
        			this.alert("해당 기능은 서비스 중 입니다...")
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Moar_onload,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("Motsys.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
