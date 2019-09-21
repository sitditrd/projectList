(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("InheritStyle02");
            this.set_titletext("New Form");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1016,507);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"_dummy\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle","20","0","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("Sales :");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","230","60",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","20","60","200",null,null,"55",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply","60",null,"120","23",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Apply");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("stcValue","73","0","25","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ALL");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stcFilterValue","156","0","25","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("ALL");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stcFilter","109","0","43","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Filter :");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_title03");
            obj.set_background("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1016,507,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("InheritStyle02.xfdl", function() {
        this.InheritStyle02_onload = function(obj,e)
        {
        	var sWinId = this.parent.menuInfo.winId;
        	var sMenuCd = this.parent.menuInfo.menuCd;
        	//var sMenuNm = this.parent.menuInfo.menuNm;

        	//this.stcMenuNm.set_text(sMenuNm);

        	nexacro._OnceCallbackTimer.callonce(this, function()
        	{
        		this.divLeft.set_url("frame::filter_std.xfdl");
        		this.divWork.set_url(this.parent.menuInfo.menuUrl);
        	}, 10);
        };

        this.fn_child_onload = function(form)
        {
        	form._fv_objTreeInfo = {};
        	form._fv_objFilterForm = this.divLeft.form.divFilter.form;

        	var objTabInfo = form.fn_createTreeTab();
        	var objFunctionInfo = form.fn_createFunction();
        	var objFilterInfo = form.fn_createFilter();

        	if (objTabInfo)
        	{
        		this.fn_createTreeTab(objTabInfo);
        	}

        	if (objFunctionInfo)
        	{
        		this.fn_createFunction(objFunctionInfo);
        	}

        	if (objFilterInfo)
        	{
        		this.fn_createFilter(objFilterInfo);
        	}
        };

        this.btnApply_onclick = function(obj,e)
        {
        	var form = this.divWork.form;

        	if (form["fn_apply"])
        	{
        		form["fn_apply"].call(form);
        	}
        	else
        	{
        		alert("업무화면에 fn_apply()가 정의되지 않았습니다.");
        	}
        };

        // treeTab 생성정보 설정 및 실행
        this.fn_createTreeTab = function(objInfo)
        {
        // 	var treeCtrl = new _treeCtrl();
        //
        // 	treeCtrl.text = objInfo.text;
        // 	treeCtrl.treeId = objInfo.treeId;
        // 	treeCtrl.search = objInfo.search;
        // 	treeCtrl.option = objInfo.option;
        // 	treeCtrl.height = objInfo.height;
        // 	treeCtrl.treeDefault = objInfo.treeDefault;
        //
        // 	treeCtrl.run();
        };

        // Function 생성정보 설정 및 실행
        this.fn_createFunction = function(objInfo)
        {
        // 	var functionCtrl = new _functionCtrl();
        //
        // 	functionCtrl.titletext = objInfo.titletext;
        // 	functionCtrl.menuId = objInfo.menuId;
        // 	functionCtrl.search = objInfo.search;
        // 	functionCtrl.height = objInfo.height;
        //
        // 	functionCtrl.run();
        };

        // Filter 생성정보 설정 및 실행
        this.fn_createFilter = function(objInfo)
        {
        // 	var filterCtrl = new _filterCtrl();
        //
        // 	filterCtrl.titletext = objInfo.titletext;
        // 	filterCtrl.url = objInfo.url;
        // 	filterCtrl.height = objInfo.height;
        //
        // 	filterCtrl.run();

        	this.divLeft.form.divFilter.set_url(objInfo.url[0]);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.InheritStyle02_onload,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
        };

        this.loadIncludeScript("InheritStyle02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
