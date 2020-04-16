(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gds_Menu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_GRP\">기초정보</Col><Col id=\"MENU_NM\">기초정보관리</Col><Col id=\"MENU_ID\">1100</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_GRP\">기초정보</Col><Col id=\"MENU_NM\">성적년도학기관리</Col><Col id=\"MENU_ID\">1110</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"FORM_URL\">PoC::PoC_1.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">기초정보</Col><Col id=\"MENU_NM\">성적학사력관리</Col><Col id=\"MENU_ID\">1120</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"FORM_URL\">PoC::PoC_2.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">강의계획</Col><Col id=\"MENU_NM\">강의계획서관리</Col><Col id=\"MENU_ID\">1200</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_TR\"/></Row><Row><Col id=\"MENU_GRP\">강의계획</Col><Col id=\"MENU_ID\">1210</Col><Col id=\"MENU_NM\">강의계획서입력</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"FORM_URL\">PoC::PoC_3.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">성적입력</Col><Col id=\"MENU_NM\">성적입력관리</Col><Col id=\"MENU_ID\">1300</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_ID\">1310</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_GRP\">성적입력</Col><Col id=\"MENU_NM\">성적입력</Col><Col id=\"FORM_URL\">PoC::PoC_4.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_OpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("http://14.63.224.112/Hyundai-steel_2019.07.08/license/nexacro17_client_license.xml");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1024","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("MIRAEASSET");
            mainframe.set_statusbarheight("25");
            mainframe.set_titlebarbuttongap("4");
            mainframe.set_titlebarbuttonsize("19 19");
            mainframe.set_titlebarheight("28");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);

            obj.set_formurl(nexacro._quickview_formurl);

            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };

		// script Compiler

        
        this.loadPreloadList();
        this.loadCss("xcssrc::EduProject.xcss");
        this.loadCss("xcssrc::layout.xcss");
        this.loadCss("xcssrc::pivot.xcss");
    };
}
)();
