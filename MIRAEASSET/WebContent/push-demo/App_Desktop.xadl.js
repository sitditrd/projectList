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
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0,0,0,0");
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"frame::login.xfdl",frame0);
            frame1.set_showcascadetitletext("false");
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("frame::login.xfdl");


            var frame2 = new ChildFrame("TopFrame",null,null,null,null,null,null,"frame::top.xfdl",frame0);
            frame2.set_showcascadetitletext("false");
            frame2.set_dragmovetype("none");
            frame2.set_showtitlebar("false");
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("frame::top.xfdl");


            var frame3 = new ChildFrame("OpenMenuFrame",null,null,null,null,null,null,"frame::openMenu.xfdl",frame0);
            frame3.set_showtitlebar("false");
            frame3.set_dragmovetype("none");
            frame3.set_showcascadetitletext("false");
            frame0.addChild(frame3.name, frame3);
            frame3.set_formurl("frame::openMenu.xfdl");


            var frame4 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame4.set_showcascadetitletext("false");
            frame4.set_separatesize("180,*");
            frame4.set_showtitlebar("false");
            frame0.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"frame::left.xfdl",frame4);
            frame5.set_showcascadetitletext("false");
            frame5.set_showtitlebar("false");
            frame5.set_dragmovetype("none");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("frame::left.xfdl");


            var frame6 = new FrameSet("MDIFrameSet",null,null,null,null,null,null,frame4);
            frame6.set_showtitlebar("false");
            frame6.set_showcascadetitletext("false");
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("HomeFrame",null,null,null,null,null,null,"frame::home.xfdl",frame6);
            frame7.set_dragmovetype("none");
            frame7.set_showtitlebar("false");
            frame7.set_showcascadetitletext("false");
            frame7.set_openstatus("maximize");
            frame6.addChild(frame7.name, frame7);
            frame7.set_formurl("frame::home.xfdl");


            var frame8 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"frame::bottom.xfdl",frame0);
            frame8.set_showcascadetitletext("false");
            frame8.set_showtitlebar("false");
            frame8.set_dragmovetype("none");
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("frame::bottom.xfdl");
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler


        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::style.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
