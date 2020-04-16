(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("StackedColumn");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"d1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"d2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"d3\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">John</Col><Col id=\"d1\">5.33</Col><Col id=\"d2\">2.33</Col><Col id=\"d3\">3.32</Col></Row><Row><Col id=\"category\">James</Col><Col id=\"d1\">3.42</Col><Col id=\"d2\">2.23</Col><Col id=\"d3\">4.22</Col></Row><Row><Col id=\"category\">Hooper</Col><Col id=\"d1\">4.23</Col><Col id=\"d2\">3.23</Col><Col id=\"d3\">4.99</Col></Row><Row><Col id=\"category\">Luke</Col><Col id=\"d1\">7.99</Col><Col id=\"d2\">2.98</Col><Col id=\"d3\">2.35</Col></Row><Row><Col id=\"category\">Ryu</Col><Col id=\"d1\">2.75</Col><Col id=\"d2\">1.02</Col><Col id=\"d3\">5.24</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_enableanimation("false");
            obj.set_stacktotalshadowstyle("");
            obj.set_stacktotalvisible("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "false",
            		"align": "topcenter",
            		"horizontalitemgap": "20",
            		"linestyle": "1px solid #DDDDDD"
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
            		"titletext": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "Q1",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 10pt 'Verdana'",
            			"valuecolumn": "bind:d1",
            			"stacktype": "normal",
            			"barfillstyle": "red",
            			"linevisible": "false",
            			"barlinestyle": "1px solid white",
            			"baritemtextposition": "middle",
            			"stacktotalvisible": "true",
            			"stacktotaltextcolor": "black",
            			"stacktotalshadowstyle": "2px 2px 3px darkgray",
            			"stacktotallinestyle": "1px solid gray",
            			"autogradation": "center"
            		},
            		{
            			"id": "series1",
            			"titletext": "Q2",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 10pt 'Verdana'",
            			"valuecolumn": "bind:d2",
            			"stacktype": "normal",
            			"barfillstyle": "green",
            			"barlinestyle": "1px solid white",
            			"stacktotalvisible": "true",
            			"stacktotallinestyle": "1px solid gray",
            			"autogradation": "center"
            		},
            		{
            			"id": "series2",
            			"titletext": "Q3",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 10pt 'Verdana'",
            			"valuecolumn": "bind:d3",
            			"stacktype": "normal",
            			"barfillstyle": "blue",
            			"barlinestyle": "1px solid white",
            			"stacktotalvisible": "true",
            			"stacktotallinestyle": "1px solid gray",
            			"autogradation": "center"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"autotickscale": "5",
            			"tickinterval": "3"
            		}
            	]
            });
            obj.set_categorycolumn("bind:category");
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

        this.loadIncludeScript("bar_stacktotal_bargradation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
