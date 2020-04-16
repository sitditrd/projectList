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
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"FLOAT\" size=\"256\"/><Column id=\"to\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"from\">22</Col><Col id=\"to\">60</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"from\">20</Col><Col id=\"to\">65</Col></Row><Row><Col id=\"Browser\">Samsung Internet</Col><Col id=\"from\">31</Col><Col id=\"to\">35</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"from\">10</Col><Col id=\"to\">40</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"from\">0</Col><Col id=\"to\">30</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"from\">56</Col><Col id=\"to\">10</Col></Row><Row><Col id=\"Browser\">UCBrowser</Col><Col id=\"from\">22</Col><Col id=\"to\">43</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"from\">12</Col><Col id=\"to\">33</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"from\">5</Col><Col id=\"to\">56</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FloatChart("FloatChart00","0","0",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_browser_lanking");
            obj.set_rotateaxis("false");
            obj.set_waterfall("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Float Chart",
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
            			"itemtext": "expr:to - from",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:to",
            			"value2column": "bind:from",
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

        this.loadIncludeScript("floatbase.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
