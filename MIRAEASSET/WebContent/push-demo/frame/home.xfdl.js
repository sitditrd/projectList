(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("home");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","194","25.00%",null,"150","173",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainLogo");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","193","50.16%",null,"70","193",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("주문관리시스템");
            obj.set_cssclass("sta_WF_mainTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"87","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_mainBottom");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,608,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("home.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
