(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mdi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_mdi_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_mdi_home");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","29","0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("mdi 01");
            obj.set_cssclass("btn_mdi_mdiBtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","120","1","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_mdi_close");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","148","0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("mdi 02");
            obj.set_cssclass("btn_mdi_mdiBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","239","1","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_mdi_close");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","267","0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("mdi 03");
            obj.set_cssclass("btn_mdi_mdiBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","358","1","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_mdi_close");
            this.addChild(obj.name, obj);

            obj = new Button("Button06",null,"1","29","28","1",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_mdi_tabClose");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,30,this,function(p){});
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

        this.loadIncludeScript("mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
