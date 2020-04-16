(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BasicChartandRadar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTempo", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"c1\" type=\"FLOAT\" size=\"256\"/><Column id=\"c2\" type=\"FLOAT\" size=\"256\"/><Column id=\"c3\" type=\"FLOAT\" size=\"256\"/><Column id=\"c4\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">Jan</Col><Col id=\"c1\">-7.5</Col><Col id=\"c2\">-5.3</Col><Col id=\"c3\">-4</Col><Col id=\"c4\">-1.5</Col></Row><Row><Col id=\"month\">Feb</Col><Col id=\"c1\">-3.2</Col><Col id=\"c2\">-1.5</Col><Col id=\"c3\">-3.2</Col><Col id=\"c4\">0.2</Col></Row><Row><Col id=\"month\">Mar</Col><Col id=\"c1\">2.5</Col><Col id=\"c2\">5.3</Col><Col id=\"c3\">3.5</Col><Col id=\"c4\">5.6</Col></Row><Row><Col id=\"month\">Apr</Col><Col id=\"c1\">7</Col><Col id=\"c2\">9</Col><Col id=\"c3\">10</Col><Col id=\"c4\">7</Col></Row><Row><Col id=\"month\">May</Col><Col id=\"c1\">8</Col><Col id=\"c2\">9</Col><Col id=\"c3\">8</Col><Col id=\"c4\">10</Col></Row><Row><Col id=\"month\">Jun</Col><Col id=\"c1\">12</Col><Col id=\"c2\">11</Col><Col id=\"c3\">9</Col><Col id=\"c4\">11</Col></Row><Row><Col id=\"month\">Jul</Col><Col id=\"c1\">19</Col><Col id=\"c2\">21</Col><Col id=\"c3\">18</Col><Col id=\"c4\">20</Col></Row><Row><Col id=\"month\">Aug</Col><Col id=\"c1\">25</Col><Col id=\"c2\">27</Col><Col id=\"c3\">26</Col><Col id=\"c4\">22</Col></Row><Row><Col id=\"month\">Sep</Col><Col id=\"c1\">20</Col><Col id=\"c2\">20</Col><Col id=\"c3\">22</Col><Col id=\"c4\">18</Col></Row><Row><Col id=\"month\">Oct</Col><Col id=\"c1\">15</Col><Col id=\"c2\">13</Col><Col id=\"c3\">12</Col><Col id=\"c4\">17</Col></Row><Row><Col id=\"month\">Nov</Col><Col id=\"c1\">8</Col><Col id=\"c2\">9</Col><Col id=\"c3\">7</Col><Col id=\"c4\">7</Col></Row><Row><Col id=\"month\">Dec</Col><Col id=\"c1\">-2</Col><Col id=\"c2\">-4.5</Col><Col id=\"c3\">-1.2</Col><Col id=\"c4\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0%","0%",null,null,"50.00%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsTempo");
            obj.set_background("");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": " with negative data",
            		"text": "Basic Chart",
            		"subtextalign": "right",
            		"subtextcolor": "lightgray"
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
            		"boardlinestyle": "0px solid #d0d0d0"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "valueaxis",
            			"boardlinevisible": "false",
            			"boardlinestyle": "0px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"labelmask": "##℃",
            			"labeltype": "text",
            			"axislineopacity": "0",
            			"ticklinestyle": "2px solid red"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "c1",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": true,
            			"itemtextcolor": "white",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:c1",
            			"barlinestyle": "1px solid #1f77b4",
            			"barfillstyle": "",
            			"itemtextmask": "##℃",
            			"itemtext": "bind:c1",
            			"itemtexttype": "text",
            			"itemtextposition": "inside start",
            			"lineareafillstyle": ""
            		},
            		{
            			"id": "series1",
            			"titletext": "c2",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:c2",
            			"barlinestyle": "1px solid #aec7e8",
            			"barfillstyle": "#aec7e8",
            			"itemtextmask": "##℃",
            			"itemtext": "bind:c2",
            			"itemtexttype": "text",
            			"itemtextposition": "inside start"
            		},
            		{
            			"id": "series2",
            			"titletext": "c3",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:c3",
            			"barlinestyle": "1px solid #ff7f0e",
            			"barfillstyle": "#ff7f0e",
            			"itemtextmask": "##℃",
            			"itemtext": "bind:c3",
            			"itemtexttype": "text",
            			"itemtextposition": "inside start"
            		},
            		{
            			"id": "series3",
            			"titletext": "c4",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"valuecolumn": "bind:c4",
            			"barlinestyle": "1px solid #ffbb78",
            			"barfillstyle": "#ffbb78",
            			"itemtextmask": "##℃",
            			"itemtext": "bind:c4",
            			"itemtexttype": "text",
            			"itemtextposition": "inside start"
            		}
            	]
            });
            obj.set_categorycolumn("bind:month");
            this.addChild(obj.name, obj);

            obj = new RadarChart("RadarChart00","BasicChart00:0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsTempo");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Radar Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": " with negative data",
            		"subtextalign": "right",
            		"subtextcolor": "lightgray"
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
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"labeltextcolor": "black",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0",
            			"labelmask": "##℃",
            			"labeltype": "text",
            			"axislineindex": "3"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "c1",
            			"linevisible": true,
            			"itemtextvisible": true,
            			"itemtextmask": "##℃",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"itemtexttype": "text",
            			"valuecolumn": "bind:c1",
            			"linestyle": "2px solid #1f77b4",
            			"lineareaopacity": "0.2",
            			"lineareavisible": "true"
            		},
            		{
            			"id": "series1",
            			"titletext": "c2",
            			"linevisible": true,
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"linestyle": "2px solid #aec7e8",
            			"lineareafillstyle": "#aec7e8",
            			"itemtexttype": "text",
            			"itemtextmask": "##℃",
            			"valuecolumn": "bind:c2",
            			"lineareaopacity": "0.2"
            		},
            		{
            			"id": "series2",
            			"titletext": "c3",
            			"linevisible": true,
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"itemtextmask": "##℃",
            			"linestyle": "2px solid #ff7f0e",
            			"lineareafillstyle": "#ff7f0e",
            			"itemtexttype": "text",
            			"valuecolumn": "bind:c3",
            			"lineareaopacity": "0.2",
            			"lineareavisible": "true"
            		},
            		{
            			"id": "series3",
            			"titletext": "c4",
            			"linevisible": true,
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "8pt '맑은 고딕'",
            			"itemtextmask": "##℃",
            			"linestyle": "2px solid #ffbb78",
            			"lineareafillstyle": "#ffbb78",
            			"itemtexttype": "text",
            			"valuecolumn": "bind:c4",
            			"lineareaopacity": "0.2"
            		}
            	]
            });
            obj.set_categorycolumn("bind:month");
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

        this.loadIncludeScript("BasicChartandRadarChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
