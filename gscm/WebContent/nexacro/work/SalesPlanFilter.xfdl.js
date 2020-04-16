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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,354);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_preplan", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_curplan", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_currentdate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sales", this);
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lvl\">0</Col><Col id=\"name\">ALL</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">NORTH AMERICA</Col></Row><Row><Col id=\"name\">SEA-CBD</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">B2B-HOSP</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">BISSELL</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">CENTRAL</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">CROSS DIVISION</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">DISTRIBUTOR</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">EAST</Col></Row><Row><Col id=\"lvl\">3</Col><Col id=\"name\">LOWE'S</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SEA-EBD</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SECA</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SEM</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">STA</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">LATIN AMERICA</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SAMCOL</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SECH</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SEDA</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SELA-M</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SELA-P</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">SEPR</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">EROUPE</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">CIS</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">S.E ASIA</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">S.W ASIA</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">JAPAN</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">CHINA</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">MIDDLE EAST</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">AFRICA</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"name\">KOREA</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","0","89","190","90",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","190","90",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_day",null,"49","16","16","8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("CalendarWeekDropButton");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CalendarWeekDouble("cld_Date","15","123","170","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","15","34","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Start Week");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","10",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Plan Comparison");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","59","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("End Week");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_prePlan","80","36",null,"20","26",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_preplan");
            obj.set_codecolumn("planid");
            obj.set_datacolumn("planid");
            obj.set_displayrowcount("10");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_curPlan","80","61",null,"20","26",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_curplan");
            obj.set_codecolumn("planid");
            obj.set_datacolumn("planid");
            obj.set_displayrowcount("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_week",null,"49","16","16","8",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("CalendarWeekDropButton");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","14","98",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("View Horizon");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_planComp","138","10","14","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","240","34","270","316",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_sales");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_WF_noneLine");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"268\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treecheck=\"bind:chk\" treelevel=\"bind:lvl\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,354,this,function(p){});
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
        	this.fn_formInit();
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
        	this.cld_Date.setStartDate(this.ds_preplan.getColumn(e.preindex, "effstartdate"));
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.CalendarWeekDouble00_onchanged = function(obj, e)
        {
        	trace(this.parent.name); //divFilter
        	trace(this.parent.parent.name); //filter_std
        	trace(this.parent.parent.parent.name); //divLeft
        	trace(this.parent.parent.parent.parent.name); //InheritStyle02

        	var objGrid = this.parent.parent.parent.parent.all["divWork"].form.all["grd_SM"];
        	var workForm = this.parent.parent.parent.parent.all["divWork"].form;

        	var days = new Array();
        	days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        	//년도
        	var d_start_year = this.cld_Date.getStartDate().substr(0, 4);
        	var d_end_year = this.cld_Date.getEndDate().substr(0, 4);

        	//월
        	var d_start_month = this.cld_Date.getStartDate().substr(4, 2);
        	var d_end_month = this.cld_Date.getEndDate().substr(4, 2);

        	//일
        	var d_start_day = this.cld_Date.getStartDate().substr(6, 2);
        	var d_end_day = this.cld_Date.getEndDate().substr(6, 2);

        	//날짜차이
        	var startDate = new Date(d_start_year, (d_start_month - 1), d_start_day);
        	var endDate = new Date(d_end_year, (d_end_month - 1), d_end_day);

        	var betweenDay = ((endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24) + 1;

        	if(parseInt(this.cld_Date.getStartDate()) > parseInt(this.cld_Date.getEndDate()))
        	{
        		alert("시작일은 종료일보다 클 수 없습니다.");
        		return;
        	}
        	else
        	{
        		//최대 생성 컬럼 개수는 200개
        		betweenDay = (betweenDay > 200) ? 200 : betweenDay;

        		//그리드 동적 생성
        		var strFormat1 = ' <Formats>'
        		+ '     <Format id="default">'

        		+ ' 	<Columns>'
        		+ ' 		<Col size="70"/>';

        		//Column Make Loop
        		for(var i=1; i<=betweenDay; i++)
        		{
        			strFormat1 += ' <Col size="100"/>';
        		}

        		var strFormat2 = ' 	</Columns>'
        		+ ' 	<Rows>'
        		+ ' 		<Row band="head" size="24"/>'
        		+ ' 		<Row band="head" size="24"/>'
        		+ ' 		<Row size="40"/>'
        		+ ' 	</Rows>'

        		+ ' 	<Band id="head">'
        		+ ' 		<Cell rowspan="2" text="Jar No"/>'

        		+ ' 		<Cell col="1" colspan="' + betweenDay + '" text="% of Ref, Value"/>';

        		//Type Setting
        		//년도
        		var d_start_year = parseInt(d_start_year);
        		var d_end_year = parseInt(d_end_year);

        		//월
        		var d_start_month = parseInt(d_start_month);
        		var d_end_month = parseInt(d_start_month);

        		//일
        		var d_start_day = parseInt(d_start_day);
        		var d_end_day = parseInt(d_end_day);

        		//date setting
        		var limitDay = days[d_start_month];

        		//Column Info Loop
        		for(var i=1; i<=betweenDay; i++)
        		{
        			//날짜가 넘어갈 때 초기화 작업
        			if(d_start_day > limitDay)
        			{
        				d_start_month++;
        				limitDay = days[d_start_month];
        				d_start_day = 1;
        			}

        			//월이 넘어갈 때 초기화 작업
        			if(d_start_month > 12)
        			{
        				d_start_year++;
        				d_start_month = 1;
        			}

        			strFormat2 += ' 		<Cell row="1" col="'+ i +'" text="'+ d_start_year +'-'+ d_start_month.toString().padLeft(2, 0) +'-'+ d_start_day.toString().padLeft(2, 0) +'"/>';

        			d_start_day++;
        		}

        		var strFormat3 = ' 	</Band>'
        		+ ' 	<Band id="body">'
        		+ ' 		<Cell expr="currow + 1"/>';

        		//Body Info Loop
        		for(var i=1; i<=betweenDay; i++)
        		{
        			strFormat3 += ' 		<Cell col="'+ i +'" text="bind:COL_'+ i +'" cssclass="expr:(COL_'+ i +' &lt;= 60) ? \'Expr_Case_Background_lightpink\' : (COL_'+ i +' &gt; 60 &amp;&amp; COL_'+ i +' &lt;= 70) ? \'Expr_Case_Background_aqua\' : \'\'"/>'
        		}

        		var strFormat4 = ' 	</Band>'
        		+ '      </Format>'
        		+ ' </Formats>';

        		var strFormat = strFormat1 + strFormat2 + strFormat3 + strFormat4;

        		objGrid.set_formats(strFormat);

        		//데이터 조회
        		workForm.fn_Search(betweenDay);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SalesPlanFilter_onload,this);
            this.btn_day.addEventHandler("onclick",this.btn_day_onclick,this);
            this.cld_Date.addEventHandler("onchanged",this.CalendarWeekDouble00_onchanged,this);
            this.cmb_prePlan.addEventHandler("onitemchanged",this.cmb_prePlan_onitemchanged,this);
            this.cmb_curPlan.addEventHandler("onitemchanged",this.cmb_curPlan_onitemchanged,this);
            this.btn_week.addEventHandler("onclick",this.btn_week_onclick,this);
            this.chk_planComp.addEventHandler("onclick",this.chk_planComp_onclick,this);
            this.ds_currentdate.addEventHandler("onload",this.ds_currentdate_onload,this);
        };

        this.loadIncludeScript("SalesPlanFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
