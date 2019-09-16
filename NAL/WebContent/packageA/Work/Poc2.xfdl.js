(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work004");
            this.set_titletext("대용량데이터처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj.set_progressload("false");
            obj._setContents("<ColumnInfo><Column id=\"VOLUME_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"VOLUME_PUBLISHER\" type=\"STRING\" size=\"256\"/><Column id=\"VOLUME_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ART_STATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"ART_SELECTION_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"KINX_ART_BIB_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ART_STATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DL_HANDOVER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOURNAL_KIND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ISSN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CALL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOLUME_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inner_grid_scroll", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">default</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">topdisplay</Col><Col id=\"value\">상단</Col></Row><Row><Col id=\"code\">centerdisplay</Col><Col id=\"value\">중앙</Col></Row><Row><Col id=\"code\">topbottomdisplay</Col><Col id=\"value\">상단, 하단</Col></Row><Row><Col id=\"code\">topcenterbottomdisplay</Col><Col id=\"value\">상단, 중앙, 하단</Col></Row><Row><Col id=\"code\">trackbarfollow</Col><Col id=\"value\">스크롤 위치</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inner_grid_scrolldisplay", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">normal</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">page</Col><Col id=\"value\">페이지단위</Col></Row><Row><Col id=\"code\">line</Col><Col id=\"value\">Row,Column단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("ExcelExportObject", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_IM","8","130",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"250\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/><Column size=\"229\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"권호⁯ID\"/><Cell col=\"2\" text=\"권호서명\"/><Cell col=\"3\" text=\"권호발행처\"/><Cell col=\"4\" text=\"권호_통권_명\"/><Cell col=\"5\" text=\"발행일\"/><Cell col=\"6\" text=\"색인여부\"/><Cell col=\"7\" text=\"구분상태\"/><Cell col=\"8\" text=\"기사선정수\"/><Cell col=\"9\" text=\"기사수\"/><Cell col=\"10\" text=\"색인상태일\"/><Cell col=\"11\" text=\"전자지원여부\"/><Cell col=\"12\" text=\"구축일자\"/><Cell col=\"13\" text=\"학술지종류\"/><Cell col=\"14\" text=\"자료유형\"/><Cell col=\"15\" text=\"간행빈도\"/><Cell col=\"16\" text=\"입수\"/><Cell col=\"17\" text=\"주기사항\"/><Cell col=\"18\" text=\"ISSN\"/><Cell col=\"19\" text=\"제어번호\"/><Cell col=\"20\" text=\"청구기호\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:VOLUME_ID\"/><Cell col=\"2\" text=\"bind:VOLUME_TITLE\"/><Cell col=\"3\" text=\"bind:VOLUME_PUBLISHER\"/><Cell col=\"4\" text=\"bind:VOLUME_NAME\"/><Cell col=\"5\" text=\"bind:PUB_DATE\"/><Cell col=\"6\" text=\"bind:ART_STATE_NAME\"/><Cell col=\"7\" text=\"bind:REASON\"/><Cell col=\"8\" text=\"bind:ART_SELECTION_CNT\"/><Cell col=\"9\" text=\"bind:KINX_ART_BIB_CNT\"/><Cell col=\"10\" text=\"bind:ART_STATE_DATE\"/><Cell col=\"11\" text=\"bind:ER_YN\"/><Cell col=\"12\" text=\"bind:DL_HANDOVER_DT\"/><Cell col=\"13\" text=\"bind:JOURNAL_KIND_NAME\"/><Cell col=\"14\" text=\"bind:DATA_TYPE_NAME\"/><Cell col=\"15\" text=\"bind:TERM_NAME\"/><Cell col=\"16\" text=\"bind:ACQ_CNT\"/><Cell col=\"17\" text=\"bind:REMARK\"/><Cell col=\"18\" text=\"bind:ISSN\"/><Cell col=\"19\" text=\"bind:CONTROL_NO\"/><Cell col=\"20\" text=\"bind:CALL_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8","0","710","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대용량 데이터처리");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","37",null,"53","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid silver");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"52","80","22","12",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search01");
            obj.set_text("Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","17","51","48","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회건수");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTemp",null,"10","90","20","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_format("###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRowCount","73","51","96","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmbRowCount_innerdataset = new nexacro.NormalDataset("cmbRowCount_innerdataset", obj);
            cmbRowCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000</Col></Row><Row><Col id=\"codecolumn\">2000</Col><Col id=\"datacolumn\">2,000</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000</Col></Row><Row><Col id=\"codecolumn\">100000</Col><Col id=\"datacolumn\">100,000</Col></Row><Row><Col id=\"codecolumn\">200000</Col><Col id=\"datacolumn\">200,000</Col></Row><Row><Col id=\"codecolumn\">800000</Col><Col id=\"datacolumn\">800,000</Col></Row><Row><Col id=\"codecolumn\">1000000</Col><Col id=\"datacolumn\">1,000,000</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(cmbRowCount_innerdataset);
            obj.set_text("1,000");
            obj.set_value("1000");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","177","51","87","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Fast스크롤 기능");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","272","41","227","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_inner_grid_scroll");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_columncount("2");
            obj.set_rowcount("3");
            obj.set_text("기본");
            obj.set_value("default");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","115","10","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel","203","10","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Excel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","507","51","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("스크롤 모드");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","584","43","115","46",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_inner_grid_scrolldisplay");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_visible("false");
            obj.set_text("기본");
            obj.set_value("normal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"97","48","28","77",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("조회건수");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCount",null,"97","61","28","8",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("0건");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stSearchTime",null,"97","52","28","297",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"97","120","28","357",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("서버/네트워크 시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRenderTime",null,"97","44","28","141",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static09",null,"97","88","28","193",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("초, 렌더링시간");
            obj.set_textAlign("right");
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
        this.addIncludeScript("Poc2.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("Poc2.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("Poc2.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("Poc2.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 입력관리_샘플
        * 03. 화면설명 : 대용량조회
        * 04. 작성일   : 2019.03.07
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.work004_onload = function(obj,e)
        {
        	//this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용

        	//alert(system.navigatorname); //Edge일때는 IE를 찍는 이슈가 있어서 브라우저타입에 따른 분기처리가 되지 않음.

        	//alert(nexacro._BrowserType); //Chrome일때는 webKit을 찍고 나머지는 올바른 타입에 버전까지 출력

        	if(system.navigatorname != "nexacro")
        	{
        		if (navigator.userAgent.match(/Trident\/.*rv\:(.+?)[\);]/)) //IE
        		{
        			this.Static06.set_visible(true);
        			this.Radio01.set_visible(true);

        			this.Radio01_onitemchanged(this.Radio01);
        		}
        		else if (navigator.userAgent.match(/Edge/)) //Edge
        		{

        		}
        		else if (navigator.userAgent.match(/Chrome|CriOS/)) //Chrome
        		{

        		}
        	}

        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        //Excel Export
        this.fn_export = function(grid)
        {
        	this.ExcelExportObject.clear();

        	var sFileNm = "ExcelExportFile";
        	var constExportItemType = nexacro.ExportItemTypes.GRID;
        	var varExportSource = grid;
        	var strRange = "Sheet1!A1";
        	var strExportHead = "allband";
        	var strExportSelect = "allrecord";
        	var strExportMerge = "suppress";
        	var strExportValue = "allstyle";
        	var strExportImage = "none";
        	var strExceptStyle = "";
        	var strExportSize = "both";
        	//var strAcceptStyle = "cellline";

        	var ret = this.ExcelExportObject.addExportItem(constExportItemType, varExportSource, strRange, strExportHead, strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize);
        	this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL);
        	this.ExcelExportObject.set_exportfilename(sFileNm);
        	//this.ExcelExportObject.set_exporturl("http://localhost/NAL/XExportImport");
        	this.ExcelExportObject.set_exporturl("http://14.63.224.112/NAL/XExportImport");
        	this.ExcelExportObject.exportData();
        }

        this.ExcelImportObject_onsuccess = function(obj, e)
        {
        	this.alert("Excel Import Success !!");
        };

        this.ExcelImportObject_onerror = function(obj, e)
        {
        	this.alert( "Excel Import Error Type:["+ e.errortype + "] Error Msg:["+e.errormsg+"]");
        };

        /*********************************************************************
         * 함 수 명 	: gfn_CheckTime
         * 함수설명 	: 현재의 시간을 return 한다.
         * 입    력 	: 없음
         * 결    과 	: 현재의 시간을 return 한다.
         *********************************************************************/
        this.gfn_CheckTime = function()
        {
        	var objDate = new Date();
        	var strTime  = this.gfn_Right("0" + objDate.getHours(), 2);
        		strTime += this.gfn_Right("0" + objDate.getMinutes(), 2);
        		strTime += this.gfn_Right("0" + objDate.getSeconds(), 2);
        		strTime += this.gfn_Right("0" + objDate.getMilliseconds(), 3);

        	return strTime;
        }

        /*********************************************************************
         * 함 수 명 	: gfn_Right
         * 함수설명 	: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         * 입    력 	: strString	- 대상 문자열
         *			  	  nSize		- 얻어올 크기. [Default Value = 0]
         * 결    과 	: 오른쪽 부분이 얻어진 문자열.
         *********************************************************************/
        this.gfn_Right = function(strString, nSize)
        {
            var nStart 	= String(strString).length;
            var nEnd 	= Number(nStart) - Number(nSize);
            var rtnVal 	= strString.substring(nStart, nEnd);

            return rtnVal;
        }

        /*******************************************************************************
         * 함 수 명 	: gfn_diffTime
         * 함수설명 	: 두 시간간의 차이 계산
         * 입    력 	: sStartTime(HHmmss형태의 From 시간) 	( 예 : "033025" )
         *              : sEndTime(HHmmss형태의 To 시간) 		( 예 : "034025" )
         *              : sType(구하고자하는 타입(시, 분, 초)) ( 예 : "HH" )
         * 결    과 	: integer
        ******************************************************************************/
        this.gfn_diffTime = function(sStartTime, sEndTime, sType)
        {
        	this.nFrom_HH = parseInt(sStartTime.substring(0, 2));
        	this.nFrom_mm = parseInt(sStartTime.substring(2, 4));
        	this.nFrom_ss = parseInt(sStartTime.substring(4, 6));
        	this.nFrom_ms = parseInt(sStartTime.substring(6, 9));

        	this.nTo_HH = parseInt(sEndTime.substring(0, 2));
        	this.nTo_mm = parseInt(sEndTime.substring(2, 4));
        	this.nTo_ss = parseInt(sEndTime.substring(4, 6));
        	this.nTo_ms = parseInt(sEndTime.substring(6, 9)) + 200;
        	this.nFromTotal_ss = (this.nFrom_HH * 3600) + (this.nFrom_mm * 60) + this.nFrom_ss + (this.nFrom_ms * 0.001);
        	this.nToTotal_ss   = (this.nTo_HH * 3600) + (this.nTo_mm * 60) + this.nTo_ss + (this.nTo_ms * 0.001);

        	if (sType == "HH") {
        		return (Math.floor((this.nToTotal_ss - this.nFromTotal_ss) / 3600000));
        	} else if (sType == "mm") {
        		return (Math.floor((this.nToTotal_ss - this.nFromTotal_ss) / 60000));
        	} else if (sType == "ss") {
        		return (parseFloat(this.nToTotal_ss) - parseFloat(this.nFromTotal_ss)).toString().substr(0, 5);
        	}
        }

        /************************************************************************************************
        * 공통 function
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : gfn_IsNull
         * Desc   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Param : {Val} 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return : {boolean}  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true 이외의 경우 = false
         ************************************************************************************************/
        this.gfn_IsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") {
        		return true;
        	}

        	if (Val == null) {
        		return true;
        	}

        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) {
        		return true;
        	}

        	if (Val.length == 0) {
        		return true;
        	}

        	return false;
        }

        /************************************************************************************************
         * Even   : gfn_IsEmpty
         * Desc   : value의 빈값 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} empty 여부
         ************************************************************************************************/
        this.gfn_IsEmpty = function(value)
        {
        	// null, undefined ==> true
        	if (value === null || value === undefined) return true;

        	// String, Array ==> length == 0
        	if (this.gfn_IsString(value) || this.gfn_IsArray(value))
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if (this.gfn_IsObject(value))
        	{
        		for (var p in value)
        		{
        			if (value.hasOwnProperty(p)) {
        				return false;
        			}
        		}

        		return true;
        	}

        	return false;
        }

        /*******************************************************************************************
        	FUNCTION	: gfnGridSortClear(objGrid)
        	DESCRIPTION	: Grid Sort를 없애줌
        	PARAMETERS	:
        		- objGrid	: 대상 Grid
        	RETURN		:
        *******************************************************************************************/
        this.gfnGridDataClear = function(objGrid)
        {
        	if(!this.gfnIsEmpty(objGrid))
        	{
        		var objDataset = this.objects[objGrid.binddataset];
        		objDataset.set_enableevent(false);
        		objDataset.clearData();
        		objDataset.set_enableevent(true);
        	}
        }
        /*******************************************************************************************
        	FUNCTION	: gfnGridSortClear(objGrid)
        	DESCRIPTION	: Grid Sort를 없애줌
        	PARAMETERS	:
        		- objGrid	: 대상 Grid
        	RETURN		:
        *******************************************************************************************/
        this.gfnGridSortClear = function(objGrid)
        {
        	if(!this.gfnIsEmpty(objGrid))
        	{
        		var nCellCnt = objGrid.getCellCount("head");
        		var objDataset = this.objects[objGrid.binddataset];
        		for ( var i=0 ; i<nCellCnt ; i++ )
        		{
        			objDataset.keystring.current = "";
        			this.gfnClearGridSortMark(objGrid, i);
        			//objGrid.setCellProperty("head", i, "class", "");
        		}
        	}
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_Search = function()
        {
        	this.dsOutput.clearData();

        	var sId = "SEARCH";
        	//var sUrl = "http://localhost/NAL/Service/Service_SSV_ZIP_inQuery2.jsp?rowcount=" + this.cmbRowCount.value + "&type=" + this.cmbRowCount.value;
        	var sUrl = "http://14.63.224.112/NAL/Service/Service_SSV_inQuery2.jsp?rowcount=" + this.cmbRowCount.value + "&type=" + this.cmbRowCount.value;
        	var sInDs = "";
        	var sOutDs = "dsOutput=output";
        	var sParam = "";
        	var sCallback = "fn_Callback";

        	//this.fv_StartTime = this.gfn_CheckTime();

        	this.starttime = new Date();

        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);
        }

        this.fn_Callback = function(sId, nErrorCd, sErrorMsg, elapsedTime)
        {
        	if (nErrorCd < 0)
        	{
        		alert("[" + nErrorCd + "]" + sErrorMsg);
        	}
        	else
        	{
        		if (sId == "SEARCH")
        		{
        			//this.gfnGridSortClear(this.grd_SM);

        // 			this.fv_EndTime = this.gfn_CheckTime();
        // 			var nDiffTime = this.gfn_diffTime(this.fv_StartTime, this.fv_EndTime, "ss");

        			this.endtime = new Date();
        			var totaltime = nexacro.round((this.endtime - this.starttime) / 1000, 3);

        			this.stSearchTime.set_text(elapsedTime + "초");
        			this.stRenderTime.set_text(nexacro.round(totaltime - elapsedTime, 3) + "초");

        			var nRowCount = this.dsOutput.rowcount;
        			var sRowCount;

        			this.mskTemp.set_value(nRowCount);

        			sRowCount = this.mskTemp.text;

        			this.stRowCount.set_text(sRowCount + "건");
        		}
        		else if (sId == "SAVE")
        		{
        			alert("저장 완료");
        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :
        			this.fn_Search();
        			break;
        		case "btn_Add" :
        			var nRow = this.dsOutput.insertRow(500);
        			this.dsOutput.set_rowposition(100);

        			//this.Grid00.mergeContentsCell("body",0,3,0,4,3,true);
        			break;
        		case "btn_Excel" :
        			this.fn_export(this.grd_IM);
        			break;
        	}
        };

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.grd_IM.set_fastvscrolltype(obj.value);
        };

        this.Radio01_onitemchanged = function(obj,e)
        {
        	if(obj.value == "page")
        	{
        		this.Radio00.set_value("default");
        		this.Radio00_onitemchanged(this.Radio00);
        		this.Radio00.set_enable(false);
        	}
        	else if(obj.value == "line")
        	{
        		this.Radio00.set_value("default");
        		this.Radio00_onitemchanged(this.Radio00);
        		this.Radio00.set_enable(false);
        	}
        	else if(obj.value == "normal")
        	{
        		this.Radio00.set_enable(true);
        	}

        	this.grd_IM.set_scrolldisplaymode(obj.value);
        };

        this.dsOutput_onload = function(obj,e)
        {
        	trace(e.eventid + " : " + e.reason);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.work004_onload,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.cmbRowCount.addEventHandler("onitemchanged",this.cmbRowCount_onitemchanged,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.btn_Add.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Excel.addEventHandler("onclick",this.comm_Click,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio01_onitemchanged,this);
            this.dsOutput.addEventHandler("onload",this.dsOutput_onload,this);
        };

        this.loadIncludeScript("Poc2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
