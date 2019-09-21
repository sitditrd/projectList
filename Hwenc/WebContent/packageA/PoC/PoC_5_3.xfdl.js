(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_5_3");
            this.set_titletext("스크롤 페이징");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data0", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data1", this);
            obj._setContents("<ColumnInfo><Column id=\"RM\" type=\"bigdecimal\" size=\"22\"/><Column id=\"COLUMN1\" type=\"string\" size=\"500\"/><Column id=\"COLUMN2\" type=\"string\" size=\"500\"/><Column id=\"COLUMN3\" type=\"string\" size=\"500\"/><Column id=\"COLUMN4\" type=\"string\" size=\"500\"/><Column id=\"COLUMN5\" type=\"string\" size=\"500\"/><Column id=\"COLUMN6\" type=\"string\" size=\"500\"/><Column id=\"COLUMN7\" type=\"string\" size=\"500\"/><Column id=\"COLUMN8\" type=\"string\" size=\"500\"/><Column id=\"COLUMN9\" type=\"string\" size=\"500\"/><Column id=\"COLUMN10\" type=\"string\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","8","58",null,null,"8","7",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_data1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"RM\"/><Cell col=\"1\" text=\"COLUMN1\"/><Cell col=\"2\" text=\"COLUMN2\"/><Cell col=\"3\" text=\"COLUMN3\"/><Cell col=\"4\" text=\"COLUMN4\"/><Cell col=\"5\" text=\"COLUMN5\"/><Cell col=\"6\" text=\"COLUMN6\"/><Cell col=\"7\" text=\"COLUMN7\"/><Cell col=\"8\" text=\"COLUMN8\"/><Cell col=\"9\" text=\"COLUMN9\"/><Cell col=\"10\" text=\"COLUMN10\"/></Band><Band id=\"body\"><Cell text=\"bind:RM\"/><Cell col=\"1\" text=\"bind:COLUMN1\"/><Cell col=\"2\" text=\"bind:COLUMN2\"/><Cell col=\"3\" text=\"bind:COLUMN3\"/><Cell col=\"4\" text=\"bind:COLUMN4\"/><Cell col=\"5\" text=\"bind:COLUMN5\"/><Cell col=\"6\" text=\"bind:COLUMN6\"/><Cell col=\"7\" text=\"bind:COLUMN7\"/><Cell col=\"8\" text=\"bind:COLUMN8\"/><Cell col=\"9\" text=\"bind:COLUMN9\"/><Cell col=\"10\" text=\"bind:COLUMN10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("성능 확인");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",950,780,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PoC_5_3.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 스크롤 페이징 처리
        * 03. 화면설명 : 스크롤 페이징 처리
        * 04. 작성일   : 2019.09.05
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


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.fv_nTotCount = 0; //전체레코드수
        this.currentPage = 1; //현재페이지
        this.blockCount = 1000; //블록카운트
        this.endidx=0;

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.PoC_5_3_onload = function(obj,e)
        {
        	this.transaction
        	(
        		"scrollpaging",
        		//"http://localhost/Hwenc/service/commPaging_back.jsp",
        		"http://localhost/Hwenc/service/commScrollPaging.jsp",
        		"",
        		//"ds_data1=output",
        		"ds_data1=dsOutput",
        		"currentPage='"+ this.currentPage +"' blockCount='"+ this.blockCount +"'",
        		"fn_callback"
        	);


        // 		var sId = "scrollpaging";
        // 		var sUrl = "http://localhost:8080/sicorp/service/commPaging.jsp";
        // 		var sInDs = "";
        // 		var sOutDs = "ds_data1=dsOutput";
        // 		var sParam = "currentPage='"+ this.currentPage +"' blockCount='"+ this.blockCount +"'";
        // 		var sCallback = "fn_Callback";
        //
        // 		this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        //ds_data1을 ds_data0에 appendData 시킨다.
        this.fn_FirsTran = function()
        {
        	this.endidx += this.ds_data1.rowcount;
        	this.ds_data0.appendData(this.ds_data1);
        	this.ds_data1.clearData();

        	this.Grid00.set_binddataset("ds_data0");
        	this.Grid00.createFormat();

        	this.currentPage += 1; //페이지의 number를 1씩 증가시키어 전역변수로 선언한 blockCount갯수 만큼 서버로부터 Dataset를 받아온다.
        }


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_callback = function(id, nErrorCode, sErrMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert("nErrorCode : " + nErrorCode + ": ErrorMessage : " + sErrMsg);
        	}
        	else
        	{
        		if(id == "scrollpaging")
        		{
        			this.fn_FirsTran();
        			this.fv_nTotCount = nexacro.getApplication().totalRecord; //전체레코드수 지정.
        		}
        		else if(id == "onvscrollPaging")
        		{
        			this.endidx += this.ds_data1.rowcount;
        			this.ds_data0.appendData(this.ds_data1);
        			this.ds_data1.clearData();
        			this.Grid00.createFormat();
        			this.currentPage += 1;
        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.Grid00_onvscroll = function(obj, e)
        {
        	if(obj.vscrollbar.max == e.pos)
        	{
        		if(this.fv_nTotCount == this.ds_data0.rowcount)
        		{
        			alert("Dataset Size Limit!!");
        			return;
        		}

        		this.transaction(
        			"onvscrollPaging",
        			//"http://localhost/Hwenc/service/commPaging_back.jsp",
        			"http://localhost/Hwenc/service/commScrollPaging.jsp",
        			"",
        			//"ds_data1=output",
        			"ds_data1=dsOutput",
        			"currentPage='"+ this.currentPage +"' blockCount='"+ this.blockCount +"'",
        			"fn_callback"
        		);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PoC_5_3_onload,this);
            this.Grid00.addEventHandler("onvscroll",this.Grid00_onvscroll,this);
        };

        this.loadIncludeScript("PoC_5_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
