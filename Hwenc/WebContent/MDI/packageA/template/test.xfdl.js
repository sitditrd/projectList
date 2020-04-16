(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn01","493","19","154","82",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Div("div00","16","19","442","215",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_background("green");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","94","80","167","71",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test.xfdl", function() {

        this.btn01_onclick = function(obj,e)
        {
        trace(this.components["btn00"]);
        	this.jquerid(this.components["btn00"]);
        };

        this.jquerid = function(objID)
        {
        	var generateID = "";
        	var prtID = objID;
        	var objApp = nexacro.getApplication();
        	var mainFrm = objApp.mainframe;

        	while(prtID != mainFrm)
        	{

        		if(prtID.toString() == "[object Form]")
        			generateID = "form." + generateID;
        		else
        			generateID = prtID.name + ((generateID != "")?".":"") + generateID;

        		prtID = prtID.parent;
        	}

        	return "mainframe." + generateID;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
