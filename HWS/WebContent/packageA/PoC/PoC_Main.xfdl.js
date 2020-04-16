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
            obj = new Static("Static01","0","129",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::img_WF_mainImg_bg.png\') repeat-x left center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","129",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainImg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","16.57%",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_mainLogo");
            obj.set_text("");
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

                p.Static01.set_taborder("1");
                p.Static01.set_background("url(\'imagerc::img_WF_mainImg_bg.png\') repeat-x left center");
                p.Static01.move("0","129",null,null,"0","0");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_WF_mainImg");
                p.Static00.set_text("");
                p.Static00.move("0","129",null,null,"0","0");

                p.Static02.set_taborder("2");
                p.Static02.set_cssclass("sta_WF_mainLogo");
                p.Static02.set_text("");
                p.Static02.move("0","16.57%",null,"90","0",null);
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
