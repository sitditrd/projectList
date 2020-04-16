(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GroupedColumn_NegativeValue");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNegRainfall", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"mean\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">ABBOTSFORD</Col><Col id=\"rainfall\">-69</Col><Col id=\"mean\">-66.2</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">CONCORD</Col><Col id=\"rainfall\">-49.6</Col><Col id=\"mean\">-48.6</Col></Row><Row><Col id=\"name\">SYDNEY BOTANIC GARDENS</Col><Col id=\"rainfall\">-94.1</Col><Col id=\"mean\">-68.2</Col></Row><Row><Col id=\"name\">CHATSWOOD BOWLING CLUB</Col><Col id=\"rainfall\">-78</Col><Col id=\"mean\">-51</Col></Row><Row><Col id=\"name\">CONCORD GOLF CLUB</Col><Col id=\"rainfall\">-11.2</Col><Col id=\"mean\">-59.1</Col></Row><Row><Col id=\"name\">MARRICKVILLE GOLF CLUB</Col><Col id=\"rainfall\">-56</Col><Col id=\"mean\">-55.9</Col></Row><Row><Col id=\"name\">SYDNEY AIRPORT AMO</Col><Col id=\"rainfall\">-66.6</Col><Col id=\"mean\">-60.3</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">PENNANT HILLS</Col><Col id=\"rainfall\">-53.2</Col><Col id=\"mean\">-56.8</Col></Row><Row><Col id=\"name\">RANDWICK BOWLING CLUB</Col><Col id=\"rainfall\">-122.6</Col><Col id=\"mean\">-65.9</Col></Row><Row><Col id=\"name\">SANS SOUCI</Col><Col id=\"rainfall\">-66</Col><Col id=\"mean\">-61.5</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">TERREY HILLS AWS</Col><Col id=\"rainfall\">-83.4</Col><Col id=\"mean\">-63.9</Col></Row><Row><Col id=\"name\">SYDNEY</Col><Col id=\"rainfall\">-80</Col><Col id=\"mean\">-65.5</Col></Row><Row><Col id=\"name\">STRATHFIELD GOLF CLUB</Col><Col id=\"rainfall\">-36</Col><Col id=\"mean\">-45.3</Col></Row><Row><Col id=\"name\">LUCAS HEIGHTS</Col><Col id=\"rainfall\">-58.9</Col><Col id=\"mean\">-50.9</Col></Row><Row><Col id=\"name\">CASTLE COVE</Col><Col id=\"rainfall\">-101</Col><Col id=\"mean\">-69.2</Col></Row><Row><Col id=\"name\">PARRAMATTA NORTH</Col><Col id=\"rainfall\">-33.6</Col><Col id=\"mean\">-52.4</Col></Row><Row><Col id=\"name\">COLLAROY</Col><Col id=\"rainfall\">-91.4</Col><Col id=\"mean\">-66.2</Col></Row><Row><Col id=\"name\">BANKSTOWN AIRPORT AWS</Col><Col id=\"rainfall\">-53.4</Col><Col id=\"mean\">-43.6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsNegRainfall");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Grouped Column",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Basic Chart > Column Chart",
            		"subtextcolor": "gray",
            		"subtextalign": "right",
            		"subtextfont": "italic 8/normal \"Arial\""
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "true",
            		"align": "rightcenter",
            		"markertextgap": "5",
            		"markertype": "circle",
            		"verticalitemgap": "5",
            		"linestyle": "1px dashed #4c4c4c"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"ticksize": "5",
            		"labelgap": "5",
            		"labelrotate": "-30"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "9pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"labelgap": "5",
            			"ticksize": "5"
            		}
            	],
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "rainfall",
            			"barvisible": true,
            			"barsize": "75",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "normal 10/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:rainfall",
            			"itemtextposition": "inside start",
            			"itemtextvisible": "true",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1abd9c",
            			"barfillstyle": "#1abd9c"
            		},
            		{
            			"id": "series1",
            			"titletext": "mean",
            			"barvisible": true,
            			"barsize": "75",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "normal 10/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:mean",
            			"itemtextposition": "inside start",
            			"itemtextvisible": "true",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1a85be",
            			"barfillstyle": "#1a85be"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
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

        this.loadIncludeScript("GroupedColumn_NegativeValue.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
