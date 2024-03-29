(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_Sales");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sales", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">count</Col><Col id=\"Column1\">60</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart00","1.17%","1.88%",null,null,"77.08%","1.88%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_sales");
            obj.set_gaugetype("vertical");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Sales",
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
            	"board": {
            		"id": "board"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0",
            			"tickmax": "100",
            			"tickmin": "0",
            			"tickinterval": "10",
            			"labelmask": "###%"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": "true",
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"fillstyle": "slategray",
            			"barfillstyle": "maroon",
            			"barsize": "90",
            			"itemtextmask": "###%"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart01","22.92%","2.08%",null,null,"1.04%","2.08%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_sales");
            obj.set_gaugetype("circular");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Sales",
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
            		"visible": "false",
            		"image": "",
            		"size": "",
            		"indent": "",
            		"fillstyle": "white",
            		"linestyle": "1px solid black",
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
            			"tickmax": "100",
            			"tickmin": "0",
            			"tickinterval": "10",
            			"gap": "5",
            			"labelgap": "5",
            			"labelmask": "###%"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": "true",
            			"itemtextcolor": "maroon",
            			"itemtextfont": "bold 30pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"fillstyle": "slategray",
            			"barfillstyle": "maroon",
            			"radius": "100",
            			"innerradius": "50",
            			"barsize": "90",
            			"itemtextmask": "###%"
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

        this.loadIncludeScript("GaugeChart_Sales.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
