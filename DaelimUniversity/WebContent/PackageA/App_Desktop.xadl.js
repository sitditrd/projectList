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
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_GRP\">기초정보</Col><Col id=\"MENU_NM\">기초정보관리</Col><Col id=\"MENU_ID\">1100</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_GRP\">기초정보</Col><Col id=\"MENU_NM\">성적년도학기관리</Col><Col id=\"MENU_ID\">1110</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"FORM_URL\">Bim::Motsys.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">기초정보</Col><Col id=\"MENU_NM\">성적학사력관리</Col><Col id=\"MENU_ID\">1120</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"FORM_URL\">Bim::Moar.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">강의계획</Col><Col id=\"MENU_NM\">강의계획서관리</Col><Col id=\"MENU_ID\">1200</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_TR\"/></Row><Row><Col id=\"MENU_GRP\">강의계획</Col><Col id=\"MENU_ID\">1210</Col><Col id=\"MENU_NM\">강의계획서입력</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"FORM_URL\">Cpm::Elp.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">성적입력</Col><Col id=\"MENU_NM\">성적입력관리</Col><Col id=\"MENU_ID\">1300</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_ID\">1310</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_GRP\">성적입력</Col><Col id=\"MENU_NM\">성적입력</Col><Col id=\"FORM_URL\">Pim::Pi.xfdl</Col><Col id=\"MENU_TR\">poc</Col></Row></Rows>");
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
            var mainframe = this.createMainFrame("mainframe","0","0","1024","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("DaelimUniversity_POC");
            mainframe.set_openalign("center middle");
            mainframe.set_openstatus("normal");
            mainframe.set_layered("true");
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

            var frame1 = new ChildFrame("LoginForm",null,null,null,null,null,null,"frame::Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("frame::Login.xfdl");


            var frame2 = new ChildFrame("TopFrame",null,null,null,null,null,null,"frame::Frame_Top.xfdl",frame0);
            frame2.set_showtitlebar("false");
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("frame::Frame_Top.xfdl");


            var frame3 = new ChildFrame("OpenMenuFrame",null,null,null,null,null,null,"frame::Frame_Mdi.xfdl",frame0);
            frame3.set_showtitlebar("false");
            frame0.addChild(frame3.name, frame3);
            frame3.set_formurl("frame::Frame_Mdi.xfdl");


            var frame4 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame4.set_separatesize("180,*");
            frame4.set_showtitlebar("false");
            frame0.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"frame::Frame_Left.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("frame::Frame_Left.xfdl");


            var frame6 = new FrameSet("MDIFrameSet",null,null,null,null,null,null,frame4);
            frame6.set_showtitlebar("false");
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("HomeFrame",null,null,null,null,null,null,"frame::Main.xfdl",frame6);
            frame7.set_showtitlebar("false");
            frame7.set_showcascadetitletext("false");
            frame7.set_dragmovetype("none");
            frame7.set_openstatus("maximize");
            frame6.addChild(frame7.name, frame7);
            frame7.set_formurl("frame::Main.xfdl");


            var frame8 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"frame::Frame_Bottom.xfdl",frame0);
            frame8.set_showtitlebar("false");
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("frame::Frame_Bottom.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler


        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::style.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
