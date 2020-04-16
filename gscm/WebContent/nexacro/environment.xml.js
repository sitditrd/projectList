if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

    env.on_init = function ()
    {
        this.set_themeid("theme::temp01");
    };

    env.on_initEvent = function ()
    {
        // add event handler

    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "0");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("comm", "form", "./comm/", "session", null, "", "0", "0");
        nexacro._addService("lib", "js", "./lib/", "session", null, "", "0", "0");
        nexacro._addService("work", "form", "./work/", "session", null, "", "0", "0");
        nexacro._addService("sample", "form", "./sample/", "session", null, "", "0", "0");
        nexacro._addService("svc", "JSP", "http://14.63.224.112:8080/gscm/", "none", null, "", "0", "0");
        nexacro._addService("xeni", "JSP", "http://14.63.224.112:8080/nexacro17-xeni/", "none", null, "", "0", "0");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("Script", "js", "./Script/", "session", null, "", "0", "0");
        nexacro._addService("poc01", "form", "./poc01/", "session", null, "", "0", "0");
        nexacro._addService("poc02", "form", "./poc02/", "session", null, "", "0", "0");

    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":""},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":""},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":""},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":""},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":""},
        		{"id":"Static", "classname":"nexacro.Static", "type":""},
        		{"id":"Div", "classname":"nexacro.Div", "type":""},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":""},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":""},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":""},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":""},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":""},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":""},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":""},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":""},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":""},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":""},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":""},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":""},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":""},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":""},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":""},
        		{"id":"CalendarWeekDouble", "classname":"nexacro.CalendarWeekDouble", "type":""},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":""},
        		{"id":"StandardGrid", "classname":"nexacro.StandardGrid", "type":""},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"NxPivot", "classname":"nexacro.NxPivot", "type":"JavaScript"},
        		{"id":"CalendarWeekSingle", "classname":"nexacro.CalendarWeekSingle", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables


        // Cookies


        // HTTP Header

    };

    // User Script

					
    env = null;
}

