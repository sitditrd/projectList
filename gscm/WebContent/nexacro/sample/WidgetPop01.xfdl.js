(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WidgetPop01");
            this.set_titletext("WebWidgetPop01");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ragender", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"value\">남자</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"value\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_search",null,"0","30","30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("URL(\"Images::img_search2.png\")");
            obj.set_border("0px none #ffffff");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","39",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","97",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","68",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10","126",null,"59","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","10","184",null,"76","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_box01impR");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","39","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","97","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","68","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","10","126","80","59",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","156","72","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","219","72","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","93","72","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">031</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("02");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","219","101","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","156","101","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","93","101","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("010");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","93","130","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","136","130","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","199","130","87","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("우편번호");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","10","184","80","76",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("A/C Type");
            obj.set_cssclass("sta_WF_box01impR");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","93","158","193","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","93","14","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이투비");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","93","192","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("A0001");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","156","192","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("A0002");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","219","192","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("A0003");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","93","228","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("A0004");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","156","228","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("A0005");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","93","43","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_ragender");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_direction("vertical");
            obj.set_text("남자");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,270,this,function(p){});
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
            this.addEventHandler("onload",this.WidgetPop01_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };

        this.loadIncludeScript("WidgetPop01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
