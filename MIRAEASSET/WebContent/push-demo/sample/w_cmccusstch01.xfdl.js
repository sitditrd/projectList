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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_criteria", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Short name</Col></Row><Row><Col id=\"Column0\">Customer Number</Col></Row><Row><Col id=\"Column0\">Full name</Col></Row><Row><Col id=\"Column0\">Nick name</Col></Row><Row><Col id=\"Column0\">Phone number</Col></Row><Row><Col id=\"Column0\">Address</Col></Row><Row><Col id=\"Column0\">Register No</Col></Row><Row><Col id=\"Column0\">Passport No</Col></Row><Row><Col id=\"Column0\">Driver No</Col></Row><Row><Col id=\"Column0\">Reference No (Old Customer Number)</Col></Row><Row><Col id=\"Column0\">Bank Code</Col></Row><Row><Col id=\"Column0\">Last Update</Col></Row><Row><Col id=\"Column0\">Business No</Col></Row><Row><Col id=\"Column0\">Establish no</Col></Row><Row><Col id=\"Column0\">Tax No</Col></Row><Row><Col id=\"Column0\">District</Col></Row><Row><Col id=\"Column0\">Commune</Col></Row><Row><Col id=\"Column0\">Nationality No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customerType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Individual Customer</Col></Row><Row><Col id=\"Column0\">Private Business Owner</Col></Row><Row><Col id=\"Column0\">Household</Col></Row><Row><Col id=\"Column0\">Cooperative</Col></Row><Row><Col id=\"Column0\">Stock Company</Col></Row><Row><Col id=\"Column0\">Company Limited</Col></Row><Row><Col id=\"Column0\">Joint Venture Company</Col></Row><Row><Col id=\"Column0\">Foreign Investment Company</Col></Row><Row><Col id=\"Column0\">State Enterprise</Col></Row><Row><Col id=\"Column0\">Financial Institution</Col></Row><Row><Col id=\"Column0\">Government &amp; Public Institution</Col></Row><Row><Col id=\"Column0\">Organization</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","130",null,null,"10","34",null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","10",null,"66","24",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Details");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","79",null,"52","24",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("New");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","134",null,"68","24",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Update");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","205",null,"54","24",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Print");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","262",null,"90","24",null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Relationship");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","355",null,"112","24",null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Signature/Photo");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","470",null,"114","24",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Signature History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,null,"60","24","10","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","10","10",null,"108","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","18","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Branch");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","136","21","62","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","17","48","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Search Criteria");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","17","78","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Search For");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","136","81","220","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","206","21","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","136","51","220","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","385","18","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Transaction Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","385","48","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Transaction Status");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","385","78","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Customer Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","529","81","182","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","529","21","124","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_showmonthspin("false");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","661","23","16","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","679","21","124","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_showmonthspin("false");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","529","52","222","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">Normal</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Invalid</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">All</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("Button00","737","53","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Search");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,608,this,function(p){});
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

        this.loadIncludeScript("w_cmccusstch01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
