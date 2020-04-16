(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DynamicColRow");
            this.set_titletext("New Form");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data1</Col><Col id=\"Column2\">DataA</Col><Col id=\"Column3\">12345</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Data2</Col><Col id=\"Column2\">DataB</Col><Col id=\"Column3\">67890</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Data3</Col><Col id=\"Column2\">DataC</Col><Col id=\"Column3\">12345</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">Data4</Col><Col id=\"Column2\">DataD</Col><Col id=\"Column3\">67890</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">Data5</Col><Col id=\"Column2\">DataE</Col><Col id=\"Column3\">12345</Col><Col id=\"Column4\">가A나B다C</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60","0","0",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("넥사크로 플랫폼은 Dataset Mehod 통해 행/열 삽입, 삭제를 쉽게 할 수 있습니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","103",null,"270","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaOutputMsg","0","383",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("[ ================= OytPut Msg ================= ]");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","20.41%","61","7.96%","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삽입");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","37.35%","61","7.96%","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoOption","0","51","200","52",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("rdo_basic01");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoOption_innerdataset = new nexacro.NormalDataset("rdoOption_innerdataset", obj);
            rdoOption_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AddRow</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">InsertRow</Col></Row></Rows>");
            obj.set_innerdataset(rdoOption_innerdataset);
            obj.set_text("AddRow");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","28.88%","61","7.96%","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DynamicColRow.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    Components.xfdl
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
        this.fvMsg;
        this.fvMsgCnt = 0;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.DynamicColRow_onload = function(obj,e)
        {
        	this.fvMsg = this.txaOutputMsg.value + "\n";
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
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description Button OnClick Event
        */
        this.fnComBtnOnClick = function(obj,e)
        {
        	var sOptionType = this.rdoOption.text;
        	var nRowPos;

        	switch (obj.name)
        	{
        		case "btnAdd" :
        			if (sOptionType == "AddRow") {
        				this.fvMsgCnt ++;

        				this.dsList.addRow();

        				this.fvMsg += " ========== " + this.fvMsgCnt +  " ========== " + "\n";
        				this.fvMsg += "> Evnet Object Id : " + obj.id + "\n";
        				this.fvMsg += "> Object Text : " + obj.text + "\n";
        				this.fvMsg += "> Action Type : " + this.rdoOption.text + "\n";
        				this.fvMsg += "> 추가 Row Index : " + nexacro.toNumber(this.dsList.rowposition + 1) + "\n";
        			} else {
        				nRowPos = this.dsList.rowposition;
        				this.dsList.insertRow(nRowPos);

        				this.fvMsg += "> Evnet Object Id : " + obj.id + "\n";
        				this.fvMsg += " > Object Text : " + obj.text + "\n";
        				this.fvMsg += "> Action Type : " + this.rdoOption.text + "\n";
        				this.fvMsg += "> 추가 Row Index : " + nexacro.toNumber(nRowPos + 1) + "\n";
        			}

        			this.txaOutputMsg.set_value(this.fvMsg);
        			break;

        		case "btnDelete" :
        			var nRowPos = this.dsList.rowposition;

        			this.dsList.deleteRow(nRowPos);

        			this.fvMsg += "> Evnet Object Id : " + obj.id + "\n";
        			this.fvMsg += " > Object Text : " + obj.text + "\n";
        			this.fvMsg += "> 삭제 Row Index : " + nexacro.toNumber(nRowPos + 1) + "\n";

        			this.txaOutputMsg.set_value(this.fvMsg);
        			break;

        		case "btnInit" :
        			this.dsList.reset();
        			this.resetScroll();
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DynamicColRow_onload,this);
            this.btnAdd.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnDelete.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnInit.addEventHandler("onclick",this.fnComBtnOnClick,this);
        };

        this.loadIncludeScript("DynamicColRow.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
