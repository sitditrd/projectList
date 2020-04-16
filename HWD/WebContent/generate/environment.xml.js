if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

    env.on_init = function ()
    {
        this.set_themeid("theme::demo19");
        this.set_filesecurelevel("all");
        this.set_scrollindicatorsize("5");
        this.set_loadingimage("url(\'theme://images/waitimage.gif\')");
    };

    env.on_initEvent = function ()
    {
        // add event handler

    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("svcurl", "JSP", "http://localhost/HWD/", "none", null, "", "0", "0");
        nexacro._addService("xeni", "JSP", "http://localhost/nexacro17-xeni/", "none", null, "", "0", "0");
        nexacro._addService("lib", "js", "./lib/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("comm", "form", "./work/comm/", "session", null, "", "0", "0");
        nexacro._addService("grid", "form", "./work/grid/", "session", null, "", "0", "0");
        nexacro._addService("comp", "form", "./work/comp/", "session", null, "", "0", "0");
        nexacro._addService("ext", "form", "./work/ext/", "session", null, "", "0", "0");
        nexacro._addService("example", "form", "./work/example/", "session", null, "", "0", "0");
        nexacro._addService("Poc", "form", "./work/poc/", "session", null, "", "0", "0");
        nexacro._addService("file", "file", "./file/", "session", null, "", "0", "0");
        nexacro._addService("basicChart", "form", "./chart/basicChart/", "session", null, "", "0", "0");
        nexacro._addService("bubbleChart", "form", "./chart/bubbleChart/", "session", null, "", "0", "0");
        nexacro._addService("floatChart", "form", "./chart/floatChart/", "session", null, "", "0", "0");
        nexacro._addService("gaugeChart", "form", "./chart/gaugeChart/", "session", null, "", "0", "0");
        nexacro._addService("pieChart", "form", "./chart/pieChart/", "session", null, "", "0", "0");
        nexacro._addService("pyramidChart", "form", "./chart/pyramidChart/", "session", null, "", "0", "0");
        nexacro._addService("radarChart", "form", "./chart/radarChart/", "session", null, "", "0", "0");
        nexacro._addService("roseChart", "form", "./chart/roseChart/", "session", null, "", "0", "0");

    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"BasicChart", "classname":"nexacro.BasicChart", "type":"JavaScript"},
        		{"id":"PieChart", "classname":"nexacro.PieChart", "type":"JavaScript"},
        		{"id":"BubbleChart", "classname":"nexacro.BubbleChart", "type":"JavaScript"},
        		{"id":"RadarChart", "classname":"nexacro.RadarChart", "type":"JavaScript"},
        		{"id":"RoseChart", "classname":"nexacro.RoseChart", "type":"JavaScript"},
        		{"id":"GaugeChart", "classname":"nexacro.GaugeChart", "type":"JavaScript"},
        		{"id":"FloatChart", "classname":"nexacro.FloatChart", "type":"JavaScript"},
        		{"id":"PyramidChart", "classname":"nexacro.PyramidChart", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables


        // Cookies


        // HTTP Header

    };

	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};

    // User Script

					
    env = null;
}

