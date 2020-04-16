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
                this._setFormPosition(824,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("resident_flag", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Yes</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">No</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static35","8","10",null,"46","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","17","18","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Customer No");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,"783","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"783","60","24","74",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","117","21","145","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("0744-001034570");
            obj.set_text("0744-001034570");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","331","783","114","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Cust, ID History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","216","783","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("General History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","113","783","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Address History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","10","783","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Name History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","8","70",null,"690","8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("General");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static06","2","3","150","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_title02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static36","1","36",null,"122","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static37","1","170",null,"288","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static15","8","178","99","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Status");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo06","194","181","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static16","418","178","134","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Last Update User");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static17","8","208","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Customer Status");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static18","418","208","178","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("Customer Status Update");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit11","591","211","85","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_value("2016/06/21");
            obj.set_text("2016/06/21");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static19","8","238","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Location Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit12","194","241","36","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20","418","238","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Nationality");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static21","8","268","177","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("Customer Deposit Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static22","418","268","168","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("Customer Detail Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static23","8","298","195","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Financial Institutioin Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static24","418","298","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Bank Code");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit17","590","301","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27","8","358","188","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("Transaction Bank Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit20","194","361","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static28","418","358","171","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("Credit Rating(MHCB\'s)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit21","590","361","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static29","8","388","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("BIS Rate");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit22","194","391","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static30","418","388","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("Reference No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit23","590","391","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","684","187","118","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("VIP");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","18","66","162","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("ABBR Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit01","184","69","230","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","437","66","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit02","563","69","230","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("29");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","12","43","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("English Name");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","12","96","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("Korean Name");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","18","119","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit03","184","122","609","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("33");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","684","210","118","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("Black Customer");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit04","591","181","85","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_value("3300");
            obj.set_text("3300");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","194","211","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit05","234","241","165","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit06","591","241","36","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit07","630","241","165","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo01","194","301","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo02","590","271","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit08","194","271","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("42");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","8","328","177","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("Resident Flag (Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio00","194","331","130","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","418","328","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("Overseas Japanese");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio01","589","331","130","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static09","8","418","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("Tax Type (Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit09","194","421","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("48");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","418","418","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_text("DKB Corp, Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo03","590","421","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","513",null,"130","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("51");
            obj._setContents("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("TextArea00",null,"470","317","40","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("52");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static11","422","473","59","31",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("*Remark");
            obj.set_cssclass("sta_WF_Helptxt");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button11","108","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button12","184","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_text("Modify");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button13","260","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_text("Remove");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button14","336","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_text("Reset");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button15","1","486","104","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_text("Issued By Help");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Individual");
            obj.set_enable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Corporation");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","1","5",null,"510","1",null,null,null,null,null,this.Tab00.Tabpage3.form);
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

            obj = new Static("Static18","413","43","178","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("Holding Percentage (%)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit11","585","46","90","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_text("2016/06/21");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static19","8","73","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("Local DBA Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static20","413","73","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("7");
            obj.set_text("DBA Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static21","8","103","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_text("Representative");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static22","413","103","168","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("9");
            obj.set_text("Major Product");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static23","8","138","195","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("10");
            obj.set_text("Business Line Type\r\n(Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27","8","203","188","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("11");
            obj.set_text("Incorporatioin Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static28","413","203","183","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("12");
            obj.set_text("Fiscal Year End (Month)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static29","8","233","176","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("13");
            obj.set_text("Tatal Number of Shapes");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit22","190","236","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static30","413","233","168","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("15");
            obj.set_text("Number of Employees");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit23","585","236","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo00","190","46","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit07","585","76","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("18");
            obj.set_value("YOUNG STEEL KOREA CO.,LTD.");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static07","8","173","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("19");
            obj.set_text("Business Scale Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static08","413","173","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("20");
            obj.set_text("Registered Flag");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Radio("Radio01","586","176","130","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("21");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static09","8","263","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("22");
            obj.set_text("Net Worth");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit09","278","266","117","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("23");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static10","413","263","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("24");
            obj.set_text("Total Assets");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit01","190","76","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("25");
            obj.set_password("true");
            obj.set_value("abcdef");
            obj.set_text("abcdef");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit02","190","106","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("26");
            obj.set_password("true");
            obj.set_value("abcdef");
            obj.set_text("abcdef");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit03","190","136","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("27");
            obj.set_value("370101");
            obj.set_text("370101");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit04","293","136","283","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("28");
            obj.set_value("WHOLESALER(IRON AND STEEL)");
            obj.set_text("WHOLESALER(IRON AND STEEL)");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit05","585","106","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("29");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo01","190","176","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("30");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","190","206","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("31");
            obj.set_type("spin");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo02","585","206","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("32");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo04","190","266","85","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("33");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit06","585","266","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("34");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00","8","293","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("35");
            obj.set_text("Net Sales");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static01","413","293","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("36");
            obj.set_text("Net Income");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static02","8","323","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("37");
            obj.set_text("Operatioin Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static03","413","323","168","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("38");
            obj.set_text("Parent Company Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit08","585","296","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("39");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit13","585","326","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("40");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit10","190","296","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("41");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit12","190","326","36","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("42");
            obj.set_value("KR");
            obj.set_text("KR");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit14","229","326","166","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("43");
            obj.set_value("REPUBLIC OF KOREA");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static04","8","353","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("44");
            obj.set_text("Parent company Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit15","190","356","36","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("45");
            obj.set_value("JP");
            obj.set_text("JP");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit16","229","356","166","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("46");
            obj.set_value("JAPAN");
            obj.set_text("JAPAN");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static06","413","353","168","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("47");
            obj.set_text("Tax amount");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit17","585","356","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("48");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static11","8","383","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("49");
            obj.set_text("Number of Locations");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","190","386","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("50");
            obj.set_value("1");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static12","8","413","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("51");
            obj.set_text("Ownership Corporation");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit18","190","416","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("52");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit19","293","416","283","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("53");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static13","8","443","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("54");
            obj.set_text("Legal Capital");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit20","190","446","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("55");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static14","413","443","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("56");
            obj.set_text("Actual Capital");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit21","585","446","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("57");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static16","8","473","173","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("58");
            obj.set_text("Cash Turnover Per Month");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo03","190","476","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("59");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static24","413","473","178","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("60");
            obj.set_text("Business Scope Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("Combo05","585","476","210","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("61");
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

            obj = new Static("Static01","429","18","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_text("Email Address");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit02","556","21","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static04","9","48","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("4");
            obj.set_text("Cellular Phone No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit03","150","51","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("5");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","494",null,"130","1",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static06","1","102",null,"350","1",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static12","20","172","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("8");
            obj.set_text("Line #1");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit10","96","175","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("9");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static13","395","172","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("10");
            obj.set_text("Province");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit13","513","175","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("11");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static14","14","147","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("12");
            obj.set_text("Local Address");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static02","429","48","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("13");
            obj.set_text("Pager No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit15","556","51","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Combo("Combo04","150","21","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("15");
            obj.set_text("Combo00");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static03","11","113","162","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("16");
            obj.set_text("Address Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Combo("Combo05","120","116","238","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static31","395","113","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("18");
            obj.set_text("Wrong Address");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit16","96","205","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static32","20","202","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("20");
            obj.set_text("Line #2");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static33","20","232","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("21");
            obj.set_text("Line #3");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit18","96","235","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static25","20","292","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("23");
            obj.set_text("Line #1");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit14","96","295","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("24");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static26","14","267","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("25");
            obj.set_text("English Address");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit19","96","325","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("26");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static34","20","322","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("27");
            obj.set_text("Line #2");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static38","20","352","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("28");
            obj.set_text("Line #3");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit24","96","355","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("29");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit25","583","175","213","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("30");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static39","395","202","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("31");
            obj.set_text("District");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit26","513","205","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("32");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit27","583","205","213","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("33");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static40","395","232","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("34");
            obj.set_text("Commune/Ward");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit28","513","235","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("35");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit29","583","235","213","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("36");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static41","395","262","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("37");
            obj.set_text("Zip");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit30","513","265","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("38");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit31","583","265","213","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("39");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static42","377","151","1","232",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_LineDot");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static43","395","322","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("41");
            obj.set_text("Tel");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit32","511","325","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("42");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit33","581","325","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("43");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit34","651","325","75","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("44");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit35","729","325","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("45");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit36","511","355","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("46");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit37","581","355","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("47");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("Edit38","651","355","75","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("48");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static44","395","352","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("49");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static45","512","301","64","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("50");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static46","582","301","64","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("51");
            obj.set_text("Area");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static47","656","301","64","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("52");
            obj.set_text("No");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static48","730","301","64","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("53");
            obj.set_text("Ext.");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Radio("Radio02","513","116","130","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("54");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static11","13","402","59","31",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("55");
            obj.set_text("*Remark");
            obj.set_cssclass("sta_WF_Helptxt");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new TextArea("TextArea00",null,"397","700","40","12",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("56");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button11","506","467","73","24",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("57");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button12","582","467","73","24",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("58");
            obj.set_text("Modify");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button13","658","467","73","24",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("59");
            obj.set_text("Remove");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button14","734","467","73","24",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("60");
            obj.set_text("Reset");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("Contact Person");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static36","1","5",null,"355","1",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static00","10","19","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_text("Full Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static01","427","19","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("2");
            obj.set_text("ID Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static04","10","49","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("3");
            obj.set_text("Title");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit03","127","22","276","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("4");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","402",null,"130","1",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static02","427","49","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("6");
            obj.set_text("ID Number");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit15","543","52","254","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("7");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Combo("Combo04","127","52","276","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static26","12","258","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("9");
            obj.set_text("Bus. Part");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static11","425","207","59","31",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("10");
            obj.set_text("*Remark");
            obj.set_cssclass("sta_WF_Helptxt");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new TextArea("TextArea00",null,"202","254","135","11",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("11");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button11","506","375","73","24",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("12");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button12","582","375","73","24",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("13");
            obj.set_text("Modify");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button13","658","375","73","24",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("14");
            obj.set_text("Remove");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button14","734","375","73","24",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("15");
            obj.set_text("Reset");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","23","294","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("16");
            obj.set_text("F/X");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Combo("Combo00","543","22","254","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static03","10","79","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("18");
            obj.set_text("Issued By");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit01","127","82","68","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit02","198","82","205","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static07","10","109","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("21");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit04","127","112","276","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static08","10","143","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("23");
            obj.set_text("Cellular phone\r\nNo.");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit05","127","142","276","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("24");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static43","10","192","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("25");
            obj.set_text("Tel");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit32","127","195","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("26");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit33","195","195","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("27");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit34","263","195","72","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("28");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit35","338","195","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("29");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit36","127","225","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("30");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit37","195","225","65","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("31");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit38","263","225","72","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("32");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static44","10","222","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("33");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static45","128","171","64","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("34");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static46","198","171","64","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("35");
            obj.set_text("Area");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static47","272","171","64","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("36");
            obj.set_text("No");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static48","346","171","64","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("37");
            obj.set_text("Ext.");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static09","427","79","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("38");
            obj.set_text("Issued Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","543","82","254","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("39");
            obj.set_type("spin");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static10","427","109","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("40");
            obj.set_text("E-Mail Address");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static12","427","139","162","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("41");
            obj.set_text("Pager No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit06","543","112","254","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("42");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit07","543","142","254","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("43");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static13","427","169","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("44");
            obj.set_text("H.S Code");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit08","543","172","68","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("45");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit09","614","172","183","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("46");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","162","294","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("47");
            obj.set_text("Derivative");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","301","294","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("48");
            obj.set_text("Loan");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","23","318","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("49");
            obj.set_text("Deposit");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","162","318","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("50");
            obj.set_text("Imp./Exp.");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","301","318","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("51");
            obj.set_text("Remmittance");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button15","389","375","114","24",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("52");
            obj.set_text("Signature/Photo");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,840,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("w_cmccuscust01.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.Tabpage1.form.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage1.form.Radio01.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage3.form.Radio01.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage4.form.Radio02.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };

        this.loadIncludeScript("w_cmccuscust01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
