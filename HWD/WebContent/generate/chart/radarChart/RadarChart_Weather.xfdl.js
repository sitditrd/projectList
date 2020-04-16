(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RadarAxisDesign");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWeather", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"temperature\" type=\"FLOAT\" size=\"256\"/><Column id=\"pressure\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">12/Jan</Col><Col id=\"rainfall\">49.9</Col><Col id=\"temperature\">7.0</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">12/Feb</Col><Col id=\"rainfall\">71.5</Col><Col id=\"temperature\">6.9</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">12/Mar</Col><Col id=\"rainfall\">106.4</Col><Col id=\"temperature\">9.5</Col><Col id=\"pressure\">1015.9</Col></Row><Row><Col id=\"month\">12/Apr</Col><Col id=\"rainfall\">129.2</Col><Col id=\"temperature\">14.5</Col><Col id=\"pressure\">1015.5</Col></Row><Row><Col id=\"month\">12/May</Col><Col id=\"rainfall\">144.0</Col><Col id=\"temperature\">18.2</Col><Col id=\"pressure\">1012.3</Col></Row><Row><Col id=\"month\">12/Jun</Col><Col id=\"rainfall\">176.0</Col><Col id=\"temperature\">21.5</Col><Col id=\"pressure\">1009.5</Col></Row><Row><Col id=\"month\">12/Jul</Col><Col id=\"rainfall\">135.6</Col><Col id=\"temperature\">25.2</Col><Col id=\"pressure\">1009.6</Col></Row><Row><Col id=\"month\">12/Aug</Col><Col id=\"rainfall\">148.5</Col><Col id=\"temperature\">26.5</Col><Col id=\"pressure\">1010.2</Col></Row><Row><Col id=\"month\">12/Sep</Col><Col id=\"rainfall\">216.4</Col><Col id=\"temperature\">23.3</Col><Col id=\"pressure\">1013.1</Col></Row><Row><Col id=\"month\">12/Oct</Col><Col id=\"rainfall\">194.1</Col><Col id=\"temperature\">18.3</Col><Col id=\"pressure\">1016.9</Col></Row><Row><Col id=\"month\">12/Nov</Col><Col id=\"rainfall\">95.6</Col><Col id=\"temperature\">13.9</Col><Col id=\"pressure\">1018.2</Col></Row><Row><Col id=\"month\">12/Dec</Col><Col id=\"rainfall\">54.4</Col><Col id=\"temperature\">9.6</Col><Col id=\"pressure\">1016.7</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RadarChart("RadarChart00","0%","0%",null,null,"50%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsWeather");
            obj.set_radius("70");
            obj.set_radartype("circle");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "2012 Weather",
            		"subtext": "rainfall",
            		"textfont": "bold 20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"textcolor": "chocolate",
            		"subtextcolor": "blue",
            		"subtextfont": "bold 14pt \"Arial\""
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
            		"id": "board",
            		"border": "1pxsolid black"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "0px solid powderblue",
            		"boardlinevisible": "false",
            		"axislineopacity": "0.3",
            		"labelgap": "10",
            		"labelrotate": "30"
            	},
            	"valueaxes": [
            		{
            		"id": "valueaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "0px solid powderblue",
            		"boardlinestyle": "20px solid powderblue",
            		"boardlineopacity": "0.3",
            		"axislineopacity": "0.3",
            		"tickmin": "0"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "rainfall",
            			"linevisible": true,
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:rainfall",
            			"linestyle": "3px solid blue"
            		}
            	]
            });
            obj.set_categorycolumn("bind:month");
            this.addChild(obj.name, obj);

            obj = new RadarChart("RadarChart01","50%","0.00%",null,null,"0","0.00%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsWeather");
            obj.set_radius("70");
            obj.set_radartype("circle");
            obj.set_enableanimation("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "2012 Weather",
            		"subtext": "temperature",
            		"textfont": "bold 20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"textcolor": "chocolate",
            		"subtextcolor": "deeppink",
            		"subtextfont": "bold 14pt \"Arial\""
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
            		"id": "board",
            		"border": "1px solid black"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "20px solid pink",
            		"labelgap": "10",
            		"labelrotate": "30",
            		"axislineopacity": "1",
            		"boardlinevisible": "false",
            		"boardlineopacity": "0.3"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "8pt '맑은 고딕'",
            			"axislinestyle": "2px solid red",
            			"tickmax": "30",
            			"tickmin": "0",
            			"axislineopacity": "0.5",
            			"boardlinestyle": "10px solid pink",
            			"boardlineopacity": "0.3",
            			"axislineindex": "3",
            			"tickinterval": "10"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "temperature",
            			"linevisible": true,
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 6pt '맑은 고딕'",
            			"valuecolumn": "bind:temperature",
            			"linestyle": "0px solid gray",
            			"lineareavisible": "true",
            			"lineareafillstyle": "gray",
            			"lineareaopacity": "0.3",
            			"lineopacity": "0.3"
            		}
            	]
            });
            obj.set_categorycolumn("bind:month");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("RadarChart_Weather.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
