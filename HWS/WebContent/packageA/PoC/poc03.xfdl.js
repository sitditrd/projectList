(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gantt");
            this.set_titletext("Gantt Chart");
            if (Form == this.constructor)
            {
                this._setFormPosition(1170,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"mileStone\" type=\"STRING\" size=\"256\"/><Column id=\"startDay\" type=\"STRING\" size=\"256\"/><Column id=\"endDay\" type=\"STRING\" size=\"256\"/><Column id=\"notice\" type=\"STRING\" size=\"256\"/><Column id=\"reserveId\" type=\"STRING\" size=\"256\"/><Column id=\"progress\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">A</Col><Col id=\"startDay\">20200325</Col><Col id=\"endDay\">20200430</Col><Col id=\"notice\">JAOP Update</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button01</Col><Col id=\"progress\">50</Col><Col id=\"type\">ST</Col></Row><Row><Col id=\"ID\">A01</Col><Col id=\"startDay\">20200326</Col><Col id=\"endDay\">20200401</Col><Col id=\"notice\">TASKA</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button02</Col><Col id=\"progress\">50</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">A02</Col><Col id=\"startDay\">20200402</Col><Col id=\"endDay\">20200410</Col><Col id=\"notice\">TASKB</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button03</Col><Col id=\"progress\">50</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">A03</Col><Col id=\"startDay\">20200411</Col><Col id=\"endDay\">20200420</Col><Col id=\"notice\">TASKC</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button04</Col><Col id=\"progress\">50</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">A04</Col><Col id=\"startDay\">20200421</Col><Col id=\"endDay\">20200429</Col><Col id=\"notice\">TASKD</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button05</Col><Col id=\"progress\">50</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">AA</Col><Col id=\"mileStone\">1</Col><Col id=\"startDay\">20200430</Col><Col id=\"endDay\">20200430</Col><Col id=\"reserveId\">milestone01</Col><Col id=\"progress\">100</Col><Col id=\"notice\"/><Col id=\"type\">NT</Col></Row><Row><Col id=\"startDay\">20200327</Col><Col id=\"endDay\">20200430</Col><Col id=\"ID\">B</Col><Col id=\"notice\">JAOP Update2</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button06</Col><Col id=\"progress\">60</Col><Col id=\"type\">ST</Col></Row><Row><Col id=\"startDay\">20200328</Col><Col id=\"endDay\">20200401</Col><Col id=\"ID\">B01</Col><Col id=\"notice\">TASKA</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button07</Col><Col id=\"progress\">60</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"startDay\">20200402</Col><Col id=\"endDay\">20200429</Col><Col id=\"ID\">B02</Col><Col id=\"notice\">TASKB</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button08</Col><Col id=\"progress\">60</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">C</Col><Col id=\"startDay\">20200420</Col><Col id=\"endDay\">20200530</Col><Col id=\"notice\">ATO Production Imports TNLs, Airspace, FrOB, SPINS - Sends Comp ABPs</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button09</Col><Col id=\"progress\">70</Col><Col id=\"type\">ST</Col></Row><Row><Col id=\"ID\">C01</Col><Col id=\"startDay\">20200421</Col><Col id=\"endDay\">20200430</Col><Col id=\"notice\">TASKA</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button10</Col><Col id=\"progress\">70</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">C02</Col><Col id=\"startDay\">20200501</Col><Col id=\"endDay\">20200529</Col><Col id=\"notice\">TASKB</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button11</Col><Col id=\"progress\">70</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">D</Col><Col id=\"startDay\">20200430</Col><Col id=\"endDay\">20200530</Col><Col id=\"notice\">Target Effects Team (TET) Mtg Prep</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button12</Col><Col id=\"progress\">80</Col><Col id=\"type\">ST</Col></Row><Row><Col id=\"ID\">D01</Col><Col id=\"startDay\">20200501</Col><Col id=\"endDay\">20200501</Col><Col id=\"notice\">TASKA</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button13</Col><Col id=\"progress\">80</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">D02</Col><Col id=\"startDay\">20200502</Col><Col id=\"endDay\">20200505</Col><Col id=\"notice\">TASKB</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button14</Col><Col id=\"progress\">80</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">D03</Col><Col id=\"startDay\">20200506</Col><Col id=\"endDay\">20200516</Col><Col id=\"notice\">TASKC</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button15</Col><Col id=\"progress\">80</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">D04</Col><Col id=\"startDay\">20200517</Col><Col id=\"endDay\">20200529</Col><Col id=\"notice\">TASKD</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button16</Col><Col id=\"progress\">80</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">E</Col><Col id=\"notice\">MAAP Team Mtg/Turnover Prep</Col><Col id=\"startDay\">20200328</Col><Col id=\"endDay\">20200531</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button17</Col><Col id=\"progress\">90</Col><Col id=\"type\">ST</Col></Row><Row><Col id=\"ID\">E01</Col><Col id=\"notice\">TASKA</Col><Col id=\"startDay\">20200329</Col><Col id=\"endDay\">20200331</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button18</Col><Col id=\"progress\">90</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">E02</Col><Col id=\"startDay\">20200401</Col><Col id=\"endDay\">20200410</Col><Col id=\"notice\">TASKB</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button19</Col><Col id=\"progress\">90</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">E03</Col><Col id=\"startDay\">20200411</Col><Col id=\"endDay\">20200430</Col><Col id=\"notice\">TASKC</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button20</Col><Col id=\"progress\">90</Col><Col id=\"type\">NT</Col></Row><Row><Col id=\"ID\">E04</Col><Col id=\"startDay\">20200501</Col><Col id=\"endDay\">20200530</Col><Col id=\"notice\">TASKD</Col><Col id=\"mileStone\">0</Col><Col id=\"reserveId\">button21</Col><Col id=\"progress\">90</Col><Col id=\"type\">NT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOriginSchedule", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"mileStone\" type=\"STRING\" size=\"256\"/><Column id=\"startDay\" type=\"STRING\" size=\"256\"/><Column id=\"endDay\" type=\"STRING\" size=\"256\"/><Column id=\"notice\" type=\"STRING\" size=\"256\"/><Column id=\"reserveId\" type=\"STRING\" size=\"256\"/><Column id=\"progress\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","8","51","370",null,null,"8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSchedule");
            obj.set_showselection("true");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"73\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"ID\" font=\"normal 10px/normal &quot;Arial&quot;\" verticalAlign=\"middle\"/><Cell col=\"1\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"Task Name\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"Start Day\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"End Day\" font=\"normal 10px/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"progress\" font=\"normal 10px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:notice\"/><Cell col=\"3\" text=\"bind:startDay\" edittype=\"normal\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\" maskeditmaskchar=\" \"/><Cell col=\"4\" text=\"bind:endDay\" edittype=\"normal\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"5\" text=\"bind:progress\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","10","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Date");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_From","53","10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("20200325");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"10","77","30","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_To","188","10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("20201225");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","173","10","13","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Plus","316","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("+");
            obj.set_cssclass("btn_WF_ganttAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Minus","348","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("-");
            obj.set_cssclass("btn_WF_ganttDel");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1170,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("poc03.xfdl","lib::comLib_Comm.xjs");
        this.addIncludeScript("poc03.xfdl","lib::CommUtil.xjs");
        this.registerScript("poc03.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 간트차트구현
        * 02. 화면명   : Gantt
        * 03. 화면설명 :
        * 04. 작성일   : 2020.04.02
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
        this.executeIncludeScript("lib::comLib_Comm.xjs"); /*include "lib::comLib_Comm.xjs"*/
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        //월별 일수 Info
        this.arrMonthIndex = ["0", "31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

        //날짜 관련 변수 초기화
        this.arrWeek = new Array();
        this.arrMonth = new Array();

        //년도가 바뀔 때 정보를 담을 배열
        this.arrCYearIndex = new Array();

        //this.diffDays에 해당하는 년,월,일 정보를 담을 배열
        this.arrIDateIndex = new Array();

        //Task의 ID값을 담을 배열
        this.arrID = new Array();

        //BindPosition
        this.arrBindPosition = new Array();
        this.arrCBindPosition = new Array();

        //HeadClickPosition
        this.arrHeadClickIdx = new Array();

        // 소팅 표시자 구분 (text or image)
        this.MARKER_TYPE = "text";

        // Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정
        // [오름차순표시, 내림차순표시]
        this.MARKER = ["▲", "▼"];

        this.varFlag = "";
        this.colIdx1 = "";

        this.nMonthTop	= 0;
        this.nWeekTop	= 24;
        this.nDayTop	= 48;

        this.baseDay;
        this.dayWidth = 25;
        this.diffDays;

        //격자무늬 Static 컴포넌트 Info
        this.nScheduleLeft;
        this.nScheduleWidth;
        this.nScheduleHeight = 30;
        this.staWidth	= 25;
        this.staHeight	= 30;
        this.staLeft	= 0;
        this.staTop		= 0;

        //Task ProgrssBar 컴포넌트 Info
        this.nTaskHeight = 25;

        //ProgrssBar위의 진행율 표시점 Static 컴포넌트 Info
        this.nTaskProgress = 8; //Height값
        this.nPHighlightWidth = 10;
        this.nPHighlightHeight = 10;

        //drag&drop 사용시 필요한 정보변수
        this.fv_clickPointX;
        this.fv_clickPointY;

        //ProgressBar 컴포넌트
        this.fv_objDrag;

        //Static 컴포넌트(진행율 표시)
        this.fv_c_objDrag;

        //Static 컴포넌트(시간축 표시)
        this.fv_y_Axis;

        //Drag 제어변수
        this.DragFlag = 0;

        //Static의 Top에 해당하는 그리드의 Row를 가져오기 위함
        this.nTopIdx = 0;

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.gantt_onload = function(obj,e)
        {
        	//원본 데이터 저장
        	this.dsOriginSchedule.assign(this.dsSchedule);

        	//그리드 부가기능 설정
        	this.fn_setGrid(this.Grid00);

        	//간트차트 Div 생성
        	this.fnInitGantt();

        	//간트차트- (Header)
        	this.fnSetHeader();

        	//간트차트 - (Body)
        	this.fnSetBody();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	//간트차트 Div 생성
        	this.fnInitGantt();

        	//회의실 세팅
        	this.fnSetTaskKey();

        	//간트차트 - (Header)
        	this.fnSetHeader();

        	//간트차트 - (Body)
        	this.fnSetBody();

        	//ATO(Air Tasking Order)조회
        	this.fnSetSchedule();

        	//시간축 설정
        	this.fnSetTimeScale();
        };

        this.fnSetTimeScale = function()
        {
        	var objGantt = this.components["divGantt"];

        	var strStaticId, nLeft, nTop, nWidth, nHeight;
        	strStaticId = "stc_yAxis";
        	nLeft		= 0;
        	nTop 	    = 0;

        	nWidth 		= 2.0;
        	//nHeight     = objGantt.getOffsetHeight() + this.staHeight + this.staHeight + this.staHeight;
        	nHeight = objGantt.getOffsetHeight() + objGantt.form.vscrollbar.max;
        	objStatic	= new Static();

        	//objStatic.init(strStaticId, nLeft, nTop, nWidth, null, null, "divGantt:0");
        	objStatic.init(strStaticId, nLeft, nTop, nWidth, nHeight, null, null);
        	objStatic.set_cssclass("sta_WF_verticalBar");

        	objGantt.form.addChild(strStaticId, objStatic);
        	objStatic.show();

        	var objStatic = objGantt.form.components["stc_yAxis"];
        	objStatic.bringToFront();

        	this.fv_y_Axis = objStatic;
        	this.fv_y_Axis.nCntLeft = nLeft;

        	this.setTimer(1,100);
        };

        //간트차트 시간축 이동
        this.gantt_ontimer = function(obj, e)
        {
        	if(e.timerid == 1)
        	{
        		this.fv_y_Axis.nCntLeft += 1;
        		this.fv_y_Axis.setOffsetLeft(this.fv_y_Axis.nCntLeft);
        		this.fv_y_Axis.bringToFront();
        	}
        };

        this.fn_setGrid = function(obj)
        {
        	// 그리드 헤드 셀 Index를 담을 배열 선언
        	this.arrHeadClickIdx = new Array(this.dsSchedule.colcount);

        	// 그리드 헤드 셀 클릭 정렬 기능 사용을 위한 초기화
        	obj.addEventHandler("onheadclick", this.gridonheadclick, this);
        }

        this.gridonheadclick = function(obj,e)
        {
        	this.arrHeadClickIdx[e.col] = 1;

        	var multiple = false;

        	// Ctrl 키
        	if(e.ctrlkey)
        		multiple = true;

        	// Shift 키
        	if(e.shiftkey)
        		multiple = true;

        	if(this.gfn_SetSortStatus(obj, e.cell, multiple))
        	{
        		this.gfn_ExecuteSort(obj);

        		if(this.components["divGantt"])
        		{
        			//Dateset Redraw
        			this.dsSchedule.loadXML(this.dsSchedule.saveXML(null, "V").toString());
        			this.fnFormInit();
        		}
        	}
        }

        this.fnJustDeleteGantt = function()
        {
        	//Component Init
        	this.fnInitGantt();

        	//간트차트 - (Header)
        	this.fnSetHeader();

        	//간트차트 - (Body)
        	this.fnSetBody();
        };

        this.fnInitGantt = function()
        {
        	//Component Init
        	var objDiv  = this.components["divGantt"];

        	if(this.gfn_Null(objDiv))
        	{
        		var objDiv = new Div();
        		objDiv.set_cssclass("div_WF_ganttBox");
        		objDiv.init("divGantt", this.Grid00.getOffsetRight(), 51, null, null, 8, 8);
        		objDiv.addEventHandler("ondrop", this.divGantt_ondrop, this);
        		objDiv.addEventHandler("onvscroll", this.divGantt_onvscroll, this);

        		this.addChild("divGantt", objDiv);
        		objDiv.show();
        	}
        	else
        	{
         		this.removeChild("divGantt");
         		objDiv.destroy();
         		objDiv = null;

        		this.fnInitGantt();
        	}

        	//Value Init
        	this.arrWeek = new Array();
        	this.arrMonth = new Array();
        	this.arrCYearIndex = new Array();
        	this.arrIDateIndex = new Array();
        	this.arrID = new Array();

        	//Dataset Init
        	this.dsSchedule.loadXML(this.dsOriginSchedule.saveXML());
        };

        this.fnSetTaskKey = function()
        {
        	for(var i=0; i<this.dsSchedule.rowcount; i++)
        	{
        		this.arrID.push(this.dsSchedule.getColumn(i, "ID"));

        		//button
        		this.arrBindPosition.push({objID:"", startDay:"", endDay:"", startStcIdx:"", endStcIdx:"", startStcId:"", nOriginPos:i, nChangePos:i});
        		//button on static
        		this.arrCBindPosition.push({objID:""});
        	}
        };

        this.fnSetHeader = function()
        {
        	this.baseDay = this.cal_From.value;
        	this.headDay = this.cal_To.value;

        	var baseDayMonth = nexacro.toNumber(this.baseDay.toString().substr(4,2));
        	var headDayMonth = nexacro.toNumber(this.headDay.toString().substr(4,2));
        	this.diffMon = headDayMonth - baseDayMonth;

        	this.nScheduleLeft = 0;

        	//월, 주, 일 title 생성
        	var diffMonth = this.gfn_addMonth(this.baseDay, this.diffMon);
        	this.diffDays  = this.gfn_getDiffDay(this.baseDay, this.headDay);

        	var objAddDate;
        	var curtYear  = nexacro.toNumber(this.baseDay.toString().substr(0,4));
        	var curtWeek  = this.getWeekOfYear(this.baseDay);
        	var endWeek	  = this.getWeekOfYear(diffMonth);

        	var weekStartDay = this.baseDay;
        	var weekEndDay;

        	var nArr = 0;
        	var nArr2 = 0;
        	var nArr3 = 0;

        	var nCurMonth = this.gfn_getYearMonth(weekStartDay);

        	this.arrWeek.push({week:curtWeek, startDay:weekStartDay, endDay:weekStartDay, year:curtYear});
        	this.arrMonth.push({month:nCurMonth, startDay:weekStartDay, endDay:weekStartDay});
        	this.arrCYearIndex.push({dayDiffIdx:""});

        	var nDayLeft, nDayTop, nDayWidth, nDayHeight;

        	nDayTop = this.nDayTop;
        	nDayHeight = 25;
        	nDayWidth  = this.dayWidth;
        	nDayLeft   = this.nScheduleLeft;

        	this.nOriginYear, this.nChangeYear;
        	this.nOriginYear = nexacro.toNumber(this.baseDay.toString().substr(0,4));

        	//일별 그리기
        	for(var i=0; i<this.diffDays; i++)
        	{
        		objAddDate = this.gfn_addDate(this.baseDay, i);

        		this.arrIDateIndex.push({diffDayIdx : objAddDate});

        		this.nChangeYear = nexacro.toNumber(objAddDate.toString().substr(0,4));

        		//년도가 넘어갈 때 주차초기화
        		if(this.nOriginYear < this.nChangeYear)
        		{
        			//년도가 넘어갈 때에 해당하는 nDiffDay Index값
        			this.arrCYearIndex[nArr3++] = i;

        			this.nOriginYear = this.nChangeYear;

        			baseDayMonth = nexacro.toNumber(this.baseDay.toString().substr(4,2));
        			headDayMonth = nexacro.toNumber(this.headDay.toString().substr(4,2));

        			this.diffMon = headDayMonth - baseDayMonth;

        			this.nScheduleLeft = 0;

        			//월, 주, 일 title 생성
        			var diffMonth = this.gfn_addMonth(this.baseDay, this.diffMon);

        			curtWeek  = this.getWeekOfYear(objAddDate);
        			endWeek	  = this.getWeekOfYear(diffMonth);
        		}

        		strStaticId = "stDay_" + objAddDate;
        		strStaticText = objAddDate.substr(6,2);

        		objStatic = new Static();
        		objStatic.init(strStaticId, nDayLeft, nDayTop, nDayWidth + 1, nDayHeight);
        		objStatic.set_cssclass("sta_WF_ganttHead");
        		objStatic.set_text(strStaticText);

        		this.divGantt.addChild(strStaticId, objStatic);
        		objStatic.show();

        		//getWeekOfYear : 해당일에 대한 주차를 구하는 메소드
        		if(curtWeek == this.getWeekOfYear(objAddDate))
        		{
        			this.arrWeek[nArr].endDay = objAddDate;
        		}
        		else
        		{
        			curtWeek++;
        			this.arrWeek.push({week:curtWeek,startDay:objAddDate,endDay:objAddDate, year:this.nOriginYear});
        			nArr++;
        		}

        		if(nCurMonth == this.gfn_getYearMonth(objAddDate))
        		{
        			this.arrMonth[nArr2].endDay = objAddDate;
        		}
        		else
        		{
        			nCurMonth = this.gfn_getYearMonth(objAddDate);
        			this.arrMonth.push({month:nCurMonth,startDay:objAddDate,endDay:objAddDate});
        			nArr2++;
        		}

        		nDayLeft = nDayLeft + nDayWidth;

        		if(i == (this.diffDays-1))
        		{
        			//마지막일 경우 간트차트가 나타나게 될 일정 div의 최종 width를 구해야함
        			this.nScheduleWidth = objStatic.getOffsetLeft() + objStatic.getOffsetWidth() - this.nScheduleLeft;
        		}
        	}

        	strStaticText = null;
        	strStaticId = null;
        	objStatic	= null;

        	var objWeek;
        	var objTemp;

        	var nWeekLeft, nWeekTop, nWeekWidth, nWeekHeight;
        	nWeekTop = this.nWeekTop;
        	nWeekHeight = 25;

        	//주차별 그리기
        	for(var i=0; i<this.arrWeek.length; i++)
        	{
        		objWeek = this.arrWeek[i];
        		strStaticId = "stWeek_" + objWeek.year + "_" + objWeek.week;
        		strStaticText = "Wk " + this.gfn_lPad(objWeek.week,"0",2);

        		objTemp = this.divGantt.form.components["stDay_" + objWeek.startDay];
        		nWeekLeft = objTemp.getOffsetLeft();

        		objTemp = this.divGantt.form.components["stDay_" + objWeek.endDay];

        		nWeekWidth = objTemp.getOffsetLeft() + objTemp.getOffsetWidth() - nWeekLeft;

        		objStatic = new Static();
        		objStatic.init(strStaticId,nWeekLeft,nWeekTop,nWeekWidth,nWeekHeight);
        		objStatic.set_cssclass("sta_WF_ganttHead");
        		objStatic.set_text(strStaticText);
        		objStatic.startDay = objWeek.startDay;
        		objStatic.endDay = objWeek.endDay;

        		this.divGantt.addChild(strStaticId,objStatic);
        		objStatic.show();
        	}

        	objTemp = null;
        	var objMonth;
        	var nMonthLeft, nMonthTop, nMonthWidth, nMonthHeight;
        	nMonthTop = this.nMonthTop;
        	nMonthHeight = 25;

        	//월별 그리기
        	for(var i=0; i<this.arrMonth.length; i++)
        	{
        		objMonth = this.arrMonth[i];
        		strStaticId = "stMonth_" + objMonth.month;
        		strStaticText = " " +  objMonth.month;

        		objTemp = this.divGantt.form.components["stDay_" + objMonth.startDay];
        		nMonthLeft = objTemp.getOffsetLeft();

        		objTemp = this.divGantt.form.components["stDay_" + objMonth.endDay];
        		nMonthWidth = objTemp.getOffsetLeft() + objTemp.getOffsetWidth() - nMonthLeft;

        		objStatic = new Static();
        		objStatic.init(strStaticId, nMonthLeft, nMonthTop, nMonthWidth, nMonthHeight);
        		objStatic.set_cssclass("sta_WF_ganttHead");
        		objStatic.set_text(strStaticText);
        		objStatic.startDay = objMonth.startDay;
        		objStatic.endDay = objMonth.endDay;

        		this.divGantt.addChild(strStaticId, objStatic);
        		objStatic.show();
        	}
        };

        this.fnCalcLeapYear = function(year, arr)
        {
        	//평년, 윤년계산
        	if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        	{
        		//윤년
        		arr[2] = 29;
        	}
        	else
        	{
        		//평년
        		arr[2] = 28;
        	}
        };

        this.fnSetBody = function()
        {
        	var nArr = 0;
        	var nLeft, nWidth, nTop, nHeight;
        	var objParent, objStcId;

        	var diffMonth 	= this.gfn_addMonth(this.baseDay, this.diffMon);

        	var nYearIndex  = nexacro.toNumber(this.baseDay.substr(0,4)); //현재 날짜의 '년도'만 받아옴.
        	var nMonthIndex = nexacro.toNumber(this.baseDay.substr(4,2)); //현재 날짜의 '월'만 받아옴.
        	var nDayIndex 	= nexacro.toNumber(this.baseDay.substr(6,2)); //현재 날짜의 '일'만 받아옴.
        	var nLeftStartIndex  = nDayIndex; 							  //현재 날짜의 '일'만 받아옴.(최초로)

        	this.fnCalcLeapYear(nYearIndex, this.arrMonthIndex);		  //해당년의 윤년,평년 체크

        	objParent = this.divGantt.form.components["stDay_" + this.baseDay] ;

        	nTop	= objParent.getOffsetTop() + objParent.getOffsetHeight() - 1;
        	nLeft 	= objParent.getOffsetLeft();
        	nWidth	= objParent.getOffsetWidth() -1;
        	nHeight = this.nScheduleHeight;

        	this.divGantt.set_enableevent(false);
        	this.divGantt.set_enableredraw(false);

        	for(var i=0; i<this.dsSchedule.rowcount; i++)
        	{
        		//GanttChart의 마지막 Row에 대한 Height사이즈 조절
        		if(i == this.dsSchedule.rowcount - 1)
        		{
        			nHeight -= 5;
        		}

        		for(var j=0; j<this.diffDays; j++)
        		{
        			var objStc = new Static();

        			objStcId = this.dsSchedule.getColumn(i, "ID") + "_" + this.gfn_addDate(this.baseDay, j) + "_" +  nLeftStartIndex;
        			objStc.init(objStcId, nLeft, nTop, nWidth + 1, nHeight + 1);
        			objStc.set_cssclass("sta_WF_ganttCell");
        			this.divGantt.addChild(objStcId, objStc);
        			objStc.show();

        			nLeft = nLeft + objStc.getOffsetWidth() - 1;
        			nDayIndex++;
        			nLeftStartIndex++;
        		}

        		nLeftStartIndex = nexacro.toNumber(this.baseDay.substr(6,2)); //현재 날짜의 '일'만 받아옴.

        		nLeft		= objParent.getOffsetLeft();
        		nTop 		= nTop + objParent.getOffsetHeight();
        	}

        	this.divGantt.set_enableevent(true);
        	this.divGantt.set_enableredraw(true);

        	this.divGantt.form.resetScroll();
        };

        //동적 생성된 Static Index를 가져오기 위함.
        this.fnGetStaticIndex = function(Date)
        {
        	var nDiffDay   = nexacro.toNumber(this.gfn_getDiffDay(this.baseDay, Date)) - 1;
        	var nDateDay   = nexacro.toNumber(this.baseDay.substr(6,2));

        	return nDiffDay + nDateDay;
        };

        //동적 생성된 Static Index의 Date값을 가져오기 위함.
        this.fnGetStaticDate = function(nStcIdx)
        {
        	var nIdx = nexacro.toNumber(nStcIdx) - nexacro.toNumber(this.baseDay.substr(6,2));

        	if(nIdx < 0)
        		return -1;
        	else
        		return this.gfn_addDate(this.baseDay, nIdx);
        };

        this.fnGanttRedraw = function(objId, newValue, colIdx, nRow)
        {
        	//DSColChangeEventInfo
        	if(this.DragFlag == 1)
        	{
        		if(this.dsSchedule.getColumn(nRow, "mileStone") == 1)
        		{
        			alert("This object cannot be resize");
        			return;
        		}

        		var startDay, endDay, startStcIdx, endStcIdx, startStcId;

        		if(this.dsSchedule.getColID(colIdx) == "startDay")
        		{
        			startDay = newValue;
        			endDay = this.dsSchedule.getColumn(nRow, "endDay");
        		}
        		else if(this.dsSchedule.getColID(colIdx) == "endDay")
        		{
        			startDay = this.dsSchedule.getColumn(nRow, "startDay");
        			endDay = newValue;
        		}

        		var btnObj, stcObj;

        		//objBtn Info Update
        		for (var i = 0; i < this.divGantt.form.components.length; i++)
        		{
        			if(this.divGantt.form.all[i] == "[object ProgressBar]")
        			{
        				if(this.divGantt.form.all[i].name == objId)
        					btnObj = this.divGantt.form.all[i];
        			}
        			else if(this.divGantt.form.all[i] == "[object Static]")
        			{
        				if(this.divGantt.form.all[i].name == "stc_" + objId)
        					stcObj = this.divGantt.form.all[i];
        			}
        		}

        		startStcIdx 	= nexacro.toNumber(this.fnGetStaticIndex(startDay.toString()));
        		endStcIdx 		= nexacro.toNumber(this.fnGetStaticIndex(endDay.toString()));

        		if(this.arrBindPosition[nRow].nRowPos != this.arrBindPosition[nRow].nChangePos)
        			startStcId = this.dsSchedule.getColumn(this.arrBindPosition[nRow].nChangePos, "ID");
        		else
        			startStcId = this.dsSchedule.getColumn(this.arrBindPosition[nRow].nRowPos, "ID");

        		//ProgressBar 컴포넌트
        		this.arrBindPosition[nRow].objID 		= btnObj;
        		this.arrBindPosition[nRow].startDay 	= startDay;
        		this.arrBindPosition[nRow].endDay 		= endDay;
        		this.arrBindPosition[nRow].startStcIdx 	= startStcIdx;
        		this.arrBindPosition[nRow].endStcIdx	= endStcIdx;
        		this.arrBindPosition[nRow].startStcId 	= startStcId;

        		var	strStaticName	= startStcId + "_" + startDay + "_" + startStcIdx;
        		var objStatic		= this.divGantt.form.components[strStaticName];
        		var nLeft, nTop, nWidth, nHeight;

        		if(!this.gfn_Null(objStatic))
        		{
        			nLeft 			= objStatic.getOffsetLeft();
        			nTop			= objStatic.getOffsetTop();

        			strStaticName	= startStcId+ "_" +  endDay + "_" + endStcIdx;
        			objStatic	  	= this.divGantt.form.components[strStaticName];

        			nWidth 			= objStatic.getOffsetRight() - nLeft;
        			nHeight  		= objStatic.getOffsetHeight() - 5;
        		}

        		//ProgressBar위의 진행율 static 컴포넌트
        		this.arrCBindPosition[nRow].objID		= stcObj;

        		//ProgressBar, static 컴포넌트 이동
        		nP_Left = nLeft + nWidth * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;
        		this.arrCBindPosition[nRow].objID.move(nP_Left, nTop, this.nPHighlightWidth, this.nPHighlightHeight);
        		this.arrBindPosition[nRow].objID.move(nLeft, nTop + this.nTaskProgress, nWidth, nHeight - this.nTaskProgress);

        		this.DragFlag = 0;
        	}
        };

        this.fnSetSchedule = function()
        {
        	var nLeft, nWidth, nTop, nHeight;
        	var nP_Left, nP_Width, nP_Top, nP_Height;

        	var startDay, endDay, ID;
        	var startStcIdx, endStcIdx;
        	var objStatic, strStaticName;
        	var strBtnId, strStcId;
        	var cgTime;

        	for(var i=0; i<this.dsSchedule.rowcount; i++)
        	{
        		startDay		= this.dsSchedule.getColumn(i, "startDay");
        		endDay			= this.dsSchedule.getColumn(i, "endDay");
        		cgTime 			= endDay;
        		ID				= this.dsSchedule.getColumn(i, "ID");

        		if(this.dsSchedule.getColumn(i, "mileStone") == 1)
        			ID			= this.dsSchedule.getColumn(i, "ID").split("_")[0];

        		startStcIdx 	= this.fnGetStaticIndex(startDay);
        		endStcIdx 		= this.fnGetStaticIndex(cgTime);

        		strStaticName	= this.dsSchedule.getColumn(i, "ID") + "_" + startDay + "_" + startStcIdx;
        		objStatic		= this.divGantt.form.components[strStaticName];

        		if(!this.gfn_Null(objStatic))
        		{
        			nLeft 	= objStatic.getOffsetLeft();
        			nTop 	= objStatic.getOffsetTop() + this.nTaskProgress;
        			nHeight = this.nTaskHeight - this.nTaskProgress;

        			if(this.dsSchedule.getColumn(i, "mileStone") == 1)
        			{
        				nTop -= this.nTaskProgress;
        				nHeight = this.nTaskHeight;
        			}

        			strStaticName = this.dsSchedule.getColumn(i, "ID") + "_" +  cgTime + "_" + endStcIdx;

        			objStatic	  = this.divGantt.form.components[strStaticName];

        			nWidth = objStatic.getOffsetRight() - nLeft;

        			var objButton = new ProgressBar();
        			strBtnId 	  = this.dsSchedule.getColumn(i, "reserveId");

        			//ProgressBar 생성
        			objButton.init(strBtnId, nLeft, nTop, nWidth, nHeight);
        			objButton.set_text(this.dsSchedule.getColumn(i, "notice"));

        			if(this.dsSchedule.getColumn(i, "mileStone") == 1)
        			{
        				objButton.set_cssclass("pgb_WF_ganttStone");
        				objButton.set_text("");
        			}
        			else
        			{
        				if(this.dsSchedule.getColumn(i, "type") == "ST")
        				{
        					objButton.set_cssclass("pgb_WF_ganttBar01");
        				}
        				else if(this.dsSchedule.getColumn(i, "type") == "NT")
        				{
        					objButton.set_cssclass("pgb_WF_ganttBar02");
        				}
        			}

        			objButton.set_pos(this.dsSchedule.getColumn(i, "progress"));
        			objButton.set_smooth(true);

        			//mouse cursor 및 drag&drop 사용을 위한 event 설정
        			objButton.addEventHandler("onmousemove", this.btn_onmousemove, this);
        			objButton.addEventHandler("onclick", this.btn_click, this);
        			objButton.addEventHandler("ondrag", this.btn_ondrag, this);

        			this.divGantt.addChild(strBtnId, objButton);

        			objButton.show();
        			objButton.startStcIdx 	= nexacro.toNumber(startStcIdx);
        			objButton.endStcIdx 	= nexacro.toNumber(endStcIdx);
        			objButton.startDay  	= nexacro.toNumber(startDay);
        			objButton.endDay		= nexacro.toNumber(endDay);
        			objButton.startStcId 	= ID;
        			objButton.ID			= ID;

        			if(this.dsSchedule.getColumn(i, "mileStone") == 1)
        				continue;

        			//ProgressBar위의 진행률 표시점
        			nP_Left 	  = nLeft + nWidth * (this.dsSchedule.getColumn(i, "progress")/100) - 5;
        			nP_Top 		  = nTop - this.nTaskProgress;
        			nP_Width	  = this.nPHighlightWidth;
        			nP_Height     = this.nPHighlightHeight;

        			var objStc 	  = new Static();
        			strStcId	  = "stc_" + this.dsSchedule.getColumn(i, "reserveId");

        			objStc.init(strStcId, nP_Left, nP_Top, nP_Width, nP_Height);
        			objStc.set_cssclass("sta_WF_ganttImg");

        			this.divGantt.addChild(strStcId, objStc);
        			objStc.show();
        		}
        	}
        };

        this.btn_onmousemove = function(obj,e)
        {
        	obj.bringToFront();

        	var nBtnLeft = obj.getOffsetLeft();
        	var nBtnRight = obj.getOffsetRight();

        	var strCursor = "";

        	if(nBtnLeft > (e.canvasx + nBtnLeft-5))
        	{
        		//left위치일 경우 (5픽셀 정도 더 잡아줌)
        		strCursor = "e-resize";
        	}
        	else if((e.canvasx + nBtnLeft) > nBtnRight-5)
        	{
        		//right위치일 경우
        		strCursor = "w-resize";
        	}
        	else
        	{
        		strCursor = "move";
        	}

        	obj.strCursor = strCursor;
        	obj.set_cursor(strCursor);
        };

        this.btn_click = function(obj, e)
        {
        	var nRow = this.dsSchedule.findRow("reserveId", obj.id);
        	this.dsSchedule.set_rowposition(nRow);
        };

        this.btn_ondrag = function(obj, e)
        {
        	//타일내 클릭 좌표값
         	this.fv_clickPointX = e.canvasx + obj.parent.parent.getOffsetLeft();
         	this.fv_clickPointY = e.canvasy + obj.parent.parent.getOffsetTop();

        	var objStc = this.divGantt.form.components["stc_" + obj.id];

        	this.fv_c_objDrag = objStc;
        	this.fv_objDrag = obj;

        	return true;
        };

        this.gantt_ondragmove = function(obj,e)
        {
        	//현재 겹치는 시간에 대해서는 고려되지 않음
        	var nLeft,nTop,nWidth,nHeight,nRight;
        	var strCursor = this.fv_objDrag.strCursor;

        	nLeft	= this.fv_objDrag.getOffsetLeft();
        	nTop	= this.fv_objDrag.getOffsetTop();
        	nHeight = this.fv_objDrag.getOffsetHeight();

        	var startDay, endDay, cgTime, stcIdx, objId;
        	var ID = this.fv_objDrag.ID;

        	var nRow = this.dsSchedule.findRow("ID", ID);
        	this.dsSchedule.set_rowposition(nRow);

        	var bkStatic;

        	if(strCursor == "e-resize")
        	{
        		//left resize
        		nLeft = e.canvasx - this.Grid00.getOffsetRight();

        		if(nLeft < 0)
        			return;

        		startDay = this.fv_objDrag.startDay;
        		stcIdx = this.fv_objDrag.startStcIdx;
        		objId = this.fv_objDrag.ID;

        		bkStatic = this.divGantt.form.components[objId + "_" + startDay + "_" + stcIdx];

        		if(nLeft < this.fv_objDrag.getOffsetLeft())
        		{
        			//mouse cursor가 object left보다 작을 경우(왼쪽으로 늘이기/시작시간 늘이기)
        			stcIdx--;

        			startDay = this.fnGetStaticDate(stcIdx);
        			this.fv_objDrag.startDay = startDay;
        			this.fv_objDrag.startStcIdx = stcIdx;

        			bkStatic = this.divGantt.form.components[objId + "_" + startDay + "_" + stcIdx];

        			if(this.gfn_Null(bkStatic))
        				return;

        			nLeft = bkStatic.getOffsetLeft();
        			nWidth = this.fv_objDrag.getOffsetLeft() - nLeft + this.fv_objDrag.getOffsetWidth();

        			if(nWidth < this.staWidth)
        				return;

        			nP_Left = nLeft + nWidth * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;

        			if(this.dsSchedule.getColumn(nRow, "mileStone") == 1)
        			{
        				alert("This object cannot be resize");
        				return;
        			}

        			this.fv_objDrag.move(nLeft, nTop, nWidth, nHeight);
        			this.fv_c_objDrag.move(nP_Left, nTop - this.nTaskProgress);
        			this.dsSchedule.setColumn(nRow, "startDay", startDay);
        		}
        		else
        		{
        			//mouse cursor가 object left보다 클 경우(오른쪽으로 줄이기/시작시간 줄이기)
        			if(bkStatic.getOffsetRight() < nLeft)
        			{
        				//현재 backgound의 시간표 right보다 현재 위치가 클 경우에만 실행
        				stcIdx++;

        				startDay = this.fnGetStaticDate(stcIdx);
        				this.fv_objDrag.startDay = startDay;
        				this.fv_objDrag.startStcIdx = stcIdx;

        				bkStatic = this.divGantt.form.components[objId + "_" + startDay + "_" + stcIdx];

        				if(this.gfn_Null(bkStatic))
        					return;

        				nLeft = bkStatic.getOffsetLeft();
        				nWidth = this.fv_objDrag.getOffsetLeft() - nLeft + this.fv_objDrag.getOffsetWidth();

        				if(nWidth < this.staWidth)
        					return;

        				nP_Left = nLeft + nWidth * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;

        				if(this.dsSchedule.getColumn(nRow, "mileStone") == 1)
        				{
        					alert("This object cannot be resize");
        					return;
        				}

        				this.fv_objDrag.move(nLeft, nTop, nWidth, nHeight);
        				this.fv_c_objDrag.move(nP_Left, nTop - this.nTaskProgress);
        				this.dsSchedule.setColumn(nRow, "startDay", startDay);
        			}
        		}
        	}
        	else if(strCursor == "w-resize")
        	{
        		//right resize
        		nWidth = e.canvasx - this.fv_objDrag.getOffsetLeft() - this.Grid00.getOffsetRight();
        		nRight = this.fv_objDrag.getOffsetLeft() + nWidth;

        		endDay = this.fv_objDrag.endDay;
        		stcIdx = this.fv_objDrag.endStcIdx;
        		objId  = this.fv_objDrag.ID;

        		cgTime  = endDay;
        		bkStatic = this.divGantt.form.components[objId + "_" + cgTime + "_" + stcIdx];

        		if(nRight > bkStatic.getOffsetRight())
        		{
        			//mouse cursor가 object right보다 클 경우(오른쪽으로 늘이기/종료시간 늘이기)
        			stcIdx++;

        			endDay = this.fnGetStaticDate(stcIdx);
        			this.fv_objDrag.endDay = endDay;
        			this.fv_objDrag.endStcIdx = stcIdx;

        			cgTime  = endDay;
        			bkStatic = this.divGantt.form.components[objId + "_" + cgTime + "_" + stcIdx];

        			if(this.gfn_Null(bkStatic))
        				return;

        			nRight = bkStatic.getOffsetRight();
        			nWidth = nRight - nLeft;

        			if(nWidth < this.staWidth)
        				return;

        			nP_Left = nLeft + nWidth * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;

        			if(this.dsSchedule.getColumn(nRow, "mileStone") == 1)
        			{
        				alert("This object cannot be resize");
        				return;
        			}

        			this.fv_objDrag.move(nLeft, nTop, nWidth, nHeight);
        			this.fv_c_objDrag.move(nP_Left, nTop - this.nTaskProgress);
        			this.dsSchedule.setColumn(nRow, "endDay", endDay);
        		}
        		else
        		{
        			if(e.canvasx - this.Grid00.getOffsetRight() < 0)
        				return;

        			//mouse cursor가 object right보다 작을 경우(왼쪽으로 줄이기/종료시간 줄이기)
        			if(e.canvasx - this.Grid00.getOffsetRight() < bkStatic.getOffsetLeft())
        			{
        				//현재 backgound의 시간표 left보다 현재 위치가 작을 경우에만 실행
        				stcIdx--;

        				endDay = this.fnGetStaticDate(stcIdx);
        				this.fv_objDrag.endDay = endDay;
        				this.fv_objDrag.endStcIdx = stcIdx;
        				cgTime  = endDay;

        				bkStatic = this.divGantt.form.components[objId + "_" + cgTime + "_" + stcIdx];

        				if(this.gfn_Null(bkStatic))
        					return;

        				nRight = bkStatic.getOffsetRight();
        				nWidth = nRight - nLeft;

        				if(nWidth < this.staWidth)
        					return;

        				nP_Left = nLeft + nWidth * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;

        				if(this.dsSchedule.getColumn(nRow, "mileStone") == 1)
        				{
        					alert("This object cannot be resize");
        					return;
        				}

        				this.fv_objDrag.move(nLeft, nTop, nWidth, nHeight);
        				this.fv_c_objDrag.move(nP_Left, nTop - this.nTaskProgress);
        				this.dsSchedule.setColumn(nRow, "endDay", endDay);
        			}
        		}

        	}
        	else
        	{
        		//move
        		nLeft = e.canvasx-this.fv_clickPointX;
        		nWidth = this.fv_objDrag.getOffsetWidth();
        		nP_Left = nLeft + nWidth * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;
        		nTop  = e.canvasy-this.fv_clickPointY;

        		if(nTop < this.nWeekTop + this.nDayTop || nLeft < 0)
        		{
        			this.set_rtnMove(fv_objDrag);
        			return;
        		}

        		this.fv_objDrag.move(nLeft, nTop);

        		if(this.dsSchedule.getColumn(nRow, "mileStone") < 1)
        		{
        			this.fv_c_objDrag.move(nP_Left, nTop - this.nTaskProgress);
        		}
        	}
        };

        this.divGantt_ondrop = function(obj, e)
        {
        	var objrefObj;
        	var objWidth;
        	var objTimes, objId, endDay, startDay, stcIdx;
        	var nLeft, nTop;
        	var np_Left;
        	var arrObjName;

        	if(this.fv_objDrag.strCursor == "move")
        	{
        		//move 후 drop 발생할 경우 move된 object 제어
        		objTimes  = this.fv_objDrag.getOffsetWidth() / this.staWidth;
        		nLeft	  = this.fv_objDrag.getOffsetLeft();
        		nTop	  = this.fv_objDrag.getOffsetTop() - this.nDayTop;
        		objrefObj = this.get_objId(nLeft, nTop);

        		if(this.gfn_Null(objrefObj) || objrefObj < 0)
        		{
        			this.alert("Not Exist Reference Object.");
         			this.set_rtnMove(this.fv_objDrag);
        			return;
        		}

        		var nRow = this.dsSchedule.findRow("reserveId", this.fv_objDrag.id);
        		arrObjName = objrefObj.name.split("_");

        		nP_Left = objrefObj.getOffsetLeft() + this.fv_objDrag.getOffsetWidth() * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;

        		if(this.dsSchedule.getColumn(nRow, "mileStone") < 1)
        		{
        			this.fv_objDrag.move(objrefObj.getOffsetLeft(), objrefObj.getOffsetTop() + this.nTaskProgress, null, this.nTaskHeight - this.nTaskProgress);
        			this.fv_c_objDrag.move(nP_Left, objrefObj.getOffsetTop());
        		}
        		else
        		{
        			this.fv_objDrag.move(objrefObj.getOffsetLeft(), objrefObj.getOffsetTop());
        		}

        		objId	   = arrObjName[0];
        		startDay   = nexacro.toNumber(arrObjName[1]);
        		stcIdx 	   = nexacro.toNumber(arrObjName[2]);
        		endDay	   = this.fnGetStaticDate(parseInt(stcIdx + objTimes) - 1);

        		//Dataset Info Update
        		var nRow = this.dsSchedule.findRow("reserveId", this.fv_objDrag.name);
        		this.dsSchedule.setColumn(nRow, "startDay",	startDay);
        		this.dsSchedule.setColumn(nRow, "endDay",	endDay);
        		this.dsOriginSchedule.setColumn(nRow, "startDay", startDay);
        		this.dsOriginSchedule.setColumn(nRow, "endDay", endDay);

        		//objBtn Info Update
        		var nRowPos = this.dsSchedule.findRow("ID", objId)
        		this.fv_objDrag.startStcIdx				= this.fnGetStaticIndex(startDay.toString());
         		this.fv_objDrag.endStcIdx				= this.fnGetStaticIndex(endDay.toString());
         		this.fv_objDrag.startDay				= nexacro.toNumber(startDay);
         		this.fv_objDrag.endDay					= nexacro.toNumber(endDay);
        		this.fv_objDrag.startStcId  			= objId;
        		this.arrBindPosition[nRow].nChangePos   = nRowPos;

        		//Dataset Row Swap
        		if(nRow != this.nTopIdx)
        		{
        			this.dsTemp.copyRow(0, this.dsSchedule, this.nTopIdx);
        			this.dsSchedule.copyRow(this.nTopIdx, this.dsSchedule, nRow);
        			this.dsSchedule.copyRow(nRow, this.dsTemp, 0);

        			this.dsOriginSchedule.assign(this.dsSchedule);
        			this.fnFormInit();
        		}

        		this.dsSchedule.set_rowposition(this.nTopIdx);
        	}
        };

        //left, top 좌표 기준으로 현재 background의 object 찾기
        this.get_objId = function(nLeft, nTop)
        {
        	var nLeftNum = parseInt(nLeft / this.staWidth);

        	if(nTop >= 168)
        	{
        		nTop += (nTop * 0.15);
        	}

        	var nTopNum  = parseInt(nTop / this.staHeight);
        	this.nTopIdx = nTopNum;

        	var nLeftStartIndex = nexacro.toNumber(this.baseDay.substr(6,2));

        	var nStcIdx = (nLeftNum + nLeftStartIndex);
        	var nStcGetDate = this.fnGetStaticDate(nStcIdx);

        	if(nStcGetDate < 0)
        		return -1;

        	var objStatic = this.divGantt.form.components[this.arrID[nTopNum] + "_" + nStcGetDate + "_" + nStcIdx];

        	return objStatic;
        }

        //move 시점 조정
        this.set_rtnMove = function(obj)
        {
        	var startDay	= obj.startDay;
        	var startStcIdx = this.fnGetStaticIndex(startDay.toString());

        	var bkStatic 	= this.divGantt.form.components[obj.startStcId + "_" + startDay + "_" + startStcIdx];

        	if(this.gfn_Null(bkStatic))
        		return;

        	var nLeft = bkStatic.getOffsetLeft();
        	var nWidth = this.fv_objDrag.getOffsetWidth();
        	var nRow = this.dsSchedule.findRow("reserveId", this.fv_objDrag.id);

        	var nTop  = bkStatic.getOffsetTop() + this.nTaskProgress;
        	var nP_Left = nLeft + nWidth * (this.dsSchedule.getColumn(nRow, "progress")/100) - 5;

        	this.fv_objDrag.move(nLeft, nTop);
        	this.fv_c_objDrag.move(nP_Left, nTop - this.nTaskProgress);
        };

        this.fnValidation = function(nVal1, nVal2)
        {
        	var fromDate = nexacro.toNumber(nVal1);
        	var toDate = nexacro.toNumber(nVal2);

        	if(fromDate > toDate)
        		return false;
        	else
        		return true;
        };

        this.fnGetMaxReserveId = function(mileStone)
        {
        	var nMax = -987654321;
        	var nIdx = mileStone == 0 ? 6 : 9;
        	var nPrefix = mileStone == 0 ? "button" : "milestone";

        	for(var i=0; i<this.dsSchedule.rowcount; i++)
        	{
        		var nVal = nexacro.toNumber(this.dsSchedule.getColumn(i, "reserveId").toString().substr(nIdx));

        		if(nMax < nVal)
        			nMax = nVal;
        	}

        	var nRVal = (nMax + 1).toString();

        	if(nRVal < 10)
        		nRVal = this.gfn_lPad(nRVal, "0", 2)

        	return nPrefix + nRVal;
        };

        this.fnPopupCallBack = function(popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "TaskInformation" :

        		if(!this.gfn_Null(popupArg))
        		{
        			var btnId = this.dsSchedule.getColumn(0, "reserveId");
        			var objBtn;

        			if(!this.gfn_Null(btnId))
        			{
        				objBtn = this.divGantt.form.components[btnId];
        			}

        			var ID 		  = popupArg["ID"];
        			var mileStone = popupArg["mileStone"];
        			var startDay  = popupArg["startDay"];
        			var endDay 	  = popupArg["endDay"];
        			var notice 	  = popupArg["notice"];
        			var reserveId = this.fnGetMaxReserveId(mileStone);
        			var type 	  = popupArg["taskType"];
        			var progress  = popupArg["progress"];

        			var nRow = this.dsSchedule.addRow();

        			//화면에 표시되는 데이터셋에 값 저장
        			this.dsSchedule.setColumn(nRow, "ID", ID);
        			this.dsSchedule.setColumn(nRow, "mileStone", mileStone);
        			this.dsSchedule.setColumn(nRow, "startDay", startDay);
        			this.dsSchedule.setColumn(nRow, "endDay", endDay);
        			this.dsSchedule.setColumn(nRow, "notice", notice);
        			this.dsSchedule.setColumn(nRow, "reserveId", reserveId);
        			this.dsSchedule.setColumn(nRow, "type", type);
        			this.dsSchedule.setColumn(nRow, "progress", progress);

        			nRow = this.dsOriginSchedule.addRow();

        			//원본데이터 데이터셋에 값 저장
        			this.dsOriginSchedule.setColumn(nRow, "ID", ID);
        			this.dsOriginSchedule.setColumn(nRow, "mileStone", mileStone);
        			this.dsOriginSchedule.setColumn(nRow, "startDay", startDay);
        			this.dsOriginSchedule.setColumn(nRow, "endDay", endDay);
        			this.dsOriginSchedule.setColumn(nRow, "notice", notice);
        			this.dsOriginSchedule.setColumn(nRow, "reserveId", reserveId);
        			this.dsOriginSchedule.setColumn(nRow, "type", type);
        			this.dsOriginSchedule.setColumn(nRow, "progress", progress);

        			if(!this.gfn_Null(objBtn))
        			{
        				//초기화 하면서 재조회
        				this.fnFormInit();
        			}
        			else
        			{
        				//초기화만
        				this.fnJustDeleteGantt();
        			}
        		}
        		else
        			this.setTimer(1, 100);
        		break;
        	}
        }


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		//간트 차트 추가
        		case "btn_Plus" :
        			//시간축 정지
        			this.killTimer(1);

        			var sArgument = {

        							};

        			this.commUtil.popup(this, "TaskInformation", "PoC::TaskInformation.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        		break;
        		//간트 차트 제거
        		case "btn_Minus" :
        			var btnId = this.dsSchedule.getColumn(0, "reserveId");
        			var objBtn;

        			if(!this.gfn_Null(btnId))
        			{
        				objBtn = this.divGantt.form.components[btnId];
        			}

        			var objApp = nexacro.getApplication();
        			var bOK;
        			bOK = objApp.confirm("Please check it carefully.");

        			if(bOK)
        			{
        				var nReserveId = this.dsSchedule.getColumn(this.dsSchedule.rowposition, "reserveId");

        				//화면에 표시되는 데이터셋에서 제거
        				this.dsSchedule.deleteRow(this.dsSchedule.rowposition);

        				//원본데이터 데이터셋에서 제거
        				var nRow = this.dsOriginSchedule.findRow("reserveId", nReserveId);
        				this.dsOriginSchedule.deleteRow(nRow);
        			}

        			if(!this.gfn_Null(objBtn))
        			{
        				//초기화 하면서 재조회
        				this.fnFormInit();
        			}
        			else
        			{
        				//초기화만
        				this.fnJustDeleteGantt();
        			}
        		break;
        		//간트 차트 조회
        		case "btn_Search" :
        			if(this.fnValidation(this.cal_From.value, this.cal_To.value))
        			{
        				for(var i=0, nlen=this.arrHeadClickIdx.length; i<nlen; i++)
        				{
        					if(this.arrHeadClickIdx[i] > 0)
        					{
        						this.gfn_ClearSort(this.Grid00, i);
        					}
        				}
        				this.fnFormInit();
        			}
        			else
        			{
        				alert("시작일은 종료일보다 클 수 없습니다.");
        			}
        		break;
        	}
        };

        //간트 차트 재조회
        this.dsSchedule_oncolumnchanged = function(obj, e)
        {
        	if(this.DragFlag == 1)
        	{
        		this.dsSchedule.set_rowposition(e.row);
        		var btnId = obj.getColumn(e.row, "reserveId");
        		this.fnGanttRedraw(btnId, e.newvalue, e.col, e.row);
        	}
        };

        //Drag로 이벤트 탄 후 oncolumnchanged 이벤트로 가는 것을 막기위함
        this.Grid00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.DragFlag = 1;
        	}
        };

        this.Grid00_onvscroll = function(obj, e)
        {
        	this.divGantt.form.vscrollbar.set_pos(e.pos);
        };

        this.divGantt_onvscroll = function(obj, e)
        {
        	this.Grid00.vscrollbar.set_pos(e.pos);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gantt_onload,this);
            this.addEventHandler("ondragmove",this.gantt_ondragmove,this);
            this.addEventHandler("ontimer",this.gantt_ontimer,this);
            this.Grid00.addEventHandler("onkeydown",this.Grid00_onkeydown,this);
            this.Grid00.addEventHandler("onvscroll",this.Grid00_onvscroll,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Search.addEventHandler("onlbuttondown",this.btn_search_onlbuttondown,this);
            this.btn_Search.addEventHandler("onlbuttonup",this.btn_search_onlbuttonup,this);
            this.btn_Plus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Minus.addEventHandler("onclick",this.comm_Click,this);
            this.dsSchedule.addEventHandler("oncolumnchanged",this.dsSchedule_oncolumnchanged,this);
        };

        this.loadIncludeScript("poc03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
