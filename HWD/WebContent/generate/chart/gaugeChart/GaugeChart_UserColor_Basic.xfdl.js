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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">70</Col></Row></Rows>");
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
            		"fillstyle": "#D5604D",
            		"opacity": "1",
            		"indent": "0",
            		"size": "10",
            		"linetype": "false",
            		"centerpinradius": "15",
            		"indentouter": "50",
            		"centerpinstyle": "linear-gradient(to bottom,#ddffff 23%, #0000ff 100%)",
            		"centerpinautogradation": "none"
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
            			"opposite": "true",
            			"gap": "10",
            			"labelgap": "0",
            			"ticklinestyle": "2px solid black",
            			"smallticklinestyle": "1px solid #cccccc",
            			"smalltickcount": "5"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 20pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"highlightbarvisible": "true",
            			"highlightbarfillstyle": "white",
            			"barfillstyle": "#5587a2",
            			"fillstyle": "#5587a2",
            			"innerradius": "90",
            			"barlinestyle": "black",
            			"radius": "91",
            			"barsize": "80",
            			"itemtextgap": "0 70",
            			"startangle": "220",
            			"endangle": "275",
            			"opacity": "0.8",
            			"userrange": "[0,70,\"#aaffaa\"],[70,90,\"#FF9900\"],[90,100,\"#DC3912\"]",
            			"userrangeinnerradius": "80",
            			"userrangeradius": "90",
            			"baropacity": "0",
            			"boardouterstyle": "15px solid #cccccc",
            			"boardouterlinestyle": "1px solid #000000",
            			"boardinnerstyle": "1px solid #f1f1f1"
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
        this.registerScript("GaugeChart_UserColor_Basic.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("GaugeChart_UserColor_Basic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
