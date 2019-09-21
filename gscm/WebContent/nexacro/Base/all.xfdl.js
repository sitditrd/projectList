(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("all");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("Base::top.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","40","160",null,null,"30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("Base::left.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","160","40",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Base::mdi.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0",null,null,"30","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("Base::bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","160","70",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("Base::work03.xfdl");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::top.xfdl");
            this._addPreloadList("fdl","Base::left.xfdl");
            this._addPreloadList("fdl","Base::mdi.xfdl");
            this._addPreloadList("fdl","Base::bottom.xfdl");
            this._addPreloadList("fdl","Base::work03.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("all.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
