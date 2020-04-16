(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Multi_Popup");
            this.set_titletext("팝업화면");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput3", this);
            obj._setContents("<ColumnInfo><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput4", this);
            obj._setContents("<ColumnInfo><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","649",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("#c4c4c4");
            obj.set_color("white");
            obj.set_font("normal 700 16pt/normal \"Baskerville Old Face\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("  MultiTactPopup");
            obj.set_background("#2918a9");
            obj.set_color("white");
            obj.set_font("normal 700 16pt/normal \"Baskerville Old Face\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"653","72","22","6",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_escapebutton("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,"653","72","22","86",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exit",null,"5","24","22","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("x");
            obj.set_escapebutton("true");
            obj.set_font("normal 700 13pt/normal \"Arial\"");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","44","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Manager_ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","82","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Department_ID");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_First_Name","4","120","385","525",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsOutput3");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"335\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FIRST_NAME\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/></Band><Band id=\"body\"><Cell text=\"bind:FIRST_NAME\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Last_Name","398","158","398","487",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"349\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"LAST_NAME\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"body\"><Cell text=\"bind:LAST_NAME\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","398","82","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("ExecuteTime");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","398","44","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("TactTime");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","620","44","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Priority");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ExecuteTime","509","82","287","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","398","120","114","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Last_Name_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Filter","517","120","244","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Filter","765","119","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("url(\'imagerc::btn_WF_search02.png\') no-repeat center center");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Tacttime","509","44","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Priority","691","44","105","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_First_Name","119","44","270","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsOutput");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Last_Name","119","81","270","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsOutput2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TactTime_Popup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TactTime_Popup.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("TactTime_Popup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 다중삽입 ()
        * 03. 화면설명 :
        * 04. 작성일   : 2019.06.12
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
        this.Multi_Popup_onload = function(obj,e)
        {
        	this.fnInitForm();
        };

        this.fnValidation = function()
        {
        	var msgAry = new Array();

        	if(!this.dsOutput3.getCaseCount("CHK == 1") > 0)
        		msgAry.push("FIRST_NAME을 선택해 주십시오.\n");
        	if(!this.dsOutput4.getCaseCount("CHK == 1") > 0)
        		msgAry.push("LAST_NAME을 선택해 주십시오.\n");
        	if(this.gfnIsEmpty(this.edt_Tacttime.value))
        		msgAry.push("TactTime을 지정해 주십시오.\n");
        	if(this.gfnIsEmpty(this.edt_Priority.value))
        		msgAry.push("Priority을 지정해 주십시오.\n");

        	return msgAry.join(", ");
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInitForm = function()
        {
        	this.fnSearch();
        };

        this.fnGetReturn = function()
        {
        	var ds_FIRST_NAME = new nexacro.Dataset();
        	var ds_LAST_NAME = new nexacro.Dataset();

        	ds_FIRST_NAME.addColumn("FIRST_NAME", "STRING", 256);
        	ds_FIRST_NAME.addColumn("MANAGER_ID", "STRING", 256);
        	ds_FIRST_NAME.addColumn("CHK", "STRING", 256);

        	for(var i=0; i<this.dsOutput3.rowcount; i++)
        	{
        		if(this.dsOutput3.getColumn(i, "CHK") == 1)
        		{
        			var nRow = ds_FIRST_NAME.addRow();
        			ds_FIRST_NAME.copyRow(nRow, this.dsOutput3, i);
        		}
        	}

        	ds_LAST_NAME.addColumn("LAST_NAME", "STRING", 256);
        	ds_LAST_NAME.addColumn("DEPARTMENT_ID", "STRING", 256);
        	ds_LAST_NAME.addColumn("CHK", "STRING", 256);

        	for(var i=0; i<this.dsOutput4.rowcount; i++)
        	{
        		if(this.dsOutput4.getColumn(i, "CHK") == 1)
        		{
        			var nRow = ds_LAST_NAME.addRow();
        			ds_LAST_NAME.copyRow(nRow, this.dsOutput4, i);
        		}
        	}

        	var sArgument = {
        						ds_FIRST_NAME : ds_FIRST_NAME,
        					    ds_LAST_NAME : ds_LAST_NAME,
        					    "p_RowIndex" : this.parent.p_RowIndex
        				 	};

        	this.commUtil.popupClose(sArgument);
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	this.transaction
        	(
        		"Select",
        		"http://14.63.224.112/gscm/service/poc/poc_02_TactTimePopup.jsp",
        		"",
        		"dsOutput=dsOutput dsOutput2=dsOutput2 dsOutput3=dsOutput3 dsOutput4=dsOutput4",
        		"",
        		"fnCallBack"
        	)
        };

        this.fnCallBack = function(svcId, errCode, errMsg)
        {
        	if(errCode < 0)
        	{
        		this.alert("errCode : " + errCode + "\n" + errMsg + "errMsg");
        	}
        	else
        	{
        		if(svcId == "Select")
        		{

        		}
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Confirm" :
        			var valiCheck = this.fnValidation();

        			if(valiCheck.length > 0)
        				alert(valiCheck);
        			else
        				this.fnGetReturn();

        			break;

        		case "btn_Close" :
        			this.commUtil.popupClose("");
        			break;

        		case "btn_Exit" :
        			this.commUtil.popupClose("");
        			break;
        	}
        };

        this.Combo_onitemchanged = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "cmb_First_Name" :
        			//초기화
        			this.dsOutput3.filter("");
        			//FilterSettings
        			this.dsOutput3.filter("MANAGER_ID == '" + obj.text + "'");
        			break;
        		case "cmb_Last_Name" :
        			//초기화
        			this.dsOutput4.filter("");
        			//FilterSettings
        			this.dsOutput4.filter("DEPARTMENT_ID == '" + obj.text + "'");
        			break
        	}
        };

        this.edt_Filter_onkeydown = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		if(!this.edt_Filter.text.length > 0)
        			this.dsOutput4.filter("");
        		else
        			this.dsOutput4.filter("DEPARTMENT_ID == '" + obj.text + "'");
        	}
        };

        this.btn_Filter_onclick = function(obj,e)
        {
        	this.dsOutput4.filter("DEPARTMENT_ID == '" + obj.text + "'");
        };

        this.edt_Tacttime_onkeyup = function(obj,e)
        {
        	if(!this.gfnIsEmpty(this.edt_Tacttime.value))
        		this.edt_ExecuteTime.set_value(parseInt(this.edt_Tacttime.value)*1000);
        	else
        		this.edt_ExecuteTime.set_value("");
        };

        //FIRST_NAME 전체선택
        this.grd_First_Name_onheadclick = function(obj,e)
        {
        	if(e.col == 1)
        	{
        		var chk = this.grd_First_Name.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			this.grd_First_Name.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsOutput3.rowcount; i++)
        			{
        				this.dsOutput3.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			this.grd_First_Name.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsOutput3.rowcount; i++)
        			{
        				this.dsOutput3.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        //LAST_NAME 전체선택
        this.grd_Last_Name_onheadclick = function(obj,e)
        {
        	if(e.col == 1)
        	{
        		var chk = this.grd_Last_Name.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			this.grd_Last_Name.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsOutput4.rowcount; i++)
        			{
        				this.dsOutput4.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			this.grd_Last_Name.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsOutput4.rowcount; i++)
        			{
        				this.dsOutput4.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        this.edt_Filter_onkeyup = function(obj,e)
        {
        	this.dsOutput4.filter("String(DEPARTMENT_ID).indexOf('" + obj.text + "') >= 0");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Multi_Popup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Exit.addEventHandler("onclick",this.comm_Click,this);
            this.grd_First_Name.addEventHandler("onheadclick",this.grd_First_Name_onheadclick,this);
            this.grd_Last_Name.addEventHandler("onheadclick",this.grd_Last_Name_onheadclick,this);
            this.edt_Filter.addEventHandler("onkeydown",this.edt_Filter_onkeydown,this);
            this.edt_Filter.addEventHandler("onkeyup",this.edt_Filter_onkeyup,this);
            this.btn_Filter.addEventHandler("onclick",this.btn_Filter_onclick,this);
            this.edt_Tacttime.addEventHandler("onkeyup",this.edt_Tacttime_onkeyup,this);
            this.cmb_First_Name.addEventHandler("onitemchanged",this.Combo_onitemchanged,this);
            this.cmb_Last_Name.addEventHandler("onitemchanged",this.Combo_onitemchanged,this);
        };

        this.loadIncludeScript("TactTime_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
