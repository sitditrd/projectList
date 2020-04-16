(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SalesPlanFilter");
            this.set_titletext("Sales Filter");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,438);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_preplan", this);
            obj._setContents("<ColumnInfo><Column id=\"planid\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"planid\">20190101</Col></Row><Row><Col id=\"planid\">20190201</Col></Row><Row><Col id=\"planid\">20190301</Col></Row><Row><Col id=\"planid\">20190401</Col></Row><Row><Col id=\"planid\">20190501</Col></Row><Row><Col id=\"planid\">20190601</Col></Row><Row><Col id=\"planid\">20190701</Col></Row><Row><Col id=\"planid\">20190801</Col></Row><Row><Col id=\"planid\">20190901</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sales", this);
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lvl\">0</Col><Col id=\"name\">ALL</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">NORTH AMERICA</Col></Row><Row><Col id=\"name\">SEA-CBD</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">B2B-HOSP</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SECA</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SEM</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">STA</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Cal_Pre_Week", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","0","178","190","82",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","9","224","60","17",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Start Week");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","188",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Plan Id Comparison");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_prePlan","77","220","104","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_preplan");
            obj.set_codecolumn("planid");
            obj.set_datacolumn("planid");
            obj.set_displayrowcount("10");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_planComp","157","189","14","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","0",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_WF_noneLine");
            obj.set_visible("true");
            obj.set_scrollbartype("none none");
            obj.set_binddataset("ds_sales");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"268\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treecheck=\"bind:chk\" treelevel=\"bind:lvl\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","7","273",null,"30","1",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("startDate");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","8","311",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("endDate");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_StartDate","64","278","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_EndDate","64","315","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,438,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SalesPlanFilter.xfdl", function() {
        this.sDayWeekViewPoint = "WEEK"; // DAY, WEEK

        this.SalesPlanFilter_onload = function(obj,e)
        {
        	//this.fn_formInit();
        };

        this.fn_formInit = function()
        {
        	this.chk_planComp.set_value(true);
        	this.btn_week.set_visible(true);
        	this.btn_day.set_visible(false);

        	nxlib.setDsParam(this, "viewpoint", this.sDayWeekViewPoint);

        	var oDatas = {
        		svcid: "selectWeek",
        		url: "demand/plananalysis/sales/selectweeklist.do",
        		outds: [
        			"ds_curplan=ds_curplan",
        			"ds_preplan=ds_preplan"
        		]
        	};

        	nxlib.transaction(this, oDatas);
        };

        this.fn_compareCheck = function()
        {
        	if (this.chk_planComp.isChecked())
        	{
        		this.cld_Date.setStartDate(this.ds_preplan.getColumn(this.cmb_prePlan.index, "effstartdate"));
        	}
        	else
        	{
        		this.cld_Date.setStartDate(this.ds_curplan.getColumn(this.cmb_curPlan.index, "effstartdate"));
        	}
        };

        this.fn_defaultCurPlan = function()
        {
        	if (this.sDayWeekViewPoint == "DAY")
        	{
        		for (var i = 0; i < this.ds_curplan.rowcount; i++)
        		{
        			if (this.ds_curplan.getColumn(i, "planseq") != 4)
        			{
        				this.cmb_curPlan.set_index(i);
        				return;
        			}
        		}
        	}
        	else
        	{
        		for (var i = 0; i < this.ds_curplan.rowcount; i++)
        		{
        			if (this.ds_curplan.getColumn(i, "planseq") == 4
        			 || this.ds_curplan.getColumn(i, "planseq") == 2
        			 || this.ds_curplan.getColumn(i, "planseq") == 1)
        			{
        				this.cmb_curPlan.set_index(i);
        				return;
        			}
        		}
        	}
        };

        this.fn_prePlanFilter = function(cmb_curPlanIndex)
        {
        	var sPreplanText = this.cmb_prePlan.text;
        	var sFilterExpr = " planindex > " + this.ds_curplan.getColumn(cmb_curPlanIndex, "planindex");

        	this.ds_preplan.filter(sFilterExpr);
        	this.ds_preplan.set_keystring("S:+planindex");

        	var iPos = this.ds_preplan.findRow("planid", sPreplanText);

        	// preplan 은 이미 더 작은 week를 선택하고 있는경우는 그대로 유지
        	if (iPos < 0 || this.ds_preplan.getColumn(iPos, "planweek") >= this.ds_curplan.getColumn(cmb_curPlanIndex, "planweek"))
        	{
        		for (var i = 0; i <= this.ds_preplan.rowcount; i++)
        		{
        			if (this.ds_preplan.getColumn(i, "planseq") == "4" && this.sDayWeekViewPoint == "WEEK")
        			{
        				iPos = i;
        				if (this.ds_preplan.getColumn(i, "planweek") < this.ds_curplan.getColumn(cmb_curPlanIndex, "planweek"))
        					break;
        			}
        			if (this.ds_preplan.getColumn(i, "planseq") != "4" && this.sDayWeekViewPoint == "DAY")
        			{
        				iPos = i;
        				break;
        			}
        		}
        	}

        	if (iPos < 0) iPos = 0;
        	this.cmb_prePlan.index = iPos;
        	this.fn_compareCheck();
        	this.cld_Date.setEndDate(this.ds_curplan.getColumn(this.cmb_curPlan.index, "effenddate"));
        };

        this.fn_setParam = function()
        {
        	nxlib.setDsParam(this.fv_objBizForm, "startdate", this.cld_Date.getStartDate());
        	nxlib.setDsParam(this.fv_objBizForm, "enddate", this.cld_Date.getEndDate());
        	nxlib.setDsParam(this.fv_objBizForm, "preplanid", this.cmb_prePlan.text);
        	nxlib.setDsParam(this.fv_objBizForm, "curplanid", this.cmb_curPlan.text);
        	nxlib.setDsParam(this.fv_objBizForm, "plancompare", this.chk_planComp.value);
        };

        this.chk_planComp_onclick = function(obj,e)
        {
        	this.fn_compareCheck();
        };

        this.cmb_prePlan_onitemchanged = function(obj,e)
        {
        	//this.cld_Date.setStartDate(this.ds_preplan.getColumn(e.preindex, "effstartdate"));
        	this.fnSearch();
        };

        this.cmb_curPlan_onitemchanged = function(obj,e)
        {
        	this.fn_prePlanFilter(e.preindex);
        };

        this.ds_currentdate_onload = function(obj,e)
        {
        	this.cld_Date.setStartDate(Eco.date.addDate(obj.getColumn(0, "day"), -16));
        	this.cld_Date.setEndDate(Eco.date.addDate(obj.getColumn(0, "day"), 130));
        };

        this.btn_week_onclick = function(obj,e)
        {
        	if (obj.visible)
        	{
        		this.btn_week.set_visible(false);
        		this.btn_day.set_visible(true);
        		this.sDayWeekViewPoint = "DAY";

        		nxlib.setDsParam(this, "viewpoint", this.sDayWeekViewPoint);

        		var oDatas = {
        			svcid: "selectWeek",
        			url: "demand/plananalysis/sales/selectweeklist.do",
        			outds: [
        				"ds_curplan=ds_curplan",
        				"ds_preplan=ds_preplan"
        			]
        		};

        		nxlib.transaction(this, oDatas);
        	}
        };

        this.btn_day_onclick = function(obj,e)
        {
        	if (obj.visible)
        	{
        		this.btn_week.set_visible(true);
        		this.btn_day.set_visible(false);
        		this.sDayWeekViewPoint = "WEEK";

        		nxlib.setDsParam(this, "viewpoint", this.sDayWeekViewPoint);

        		var oDatas = {
        			svcid: "selectWeek",
        			url: "demand/plananalysis/sales/selectweeklist.do",
        			outds: [
        				"ds_curplan=ds_curplan",
        				"ds_preplan=ds_preplan"
        			]
        		};

        		nxlib.transaction(this, oDatas);
        	}
        };

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.fnSearch = function()
        {
        	this.transaction
        	(
        		 "Select"
        		,"http://14.63.224.112/gscm/service/poc/poc_01_Cal_Pre_Week.jsp?End_Date=" + this.cmb_prePlan.value
        		,""
        		,"ds_Cal_Pre_Week=ds_Cal_Pre_Week"
        		,""
        		,"fnCallBack"
        	);
        };

        this.fnCallBack = function(svcId, errCode, errMsg)
        {
        	if(errCode < 0)
        	{
        		alert("errCode : " + errCode + "\n" + "errMsg : " + errMsg);
        	}
        	else
        	{
        		if(svcId == "Select")
        		{
        			this.cal_StartDate.set_value(this.ds_Cal_Pre_Week.getColumn(0, "PRE_DATE"));
        			this.cal_EndDate.set_value(this.cmb_prePlan.value);
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SalesPlanFilter_onload,this);
            this.cmb_prePlan.addEventHandler("onitemchanged",this.cmb_prePlan_onitemchanged,this);
            this.chk_planComp.addEventHandler("onclick",this.chk_planComp_onclick,this);
        };

        this.loadIncludeScript("SalesPlanFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
