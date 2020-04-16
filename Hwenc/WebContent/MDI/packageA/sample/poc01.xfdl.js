(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("poc01");
            this.set_titletext("공종관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","10","6",null,"49","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","58",null,"7","11",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
            obj.set_text("조회");
            obj.set_textPadding("0px 0px 0px 5px");
            obj.set_font("14px/18px \"맑은 고딕\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","12","8","65","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("사업본부");
            obj.set_fittocontents("width");
            obj.set_font("14px/18px \"맑은 고딕\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","Static03:11","8","188","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_scrollbarsize("5");
            obj.set_type("dropdown");
            obj.set_font("14px/18px \"맑은 고딕\"");
            var Div01_form_Combo01_innerdataset = new nexacro.NormalDataset("Div01_form_Combo01_innerdataset", obj);
            Div01_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">건축</Col><Col id=\"codecolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo01_innerdataset);
            obj.set_text("건축");
            obj.set_value("0");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","101",null,null,"36.63%","11",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_scrollbartype("default default");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"89\"/><Column size=\"155\"/><Column size=\"20\"/><Column size=\"65\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"&lt;fc v='red'&gt;* &lt;/fc&gt;공종명\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" border=\"0px none,0px none,1px solid #d3d3d3\" textAlign=\"right\"/><Cell col=\"4\" text=\"사용여부\" textAlign=\"left\"/><Cell col=\"5\" text=\"순서\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" background=\"#F2F2F2\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" colspan=\"2\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","65.35%","101",null,null,"10","11",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_scrollbartype("default default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"181\"/><Column size=\"20\"/><Column size=\"69\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"직종\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" border=\"0px none,0px none,1px solid #d3d3d3\" textAlign=\"right\"/><Cell col=\"3\" text=\"사용여부\" textAlign=\"left\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","0","0","86","6",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("6");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","0","10","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("10");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","1000","0","10","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("10");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","1000","607","10","56",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("10");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","0","607","10","56",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("10");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","1000","763","10","56",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("10");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01_00","0","763","10","56",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("10");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_01_00","0","812","86","6",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("6");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_01_00_00","922","812","86","6",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("6");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00_00_00",null,"69","39","25","36.44%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"69","69","25","Button04_00_00_00:155",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("공종추가");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_01","0","95","86","6",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ff1414");
            obj.set_opacity("0.5");
            obj.set_text("6");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00",null,"69","88","25","Button04_00_00_00:58",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("하위공종추가");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00_00",null,"69","39","25","Button04_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_01",null,"68","68","25","105",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("직종추가");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00_00_01",null,"68","38","25","59",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00_00_00_00",null,"68","38","25","13",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Associated");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,818,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_SubAction, btn_WF_SearchIcon");
                p.Button00.set_text("조회");
                p.Button00.set_textPadding("0px 0px 0px 5px");
                p.Button00.set_font("14px/18px \"맑은 고딕\"");
                p.Button00.move(null,"8","58",null,"7","11");

                p.Static03.set_taborder("1");
                p.Static03.set_text("사업본부");
                p.Static03.set_fittocontents("width");
                p.Static03.set_font("14px/18px \"맑은 고딕\"");
                p.Static03.move("12","8","65","28",null,null);

                p.Combo01.set_taborder("2");
                p.Combo01.set_innerdataset(Div01_form_Combo01_innerdataset);
                p.Combo01.set_datacolumn("datacolumn");
                p.Combo01.set_codecolumn("codecolumn");
                p.Combo01.set_scrollbarsize("5");
                p.Combo01.set_type("dropdown");
                p.Combo01.set_font("14px/18px \"맑은 고딕\"");
                p.Combo01.set_text("건축");
                p.Combo01.set_value("0");
                p.Combo01.set_index("0");
                p.Combo01.move("Static03:11","8","188","28",null,null);
                // this.Div01 }}
                p = rootobj;
                p.set_titletext("공종관리");

                p.Div01.set_taborder("0");
                p.Div01.set_cssclass("div_WF_Search");
                p.Div01.set_formscrollbartype("none");
                p.Div01.set_formscrolltype("none");
                p.Div01.move("10","6",null,"49","10",null);

                p.Grid00.set_taborder("1");
                p.Grid00.set_scrollbartype("default default");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("10","101",null,null,"36.63%","11");

                p.Grid01.set_taborder("2");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_scrollbartype("default default");
                p.Grid01.move("65.35%","101",null,null,"10","11");

                p.Static65.set_taborder("3");
                p.Static65.set_background("#ff1414");
                p.Static65.set_opacity("0.5");
                p.Static65.set_text("6");
                p.Static65.set_font("normal 11px/normal \"Arial\"");
                p.Static65.set_color("#ffffff");
                p.Static65.set_visible("false");
                p.Static65.move("0","0","86","6",null,null);

                p.Static65_00.set_taborder("4");
                p.Static65_00.set_background("#ff1414");
                p.Static65_00.set_opacity("0.5");
                p.Static65_00.set_text("10");
                p.Static65_00.set_font("normal 11px/normal \"Arial\"");
                p.Static65_00.set_color("#ffffff");
                p.Static65_00.set_visible("false");
                p.Static65_00.move("0","0","10","56",null,null);

                p.Static65_00_00.set_taborder("5");
                p.Static65_00_00.set_background("#ff1414");
                p.Static65_00_00.set_opacity("0.5");
                p.Static65_00_00.set_text("10");
                p.Static65_00_00.set_font("normal 11px/normal \"Arial\"");
                p.Static65_00_00.set_color("#ffffff");
                p.Static65_00_00.set_visible("false");
                p.Static65_00_00.move("1000","0","10","56",null,null);

                p.Static65_00_00_00.set_taborder("6");
                p.Static65_00_00_00.set_background("#ff1414");
                p.Static65_00_00_00.set_opacity("0.5");
                p.Static65_00_00_00.set_text("10");
                p.Static65_00_00_00.set_font("normal 11px/normal \"Arial\"");
                p.Static65_00_00_00.set_color("#ffffff");
                p.Static65_00_00_00.set_visible("false");
                p.Static65_00_00_00.move("1000","607","10","56",null,null);

                p.Static65_00_01.set_taborder("7");
                p.Static65_00_01.set_background("#ff1414");
                p.Static65_00_01.set_opacity("0.5");
                p.Static65_00_01.set_text("10");
                p.Static65_00_01.set_font("normal 11px/normal \"Arial\"");
                p.Static65_00_01.set_color("#ffffff");
                p.Static65_00_01.set_visible("false");
                p.Static65_00_01.move("0","607","10","56",null,null);

                p.Static65_00_00_00_00.set_taborder("8");
                p.Static65_00_00_00_00.set_background("#ff1414");
                p.Static65_00_00_00_00.set_opacity("0.5");
                p.Static65_00_00_00_00.set_text("10");
                p.Static65_00_00_00_00.set_font("normal 11px/normal \"Arial\"");
                p.Static65_00_00_00_00.set_color("#ffffff");
                p.Static65_00_00_00_00.set_visible("false");
                p.Static65_00_00_00_00.move("1000","763","10","56",null,null);

                p.Static65_00_01_00.set_taborder("9");
                p.Static65_00_01_00.set_background("#ff1414");
                p.Static65_00_01_00.set_opacity("0.5");
                p.Static65_00_01_00.set_text("10");
                p.Static65_00_01_00.set_font("normal 11px/normal \"Arial\"");
                p.Static65_00_01_00.set_color("#ffffff");
                p.Static65_00_01_00.set_visible("false");
                p.Static65_00_01_00.move("0","763","10","56",null,null);

                p.Static65_01_00.set_taborder("10");
                p.Static65_01_00.set_background("#ff1414");
                p.Static65_01_00.set_opacity("0.5");
                p.Static65_01_00.set_text("6");
                p.Static65_01_00.set_font("normal 11px/normal \"Arial\"");
                p.Static65_01_00.set_color("#ffffff");
                p.Static65_01_00.set_visible("false");
                p.Static65_01_00.move("0","812","86","6",null,null);

                p.Static65_01_00_00.set_taborder("11");
                p.Static65_01_00_00.set_background("#ff1414");
                p.Static65_01_00_00.set_opacity("0.5");
                p.Static65_01_00_00.set_text("6");
                p.Static65_01_00_00.set_font("normal 11px/normal \"Arial\"");
                p.Static65_01_00_00.set_color("#ffffff");
                p.Static65_01_00_00.set_visible("false");
                p.Static65_01_00_00.move("922","812","86","6",null,null);

                p.Button04_00_00_00.set_taborder("16");
                p.Button04_00_00_00.set_text("저장");
                p.Button04_00_00_00.set_cssclass("btn_WF_Associated");
                p.Button04_00_00_00.move(null,"69","39","25","36.44%",null);

                p.Button04.set_taborder("12");
                p.Button04.set_text("공종추가");
                p.Button04.set_cssclass("btn_WF_Associated");
                p.Button04.move(null,"69","69","25","Button04_00_00_00:155",null);

                p.Static65_01.set_taborder("13");
                p.Static65_01.set_background("#ff1414");
                p.Static65_01.set_opacity("0.5");
                p.Static65_01.set_text("6");
                p.Static65_01.set_font("normal 11px/normal \"Arial\"");
                p.Static65_01.set_color("#ffffff");
                p.Static65_01.set_visible("false");
                p.Static65_01.move("0","95","86","6",null,null);

                p.Button04_00.set_taborder("14");
                p.Button04_00.set_text("하위공종추가");
                p.Button04_00.set_cssclass("btn_WF_Associated");
                p.Button04_00.move(null,"69","88","25","Button04_00_00_00:58",null);

                p.Button04_00_00.set_taborder("15");
                p.Button04_00_00.set_text("삭제");
                p.Button04_00_00.set_cssclass("btn_WF_Associated");
                p.Button04_00_00.move(null,"69","39","25","Button04_00_00_00:10",null);

                p.Button04_01.set_taborder("17");
                p.Button04_01.set_text("직종추가");
                p.Button04_01.set_cssclass("btn_WF_Associated");
                p.Button04_01.move(null,"68","68","25","105",null);

                p.Button04_00_00_01.set_taborder("18");
                p.Button04_00_00_01.set_text("삭제");
                p.Button04_00_00_01.set_cssclass("btn_WF_Associated");
                p.Button04_00_00_01.move(null,"68","38","25","59",null);

                p.Button04_00_00_00_00.set_taborder("19");
                p.Button04_00_00_00_00.set_text("저장");
                p.Button04_00_00_00_00.set_cssclass("btn_WF_Associated");
                p.Button04_00_00_00_00.move(null,"68","38","25","13",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("min","",410,818,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Button00.move(null,"31","58",null,"7","8");

                p.Combo01.move("18","31",null,"28","82",null);

                p.Static03.move("12","4","65","28",null,null);
                // this.Div01 }}
                p = rootobj;
                p.Grid01.move("10","670",null,"400","9",null);

                p.Button04_01.move(null,"635","68","25","102",null);

                p.Button04_00_00_01.move(null,"635","38","25","56",null);

                p.Button04_00_00_00_00.move(null,"635","38","25","10",null);

                p.Button04_00_00_00.move(null,"89","39","25","2.20%",null);

                p.Button04.move(null,"89","69","25","Button04_00_00_00:156",null);

                p.Button04_00.move(null,"89","88","25","Button04_00_00_00:59",null);

                p.Button04_00_00.move(null,"89","39","25","59",null);

                p.Grid00.move("10","121",null,"486","9",null);

                p.Static65_01.move("0","115","86","6",null,null);

                p.Div01.move("10","6",null,"69","10",null);

                p.Static65_00_00.move("400","0","10","56",null,null);

                p.Static65_00_00_00_00.move("400","763","10","56",null,null);

                p.Static65_01_00_00.move("324","812","86","6",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01.xfdl", function() {

        this.Div01_Button00_onclick = function(obj,e)
        {
        	alert("조회버튼 클릭하였습니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WF_MainForm_onload,this);
            this.Div01.form.Button00.addEventHandler("onclick",this.Div01_Button00_onclick,this);
            this.Div01.form.Combo01.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };

        this.loadIncludeScript("poc01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
