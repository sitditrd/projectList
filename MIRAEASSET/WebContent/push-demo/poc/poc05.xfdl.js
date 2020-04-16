(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("w_cmccusstch01");
            this.set_titletext("Inward Remittance Transfer Other Bank");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_criteria", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Short name</Col></Row><Row><Col id=\"Column0\">Customer Number</Col></Row><Row><Col id=\"Column0\">Full name</Col></Row><Row><Col id=\"Column0\">Nick name</Col></Row><Row><Col id=\"Column0\">Phone number</Col></Row><Row><Col id=\"Column0\">Address</Col></Row><Row><Col id=\"Column0\">Register No</Col></Row><Row><Col id=\"Column0\">Passport No</Col></Row><Row><Col id=\"Column0\">Driver No</Col></Row><Row><Col id=\"Column0\">Reference No (Old Customer Number)</Col></Row><Row><Col id=\"Column0\">Bank Code</Col></Row><Row><Col id=\"Column0\">Last Update</Col></Row><Row><Col id=\"Column0\">Business No</Col></Row><Row><Col id=\"Column0\">Establish no</Col></Row><Row><Col id=\"Column0\">Tax No</Col></Row><Row><Col id=\"Column0\">District</Col></Row><Row><Col id=\"Column0\">Commune</Col></Row><Row><Col id=\"Column0\">Nationality No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customerType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Individual Customer</Col></Row><Row><Col id=\"Column0\">Private Business Owner</Col></Row><Row><Col id=\"Column0\">Household</Col></Row><Row><Col id=\"Column0\">Cooperative</Col></Row><Row><Col id=\"Column0\">Stock Company</Col></Row><Row><Col id=\"Column0\">Company Limited</Col></Row><Row><Col id=\"Column0\">Joint Venture Company</Col></Row><Row><Col id=\"Column0\">Foreign Investment Company</Col></Row><Row><Col id=\"Column0\">State Enterprise</Col></Row><Row><Col id=\"Column0\">Financial Institution</Col></Row><Row><Col id=\"Column0\">Government &amp; Public Institution</Col></Row><Row><Col id=\"Column0\">Organization</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","10",null,"100","24",null,"46",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Swift Message");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,null,"60","24","10","46",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button14",null,null,"60","24","73","46",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Clear");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button15",null,null,"60","24","136","46",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","113",null,"66","24",null,"46",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Unsettled");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","8","450",null,"290","8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Transaction");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","1","5",null,"251","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static15","7","16","115","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Remitting Bank");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","7","44","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Reimbursing Bank");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit33","138","44","105","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button16","245","44","25","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","245","16","25","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","138","16","105","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","7","72","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("Reciever Bank");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit01","138","72","105","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button01","245","72","25","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","7","100","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Ordering");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit02","138","100","318","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit03","138","128","318","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit04","138","156","318","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit05","138","184","657","61",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","7","128","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Beneficiary");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","7","156","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("Beneficiary a/c");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit06","271","16","233","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit07","271","44","233","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit08","271","72","233","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06","522","16","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("Details of Charge");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","522","44","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Message Key");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","522","72","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("Their Trans. Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo08","651","16","144","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("SHA");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit09","651","44","144","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit10","651","72","144","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_value("0000/00/00");
            obj.set_text("0000/00/00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static09","522","100","115","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("Their Reference");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit11","651","100","144","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("0000/00/00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","472","128","95","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("Country Code");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit12","577","128","46","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_textAlign("center");
            obj.set_text("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02","625","129","23","23",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit13","651","128","144","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("0000/00/00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","7","184","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("Remark");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("BOK");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","1","10",null,"240","1",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16","5","21","133","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("외환전산망");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","5","49","133","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("송금방식수출");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","5","77","133","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("가격조건");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo08","148","21","95","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo00","148","49","95","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo01","148","77","75","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","246","21","145","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit39","226","77","165","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02","402","77","107","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("HS CODE");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static03","402","49","107","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("수출신고서");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static04","402","21","107","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("사유코드");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo02","517","21","76","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit00","596","21","190","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit02","517","77","65","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_text("KRW");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button03","584","77","25","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit04","611","77","176","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static14","31","113","765","127",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_box02");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static05","8","121","20","116",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_text("수\r\n취\r\n인\r\n정\r\n보");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("center");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static06","35","177","103","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("19");
            obj.set_text("주민번호구분");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static07","35","149","103","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("20");
            obj.set_text("기업규모구분");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static08","35","121","103","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("21");
            obj.set_text("거래주체성격");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static09","35","205","103","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("22");
            obj.set_text("주민사업번호");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo03","148","121","75","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit01","226","121","165","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("24");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo04","148","149","75","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit03","226","149","165","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("26");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo05","148","177","75","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit05","226","177","165","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("28");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo06","148","205","75","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit06","226","205","165","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("30");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static10","406","121","103","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("31");
            obj.set_text("거주성");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static11","406","149","103","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("32");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12","406","177","103","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("33");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo07","510","121","81","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit07","594","121","195","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("35");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit08","510","177","55","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("36");
            obj.set_text("KRW");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00","567","177","25","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit09","594","177","195","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("38");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button01","623","205","96","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("39");
            obj.set_text("Third Cust Info");
            obj.set_cssclass("btn_WF_basic03");
            obj.set_enable("false");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button02","723","205","66","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("40");
            obj.set_text("복수거래");
            obj.set_cssclass("btn_WF_basic03");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static17","10","10",null,"420","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","18","24","165","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Transaction Number");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","18","54","165","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Remitting Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","18","84","165","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Payment Currency");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","170","54","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","228","54","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","170","24","115","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","254","54","116","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","170","84","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","228","84","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","289","24","165","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Domestic/Overseas");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","427","24","94","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Overseas");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","534","24","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("MT103");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","601","24","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("MT202C");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","677","24","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("MT191");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","744","24","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("MT199");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","373","54","96","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","472","54","96","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","578","54","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Receive Date");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","578","84","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Payment Date");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","578","114","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Degree");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","687","54","116","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","687","84","116","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","687","114","116","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("14:30");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","339","84","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("[Basic Rate]");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","429","84","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_btnDrop");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","453","84","115","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","170","111","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","267","111","146","25",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","416","111","152","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","103","138","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Format");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","170","138","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","267","138","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","293","138","64","25",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","360","138","208","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo06","18","138","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","17","175","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Commission Details");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","16","208","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","64","208","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","91","208","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","159","208","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","257","208","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","305","208","96","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","403","208","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18","451","208","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","553","213","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("-");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19","16","235","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","64","235","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20","91","235","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21","159","235","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22","257","235","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23","305","235","96","25",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24","403","235","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25","451","235","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","553","240","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("-");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26","16","262","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","64","262","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27","91","262","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28","159","262","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29","257","262","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30","305","262","96","25",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31","403","262","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32","451","262","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","553","267","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("-");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","16","289","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","160","289","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Format");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit33","221","289","104","25",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","327","289","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34","353","289","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit35","415","289","153","25",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","600","175","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("Special Rate");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","600","231","203","25",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit36","600","265","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","586","185","1","130",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_LineDot");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","17","328","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("USD EQUIV.");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","93","359","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("[Basic Rate]");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","17","387","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("btn_WF_btnDrop");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit37","41","387","144","25",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","188","359","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo07","286","359","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit38","384","359","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","493","359","133","25",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("Total Amount");
            obj.set_cssclass("sta_WF_label01");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo08","188","387","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit39","286","387","135","25",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit40","424","387","55","25",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit41","625","359","177","25",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit42","625","387","177","25",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit43","481","387","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit44","578","387","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_value("USD");
            obj.set_text("USD");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,820,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("poc05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
