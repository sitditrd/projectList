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
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJsonList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20",null,"120","20",null,"31",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최초 시작 시간");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","180",null,"120","20",null,"31",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("00:00:00.000");
            obj.set_text("00:00:00.000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","330",null,"120","20",null,"31",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총 수행 시간 표시");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","460",null,"120","20",null,"31",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20",null,"147","20",null,"8",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("최종 렌더링 완료 시간");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","180",null,"120","20",null,"8",null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"80","30","93","15",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("값 초기화");
            obj.set_cssclass("btn_WF_hwBtn01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"80","30","10","15",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("값 세팅");
            obj.set_cssclass("btn_WF_hwBtn01");
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

            obj = new Button("btn_Search",null,"80","40","24","61",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_hwBtn04");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00_02_01_00",null,"80","40","24","19",null,null,null,null,null,this);
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

            obj = new Grid("Grid00","10","164",null,null,"10","70",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("grd_WF_hwGrd03");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsJsonList");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
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
        this.registerScript("hanwha02.xfdl", function() {
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :

        		this.dsJsonList.clearData();

        		var sUrl = nexacro.getProjectPath() + "file/LageData.json";
        		this.setWaitCursor(true, true);
        		this.ajax(sUrl,
        		{
        			dataType : "JSON",
        			callback: function(errorcode, response)
        			{
        				this.setWaitCursor(false, false);
        				//trace(response.pectSlCrstList);
        				this.dsJsonList.loadJSON(response.pectSlCrstList);
        				this.Grid00.createFormat();
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

        this.loadIncludeScript("hanwha02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
