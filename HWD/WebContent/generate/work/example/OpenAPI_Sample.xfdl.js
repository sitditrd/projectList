(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OpenAPI_Sample");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJsonList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXmlList", this);
            obj._setContents("<ColumnInfo><Column id=\"CVR_KORNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnJsonCall","10","10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("JSON 대용량");
            this.addChild(obj.name, obj);

            obj = new Grid("grdJsonList","10","61","618","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsJsonList");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnXmlCall","650","10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("XML 파싱");
            this.addChild(obj.name, obj);

            obj = new Grid("grdXmlList","650","61","618","520",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsXmlList");
            obj.set_cellsizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CVR_KORNM\"/></Band><Band id=\"body\"><Cell text=\"bind:CVR_KORNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OpenAPI_Sample.xfdl", function() {
        // Button OnClick Event 처리
        this.fnComBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnJsonCall" : // JSON 대용량 처리
        			this.dsJsonList.clearData();

        			var sUrl = nexacro.getProjectPath() + "file/LageData.json";
        			this.ajax(sUrl,
        			{
        				dataType : "JSON",
        				callback: function(errorcode, response)
        				{
        					//trace(response.pectSlCrstList);
        					this.dsJsonList.loadJSON(response.pectSlCrstList);
        					this.grdJsonList.createFormat();
        				}
        			});
        			break;

        		case "btnXmlCall" : // XML 파싱 처리
        		    /* 버튼 클릭 시작 시간 - Start */
        			var sBtnStartTime = new nexacro.Date();
        			var sHours = sBtnStartTime.getHours();
        			var sMinutes = sBtnStartTime.getMinutes();
        			var sSeconds = sBtnStartTime.getSeconds();
        			var sMillSeconds = sBtnStartTime.getMilliseconds();
        			var sTime = String(sHours).padLeft(2, "0") + ":" + String(sMinutes).padLeft(2, "0") + ":" + String(sSeconds).padLeft(2, "0") + "." + String(sMillSeconds);

        			trace("버튼 클릭 시작 = " + sBtnStartTime + " >>> " + sTime);
        			/* 버튼 클릭 시작 시간 - End   */

        			var productCode = "PRODUCT";
        			var sUrl = nexacro.getProjectPath() + "file/상품정보.xml";
        			var productCode = "PRODUCT";

        			this.ajax(sUrl,
        			{
        				dataType : "XML",
        				callback: function(errorcode, response)
        				{
        					/* XML 조회 완료 시간 - Start */
        					var sXmlCompleteTime = this.gfnTime();
        					trace("XML 조회 완료 = " + sXmlCompleteTime);
        					/* XML 조회 완료 시간 - End   */

        					var productXml = response;
        					this.setProductInfo(productCode, productXml);

        					/* 그리드 표시 완료 시간 - Start */
        					var sGridCompleteTime = this.gfnTime();
        					trace("그리드 표시 완료 = " + sGridCompleteTime);
        					/* 그리드 표시 완료 시간 - End   */

        					/* 총 시간 시작 시간 */
        					var sEndDate = new nexacro.Date();
        					var sTemp = nexacro.round((sEndDate.getTime() - sBtnStartTime.getTime()) / 1000, 3);
        					trace("sTemp = " + sTemp);
        				}
        			});
        		break;
        	}
        };

        this.setProductInfo = function(productCode, productXml)
        {
        	//console.time("create ui");

        	ProductXmlProvider.addXmlDom(productCode, $(productXml)); // 상품전문 추가
        	ProductXmlProvider.setCurrentXmlDom(ProductXmlProvider.getXmlDom(productCode)); // 현재 상품전문 설정
        	console.log("===== 1. Coverage =====");

        	var $coverage = nxlib.getProductXml("CVRGE"); // (jQuery 식별자) 상품전문 find 결과 값 반환
        	//console.log($coverage);
        	//console.log($coverage.length);

         	this.dsXmlList.set_enableevent(false);
         	this.dsXmlList.clearData();

        	var i;
        	var $thisCov; // jQuery 식별자
        	var CVR_KORNM;
        	var nAddRow;

         	for (i = 0; i < $coverage.length; i++)
        	{
         		$thisCov = $coverage.eq(i); // 상품전문 find 결과값 중 해당 인덱스에 해당하는 요소를 선택
         		CVR_KORNM = $thisCov.attr("cvr_kornm");	// 담보명 값 가져오기

        		/* === Dataset 셋팅 Start === */
          		nAddRow = this.dsXmlList.addRow();
          		this.dsXmlList.setColumn(nAddRow, "CVR_KORNM", CVR_KORNM);
        		/* === Dataset 셋팅 End === */
        	}

         	this.dsXmlList.set_rowposition(0);
         	this.dsXmlList.set_enableevent(true);
         	this.resetScroll();

        	//console.timeEnd("create ui");

        	/* XML 파싱(Object화)완료 시간 - Start */
        	var sXmlParsingTime = this.gfnTime();
        	trace("XML 파싱(Object화)완료 = " + sXmlParsingTime);
        	/* XML 파싱(Object화)완료 시간 - End   */
        };

        /**
         * 해당 PC의 오늘 날짜+시간를 가져온다.
         * @return string
         */
        this.gfnTime = function()
        {
        	var sTime = "";
        	var objDate = new nexacro.Date();

        	var hh = objDate.getHours();
        	var mm = objDate.getMinutes();
        	var ss = objDate.getSeconds();
        	var ms = objDate.getMilliseconds();

        	sTime = String(hh).padLeft(2, "0") + ":" + String(mm).padLeft(2, "0") + ":" + String(ss).padLeft(2, "0") + "." + String(ms);
        	objDate = null;

        	return sTime;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnJsonCall.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnXmlCall.addEventHandler("onclick",this.fnComBtnOnClick,this);
        };

        this.loadIncludeScript("OpenAPI_Sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
