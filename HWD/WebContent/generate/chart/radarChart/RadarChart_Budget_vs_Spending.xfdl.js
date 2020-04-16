(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RadarChart_polygon");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("budget_vas_spending", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"value2\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">Sales</Col><Col id=\"value\">48000</Col><Col id=\"value2\">50000</Col></Row><Row><Col id=\"title\">Marketing</Col><Col id=\"value2\">38000</Col><Col id=\"value\">23000</Col></Row><Row><Col id=\"title\">Development</Col><Col id=\"value\">67000</Col><Col id=\"value2\">41000</Col></Row><Row><Col id=\"title\">CustomerSupport</Col><Col id=\"value\">26500</Col><Col id=\"value2\">27800</Col></Row><Row><Col id=\"title\">InformationTechnology</Col><Col id=\"value\">19500</Col><Col id=\"value2\">25000</Col></Row><Row><Col id=\"title\">Administration</Col><Col id=\"value\">14000</Col><Col id=\"value2\">16000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RadarChart("RadarChart00","0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("budget_vas_spending");
            obj.set_radius("80");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Budget vs spending",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
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
            		"labeltextfont": "15pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"labelgap": "5"
            	},
            	"valueaxes": [
            		{
            		"id": "valueaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"tickmax": "80000",
            		"labelmask": "##k",
            		"tickinterval": "20000",
            		"axislineindex": "5"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "Budget",
            			"linevisible": true,
            			"pointvisible": true,
            			"itemtextvisible": false,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"pointsize": "8",
            			"linestyle": "3px solid deepskyblue",
            			"pointlinestyle": "3px solid deepskyblue",
            			"pointfillstyle": "deepskyblue",
            			"lineareafillstyle": "deepskyblue"
            		},
            		{
            			"id": "series1",
            			"titletext": "Spending",
            			"linevisible": true,
            			"pointvisible": true,
            			"pointshape": "diamond",
            			"itemtextvisible": false,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:value2",
            			"pointsize": "8",
            			"linestyle": "3px solid black",
            			"pointlinestyle": "3px solid black",
            			"pointfillstyle": "black",
            			"lineareafillstyle": "black"
            		}
            	]
            });
            obj.set_categorycolumn("bind:title");
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

        this.loadIncludeScript("RadarChart_Budget_vs_Spending.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
