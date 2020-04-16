(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SimplePyramid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"value\">1000</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"value\">200</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"value\">400</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"value\">600</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"value\">100</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"value\">180</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PyramidChart("PyramidChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_browser_lanking");
            obj.set_graphtype("funnel");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Pyramid Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"margintopdown": 10,
            			"graphratio": 60,
            			"linestyle": "2px solid #ffffff",
            			"itemtextvisible": true,
            			"itemtextfont": "10pt/normal '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"graphhalign": "center",
            			"itemtextguidesize": "30",
            			"autogradation": "none",
            			"marginleftright": "20",
            			"itemtext": "expr:Browser"
            		}
            	]
            });
            obj.set_categorycolumn("bind:value");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,480,this,function(p){});
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

        this.loadIncludeScript("SimpleFunnel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
