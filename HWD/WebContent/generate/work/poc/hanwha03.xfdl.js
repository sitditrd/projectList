(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hanwha01");
            this.set_titletext("New Form");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJsonList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"value\">계약자 </Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">피보험자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCall", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">불가</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">가능</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelf", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">불가</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">가능</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWrite", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">불가</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">가능</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20",null,"120","20",null,"9",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최초 시작 시간");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","140",null,"120","20",null,"9",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_text("00:00:00.000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","547",null,"120","20",null,"9",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총 수행 시간 표시");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","667",null,"120","20",null,"9",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","270",null,"147","20",null,"9",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("최종 렌더링 완료 시간");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","417",null,"120","20",null,"9",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"80","24","93","7",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("값 초기화");
            obj.set_cssclass("btn_WF_hwBtn01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"80","24","10","7",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("값 세팅");
            obj.set_cssclass("btn_WF_hwBtn01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","5",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_process");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","39",null,"76","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_box06");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","28","49","65","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","377","49","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조직구분");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","542","49","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("LA2001");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","612","49","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","889","49","71","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("영업가족");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01","212","79","98","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("80123");
            obj.set_readonly("true");
            obj.set_text("80123");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","311","79","30","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","28","79","65","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","95","49","115","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("20191101");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","210","49","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","226","49","115","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("20101104");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","450","49","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01_00_00_01","636","49","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("80123");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","742","49","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("대리점통합");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","954","49","106","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"80","60","24","82",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_hwBtn04");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00_02_01_00",null,"80","60","24","19",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","95","79","115","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","377","79","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("모니터링");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","450","79","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","546","79","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("모니터링오류검증");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","130","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("완전판매 모티터링 현황 조회");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","164",null,null,"10","48",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("grd_WF_hwGrd03");
            obj.set_binddataset("dsJsonList");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"405\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"35\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"7\" text=\"모니터링 대상 정보\"/><Cell col=\"8\" colspan=\"5\" text=\"모니터링 현황\"/><Cell col=\"13\" text=\"승낙거절\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"모집처\"/><Cell row=\"1\" col=\"2\" text=\"모집자\"/><Cell row=\"1\" col=\"3\" text=\"증권번호\"/><Cell row=\"1\" col=\"4\" text=\"대상자\"/><Cell row=\"1\" col=\"5\" text=\"콜\"/><Cell row=\"1\" col=\"6\" text=\"셀프\"/><Cell row=\"1\" col=\"7\" text=\"서면\"/><Cell row=\"1\" col=\"8\" text=\"계약일자\"/><Cell row=\"1\" col=\"9\" text=\"모니터링방법\"/><Cell row=\"1\" col=\"10\" text=\"모니터링결과\"/><Cell row=\"1\" col=\"11\" text=\"조치방법\"/><Cell row=\"1\" col=\"12\" text=\"조치결과\"/><Cell row=\"1\" col=\"13\" text=\"환급처리기한\"/><Cell row=\"2\" col=\"2\" text=\"사용인\"/><Cell row=\"2\" col=\"3\" text=\"상품명\"/><Cell row=\"2\" col=\"4\" text=\"성명\"/><Cell row=\"2\" col=\"5\" text=\"제외사유\"/><Cell row=\"2\" col=\"6\" text=\"제외사유\"/><Cell row=\"2\" col=\"7\" text=\"제외사유\"/><Cell row=\"2\" col=\"8\" text=\"모니터링기한\"/><Cell row=\"2\" col=\"9\" text=\"모니터링일자\"/><Cell row=\"2\" col=\"10\" text=\"세부내용\"/><Cell row=\"2\" col=\"11\" text=\"조치일자\"/><Cell row=\"2\" col=\"12\" text=\"최종판정\"/><Cell row=\"2\" col=\"13\" text=\"지급결과\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:dhOrgnm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:dhStfnm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:plyno\" textAlign=\"center\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"4\" text=\"bind:bjTpFlgcd\" combodataset=\"dsContractInfo\" combocodecol=\"code\" combodatacol=\"value\" displaytype=\"combotext\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:callMntrAvyn\" displaytype=\"combotext\" combodataset=\"dsCall\" combocodecol=\"code\" combodatacol=\"value\" textAlign=\"center\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"6\" text=\"bind:selfMntrAvyn\" displaytype=\"combotext\" combodataset=\"dsSelf\" combocodecol=\"code\" combodatacol=\"value\" textAlign=\"center\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"7\" text=\"bind:wriMntrAvyn\" displaytype=\"combotext\" combodataset=\"dsWrite\" combocodecol=\"code\" combodatacol=\"value\" textAlign=\"center\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"8\" text=\"bind:cnrdt\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"9\" text=\"bind:pectSlMntrChnnm\" textAlign=\"center\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"10\" text=\"bind:cmpgBsnsFlgnm\" textAlign=\"center\"/><Cell col=\"11\" textAlign=\"center\"/><Cell col=\"12\" textAlign=\"center\"/><Cell col=\"13\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"bind:dhTmOrgnm\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"bind:gdnm\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" text=\"bind:ctmnm\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" textAlign=\"center\"/><Cell row=\"1\" col=\"7\" text=\"bind:wriMntrXcptRs\" textAlign=\"center\"/><Cell row=\"1\" col=\"8\" text=\"bind:extdt\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" col=\"9\" text=\"bind:cmpgMngPerdt\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" col=\"10\" text=\"bind:cmpgBsnsDtFlgnm\" textAlign=\"center\"/><Cell row=\"1\" col=\"11\" textAlign=\"center\"/><Cell row=\"1\" col=\"12\" textAlign=\"center\"/><Cell row=\"1\" col=\"13\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,870,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hanwha03.xfdl", function() {
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :
        		this.dsJsonList.clearData();

        		this.fv_StartTime = this.gfn_CheckTime();
        		this.Edit00.set_value(this.gfnFormat(this.fv_StartTime));

        		var sUrl = nexacro.getProjectPath() + "file/LageData.json";

        		this.ajax(sUrl,
        		{
        			dataType : "JSON",
        			callback: function(errorcode, response)
        			{
        				//trace(response.pectSlCrstList);
        				this.dsJsonList.loadJSON(response.pectSlCrstList);

        				this.fv_EndTime = this.gfn_CheckTime();
        				this.Edit00_00_00.set_value(this.gfnFormat(this.fv_EndTime));
        				this.fv_DiffTime = this.gfn_diffTime(this.fv_StartTime, this.fv_EndTime, "ss");
        				this.Edit00_00.set_value(this.fv_DiffTime);
        			}
        		});

        		break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.Static04_onclick,this);
            this.Static04_01.addEventHandler("onclick",this.Static04_onclick,this);
            this.Static04_02.addEventHandler("onclick",this.Static04_onclick,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.Button02_01_00_00_00_00_02_01_00.addEventHandler("onclick",this.comm_Click,this);
            this.Static04_00_00.addEventHandler("onclick",this.Static04_onclick,this);
        };

        this.loadIncludeScript("hanwha03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();