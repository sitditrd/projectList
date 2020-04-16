(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1024","768",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","132","128","761","524",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_loginBox");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","282","343","460","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("아이디");
            obj.set_tabstop("true");
            obj.set_cssclass("edit_WF_login");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","282","404","460","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("비밀번호");
            obj.set_password("true");
            obj.set_cssclass("edit_WF_login");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_login","282","475","460","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("LOGIN");
            obj.set_cssclass("btn_WF_login");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","375","239","275","74",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_loginLogo");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","125","68","140","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("LOGIN");
            obj.set_cssclass("sta_WF_loginTitle");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("login.xfdl", function() {

        this.login_onload = function(obj,e)
        {
        	this.moveToCenter(obj.width, obj.height);
        };

        this.login_onsize = function(obj,e)
        {
        	this.moveToCenter(e.cx, e.cy);
        };

        this.btn_login_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet.set_separatesize("0,70,30,*,30");
        };

        this.moveToCenter = function(x, y)
        {
        	var l = (x/2)-(this.Div00.width/2);
        	var t = (y/2)-(this.Div00.height/2);

        	if (l < 0)	l = 0;
        	if (t < 0)	t = 0;

        	this.Div00.move(l, t);

        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.login_onsize,this);
            this.addEventHandler("onload",this.login_onload,this);
            this.Div00.form.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
        };

        this.loadIncludeScript("login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
