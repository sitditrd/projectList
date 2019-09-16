(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("root");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1016,617);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"10\"/><Column id=\"parentMenuId\" type=\"STRING\" size=\"10\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"bookmark\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0 none");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"30","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divWorkFrame","0","80",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

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
        this.registerScript("root.xfdl", function() {
        this.fv_ActiveWork = "";

        this.root_onload = function(obj,e)
        {
        	this.divTop.form.set_scrollbartype("none");
        	this.divBottom.form.set_scrollbartype("none");

        	nexacro._OnceCallbackTimer.callonce(this, function()
        	{
        		this.divBottom.set_url("frame::mdi.xfdl");
        		this.divTop.set_url("frame::top.xfdl");
        	}, 10);
        };

        this.gfnOpenMenu = function(menuCd)
        {
        	try
        	{
        		var nFRow;
        		var nFRowOpen;
        		var sWinId;
        		var sMenuNm;
        		var sMenuUrl;
        		var inheritanceid;

        		var nFormLeft = 0;
        		var nFormTop = 80;
        		var nFormWidth = null;
        		var nFormHeight = null;
        		var nFormRight = 0;
        		var nFormBottom = 30;
        		var nMinWidth = 1016;
        		var nMaxWidth = null;
        		var nMinHeight = 507;
        		var nMaxHeight = null;

        		var objMenuDs = nexacro.getApplication().gdsMenu;
        		objMenuDs.filter("");

        		nFRow = objMenuDs.findRow("menuId", menuCd);

        		sMenuUrl = objMenuDs.getColumn(nFRow, "menuUrl")
        		sMenuNm = objMenuDs.getColumn(nFRow, "menuNm");
        		inheritanceid = objMenuDs.getColumn(nFRow, "inheritanceid");

        		nFRowOpen = this.dsOpenMenu.findRow("menuId", menuCd);
        		sWinId = this.dsOpenMenu.getColumn(nFRowOpen, "winId");

        		if (nFRow == -1)
        		{
        			alert("Menu가 존재하지 않습니다.");
        			return;
        		}
        		else if (Eco.isEmpty(sMenuUrl))
        		{
        			return;
        		}

        		if (nFRowOpen > -1)
        		{
        			this.divBottom.form["gfnActiveTabPage"].call(this.divBottom.form, sWinId);
        			return;
        		}

        		if (this.dsOpenMenu.rowcount > 7)
        		{
        			alert("메뉴는 8개이상 오픈할 수 없습니다.");
        			return;
        		}

        		sWinId = "win_" + menuCd;

        		var objNewWin = new Div();
        		objNewWin.init(sWinId, nFormLeft, nFormTop, nFormWidth, nFormHeight, nFormRight, nFormBottom, nMinWidth, nMaxWidth, nMinHeight, nMaxHeight);

        		objNewWin.menuInfo = {winId: sWinId, menuCd: menuCd, menuNm: sMenuNm, menuUrl: sMenuUrl};

        		this.addChild(sWinId, objNewWin);

        		objNewWin.show();

        		//objNewWin.set_async(false);
        		objNewWin.set_url("frame::" + inheritanceid + ".xfdl");

        		this.gfnAddOpenMenu(sWinId, menuCd, sMenuNm);

        		this.divBottom.form["gfnAddTabPage"].call(this.divBottom.form, sWinId, sMenuNm);
        		this.divBottom.form["gfnActiveTabPage"].call(this.divBottom.form, sWinId);
        	}
        	catch(err)
        	{
        		trace("[Error] gfnOpenMenu - " + err.message);
        	}
        };

        this.gfnActiveWorkFrame = function(winId)
        {
        	var sWinId;
        	var result = false;

        	for (i = 0; i < this.dsOpenMenu.rowcount; i++)
        	{
        		sWinId = this.dsOpenMenu.getColumn(i, "winId");

        		if (sWinId == winId)
        		{
        			this.fv_ActiveWork = sWinId;
         			this.components[sWinId].set_visible(true);
        			result = true;
        		}
        		else
        		{
        			this.components[sWinId].set_visible(false);
        		}
        	}

        	return result;
        };

        this.gfnCloseWorkForm = function(winId)
        {
        	var objDelete = this.removeChild(winId);

        	if (objDelete)
        	{
        		objDelete.destroy();
        		objDelete = null;
        	}

        	this.gfnDelOpenMenu(winId);
        	this.divBottom.form["gfnDeleteTabpage"].call(this.divBottom.form, winId);
        };

        this.gfnAddOpenMenu = function(winId, menuCd, menuNm)
        {
        	var nAddRow = this.dsOpenMenu.addRow();

        	this.dsOpenMenu.setColumn(nAddRow, "winId", winId);
        	this.dsOpenMenu.setColumn(nAddRow, "menuId", menuCd);
        	this.dsOpenMenu.setColumn(nAddRow, "menuNm", menuNm);
        };

        this.gfnDelOpenMenu = function(winId)
        {
        	var nRow = this.dsOpenMenu.findRow("winId", winId);

        	this.dsOpenMenu.deleteRow(nRow);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.root_onload,this);
        };

        this.loadIncludeScript("root.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
