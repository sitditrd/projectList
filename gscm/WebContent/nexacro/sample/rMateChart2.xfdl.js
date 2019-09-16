(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rMateChart2");
            this.set_titletext("rChart연동");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"20\"/><Column id=\"Profit\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Cost\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Revenue\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Profit\">900</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Profit\">1500</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Profit\">1900</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Profit\">1800</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Profit\">2500</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Profit\">3000</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Profit\">2100</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Profit\">1700</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Jan</Col><Col id=\"Profit\">900</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Profit\">1500</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Profit\">1900</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Profit\">1800</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Profit\">2500</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Profit\">3000</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Profit\">2100</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Profit\">1700</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","10","10",null,"328","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","10","347",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Month\"/><Cell col=\"1\" text=\"Profit\"/><Cell col=\"2\" text=\"Cost\"/><Cell col=\"3\" text=\"Revenue\"/></Band><Band id=\"body\"><Cell text=\"bind:Month\"/><Cell col=\"1\" text=\"bind:Profit\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:Cost\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Revenue\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,691,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("rMateChart2.xfdl","lib::rMateChartH5.xjs");
        this.addIncludeScript("rMateChart2.xfdl","lib::rMateChartH5License.xjs");
        this.registerScript("rMateChart2.xfdl", function() {
        this.executeIncludeScript("lib::rMateChartH5.xjs"); /*include "lib::rMateChartH5.xjs"*/;
        this.executeIncludeScript("lib::rMateChartH5License.xjs"); /*include "lib::rMateChartH5License.xjs"*/;

        this.layoutStr = '\
<rMateChart backgroundColor="0xFFFFFF" borderStyle="none" cornerRadius="5">\
	<Options>\
		<Caption text="Annual Report"/>\
		<DataEditor showOnInit="true"  useCloseButton="false" editorHeight="94" reverseRow="true" textAlign="right"/>\
	</Options>\
	<Column3DChart showDataTips="true" dataTipJsFunction="dataTipFunc">\
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
';

        this.rMateChart2_onload = function(obj,e)
        {
        	//var webRoot = nexacro.getApplication().gvWebRootURL;
        	var webRoot = "http://14.63.224.112/gscm/service";
        	var htmlUrl = webRoot + "/rChart/rChartSample.html"; // 차트를 그릴 html의 url
        	var scriptRootUrl = webRoot + "/rChart/rMateChartH5"; // rMateChartH5의 assets과 js가 저장된 url (이 디렉토리의 아래에 JS/ 와 Assets/ 디렉토리가 있어야 함)

        	// Form이 완선된 후 차트를 생성합니다.
        	this.rMateChartCreate(this.WebBrowser00, scriptRootUrl, htmlUrl, this.makeChartVars());
        };

        this.makeChartVars = function()
        {
        	var chartVars = "";

        	var rMateOnLoadCallFunction = "rMateChartOnLoad";
        	chartVars += "rMateOnLoadCallFunction="+rMateOnLoadCallFunction;

        	return chartVars;
        };

        this.rMateChartOnLoad = function()
        {
        	this.rMateChartSetLayout(this.WebBrowser00, this.layoutStr);
        	this.rMateChartSetData(this.WebBrowser00, this.rMateChartDataSetToXml(this.dsList));
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	this.rMateChartSetData(this.WebBrowser00, this.rMateChartDataSetToXmlWithColumn(this.dsList, "Month,Profit,Cost,Revenue"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rMateChart2_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };

        this.loadIncludeScript("rMateChart2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
