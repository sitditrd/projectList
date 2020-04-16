(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LVL\">0</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"MENU_NM\">샘플</Col><Col id=\"GROUP_ID\">1000</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"MENU_ID\">1100</Col><Col id=\"MENU_NM\">Transaction</Col><Col id=\"MENU_URL\">sample::form01.xfdl</Col><Col id=\"GROUP_ID\">1000</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"MENU_ID\">1200</Col><Col id=\"MENU_NM\">Excel</Col><Col id=\"MENU_URL\">sample::form02.xfdl</Col><Col id=\"GROUP_ID\">1000</Col></Row><Row><Col id=\"LVL\">0</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2000</Col><Col id=\"MENU_NM\">Chart</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2100</Col><Col id=\"MENU_NM\">Column Chart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2110</Col><Col id=\"MENU_NM\">Grouped Column</Col><Col id=\"MENU_URL\">BasicChart::GroupedColumn.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2120</Col><Col id=\"MENU_NM\">Stacked Column</Col><Col id=\"MENU_URL\">BasicChart::StackedColumn.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2130</Col><Col id=\"MENU_NM\">100% Stacked Column</Col><Col id=\"MENU_URL\">BasicChart::PercentStackedColumn.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2140</Col><Col id=\"MENU_NM\">Grouped Stack Column</Col><Col id=\"MENU_URL\">BasicChart::GroupedStackColumn.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2150</Col><Col id=\"MENU_NM\">Layered Column</Col><Col id=\"MENU_URL\">BasicChart::LayeredColumn.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2200</Col><Col id=\"MENU_NM\">Bar Chart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2210</Col><Col id=\"MENU_NM\">Grouped Bar</Col><Col id=\"MENU_URL\">BasicChart::GroupedBar.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2220</Col><Col id=\"MENU_NM\">Stacked Bar</Col><Col id=\"MENU_URL\">BasicChart::StackedBar.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2230</Col><Col id=\"MENU_NM\">100% Stacked Bar</Col><Col id=\"MENU_URL\">BasicChart::PercentStackedBar.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2240</Col><Col id=\"MENU_NM\">Grouped Stack Bar</Col><Col id=\"MENU_URL\">BasicChart::GroupedStackBar.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2250</Col><Col id=\"MENU_NM\">Layered Bar</Col><Col id=\"MENU_URL\">BasicChart::LayeredBar.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2300</Col><Col id=\"MENU_NM\">Line Chart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2310</Col><Col id=\"MENU_NM\">Segment Line</Col><Col id=\"MENU_URL\">BasicChart::SegmentLine.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2320</Col><Col id=\"MENU_NM\">Step Line</Col><Col id=\"MENU_URL\">BasicChart::StepLine.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2330</Col><Col id=\"MENU_NM\">Curve Line</Col><Col id=\"MENU_URL\">BasicChart::CurveLine.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2400</Col><Col id=\"MENU_NM\">Area Chart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2410</Col><Col id=\"MENU_NM\">Simple Area</Col><Col id=\"MENU_URL\">BasicChart::SimpleArea.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2420</Col><Col id=\"MENU_NM\">Stacked Area</Col><Col id=\"MENU_URL\">BasicChart::StackedArea.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2430</Col><Col id=\"MENU_NM\">100% Stack Area</Col><Col id=\"MENU_URL\">BasicChart::PercentStackedArea.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2500</Col><Col id=\"MENU_NM\">Point Chart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2510</Col><Col id=\"MENU_NM\">Point Markers</Col><Col id=\"MENU_URL\">BasicChart::PointMarkers.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2520</Col><Col id=\"MENU_NM\">Line with Markers</Col><Col id=\"MENU_URL\">BasicChart::PointMarkers_withLine.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2600</Col><Col id=\"MENU_NM\">Mixed Chart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2610</Col><Col id=\"MENU_NM\">Column + Line</Col><Col id=\"MENU_URL\">BasicChart::ColumnAndLine.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2620</Col><Col id=\"MENU_NM\">Line + Point</Col><Col id=\"MENU_URL\">BasicChart::LineAndPoint.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2630</Col><Col id=\"MENU_NM\">Multi Axis</Col><Col id=\"MENU_URL\">BasicChart::BarAndLine_MultiAxis.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2700</Col><Col id=\"MENU_NM\">Data Type</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2710</Col><Col id=\"MENU_NM\">Negative Data</Col><Col id=\"MENU_URL\">BasicChart::Data_Negative.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2720</Col><Col id=\"MENU_NM\">Divergent Data</Col><Col id=\"MENU_URL\">BasicChart::Data_Divergent.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2730</Col><Col id=\"MENU_NM\">DateTime Axis</Col><Col id=\"MENU_URL\">BasicChart::Data_TimeAxis.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2800</Col><Col id=\"MENU_NM\">PieChart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2810</Col><Col id=\"MENU_NM\">Simple Pie</Col><Col id=\"MENU_URL\">PieChart::SimplePie.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2820</Col><Col id=\"MENU_NM\">Select Pie</Col><Col id=\"MENU_URL\">PieChart::SelectPie.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2830</Col><Col id=\"MENU_NM\">Angular Pie</Col><Col id=\"MENU_URL\">PieChart::AngularPie.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2900</Col><Col id=\"MENU_NM\">Doughnut</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2910</Col><Col id=\"MENU_NM\">Simple Douhgnut</Col><Col id=\"MENU_URL\">PieChart::SimpleDoughnut.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2920</Col><Col id=\"MENU_NM\">Select Doughnut</Col><Col id=\"MENU_URL\">PieChart::SelectDoughnut.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2930</Col><Col id=\"MENU_NM\">Angular Doughnut</Col><Col id=\"MENU_URL\">PieChart::AngularDoughnut.xfdl</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2940</Col><Col id=\"MENU_NM\">BubbleChart</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2950</Col><Col id=\"MENU_NM\">Scatter</Col><Col id=\"MENU_URL\">BubbleChart::Scatter.xfdl</Col></Row><Row><Col id=\"LVL\">2</Col><Col id=\"GROUP_ID\">2000</Col><Col id=\"MENU_ID\">2960</Col><Col id=\"MENU_NM\">Bubble</Col><Col id=\"MENU_URL\">BubbleChart::SimpleBubble.xfdl</Col></Row><Row><Col id=\"LVL\">0</Col><Col id=\"GROUP_ID\">3000</Col><Col id=\"MENU_ID\">3001</Col><Col id=\"MENU_URL\"/><Col id=\"MENU_NM\">Push Message</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"GROUP_ID\">3000</Col><Col id=\"MENU_ID\">3002</Col><Col id=\"MENU_NM\">push 알림</Col><Col id=\"MENU_URL\">sample::sample_provider.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE\" type=\"STRING\" size=\"32\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"TOKEN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"STRING\" size=\"32\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"NENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"32\"/><Column id=\"SORT_NO\" type=\"INT\" size=\"4\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsRainfall", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"mean\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">ABBOTSFORD</Col><Col id=\"rainfall\">69</Col><Col id=\"mean\">66.2</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">CONCORD</Col><Col id=\"rainfall\">49.6</Col><Col id=\"mean\">48.6</Col></Row><Row><Col id=\"name\">SYDNEY BOTANIC GARDENS</Col><Col id=\"rainfall\">94.1</Col><Col id=\"mean\">68.2</Col></Row><Row><Col id=\"name\">CHATSWOOD BOWLING CLUB</Col><Col id=\"rainfall\">78</Col><Col id=\"mean\">51</Col></Row><Row><Col id=\"name\">CONCORD GOLF CLUB</Col><Col id=\"rainfall\">11.2</Col><Col id=\"mean\">59.1</Col></Row><Row><Col id=\"name\">MARRICKVILLE GOLF CLUB</Col><Col id=\"rainfall\">56</Col><Col id=\"mean\">55.9</Col></Row><Row><Col id=\"name\">SYDNEY AIRPORT AMO</Col><Col id=\"rainfall\">66.6</Col><Col id=\"mean\">60.3</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">PENNANT HILLS</Col><Col id=\"rainfall\">53.2</Col><Col id=\"mean\">56.8</Col></Row><Row><Col id=\"name\">RANDWICK BOWLING CLUB</Col><Col id=\"rainfall\">122.6</Col><Col id=\"mean\">65.9</Col></Row><Row><Col id=\"name\">SANS SOUCI</Col><Col id=\"rainfall\">66</Col><Col id=\"mean\">61.5</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">TERREY HILLS AWS</Col><Col id=\"rainfall\">83.4</Col><Col id=\"mean\">63.9</Col></Row><Row><Col id=\"name\">SYDNEY</Col><Col id=\"rainfall\">80</Col><Col id=\"mean\">65.5</Col></Row><Row><Col id=\"name\">STRATHFIELD GOLF CLUB</Col><Col id=\"rainfall\">36</Col><Col id=\"mean\">45.3</Col></Row><Row><Col id=\"name\">LUCAS HEIGHTS</Col><Col id=\"rainfall\">58.9</Col><Col id=\"mean\">50.9</Col></Row><Row><Col id=\"name\">CASTLE COVE</Col><Col id=\"rainfall\">101</Col><Col id=\"mean\">69.2</Col></Row><Row><Col id=\"name\">PARRAMATTA NORTH</Col><Col id=\"rainfall\">33.6</Col><Col id=\"mean\">52.4</Col></Row><Row><Col id=\"name\">COLLAROY</Col><Col id=\"rainfall\">91.4</Col><Col id=\"mean\">66.2</Col></Row><Row><Col id=\"name\">BANKSTOWN AIRPORT AWS</Col><Col id=\"rainfall\">53.4</Col><Col id=\"mean\">43.6</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCountryLitres", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">Czech Republic</Col><Col id=\"value\">356.9</Col><Col id=\"select\"/><Col id=\"data\">test1</Col><Col id=\"valuedata\">100</Col></Row><Row><Col id=\"country\">Ireland</Col><Col id=\"value\">54</Col><Col id=\"select\"/><Col id=\"data\">tes2</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Germany</Col><Col id=\"value\">115.8</Col><Col id=\"data\">test3</Col><Col id=\"valuedata\">200.11</Col></Row><Row><Col id=\"country\">Australia</Col><Col id=\"value\">109.9</Col><Col id=\"select\"/><Col id=\"data\">test4</Col><Col id=\"valuedata\">19.1</Col></Row><Row><Col id=\"country\">Austria</Col><Col id=\"value\">108.3</Col><Col id=\"select\">1</Col><Col id=\"data\">test5</Col><Col id=\"valuedata\">30.12</Col></Row><Row><Col id=\"country\">UK</Col><Col id=\"value\">65</Col><Col id=\"select\"/><Col id=\"data\">test6</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Belgium</Col><Col id=\"value\">110</Col><Col id=\"select\"/><Col id=\"data\">test7</Col><Col id=\"valuedata\">19.100</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCostProfit", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"profit\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue\" type=\"FLOAT\" size=\"256\"/><Column id=\"profit1\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost1\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue1\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">1</Col><Col id=\"profit\">600</Col><Col id=\"cost\">700</Col><Col id=\"revenue\">9999</Col><Col id=\"profit1\">400</Col><Col id=\"cost1\">200</Col><Col id=\"revenue1\">8000</Col></Row><Row><Col id=\"category\">2</Col><Col id=\"profit\">1000</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">5500</Col><Col id=\"profit1\">2200</Col><Col id=\"cost1\">4000</Col><Col id=\"revenue1\">4040</Col></Row><Row><Col id=\"category\">3</Col><Col id=\"profit\">1500</Col><Col id=\"cost\">1550</Col><Col id=\"revenue\">2200</Col><Col id=\"profit1\">1900</Col><Col id=\"cost1\">2000</Col><Col id=\"revenue1\">3000</Col></Row><Row><Col id=\"category\">4</Col><Col id=\"profit\">2200</Col><Col id=\"cost\">1300</Col><Col id=\"revenue\">1900</Col><Col id=\"profit1\">50</Col><Col id=\"cost1\">660</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">5</Col><Col id=\"profit\">1400</Col><Col id=\"cost\">900</Col><Col id=\"revenue\">9900</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row><Row><Col id=\"category\">6</Col><Col id=\"profit\">2000</Col><Col id=\"cost\">500</Col><Col id=\"revenue\">27000</Col><Col id=\"profit1\">80</Col><Col id=\"cost1\">2900</Col><Col id=\"revenue1\">3050</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"profit\">1800</Col><Col id=\"category\">7</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">8000</Col><Col id=\"profit1\">2500</Col><Col id=\"cost1\">800</Col><Col id=\"revenue1\">2000</Col></Row><Row><Col id=\"category\">8</Col><Col id=\"profit\">2500</Col><Col id=\"cost\">800</Col><Col id=\"revenue\">5700</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1900</Col><Col id=\"revenue1\">1900</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"category\">9</Col><Col id=\"profit\">2550</Col><Col id=\"cost\">600</Col><Col id=\"revenue\">3000</Col><Col id=\"profit1\">1500</Col><Col id=\"cost1\">1300</Col><Col id=\"revenue1\">440</Col></Row><Row><Col id=\"category\">10</Col><Col id=\"profit\">1600</Col><Col id=\"cost\">1200</Col><Col id=\"revenue\">5000</Col><Col id=\"profit1\">8989</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">11</Col><Col id=\"profit\">650</Col><Col id=\"cost\">550</Col><Col id=\"revenue\">3087</Col><Col id=\"profit1\">2000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_01\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsIdentifiy", this);
            obj._setContents("<ColumnInfo><Column id=\"qual\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("nexacro17Phone");
            this.set_screenid("ScreenPhone");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","480","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("nexacro platform");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_showtitleicon("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("ChildFrame",null,null,null,null,null,null,"frame::main_phone.xfdl",this);
            frame0.set_showtitleicon("false");
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("frame::main_phone.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler


        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("nexacro17Phone.xadl");
    };
}
)();
