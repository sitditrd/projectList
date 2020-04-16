(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1220,980);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_top","210","0",null,"54","0",null,"610",null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e7590b");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftMenu","3","9","34","34",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_TF_LeftOpen");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_logOut",null,"11","30","30","9",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_LogOut");
            obj.set_visible("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_sysConfig",null,"11","30","30","109",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Setting");
            obj.set_visible("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("sta00","38","16","132","23",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("3");
            obj.set_text("한화건설 공사일보");
            obj.set_font("bold 16px/18px \"맑은 고딕\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"16","67","23","35",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("4");
            obj.set_text("로그아웃");
            obj.set_font("bold 16px/18px \"맑은 고딕\"");
            obj.set_color("white");
            obj.set_visible("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("sta00_00_00",null,"16","67","23","136",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("5");
            obj.set_text("개인정보");
            obj.set_font("bold 16px/18px \"맑은 고딕\"");
            obj.set_color("white");
            obj.set_visible("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Edit("edt00","32.08%","12",null,"29","35.64%",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("6");
            obj.set_borderRadius("15px");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("Button12",null,"17","19","19","36.44%",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Div("divLeft","0","0","210","981",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_background("#515356");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftMenu","0","0","70","33",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_cssclass(" btn_LF_SelectMenu, btn_LF_Select01");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divLeft.addChild(obj.name, obj);

            obj = new Button("btn_favorite","70","0","70","33",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_MenuBg, btn_LF_BookMark");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divLeft.addChild(obj.name, obj);

            obj = new Button("btn_findMenu","140","0","70","33",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_MenuBg, btn_LF_MenuSearch");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("sta_topMenuTitle","20","60","180","17",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("none");
            obj.set_cssclass("btn_LF_MenuTitle");
            obj.set_text("시스템");
            obj.set_font("bold 16px/18px \"맑은 고딕\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleUp","75",null,"50","17",null,"93",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("앱설치");
            obj.set_fittocontents("width");
            obj.set_color("white");
            obj.set_font("bold 16px/14px \"맑은 고딕\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","210","94",null,null,"0","0","800",null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_url("sample::poc01.xfdl");
            obj.set_formscrollbartype("default");
            this.addChild(obj.name, obj);

            obj = new Static("Static132_00","297","63","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("공종관리");
            obj.set_fittocontents("width");
            obj.set_font("bold 14px/18px \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static132","219","63","78","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일보관리  /  ");
            obj.set_fittocontents("width");
            obj.set_font("14px/18px \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","219","89",null,"2","7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("sta00");
            obj.set_background("#e0e0e0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1220,980,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.div_top
                p = rootobj.div_top.form;

                p.btn_leftMenu.set_taborder("0");
                p.btn_leftMenu.set_cssclass("btn_TF_LeftOpen");
                p.btn_leftMenu.move("3","9","34","34",null,null);

                p.btn_logOut.set_taborder("1");
                p.btn_logOut.set_cssclass("btn_TF_LogOut");
                p.btn_logOut.set_visible("true");
                p.btn_logOut.move(null,"11","30","30","9",null);

                p.btn_sysConfig.set_taborder("2");
                p.btn_sysConfig.set_cssclass("btn_TF_Setting");
                p.btn_sysConfig.set_visible("true");
                p.btn_sysConfig.move(null,"11","30","30","109",null);

                p.sta00.set_taborder("3");
                p.sta00.set_text("한화건설 공사일보");
                p.sta00.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta00.set_color("white");
                p.sta00.set_textAlign("center");
                p.sta00.move("38","16","132","23",null,null);

                p.sta00_00.set_taborder("4");
                p.sta00_00.set_text("로그아웃");
                p.sta00_00.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta00_00.set_color("white");
                p.sta00_00.set_visible("true");
                p.sta00_00.move(null,"16","67","23","35",null);

                p.sta00_00_00.set_taborder("5");
                p.sta00_00_00.set_text("개인정보");
                p.sta00_00_00.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta00_00_00.set_color("white");
                p.sta00_00_00.set_visible("true");
                p.sta00_00_00.move(null,"16","67","23","136",null);

                p.edt00.set_taborder("6");
                p.edt00.set_borderRadius("15px");
                p.edt00.move("32.08%","12",null,"29","35.64%",null);

                p.Button12.set_taborder("7");
                p.Button12.set_cssclass("btn_WF_Search");
                p.Button12.set_enable("true");
                p.Button12.move(null,"17","19","19","36.44%",null);
                // this.div_top }}


                // {{ this.divLeft
                p = rootobj.divLeft.form;

                p.btn_leftMenu.set_taborder("0");
                p.btn_leftMenu.set_cssclass(" btn_LF_SelectMenu, btn_LF_Select01");
                p.btn_leftMenu.set_tabstop("false");
                p.btn_leftMenu.set_visible("true");
                p.btn_leftMenu.move("0","0","70","33",null,null);

                p.btn_favorite.set_taborder("1");
                p.btn_favorite.set_cssclass("btn_LF_MenuBg, btn_LF_BookMark");
                p.btn_favorite.set_tabstop("false");
                p.btn_favorite.set_visible("true");
                p.btn_favorite.move("70","0","70","33",null,null);

                p.btn_findMenu.set_taborder("2");
                p.btn_findMenu.set_cssclass("btn_LF_MenuBg, btn_LF_MenuSearch");
                p.btn_findMenu.set_tabstop("false");
                p.btn_findMenu.set_visible("true");
                p.btn_findMenu.move("140","0","70","33",null,null);
                // this.divLeft }}
                p = rootobj;
                p.set_scrolltype("none");
                p.set_scrollbartype("none");

                p.div_top.set_taborder("0");
                p.div_top.set_background("#e7590b");
                p.div_top.set_formscrollbartype("none none");
                p.div_top.set_formscrolltype("none");
                p.div_top.set_text("");
                p.div_top.set_minwidth("610");
                p.div_top.set_maxwidth("");
                p.div_top.move("210","0",null,"54","0",null);

                p.divLeft.set_taborder("1");
                p.divLeft.set_formscrollbartype("none none");
                p.divLeft.set_background("#515356");
                p.divLeft.set_visible("true");
                p.divLeft.move("0","0","210","981",null,null);

                p.sta_topMenuTitle.set_taborder("2");
                p.sta_topMenuTitle.set_fittocontents("none");
                p.sta_topMenuTitle.set_cssclass("btn_LF_MenuTitle");
                p.sta_topMenuTitle.set_text("시스템");
                p.sta_topMenuTitle.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta_topMenuTitle.set_visible("true");
                p.sta_topMenuTitle.move("20","60","180","17",null,null);

                p.sta_titleUp.set_taborder("3");
                p.sta_titleUp.set_text("앱설치");
                p.sta_titleUp.set_fittocontents("width");
                p.sta_titleUp.set_color("white");
                p.sta_titleUp.set_font("bold 16px/14px \"맑은 고딕\"");
                p.sta_titleUp.set_visible("true");
                p.sta_titleUp.move("75",null,"50","17",null,"93");

                p.divMain.set_taborder("4");
                p.divMain.set_text("");
                p.divMain.set_url("sample::poc01.xfdl");
                p.divMain.set_formscrollbartype("default");
                p.divMain.set_maxheight("");
                p.divMain.set_minwidth("800");
                p.divMain.set_maxwidth("");
                p.divMain.move("210","94",null,null,"0","0");

                p.Static132_00.set_taborder("5");
                p.Static132_00.set_text("공종관리");
                p.Static132_00.set_fittocontents("width");
                p.Static132_00.set_font("bold 14px/18px \"맑은 고딕\"");
                p.Static132_00.move("297","63","67","23",null,null);

                p.Static132.set_taborder("6");
                p.Static132.set_text("일보관리  /  ");
                p.Static132.set_fittocontents("width");
                p.Static132.set_font("14px/18px \"맑은 고딕\"");
                p.Static132.move("219","63","78","23",null,null);

                p.sta00.set_taborder("7");
                p.sta00.set_text("sta00");
                p.sta00.set_background("#e0e0e0");
                p.sta00.move("219","89",null,"2","7",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mid","",800,980,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.div_top
                p = rootobj.div_top.form;

                p.btn_leftMenu.set_taborder("0");
                p.btn_leftMenu.set_cssclass("btn_TF_LeftOpen");
                p.btn_leftMenu.move("3","9","34","34",null,null);

                p.btn_logOut.set_taborder("1");
                p.btn_logOut.set_cssclass("btn_TF_LogOut");
                p.btn_logOut.set_visible("true");
                p.btn_logOut.move(null,"11","30","30","9",null);

                p.btn_sysConfig.set_taborder("2");
                p.btn_sysConfig.set_cssclass("btn_TF_Setting");
                p.btn_sysConfig.set_visible("true");
                p.btn_sysConfig.move(null,"11","30","30","109",null);

                p.sta00.set_taborder("3");
                p.sta00.set_text("한화건설 공사일보");
                p.sta00.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta00.set_color("white");
                p.sta00.set_textAlign("center");
                p.sta00.move("38","16","132","23",null,null);

                p.sta00_00.set_taborder("4");
                p.sta00_00.set_text("로그아웃");
                p.sta00_00.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta00_00.set_color("white");
                p.sta00_00.set_visible("true");
                p.sta00_00.move(null,"16","67","23","35",null);

                p.sta00_00_00.set_taborder("5");
                p.sta00_00_00.set_text("개인정보");
                p.sta00_00_00.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta00_00_00.set_color("white");
                p.sta00_00_00.set_visible("true");
                p.sta00_00_00.move(null,"16","67","23","136",null);

                p.edt00.set_taborder("6");
                p.edt00.set_borderRadius("15px");
                p.edt00.move("32.08%","12",null,"29","35.64%",null);

                p.Button12.set_taborder("7");
                p.Button12.set_cssclass("btn_WF_Search");
                p.Button12.set_enable("true");
                p.Button12.move(null,"17","19","19","36.44%",null);
                // this.div_top }}


                // {{ this.divLeft
                p = rootobj.divLeft.form;

                p.btn_leftMenu.set_taborder("0");
                p.btn_leftMenu.set_cssclass(" btn_LF_SelectMenu, btn_LF_Select01");
                p.btn_leftMenu.set_tabstop("false");
                p.btn_leftMenu.set_visible("true");
                p.btn_leftMenu.move("0","0","70","33",null,null);

                p.btn_favorite.set_taborder("1");
                p.btn_favorite.set_cssclass("btn_LF_MenuBg, btn_LF_BookMark");
                p.btn_favorite.set_tabstop("false");
                p.btn_favorite.set_visible("true");
                p.btn_favorite.move("70","0","70","33",null,null);

                p.btn_findMenu.set_taborder("2");
                p.btn_findMenu.set_cssclass("btn_LF_MenuBg, btn_LF_MenuSearch");
                p.btn_findMenu.set_tabstop("false");
                p.btn_findMenu.set_visible("true");
                p.btn_findMenu.move("140","0","70","33",null,null);
                // this.divLeft }}
                p = rootobj;
                p.div_top.set_taborder("0");
                p.div_top.set_background("#e7590b");
                p.div_top.set_formscrollbartype("none none");
                p.div_top.set_formscrolltype("none");
                p.div_top.set_text("");
                p.div_top.set_minwidth("610");
                p.div_top.set_maxwidth("");
                p.div_top.move("210","0",null,"54","0",null);

                p.divLeft.set_taborder("1");
                p.divLeft.set_formscrollbartype("none none");
                p.divLeft.set_background("#515356");
                p.divLeft.set_visible("true");
                p.divLeft.move("0","0","210","981",null,null);

                p.sta_topMenuTitle.set_taborder("2");
                p.sta_topMenuTitle.set_fittocontents("none");
                p.sta_topMenuTitle.set_cssclass("btn_LF_MenuTitle");
                p.sta_topMenuTitle.set_text("시스템");
                p.sta_topMenuTitle.set_font("bold 16px/18px \"맑은 고딕\"");
                p.sta_topMenuTitle.set_visible("true");
                p.sta_topMenuTitle.move("20","60","180","17",null,null);

                p.sta_titleUp.set_taborder("3");
                p.sta_titleUp.set_text("앱설치");
                p.sta_titleUp.set_fittocontents("width");
                p.sta_titleUp.set_color("white");
                p.sta_titleUp.set_font("bold 16px/14px \"맑은 고딕\"");
                p.sta_titleUp.set_visible("true");
                p.sta_titleUp.move("75",null,"50","17",null,"93");

                p.divMain.set_taborder("4");
                p.divMain.set_text("");
                p.divMain.set_url("sample::poc01.xfdl");
                p.divMain.set_formscrollbartype("default");
                p.divMain.set_maxheight("");
                p.divMain.set_maxwidth("");
                p.divMain.move("210","94",null,null,"0","0");

                p.Static132_00.set_taborder("5");
                p.Static132_00.set_text("공종관리");
                p.Static132_00.set_fittocontents("width");
                p.Static132_00.set_font("bold 14px/18px \"맑은 고딕\"");
                p.Static132_00.move("297","63","67","23",null,null);

                p.Static132.set_taborder("6");
                p.Static132.set_text("일보관리  /  ");
                p.Static132.set_fittocontents("width");
                p.Static132.set_font("14px/18px \"맑은 고딕\"");
                p.Static132.move("219","63","78","23",null,null);

                p.sta00.set_taborder("7");
                p.sta00.set_text("sta00");
                p.sta00.set_background("#e0e0e0");
                p.sta00.move("219","89",null,"2","7",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("min","",410,980,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.div_top
                p = rootobj.div_top.form;

                p.edt00.move("2.44%","52",null,"29","2.44%",null);

                p.Button12.move(null,"57","19","19","3.17%",null);

                p.btn_sysConfig.set_visible("false");
                p.btn_sysConfig.move(null,"11","30","30","-110",null);

                p.sta00_00.set_visible("false");
                p.sta00_00.move(null,"16","67","23","-184",null);

                p.sta00_00_00.set_visible("false");
                p.sta00_00_00.move(null,"16","67","23","-83",null);

                p.sta00.move("58","16",null,"23","56",null);
                // this.div_top }}


                // {{ this.divLeft
                p = rootobj.divLeft.form;

                p.btn_favorite.set_visible("false");
                p.btn_favorite.move("70","0","70","33",null,null);

                p.btn_leftMenu.set_visible("false");

                p.btn_findMenu.set_visible("false");
                // this.divLeft }}
                p = rootobj;
                p.divLeft.set_visible("false");
                p.divLeft.move("535","0","210","981",null,null);

                p.div_top.set_minwidth("300");
                p.div_top.set_maxwidth("");
                p.div_top.move("0","0",null,"94","0",null);

                p.sta_topMenuTitle.set_visible("false");
                p.sta_topMenuTitle.move("550","60","180","17",null,null);

                p.sta_titleUp.set_visible("false");
                p.sta_titleUp.move("605",null,"50","17",null,"93");

                p.divMain.set_formscrollbartype("autoindicator autoindicator");
                p.divMain.set_minwidth("200");
                p.divMain.set_maxwidth("");
                p.divMain.move("1","135",null,null,"0","-41");

                p.Static132_00.move("88","104","67","23",null,null);

                p.Static132.move("10","104","78","23",null,null);

                p.sta00.set_maxwidth("");
                p.sta00.move("11","140",null,"2","11",null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::poc01.xfdl");
        };
        
        // User Script
        this.registerScript("responsableFrame.xfdl", function() {

        this.frmTop_onsize = function(obj,e)
        {
        	trace("==>"+this.width);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.frmTop_onsize,this);
        };

        this.loadIncludeScript("responsableFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
