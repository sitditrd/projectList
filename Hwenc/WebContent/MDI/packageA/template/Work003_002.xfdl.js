(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nbis_WF_MainForm");
            this.set_titletext("기능직등록");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00",null,"0","500","21","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"0","64","21","303",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("세율변경");
            obj.set_cssclass("btn_WF_SubAction");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","42","21","90",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","42","21","135",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03",null,"0","42","21","180",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04",null,"0","42","21","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button06",null,"0","75","21","225",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사진업로드");
            obj.set_cssclass("btn_WF_SubAction");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","42","21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("출력");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","600","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("template::nbis_WF_LocationForm.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","27",null,"320","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"340\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주민번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"직종\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"고용유무\"/><Cell col=\"5\" text=\"사회보험구분\"/><Cell col=\"6\" text=\"직영구분\"/><Cell col=\"7\" text=\"고용보험 징수구분\"/><Cell col=\"8\" text=\"주소\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"총 174명\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"사용 : 19명  일용 : 153명  외국인 : 2명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,"1240","169",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","0",null,"29","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_InputBgT");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static49","0","28",null,"29","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","0","140",null,"29","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBgB");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","56",null,"29","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","84",null,"29","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","112",null,"29","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_InputBgM");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static47","0","1","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static53","248","1","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static58","496","1","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("성  명");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static59","744","1","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("고용유무");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static62","992","1","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("자격사항1");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","0","29","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("지급예정금액(일..");
            obj.set_cssclass("sta_WF_InputLabelL");
            obj.set_tooltiptext("지급예정금액(일당)");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","248","29","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("시  급");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","496","29","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","744","29","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("원천징수세율");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","992","29","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("자격사항2");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","0","57","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("주  소");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","496","57","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","744","57","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("직영구분");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","992","57","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("지급일구분");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","0","85","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("자택전화번호");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","248","85","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","496","85","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("직  종");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","992","113","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("고용보험 징수..");
            obj.set_cssclass("sta_WF_InputLabel");
            obj.set_tooltiptext("고용보험 징수구분");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","744","85","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("전  공");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","0","113","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("계약만료일");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","248","113","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("급여송금은행");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","496","113","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","744","113","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("사회보험구분관리");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static23","992","85","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("최종학력");
            obj.set_cssclass("sta_WF_InputLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static24","0","141","99","27",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("부양가족수");
            obj.set_cssclass("sta_WF_InputLabelL");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit06","102","4","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","350","4","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","598","4","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","846","4","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit14","1094","4","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","1217","5","19","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","1094","32","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("edl_WF_MCpadding");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","1217","33","19","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","102","32","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","350","32","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("com_WF_Essential");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","598","32","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_usetrailingday("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("com_WF_Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","846","32","143","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_readonly("true");
            obj.set_text("가나다라");
            this.Div01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1240,818,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","template::nbis_WF_LocationForm.xfdl");
        };
        
        // User Script
        this.registerScript("Work003_002.xfdl", function() {

        this.Div01_Static02_onclick = function(obj,e)
        {

        };

        this.Div01_Static03_onclick = function(obj,e)
        {

        };

        this.Div01_Static17_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.nbis_WF_MainForm_onload,this);
            this.Div01.form.Static11.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div01.form.Static49.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div01.form.Static27.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div01.form.Static00.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div01.form.Static01.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div01.form.Static02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Div01.form.Static17.addEventHandler("onclick",this.Div01_Static17_onclick,this);
            this.Div01.form.Edit14.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Div01.form.Edit03.addEventHandler("onchanged",this.Edit04_onchanged,this);
        };

        this.loadIncludeScript("Work003_002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
