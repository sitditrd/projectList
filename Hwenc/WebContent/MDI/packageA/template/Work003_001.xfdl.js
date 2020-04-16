(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work003_001");
            this.set_titletext("기능직 출역관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">기본</Col><Col id=\"Column1\">4.00</Col><Col id=\"Column32\">168.00</Col></Row><Row><Col id=\"Column0\">시간외</Col><Col id=\"Column1\">4</Col><Col id=\"Column32\">63.00</Col></Row><Row><Col id=\"Column0\">야간</Col><Col id=\"Column32\">0.00</Col></Row><Row><Col id=\"Column0\">휴일</Col><Col id=\"Column1\">4</Col><Col id=\"Column32\">32.00</Col></Row><Row><Col id=\"Column0\">주차</Col><Col id=\"Column32\">40.00</Col></Row><Row><Col id=\"Column0\">월차</Col><Col id=\"Column32\">0.00</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00",null,"0","400","21","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"0","42","21","183",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","42","21","137",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","42","21","91",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","42","21","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04",null,"0","42","21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("출력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05",null,"0","64","21","228",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("세액계산");
            obj.set_cssclass("btn_WF_SubAction");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","27",null,"39","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static125","225","12","43","13",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("지금일");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","40",null,"12","8",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","12","12",null,"13","1194",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SeaFieldLabel");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin00","55","8","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_min("2000");
            obj.set_max("2100");
            obj.set_value("");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static125:11","8","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_text("가나다라마바사");
            obj.set_value("c0003");
            obj.set_index("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid01","0",null,null,"187","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"253\" band=\"right\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"작업구분\"/><Cell col=\"1\" text=\"01\"/><Cell col=\"2\" text=\"02\"/><Cell col=\"3\" text=\"03\"/><Cell col=\"4\" text=\"04\"/><Cell col=\"5\" text=\"05\"/><Cell col=\"6\" text=\"06\"/><Cell col=\"7\" text=\"07\"/><Cell col=\"8\" text=\"08\"/><Cell col=\"9\" text=\"09\"/><Cell col=\"10\" text=\"10\"/><Cell col=\"11\" text=\"11\"/><Cell col=\"12\" text=\"12\"/><Cell col=\"13\" text=\"13\"/><Cell col=\"14\" text=\"14\"/><Cell col=\"15\" text=\"15\"/><Cell col=\"16\" text=\"16\"/><Cell col=\"17\" text=\"17\"/><Cell col=\"18\" text=\"18\"/><Cell col=\"19\" text=\"19\"/><Cell col=\"20\" text=\"20\"/><Cell col=\"21\" text=\"21\"/><Cell col=\"22\" text=\"22\"/><Cell col=\"23\" text=\"23\"/><Cell col=\"24\" text=\"24\"/><Cell col=\"25\" text=\"25\"/><Cell col=\"26\" text=\"26\"/><Cell col=\"27\" text=\"27\"/><Cell col=\"28\" text=\"28\"/><Cell col=\"29\" text=\"29\"/><Cell col=\"30\" text=\"30\"/><Cell col=\"31\" text=\"31\"/><Cell col=\"32\" text=\"환산시간\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"text\"/><Cell col=\"5\" displaytype=\"text\"/><Cell col=\"6\" displaytype=\"text\"/><Cell col=\"7\" displaytype=\"text\"/><Cell col=\"8\" displaytype=\"text\"/><Cell col=\"9\" displaytype=\"text\"/><Cell col=\"10\" displaytype=\"text\"/><Cell col=\"11\" displaytype=\"text\"/><Cell col=\"12\" displaytype=\"text\"/><Cell col=\"13\" displaytype=\"text\"/><Cell col=\"14\" displaytype=\"text\"/><Cell col=\"15\" displaytype=\"text\"/><Cell col=\"16\" displaytype=\"text\"/><Cell col=\"17\" displaytype=\"text\"/><Cell col=\"18\" displaytype=\"text\"/><Cell col=\"19\" displaytype=\"text\"/><Cell col=\"20\" displaytype=\"text\"/><Cell col=\"21\" displaytype=\"text\"/><Cell col=\"22\" displaytype=\"text\"/><Cell col=\"23\" displaytype=\"text\"/><Cell col=\"24\" displaytype=\"text\"/><Cell col=\"25\" displaytype=\"text\"/><Cell col=\"26\" displaytype=\"text\"/><Cell col=\"27\" displaytype=\"text\"/><Cell col=\"28\" displaytype=\"text\"/><Cell col=\"29\" displaytype=\"text\"/><Cell col=\"30\" displaytype=\"text\"/><Cell col=\"31\" displaytype=\"text\"/><Cell col=\"32\" displaytype=\"number\" text=\"bind:Column32\" cssclass=\"grd_WF_BodyCellPadding\" letterSpacing=\"-0.5px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div03",null,"93","255",null,"0","Grid01:10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_DefaultBox");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","15","17",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static47","15","18","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("시간계");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","15","381",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgB");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","15","45",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","15","73",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","15","101",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","15","129",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","15","157",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10","15","185",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11","15","213",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static12","15","241",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static13","15","269",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static14","15","297",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static15","15","325",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static16","15","353",null,"29","15",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static18","15","46","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("환산시간");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static19","15","74","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("조정수당");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static20","15","102","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("금액계");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static21","15","130","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("갑근세");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static22","15","158","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("주민세");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static25","15","186","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("건강보험");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26","15","214","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("국민연금");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27","15","242","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("고용보험");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static28","15","270","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("학자금");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static29","15","298","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("지급액");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static30","15","326","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("식  대");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static31","15","354","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("교통비");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static33","15","382","73","27",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_text("지급총계");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit31","91","21",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","91","49",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","91","77",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","91","105",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("31");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","91","133",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("32");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","91","161",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("33");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","91","189",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("34");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","91","217",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08","91","245",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("36");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09","91","273",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10","91","301",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11","91","329",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("39");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12","91","357",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("40");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14","91","385",null,"21","18",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_format("###,###");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","93",null,null,"Div03:10","Grid01:10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" autosizecol=\"none\" controlautosizingtype=\"none\" edittype=\"none\" text=\"주민번호\"/><Cell col=\"1\" text=\"성명\" edittype=\"none\"/><Cell col=\"2\" text=\"직종\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"시급\"/><Cell col=\"5\" text=\"지급예정액\"/><Cell col=\"6\" text=\"지급일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" cssclass=\"grd_WF_BodyCellPadding\"/><Cell col=\"6\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\" text=\"상용 : 4명, 일용 : 2명, 외국인 : 0명\"/><Cell col=\"2\" text=\"총 6명\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" text=\"999,999,999\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","650","19",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("template::WF_LocationForm.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","-4","72","247","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("최종 업데이트 일시 : 2016년 01월 30일 10시 53분");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static128","Static00:12","75","269","12",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※ 저장전 인원별[세액계산] 버튼을 반드시 클릭하세요.");
            obj.set_cssclass("sta_WF_ResultLabel");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"0","111","21","295",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("노임자료 본사전송");
            obj.set_cssclass("btn_WF_SubAction");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","447","360","346","170",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" 그리드 데이터 셀 폰트색상 Class명\r\n\r\n녹색 : grd_WF_BodyCellGreen\r\n파랑 : grd_WF_BodyCellBlue\r\n빨강 : grd_WF_BodyCellRed\r\n\r\n");
            obj.set_background("yellow");
            obj.set_boxShadow("10px 10px 10px gray");
            obj.set_padding("10px 10px 10px 30px");
            obj.set_font("14px/21px \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1240,818,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","template::WF_LocationForm.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WF_MainForm_onload,this);
            this.Div01.form.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Div03.form.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static01.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static03.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static04.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static05.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static06.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static10.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static11.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static12.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static13.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static14.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static15.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div03.form.Static16.addEventHandler("onclick",this.Static07_onclick,this);
        };

        this.loadIncludeScript("Work003_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
