(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(180,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Menu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_menu","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_menu");
            obj.set_binddataset("ds_Menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("true");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusebutton("use");
            obj.set_treeuseexpandkey("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" autosizecol=\"default\" controlautosizingtype=\"none\" treelevel=\"bind:MENU_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Menu Name");
            obj.set_cssclass("sta_LF_menuTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_split",null,"0","8","608","-20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_imgBar");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_titlebg",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_LF_menuTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_expand",null,"4","15","32","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_menuClose");
            obj.getSetter("isExpanded").set("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",180,608,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Left.xfdl", function() {
        this.Form_Left_onload = function(obj,e)
        {
        	this.setTimer(9, 100);
        	obj.set_scrolltype("none");
        	obj.set_scrollbartype("none");
        };

        this.Form_Left_ontimer = function(obj,e)
        {
        	this.killTimer(9);

        	var objApp = nexacro.getApplication();

        	this.ds_Menu.set_enableevent(false);
        	this.ds_Menu.copyData(objApp.gds_Menu);
        	this.ds_Menu.set_enableevent(true);
        };

        this.grd_menu_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var lvl = objDs.getColumn(e.row, "MENU_LVL");

        	if (lvl == 0) return;

        	var sID = objDs.getColumn(e.row, "MENU_ID"); //메뉴ID Key

        	if (!sID) return;

        	var objApp = nexacro.getApplication();
        	var objForm = objApp.mainframe.VFrameSet.TopFrame.form;

        	objForm && objForm["fnOpenMenu"].call(objForm, sID);
        };

        this.grd_menu_oncelldblclick = function(obj,e)
        {
        	var nTreeRow = obj.getTreeRow(e.row);

        	if (this.grd_menu.getTreeStatus(nTreeRow)) {
        		this.grd_menu.setTreeStatus(nTreeRow, false);
        	} else {
        		this.grd_menu.setTreeStatus(nTreeRow, true);
        	}
        };

        this.btn_expand_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objFrame = objApp.mainframe.VFrameSet.HFrameSet;

        	if (this.btn_expand.isExpanded)
        	{
        		this.st_title.set_visible(false);
        		this.grd_menu.set_visible(false);
        		this.st_titlebg.set_visible(true);
        		objFrame.set_separatesize("25,*");
        		this.btn_expand.isExpanded = false;
        		this.btn_expand.set_cssclass("btn_LF_menuOpen");
        	}
        	else
        	{
        		this.st_title.set_visible(true);
        		this.grd_menu.set_visible(true);
        		this.st_titlebg.set_visible(false);
        		objFrame.set_separatesize("180,*");
        		this.btn_expand.isExpanded = true;
        		this.btn_expand.set_cssclass("btn_LF_menuClose");
        	}
        };

        this.codeFind = function (strCode, codeNum, sType)
        {
        	this.ds_Menu.set_filterstr("");

        	var findRow = 0;
        	var startRow, endRow;
        	var strFilter = "MENU_TR.indexOf('"+strCode+"') > -1";
        	var i, n;
        	var parentsRow;

        	if (codeNum > -1)
        	{
        		if (sType == "prev") {
        			codeNum--;

        			for (n = codeNum; n > -1; n--)
        			{
        				findRow = this.ds_Menu.findRowExpr(strFilter, n, n+1);

        				if (findRow > -1) {
        					break;
        				}
        			}
        		} else {
        			codeNum++;

        			findRow = this.ds_Menu.findRowExpr(strFilter,codeNum);
        		}
        	}

        	if (!this.grd_menu.isTreeRootRow(findRow))
        	{
        		for (i = 0; i < 2; i++)
        		{
        			parentsRow = this.grd_menu.getTreeParentRow(findRow);
        			this.grd_menu.setTreeStatus(this.grd_menu.getTreeRow(parentsRow), true);

        			if (!this.grd_menu.isTreeRootRow(parentsRow)) {
        				parentsRow = this.grd_menu.getTreeParentRow(parentsRow);
        				this.grd_menu.setTreeStatus(this.grd_menu.getTreeRow(parentsRow), true);
        			} else {
        				break;
        			}
        		}
        	}

        	if (findRow < 0) {
        		findRow = this.ds_Menu.rowposition;
        	}

        	this.ds_Menu.set_rowposition(findRow);

        	return findRow;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.addEventHandler("ontimer",this.Form_Left_ontimer,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.grd_menu.addEventHandler("oncelldblclick",this.grd_menu_oncelldblclick,this);
            this.btn_expand.addEventHandler("onclick",this.btn_expand_onclick,this);
        };

        this.loadIncludeScript("Frame_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
