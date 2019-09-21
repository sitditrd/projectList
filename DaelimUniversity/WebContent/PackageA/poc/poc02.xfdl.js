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
            this.set_titletext("Account Open");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static06","240","67","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Deposit Items");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","10","10","220","690",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","15","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Account Number");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","45","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("123-456-789-12345");
            obj.set_text("123-456-789-12345");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","155","46","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","180","46","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Sign");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","75","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ABBR");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","20","105","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","155","106","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","180","106","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Sign");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","20","135","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","165","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Value Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","20","195","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","225","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Account Currency");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","285","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Account Balance");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","20","315","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","20","255","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","240","10",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","250","18","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Deposit Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","371","21","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","552","23","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Structured Deposit");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","240","102",null,"183","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","251","107","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Funds Currency");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","426","107","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Excahnge Rate");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","591","137","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","251","162","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Funds Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","251","192","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","416","192","280","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","251","247","220","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","476","247","220","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","459","217","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Acct.  Ccy Amt.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","251","217","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Counterpart Ccy Amt.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","251","137","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","426","137","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","240","295",null,"405","10",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","251","307","99","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Multi Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","330","310","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_value("2018/07/23");
            obj.set_text("2018/07/23");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","443","307","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Term Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","527","310","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","642","307","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Term(Days)");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","251","342","99","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo06","378","345","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","543","342","134","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("PERIOD TYPE");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo07","667","345","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","251","372","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Certification No.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","378","375","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","543","372","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("DM Send Flag");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","667","375","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","251","402","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Interest Rate");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","378","405","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","543","402","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("USD Equiv");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","667","405","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","251","432","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Interest");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","378","435","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","543","432","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Principal & Int.");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","667","435","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","251","462","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Tax Customer\r\nType");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","378","465","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","543","462","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Withholding Tax");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","667","465","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","251","495","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Withholding Tax");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","543","497","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Net");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","251","592","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Cupon Rate");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20","378","595","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","543","592","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Division");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21","667","595","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","251","622","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Internal Rate");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22","378","625","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","543","622","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("Spread");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23","667","625","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","251","652","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("Remark");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24","378","655","425","25",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,"708","60","24","10",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"708","60","24","74",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("Clear");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"708","60","24","138",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic05");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18","733","310","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19","667","500","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25","378","525","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26","378","555","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","255","525","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("(1)  0.00%");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","255","555","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("(2)  0.00%");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","543","527","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("Payable Amount");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27","667","530","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","0","732",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,760,this,function(p){});
            obj.set_mobileorientation("portrait");
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
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static37.addEventHandler("onclick",this.Static37_onclick,this);
        };

        this.loadIncludeScript("poc02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
