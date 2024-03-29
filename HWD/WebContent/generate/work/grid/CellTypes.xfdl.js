(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CellTypes");
            this.set_titletext("다양한그리드표현");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,1190);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A1</Col><Col id=\"Column1\">A1</Col></Row><Row><Col id=\"Column0\">B2</Col><Col id=\"Column1\">B2</Col></Row><Row><Col id=\"Column1\">C3</Col><Col id=\"Column0\">C3</Col></Row><Row><Col id=\"Column1\">D4</Col><Col id=\"Column0\">D4</Col></Row><Row><Col id=\"Column1\">E5</Col><Col id=\"Column0\">E5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column2\">8508301</Col><Col id=\"Column1\">God 소속 손호영 입니다.</Col><Col id=\"Column3\">20170101</Col><Col id=\"Column4\">E5</Col><Col id=\"Column6\">8508300</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column2\">8303301</Col><Col id=\"Column1\">God 소속 윤계상 입니다.</Col><Col id=\"Column3\">20170202</Col><Col id=\"Column4\">D4</Col><Col id=\"Column6\">8303300</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column2\">8902022</Col><Col id=\"Column1\">영화배우 김사랑 입니다.</Col><Col id=\"Column3\">20170303</Col><Col id=\"Column4\">C3</Col><Col id=\"Column6\">8902020</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column2\">9201012</Col><Col id=\"Column1\">영화배우 손예진 입니다.</Col><Col id=\"Column3\">20170404</Col><Col id=\"Column4\">A1</Col><Col id=\"Column6\">9201010</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column2\">8702022</Col><Col id=\"Column1\">영화배우 송지효 입니다.</Col><Col id=\"Column3\">20170505</Col><Col id=\"Column4\">C3</Col><Col id=\"Column6\">8702020</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column2\">8801012</Col><Col id=\"Column1\">에이핑크 소속 정은지 입니다.</Col><Col id=\"Column3\">20170606</Col><Col id=\"Column4\">C3</Col><Col id=\"Column6\">8801010</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column2\">9008301</Col><Col id=\"Column1\">하이라이트 소속 윤두준 입니다.</Col><Col id=\"Column3\">20170707</Col><Col id=\"Column4\">D4</Col><Col id=\"Column6\">9008300</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column2\">9103301</Col><Col id=\"Column1\">블락비 소속 박경 입니다.</Col><Col id=\"Column3\">20170808</Col><Col id=\"Column4\">D4</Col><Col id=\"Column6\">9103300</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column2\">9205052</Col><Col id=\"Column1\">AOA 소속 설현 입니다.</Col><Col id=\"Column3\">20170909</Col><Col id=\"Column4\">A1</Col><Col id=\"Column6\">9205050</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column2\">9208302</Col><Col id=\"Column1\">에이핑크 소속 손나은 입니다.</Col><Col id=\"Column3\">20171010</Col><Col id=\"Column4\">B2</Col><Col id=\"Column6\">9208300</Col><Col id=\"Column0\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_keystring("S:Column8");
            obj._setContents("<ColumnInfo><Column id=\"Chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column3\">3000</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">10</Col><Col id=\"Column8\">A</Col><Col id=\"Column0\">이승환</Col><Col id=\"Column2\">인천시 서구 가좌동 118</Col><Col id=\"Column6\">/</Col><Col id=\"Column7\"/><Col id=\"Chk\">0</Col></Row><Row><Col id=\"Column3\">4000</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">10</Col><Col id=\"Column8\">A</Col><Col id=\"Column0\">이승한</Col><Col id=\"Column2\">경기도 시흥시 정왕동 104 (2가)</Col><Col id=\"Column6\">*</Col><Col id=\"Column7\"/><Col id=\"Chk\">0</Col></Row><Row><Col id=\"Column3\">50000</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">10</Col><Col id=\"Column8\">B</Col><Col id=\"Column0\">이철우</Col><Col id=\"Column2\">경기도 이천시 관고동 501-7</Col><Col id=\"Column6\">+</Col><Col id=\"Column7\"/><Col id=\"Chk\">0</Col></Row><Row><Col id=\"Column3\">51651</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">10</Col><Col id=\"Column8\">B</Col><Col id=\"Column0\">강순희</Col><Col id=\"Column2\">서울특별시 영등포구 여의도동 1</Col><Col id=\"Column6\">-</Col><Col id=\"Column7\"/><Col id=\"Chk\">0</Col></Row><Row><Col id=\"Column3\">216548</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">10</Col><Col id=\"Column8\">C</Col><Col id=\"Column0\">배재현</Col><Col id=\"Column2\">서울특별시 강서구 화곡동 98-252</Col><Col id=\"Column6\">%</Col><Col id=\"Column7\"/><Col id=\"Chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01","0","99","421","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("다양한 셀표현");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02","0","staTitle01:8",null,"355","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_black");
            obj.set_autoenter("select");
            obj.set_formatid("default");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"125\"/><Column size=\"95\"/><Column size=\"105\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"105\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"checkbox\"/><Cell col=\"1\" text=\"text\"/><Cell col=\"2\" text=\"mask\"/><Cell col=\"3\" text=\"date\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"button\"/><Cell col=\"6\" text=\"masknumber\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\" controlautosizingtype=\"none\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column1\" editdisplay=\"display\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"mask\" edittype=\"mask\" text=\"bind:Column2\" mask=\"###{####}\" editautoselect=\"true\" verticalAlign=\"middle\" maskeditformat=\"###{####}\" maskeditlimitbymask=\"decimal\" maskedittype=\"string\"/><Cell col=\"3\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column3\" editautoselect=\"true\" calendardisplay=\"display\" textAlign=\"left\" verticalAlign=\"middle\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column4\" editautoselect=\"true\" combodataset=\"dsCombo\" combocodecol=\"Column1\" combodatacol=\"Column1\" combodisplayrowcount=\"-1\" combodisplay=\"display\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"버튼\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"textarea\" text=\"bind:Column6\" mask=\"9,999.99\" editautoselect=\"true\" editdisplay=\"display\" editlimitbymask=\"both\" textAlign=\"right\" verticalAlign=\"middle\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"88\"/><Column size=\"160\"/><Column size=\"95\"/><Column size=\"165\"/><Column size=\"145\"/><Column size=\"85\"/><Column size=\"105\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"checkbox\"/><Cell col=\"1\" text=\"text\"/><Cell col=\"2\" text=\"mask\"/><Cell col=\"3\" text=\"date\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"button\"/><Cell col=\"6\" text=\"masknumber\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\" controlautosizingtype=\"none\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column1\" editautoselect=\"true\" editdisplay=\"display\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"mask\" edittype=\"mask\" text=\"bind:Column2\" mask=\"###{####}\" editautoselect=\"true\" verticalAlign=\"middle\" maskeditformat=\"###{####}\" maskeditlimitbymask=\"decimal\" maskedittype=\"string\"/><Cell col=\"3\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column3\" editautoselect=\"true\" calendardisplay=\"display\" textAlign=\"left\" verticalAlign=\"middle\" calendardateformat=\"yyyy-MM-dd\" calendarpopuptype=\"system\" calendarautoselect=\"true\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column4\" editautoselect=\"true\" combodataset=\"dsCombo\" combocodecol=\"Column1\" combodatacol=\"Column1\" combodisplayrowcount=\"-1\" combodisplay=\"display\" textAlign=\"center\" verticalAlign=\"middle\" combopopuptype=\"center\" combopopupsize=\"350\" comboitemheight=\"100\" comboautoselect=\"true\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"버튼\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"textarea\" text=\"bind:Column6\" mask=\"9,999.99\" editautoselect=\"true\" editdisplay=\"display\" editlimitbymask=\"both\" textAlign=\"right\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","grdList02:18","421","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("멀티 라인");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","0","548",null,"387","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"54\"/><Column size=\"116\"/><Column size=\"99\"/><Column size=\"109\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"그룹\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" displaytype=\"normal\" text=\"책정비용\"/><Cell col=\"5\" text=\"생성일\"/><Cell row=\"1\" colspan=\"6\" text=\"주소\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Chk\"/><Cell col=\"1\" text=\"bind:Column7\"/><Cell col=\"2\" edittype=\"normal\" editfilter=\"upper\" text=\"bind:Column8\" editlimit=\"1\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:Column3\" mask=\"#,###\" textAlign=\"right\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column4\"/><Cell row=\"1\" colspan=\"6\" text=\"bind:Column2\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"54\"/><Column size=\"116\"/><Column size=\"99\"/><Column size=\"109\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"그룹\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" displaytype=\"normal\" text=\"책정비용\"/><Cell col=\"5\" text=\"생성일\"/><Cell row=\"1\" colspan=\"6\" text=\"주소\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Chk\"/><Cell col=\"1\" text=\"bind:Column7\"/><Cell col=\"2\" edittype=\"normal\" editfilter=\"upper\" text=\"bind:Column8\" editlimit=\"1\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:Column3\" mask=\"#,###\" textAlign=\"right\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column4\"/><Cell row=\"1\" colspan=\"6\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","grdList01:13","421","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Expression");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList00","0","staTitle03:8",null,"195","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cssclass("grd_black");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"108\"/><Column size=\"53\"/><Column size=\"58\"/><Column size=\"99\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"설정금액\"/><Cell col=\"1\" text=\"연산자\"/><Cell col=\"2\" text=\"요율\"/><Cell col=\"3\" text=\"결과\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"normal\" text=\"bind:Column3\" mask=\"#,###\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column5\"/><Cell col=\"3\" displaytype=\"number\" mask=\"#,###\" textAlign=\"right\" background=\"rgba(243,255,202,1)\" expr=\"eval(Column3 + Column6 +Column5)\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"108\"/><Column size=\"53\"/><Column size=\"58\"/><Column size=\"99\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"설정금액\"/><Cell col=\"1\" text=\"연산자\"/><Cell col=\"2\" text=\"요율\"/><Cell col=\"3\" text=\"결과\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"normal\" text=\"bind:Column3\" mask=\"#,###\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column5\"/><Cell col=\"3\" displaytype=\"number\" mask=\"#,###\" textAlign=\"right\" background=\"rgba(243,255,202,1)\" expr=\"eval(Column3 + Column6 +Column5)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","0","0",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그리드의 셀 별로 달력, 콤보, 마스크 등과 같이 다양한 형태로 데이타 표현을 할 수 있습니다.\r\n또한 셀병합, 멀티라인, Expression을 통해 그리드에서 다양한 표현을 할 수 있습니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktop",0,0,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("다양한그리드표현");
                p.set_scrollbartype("autoindicator autoindicator");

                p.staTitle01.set_taborder("6");
                p.staTitle01.set_text("다양한 셀표현");
                p.staTitle01.set_cssclass("sta_WF_title02");
                p.staTitle01.move("0","99","421","30",null,null);

                p.grdList02.set_taborder("0");
                p.grdList02.set_binddataset("dsList2");
                p.grdList02.set_autofittype("col");
                p.grdList02.set_cssclass("grd_black");
                p.grdList02.set_autoenter("select");
                p.grdList02.set_formatid("default");
                p.grdList02.set_autoupdatetype("itemselect");
                p.grdList02.move("0","staTitle01:8",null,"355","20",null);

                p.staTitle02.set_taborder("4");
                p.staTitle02.set_text("멀티 라인");
                p.staTitle02.set_cssclass("sta_WF_title02");
                p.staTitle02.move("0","grdList02:18","421","30",null,null);

                p.grdList01.set_taborder("2");
                p.grdList01.set_binddataset("dsList");
                p.grdList01.set_autoenter("select");
                p.grdList01.set_autoupdatetype("comboselect");
                p.grdList01.set_autofittype("col");
                p.grdList01.set_formatid("default");
                p.grdList01.move("0","548",null,"387","20",null);

                p.staTitle03.set_taborder("5");
                p.staTitle03.set_text("Expression");
                p.staTitle03.set_cssclass("sta_WF_title02");
                p.staTitle03.move("0","grdList01:13","421","30",null,null);

                p.grdList00.set_taborder("1");
                p.grdList00.set_binddataset("dsList");
                p.grdList00.set_autoenter("select");
                p.grdList00.set_autoupdatetype("comboselect");
                p.grdList00.set_autofittype("col");
                p.grdList00.set_visible("true");
                p.grdList00.set_cssclass("grd_black");
                p.grdList00.set_formatid("default");
                p.grdList00.move("0","staTitle03:8",null,"195","20",null);

                p.staInfo.set_taborder("3");
                p.staInfo.set_text("그리드의 셀 별로 달력, 콤보, 마스크 등과 같이 다양한 형태로 데이타 표현을 할 수 있습니다.\r\n또한 셀병합, 멀티라인, Expression을 통해 그리드에서 다양한 표현을 할 수 있습니다.");
                p.staInfo.set_cssclass("sta_WF_box03");
                p.staInfo.set_wordWrap("char");
                p.staInfo.move("0","0",null,"80","20",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","",480,1530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList02.set_formatid("mobile");
                p.grdList02.set_autofittype("none");
                p.grdList02.move("20","237",null,"443","20",null);

                p.grdList00.set_formatid("mobile");
                p.grdList00.move("20","staTitle03:8",null,"243","20",null);

                p.grdList01.set_formatid("mobile");
                p.grdList01.move("20","staTitle02:8",null,"483","20",null);

                p.staTitle02.move("20","grdList02:19","421","30",null,null);

                p.staTitle03.move("20","grdList01:16","421","30",null,null);

                p.staTitle01.move("20","199","421","30",null,null);

                p.staInfo.move("20","20",null,"150","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CellTypes.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    grid > CellTypes
        *  @FileName  CellTypes.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.06
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
        this.fn_BlockUnChk = function (objGrid)
        {
        	var i;
        	var objDs = eval("this." + objGrid.binddataset);

        	for (i = 0; i <= objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "Chk", 0);
        	}

        	objGrid.setCellProperty("Head", 0, "text", "0");
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description oncellclick
        */
        this.grdList02_oncellclick = function (obj, e)
        {
        	if (e.col == 5) {
        		alert("버튼 Click Event 호출!");
        	} else if(e.col ==3) {
        		obj.dropdownCalendar();
        	} else if(e.col ==4) {
        		obj.dropdownCombo();
        	}
        };

        /**
         * @description onheadclick
        */
        this.grdList01_onheadclick = function (obj, e)
        {
        	if (e.col == 0)
        	{
        		if (this.chkFlag == "1") {
        			this.fn_BlockUnChk(obj);

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
            this.grdList02.addEventHandler("oncellclick",this.grdList02_oncellclick,this);
            this.grdList01.addEventHandler("onheadclick",this.grdList01_onheadclick,this);
        };

        this.loadIncludeScript("CellTypes.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
