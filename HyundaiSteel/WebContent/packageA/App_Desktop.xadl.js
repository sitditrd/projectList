(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset

            
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
            mainframe.set_titletext("Hyundai-steel");
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
            var frame0 = new ChildFrame("chf_deskTop",null,null,null,null,null,null,"FrameBase::frmAll.xfdl",this);
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("FrameBase::frmAll.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler


        this.checkLicense("http://14.63.224.112/Hyundai-steel_2019.07.08/license/nexacro17_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::EduProject.xcss");
        this.loadCss("xcssrc::layout.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
