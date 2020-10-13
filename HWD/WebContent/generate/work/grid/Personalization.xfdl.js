(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Personalization");
            this.set_titletext("개인화기능");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_keystring("S:Column8");
            obj._setContents("<ColumnInfo><Column id=\"Chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column3\">3000</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">10</Col><Col id=\"Column9\">3000</Col><Col id=\"Column8\">A</Col><Col id=\"Column0\">이승환</Col><Col id=\"Column2\">인천시 서구 가좌동 118</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120101</Col><Col id=\"Column11\">3000</Col></Row><Row><Col id=\"Column3\">4000</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">10</Col><Col id=\"Column9\">4000</Col><Col id=\"Column8\">A</Col><Col id=\"Column0\">이승한</Col><Col id=\"Column2\">경기도 시흥시 정왕동 104 (2가)</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120201</Col><Col id=\"Column11\">4000</Col></Row><Row><Col id=\"Column3\">50000</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">10</Col><Col id=\"Column9\">50000</Col><Col id=\"Column8\">B</Col><Col id=\"Column0\">이철우</Col><Col id=\"Column2\">경기도 이천시 관고동 501-7</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120601</Col><Col id=\"Column11\">50000</Col></Row><Row><Col id=\"Column3\">51651</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">10</Col><Col id=\"Column9\">51651</Col><Col id=\"Column8\">B</Col><Col id=\"Column0\">강순희</Col><Col id=\"Column2\">서울특별시 영등포구 여의도동 1</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120931</Col><Col id=\"Column11\">51651</Col></Row><Row><Col id=\"Column3\">216548</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">12</Col><Col id=\"Column9\">216548</Col><Col id=\"Column8\">C</Col><Col id=\"Column0\">배재현</Col><Col id=\"Column2\">서울특별시 강서구 화곡동 98-252</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20121005</Col><Col id=\"Column11\">216548</Col></Row><Row><Col id=\"Column3\">216218</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">15</Col><Col id=\"Column9\">216218</Col><Col id=\"Column8\">A</Col><Col id=\"Column0\">강공작</Col><Col id=\"Column2\">서울특별시 강동구 명일동 257</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20121111</Col><Col id=\"Column11\">216218</Col></Row><Row><Col id=\"Column3\">954561</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">12</Col><Col id=\"Column9\">954561</Col><Col id=\"Column8\">A</Col><Col id=\"Column0\">김명기</Col><Col id=\"Column2\">서울특별시 강서구 등촌동 631-6</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120101</Col><Col id=\"Column11\">954561</Col></Row><Row><Col id=\"Column3\">2121684</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">13</Col><Col id=\"Column9\">2121684</Col><Col id=\"Column8\">D</Col><Col id=\"Column0\">변길용</Col><Col id=\"Column2\">경기도 광명시 옥길동 370</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120201</Col><Col id=\"Column11\">2121684</Col></Row><Row><Col id=\"Column3\">6549845</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">14</Col><Col id=\"Column9\">6549845</Col><Col id=\"Column8\">D</Col><Col id=\"Column0\">설동옥</Col><Col id=\"Column2\">서울특별시 영등포구 신길동 116-15 지하</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120601</Col><Col id=\"Column11\">6549845</Col></Row><Row><Col id=\"Column3\">65150</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">19</Col><Col id=\"Column9\">65150</Col><Col id=\"Column8\">F</Col><Col id=\"Column0\">허승조</Col><Col id=\"Column2\">서울특별시 성북구 돈암동 636</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column10\">20120931</Col><Col id=\"Column11\">65150</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">배재현</Col><Col id=\"Column2\">서울특별시 강서구 화곡동 98-252</Col><Col id=\"Column3\">216548</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">12</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">C</Col><Col id=\"Column9\">216548</Col><Col id=\"Column10\">20121005</Col><Col id=\"Column11\">216548</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">강공작</Col><Col id=\"Column2\">서울특별시 강동구 명일동 257</Col><Col id=\"Column3\">216218</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">15</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">A</Col><Col id=\"Column9\">216218</Col><Col id=\"Column10\">20121111</Col><Col id=\"Column11\">216218</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">김명기</Col><Col id=\"Column2\">서울특별시 강서구 등촌동 631-6</Col><Col id=\"Column3\">954561</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">12</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">A</Col><Col id=\"Column9\">954561</Col><Col id=\"Column10\">20120101</Col><Col id=\"Column11\">954561</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">변길용</Col><Col id=\"Column2\">경기도 광명시 옥길동 370</Col><Col id=\"Column3\">2121684</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">13</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">D</Col><Col id=\"Column9\">2121684</Col><Col id=\"Column10\">20120201</Col><Col id=\"Column11\">2121684</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">강공작</Col><Col id=\"Column2\">서울특별시 강동구 명일동 257</Col><Col id=\"Column3\">216218</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">15</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">A</Col><Col id=\"Column9\">216218</Col><Col id=\"Column10\">20121111</Col><Col id=\"Column11\">216218</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">김명기</Col><Col id=\"Column2\">서울특별시 강서구 등촌동 631-6</Col><Col id=\"Column3\">954561</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">12</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">A</Col><Col id=\"Column9\">954561</Col><Col id=\"Column10\">20120101</Col><Col id=\"Column11\">954561</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">변길용</Col><Col id=\"Column2\">경기도 광명시 옥길동 370</Col><Col id=\"Column3\">2121684</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">13</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">D</Col><Col id=\"Column9\">2121684</Col><Col id=\"Column10\">20120201</Col><Col id=\"Column11\">2121684</Col></Row><Row><Col id=\"Chk\"/><Col id=\"Column0\">설동옥</Col><Col id=\"Column2\">서울특별시 영등포구 신길동 116-15 지하</Col><Col id=\"Column3\">6549845</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">14</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Column8\">D</Col><Col id=\"Column9\">6549845</Col><Col id=\"Column10\">20120601</Col><Col id=\"Column11\">6549845</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"119","98","30","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("현재포맷저장");
            obj.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Grid("grdListUnique","0","156",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_cellMove");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"54\"/><Column size=\"116\"/><Column size=\"237\"/><Column size=\"99\"/><Column size=\"109\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" displaytype=\"normal\" text=\"책정비용\"/><Cell col=\"5\" text=\"생성일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Chk\"/><Cell col=\"1\" editfilter=\"upper\" text=\"bind:Column8\" editlimit=\"1\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Column9\" mask=\"#,###\" textAlign=\"right\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:Column4\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"119","99","30","126",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그리드 초기화");
            obj.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","0","0",null,"96","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid Header Column을 Drag&Drop 으로 위치를 변경 후 현재포맷을 저장하면 변경 된 포맷 정보가 유지되는 것을 확인할 수 있습니다.\r\n그리드 초기화를 실행하였을 경우 Grid 포맷을 초기값으로 되돌려 줍니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
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
        this.registerScript("Personalization.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    grid > Personalization
        *  @FileName  Personalization.xfdl
        *  @Creator  presales
        *  @CreateDate  2019.10.14
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.06      presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.chkFlag = "0";

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description Form onload
        */
        this.Personalization_onload = function (obj, e)
        {
        	this.grd_orgFormat = this.grdListUnique.getFormatString();

        	var formatString = nexacro.getPrivateProfile("grid_format");

        	if (!this.gfnIsNull(formatString)) {
        		this.grdListUnique.set_formats(formatString);
        	}
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
        /**
         * 그리드 전체 선택
         * @param {Grid} objGrid 해당 grid
         */
        this.fnBlockChk = function (objGrid)
        {
        	var i;
        	var objDs = eval("this." + objGrid.binddataset);

        	for (i = 0; i <= objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "Chk", "1");
        	}

        	objGrid.setCellProperty("Head", 0, "text", "1");
        };

        /**
         * 그리드 전체 해제
         * @param {Grid} objGrid 해당 grid
         */
        this.fnBlockUnChk = function (objGrid)
        {
        	var i;
        	var objDs = eval("this." + objGrid.binddataset);

        	for (var i = 0; i <= objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "Chk", 0);
        	}

        	objGrid.setCellProperty("Head", 0, "text", "0");
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description onclick
        */
        this.btnSave_onclick = function(obj,e)
        {
        	var formatString = this.grdListUnique.getCurFormatString();
        	nexacro.setPrivateProfile("grid_format", formatString);
        	alert("그리드 포맷 저장완료");
        };

        /**
         * @description onclick
        */
        this.btnInit_onclick = function (obj, e)
        {
        	this.grdListUnique.set_formats(this.grd_orgFormat);

        	var g_format = nexacro.setPrivateProfile("grid_format", "");

        	alert("그리드 초기화 및 포맷저장완료");
        };

        /**
         * @description onheadclick
        */
        this.grdListUnique_onheadclick = function (obj, e)
        {
        	if (e.col == 0)
        	{
        		if (this.chkFlag == "1") {
        			this.fnBlockUnChk(obj);
        			this.chkFlag = "0";
        		} else {
        			this.fnBlockChk(obj);
        			this.chkFlag = "1";
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Personalization_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdListUnique.addEventHandler("onheadclick",this.grdListUnique_onheadclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
        };

        this.loadIncludeScript("Personalization.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();