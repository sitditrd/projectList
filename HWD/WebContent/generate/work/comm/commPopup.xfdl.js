(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,622);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,622,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commPopup.xfdl", function() {
        this.commPopup_onload = function(obj,e)
        {
        	this.strMenuId = this.parent.menuId;
        	this.strMenuUrl = this.parent.menuUrl;

        	this.divWork.set_url(this.strMenuUrl);

        	var pForm = nexacro.getApplication().mainframe.VFrameSet.Main.form
        	pForm.fv_EndTime = this.gfn_CheckTime();
        	pForm.fv_DiffTime = this.gfn_diffTime(pForm.fv_StartTime, pForm.fv_EndTime, "ss");
        	pForm.Dataset02.setColumn(3, "Column0", pForm.fv_DiffTime)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commPopup_onload,this);
            this.divWork.addEventHandler("onvscroll",this.divWork_onvscroll,this);
        };

        this.loadIncludeScript("commPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
