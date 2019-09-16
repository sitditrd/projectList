(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Edu_Popup_01");
            this.set_titletext("팝업화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","8","40",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","72","22","89",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","72","22","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Edu_Popup_01.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Edu_Popup_01.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Edu_Popup_01.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 팝업화면
        * 03. 화면설명 :
        * 04. 작성일   : 2019.05.22
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
        this.Edu_Popup_01_onload = function(obj,e)
        {
        	this.fnSearch(this.parent.CM_CODE);
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnReturnOne = function(row, colId, colVal, type)
        {
        	var dsReturn = new nexacro.Dataset();
        	dsReturn.assign(this.dsOutput);
        	dsReturn.clearData();

        	var newrow = dsReturn.addRow();
        	dsReturn.copyRow(newrow, this.dsOutput, row);

        	var objInfo = {
        				  	 "colId" : colId,
        				     "colVal" : colVal,
        				     "type" : type
        				  }

        	var sArgument = {
        					   dsReturn : dsReturn,
        				       "clickCellInfo" : objInfo
        					};

        	this.commUtil.popupClose(sArgument);
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function(CM_CODE)
        {
        	this.transaction
        	(
        		"select"
        	   ,"http://14.63.224.112/gscm/service/edu/select2.jsp?CM_CODE=" + CM_CODE
        	   ,""
        	   ,"dsOutput=dsOutput"
        	   ,""
        	   ,"fnCallBack"
        	)
        };

        this.fnCallBack = function(svcId, errCode, errMsg)
        {
        	if(errCode < 0)
        	{
        		alert("errCode : " + errCode + "\n" + "errMsg : " + errMsg);
        	}
        	else
        	{
        		if(svcId == "select")
        		{
        			this.Grid00.createFormat();
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
        		case "btn_Search" :
        			this.fnSearch(this.parent.CM_CODE);
        			break;
        		case "btn_Close" :
        			this.commUtil.popupClose("");
        			break;
        	}
        };

        //특정 CE
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fnReturnOne(obj.currentrow, this.parent.colId, this.dsOutput.getColumn(e.row, this.dsOutput.getColID(e.col)), "dbclick");
        };

        this.Grid00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnReturnOne(this.dsOutput.rowposition, "", "", "keydown");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Edu_Popup_01_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("onkeydown",this.Grid00_onkeydown,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("Edu_Popup_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
