(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TwoWayDataBinding");
            this.set_titletext("양방향 데이타 바인딩");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">남자</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"data\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">김갑돌</Col><Col id=\"Column1\">M</Col><Col id=\"Column2\">19851128</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">김갑돌 입니다.</Col></Row><Row><Col id=\"Column0\">나갑순</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">1980331</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">나갑순 입니다.</Col></Row><Row><Col id=\"Column0\">홍길동</Col><Col id=\"Column1\">M</Col><Col id=\"Column2\">19770105</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">홍길동 입니다.</Col></Row><Row><Col id=\"Column0\">나문희</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">19911005</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">나익희 입니다.</Col></Row><Row><Col id=\"Column0\">이복례</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">19880420</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">이복 입니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60","0","0",null,"71","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("하나의 데이타셋을 그리드와 컴포넌트에 바인딩이 되어 있어서 값을 변경하게 되면 양쪽이 동시에 반영이 됩니다.\r\n그리드와 상세정보영역에서 내용을 변경해 보세요.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","115","354",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box04");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","96",null,"204","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"267\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"성별\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"결혼여부\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\" editautoselect=\"true\" editdisplay=\"display\" displaytype=\"editcontrol\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column1\" combodataset=\"Dataset01\" combocodecol=\"code\" combodatacol=\"data\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column2\" calendardisplay=\"display\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column4\" editautoselect=\"true\" editdisplay=\"display\" textAlign=\"left\" verticalAlign=\"middle\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","126","359","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","115","387",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_box04");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","401","359","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_columncount("2");
            obj.set_innerdataset("Dataset01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","115","420",null,"186","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_box04");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","126","392","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","401","392","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","126","426",null,"174","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","387","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","270","387","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","420","116","186",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","354","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","270","354","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","314","411","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Radio00","value","Dataset00","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Calendar00","value","Dataset00","Column2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","CheckBox00","value","Dataset00","Column3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","TextArea00","value","Dataset00","Column4");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("TwoWayDataBinding.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
