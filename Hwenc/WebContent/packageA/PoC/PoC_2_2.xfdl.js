(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_2_2");
            this.set_titletext("Chart 적용");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,531);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWeather", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"temperature\" type=\"FLOAT\" size=\"256\"/><Column id=\"pressure\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">12/Jan</Col><Col id=\"rainfall\">49.9</Col><Col id=\"temperature\">7.0</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">12/Feb</Col><Col id=\"rainfall\">71.5</Col><Col id=\"temperature\">6.9</Col><Col id=\"pressure\">1016</Col></Row><Row><Col id=\"month\">12/Mar</Col><Col id=\"rainfall\">106.4</Col><Col id=\"temperature\">9.5</Col><Col id=\"pressure\">1015.9</Col></Row><Row><Col id=\"month\">12/Apr</Col><Col id=\"rainfall\">129.2</Col><Col id=\"temperature\">14.5</Col><Col id=\"pressure\">1015.5</Col></Row><Row><Col id=\"month\">12/May</Col><Col id=\"rainfall\">144.0</Col><Col id=\"temperature\">18.2</Col><Col id=\"pressure\">1012.3</Col></Row><Row><Col id=\"month\">12/Jun</Col><Col id=\"rainfall\">176.0</Col><Col id=\"temperature\">21.5</Col><Col id=\"pressure\">1009.5</Col></Row><Row><Col id=\"month\">12/Jul</Col><Col id=\"rainfall\">135.6</Col><Col id=\"temperature\">25.2</Col><Col id=\"pressure\">1009.6</Col></Row><Row><Col id=\"month\">12/Aug</Col><Col id=\"rainfall\">148.5</Col><Col id=\"temperature\">26.5</Col><Col id=\"pressure\">1010.2</Col></Row><Row><Col id=\"month\">12/Sep</Col><Col id=\"rainfall\">216.4</Col><Col id=\"temperature\">23.3</Col><Col id=\"pressure\">1013.1</Col></Row><Row><Col id=\"month\">12/Oct</Col><Col id=\"rainfall\">194.1</Col><Col id=\"temperature\">18.3</Col><Col id=\"pressure\">1016.9</Col></Row><Row><Col id=\"month\">12/Nov</Col><Col id=\"rainfall\">95.6</Col><Col id=\"temperature\">13.9</Col><Col id=\"pressure\">1018.2</Col></Row><Row><Col id=\"month\">12/Dec</Col><Col id=\"rainfall\">54.4</Col><Col id=\"temperature\">9.6</Col><Col id=\"pressure\">1016.7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CountryLitres", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">Czech Republic</Col><Col id=\"value\">356.9</Col><Col id=\"select\"/><Col id=\"data\">test1</Col><Col id=\"valuedata\">100</Col></Row><Row><Col id=\"country\">Ireland</Col><Col id=\"value\">54</Col><Col id=\"select\"/><Col id=\"data\">tes2</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Germany</Col><Col id=\"value\">115.8</Col><Col id=\"data\">test3</Col><Col id=\"valuedata\">200.11</Col></Row><Row><Col id=\"country\">Australia</Col><Col id=\"value\">109.9</Col><Col id=\"select\"/><Col id=\"data\">test4</Col><Col id=\"valuedata\">19.1</Col></Row><Row><Col id=\"country\">Austria</Col><Col id=\"value\">108.3</Col><Col id=\"select\">1</Col><Col id=\"data\">test5</Col><Col id=\"valuedata\">30.12</Col></Row><Row><Col id=\"country\">UK</Col><Col id=\"value\">65</Col><Col id=\"select\"/><Col id=\"data\">test6</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Belgium</Col><Col id=\"value\">110</Col><Col id=\"select\"/><Col id=\"data\">test7</Col><Col id=\"valuedata\">19.100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CostProfit", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"profit\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue\" type=\"FLOAT\" size=\"256\"/><Column id=\"profit1\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost1\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue1\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">1</Col><Col id=\"profit\">600</Col><Col id=\"cost\">700</Col><Col id=\"revenue\">9999</Col><Col id=\"profit1\">400</Col><Col id=\"cost1\">200</Col><Col id=\"revenue1\">8000</Col></Row><Row><Col id=\"category\">2</Col><Col id=\"profit\">1000</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">5500</Col><Col id=\"profit1\">2200</Col><Col id=\"cost1\">4000</Col><Col id=\"revenue1\">4040</Col></Row><Row><Col id=\"category\">3</Col><Col id=\"profit\">1500</Col><Col id=\"cost\">1550</Col><Col id=\"revenue\">2200</Col><Col id=\"profit1\">1900</Col><Col id=\"cost1\">2000</Col><Col id=\"revenue1\">3000</Col></Row><Row><Col id=\"category\">4</Col><Col id=\"profit\">2200</Col><Col id=\"cost\">1300</Col><Col id=\"revenue\">1900</Col><Col id=\"profit1\">50</Col><Col id=\"cost1\">660</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">5</Col><Col id=\"profit\">1400</Col><Col id=\"cost\">900</Col><Col id=\"revenue\">9900</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row><Row><Col id=\"category\">6</Col><Col id=\"profit\">2000</Col><Col id=\"cost\">500</Col><Col id=\"revenue\">27000</Col><Col id=\"profit1\">80</Col><Col id=\"cost1\">2900</Col><Col id=\"revenue1\">3050</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"profit\">1800</Col><Col id=\"category\">7</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">8000</Col><Col id=\"profit1\">2500</Col><Col id=\"cost1\">800</Col><Col id=\"revenue1\">2000</Col></Row><Row><Col id=\"category\">8</Col><Col id=\"profit\">2500</Col><Col id=\"cost\">800</Col><Col id=\"revenue\">5700</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1900</Col><Col id=\"revenue1\">1900</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"category\">9</Col><Col id=\"profit\">2550</Col><Col id=\"cost\">600</Col><Col id=\"revenue\">3000</Col><Col id=\"profit1\">1500</Col><Col id=\"cost1\">1300</Col><Col id=\"revenue1\">440</Col></Row><Row><Col id=\"category\">10</Col><Col id=\"profit\">1600</Col><Col id=\"cost\">1200</Col><Col id=\"revenue\">5000</Col><Col id=\"profit1\">8989</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">11</Col><Col id=\"profit\">650</Col><Col id=\"cost\">550</Col><Col id=\"revenue\">3087</Col><Col id=\"profit1\">2000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">true</Col><Col id=\"text\">true</Col></Row><Row><Col id=\"code\">false</Col><Col id=\"text\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data00", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"TVs\" type=\"FLOAT\" size=\"256\"/><Column id=\"SmartPhones\" type=\"FLOAT\" size=\"256\"/><Column id=\"Computers\" type=\"FLOAT\" size=\"256\"/><Column id=\"Printers\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">Jan</Col><Col id=\"TVs\">85</Col><Col id=\"SmartPhones\">50</Col><Col id=\"Computers\">9</Col><Col id=\"Printers\">16</Col></Row><Row><Col id=\"month\">Feb</Col><Col id=\"TVs\">54</Col><Col id=\"SmartPhones\">76</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">15</Col></Row><Row><Col id=\"month\">Mar</Col><Col id=\"TVs\">57</Col><Col id=\"SmartPhones\">48</Col><Col id=\"Computers\">15</Col><Col id=\"Printers\">25</Col></Row><Row><Col id=\"month\">Apr</Col><Col id=\"TVs\">55</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">79</Col><Col id=\"Printers\">17</Col></Row><Row><Col id=\"month\">May</Col><Col id=\"TVs\">120</Col><Col id=\"SmartPhones\">56</Col><Col id=\"Computers\">18</Col><Col id=\"Printers\">10</Col></Row><Row><Col id=\"month\">Jun</Col><Col id=\"TVs\">140</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">19</Col><Col id=\"Printers\">11</Col></Row><Row><Col id=\"month\">Jul</Col><Col id=\"TVs\">57</Col><Col id=\"SmartPhones\">33</Col><Col id=\"Computers\">8</Col><Col id=\"Printers\">20</Col></Row><Row><Col id=\"month\">Aug</Col><Col id=\"TVs\">61</Col><Col id=\"SmartPhones\">42</Col><Col id=\"Computers\">9</Col><Col id=\"Printers\">22</Col></Row><Row><Col id=\"month\">Sep</Col><Col id=\"TVs\">48</Col><Col id=\"SmartPhones\">35</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">18</Col></Row><Row><Col id=\"month\">Oct</Col><Col id=\"TVs\">117</Col><Col id=\"SmartPhones\">47</Col><Col id=\"Computers\">11</Col><Col id=\"Printers\">17</Col></Row><Row><Col id=\"month\">Nov</Col><Col id=\"TVs\">110</Col><Col id=\"SmartPhones\">21</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">21</Col></Row><Row><Col id=\"month\">Dec</Col><Col id=\"TVs\">120</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">15</Col><Col id=\"Printers\">14</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","8","8","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("3rd Party 연동 - Basic Chart");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","42","34.38%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsWeather");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"month\"/><Cell col=\"1\" text=\"rainfall\"/><Cell col=\"2\" text=\"temperature\"/><Cell col=\"3\" text=\"pressure\"/></Band><Band id=\"body\"><Cell text=\"bind:month\"/><Cell col=\"1\" text=\"bind:rainfall\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:temperature\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:pressure\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("3rd Party 연동 - Pie Chart");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","9","9","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("3rd Party 연동 - Randar Chart");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","10","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3rd Party 연동 - Bubble Chart");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","13","42","34.38%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_CountryLitres");
            obj.set_autofittype("col");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"country\"/><Cell col=\"1\" text=\"value\"/><Cell col=\"2\" text=\"select\"/><Cell col=\"3\" text=\"data\"/><Cell col=\"4\" text=\"valuedata\"/></Band><Band id=\"body\"><Cell text=\"bind:country\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:value\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:select\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:data\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:valuedata\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","13","42","34.38%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_CostProfit");
            obj.set_autofittype("col");
            obj.set_positionstep("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"category\"/><Cell col=\"1\" text=\"profit\"/><Cell col=\"2\" text=\"cost\"/><Cell col=\"3\" text=\"revenue\"/><Cell col=\"4\" text=\"profit1\"/><Cell col=\"5\" text=\"cost1\"/><Cell col=\"6\" text=\"revenue1\"/><Cell col=\"7\" text=\"select\"/></Band><Band id=\"body\"><Cell text=\"bind:category\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:profit\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:cost\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:revenue\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:profit1\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:cost1\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:revenue1\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:select\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","24","Static02:7","34.38%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_data00");
            obj.set_autofittype("col");
            obj.set_positionstep("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"month\"/><Cell col=\"1\" text=\"TVs\"/><Cell col=\"2\" text=\"SmartPhones\"/><Cell col=\"3\" text=\"Computers\"/><Cell col=\"4\" text=\"Printers\"/></Band><Band id=\"body\"><Cell text=\"bind:month\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:TVs\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:SmartPhones\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Computers\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:Printers\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PieChart("cht_test","Grid01:8","42","56.25%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_CountryLitres");
            obj.set_positionstep("1");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Pie Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Pie Chart",
            		"subtextalign": "right",
            		"subtextcolor": "gray",
            		"subtextfont": "italic 8/normal \"Arial\""
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"radius": "60",
            			"itemtextvisible": true,
            			"itemtextfont": "bold 10pt \"Arial\",\"맑은 고딕\"",
            			"valuecolumn": "bind:value",
            			"fillstyle": "#1abd9c,#1a85be,#1a67bf,#1a4cbf,#641ac0,#9a1ac0,#c2251b,#c2541b,#c2911d,#21c34d",
            			"itemtexttype": "text",
            			"selectindent": "20",
            			"selectcolumn": "bind:select",
            			"selectopacity": "0.7",
            			"itemtextguidelinestyle": "1px solid darkgray",
            			"itemtextguideopacity": "1",
            			"itemtextguidesize": "20",
            			"itemtext": "expr:country +  \": \" + (value/dataset.getSum(\"value\")*100).toFixed(2) + \"%\"",
            			"opacity": "0.8",
            			"linestyle": "1px solid white",
            			"selectlinestyle": "1px solid white",
            			"highlightfillstyle": "yellow",
            			"highlightopacity": "0.5",
            			"highlightvisible": "true",
            			"selecttype": "bind"
            		}
            	]
            });
            obj.set_categorycolumn("bind:country");
            this.addChild(obj.name, obj);

            obj = new BubbleChart("cht_test00","Grid02:8","42","55.63%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_CostProfit");
            obj.set_positionstep("2");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bubble Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Bubble Chart",
            		"subtextalign": "right",
            		"subtextcolor": "gray",
            		"subtextfont": "italic 8pt \"Arial\""
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"markertype": "circle"
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
            	"seriesset": [
            		{
            			"id": "series0",
            			"itemtextvisible": "true",
            			"itemtextfont": "bold 8pt '맑은 고딕'",
            			"valuecolumn": "bind:profit",
            			"value2column": "bind:cost",
            			"value2axis": "costaxis",
            			"valueaxis": "profitaxis",
            			"itemtexttype": "number",
            			"itemtextmask": "99,99",
            			"selectcolumn": "bind:select",
            			"selectfillstyle": "yellow",
            			"selectopacity": "0.5",
            			"titletext": "revenue",
            			"linestyle": "1px solid #1f77b4",
            			"itemtext": "bind:revenue",
            			"itemtextposition": "center middle",
            			"itemtextgap": "5",
            			"itemtextcolor": "#196094",
            			"value3column": "bind:revenue",
            			"opacity": "0.6"
            		},
            		{
            			"id": "series1",
            			"valuecolumn": "bind:profit1",
            			"value2column": "bind:cost1",
            			"itemtextmask": "99,99",
            			"itemtexttype": "number",
            			"itemtextvisible": "true",
            			"value2axis": "costaxis",
            			"valueaxis": "profitaxis",
            			"itemtextfont": "bold 8pt '맑은 고딕'",
            			"selectcolumn": "bind:select",
            			"selectopacity": "0.5",
            			"selectfillstyle": "lime",
            			"titletext": "revenue1",
            			"itemtext": "bind:revenue1",
            			"itemtextposition": "center middle",
            			"itemtextgap": "-5",
            			"itemtextcolor": "#d66300",
            			"value3column": "bind:revenue1",
            			"opacity": "0.6"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "profitaxis",
            			"titletext": "Profit",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px dotted #717a83",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"titlegap": "25",
            			"labeltype": "number",
            			"labelmask": "##,###",
            			"ticksize": "0",
            			"rangezoom": "true"
            		},
            		{
            			"id": "costaxis",
            			"titletext": "Cost",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px dotted #717a83",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "2px solid #717a83",
            			"axislinestyle": "1px solid #525252",
            			"labelmask": "##,###",
            			"labeltype": "number",
            			"titlegap": "25",
            			"ticksize": "5",
            			"tickmax": "2000",
            			"rangezoom": "true"
            		}
            	]
            });
            this.addChild(obj.name, obj);

            obj = new RadarChart("RadarChart00","Grid03:8","42","56.25%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_data00");
            obj.set_positionstep("3");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Radar Chart",
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
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"valueaxes": [
            	  {
            		"id": "valueaxis0",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "10pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"boardlinestyle": "1px solid #d0d0d0"
            	  }
            	],
            	"seriesset": [
            	  {
            		"id": "series0",
            		"titletext": "series",
            		"linevisible": true,
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 6pt '맑은 고딕'",
            		"valuecolumn": "bind:TVs"
            	  },
            	  {
            		"id": "series1",
            		"titletext": "series",
            		"linevisible": true,
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 6pt '맑은 고딕'",
            		"valuecolumn": "bind:SmartPhones"
            	  },
            	  {
            		"id": "series2",
            		"titletext": "series",
            		"linevisible": true,
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 6pt '맑은 고딕'",
            		"valuecolumn": "bind:Computers"
            	  },
            	  {
            		"id": "series3",
            		"titletext": "series",
            		"linevisible": true,
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 6pt '맑은 고딕'",
            		"valuecolumn": "bind:Printers"
            	  }
            	]
            });
            obj.set_categorycolumn("bind:month");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","Grid00:8","42","56.25%",null,null,"8",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsWeather");
            obj.set_bargrouping("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Multi Axis",
            		"subtextcolor": "lightgray",
            		"subtextalign": "right",
            		"text": "Basic Chart"
            	},
            	"legend": {
            		"id": "legend",
            		"align": "center",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"markertextgap": "2",
            		"itemautofit": "false",
            		"itemgap": "10"
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
            		"labeltextfont": "10pt '맑은 고딕'",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "rainfall",
            			"barvisible": true,
            			"barsize": "70",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:rainfall",
            			"valueaxis": "rainaxis",
            			"barfillstyle": "#1abd9d",
            			"barlinestyle": "#1abd9d"
            		},
            		{
            			"id": "series1",
            			"titletext": "temperature",
            			"barvisible": "false",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:temperature",
            			"valueaxis": "tempaxis",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"pointsize": "8",
            			"linetype": "curve",
            			"linestyle": "1px solid #1a71bd",
            			"pointfillstyle": "#1a71bd",
            			"pointlinestyle": "1px solid #1a71bd"
            		},
            		{
            			"id": "series2",
            			"titletext": "pressure",
            			"barvisible": false,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:pressure",
            			"valueaxis": "pressureaxis",
            			"pointvisible": true,
            			"pointsize": "4",
            			"pointshape": "diamond",
            			"linestyle": "1px dotted #c2251b",
            			"linevisible": true,
            			"pointfillstyle": "#c2251b",
            			"pointlinestyle": "1px solid #c2251b"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "rainaxis",
            			"titletext": "Rainfall",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#1abd9d",
            			"labeltextfont": "8pt/normal '맑은 고딕'",
            			"titletextcolor": "#1abd9d",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "2px solid #1abd9d",
            			"axislinestyle": "2px solid #1abd9d",
            			"labelmask": "###mm",
            			"labeltype": "text",
            			"titlegap": "10",
            			"gap": "10"
            		},
            		{
            			"id": "tempaxis",
            			"titletext": "Temperature",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#1a71bd",
            			"labeltextfont": "8pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#1a71bd",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "2px solid #1a71bd",
            			"axislinestyle": "2px solid #1a71bd",
            			"opposite": "true",
            			"labelmask": "##°C",
            			"titlegap": "10",
            			"labelgap": "10",
            			"labeltype": "text",
            			"gap": "10",
            			"tickmax": "33"
            		},
            		{
            			"id": "pressureaxis",
            			"titletext": "Sea-Level Pressure",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#c2251b",
            			"labeltextfont": "8pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#c2251b",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "2px solid #c2251b",
            			"axislinestyle": "2px solid #c2251b",
            			"opposite": "true",
            			"labelmask": "####mb",
            			"gap": "10",
            			"titlegap": "10",
            			"labeltype": "text",
            			"tickmin": "1000",
            			"tickmax": "1030"
            		}
            	]
            });
            obj.set_categorycolumn("bind:month");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,531,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PoC_2_2.xfdl", function() {
        this.PoC_2_2_onkeydown = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	if (nStepIdx == 0)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(1);
        		}
        	}
        	else if (nStepIdx == 1)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(0);
        		} else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(2);
        		}
        	}
        	else if (nStepIdx == 2)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(1);
        		}
        		 else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(3);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown",this.PoC_2_2_onkeydown,this);
        };

        this.loadIncludeScript("PoC_2_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
