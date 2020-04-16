(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridCellWebBrowser");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">&lt;a href=&quot;http://en.wikipedia.org/wiki/Korea&quot; target=&quot;_blank&quot; title=&quot;http://en.wikipedia.org/wiki/Korea&quot;&gt;Korea&lt;/a&gt;&lt;span&gt;&lt;img src=&quot;./_resource_/_images_/korea.png&quot;&gt;&lt;img src=&quot;./_resource_/_images_/korea.png&quot;&gt;&lt;/span&gt;</Col></Row><Row><Col id=\"Column0\">&lt;a href=&quot;http://en.wikipedia.org/wiki/USA&quot; class=&quot;my_a_tag&quot; target=&quot;_blank&quot; title=&quot;http://en.wikipedia.org/wiki/USA&quot;&gt;USA&lt;/a&gt;&lt;span&gt;&lt;img src=&quot;./_resource_/_images_/usa.png&quot;&gt;&lt;/span&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/><Column size=\"400\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"Data\"/><Cell col=\"1\" text=\"WebBrowser\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column0\" displaytype=\"webbrowsercontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("GridCellWebBrowser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
