(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MultiSeries_type2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset03", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">2500</Col><Col id=\"month\">F_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">2500</Col><Col id=\"month\">F_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">800</Col><Col id=\"month\">G_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">1500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset05", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">2500</Col><Col id=\"month\">F_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">800</Col><Col id=\"month\">G_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">1500</Col></Row><Row><Col id=\"sales\">900</Col><Col id=\"month\">H_price</Col><Col id=\"sales1\">800</Col><Col id=\"sales2\">1800</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset06", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">2500</Col><Col id=\"month\">F_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">800</Col><Col id=\"month\">G_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">1500</Col></Row><Row><Col id=\"sales\">900</Col><Col id=\"month\">H_price</Col><Col id=\"sales1\">800</Col><Col id=\"sales2\">1800</Col></Row><Row><Col id=\"month\">I_price</Col><Col id=\"sales\">400</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">2800</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset07", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">2500</Col><Col id=\"month\">F_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">800</Col><Col id=\"month\">G_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">1500</Col></Row><Row><Col id=\"sales\">900</Col><Col id=\"month\">H_price</Col><Col id=\"sales1\">800</Col><Col id=\"sales2\">1800</Col></Row><Row><Col id=\"month\">I_price</Col><Col id=\"sales\">400</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">2800</Col></Row><Row><Col id=\"month\">J_price</Col><Col id=\"sales\">200</Col><Col id=\"sales1\">2500</Col><Col id=\"sales2\">700</Col></Row><Row><Col id=\"month\">K_price</Col><Col id=\"sales\">100</Col><Col id=\"sales1\">3000</Col><Col id=\"sales2\">600</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RadarChart("RadarChart00","0%","8%",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset04");
            obj.set_radius("80");
            obj.set_border("1px solid black");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Polygon type Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "click button"
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
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"labelgap": "5"
            	},
            	"valueaxes": [
            		{
            		"id": "valueaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "bold 10pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"tickmax": "4000",
            		"tickinterval": "1000",
            		"labelmask": "#k"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"linevisible": true,
            			"lineareavisible": "true",
            			"pointvisible": "false",
            			"itemtextvisible": false,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:sales",
            			"pointsize": "8",
            			"linestyle": "1px solid black",
            			"lineareafillstyle": "cornflowerblue"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"linevisible": true,
            			"lineareavisible": "true",
            			"pointvisible": "false",
            			"itemtextvisible": false,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:sales1",
            			"pointsize": "8",
            			"linestyle": "1px solid black",
            			"lineareafillstyle": "darkcyan"
            		},
            		{
            			"id": "series2",
            			"titletext": "series",
            			"linevisible": true,
            			"lineareavisible": "true",
            			"pointvisible": "false",
            			"itemtextvisible": false,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:sales2",
            			"pointsize": "8",
            			"linestyle": "1px solid black",
            			"lineareafillstyle": "forestgreen"
            		}
            	]
            });
            obj.set_categorycolumn("bind:month");
            this.addChild(obj.name, obj);

            obj = new Button("BtnPolygonTest","1","5","116","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Radar polygon test");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Multi Polygon Chart.xfdl", function() {
        var polygoncnt = 7;
        this.Div00_BtnPolygonTest_onclick = function(obj,e)
        {
        	this.RadarChart00.set_enableredraw(false);
        	var serieslength = this.RadarChart00.seriesset.length;
        	polygoncnt++;
        	if(polygoncnt > 10)polygoncnt = 3;
        	var value = polygoncnt;
        	switch(value)
        	{
        		case 3:
        			this.RadarChart00.set_binddataset(this.Dataset00);
        		break;
        		case 4:
        			this.RadarChart00.set_binddataset(this.Dataset01);
        		break;
        		case 5:
        			this.RadarChart00.set_binddataset(this.Dataset02);
        		break;
        		case 6:
        			this.RadarChart00.set_binddataset(this.Dataset03);
        		break;
        		case 7:
        			this.RadarChart00.set_binddataset(this.Dataset04);
        		break;
        		case 8:
        			this.RadarChart00.set_binddataset(this.Dataset05);
        		break;
        		case 9:
        			this.RadarChart00.set_binddataset(this.Dataset06);
        		break;
        		case 10:
        			this.RadarChart00.set_binddataset(this.Dataset07);
        		break;

        	}
        	for(var i = 0; i < serieslength;i++)
        	{
        		this.RadarChart00.seriesset[i].set_linevisible(true);
        		this.RadarChart00.seriesset[i].set_lineareavisible(true);
        		//this.RadarChart00.seriesset[i].set_pointvisible(true);
        	}
        	this.RadarChart00.set_enableredraw(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.BtnPolygonTest.addEventHandler("onclick",this.Div00_BtnPolygonTest_onclick,this);
        };

        this.loadIncludeScript("Multi Polygon Chart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
