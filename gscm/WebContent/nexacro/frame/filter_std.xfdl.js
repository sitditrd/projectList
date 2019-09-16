(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("filter_std");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,392);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"dummy\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_week","5","5","43","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Week");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sum","53","5","43","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Sum");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_omit","101","5","43","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Omit 0");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na","149","5","43","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("N/A");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Div("divFilter","5","33",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,392,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("filter_std.xfdl", function() {

        this.filter_std_onload = function(obj,e)
        {
        	this.divFilter.form.fv_objBizForm = this.parent.parent.divWork.form;
        };

        this.btn_week_onclick = function(obj,e)
        {
        	var form = this.divFilter.form;

        	form["fn_onclickByWeek"] && form["fn_onclickByWeek"].call(form, obj, e);
        };

        this.btn_sum_onclick = function(obj,e)
        {
        	var form = this.divFilter.form;

        	form["fn_onclickBySum"] && form["fn_onclickBySum"].call(form, obj, e);
        };

        this.btn_omit_onclick = function(obj,e)
        {
        	var form = this.divFilter.form;

        	form["fn_onclickByOmit"] && form["fn_onclickByOmit"].call(form, obj, e);
        };

        this.btn_na_onclick = function(obj,e)
        {
        	var form = this.divFilter.form;

        	form["fn_onclickByNA"] && form["fn_onclickByNA"].call(form, obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.filter_std_onload,this);
            this.btn_week.addEventHandler("onclick",this.btn_week_onclick,this);
            this.btn_sum.addEventHandler("onclick",this.btn_sum_onclick,this);
            this.btn_omit.addEventHandler("onclick",this.btn_omit_onclick,this);
            this.btn_na.addEventHandler("onclick",this.btn_na_onclick,this);
        };

        this.loadIncludeScript("filter_std.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
