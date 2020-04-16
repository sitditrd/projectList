(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("w_dpsvusp00000");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(428,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("resident_flag", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Yes</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"CX\" type=\"STRING\" size=\"256\"/><Column id=\"GG\" type=\"STRING\" size=\"256\"/><Column id=\"GK\" type=\"STRING\" size=\"256\"/><Column id=\"HR\" type=\"STRING\" size=\"256\"/><Column id=\"HS\" type=\"STRING\" size=\"256\"/><Column id=\"PX\" type=\"STRING\" size=\"256\"/><Column id=\"WU\" type=\"STRING\" size=\"256\"/><Column id=\"nomi_RKTMSL\" type=\"STRING\" size=\"256\"/><Column id=\"nomi_240\" type=\"STRING\" size=\"256\"/><Column id=\"nomi_135SP\" type=\"STRING\" size=\"256\"/><Column id=\"nomi_245\" type=\"STRING\" size=\"256\"/><Column id=\"nomi_170\" type=\"STRING\" size=\"256\"/><Column id=\"des_CBR\" type=\"STRING\" size=\"256\"/><Column id=\"des_ASIC\" type=\"STRING\" size=\"256\"/><Column id=\"des_OCC\" type=\"STRING\" size=\"256\"/><Column id=\"des_CAP\" type=\"STRING\" size=\"256\"/><Column id=\"All\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button09",null,null,"80","30","10","33",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic05");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,null,"80","30","93","33",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","10",null,null,"10","80",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_multiline("true");
            obj.set_tabjustify("false");
            obj.set_cssclass("tab_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("General");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static06","5","3","396","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("조회조건 (나머지는 탭은 dummy)");
            obj.set_cssclass("sta_WF_title01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static36","5","33",null,"477","5",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","12","43","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Number");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","12","300","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Description");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03_00","12","162","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Nominator");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("des_95","22","329","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("2UEx CBR");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("des_OCC","21","355","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("RCK OCC");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("des_CAP","224","355","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("CAP ROK OC");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("des_1ROK","225","329","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("ROK ASIC");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("nomi_RKTMSL","22","197","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("RKTMSL MDMMSL");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("nomi_135SP","22","226","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("135SP");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("nomi_170","22","255","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("170");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("nomi_245","225","226","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("245");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("nomi_240","225","197","150","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("240");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CX","22","81","60","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("CX");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("GK","182","81","60","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("GK");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("HR","262","81","60","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("HR");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("GG","102","81","60","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("GG");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("HS","22","113","60","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("HS");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("WU","182","113","60","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("WU");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("PX","102","113","60","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("PX");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","21","468","127","32",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("전체선택");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Individual");
            obj.set_enable("true");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","1","5",null,"510","1",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static18","8","13","178","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Holding Percentage (%)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit11","180","16","90","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("2016/06/21");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20","8","43","140","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("DBA Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static22","8","73","168","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Major Product");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static28","8","173","183","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("Fiscal Year End (Month)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","8","203","168","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("Number of Employees");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit23","180","206","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit07","180","46","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_value("YOUNG STEEL KOREA CO.,LTD.");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static08","8","143","140","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("Registered Flag");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Radio("Radio01","181","146","130","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static10","8","233","140","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("Total Assets");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit05","180","76","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo02","180","176","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit06","180","236","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","8","263","140","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_text("Net Income");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static03","8","293","168","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_text("Parent Company Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit08","180","266","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit13","180","296","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("17");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static06","8","323","168","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_text("Tax amount");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit17","180","326","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static14","8","413","140","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("20");
            obj.set_text("Actual Capital");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit21","180","416","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("21");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static24","8","443","178","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("22");
            obj.set_text("Business Scope Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo05","180","446","210","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("23");
            obj.set_text("Combo00");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Corporation");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static15","8","13","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Organization Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo06","190","16","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static17","8","43","173","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("Operation Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static19","8","73","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("Local DBA Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static21","8","103","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_text("Representative");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static23","8","138","195","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("Business Line Type\r\n(Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27","8","203","188","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("7");
            obj.set_text("Incorporatioin Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static29","8","233","176","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_text("Tatal Number of Shapes");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit22","190","236","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("9");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo00","190","46","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("10");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static07","8","173","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("11");
            obj.set_text("Business Scale Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static09","8","263","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("12");
            obj.set_text("Net Worth");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit09","278","266","117","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit01","190","76","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("14");
            obj.set_password("true");
            obj.set_value("abcdef");
            obj.set_text("abcdef");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit02","190","106","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("15");
            obj.set_password("true");
            obj.set_value("abcdef");
            obj.set_text("abcdef");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit03","190","136","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("16");
            obj.set_value("370101");
            obj.set_text("370101");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit04","293","136","102","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("17");
            obj.set_value("WHOLESALER(IRON AND STEEL)");
            obj.set_text("WHOLESALER(IRON AND STEEL)");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo01","190","176","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","190","206","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("19");
            obj.set_type("spin");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo04","190","266","85","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("20");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00","8","293","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("21");
            obj.set_text("Net Sales");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static02","8","323","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("22");
            obj.set_text("Operatioin Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit10","190","296","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("23");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit12","190","326","36","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("24");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit14","229","326","166","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("25");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static04","8","353","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("26");
            obj.set_text("Parent company Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit15","190","356","36","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("27");
            obj.set_value("JP");
            obj.set_text("JP");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit16","229","356","166","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("28");
            obj.set_value("JAPAN");
            obj.set_text("JAPAN");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static11","8","383","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("29");
            obj.set_text("Number of Locations");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","190","386","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("30");
            obj.set_value("1");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static12","8","413","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("31");
            obj.set_text("Ownership Corporation");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit18","190","416","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("32");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit19","293","416","102","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("33");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static13","8","443","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("34");
            obj.set_text("Legal Capital");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit20","190","446","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("35");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static16","8","473","173","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("36");
            obj.set_text("Cash Turnover Per Month");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo03","190","476","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("37");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("Address&Tel");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static36","1","4",null,"88","1",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00","9","18","162","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_text("Mailing Address");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static04","9","48","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_text("Cellular Phone No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit03","150","51","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static06","1","102",null,"350","1",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static12","20","172","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("5");
            obj.set_text("Line #1");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit10","96","175","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("6");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static14","14","147","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("7");
            obj.set_text("Local Address");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Combo("Combo04","150","21","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static03","11","113","162","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("9");
            obj.set_text("Address Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Combo("Combo05","120","116","238","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("10");
            obj.set_text("Combo00");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit16","96","205","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("11");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static32","20","202","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("12");
            obj.set_text("Line #2");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static33","20","232","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("13");
            obj.set_text("Line #3");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit18","96","235","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static25","20","292","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("15");
            obj.set_text("Line #1");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit14","96","295","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static26","14","267","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("17");
            obj.set_text("English Address");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit19","96","325","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("18");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static34","20","322","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("19");
            obj.set_text("Line #2");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static38","20","352","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("20");
            obj.set_text("Line #3");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit24","96","355","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("21");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static11","13","402","59","31",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("22");
            obj.set_text("*Remark");
            obj.set_cssclass("sta_WF_Helptxt");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("Contact Person");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static36","0","0",null,null,"1","0",null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static00","10","19","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_text("Full Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static04","10","49","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("2");
            obj.set_text("Title");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit03","127","22","256","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Combo("Combo04","127","52","256","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static26","12","258","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("5");
            obj.set_text("Bus. Part");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new TextArea("TextArea00",null,"352","254","115","31",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("6");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","23","294","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("7");
            obj.set_text("F/X");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static03","10","79","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("8");
            obj.set_text("Issued By");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit01","127","82","68","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("9");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit02","198","82","185","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("10");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static07","10","109","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("11");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit04","127","112","256","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("12");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static08","10","143","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("13");
            obj.set_text("Cellular phone\r\nNo.");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit05","127","142","256","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static43","10","192","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("15");
            obj.set_text("Tel");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit32","127","195","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit33","195","195","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("17");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit34","263","195","72","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("18");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit35","338","195","43","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit36","127","225","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit37","195","225","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("21");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit38","263","225","72","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static44","10","222","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("23");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static45","128","171","64","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("24");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static46","198","171","64","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("25");
            obj.set_text("Area");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static47","272","171","64","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("26");
            obj.set_text("No");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static48","346","171","44","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("27");
            obj.set_text("Ext.");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","162","294","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("28");
            obj.set_text("Derivative");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","23","318","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("29");
            obj.set_text("Deposit");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","162","318","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("30");
            obj.set_text("Imp./Exp.");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Tab00);
            obj.set_text("info");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static36","0","0",null,null,"1","0",null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static01","9","15","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_text("Email Address");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit02","136","18","240","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static13","10","169","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("2");
            obj.set_text("Province");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit13","128","172","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static02","9","45","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("4");
            obj.set_text("Pager No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit15","136","48","240","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("5");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static31","10","110","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("6");
            obj.set_text("Wrong Address");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit25","198","172","193","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("7");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static39","10","199","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("8");
            obj.set_text("District");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit26","128","202","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("9");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit27","198","202","193","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("10");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static40","10","229","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("11");
            obj.set_text("Commune/Ward");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit28","128","232","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("12");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit29","198","232","193","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static41","10","259","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("14");
            obj.set_text("Zip");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit30","128","262","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("15");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit31","198","262","193","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static43","10","319","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("17");
            obj.set_text("Tel");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit32","126","322","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("18");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit33","196","322","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit34","266","322","75","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit36","126","352","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("21");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit37","196","352","67","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("Edit38","266","352","75","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("23");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static44","10","349","140","30",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("24");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static45","127","298","64","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("25");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static46","197","298","64","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("26");
            obj.set_text("Area");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static47","271","298","64","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("27");
            obj.set_text("No");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Radio("Radio02","128","113","130","25",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("28");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("Button11","96","464","73","24",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("29");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("Button12","172","464","73","24",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("30");
            obj.set_text("Modify");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("Button13","248","464","73","24",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("31");
            obj.set_text("Remove");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("Button14","324","464","73","24",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("32");
            obj.set_text("Reset");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.Tab00);
            obj.set_text("Extra");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static06","5","3","150","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("0");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_title01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static36","5","36",null,"122","5",null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static37","5","170",null,"288","5",null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static15","12","178","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("3");
            obj.set_text("Status");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static17","12","208","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("4");
            obj.set_text("Customer Status");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit11","190","210","85","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("5");
            obj.set_value("2016/06/21");
            obj.set_text("2016/06/21");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static19","12","238","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("6");
            obj.set_text("Location Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit12","190","241","38","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("7");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static21","12","268","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("8");
            obj.set_text("Customer Deposit Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static23","12","298","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("9");
            obj.set_text("Financial Institutioin Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static27","12","358","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("10");
            obj.set_text("Transaction Bank Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit20","190","361","205","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("11");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static29","12","388","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("12");
            obj.set_text("BIS Rate");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit22","190","391","205","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","283","186","118","20",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("14");
            obj.set_text("VIP");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static00","18","66","162","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("15");
            obj.set_text("ABBR Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit01","180","69","215","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static02","12","43","140","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("17");
            obj.set_text("English Name");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static03","12","96","140","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("18");
            obj.set_text("Korean Name");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static04","18","119","140","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("19");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit03","180","122","215","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","283","209","118","20",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("21");
            obj.set_text("Black Customer");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit04","190","180","85","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("22");
            obj.set_value("3300");
            obj.set_text("3300");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit05","230","241","165","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("23");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Combo("Combo01","190","301","205","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("24");
            obj.set_text("Combo00");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit08","190","271","205","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("25");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static07","12","328","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("26");
            obj.set_text("Resident Flag (Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Radio("Radio00","190","331","130","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("27");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Static("Static09","12","418","170","30",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("28");
            obj.set_text("Tax Type (Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("Edit09","190","421","205","25",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("29");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.Tab00);
            obj.set_text("Filter Condition");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static15","8","13","177","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("0");
            obj.set_text("Organization Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Combo("Combo06","190","16","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static17","8","43","173","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("2");
            obj.set_text("Operation Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static19","8","73","140","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("3");
            obj.set_text("Local DBA Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static21","8","103","177","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("4");
            obj.set_text("Representative");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static23","8","138","195","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("5");
            obj.set_text("Business Line Type\r\n(Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static27","8","203","188","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("6");
            obj.set_text("Incorporatioin Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static29","8","233","176","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("7");
            obj.set_text("Tatal Number of Shapes");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit22","190","236","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("8");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Combo("Combo00","190","46","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static07","8","173","177","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("10");
            obj.set_text("Business Scale Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static09","8","263","140","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("11");
            obj.set_text("Net Worth");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit09","278","266","117","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("12");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit01","190","76","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("13");
            obj.set_password("true");
            obj.set_value("abcdef");
            obj.set_text("abcdef");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit02","190","106","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("14");
            obj.set_password("true");
            obj.set_value("abcdef");
            obj.set_text("abcdef");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit03","190","136","100","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("15");
            obj.set_value("370101");
            obj.set_text("370101");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit04","293","136","102","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("16");
            obj.set_value("WHOLESALER(IRON AND STEEL)");
            obj.set_text("WHOLESALER(IRON AND STEEL)");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Combo("Combo01","190","176","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","190","206","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("18");
            obj.set_type("spin");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Combo("Combo04","190","266","85","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("19");
            obj.set_text("Combo00");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static00","8","293","140","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("20");
            obj.set_text("Net Sales");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static02","8","323","177","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("21");
            obj.set_text("Operatioin Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit10","190","296","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit12","190","326","36","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("23");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit14","229","326","166","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("24");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static04","8","353","177","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("25");
            obj.set_text("Parent company Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit15","190","356","36","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("26");
            obj.set_value("JP");
            obj.set_text("JP");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit16","229","356","166","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("27");
            obj.set_value("JAPAN");
            obj.set_text("JAPAN");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static11","8","383","177","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("28");
            obj.set_text("Number of Locations");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","190","386","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("29");
            obj.set_value("1");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static12","8","413","177","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("30");
            obj.set_text("Ownership Corporation");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit18","190","416","100","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("31");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit19","293","416","102","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("32");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static13","8","443","140","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("33");
            obj.set_text("Legal Capital");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Edit("Edit20","190","446","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("34");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("Static16","8","473","173","30",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("35");
            obj.set_text("Cash Turnover Per Month");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            obj = new Combo("Combo03","190","476","205","25",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("36");
            obj.set_text("Combo00");
            this.Tab00.Tabpage8.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",428,670,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage1.form.CX","value","dsCond","CX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage1.form.GG","value","dsCond","GG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab00.Tabpage1.form.GK","value","dsCond","GK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Tab00.Tabpage1.form.des_OCC","value","dsCond","des_OCC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage1.form.des_CAP","value","dsCond","des_CAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Tab00.Tabpage1.form.des_1ROK","value","dsCond","des_ASIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Tab00.Tabpage1.form.nomi_RKTMSL","value","dsCond","nomi_RKTMSL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Tab00.Tabpage1.form.nomi_135SP","value","dsCond","nomi_135SP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Tab00.Tabpage1.form.nomi_170","value","dsCond","nomi_170");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Tab00.Tabpage1.form.nomi_245","value","dsCond","nomi_245");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Tab00.Tabpage1.form.nomi_240","value","dsCond","nomi_240");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Tab00.Tabpage1.form.HR","value","dsCond","HR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Tab00.Tabpage1.form.HS","value","dsCond","HS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Tab00.Tabpage1.form.WU","value","dsCond","WU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Tab00.Tabpage1.form.PX","value","dsCond","PX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Tab00.Tabpage1.form.des_95","value","dsCond","des_CBR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage1.form.CheckBox00","value","dsCond","All");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01_datafilter.xfdl", function() {

        this.Button09_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Button05_onclick = function(obj,e)
        {
        	//자장
        	nexacro.setPrivateProfile("DataFilterCond", this.dsCond.saveXML());
        	//로컬저장
        // 	var rtn = "";
        // 	for(var i = 0 ; i < this.dsDataSelected.rowcount ; i++)
        // 	{
        // 		rtn += this.dsDataSelected.getColumn(i, "code") + ", ";
        // 	}
        // 	rtn = rtn.substr(0, rtn.length -2);
        //	this.close(this.dsDataSelected);
        	this.opener.lookupFunc("fn_popCallback").call("DataFilter", this.dsCond, this);
        };

        this.Tab00_Tabpage4_TextArea00_onchanged = function(obj,e)
        {

        };

        this.Tab00_Tabpage1_CheckBox00_onchanged = function(obj,e)
        {
        	var bValue = e.postvalue;

        	for(var i = 0 ; i < this.dsCond.colcount ;i++)
        	{
        		//edit제외
        		//if(i !=7 && i!=8)
        		this.dsCond.setColumn(0, i, bValue);
        	}
        };

        this.w_dpsvusp00000_onload = function(obj,e)
        {
        	this.dsCond.loadXML(nexacro.getPrivateProfile("DataFilterCond"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.w_dpsvusp00000_onload,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Tab00.Tabpage1.form.CheckBox00.addEventHandler("onchanged",this.Tab00_Tabpage1_CheckBox00_onchanged,this);
            this.Tab00.Tabpage2.form.Radio01.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage5.form.Static36.addEventHandler("onclick",this.Tab00_Tabpage5_Static36_onclick,this);
            this.Tab00.Tabpage6.form.Static36.addEventHandler("onclick",this.Tab00_Tabpage5_Static36_onclick,this);
            this.Tab00.Tabpage6.form.Radio02.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage7.form.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };

        this.loadIncludeScript("poc01_datafilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
