(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_2_3");
            this.set_titletext("데이터 통신 포맷 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inner_grid_scroll", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">default</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">topdisplay</Col><Col id=\"value\">상단</Col></Row><Row><Col id=\"code\">centerdisplay</Col><Col id=\"value\">중앙</Col></Row><Row><Col id=\"code\">topbottomdisplay</Col><Col id=\"value\">상단, 하단</Col></Row><Row><Col id=\"code\">topcenterbottomdisplay</Col><Col id=\"value\">상단, 중앙, 하단</Col></Row><Row><Col id=\"code\">trackbarfollow</Col><Col id=\"value\">스크롤 위치</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inner_grid_scrolldisplay", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">normal</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">page</Col><Col id=\"value\">페이지단위</Col></Row><Row><Col id=\"code\">line</Col><Col id=\"value\">Row,Column단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","8","8","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("3rd Party 연동");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","37",null,"53","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid silver");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"52","80","22","17",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Search");
            obj.set_cssclass("btn_WF_basic02");
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
            obj.set_readonly("true");
            var cmbRowCount_innerdataset = new nexacro.NormalDataset("cmbRowCount_innerdataset", obj);
            cmbRowCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000</Col></Row></Rows>");
            obj.set_innerdataset(cmbRowCount_innerdataset);
            obj.set_text("1000");
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

            obj = new Static("Static06","507","51","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("스크롤 모드");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","584","43","115","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_inner_grid_scrolldisplay");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_visible("false");
            obj.set_text("기본");
            obj.set_value("normal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"97","48","28","77",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회건수");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCount",null,"97","61","28","8",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("0건");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("stSearchTime",null,"97","60","28","289",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"97","120","28","357",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("서버/네트워크 시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRenderTime",null,"97","44","28","141",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"97","88","28","193",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("초, 렌더링시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDataType","82","100","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoDataType_innerdataset = new nexacro.NormalDataset("rdoDataType_innerdataset", obj);
            rdoDataType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">XML  </Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">SSV  </Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">JSON</Col></Row></Rows>");
            obj.set_innerdataset(rdoDataType_innerdataset);
            obj.set_text("SSV");
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","8","100","66","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("데이터타입");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SM","8","130",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
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
        this.addIncludeScript("PoC_2_3.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("PoC_2_3.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("PoC_2_3.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 입력관리_샘플
        * 03. 화면설명 : 데이터조회
        * 04. 작성일   : 2019.09.04
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
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;
        this.executeIncludeScript("lib::ext_CommEco.xjs"); /*include "lib::ext_CommEco.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.work004_onload = function(obj,e)
        {
        	//alert(system.navigatorname); //Edge일때는 IE를 찍는 이슈가 있어서 브라우저타입에 따른 분기처리가 되지 않음.
        	//alert(nexacro._BrowserType); //Chrome일때는 webKit을 찍고 나머지는 올바른 타입에 버전까지 출력

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

        	if (this.parent.parent.parent.name=="divWork")
        	{
        		this.parent.parent.parent.parent.gfnCheckFormRanderTime();
        	}
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

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

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_Search = function()
        {
        	var type = "";

        	this.dsOutput.clearData();

        	if(this.cmbRowCount.value == "All")
        	{
        		type = "전체";
        	}

        	var sId = "SEARCH";

        	//트랜잭션 시 전송되는 데이터 형태(SSV, XML, JSON)
        	var type = this.rdoDataType.value;

        	if(type == 0 || type == 2)
        	{
        		var sUrl = "http://14.63.224.112/Hwenc/service/pocSearch.jsp?rowcount=" + this.cmbRowCount.value + "&datatype=" + this.rdoDataType.value;
        	}
        	else if(type == 4)
        	{
        		var sUrl = "JSONAdp://14.63.224.112/Hwenc/service/pocSearch.jsp?rowcount=" + this.cmbRowCount.value + "&datatype=" + this.rdoDataType.value;
        	}

        	var sInDs = "";
        	var sOutDs = "dsOutput=output";
        	var sParam = "";
        	var sCallback = "fn_Callback";

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
        			this.grd_SM.set_binddataset("dsOutput");
        			this.grd_SM.createFormat();

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
        	}
        };

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.grd_SM.set_fastvscrolltype(obj.value);
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

        	this.grd_SM.set_scrolldisplaymode(obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.cmbRowCount.addEventHandler("onitemchanged",this.cmbRowCount_onitemchanged,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio01_onitemchanged,this);
            this.grd_SM.addEventHandler("onheadclick",this.grd_SM_onheadclick,this);
        };

        this.loadIncludeScript("PoC_2_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
