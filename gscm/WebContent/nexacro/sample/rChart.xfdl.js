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
            this.set_titletext("rChart 갤러리");
            this.set_stepshowtype("action");
            this.set_stepitemsize("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Line","0","0","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("URL(\"imagerc::line.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Column","159","0","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("URL(\"imagerc::column.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Area","477","0","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("URL(\"imagerc::area.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Pie","636","0","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("URL(\"imagerc::pie.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Bubble","0","140","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("URL(\"imagerc::bubble.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Plot","159","140","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("URL(\"imagerc::plot.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("FromTo","477","140","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("URL(\"imagerc::from_to.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Radar","636","140","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("URL(\"imagerc::radar.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Target","0","280","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("URL(\"imagerc::target.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("History","159","280","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("URL(\"imagerc::history.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Scroll","477","280","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("URL(\"imagerc::scroll.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Equalizer","636","280","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("URL(\"imagerc::equalizer.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("BrokenAxis","0","420","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("URL(\"imagerc::broken.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Image","159","420","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("URL(\"imagerc::image.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Wing","477","420","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("URL(\"imagerc::wing.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("WindRose","636","420","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("URL(\"imagerc::wind_rose.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","101","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Line");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","159","101","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Column");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","477","101","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Area");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","636","101","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Pie");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","240","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Bubble");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","159","240","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Plot");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","477","240","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("From - To");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","636","240","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Radar");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","381","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Target vs Actual");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","159","381","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("History");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","477","381","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Scroll");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","636","381","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Equalizer");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","521","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("BrokenAxis");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","159","521","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Image");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","477","521","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Wing");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","636","521","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("WindRose");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Bar","318","0","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("URL(\"imagerc::bar.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Combination","318","140","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("URL(\"imagerc::combination.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("RealTime","318","280","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("URL(\"imagerc::realtime.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("ImageMatrix","318","420","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("URL(\"imagerc::image_matrix.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","318","101","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Bar");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","318","240","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Combination");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","318","381","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("RealTime");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","318","521","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("ImageMatrix");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Candlestick","0","560","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("URL(\"imagerc::candlestick.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("TreeMap","159","560","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("URL(\"imagerc::treemap.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Matrix","477","560","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("URL(\"imagerc::matrix.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("OverlayBubble","636","560","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("URL(\"imagerc::overlaybubble.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Pyramid","0","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("URL(\"imagerc::pyramid.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Histogram","159","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("URL(\"imagerc::histogram.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("ErrorBar","477","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("URL(\"imagerc::error_bar.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("BoxPlot","636","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("URL(\"imagerc::box_plot.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Slide","0","840","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("URL(\"imagerc::slide.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Motion","159","840","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("URL(\"imagerc::motion.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("SimpleGauge","477","840","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("URL(\"imagerc::simple_gauge.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Gauge","636","840","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("URL(\"imagerc::gauge.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Candlestick");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","159","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("TreeMap");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","477","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Matrix");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","636","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("OverlayBubble");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","801","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Pyramid");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","159","801","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Histogram");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","477","801","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("ErrorBar");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","636","801","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("BoxPlot");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","941","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Slide");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","159","941","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Motion");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","477","941","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("SimpleGauge");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","636","941","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("Gauge");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("WordCloud","318","560","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("URL(\"imagerc::word_cloud.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Vector","318","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("URL(\"imagerc::vector.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("RealTimePremium","318","840","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("URL(\"imagerc::realtime_premium.jpg\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","318","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("WordCloud");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","318","801","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Vector");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","318","941","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("RealTime-Premium");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_pdfViewer","0","0",null,null,"0","-249",null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_rChart","0","0",null,null,"0","-249",null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rChart.xfdl", function() {
        this.rChart_onload = function(obj, e)
        {
        	this.div_pdfViewer.set_url("sample::WebBrowser.xfdl");
        	this.div_rChart.set_url("sample::rMateChart2.xfdl");

        	this.setFocus();
        }

        this.rChart_onkeydown = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	if (nStepIdx == 0)
        	{
        		if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(1);
        		}
        	}
        	else if (nStepIdx == 1)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(0);
        		} else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(2);
        		}
        	}
        	else if (nStepIdx == 2)
        	{
        		if (e.keycode == 37) { // KeyBoard 중간 <-
        			this.setStepIndex(1);
        		}
        		 else if (e.keycode == 39) { // KeyBoard 중간 ->
        			this.setStepIndex(3);
        		}
        	}
        };

        this.Static_onclick = function(obj,  e)
        {
        	nxlib.openPopup(this, "rChartPop", "sample::rChartPop.xfdl", {chartType: obj.name}, "showtitlebar=false layered=true");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rChart_onload,this);
            this.addEventHandler("onkeydown",this.rChart_onkeydown,this);
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
