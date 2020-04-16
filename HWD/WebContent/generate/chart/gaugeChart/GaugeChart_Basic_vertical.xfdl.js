(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_Highlight");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_highlight", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">52</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_highlight00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">75</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_highlight01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">24</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart01","37.76%","2.08%",null,null,"37.5%","2.08%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_highlight00");
            obj.set_gaugetype("vertical");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "vertical",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"indicator": {
            		"id": "indicator",
            		"visible": "true",
            		"indicatorimage": "",
            		"indicatorsize": "",
            		"indicatorindent": "",
            		"indicatorfillstyle": "white",
            		"indicatorlinestyle": "1px solid black",
            		"indicatoropacity": "1",
            		"linestyle": "1px solid black",
            		"fillstyle": "white",
            		"opacity": "1"
            	},
            	"board": {
            		"id": "board"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0",
            			"tickmin": "0",
            			"tickmax": "100",
            			"tickinterval": "10",
            			"opposite": "true"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": true,
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 20pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"highlightbarvisible": "true",
            			"highlightbarfillstyle": "white",
            			"barfillstyle": "#4de984",
            			"fillstyle": "#d8d8d8",
            			"opacity": "1",
            			"linestyle": "#d8d8d8",
            			"barlinestyle": "#4de984",
            			"barsize": "100"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart00","1.3%","2.08%",null,null,"73.96%","2.08%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_highlight");
            obj.set_gaugetype("vertical");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "vertical",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"indicator": {
            		"id": "indicator",
            		"visible": "true",
            		"indicatorimage": "",
            		"indicatorsize": "",
            		"indicatorindent": "",
            		"indicatorfillstyle": "white",
            		"indicatorlinestyle": "1px solid black",
            		"indicatoropacity": "1",
            		"linestyle": "1px solid black",
            		"fillstyle": "white",
            		"opacity": "1"
            	},
            	"board": {
            		"id": "board"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0",
            			"tickmin": "0",
            			"tickmax": "100",
            			"tickinterval": "10"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": true,
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 20pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"highlightbarvisible": "true",
            			"highlightbarfillstyle": "white",
            			"barfillstyle": "#eaad4c",
            			"fillstyle": "#d8d8d8",
            			"barlinestyle": "#eaad4c",
            			"barsize": "100",
            			"opacity": "1",
            			"linestyle": "#d8d8d8"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart02","72.92%","2.08%",null,null,"2.34%","2.08%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_highlight01");
            obj.set_gaugetype("vertical");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "vertical",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"indicator": {
            		"id": "indicator",
            		"visible": "true",
            		"indicatorimage": "",
            		"indicatorsize": "",
            		"indicatorindent": "",
            		"indicatorfillstyle": "white",
            		"indicatorlinestyle": "1px solid black",
            		"indicatoropacity": "1",
            		"linestyle": "1px solid black",
            		"fillstyle": "white",
            		"opacity": "1"
            	},
            	"board": {
            		"id": "board"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0",
            			"tickmin": "0",
            			"tickmax": "100",
            			"tickinterval": "10"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": true,
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 20pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"highlightbarvisible": "true",
            			"highlightbarfillstyle": "white",
            			"barfillstyle": "#165ee3",
            			"fillstyle": "#d8d8d8",
            			"barlinestyle": "#165ee3",
            			"barsize": "100",
            			"opacity": "1",
            			"linestyle": "#d8d8d8"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Column0");
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

        this.loadIncludeScript("GaugeChart_Basic_vertical.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
