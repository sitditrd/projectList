(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WF_LocationForm");
            this.set_titletext("현재위치");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button22","0","3","13","16",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Btitle");
            obj.set_defaultbutton("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static121","19","-1","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("소메뉴타이틀");
            obj.set_cssclass("sta_WF_Btitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static132","Static121:16","2","164","13",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("HOME > 대메뉴 > 중메뉴 > 소메뉴");
            obj.set_cssclass("sta_WF_Location");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button30","Static132:4","0","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Help");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",950,21,this,function(p){});
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

        this.loadIncludeScript("WF_LocationForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
