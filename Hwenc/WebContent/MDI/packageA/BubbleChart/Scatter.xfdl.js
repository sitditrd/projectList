(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Scatter");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new BubbleChart("BubbleChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsCostProfit");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Scatter",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Bubble Chart",
            		"subtextalign": "right",
            		"subtextcolor": "gray",
            		"subtextfont": "italic 8pt \"Arial\""
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"markertype": "circle"
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
            	"seriesset": [
            		{
            			"id": "series0",
            			"itemtextvisible": "true",
            			"itemtextfont": "bold 8pt '맑은 고딕'",
            			"valuecolumn": "bind:profit",
            			"value2column": "bind:cost",
            			"value2axis": "costaxis",
            			"valueaxis": "profitaxis",
            			"itemtexttype": "number",
            			"itemtextmask": "99,99",
            			"selectcolumn": "bind:select",
            			"selectfillstyle": "yellow",
            			"selectopacity": "0.5",
            			"titletext": "revenue",
            			"linestyle": "1px solid #1f77b4",
            			"itemtext": "bind:revenue",
            			"itemtextposition": "left top",
            			"itemtextgap": "5",
            			"itemtextcolor": "#1f77b4"
            		},
            		{
            			"id": "series1",
            			"valuecolumn": "bind:profit1",
            			"value2column": "bind:cost1",
            			"itemtextmask": "99,99",
            			"itemtexttype": "number",
            			"itemtextvisible": "true",
            			"value2axis": "costaxis",
            			"valueaxis": "profitaxis",
            			"itemtextfont": "bold 8pt '맑은 고딕'",
            			"selectcolumn": "bind:select",
            			"selectopacity": "0.5",
            			"selectfillstyle": "lime",
            			"titletext": "revenue1",
            			"itemtext": "bind:revenue1",
            			"itemtextposition": "right bottom",
            			"itemtextgap": "-5",
            			"itemtextcolor": "#ff7f0e"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "profitaxis",
            			"titletext": "Profit",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px dotted #717a83",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"titlegap": "25",
            			"labeltype": "number",
            			"labelmask": "##,###",
            			"ticksize": "0",
            			"rangezoom": "true"
            		},
            		{
            			"id": "costaxis",
            			"titletext": "Cost",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px dotted #717a83",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "2px solid #717a83",
            			"axislinestyle": "1px solid #525252",
            			"labelmask": "##,###",
            			"labeltype": "number",
            			"titlegap": "25",
            			"ticksize": "5",
            			"tickmax": "2000",
            			"rangezoom": "true"
            		}
            	]
            });
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

        this.loadIncludeScript("Scatter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
