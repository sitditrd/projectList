(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("top");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTopMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_TP_bg01");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","46",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_Top_bg02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","20","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_TP_logo");
            obj.set_background("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Div("divSubMenuBar","160","51",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,80,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("top.xfdl", function() {

        this.top_onload = function(obj,e)
        {
        	this.setTopMenu();
        };

        this.setTopMenu = function()
        {
        	nexacro.getApplication().gdsMenu.filter("menuLvl==0");
            this.dsTopMenu.copyData(nexacro.getApplication().gdsMenu, true);
            nexacro.getApplication().gdsMenu.filter("");

            var nLeft = 160,
                nTop = 5;
            var nWidth = 130;
            var nHeight = 40;
            var nGap = 0;

            for (var i = 0, len = this.dsTopMenu.rowcount; i < len; i++)
            {
                var strMenuId = this.dsTopMenu.getColumn(i, "menuId");
                var strMenuNm = this.dsTopMenu.getColumn(i, "menuNm");
                var strId = "btn_" + strMenuId;

                var objButton = new Button();
                objButton.init(strId, nLeft, nTop, nWidth, nHeight);
                objButton.set_text(strMenuNm);
                objButton.set_cssclass("btn_TP_menu");
                objButton.menuId = strMenuId;
                objButton.menuNm = strMenuNm;

                this.addChild(strId, objButton);

                objButton.show();

                objButton.addEventHandler("onclick", this.btnTopMenu_onclick, this);

                nLeft = nLeft + nWidth + nGap;
            }

        	this.dsTopMenu.clear();
        };

        this.btnTopMenu_onclick = function(obj,e)
        {
        	//this.parent.parent && this.parent.parent.divLeft.form.setMenu(obj.menuId, obj.menuNm);

        	this.removeSubMenu();

        	nexacro.getApplication().gdsMenu.filter("parentMenuId=='" + obj.menuId + "'");
            this.dsSubMenu.copyData(nexacro.getApplication().gdsMenu, true);
            nexacro.getApplication().gdsMenu.filter("");

            var nLeft = 0,
                nTop = 0;
            var nWidth = 100;
            var nHeight = 20;
            var nGap = 5;

            for (var i = 0, len = this.dsSubMenu.rowcount; i < len; i++)
            {
                var strMenuId = this.dsSubMenu.getColumn(i, "menuId");
                var strMenuNm = this.dsSubMenu.getColumn(i, "menuNm");
                var strId = "btn_" + strMenuId;

                var objButton = new Button();
                objButton.init(strId, nLeft, nTop, nWidth, nHeight);
                objButton.set_text(strMenuNm);
        		objButton.set_fittocontents("width");
        		objButton.set_padding("1px, 10px");
                objButton.set_cssclass("btn_TP_menuS");
                objButton.menuId = strMenuId;
                objButton.menuNm = strMenuNm;

                this.divSubMenuBar.form.addChild(strId, objButton);

                objButton.show();

                objButton.addEventHandler("onclick", this.btnSubMenu_onclick, this);

                nLeft = strId + ":" + nGap;
            }
        };

        this.removeSubMenu = function()
        {
        	var comps = this.divSubMenuBar.form.components;

        	for (var i = comps.length - 1; i >=0; i--)
        	{
        		var objDelete = this.divSubMenuBar.removeChild(comps[i].name);
        		objDelete.destroy();
        		objDelete = null;
        	}
        };

        this.btnSubMenu_onclick = function(obj,e)
        {
        	this.parent.parent && this.parent.parent.gfnOpenMenu(obj.menuId);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.top_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };

        this.loadIncludeScript("top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
