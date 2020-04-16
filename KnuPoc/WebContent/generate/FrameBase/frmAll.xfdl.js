(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmAll");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">통합정보시스템</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">학적기본사항관리</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">work01.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">work02.xfdl</Col><Col id=\"MENU_NM\">설문관리</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_CD\">0002</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divWork","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("work::poc_main.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","250","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::poc_main.xfdl");
        };
        
        // User Script
        this.registerScript("frmAll.xfdl", function() {
        this.Menu00_onmenuclick = function(obj,e)
        {
        	var sId = e.userdata;
        	var sMenuId = this.dsLeftMenu.lookup("MENU_CD", sId, "MENU_CD");
        	this.fn_openMenu(sMenuId);
        };

        this.fn_openMenu = function(sMenuId)
        {
        	var nFRow;
        	var sPGMPATH;
        	var sPGMID;

        	var nFRowOpen;
        	var sWinId;
        	var sMenuNm;
        	var sMenuNavi;

        	var objMenuDs = this.dsLeftMenu;

        	nFRow 		= objMenuDs.findRow("MENU_CD", sMenuId);
        	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PGM_PATH");
        	sPGMID 		= objMenuDs.getColumn(nFRow, "PGM_ID")
        	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");

        	nFRowOpen = this.dsOpenMenu.findRow("MENU_CD", sMenuId);
        	sWinId = this.dsOpenMenu.getColumn(nFRowOpen, "WINID");
        	this.divWork.set_url(sPGMPATH+"::"+sPGMID);


        // 	if (nFRow==-1)
        // 	{
        // 		alert("Menu가 존재하지 않습니다.");
        // 		return;
        //
        // 	}else if(this.gfnIsNull(sPGMPATH)==true)
        // 	{
        // 		return;
        // 	}
        //
        // 	sWinId = "UI_"+sMenuId + "_" + this.dsOpenMenu.rowcount+ "_" + parseInt(Math.random() * 100);
        // 	//trace("sPGMPATH+:::::+sPGMID" + sWinId);
        // 	var objNewWin = new Div();
        // 	objNewWin.init(sWinId, 0, 0, null, null, 0, 0);
        //
        // 	objNewWin.set_async(false);
        //
        // 	this.divWork.form.addChild(objNewWin.name, objNewWin);
        //
        // 	objNewWin.show();
        //
        // 	objNewWin.set_url(sPGMPATH+"::"+sPGMID);
        //
        // 	this.fn_AddOpenMenu(sWinId, sMenuId, sMenuNm);
        };

        /*****************************************************************************
        함 수 명 칭 : gfnAddOpenMenu
        함 수 설 명 : 열린화면리스트 저장
        파 라 미 터 : pvWinId – 업무화면 ID
        			   pvMenuCd – 메뉴코드
        			   pvMenuNm – 메뉴명
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_AddOpenMenu = function(pvWinId, pvMenuCd, pvMenuNm)
        {
        	var nAddRow = this.dsOpenMenu.addRow();
        	this.dsOpenMenu.setColumn(nAddRow, "WINID", pvWinId);
        	this.dsOpenMenu.setColumn(nAddRow, "MENU_CD", pvMenuCd);
        	this.dsOpenMenu.setColumn(nAddRow, "MENU_NM", pvMenuNm);
        };

        /*****************************************************************************
        함 수 명 칭 : gfnIsNull
        함 수 설 명 : 입력값 Null 체크 함수
        파 라 미 터 : pvVal – 입력값
        리 턴 내 용 : true/false 값이 Null일 경우 true
        *****************************************************************************/
        this.gfnIsNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };

        this.loadIncludeScript("frmAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
