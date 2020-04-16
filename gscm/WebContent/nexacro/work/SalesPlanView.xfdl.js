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
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"productname\" type=\"STRING\" size=\"256\"/><Column id=\"itemname\" type=\"STRING\" size=\"256\"/><Column id=\"measurename\" type=\"STRING\" size=\"256\"/><Column id=\"w201801\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201802\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201803\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201804\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"mJAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201805\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201806\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201807\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"w201808\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"mFEB\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dimensionid", this);
            obj._setContents("<ColumnInfo><Column id=\"dimensionid\" type=\"STRING\" size=\"256\"/><Column id=\"dimensiontype\" type=\"STRING\" size=\"256\"/><Column id=\"dimensionname\" type=\"STRING\" size=\"256\"/><Column id=\"fixchk\" type=\"STRING\" size=\"256\"/><Column id=\"colsize\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dimensionid\">sales</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">70</Col><Col id=\"level\">0</Col><Col id=\"dimensionname\">Sales</Col><Col id=\"dimensiontype\">sales</Col></Row><Row><Col id=\"dimensionid\">product</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">80</Col><Col id=\"level\">0</Col><Col id=\"dimensionname\">Product</Col><Col id=\"dimensiontype\">product</Col></Row><Row><Col id=\"dimensionid\">item</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">100</Col><Col id=\"level\">0</Col><Col id=\"dimensiontype\">item</Col><Col id=\"dimensionname\">ITEM</Col></Row><Row><Col id=\"dimensionid\">site</Col><Col id=\"fixchk\">0</Col><Col id=\"colsize\">120</Col><Col id=\"level\">0</Col><Col id=\"dimensionname\">Site</Col><Col id=\"dimensiontype\">site</Col></Row><Row><Col id=\"dimensionname\">Plan</Col><Col id=\"dimensionid\">plan</Col><Col id=\"dimensiontype\">plan</Col><Col id=\"fixchk\">1</Col><Col id=\"colsize\">60</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"dimensionid\">measure</Col><Col id=\"fixchk\">1</Col><Col id=\"colsize\">120</Col><Col id=\"dimensionname\">Category</Col><Col id=\"level\">0</Col><Col id=\"dimensiontype\">measure</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dimension", this);
            obj._setContents("<ColumnInfo><Column id=\"dimensionid\" type=\"STRING\" size=\"256\"/><Column id=\"dimensiontype\" type=\"STRING\" size=\"256\"/><Column id=\"dimensionname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dimensionid\">sales</Col><Col id=\"dimensionname\">Sales</Col><Col id=\"dimensiontype\">sales</Col></Row><Row><Col id=\"dimensionid\">plan</Col><Col id=\"dimensiontype\">plan</Col><Col id=\"dimensionname\">Plan</Col></Row><Row><Col id=\"dimensionid\">measure</Col><Col id=\"dimensiontype\">measure</Col><Col id=\"dimensionname\">Category</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_measure", this);
            obj._setContents("<ColumnInfo><Column id=\"rowchk\" type=\"STRING\" size=\"256\"/><Column id=\"measuresort\" type=\"STRING\" size=\"256\"/><Column id=\"measureid\" type=\"STRING\" size=\"256\"/><Column id=\"measurename\" type=\"STRING\" size=\"256\"/><Column id=\"oldmeasureid\" type=\"STRING\" size=\"256\"/><Column id=\"functionid\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemfilter", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_function", this);
            obj._setContents("<ColumnInfo><Column id=\"functionid\" type=\"STRING\" size=\"256\"/><Column id=\"functionname\" type=\"STRING\" size=\"256\"/><Column id=\"functiondisplayorder\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"functionid\">F018</Col><Col id=\"functionname\">Standard</Col><Col id=\"functiondisplayorder\">1</Col></Row><Row><Col id=\"functionid\">F130</Col><Col id=\"functionname\">FCST Analysis</Col><Col id=\"functiondisplayorder\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new StandardGrid("grd_main","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SM","0","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTemp",null,"0","90","20","676",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_format("###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static20",null,"8","120","20","381",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("서버/네트워크 시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stSearchTime","Static20:8","8","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","stSearchTime:8","8","88","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초, 렌더링시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRenderTime","Static21:8","8","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","stRenderTime:32","8","48","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회건수");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCount",null,"8","61","20","8",null,null,null,null,null,this);
            obj.set_taborder("8");
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
        this.registerScript("SalesPlanView.xfdl", function() {
        this.executeIncludeScript("Script::excel.xjs"); /*include "Script::excel.xjs"*/;

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
        	nxlib.setDsParam(this, "functionid", nxlib.getFunctionID(this));

        	// Filter Data Set Param
        	this._fv_objFilterForm.fn_setParam();

        	var oDatas = {
        		svcid: "searchMain",
        		url: "demand/plananalysis/sales/list.do",
        		inds: [
        			"ds_dimension=ds_dimension",
        			"ds_measure=ds_measure",
        			"ds_itemfilter=ds_itemfilter",
        			"ds_week=ds_week"
        		],
        		outds: [
        			"ds_main=ds_main"
        		]
        	};

        	nxlib.transaction(this, oDatas);
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
        	objInfo.url = ["work::SalesPlanFilter.xfdl"];
        	objInfo.height = 198;

        	return objInfo;
        };

        this.fn_gridSet = function()
        {
        	Eco.Logger.startElapsed();
        	this.grd_main.set_binddataset("");

        	this.grd_main.createFormat();
        	this.grd_main.appendContentsRow("head");
        	this.grd_main.appendContentsRow("body");

        	this.grd_main.set_visible(false);

        	this.grd_main.setFormatRowProperty(0, "size", 24);
        	this.grd_main.setFormatRowProperty(1, "size", 30);

        	this.grd_main.setFormatColProperty(0, "size", 20);
        	this.grd_main.setCellProperty("body", 0, "cssclass", "RowStatus");

        	var strMonth = this.ds_week.getColumn(0, "month");
            var strMonthName = this.ds_week.getColumn(0, "monthname");

        	// 디멘젼 컬럼을 추가한다.
        	for(var i = 0; i < this.ds_dimension.rowcount; i++)
        	{
        		this.grd_main.addColumnEx(
        		   this.ds_dimensionid.lookup("dimensionid", this.ds_dimension.getColumn(i, "dimensionid"), "colsize"),
        		   this.ds_dimension.getColumn(i, "dimensionname"),
        		   "",
        		   "",
        		   "",
        		   "bind:" + this.ds_dimension.getColumn(i, "dimensiontype") + "name",
        		   "",
        		   "",
        		   "Dimension",
        		   true,
        		   true);
        	}

        	// 주차 컬럼을 추가한다.
        	var currentWeek = this._fv_objFilterForm.ds_currentdate.getColumn(0, "week");
        	var strMonth = this.ds_week.getColumn(0, "month");
            var bkColor;

        	for (var i = 0; i < this.ds_week.rowcount; i++)
        	{
        		//현재기준 전주차는 회색으로 표시.
                if (this.ds_week.getColumn(i, "week") < currentWeek)
        		{
        		    bkColor = "PrevWeekColor";
                }
        		else
        		{
        		    bkColor = "NextWeekColor";
                }

        		// Week Setting..
        		this.grd_main.addColumnEx(
        		   100,
        		   this.ds_week.getColumn(i, "week"),
        		   "",
        		   "",
        		   "",
        		   "bind:w" + this.ds_week.getColumn(i, "week"),
        		   "number",
        		   "",
        		   bkColor,
        		   false,
        		   false);

        		// Month Setting..
        		if (strMonth != this.ds_week.getColumn(i + 1, "month"))
        		{
        			this.grd_main.addColumnEx(
        				100,
        				"(-)" + this.ds_week.getColumn(i, "monthname"),
        				"",
        				"",
        				"",
        				"bind:m" + this.ds_week.getColumn(i, "month"),
        				"number",
        				"",
        				"MonthColor",
        				false,
        				false);

        			strMonth = this.ds_week.getColumn(i + 1, "month");
        		}
        	}

        	// Total Setting..
        	this.grd_main.addColumnEx(
        	   100,
        	   "Total",
        	   "",
        	   "",
        	   "",
        	   "bind:rowtotal",
        	   "number",
        	   "",
        	   "TotalColor",
        	   false,
        	   false);

        	this.grd_main.set_binddataset("ds_main");
        	this.grd_main.set_visible(true);
        	this.grd_main.initialize();
        	//trace(this.grd_main.getCurFormatString());
        	Eco.Logger.info({message:"Grid initialize", elapsed: true});
        };

        this.ds_week_onload = function(obj,e)
        {
        	this.fn_gridSet();
        };

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.fn_Search = function(betweenDay)
        {
        	//그리드 Copy & Paste
        	this.fn_setGrid(this.grd_SM);

        	this.dsOutput.clearData();

        	var sId = "SEARCH";
        	var sUrl = "http://localhost/gscm/service/skinnovation/Service_SSV_ZIP_inQuery.jsp?betweenDay=" + betweenDay + "&cnt=" + 1000;
        	var sInDs = "";
        	var sOutDs = "dsOutput=dsOutput";
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
        			this.endtime = new Date();
        			var totaltime = nexacro.round((this.endtime - this.starttime) / 1000, 3);

        			this.stSearchTime.set_text(elapsedTime + "초");
        			this.stRenderTime.set_text(nexacro.round(totaltime - elapsedTime, 3) + "초");

        			var nRowCount = this.dsOutput.rowcount;
        			var sRowCount;

        			this.mskTemp.set_value(nRowCount);

        			sRowCount = this.mskTemp.text;

        			this.stRowCount.set_text(sRowCount + "건");
        		}
        		else if (sId == "SAVE")
        		{
        			alert("저장 완료");
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SalesPlanView_onload,this);
            this.mskTemp.addEventHandler("onchanged",this.mskTemp_onchanged,this);
            this.ds_week.addEventHandler("onload",this.ds_week_onload,this);
        };

        this.loadIncludeScript("SalesPlanView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
