(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("Work Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,854);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_work","19","45",null,null,"19","18",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","19","18","600","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button22","0","3","13","16",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Btitle");
            obj.set_defaultbutton("true");
            obj.set_tabstop("false");
            this.divTitle.addChild(obj.name, obj);

            obj = new Static("stcMenuNm","19","-1","88","20",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_text("소메뉴타이틀");
            obj.set_cssclass("sta_WF_Btitle");
            obj.set_fittocontents("width");
            this.divTitle.addChild(obj.name, obj);

            obj = new Static("Static132","stcMenuNm:5","2","181","13",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("2");
            obj.set_text("HOME > 대메뉴 > 중메뉴 > 소메뉴");
            obj.set_cssclass("sta_WF_Location");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("Button30","Static132:5","0","21","21",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Help");
            obj.set_visible("false");
            this.divTitle.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","ScreenDeskTop",1278,854,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("work.xfdl", function() {

        this.frmWork_onload = function(obj,e)
        {
        	var menuNm = this.parent.menuNm;
        	if (menuNm) {
        		this.divTitle.form.stcMenuNm.set_text(menuNm);
        	}
        	this.div_work.set_url(this.parent.menuUrl);
        	this.resetScroll();
        };

        this.form_onsize = function(obj, e)
        {
        	this.resetScroll();
        }

        this.fnWorkFrameClose = function()
        {
        	this.close();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmWork_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
        };

        this.loadIncludeScript("work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
