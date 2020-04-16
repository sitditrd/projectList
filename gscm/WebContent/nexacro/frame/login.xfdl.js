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
            this.set_titletext("GSCM Development Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1016,617);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_role", this);
            obj._setContents("<ColumnInfo><Column id=\"gbm\" type=\"STRING\" size=\"32\"/><Column id=\"role\" type=\"STRING\" size=\"32\"/><Column id=\"description\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"userid\" type=\"STRING\" size=\"32\"/><Column id=\"username\" type=\"STRING\" size=\"32\"/><Column id=\"deptname\" type=\"STRING\" size=\"32\"/><Column id=\"title\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_session", this);
            obj._setContents("<ColumnInfo><Column id=\"accessSalesidList\" type=\"STRING\" size=\"32\"/><Column id=\"dpUserAuthority\" type=\"STRING\" size=\"32\"/><Column id=\"fiUserAuthority\" type=\"STRING\" size=\"32\"/><Column id=\"gbm\" type=\"STRING\" size=\"32\"/><Column id=\"role\" type=\"STRING\" size=\"32\"/><Column id=\"status\" type=\"STRING\" size=\"32\"/><Column id=\"userProductScope\" type=\"STRING\" size=\"32\"/><Column id=\"userid\" type=\"STRING\" size=\"32\"/><Column id=\"userkorname\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","26.48%","40.84%","479","113",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","10",null,"30","10",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box02L");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static09","10","10","130","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("User Role");
            obj.set_cssclass("sta_WF_box01R");
            this.divLogin.addChild(obj.name, obj);

            obj = new Combo("cmb_role","142","13",null,"24","14",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static00","10","39",null,"30","10",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_box02L");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static01","10","39","130","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("User");
            obj.set_cssclass("sta_WF_box01R");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn_login",null,"75","100","23","242",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("Login");
            obj.set_cssclass("btn_WF_basic01");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"75","100","23","137",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.set_cssclass("btn_WF_basic03");
            this.divLogin.addChild(obj.name, obj);

            obj = new Combo("cmb_userSearch","142","42","323","25",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_innerdataset("DS_FILTER");
            obj.set_codecolumn("STR");
            obj.set_datacolumn("STR");
            obj.set_type("search");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edt_user","142","42","292","25",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #777777 , 0px none , 1px solid #777777 , 1px solid #777777");
            obj.set_readonly("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_userList","401","429","700","390",null,null,null,null,null,null,this);
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,null,"1","1",null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_pop_bg01");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"40","0",null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("6");
            obj.set_text("User Search");
            obj.set_cssclass("sta_pop_title01");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","40","40","0",null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_pop_close");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Static("Static03","20","60",null,"47","20",null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_box01L");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Static("st_userId","31","71","50","25",null,null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("9");
            obj.set_text("User Id");
            obj.set_cssclass("sta_WF_label01R");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Edit("edt_searchUserId","89","71","170","25",null,null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("0");
            obj.set_imemode("alpha");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Static("Static06","276","71","50","25",null,null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("10");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_label01R");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Edit("edt_searchName","336","71","170","25",null,null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"61","46","46","20",null,null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search01");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Grid("grd_userList","20","125",null,null,"20","50",null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_user");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"220\"/><Column size=\"170\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"userid\"/><Cell col=\"1\" text=\"username\"/><Cell col=\"2\" text=\"deptname\"/><Cell col=\"3\" text=\"title\"/></Band><Band id=\"body\"><Cell text=\"bind:userid\"/><Cell col=\"1\" text=\"bind:username\"/><Cell col=\"2\" text=\"bind:deptname\"/><Cell col=\"3\" text=\"bind:title\"/></Band></Format></Formats>");
            this.pdiv_userList.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"80","23","20","20",null,null,null,null,this.pdiv_userList.form);
            obj.set_taborder("4");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic01");
            this.pdiv_userList.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1016,617,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("login.xfdl", function() {
        this.fv_sRole     = "";
        this.fv_sUserId   = "";
        this.fv_sUserName = "";

        this.login_onload = function(obj,e)
        {
        	// get PrivateProfile
        	this.fv_sRole     = nexacro._nvl(nexacro.getPrivateProfile("dev_role"), "SUPER");
        	this.fv_sUserId   = nexacro._nvl(nexacro.getPrivateProfile("dev_userid"), "");
        	this.fv_sUserName = nexacro._nvl(nexacro.getPrivateProfile("dev_username"), "");

        	// Search Role List
        	this.fn_getRole();

        	// 해상도에 따른 로그인 위치 조정
        	this.moveToCenter(obj.width, obj.height);
        };

        this.login_onsize = function(obj,e)
        {
        	this.moveToCenter(e.cx, e.cy);
        };

        this.pdiv_userList_grd_userList_oncelldblclick = function(obj,e)
        {
        	this.fn_setUser(e.row);
        };

        this.divLogin_cmb_userSearch_onlbuttonup = function(obj,e)
        {
        	this.fn_searchUser();
        };

        this.divLogin_edt_user_oneditclick = function(obj,e)
        {
        	this.fn_searchUser();
        };

        this.divLogin_btn_login_onclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.childframe.set_formurl("frame::root.xfdl");
        	return;

        	if (!this.divLogin.form.edt_user.value)
        	{
        		alert("로그인 대상 사용자를 선택해 주세요.");
        		return;
        	}

        	var oDatas = {
        		svcid: "sel_UserLogin",
        		url: "system/xp/uxstudio/getauth.do",
        		outds: [
        			"ds_session=outDs"
        		],
        		args: [
        			"userid=" + nexacro.wrapQuote(this.divLogin.form.edt_user.userdata)
        		]
        	};

        	nxlib.transaction(this, oDatas, function()
        	{
        		nexacro.setPrivateProfile("dev_role",      this.divLogin.form.cmb_role.value);
        		nexacro.setPrivateProfile("dev_userid",    this.divLogin.form.edt_user.value);
        		nexacro.setPrivateProfile("dev_username",  this.divLogin.form.edt_user.userdata);

        		nexacro.getApplication().mainframe.childframe.set_formurl("frame::root.xfdl");
        	});
        };

        this.divLogin_btn_cancel_onclick = function(obj,e)
        {
        	nexacro.getApplication().exit();
        };

        this.pdiv_userList_btn_close_onclick = function(obj,e)
        {
        	this.pdiv_userList.closePopup();
        };

        this.pdiv_userList_btn_search_onclick = function(obj,e)
        {
        	this.fn_setFilter();
        };

        this.pdiv_userList_edt_searchName_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)	this.fn_setFilter();
        };

        this.pdiv_userList_btn_ok_onclick = function(obj,e)
        {
        	this.fn_setUser(this.ds_user.rowposition);
        };

        this.fn_getRole = function()
        {
        	var oDatas = {
        		svcid: "sel_RolList",
        		url: "system/xp/uxstudio/getrole.do",
        		outds: [
        			"ds_role=outDs"
        		]
        	};

        	nxlib.transaction(this, oDatas, function()
        	{
        		var iRow = this.ds_role.findRow("role", this.fv_sRole);
        		this.divLogin.form.cmb_role.set_index(iRow);

        		this.divLogin.form.edt_user.set_value(this.fv_sUserId);
        		this.divLogin.form.edt_user.userdata = this.fv_sUserName;
        	});
        };

        this.fn_searchUser = function()
        {
        	var sRole = this.divLogin.form.cmb_role.value;

        	if (this.fv_sLastSerachRole == sRole)
        	{
        		this.fn_showUserList();
        	}
        	else
        	{
        		this.fv_sLastSerachRole = sRole;

        		var oDatas = {
        			svcid: "sel_UserList",
        			url: "system/xp/uxstudio/getuseridbyrole.do",
        			outds: [
        				"ds_user=outDs"
        			],
        			args: [
        				"role=" + nexacro.wrapQuote(sRole),
        				"userid=" + nexacro.wrapQuote(""),
        				"username=" + nexacro.wrapQuote("")
        			]
        		};

        		nxlib.transaction(this, oDatas, function()
        		{
        			this.fn_showUserList();
        		});
        	}
        };

        this.fn_showUserList = function()
        {
        	this.pdiv_userList.trackPopupByComponent(this.divLogin.form.cmb_userSearch, 0, this.divLogin.form.cmb_userSearch.height);
        };

        this.fn_setFilter = function()
        {
        	var sFilter = "";
        	var sSearchUserId = nexacro._nvl(this.pdiv_userList.form.edt_searchUserId.value, "");
        	var sSearchName = nexacro._nvl(this.pdiv_userList.form.edt_searchName.value, "");

        	if (sSearchUserId != "")
        	{
        		sFilter += "userid.toString().indexOf('" + sSearchUserId + "') >= 0";
        	}
        	if (sSearchName != "")
        	{
        		if (sFilter.length > 0) { sFilter += " && "; }
        		sFilter += "username.toString().indexOf('" + sSearchName + "') >= 0";
        	}

        	this.ds_user.filter(sFilter);
        };

        this.fn_setUser = function(iRow)
        {
        	var sUserId   = this.ds_user.getColumn(iRow, "userid");
        	var sUserName = this.ds_user.getColumn(iRow, "username")
        	                + "/" + this.ds_user.getColumn(iRow, "title")
        	                + "/" + this.ds_user.getColumn(iRow, "deptname");
        	this.divLogin.form.edt_user.set_value(sUserName);
        	this.divLogin.form.edt_user.userdata = sUserId;

        	this.pdiv_userList.closePopup();
        };

        this.moveToCenter = function(x, y)
        {
        	var l = (x/2)-(this.divLogin.width/2);
        	var t = (y/2)-(this.divLogin.height/2);

        	if (l < 0)	l = 0;
        	if (t < 0)	t = 0;

        	this.divLogin.move(l, t);

        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.login_onload,this);
            this.addEventHandler("onsize",this.login_onsize,this);
            this.divLogin.form.btn_login.addEventHandler("onclick",this.divLogin_btn_login_onclick,this);
            this.divLogin.form.btn_cancel.addEventHandler("onclick",this.divLogin_btn_cancel_onclick,this);
            this.divLogin.form.cmb_userSearch.addEventHandler("onlbuttonup",this.divLogin_cmb_userSearch_onlbuttonup,this);
            this.divLogin.form.edt_user.addEventHandler("oneditclick",this.divLogin_edt_user_oneditclick,this);
            this.pdiv_userList.form.btn_close.addEventHandler("onclick",this.pdiv_userList_btn_close_onclick,this);
            this.pdiv_userList.form.edt_searchUserId.addEventHandler("onkeydown",this.pdiv_userList_edt_searchName_onkeydown,this);
            this.pdiv_userList.form.edt_searchName.addEventHandler("onkeydown",this.pdiv_userList_edt_searchName_onkeydown,this);
            this.pdiv_userList.form.btn_search.addEventHandler("onclick",this.pdiv_userList_btn_search_onclick,this);
            this.pdiv_userList.form.grd_userList.addEventHandler("oncelldblclick",this.pdiv_userList_grd_userList_oncelldblclick,this);
            this.pdiv_userList.form.btn_ok.addEventHandler("onclick",this.pdiv_userList_btn_ok_onclick,this);
        };

        this.loadIncludeScript("login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
