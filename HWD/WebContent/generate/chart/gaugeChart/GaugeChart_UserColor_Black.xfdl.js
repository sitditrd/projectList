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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">4.7</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart02","1.3%","2.08%",null,null,"1.04%","2.08%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_highlight");
            obj.set_gaugetype("circular");
            obj.set_enableanimation("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "circular",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"visible": false
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
            		"fillstyle": "red",
            		"opacity": "1",
            		"indent": "0",
            		"size": "10",
            		"linetype": "true",
            		"centerpinradius": "15",
            		"indentouter": "30",
            		"centerpinstyle": "darkgray"
            	},
            	"board": {
            		"id": "board"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"labeltextcolor": "#f1f1f1",
            			"labeltextfont": "14pt '맑은 고딕'",
            			"axislinestyle": "0px solid #d0d0d0",
            			"tickmin": "0",
            			"tickmax": "10",
            			"tickinterval": "2",
            			"opposite": "true",
            			"gap": "10",
            			"labelgap": "40",
            			"ticklinestyle": "4px solid white",
            			"smallticklinestyle": "2px solid white",
            			"smalltickcount": "2",
            			"ticks": "2"
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
            			"barfillstyle": "#000000",
            			"fillstyle": "#000000",
            			"innerradius": "99",
            			"barlinestyle": "black",
            			"radius": "100",
            			"barsize": "80",
            			"itemtextgap": "0 120",
            			"startangle": "220",
            			"endangle": "275",
            			"opacity": "1",
            			"baropacity": "0",
            			"userrange": "[0,0,\"#000000\"]",
            			"userrangeinnerradius": "99",
            			"userrangeradius": "100"
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
        this.registerScript("GaugeChart_UserColor_Black.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("GaugeChart_UserColor_Black.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();