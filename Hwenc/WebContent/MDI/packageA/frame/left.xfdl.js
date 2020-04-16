(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("left");
            this.set_titletext("Left Frame");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            this.set_background("#515356");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_leftMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_leftMenu","0","0","70","33",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass(" btn_LF_SelectMenu, btn_LF_Select01");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","70","0","70","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_MenuBg, btn_LF_BookMark");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_findMenu","140","0","70","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_MenuBg, btn_LF_MenuSearch");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_log","210","0","70","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_MenuBg, btn_LF_MenuHistory");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","33",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("#515356");
            this.addChild(obj.name, obj);

            obj = new Static("sta_topMenuTitle","20","20","250","17",null,null,null,null,null,null,this.div_left.form);
            obj.set_taborder("0");
            obj.set_fittocontents("none");
            obj.set_cssclass("btn_LF_MenuTitle");
            this.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_leftMenu","0","48","280",null,null,"37",null,null,null,null,this.div_left.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_LF_TreeGrd");
            obj.set_binddataset("ds_leftMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_autosizingtype("none");
            obj.set_autoupdatetype("none");
            obj.set_mouseovertype("default");
            obj.set_scrollbartype("default default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"280\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL\" cssclass=\"expr:comp.parent.fn_chkLevel(currow);\" suppressalign=\"first\"/></Band></Format></Formats>");
            this.div_left.addChild(obj.name, obj);

            obj = new Div("div_leftFavorite","330","33",null,null,"-330","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            obj.set_background("#515356");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menuFavorite","0","12",null,null,"0","59",null,null,null,null,this.div_leftFavorite.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_MenuGrid, grd_LF_MenuBookMark");
            obj.set_autofittype("none");
            obj.set_scrollbartype("default default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"280\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.div_leftFavorite.addChild(obj.name, obj);

            obj = new Div("div_leftFindMenu","630","33",null,null,"-630","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            obj.set_background("#515356");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_findMenu","0","54",null,null,"0","81",null,null,null,null,this.div_leftFindMenu.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_LF_MenuGrid, btn_LF_MenuSearch");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"280\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.div_leftFindMenu.addChild(obj.name, obj);

            obj = new Edit("edt_findMenu","20","12",null,"33","20",null,null,null,null,null,this.div_leftFindMenu.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("화면명 입력");
            obj.set_cssclass("edi_LF_SearchEdit");
            this.div_leftFindMenu.addChild(obj.name, obj);

            obj = new Button("btn_findMenu",null,"12","20","33","17",null,null,null,null,null,this.div_leftFindMenu.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Search, btn_WF_SearchIcon");
            obj.set_opacity("0.6");
            this.div_leftFindMenu.addChild(obj.name, obj);

            obj = new Div("div_leftLog","930","33",null,null,"-930","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            obj.set_background("#515356");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_recentTop5","0","53",null,"161","0",null,null,null,null,null,this.div_leftLog.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_HistoryGrid, btn_LF_MenuHistory");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj.set_autosizingtype("none");
            obj.set_selectscrollmode("select");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:MENU_NM\" cssclass=\"grd_LF_HistoryTit\" tooltiptext=\"bind:MENU_NM\"/><Cell col=\"1\" text=\"bind:LOG_DATE\" cssclass=\"grd_LF_HistoryInfo\"/></Band></Format></Formats>");
            this.div_leftLog.addChild(obj.name, obj);

            obj = new Static("sta_titleUp","20","23","134","17",null,null,null,null,null,null,this.div_leftLog.form);
            obj.set_taborder("2");
            obj.set_text("최근 접속한 메뉴");
            obj.set_cssclass("btn_LF_MenuTitle");
            obj.set_fittocontents("width");
            this.div_leftLog.addChild(obj.name, obj);

            obj = new ImageViewer("img_logTopUp","159","22","56","19",null,null,null,null,null,null,this.div_leftLog.form);
            obj.set_taborder("3");
            obj.set_cssclass("img_TF_Bg");
            obj.set_image("url(\'theme://images/img_LF_top5Icon.png\')");
            this.div_leftLog.addChild(obj.name, obj);

            obj = new Static("sta_titleDown","21","244","134","17",null,null,null,null,null,null,this.div_leftLog.form);
            obj.set_taborder("4");
            obj.set_text("자주 접속한 화면");
            obj.set_cssclass("btn_LF_MenuTitle");
            obj.set_fittocontents("width");
            this.div_leftLog.addChild(obj.name, obj);

            obj = new ImageViewer("img_logTopDown","160","243","56","19",null,null,null,null,null,null,this.div_leftLog.form);
            obj.set_taborder("5");
            obj.set_cssclass("img_TF_Bg");
            obj.set_image("url(\'theme://images/img_LF_top5Icon.png\')");
            this.div_leftLog.addChild(obj.name, obj);

            obj = new Grid("grd_hitTop5","0","274",null,"161","0",null,null,null,null,null,this.div_leftLog.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_LF_HistoryGrid, btn_LF_MenuHistory");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" cssclass=\"grd_LF_HistoryTit\" background=\"url('file://D:/HC/workspace/hc/WebContent/hc_out/_resource_/_theme_/nbisThemeKit/nbisImg/grd_LF_historyBgN.png') no-repeat left center\" tooltiptext=\"bind:MENU_NM\"/><Cell col=\"1\" text=\"bind:LOG_DATE\" cssclass=\"grd_LF_HistoryInfo\"/></Band></Format></Formats>");
            this.div_leftLog.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",280,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("left.xfdl", function() {
        this.maxLvl = "";

        this.left_onload = function(obj,e)
        {
        	this.div_leftFavorite.move(0, 33, null, null, 0, 0);
        	this.div_leftFindMenu.move(0, 33, null, null, 0, 0);
        	this.div_leftLog.move(0, 33, null, null, 0, 0);
        };

        this.btn_leftMenu_onclick = function(obj,e)
        {
        	this.btn_leftMenu.set_cssclass("btn_LF_Select01, btn_LF_SelectMenu");
        	this.btn_favorite.set_cssclass("btn_LF_MenuBg, btn_LF_BookMark");
        	this.btn_findMenu.set_cssclass("btn_LF_MenuBg, btn_LF_MenuSearch");
        	this.btn_log.set_cssclass("btn_LF_MenuBg, btn_LF_MenuHistory");

        	this.div_left.set_visible(true);
        	this.div_leftFavorite.set_visible(false);
        	this.div_leftFindMenu.set_visible(false);
        	this.div_leftLog.set_visible(false);
        };

        this.btn_favorite_onclick = function(obj,e)
        {
        	this.btn_leftMenu.set_cssclass("btn_LF_MenuBg, btn_LF_Menu");
        	this.btn_favorite.set_cssclass("btn_LF_Select02, btn_LF_SelectMenu");
        	this.btn_findMenu.set_cssclass("btn_LF_MenuBg, btn_LF_MenuSearch");
        	this.btn_log.set_cssclass("btn_LF_MenuBg, btn_LF_MenuHistory");

        	this.div_left.set_visible(false);
        	this.div_leftFavorite.set_visible(true);
        	this.div_leftFindMenu.set_visible(false);
        	this.div_leftLog.set_visible(false);
        };

        this.btn_findMenu_onclick = function(obj,e)
        {
        	this.btn_leftMenu.set_cssclass("btn_LF_MenuBg, btn_LF_Menu");
        	this.btn_favorite.set_cssclass("btn_LF_MenuBg, btn_LF_BookMark");
        	this.btn_findMenu.set_cssclass("btn_LF_Select03, btn_LF_SelectMenu");
        	this.btn_log.set_cssclass("btn_LF_MenuBg, btn_LF_MenuHistory");

        	this.div_left.set_visible(false);
        	this.div_leftFavorite.set_visible(false);
        	this.div_leftFindMenu.set_visible(true);
        	this.div_leftLog.set_visible(false);
        };

        this.btn_log_onclick = function(obj,e)
        {
        	this.btn_leftMenu.set_cssclass("btn_LF_MenuBg, btn_LF_Menu");
        	this.btn_favorite.set_cssclass("btn_LF_MenuBg, btn_LF_BookMark");
        	this.btn_findMenu.set_cssclass("btn_LF_MenuBg, btn_LF_MenuSearch");
        	this.btn_log.set_cssclass("btn_LF_Select04, btn_LF_SelectMenu");

        	this.div_left.set_visible(false);
        	this.div_leftFavorite.set_visible(false);
        	this.div_leftFindMenu.set_visible(false);
        	this.div_leftLog.set_visible(true);
        };

        this.fnChangeMenu = function (topMenuId, topMenuNm, topGrpId)
        {
        	var objApp = nexacro.getApplication();
        	this.maxLvl = "";

        	var filterExpr = "GROUP_ID==" + nexacro.wrapQuote(topGrpId) + "&&LVL!=0";
        	objApp.gdsMenu.set_enableevent(false);
        	this.ds_leftMenu.set_enableevent(false);
        	objApp.gdsMenu.filter(filterExpr);
        	this.ds_leftMenu.clearData();
        	this.ds_leftMenu.copyData(objApp.gdsMenu, true);
        	this.div_left.form.sta_topMenuTitle.set_text(topMenuNm);
        	this.maxLvl = this.ds_leftMenu.getMax("LVL");
        	objApp.gdsMenu.filter("");
        	objApp.gdsMenu.set_enableevent(true);
        	this.ds_leftMenu.set_enableevent(true);
        };

        this.grd_leftMenu_oncellclick = function(obj,e)
        {
        	var sID= this.ds_leftMenu.getColumn(e.row, "MENU_ID");

        	if(!sID) return;

        	var objApp = nexacro.getApplication();
        	var objForm = objApp.mainframe.VFrameSet.TopFrame.form;

        	objForm && objForm["fnOpenMenu"].call(objForm, sID);
        };

        this.fn_chkLevel = function(currow)
        {
        	var strLevel = this.ds_leftMenu.getColumn(currow, "LVL");
        	if (this.maxLvl == 3) {
        		if (strLevel == 2) {
        			return "grd_LF_TreeGrd2D";
        		} else if(strLevel == 3) {
        			return "grd_LF_TreeGrd3D";
        		}
        	} else if (this.maxLvl == 2) {
        		if (strLevel == 2) {
        			return "grd_LF_TreeGrd3D";
        		}
        	}else if (this.maxLvl == 1) {
        		return "grd_LF_TreeGrd3D";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.left_onload,this);
            this.btn_leftMenu.addEventHandler("onclick",this.btn_leftMenu_onclick,this);
            this.btn_favorite.addEventHandler("onclick",this.btn_favorite_onclick,this);
            this.btn_findMenu.addEventHandler("onclick",this.btn_findMenu_onclick,this);
            this.btn_log.addEventHandler("onclick",this.btn_log_onclick,this);
            this.div_left.form.grd_leftMenu.addEventHandler("oncellclick",this.grd_leftMenu_oncellclick,this);
        };

        this.loadIncludeScript("left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
