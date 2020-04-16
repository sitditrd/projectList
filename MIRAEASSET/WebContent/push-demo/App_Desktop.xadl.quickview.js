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
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">POC</Col><Col id=\"MENU_ID\">1300</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">(주)매매실행</Col><Col id=\"MENU_ID\">1303</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"FORM_URL\">poc::poc01.xfdl</Col></Row></Rows>");
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

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","1000",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("미래에셋자산운용 POC");
            mainframe.set_openalign("center middle");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_openstatus("maximize");
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
        this.loadCss("xcssrc::style.xcss");
    };
}
)();
