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
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">그림 1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_1.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">그림 2</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_2.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_3.xfdl</Col><Col id=\"MENU_NM\">그림 3</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_CD\">0002</Col></Row><Row><Col id=\"MENU_CD\">0003</Col><Col id=\"UP_MENU_CD\">0030</Col><Col id=\"MENU_NM\">그림 4</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_4.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0004</Col><Col id=\"UP_MENU_CD\">0040</Col><Col id=\"MENU_NM\">그림 5</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_5.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0005</Col><Col id=\"UP_MENU_CD\">0050</Col><Col id=\"MENU_NM\">그림 6</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_6.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0006</Col><Col id=\"UP_MENU_CD\">0060</Col><Col id=\"MENU_NM\">그림 7</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_7.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_1", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">요건 1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">개발 생산성 확인</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_1.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_2", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">요건 1</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">Javascript Library 적용_type1</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_2_1.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_NM\">Javascript Library 적용_type2</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_2_1_2.xfdl</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_2_2.xfdl</Col><Col id=\"MENU_NM\">Chart 적용_nexacroChart</Col><Col id=\"UP_MENU_CD\">0030</Col><Col id=\"MENU_CD\">0003</Col></Row><Row><Col id=\"MENU_CD\">0004</Col><Col id=\"UP_MENU_CD\">0040</Col><Col id=\"MENU_NM\">Chart 적용_rChart</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_2_2_2.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0005</Col><Col id=\"UP_MENU_CD\">0050</Col><Col id=\"MENU_NM\">데이터 통신 포맷 변경</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_2_3.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_3", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">요건 2</Col><Col id=\"MENU_CD\">0000</Col></Row><Row><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">대용량 데이터 렌더링 처리 시연</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_3_1.xfdl</Col><Col id=\"MENU_CD\">0001</Col></Row><Row><Col id=\"MENU_NM\">Copy &amp; Paste / Excel Import, Export</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_3_2.xfdl</Col><Col id=\"MENU_CD\">0002</Col></Row><Row><Col id=\"MENU_NM\">수식 이벤트 속도 및 결과값 측정</Col><Col id=\"UP_MENU_CD\">0030</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_3_3.xfdl</Col><Col id=\"MENU_CD\">0003</Col></Row><Row><Col id=\"MENU_NM\">다양한 그리드 기능</Col><Col id=\"UP_MENU_CD\">0040</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_3_4.xfdl</Col><Col id=\"MENU_CD\">0004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_4", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">요건 3</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">일반 컴포넌트 지원여부 확인_1</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_4_1.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_NM\">일반 컴포넌트 지원여부 확인_2</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_4_2.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_5", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">요건 4</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_5_2.xfdl</Col><Col id=\"MENU_NM\">다국어 처리 기능 확인</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_CD\">0002</Col></Row><Row><Col id=\"MENU_CD\">0003</Col><Col id=\"UP_MENU_CD\">0030</Col><Col id=\"MENU_NM\">스크롤 페이징 성능확인</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_5_3.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_6", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">요건 5</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">데이터 처리</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_6.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_7", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">요건 6</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">Validation</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">PoC</Col><Col id=\"PGM_ID\">PoC_7.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu_8", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">추가</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0010</Col><Col id=\"MENU_NM\">카테고리 그리드</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">CategoryGrid.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0020</Col><Col id=\"MENU_NM\">동적 그리드</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_ID\">Dynamic.xfdl</Col><Col id=\"PGM_PATH\">sample</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">DynamicTree.xfdl</Col><Col id=\"MENU_NM\">트리 그리드</Col><Col id=\"UP_MENU_CD\">0030</Col><Col id=\"MENU_CD\">0003</Col></Row><Row><Col id=\"MENU_CD\">0004</Col><Col id=\"UP_MENU_CD\">0040</Col><Col id=\"MENU_NM\">다양한 메뉴</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">MenuList.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0005</Col><Col id=\"UP_MENU_CD\">0050</Col><Col id=\"MENU_NM\">피벗 그리드</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">pivot.xfdl</Col></Row><Row><Col id=\"MENU_CD\">0006</Col><Col id=\"UP_MENU_CD\">0060</Col><Col id=\"MENU_NM\">포틀릿</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">Portlet.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divWork","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("PoC::PoC_Main.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu01","180","0",null,"50","738",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu_2");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#e7590b");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu02","286","0",null,"50","632",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu_3");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#e7590b");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu03","392","0",null,"50","526",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu_4");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#e7590b");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu04","498","0",null,"50","420",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu_5");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#e7590b");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu05","604","0",null,"50","314",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu_6");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#e7590b");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu06","710","0",null,"50","208",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu_7");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#e7590b");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu07","816","0",null,"50","102",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_captioncolumn("MENU_NM");
            obj.set_idcolumn("MENU_CD");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_popupitemheight("40");
            obj.set_userdatacolumn("MENU_CD");
            obj.set_innerdataset("dsLeftMenu_8");
            obj.set_autohotkey("false");
            obj.set_fittocontents("width");
            obj.set_background("#e7590b");
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
        	this.fn_openMenu(sMenuId, objDs);
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
            this.Menu01.addEventHandler("onmenuclick",this.comm_MenuClick,this);
            this.Menu02.addEventHandler("onmenuclick",this.comm_MenuClick,this);
            this.Menu03.addEventHandler("onmenuclick",this.comm_MenuClick,this);
            this.Menu04.addEventHandler("onmenuclick",this.comm_MenuClick,this);
            this.Menu05.addEventHandler("onmenuclick",this.comm_MenuClick,this);
            this.Menu06.addEventHandler("onmenuclick",this.comm_MenuClick,this);
            this.Menu07.addEventHandler("onmenuclick",this.comm_MenuClick,this);
        };

        this.loadIncludeScript("frmAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
