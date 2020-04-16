(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("poc02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">-전체-</Col></Row><Row><Col id=\"value\">전투기</Col><Col id=\"code\">전투기</Col></Row><Row><Col id=\"value\">공격기</Col><Col id=\"code\">공격기</Col></Row><Row><Col id=\"value\">훈련기</Col><Col id=\"code\">훈련기</Col></Row><Row><Col id=\"value\">수송기</Col><Col id=\"code\">수송기</Col></Row><Row><Col id=\"value\">공중급유기</Col><Col id=\"code\">공중급유기</Col></Row><Row><Col id=\"value\">정찰기</Col><Col id=\"code\">정찰기</Col></Row><Row><Col id=\"value\">대잠초계기</Col><Col id=\"code\">대잠초계기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">Pink</Col><Col id=\"code\">Pink</Col></Row><Row><Col id=\"value\">Melon</Col><Col id=\"code\">Melon</Col></Row><Row><Col id=\"value\">Orange</Col><Col id=\"code\">Orange</Col></Row><Row><Col id=\"value\">White</Col><Col id=\"code\">White</Col></Row><Row><Col id=\"value\">Mint</Col><Col id=\"code\">Mint</Col></Row><Row><Col id=\"value\">Periwinkle</Col><Col id=\"code\">Periwinkle</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">F-4E 팬텀</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-5A/B 프리덤파이터</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-5E/F 프리덤 파이터</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">KF-5E/F 제공호</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-15K 슬램 이글</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-16 파이팅 팰콘</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">KF-16C/D 보라매</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-35A 라이트닝</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">FA-50 파이팅이글</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-51 무스탕</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-86 세이버</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column0\">공격기</Col><Col id=\"Column1\">TA-50</Col></Row><Row><Col id=\"Column0\">공격기</Col><Col id=\"Column1\">KA-1</Col></Row><Row><Col id=\"Column0\">공격기</Col><Col id=\"Column1\">A-37</Col></Row><Row><Col id=\"Column0\">훈련기</Col><Col id=\"Column1\">CAP-10</Col></Row><Row><Col id=\"Column1\">L-2</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">L-4</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">L-5</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-6 텍산</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-103</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">KT-1 웅비</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-59 호크</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-50 골든이글</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">KC-100 나라온</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-37</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-41</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">부활호</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">C-130J 슈퍼 허큘리스</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">C-130 허큘리스</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">CN-235</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">보잉 747-400</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">보잉 737-300</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">VCN-235</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">HS-748</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">VC-118</Col></Row><Row><Col id=\"Column0\">공중급유기</Col><Col id=\"Column1\">에어버스 A330 MRTT</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RQ-101</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RQ-102K</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RKF-16A</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RF-4C</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RF-5A</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RF-86F</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">금강 정찰기</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">백두 정찰기</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">E-737 피스아이</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">P-3CK 오라이언</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">P-8 포세이돈</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">S-3B 바이킹</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">세스나 F-406 캐러밴</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"t1\" type=\"STRING\" size=\"256\"/><Column id=\"t2\" type=\"STRING\" size=\"256\"/><Column id=\"t3\" type=\"STRING\" size=\"256\"/><Column id=\"t4\" type=\"STRING\" size=\"256\"/><Column id=\"t5\" type=\"STRING\" size=\"256\"/><Column id=\"t6\" type=\"STRING\" size=\"256\"/><Column id=\"t7\" type=\"STRING\" size=\"256\"/><Column id=\"t8\" type=\"STRING\" size=\"256\"/><Column id=\"t9\" type=\"STRING\" size=\"256\"/><Column id=\"t10\" type=\"STRING\" size=\"256\"/><Column id=\"t11\" type=\"STRING\" size=\"256\"/><Column id=\"t12\" type=\"STRING\" size=\"256\"/><Column id=\"t13\" type=\"STRING\" size=\"256\"/><Column id=\"t14\" type=\"STRING\" size=\"256\"/><Column id=\"t15\" type=\"STRING\" size=\"256\"/><Column id=\"t16\" type=\"STRING\" size=\"256\"/><Column id=\"t17\" type=\"STRING\" size=\"256\"/><Column id=\"t18\" type=\"STRING\" size=\"256\"/><Column id=\"t19\" type=\"STRING\" size=\"256\"/><Column id=\"t20\" type=\"STRING\" size=\"256\"/><Column id=\"t21\" type=\"STRING\" size=\"256\"/><Column id=\"t22\" type=\"STRING\" size=\"256\"/><Column id=\"t23\" type=\"STRING\" size=\"256\"/><Column id=\"t24\" type=\"STRING\" size=\"256\"/><Column id=\"t25\" type=\"STRING\" size=\"256\"/><Column id=\"t26\" type=\"STRING\" size=\"256\"/><Column id=\"t27\" type=\"STRING\" size=\"256\"/><Column id=\"t28\" type=\"STRING\" size=\"256\"/><Column id=\"t29\" type=\"STRING\" size=\"256\"/><Column id=\"t30\" type=\"STRING\" size=\"256\"/><Column id=\"t31\" type=\"STRING\" size=\"256\"/><Column id=\"t32\" type=\"STRING\" size=\"256\"/><Column id=\"t33\" type=\"STRING\" size=\"256\"/><Column id=\"t34\" type=\"STRING\" size=\"256\"/><Column id=\"t35\" type=\"STRING\" size=\"256\"/><Column id=\"t36\" type=\"STRING\" size=\"256\"/><Column id=\"t37\" type=\"STRING\" size=\"256\"/><Column id=\"t38\" type=\"STRING\" size=\"256\"/><Column id=\"t39\" type=\"STRING\" size=\"256\"/><Column id=\"t40\" type=\"STRING\" size=\"256\"/><Column id=\"t41\" type=\"STRING\" size=\"256\"/><Column id=\"t42\" type=\"STRING\" size=\"256\"/><Column id=\"t43\" type=\"STRING\" size=\"256\"/><Column id=\"t44\" type=\"STRING\" size=\"256\"/><Column id=\"t45\" type=\"STRING\" size=\"256\"/><Column id=\"t46\" type=\"STRING\" size=\"256\"/><Column id=\"t47\" type=\"STRING\" size=\"256\"/><Column id=\"t48\" type=\"STRING\" size=\"256\"/><Column id=\"t49\" type=\"STRING\" size=\"256\"/><Column id=\"t50\" type=\"STRING\" size=\"256\"/><Column id=\"t51\" type=\"STRING\" size=\"256\"/><Column id=\"t52\" type=\"STRING\" size=\"256\"/><Column id=\"t53\" type=\"STRING\" size=\"256\"/><Column id=\"t54\" type=\"STRING\" size=\"256\"/><Column id=\"t55\" type=\"STRING\" size=\"256\"/><Column id=\"t56\" type=\"STRING\" size=\"256\"/><Column id=\"t57\" type=\"STRING\" size=\"256\"/><Column id=\"t58\" type=\"STRING\" size=\"256\"/><Column id=\"t59\" type=\"STRING\" size=\"256\"/><Column id=\"t60\" type=\"STRING\" size=\"256\"/><Column id=\"t61\" type=\"STRING\" size=\"256\"/><Column id=\"t62\" type=\"STRING\" size=\"256\"/><Column id=\"t63\" type=\"STRING\" size=\"256\"/><Column id=\"t64\" type=\"STRING\" size=\"256\"/><Column id=\"t65\" type=\"STRING\" size=\"256\"/><Column id=\"t66\" type=\"STRING\" size=\"256\"/><Column id=\"t67\" type=\"STRING\" size=\"256\"/><Column id=\"t68\" type=\"STRING\" size=\"256\"/><Column id=\"t69\" type=\"STRING\" size=\"256\"/><Column id=\"t70\" type=\"STRING\" size=\"256\"/><Column id=\"t71\" type=\"STRING\" size=\"256\"/><Column id=\"t72\" type=\"STRING\" size=\"256\"/><Column id=\"t73\" type=\"STRING\" size=\"256\"/><Column id=\"t74\" type=\"STRING\" size=\"256\"/><Column id=\"t75\" type=\"STRING\" size=\"256\"/><Column id=\"t76\" type=\"STRING\" size=\"256\"/><Column id=\"t77\" type=\"STRING\" size=\"256\"/><Column id=\"t78\" type=\"STRING\" size=\"256\"/><Column id=\"t79\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">F-4E 팬텀</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-5A/B 프리덤파이터</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-5E/F 프리덤 파이터</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">KF-5E/F 제공호</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-15K 슬램 이글</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-16 파이팅 팰콘</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">KF-16C/D 보라매</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-35A 라이트닝</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">FA-50 파이팅이글</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-51 무스탕</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column1\">F-86 세이버</Col><Col id=\"Column0\">전투기</Col></Row><Row><Col id=\"Column0\">공격기</Col><Col id=\"Column1\">TA-50</Col></Row><Row><Col id=\"Column0\">공격기</Col><Col id=\"Column1\">KA-1</Col></Row><Row><Col id=\"Column0\">공격기</Col><Col id=\"Column1\">A-37</Col></Row><Row><Col id=\"Column0\">훈련기</Col><Col id=\"Column1\">CAP-10</Col></Row><Row><Col id=\"Column1\">L-2</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">L-4</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">L-5</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-6 텍산</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-103</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">KT-1 웅비</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-59 호크</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-50 골든이글</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">KC-100 나라온</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-37</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">T-41</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column1\">부활호</Col><Col id=\"Column0\">훈련기</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">C-130J 슈퍼 허큘리스</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">C-130 허큘리스</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">CN-235</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">보잉 747-400</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">보잉 737-300</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">VCN-235</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">HS-748</Col></Row><Row><Col id=\"Column0\">수송기</Col><Col id=\"Column1\">VC-118</Col></Row><Row><Col id=\"Column0\">공중급유기</Col><Col id=\"Column1\">에어버스 A330 MRTT</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RQ-101</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RQ-102K</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RKF-16A</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RF-4C</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RF-5A</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">RF-86F</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">금강 정찰기</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">백두 정찰기</Col></Row><Row><Col id=\"Column0\">정찰기</Col><Col id=\"Column1\">E-737 피스아이</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">P-3CK 오라이언</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">P-8 포세이돈</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">S-3B 바이킹</Col></Row><Row><Col id=\"Column0\">대잠초계기</Col><Col id=\"Column1\">세스나 F-406 캐러밴</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static35","10","10",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","27","20","83","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("운송수단");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","290","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일정");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFrom","348","20","148","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","512","20","148","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","493","20","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","70",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsGrid");
            obj.set_selecttype("area");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"128\" band=\"left\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"운송수단\"/><Cell col=\"1\" rowspan=\"2\" text=\"기종\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","100","20","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("Dataset01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_text("-전체-");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","710","20","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("색상선택");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","782","20","148","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("Dataset02");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_text("빨강");
            obj.set_value("빨강");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00_00",null,"18","59","35","21",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc02.xfdl", function() {


        //화면초기화
        this.poc02_onload = function(obj,e)
        {
        	this.Combo00.set_index(0);
        	this.Combo01.set_index(0);
        	this.calFrom.set_value("20200328");
        	this.calTo.set_value("20200425");

        	this._orgFormat = this.Grid00.getFormatString();
        };

        //운송수단 선택시
        this.Combo00_onitemchanged = function(obj,e)
        {
        // 	if(this.Combo00.value == "" || this.Combo00.value == undefined)
        // 	{
        // 		this.dsGrid.filter("");
        // 	}
        // 	else
        // 	{
        // 		this.dsGrid.filter("Column0=='" + this.Combo00.value + "'");
        // 	}
        };

        //조회버튼
        this._orgFormat = this.Grid00.getFormatString();
        this.btnSearch00_00_onclick = function(obj,e)
        {
        	this.dsGrid.copyData(this.dsData);
        	if(this.Combo00.value == "" || this.Combo00.value == undefined)
        	{
        		this.dsGrid.filter("");
        	}
        	else
        	{
        		this.dsGrid.filter("Column0=='" + this.Combo00.value + "'");
        	}
        	this.Grid00.set_formats(this._orgFormat);
        	this.fnCreateGrid();
        };

        this.fnCreateGrid = function()
        {
        	//text날짜 값
        	var startDay = this.calFrom.value;
        	var endDay = this.calTo.value;

        	//Date날짜 값
        	var vFromDate = new Date(parseInt(startDay.substring(0,4),  10), parseInt(startDay.substring(4,6)-1,  10), parseInt(startDay.substring(6,8), 10));
            var vToDate = new Date(parseInt(endDay.substring(0,4),  10), parseInt(endDay.substring(4,6)-1,  10), parseInt(endDay.substring(6,8), 10));

        	//날짜 차이
        	var nDays = parseInt((vToDate - vFromDate)/(1000*60*60*24));

        	//그리드 컬럼 동적 생성
        	this.Grid00.set_enableevent(false);
        	this.Grid00.set_enableredraw(false);
        	for(var i = 0 ; i <= nDays ; i++)
        	{
        		this.dsGrid.addColumn("t"+i);
        		this.Grid00.appendContentsCol("body");
        		this.Grid00.setCellProperty("body", i+2, "cssclass","bind:t" + i);
        	}
        	this.Grid00.set_enableevent(true);
        	this.Grid00.set_enableredraw(true);

        	//그리드 헤드셀 text값 설정
        	var startCellIndex = this.Grid00.getCellCount("body");
        	var sDate = vFromDate;//기준날짜
        	var sToday;//DD
        	var nCnt = 0;//현재 cell index
        	var headerColIdx = 2;
        	var month = sDate.getMonth();
        	var mergeColStart = 2;
        	var mergeCellIdx = 2;
        	var standard = 2;

        	//헤더 설정
        	this.Grid00.set_enableevent(false);
        	this.Grid00.set_enableredraw(false);

        	while(true)
        	{
        		//toDate까지 뿌려주고 break;
        		if(vToDate - sDate  < 0)
        		{
        			//헤더머지
        			this.Grid00.mergeContentsCell("head", 0, mergeColStart , 0, headerColIdx-1, mergeCellIdx, false);
        			break;
        		}

        		//일
        		sToday = sDate.getDate();
        		this.Grid00.setCellProperty("head", standard + nCnt, "text", (sDate.getMonth()+1) + "월");
        		this.Grid00.setCellProperty("head", startCellIndex + nCnt, "text", String(sToday));//두번째줄 n번째

        		//월이 넘어갔을 경우
        		if(sDate.getMonth().toString() != month.toString())
        		{
        			month = sDate.getMonth();

        			//헤더머지
        			//this.Grid00.setCellProperty("head", mergeColStart, "text", sDate.getMonth() + "월");

        			//이미 다음달 넘어갔으니 idx - 1
        			this.Grid00.mergeContentsCell("head", 0, mergeColStart, 0, headerColIdx-1, mergeCellIdx, false);

        			nCnt = nCnt - (headerColIdx - mergeColStart) + 1;
        			mergeColStart = headerColIdx;
        			mergeCellIdx++;
        		}

        		//다음날짜, index ++
        		sDate.setDate(sDate.getDate() + 1);
        		nCnt++;
        		headerColIdx++;
        	}

        	this.Grid00.set_enableevent(true);
        	this.Grid00.set_enableredraw(true);
        }


        this._startColMin = 1000000;
        this._endColMax = -1;
        this.Grid00_onselectchanged = function(obj,e)
        {
        	this._startCol = parseInt(e.selectstartcol);
        	this._endCol   = parseInt(e.selectendcol);


        	var temp = "";

        	if(this._startCol > this._endCol)
        	{
        		temp = this._endCol;
        		this._endCol = this._startCol;
        		this._startCol = temp;
        	}
        	//두칸이상 선택
        	if(this._endCol - this._startCol < 2)
        	{
        		return;
        	}

        	if(this._startCol < this._startColMin)
        	{
        		temp = this._startColMin;
        		this._startColMin = this._startCol;
        		this._startCol = temp;
        	}
        	if(this._endColMax < this._endCol)
        	{
        		temp = this._endColMax;
        		this._endColMax = this._endCol;
        		this._endCol = temp;
        	}


        	var nCol = this._endCol;

        	for(var i = this._startColMin ; i <= this._endColMax ; i++)
        	{
        		this.dsGrid.setColumn(this.currow, "t" + (i-2), "");
        	}

        	for(var i = this._startCol ; i <= this._endCol ; i++)
        	{
        		this.dsGrid.setColumn(this.currow, "t" + (i-2), this.Combo01.value);
        	}
        // 	if(nCol > this._startCol)
        // 	{
        // 		for(var i = this._startCol ; i < nCol ; i++)
        // 		{
        // 			this.dsGrid.setColumn(this.currow, "t" + (i-2), this.Combo01.value);
        // 		}
        // 	}
        // 	else
        // 	{
        // 		for(var i = nCol ; i < this._startCol ; i++)
        // 		{
        // 			this.dsGrid.setColumn(this.currow, "t" + (i-2), this.Combo01.value);
        // 		}
        // 	}
        };

        this._startRow;
        this._endRow;
        this._startCol;
        this._endCol;

        this.currow = -1;
        this.Grid00_ondrag = function(obj,e)
        {
        	this._startCol = e.col;
        	this.currow = e.row;
        	if(this._startCol  < 0 ) //|| this._startRow < 0
        	{
        		return false;
        	}
        	return true;
        };

        //셀선택이 row를 벗어나지 않게 한다.
        this.Grid00_ondragmove = function(obj,e)
        {
        	if(e.cell < 0)
        	{
        // 		for(var i = nCol ; i < this._startCol ; i++)
        // 		{
        // 			this.dsGrid.setColumn(this.currow, "t" + (i-2), this.Combo01.value);
        // 		}
        // 		var nRtn = this.Grid00.mergeCell( this._startCol, this._endCol, this._startRow, this._endRow );

        		//다 지워줘야징
        		//return;

        	}
        	//var nCol = e.cell;
        // 	var nCol = this._endCol;
        // 	trace(">>>"+ nCol);
        // 	if(nCol > this._startCol)
        // 	{
        // 		for(var i = this._startCol ; i < nCol ; i++)
        // 		{
        // 			this.dsGrid.setColumn(this.currow, "t" + (i-2), this.Combo01.value);
        // 		}
        // 	}
        // 	else
        // 	{
        // 		for(var i = nCol ; i < this._startCol ; i++)
        // 		{
        // 			this.dsGrid.setColumn(this.currow, "t" + (i-2), this.Combo01.value);
        // 		}
        // 	}

        	//this._startRow = parseInt(this.currow);
        	//this._endRow   = parseInt(this.currow);
        	//this._startCol = parseInt(e.selectstartcol);
        	//this._endCol   = parseInt(e.col);

        	//merge
        	//var nRtn = this.Grid00.mergeCell( this._startCol, this._endCol, this._startRow, this._endRow );
        };

        this.Grid00_ondrop = function(obj,e)
        {
        	trace("ondrop");//이 이벤트가 안타는걸 무슨수로 ..
        	//그리드가 밖을 벗어났을 때
        	if(this._startCol  < 0 ) //|| this._startRow < 0
        	{
        		return;
        	}
        //
        // 	if(e.col < 0)
        // 	{
        // 		e.col = this._endCol;
        // 	}
        //
        // 	this._startRow = parseInt(this.currow);
        // 	this._endRow   = parseInt(this.currow);
        // 	//this._startCol = parseInt(e.selectstartcol);
        // 	this._endCol   = parseInt(this);
        //

        	if(this._startCol > this._endCol)
        	{
        		var temp = "";
        		temp = this._endCol;
        		this._endCol = this._startCol;
        		this._startCol = temp;
        	}

        	trace("ondrop");
        	trace("_startCol >" + this._startCol);
        	trace("_endCol >" + this._endCol);

        	//dataset연결해서 css값 먹이기
        	for(var nCol = this._startCol ; nCol <= this._endCol; nCol++)
        	{
        		this.dsGrid.setColumn(this.currow, "t" + (nCol-2), this.Combo01.value);
        	}

        	var nRtn = this.Grid00.mergeCell( this._startCol, this._endCol, this.currow, this.currow );

        	if(!nRtn)
        	{
        		for(var nCol = this._startCol ; nCol <= this._endCol; nCol++)
        		{
        			this.dsGrid.setColumn( this.currow, "t" + (nCol-2), "");
        		}
        		alert("Merge할 수 없습니다.");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.poc02_onload,this);
            this.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.Grid00.addEventHandler("ondrag",this.Grid00_ondrag,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid00.addEventHandler("ondragmove",this.Grid00_ondragmove,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btnSearch00_00.addEventHandler("onclick",this.btnSearch00_00_onclick,this);
        };

        this.loadIncludeScript("poc02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
