(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1016,507);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcMenuNm","20","0",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","20","60",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("1");
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
        this.registerScript("work.xfdl", function() {

        this.work_onload = function(obj,e)
        {
        	var sWinId = this.parent.menuInfo.winId;
        	var sMenuCd = this.parent.menuInfo.menuCd;
        	var sMenuNm = this.parent.menuInfo.menuNm;

        	this.stcMenuNm.set_text(sMenuNm);

        	nexacro._OnceCallbackTimer.callonce(this, function()
        	{
        		this.divWork.set_url(this.parent.menuInfo.menuUrl);
        	}, 10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.work_onload,this);
        };

        this.loadIncludeScript("work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
