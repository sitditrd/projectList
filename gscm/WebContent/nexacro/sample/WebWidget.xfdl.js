(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WebWidget");
            this.set_titletext("사용자 정의 화면 배치");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"col\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"STRING\" size=\"256\"/><Column id=\"colspan\" type=\"STRING\" size=\"256\"/><Column id=\"rowspan\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"url\">sample::WidgetPop01.xfdl</Col><Col id=\"col\">0</Col><Col id=\"row\">0</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col><Col id=\"title\">기본정보</Col></Row><Row><Col id=\"url\">sample::WidgetPop02.xfdl</Col><Col id=\"title\">부서정보</Col><Col id=\"col\">2</Col><Col id=\"row\">0</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col></Row><Row><Col id=\"url\">sample::WidgetPop03.xfdl</Col><Col id=\"title\">메모장</Col><Col id=\"col\">4</Col><Col id=\"row\">0</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col></Row><Row><Col id=\"url\">sample::WidgetPop01.xfdl</Col><Col id=\"title\">기본정보</Col><Col id=\"col\">0</Col><Col id=\"row\">2</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col></Row><Row><Col id=\"url\">sample::WidgetPop02.xfdl</Col><Col id=\"title\">부서정보</Col><Col id=\"col\">2</Col><Col id=\"row\">2</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col></Row><Row><Col id=\"url\">sample::WidgetPop03.xfdl</Col><Col id=\"title\">메모장</Col><Col id=\"col\">4</Col><Col id=\"row\">2</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"col\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"STRING\" size=\"256\"/><Column id=\"colspan\" type=\"STRING\" size=\"256\"/><Column id=\"rowspan\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"url\">webwidget::pop.xfdl</Col><Col id=\"col\">0</Col><Col id=\"row\">0</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col><Col id=\"title\">위젯1</Col></Row><Row><Col id=\"col\">2</Col><Col id=\"row\">0</Col><Col id=\"colspan\">1</Col><Col id=\"rowspan\">1</Col><Col id=\"title\">위젯2</Col><Col id=\"url\">webwidget::pop.xfdl</Col></Row><Row><Col id=\"col\">0</Col><Col id=\"row\">2</Col><Col id=\"colspan\">2</Col><Col id=\"rowspan\">2</Col><Col id=\"title\">위젯3</Col><Col id=\"url\">webwidget::pop.xfdl</Col></Row><Row><Col id=\"url\">webwidget::pop.xfdl</Col><Col id=\"title\">위젯3</Col><Col id=\"col\">0</Col><Col id=\"row\">4</Col><Col id=\"colspan\">6</Col><Col id=\"rowspan\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none");
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
        this.registerScript("WebWidget.xfdl", function() {
        this.WebWidget_onload = function(obj,e)
        {
        	//위젯 생성 함수 호출
        	this.createWidget();
        };

        this.createWidget = function()
        {
        	var i;
        	var nLeft = 0;
        	var nTop = 0;
        	var sUrl;

        	var sTitle;
        	var nCol;
        	var nColSpan;
        	var nRow;
        	var nRowSpan;

        	var objTile;
        	var objTitle;
        	var objWork;
        	var objStTitle;
        	var objBtnDot;
        	var objBtnMin;
        	var objBtnMax;
        	var objBtnClose;

        	var objDs;

        	//Child객체 기본 사이즈
        	this.childwidth = 150;
        	this.childheight = 150;

        	//Child객체 리스트 Dataset
        	objDs = this.Dataset00;

        	//가이드 컴포넌트 생성
        	objTile = new Div("divGuide", 0, 0, this.childwidth, this.childheight);
        	objTile.set_border("1px solid black");
        	this.Div00.form.addChild(objTile.name, objTile);
        	objTile.show();
        	objTile.set_visible(false);

        	//Child객체 생성
        	for(i=0;i<objDs.rowcount;i++)
        	{
        		sUrl = objDs.getColumn(i, "url");
        		sTitle = objDs.getColumn(i, "title");

        		//Child 객체 위치값 가져오기
        		nCol = nexacro.toNumber(objDs.getColumn(i, "col"));
        		nColSpan = nexacro.toNumber(objDs.getColumn(i, "colspan"));
        		nRow = nexacro.toNumber(objDs.getColumn(i, "row"));
        		nRowSpan = nexacro.toNumber(objDs.getColumn(i, "rowspan"));

        		//Child 객체 위치값으로 Position 값 설정
        		nLeft = nCol * this.childwidth;
        		nTop = nRow * this.childheight;
        		nWidth = nColSpan * this.childwidth;
        		nHeight = nRowSpan * this.childheight;

        		//Child 객체 생성
        		objTile = new Div("divTile"+i, nLeft, nTop, nWidth, nHeight);
        		objTile.set_background("#ffffff");
        		//objTile.set_border("1px solid black");
        		objTile.set_border("0px none");
        		this.Div00.form.addChild(objTile.name, objTile);
        		objTile.show();
        		objTile.form.set_scrollbartype("none");
        		objTile.form.set_scrolltype("none");

        		//Child Titlebar 객체 생성
        		objTitle = new Div("divTitle", 0, 0, null, 30, 0, null);
        		objTitle.set_background("#464c57");
        		//objTitle.set_border("1px solid black");
        		objTitle.set_border("0px none");
        		objTile.form.addChild(objTitle.name, objTitle);
        		objTitle.show();
        		objTitle.form.set_scrollbartype("none");
        		objTitle.form.set_scrolltype("none");

        		//Titlebar 타이틀 String 생성
        		objStTitle = new Static("stTitle", 5, 5, null, 20, 99, null);
        		objStTitle.set_cssclass("sta_WF_title02");
        		objStTitle.set_color("#ffffff");
        		objTitle.addChild(objStTitle.name, objStTitle);
        		objStTitle.show();
        		objStTitle.set_text(sTitle);

        		//Titlebar 고정 버튼 생성
        		objBtnDot = new Button("btnDot", null, 5, 20, 20, 77, null);
        		objBtnDot.set_background("url('imagerc::img_top_menu02.png') no-repeat center center");
        		objTitle.addChild(objBtnDot.name, objBtnDot);
        		objBtnDot.show();

        		//Titlebar Min 버튼 생성
        		objBtnMin = new Button("btnMin", null, 5, 20, 20, 53, null);
        		objBtnMin.set_background("url('imagerc::btn_WF_consolMin.png') no-repeat center center");
        		objTitle.addChild(objBtnMin.name, objBtnMin);
        		objBtnMin.show();

        		//Titlebar Max 버튼 생성
        		objBtnMax = new Button("btnMax", null, 5, 20, 20, 29, null);
        		objBtnMax.set_background("url('imagerc::btn_WF_consolMax.png') no-repeat center center");
        		objTitle.addChild(objBtnMax.name, objBtnMax);
        		objBtnMax.show();

        		//Titlebar Close 버튼 생성
        		objBtnClose = new Button("btnClose", null, 5, 20, 20, 5, null);
        		objBtnClose.set_background("url('imagerc::btn_WF_close.png') no-repeat center center");
        		objTitle.addChild(objBtnClose.name, objBtnClose);
        		objBtnClose.show();

        		//Child 객체 Work 영역 생성
        		objWork = new Div("divWork", 0, 30, null, null, 0, 0);
        		objWork.set_border("1px solid black");
        		objTile.form.addChild(objWork.name, objWork);
        		objWork.show();
        		objWork.set_url(sUrl);

        		objTitle.form.addEventHandler("ondrag", this.fn_objTile_ondrag, this);
        		objTitle.form.addEventHandler("onlbuttonup", this.fn_objTile_onlbuttonup, this);
        		objBtnDot.addEventHandler("onclick", this.fn_objDot_onclick, this);
        		objBtnMin.addEventHandler("onclick", this.fn_objMin_onclick, this);
        		objBtnMax.addEventHandler("onclick", this.fn_objMax_onclick, this);
        		objBtnClose.addEventHandler("onclick", this.fn_objClose_onclick, this);

        	}

        	this.Div00.form.resetScroll();
        	this.addEventHandler("ondragmove", this.objForm_ondragmove, this);
        }

        //고정버튼 클릭 시
        this.fn_objDot_onclick = function(obj,  e)
        {
        	if(obj.background=="url('imagerc::img_top_menu01.png') no-repeat center center")
        	{
        		obj.dot = "no_dot";
        		obj.set_background("url('imagerc::img_top_menu02.png') no-repeat center center");
        	}else
        	{
        		obj.dot = "dot";
        		obj.set_background("url('imagerc::img_top_menu01.png') no-repeat center center");
        	}
        }

        //Min버튼 클릭시
        this.fn_objMin_onclick = function(obj,  e)
        {
        	var objTile = obj.parent.parent.parent.parent;

        	//Child 객체 사이즈 원래사이즈로 복원
        	if(objTile.getOffsetHeight()==30)
        	{
        		nLeft = objTile.orgLeft;
        		nTop = objTile.orgTop;
        		nWidth = objTile.orgWidth;
        		nHeight = objTile.orgHeight;

        		objTile.move(nLeft, nTop, nWidth, nHeight);
        	}
        	//Child 객체 사이즈 최소화
        	else
        	{
        		objTile.orgLeft = objTile.getOffsetLeft();
        		objTile.orgTop = objTile.getOffsetTop();
        		objTile.orgWidth = objTile.getOffsetWidth();
        		objTile.orgHeight = objTile.getOffsetHeight();

        		objTile.setOffsetHeight(30);
        	}
        }

        //Max버튼 클릭시
        this.fn_objMax_onclick = function(obj,  e)
        {
        	var nLeft;
        	var nTop;
        	var nWidth;
        	var nHeight;

        	var objTile = obj.parent.parent.parent.parent;

        	objTile.bringToFront();

        	//Child 객체 사이즈 최대화
        	if(obj.background =="url('imagerc::btn_WF_consolMax.png') no-repeat center center")
        	{
        		obj.set_background("url('imagerc::btn_WF_consolNor.png') no-repeat center center");

        		nLeft = 0;
        		nTop = 0;
        		nWidth = objTile.parent.getOffsetWidth();
        		nHeight = objTile.parent.getOffsetHeight();
        		//trace("nWidth = " + nWidth + " >>> " + "nHeight = " + nHeight + " objTile = " + objTile.parent.name);
        		objTile.orgLeft = objTile.getOffsetLeft();
        		objTile.orgTop = objTile.getOffsetTop();
        		objTile.orgWidth = objTile.getOffsetWidth();
        		objTile.orgHeight = objTile.getOffsetHeight();

        		objTile.move(nLeft, nTop, nWidth, nHeight);
        	}
        	//Child 객체 사이즈 원래사이즈로 복원
        	else
        	{
        		obj.set_background("url('imagerc::btn_WF_consolMax.png') no-repeat center center");
        		nLeft = objTile.orgLeft;
        		nTop = objTile.orgTop;
        		nWidth = objTile.orgWidth;
        		nHeight = objTile.orgHeight;

        		objTile.move(nLeft, nTop, nWidth, nHeight);
        	}

        	this.Div00.form.resetScroll();
        }

        //Close 버튼 클릭시
        this.fn_objClose_onclick = function(obj,  e)
        {
        	var objTile = obj.parent.parent.parent.parent;
        	var objWidget = objTile.parent;
        	//trace(objTile.name + " >>> " + objWidget.name);
        	//Child 객체 삭제
        	objWidget.removeChild(objTile.name);
        }

        //Titlebar ondrag 이벤트 발생시
        this.fn_objTile_ondrag = function(obj,  e)
        {
        	//Titlebar or Title Static에서 발생한게 아닐경우 리턴
        	if(e.fromreferenceobject!="[object Static]"&&e.fromreferenceobject!="[object Div]")return false;

        	//고정버튼이 활성화 되어있을 경우 리턴
        	if(obj.btnDot.dot=="dot")return false;

        	this.bDrag = true;

        	this.fv_targetObj = obj.parent.parent.parent;

        	//현재 좌표값 저장
        	this.fv_targetObj.orgLeft = this.fv_targetObj.getOffsetLeft();
        	this.fv_targetObj.orgTop = this.fv_targetObj.getOffsetTop();
        	this.fv_targetObj.orgWidth = this.fv_targetObj.getOffsetWidth();
        	this.fv_targetObj.orgHeight = this.fv_targetObj.getOffsetHeight();

        	//클릭된 좌표값을 userdata로 설정
        	//Titlebar 기준으로 클릭된 마우스 좌표값
        	e.userdata = e.canvasx +","+e.canvasy;

        	//가이드 객체를 최상위로 올리기
        	//trace("111 = " + this.fv_targetObj.name);
        	this.fv_targetObj.parent.divGuide.bringToFront();
        	this.fv_targetObj.parent.divGuide.set_visible(true);

        	//Drag하고자하는 객체를 최상위로 올리기
        	this.fv_targetObj.bringToFront();

        	return true;
        }

        //form ondragmove 이벤트 발생시
        this.objForm_ondragmove = function(obj,  e)
        {
        	var arrPoint = e.userdata.split(",");

        	//현재마우스 좌표값(form기준) - Drag시 클릭된 마우스 좌표값(titlebar 기준)
        	//var nLeft = e.canvasx - arrPoint[0];
        	//var nTop = e.canvasy - arrPoint[1];
        	var nLeft = e.canvasx - this.Div00.getOffsetLeft()-arrPoint[0];
        	var nTop = e.canvasy - this.Div00.getOffsetTop()-arrPoint[1];

        	//Child 객체의 좌상단 좌표값 - (좌표값을 객체기본사이즈로 나머지 계산한값)
        	//px단위 이동이 아닌 객체기본사이즈 단위로 이동하기 위한 처리
        	var nLeftGuide = nLeft - (nLeft%this.childwidth);
        	var nTopGuide = nTop - (nTop%this.childheight);

        	//Child 객체의 사이즈에 맞게 가이트 객체 사이즈 변경
        	var nWidthGuide = this.fv_targetObj.getOffsetWidth();
        	var nHeightGuide = this.fv_targetObj.getOffsetHeight();

        	this.fv_targetObj.parent.divGuide.move(nLeftGuide, nTopGuide, nWidthGuide, nHeightGuide);
        	this.fv_targetObj.move(nLeft, nTop);
        }

        //Titlebar onlbuttonup 이벤트 발생시
        this.fn_objTile_onlbuttonup = function(obj,  e)
        {
        	var nLeft;
        	var nTop;

        	var bChk = false;
        	var i;

        	if(this.gfnIsNull(this.fv_targetObj.parent))return;
        	if(this.gfnIsNull(this.fv_targetObj.parent.divGuide))return;

        	var objDivGuide = this.fv_targetObj.parent.divGuide;

        	nLeft = objDivGuide.getOffsetLeft();
        	nTop = objDivGuide.getOffsetTop();
        	trace("Step-3");
        	for(i=0;i<this.Div00.form.components.length;i++)
        	{
        		if(this.Div00.form.components[i].name!=this.fv_targetObj.name&&this.Div00.form.components[i].name!="divGuide")
        		{
        			//Drag중인 객체가 다른 객체와 충돌하는지 확인
        			bChk = this.fn_IntersectRect(objDivGuide, this.Div00.form.components[i]);
        		}

        		if(bChk==true)break;
        	}

        	//충돌하는 객체가 있을 경우 위치 원복
        	if(bChk==true)
        	{
        		this.fv_targetObj.move(this.fv_targetObj.orgLeft, this.fv_targetObj.orgTop);
        	}
        	//충돌하는 객체가 없을 경우 위치 변경
        	else
        	{
        		this.fv_targetObj.move(nLeft, nTop);
        	}

        	//가이드 객체 숨기기
        	this.fv_targetObj.parent.divGuide.set_visible(false);

        	this.Div00.form.resetScroll();
        }

        //객체간 충돌 체크 함수
        this.fn_IntersectRect = function (obj1, obj2)
        {
        	var obj1_left = nexacro.toNumber(obj1.getOffsetLeft());
        	var obj1_top = nexacro.toNumber(obj1.getOffsetTop());
        	var obj1_right = nexacro.toNumber(obj1.getOffsetLeft())+nexacro.toNumber(obj1.getOffsetWidth());
        	var obj1_bottom = nexacro.toNumber(obj1.getOffsetTop())+nexacro.toNumber(obj1.getOffsetHeight());
        	var obj2_left = nexacro.toNumber(obj2.getOffsetLeft());
        	var obj2_top = nexacro.toNumber(obj2.getOffsetTop());
        	var obj2_right = nexacro.toNumber(obj2.getOffsetLeft())+nexacro.toNumber(obj2.getOffsetWidth());
        	var obj2_bottom = nexacro.toNumber(obj2.getOffsetTop())+nexacro.toNumber(obj2.getOffsetHeight());

        	if(obj1_left < obj2_right && obj2_left < obj1_right && obj1_top < obj2_bottom && obj2_top < obj1_bottom)
        	{
        		return true;
        	}else
        	{
        		return false;
        	}
        }

        /*****************************************************************************
        함 수 명 칭 : gfnIsNull
        함 수 설 명 : 입력값 Null 체크 함수
        파 라 미 터 : pvVal – 입력값
        리 턴 내 용 : true/false 값이 Null일 경우 true
        *****************************************************************************/
        this.gfnIsNull = function(pvVal) {
        	if (new String(pvVal).valueOf() == "undefined") {
        		return true;
        	}
        	if (pvVal == null) {
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined")) {
        		return true;
        	}
        	if (pvVal.length == 0) {
        		return true;
        	}

        	return false;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WebWidget_onload,this);
        };

        this.loadIncludeScript("WebWidget.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
