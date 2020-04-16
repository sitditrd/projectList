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
            this.set_titletext(" Task Information");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,302);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSchedule", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Id","10","10","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ID");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_MileStone","10","238","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("MileStone");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Notice","10","162","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Notice");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_StartDay","10","48","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("StartDay");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_EndDay","10","86","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("EndDay");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Notice","123","168","287","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","276",null,"26","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("#101597");
            obj.set_color("white");
            obj.set_font("normal 700 16pt/normal \"Baskerville Old Face\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"280","64","18","4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_escapebutton("true");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,"280","64","18","71",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("확인");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Progress","10","200","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Progress");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Progress","123","207","287","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Id","123","10","287","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha,full");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_MileStone","124","247","14","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_StartDay","123","48","287","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_EndDay","123","86","287","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Temp","128","675","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Temp","0","675","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TaskType","10","124","103","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("TaskType");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_TaskType","123","126","286","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_TaskType_innerdataset = new nexacro.NormalDataset("cmb_TaskType_innerdataset", obj);
            cmb_TaskType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NT</Col><Col id=\"datacolumn\">Normal_Task</Col></Row><Row><Col id=\"codecolumn\">ST</Col><Col id=\"datacolumn\">Summary_Task</Col></Row></Rows>");
            obj.set_innerdataset(cmb_TaskType_innerdataset);
            obj.set_text("Normal_Task");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Temp","256","675","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,302,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TaskInformation.xfdl","lib::comLib_Comm.xjs");
        this.addIncludeScript("TaskInformation.xfdl","lib::CommUtil.xjs");
        this.registerScript("TaskInformation.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통
        * 02. 화면명   : TaskInformation
        * 03. 화면설명 :
        * 04. 작성일   : 2020.04.02
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
        this.executeIncludeScript("lib::comLib_Comm.xjs"); /*include "lib::comLib_Comm.xjs"*/
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.calFlag = 0;
        this.proFlag = 0;

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.Multi_Popup_onload = function(obj,e)
        {
        	this.fnInitForm();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInitForm = function()
        {
        	//ID값 생성(Unique ID값 - UUID)
        	var strId = this.fnGetUniqueId();
        	this.edt_Id.set_value(strId);
        };

        this.fnUniqueId = function()
        {
        	return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
        };

        this.fnGetUniqueId = function()
        {
            return this.fnUniqueId() + this.fnUniqueId() + '-' + this.fnUniqueId() + '-' + this.fnUniqueId() + '-' + this.fnUniqueId() + '-' + this.fnUniqueId() + this.fnUniqueId() + this.fnUniqueId();
        };

        this.fnGetMsg = function()
        {
        	var msgAry = new Array();

        	if(nexacro.toNumber(this.cal_StartDay.value) >  nexacro.toNumber(this.cal_EndDay.value))
        	{
        		alert("시작일은 종료일보다 클 수 없습니다.");
        		this.cal_StartDay.setFocus();
        		return;
        	}

        	if(this.gfn_Null(this.cal_StartDay.value))
        		msgAry.push("startDay를 선택해 주십시오.\n");
        	if(this.gfn_Null(this.cal_EndDay.value))
        		msgAry.push("endDay를 선택해 주십시오.\n");
        	if(this.gfn_Null(this.edt_Notice.value))
        		msgAry.push("notice를 작성해 주십시오.\n");
        	if(this.gfn_Null(this.edt_Progress.value))
        		msgAry.push("progress를 표시해 주십시오.\n");
        	if(this.gfn_Null(this.cmb_TaskType.value))
        		msgAry.push("taskType을 표시해 주십시오.\n");
        	if(this.gfn_Null(this.chb_MileStone.value))
        		msgAry.push("mileStone을 지정해 주십시오.\n");

        	return msgAry.join(", ");
        };

        this.fnGetReturn = function()
        {
        	var sArgument = {
        						ID 			: this.edt_Id.value,
        						startDay 	: this.cal_StartDay.value,
        						endDay 		: this.cal_EndDay.value,
        						notice 		: this.edt_Notice.value,
        						progress 	: this.edt_Progress.value,
        						taskType 	: this.cmb_TaskType.value,
        						mileStone 	: this.chb_MileStone.value ? 1 : 0
        					};

        	this.commUtil.popupClose(sArgument);
        };

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
        		case "btn_Confirm" :
        			var nMsg = this.fnGetMsg();

        			if(!this.gfn_Null(nMsg))
        			{
        				if(nMsg.length > 0)
        					alert(nMsg);
        				return;
        			}

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

        this.chb_MileStone_onchanged = function(obj,e)
        {
        	//마일스톤일 때
        	if(obj.value == 1)
        	{
        		if(!this.gfn_Null(this.cal_EndDay.value))
        		{
        			this.cal_Temp.set_value(this.cal_EndDay.value);
        			this.cal_EndDay.set_value(this.cal_StartDay.value);
        			this.cal_EndDay.set_enable(false);
        		}
        		else
        		{
        			if(this.gfn_Null(this.cal_StartDay.value))
        			{
        				alert("startDay를 입력해주세요");
        				this.chb_MileStone.set_value(0);
        				return;
        			}
        			else
        			{
        				this.calFlag = 1;
        				this.cal_EndDay.set_value(this.cal_StartDay.value);
        				this.cal_EndDay.set_enable(false);
        			}
        		}

        		if(!this.gfn_Null(this.edt_Progress.value))
        		{
        			this.edt_Temp.set_value(this.edt_Progress.value)
        			this.edt_Progress.set_value(100);
        			this.edt_Progress.set_enable(false);
        		}
        		else
        		{
        			this.proFlag = 1;
        			this.edt_Progress.set_value(100);
        			this.edt_Progress.set_enable(false);
        		}

        		if(!this.gfn_Null(this.cmb_TaskType.value))
        		{
        			this.cmb_Temp.set_value(this.cmb_TaskType.value);
        			this.cmb_TaskType.set_value(0);
        			this.cmb_TaskType.set_enable(false);
        		}
        	}
        	//마일스톤이 아닐 때
        	else
        	{
        		if(!this.gfn_Null(this.cal_Temp.value))
        		{
        			this.cal_EndDay.set_value(this.cal_Temp.value);
        			this.cal_EndDay.set_enable(true);
        		}

        		if(!this.gfn_Null(this.edt_Temp.value))
        		{
        			this.edt_Progress.set_value(this.edt_Temp.value);
        			this.edt_Progress.set_enable(true);
        		}

        		if(!this.gfn_Null(this.cmb_Temp.value))
        		{
        			this.cmb_TaskType.set_value(this.cmb_Temp.value);
        			this.cmb_TaskType.set_enable(true);
        		}

        		if(this.calFlag == 1)
        		{
        			this.calFlag = 0;
        			this.cal_EndDay.set_value("");
        			this.cal_EndDay.set_enable(true);
        		}

        		if(this.proFlag = 1)
        		{
        			this.proFlag = 0;
        			this.edt_Progress.set_value("");
        			this.edt_Progress.set_enable(true);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Multi_Popup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.edt_Progress.addEventHandler("onkeydown",this.edt_Filter_onkeydown,this);
            this.edt_Progress.addEventHandler("onkeyup",this.edt_Filter_onkeyup,this);
            this.chb_MileStone.addEventHandler("onchanged",this.chb_MileStone_onchanged,this);
        };

        this.loadIncludeScript("TaskInformation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
