(function(){return function(){if(!this._is_form){return;}var obj=null;this.on_create=function(){this.set_name("rMateChart2");this.set_titletext("rChart연동");this.set_scrollbartype("autoindicator autoindicator");if(Form==this.constructor){this._setFormPosition(980,850);}obj=new Dataset("dsList",this);obj.getSetter("firefirstcount").set("0");obj.getSetter("firenextcount").set("0");obj.set_useclientlayout("false");obj.set_updatecontrol("true");obj.set_enableevent("true");obj.set_loadkeymode("keep");obj.set_loadfiltermode("keep");obj.set_reversesubsum("false");obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"20\"/><Column id=\"Profit\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Cost\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Revenue\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Profit\">900</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Profit\">1500</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Profit\">1900</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Profit\">1800</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Profit\">2500</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Profit\">3000</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Profit\">2100</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Profit\">1700</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row></Rows>");this.addChild(obj.name,obj);obj=new WebBrowser("WebBrowser00","10","140",null,"403","20",null,null,null,null,null,this);obj.set_taborder("0");this.addChild(obj.name,obj);obj=new Grid("grdList","10","550",null,"280","20",null,null,null,null,null,this);obj.set_taborder("0");obj.set_binddataset("dsList");obj.set_autofittype("col");obj.set_autoenter("select");obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"Month\"/><Cell col=\"1\" text=\"Profit\"/><Cell col=\"2\" text=\"Cost\"/><Cell col=\"3\" text=\"Revenue\"/></Band><Band id=\"body\"><Cell text=\"bind:Month\"/><Cell col=\"1\" text=\"bind:Profit\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:Cost\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:Revenue\" edittype=\"normal\" editinputtype=\"number\"/></Band></Format></Formats>");this.addChild(obj.name,obj);obj=new Static("Static36","0","0",null,"96","20",null,null,null,null,null,this);obj.set_taborder("1");obj.set_text("rChart는 데스크탑 및 모바일용 웹차트 컴포넌트입니다.\r\nIE, 크롬, 파이어폭스, 사파리 등의 브라우저에서 사용이 가능합니다.(IE7, 8 에서도 사용 가능)\r\n넥사크로 플랫폼과 연동하여 다양한 화면을 구성할 수 있으며, Grid의 데이터 수정을 통하여 확인할 수 있습니다.");obj.set_cssclass("sta_WF_box03");obj.set_wordWrap("char");this.addChild(obj.name,obj);obj=new Combo("cmbType","0","103","150","30",null,null,null,null,null,null,this);obj.set_taborder("2");obj.set_codecolumn("codecolumn");obj.set_datacolumn("datacolumn");var cmbType_innerdataset=new nexacro.NormalDataset("cmbType_innerdataset",obj);cmbType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Bar</Col><Col id=\"datacolumn\">Bar</Col></Row><Row><Col id=\"codecolumn\">Line</Col><Col id=\"datacolumn\">Line</Col></Row><Row><Col id=\"codecolumn\">Combination</Col><Col id=\"datacolumn\">Combination</Col></Row></Rows>");obj.set_innerdataset(cmbType_innerdataset);obj.set_text("Bar");obj.set_value("Bar");obj.set_index("0");this.addChild(obj.name,obj);obj=new Layout("default","desktop",980,850,this,function(p){var rootobj=p;p=rootobj;p.set_titletext("rChart연동");p.set_scrollbartype("autoindicator autoindicator");p.WebBrowser00.set_taborder("0");p.WebBrowser00.move("10","140",null,"403","20",null);p.grdList.set_taborder("0");p.grdList.set_binddataset("dsList");p.grdList.set_autofittype("col");p.grdList.set_autoenter("select");p.grdList.move("10","550",null,"280","20",null);p.Static36.set_taborder("1");p.Static36.set_text("rChart는 데스크탑 및 모바일용 웹차트 컴포넌트입니다.\r\nIE, 크롬, 파이어폭스, 사파리 등의 브라우저에서 사용이 가능합니다.(IE7, 8 에서도 사용 가능)\r\n넥사크로 플랫폼과 연동하여 다양한 화면을 구성할 수 있으며, Grid의 데이터 수정을 통하여 확인할 수 있습니다.");p.Static36.set_cssclass("sta_WF_box03");p.Static36.set_wordWrap("char");p.Static36.move("0","0",null,"96","20",null);p.cmbType.set_taborder("2");p.cmbType.set_innerdataset(cmbType_innerdataset);p.cmbType.set_codecolumn("codecolumn");p.cmbType.set_datacolumn("datacolumn");p.cmbType.set_text("Bar");p.cmbType.set_value("Bar");p.cmbType.set_index("0");p.cmbType.move("0","103","150","30",null,null);});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);obj=new Layout("Layout0","",480,1080,this,function(p){var rootobj=p;p=rootobj;p.WebBrowser00.move("20","280",null,"403","20",null);p.grdList.move("10","710",null,null,"20","30");p.cmbType.move("20","213","240","50",null,null);p.Static36.move("20","20",null,"170","20",null);});obj.set_mobileorientation("landscape");this.addLayout(obj.name,obj);};this.loadPreloadList=function(){};this.addIncludeScript("rMateChart2.xfdl","lib::rMateChartH5.xjs");this.addIncludeScript("rMateChart2.xfdl","lib::rMateChartH5License.xjs");this.registerScript("rMateChart2.xfdl",function(){this.executeIncludeScript("lib::rMateChartH5.xjs");this.executeIncludeScript("lib::rMateChartH5License.xjs");this.layoutBarStr='\
<rMateChart backgroundColor="0xFFFFFF" borderStyle="none" cornerRadius="5">\
	<Options>\
		<Caption text="Annual Report"/>\
		<DataEditor showOnInit="true"  useCloseButton="false" reverseRow="true" textAlign="right"/>\
	</Options>\
	<Column3DChart showDataTips="true">\
		/* \
			dataTipJsFunction : Column3DChart 시리즈에 마우스 오버될 때 실행되는 Javascript함수로 \
			html파일과 Form 내에 정의한 Javascript함수로 데이터를 보낸 후 Javascript 에서 반환되는 값을 Tooltip에 보여줍니다. \
			** HTML5모드만을 사용할 경우 dataTipFunc를 window.NEXACROWEBBROWSER.parent.dataTipFunc 로 주시면 이 Form의 dataTipFunc가 실행됩니다. \
		*/ \
		<horizontalAxis>\
			<CategoryAxis categoryField="Month" displayName="날짜"/>\
		</horizontalAxis>\
		<verticalAxis>\
			<LinearAxis displayName="금액"/>\
		</verticalAxis>\
		<series>\
			<Column3DSeries id="series1" yField="Profit" displayName="Profit">\
				<showDataEffect>\
					<SeriesInterpolate/>\
				</showDataEffect>\
			</Column3DSeries>\
			<Column3DSeries id="series2" yField="Cost" displayName="Cost">\
				<showDataEffect>\
					<SeriesInterpolate/>\
				</showDataEffect>\
			</Column3DSeries>\
			<Column3DSeries id="series3" yField="Revenue" displayName="Revenue">\
				<showDataEffect>\
					<SeriesInterpolate/>\
				</showDataEffect>\
			</Column3DSeries>\
		</series>\
	</Column3DChart>\
</rMateChart>\
';this.layoutLineStr='\
<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">\
	<Options>\
		<Caption text="Annual Report" />\
		<SubCaption text="( mm )" textAlign="right" />\
		<Legend />\
	</Options>\
	<NumberFormatter id="numFmt" precision="0"/>\
	<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">\
		<horizontalAxis>\
			<CategoryAxis categoryField="Month"/>\
		</horizontalAxis>\
		<verticalAxis>\
			<LinearAxis interval="500"/>\
		</verticalAxis>\
		<series>\
			<Line2DSeries yField="Profit" displayName="Profit" radius="6" fill="#ffffff" itemRenderer="DiamondItemRenderer">\
				<showDataEffect>\
					<SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
			</Line2DSeries>\
			<Line2DSeries yField="Cost" displayName="Cost" radius="6" fill="#ffffff" itemRenderer="CircleItemRenderer">\
				<showDataEffect>\
					<SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
			</Line2DSeries>\
			<Line2DSeries yField="Revenue" displayName="Revenue" radius="6" fill="#ffffff" itemRenderer="TriangleItemRenderer">\
				<showDataEffect>\
					<SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
			</Line2DSeries>\
		</series>\
		<annotationElements>\
			<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>\
		</annotationElements>\
	</Line2DChart>\
</rMateChart>\
';this.layoutCombStr='\
<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
    <Options>\
        <Caption text="Annual Report"/>\
    </Options>\
    <NumberFormatter id="numFmt" useThousandsSeparator="true"/>\
    <Combination2DChart showDataTips="true">\
        <horizontalAxis>\
            <CategoryAxis categoryField="Month" padding="0.7"/>\
        </horizontalAxis>\
        <verticalAxis>\
            <LinearAxis id="vAxis1" formatter="{numFmt}" interval="500"/>\
        </verticalAxis>\
        <series>\
            <Column2DSet type="clustered">\
                <series>\
                    <Column2DSeries yField="Profit" displayName="Profit" labelPosition="outside" showValueLabels="[0]">\
                        <fill>\
                            <SolidColor color="#40b2e6"/>\
                        </fill>\
                        <showDataEffect>\
                            <SeriesInterpolate/>\
                        </showDataEffect>\
                    </Column2DSeries>\
                    <Column2DSeries yField="Cost" displayName="Cost" labelPosition="outside" showValueLabels="[0]">\
                        <fill>\
                            <SolidColor color="#4453a8"/>\
                        </fill>\
                        <showDataEffect>\
                            <SeriesInterpolate/>\
                        </showDataEffect>\
                    </Column2DSeries>\
                </series>\
            </Column2DSet>\
            <Line2DSeries selectable="true" yField="Revenue" radius="4.5" form="curve" displayName="Revenue" itemRenderer="CircleItemRenderer">\
                <stroke>\
                    <Stroke color="#f9bd03" weight="3"/>\
                </stroke>\
                <lineStroke>\
                    <Stroke color="#f9bd03" weight="3"/>\
                </lineStroke>\
                <showDataEffect>\
                    <SeriesInterpolate/>\
                </showDataEffect>\
            </Line2DSeries>\
        </series>\
        <verticalAxisRenderers>\
            <Axis2DRenderer axis="{vAxis1}" showLine="false"/>\
        </verticalAxisRenderers>\
    </Combination2DChart>\
</rMateChart>\
';this.rMateChart2_onload=function(obj,e){var webRoot=nexacro.getApplication().gvWebUrl;var htmlUrl=webRoot+"/rChart/rChartSample.html";var scriptRootUrl=webRoot+"/rChart/rMateChartH5";this.rMateChartCreate(this.WebBrowser00,scriptRootUrl,htmlUrl,this.makeChartVars());};this.makeChartVars=function(){var chartVars="";var rMateOnLoadCallFunction="rMateChartOnLoad";chartVars+="rMateOnLoadCallFunction="+rMateOnLoadCallFunction;return chartVars;};this.rMateChartOnLoad=function(){this.rMateChartSetLayout(this.WebBrowser00,this.layoutBarStr);this.rMateChartSetData(this.WebBrowser00,this.rMateChartDataSetToXml(this.dsList));};this.dsList_oncolumnchanged=function(obj,e){this.rMateChartSetData(this.WebBrowser00,this.rMateChartDataSetToXmlWithColumn(this.dsList,"Month,Profit,Cost,Revenue"));};this.cmbType_onitemchanged=function(obj,e){var chartLayout;if(e.postvalue=="Bar"){chartLayout=this.layoutBarStr;}else if(e.postvalue=="Line"){chartLayout=this.layoutLineStr;}else if(e.postvalue=="Combination"){chartLayout=this.layoutCombStr;}this.rMateChartSetLayout(this.WebBrowser00,chartLayout);};});this.on_initEvent=function(){this.addEventHandler("onload",this.rMateChart2_onload,this);this.cmbType.addEventHandler("onitemchanged",this.cmbType_onitemchanged,this);this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);};this.loadIncludeScript("rMateChart2.xfdl");this.loadPreloadList();obj=null;};})();