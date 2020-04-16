(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SelectPie");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PieChart("PieChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsCountryLitres");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Exploding Pie Slice by select",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Pie Chart",
            		"subtextalign": "right",
            		"subtextcolor": "gray",
            		"subtextfont": "italic 8/normal \"Arial\""
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"radius": "60",
            			"itemtextvisible": true,
            			"itemtextfont": "bold 10pt \"Arial\",\"맑은 고딕\"",
            			"valuecolumn": "bind:value",
            			"fillstyle": "#1abd9c,#1a85be,#1a67bf,#1a4cbf,#641ac0,#9a1ac0,#c2251b,#c2541b,#c2911d,#21c34d",
            			"itemtexttype": "text",
            			"selectindent": "20",
            			"selectcolumn": "bind:select",
            			"selectopacity": "0.7",
            			"itemtextguidelinestyle": "1px solid darkgray",
            			"itemtextguideopacity": "1",
            			"itemtextguidesize": "20",
            			"itemtext": "expr:country +  \": \" + (value/dataset.getSum(\"value\")*100).toFixed(2) + \"%\"",
            			"opacity": "0.8",
            			"linestyle": "1px solid white",
            			"selectlinestyle": "1px solid white",
            			"highlightfillstyle": "yellow",
            			"highlightopacity": "0.5",
            			"highlightvisible": "true",
            			"selecttype": "bind"
            		}
            	]
            });
            obj.set_categorycolumn("bind:country");
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

        this.loadIncludeScript("SelectPie.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
