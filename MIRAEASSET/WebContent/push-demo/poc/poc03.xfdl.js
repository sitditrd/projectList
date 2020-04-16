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
            this.set_titletext("Nego (L/C)");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_criteria", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Short name</Col></Row><Row><Col id=\"Column0\">Customer Number</Col></Row><Row><Col id=\"Column0\">Full name</Col></Row><Row><Col id=\"Column0\">Nick name</Col></Row><Row><Col id=\"Column0\">Phone number</Col></Row><Row><Col id=\"Column0\">Address</Col></Row><Row><Col id=\"Column0\">Register No</Col></Row><Row><Col id=\"Column0\">Passport No</Col></Row><Row><Col id=\"Column0\">Driver No</Col></Row><Row><Col id=\"Column0\">Reference No (Old Customer Number)</Col></Row><Row><Col id=\"Column0\">Bank Code</Col></Row><Row><Col id=\"Column0\">Last Update</Col></Row><Row><Col id=\"Column0\">Business No</Col></Row><Row><Col id=\"Column0\">Establish no</Col></Row><Row><Col id=\"Column0\">Tax No</Col></Row><Row><Col id=\"Column0\">District</Col></Row><Row><Col id=\"Column0\">Commune</Col></Row><Row><Col id=\"Column0\">Nationality No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customerType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Individual Customer</Col></Row><Row><Col id=\"Column0\">Private Business Owner</Col></Row><Row><Col id=\"Column0\">Household</Col></Row><Row><Col id=\"Column0\">Cooperative</Col></Row><Row><Col id=\"Column0\">Stock Company</Col></Row><Row><Col id=\"Column0\">Company Limited</Col></Row><Row><Col id=\"Column0\">Joint Venture Company</Col></Row><Row><Col id=\"Column0\">Foreign Investment Company</Col></Row><Row><Col id=\"Column0\">State Enterprise</Col></Row><Row><Col id=\"Column0\">Financial Institution</Col></Row><Row><Col id=\"Column0\">Government &amp; Public Institution</Col></Row><Row><Col id=\"Column0\">Organization</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","10","708","66","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Details");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","79","708","52","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("New");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","134","708","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Update");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","205","708","54","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Print");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","262","708","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Relationship");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","355","708","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Signature/Photo");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","470","708","114","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Signature History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,"708","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","10","10",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","19","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Negotiation No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","335","19","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Out Adv Ref.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","640","20","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("PRDTCD");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","135","22","55","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","194","22","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","297","23","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","427","23","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","541","23","83","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","703","23","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","69","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("L/C Information");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","103",null,"260","10",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","373","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Negotiation Information");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","408",null,"290","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","17","114","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("L/C No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","126","115","213","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","353","114","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Form of Credit");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","479","115","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","17","144","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("L/C Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","168","145","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","353","145","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Confirmation Inst.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","479","145","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","17","174","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Curr. L/C Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","152","175","187","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","17","204","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Undrawn Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","152","205","187","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","353","205","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Tenor");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","403","205","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","17","234","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Transfer Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","152","235","187","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","353","235","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Issuing Bank");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","479","235","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","17","264","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Place");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","152","265","187","25",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","353","265","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Beneficiary");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","479","265","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","17","294","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Contract Person");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","152","295","187","25",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","353","295","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("Applicant");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","479","295","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","17","324","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("H/S Code");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","208","325","131","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","353","325","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("Beneficiary Tel.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","479","325","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","599","115","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Operaction Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","599","145","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Issue Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","599","175","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Expiry Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","599","205","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Latest Ship Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","716","205","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","716","175","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","716","145","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","716","115","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","601","325","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Price Term");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18","571","235","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19","571","265","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20","571","295","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","455","205","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Days");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21","497","205","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22","544","205","45","25",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","480","170","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("Transfer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","716","325","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","17","420","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("Received Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","17","450","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("Obligor");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","17","630","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Negotiation Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","17","600","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Documents Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","17","570","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("Reimbursing Bank");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","17","540","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("Applicant");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","17","510","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("Their Ref.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","17","480","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("Their Bank");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23","126","145","40","25",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24","260","145","35","25",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25","152","325","54","25",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","297","145","10","25",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("/");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26","304","145","35","25",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","156","420","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27","156","630","48","25",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28","206","630","82","25",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29","156","600","48","25",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30","206","600","82","25",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31","156","570","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","265","571","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32","156","540","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","265","541","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit33","156","510","392","25",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34","156","480","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","265","481","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit35","156","450","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","265","451","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","265","421","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","292","420","149","25",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("Relational Reference");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit36","435","420","113","25",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit37","291","450","257","25",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit38","291","480","257","25",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit39","291","570","257","25",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit40","291","540","257","25",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","292","600","149","25",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("Negotiation Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","292","630","149","25",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("Ex Declaration No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","292","660","149","25",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("Intra Trans.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit41","423","630","125","25",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","423","600","125","25",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("Combo03");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","423","660","125","25",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("Combo03");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","559","420","127","25",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("Negotiation Kind");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","559","450","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("Credit Line No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","559","480","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("MTL No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","559","510","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("Doc. Received Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","560","540","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("Negotiation Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","560","570","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("Date of B/L");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","560","600","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("Maturity Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","560","630","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("Fix Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","560","660","149","25",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("Pay Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Button("Button14",null,"708","60","24","73",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("Clear");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button15",null,"708","60","24","136",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit42","628","480","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","700","420","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("Combo03");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit43","700","450","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","783","451","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","700","480","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("Claim");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","700","510","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","700","540","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar07","700","570","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08","700","600","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo06","700","630","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("Combo03");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo07","700","660","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("Combo03");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit44","499","23","40","25",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,780,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc03.xfdl", function() {

        this.w_cmccusstch01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("poc03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
