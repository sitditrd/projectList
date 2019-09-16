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
                this._setFormPosition(1120,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">남</Col></Row><Row><Col id=\"Column0\">여</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","20","40",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","69",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","127",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","98",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20","156",null,"59","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","20","214",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","0","710","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대분류 타이틀");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","40","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_box01impR");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","69","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","127","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","98","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","156","150","59",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","550","40","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","550","69","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Type");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","550","127","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("E-mail");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","550","98","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Date");
            obj.set_cssclass("sta_WF_box01R");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","264",null,"347","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10",null,"284","10",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Edit("Edit00","259","102","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","344","102","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","174","102","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","344","131","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","259","131","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","174","131","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","174","160","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","259","160","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","344","160","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("우편번호");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","20","214","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("A/C Type");
            obj.set_cssclass("sta_WF_box01impR");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","174","188","250","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","429","188","520","23",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","174","44","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Label01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","704","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","839","44","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("중복확인");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","704","73","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","704","102","110","23",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","831","102","110","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","818","102","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","704","131","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","852","131","150","23",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","836","131","14","23",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","174","218","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("A0001");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","242","218","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("A0002");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","310","218","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("A0003");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","378","218","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("A0004");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","456","218","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("A0005");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","174","73","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1120,620,this,function(p){});
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

        this.loadIncludeScript("work02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
