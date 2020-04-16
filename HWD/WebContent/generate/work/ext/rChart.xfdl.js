(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rChart");
            this.set_titletext("rChart");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Line","0","116",null,"95","81.43%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::line.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Column","19.80%","116",null,"95","61.43%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::column.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Area","59.39%","116",null,"95","21.94%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::area.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Pie","79.39%","116",null,"95","2.45%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::pie.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Bubble","0","251",null,"95","81.43%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::bubble.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Plot","19.80%","251",null,"95","61.43%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("url(\'imagerc::plot.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("FromTo","59.39%","251",null,"95","21.94%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\'imagerc::from_to.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Radar","79.29%","251",null,"95","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'imagerc::radar.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Target","0","386",null,"95","81.43%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'imagerc::target.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("History","19.80%","386",null,"95","61.43%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("url(\'imagerc::history.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Scroll","59.39%","386",null,"95","21.94%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("url(\'imagerc::scroll.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Equalizer","79.29%","386",null,"95","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("url(\'imagerc::equalizer.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("BrokenAxis","0","521",null,"95","81.43%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("url(\'imagerc::broken.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Image","19.80%","521",null,"95","61.43%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("url(\'imagerc::image.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Wing","59.39%","521",null,"95","21.94%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("url(\'imagerc::wing.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("WindRose","79.29%","521",null,"95","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("url(\'imagerc::wind_rose.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","221",null,"20","81.43%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Line");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","19.80%","221",null,"20","61.43%",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Column");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","59.39%","221",null,"20","21.94%",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Area");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","79.29%","221",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Pie");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","356",null,"20","81.43%",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Bubble");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","19.80%","356",null,"20","61.43%",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Plot");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","59.39%","356",null,"20","21.94%",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("From - To");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","79.29%","356",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Radar");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","491",null,"20","81.43%",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Target vs Actual");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","19.80%","491",null,"20","61.43%",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("History");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","79.29%","491",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Equalizer");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","59.39%","491",null,"20","21.94%",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Scroll");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","626",null,"20","81.43%",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("BrokenAxis");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","19.80%","626",null,"20","61.43%",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Image");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","59.39%","626",null,"20","21.94%",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Wing");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","79.29%","626",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("WindRose");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Bar","39.49%","116",null,"95","41.43%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::bar.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Combination","39.49%","251",null,"95","41.43%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::combination.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("RealTime","39.49%","386",null,"95","41.43%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("url(\'imagerc::realtime.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("ImageMatrix","39.49%","521",null,"95","41.43%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("url(\'imagerc::image_matrix.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","39.49%","221",null,"20","41.43%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Bar");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","39.49%","356",null,"20","41.43%",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Combination");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","39.49%","491",null,"20","41.43%",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("RealTime");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","39.49%","626",null,"20","41.43%",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("ImageMatrix");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Candlestick","0","656",null,"95","81.43%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("url(\'imagerc::candlestick.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("TreeMap","19.80%","656",null,"95","61.43%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("url(\'imagerc::treemap.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Matrix","59.39%","656",null,"95","21.94%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("url(\'imagerc::matrix.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("OverlayBubble","79.29%","656",null,"95","20",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("url(\'imagerc::overlaybubble.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Pyramid","0","791",null,"95","81.43%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("url(\'imagerc::pyramid.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Histogram","19.80%","791",null,"95","61.43%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("url(\'imagerc::histogram.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("ErrorBar","59.39%","791",null,"95","21.94%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("url(\'imagerc::error_bar.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("BoxPlot","79.29%","791",null,"95","20",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("url(\'imagerc::box_plot.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Slide","0","926",null,"95","81.43%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("url(\'imagerc::slide.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Motion","19.80%","926",null,"95","61.43%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("url(\'imagerc::motion.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("SimpleGauge","59.39%","926",null,"95","21.94%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("url(\'imagerc::simple_gauge.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Gauge","79.29%","926",null,"95","20",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("url(\'imagerc::gauge.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","761",null,"20","81.43%",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Candlestick");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","19.80%","761",null,"20","61.43%",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("TreeMap");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","59.39%","761",null,"20","21.94%",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Matrix");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","79.29%","761",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("OverlayBubble");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","896",null,"20","81.43%",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Pyramid");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","19.80%","896",null,"20","61.43%",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Histogram");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","59.39%","896",null,"20","21.94%",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("ErrorBar");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","79.29%","896",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("BoxPlot");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","1031",null,"20","81.43%",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Slide");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","19.80%","1031",null,"20","61.43%",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Motion");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","59.39%","1031",null,"20","21.94%",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("SimpleGauge");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","79.29%","1031",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("Gauge");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("WordCloud","39.49%","656",null,"95","41.43%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("url(\'imagerc::word_cloud.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Vector","39.49%","791",null,"95","41.43%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("url(\'imagerc::vector.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("RealTimePremium","39.49%","926",null,"95","41.43%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("url(\'imagerc::realtime_premium.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","39.49%","761",null,"20","41.43%",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("WordCloud");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","39.49%","896",null,"20","41.43%",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Vector");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","39.49%","1031",null,"20","41.43%",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("RealTime-Premium");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","0","0",null,"96","20",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("rChart는 데스크탑 및 모바일용 웹차트 컴포넌트입니다.\r\nIE, 크롬, 파이어폭스, 사파리 등의 브라우저에서 사용이 가능합니다.(IE7, 8 에서도 사용 가능)\r\n약 34종의 세계최대의 차트종류와 400여개 샘플을 통해 신속한 개발이 가능합니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","125",null,"485","20",null,"0",null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Static00");
            obj.set_background("aqua");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","589","19","123","93",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rChart.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    Frame > Tab
        *  @FileName  rChart.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.06      presales                  스크립트 수정
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.gfnOpenPopup = function(sPopupId, sUrl, oParam, sPopupCallback, oOption)
        {
        	var objParentFrame = this.getOwnerFrame();

        	var newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, 0, 0, 0, 0, null, null, sUrl);

        		newChild.set_dragmovetype("all");
        		newChild.set_showcascadetitletext(false);
        		newChild.set_showtitlebar(false);
        		newChild.set_border("2px solid #808080");
        		newChild.set_autosize(true);
        		newChild.set_resizable(false);

        		if (!this.gfnIsNull(oOption.title)) {
                    newChild.set_titletext(oOption.title);
                }

        		newChild.set_showstatusbar(false);
        		newChild.set_openalign("center middle");
        		newChild.showModal(sPopupId, objParentFrame, oParam, this, sPopupCallback);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.Static_onclick = function(obj,  e)
        {
        	var sPopupId = "rChartPop";
            var sUrl = "ext::rChartPop.xfdl";
        	var oArgs = {chartType: obj.name};
        	var sCallBack = "fn_popupCallback";
        	var oOption = {title : obj.name + " Chart"};

        	this.gfnOpenPopup(sPopupId, sUrl, oArgs, sCallBack, oOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rChart_onload,this);
            this.Line.addEventHandler("onclick",this.Static_onclick,this);
            this.Column.addEventHandler("onclick",this.Static_onclick,this);
            this.Area.addEventHandler("onclick",this.Static_onclick,this);
            this.Pie.addEventHandler("onclick",this.Static_onclick,this);
            this.Bubble.addEventHandler("onclick",this.Static_onclick,this);
            this.Plot.addEventHandler("onclick",this.Static_onclick,this);
            this.FromTo.addEventHandler("onclick",this.Static_onclick,this);
            this.Radar.addEventHandler("onclick",this.Static_onclick,this);
            this.Target.addEventHandler("onclick",this.Static_onclick,this);
            this.History.addEventHandler("onclick",this.Static_onclick,this);
            this.Scroll.addEventHandler("onclick",this.Static_onclick,this);
            this.Equalizer.addEventHandler("onclick",this.Static_onclick,this);
            this.BrokenAxis.addEventHandler("onclick",this.Static_onclick,this);
            this.Image.addEventHandler("onclick",this.Static_onclick,this);
            this.Wing.addEventHandler("onclick",this.Static_onclick,this);
            this.WindRose.addEventHandler("onclick",this.Static_onclick,this);
            this.Bar.addEventHandler("onclick",this.Static_onclick,this);
            this.Combination.addEventHandler("onclick",this.Static_onclick,this);
            this.RealTime.addEventHandler("onclick",this.Static_onclick,this);
            this.ImageMatrix.addEventHandler("onclick",this.Static_onclick,this);
            this.Candlestick.addEventHandler("onclick",this.Static_onclick,this);
            this.TreeMap.addEventHandler("onclick",this.Static_onclick,this);
            this.Matrix.addEventHandler("onclick",this.Static_onclick,this);
            this.OverlayBubble.addEventHandler("onclick",this.Static_onclick,this);
            this.Pyramid.addEventHandler("onclick",this.Static_onclick,this);
            this.Histogram.addEventHandler("onclick",this.Static_onclick,this);
            this.ErrorBar.addEventHandler("onclick",this.Static_onclick,this);
            this.BoxPlot.addEventHandler("onclick",this.Static_onclick,this);
            this.Slide.addEventHandler("onclick",this.Static_onclick,this);
            this.Motion.addEventHandler("onclick",this.Static_onclick,this);
            this.SimpleGauge.addEventHandler("onclick",this.Static_onclick,this);
            this.Gauge.addEventHandler("onclick",this.Static_onclick,this);
            this.WordCloud.addEventHandler("onclick",this.Static_onclick,this);
            this.Vector.addEventHandler("onclick",this.Static_onclick,this);
            this.RealTimePremium.addEventHandler("onclick",this.Static_onclick,this);
        };

        this.loadIncludeScript("rChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
