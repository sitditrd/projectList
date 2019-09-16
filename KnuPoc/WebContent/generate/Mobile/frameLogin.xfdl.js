(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLogin");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50000000</Col><Col id=\"menuNm\">통합정보시스템</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50100000</Col><Col id=\"menuNm\">학적기본사항관리</Col><Col id=\"menuUrl\">work::work01.xfdl</Col><Col id=\"upMenuId\">SN50000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50110000</Col><Col id=\"menuNm\">설문관리</Col><Col id=\"menuUrl\">work::work02.xfdl</Col><Col id=\"useYn\">Y</Col><Col id=\"upMenuId\">SN50000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_titlebg","70","153",null,"102","70",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_accessibilityenable("false");
            obj.set_cssclass("sta_WF_loginImg");
            this.addChild(obj.name, obj);

            obj = new Edit("edId","70","288",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("admin");
            obj.set_cssclass("edi_LOGIN_ID");
            obj.set_text("admin");
            this.addChild(obj.name, obj);

            obj = new Edit("edPw","70","353",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("admin");
            obj.set_cssclass("edi_LOGIN_PW");
            obj.set_password("true");
            obj.set_text("admin");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin","70","418",null,"60","70",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Login");
            obj.set_cssclass("btn_Login_S");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edId","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edPw","value","dsSearch","USER_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameLogin.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.frameLogin_onload = function(obj,e)
        {
        };

        this.btnLogin_onclick = function(obj,e)
        {
            this.objApp.gvBase.divMenu.form.fnMakeMenu();
            this.objApp.gvBase.fnAction("LOGIN", true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameLogin_onload,this);
            this.btnLogin.addEventHandler("onclick",this.btnLogin_onclick,this);
        };

        this.loadIncludeScript("frameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
