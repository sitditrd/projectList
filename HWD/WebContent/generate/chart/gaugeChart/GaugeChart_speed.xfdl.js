(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_Basic");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_speed", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">속도</Col><Col id=\"Column1\">130</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart01","0.52%","1.25%",null,null,"48%","12.5%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_speed");
            obj.set_gaugetype("circular");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Speed Gauge",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
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
            		"indicatorindent": "40",
            		"indicatorfillstyle": "#4b4b4b",
            		"indicatorlinestyle": "0px none",
            		"indicatoropacity": "1",
            		"fillstyle": "#000000",
            		"indent": "30",
            		"linestyle": "1px solid black"
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
            			"tickmax": "200",
            			"opposite": "true",
            			"visible": "true",
            			"gap": "10",
            			"labelgap": "10",
            			"tickinterval": "10"
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
            			"radius": "100",
            			"innerradius": "80",
            			"startangle": "225",
            			"endangle": "270",
            			"fillstyle": "linear-gradient(#00ff00 0%,#ff0000 100%)",
            			"baropacity": "0",
            			"itemtextmask": "###km/h"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","83.33%","87.5%",null,null,"1.04%","2.08%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("runAnimation");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart00","52%","1.25%",null,null,"1.04%","12.5%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_speed");
            obj.set_gaugetype("circular");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Speed Gauge",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
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
            		"indicatorindent": "0",
            		"indicatorfillstyle": "#4b4b4b",
            		"indicatorlinestyle": "0px none",
            		"indicatoropacity": "1",
            		"fillstyle": "black",
            		"linestyle": "black",
            		"indent": "30"
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
            			"tickmax": "200",
            			"opposite": "false",
            			"visible": "true",
            			"gap": "10",
            			"labelgap": "10",
            			"tickinterval": "10"
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
            			"radius": "100",
            			"innerradius": "80",
            			"startangle": "225",
            			"endangle": "270",
            			"fillstyle": "linear-gradient(#00ff00 0%,#ff0000 100%)",
            			"baropacity": "0",
            			"itemtextvgap": "130",
            			"itemtextmask": "###km/h"
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
        this.registerScript("GaugeChart_speed.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.GaugeChart00.runAnimation();
        	this.GaugeChart01.runAnimation();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("GaugeChart_speed.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
