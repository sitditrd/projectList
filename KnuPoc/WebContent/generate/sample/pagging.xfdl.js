(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pagging");
            this.set_titletext("페이징처리");
            this.set_cssclass("form_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","15","152",null,null,"15","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_bg");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","150",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10",null,null,"30","10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("sample::pagging_comm.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stTotal",null,"110","160","30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("total count : 0");
            obj.set_textAlign("right");
            obj.set_padding("0px 5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","15","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("페이징 처리");
            obj.set_cssclass("sta_WF_title01");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","50",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_box02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"45","45","0","1",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_search01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","13","8","75","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("게시물 수");
            obj.set_positionstep("0");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_symbolBkBlue");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCount","98","8","100","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cbo_rowCount_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo_rowCount_innerdataset", obj);
            divSearch_form_cbo_rowCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo_rowCount_innerdataset);
            obj.set_text("25");
            obj.set_value("25");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","208","8","60","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,691,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::pagging_comm.xfdl");
        };
        
        // User Script
        this.registerScript("pagging.xfdl", function() {
        this.pageBlockCount = 0;
        this.totRowCount = 0;
        this.firstRowNum = 1;
        this.pageRowCount = 0;

        this.paging_onload = function(obj,e)
        {
        	if (this.parent.parent.parent.name=="divWork") {
        		this.parent.parent.parent.parent.gfnCheckFormRanderTime();
        	}

        	/*
        	페이징 처리 값 세팅 함수 호출
        	 1. 페이지 개수
        	 2. 페이징 처리 할 그리드
        	 3. 현재 화면에서의 그리드 위치

        	 data 조회 후 처리 함수 호출
        	 */
        	 //페이지갯수, 총계및 페이징 이동 활성화 여부,한번에 출력될 row 갯수
        	 this.pageRowCount = this.divSearch.form.cbo_rowCount.value;
        	 this.Div00.form.fn_initPageSet(10, true, this.pageRowCount);
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.pageRowCount = this.divSearch.form.cbo_rowCount.value;
        	this.Div00.form.iUnitSelRowNo = this.divSearch.form.cbo_rowCount.value;
        	this.Div00.form.iStartPageNo  = 1;
        	this.Div00.form.iNowPageNo  = 1;

        	// iNowPageNo
        	this.fn_searchPaging(this.firstRowNum, this.pageRowCount);
        };

        // 페이징
        this.fn_searchPaging = function(nPageNo, nRowCnt)
        {
        	this.Dataset00.clearData();

        	// 페이징처리 transaction
        	// 페이지 no갑과 row갯수를 받음
        	var sId 		= "PAGE";
        	var sUrl 		= "http://14.63.224.112/KnuPoc/service/page_sample.jsp";
        	var sInDs 		= "";
        	var sOutDs 		= "Dataset00=output";
        	var sParam 		= "PageNo=" + nPageNo + " rowCount=" + nRowCnt;
        	var sCallback 	= "fnCallback";

        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);
        };

        this.fnCallback = function(a, b, c)
        {
        	// 전체페이지개수(block),  전체조회건수(row)
        	if (a == "PAGE") {
        		this.stTotal.set_text("total count : " + this.totRowCount);

        		var exRtn = new Array(this.pageBlockCount,this.totRowCount);
        		this.Div00.form.fn_callAfter(exRtn);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.paging_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };

        this.loadIncludeScript("pagging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
