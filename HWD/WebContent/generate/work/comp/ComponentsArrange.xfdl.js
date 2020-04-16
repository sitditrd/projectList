(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ComponentsArrange");
            this.set_titletext("Position&Arrangement");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_grip","408","283","12","12",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_image("URL(\"theme://images/img_grip.png\")");
            obj.set_cursor("nw-resize");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","81","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Position - Anchor");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_base","0","115",null,null,"img_grip:-4","img_grip:-7",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("3px solid #ff5151");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","10","10","100","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("0");
            obj.set_border("1px solid crimson, 1px dashed, 1px dashed, 1px solid crimson");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_value("Left Top");
            obj.set_textAlign("center");
            obj.set_text("Left Top");
            this.div_base.addChild(obj.name, obj);

            obj = new Edit("Edit01",null,"10","100","30","10",null,null,null,null,null,this.div_base.form);
            obj.set_taborder("1");
            obj.set_border("1px solid crimson, 1px solid crimson, 1px dashed, 1px dashed crimson");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_value("Right Top");
            obj.set_textAlign("center");
            obj.set_text("Right Top");
            this.div_base.addChild(obj.name, obj);

            obj = new Edit("Edit02","10",null,"100","30",null,"10",null,null,null,null,this.div_base.form);
            obj.set_taborder("2");
            obj.set_border("1px dashed, 1px dashed, 1px solid crimson, 1px solid crimson");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_value("Left Bottom");
            obj.set_textAlign("center");
            obj.set_text("Left Bottom");
            this.div_base.addChild(obj.name, obj);

            obj = new Edit("Edit03",null,null,"100","30","10","10",null,null,null,null,this.div_base.form);
            obj.set_taborder("3");
            obj.set_border("1px dashed, 1px solid crimson, 1px solid crimson, 1px dashed");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_value("Right Bottom");
            obj.set_textAlign("center");
            obj.set_text("Right Bottom");
            this.div_base.addChild(obj.name, obj);

            obj = new Edit("Edit04","10","50",null,null,"10","50",null,null,null,null,this.div_base.form);
            obj.set_taborder("4");
            obj.set_border("1px solid crimson");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_value("Left Top Right Bottom");
            obj.set_textAlign("center");
            obj.set_text("Left Top Right Bottom");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static60","0","0",null,"71","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("넥사크로 플랫폼은 컴포넌트 위치를 별도의 코딩없이 속성 및 Position Editor 제공으로 손쉽게 배치할 수 있는 환경을 제공합니다. Drag&Drop으로 컴포넌트의 사이즈를 조정, Play 버튼과 Stop 버튼으로 기능을 확인할 수 있습니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","img_grip:15","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Arrangement Position");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnStart","170","img_grip:17","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("▶");
            obj.set_font("normal 10px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnStop","193","img_grip:17","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("■");
            obj.set_font("normal 10px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_ver","0","Static01:10","34.69%","297",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_box01");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseB","15","120","90","30",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("0");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_cssclass("btn_WF_arrange03");
            obj.set_border("1px solid #9c9c9c");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button17","15",null,"90","30",null,"btn_baseB:10",null,null,null,null,this.div_ver.form);
            obj.set_taborder("1");
            obj.set_positionstep("0");
            obj.set_text("Move");
            obj.set_cssclass("btn_WF_arrange01");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button18","15","35","90",null,null,"btn_baseB:50",null,null,null,null,this.div_ver.form);
            obj.set_taborder("2");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            obj.set_cssclass("btn_WF_arrange01");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("btn_baseT",null,"140","90","30","14",null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("3");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            obj.set_cssclass("btn_WF_arrange03");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button19",null,"btn_baseT:50","90",null,"14","40",null,null,null,null,this.div_ver.form);
            obj.set_taborder("4");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            obj.set_cssclass("btn_WF_arrange02");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button20",null,"btn_baseT:10","90","30","14",null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_text("Move");
            obj.set_cssclass("btn_WF_arrange02");
            this.div_ver.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","263","24",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("6");
            obj.set_text("☞ Bottom position based on BASE Top");
            obj.set_wordWrap("none");
            obj.set_font("normal 700 9pt/normal \"gothic\",\"Gulim\"");
            this.div_ver.addChild(obj.name, obj);

            obj = new Static("Static00",null,null,"263","27","16","10",null,null,null,null,this.div_ver.form);
            obj.set_taborder("7");
            obj.set_text("☞ Top position based on BASE Bottom");
            obj.set_wordWrap("none");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt/normal \"gothic\",\"Gulim\"");
            this.div_ver.addChild(obj.name, obj);

            obj = new Div("divHor","div_ver:10","Static01:10",null,"297","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_box01");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseR","200","35","80","30",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("0");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            obj.set_cssclass("btn_WF_arrange03");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","80","30","btn_baseR:10",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("1");
            obj.set_positionstep("0");
            obj.set_text("Move");
            obj.set_cssclass("btn_WF_arrange01");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button01","20","35",null,"30","btn_baseR:100",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("2");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            obj.set_cssclass("btn_WF_arrange01");
            this.divHor.addChild(obj.name, obj);

            obj = new Static("Static02","15","5","396","24",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("3");
            obj.set_text("☞ Right position based on BASE Left");
            obj.set_font("bold 9pt/normal \"gothic\",\"Gulim\"");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("btn_baseL","320","226","80","30",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("4");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_cssclass("btn_WF_arrange03");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button22","btn_baseL:10","226","80","30",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("6");
            obj.set_positionstep("0");
            obj.set_text("Move");
            obj.set_cssclass("btn_WF_arrange02");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button21","Button22:10","226",null,"30","10",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            obj.set_cssclass("btn_WF_arrange02");
            this.divHor.addChild(obj.name, obj);

            obj = new Static("Static00",null,null,"396","24","10","8",null,null,null,null,this.divHor.form);
            obj.set_taborder("7");
            obj.set_text("☞ Left position based on BASE Right");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt/normal \"gothic\",\"Gulim\"");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("btn_baseR01","200","75","80","30",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("10");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            obj.set_cssclass("btn_WF_arrange03");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button03",null,"75","80","30","btn_baseR01:10",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("9");
            obj.set_positionstep("0");
            obj.set_text("Move");
            obj.set_cssclass("btn_WF_arrange01");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button02","20","75",null,"30","Button03:10",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("8");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            obj.set_cssclass("btn_WF_arrange01");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("btn_baseR02","200","115","80","30",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("13");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            obj.set_cssclass("btn_WF_arrange03");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button05",null,"115","80","30","btn_baseR02:10",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_text("Move");
            obj.set_cssclass("btn_WF_arrange01");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button04","20","115",null,"30","Button05:10",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("11");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            obj.set_cssclass("btn_WF_arrange01");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("btn_baseL01","320","186","80","30",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("14");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_cssclass("btn_WF_arrange03");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button06","btn_baseL01:10","186","80","30",null,null,null,null,null,null,this.divHor.form);
            obj.set_taborder("15");
            obj.set_positionstep("0");
            obj.set_text("Move");
            obj.set_cssclass("btn_WF_arrange02");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("Button07","Button06:10","186",null,"30","10",null,null,null,null,null,this.divHor.form);
            obj.set_taborder("16");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            obj.set_cssclass("btn_WF_arrange02");
            this.divHor.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"71","24","24","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'imagerc::img_b_select.png\') no-repeat center center linear-gradient(to bottom,#fefefe 0%,#ecece5 100%) transparent");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","623","divHor:0","207","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ComponentsArrange.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    ComponentsArrange.xfdl
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
        this.nCnt = 0;
        this.sFlag = "A";
        this.arrPos = new Array();
        this.nMousePointer;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.ComponentsArrange_onload = function(obj,e)
        {
        	this.arrPos[0] = this.img_grip.left;
        	this.arrPos[1] = this.img_grip.top;
        	this.arrPos[2] = this.img_grip.width;
        	this.arrPos[3] = this.img_grip.height;
        };

        /**
         * @description 화면 load시 초기설정 event
        */
        this.ComponentsArrange_ontimer = function(obj,e)
        {
        	if (e.timerid == 1) {
        		var arrObj = new Array();
        		arrObj[0] = this.divHor.form.btn_baseR;
        		arrObj[1] = this.divHor.form.btn_baseR01;
        		arrObj[2] = this.divHor.form.btn_baseR02;
        		arrObj[3] = this.divHor.form.btn_baseL;
        		arrObj[4] = this.divHor.form.btn_baseL01;
        		arrObj[5] = this.div_ver.form.btn_baseB;
        		arrObj[6] = this.div_ver.form.btn_baseT;

        		this.fnMove(arrObj);
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
        * fnMove : 사용자 설정 이벤트
        * @param {array}  arrObj - component array
        * @return : N/A
        * @example :
        */
        this.fnMove = function(arrObj)
        {
        	if (this.nCnt == 100) {
        		this.sFlag = "B";
        	} else if (this.nCnt == 0) {
        		this.sFlag = "A";
        	}

        	if (this.sFlag == "A") {
        		arrObj[0].move(parseInt(arrObj[0].left) + 1, parseInt(arrObj[0].top));
        		arrObj[1].move(parseInt(arrObj[1].left) + 1, parseInt(arrObj[1].top));
        		arrObj[2].move(parseInt(arrObj[2].left) + 1, parseInt(arrObj[2].top));
        		arrObj[3].move(parseInt(arrObj[3].left) - 1, parseInt(arrObj[3].top));
        		arrObj[4].move(parseInt(arrObj[4].left) - 1, parseInt(arrObj[4].top));
        		arrObj[5].move(parseInt(arrObj[5].left), parseInt(arrObj[5].top) + 1);
        		arrObj[6].set_top(parseInt(arrObj[6].top) - 1);

        		this.nCnt ++;
        	} else {
        		arrObj[0].move(parseInt(arrObj[0].left) - 1, parseInt(arrObj[0].top));
        		arrObj[1].move(parseInt(arrObj[1].left) - 1, parseInt(arrObj[1].top));
        		arrObj[2].move(parseInt(arrObj[2].left) - 1, parseInt(arrObj[2].top));
        		arrObj[3].move(parseInt(arrObj[3].left) + 1, parseInt(arrObj[3].top));
        		arrObj[4].move(parseInt(arrObj[4].left) + 1, parseInt(arrObj[4].top));
        		arrObj[5].move(parseInt(arrObj[5].left), parseInt(arrObj[5].top) - 1);
        		arrObj[6].set_top(parseInt(arrObj[6].top) + 1);

        		this.nCnt--;
        	}

        	this.divHor.form.resetScroll();
        	this.div_ver.form.resetScroll();
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description component position size 조절
        */
        this.ComponentsArrange_ondragmove = function(obj,e)
        {
        	e.sourceobject.move(e.clientx-e.sourceobject.nX, e.clienty-e.sourceobject.nY);
        	this.resetScroll();
        };

        /**
         * @description ondrag이벤트 - 상위컴포넌트로 이벤트 전파
        */
        this.img_grip_ondrag = function(obj,e)
        {
        	return true;
        };

        /**
         * @description drag시작
        */
        this.img_grip_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;

        	this.nMousePointer = obj.nY;
        };

        /**
         * @description drag끝
        */
        this.img_grip_onlbuttonup = function(obj,e)
        {
        	this.parent.parent.divWork.setOffsetHeight(this.divHor.getOffsetBottom() + 10);
        	this.parent.parent.parent.setOffsetHeight(this.parent.parent.divWork.getOffsetHeight() + 189);

        	this.resetScroll();

        	if (this.nMousePointer != 2 || this.nMousePointer == 2) {
        		this.parent.parent.parent.parent.scrollTo(0, 0);
        	}

        	this.parent.parent.resetScroll();
        };

        /**
         * @description 재생버튼 정지버튼 클릭 이벤트
        */
        this.fnComBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnStart" :
        			this.setTimer(1, 50);
        			break;

        		case "btnStop" :
        			this.killTimer(1);
        			break;

        		case "btnInit" :
        			this.img_grip.set_left(this.arrPos[0]);
        			this.img_grip.set_top(this.arrPos[1]);
        			this.img_grip.set_width(this.arrPos[2]);
        			this.img_grip.set_height(this.arrPos[3]);

        			this.killTimer(1);

        			this.resetScroll();
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.ComponentsArrange_ondragmove,this);
            this.addEventHandler("ontimer",this.ComponentsArrange_ontimer,this);
            this.addEventHandler("onload",this.ComponentsArrange_onload,this);
            this.img_grip.addEventHandler("ondrag",this.img_grip_ondrag,this);
            this.img_grip.addEventHandler("onlbuttondown",this.img_grip_onlbuttondown,this);
            this.img_grip.addEventHandler("onlbuttonup",this.img_grip_onlbuttonup,this);
            this.btnStart.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnStop.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.div_ver.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);
            this.div_ver.form.btn_baseB.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_ver.form.btn_baseB.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_ver.form.btn_baseT.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_ver.form.btn_baseT.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.divHor.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);
            this.divHor.form.btn_baseR.addEventHandler("ondrag",this.obj_ondrag,this);
            this.divHor.form.btn_baseR.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.divHor.form.btn_baseL.addEventHandler("ondrag",this.obj_ondrag,this);
            this.divHor.form.btn_baseL.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.divHor.form.btn_baseR01.addEventHandler("ondrag",this.obj_ondrag,this);
            this.divHor.form.btn_baseR01.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.divHor.form.btn_baseR02.addEventHandler("ondrag",this.obj_ondrag,this);
            this.divHor.form.btn_baseR02.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.divHor.form.btn_baseL01.addEventHandler("ondrag",this.obj_ondrag,this);
            this.divHor.form.btn_baseL01.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.btnInit.addEventHandler("onclick",this.fnComBtnOnClick,this);
        };

        this.loadIncludeScript("ComponentsArrange.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
