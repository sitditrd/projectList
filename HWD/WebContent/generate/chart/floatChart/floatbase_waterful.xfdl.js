(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("floatbase");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Monday</Col><Col id=\"to\">10</Col></Row><Row><Col id=\"Browser\">Tuesday</Col><Col id=\"to\">10</Col></Row><Row><Col id=\"Browser\">Wednesday</Col><Col id=\"to\">5</Col></Row><Row><Col id=\"Browser\">Thusday</Col><Col id=\"to\">-2</Col></Row><Row><Col id=\"Browser\">Friday</Col><Col id=\"to\">-5</Col></Row><Row><Col id=\"Browser\">Saturday</Col><Col id=\"to\">6</Col></Row><Row><Col id=\"Browser\">Sunday</Col><Col id=\"to\">-5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","0","0",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_browser_lanking");
            obj.set_rotateaxis("false");
            obj.set_waterfall("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Float - Waterfall",
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
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"visible": "true"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"labeltextcolor": "#6f6f6f",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextfont": "10pt '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0",
            			"autotickscale": "10",
            			"visible": "true"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"linevisible": true,
            			"barsize": "50",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:to",
            			"baropacity": "0.8",
            			"barvisible": "true",
            			"highlightbarvisible": "true"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Browser");
            this.addChild(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("floatbase_waterful.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
