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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A</Col></Row><Row><Col id=\"Column0\">B</Col></Row><Row><Col id=\"Column0\">C</Col></Row><Row><Col id=\"Column0\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
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

            obj = new Static("Static02","20","40","710","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("중분류 타이틀 01");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","70",null,"77","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","31","81","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Label01");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","81","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","31","111","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Label02");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","236","111","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Label04");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","236","81","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Label03");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","311","81","257","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","544","82","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","311","111","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","434","111","12","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_label01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","448","111","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","578","81","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Label05");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","578","111","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Label06");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","653","81","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","653","111","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","794","81","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","794","111","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"97","50","50","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20","157","710","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("중분류 타이틀 02");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","187",null,"359","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_cellC");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"grd_WF_cellC\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"grd_WF_cellC\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"grd_WF_cellC\"/><Cell col=\"4\" text=\"bind:Column4\" cssclass=\"grd_WF_cellC\"/><Cell col=\"5\" text=\"bind:Column5\" cssclass=\"grd_WF_cellC\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:Column6\" cssclass=\"grd_WF_cellC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","546",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_box04L");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"161","43","23","164",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"161","43","23","116",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"161","43","23","68",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"161","43","23","20",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","261","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_pagingFirst");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","301","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_pagingPrev");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","351","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","389","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","427","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","465","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","503","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","541","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","579","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","617","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","655","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","693","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_pagingNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","739","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_pagingNext");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","779","551","37","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_pagingLast");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","106","111","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
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

        this.loadIncludeScript("work01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
