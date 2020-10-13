(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GroupedBar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"profit\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue\" type=\"FLOAT\" size=\"256\"/><Column id=\"profit1\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost1\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue1\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">2011</Col><Col id=\"profit\">600</Col><Col id=\"cost\">700</Col><Col id=\"revenue\">9999</Col><Col id=\"profit1\">400</Col><Col id=\"cost1\">200</Col><Col id=\"revenue1\">8000</Col></Row><Row><Col id=\"category\">2012</Col><Col id=\"profit\">1000</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">5500</Col><Col id=\"profit1\">2200</Col><Col id=\"cost1\">4000</Col><Col id=\"revenue1\">4040</Col></Row><Row><Col id=\"category\">2013</Col><Col id=\"profit\">1500</Col><Col id=\"cost\">1550</Col><Col id=\"revenue\">2200</Col><Col id=\"profit1\">1900</Col><Col id=\"cost1\">2000</Col><Col id=\"revenue1\">3000</Col></Row><Row><Col id=\"category\">2014</Col><Col id=\"profit\">2200</Col><Col id=\"cost\">1300</Col><Col id=\"revenue\">1900</Col><Col id=\"profit1\">50</Col><Col id=\"cost1\">660</Col><Col id=\"revenue1\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_rotateaxis("false");
            obj.set_enableanimation("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart - Group",
            		"textfont": "14pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"align": "topleft"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"horizontalitemgap": "20",
            		"itemcolumncount": "2"
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
            			"id": "series1",
            			"titletext": "TYPE A",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:profit",
            			"barlinestyle": "3px solid white",
            			"baritemtextposition": "outside",
            			"barfillstyle": "#C7CFC7",
            			"baropacity": "0.9"
            		},
            		{
            			"id": "series2",
            			"titletext": "TYPE B",
            			"barvisible": true,
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:cost",
            			"barsize": "65",
            			"barlinestyle": "3px solid white",
            			"baritemtextposition": "outside",
            			"barfillstyle": "#B2C8B2",
            			"baropacity": "0.9"
            		},
            		{
            			"id": "series4",
            			"titletext": "TYPE C",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:profit1",
            			"barlinestyle": "3px solid white",
            			"baritemtextposition": "outside",
            			"barfillstyle": "#D9E0DE",
            			"baropacity": "0.9"
            		},
            		{
            			"id": "series5",
            			"titletext": "TYPE D",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:cost1",
            			"barlinestyle": "3px solid white",
            			"baritemtextposition": "outside",
            			"barfillstyle": "#CDDED1",
            			"baropacity": "0.9"
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
            			"autotickscale": "20",
            			"labelmask": "#,###"
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

        this.loadIncludeScript("bar_group.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();