(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnAndLine");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsRainfall");
            obj.set_bargrouping("false");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Column + Line",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Basic Chart > Mixed Chart",
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
            		"id": "board",
            		"visible": "true"
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
            			"barvisible": "true",
            			"barsize": "75",
            			"itemtextcolor": "#16a185",
            			"itemtextfont": "normal bold 10pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:mean",
            			"itemtextposition": "inside start",
            			"itemtextvisible": "true",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1f77b4",
            			"barfillstyle": "linear-gradient(#1f77b4,#ffffff,#1f77b4)",
            			"linevisible": "false",
            			"linestyle": "1px solid #1f77b4",
            			"linefillstyle": "#1f77b4",
            			"pointshape": "square",
            			"shadowstyle": "3px 3px 4px darkgray"
            		},
            		{
            			"id": "series1",
            			"titletext": "mean",
            			"barvisible": "false",
            			"barsize": "80",
            			"itemtextcolor": "whitesmoke",
            			"itemtextfont": "normal bold 10pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:rainfall",
            			"itemtextposition": "inside middle",
            			"itemtexttype": "number",
            			"barlinestyle": "1px solid #1a85be",
            			"barfillstyle": "#1a85be",
            			"itemtextvisible": "true",
            			"baropacity": "0.7",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"highlightpointvisible": "true",
            			"highlightpointsize": "60",
            			"shadowstyle": "1px 1px 3px burlywood"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","4","6","156","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,540,this,function(p){});
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

        this.loadIncludeScript("bar_shadow.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
