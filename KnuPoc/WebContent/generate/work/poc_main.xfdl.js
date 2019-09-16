(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("poc_main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,718);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","284",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainLogo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TOTAL SYSTEM");
            obj.set_cssclass("sta_main_title");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,718,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_WF_mainLogo");
                p.Static00.move("0","284",null,"150","0",null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("TOTAL SYSTEM");
                p.Static01.set_cssclass("sta_main_title");
                p.Static01.set_visible("true");
                p.Static01.move("0","Static00:0",null,"60","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,680,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","32.35%",null,null,"0","45.59%");

                p.Static01.set_text("TOTAL ADMIN SYSTEM");
                p.Static01.set_visible("false");
                p.Static01.move("19","367",null,"60","21",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","",768,974,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_text("");
                p.Static00.move("0","160",null,null,"0","384");

                p.Static01.move("0","470",null,"60","0",null);
            	}
            );
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

        this.loadIncludeScript("poc_main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
