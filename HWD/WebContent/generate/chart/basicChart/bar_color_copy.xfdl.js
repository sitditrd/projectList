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
                this._setFormPosition(768,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">33.2</Col><Col id=\"name\">서울</Col></Row><Row><Col id=\"data\">14.5</Col><Col id=\"name\">대전</Col></Row><Row><Col id=\"data\">11.8</Col><Col id=\"name\">대구</Col></Row><Row><Col id=\"data\">10.2</Col><Col id=\"name\">광주</Col></Row><Row><Col id=\"data\">12.3</Col><Col id=\"name\">부산</Col></Row><Row><Col id=\"data\">9.2</Col><Col id=\"name\">전주</Col></Row><Row><Col id=\"data\">4.7</Col><Col id=\"name\">인천</Col></Row><Row><Col id=\"data\">1.1</Col><Col id=\"name\">경기</Col></Row><Row><Col id=\"data\">4.9</Col><Col id=\"name\">강원</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_bargrouping("false");
            obj.set_enableanimation("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "지역별 찬성률",
            		"textfont": "14pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"textcolor": "gray"
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
            		"id": "board",
            		"visible": "false"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "0px solid #525252",
            		"ticklinestyle": "0px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "50",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:data",
            			"barfillstyle": "#86B5BC,#E30513,#1C1C1B,#86BC24,#E5007D,#2F8DCD,#F9D900,#F6A200,#BCBCBC",
            			"baropacity": "1",
            			"barlinestyle": "0px solid transparent",
            			"autogradation": "center"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "0px solid #525252",
            			"axislinestyle": "0px solid #525252",
            			"labeltextcolor": "gray",
            			"visible": "true",
            			"autotickscale": "10",
            			"labelmask": "##%"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","543","14","165","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("bar_color_copy.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("bar_color_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
