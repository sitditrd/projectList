(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,70);
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
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Top", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","35",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_logoArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("popMenu","316","70","150","262",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_Menu");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_ID");
            obj.set_cssclass("PM_TF_popmenu");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,70,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Frame_Top.xfdl","lib::lib_Form.xjs");
        this.registerScript("Frame_Top.xfdl", function() {
        /************************
         *  Script Include
         *************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;

        var objApp = nexacro.getApplication();

        this.Form_Top_onload = function(obj, e)
        {
        	this.set_scrolltype("none");
        	this.set_scrollbartype("none");

        	this.initTop();
        };

        this.initTop = function ()
        {
        	this.ds_Top.copyData(objApp.gds_Menu);
        	this.ds_Top.filter("MENU_LVL<1");

        	var nTopWidth = this.width;
        	var nMenuCnt = this.ds_Top.getCount();
        	//var nWidth		= Math.floor(nTopWidth/nMenuCnt);
        	var nWidth = 120;
        	var nLeft = 0;
        	var nTop = 35;
        	var nHeight = 35;
        	var topObj, topId;
        	var i;

        	for (i = 0; i < nMenuCnt; i++)
        	{
        		topObj = new Button();
        		topId  = this.ds_Top.getColumn(i, "MENU_GRP");
        		topObj.init("btn_" + topId, nLeft, nTop, nWidth, nHeight);

        		topObj.set_text(topId);
        		topObj.set_cssclass("btn_TF_menu");
        		topObj.setEventHandler("onclick", this.btn_menu_onclick, this);

        		this.addChild("btn_" + topId, topObj);
        		topObj.show();

        		nLeft += nWidth;
        	}
        };

        this.btn_menu_onclick = function(obj,e)
        {
        	var objName = obj.name;
        	var objGRP 	= objName.substr(4).toUpperCase();

        	var gds = objApp.gds_Menu;

        	gds.filter("MENU_GRP=='" + objGRP + "'");
        	this.ds_Menu.copyData(gds, true);

        	var menu_level = 0;
        	var i;

        	for (i = this.ds_Menu.getRowCount(); i > -1; i--)
        	{
        		menu_level = this.ds_Menu.getColumn(i, "MENU_LVL");

        		if (menu_level > 0) {
        			this.ds_Menu.setColumn(i, "MENU_LVL", menu_level-1);
        		} else {
        			this.ds_Menu.deleteRow(i);
        		}
        	}

        	this.popMenu.trackPopupByComponent(obj,0,obj.getOffsetHeight());
        };

        this.popMenu_onmenuclick = function(obj, e)
        {
        	if (!e.id) return;

        	this.fnOpenMenu(e.id);
        };

        this.fnOpenMenu = function(menuId, aSend, sNew, sText)
        {
        	var objApp = nexacro.getApplication();
        	var nRow = objApp.gds_Menu.findRow("MENU_ID", menuId);

        	if (nRow < 0) return;

        	var menuNm = objApp.gds_Menu.getColumn(nRow, "MENU_NM");
        	var menuUrl = objApp.gds_Menu.getColumn(nRow, "FORM_URL");

        	if (!menuUrl)	return;

        	var objChildFrame;
        	var winId = "win_" + menuId;

        	objChildFrame = objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet[winId];

        	if (objChildFrame && sNew != true)
        	{
        		objChildFrame.setFocus();

        		if (aSend && aSend != null) {
        			objChildFrame.form.all["fnLinkSearch"].call(objChildFrame.form, aSend);
        		}

        		return;
        	}

        	if (sNew)
        	{
        		var openCnt = objApp.gds_OpenMenu.getCaseCount("MENU_ID=='" + menuId + "'");
        		var i;
        		var tmp_winId;

        		for (i = 0; i < (openCnt + 1); i++)
        		{
        			tmp_winId = winId;
        			tmp_winId = tmp_winId + "_temp_" + (i + 1);

        			if (objApp.gds_OpenMenu.findRow("WIN_ID", tmp_winId) == -1) {
        				winId = tmp_winId;
        				openCnt = (i + 1);
        				break;
        			}
        		}

        		if (sText != undefined && sText != null) {
        			menuNm += " (" + openCnt + ")";
        		} else {
        			menuNm += " (" + sText + ")";
        		}
        	}
        	else
        	{
        		var nTempRow = objApp.gds_OpenMenu.findRow("WIN_ID", winId);

        		if (nTempRow != -1) {
        			objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet[winId] && objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet[winId].setFocus();

        			return;
        		}
        	}

        	if (objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet["HomeFrame"]) {
        		var objDelete = objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet.removeChild("HomeFrame");

        		if (objDelete) {
        			objDelete.destroy();
        			objDelete = null;
        		}
        	}

        	objChildFrame = new ChildFrame();
        	objChildFrame.init(winId, 0, 0, 824, 608);

        	objChildFrame.set_formurl(menuUrl);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_showcascadetitletext(false);

        	objChildFrame.menuId = menuId;
        	objChildFrame.menuNm = menuNm;
        	objChildFrame.aSend = aSend;

        	objChildFrame.addEventHandler("onactivate", this.workFrame_onactivate, this);
        	objChildFrame.addEventHandler("onclose", this.workFrame_onclose, this);

        	objApp.mainframe.VFrameSet.HFrameSet.MDIFrameSet.addChild(winId, objChildFrame);

        	objChildFrame.show();

        	var nFromRow = objApp.gds_Menu.findRow("MENU_ID", menuId);
        	var nToRow = objApp.gds_OpenMenu.addRow();

        	objApp.gds_OpenMenu.copyRow(nToRow, objApp.gds_Menu, nFromRow);
        	objApp.gds_OpenMenu.setColumn(nToRow, "WIN_ID", winId);

        	try
        	{
        		var objForm = objApp.mainframe.VFrameSet.OpenMenuFrame.form;
        		objForm["fnAddTabPage"].call(objForm, winId, menuNm);
        	}
        	catch (err)
        	{
        		trace("[Error] in frame::top.xfdl fnOpenMenu : " + err.message);
        	}
        };

        this.workFrame_onactivate = function(obj, e)
        {
        	try
        	{
        		var objApp = nexacro.getApplication();
        		var objForm = objApp.mainframe.VFrameSet.OpenMenuFrame.form;
        		objForm["fnActiveTabPage"].call(objForm, obj.name);
        	}
        	catch (err)
        	{
        		trace("[Error] in frame::top.xfdl workFrame_onactivate : " + err.message);
        	}
        };

        this.workFrame_onclose = function(obj, e)
        {
        	if (e.fromobject.name.substr(0, 4) != "win_") return;

        	try
        	{
        		var objApp = nexacro.getApplication();
        		var objForm = objApp.mainframe.VFrameSet.OpenMenuFrame.form;
        		objForm["fnDeleteTabpage"].call(objForm, obj.name);
        	}
        	catch (err)
        	{
        		trace("[Error] in frame::top.xfdl workFrame_onclose : " + err.message);
        	}
        };

        this.Form_Top_ontimer = function(obj,e)
        {
        	var nSecond = 0;

        	if(e.timerid == 1)
        	{
        		this.Static03.set_text(nSecond++);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.addEventHandler("ontimer",this.Form_Top_ontimer,this);
            this.popMenu.addEventHandler("onmenuclick",this.popMenu_onmenuclick,this);
        };

        this.loadIncludeScript("Frame_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
