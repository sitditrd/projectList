(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacroChart");
            this.set_titletext("nexacro Chart");
            this.set_stepshowtype("always");
            this.set_stepitemsize("0");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("gdsRainfall", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"mean\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">ABBOTSFORD</Col><Col id=\"rainfall\">69</Col><Col id=\"mean\">66.2</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">CONCORD</Col><Col id=\"rainfall\">49.6</Col><Col id=\"mean\">48.6</Col></Row><Row><Col id=\"name\">SYDNEY BOTANIC GARDENS</Col><Col id=\"rainfall\">94.1</Col><Col id=\"mean\">68.2</Col></Row><Row><Col id=\"name\">CHATSWOOD BOWLING CLUB</Col><Col id=\"rainfall\">78</Col><Col id=\"mean\">51</Col></Row><Row><Col id=\"name\">CONCORD GOLF CLUB</Col><Col id=\"rainfall\">11.2</Col><Col id=\"mean\">59.1</Col></Row><Row><Col id=\"name\">MARRICKVILLE GOLF CLUB</Col><Col id=\"rainfall\">56</Col><Col id=\"mean\">55.9</Col></Row><Row><Col id=\"name\">SYDNEY AIRPORT AMO</Col><Col id=\"rainfall\">66.6</Col><Col id=\"mean\">60.3</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">PENNANT HILLS</Col><Col id=\"rainfall\">53.2</Col><Col id=\"mean\">56.8</Col></Row><Row><Col id=\"name\">RANDWICK BOWLING CLUB</Col><Col id=\"rainfall\">122.6</Col><Col id=\"mean\">65.9</Col></Row><Row><Col id=\"name\">SANS SOUCI</Col><Col id=\"rainfall\">66</Col><Col id=\"mean\">61.5</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">TERREY HILLS AWS</Col><Col id=\"rainfall\">83.4</Col><Col id=\"mean\">63.9</Col></Row><Row><Col id=\"name\">SYDNEY</Col><Col id=\"rainfall\">80</Col><Col id=\"mean\">65.5</Col></Row><Row><Col id=\"name\">STRATHFIELD GOLF CLUB</Col><Col id=\"rainfall\">36</Col><Col id=\"mean\">45.3</Col></Row><Row><Col id=\"name\">LUCAS HEIGHTS</Col><Col id=\"rainfall\">58.9</Col><Col id=\"mean\">50.9</Col></Row><Row><Col id=\"name\">CASTLE COVE</Col><Col id=\"rainfall\">101</Col><Col id=\"mean\">69.2</Col></Row><Row><Col id=\"name\">PARRAMATTA NORTH</Col><Col id=\"rainfall\">33.6</Col><Col id=\"mean\">52.4</Col></Row><Row><Col id=\"name\">COLLAROY</Col><Col id=\"rainfall\">91.4</Col><Col id=\"mean\">66.2</Col></Row><Row><Col id=\"name\">BANKSTOWN AIRPORT AWS</Col><Col id=\"rainfall\">53.4</Col><Col id=\"mean\">43.6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gdsCountryLitres", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">Czech Republic</Col><Col id=\"value\">356.9</Col><Col id=\"select\"/><Col id=\"data\">test1</Col><Col id=\"valuedata\">100</Col></Row><Row><Col id=\"country\">Ireland</Col><Col id=\"value\">54</Col><Col id=\"select\"/><Col id=\"data\">tes2</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Germany</Col><Col id=\"value\">115.8</Col><Col id=\"data\">test3</Col><Col id=\"valuedata\">200.11</Col></Row><Row><Col id=\"country\">Australia</Col><Col id=\"value\">109.9</Col><Col id=\"select\"/><Col id=\"data\">test4</Col><Col id=\"valuedata\">19.1</Col></Row><Row><Col id=\"country\">Austria</Col><Col id=\"value\">108.3</Col><Col id=\"select\">1</Col><Col id=\"data\">test5</Col><Col id=\"valuedata\">30.12</Col></Row><Row><Col id=\"country\">UK</Col><Col id=\"value\">65</Col><Col id=\"select\"/><Col id=\"data\">test6</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Belgium</Col><Col id=\"value\">110</Col><Col id=\"select\"/><Col id=\"data\">test7</Col><Col id=\"valuedata\">19.100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gdsCostProfit", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"profit\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue\" type=\"FLOAT\" size=\"256\"/><Column id=\"profit1\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost1\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue1\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">1</Col><Col id=\"profit\">600</Col><Col id=\"cost\">700</Col><Col id=\"revenue\">9999</Col><Col id=\"profit1\">400</Col><Col id=\"cost1\">200</Col><Col id=\"revenue1\">8000</Col></Row><Row><Col id=\"category\">2</Col><Col id=\"profit\">1000</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">5500</Col><Col id=\"profit1\">2200</Col><Col id=\"cost1\">4000</Col><Col id=\"revenue1\">4040</Col></Row><Row><Col id=\"category\">3</Col><Col id=\"profit\">1500</Col><Col id=\"cost\">1550</Col><Col id=\"revenue\">2200</Col><Col id=\"profit1\">1900</Col><Col id=\"cost1\">2000</Col><Col id=\"revenue1\">3000</Col></Row><Row><Col id=\"category\">4</Col><Col id=\"profit\">2200</Col><Col id=\"cost\">1300</Col><Col id=\"revenue\">1900</Col><Col id=\"profit1\">50</Col><Col id=\"cost1\">660</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">5</Col><Col id=\"profit\">1400</Col><Col id=\"cost\">900</Col><Col id=\"revenue\">9900</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row><Row><Col id=\"category\">6</Col><Col id=\"profit\">2000</Col><Col id=\"cost\">500</Col><Col id=\"revenue\">27000</Col><Col id=\"profit1\">80</Col><Col id=\"cost1\">2900</Col><Col id=\"revenue1\">3050</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"profit\">1800</Col><Col id=\"category\">7</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">8000</Col><Col id=\"profit1\">2500</Col><Col id=\"cost1\">800</Col><Col id=\"revenue1\">2000</Col></Row><Row><Col id=\"category\">8</Col><Col id=\"profit\">2500</Col><Col id=\"cost\">800</Col><Col id=\"revenue\">5700</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1900</Col><Col id=\"revenue1\">1900</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"category\">9</Col><Col id=\"profit\">2550</Col><Col id=\"cost\">600</Col><Col id=\"revenue\">3000</Col><Col id=\"profit1\">1500</Col><Col id=\"cost1\">1300</Col><Col id=\"revenue1\">440</Col></Row><Row><Col id=\"category\">10</Col><Col id=\"profit\">1600</Col><Col id=\"cost\">1200</Col><Col id=\"revenue\">5000</Col><Col id=\"profit1\">8989</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">11</Col><Col id=\"profit\">650</Col><Col id=\"cost\">550</Col><Col id=\"revenue\">3087</Col><Col id=\"profit1\">2000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"formurl\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">nexacro.BasicChart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Features Example</Col><Col id=\"level\">1</Col><Col id=\"formurl\">basicChart::FeatureExample.xfdl</Col></Row><Row><Col id=\"name\">Column Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Grouped Column</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::GroupedColumn.xfdl</Col></Row><Row><Col id=\"name\">Stacked Column</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::StackedColumn.xfdl</Col></Row><Row><Col id=\"name\">100% Stacked Column</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::PercentStackedColumn.xfdl</Col></Row><Row><Col id=\"name\">Grouped Stack Column</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::GroupedStackColumn.xfdl</Col></Row><Row><Col id=\"name\">Layered Column</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::LayeredColumn.xfdl</Col></Row><Row><Col id=\"name\">Bar Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Grouped Bar</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::GroupedBar.xfdl</Col></Row><Row><Col id=\"name\">Stacked Bar</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::StackedBar.xfdl</Col></Row><Row><Col id=\"name\">100% Stacked Bar</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::PercentStackedBar.xfdl</Col></Row><Row><Col id=\"name\">Grouped Stack Bar</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::GroupedStackBar.xfdl</Col></Row><Row><Col id=\"name\">Layered Bar</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::LayeredBar.xfdl</Col></Row><Row><Col id=\"name\">Line Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Segment Line</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::SegmentLine.xfdl</Col></Row><Row><Col id=\"name\">Step Line</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::StepLine.xfdl</Col></Row><Row><Col id=\"name\">Curve Line</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::CurveLine.xfdl</Col></Row><Row><Col id=\"name\">Area Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Simple Area</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::SimpleArea.xfdl</Col></Row><Row><Col id=\"name\">Stacked Area</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::StackedArea.xfdl</Col></Row><Row><Col id=\"name\">100% Stack Area</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::PercentStackedArea.xfdl</Col></Row><Row><Col id=\"name\">Point Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Point Markers</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::PointMarkers.xfdl</Col></Row><Row><Col id=\"name\">Line with Markers</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::PointMarkers_withLine.xfdl</Col></Row><Row><Col id=\"name\">Mixed Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Column + Line</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::ColumnAndLine.xfdl</Col></Row><Row><Col id=\"name\">Line + Point</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::LineAndPoint.xfdl</Col></Row><Row><Col id=\"name\">Multi Axis</Col><Col id=\"level\">2</Col><Col id=\"formurl\">basicChart::BarAndLine_MultiAxis.xfdl</Col></Row><Row><Col id=\"name\">Data Type</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Negative Data</Col><Col id=\"formurl\">basicChart::Data_Negative.xfdl</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"formurl\">basicChart::Data_Divergent.xfdl</Col><Col id=\"level\">2</Col><Col id=\"name\">Divergent Data</Col></Row><Row><Col id=\"name\">DateTime Axis</Col><Col id=\"formurl\">basicChart::Data_TimeAxis.xfdl</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">nexacro.PieChart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Features Example</Col><Col id=\"formurl\">pieChart::FeatureExample.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Pie Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Simple Pie</Col><Col id=\"level\">2</Col><Col id=\"formurl\">pieChart::SimplePie.xfdl</Col></Row><Row><Col id=\"name\">Select Pie</Col><Col id=\"level\">2</Col><Col id=\"formurl\">pieChart::SelectPie.xfdl</Col></Row><Row><Col id=\"name\">Angular Pie</Col><Col id=\"level\">2</Col><Col id=\"formurl\">pieChart::AngularPie.xfdl</Col></Row><Row><Col id=\"name\">Doughnut</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Simple Douhgnut</Col><Col id=\"level\">2</Col><Col id=\"formurl\">pieChart::SimpleDoughnut.xfdl</Col></Row><Row><Col id=\"name\">Select Doughnut</Col><Col id=\"level\">2</Col><Col id=\"formurl\">pieChart::SelectDoughnut.xfdl</Col></Row><Row><Col id=\"name\">Angular Doughnut</Col><Col id=\"level\">2</Col><Col id=\"formurl\">pieChart::AngularDoughnut.xfdl</Col></Row><Row><Col id=\"name\">nexacro.BubbleChart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Scatter</Col><Col id=\"level\">1</Col><Col id=\"formurl\">bubbleChart::Scatter.xfdl</Col></Row><Row><Col id=\"name\">Bubble</Col><Col id=\"level\">1</Col><Col id=\"formurl\">bubbleChart::SimpleBubble.xfdl</Col></Row><Row><Col id=\"name\">nexacro.Gauge Chart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Gauge Chart_Basic</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"formurl\">gaugeChart::GaugeChart_Basic_circular.xfdl</Col><Col id=\"level\">2</Col><Col id=\"name\">Circular</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"formurl\">gaugeChart::GaugeChart_Basic_horizontal.xfdl</Col><Col id=\"name\">Horizontal</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"formurl\">gaugeChart::GaugeChart_Basic_vertical.xfdl</Col><Col id=\"name\">Vertical</Col></Row><Row><Col id=\"name\">Features Example</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Sales</Col><Col id=\"formurl\">gaugeChart::GaugeChart_Sales.xfdl</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">Speed</Col><Col id=\"formurl\">gaugeChart::GaugeChart_speed.xfdl</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"formurl\">gaugeChart::GaugeChart_weather.xfdl</Col><Col id=\"name\">Weather</Col></Row><Row><Col id=\"name\">nexacro.Radar Chart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Radar Chart</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">Basic</Col><Col id=\"formurl\">radarChart::RadarChart_Basic.xfdl</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">Multi_Polygon</Col><Col id=\"formurl\">radarChart::Multi Polygon Chart.xfdl</Col></Row><Row><Col id=\"name\">MultiSeries</Col><Col id=\"formurl\">radarChart::RadarChart_MultiSeries.xfdl</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">Dynamic</Col><Col id=\"formurl\">radarChart::Dynamic_RadarChart.xfdl</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">nexacro.Float Chart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Basic</Col><Col id=\"formurl\">floatChart::floatbase.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Plan</Col><Col id=\"formurl\">floatChart::floatbase_plan.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Plan_Hour</Col><Col id=\"formurl\">floatChart::floatbase_plan_hour.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Waterful</Col><Col id=\"formurl\">floatChart::floatbase_waterful.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">nexacro.Pyramid Chart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Basic</Col><Col id=\"formurl\">pyramidChart::SimplePyramid.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Funnel</Col><Col id=\"formurl\">pyramidChart::SimpleFunnel.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">nexacro.Rose Chart</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"name\">Basic</Col><Col id=\"formurl\">roseChart::RoseBase.xfdl</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">Stack</Col><Col id=\"formurl\">roseChart::RoseStack.xfdl</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divChart","0","50",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_positionstep("1");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","0","0",null,"71","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("별도 라이선스가 제공되는 nexacro17용 확장 차트 컴포넌트 입니다. Basic, Pie, Bubble 및 Radar, Gauge(지원예정) Chart를 제공합니다. Chart 메뉴를 선택하여 확인해 주세요.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnMove","0","0","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메뉴로 이동");
            obj.set_cssclass("btn_cp_popMenu");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdChartLilst","0","81",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"765\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"765\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktop",980,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("nexacro Chart");
                p.set_stepshowtype("always");
                p.set_stepitemsize("0");
                p.set_scrollbartype("autoindicator autoindicator");

                p.divChart.set_taborder("0");
                p.divChart.set_positionstep("1");
                p.divChart.set_async("false");
                p.divChart.set_maxheight("");
                p.divChart.move("0","50",null,null,"20","20");

                p.Static60.set_taborder("2");
                p.Static60.set_text("별도 라이선스가 제공되는 nexacro17용 확장 차트 컴포넌트 입니다. Basic, Pie, Bubble 및 Radar, Gauge(지원예정) Chart를 제공합니다. Chart 메뉴를 선택하여 확인해 주세요.");
                p.Static60.set_cssclass("sta_WF_box03");
                p.Static60.set_wordWrap("char");
                p.Static60.move("0","0",null,"71","20",null);

                p.btnMove.set_taborder("1");
                p.btnMove.set_text("메뉴로 이동");
                p.btnMove.set_cssclass("btn_cp_popMenu");
                p.btnMove.set_positionstep("1");
                p.btnMove.move("0","0","85","30",null,null);

                p.grdChartLilst.set_taborder("3");
                p.grdChartLilst.set_binddataset("dsMenu");
                p.grdChartLilst.set_autofittype("col");
                p.grdChartLilst.set_treeusecheckbox("false");
                p.grdChartLilst.set_treeinitstatus("expand,all");
                p.grdChartLilst.move("0","81",null,null,"20","20");
            	}
            );
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,1060,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static60.move("20","20",null,"140","20",null);

                p.divChart.set_positionstep("1");
                p.divChart.set_text("");
                p.divChart.move("20","90",null,null,"20","20");

                p.btnMove.set_positionstep("1");
                p.btnMove.move("20","20","140","50",null,null);

                p.grdChartLilst.move("20","180",null,null,"20","20");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacroChart.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    nexacroChart.xfdl
        *  @Creator     presales
        *  @CreateDate  2020/02/06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020/02/06          presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnOpenForm : 사용자 설정 이벤트
        * @param {String}  menuId	- 메뉴 ID
        * @param {String}  menuNm	- 메뉴명
        * @return : N/A
        * @example :
        */
        this.fnOpenForm = function (url)
        {
        	if (url == null || url == "")
        		return;

        	if (this.getStepCount() > 0) {
        		this.setStepIndex(1);
        	}

        	this.divChart.set_url(url);
        	this.divChart.form.addEventHandler("onclose", this.nexacroChart_onclose, this);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 버튼 click이벤트
        */
        this.btnMove_onclick = function(obj,e)
        {
        	this.setStepIndex(0);
        };

        /**
         * @description 그리드클릭
        */
        this.grdChartLilst_oncellclick = function(obj,e)
        {
        	var formurl = this.dsMenu.getColumn(e.row, "formurl");

        	this.fnOpenForm(formurl);
        };

        /**
         * @description 그리드클릭
        */
        this.nexacroChart_onclose = function(obj,e)
        {
        	e.stopPropagation();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnMove.addEventHandler("onclick",this.btnMove_onclick,this);
            this.grdChartLilst.addEventHandler("oncellclick",this.grdChartLilst_oncellclick,this);
        };

        this.loadIncludeScript("nexacroChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
