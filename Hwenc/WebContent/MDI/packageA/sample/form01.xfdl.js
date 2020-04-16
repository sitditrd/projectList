(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form01");
            this.set_titletext("기본샘플(조회,입력,저장,삭제)");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"int\" size=\"4\"/><Column id=\"HIT_COUNT\" type=\"int\" size=\"4\"/><Column id=\"COMMUNITY_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_DATE\" type=\"datetime\" size=\"17\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"CONTENTS\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"100\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"searchKeyword\"/><Col id=\"searchCondition\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","57",null,null,"0","44",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("no").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"POST_ID\"/><Cell col=\"1\" text=\"TITLE\"/><Cell col=\"2\" text=\"CONTENTS\"/><Cell col=\"3\" text=\"REG_DATE\"/></Band><Band id=\"body\"><Cell text=\"bind:POST_ID\"/><Cell col=\"1\" text=\"bind:TITLE\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:CONTENTS\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:REG_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"39","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","40","21","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKeyword","155","7","157","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","10","10","64","16",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCondition","86","7","67","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboCondition_innerdataset = new nexacro.NormalDataset("divSearch_form_cboCondition_innerdataset", obj);
            divSearch_form_cboCondition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">TITLE</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">CONTENTS</Col><Col id=\"datacolumn\">내용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboCondition_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnAdd","0",null,"65","29",null,"6",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","72",null,"65","29",null,"6",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","144",null,"65","29",null,"6",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("form01.xfdl", function() {

        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			trace(this.dsList.saveXML());
        			break;

        		case "save":
        			// 저장 되었습니다.
        			this.gfnAlert("msg.save.success");
        			break;
        	}
        };

        /**
         * @description 조회
        */
        this.fnSearch = function ()
        {
        	// 조회조건 설정
         	this.dsSearch.setColumn(0, "searchCondition", this.divSearch.form.cboCondition.value);
        	this.dsSearch.setColumn(0, "searchKeyword"  , this.divSearch.form.edtKeyword.value);

         	var strSvcId    = "search";
        	var strSvcUrl   = "svcurl::selectDataListMap.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=output1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.transaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        					strSvcUrl , 	// trabsaction을 요청할 주소
        					inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        					callBackFnc, 	// transaction의 결과를 받을 Function 이름
        					isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
         * @description 입력
        */
        this.fnAdd = function()
        {
        	this.dsList.addRow();
        };

        /**
         * @description 삭제
        */
        this.fnDel = function()
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        /**
         * @description 저장
        */
        this.fnSave = function()
        {
        // 	// 변경사항 체크
        // 	if (this.gfnDsIsUpdated(this.dsList) == false) {
        // 		alert("변경된 내역이 없습니다.");
        // 		return;
        // 	}

        	var strSvcUrl   = "svcurl::updateDataListMap.do";
        	var inData      = "input1=dsList:U";
        	var outData     = "";

        	this.transaction("save", strSvcUrl, inData, outData);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnSearch,this);
            this.btnAdd.addEventHandler("onclick",this.fnAdd,this);
            this.btnDel.addEventHandler("onclick",this.fnDel,this);
            this.btnSave.addEventHandler("onclick",this.fnSave,this);
        };

        this.loadIncludeScript("form01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
