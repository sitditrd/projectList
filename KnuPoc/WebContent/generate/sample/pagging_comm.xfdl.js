(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("paging_comm");
            this.set_titletext("페이징서브화면");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(632,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static11","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box04L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divCount",null,"0","122","30","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNow",null,"16.67%","34","21","88",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_padding("0px 0px 0px 2px");
            this.divCount.addChild(obj.name, obj);

            obj = new Static("stTotal",null,"16.67%","40","21","44",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("1");
            obj.set_text("/ ");
            this.divCount.addChild(obj.name, obj);

            obj = new Button("btnGo",null,"5","37","21","0",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("2");
            obj.set_text("이동");
            obj.set_cssclass("btn_WF_btnR");
            this.divCount.addChild(obj.name, obj);

            obj = new Div("divPaging","0","0","484","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnFirst","0","5","37","21",null,null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.divPaging.addChild(obj.name, obj);

            obj = new Button("btnPrev","btnFirst:3","5","37","21",null,null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.divPaging.addChild(obj.name, obj);

            obj = new Button("btnLast",null,"5","37","21","0",null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_enable("false");
            this.divPaging.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"5","37","21","btnLast:3",null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divPaging.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",632,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("pagging_comm.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("pagging_comm.xfdl", function() {
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;
        // 페이징 처리 관련 변수
        this.iStartPageNo = 1;
        this.iEndPageNo = 10;
        this.iMaxPageNo =10;
        this.iNowPageNo	= 1;
        this.iUnitSelRowNo = 0; // 한번 Server호출시 가져올 row갯수

        this.iPageBlock = 0;
        this.iTotalCount = 0;
        this.btnCssName	= "btn_WF_btnR";
        this.flag = 0;
        this.nType = 0;
        this.chkArray = [];

        this.paging_comm_onload = function(obj,e)
        {
        };

        //페이징처리 개수 및 사이즈 지정 (상위 페이지에서 호출)
        this.fn_initPageSet = function (rtMax,rtTotBool,rtRowCnt,type)
        {
        	this.iEndPageNo = rtMax;
        	this.iMaxPageNo = rtMax;
        	this.iUnitSelRowNo = rtRowCnt;

        	// 합계 div 활성화 여부 및 현재 width 값 가져오기
        	var sThisWidth = this.width;

        	if (rtTotBool) {
        		sThisWidth = sThisWidth - this.divCount.getOffsetWidth();
        		this.divCount.set_visible(true);
        	} else {
        		this.divCount.set_visible(false);
        	}

        	var sDivPagingWidth = (37*4+3+3)+(20+20)+(rtMax*20)+((rtMax-1)*10);
        	this.divPaging.setOffsetWidth(sDivPagingWidth);
        	this.divPaging.setOffsetLeft(parseInt((sThisWidth-sDivPagingWidth)/2));

        	// 페이징처리 버튼 생성
        	var btnLeft = 37+3+37+20;
        	var btnTop = 5;
        	var btnWidth = 25;
        	var btnHeight = 21;
        	var i;
        	var cnt=0;


        	var chk;
        	if(this.flag == 1)
        		chk = this.chkArray.pop();

        	this.flag = 1;

        	if(!this.gfnIsEmpty(chk))
        	{
        		if(chk != type)
        		{
        			for(var i =0; i<this.divPaging.form.components.length; i++)
        			{
        				this.divPaging.form.removeChild("btn"+i);
        			}
        		}
        	}

        	this.chkArray.push(type);


        	for (i = 0; i < rtMax; i++)
        	{
        		var objButton = new Button();
        		var objBtnId	= "btn"+i;
        		objButton.init(objBtnId,btnLeft,btnTop,btnWidth,btnHeight,null,null);
        		objButton.set_text(i+1);
        		objButton.set_cssclass(this.btnCssName);
        		//objButton.set_enable(false);
        		objButton.addEventHandler("onclick",this.divPagingNumber_onclick, this);

        		this.divPaging.addChild(objBtnId,objButton);
        		objButton.show();

        		btnLeft = btnLeft + 30;
        	}
        };

        this.divPagingButton_onclick = function(obj,e)
        {
        	var objName = obj.name.split('btn');
        	this.fn_page(objName[1]);
        };

        this.divPagingNumber_onclick = function(obj,e)
        {
        	this.fn_page(obj.text);
        };

        this.fn_page = function (btnText)
        {
        	var objNum = this.iNowPageNo;
        	trace("btnText:::" + btnText);
        	if (btnText == 'First')
        	{
        		this.iStartPageNo = 1;
        		this.iEndPageNo = 1 + (this.iMaxPageNo-1);

        		objNum = this.iStartPageNo;
        	}
        	else if (btnText == 'Prev')
        	{
        		trace("SSS");
        		this.iStartPageNo = this.iStartPageNo - this.iMaxPageNo;
        		this.iEndPageNo   = this.iStartPageNo + (this.iMaxPageNo-1);

        		objNum = this.iStartPageNo;
        	}
        	else if(btnText=='Last')
        	{
        		this.iEndPageNo   = this.iPageBlock;
        		this.iStartPageNo = parseInt(this.iPageBlock/this.iMaxPageNo)*this.iMaxPageNo+ 1;

        		if (this.iStartPageNo > this.iEndPageNo) this.iStartPageNo -= this.iUnitSelRowNo;
        		objNum = this.iEndPageNo;
        	}
        	else if (btnText == 'Next')
        	{
        		this.iStartPageNo = this.iStartPageNo + this.iMaxPageNo;
        		this.iEndPageNo   = this.iStartPageNo + (this.iMaxPageNo-1);

        		if (this.iEndPageNo > this.nPageBlock) {
        			this.iEndPageNo = this.nPageBlock;
        		}

        		objNum = this.iStartPageNo;
        	}
        	else
        	{
        		objNum = Number(btnText);

        		if (objNum % this.iMaxPageNo == 0) {
        			this.iEndPageNo   = objNum;
        			this.iStartPageNo = this.iEndPageNo - (this.iMaxPageNo-1);
        		} else {
        			this.iStartPageNo = parseInt(objNum/this.iMaxPageNo)*this.iMaxPageNo+1;
        			this.iEndPageNo  = this.iStartPageNo + (this.iMaxPageNo-1);
        		}

        		if (this.iEndPageNo > this.iPageBlock) {
        			this.iEndPageNo = this.nPageBlock;
        		}
        	}

        	this.iNowPageNo = objNum;
         	this.parent.parent.fn_searchPaging(objNum,this.iUnitSelRowNo);
        };

        this.fn_callAfter = function (arrRt)
        {
        	this.iPageBlock		= arrRt[0];
        	this.iTotalCount	= arrRt[1];

        	// 이동의 경우로 인하여 위에서 선언됨
        	trace("this.iNowPageNo::" + this.iNowPageNo);
        	trace("this.iStartPageNo::" + this.iStartPageNo);
        	this.divCount.form.edtNow.set_value(this.iNowPageNo);
        	this.divCount.form.stTotal.set_text("/ " + this.iPageBlock);

        	this.fn_setPageNo(this.iStartPageNo);
        };

        /*****************************************************************************
        * 함 수 명 칭 : fn_SetPageNo
        * 함 수 설 명 : Page번호 Setting
        * 파 라 미 터 : nVStartPageNo - 시작 페이지번호
        * 리 턴 내 용 :
        *****************************************************************************/
        this.fn_setPageNo = function(nVStartPageNo)
        {
        	var sPage   = nVStartPageNo;
        	trace("sPage::" + sPage);
        	nVStartPageNo--;
        	var nPageNo = 0; // 페이지번호

        	// 이전버튼 처리
        	if (nVStartPageNo < 1) {
        	//	this.divPaging.form.btnPrev.set_enable(false);
        	//	this.divPaging.form.btnFirst.set_enable(false);
        	} else {
        		this.divPaging.form.btnPrev.set_enable(true);
        		this.divPaging.form.btnFirst.set_enable(true);
        	}

        	// 마지막 버튼 처리
        	if (this.iTotalCount <= ((sPage + this.iMaxPageNo) * this.iUnitSelRowNo)) {
        	//	this.divPaging.form.btnNext.set_enable(false);
        	//	this.divPaging.form.btnLast.set_enable(false);
        	} else {
        		this.divPaging.form.btnNext.set_enable(true);
        		this.divPaging.form.btnLast.set_enable(true);
        	}

        	nPageNo = this.iStartPageNo;

        	var i;
        	// 인덱스 번호 처리
        	for (i = 0; i < this.iMaxPageNo; i++)
        	{
        		if (nPageNo == this.iNowPageNo) {
        	//		this.divPaging.form.all["btn" + i].set_enable(false);
        		} else {
        			this.divPaging.form.all["btn" + i].set_enable(true);
        		}

        		this.divPaging.form.all["btn" + i].set_text(nPageNo);

        		if (this.iTotalCount > ((nPageNo - 1) * this.iUnitSelRowNo)) {
        			this.divPaging.form.all["btn" + i].set_visible(true);
        			nCnt = i;
        		} else {
        	//		this.divPaging.form.all["btn" + i].set_visible(false);
        		}

        		nPageNo++;
        	}
        };

        this.divCount_btnGo_onclick = function(obj,e)
        {
        	var nBtnNum = this.divCount.form.edtNow.value;
        	this.fn_page (nBtnNum);
        };

        this.paging_comm_onsize = function(obj,e)
        {
        	var nWidth = obj.width;
        	var nHeight = obj.height;

        	if (this.divCount.visible) {
        		nWidth = nWidth - this.divCount.getOffsetWidth();
        	}

        	this.divPaging.setOffsetLeft(parseInt((nWidth-this.divPaging.getOffsetWidth())/2));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.paging_comm_onload,this);
            this.addEventHandler("onsize",this.paging_comm_onsize,this);
            this.divCount.form.btnGo.addEventHandler("onclick",this.divCount_btnGo_onclick,this);
            this.divPaging.form.btnFirst.addEventHandler("onclick",this.divPagingButton_onclick,this);
            this.divPaging.form.btnPrev.addEventHandler("onclick",this.divPagingButton_onclick,this);
            this.divPaging.form.btnLast.addEventHandler("onclick",this.divPagingButton_onclick,this);
            this.divPaging.form.btnNext.addEventHandler("onclick",this.divPagingButton_onclick,this);
        };

        this.loadIncludeScript("pagging_comm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
