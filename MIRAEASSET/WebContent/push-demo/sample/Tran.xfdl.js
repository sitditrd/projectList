(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tran");
            this.set_titletext("Tran");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"bankCd\" type=\"STRING\" size=\"32\"/><Column id=\"bisRt\" type=\"STRING\" size=\"32\"/><Column id=\"blackCust\" type=\"STRING\" size=\"32\"/><Column id=\"countryCd\" type=\"STRING\" size=\"32\"/><Column id=\"countryNm\" type=\"STRING\" size=\"32\"/><Column id=\"creditRt\" type=\"STRING\" size=\"32\"/><Column id=\"custDepoType\" type=\"STRING\" size=\"32\"/><Column id=\"custDetlType\" type=\"STRING\" size=\"32\"/><Column id=\"custNo\" type=\"STRING\" size=\"32\"/><Column id=\"custStatus\" type=\"STRING\" size=\"32\"/><Column id=\"custStatusUpt\" type=\"STRING\" size=\"32\"/><Column id=\"dkbType\" type=\"STRING\" size=\"32\"/><Column id=\"engAbbrNm\" type=\"STRING\" size=\"32\"/><Column id=\"engNm\" type=\"STRING\" size=\"32\"/><Column id=\"fincInstType\" type=\"STRING\" size=\"32\"/><Column id=\"korNm\" type=\"STRING\" size=\"32\"/><Column id=\"lastUptUser\" type=\"STRING\" size=\"32\"/><Column id=\"natCd\" type=\"STRING\" size=\"32\"/><Column id=\"natNm\" type=\"STRING\" size=\"32\"/><Column id=\"nickNm\" type=\"STRING\" size=\"32\"/><Column id=\"oversJap\" type=\"STRING\" size=\"32\"/><Column id=\"refNo\" type=\"STRING\" size=\"32\"/><Column id=\"remk\" type=\"STRING\" size=\"32\"/><Column id=\"rsdtFlag\" type=\"STRING\" size=\"32\"/><Column id=\"status\" type=\"STRING\" size=\"32\"/><Column id=\"taxType\" type=\"STRING\" size=\"32\"/><Column id=\"tranBankNm\" type=\"STRING\" size=\"32\"/><Column id=\"vip\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj = new Button("Button00","30","25","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객목록조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","80","630","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Customer No\"/><Cell col=\"1\" text=\"Last\"/><Cell col=\"2\" text=\"Short Name\"/><Cell col=\"3\" text=\"Nick Name\"/><Cell col=\"4\" text=\"Catalog Kind\"/></Band><Band id=\"body\"><Cell text=\"bind:custNo\"/><Cell col=\"1\" text=\"bind:engNm\"/><Cell col=\"2\" text=\"bind:engAbbrNm\"/><Cell col=\"3\" text=\"bind:nickNm\"/><Cell col=\"4\" text=\"bind:custDepoType\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","30","180","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("고객정보조회");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","238",null,null,"30","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("General");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10",null,null,"10","10",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCust");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Customer No\"/><Cell col=\"1\" text=\"ABBR Customer Name\"/><Cell col=\"2\" text=\"Customer Name\"/><Cell col=\"3\" text=\"Korean Name\"/><Cell col=\"4\" text=\"Status\"/><Cell col=\"5\" text=\"Last Update User\"/><Cell col=\"6\" text=\"VIP\"/><Cell col=\"7\" text=\"Customer Status\"/><Cell col=\"8\" text=\"Customer Status Update\"/><Cell col=\"9\" text=\"Black Customer\"/><Cell col=\"10\" colspan=\"2\" text=\"Location Country\"/><Cell col=\"12\" colspan=\"2\" text=\"Nationality\"/><Cell col=\"14\" text=\"Customer Deposit Type\"/><Cell col=\"15\" text=\"Customer Detail Type\"/><Cell col=\"16\" text=\"Financial Institution Type\"/><Cell col=\"17\" text=\"Bank Code\"/><Cell col=\"18\" text=\"Resident Flag (Local)\"/><Cell col=\"19\" text=\"Overseas Japanese\"/><Cell col=\"20\" text=\"Transaction Bank Name\"/><Cell col=\"21\" text=\"Credit Rating(MHCB's)\"/><Cell col=\"22\" text=\"BIS Rate\"/><Cell col=\"23\" text=\"Reference No\"/><Cell col=\"24\" text=\"Tax Type (Local)\"/><Cell col=\"25\" text=\"DKB Corp. Type\"/><Cell col=\"26\" text=\"remk\"/></Band><Band id=\"body\"><Cell text=\"bind:custNo\"/><Cell col=\"1\" text=\"bind:engAbbrNm\"/><Cell col=\"2\" text=\"bind:engNm\"/><Cell col=\"3\" text=\"bind:korNm\"/><Cell col=\"4\" text=\"bind:status\"/><Cell col=\"5\" text=\"bind:lastUptUser\"/><Cell col=\"6\" text=\"bind:vip\"/><Cell col=\"7\" text=\"bind:custStatus\"/><Cell col=\"8\" text=\"bind:custStatusUpt\"/><Cell col=\"9\" text=\"bind:blackCust\"/><Cell col=\"10\" text=\"bind:countryCd\"/><Cell col=\"11\" text=\"bind:countryNm\"/><Cell col=\"12\" text=\"bind:natCd\"/><Cell col=\"13\" text=\"bind:natNm\"/><Cell col=\"14\" text=\"bind:custDepoType\"/><Cell col=\"15\" text=\"bind:custDetlType\"/><Cell col=\"16\" text=\"bind:fincInstType\"/><Cell col=\"17\" text=\"bind:bankCd\"/><Cell col=\"18\" text=\"bind:rsdtFlag\"/><Cell col=\"19\" text=\"bind:oversJap\"/><Cell col=\"20\" text=\"bind:tranBankNm\"/><Cell col=\"21\" text=\"bind:creditRt\"/><Cell col=\"22\" text=\"bind:bisRt\"/><Cell col=\"23\" text=\"bind:refNo\"/><Cell col=\"24\" text=\"bind:taxType\"/><Cell col=\"25\" text=\"bind:dkbType\"/><Cell col=\"26\" text=\"bind:remk\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Corporation");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10",null,null,"10","10",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCorp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"170\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Organization Type\"/><Cell col=\"1\" text=\"Operation Type\"/><Cell col=\"2\" text=\"Holding Percentage (%)\"/><Cell col=\"3\" text=\"Local DBA Name\"/><Cell col=\"4\" text=\"DBA Name\"/><Cell col=\"5\" text=\"Representative\"/><Cell col=\"6\" text=\"Major Product\"/><Cell col=\"7\" colspan=\"2\" text=\"Business Line Type (Local)\"/><Cell col=\"9\" text=\"Business Scale Type\"/><Cell col=\"10\" text=\"Registered Flag\"/><Cell col=\"11\" text=\"Incorporation Date\"/><Cell col=\"12\" text=\"Fiscal Year End (Month)\"/><Cell col=\"13\" text=\"Total Number of Shares\"/><Cell col=\"14\" text=\"Number of Employees\"/><Cell col=\"15\" colspan=\"2\" text=\"Net Worth\"/><Cell col=\"17\" text=\"Total Assets\"/><Cell col=\"18\" text=\"Net Sales\"/><Cell col=\"19\" text=\"Net Income\"/><Cell col=\"20\" colspan=\"2\" text=\"Operation Country\"/><Cell col=\"22\" text=\"Parent Company Name\"/><Cell col=\"23\" colspan=\"2\" text=\"Parent Company Country\"/><Cell col=\"25\" text=\"Tax amount\"/><Cell col=\"26\" text=\"Number of Locations\"/><Cell col=\"27\" colspan=\"2\" text=\"Ownership Corporation\"/><Cell col=\"29\" text=\"Legal Capital\"/><Cell col=\"30\" text=\"Actual Capital\"/><Cell col=\"31\" text=\"Cash Turnover Per Month\"/><Cell col=\"32\" text=\"Business Scope Type\"/></Band><Band id=\"body\"><Cell text=\"bind:orgType\"/><Cell col=\"1\" text=\"bind:operType\"/><Cell col=\"2\" text=\"bind:hdPerc\"/><Cell col=\"3\" text=\"bind:localDbaNm\"/><Cell col=\"4\" text=\"bind:dbaNm\"/><Cell col=\"5\" text=\"bind:rep\"/><Cell col=\"6\" text=\"bind:majPrdt\"/><Cell col=\"7\" text=\"bind:busiLineTypeCd\"/><Cell col=\"8\" text=\"bind:busiLineTypeNm\"/><Cell col=\"9\" text=\"bind:busiScaleType\"/><Cell col=\"10\" text=\"bind:regtFlag\"/><Cell col=\"11\" text=\"bind:incorpDt\"/><Cell col=\"12\" text=\"bind:fisYearEnd\"/><Cell col=\"13\" text=\"bind:totNumShare\"/><Cell col=\"14\" text=\"bind:numEmployee\"/><Cell col=\"15\" text=\"bind:netWorth\"/><Cell col=\"16\" text=\"bind:netWorthVal\"/><Cell col=\"17\" text=\"bind:totAsset\"/><Cell col=\"18\" text=\"bind:netSales\"/><Cell col=\"19\" text=\"bind:netIncome\"/><Cell col=\"20\" text=\"bind:operCountryCd\"/><Cell col=\"21\" text=\"bind:operCountryNm\"/><Cell col=\"22\" text=\"bind:parentCompNm\"/><Cell col=\"23\" text=\"bind:parentCompCountryCd\"/><Cell col=\"24\" text=\"bind:parentCompCountryNm\"/><Cell col=\"25\" text=\"bind:taxAmt\"/><Cell col=\"26\" text=\"bind:numLoc\"/><Cell col=\"27\" text=\"bind:ownershipCorpCd\"/><Cell col=\"28\" text=\"bind:ownershipCorpNm\"/><Cell col=\"29\" text=\"bind:legalCapital\"/><Cell col=\"30\" text=\"bind:actualCapital\"/><Cell col=\"31\" text=\"bind:cashTurnPerMonth\"/><Cell col=\"32\" text=\"bind:busiScopType\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Address & Tel");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10",null,"60","10",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsContact");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Mailing Address\"/><Cell col=\"1\" text=\"Email Address\"/><Cell col=\"2\" text=\"Cellular Phone No\"/><Cell col=\"3\" text=\"Pager No\"/></Band><Band id=\"body\"><Cell text=\"bind:mailAddr\"/><Cell col=\"1\" text=\"bind:emailAddr\"/><Cell col=\"2\" text=\"bind:cellPhoneNo\"/><Cell col=\"3\" text=\"bind:pagerNo\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","70",null,null,"10","10",null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsContactDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Address Type\"/><Cell col=\"1\" text=\"Wrong Address\"/><Cell col=\"2\" text=\"Local Address Line #1\"/><Cell col=\"3\" text=\"Local Address Line #2\"/><Cell col=\"4\" text=\"Local Address Line #3\"/><Cell col=\"5\" text=\"English Address Line #1\"/><Cell col=\"6\" text=\"English Address Line #2\"/><Cell col=\"7\" text=\"English Address Line #3\"/><Cell col=\"8\" colspan=\"2\" text=\"Province\"/><Cell col=\"10\" colspan=\"2\" text=\"District\"/><Cell col=\"12\" colspan=\"2\" text=\"Commune/Ward\"/><Cell col=\"14\" text=\"Zip\"/><Cell col=\"15\" colspan=\"4\" text=\"Tel\"/><Cell col=\"19\" colspan=\"3\" text=\"Fax\"/><Cell col=\"22\" text=\"Remarks\"/></Band><Band id=\"body\"><Cell text=\"bind:addrtype\"/><Cell col=\"1\" text=\"bind:wrongAddr\"/><Cell col=\"2\" text=\"bind:localAddr1\"/><Cell col=\"3\" text=\"bind:localAddr2\"/><Cell col=\"4\" text=\"bind:localAddr3\"/><Cell col=\"5\" text=\"bind:engAddr1\"/><Cell col=\"6\" text=\"bind:engAddr2\"/><Cell col=\"7\" text=\"bind:engAddr3\"/><Cell col=\"8\" text=\"bind:prvcCd\"/><Cell col=\"9\" text=\"bind:prvcNm\"/><Cell col=\"10\" text=\"bind:distcCd\"/><Cell col=\"11\" text=\"bind:distcNm\"/><Cell col=\"12\" text=\"bind:comuCd\"/><Cell col=\"13\" text=\"bind:comuNm\"/><Cell col=\"14\" text=\"bind:zip\"/><Cell col=\"15\" text=\"bind:tel1\"/><Cell col=\"16\" text=\"bind:tel2\"/><Cell col=\"17\" text=\"bind:tel3\"/><Cell col=\"18\" text=\"bind:tel4\"/><Cell col=\"19\" text=\"bind:fax1\"/><Cell col=\"20\" text=\"bind:fax2\"/><Cell col=\"21\" text=\"bind:fax3\"/><Cell col=\"22\" text=\"bind:remk\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("Contact Person");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10",null,null,"10","10",null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsContactPerson");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Full Name\"/><Cell col=\"1\" text=\"ID Type\"/><Cell col=\"2\" text=\"Title\"/><Cell col=\"3\" text=\"ID Number\"/><Cell col=\"4\" colspan=\"2\" text=\"Issued By\"/><Cell col=\"6\" text=\"Issue Date\"/><Cell col=\"7\" text=\"Department\"/><Cell col=\"8\" text=\"E-Mail Address\"/><Cell col=\"9\" text=\"Cellular Phone No.\"/><Cell col=\"10\" text=\"Pager No\"/><Cell col=\"11\" colspan=\"2\" text=\"H.S Code\"/><Cell col=\"13\" colspan=\"4\" text=\"Tel\"/><Cell col=\"17\" colspan=\"3\" text=\"Fax\"/><Cell col=\"20\" text=\"F/X\"/><Cell col=\"21\" text=\"Derivative\"/><Cell col=\"22\" text=\"Loan\"/><Cell col=\"23\" text=\"Deposit\"/><Cell col=\"24\" text=\"Imp./Exp.\"/><Cell col=\"25\" text=\"Remmittance\"/><Cell col=\"26\" text=\"Remarks\"/></Band><Band id=\"body\"><Cell text=\"bind:fullName\"/><Cell col=\"1\" text=\"bind:idType\"/><Cell col=\"2\" text=\"bind:title\"/><Cell col=\"3\" text=\"bind:idNo\"/><Cell col=\"4\" text=\"bind:issuCd\"/><Cell col=\"5\" text=\"bind:issuNm\"/><Cell col=\"6\" text=\"bind:issuDt\"/><Cell col=\"7\" text=\"bind:dept\"/><Cell col=\"8\" text=\"bind:emailAddr\"/><Cell col=\"9\" text=\"bind:cellPhoneNo\"/><Cell col=\"10\" text=\"bind:pagerNo\"/><Cell col=\"11\" text=\"bind:hsCd\"/><Cell col=\"12\" text=\"bind:hsNm\"/><Cell col=\"13\" text=\"bind:tel1\"/><Cell col=\"14\" text=\"bind:tel2\"/><Cell col=\"15\" text=\"bind:tel3\"/><Cell col=\"16\" text=\"bind:tel4\"/><Cell col=\"17\" text=\"bind:fax1\"/><Cell col=\"18\" text=\"bind:fax2\"/><Cell col=\"19\" text=\"bind:fax3\"/><Cell col=\"20\" text=\"bind:fxYn\"/><Cell col=\"21\" text=\"bind:dervYn\"/><Cell col=\"22\" text=\"bind:loanYn\"/><Cell col=\"23\" text=\"bind:depYn\"/><Cell col=\"24\" text=\"bind:ieYn\"/><Cell col=\"25\" text=\"bind:remYn\"/><Cell col=\"26\" text=\"bind:remk\"/></Band></Format></Formats>");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Tran.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.transaction("list", "svc::customer/List.do", "", "dsList=output", "", "callback");
        };

        this.callback = function(id, code, msg)
        {
        	trace(id, code, msg);

        	switch (id)
        	{
        	case "list":
        		trace(this.dsList.saveXML());
        		break;

        	case "detail":
        		trace(this.dsCust.saveXML());
        		trace(this.dsCorp.saveXML());
        		trace(this.dsContact.saveXML());
        		trace(this.dsContactDetail.saveXML());
        		trace(this.dsContactPerson.saveXML());
        		break;

        	default:
        	}
        };

        this.Button01_onclick = function(obj,e)
        {
        	var args = "custNo=" + nexacro.wrapQuote("0744001034570");

        	this.transaction("detail", "svc::customer/DetailInfo.do", "", "dsCust=output1 dsCorp=output2 dsContact=output3 dsContactDetail=output4 dsContactPerson=output5", args, "callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("Tran.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
