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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">total</Col><Col id=\"Column1\">70</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_male", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">male</Col><Col id=\"Column1\">81</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_female", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">female</Col><Col id=\"Column1\">93</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GaugeChart("GaugeChart00","0.91%","0.83%",null,null,"1.04%","0.83%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_gaugetype("circular");
            obj.set_binddataset("ds_total");
            obj.set_background("#000000");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "total response rate",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"textcolor": "#529f41",
            		"visible": "false"
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
            			"itemtextcolor": "white",
            			"itemtextfont": "bold 30pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"barsize": "100",
            			"innerradius": "70",
            			"startangle": "0",
            			"endangle": "360",
            			"radius": "100",
            			"barfillstyle": "red",
            			"barlinestyle": "0px solid #529f41",
            			"fillstyle": "white",
            			"linestyle": "1px solid #529f41",
            			"itemtextmask": "###%",
            			"baropacity": "1",
            			"opacity": "1"
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
        this.registerScript("GaugeChart_postaction.xfdl", function() {

        this.GaugeChart00_ondrawend = function(obj,e)
        {
        	var pathData;
        	var pos = obj.getSeriesPointPos(0, 0);
        	var width = 5;
        	var sangle,eangle;
        	var p0, p1, p2, p3;
        	var innerw = pos.radius * (obj.seriesset[0].innerradius*0.01);

        	for(var i=0;i<360;i+=10)
        	{
        		sangle = ((i - (width / 2)) * (Math.PI / 180));
        		eangle = ((i + (width / 2)) * (Math.PI / 180));

        		p0 = (Math.sin(sangle) * pos.radius + pos.centerx) + " " + (-Math.cos(sangle) * pos.radius + pos.centery);
        		p1 = (Math.sin(eangle) * pos.radius + pos.centerx) + " " + (-Math.cos(eangle) * pos.radius + pos.centery);
        		p2 = (Math.sin(sangle) * innerw + pos.centerx) + " " + (-Math.cos(sangle) * innerw + pos.centery);
        		p3 = (Math.sin(eangle) * innerw + pos.centerx) + " " + (-Math.cos(eangle) * innerw + pos.centery);

        		la = " 0";
        		pathData = "M" + p0 + " A" + pos.radius + " " + pos.radius + " 1 0 1 " + p1;
        		pathData += " L" + p3 + " A" + innerw + " " + innerw + " 1 0 0 " + p2 + " Z";

        		item = obj.addUserControl("itempath_" + i, "path");
        		item.setPathData(pathData);
        		item.set_fillstyle("black");

        	}
        	obj.userControlDraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.GaugeChart00.addEventHandler("ondrawend",this.GaugeChart00_ondrawend,this);
        };

        this.loadIncludeScript("GaugeChart_postaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
