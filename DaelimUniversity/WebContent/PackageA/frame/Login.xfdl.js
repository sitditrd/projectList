(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_loginBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12%","17%",null,"524","12%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_loginBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","36.13%","31.12%",null,"74","37.60%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_loginLogo");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","28%","Static02:30",null,"52","28%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext(" 아이디");
            obj.set_tabstop("true");
            obj.set_cssclass("edit_WF_login");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","28%","Edit00:10",null,"52","28%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("비밀번호");
            obj.set_password("true");
            obj.set_cssclass("edit_WF_login");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","28%","Edit01:18",null,"60","28%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("LOGIN");
            obj.set_cssclass("btn_WF_login");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","12%","8.85%","13.67%","7.81%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("LOGIN");
            obj.set_cssclass("sta_WF_loginTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

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
        this.registerScript("Login.xfdl", function() {
        this.btn_login_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet.set_separatesize("0,70,30,*,30");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
        };

        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
