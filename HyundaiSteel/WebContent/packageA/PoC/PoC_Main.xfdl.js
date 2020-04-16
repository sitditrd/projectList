(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_Main");
            this.set_titletext("메인화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,718);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","40",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainLogo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","440",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TOTAL SYSTEM");
            obj.set_cssclass("sta_main_title");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,718,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("메인화면");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_WF_mainLogo");
                p.Static00.move("0","40",null,null,"0","60");

                p.Static01.set_taborder("1");
                p.Static01.set_text("TOTAL SYSTEM");
                p.Static01.set_cssclass("sta_main_title");
                p.Static01.set_visible("false");
                p.Static01.move("0","440",null,"60","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,680,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","156",null,null,"0","374");

                p.Static01.set_text("TOTAL ADMIN SYSTEM");
                p.Static01.move("19","263",null,"60","21",null);
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

        this.loadIncludeScript("PoC_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
