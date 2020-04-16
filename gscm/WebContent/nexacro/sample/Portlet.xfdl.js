(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work011");
            this.set_titletext("포틀릿화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnTile01","20","60","213","356",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_iconPort01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("bottom");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile02","253","60","203","168",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_iconPort02");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile03","476","60","203","168",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_iconPort03");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile04","699","60","203","168",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_iconPort04");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile07","922","60","178","522",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_iconPort09");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile05","253","248","426","168",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_iconPort05");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile06","699","248","203","168",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_iconPort06");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile08","20","436","553","146",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_iconPort07");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile09","593","436","309","146",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_iconPort08");
            obj.set_text("메시지 입력");
            obj.set_wordWrap("char");
            obj.set_padding("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btnMove","1110","152","213","356",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_iconPort01");
            obj.set_border("5px dashed #6f59c2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("포틀릿 화면 구성");
            obj.set_cssclass("sta_WF_title01");
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
        this.registerScript("Portlet.xfdl", function() {
        this.bAni = false;
        this.fv_bDrag = false;
        this.fv_timerIdx = 0;
        this.fv_timerMax = 30;
        this.fv_objFrom;
        this.fv_objTo;

        this.work011_onload = function(obj,e)
        {
        };

        this.Button_ondrag = function(obj,e)
        {
        	this.fv_bDrag = true;
        	e.userdata = obj;
        	this.fn_makeDragObj(obj);
        	return true;
        };

        this.work011_ondragmove = function(obj,e)
        {
        	this.btnMove.move(e.clientx+10, e.clienty+10);
        };

        this.work011_onlbuttonup = function(obj,e)
        {
        	if(this.fv_bDrag==true)
        	{
        		this.fv_bDrag = false;
        		this.fn_removeDragObj();
        	}
        };

        this.fn_makeDragObj = function(obj)
        {
        	var nWidth = obj.getOffsetWidth();
        	var nHeight = obj.getOffsetHeight();
        	var sCssClass = obj.cssclass;
        	var sMemo = obj.text;

        	this.btnMove.set_cssclass(sCssClass)
        	this.btnMove.set_text(sMemo)

        	this.btnMove.setOffsetWidth(nWidth);
        	this.btnMove.setOffsetHeight(nHeight);
        	this.btnMove.set_visible(true);
        }

        this.fn_removeDragObj = function()
        {
        	this.btnMove.set_visible(false);
        }

        this.work011_ondrop = function(obj,e)
        {
        	if(this.bAni==false)
        	{
        		this.fv_objFrom = e.userdata;
        		this.fv_objTo = e.fromobject;

        		if(this.fv_objTo.name.indexOf("btnTile")==-1)return;

        		this.fv_objFrom.orgLeft = this.fv_objFrom.getOffsetLeft();
        		this.fv_objFrom.orgTop = this.fv_objFrom.getOffsetTop();
        		this.fv_objFrom.orgWidth = this.fv_objFrom.getOffsetWidth();
        		this.fv_objFrom.orgHeight = this.fv_objFrom.getOffsetHeight();

        		this.fv_objTo.orgLeft = this.fv_objTo.getOffsetLeft();
        		this.fv_objTo.orgTop = this.fv_objTo.getOffsetTop();
        		this.fv_objTo.orgWidth = this.fv_objTo.getOffsetWidth();
        		this.fv_objTo.orgHeight = this.fv_objTo.getOffsetHeight();

        		this.bAni = true;
        		this.setTimer(1, 10);
        	}
        };

        this.work011_ontimer = function(obj,e)
        {
        	if(e.timerid==1)
        	{
        		this.fv_timerIdx++;
        		var nLeft1 = this.fn_moveAni(this.fv_timerIdx, this.fv_objFrom.orgLeft, this.fv_objTo.orgLeft-this.fv_objFrom.orgLeft, this.fv_timerMax);
        		var nTop1 = this.fn_moveAni(this.fv_timerIdx, this.fv_objFrom.orgTop, this.fv_objTo.orgTop-this.fv_objFrom.orgTop, this.fv_timerMax);
        		var nWidth1 = this.fn_moveAni(this.fv_timerIdx, this.fv_objFrom.orgWidth, this.fv_objTo.orgWidth-this.fv_objFrom.orgWidth, this.fv_timerMax);
        		var nHeight1 = this.fn_moveAni(this.fv_timerIdx, this.fv_objFrom.orgHeight, this.fv_objTo.orgHeight-this.fv_objFrom.orgHeight, this.fv_timerMax);

        		var nLeft2 = this.fn_moveAni(this.fv_timerIdx, this.fv_objTo.orgLeft, this.fv_objFrom.orgLeft-this.fv_objTo.orgLeft, this.fv_timerMax);
        		var nTop2 = this.fn_moveAni(this.fv_timerIdx, this.fv_objTo.orgTop, this.fv_objFrom.orgTop-this.fv_objTo.orgTop, this.fv_timerMax);
        		var nWidth2 = this.fn_moveAni(this.fv_timerIdx, this.fv_objTo.orgWidth, this.fv_objFrom.orgWidth-this.fv_objTo.orgWidth, this.fv_timerMax);
        		var nHeight2 = this.fn_moveAni(this.fv_timerIdx, this.fv_objTo.orgHeight, this.fv_objFrom.orgHeight-this.fv_objTo.orgHeight, this.fv_timerMax);

        		this.fv_objFrom.move(nLeft1, nTop1, nWidth1, nHeight1);
        		this.fv_objTo.move(nLeft2, nTop2, nWidth2, nHeight2);

        		if(this.fv_timerIdx==this.fv_timerMax)
         		{
        			this.bAni = false;
         			this.fv_timerIdx = 0;
         			this.killTimer(e.timerid);
         		}
        	}
        };

        this.fn_moveAni = function (t, b, c, d)
        {
        	t /= d/2;
        	if (t < 1) return c/2*t*t*t + b;
        	t -= 2;
        	return c/2*(t*t*t + 2) + b;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.work011_onload,this);
            this.addEventHandler("onlbuttonup",this.work011_onlbuttonup,this);
            this.addEventHandler("ondrop",this.work011_ondrop,this);
            this.addEventHandler("ontimer",this.work011_ontimer,this);
            this.addEventHandler("ondragmove",this.work011_ondragmove,this);
            this.btnTile01.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile02.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile03.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile04.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile07.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile05.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile06.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile08.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnTile09.addEventHandler("ondrag",this.Button_ondrag,this);
            this.btnMove.addEventHandler("ondrag",this.Button_ondrag,this);
        };

        this.loadIncludeScript("Portlet.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
