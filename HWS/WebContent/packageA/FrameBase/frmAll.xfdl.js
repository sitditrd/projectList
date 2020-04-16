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
            this.set_titletext("메인 프레임");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOpenList_", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu_", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">시나리오1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">poc01.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">시나리오2</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">poc02.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">poc03.xfdl</Col><Col id=\"MENU_NM\">시나리오3</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_CD\">0002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">추가</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">rChartGallery</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Sample</Col><Col id=\"PGM_ID\">rChartGallery.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_NM\">nexaChartGallery</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Sample</Col><Col id=\"PGM_ID\">nexaChartGallery.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0003</Col><Col id=\"UP_MENU_CD\">0030</Col><Col id=\"MENU_NM\">GridChart</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Sample</Col><Col id=\"PGM_ID\">GridChart.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0004</Col><Col id=\"UP_MENU_CD\">0040</Col><Col id=\"MENU_NM\">Sparkline</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Sample</Col><Col id=\"PGM_ID\">Sparkline.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0005</Col><Col id=\"UP_MENU_CD\">0050</Col><Col id=\"MENU_NM\">PivotGrid</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Sample</Col><Col id=\"PGM_ID\">pivot.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0006</Col><Col id=\"UP_MENU_CD\">0060</Col><Col id=\"MENU_NM\">CategoryGrid</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Sample</Col><Col id=\"PGM_ID\">CategoryGrid.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0007</Col><Col id=\"UP_MENU_CD\">0070</Col><Col id=\"MENU_NM\">Functions</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">Sample</Col><Col id=\"PGM_ID\">Functions.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divWork","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("PoC::PoC_Main.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","5","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","206","0",null,"60","414",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#ffffff");
            obj.set_innerdataset("dsMenu");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu01","610","0","90","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsSubMenu");
            obj.set_background("#ffffff");
            obj.set_visible("false");
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
            this._addPreloadList("fdl","PoC::PoC_Main.xfdl");
        };
        
        // User Script
        this.registerScript("frmAll.xfdl", function() {
        this.comm_MenuClick = function(obj, e)
        {
        	var objDs = obj.getInnerDataset();

        	var sId = e.userdata;
        	var sMenuId = objDs.lookup("MENU_CD", sId, "MENU_CD");

        	var objApp = nexacro.getApplication();
        	var nLeft,nTop,nWidth,nHeight;

        	nWidth =  objApp.mainframe.width - 150;
        	nHeight = objApp.mainframe.height- 100;

        	nLeft =   (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
        	nTop  =  (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;

        	if(sMenuId == "0000")
        	{
        		var objFrame = new ChildFrame("poc01", nLeft, nTop, nWidth, nHeight, null, null, "PoC::poc01.xfdl");
        		objFrame.set_titletext("poc01");
        		objFrame.set_background("transparent");
        		objFrame.set_dragmovetype(true);
        		objFrame.set_showtitlebar(true);
        		objFrame.set_autosize(false);
        		objFrame.set_resizable(true);
        		//objFrame.set_openalign("center middle");
        		objFrame.set_layered(true);
        		objFrame.set_showcascadetitletext(false);
        		objFrame.set_titlebarheight(30);

        		//사이즈 조절 - 전체화면보다 조금만 더 작게


        		var vRtn = objFrame.showModal( this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this, this.fn_popCallback );
        	}
        	else
        	{
        		this.fn_openMenu(sMenuId, objDs);
        	}
        };

        this.fn_openMenu = function(sMenuId, objDs)
        {
        	var nFRow;
        	var sPGMPATH;
        	var sPGMID;

        	var nFRowOpen;
        	var sWinId;
        	var sMenuNm;
        	var sMenuNavi;

        	var objMenuDs = objDs;

        	nFRow 		= objMenuDs.findRow("MENU_CD", sMenuId);
        	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PGM_PATH");
        	sPGMID 		= objMenuDs.getColumn(nFRow, "PGM_ID")
        	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");

        	nFRowOpen = this.dsOpenMenu.findRow("MENU_CD", sMenuId);
        	sWinId = this.dsOpenMenu.getColumn(nFRowOpen, "WINID");
        	this.divWork.set_url(sPGMPATH+"::"+sPGMID);
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

        this.Static01_onclick = function(obj,e)
        {
        	this.divWork.set_url("PoC::PoC_Main.xfdl");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmAll_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Menu00.addEventHandler("onmenuclick",this.comm_MenuClick,this);
            this.Menu01.addEventHandler("onmenuclick",this.comm_MenuClick,this);
        };

        this.loadIncludeScript("frmAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
