(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMenu");
            this.set_titletext("메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50000000</Col><Col id=\"menuNm\">통합정보시스템</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50100000</Col><Col id=\"menuNm\">학적기본사항관리</Col><Col id=\"menuUrl\">work::work01.xfdl</Col><Col id=\"upMenuId\">SN50000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000005</Col><Col id=\"menuId\">SN50110000</Col><Col id=\"menuNm\">설문관리</Col><Col id=\"menuUrl\">work::work02.xfdl</Col><Col id=\"useYn\">Y</Col><Col id=\"upMenuId\">SN50000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMenu","0","122",null,null,"109","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_treeusebutton("noclick");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_background("white");
            obj.set_cssclass("grd_popMenu");
            obj.set_treeuseline("false");
            obj.set_binddataset("dsMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"247\"/></Columns><Rows><Row size=\"65\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" text=\"bind:menuNm\" treestartlevel=\"1\" treelevel=\"bind:level\" tooltiptext=\"bind:menuNm\" displaytype=\"treeitemcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"122","109",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titlebg","0","0",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_popMenu_bg");
            obj.set_accessibilityenable("false");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"15","120","40","10",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("LOGOUT");
            obj.getSetter("uWord").set("frame.logOut");
            obj.set_cssclass("btn_WF_btnWhite");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnMenu","0","70","50.00%","52",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("Menu");
            obj.getSetter("uWord").set("frame.menu");
            obj.set_cssclass("btn_Login_N");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","btnMenu:0","70",null,"52","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("MyMenu");
            obj.getSetter("uWord").set("frame.favorites");
            obj.set_cssclass("btn_Login_S");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staLogo","10","20","150","30",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("ADMIN");
            obj.set_cssclass("sta_popMenu_user");
            this.divTop.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","0","420",null,null,"109","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("gdsMyMenu");
            obj.set_visible("false");
            obj.set_cssclass("grd_popMenu");
            obj.set_nodatatext("로직 개발중...");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"231\"/></Columns><Rows><Row size=\"65\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staBack","divTop:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("rgba(0, 0, 0, 0.5)");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","70","70","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("메뉴 닫기");
            obj.set_cssclass("btn_popMenu_close");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameMenu.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.frameMenu_onload = function(obj,e)
        {
        	this.grdMyMenu.set_top(this.grdMenu.getOffsetTop());
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnClose" :
        			this.objApp.gvBase.fnAction("MENU", false);
        			break;

        		case "btnLogout" :
        			this.close(true);
        			this.objApp.gvBase.div_work.set_url("work::poc_main.xfdl");
        			this.objApp.gvBase.fnAction("LOGIN", false);
        			break;

        		case "btnMenu" :
        			this.grdMenu.set_visible(true);
        			this.grdMyMenu.set_visible(false);
        			this.divTop.form.btnMenu.set_cssclass("btn_Login_N");
        			this.divTop.form.btnMyMenu.set_cssclass("btn_Login_S");
        			break;

        		case "btnMyMenu" :
        			this.grdMenu.set_visible(false);
        			this.grdMyMenu.set_visible(true);
        			this.divTop.form.btnMenu.set_cssclass("btn_Login_S");
        			this.divTop.form.btnMyMenu.set_cssclass("btn_Login_N");
        			break;
        	}
        };

        this.staBack_onclick = function(obj,e)
        {
        	this.objApp.gvBase.fnAction("MENU", false);
        };

        this.grdMenu_oncellclick = function(obj,e)
        {
            if (obj.isTreeLeafRow(e.row))
        	{
        		this.fnFormOpen(this.dsMenu, e.row);
        	}
        	else
        	{
        		var nStatus = obj.getTreeStatus(obj.getTreeRow(e.row));
        		var nStatusRow = obj.getTreeRow(e.row);

        		if (nStatus == 1) {
        			obj.setTreeStatus(nStatusRow, false);
        		} else {
        			obj.setTreeStatus(nStatusRow, true);
        		}
        	}
        };

        // 메뉴생성
        this.fnMakeMenu = function ()
        {
        	var nCnt = this.dsMenu.getRowCount();
        	var i;

        	for (i = 0; i < nCnt; i++)
        	{
        		sID  = this.dsMenu.getColumn(i, this.objApp.gvMenuColumns.menuId);
        		sVal = nexacro.getPrivateProfile("MENU" + sID);
        	}

        	this.dsMenu.filter("");
        };

        // 화면호출
        this.fnFormOpen = function(objDs, nTargetRow, objArg)
        {

        	if (this.gfnIsNull(objDs)) return;
        	if (this.gfnIsNull(nTargetRow)) return;

        	var oObj = {
        		ds    : objDs,  	// 메뉴 dataset
        		nRow  : nTargetRow, // 선택된
        		oArgs : objArg,     // 넘길 argument
                sMenu : "Y"         // 메뉴클릭 여부
        	};

            this.gfnCallM(oObj);
        };

        //메뉴를 클릭해서 이동하지 않고 화면내 링크인 경우 메뉴에 현 위치 표시하기 위함
        this.fnMenuSet = function(arrProw, sMenuId)
        {
        	var objGrid 	= this.grdMenu;
        	var objDs   	= this.dsMenu;

        	objGrid.set_enableevent(false);
            objGrid.set_treeinitstatus("collapse, null");

            var nFrow = -1;
            for (var i = arrProw.length-1 ; i >= 0; i--)
            {
                nFrow = this.dsMenu.findRow(this.objApp.gvMenuColumns.menuId, arrProw[i]);
                objGrid.setTreeStatus(objGrid.getTreeRow(nFrow), true);
            }

            nFrow = this.dsMenu.findRow(this.objApp.gvMenuColumns.menuId, sMenuId);
        	objDs.set_rowposition(nFrow);
        	objGrid.set_enableevent(true);
        }

        this.gfnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this.gfnCallM = function(oObj)
        {
        	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;

        	var objApp  = nexacro.getApplication();

            var ds = oObj.ds;
        	var nRow = oObj.nRow;
        	var sMenuId;

        	if (!this.gfnIsNull( oObj.sMenuId)){
        		sMenuId = oObj.sMenuId;
        	}else{
        		sMenuId = ds.getColumn(nRow, objApp.gvMenuColumns.menuId);
        	}

            var pThis = objApp.mainframe.chf_mobile.form;

            if (!this.gfnIsNull(pThis.div_work.url))
            {
                pThis.fnWorkFrameClose(sMenuId, oObj);
            }
            else
            {
                this._gfnCallM(sMenuId, oObj);
            }
        };

        this._gfnCallM = function(sMenuId, oObj)
        {
            var objApp  = nexacro.getApplication();
            var pThis   = objApp.mainframe.chf_mobile.form;

            var aArgs 	= this.gfnIsNull(oObj.oArgs) ? "" : oObj.oArgs;

        	var objDate = new Date();
        	objApp.nStartTime = objDate.getTime();

        	var sColumn  = objApp.gvMenuColumns.menuNm;
        	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
        	if (sNowLang != "KO") {
        		sColumn = sColumn+sNowLang;
        	}

        	var sPageUrl = this.dsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.pageUrl);
        	var sGroupId = this.dsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);
        	var sMenuNm  = this.dsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, sColumn);

        	if(this.gfnIsNull(sPageUrl)) return;
            objApp.gvCurMenuId = sMenuId;

            if (oObj.sMenu != "Y")
            {
                pThis.divMenu.form.fnMenuSet(arrProw, sMenuId);
            }

            pThis.divMain.set_visible(false);

            pThis.div_work.set_url(sPageUrl);
            pThis.fnAction("MENU", false);

            pThis.arguments = [];
            pThis.arguments["aArgs"] = aArgs;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameMenu_onload,this);
            this.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.divTop.form.btnLogout.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.divTop.form.btnMenu.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.divTop.form.btnMyMenu.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.divTop.form.staLogo.addEventHandler("onclick",this.staLogo_onclick,this);
            this.grdMyMenu.addEventHandler("oncellclick",this.grdMyMenu_oncellclick,this);
            this.staBack.addEventHandler("onclick",this.staBack_onclick,this);
            this.btnClose.addEventHandler("onclick",this.fn_comBtnOnClick,this);
        };

        this.loadIncludeScript("frameMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
