(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Edu_01");
            this.set_titletext("CRUD ");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Search",null,"8","87","32","293",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Search");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","btn_Search:8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("dsOutput");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CM_CODE\"/><Cell col=\"1\" text=\"CD_CODE\"/><Cell col=\"2\" text=\"CAPTION\"/></Band><Band id=\"body\"><Cell text=\"bind:CM_CODE\"/><Cell col=\"1\" text=\"bind:CD_CODE\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:CAPTION\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"8","87","32","198",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Del",null,"8","87","32","103",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","87","32","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Edu_01.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Edu_01.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("Edu_01.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Edu_01.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : CRUD 기능 및 Grid 다양한 기능
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
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.Edu_01_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        };


        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
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

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	this.transaction
        	(
        		"search"
        	   ,"http://14.63.224.112/gscm/service/edu/select.jsp"
        	   ,""
        	   ,"dsOutput=dsOutput"
        	   ,""
        	   ,"fn_Callback"
        	)
        };

        this.fnSave = function()
        {
        	this.transaction
        	(
        		"save"
        	   ,"http://14.63.224.112/gscm/service/edu/save.jsp"
        	   ,"dsInput=dsOutput:u"
        	   ,""
        	   ,""
        	   ,"fn_Callback"
        	)
        };

        this.fn_Callback = function(svcId, errCode, errMsg)
        {
        	if(errCode < 0)
        	{
        		this.alert("errCode : " + errCode + " errMsg : " + errMsg);
        	}
        	else if(svcId == "search")
        	{

        	}
        	else if(svcId == "save")
        	{

        	}
        };


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var sArgument = {
        						"CM_CODE" : this.dsOutput.getColumn(e.row, "CM_CODE"),
        						"colId" : this.dsOutput.getColID(e.col)
        					};

        	this.commUtil.popup(this, "codeDetail", "comm::Edu_Popup_01.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        };

        this.fnPopupCallBack = function(popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "codeDetail" :
        			var ds = "";

        			var colId = "";
        			var colVal = "";
        			var type = "";

        			for(var i in popupArg)
        			{
        				//Dataset일 때
        				if(!this.gfnIsEmpty(this.gfnXCompTypeOf(popupArg[i])))
        				{
        					ds = new Dataset();
        					ds.assign(popupArg[i]); //ds.loadXML(popupArg[i].saveXML().toString());도 동일한 방법.
        				}
        				//Dataset이 아닐때
        				else
        				{
        					colId = popupArg[i].colId;
        					colVal = popupArg[i].colVal;
        					type = popupArg[i].type;
        				}
        			}

        			//특정 Cell 클릭 후 Popup호출하고 Popup에서 특정 Cell을 선택하여 넘어온 값으로 Cell값 변경.
        			if(type == "dbclick")
        			{
        				this.dsOutput.setColumn(this.dsOutput.rowposition, colId, colVal);
        			}
        			//Popup에서 넘어온 Row 한 줄 통째로 변경.
        			else if(type == "keydown")
        			{
        				this.dsOutput.copyRow(this.dsOutput.rowposition, ds, 0); //한 Row통째로 복사
        			}

        		break;
        	}
        }

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :
        			this.fnSearch();
        			break;
        		case "btn_Add" :
        			this.dsOutput.addRow();
        			break;
        		case "btn_Del" :
        			this.dsOutput.deleteRow(this.dsOutput.rowposition);
        			break;
        		case "btn_Save" :
        			var strMsg = this.fnSaveValidation(this.dsOutput, ["CM_CODE", "CD_CODE", "CAPTION"], ["CM_CODE", "CD_CODE", "CAPTION"]);

        			if(!this.gfnIsEmpty(strMsg))
        			{
        				alert(strMsg + "을 입력하세요.");
        			}
        			else
        			{
        				this.fnSave();
        			}
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Edu_01_onload,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_Add.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Del.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("Edu_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
