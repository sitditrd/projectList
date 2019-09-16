(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sub01");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("resident_flag", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Yes</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"bankCd\" type=\"STRING\" size=\"32\"/><Column id=\"bisRt\" type=\"STRING\" size=\"32\"/><Column id=\"blackCust\" type=\"STRING\" size=\"32\"/><Column id=\"countryCd\" type=\"STRING\" size=\"32\"/><Column id=\"countryNm\" type=\"STRING\" size=\"32\"/><Column id=\"creditRt\" type=\"STRING\" size=\"32\"/><Column id=\"custDepoType\" type=\"STRING\" size=\"32\"/><Column id=\"custDetlType\" type=\"STRING\" size=\"32\"/><Column id=\"custNo\" type=\"STRING\" size=\"32\"/><Column id=\"custStatus\" type=\"STRING\" size=\"32\"/><Column id=\"custStatusUpt\" type=\"STRING\" size=\"32\"/><Column id=\"dkbType\" type=\"STRING\" size=\"32\"/><Column id=\"engAbbrNm\" type=\"STRING\" size=\"32\"/><Column id=\"engNm\" type=\"STRING\" size=\"32\"/><Column id=\"fincInstType\" type=\"STRING\" size=\"32\"/><Column id=\"korNm\" type=\"STRING\" size=\"32\"/><Column id=\"lastUptUser\" type=\"STRING\" size=\"32\"/><Column id=\"natCd\" type=\"STRING\" size=\"32\"/><Column id=\"natNm\" type=\"STRING\" size=\"32\"/><Column id=\"nickNm\" type=\"STRING\" size=\"32\"/><Column id=\"oversJap\" type=\"STRING\" size=\"32\"/><Column id=\"refNo\" type=\"STRING\" size=\"32\"/><Column id=\"remk\" type=\"STRING\" size=\"32\"/><Column id=\"rsdtFlag\" type=\"STRING\" size=\"32\"/><Column id=\"status\" type=\"STRING\" size=\"32\"/><Column id=\"taxType\" type=\"STRING\" size=\"32\"/><Column id=\"tranBankNm\" type=\"STRING\" size=\"32\"/><Column id=\"vip\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCorp", this);
            obj._setContents("<ColumnInfo><Column id=\"actualCapital\" type=\"STRING\" size=\"32\"/><Column id=\"busiLineTypeCd\" type=\"STRING\" size=\"32\"/><Column id=\"busiLineTypeNm\" type=\"STRING\" size=\"32\"/><Column id=\"busiScaleType\" type=\"STRING\" size=\"32\"/><Column id=\"busiScopType\" type=\"STRING\" size=\"32\"/><Column id=\"cashTurnPerMonth\" type=\"STRING\" size=\"32\"/><Column id=\"custNo\" type=\"STRING\" size=\"32\"/><Column id=\"dbaNm\" type=\"STRING\" size=\"32\"/><Column id=\"fisYearEnd\" type=\"STRING\" size=\"32\"/><Column id=\"hdPerc\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"incorpDt\" type=\"STRING\" size=\"32\"/><Column id=\"legalCapital\" type=\"STRING\" size=\"32\"/><Column id=\"localDbaNm\" type=\"STRING\" size=\"32\"/><Column id=\"majPrdt\" type=\"STRING\" size=\"32\"/><Column id=\"netIncome\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"netSales\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"netWorth\" type=\"STRING\" size=\"32\"/><Column id=\"netWorthVal\" type=\"STRING\" size=\"32\"/><Column id=\"numEmployee\" type=\"INT\" size=\"4\"/><Column id=\"numLoc\" type=\"INT\" size=\"4\"/><Column id=\"operCountryCd\" type=\"STRING\" size=\"32\"/><Column id=\"operCountryNm\" type=\"STRING\" size=\"32\"/><Column id=\"operType\" type=\"STRING\" size=\"32\"/><Column id=\"orgType\" type=\"STRING\" size=\"32\"/><Column id=\"ownershipCorpCd\" type=\"STRING\" size=\"32\"/><Column id=\"ownershipCorpNm\" type=\"STRING\" size=\"32\"/><Column id=\"parentCompCountryCd\" type=\"STRING\" size=\"32\"/><Column id=\"parentCompCountryNm\" type=\"STRING\" size=\"32\"/><Column id=\"parentCompNm\" type=\"STRING\" size=\"32\"/><Column id=\"regtFlag\" type=\"STRING\" size=\"32\"/><Column id=\"rep\" type=\"STRING\" size=\"32\"/><Column id=\"taxAmt\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"totAsset\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"totNumShare\" type=\"INT\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContact", this);
            obj._setContents("<ColumnInfo><Column id=\"cellPhoneNo\" type=\"STRING\" size=\"32\"/><Column id=\"custNo\" type=\"STRING\" size=\"32\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"32\"/><Column id=\"mailAddr\" type=\"STRING\" size=\"32\"/><Column id=\"pagerNo\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContactDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"addrtype\" type=\"STRING\" size=\"32\"/><Column id=\"comuCd\" type=\"STRING\" size=\"32\"/><Column id=\"comuNm\" type=\"STRING\" size=\"32\"/><Column id=\"custNo\" type=\"STRING\" size=\"32\"/><Column id=\"distcCd\" type=\"STRING\" size=\"32\"/><Column id=\"distcNm\" type=\"STRING\" size=\"32\"/><Column id=\"engAddr1\" type=\"STRING\" size=\"32\"/><Column id=\"engAddr2\" type=\"STRING\" size=\"32\"/><Column id=\"engAddr3\" type=\"STRING\" size=\"32\"/><Column id=\"fax1\" type=\"STRING\" size=\"32\"/><Column id=\"fax2\" type=\"STRING\" size=\"32\"/><Column id=\"fax3\" type=\"STRING\" size=\"32\"/><Column id=\"localAddr1\" type=\"STRING\" size=\"32\"/><Column id=\"localAddr2\" type=\"STRING\" size=\"32\"/><Column id=\"localAddr3\" type=\"STRING\" size=\"32\"/><Column id=\"prvcCd\" type=\"STRING\" size=\"32\"/><Column id=\"prvcNm\" type=\"STRING\" size=\"32\"/><Column id=\"remk\" type=\"STRING\" size=\"32\"/><Column id=\"tel1\" type=\"STRING\" size=\"32\"/><Column id=\"tel2\" type=\"STRING\" size=\"32\"/><Column id=\"tel3\" type=\"STRING\" size=\"32\"/><Column id=\"tel4\" type=\"STRING\" size=\"32\"/><Column id=\"wrongAddr\" type=\"STRING\" size=\"32\"/><Column id=\"zip\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContactPerson", this);
            obj._setContents("<ColumnInfo><Column id=\"cellPhoneNo\" type=\"STRING\" size=\"32\"/><Column id=\"custNo\" type=\"STRING\" size=\"32\"/><Column id=\"depYn\" type=\"STRING\" size=\"32\"/><Column id=\"dept\" type=\"STRING\" size=\"32\"/><Column id=\"dervYn\" type=\"STRING\" size=\"32\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"32\"/><Column id=\"fax1\" type=\"STRING\" size=\"32\"/><Column id=\"fax2\" type=\"STRING\" size=\"32\"/><Column id=\"fax3\" type=\"STRING\" size=\"32\"/><Column id=\"fullName\" type=\"STRING\" size=\"32\"/><Column id=\"fxYn\" type=\"STRING\" size=\"32\"/><Column id=\"hsCd\" type=\"STRING\" size=\"32\"/><Column id=\"hsNm\" type=\"STRING\" size=\"32\"/><Column id=\"idNo\" type=\"STRING\" size=\"32\"/><Column id=\"idType\" type=\"STRING\" size=\"32\"/><Column id=\"ieYn\" type=\"STRING\" size=\"32\"/><Column id=\"issuCd\" type=\"STRING\" size=\"32\"/><Column id=\"issuDt\" type=\"STRING\" size=\"32\"/><Column id=\"issuNm\" type=\"STRING\" size=\"32\"/><Column id=\"loanYn\" type=\"STRING\" size=\"32\"/><Column id=\"pagerNo\" type=\"STRING\" size=\"32\"/><Column id=\"remYn\" type=\"STRING\" size=\"32\"/><Column id=\"remk\" type=\"STRING\" size=\"32\"/><Column id=\"seq\" type=\"INT\" size=\"4\"/><Column id=\"tel1\" type=\"STRING\" size=\"32\"/><Column id=\"tel2\" type=\"STRING\" size=\"32\"/><Column id=\"tel3\" type=\"STRING\" size=\"32\"/><Column id=\"tel4\" type=\"STRING\" size=\"32\"/><Column id=\"title\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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

            obj = new Button("Button09",null,null,"60","24","10","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,null,"60","24","74","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_customerNo","117","21","145","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("0744-001034570");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","331",null,"114","24",null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Cust, ID History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","216",null,"112","24",null,"20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("General History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","113",null,"100","24",null,"20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Address History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","10",null,"100","24",null,"20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Name History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","8","70",null,null,"10","50",null,null,null,null,this);
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

            obj = new Combo("cbo_status","194","181","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_cbo_status_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_cbo_status_innerdataset", obj);
            Tab00_Tabpage1_form_cbo_status_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">Normal</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_cbo_status_innerdataset);
            obj.set_text("");
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

            obj = new Edit("edt_customerStatusUpdate","591","211","79","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("2016/06/21");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static19","8","238","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Location Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_countryCd","194","241","36","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
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

            obj = new Edit("edt_bankCode","590","301",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27","8","358","188","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("Transaction Bank Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_transBankName","194","361","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static28","418","358","171","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("Credit Rating(MHCB\'s)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CreditRating","590","361",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static29","8","388","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("BIS Rate");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static30","418","388","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("Reference No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_ReferenceNo","590","391",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("cb_vip","674","187",null,"20","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("VIP");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","18","66","162","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("ABBR Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_abbrCustName","184","69","230","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","437","66","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customerName","563","69",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","12","43","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("English Name");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","12","96","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("Korean Name");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","18","119","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("Customer Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customerNameKR","184","122",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("32");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("cb_balckCustomer","674","210",null,"20","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("Black Customer");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lastUpdateUser","591","181","79","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("3300");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_customerStatus","194","211","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_cbo_customerStatus_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_cbo_customerStatus_innerdataset", obj);
            Tab00_Tabpage1_form_cbo_customerStatus_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">Normal</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_cbo_customerStatus_innerdataset);
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_countryNm","234","241","165","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_nationalityCd","591","241","36","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("KR");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_nationalityNm","630","241",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_financialInstitytionType","194","301","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("39");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_customerDetailType","590","271",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_cbo_customerDetailType_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_cbo_customerDetailType_innerdataset", obj);
            Tab00_Tabpage1_form_cbo_customerDetailType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">PF</Col><Col id=\"datacolumn\">Pricate Firm</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_cbo_customerDetailType_innerdataset);
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customerDepositType","194","271","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("41");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","8","328","177","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_text("Resident Flag (Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("rd_residentFlag","194","331","130","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","418","328","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_text("Overseas Japanese");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("rd_overseasJapanese","589","331","130","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static09","8","418","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_text("Tax Type (Local)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","418","418","140","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("DKB Corp, Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_dkbCorpType","590","421",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_cbo_dkbCorpType_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_cbo_dkbCorpType_innerdataset", obj);
            Tab00_Tabpage1_form_cbo_dkbCorpType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CBC</Col><Col id=\"datacolumn\">CBC</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_cbo_dkbCorpType_innerdataset);
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","513",null,"178","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("49");
            obj._setContents("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("ta_remark","490","470",null,"40","1",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("50");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static11","422","473","59","31",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_text("*Remark");
            obj.set_cssclass("sta_WF_Helptxt");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button11","108","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button12","184","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("Modify");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button13","260","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_text("Remove");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button14","336","486","73","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_text("Reset");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button15","1","486","104","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_text("Issued By Help");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_bisRate","194","391","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_cbo_bisRate_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_cbo_bisRate_innerdataset", obj);
            Tab00_Tabpage1_form_cbo_bisRate_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100%</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50%</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20%</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10%</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_cbo_bisRate_innerdataset);
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_taxType","194","421","205","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("58");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Individual");
            obj.set_enable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Corporation");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static37","1","5",null,"686","1",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static15","8","13","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Organization Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_organizationType","190","16","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage3_form_cbo_organizationType_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage3_form_cbo_organizationType_innerdataset", obj);
            Tab00_Tabpage3_form_cbo_organizationType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">HO</Col><Col id=\"datacolumn\">Head Office</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage3_form_cbo_organizationType_innerdataset);
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

            obj = new Edit("edt_holingPercentage","585","46","90","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
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
            obj.set_text("Incorporation Date");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static28","413","203","183","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("12");
            obj.set_text("Fiscal Year End (Month)");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static29","8","233","176","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("13");
            obj.set_text("Total Number of Shapes");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_totalNumberShapes","190","236","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static30","413","233","168","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("15");
            obj.set_text("Number of Employees");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_numberEmployees","585","236",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_operationType","190","46","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("17");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit07","585","76",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("18");
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

            obj = new Radio("rd_RegisteredFlag","586","176","130","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
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

            obj = new Edit("cbo_netWorthNm","278","266","117","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("23");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static10","413","263","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("24");
            obj.set_text("Total Assets");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_localDBAName","190","76","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("25");
            obj.set_password("true");
            obj.set_text("abcdef");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_representative","190","106","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("26");
            obj.set_password("true");
            obj.set_text("abcdef");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_BusinessLineTypeCd","190","136","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("27");
            obj.set_text("370101");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_BusinessLineTypeNm","293","136","283","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("28");
            obj.set_text("WHOLESALER(IRON AND STEEL)");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_majorProduct","585","106",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("29");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_businessScaleType","190","176","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage3_form_cbo_businessScaleType_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage3_form_cbo_businessScaleType_innerdataset", obj);
            Tab00_Tabpage3_form_cbo_businessScaleType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">중소기업</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage3_form_cbo_businessScaleType_innerdataset);
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Calendar("cal_IncorporationDate","190","206","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("31");
            obj.set_type("spin");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_FiscalYearEnd","585","206",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("32");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_netWorthCd","190","266","85","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("33");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_totalAssets","585","266",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
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
            obj.set_text("Operation Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static03","413","323","168","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("38");
            obj.set_text("Parent Company Name");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_netIncome","585","296",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("39");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_parentCompanyName","585","326",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("40");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_netSales","190","296","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("41");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_operationCountryCd","190","326","36","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("42");
            obj.set_text("KR");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_operationCountryNm","229","326","166","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("43");
            obj.set_text("REPUBLIC OF KOREA");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static04","8","353","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("44");
            obj.set_text("Parent company Country");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_parentCompanycountrycd","190","356","36","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("45");
            obj.set_text("JP");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_parentCompanycountryNm","229","356","166","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("46");
            obj.set_text("JAPAN");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static06","413","353","168","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("47");
            obj.set_text("Tax amount");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_taxAmount","585","356",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("48");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static11","8","383","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("49");
            obj.set_text("Number of Locations");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new MaskEdit("edt_numberOfLocation","190","386","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("50");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static12","8","413","177","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("51");
            obj.set_text("Ownership Corporation");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_ownershipCorporationCd","190","416","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("52");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_ownershipCorporationNm","293","416","283","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("53");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static13","8","443","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("54");
            obj.set_text("Legal Capital");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_ledalCapital","190","446","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("55");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static14","413","443","140","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("56");
            obj.set_text("Actual Capital");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_actualCapital","585","446",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("57");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static16","8","473","173","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("58");
            obj.set_text("Cash Turnover Per Month");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_CashTurnoverPerMobth","190","476","205","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("59");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static24","413","473","178","30",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("60");
            obj.set_text("Business Scope Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_businessScopeType","585","476",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("61");
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

            obj = new Edit("edt_emailAddress","556","21",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static04","9","48","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("4");
            obj.set_text("Cellular Phone No");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_CellularPhoneNo","150","51","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("5");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","490",null,"197","1",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsContactDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Address Type\"/><Cell col=\"1\" text=\"Wrong Address\"/><Cell col=\"2\" text=\"Local Address Line #1\"/><Cell col=\"3\" text=\"Local Address Line #2\"/><Cell col=\"4\" text=\"Local Address Line #3\"/><Cell col=\"5\" text=\"English Address Line #1\"/><Cell col=\"6\" text=\"English Address Line #2\"/><Cell col=\"7\" text=\"English Address Line #3\"/><Cell col=\"8\" colspan=\"2\" text=\"Province\"/><Cell col=\"10\" colspan=\"2\" text=\"District\"/><Cell col=\"12\" colspan=\"2\" text=\"Commune/Ward\"/><Cell col=\"14\" text=\"Zip\"/><Cell col=\"15\" colspan=\"4\" text=\"Tel\"/><Cell col=\"19\" colspan=\"3\" text=\"Fax\"/><Cell col=\"22\" text=\"Remarks\"/></Band><Band id=\"body\"><Cell text=\"bind:addrtype\"/><Cell col=\"1\" text=\"bind:wrongAddr\"/><Cell col=\"2\" text=\"bind:localAddr1\"/><Cell col=\"3\" text=\"bind:localAddr2\"/><Cell col=\"4\" text=\"bind:localAddr3\"/><Cell col=\"5\" text=\"bind:engAddr1\"/><Cell col=\"6\" text=\"bind:engAddr2\"/><Cell col=\"7\" text=\"bind:engAddr3\"/><Cell col=\"8\" text=\"bind:prvcCd\"/><Cell col=\"9\" text=\"bind:prvcNm\"/><Cell col=\"10\" text=\"bind:distcCd\"/><Cell col=\"11\" text=\"bind:distcNm\"/><Cell col=\"12\" text=\"bind:comuCd\"/><Cell col=\"13\" text=\"bind:comuNm\"/><Cell col=\"14\" text=\"bind:zip\"/><Cell col=\"15\" text=\"bind:tel1\"/><Cell col=\"16\" text=\"bind:tel2\"/><Cell col=\"17\" text=\"bind:tel3\"/><Cell col=\"18\" text=\"bind:tel4\"/><Cell col=\"19\" text=\"bind:fax1\"/><Cell col=\"20\" text=\"bind:fax2\"/><Cell col=\"21\" text=\"bind:fax3\"/><Cell col=\"22\" text=\"bind:remk\"/></Band></Format></Formats>");
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

            obj = new Edit("edt_localaddress1","96","175","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("9");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static13","395","172","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("10");
            obj.set_text("Province");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_provinceCd","513","175","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
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

            obj = new Edit("edt_pagerNo","556","51",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Combo("cbo_mailingAddress","150","21","240","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage4_form_cbo_mailingAddress_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage4_form_cbo_mailingAddress_innerdataset", obj);
            Tab00_Tabpage4_form_cbo_mailingAddress_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">Office</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage4_form_cbo_mailingAddress_innerdataset);
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static03","11","113","162","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("16");
            obj.set_text("Address Type");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Combo("cbo_addressType","120","116","238","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage4_form_cbo_addressType_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage4_form_cbo_addressType_innerdataset", obj);
            Tab00_Tabpage4_form_cbo_addressType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">Office</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage4_form_cbo_addressType_innerdataset);
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static31","395","113","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("18");
            obj.set_text("Wrong Address");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_localaddress2","96","205","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
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

            obj = new Edit("edt_localaddress3","96","235","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static25","20","292","77","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("23");
            obj.set_text("Line #1");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_address1","96","295","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("24");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static26","14","267","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("25");
            obj.set_text("English Address");
            obj.set_cssclass("sta_WF_label02");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_address2","96","325","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
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

            obj = new Edit("edt_address3","96","355","262","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("29");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_provinceNm","583","175",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("30");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static39","395","202","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("31");
            obj.set_text("District");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_districtCd","513","205","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("32");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_districtNn","583","205",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("33");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static40","395","232","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("34");
            obj.set_text("Commune/Ward");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_cummWardCd","513","235","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("35");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_cummWardNm","583","235",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("36");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static41","395","262","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("37");
            obj.set_text("Zip");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_zipCd","513","265","133","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("38");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static42","377","151","1","232",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_LineDot");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static43","395","322","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("40");
            obj.set_text("Tel");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_contryTel","511","325","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("41");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_contryArea","581","325","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("42");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_contryNo","651","325","75","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("43");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_contryExt","729","325",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("44");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_countryFax","511","355","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("45");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_countryArea","581","355","67","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("46");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_countryNo","651","355","75","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("47");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static44","395","352","140","30",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("48");
            obj.set_text("Fax");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static45","512","301","64","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("49");
            obj.set_text("Country");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static46","582","301","64","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("50");
            obj.set_text("Area");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static47","656","301","64","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("51");
            obj.set_text("No");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static48","730","301",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("52");
            obj.set_text("Ext.");
            obj.set_cssclass("sta_WF_alignCenter");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Radio("ed_wrongAddress","513","116","130","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("53");
            obj.set_innerdataset("resident_flag");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static11","13","402","59","31",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("54");
            obj.set_text("*Remark");
            obj.set_cssclass("sta_WF_Helptxt");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new TextArea("ta_remark",null,"397","700","40","8",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("55");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button11",null,"463","73","24","229",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("56");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button12",null,"463","73","24","153",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("57");
            obj.set_text("Modify");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button13",null,"463","73","24","77",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("58");
            obj.set_text("Remove");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button14",null,"463","73","24","1",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("59");
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

            obj = new Edit("edt_fullName","127","22","276","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("4");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","402",null,"289","1",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static02","427","49","140","30",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("6");
            obj.set_text("ID Number");
            obj.set_cssclass("sta_WF_label01");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit15","543","52",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("7");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Combo("cbo_title","127","52","276","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("8");
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

            obj = new TextArea("TextArea00","541","202",null,"135","8",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("11");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button11",null,"375","73","24","229",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("12");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button12",null,"375","73","24","153",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("13");
            obj.set_text("Modify");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button13",null,"375","73","24","77",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("14");
            obj.set_text("Remove");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button14",null,"375","73","24","1",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("15");
            obj.set_text("Reset");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","23","294","125","20",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("16");
            obj.set_text("F/X");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Combo("cbo_IdType","543","22",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("17");
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

            obj = new Calendar("Calendar00","543","82",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage5.form);
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

            obj = new Edit("Edit06","543","112",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("42");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("Edit07","543","142",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage5.form);
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

            obj = new Edit("Edit09","614","172",null,"25","8",null,null,null,null,null,this.Tab00.Tabpage5.form);
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

            obj = new Button("Button15",null,"375","114","24","305",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("52");
            obj.set_text("Signature/Photo");
            obj.set_cssclass("btn_WF_basic06");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"10","0","10",null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,840,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_customerNo","value","dsCust","custNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage1.form.edt_abbrCustName","value","dsCust","engAbbrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab00.Tabpage1.form.edt_customerName","value","dsCust","engNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Tab00.Tabpage1.form.edt_customerNameKR","value","dsCust","korNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage1.form.cbo_status","value","dsCust","status");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Tab00.Tabpage1.form.cbo_customerStatus","value","dsCust","custStatus");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Tab00.Tabpage1.form.edt_countryCd","value","dsCust","countryCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Tab00.Tabpage1.form.edt_countryNm","value","dsCust","countryNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage1.form.edt_customerDepositType","value","dsCust","custDepoType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Tab00.Tabpage1.form.cbo_financialInstitytionType","value","dsCust","fincInstType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Tab00.Tabpage1.form.rd_residentFlag","value","dsCust","rsdtFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Tab00.Tabpage1.form.edt_transBankName","value","dsCust","tranBankNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Tab00.Tabpage1.form.cbo_bisRate","value","dsCust","bisRt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Tab00.Tabpage1.form.cbo_taxType","value","dsCust","taxType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Tab00.Tabpage1.form.edt_lastUpdateUser","value","dsCust","lastUptUser");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Tab00.Tabpage1.form.edt_customerStatusUpdate","value","dsCust","custStatusUpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Tab00.Tabpage1.form.cb_vip","value","dsCust","vip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Tab00.Tabpage1.form.cb_balckCustomer","value","dsCust","blackCust");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Tab00.Tabpage1.form.edt_nationalityCd","value","dsCust","natCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Tab00.Tabpage1.form.edt_nationalityNm","value","dsCust","natNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Tab00.Tabpage1.form.cbo_customerDetailType","value","dsCust","custDetlType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Tab00.Tabpage1.form.edt_bankCode","value","dsCust","bankCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Tab00.Tabpage1.form.rd_overseasJapanese","value","dsCust","oversJap");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Tab00.Tabpage1.form.edt_CreditRating","value","dsCust","creditRt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Tab00.Tabpage1.form.edt_ReferenceNo","value","dsCust","refNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Tab00.Tabpage1.form.cbo_dkbCorpType","value","dsCust","dkbType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Tab00.Tabpage1.form.ta_remark","value","dsCust","remk");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Tab00.Tabpage3.form.cbo_organizationType","value","dsCorp","orgType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Tab00.Tabpage3.form.cbo_operationType","value","dsCorp","operType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Tab00.Tabpage3.form.edt_holingPercentage","value","dsCorp","hdPerc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Tab00.Tabpage3.form.edt_localDBAName","value","dsCorp","localDbaNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Tab00.Tabpage3.form.Edit07","value","dsCorp","dbaNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Tab00.Tabpage3.form.edt_netSales","value","dsCorp","netSales");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","Tab00.Tabpage3.form.edt_operationCountryCd","value","dsCorp","operCountryCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Tab00.Tabpage3.form.edt_operationCountryNm","value","dsCorp","operCountryNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Tab00.Tabpage3.form.edt_parentCompanycountrycd","value","dsCorp","parentCompCountryCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Tab00.Tabpage3.form.edt_parentCompanycountryNm","value","dsCorp","parentCompCountryNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Tab00.Tabpage3.form.edt_numberOfLocation","value","dsCorp","numLoc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Tab00.Tabpage3.form.edt_ownershipCorporationCd","value","dsCorp","ownershipCorpCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Tab00.Tabpage3.form.edt_ownershipCorporationNm","value","dsCorp","ownershipCorpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Tab00.Tabpage3.form.edt_ledalCapital","value","dsCorp","legalCapital");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Tab00.Tabpage3.form.cbo_CashTurnoverPerMobth","value","dsCorp","cashTurnPerMonth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","Tab00.Tabpage3.form.edt_majorProduct","value","dsCorp","majPrdt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","Tab00.Tabpage3.form.rd_RegisteredFlag","value","dsCorp","regtFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","Tab00.Tabpage3.form.cbo_FiscalYearEnd","value","dsCorp","fisYearEnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","Tab00.Tabpage3.form.edt_numberEmployees","value","dsCorp","numEmployee");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","Tab00.Tabpage3.form.edt_totalAssets","value","dsCorp","totAsset");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","Tab00.Tabpage3.form.edt_netIncome","value","dsCorp","netIncome");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","Tab00.Tabpage3.form.edt_parentCompanyName","value","dsCorp","parentCompNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","Tab00.Tabpage3.form.edt_taxAmount","value","dsCorp","taxAmt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","Tab00.Tabpage3.form.edt_actualCapital","value","dsCorp","actualCapital");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","Tab00.Tabpage3.form.cbo_businessScopeType","value","dsCorp","busiScopType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","Tab00.Tabpage3.form.edt_BusinessLineTypeCd","value","dsCorp","busiLineTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","Tab00.Tabpage3.form.edt_BusinessLineTypeNm","value","dsCorp","busiLineTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","Tab00.Tabpage3.form.cbo_businessScaleType","value","dsCorp","busiScaleType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","Tab00.Tabpage3.form.cal_IncorporationDate","value","dsCorp","incorpDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","Tab00.Tabpage3.form.edt_totalNumberShapes","value","dsCorp","totNumShare");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","Tab00.Tabpage3.form.cbo_netWorthCd","value","dsCorp","netWorth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","Tab00.Tabpage3.form.cbo_netWorthNm","value","dsCorp","netWorthVal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","Tab00.Tabpage4.form.cbo_mailingAddress","value","dsContact","mailAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","Tab00.Tabpage4.form.edt_emailAddress","value","dsContact","emailAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","Tab00.Tabpage4.form.edt_CellularPhoneNo","value","dsContact","cellPhoneNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","Tab00.Tabpage4.form.edt_pagerNo","value","dsContact","pagerNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","Tab00.Tabpage4.form.cbo_addressType","value","dsContactDetail","addrtype");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","Tab00.Tabpage4.form.ed_wrongAddress","value","dsContactDetail","wrongAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","Tab00.Tabpage4.form.edt_localaddress1","value","dsContactDetail","localAddr1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","Tab00.Tabpage4.form.edt_localaddress2","value","dsContactDetail","localAddr2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","Tab00.Tabpage4.form.edt_localaddress3","value","dsContactDetail","localAddr3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","Tab00.Tabpage4.form.edt_address1","value","dsContactDetail","engAddr1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","Tab00.Tabpage4.form.edt_address2","value","dsContactDetail","engAddr2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","Tab00.Tabpage4.form.edt_address3","value","dsContactDetail","engAddr3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","Tab00.Tabpage4.form.edt_provinceCd","value","dsContactDetail","prvcCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","Tab00.Tabpage4.form.edt_provinceNm","value","dsContactDetail","prvcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","Tab00.Tabpage4.form.edt_districtCd","value","dsContactDetail","distcCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","Tab00.Tabpage4.form.edt_districtNn","value","dsContactDetail","distcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","Tab00.Tabpage4.form.edt_cummWardCd","value","dsContactDetail","comuCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","Tab00.Tabpage4.form.edt_cummWardNm","value","dsContactDetail","comuNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","Tab00.Tabpage4.form.edt_zipCd","value","dsContactDetail","zip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","Tab00.Tabpage4.form.edt_contryTel","value","dsContactDetail","tel1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","Tab00.Tabpage4.form.edt_contryArea","value","dsContactDetail","tel2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","Tab00.Tabpage4.form.edt_contryNo","value","dsContactDetail","tel3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","Tab00.Tabpage4.form.edt_contryExt","value","dsContactDetail","tel4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","Tab00.Tabpage4.form.edt_countryFax","value","dsContactDetail","fax1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","Tab00.Tabpage4.form.edt_countryArea","value","dsContactDetail","fax2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","Tab00.Tabpage4.form.edt_countryNo","value","dsContactDetail","fax3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","Tab00.Tabpage4.form.ta_remark","value","dsContactDetail","remk");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","Tab00.Tabpage3.form.edt_representative","value","dsCorp","rep");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","Tab00.Tabpage5.form.edt_fullName","value","dsContactPerson","fullName");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sub01.xfdl", function() {

        this.sub01_onload = function(obj,e)
        {
        	if (this.getOwnerFrame().objType == "detail")
        	{
        		var strCustomerNo = this.getOwnerFrame().objArguments;
        		var args = "custNo=" + strCustomerNo;
        		this.transaction("detail", "svc::customer/DetailInfo.do", "", "dsCust=output1 dsCorp=output2 dsContact=output3 dsContactDetail=output4 dsContactPerson=output5", args, "callback");
        		//this.edt_customerNo.set_value(strCustomerNo);
        	}else{
        		this.dsCust.addRow();
        		this.dsCorp.addRow();
        		this.dsContact.addRow();
        		this.dsContactDetail.addRow();
        		this.dsContactPerson.addRow();
        	}

        };

        this.callback = function(id, code, msg)
        {
        	switch (id)
        	{
        	case "detail":
        	/*
        		trace(this.dsCust.saveXML());
        		trace(this.dsCorp.saveXML());
        		trace(this.dsContact.saveXML());
        		trace(this.dsContactDetail.saveXML());
        		trace(this.dsContactPerson.saveXML());
        	*/
        		break;

        	default:
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sub01_onload,this);
            this.Tab00.Tabpage1.form.rd_residentFlag.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage1.form.rd_overseasJapanese.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage3.form.rd_RegisteredFlag.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Tab00.Tabpage4.form.ed_wrongAddress.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };

        this.loadIncludeScript("sub01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
