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
                this._setFormPosition(1280,1024);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"10\"/><Column id=\"parentMenuId\" type=\"STRING\" size=\"10\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"bookmark\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0 none");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","40","160",null,null,"30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_async("false");
            obj.set_border("0 none");
            this.addChild(obj.name, obj);

            obj = new Div("divMdi","divLeft:0","40",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0 none");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"30","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("0 none");
            this.addChild(obj.name, obj);

            obj = new Div("divWorkFrame","divLeft:0","70",null,null,"0","divBottom:0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_border("0 none");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1024,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("root_copy.xfdl", function() {
        this.fv_ActiveWork = "";

        this.root_onload = function(obj,e)
        {
        	this.divMdi.form.set_scrollbartype("none");
        	this.divTop.form.set_scrollbartype("none");
        	this.divLeft.form.set_scrollbartype("none");
        	this.divBottom.form.set_scrollbartype("none");

        	this.setTimer(0, 10);
        };

        this.root_ontimer = function(obj,e)
        {
        	if (e.timerid == 0)
        	{
        		this.killTimer(0);

        		this.divLeft.set_url("frame::left.xfdl");
        		this.divMdi.set_url("frame::mdi.xfdl");
        		this.divBottom.set_url("frame::bottom.xfdl");
        		this.divTop.set_url("frame::top.xfdl");
        	}
        };

        this.gfnOpenMenu = function(pvMenuCd)
        {
            var nFRow;

            var nFRowOpen;
            var sWinId;
            var sMenuNm;
            var sMenuUrl;

            //var nFormLeft = this.divWorkFrame.getOffsetLeft();
        	var nFormLeft = "divLeft:0";
            var nFormTop = this.divWorkFrame.getOffsetTop();
            var nFormWidth = this.divWorkFrame.getOffsetWidth();
            //var nFormHeight = this.divWorkFrame.getOffsetHeight();
        	var nFormHeight = null;
        	var nFormRight = null;
        	var nFormBottom = "divBottom:0";
        	var nMinWidth = 810;
        	var nMaxWidth = null;
        	var nMinHeight = 692;
        	var nMaxHeight = null;

            var objMenuDs = nexacro.getApplication().gdsMenu;
        	objMenuDs.filter("");

            nFRow = objMenuDs.findRow("menuId", pvMenuCd);
            sMenuUrl = objMenuDs.getColumn(nFRow, "menuUrl")
            sMenuNm = objMenuDs.getColumn(nFRow, "menuNm");

            nFRowOpen = this.dsOpenMenu.findRow("menuId", pvMenuCd);
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
                this.divMdi["gfnActiveTabPage"].call(this.divMdi, sWinId);
                return;
            }

            if (this.dsOpenMenu.rowcount > 7)
            {
                alert("메뉴는 8개이상 오픈할 수 없습니다.");
                return;
            }

            sWinId = "div" + pvMenuCd;

            var objNewWin = new Div();
            objNewWin.init(sWinId, nFormLeft, nFormTop, nFormWidth, nFormHeight, nFormRight, nFormBottom, nMinWidth, nMaxWidth, nMinHeight, nMaxHeight);

            objNewWin.winId = sWinId;
            objNewWin.menuCd = pvMenuCd;
            objNewWin.menuNm = sMenuNm;
            objNewWin.menuUrl = sMenuUrl;

            this.divMdi.form["gfnAddTabPage"].call(this.divMdi.form, sWinId, sMenuNm);

            this.addChild(sWinId, objNewWin);

            this.gfnAddOpenMenu(sWinId, pvMenuCd, sMenuNm);

            objNewWin.show();

        	objNewWin.set_async(false);
            objNewWin.set_url("frame::work.xfdl");
        	objNewWin.set_border("0px none");

            this.divMdi.form["gfnActiveTabPage"].call(this.divMdi.form, sWinId);
            nexacro.getApplication().gvActiveWinId = sWinId;
        };

        this.gfnActiveWorkFrame = function(pvWinId)
        {
            var sWinId;
            var rtn = false;

            var nLeft = this.divWorkFrame.getOffsetLeft();
            var nTop = this.divWorkFrame.getOffsetTop();
            var nWidth = this.divWorkFrame.getOffsetWidth();
            var nHeight = this.divWorkFrame.getOffsetHeight();

            for (i = 0; i < this.dsOpenMenu.rowcount; i++)
            {
                sWinId = this.dsOpenMenu.getColumn(i, "winId");

                if (sWinId == pvWinId)
                {
                    this.fv_ActiveWork = sWinId;
                    this.components[sWinId].move(nLeft, nTop, nWidth, nHeight);
                    this.components[sWinId].set_visible(true);
                    rtn = true;
                }
                else
                {
                    this.components[sWinId].set_visible(false);
                }
            }

            return rtn;
        };

        this.gfnCloseWorkForm = function(pvWinId)
        {
            var objDelete = this.removeChild(pvWinId);

        	if (objDelete)
        	{
        		objDelete.destroy();
        		objDelete = null;
        	}
            this.gfnDelOpenMenu(pvWinId);
            this.divMdi.form["gfnDeleteTabpage"].call(this.divMdi.form, pvWinId);
        };

        this.gfnAddOpenMenu = function(pvWinId, pvMenuCd, pvMenuNm)
        {
            var nAddRow = this.dsOpenMenu.addRow();
            this.dsOpenMenu.setColumn(nAddRow, "winId", pvWinId);
            this.dsOpenMenu.setColumn(nAddRow, "menuId", pvMenuCd);
            this.dsOpenMenu.setColumn(nAddRow, "menuNm", pvMenuNm);
        };

        this.gfnDelOpenMenu = function(pvWinId)
        {
            var nRow = this.dsOpenMenu.findRow("winId", pvWinId);

            this.dsOpenMenu.deleteRow(nRow);
        };

        this.btnLeftMenu_onclick = function(obj,e)
        {
        	this.divLeft.set_width(200);

        	this.divLeft.set_visible(true);
        	this.btnLeftMenu.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.root_onload,this);
            this.addEventHandler("ontimer",this.root_ontimer,this);
            this.addEventHandler("onsize",this.root_onsize,this);
        };

        this.loadIncludeScript("root_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
