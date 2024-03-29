(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RadarChartYear");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"Perr\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"Perr\">5</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"Perr\">20</Col></Row><Row><Col id=\"Browser\">Samsung Internet22</Col><Col id=\"Perr\">31</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"Perr\">35</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"Perr\">38</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"Perr\">57</Col></Row><Row><Col id=\"Browser\">UCBrowser444</Col><Col id=\"Perr\">80</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"Perr\">44</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"Perr\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"catName\" type=\"STRING\" size=\"256\"/><Column id=\"year2010\" type=\"INT\" size=\"256\"/><Column id=\"year2011\" type=\"INT\" size=\"256\"/><Column id=\"year2012\" type=\"INT\" size=\"256\"/><Column id=\"year2013\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"catName\">A</Col><Col id=\"year2010\">140</Col><Col id=\"year2011\">70</Col><Col id=\"year2012\">130</Col><Col id=\"year2013\">170</Col></Row><Row><Col id=\"catName\">B</Col><Col id=\"year2010\">90</Col><Col id=\"year2011\">170</Col><Col id=\"year2012\">150</Col><Col id=\"year2013\">170</Col></Row><Row><Col id=\"catName\">C</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">80</Col><Col id=\"year2012\">180</Col><Col id=\"year2013\">150</Col></Row><Row><Col id=\"catName\">D</Col><Col id=\"year2010\">100</Col><Col id=\"year2011\">130</Col><Col id=\"year2012\">200</Col><Col id=\"year2013\">210</Col></Row><Row><Col id=\"catName\">E</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">50</Col><Col id=\"year2012\">100</Col><Col id=\"year2013\">240</Col></Row><Row><Col id=\"catName\">F</Col><Col id=\"year2010\">110</Col><Col id=\"year2011\">50</Col><Col id=\"year2012\">140</Col><Col id=\"year2013\">210</Col></Row><Row><Col id=\"catName\">G</Col><Col id=\"year2010\">160</Col><Col id=\"year2011\">120</Col><Col id=\"year2012\">130</Col><Col id=\"year2013\">200</Col></Row><Row><Col id=\"catName\">H</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">70</Col><Col id=\"year2012\">165</Col><Col id=\"year2013\">140</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RadarChart("RadarChart00","0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_radius("80");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "2010~2013 ",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "연도별 가계 지출 품목 분석 "
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
            		"labeltextfont": "bold 12pt/normal \"맑은 고딕\"",
            		"axislinestyle": "1px solid #d0d0d0"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "2010년",
            			"linevisible": true,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:year2010",
            			"linestyle": "2px solid blue",
            			"lineareavisible": "false",
            			"pointvisible": "true",
            			"pointfillstyle": "blue",
            			"pointlinestyle": "1px solid blue",
            			"pointsize": "10"
            		},
            		{
            			"id": "series1",
            			"titletext": "2011년",
            			"linevisible": true,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:year2011",
            			"lineareavisible": "false",
            			"linestyle": "2px solid slateblue",
            			"lineareafillstyle": "slateblue",
            			"pointvisible": "true",
            			"pointfillstyle": "slateblue",
            			"pointlinestyle": "1px solid slateblue",
            			"pointsize": "10"
            		},
            		{
            			"id": "series2",
            			"titletext": "2012년",
            			"linevisible": true,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:year2012",
            			"lineareavisible": "false",
            			"linestyle": "2px solid deeppink",
            			"lineareafillstyle": "deeppink",
            			"lineareaopacity": "0.3",
            			"pointvisible": "true",
            			"pointfillstyle": "deeppink",
            			"pointlinestyle": "1px solid deeppink",
            			"pointsize": "10"
            		},
            		{
            			"id": "series3",
            			"titletext": "2013년",
            			"linevisible": true,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:year2013",
            			"lineareavisible": "false",
            			"linestyle": "2px solid orange",
            			"lineareafillstyle": "orange",
            			"lineareaopacity": "0.3",
            			"pointvisible": "true",
            			"pointfillstyle": "orange",
            			"pointlinestyle": "1px solid orange",
            			"pointsize": "10"
            		}
            	]
            });
            obj.set_categorycolumn("bind:catName");
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
        this.registerScript("RadarChart_2010_2013.xfdl", function() {
        var index = 0;
        var c_stylechange = false;
        var v_stylechange = false;
        var s_stylechange = 0;
        var addSeries = false;

        this.Div00_Button00_onclick = function(obj,e)
        {
        	if(!addSeries )
        	{
        		addSeries = true;
        		this.RadarChart00.set_enableredraw(false);
        		var contents2012  = {
        			"id": "series2",
        			"titletext": "2012년",
        			"linevisible": true,
        			"itemtextvisible": "false",
        			"itemtextcolor": "#003860",
        			"itemtextfont": "bold 6pt '맑은 고딕'",
        			"valuecolumn": "bind:year2012",
        			"lineareavisible": "false",
        			"linestyle": "3px solid deeppink",
        			"lineareafillstyle": "deeppink",
        			"lineareaopacity": "0.3"
        		};

        		var contents2013 = {

        			"id": "series3",
        			"titletext": "2013년",
        			"linevisible": true,
        			"itemtextvisible": "false",
        			"itemtextcolor": "#003860",
        			"itemtextfont": "bold 6pt '맑은 고딕'",
        			"valuecolumn": "bind:year2013",
        			"lineareavisible": "false",
        			"linestyle": "3px solid orange",
        			"lineareafillstyle": "orange",
        			"lineareaopacity": "0.3"
        		};

        		this.RadarChart00.setSeries("series2",contents2012);
        		this.RadarChart00.setSeries("series3",contents2013);


        		this.RadarChart00.set_enableredraw(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RadarChart_2010_2013.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
