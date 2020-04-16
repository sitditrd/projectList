(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PointMarkers");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsRainfall");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Point Markers",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Basic Chart > Point Chart",
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
            		"markertextgap": "5",
            		"markertype": "circle",
            		"verticalitemgap": "5"
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
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "rainfall",
            			"barsize": "75",
            			"itemtextcolor": "#1f77b4",
            			"itemtextfont": "normal 10/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:rainfall",
            			"itemtextposition": "right bottom",
            			"itemtextvisible": "true",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1abd9c",
            			"barfillstyle": "#1abd9c",
            			"barvisible": "false",
            			"pointvisible": "true",
            			"itemtextgap": "-5"
            		},
            		{
            			"id": "series1",
            			"titletext": "mean",
            			"barvisible": "false",
            			"barsize": "75",
            			"itemtextcolor": "#ff7f0e",
            			"itemtextfont": "normal 10/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:mean",
            			"itemtextposition": "left bottom",
            			"itemtextvisible": "true",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1a85be",
            			"barfillstyle": "#1a85be",
            			"pointvisible": "true",
            			"itemtextgap": "10"
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

        this.loadIncludeScript("PointMarkers.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
