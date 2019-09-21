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
            this.set_titletext("Search Customer");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_criteria", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">Short name</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">Customer Number</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">Full name</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">Nick name</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">Phone number</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column1\">Address</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column1\">Register No</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column1\">Passport No</Col></Row><Row><Col id=\"Column0\">09</Col><Col id=\"Column1\">Driver No</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">Reference No (Old Customer Number)</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">Bank Code</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">Last Update</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">Business No</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">Establish no</Col></Row><Row><Col id=\"Column0\">15</Col><Col id=\"Column1\">Tax No</Col></Row><Row><Col id=\"Column0\">16</Col><Col id=\"Column1\">District</Col></Row><Row><Col id=\"Column0\">17</Col><Col id=\"Column1\">Commune</Col></Row><Row><Col id=\"Column0\">18</Col><Col id=\"Column1\">Nationality No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customerType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">All Customer Type</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">Individual Customer</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">Joint Venture Company</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">Private Business Owner</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">Foreign Investment Company</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column1\">Household</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column1\">State Enterprise</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column1\">Cooperative</Col></Row><Row><Col id=\"Column0\">09</Col><Col id=\"Column1\">Financial Institution</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">Stock Company</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">Government &amp; Public Institution</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">Company Limited</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">Organization</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"customerNo\" type=\"STRING\" size=\"256\"/><Column id=\"last\" type=\"STRING\" size=\"256\"/><Column id=\"shortName\" type=\"STRING\" size=\"256\"/><Column id=\"nickName\" type=\"STRING\" size=\"256\"/><Column id=\"catalogKind\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"customerNo\">aaa111</Col><Col id=\"nickName\">YOUNGSTEEL K</Col></Row><Row><Col id=\"customerNo\">bbb222</Col><Col id=\"nickName\">MIZMIZ</Col></Row><Row><Col id=\"customerNo\">ccc333</Col><Col id=\"nickName\">COCOCO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"bankCd\" type=\"STRING\" size=\"32\"/><Column id=\"bisRt\" type=\"STRING\" size=\"32\"/><Column id=\"blackCust\" type=\"STRING\" size=\"32\"/><Column id=\"countryCd\" type=\"STRING\" size=\"32\"/><Column id=\"countryNm\" type=\"STRING\" size=\"32\"/><Column id=\"creditRt\" type=\"STRING\" size=\"32\"/><Column id=\"custDepoType\" type=\"STRING\" size=\"32\"/><Column id=\"custDetlType\" type=\"STRING\" size=\"32\"/><Column id=\"custNo\" type=\"STRING\" size=\"32\"/><Column id=\"custStatus\" type=\"STRING\" size=\"32\"/><Column id=\"custStatusUpt\" type=\"STRING\" size=\"32\"/><Column id=\"dkbType\" type=\"STRING\" size=\"32\"/><Column id=\"engAbbrNm\" type=\"STRING\" size=\"32\"/><Column id=\"engNm\" type=\"STRING\" size=\"32\"/><Column id=\"fincInstType\" type=\"STRING\" size=\"32\"/><Column id=\"korNm\" type=\"STRING\" size=\"32\"/><Column id=\"lastUptUser\" type=\"STRING\" size=\"32\"/><Column id=\"natCd\" type=\"STRING\" size=\"32\"/><Column id=\"natNm\" type=\"STRING\" size=\"32\"/><Column id=\"nickNm\" type=\"STRING\" size=\"32\"/><Column id=\"oversJap\" type=\"STRING\" size=\"32\"/><Column id=\"refNo\" type=\"STRING\" size=\"32\"/><Column id=\"remk\" type=\"STRING\" size=\"32\"/><Column id=\"rsdtFlag\" type=\"STRING\" size=\"32\"/><Column id=\"status\" type=\"STRING\" size=\"32\"/><Column id=\"taxType\" type=\"STRING\" size=\"32\"/><Column id=\"tranBankNm\" type=\"STRING\" size=\"32\"/><Column id=\"vip\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","130",null,null,"10","34",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Customer No\"/><Cell col=\"1\" text=\"Last\"/><Cell col=\"2\" text=\"Short Name\"/><Cell col=\"3\" text=\"Nick Name\"/><Cell col=\"4\" text=\"Catalog Kind\"/></Band><Band id=\"body\"><Cell text=\"bind:custNo\"/><Cell col=\"1\" text=\"bind:engNm\"/><Cell col=\"2\" text=\"bind:engAbbrNm\"/><Cell col=\"3\" text=\"bind:nickNm\"/><Cell col=\"4\" text=\"bind:custDepoType\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_detail","10",null,"66","24",null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Details");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","79",null,"52","24",null,"5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("New");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","134",null,"68","24",null,"5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Update");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","205",null,"54","24",null,"5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Print");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","262",null,"90","24",null,"5",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Relationship");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","355",null,"112","24",null,"5",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Signature/Photo");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","470",null,"114","24",null,"5",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Signature History");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,null,"60","24","10","5",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","10","10",null,"108","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","18","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Branch");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","136","21","62","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("1500");
            obj.set_text("1500");
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

            obj = new Combo("Combo00","203","21","153","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1500</Col><Col id=\"datacolumn\">Ha Noi Branch</Col></Row><Row><Col id=\"codecolumn\">1600</Col><Col id=\"datacolumn\">Da nang Branch</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Ha Noi Branch");
            obj.set_value("1500");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_criteria","136","51","220","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_criteria");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Short name");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","384","18","159","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Transaction Date");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","384","48","159","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Transaction Status");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","384","78","159","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Customer Type");
            obj.set_cssclass("sta_WF_label01");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_customerType","529","81","182","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_customerType");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("All Customer Type");
            obj.set_value("01");
            obj.set_index("0");
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
            obj.set_text("Normal");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","737","53","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Search");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0",null,null,"5","0","0",null,null,null,null,this);
            obj.set_taborder("26");
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
        this.addIncludeScript("poc01.xfdl","lib::lib_Form.xjs");
        this.registerScript("poc01.xfdl", function() {
        /************************
         *  Script Include
         *************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;

        this.btn_detail_onclick = function(obj,e)
        {
        	if(this.dsList.getRowCount()>0){
        		this.openPopupList("detail");
        	}else{
        		alert("search customer first");
        		this.btn_search.setFocus();
        	}
        };

        this.btn_new_onclick = function(obj,e)
        {
        	var sPopupId = "Select";
        	var oArg = {
        		objArguments : ""
        	};
        	var sUrl = "poc::sub00.xfdl";
        	var sPopupCallback = "popupCallback";
        	var sPopupWidth = 440;
        	var sPopupHeight = 270;
        	var oTarget = this;
        	var sPopupTitle = "Customer Select";
        	var sPopupStatus = true;
        	this.gfn_openModalPopup(sPopupId, oArg, sUrl, sPopupCallback, sPopupWidth, sPopupHeight, oTarget, sPopupTitle, "", "");
        };

        this.openPopupList = function (strType)
        {
        	var arrCustromer = new Array();

        	if(strType == "detail"){
        		arrCustromer = nexacro.wrapQuote("0744001034570");
        	}

        	var sPopupId = "Main";
        	var oArg = {
        		objType		 : strType,
        		objArguments : arrCustromer
        	};
        	var sUrl = "poc::sub01.xfdl";
        	var sPopupCallback = "popupCallback";
        	var sPopupWidth = 824;
        	var sPopupHeight = 608;
        	var oTarget = this;
        	var sPopupTitle = "Customer Main";
        	var sPopupStatus = true;
        	this.gfn_openModalPopup(sPopupId, oArg, sUrl, sPopupCallback, sPopupWidth, sPopupHeight, oTarget, sPopupTitle, "", "");
        };

        this.popupCallback = function (sFormId, sArg)
        {
        	if (sFormId == "Select")
        	{
        		if (sArg == "OK")
        		{
        			this.openPopupList("new");
        		}
        	}else if(sFormId == "Main")
        	{

        	}
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.transaction("list", "svc::customer/List.do", "", "dsList=output", "", "callback");
        };

        this.callback = function(id, code, msg)
        {
        	switch (id)
        	{
        		case "list":
        			//trace(this.dsList.saveXML());
        			break;

        		default:
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_detail.addEventHandler("onclick",this.btn_detail_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };

        this.loadIncludeScript("poc01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
