(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","0","710","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대분류 타이틀");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","40",null,"47","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","31","51","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Label01");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","51","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"41","46","46","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","107",null,"474","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static03","20","20","358","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_box01impR");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","388","20","358","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","388","20","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("생일");
            obj.set_cssclass("sta_WF_box01impR");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","756","20",null,"30","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","756","20","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("만나이");
            obj.set_cssclass("sta_WF_box01R");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","20","55",null,"30","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06","20","55","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("자택주소");
            obj.set_cssclass("sta_WF_box01R");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","20","90","358","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static09","20","90","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("직장명");
            obj.set_cssclass("sta_WF_box01R");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","388","90","358","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static11","388","90","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_box01R");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12","756","90",null,"30","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static13","756","90","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_box01R");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static14","20","125",null,"30","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static15","20","125","130","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("직장주소");
            obj.set_cssclass("sta_WF_box01R");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","193",null,"228","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00",null,"165","50","23","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button01",null,"165","50","23","75",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic03");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static16","706","20","40","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_box02L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"107","80","23","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("체크체크");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","236","51","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Label02");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","311","51","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","434","51","12","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_label01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","448","51","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","578","51","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Label05");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","653","51","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","640",null,"271","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_tabBox");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","20",null,"228","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","20","611","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("버튼탭01");
            obj.set_cssclass("btn_WF_tabMenu01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","110","611","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_tabClose");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","140","611","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("버튼탭02");
            obj.set_cssclass("btn_WF_tabMenu01");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","230","611","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_tabClose");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1120,1040,this,function(p){});
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

        this.loadIncludeScript("work03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
