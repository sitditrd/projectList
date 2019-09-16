(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("w_tfexccngn10");
            this.set_titletext("L/C Issue");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_criteria", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Short name</Col></Row><Row><Col id=\"Column0\">Customer Number</Col></Row><Row><Col id=\"Column0\">Full name</Col></Row><Row><Col id=\"Column0\">Nick name</Col></Row><Row><Col id=\"Column0\">Phone number</Col></Row><Row><Col id=\"Column0\">Address</Col></Row><Row><Col id=\"Column0\">Register No</Col></Row><Row><Col id=\"Column0\">Passport No</Col></Row><Row><Col id=\"Column0\">Driver No</Col></Row><Row><Col id=\"Column0\">Reference No (Old Customer Number)</Col></Row><Row><Col id=\"Column0\">Bank Code</Col></Row><Row><Col id=\"Column0\">Last Update</Col></Row><Row><Col id=\"Column0\">Business No</Col></Row><Row><Col id=\"Column0\">Establish no</Col></Row><Row><Col id=\"Column0\">Tax No</Col></Row><Row><Col id=\"Column0\">District</Col></Row><Row><Col id=\"Column0\">Commune</Col></Row><Row><Col id=\"Column0\">Nationality No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customerType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Individual Customer</Col></Row><Row><Col id=\"Column0\">Private Business Owner</Col></Row><Row><Col id=\"Column0\">Household</Col></Row><Row><Col id=\"Column0\">Cooperative</Col></Row><Row><Col id=\"Column0\">Stock Company</Col></Row><Row><Col id=\"Column0\">Company Limited</Col></Row><Row><Col id=\"Column0\">Joint Venture Company</Col></Row><Row><Col id=\"Column0\">Foreign Investment Company</Col></Row><Row><Col id=\"Column0\">State Enterprise</Col></Row><Row><Col id=\"Column0\">Financial Institution</Col></Row><Row><Col id=\"Column0\">Government &amp; Public Institution</Col></Row><Row><Col id=\"Column0\">Organization</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","10","595","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Commission");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,"595","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","8","10",null,"50","8",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","24","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("L/C No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","288","24","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Pay Terms");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","495","23","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("L/C No. for Copy");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","79","23","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","183","23","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","371","23","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","621","23","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button14",null,"595","60","24","73",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Clear");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button15",null,"595","60","24","136",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit45","141","23","40","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("111");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","688","23","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","781","23","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","8","75",null,"510","8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("L/C Issue Main");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","1","5",null,"472","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static28","8","19","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Issue Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","130","19","132","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","8","49","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Applicant");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","8","109","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Beneficiary");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","8","79","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("L/C Amount");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","8","259","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Advising Bank");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","8","229","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("Tenor");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","8","199","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("Latest Ship Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06","8","139","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Available WIth");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","8","289","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Shipment From");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","8","319","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Price Term");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static09","8","349","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("H.S. Code");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","8","379","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("Settlement Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static11","8","409","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Import Use");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12","8","169","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Expiry Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static13","8","439","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("Remarks");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit10","130","49","105","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","238","50","24","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo01","130","79","70","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","203","79","113","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static14","329","79","80","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("More/Less");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit26","464","79","38","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static15","456","79","10","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("/");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit24","414","79","38","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit01","130","109","372","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02","238","140","24","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit02","130","139","105","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit03","265","139","237","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","130","168","132","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","130","198","132","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit07","130","229","40","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("31");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27","172","230","45","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("Days");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","218","228","73","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo02","293","228","209","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit04","130","259","105","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("35");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button03","238","260","24","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit05","265","259","237","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("37");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit06","130","289","315","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("38");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static16","450","289","24","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("To");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit08","482","289","315","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("40");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo03","130","319","132","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit09","130","349","105","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("42");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button04","238","350","24","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit11","265","349","238","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("44");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","272","319","178","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("Insurance Policy Received");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo04","129","378","187","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo05","172","408","144","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit12","129","408","40","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("48");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit13","129","438","373","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("49");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static17","271","19","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_text("Receive Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","370","19","132","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("2018-08-22");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_type("normal");
            obj.set_buttonsize("15 15");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit14","265","49","532","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("52");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static18","512","19","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("EDI Msg No.");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit15","622","19","175","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("54");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static19","512","79","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_text("Credit Line No.");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit16","622","79","148","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("56");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button01","773","79","24","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20","512","109","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static21","512","139","140","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("59");
            obj.set_text("By");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo06","622","108","175","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo07","622","138","175","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static22","271","169","140","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("62");
            obj.set_text("Expiry Place");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit17","370","169","427","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("63");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","517","259","121","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("64");
            obj.set_text("Partial Shipments");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","661","259","112","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("65");
            obj.set_text("Transshipment");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static23","508","319","108","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("66");
            obj.set_text("Reimb/Remit");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo08","622","319","175","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("67");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static24","508","378","108","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("68");
            obj.set_text("Import Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static25","508","408","108","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("69");
            obj.set_text("Settle Method");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26","508","438","108","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("70");
            obj.set_text("Notice To");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo09","622","378","175","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("71");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo10","672","408","125","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("72");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit18","622","408","46","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("73");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit19","622","438","175","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("74");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("L/C Issue Details");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","1","5",null,"472","1",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static28","9","19","200","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Drawee(42a)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","9","49","200","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Confirmation Instructions(49)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","9","79","200","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Reimbursing Bank(53a)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02","9","109","200","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("\"Advice Through\" Bank(57a)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit10","217","19","108","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00","327","20","24","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo01","217","49","134","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit00","217","79","108","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button01","327","80","24","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit01","217","109","108","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button02","327","110","24","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_down");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit02","354","19","442","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("12");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit03","354","79","442","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit04","354","109","442","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button02","103","595","66","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Settie");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"70","76","24","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("EDI Upload");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","0","619",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,670,this,function(p){});
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

        this.loadIncludeScript("poc04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
