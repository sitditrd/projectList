(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_weather");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_weather", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">temperature</Col><Col id=\"Column1\">45</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart00","10%","2%",null,null,"60%","2%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_weather");
            obj._setContents({
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
            		"indicatorfillstyle": "#4b4b4b",
            		"indicatorlinestyle": "0px none",
            		"indicatoropacity": "1",
            		"fillstyle": "black",
            		"linestyle": "white",
            		"size": "10",
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
            			"tickmax": "50",
            			"tickmin": "-25",
            			"tickinterval": "5",
            			"opposite": "true",
            			"labelmask": "##ºC"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"baropacity": "0",
            			"barsize": "100",
            			"opacity": "0.5",
            			"fillstyle": "linear-gradient(#ff0000 0%,#00ff00 55%,#0000ff 72%)"
            		}
            	],
            	"title": {
            		"id": "title",
            		"text": "Temperature",
            		"textfont": "20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"linestyle": "0px none"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#4c4c4c"
            	}
            });
            obj.set_categorycolumn("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart01","60%","2%",null,null,"10%","2%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_weather");
            obj._setContents({
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
            		"indicatorfillstyle": "#4b4b4b",
            		"indicatorlinestyle": "0px none",
            		"indicatoropacity": "1",
            		"fillstyle": "black",
            		"linestyle": "white",
            		"size": "10",
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
            			"tickmax": "50",
            			"tickmin": "-25",
            			"tickinterval": "5",
            			"opposite": "true",
            			"labelmask": "##ºC"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": "false",
            			"itemtextcolor": "black",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"baropacity": "1",
            			"barsize": "80",
            			"opacity": "1",
            			"fillstyle": "white",
            			"barfillstyle": "#ff5151",
            			"itemtextmask": "###ºC",
            			"itemtextposition": "middle"
            		}
            	],
            	"title": {
            		"id": "title",
            		"text": "Temperature",
            		"textfont": "20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"linestyle": "0px none"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#4c4c4c"
            	}
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

        this.loadIncludeScript("GaugeChart_weather.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();