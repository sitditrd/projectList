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
            this.set_titletext("여비등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,1230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"예산비목\" type=\"STRING\" size=\"256\"/><Column id=\"지급처\" type=\"STRING\" size=\"256\"/><Column id=\"증빙금액\" type=\"STRING\" size=\"256\"/><Column id=\"지급은행\" type=\"STRING\" size=\"256\"/><Column id=\"계좌번호\" type=\"STRING\" size=\"256\"/><Column id=\"예금주\" type=\"STRING\" size=\"256\"/><Column id=\"여비기준\" type=\"STRING\" size=\"256\"/><Column id=\"일정변경유무\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">국내</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">국외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">시내</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">시외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo03", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">교비기준</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">별도기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"예산비목\" type=\"STRING\" size=\"256\"/><Column id=\"지급처\" type=\"STRING\" size=\"256\"/><Column id=\"증빙금액\" type=\"STRING\" size=\"256\"/><Column id=\"지급은행\" type=\"STRING\" size=\"256\"/><Column id=\"계좌번호\" type=\"STRING\" size=\"256\"/><Column id=\"예금주\" type=\"STRING\" size=\"256\"/><Column id=\"여비기준\" type=\"STRING\" size=\"256\"/><Column id=\"일정변경여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"예산비목\">국내여비</Col><Col id=\"지급처\">김성민</Col><Col id=\"증빙금액\">26,000</Col><Col id=\"지급은행\">신한(구조흥)</Col><Col id=\"계좌번호\">918-04-694945</Col><Col id=\"예금주\">김성민</Col><Col id=\"여비기준\">별도기준</Col></Row><Row><Col id=\"예산비목\">국내여비</Col><Col id=\"지급처\">이윤주</Col><Col id=\"증빙금액\">26,000</Col><Col id=\"지급은행\">신한은행</Col><Col id=\"계좌번호\">110357403844</Col><Col id=\"예금주\">이윤주</Col><Col id=\"여비기준\">별도기준</Col></Row><Row><Col id=\"예산비목\">국내여비</Col><Col id=\"지급처\">김정호</Col><Col id=\"증빙금액\">26,000</Col><Col id=\"지급은행\">신한은행</Col><Col id=\"계좌번호\">110380234360</Col><Col id=\"예금주\">김정호</Col><Col id=\"여비기준\">별도기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","5",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("출장정보입력");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","44",null,"360","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","10","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("출장구분");
            obj.set_cssclass("sta_WF_table_required");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","Static04:-1","10","37.13%","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","145","15","184","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_rdo01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("horizontal");
            obj.set_columncount("2");
            obj.set_text("Female");
            obj.set_value("2");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","10","50","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출장장소");
            obj.set_cssclass("sta_WF_table_required");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:-1","50","37.13%","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio01","145","55","184","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_rdo02");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("horizontal");
            obj.set_columncount("2");
            obj.set_text("Female");
            obj.set_value("2");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static09:-1","10","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("출장기간");
            obj.set_cssclass("sta_WF_table_required");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","Static02:-1","10",null,"41","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static02:5","14","126","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("Dataset01");
            obj.set_displaynulltext("2018-03-20");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","Combo00:5","14","9","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","Combo00:20","14","126","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("Dataset01");
            obj.set_displaynulltext("2018-03-20");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","Static01:-1","50","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("출장지");
            obj.set_cssclass("sta_WF_table_required");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","Static05:-1","50",null,"41","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static05:5","56","19.36%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_value("수원 성균관대학교");
            obj.set_text("수원 성균관대학교");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","10","90","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("출장목적");
            obj.set_cssclass("sta_WF_table_required");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","Static08:-1","90",null,"41","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static08:5","95",null,"31","16",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_value("기획연구 전반적인 추진체계 및 연구 범위 최종 점검, 보건의료 & 의료기기 분야 메카트렌드 도출 효율화 방안 모색");
            obj.set_text("기획연구 전반적인 추진체계 및 연구 범위 최종 점검, 보건의료 & 의료기기 분야 메카트렌드 도출 효율화 방안 모색");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","10","130","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("1일차 출장내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","Static11:-1","130","37.23%","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","Static12:-1","130","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("2일차 출장내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","135","135","Static12:96.78%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("HSY");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","Static14:-1","130",null,"41","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","Static14:4","135",null,"31","16",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("HSY");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","10","170","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("3일차 출장내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","Static15:-1","170","37.23%","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","Static16:-1","170","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("4일차 출장내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","135","175","Static16:96.78%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("HSY");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","Static18:-1","170",null,"41","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit07","Static18:4","175",null,"31","16",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("HSY");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","10","210","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("5일차 출장내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","Static19:-1","210","37.23%","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","Static20:-1","210","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("6일차 출장내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","135","215","Static20:96.78%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("HSY");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21","Static22:-1","210",null,"41","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit09","Static22:4","215",null,"31","16",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("HSY");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","10","250","120","57",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("7일차 출장내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","Static23:-1","250",null,"57","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","Static23:5","255",null,"47","16",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","10","306","120","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("기등록여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static25","Static26:-1","306",null,"41","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","145","312","232","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_value("false");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27","Edit02:10","56","100","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("※ 지역명을 입력");
            obj.set_cssclass("sta_WF_helpTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","10","870",null,"320","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,"270","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd01");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"116\"/><Column size=\"65\"/><Column size=\"92\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"예산비목\"/><Cell col=\"1\" text=\"지급처\"/><Cell col=\"2\" text=\"증빙금액\"/><Cell col=\"3\" text=\"지급은행\"/><Cell row=\"1\" text=\"계좌번호\"/><Cell row=\"1\" col=\"1\" text=\"예금주\"/><Cell row=\"1\" col=\"2\" text=\"여비기준\"/><Cell row=\"1\" col=\"3\" text=\"일정변경여부\"/></Band><Band id=\"body\"><Cell text=\"bind:예산비목\"/><Cell col=\"1\" text=\"bind:지급처\"/><Cell col=\"2\" text=\"bind:증빙금액\"/><Cell col=\"3\" text=\"bind:지급은행\"/><Cell row=\"1\" text=\"bind:계좌번호\"/><Cell row=\"1\" col=\"1\" text=\"bind:예금주\"/><Cell row=\"1\" col=\"2\" text=\"bind:여비기준\"/><Cell row=\"1\" col=\"3\" text=\"bind:일정변경여부\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"280","70","30","146",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_btnR");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"280","70","30","73",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_btnR");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"280","70","30","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_btnGr");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","10","410",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("여비신청정보");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","449",null,"381","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","10","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("지급유형");
            obj.set_cssclass("sta_WF_table_required");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","Static04:-1","10","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","10","50","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("출장기간");
            obj.set_cssclass("sta_WF_table_required");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:-1","50","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","Static09:-1","10","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("일정");
            obj.set_cssclass("sta_WF_table_required");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","Static02:-1","10",null,"41","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static02:5","14","40","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_value("0");
            obj.set_text("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","Edit00:6","14","12","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("박");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","Static01:-1","50","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("출장비목");
            obj.set_cssclass("sta_WF_table_required");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","Static05:-1","50",null,"41","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static03:8","14","40","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_value("1");
            obj.set_text("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28","Edit01:6","14","12","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("일");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","Edit01:44","15","84","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("일정변경");
            obj.set_value("false");
            obj.set_visible("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","135","54","110","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_innerdataset("Dataset01");
            obj.set_displaynulltext("2018-03-20");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static29","251","54","9","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("~");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","266","54","110","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_innerdataset("Dataset01");
            obj.set_displaynulltext("2018-03-20");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo02","Static05:5","54",null,"33","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo02_innerdataset = new nexacro.NormalDataset("Div01_form_Combo02_innerdataset", obj);
            Div01_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국내출장</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">국외출장</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo02_innerdataset);
            obj.set_text("국내출장");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","10","90","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("지급처구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","Static08:-1","90","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo03","Static08:5","94","Static10:29.57%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_innerdataset("Dataset01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","Combo03:78","94","60","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("72");
            obj.set_text("영수증구분");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static31","Static10:-1","90","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("지급처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo04","Static27:8","94",null,"33","Static31:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_innerdataset("Dataset01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static32","Static31:-1","90",null,"41","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo06","Static31:5","94","18.46%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo06_innerdataset = new nexacro.NormalDataset("Div01_form_Combo06_innerdataset", obj);
            Div01_form_Combo06_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지급처1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지급처2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">지급처3</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo06_innerdataset);
            obj.set_text("지급처1");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","Combo06:2","94",null,"33","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("HSY");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo05","135","14","Static09:97.04%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo05_innerdataset = new nexacro.NormalDataset("Div01_form_Combo05_innerdataset", obj);
            Div01_form_Combo05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지급유형1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지급유형2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">지급유형3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">지급유형4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">지급유형5</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo05_innerdataset);
            obj.set_text("지급유형1");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","10","130","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("지급은행");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","Static11:-1","130","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","Static12:-1","130","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("계좌번호/예금주");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo07","135","134","Static12:97.04%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo07_innerdataset = new nexacro.NormalDataset("Div01_form_Combo07_innerdataset", obj);
            Div01_form_Combo07_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국민은행</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">우리은행</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">신한은행</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기업은행</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">카카오뱅크</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo07_innerdataset);
            obj.set_text("국민은행");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","Static13:-1","130",null,"41","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo08","Static13:5","134","27.15%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_innerdataset("Dataset01");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Combo08:2","134",null,"33","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("HSY");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","10","170","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("일비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","Static15:-1","170","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","Static15:5","174","Static16:29.57%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_value("20,000");
            obj.set_text("20,000");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","Edit04:2","174","40","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_value("1");
            obj.set_text("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","Edit05:8","174","12","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("x");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","Static16:-1","170","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_text("여비기준");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit06","Static17:3","174",null,"33","Static18:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_value("20,000");
            obj.set_text("20,000");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","Static18:-1","170",null,"41","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio01","Static18:15","175","220","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_innerdataset("ds_rdo03");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("horizontal");
            obj.set_columncount("2");
            obj.set_text("Female");
            obj.set_value("2");
            obj.set_index("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","10","210","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_text("숙박료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","Static20:-1","210","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","20.96%","214","Static21:29.57%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_value("100,000");
            obj.set_text("100,000");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit08","Edit07:2","214","40","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_value("0");
            obj.set_text("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","Edit08:8","214","12","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_text("x");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static41","Static21:-1","210","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("69");
            obj.set_text("첨부문서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit09","Static22:3","214",null,"33","Static41:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_value("0");
            obj.set_text("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","129","250","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static23","Static26:-1","250","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_text("근거규정");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static24","Static23:-1","250",null,"41","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","Static23:5","254",null,"33","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25","10","250","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_text("식비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo09","Static25:5","254","Static26:19.62%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("57");
            obj.set_innerdataset("Dataset01");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit10","Combo09:2","254","Static21:29.57%","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_value("100,000");
            obj.set_text("100,000");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit11","Edit10:2","254","40","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("55");
            obj.set_value("0");
            obj.set_text("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static33","Edit11:8","254","12","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_text("x");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit12","Static33:3","254",null,"33","Static23:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("56");
            obj.set_value("0");
            obj.set_text("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static34","10","290","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("58");
            obj.set_text("교통비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static35","Static34:-1","290","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit13","135","295","185","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("60");
            obj.set_value("0");
            obj.set_text("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static36","Edit13:10","295","104","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("61");
            obj.set_text("※ 왕복합계액 표기");
            obj.set_cssclass("sta_WF_helpTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static37","10","330","120","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("62");
            obj.set_text("합계/신청액");
            obj.set_cssclass("sta_WF_table_required");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static38","Static37:-1","330","37.13%","41",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit14","Static37:5","335","Static38:47.58%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("64");
            obj.set_value("26,000");
            obj.set_text("26,000");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static39","Static35:-1","290","120","81",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("66");
            obj.set_text("사용내역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit15","Edit14:2","335","Static38:48.92%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("65");
            obj.set_value("26,000");
            obj.set_text("26,000");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static40","Static39:-1","290",null,"81","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static39:5","296",null,"68","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("68");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static42","Static41:-1","210",null,"41","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div01.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","Static41:5","214",null,"35","23",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("71");
            obj.set_buttonsize("80");
            obj.set_itemheight("33");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","10","833",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("여비신청내역");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,1230,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static04.set_taborder("0");
                p.Static04.set_text("출장구분");
                p.Static04.set_cssclass("sta_WF_table_required");
                p.Static04.move("10","10","120","41",null,null);

                p.Static09.set_taborder("1");
                p.Static09.set_cssclass("sta_WF_tablebg");
                p.Static09.move("Static04:-1","10","37.13%","41",null,null);

                p.Radio00.set_taborder("2");
                p.Radio00.set_innerdataset("ds_rdo01");
                p.Radio00.set_codecolumn("code");
                p.Radio00.set_datacolumn("data");
                p.Radio00.set_direction("horizontal");
                p.Radio00.set_columncount("2");
                p.Radio00.set_value("2");
                p.Radio00.set_index("1");
                p.Radio00.move("145","15","184","30",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("출장장소");
                p.Static00.set_cssclass("sta_WF_table_required");
                p.Static00.move("10","50","120","41",null,null);

                p.Static01.set_taborder("4");
                p.Static01.set_cssclass("sta_WF_tablebg");
                p.Static01.move("Static00:-1","50","37.13%","41",null,null);

                p.Radio01.set_taborder("5");
                p.Radio01.set_innerdataset("ds_rdo02");
                p.Radio01.set_codecolumn("code");
                p.Radio01.set_datacolumn("data");
                p.Radio01.set_direction("horizontal");
                p.Radio01.set_columncount("2");
                p.Radio01.set_value("2");
                p.Radio01.set_index("1");
                p.Radio01.move("145","55","184","30",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("출장기간");
                p.Static02.set_cssclass("sta_WF_table_required");
                p.Static02.move("Static09:-1","10","120","41",null,null);

                p.Static07.set_taborder("7");
                p.Static07.set_cssclass("sta_WF_tablebg");
                p.Static07.move("Static02:-1","10",null,"41","10",null);

                p.Combo00.set_taborder("8");
                p.Combo00.set_innerdataset("Dataset01");
                p.Combo00.set_displaynulltext("2018-03-20");
                p.Combo00.set_text("");
                p.Combo00.set_index("-1");
                p.Combo00.move("Static02:5","14","126","33",null,null);

                p.Static03.set_taborder("9");
                p.Static03.set_text("~");
                p.Static03.move("Combo00:5","14","9","33",null,null);

                p.Combo01.set_taborder("10");
                p.Combo01.set_innerdataset("Dataset01");
                p.Combo01.set_displaynulltext("2018-03-20");
                p.Combo01.move("Combo00:20","14","126","33",null,null);

                p.Static05.set_taborder("11");
                p.Static05.set_text("출장지");
                p.Static05.set_cssclass("sta_WF_table_required");
                p.Static05.move("Static01:-1","50","120","41",null,null);

                p.Static06.set_taborder("12");
                p.Static06.set_cssclass("sta_WF_tablebg");
                p.Static06.move("Static05:-1","50",null,"41","10",null);

                p.Edit02.set_taborder("13");
                p.Edit02.set_value("수원 성균관대학교");
                p.Edit02.move("Static05:5","56","19.36%","31",null,null);

                p.Static08.set_taborder("14");
                p.Static08.set_text("출장목적");
                p.Static08.set_cssclass("sta_WF_table_required");
                p.Static08.move("10","90","120","41",null,null);

                p.Static10.set_taborder("15");
                p.Static10.set_cssclass("sta_WF_tablebg");
                p.Static10.move("Static08:-1","90",null,"41","10",null);

                p.Edit03.set_taborder("16");
                p.Edit03.set_value("기획연구 전반적인 추진체계 및 연구 범위 최종 점검, 보건의료 & 의료기기 분야 메카트렌드 도출 효율화 방안 모색");
                p.Edit03.move("Static08:5","95",null,"31","16",null);

                p.Static11.set_taborder("17");
                p.Static11.set_text("1일차 출장내용");
                p.Static11.set_cssclass("sta_WF_tablelabel");
                p.Static11.move("10","130","120","41",null,null);

                p.Static12.set_taborder("18");
                p.Static12.set_cssclass("sta_WF_tablebg");
                p.Static12.move("Static11:-1","130","37.23%","41",null,null);

                p.Static14.set_taborder("22");
                p.Static14.set_text("2일차 출장내용");
                p.Static14.set_cssclass("sta_WF_tablelabel");
                p.Static14.move("Static12:-1","130","120","41",null,null);

                p.Edit04.set_taborder("19");
                p.Edit04.move("135","135","Static12:96.78%","31",null,null);

                p.Static13.set_taborder("20");
                p.Static13.set_cssclass("sta_WF_tablebg");
                p.Static13.move("Static14:-1","130",null,"41","10",null);

                p.Edit05.set_taborder("21");
                p.Edit05.move("Static14:4","135",null,"31","16",null);

                p.Static15.set_taborder("23");
                p.Static15.set_text("3일차 출장내용");
                p.Static15.set_cssclass("sta_WF_tablelabel");
                p.Static15.move("10","170","120","41",null,null);

                p.Static16.set_taborder("24");
                p.Static16.set_cssclass("sta_WF_tablebg");
                p.Static16.move("Static15:-1","170","37.23%","41",null,null);

                p.Static18.set_taborder("28");
                p.Static18.set_text("4일차 출장내용");
                p.Static18.set_cssclass("sta_WF_tablelabel");
                p.Static18.move("Static16:-1","170","120","41",null,null);

                p.Edit06.set_taborder("25");
                p.Edit06.move("135","175","Static16:96.78%","31",null,null);

                p.Static17.set_taborder("26");
                p.Static17.set_cssclass("sta_WF_tablebg");
                p.Static17.move("Static18:-1","170",null,"41","10",null);

                p.Edit07.set_taborder("27");
                p.Edit07.move("Static18:4","175",null,"31","16",null);

                p.Static19.set_taborder("29");
                p.Static19.set_text("5일차 출장내용");
                p.Static19.set_cssclass("sta_WF_tablelabel");
                p.Static19.move("10","210","120","41",null,null);

                p.Static20.set_taborder("30");
                p.Static20.set_cssclass("sta_WF_tablebg");
                p.Static20.move("Static19:-1","210","37.23%","41",null,null);

                p.Static22.set_taborder("34");
                p.Static22.set_text("6일차 출장내용");
                p.Static22.set_cssclass("sta_WF_tablelabel");
                p.Static22.move("Static20:-1","210","120","41",null,null);

                p.Edit08.set_taborder("31");
                p.Edit08.move("135","215","Static20:96.78%","31",null,null);

                p.Static21.set_taborder("32");
                p.Static21.set_cssclass("sta_WF_tablebg");
                p.Static21.move("Static22:-1","210",null,"41","10",null);

                p.Edit09.set_taborder("33");
                p.Edit09.move("Static22:4","215",null,"31","16",null);

                p.Static23.set_taborder("35");
                p.Static23.set_text("7일차 출장내용");
                p.Static23.set_cssclass("sta_WF_tablelabel");
                p.Static23.move("10","250","120","57",null,null);

                p.Static24.set_taborder("36");
                p.Static24.set_cssclass("sta_WF_tablebg");
                p.Static24.move("Static23:-1","250",null,"57","10",null);

                p.TextArea00.set_taborder("37");
                p.TextArea00.move("Static23:5","255",null,"47","16",null);

                p.Static26.set_taborder("40");
                p.Static26.set_text("기등록여부");
                p.Static26.set_cssclass("sta_WF_tablelabel");
                p.Static26.move("10","306","120","41",null,null);

                p.Static25.set_taborder("38");
                p.Static25.set_cssclass("sta_WF_tablebg");
                p.Static25.move("Static26:-1","306",null,"41","10",null);

                p.CheckBox00.set_taborder("39");
                p.CheckBox00.set_value("false");
                p.CheckBox00.set_visible("true");
                p.CheckBox00.move("145","312","232","30",null,null);

                p.Static27.set_taborder("41");
                p.Static27.set_text("※ 지역명을 입력");
                p.Static27.set_cssclass("sta_WF_helpTxt");
                p.Static27.move("Edit02:10","56","100","31",null,null);
                // this.Div00 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds_grd01");
                p.Grid00.set_autosizingtype("none");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","0",null,"270","0",null);

                p.btn_save.set_taborder("1");
                p.btn_save.set_text("저장");
                p.btn_save.set_cssclass("btn_WF_btnR");
                p.btn_save.move(null,"280","70","30","146",null);

                p.btn_delete.set_taborder("2");
                p.btn_delete.set_text("삭제");
                p.btn_delete.set_cssclass("btn_WF_btnR");
                p.btn_delete.move(null,"280","70","30","73",null);

                p.btn_close.set_taborder("3");
                p.btn_close.set_text("닫기");
                p.btn_close.set_cssclass("btn_WF_btnGr");
                p.btn_close.move(null,"280","70","30","0",null);
                // this.Div02 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static04.set_taborder("0");
                p.Static04.set_text("지급유형");
                p.Static04.set_cssclass("sta_WF_table_required");
                p.Static04.move("10","10","120","41",null,null);

                p.Static09.set_taborder("1");
                p.Static09.set_cssclass("sta_WF_tablebg");
                p.Static09.move("Static04:-1","10","37.13%","41",null,null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("출장기간");
                p.Static00.set_cssclass("sta_WF_table_required");
                p.Static00.move("10","50","120","41",null,null);

                p.Static01.set_taborder("3");
                p.Static01.set_cssclass("sta_WF_tablebg");
                p.Static01.move("Static00:-1","50","37.13%","41",null,null);

                p.Static02.set_taborder("4");
                p.Static02.set_text("일정");
                p.Static02.set_cssclass("sta_WF_table_required");
                p.Static02.move("Static09:-1","10","120","41",null,null);

                p.Static07.set_taborder("5");
                p.Static07.set_cssclass("sta_WF_tablebg");
                p.Static07.move("Static02:-1","10",null,"41","10",null);

                p.Edit00.set_taborder("6");
                p.Edit00.set_value("0");
                p.Edit00.move("Static02:5","14","40","33",null,null);

                p.Static03.set_taborder("7");
                p.Static03.set_text("박");
                p.Static03.move("Edit00:6","14","12","33",null,null);

                p.Static05.set_taborder("8");
                p.Static05.set_text("출장비목");
                p.Static05.set_cssclass("sta_WF_table_required");
                p.Static05.move("Static01:-1","50","120","41",null,null);

                p.Static06.set_taborder("9");
                p.Static06.set_cssclass("sta_WF_tablebg");
                p.Static06.move("Static05:-1","50",null,"41","10",null);

                p.Edit01.set_taborder("10");
                p.Edit01.set_value("1");
                p.Edit01.move("Static03:8","14","40","33",null,null);

                p.Static28.set_taborder("11");
                p.Static28.set_text("일");
                p.Static28.move("Edit01:6","14","12","33",null,null);

                p.CheckBox01.set_taborder("12");
                p.CheckBox01.set_text("일정변경");
                p.CheckBox01.set_value("false");
                p.CheckBox01.set_visible("true");
                p.CheckBox01.move("Edit01:44","15","84","30",null,null);

                p.Combo00.set_taborder("13");
                p.Combo00.set_innerdataset("Dataset01");
                p.Combo00.set_displaynulltext("2018-03-20");
                p.Combo00.move("135","54","110","33",null,null);

                p.Static29.set_taborder("14");
                p.Static29.set_text("~");
                p.Static29.move("251","54","9","33",null,null);

                p.Combo01.set_taborder("15");
                p.Combo01.set_innerdataset("Dataset01");
                p.Combo01.set_displaynulltext("2018-03-20");
                p.Combo01.move("266","54","110","33",null,null);

                p.Combo02.set_taborder("16");
                p.Combo02.set_innerdataset(Div01_form_Combo02_innerdataset);
                p.Combo02.set_codecolumn("codecolumn");
                p.Combo02.set_datacolumn("datacolumn");
                p.Combo02.set_text("국내출장");
                p.Combo02.set_value("1");
                p.Combo02.set_index("0");
                p.Combo02.move("Static05:5","54",null,"33","16",null);

                p.Static08.set_taborder("17");
                p.Static08.set_text("지급처구분");
                p.Static08.set_cssclass("sta_WF_tablelabel");
                p.Static08.move("10","90","120","41",null,null);

                p.Static10.set_taborder("18");
                p.Static10.set_cssclass("sta_WF_tablebg");
                p.Static10.move("Static08:-1","90","37.13%","41",null,null);

                p.Combo03.set_taborder("19");
                p.Combo03.set_innerdataset("Dataset01");
                p.Combo03.move("Static08:5","94","Static10:29.57%","33",null,null);

                p.Static27.set_taborder("72");
                p.Static27.set_text("영수증구분");
                p.Static27.move("Combo03:78","94","60","33",null,null);

                p.Static31.set_taborder("21");
                p.Static31.set_text("지급처");
                p.Static31.set_cssclass("sta_WF_tablelabel");
                p.Static31.move("Static10:-1","90","120","41",null,null);

                p.Combo04.set_taborder("20");
                p.Combo04.set_innerdataset("Dataset01");
                p.Combo04.move("Static27:8","94",null,"33","Static31:5",null);

                p.Static32.set_taborder("22");
                p.Static32.set_cssclass("sta_WF_tablebg");
                p.Static32.move("Static31:-1","90",null,"41","10",null);

                p.Combo06.set_taborder("25");
                p.Combo06.set_innerdataset(Div01_form_Combo06_innerdataset);
                p.Combo06.set_codecolumn("codecolumn");
                p.Combo06.set_datacolumn("datacolumn");
                p.Combo06.set_text("지급처1");
                p.Combo06.set_value("1");
                p.Combo06.set_index("0");
                p.Combo06.move("Static31:5","94","18.46%","33",null,null);

                p.Edit03.set_taborder("23");
                p.Edit03.move("Combo06:2","94",null,"33","16",null);

                p.Combo05.set_taborder("24");
                p.Combo05.set_innerdataset(Div01_form_Combo05_innerdataset);
                p.Combo05.set_codecolumn("codecolumn");
                p.Combo05.set_datacolumn("datacolumn");
                p.Combo05.set_text("지급유형1");
                p.Combo05.set_value("1");
                p.Combo05.set_index("0");
                p.Combo05.move("135","14","Static09:97.04%","33",null,null);

                p.Static11.set_taborder("26");
                p.Static11.set_text("지급은행");
                p.Static11.set_cssclass("sta_WF_tablelabel");
                p.Static11.move("10","130","120","41",null,null);

                p.Static12.set_taborder("27");
                p.Static12.set_cssclass("sta_WF_tablebg");
                p.Static12.move("Static11:-1","130","37.13%","41",null,null);

                p.Static13.set_taborder("29");
                p.Static13.set_text("계좌번호/예금주");
                p.Static13.set_cssclass("sta_WF_tablelabel");
                p.Static13.move("Static12:-1","130","120","41",null,null);

                p.Combo07.set_taborder("28");
                p.Combo07.set_innerdataset(Div01_form_Combo07_innerdataset);
                p.Combo07.set_codecolumn("codecolumn");
                p.Combo07.set_datacolumn("datacolumn");
                p.Combo07.set_text("국민은행");
                p.Combo07.set_value("1");
                p.Combo07.set_index("0");
                p.Combo07.move("135","134","Static12:97.04%","33",null,null);

                p.Static14.set_taborder("30");
                p.Static14.set_cssclass("sta_WF_tablebg");
                p.Static14.move("Static13:-1","130",null,"41","10",null);

                p.Combo08.set_taborder("31");
                p.Combo08.set_innerdataset("Dataset01");
                p.Combo08.move("Static13:5","134","27.15%","33",null,null);

                p.Edit02.set_taborder("32");
                p.Edit02.move("Combo08:2","134",null,"33","16",null);

                p.Static15.set_taborder("33");
                p.Static15.set_text("일비");
                p.Static15.set_cssclass("sta_WF_tablelabel");
                p.Static15.move("10","170","120","41",null,null);

                p.Static16.set_taborder("34");
                p.Static16.set_cssclass("sta_WF_tablebg");
                p.Static16.move("Static15:-1","170","37.13%","41",null,null);

                p.Edit04.set_taborder("35");
                p.Edit04.set_value("20,000");
                p.Edit04.move("Static15:5","174","Static16:29.57%","33",null,null);

                p.Edit05.set_taborder("37");
                p.Edit05.set_value("1");
                p.Edit05.move("Edit04:2","174","40","33",null,null);

                p.Static17.set_taborder("36");
                p.Static17.set_text("x");
                p.Static17.move("Edit05:8","174","12","33",null,null);

                p.Static18.set_taborder("39");
                p.Static18.set_text("여비기준");
                p.Static18.set_cssclass("sta_WF_tablelabel");
                p.Static18.move("Static16:-1","170","120","41",null,null);

                p.Edit06.set_taborder("38");
                p.Edit06.set_value("20,000");
                p.Edit06.move("Static17:3","174",null,"33","Static18:5",null);

                p.Static19.set_taborder("40");
                p.Static19.set_cssclass("sta_WF_tablebg");
                p.Static19.move("Static18:-1","170",null,"41","10",null);

                p.Radio01.set_taborder("41");
                p.Radio01.set_innerdataset("ds_rdo03");
                p.Radio01.set_codecolumn("code");
                p.Radio01.set_datacolumn("data");
                p.Radio01.set_direction("horizontal");
                p.Radio01.set_columncount("2");
                p.Radio01.set_value("2");
                p.Radio01.set_index("1");
                p.Radio01.move("Static18:15","175","220","30",null,null);

                p.Static20.set_taborder("42");
                p.Static20.set_text("숙박료");
                p.Static20.set_cssclass("sta_WF_tablelabel");
                p.Static20.move("10","210","120","41",null,null);

                p.Static21.set_taborder("43");
                p.Static21.set_cssclass("sta_WF_tablebg");
                p.Static21.move("Static20:-1","210","37.13%","41",null,null);

                p.Edit07.set_taborder("44");
                p.Edit07.set_value("100,000");
                p.Edit07.move("20.96%","214","Static21:29.57%","33",null,null);

                p.Edit08.set_taborder("46");
                p.Edit08.set_value("0");
                p.Edit08.move("Edit07:2","214","40","33",null,null);

                p.Static22.set_taborder("45");
                p.Static22.set_text("x");
                p.Static22.move("Edit08:8","214","12","33",null,null);

                p.Static41.set_taborder("69");
                p.Static41.set_text("첨부문서");
                p.Static41.set_cssclass("sta_WF_tablelabel");
                p.Static41.move("Static21:-1","210","120","41",null,null);

                p.Edit09.set_taborder("47");
                p.Edit09.set_value("0");
                p.Edit09.move("Static22:3","214",null,"33","Static41:5",null);

                p.Static26.set_taborder("52");
                p.Static26.set_cssclass("sta_WF_tablebg");
                p.Static26.move("129","250","37.13%","41",null,null);

                p.Static23.set_taborder("48");
                p.Static23.set_text("근거규정");
                p.Static23.set_cssclass("sta_WF_tablelabel");
                p.Static23.move("Static26:-1","250","120","41",null,null);

                p.Static24.set_taborder("49");
                p.Static24.set_cssclass("sta_WF_tablebg");
                p.Static24.move("Static23:-1","250",null,"41","10",null);

                p.TextArea00.set_taborder("50");
                p.TextArea00.move("Static23:5","254",null,"33","16",null);

                p.Static25.set_taborder("51");
                p.Static25.set_text("식비");
                p.Static25.set_cssclass("sta_WF_tablelabel");
                p.Static25.move("10","250","120","41",null,null);

                p.Combo09.set_taborder("57");
                p.Combo09.set_innerdataset("Dataset01");
                p.Combo09.move("Static25:5","254","Static26:19.62%","33",null,null);

                p.Edit10.set_taborder("53");
                p.Edit10.set_value("100,000");
                p.Edit10.move("Combo09:2","254","Static21:29.57%","33",null,null);

                p.Edit11.set_taborder("55");
                p.Edit11.set_value("0");
                p.Edit11.move("Edit10:2","254","40","33",null,null);

                p.Static33.set_taborder("54");
                p.Static33.set_text("x");
                p.Static33.move("Edit11:8","254","12","33",null,null);

                p.Edit12.set_taborder("56");
                p.Edit12.set_value("0");
                p.Edit12.move("Static33:3","254",null,"33","Static23:5",null);

                p.Static34.set_taborder("58");
                p.Static34.set_text("교통비");
                p.Static34.set_cssclass("sta_WF_tablelabel");
                p.Static34.move("10","290","120","41",null,null);

                p.Static35.set_taborder("59");
                p.Static35.set_cssclass("sta_WF_tablebg");
                p.Static35.move("Static34:-1","290","37.13%","41",null,null);

                p.Edit13.set_taborder("60");
                p.Edit13.set_value("0");
                p.Edit13.move("135","295","185","31",null,null);

                p.Static36.set_taborder("61");
                p.Static36.set_text("※ 왕복합계액 표기");
                p.Static36.set_cssclass("sta_WF_helpTxt");
                p.Static36.move("Edit13:10","295","104","31",null,null);

                p.Static37.set_taborder("62");
                p.Static37.set_text("합계/신청액");
                p.Static37.set_cssclass("sta_WF_table_required");
                p.Static37.move("10","330","120","41",null,null);

                p.Static38.set_taborder("63");
                p.Static38.set_cssclass("sta_WF_tablebg");
                p.Static38.move("Static37:-1","330","37.13%","41",null,null);

                p.Edit14.set_taborder("64");
                p.Edit14.set_value("26,000");
                p.Edit14.move("Static37:5","335","Static38:47.58%","31",null,null);

                p.Static39.set_taborder("66");
                p.Static39.set_text("사용내역");
                p.Static39.set_cssclass("sta_WF_tablelabel");
                p.Static39.move("Static35:-1","290","120","81",null,null);

                p.Edit15.set_taborder("65");
                p.Edit15.set_value("26,000");
                p.Edit15.move("Edit14:2","335","Static38:48.92%","31",null,null);

                p.Static40.set_taborder("67");
                p.Static40.set_cssclass("sta_WF_tablebg");
                p.Static40.move("Static39:-1","290",null,"81","10",null);

                p.TextArea01.set_taborder("68");
                p.TextArea01.move("Static39:5","296",null,"68","16",null);

                p.Static42.set_taborder("70");
                p.Static42.set_cssclass("sta_WF_tablebg");
                p.Static42.move("Static41:-1","210",null,"41","10",null);

                p.FileUpload00.set_taborder("71");
                p.FileUpload00.set_buttonsize("80");
                p.FileUpload00.set_itemheight("33");
                p.FileUpload00.move("Static41:5","214",null,"35","23",null);
                // this.Div01 }}
                p = rootobj;
                p.set_titletext("여비등록");

                p.Static00.set_taborder("0");
                p.Static00.set_text("출장정보입력");
                p.Static00.set_cssclass("sta_WF_title");
                p.Static00.move("10","5",null,"34","10",null);

                p.Div00.set_taborder("1");
                p.Div00.set_cssclass("div_WF_box01");
                p.Div00.set_text("");
                p.Div00.move("10","44",null,"360","10",null);

                p.Div02.set_taborder("2");
                p.Div02.move("10","870",null,"320","10",null);

                p.Static01.set_taborder("3");
                p.Static01.set_text("여비신청정보");
                p.Static01.set_cssclass("sta_WF_title");
                p.Static01.move("10","410",null,"34","10",null);

                p.Div01.set_taborder("4");
                p.Div01.set_cssclass("div_WF_box01");
                p.Div01.set_text("");
                p.Div01.move("10","449",null,"381","10",null);

                p.Static02.set_taborder("5");
                p.Static02.set_text("여비신청내역");
                p.Static02.set_cssclass("sta_WF_title");
                p.Static02.move("10","833",null,"34","10",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen",768,1350,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static26.move("10","384","120","41",null,null);

                p.Static25.move("Static26:-1","384",null,"41","10",null);

                p.CheckBox00.move("145","390","232","30",null,null);

                p.Static23.move("10","328","120","57",null,null);

                p.Static24.move("Static23:-1","328",null,"57","10",null);

                p.TextArea00.move("Static23:5","333",null,"47","16",null);

                p.Static22.move("Static20:-1","288","120","41",null,null);

                p.Static21.move("Static22:-1","288",null,"41","10",null);

                p.Edit09.move("Static22:4","293",null,"31","16",null);

                p.Static19.move("10","288","120","41",null,null);

                p.Static20.move("Static19:-1","288","32.17%","41",null,null);

                p.Edit08.move("135","293",null,"31","Static22:5",null);

                p.Static18.move("Static16:-1","248","120","41",null,null);

                p.Static17.move("Static18:-1","248",null,"41","10",null);

                p.Edit07.move("Static18:4","253",null,"31","16",null);

                p.Static15.move("10","248","120","41",null,null);

                p.Static16.move("Static15:-1","248","32.17%","41",null,null);

                p.Edit06.move("135","253",null,"31","Static18:5",null);

                p.Static14.move("Static12:-1","208","120","41",null,null);

                p.Static13.move("Static14:-1","208",null,"41","10",null);

                p.Edit05.move("Static14:4","213",null,"31","16",null);

                p.Static09.move("Static04:-1","10","32.17%","80",null,null);

                p.Static01.move("Static00:-1","89","32.17%","80",null,null);

                p.Static05.move("Static01:-1","89","120","80",null,null);

                p.Radio00.move("137","35","184","30",null,null);

                p.Radio01.move("137","114","184","30",null,null);

                p.Static12.move("Static11:-1","208","32.17%","41",null,null);

                p.Edit04.move("135","213",null,"31","Static14:5",null);

                p.Static08.move("10","168","120","41",null,null);

                p.Static10.move("Static08:-1","168",null,"41","10",null);

                p.Edit03.move("Static08:5","173",null,"31","16",null);

                p.Static11.move("10","208","120","41",null,null);

                p.Static00.move("10","89","120","80",null,null);

                p.Static06.move("Static05:-1","89",null,"80","10",null);

                p.Edit02.move("Static05:4","95",null,"31","16",null);

                p.Static27.move("Static05:4","130",null,"31","16",null);

                p.Static04.move("10","10","120","80",null,null);

                p.Static02.move("Static09:-1","10","120","80",null,null);

                p.Static07.move("Static02:-1","10",null,"80","10",null);

                p.Combo01.move("Static02:4","52","Static07:82.80%","33",null,null);

                p.Combo00.move("Static02:4","14","Static07:82.80%","33",null,null);

                p.Static03.move("Combo00:5","14",null,"33","16",null);
                // this.Div00 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Grid00.move("0","0",null,"280","0",null);

                p.btn_save.move(null,"294","70","26","146",null);

                p.btn_delete.move(null,"294","70","26","73",null);

                p.btn_close.move(null,"294","70","26","0",null);
                // this.Div02 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static25.set_text("식비");

                p.Static18.set_text("여비기준");

                p.Edit13.move("135","295","117","31",null,null);

                p.Edit15.move("Edit14:2","335",null,"31","Static39:5",null);

                p.Combo05.move("Static04:5","14",null,"33","Static02:5",null);

                p.Static01.move("Static00:-1","50","33.78%","41",null,null);

                p.Combo04.move("276","94",null,"33","Static31:5",null);

                p.Static09.move("Static04:-1","10","33.78%","41",null,null);

                p.Static10.move("Static08:-1","90","33.78%","41",null,null);

                p.Static12.move("Static11:-1","130","33.78%","41",null,null);

                p.Static16.move("Static15:-1","170","33.78%","41",null,null);

                p.Static21.move("Static20:-1","210","33.78%","41",null,null);

                p.Static26.move("129","250","33.78%","41",null,null);

                p.Static35.move("Static34:-1","290","33.78%","41",null,null);

                p.Static38.move("Static37:-1","330","33.78%","41",null,null);

                p.Static36.set_text("※ 왕복합계액\r\n    표기");
                p.Static36.move("Edit13:10","297","104","31",null,null);

                p.Static27.set_text("영수증\r\n구분");
                p.Static27.move("Combo03:12","96","41","33",null,null);

                p.Edit14.move("Static37:5","335","Static38:117","31",null,null);

                p.Edit11.move("Edit10:2","254","Static26:18.33%","33",null,null);

                p.Static33.move("Edit11:5","254","12","33",null,null);

                p.Edit12.move("Static33:1","254",null,"33","Static23:5",null);

                p.Combo07.move("135","134",null,"33","Static13:5",null);

                p.Combo01.move("266","54",null,"33","Static05:5",null);

                p.Edit04.move("Static15:5","174","Static16:37.05%","33",null,null);

                p.Edit07.move("Static20:5","214","Static21:37.05%","33",null,null);

                p.Combo03.move("Static08:5","94","Static10:88","33",null,null);

                p.Edit08.move("Edit07:3","214","40","33",null,null);

                p.Edit05.move("Edit04:3","174","40","33",null,null);

                p.Edit06.move("Static17:3","174",null,"33","Static18:5",null);

                p.Edit09.move("Static22:3","214",null,"33","Static41:5",null);

                p.Radio01.move("Static18:15","175","Static19:89.92%","30",null,null);

                p.Combo08.move("Static13:5","134","18.36%","33",null,null);

                p.Static42.move("Static41:-1","210",null,"41","10",null);

                p.CheckBox01.move("Edit01:20","15","84","30",null,null);

                p.Static31.move("Static10:-1","90","120","41",null,null);
                // this.Div01 }}
                p = rootobj;
                p.set_scrollbartype("autoindicator");

                p.Div02.move("10","970",null,"350","10",null);

                p.Div00.move("10","44",null,"436","10",null);

                p.Static02.move("10","933",null,"34","10",null);

                p.Div01.move("10","529",null,"401","10",null);

                p.Static01.move("10","490",null,"34","10",null);

                p.Static00.move("10","5",null,"34","10",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","Desktop_screen",480,810,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static23.move("10","450","130","57",null,null);

                p.Static24.move("Static23:-1","450",null,"57","10",null);

                p.TextArea00.move("Static23:5","455",null,"47","16",null);

                p.Static26.move("10","506","130","41",null,null);

                p.Static25.move("Static26:-1","506",null,"41","10",null);

                p.CheckBox00.move("Static26:5","512","232","30",null,null);

                p.Static22.move("10","410","130","41",null,null);

                p.Static21.move("Static22:-1","410",null,"41","10",null);

                p.Edit09.move("Static22:4","415",null,"31","16",null);

                p.Static19.move("10","370","130","41",null,null);

                p.Static20.move("Static19:-1","370",null,"41","10",null);

                p.Edit08.move("Static19:4","375",null,"31","16",null);

                p.Static18.move("10","330","130","41",null,null);

                p.Static17.move("Static18:-1","330",null,"41","10",null);

                p.Edit07.move("Static18:4","335",null,"31","16",null);

                p.Static15.move("10","290","130","41",null,null);

                p.Static16.move("Static15:-1","290",null,"41","10",null);

                p.Edit06.move("Static15:4","295",null,"31","16",null);

                p.Static14.move("10","250","130","41",null,null);

                p.Static13.move("Static14:-1","250",null,"41","10",null);

                p.Edit05.move("Static14:4","255",null,"31","16",null);

                p.Static11.move("10","210","130","41",null,null);

                p.Static12.move("Static11:-1","210",null,"41","10",null);

                p.Edit04.move("Static11:4","215",null,"31","16",null);

                p.Static08.move("10","170","130","41",null,null);

                p.Static10.move("Static08:-1","170",null,"41","10",null);

                p.Edit03.move("Static08:5","175",null,"31","16",null);

                p.Static05.set_text("출장지");
                p.Static05.move("10","130","130","41",null,null);

                p.Static06.move("Static05:-1","130",null,"41","10",null);

                p.Edit02.move("Static05:5","136","31.88%","31",null,null);

                p.Static27.move("Edit02:7","136",null,"31","16",null);

                p.Static00.move("10","90","130","41",null,null);

                p.Static01.move("Static00:-1","90",null,"41","10",null);

                p.Radio01.move("155","95","184","30",null,null);

                p.Static02.move("10","50","130","41",null,null);

                p.Static07.move("Static02:-1","50",null,"41","10",null);

                p.Combo00.set_text("");
                p.Combo00.move("Static02:5","54","28.6%","33",null,null);

                p.Combo01.move("Static03:14","54",null,"33","16",null);

                p.Static03.move("Combo00:11","53","9","33",null,null);

                p.Static09.move("Static04:-1","10",null,"41","10",null);

                p.Static04.move("10","10","130","41",null,null);

                p.Radio00.move("155","15","184","30",null,null);
                // this.Div00 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Grid00.move("0","0",null,"293","0",null);

                p.btn_save.move(null,"303","90","40","186",null);

                p.btn_delete.move(null,"303","90","40","93",null);

                p.btn_close.move(null,"303","90","40","0",null);
                // this.Div02 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static36.move("Edit13:10","455","Static35:35.92%","31",null,null);

                p.Static39.move("10","650","130",null,null,"10");

                p.Static40.move("Static39:-1","650",null,null,"10","10");

                p.TextArea01.move("Static39:5","655",null,null,"16","15");

                p.Static23.move("10","610","130","41",null,null);

                p.Static24.move("Static23:-1","610",null,"41","11",null);

                p.TextArea00.move("Static23:5","614",null,"33","16",null);

                p.Edit12.move("Static33:3","414",null,"33","16",null);

                p.Static41.move("10","570","130","41",null,null);

                p.Static42.move("Static41:-1","570",null,"41","10",null);

                p.FileUpload00.move("Static41:5","574",null,"35","18",null);

                p.Edit09.move("Static22:3","374",null,"33","16",null);

                p.Static18.move("10","530","130","41",null,null);

                p.Static19.move("Static18:-1","530",null,"41","10",null);

                p.Radio01.move("Static18:9","535","Static19:68.97%","30",null,null);

                p.Edit06.move("Static17:3","334",null,"33","16",null);

                p.Static37.move("10","490","130","41",null,null);

                p.Static38.move("Static37:-1","490",null,"41","10",null);

                p.Edit14.move("Static37:5","495","Static38:46.25%","31",null,null);

                p.Edit15.move("Edit14:4","495",null,"31","16",null);

                p.Static34.move("10","450","130","41",null,null);

                p.Static35.move("Static34:-1","450",null,"41","10",null);

                p.Edit13.move("Static34:5","455","Static35:50%","31",null,null);

                p.Static20.set_text("숙박료");
                p.Static20.move("10","370","130","41",null,null);

                p.Static26.move("129","410",null,"41","10",null);

                p.Static25.move("10","410","130","41",null,null);

                p.Combo09.move("Static25:5","414","Static26:27.90%","33",null,null);

                p.Edit10.move("Combo09:5","414","Static21:28.13%","33",null,null);

                p.Edit11.move("Edit10:5","414","Static26:15.67%","33",null,null);

                p.Static33.move("Edit11:5","414","12","33",null,null);

                p.Static15.set_text("일비");
                p.Static15.move("10","330","130","41",null,null);

                p.Static16.move("Static15:-1","330",null,"41","10",null);

                p.Edit04.move("Static15:5","334","Static16:28.13%","33",null,null);

                p.Edit05.move("Edit04:8","334","40","33",null,null);

                p.Static17.move("Edit05:8","334","12","33",null,null);

                p.Static21.move("Static20:-1","370",null,"41","10",null);

                p.Edit07.move("Static20:5","374","Static21:28.13%","33",null,null);

                p.Edit08.move("Edit07:8","374","40","33",null,null);

                p.Static22.move("Edit08:8","374","12","33",null,null);

                p.Static13.move("10","290","130","41",null,null);

                p.Static14.move("Static13:-1","290",null,"41","10",null);

                p.Combo08.move("Static13:5","294","34.28%","33",null,null);

                p.Edit02.move("Combo08:3","294",null,"33","16",null);

                p.Static11.move("10","250","130","41",null,null);

                p.Static12.move("Static11:-1","250",null,"41","10",null);

                p.Combo07.move("Static11:5","254",null,"33","16",null);

                p.Static31.move("10","210","130","41",null,null);

                p.Static32.move("Static31:-1","210",null,"41","10",null);

                p.Combo04.move(null,"174","Static10:32.60%","33","17",null);

                p.Combo06.move("Static31:5","214","34.28%","33",null,null);

                p.Edit03.move("Combo06:5","214",null,"33","16",null);

                p.Static08.move("10","170","130","41",null,null);

                p.Static10.move("Static08:-1","170",null,"41","10",null);

                p.Combo03.move("Static08:5","174","Static10:28.13%","33",null,null);

                p.Static27.set_cssclass("sta_WF_basicTxt");
                p.Static27.move(null,"174","Static10:22.65%","33","125",null);

                p.Static05.move("10","130","130","41",null,null);

                p.Static06.move("Static05:-1","130",null,"41","10",null);

                p.Combo02.move("Static05:5","134",null,"33","16",null);

                p.Static00.move("10","90","130","41",null,null);

                p.Static01.move("Static00:-1","90",null,"41","10",null);

                p.Combo00.set_displaynulltext("2018-03-20");
                p.Combo00.move("Static00:5","94","Static01:45.14%","33",null,null);

                p.Static29.move("Combo00:6","94","9","33",null,null);

                p.Combo01.set_displaynulltext("2018-03-20");
                p.Combo01.move("Static29:6","94",null,"33","16",null);

                p.Static02.move("10","50","130","41",null,null);

                p.Static07.move("Static02:-1","50",null,"41","10",null);

                p.Edit00.move("Static02:5","54","40","33",null,null);

                p.CheckBox01.set_text("일정변경");
                p.CheckBox01.move(null,"55","87","30","16",null);

                p.Static28.move("Edit01:6","54","12","33",null,null);

                p.Static03.move("Edit00:6","54","12","33",null,null);

                p.Edit01.move("Static03:5","54","40","33",null,null);

                p.Static09.move("Static04:-1","10",null,"41","10",null);

                p.Combo05.move("Static04:5","14",null,"33","16",null);

                p.Static04.move("10","10","130","41",null,null);
                // this.Div01 }}
                p = rootobj;
                p.Div02.set_positionstep("2");
                p.Div02.set_text("");
                p.Div02.move("10","45",null,"526","10",null);

                p.Div00.set_text("");
                p.Div00.move("10","45",null,null,"10","30");

                p.Static01.set_positionstep("1");
                p.Static01.move("10","0",null,"45","10",null);

                p.Div01.set_positionstep("1");
                p.Div01.set_formscrollbartype("autoindicator");
                p.Div01.move("10","45",null,null,"10","30");

                p.Static02.set_positionstep("2");
                p.Static02.move("13","0",null,"45","7",null);

                p.Static00.set_text("출장정보입력");
                p.Static00.move("10","0",null,"45","10",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc02.xfdl", function() {
        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btn_save" :
        		case "btn_delete" :
        		case "btn_close" :
        			alert(obj.text + "은(는) 개발 예정입니다.");
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div02.form.btn_save.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div02.form.btn_delete.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div02.form.btn_close.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div01.form.FileUpload00.addEventHandler("onitemchanged",this.Div01_FileUpload00_onitemchanged,this);
        };

        this.loadIncludeScript("poc02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
