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
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">7000</Col><Col id=\"category\">JAN</Col></Row><Row><Col id=\"Column0\">26000</Col><Col id=\"category\">FEB</Col></Row><Row><Col id=\"Column0\">11000</Col><Col id=\"category\">MAR</Col></Row><Row><Col id=\"Column0\">16000</Col><Col id=\"category\">APR</Col></Row><Row><Col id=\"Column0\">28000</Col><Col id=\"category\">MAY</Col></Row><Row><Col id=\"Column0\">13000</Col><Col id=\"category\">JUN</Col></Row><Row><Col id=\"Column0\">23000</Col><Col id=\"category\">JUL</Col></Row><Row><Col id=\"Column0\">28500</Col><Col id=\"Column1\">28500</Col><Col id=\"category\">AUG</Col></Row><Row><Col id=\"Column1\">11000</Col><Col id=\"category\">SEP</Col></Row><Row><Col id=\"Column1\">14000</Col><Col id=\"category\">OCT</Col></Row><Row><Col id=\"Column1\">9000</Col><Col id=\"category\">NOV</Col></Row><Row><Col id=\"Column1\">10000</Col><Col id=\"category\">DEC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","10",null,null,"8","30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_bargrouping("false");
            obj.set_enableanimation("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "null data - event script",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"visible": false
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
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
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:Column0",
            			"linevisible": "true",
            			"linestyle": "3px solid #000000",
            			"pointfillstyle": "#000000",
            			"pointvisible": "true",
            			"pointsize": "20",
            			"pointlinestyle": "2px solid #ffffff"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"linevisible": "true",
            			"linestyle": "3px solid #E9B34E",
            			"pointvisible": "true",
            			"pointfillstyle": "#E9B34E",
            			"pointsize": "20",
            			"pointlinestyle": "2px solid #ffffff"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"axislineopacity": "1",
            			"autotickscale": "30",
            			"visible": "false",
            			"gap": "30"
            		}
            	]
            });
            obj.set_categorycolumn("bind:category");
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
        this.registerScript("line_event.xfdl", function() {

        this.BasicChart00_ondrawend = function(obj,e)
        {
        	// getAxisPointPos
        	// tick label을 찾아 위치정보를 얻는다.
        	// param 1 : category / value
        	// param 2 : tick 이 있어야 하며 tick label text
        	var pos = obj.getAxisPointPos("category", "AUG");
        	if(!pos) return;

        	var text = "BASE";
        	var fontstyle = '14pt Verdana';

        	// addUserControl
        	// series group에 control을 생성한다.
        	// param 1 : control name
        	// param 2 : text / rect / path / arc
        	var item = obj.addUserControl("itemtext1", "text");
        	item.set_font(fontstyle);
        	item.set_color("#E9B34E");

        	// get font size
        	var fontobj = nexacro.FontObject(fontstyle);
        	var sz = nexacro.getTextSize(text, fontobj);

        	fontobj = null;
        	item.set_x(pos.x);
        	item.set_y(30);
        	item.set_text(text);

        	var item2 = obj.addUserControl("itemrect1", "rect");
        	item2.set_x(pos.x-1);
        	item2.set_y(30+sz.ny+2);
        	item2.set_width(3);
        	item2.set_height(obj.getOffsetHeight() - 150);
        	item2.set_fillstyle("#E9B34E");

        	obj.userControlDraw();

        	// delete
        	/*
        	obj.removeUserControl("itemtext1");
        	obj.userControlDraw();
        	*/

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.BasicChart00.addEventHandler("ondrawend",this.BasicChart00_ondrawend,this);
        };

        this.loadIncludeScript("line_event.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
