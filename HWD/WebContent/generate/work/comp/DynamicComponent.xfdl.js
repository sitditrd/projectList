(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DynamicComponent");
            this.set_titletext("컴포넌트 동적생성");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,572);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"comp_cnt\" type=\"INT\" size=\"256\"/><Column id=\"line_per_count\" type=\"INT\" size=\"256\"/><Column id=\"line_count\" type=\"INT\" size=\"256\"/><Column id=\"tot_count\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"line_per_count\">1</Col><Col id=\"line_count\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_cond00","0","111","32.76%","133",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cond","0","81","32.76%","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box02C");
            obj.set_text("컴포넌트 선택");
            this.addChild(obj.name, obj);

            obj = new Div("divCanvas","0","286",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","0",null,"71","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("넥사크로 플랫폼은 동적으로 컴포넌트 생성 하는 기능을 쉽게 구현할 수 있습니다.\r\n동적으로 생성될 컴포넌트를 선택 후 원하는 생성 옵션 값을 설정하여 생성 시 소요되는 시간을 측정합니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cond01","stc_cond00:-1","111","32.76%","133",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cond02","stc_cond00:-1","81","32.76%","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_box02C");
            obj.set_text("컴포넌트 생성 옵션");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cond03","stc_cond01:-1","81",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_box02C");
            obj.set_text("생성 소요시간");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cond04","stc_cond01:-1","111",null,"133","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_box02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCal","30","161","82","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Calendar");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkStc","30","190","82","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkImg","151","132","82","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Images");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkEdt","151","161","82","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Edit");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.addChild(obj.name, obj);

            obj = new Static("stc_stTime02","stc_cond00:13","122","137","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("컴퍼넌트 수");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eclipse","stc_cond01:20","161","28.47%","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBtn","30","132","82","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.addChild(obj.name, obj);

            obj = new Static("stc_stTime01","stc_cond00:13","151","137","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("한 라인 표시 갯수");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_stTime03","stc_cond00:13","209","137","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("총 컴포넌트 갯수");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_stTime04","stc_cond00:13","180","137","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("라인 수");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLineCnt","stc_stTime04:14","180","stc_cond01:42.06%","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_value("20");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTotCnt","stc_stTime03:14","209","stc_cond01:42.06%","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_value("100");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCountComp","stc_stTime02:14","122","stc_cond01:42.06%","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.set_value("5");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLinePerCnt","stc_stTime01:14","151","stc_cond01:42.06%","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_value("1");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1012","236","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("버튼 동적 생성");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","1122","236","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("cal_basic01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","993","236","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cp_static");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","1040","285","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("imv_cp_imageViewer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","1150","285","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("ed_basic01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnGenerate","0","248",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","","","","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtCountComp","value","ds_cond","comp_cnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtLinePerCnt","value","ds_cond","line_per_count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtLineCnt","value","ds_cond","line_count");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DynamicComponent.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    Dynamic.xfdl
        *  @Creator     presales
        *  @CreateDate  2019/10/01
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2019/10/01          presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.arrCompList = ["chkBtn", "chkCal", "chkStc", "chkImg", "chkEdt"];

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.form_onload = function (obj, e)
        {
        	this.fnGetCheckbox();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnGetCheckbox : 체크박스의 체크 상태값 ds에 저장
        * @return : N/A
        * @example :
        */
        this.fnGetCheckbox = function ()
        {
        	var nSum = 0;
        	for (var i = 0; i < this.arrCompList.length; i++)
        	{
        		if (this.all[this.arrCompList[i]].value == "Y")
        		{
        			nSum++;
        		}
        	}
        	this.dsCond.setColumn(0, "comp_cnt", nSum);
        };


        /**
        * fnResetCanvas : 체크박스의 체크 상태값 ds에 저장
        * @return : N/A
        * @example :
        */
        this.fnResetCanvas = function ()
        {
        	for (var i = this.divCanvas.form.components.length - 1; i >= 0; i--)
        	{
        		var objComp = this.divCanvas.form.removeChild(this.divCanvas.form.components[i].name);
        		objComp.destroy();
        	}
        };


        /**
        * fnDrawComponent : 컴포넌트 동적 생성
        * @return : N/A
        * @example :
        */
        this.fnDrawComponent = function ()
        {
        	var arrListup = [];
        	for (var ii = 0; ii < this.arrCompList.length; ii++)
        	{
        		if (this.all[this.arrCompList[ii]].value == "Y")
        		{
        			//arrListup.push(this.arrCompList[ii].split("_")[1]);
        			arrListup.push(this.arrCompList[ii].substring(3));
        		}
        	}

        	var oComp;
        	var nWidth = 120;
        	var nHeigth = 30;
        	var wGap = 5;
        	var hGap = 5;
        	var nLeft = 0;
        	var nTop = 0;
        	var nCntItem = this.edtLinePerCnt.value;
        	var nCntLine = this.edtLineCnt.value;
        	var nCntLoop = this.edtCountComp.value * nCntItem * nCntLine;

        	for (var x = 0; x < nCntLine; x++)
        	{
        		for (var y = 0; y < nCntItem; y++)
        		{
        			for (var z = 0; z < arrListup.length; z++)
        			{
        				switch (arrListup[z])
        				{
        					case "Btn":
        						oComp = new Button("btn_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.set_cssclass("btn_WF_basic02");
        						oComp.set_text("버튼");
        						break;
        					case "Cal":
        						oComp = new Calendar("cal_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.set_dateformat("yyyy-MM-dd");
        						oComp.set_value(this.gfnGetDate());
        						oComp.set_cssclass("cal_basic01");
        						break;
        					case "Stc":
        						oComp = new Static("stc_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.set_text("Static" + x + "_" + y + "_" + z);
        						oComp.set_cssclass("sta_cp_static");
        						break;
        					case "Img":
        						oComp = new ImageViewer("img_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.set_image("imagerc::img_WF_imgeveiwer.png");
        						break;
        					case "Edt":
        						oComp = new Edit("edt_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.set_value("edit" + x + "_" + y + "_" + z);
        						oComp.set_cssclass("ed_basic01");
        						break;
        				}
        				this.divCanvas.form.addChild(oComp.name, oComp);
        				oComp.show();
        				nLeft = nLeft + nWidth + wGap;
        			}
        		}
        		nLeft = 0;
        		nTop = nTop + nHeigth + hGap;
        	}
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 체크박스 선택 시 체크박스 상태값 ds에 저장
        */
        this.CheckBox_onchanged = function (obj, e)
        {
        	this.fnGetCheckbox();
        };

        /**
         * @description 생성 버튼 클릭
        */
        this.btnGenerate_onclick = function (obj, e)
        {
        	this.edt_eclipse.set_value("");
        	var stTime = new Date().getTime();
        	this.divCanvas.set_visible(false);
        	this.fnResetCanvas();
        	this.fnDrawComponent();
        	this.divCanvas.set_visible(true);
        	var edTime = new Date().getTime();
        	this.divCanvas.form.resetScroll();
        	this.edt_eclipse.set_value((edTime - stTime) / 1000);
        };

        /**
         * @description 컴포넌트 생성 옵션 동적 카운팅
        */
        this.dsCond_oncolumnchanged = function (obj, e)
        {
        	if (e.col != "tot_count")
        	{
        		this.edtTotCnt.set_value(obj.getColumn(e.row, "comp_cnt") * obj.getColumn(e.row, "line_per_count") * obj.getColumn(e.row, "line_count"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.chkCal.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkStc.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkImg.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkEdt.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkBtn.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.btnGenerate.addEventHandler("onclick",this.btnGenerate_onclick,this);
            this.dsCond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);
        };

        this.loadIncludeScript("DynamicComponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
