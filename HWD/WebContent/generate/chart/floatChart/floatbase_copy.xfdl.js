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
            obj = new FloatChart("FloatChart00","27","51","670","336",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_browser_lanking");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Float Chart",
            		"textfont": "20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#4c4c4c",
            		"visible": false
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"crosshair": {
            		"id": "crosshair",
            		"type": "xy",
            		"xlinestyle": "1px solid #525252",
            		"ylinestyle": "1px solid #525252",
            		"tooltiptype": "xy",
            		"visible": false
            	},
            	"selection": {
            		"id": "selection",
            		"type": "xy",
            		"linestyle": "1px solid #525252",
            		"background": "#525252",
            		"opacity": "0.5",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt \"맑은 고딕\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt \"맑은 고딕\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"positivebarlinestyle": "1px solid red",
            			"positivebarfillstyle": "#eb495c",
            			"negativebarlinestyle": "1px solid blue",
            			"negativebarfillstyle": "#5058eb",
            			"barsize": "60",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt \"맑은 고딕\"",
            			"autogradation": "none",
            			"barradius": "0",
            			"value2column": "bind:from",
            			"valuecolumn": "bind:to"
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

        this.loadIncludeScript("floatbase_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
