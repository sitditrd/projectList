(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work002");
            this.set_titletext("PUSH연동");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"newImg\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"beforeVal\" type=\"STRING\" size=\"256\"/><Column id=\"currVal\" type=\"STRING\" size=\"256\"/><Column id=\"currValImg\" type=\"STRING\" size=\"256\"/><Column id=\"upDnVal\" type=\"STRING\" size=\"256\"/><Column id=\"upDnRate\" type=\"STRING\" size=\"256\"/><Column id=\"sellHo\" type=\"STRING\" size=\"256\"/><Column id=\"buyHo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">삼성전자</Col><Col id=\"currVal\"/><Col id=\"upDnVal\"/><Col id=\"upDnRate\"/><Col id=\"beforeVal\"/><Col id=\"msgId\">sams</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">POSCO</Col><Col id=\"currVal\"/><Col id=\"upDnVal\"/><Col id=\"upDnRate\"/><Col id=\"beforeVal\"/><Col id=\"msgId\">posc</Col><Col id=\"newImg\"/></Row><Row><Col id=\"name\">현대차</Col><Col id=\"msgId\">hdca</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">한국전력</Col><Col id=\"msgId\">koel</Col></Row><Row><Col id=\"name\">신한지주</Col><Col id=\"msgId\">shjj</Col></Row><Row><Col id=\"name\">KB금융</Col><Col id=\"msgId\">kbbk</Col></Row><Row><Col id=\"name\">현대중공업</Col><Col id=\"msgId\">hdid</Col></Row><Row><Col id=\"name\">LG전자</Col><Col id=\"msgId\">lgel</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">LG화학</Col><Col id=\"msgId\">lgcm</Col></Row><Row><Col id=\"name\">현대모비스</Col><Col id=\"msgId\">hdmb</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">SK하이닉스</Col><Col id=\"msgId\">skhy</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">SK텔레콤</Col><Col id=\"msgId\">sktl</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">LG디스플레이</Col><Col id=\"msgId\">lgds</Col></Row><Row><Col id=\"name\">CJ</Col><Col id=\"msgId\">cjjl</Col></Row><Row><Col id=\"name\">Kakao</Col><Col id=\"msgId\">kako</Col></Row><Row><Col id=\"name\">KT</Col><Col id=\"msgId\">kttl</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">KT&amp;G</Col><Col id=\"msgId\">ktng</Col></Row><Row><Col id=\"name\">LG생활건강</Col><Col id=\"msgId\">lghl</Col></Row><Row><Col id=\"name\">NAVER</Col><Col id=\"msgId\">navr</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">Netmarble Games</Col><Col id=\"msgId\">ntmb</Col></Row><Row><Col id=\"name\">Samsung Biologics</Col><Col id=\"msgId\">smbi</Col></Row><Row><Col id=\"name\">Samsung C&amp;T</Col><Col id=\"msgId\">smct</Col></Row><Row><Col id=\"name\">Samsung Fire Marine Insur</Col><Col id=\"msgId\">smfm</Col></Row><Row><Col id=\"name\">Samsung SDS Co Ltd</Col><Col id=\"msgId\">smsd</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">SK Holdings</Col><Col id=\"msgId\">skhd</Col></Row><Row><Col id=\"name\">SK이노베이션</Col><Col id=\"msgId\">skin</Col></Row><Row><Col id=\"name\">Woori Bank</Col><Col id=\"msgId\">wrbk</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">강원랜드</Col><Col id=\"msgId\">kwld</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">고려아연</Col><Col id=\"msgId\">koay</Col></Row><Row><Col id=\"name\">기아차</Col><Col id=\"msgId\">kica</Col></Row><Row><Col id=\"name\">기업은행</Col><Col id=\"msgId\">kibk</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">롯데쇼핑</Col><Col id=\"msgId\">ltsp</Col></Row><Row><Col id=\"name\">롯데케미칼</Col><Col id=\"msgId\">ltce</Col></Row><Row><Col id=\"name\">삼성SDI</Col><Col id=\"msgId\">smsi</Col></Row><Row><Col id=\"name\">삼성생명</Col><Col id=\"msgId\">smlf</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">삼성카드</Col><Col id=\"msgId\">smcd</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">아모레G</Col><Col id=\"msgId\">amrg</Col></Row><Row><Col id=\"name\">아모레퍼시픽</Col><Col id=\"msgId\">amrp</Col></Row><Row><Col id=\"name\">엔씨소프트</Col><Col id=\"msgId\">ncso</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">이마트</Col><Col id=\"msgId\">emat</Col></Row><Row><Col id=\"name\">코웨이</Col><Col id=\"msgId\">kowi</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">하나금융지주</Col><Col id=\"msgId\">hnnk</Col></Row><Row><Col id=\"name\">한국타이어</Col><Col id=\"msgId\">kotr</Col></Row><Row><Col id=\"name\">한국항공우주</Col><Col id=\"msgId\">kosp</Col></Row><Row><Col id=\"name\">한미사이언스</Col><Col id=\"msgId\">hmsi</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">한화생명</Col><Col id=\"msgId\">hahw</Col></Row><Row><Col id=\"name\">현대글로비스</Col><Col id=\"msgId\">hdgl</Col></Row><Row><Col id=\"name\">현대모비스</Col><Col id=\"msgId\">hdmo</Col></Row><Row><Col id=\"name\">현대제철</Col><Col id=\"msgId\">hdst</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row><Row><Col id=\"name\">투비소프트</Col><Col id=\"msgId\">tobe</Col><Col id=\"newImg\">imagerc::img_LF_tabIcon01.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new XPush("xpush", this);
            obj.set_layouturl("layout::msg1.xml");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","170","990","417",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"42\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"분\"/><Cell col=\"1\" text=\"뉴\"/><Cell col=\"2\" text=\"종목\"/><Cell col=\"3\" text=\"전일가\"/><Cell col=\"4\" colspan=\"2\" text=\"현재가\"/><Cell col=\"6\" text=\"등락폭\"/><Cell col=\"7\" text=\"등락률\"/><Cell col=\"8\" text=\"매도호가\"/><Cell col=\"9\" text=\"매수호가\"/><Cell row=\"1\" colspan=\"10\" text=\"코스피 50\" textAlign=\"left\"/></Band><Band id=\"body\"><Cell text=\"신1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"imagecontrol\" text=\"bind:newImg\"/><Cell col=\"2\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:beforeVal\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:currVal\" cssclass=\"expr:upDnVal&gt;0?&quot;grd_WF_cellRed&quot;:&quot;grd_WF_cellBlue&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:currValImg\" controlautosizingtype=\"none\" displaytype=\"imagecontrol\"/><Cell col=\"6\" text=\"bind:upDnVal\" cssclass=\"expr:upDnVal&gt;0?&quot;grd_WF_cellRed&quot;:&quot;grd_WF_cellBlue&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:upDnRate\" cssclass=\"expr:upDnVal&gt;0?&quot;grd_WF_cellRed&quot;:&quot;grd_WF_cellBlue&quot;\" textAlign=\"right\" maskedittype=\"string\"/><Cell col=\"8\" cssclass=\"expr:upDnVal&gt;0?&quot;grd_WF_cellRed&quot;:&quot;grd_WF_cellBlue&quot;\" text=\"bind:sellHo\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" cssclass=\"expr:upDnVal&gt;0?&quot;grd_WF_cellRed&quot;:&quot;grd_WF_cellBlue&quot;\" text=\"bind:buyHo\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnConn","688","135","99","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("X-PUSH 연결");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDisConn","904","135","99","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("X-PUSH 종료");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubs","796","135","99","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TOPIC 등록");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","40",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","69",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","98",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","0","710","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("X-PUSH 연동");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","40","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_box01impR");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","69","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("거래비밀");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","98","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("종목코드");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","530","40","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("매도수량");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","530","69","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("매도단가");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","530","98","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문금액");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","309","44","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_tooltiptype("hover");
            obj.set_value("(위탁)");
            obj.set_text("(위탁)");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","340","102","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("투비소프트");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","310","73","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">현금</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">신용</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("현금");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","174","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","354","44","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("현");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","377","44","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("체");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","400","44","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("잔");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","423","44","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("설");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","174","73","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_password("true");
            obj.set_value("1234");
            obj.set_textAlign("right");
            obj.set_text("1234");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","174","102","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">005930</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("005930");
            obj.set_value("02");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","268","102","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("▶");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","292","102","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("?");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","316","102","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("관");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","424","102","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가능");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","458","102","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("금액매도");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","684","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("1000");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","684","72","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_min("0");
            obj.set_max("100000");
            obj.set_value("12000");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","818","44","12","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("주");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","818","72","12","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","836","44","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("종목별가능");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","919","44","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("미수변제");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","684","102","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","819","102","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Edit("edUrl","559","135","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_value("127.0.0.1");
            obj.set_text("127.0.0.1");
            this.addChild(obj.name, obj);

            obj = new Static("stMsg","0","664",null,"27","0",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_box01L");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btnPush","767","592","236","69",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_iconPort05");
            obj.set_text("메시지 PUSH");
            obj.set_wordWrap("char");
            obj.set_padding("20px 10px 10px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbSlpTm","559","592","199","69",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("24px \"Arial\"");
            var cbSlpTm_innerdataset = new nexacro.NormalDataset("cbSlpTm_innerdataset", obj);
            cbSlpTm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">more fast</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">fast</Col></Row><Row><Col id=\"codecolumn\">200</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">300</Col><Col id=\"datacolumn\">slow</Col></Row></Rows>");
            obj.set_innerdataset(cbSlpTm_innerdataset);
            obj.set_text("보통");
            obj.set_value("100");
            obj.set_index("1");
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
        this.registerScript("work101.xfdl", function() {

        this.work002_onload = function(obj,e)
        {

        };


        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="upDnVal") {
        		if(e.newvalue>=0) {
        			obj.setColumn(e.row, "currValImg", "imagerc::grid_img_red.png");
        		} else {
        			obj.setColumn(e.row, "currValImg", "imagerc::grid_img_blue.png");
        		}
        	}
        };

        this.btnConn_onclick = function(obj,e)
        {
        	if(nexacro._Browser == "Runtime") {
        		this.xpush.set_iplist(this.edUrl.value +":10081");
        	} else {
        		this.xpush.set_iplist("http://"+this.edUrl.value+ ":10080");
        	}

        	this.xpush.connect("id", "pw");
        };

        this.xpush_onerror = function(obj,e)
        {
        	//trace("[this.xpush_onerror]"+e.eventid+"::"+e.errortype+"::"+e.errormsg);
        	this.stMsg.set_text(e.errormsg);
        };

        this.xpush_onsuccess = function(obj,e)
        {
        	//trace("[xpush_onsuccess] "+e.eventid+"::"+e.message+"::"+e.returnvalue+"::"+e.action);
        	if(e.action == 0) {
        		this.stMsg.set_text("X-PUSH 연결 성공");
        	} else if(e.action == 1) {
        		this.stMsg.set_text("X-PUSH 연결 종료");
        	} else if(e.action == 2) {
        		this.stMsg.set_text("X-PUSH TOPIC 등록 성공");
        	}
        };

        this.btnSubs_onclick = function(obj,e)
        {
        	for(var i=0; i<this.dsList.rowcount; i++) {
        		this.xpush.subscribe("TEST", this.dsList.getColumn(i, "msgId"), this, this.dsList, "update", "fn_PushCallback");
        	}
        };

        this.fn_PushCallback = function (Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        	trace("Row : "+Row+", ChangeColumn : "+ChangeColumn+", AllColumns : "+AllColumns+", Type : "+Type+", ActionType : "+ActionType+", MessageId : "+MessageId);
        }

        this.btnDisConn_onclick = function(obj,e)
        {
        	this.xpush.disconnect();
        };

        this.btnPush_onclick = function(obj,e)
        {
        	this.transaction("trPush", "svc::service/push/provider1.jsp", "", "", "url="+this.edUrl.value+" slpTm="+this.cbSlpTm.value, "callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.work002_ontimer,this);
            this.addEventHandler("onload",this.work002_onload,this);
            this.btnConn.addEventHandler("onclick",this.btnConn_onclick,this);
            this.btnDisConn.addEventHandler("onclick",this.btnDisConn_onclick,this);
            this.btnSubs.addEventHandler("onclick",this.btnSubs_onclick,this);
            this.btnPush.addEventHandler("onclick",this.btnPush_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.xpush.addEventHandler("onerror",this.xpush_onerror,this);
            this.xpush.addEventHandler("onsuccess",this.xpush_onsuccess,this);
        };

        this.loadIncludeScript("work101.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
