(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SalesPlanView");
            this.set_titletext("Sales Plan");
            if (Form == this.constructor)
            {
                this._setFormPosition(766,427);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_POC_PGITABLE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DIMENSIONINFO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DIMENSIONBODYINFO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new StandardGrid("grd_main","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_POC_PGITABLE");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTemp",null,"0","90","20","676",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_format("###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static20",null,"8","120","20","381",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서버/네트워크 시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stSearchTime","Static20:8","8","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","stSearchTime:8","8","88","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초, 렌더링시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRenderTime","Static21:8","8","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","stRenderTime:32","8","48","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회건수");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCount",null,"8","61","20","8",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0건");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",766,427,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SalesPlanView.xfdl","Script::excel.xjs");
        this.addIncludeScript("SalesPlanView.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SalesPlanView.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("SalesPlanView.xfdl", function() {
        this.executeIncludeScript("Script::excel.xjs"); /*include "Script::excel.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;

        this.SalesPlanView_onload = function(obj, e)
        {
        	this.parent.parent.fn_child_onload(obj);
        	//this.fn_formInit();
        };

        this.fn_formInit = function()
        {
        	nxlib.getMeasureList(this, this.ds_measure, nxlib.getFunctionID(this));
        	nxlib.getWeekList(this, this.ds_week, this._fv_objFilterForm.cld_Date.getStartDate(), this._fv_objFilterForm.cld_Date.getEndDate());
        };

        this.fn_apply = function()
        {
        // 	nxlib.setDsParam(this, "functionid", nxlib.getFunctionID(this));
        //
        // 	// Filter Data Set Param
        // 	this._fv_objFilterForm.fn_setParam();
        //
        // 	var oDatas = {
        // 		svcid: "searchMain",
        // 		url: "demand/plananalysis/sales/list.do",
        // 		inds: [
        // 			"ds_dimension=ds_dimension",
        // 			"ds_measure=ds_measure",
        // 			"ds_itemfilter=ds_itemfilter",
        // 			"ds_week=ds_week"
        // 		],
        // 		outds: [
        // 			"ds_main=ds_main"
        // 		]
        // 	};
        //
        // 	nxlib.transaction(this, oDatas);
        	if(this._fv_objFilterForm.cal_EndDate.value)
        		this.fnSearch();
        	else
        		alert("planId를 입력해 주십시오.");
        };

        // treeTab 생성정보 설정 및 반환
        this.fn_createTreeTab = function()
        {
        	var objTreeInfo = {};
         	var arrDefault = [];

            objTreeInfo.text   = ["Sales","Product","Site(To)"];
        	objTreeInfo.treeId = ["sales","product","tosite"];	//["sales","product","tosite"];
        	objTreeInfo.search = ["","",""];
            objTreeInfo.option = ["rdo,DPSALES,ORG","chk,,SET","rdo,DPSALES,ORG"];
            objTreeInfo.height = 210;

            //탭 초기값 설정
            arrDefault.push( [1, "rdo", {"view": "ORG", "defaultview": "ORG"}]);
            arrDefault.push( [2, "chk", {"view": "ATTB15", "defaultview": "SET^OPT"}]);
            arrDefault.push( [3, "rdo", {"view": "ORG", "defaultview": "ORG"}]);

            objTreeInfo.treeDefault = arrDefault;

         	return objTreeInfo;
        };

        // Function 생성정보 설정 및 반환
        this.fn_createFunction = function()
        {
        	var objInfo = {};

        	objInfo.titletext = ["Function"];
        	objInfo.menuId = [this.parent.parent.parent.menuInfo.menuCd];
        	objInfo.height = 57;
        	objInfo.search = false;

        	return objInfo;
        };

        // Filter 생성정보 설정 및 반환
        this.fn_createFilter = function(objInfo)
        {
        	var objInfo = {};

        	objInfo.titletext = ["Filter"];
        	objInfo.url = ["poc01::SalesPlanFilter.xfdl"];
        	objInfo.height = 198;

        	return objInfo;
        };

        this.fn_gridSet = function()
        {
        	//Eco.Logger.startElapsed();
        	this.grd_main.set_binddataset("");

        	this.grd_main.createFormat();
        	this.grd_main.appendContentsRow("head");
        	this.grd_main.appendContentsRow("body");

        	this.grd_main.set_visible(true);

        	this.grd_main.setFormatRowProperty(0, "size", 24);
        	this.grd_main.setFormatRowProperty(1, "size", 30);

        	this.grd_main.setFormatColProperty(0, "size", 20);

        	this.grd_main.setCellProperty("head", 0, "cssclass", "HeadStatus");
        	this.grd_main.setCellProperty("body", 0, "cssclass", "RowStatus");

        	var i;

        	// 디멘젼 컬럼을 추가한다.
        	for (i = 0; i < this.ds_DIMENSIONINFO.rowcount; i++)
        	{
        		this.grd_main.addColumnEx
        		(
        		   //this.ds_dimensionid.lookup("dimensionid", this.ds_dimension.getColumn(i, "dimensionid"), "colsize"),
        		   this.ds_DIMENSIONINFO.getColumn(i, "DEMENSIONCOLSIZE"),
        		   this.ds_DIMENSIONINFO.getColumn(i, "DEMENSIONNAME"),
        		   "",
        		   "",
        		   "HeadStatus",
        		   "bind:" + this.ds_DIMENSIONINFO.getColumn(i, "DEMENSIONNAME"),
        		   "",
        		   "",
        		   "Dimension",
        		   true,
        		   true
        		);
        	}

        	// 주차 컬럼을 추가한다.
        	var currentWeek = "20190401"; //_fv_objFilterForm.ds_currentdate.getColumn(0, "week");
            var strMonth = this.ds_DIMENSIONBODYINFO.getColumn(0, "MONTH");
        	var bkColor;

        	for (i = 0; i < this.ds_DIMENSIONBODYINFO.rowcount; i++)
        	{
        		//현재기준 전주차는 회색으로 표시.
                if (this.ds_DIMENSIONBODYINFO.getColumn(i, "WEEK") < currentWeek)
        		{
        		    bkColor = "PrevWeekColor";
                }
        		else
        		{
        		    bkColor = "NextWeekColor";
                }

        		// Week Setting..
        		if(this.ds_DIMENSIONBODYINFO.getColumn(i, "TYPE") == "W")
        		{
        			this.grd_main.addColumnEx
        			(
        			   100,
        			   this.ds_DIMENSIONBODYINFO.getColumn(i, "WEEK"),
        			   "",
        			   "",
        			   "HeadStatus",
        			   "bind:W" + this.ds_DIMENSIONBODYINFO.getColumn(i, "WEEK"),
        			   "number",
        			   "",
        			   bkColor,
        			   false,
        			   false
        			);
        		}

        		// Month Setting..
        		if (this.ds_DIMENSIONBODYINFO.getColumn(i, "TYPE") == "M")
        		{
        			this.grd_main.addColumnEx
        			(
        				100,
        				"(-)" + this.ds_DIMENSIONBODYINFO.getColumn(i, "MONTH"),
        				"",
        				"",
        				"HeadStatus",
        				"bind:M" + this.ds_DIMENSIONBODYINFO.getColumn(i, "WEEK"),
        				"number",
        				"",
        				"MonthColor",
        				false,
        				false
        			);
        		}
        	}

        	// Total Setting..
        	this.grd_main.addColumnEx
        	(
        	   100,
        	   "Total",
        	   "",
        	   "",
        	   "HeadStatus",
        	   "bind:rowtotal",
        	   "number",
        	   "",
        	   "TotalColor",
        	   false,
        	   false
        	);

        	this.grd_main.set_binddataset("ds_POC_PGITABLE");
        	this.grd_main.set_visible(true);
        	this.grd_main.initialize();

        	//trace(this.grd_main.getCurFormatString());
        	//Eco.Logger.info({message:"Grid initialize", elapsed: true});
        };

        this.ds_week_onload = function(obj,e)
        {
        	//this.fn_gridSet();
        };

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.fnSearch = function()
        {
        	var sId = "SEARCH";
        	var sUrl = "http://14.63.224.112/gscm/service/poc/poc_01.jsp";
        	var sInDs = "";
        	var sOutDs = "ds_DIMENSIONINFO=ds_DIMENSIONINFO ds_DIMENSIONBODYINFO=ds_DIMENSIONBODYINFO ds_POC_PGITABLE=ds_POC_PGITABLE";
        	var sParam = "";
        	var sCallback = "fn_Callback";

        	this.starttime = new Date();
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);
        }

        this.fn_Callback = function(sId, nErrorCd, sErrorMsg, elapsedTime)
        {
        	if (nErrorCd < 0)
        	{
        		alert("[" + nErrorCd + "]" + sErrorMsg);
        	}
        	else
        	{
        		if (sId == "SEARCH")
        		{
        			trace(this.ds_DIMENSIONBODYINFO.saveXML());
        			this.endtime = new Date();
        			var totaltime = nexacro.round((this.endtime - this.starttime) / 1000, 3);

        			this.stSearchTime.set_text(elapsedTime + "초");
        			this.stRenderTime.set_text(nexacro.round(totaltime - elapsedTime, 3) + "초");

        			var nRowCount = this.ds_POC_PGITABLE.rowcount;
        			var sRowCount;

        			this.mskTemp.set_value(nRowCount);

        			sRowCount = this.mskTemp.text;

        			this.stRowCount.set_text(sRowCount + "건");

        			this.fn_gridSet();
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SalesPlanView_onload,this);
            this.mskTemp.addEventHandler("onchanged",this.mskTemp_onchanged,this);
        };

        this.loadIncludeScript("SalesPlanView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
