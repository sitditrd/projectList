(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Main");
            this.set_titletext("New Form");
            this.set_background("#f0eeed");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsXmlTime", this);
            obj._setContents("<ColumnInfo><Column id=\"Title\" type=\"STRING\" size=\"256\"/><Column id=\"Time\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Title\">버튼 클릭 시작 시간</Col><Col id=\"Time\">00:00:00.000</Col></Row><Row><Col id=\"Title\">XML조회완료 시간</Col><Col id=\"Time\">00:00:00.000</Col></Row><Row><Col id=\"Title\">XML파싱완료(Object화)시간</Col><Col id=\"Time\">00:00:00.000</Col></Row><Row><Col id=\"Title\">그리드 표시 완료 시간</Col><Col id=\"Time\">00:00:00.000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">버튼 클릭 시작시간</Col></Row><Row><Col id=\"Column0\">00:00:00.000</Col></Row><Row><Col id=\"Column0\">가입설계 화면 로드 완료 시간</Col></Row><Row><Col id=\"Column0\">00:00:00.000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXmlList", this);
            obj._setContents("<ColumnInfo><Column id=\"CVR_KORNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","0","100.00%","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_TF_topBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnMegaMenu","0","0","60","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_mainFloat");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","65","0","215","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_logoTop");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","10","80",null,null,"30","90",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bgWhite");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"120","24.22%",null,"47.50%","140",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_hwBox01");
            this.addChild(obj.name, obj);

            obj = new Button("btnXmlParsing","43","140","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("XML파싱");
            obj.set_cssclass("btn_WF_hwBtn01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"99","3",null,"45.47%","107",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_dashed");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","Static01:38","186","158","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("시간 측정 결과 View");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnMdiMenu","Static01:38","140","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가입설계(MDI)");
            obj.set_cssclass("btn_WF_hwBtn02");
            obj.getSetter("MenuId").set("1020");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenMenu","btnMdiMenu:3","140","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가입설계(새창)");
            obj.set_cssclass("btn_WF_hwBtn02");
            obj.getSetter("MenuUrl").set("Poc::hanwha01.xfdl");
            obj.getSetter("MenuId").set("1020");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","42","186","158","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시간 측정 결과 View");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20",null,null,"70","20","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Static04");
            obj.set_cssclass("sta_WF_mainBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_1010","16.33%",null,"12.50%","60",null,"24",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가입설계");
            obj.set_cssclass("btn_WF_mainBtn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_1080","btn_1010:1",null,"15.63%","60",null,"24",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("완전판매모니터링");
            obj.set_cssclass("btn_WF_mainBtn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2090","btn_1080:0",null,"13.13%","60",null,"24",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("증명서발급");
            obj.set_cssclass("btn_WF_mainBtn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_1110","btn_2090:0",null,"14.84%","60",null,"24",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("필요서류안내");
            obj.set_cssclass("btn_WF_mainBtn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2040","btn_1110:0",null,"14.84%","60",null,"24",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("지점/보상센터");
            obj.set_cssclass("btn_WF_mainBtn05");
            this.addChild(obj.name, obj);

            obj = new Grid("grdXmlTime","43","240","23.98%","240",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsXmlTime");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_hwGrd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\"/><Row size=\"36\" band=\"summ\"/></Rows><Band id=\"body\"><Cell text=\"bind:Title\" cssclass=\"grd_label\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:Time\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/></Band><Band id=\"summary\"><Cell text=\"총 소요시간\"/><Cell col=\"1\" text=\"expr:comp.parent.fvTotalTime\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdXmlList",null,"120","24.22%",null,"47.50%","140",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsXmlList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_hwGrd");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"담보명\"/></Band><Band id=\"body\"><Cell text=\"bind:CVR_KORNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","Static01:38","240","37.81%","240",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_hwGrd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band><Band id=\"summary\"><Cell/></Band></Format></Formats>");
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
        this.registerScript("Main.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    Frame > Main
        *  @FileName  Main.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.05
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.05      presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvTotalTime;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면로드 시 MegaMenu를 생성하고 애니메이션을 설정한다.
        */
        this.Main_onload = function(obj,e)
        {
        	nexacro._OnceCallbackTimer.callonce(this, function()
        	{
        		// 메인화면에 팝업 div를 생성해서 메가 메뉴를 보여준다.
        		this.gfnCreateMegaMenu(obj);

        		nexacro.getApplication().mainframe.VFrameSet.Top.set_formurl("frame::Top.xfdl");
        		nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet00.Tab.set_formurl("frame::Tab.xfdl");
        	}, 10);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.setProductInfo = function(productCode, productXml)
        {
        	//console.time("create ui");

        	ProductXmlProvider.addXmlDom(productCode, $(productXml)); // 상품전문 추가
        	ProductXmlProvider.setCurrentXmlDom(ProductXmlProvider.getXmlDom(productCode)); // 현재 상품전문 설정
        	//console.log("===== 1. Coverage =====");

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

        	return sXmlParsingTime;
        	//trace("XML 파싱(Object화)완료 = " + sXmlParsingTime);
        	/* XML 파싱(Object화)완료 시간 - End   */
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 팝업메뉴를 띄어준다.
        */
        /**
         * @description Botton OnClick 이벤트
        */
        this.fnComBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnMegaMenu" :
        			this.gfnOpenMegaMenu(this); // MegaMenu 호출
        			break;

        		case "btnXmlParsing" :
        		    /* 버튼 클릭 시작 시간 - Start */
        			var sBtnStartTime = new nexacro.Date();
        			var sHours = sBtnStartTime.getHours();
        			var sMinutes = sBtnStartTime.getMinutes();
        			var sSeconds = sBtnStartTime.getSeconds();
        			var sMillSeconds = sBtnStartTime.getMilliseconds();
        			var sTime = String(sHours).padLeft(2, "0") + ":" + String(sMinutes).padLeft(2, "0") + ":" + String(sSeconds).padLeft(2, "0") + "." + String(sMillSeconds);

        			//trace("버튼 클릭 시작 = " + sBtnStartTime + " >>> " + sTime);
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
        					//trace("XML 조회 완료 = " + sXmlCompleteTime);
        					/* XML 조회 완료 시간 - End   */

        					var productXml = response;
        					var sXmlParsingTimeRtn = this.setProductInfo(productCode, productXml);

        					/* 그리드 표시 완료 시간 - Start */
        					var sGridCompleteTime = this.gfnTime();
        					//trace("그리드 표시 완료 = " + sGridCompleteTime);
        					/* 그리드 표시 완료 시간 - End   */

        					/* 총 시간 시작 시간 */
        					var sEndDate = new nexacro.Date();
        					this.fvTotalTime = nexacro.round((sEndDate.getTime() - sBtnStartTime.getTime()) / 1000, 3);
        					//trace("this.fvTotalTime = " + this.fvTotalTime);

        					this.dsXmlTime.set_enableevent(false);
        					this.dsXmlTime.clearData();

        					this.dsXmlTime.addRow();
        					this.dsXmlTime.setColumn(0, "Title", "버튼 클릭 시작 시간");
        					this.dsXmlTime.setColumn(0, "Time", sTime);

        					this.dsXmlTime.addRow();
        					this.dsXmlTime.setColumn(1, "Title", "XML조회완료 시간");
        					this.dsXmlTime.setColumn(1, "Time", sXmlCompleteTime);

        					this.dsXmlTime.addRow();
        					this.dsXmlTime.setColumn(2, "Title", "XML파싱완료(Object화)시간");
        					this.dsXmlTime.setColumn(2, "Time", sXmlParsingTimeRtn);

        					this.dsXmlTime.addRow();
        					this.dsXmlTime.setColumn(3, "Title", "그리드 표시 완료 시간");
        					this.dsXmlTime.setColumn(3, "Time", sGridCompleteTime);
        					this.dsXmlTime.set_enableevent(true);
        					this.resetScroll();
        				}
        			});
        			break;
        		case "btnMdiMenu" :
        			this.fv_StartTime = this.gfn_CheckTime();
        			this.fv_EndTime;
        			this.fv_DiffTime;

        			var type = "Main"
        			this.Dataset02.setColumn(1, "Column0", this.gfnFormat(this.fv_StartTime))

        			this.gfnOpenMenu(this.btnMdiMenu.MenuId, type);
        			break;
        		case "btnOpenMenu" :
        			this.fv_StartTime = this.gfn_CheckTime();
        			this.fv_EndTime;
        			this.fv_DiffTime;

        			this.Dataset02.setColumn(1, "Column0", this.gfnFormat(this.fv_StartTime))

        			var strMenuId = this.btnOpenMenu.MenuId;
        			var strMenuUrl = this.btnOpenMenu.MenuUrl;

        			var strChildFrameName = "Menu_" + strMenuId;
        			var objParentFrame = nexacro.getApplication().mainframe.VFrameSet.Main;

        			var strArgument = {
        						  menuId : strMenuId
        						 ,menuUrl : strMenuUrl
        					  }

        			nexacro.open(strChildFrameName, "comm::commPopup.xfdl", objParentFrame, strArgument, null, -1, -1, 0, 0, this);
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Main_onload,this);
            this.Div01.form.btnMegaMenu.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnXmlParsing.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnMdiMenu.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnOpenMenu.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btn_1010.addEventHandler("onclick",this.QuickMenu_onclick,this);
            this.btn_1080.addEventHandler("onclick",this.QuickMenu_onclick,this);
            this.btn_2090.addEventHandler("onclick",this.QuickMenu_onclick,this);
            this.btn_1110.addEventHandler("onclick",this.QuickMenu_onclick,this);
            this.btn_2040.addEventHandler("onclick",this.QuickMenu_onclick,this);
        };

        this.loadIncludeScript("Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
