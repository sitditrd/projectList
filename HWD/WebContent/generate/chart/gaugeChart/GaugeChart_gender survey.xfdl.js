(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GaugeChart_");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_total", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">total</Col><Col id=\"Column1\">87</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_male", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">male</Col><Col id=\"Column1\">81</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_female", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">female</Col><Col id=\"Column1\">93</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart00","1%","1%",null,null,"50%","1%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_gaugetype("circular");
            obj.set_binddataset("ds_total");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "total response rate",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"textcolor": "#529f41"
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
            			"tickmin": "0",
            			"tickmax": "100",
            			"visible": "false"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#529f41",
            			"itemtextfont": "bold 30pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"barsize": "100",
            			"innerradius": "70",
            			"startangle": "0",
            			"endangle": "270",
            			"radius": "100",
            			"barfillstyle": "#529f41",
            			"barlinestyle": "1px solid #529f41",
            			"fillstyle": "#529f41",
            			"linestyle": "1px solid #529f41",
            			"itemtextmask": "###%"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart01","50%","1%",null,null,"1%","50%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_gaugetype("circular");
            obj.set_binddataset("ds_male");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "male response rate",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"textcolor": "#1e77d6"
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
            			"tickmin": "0",
            			"tickmax": "100",
            			"visible": "false"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#1e77d6",
            			"itemtextfont": "bold 15pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"barsize": "100",
            			"startangle": "0",
            			"endangle": "270",
            			"innerradius": "70",
            			"barfillstyle": "#1e77d6",
            			"fillstyle": "#1e77d6",
            			"barlinestyle": "1px solid #1e77d6",
            			"linestyle": "1px solid #1e77d6",
            			"radius": "100",
            			"itemtextmask": "###%"
            		}
            	]
            });
            obj.set_categorycolumn("bind:Column0");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart02","50%","50%",null,null,"1%","1%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_gaugetype("circular");
            obj.set_binddataset("ds_female");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "female response rate",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"textcolor": "#a63482"
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
            			"tickmin": "0",
            			"tickmax": "100",
            			"visible": "false"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#a63482",
            			"itemtextfont": "bold 15pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"barsize": "100",
            			"startangle": "0",
            			"endangle": "270",
            			"innerradius": "70",
            			"barfillstyle": "#a63482",
            			"fillstyle": "#a63482",
            			"barlinestyle": "1px solid #a63482",
            			"linestyle": "1px solid #a63482",
            			"radius": "100",
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

        this.loadIncludeScript("GaugeChart_gender survey.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
