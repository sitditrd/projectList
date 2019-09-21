(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_01");
            this.set_titletext("대용량데이터처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inner_grid_scroll", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">default</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">topdisplay</Col><Col id=\"value\">상단</Col></Row><Row><Col id=\"code\">centerdisplay</Col><Col id=\"value\">중앙</Col></Row><Row><Col id=\"code\">topbottomdisplay</Col><Col id=\"value\">상단, 하단</Col></Row><Row><Col id=\"code\">topcenterbottomdisplay</Col><Col id=\"value\">상단, 중앙, 하단</Col></Row><Row><Col id=\"code\">trackbarfollow</Col><Col id=\"value\">스크롤 위치</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inner_grid_scrolldisplay", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">normal</Col><Col id=\"value\">기본</Col></Row><Row><Col id=\"code\">page</Col><Col id=\"value\">페이지단위</Col></Row><Row><Col id=\"code\">line</Col><Col id=\"value\">Row,Column단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("ExcelExportObject", this);
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static15","10","236",null,"50","7",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","14","246","53","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회건수");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRowCount","75","246","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmbRowCount_innerdataset = new nexacro.NormalDataset("cmbRowCount_innerdataset", obj);
            cmbRowCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000</Col></Row><Row><Col id=\"codecolumn\">100000</Col><Col id=\"datacolumn\">100,000</Col></Row><Row><Col id=\"codecolumn\">200000</Col><Col id=\"datacolumn\">200,000</Col></Row><Row><Col id=\"codecolumn\">1000000</Col><Col id=\"datacolumn\">1,000,000</Col></Row></Rows>");
            obj.set_innerdataset(cmbRowCount_innerdataset);
            obj.set_text("");
            obj.set_value("1000");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Clear",null,"26","80","30","338",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_btnInitial");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","btn_Clear:2","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_btnSearch");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport","btn_Search:2","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exp ↑");
            obj.set_cssclass("btn_WF_btnExp");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel00",null,"26","80","30","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_btnWhite");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","293",null,"65","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" 판정기준 1) % of Ref, Value : 71이상 양호, 2) % of Ref, Value : 61 ~ 70 요주의, 3) % of Ref, Value : 60 이하 불량.\r\n 참조 : Ref, (Reference, 기준Conductance).");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","193","246","52","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회기간");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Start","253","246","121","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","cal_Start:-2","246","17","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_End","Static10:-1","246","121","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","62",null,"50","9",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","10","120",null,"98","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("GENERAL DESCRIPTION");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","17","72","56","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Piant");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","19","141","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Item No");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","19","179","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("설비 Type");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static02:8","141","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("1CDU-BATT-A");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static03:8","179","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","Combo00:8","141","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("설비 명");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","Edit00:8","179","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("설비등급");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static06:8","179","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("A");
            obj.set_text("A");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"311","88","30","197",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("양호");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static11",null,"311","88","30","108",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("요주의");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static12",null,"311","88","30","19",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("불량");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","81","72","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("정유공장");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","316","72","56","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Process");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","380","72","198","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("#1 Process");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","586","72","5.47%","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Unit");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","650","72","198","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("No, 1 CDU");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static05:8","141","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("1CDU UPS-A BATTERY");
            obj.set_text("1CDU UPS-A BATTERY");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","12","10","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_logo");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","cal_End:11","246","96","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Fast스크롤 기능");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","Static19:6","240","213","46",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("ds_inner_grid_scroll");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_columncount("2");
            obj.set_rowcount("3");
            obj.set_text("기본");
            obj.set_value("default");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","Radio00:-11","246","68","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("스크롤 모드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","Static18:11","239","114","46",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_inner_grid_scrolldisplay");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_visible("false");
            obj.set_text("기본");
            obj.set_value("normal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static20",null,"366","120","20","383",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("서버/네트워크 시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stSearchTime","Static20:8","366","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","stSearchTime:8","366","88","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("초, 렌더링시간");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRenderTime","Static21:8","366","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("0초");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","stRenderTime:32","366","48","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("조회건수");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCount","Static17:8","366","61","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("0건");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTemp",null,"0","90","20","-1",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj.set_format("###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelImport","btn_ExcelExport:2","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Exp ↓");
            obj.set_cssclass("btn_WF_btnExp");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SM","8","Static09:34",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_binddataset("dsOutput");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("대용량데이터처리");

                p.Static15.set_taborder("30");
                p.Static15.set_text("");
                p.Static15.set_background("beige");
                p.Static15.move("10","236",null,"50","7",null);

                p.Static04.set_taborder("0");
                p.Static04.set_text("조회건수");
                p.Static04.set_textAlign("left");
                p.Static04.set_cssclass("sta_WF_label");
                p.Static04.move("14","246","53","30",null,null);

                p.cmbRowCount.set_taborder("1");
                p.cmbRowCount.set_innerdataset(cmbRowCount_innerdataset);
                p.cmbRowCount.set_codecolumn("codecolumn");
                p.cmbRowCount.set_datacolumn("datacolumn");
                p.cmbRowCount.set_text("");
                p.cmbRowCount.set_value("1000");
                p.cmbRowCount.set_index("0");
                p.cmbRowCount.move("75","246","107","30",null,null);

                p.btn_Clear.set_taborder("9");
                p.btn_Clear.set_text("초기화");
                p.btn_Clear.set_cssclass("btn_WF_btnInitial");
                p.btn_Clear.move(null,"26","80","30","338",null);

                p.btn_Search.set_taborder("10");
                p.btn_Search.set_text("조회");
                p.btn_Search.set_cssclass("btn_WF_btnSearch");
                p.btn_Search.move("btn_Clear:2","26","80","30",null,null);

                p.btn_ExcelExport.set_taborder("2");
                p.btn_ExcelExport.set_text("Exp ↑");
                p.btn_ExcelExport.set_cssclass("btn_WF_btnExp");
                p.btn_ExcelExport.move("btn_Search:2","26","80","30",null,null);

                p.btn_Excel00.set_taborder("8");
                p.btn_Excel00.set_text("닫기");
                p.btn_Excel00.set_cssclass("btn_WF_btnWhite");
                p.btn_Excel00.move(null,"26","80","30","10",null);

                p.Static09.set_taborder("7");
                p.Static09.set_text(" 판정기준 1) % of Ref, Value : 71이상 양호, 2) % of Ref, Value : 61 ~ 70 요주의, 3) % of Ref, Value : 60 이하 불량.\r\n 참조 : Ref, (Reference, 기준Conductance).");
                p.Static09.set_background("beige");
                p.Static09.move("10","293",null,"65","10",null);

                p.Static08.set_taborder("5");
                p.Static08.set_text("조회기간");
                p.Static08.set_textAlign("left");
                p.Static08.set_cssclass("sta_WF_label");
                p.Static08.move("193","246","52","30",null,null);

                p.cal_Start.set_taborder("3");
                p.cal_Start.set_dateformat("yyyy-MM-dd ");
                p.cal_Start.move("253","246","121","30",null,null);

                p.Static10.set_taborder("6");
                p.Static10.set_text("~");
                p.Static10.set_textAlign("center");
                p.Static10.move("cal_Start:-2","246","17","30",null,null);

                p.cal_End.set_taborder("4");
                p.cal_End.set_dateformat("yyyy-MM-dd ");
                p.cal_End.move("Static10:-1","246","121","30",null,null);

                p.Static00.set_taborder("11");
                p.Static00.set_text("");
                p.Static00.set_font("normal 700 11pt/normal \"Arial\"");
                p.Static00.set_background("beige");
                p.Static00.move("10","62",null,"50","9",null);

                p.GroupBox00.set_taborder("12");
                p.GroupBox00.set_text("GENERAL DESCRIPTION");
                p.GroupBox00.move("10","120",null,"98","10",null);

                p.Static01.set_taborder("13");
                p.Static01.set_text("Piant");
                p.Static01.set_textAlign("left");
                p.Static01.set_cssclass("sta_WF_label");
                p.Static01.move("17","72","56","30",null,null);

                p.Static02.set_taborder("14");
                p.Static02.set_text("Item No");
                p.Static02.set_textAlign("left");
                p.Static02.set_cssclass("sta_WF_label");
                p.Static02.move("19","141","70","30",null,null);

                p.Static03.set_taborder("15");
                p.Static03.set_text("설비 Type");
                p.Static03.set_textAlign("left");
                p.Static03.set_cssclass("sta_WF_label");
                p.Static03.move("19","179","70","30",null,null);

                p.Combo00.set_taborder("16");
                p.Combo00.set_text("1CDU-BATT-A");
                p.Combo00.set_index("-1");
                p.Combo00.move("Static02:8","141","227","30",null,null);

                p.Edit00.set_taborder("17");
                p.Edit00.move("Static03:8","179","227","30",null,null);

                p.Static05.set_taborder("18");
                p.Static05.set_text("설비 명");
                p.Static05.set_textAlign("left");
                p.Static05.set_cssclass("sta_WF_label");
                p.Static05.move("Combo00:8","141","70","30",null,null);

                p.Static06.set_taborder("19");
                p.Static06.set_text("설비등급");
                p.Static06.set_textAlign("left");
                p.Static06.set_cssclass("sta_WF_label");
                p.Static06.move("Edit00:8","179","70","30",null,null);

                p.Edit02.set_taborder("29");
                p.Edit02.set_value("A");
                p.Edit02.move("Static06:8","179","227","30",null,null);

                p.Static07.set_taborder("20");
                p.Static07.set_text("양호");
                p.Static07.set_textAlign("center");
                p.Static07.move(null,"311","88","30","197",null);

                p.Static11.set_taborder("21");
                p.Static11.set_text("요주의");
                p.Static11.set_textAlign("center");
                p.Static11.move(null,"311","88","30","108",null);

                p.Static12.set_taborder("22");
                p.Static12.set_text("불량");
                p.Static12.set_textAlign("center");
                p.Static12.move(null,"311","88","30","19",null);

                p.Combo03.set_taborder("25");
                p.Combo03.set_text("정유공장");
                p.Combo03.set_value("");
                p.Combo03.set_index("-1");
                p.Combo03.move("81","72","227","30",null,null);

                p.Static13.set_taborder("23");
                p.Static13.set_text("Process");
                p.Static13.set_textAlign("left");
                p.Static13.set_cssclass("sta_WF_label");
                p.Static13.move("316","72","56","30",null,null);

                p.Combo04.set_taborder("26");
                p.Combo04.set_text("#1 Process");
                p.Combo04.set_value("");
                p.Combo04.set_index("-1");
                p.Combo04.move("380","72","198","30",null,null);

                p.Static14.set_taborder("24");
                p.Static14.set_text("Unit");
                p.Static14.set_textAlign("left");
                p.Static14.set_cssclass("sta_WF_label");
                p.Static14.set_maxwidth("");
                p.Static14.move("586","72","5.47%","30",null,null);

                p.Combo05.set_taborder("27");
                p.Combo05.set_maxheight("");
                p.Combo05.set_text("No, 1 CDU");
                p.Combo05.set_index("-1");
                p.Combo05.move("650","72","198","30",null,null);

                p.Edit01.set_taborder("28");
                p.Edit01.set_value("1CDU UPS-A BATTERY");
                p.Edit01.move("Static05:8","141","227","30",null,null);

                p.Static16.set_taborder("31");
                p.Static16.set_cssclass("sta_WF_logo");
                p.Static16.set_text("");
                p.Static16.move("12","10","200","40",null,null);

                p.Static19.set_taborder("35");
                p.Static19.set_text("Fast스크롤 기능");
                p.Static19.set_textAlign("left");
                p.Static19.set_cssclass("sta_WF_label");
                p.Static19.move("cal_End:11","246","96","30",null,null);

                p.Radio00.set_taborder("34");
                p.Radio00.set_innerdataset("ds_inner_grid_scroll");
                p.Radio00.set_codecolumn("code");
                p.Radio00.set_datacolumn("value");
                p.Radio00.set_columncount("2");
                p.Radio00.set_rowcount("3");
                p.Radio00.set_value("default");
                p.Radio00.set_index("0");
                p.Radio00.move("Static19:6","240","213","46",null,null);

                p.Static18.set_taborder("33");
                p.Static18.set_text("스크롤 모드");
                p.Static18.set_textAlign("left");
                p.Static18.set_cssclass("sta_WF_label");
                p.Static18.set_visible("false");
                p.Static18.move("Radio00:-11","246","68","30",null,null);

                p.Radio01.set_taborder("32");
                p.Radio01.set_innerdataset("ds_inner_grid_scrolldisplay");
                p.Radio01.set_codecolumn("code");
                p.Radio01.set_datacolumn("value");
                p.Radio01.set_visible("false");
                p.Radio01.set_value("normal");
                p.Radio01.set_index("0");
                p.Radio01.move("Static18:11","239","114","46",null,null);

                p.Static20.set_taborder("39");
                p.Static20.set_text("서버/네트워크 시간");
                p.Static20.set_textAlign("right");
                p.Static20.move(null,"366","120","20","383",null);

                p.stSearchTime.set_taborder("38");
                p.stSearchTime.set_text("0초");
                p.stSearchTime.set_color("red");
                p.stSearchTime.move("Static20:8","366","60","20",null,null);

                p.Static21.set_taborder("41");
                p.Static21.set_text("초, 렌더링시간");
                p.Static21.set_textAlign("right");
                p.Static21.move("stSearchTime:8","366","88","20",null,null);

                p.stRenderTime.set_taborder("40");
                p.stRenderTime.set_text("0초");
                p.stRenderTime.set_color("red");
                p.stRenderTime.move("Static21:8","366","52","20",null,null);

                p.Static17.set_taborder("36");
                p.Static17.set_text("조회건수");
                p.Static17.set_textAlign("right");
                p.Static17.move("stRenderTime:32","366","48","20",null,null);

                p.stRowCount.set_taborder("37");
                p.stRowCount.set_text("0건");
                p.stRowCount.set_color("red");
                p.stRowCount.move("Static17:8","366","61","20",null,null);

                p.mskTemp.set_taborder("42");
                p.mskTemp.set_visible("false");
                p.mskTemp.set_format("###,###,###,###");
                p.mskTemp.move(null,"0","90","20","-1",null);

                p.btn_ExcelImport.set_taborder("43");
                p.btn_ExcelImport.set_text("Exp ↓");
                p.btn_ExcelImport.set_cssclass("btn_WF_btnExp");
                p.btn_ExcelImport.move("btn_ExcelExport:2","26","80","30",null,null);

                p.grd_SM.set_taborder("44");
                p.grd_SM.set_binddataset("dsOutput");
                p.grd_SM.set_selecttype("area");
                p.grd_SM.set_cellmovingtype("col");
                p.grd_SM.set_cellsizingtype("col");
                p.grd_SM.move("8","Static09:34",null,null,"8","8");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,1300,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("auto autoindicator");

                p.Static15.move("7","604",null,"220","8",null);

                p.Static04.set_minwidth("120");
                p.Static04.set_maxwidth("220");
                p.Static04.move("16","616","20.63%","44",null,null);

                p.cmbRowCount.move("Static04:8","616",null,"44","17",null);

                p.btn_Clear.move("9","58","23.13%","54",null,null);

                p.btn_Search.move("btn_Clear:3","58","23.13%","54",null,null);

                p.btn_ExcelExport.set_text("Exp");
                p.btn_ExcelExport.move("btn_Search:3","58","23.13%","54",null,null);

                p.Static09.set_text(" 판정기준 \r\n1) % of Ref, Value : 71이상 양호.\r\n2) % of Ref, Value : 61 ~ 70 요주의. \r\n3) % of Ref, Value : 60 이하 불량. \r\n참조 : Ref, (Reference, 기준Conductance).");
                p.Static09.move("9","863",null,"81","8",null);

                p.cal_Start.move("Static08:8","667","149","44",null,null);

                p.cal_End.move("Static10:3","667",null,"44","17",null);

                p.Static08.set_minwidth("120");
                p.Static08.set_maxwidth("220");
                p.Static08.move("16","668","20.63%","44",null,null);

                p.Static10.move("cal_Start:3","666","5.21%","44",null,null);

                p.btn_Excel00.set_text("닫기");
                p.btn_Excel00.move("btn_ExcelExport:3","58",null,"54","8",null);

                p.Static00.move("8","121",null,"198","8",null);

                p.Static01.set_minwidth("120");
                p.Static01.set_maxwidth("220");
                p.Static01.move("16","129","20.63%","44",null,null);

                p.Static02.set_minwidth("120");
                p.Static02.set_maxwidth("220");
                p.Static02.move("16","341","20.63%","44",null,null);

                p.Static03.set_minwidth("120");
                p.Static03.set_maxwidth("220");
                p.Static03.move("16","545","20.63%","44",null,null);

                p.GroupBox00.move("8","320",null,"278","8",null);

                p.Combo00.move("Static02:8","341",null,"44","17",null);

                p.Static05.set_minwidth("120");
                p.Static05.set_maxwidth("220");
                p.Static05.move("16","409","20.63%","44",null,null);

                p.Static06.set_minwidth("120");
                p.Static06.set_maxwidth("220");
                p.Static06.move("16","477","20.63%","44",null,null);

                p.Static07.move("9","832","31.67%","22",null,null);

                p.Static11.move("Static07:3","832","31.67%","22",null,null);

                p.Edit00.move("Static03:8","545",null,"44","17",null);

                p.Static12.move("Static11:3","832",null,"22","9",null);

                p.Static13.set_minwidth("120");
                p.Static13.set_maxwidth("220");
                p.Static13.move("16","197","20.63%","44",null,null);

                p.Static14.set_minwidth("120");
                p.Static14.set_maxwidth("220");
                p.Static14.move("16","265","20.63%","44",null,null);

                p.Combo03.move("Static01:8","129",null,"44","17",null);

                p.Combo04.move("Static13:8","197",null,"44","17",null);

                p.Combo05.move("Static14:8","265",null,"44","17",null);

                p.Edit01.move("Static05:8","409",null,"44","17",null);

                p.Edit02.move("Static06:8","477",null,"44","17",null);

                p.Static16.move("9","9","200","40",null,null);

                p.Radio01.set_visible("false");
                p.Radio01.move("123","773","115","46",null,null);

                p.Static18.set_visible("false");
                p.Static18.move("16","770","78","30",null,null);

                p.Radio00.set_visible("true");
                p.Radio00.move("123","719","227","46",null,null);

                p.Static19.set_visible("true");
                p.Static19.move("16","722","96","30",null,null);

                p.Static20.move(null,"951","112","20","368",null);

                p.stSearchTime.move("Static20:8","951","60","20",null,null);

                p.Static21.move("stSearchTime:8","951","88","20",null,null);

                p.stRenderTime.move("Static21:8","951","52","20",null,null);

                p.Static17.move("stRenderTime:26","951","48","20",null,null);

                p.stRowCount.move("Static17:8","951","61","20",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("sample_01.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("sample_01.xfdl","Script::ext_CommEco.xjs");
        this.addIncludeScript("sample_01.xfdl","Script::excel.xjs");
        this.registerScript("sample_01.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : sample_01
        * 03. 화면설명 : 대용량데이터 조회
        * 04. 작성일   : 2019.04.22
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;
        this.executeIncludeScript("Script::excel.xjs"); /*include "Script::excel.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.sample_01_onload = function(obj,e)
        {
        	//그리드 Copy & Paste
        	this.fn_setGrid(this.grd_SM);

        	var date = new Date();
        	var cur = this.gfnGetDateMaskFormatString(date, "yyyyMMdd");

        	this.cal_Start.set_value(cur);
        	this.cal_End.set_value(cur);

        	this.fn_DisplayMode();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        //Excel Export
        this.fn_export = function(grid)
        {
        	this.ExcelExportObject.clear();

        	var sFileNm = "ExcelExportFile";
        	var constExportItemType = nexacro.ExportItemTypes.GRID;
        	var varExportSource = grid;
        	var strRange = "Sheet1!A1";
        	var strExportHead = "allband";
        	var strExportSelect = "allrecord";
        	var strExportMerge = "suppress";
        	var strExportValue = "allstyle";
        	var strExportImage = "none";
        	var strExceptStyle = "";
        	var strExportSize = "both";
        	//var strAcceptStyle = "cellline";

        	var ret = this.ExcelExportObject.addExportItem(constExportItemType, varExportSource, strRange, strExportHead, strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize);

        	this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL);
        	this.ExcelExportObject.set_exportfilename(sFileNm);
        	this.ExcelExportObject.set_exporturl("http://14.63.224.112/gscm/XExportImport");
        	this.ExcelExportObject.exportData();
        }

        this.ExcelExportObject_onsuccess = function(obj,e)
        {
        	this.alert("Excel Export Success !!");
        };

        this.ExcelExportObject_onerror = function(obj,e)
        {
        	this.alert( "Excel Export Error Type:["+ e.errortype + "] Error Msg:["+e.errormsg+"]");
        };

        //Excel Import
        this.fn_import = function()
        {
        	//ExcelImportObject 수동 생성.

        // 	if (this.importObj == null)
        // 	{
        // 		this.importObj = new nexacro.ExcelImportObject("Import", this);
        // 		this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        // 		this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        // 		this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
        // 	}

        	this.ExcelImportObject.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.ExcelImportObject.set_importurl("http://14.63.224.112/gscm/XImport");
        	this.ExcelImportObject.set_importfilemode("local");
        	this.ExcelImportObject.importData("", "[command=getsheetdata;output=outDs;Head=!A1:P1;body=!A2:P701;]", "[dsOutput=outDs]");
        }

        this.ExcelImportObject_onsuccess = function(obj,e)
        {
        	this.alert("Excel Import Success !!");
        	this.grd_SM.set_binddataset("dsOutput");
        	this.grd_SM.createFormat();
        	this.grd_SM.set_autofittype("col");
        };

        this.ExcelImportObject_onerror = function(obj,e)
        {
        	this.alert( "Excel Import Error Type:["+ e.errortype + "] Error Msg:["+e.errormsg+"]");
        };

        this.fn_DisplayMode = function()
        {
        	//alert(system.navigatorname); //Edge일때는 IE를 찍는 이슈가 있어서 브라우저타입에 따른 분기처리가 되지 않음.
        	//alert(nexacro._BrowserType); //Chrome일때는 webKit을 찍고 나머지는 올바른 타입에 버전까지 출력

        	if (navigator.userAgent.match(/Trident\/.*rv\:(.+?)[\);]/)) //IE
        	{
        		this.Static18.set_visible(true);
        		this.Radio01.set_visible(true);

        		this.Radio01_onitemchanged(this.Radio01);
        	}
        	else if (navigator.userAgent.match(/Edge/)) //Edge
        	{

        	}
        	else if (navigator.userAgent.match(/Chrome|CriOS/)) //Chrome
        	{

        	}
        };

        this.fn_ClearMode = function()
        {
        	this.grd_SM.set_formats("<Formats> <Format id=\"default\"/> </Formats>");
        	this.dsOutput.clearData();

        	this.stSearchTime.set_text("0초");
        	this.stRenderTime.set_text("0초");
        	this.stRowCount.set_text("0건");
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_Search = function(betweenDay)
        {
        	this.dsOutput.clearData();

        	var type = "";

        	if(this.cmbRowCount.value == "All")
        	{
        		type = "전체";
        	}

        	var sId = "SEARCH";
        	var sUrl = "http://14.63.224.112/gscm/service/skinnovation/Service_SSV_ZIP_inQuery.jsp?betweenDay=" + betweenDay + "&cnt=" + this.cmbRowCount.value;
        	var sInDs = "";
        	var sOutDs = "dsOutput=dsOutput";
        	var sParam = "";
        	var sCallback = "fn_Callback";

        	this.starttime = new Date();
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);
        }

        this.fn_Callback = function(sId, nErrorCd, sErrorMsg, elapsedTime)
        {
        	if (nErrorCd < 0)
        	{
        		alert("[" + nErrorCd + "]" + sErrorMsg);
        	}
        	else
        	{
        		if (sId == "SEARCH")
        		{
        			this.endtime = new Date();
        			var totaltime = nexacro.round((this.endtime - this.starttime) / 1000, 3);

        			this.stSearchTime.set_text(elapsedTime + "초");
        			this.stRenderTime.set_text(nexacro.round(totaltime - elapsedTime, 3) + "초");

        			var nRowCount = this.dsOutput.rowcount;
        			var sRowCount;

        			this.mskTemp.set_value(nRowCount);

        			sRowCount = this.mskTemp.text;

        			this.stRowCount.set_text(sRowCount + "건");
        		}
        		else if (sId == "SAVE")
        		{
        			alert("저장 완료");
        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :
        			this.grd_SM.set_autofittype("none");

        			var days = new Array();
        			days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        			//년도
        			var d_start_year = this.cal_Start.value.substr(0, 4);
        			var d_end_year = this.cal_End.value.substr(0, 4);

        			//월
        			var d_start_month = this.cal_Start.value.substr(4, 2);
        			var d_end_month = this.cal_End.value.substr(4, 2);

        			//일
        			var d_start_day = this.cal_Start.value.substr(6, 2);
        			var d_end_day = this.cal_End.value.substr(6, 2);

        			//날짜차이
        			var startDate = new Date(d_start_year, (d_start_month - 1), d_start_day);
        			var endDate = new Date(d_end_year, (d_end_month - 1), d_end_day);

        			var betweenDay = ((endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24) + 1;

        			if(parseInt(this.cal_Start.value) > parseInt(this.cal_End.value))
        			{
        				alert("시작일은 종료일보다 클 수 없습니다.");
        				return;
        			}
        			else
        			{
        				//최대 생성 컬럼 개수는 200개
        				betweenDay = (betweenDay > 200) ? 200 : betweenDay;

        			    //그리드 동적 생성
        				var strFormat1 = ' <Formats>'
        				+ '     <Format id="default">'

        				+ ' 	<Columns>'
        				+ ' 		<Col size="70"/>';

        				//Column Make Loop
        				for(var i=1; i<=betweenDay; i++)
        				{
        					strFormat1 += ' <Col size="100"/>';
        				}

        				var strFormat2 = ' 	</Columns>'
        				+ ' 	<Rows>'
        				+ ' 		<Row band="head" size="24"/>'
        				+ ' 		<Row band="head" size="24"/>'
        				+ ' 		<Row size="40"/>'
        				+ ' 	</Rows>'

        				+ ' 	<Band id="head">'
        				+ ' 		<Cell rowspan="2" text="Jar No"/>'

        				+ ' 		<Cell col="1" colspan="' + betweenDay + '" text="% of Ref, Value"/>';

        				//Type Setting
        				//년도
        				var d_start_year = parseInt(d_start_year);
        				var d_end_year = parseInt(d_end_year);

        				//월
        				var d_start_month = parseInt(d_start_month);
        				var d_end_month = parseInt(d_start_month);

        				//일
        				var d_start_day = parseInt(d_start_day);
        				var d_end_day = parseInt(d_end_day);

        				//date setting
        				var limitDay = days[d_start_month];

        				//Column Info Loop
        				for(var i=1; i<=betweenDay; i++)
        				{
        					//날짜가 넘어갈 때 초기화 작업
        					if(d_start_day > limitDay)
        					{
        						d_start_month++;
        						limitDay = days[d_start_month];
        						d_start_day = 1;
        					}

        					//월이 넘어갈 때 초기화 작업
        					if(d_start_month > 12)
        					{
        						d_start_year++;
        						d_start_month = 1;
        					}

        					strFormat2 += ' 		<Cell row="1" col="'+ i +'" text="'+ d_start_year +'-'+ d_start_month.toString().padLeft(2, 0) +'-'+ d_start_day.toString().padLeft(2, 0) +'"/>';

        					d_start_day++;
        				}

        				var strFormat3 = ' 	</Band>'
        				+ ' 	<Band id="body">'
        			    + ' 		<Cell expr="currow + 1"/>';

        				//Body Info Loop
        				for(var i=1; i<=betweenDay; i++)
        				{
        					strFormat3 += ' 		<Cell col="'+ i +'" text="bind:COL_'+ i +'" cssclass="expr:(COL_'+ i +' &lt;= 60) ? \'Expr_Case_Background_lightpink\' : (COL_'+ i +' &gt; 60 &amp;&amp; COL_'+ i +' &lt;= 70) ? \'Expr_Case_Background_aqua\' : \'\'"/>'
        				}

        				var strFormat4 = ' 	</Band>'
        				+ '      </Format>'
        				+ ' </Formats>';

        				var strFormat = strFormat1 + strFormat2 + strFormat3 + strFormat4;

        				this.grd_SM.set_formats(strFormat);

        				//데이터 조회
        				this.fn_Search(betweenDay);
        			}
        			break;
        		case "btn_ExcelExport" :
        			this.fn_export(this.grd_SM);
        			break;
        		case "btn_ExcelImport" :
        			this.fn_ClearMode();
        			this.fn_import(this.grd_SM);
        			break;
        		case "btn_Clear" :
        			this.fn_ClearMode();
        			break;
        		case "btn_Close" :
        			this.close();
        			break;
        	}
        };

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.grd_SM.set_fastvscrolltype(obj.value);
        };

        this.Radio01_onitemchanged = function(obj,e)
        {
        	if(obj.value == "page")
        	{
        		this.Radio00.set_value("default");
        		this.Radio00_onitemchanged(this.Radio00);
        		this.Radio00.set_enable(false);
        	}
        	else if(obj.value == "line")
        	{
        		this.Radio00.set_value("default");
        		this.Radio00_onitemchanged(this.Radio00);
        		this.Radio00.set_enable(false);
        	}
        	else if(obj.value == "normal")
        	{
        		this.Radio00.set_enable(true);
        	}

        	this.grd_SM.set_scrolldisplaymode(obj.value);
        };

        this.sample_01_onlayoutchanged = function(obj,e)
        {
        	this.fn_DisplayMode();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample_01_onload,this);
            this.addEventHandler("onsize",this.sample_01_onsize,this);
            this.addEventHandler("onlayoutchanged",this.sample_01_onlayoutchanged,this);
            this.addEventHandler("canlayoutchange",this.sample_01_canlayoutchange,this);
            this.btn_Clear.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Excel00.addEventHandler("onclick",this.comm_Click,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio01_onitemchanged,this);
            this.mskTemp.addEventHandler("onchanged",this.mskTemp_onchanged,this);
            this.btn_ExcelImport.addEventHandler("onclick",this.comm_Click,this);
            this.ExcelExportObject.addEventHandler("onerror",this.ExcelExportObject_onerror,this);
            this.ExcelExportObject.addEventHandler("onsuccess",this.ExcelExportObject_onsuccess,this);
            this.ExcelImportObject.addEventHandler("onerror",this.ExcelImportObject_onerror,this);
            this.ExcelImportObject.addEventHandler("onsuccess",this.ExcelImportObject_onsuccess,this);
        };

        this.loadIncludeScript("sample_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
