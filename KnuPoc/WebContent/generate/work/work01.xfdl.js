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
            this.set_titletext("학적기본사항관리");
            this.set_scrollbartype("autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,718);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLectureInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_DIVIDE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"RECOMPLETION_SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"RECOMPLETION_SUBJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSES_STATUS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","17",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("학적기본사항관리");
            obj.set_cssclass("sta_WF_titleBig");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","149",null,"235","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","169","2",null,"226","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_border");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","169","2","11.95%","46",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:-1","2","70.72%","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_conLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static02:8","8","25.2%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","169","92","11.95%","46",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("성명(한글)");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","Static04:0","92","26.69%","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_conLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","169","137","11.95%","46",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("성명(영문)");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","Static06:0","137","26.69%","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_conLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","169","182","11.95%","46",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("성명(한문)");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","Static08:0","182","26.69%","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_conLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","169","47","11.95%","46",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("캠퍼스구분");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","Static10:1","47","26.69%","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_conLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","Static11:0","47","11.95%","46",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_labelLine");
            obj.set_fittocontents("none");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","Static12:0","47",null,"46","7",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_conLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static10:8","52","25.20%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","Static12:17","53",null,"34","11",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","Static07:1","92","11.95%","136",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_labelLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","Static14:0","92","320","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","Static14:0","137","320","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","Static14:0","182","320","46",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","Static14:17","97","105","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_displaynulltext("학과");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","Edit04:2","97",null,"34","47",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit06","Static14:17","142","105","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_displaynulltext("전공");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","Edit06:2","142",null,"34","47",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit08","Static14:17","187","105","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_displaynulltext("분반");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit09","Edit08:2","187",null,"34","47",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static04:8","98","25.2%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","Edit05:2","97","36","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static06:8","143","25.2%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","Edit07:2","142","36","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static08:8","188","25.2%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","Edit09:2","187","36","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_search");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div04","0","2","163","226",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("Div04");
            obj.set_url("Comm::CommImgFileupdown.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","Div01:6",null,null,"10","16",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_selectedtabbuttonheight("35");
            obj.set_tabposition("left");
            obj.set_tabjustify("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("학적세부사항");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab00","13",null,null,"241","17","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_selectedtabbuttonheight("35");
            obj.set_cssclass("tab_WF_subTab");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("이수과목조회");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","47",null,null,"0","10",null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsLectureInfo");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("none");
            obj.set_selecttype("row");
            obj.set_nodatatext("조회된 데이터가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"과목코드\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"성적등급\"/><Cell col=\"4\" text=\"교과구분\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"재이수년도_학기\"/><Cell col=\"7\" text=\"재이수과목코드\"/><Cell col=\"8\" text=\"수강신청상태\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SUBJECT_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SUBJECT_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SUBJECT_GRADE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SUBJECT_DIVIDE_CODE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SUBJECT_CREDIT\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:RECOMPLETION_SEMESTER\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:RECOMPLETION_SUBJECT_CODE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:CLASSES_STATUS_CODE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","10","2",null,"39","8",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","108","5","170","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var Tab00_Tabpage1_form_Tab00_Tabpage1_form_Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Tab00_Tabpage1_form_Div00_form_Combo00_innerdataset", obj);
            Tab00_Tabpage1_form_Tab00_Tabpage1_form_Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col><Col id=\"codecolumn\">선택</Col></Row><Row><Col id=\"datacolumn\">2019</Col><Col id=\"codecolumn\">2019</Col></Row><Row><Col id=\"datacolumn\">2018</Col><Col id=\"codecolumn\">2018</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Tab00_Tabpage1_form_Div00_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","103","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("년도/학기");
            obj.set_cssclass("sta_WF_labelBasic");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("수강신청조회");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid0404","0","47",null,null,"0","10",null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("none");
            obj.set_selecttype("row");
            obj.set_nodatatext("현재 개발중 입니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"과목코드\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"성적등급\"/><Cell col=\"4\" text=\"교과구분\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"재이수년도_학기\"/><Cell col=\"7\" text=\"재이수과목코드\"/><Cell col=\"8\" text=\"수강신청상태\"/></Band><Band id=\"body\"><Cell textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\"/><Cell col=\"7\" textAlign=\"center\"/><Cell col=\"8\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("수업/성적");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","16","10",null,null,"16","10",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_nodatatext("현재 개발중입니다");
            obj._setContents("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Div("Div02","0","54",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","34","34","190",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_iconSearch");
            obj.set_hotkey("CTRL+SHIFT+U");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01",null,"3","34","34","154",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_iconAdd");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02",null,"3","34","34","118",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_iconDel");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03",null,"3","34","34","82",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_iconSave");
            obj.set_hotkey("CTRL+SHIFT+S");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button04",null,"3","34","34","46",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_iconPrint");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button05",null,"3","34","34","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_iconHelp");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","10","96",null,"48","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_lineTop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","164","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_labelTop");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","171","5","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("학번");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","304","5","145","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("성명");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","451","5","34","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03",null,"92","519","76","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-2","520","15","8",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_helpImg");
            obj.set_text("");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","10","13",null,"60","8",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_helpBg");
            obj.set_text("조회버튼을 클릭하면 학생 정보가 조회됩니다.");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,718,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static01.set_taborder("0");
                p.Static01.set_cssclass("sta_WF_border");
                p.Static01.set_text("");
                p.Static01.move("169","2",null,"226","0",null);

                p.Static02.set_taborder("1");
                p.Static02.set_text("학번");
                p.Static02.set_cssclass("sta_WF_labelLine");
                p.Static02.set_minwidth("80");
                p.Static02.set_maxwidth("");
                p.Static02.move("169","2","11.95%","46",null,null);

                p.Static03.set_taborder("2");
                p.Static03.set_cssclass("sta_WF_conLine");
                p.Static03.move("Static02:-1","2","70.72%","46",null,null);

                p.Edit00.set_taborder("3");
                p.Edit00.set_enable("false");
                p.Edit00.move("Static02:8","8","25.2%","34",null,null);

                p.Static04.set_taborder("4");
                p.Static04.set_text("성명(한글)");
                p.Static04.set_cssclass("sta_WF_labelLine");
                p.Static04.set_minwidth("80");
                p.Static04.set_maxwidth("");
                p.Static04.move("169","92","11.95%","46",null,null);

                p.Static05.set_taborder("5");
                p.Static05.set_cssclass("sta_WF_conLine");
                p.Static05.move("Static04:0","92","26.69%","46",null,null);

                p.Static06.set_taborder("7");
                p.Static06.set_text("성명(영문)");
                p.Static06.set_cssclass("sta_WF_labelLine");
                p.Static06.set_minwidth("80");
                p.Static06.set_maxwidth("");
                p.Static06.move("169","137","11.95%","46",null,null);

                p.Static07.set_taborder("8");
                p.Static07.set_cssclass("sta_WF_conLine");
                p.Static07.move("Static06:0","137","26.69%","46",null,null);

                p.Static08.set_taborder("10");
                p.Static08.set_text("성명(한문)");
                p.Static08.set_cssclass("sta_WF_labelLine");
                p.Static08.set_minwidth("80");
                p.Static08.set_maxwidth("");
                p.Static08.move("169","182","11.95%","46",null,null);

                p.Static09.set_taborder("11");
                p.Static09.set_cssclass("sta_WF_conLine");
                p.Static09.move("Static08:0","182","26.69%","46",null,null);

                p.Static10.set_taborder("13");
                p.Static10.set_text("캠퍼스구분");
                p.Static10.set_cssclass("sta_WF_labelLine");
                p.Static10.set_minwidth("80");
                p.Static10.set_maxwidth("");
                p.Static10.move("169","47","11.95%","46",null,null);

                p.Static11.set_taborder("14");
                p.Static11.set_cssclass("sta_WF_conLine");
                p.Static11.move("Static10:1","47","26.69%","46",null,null);

                p.Static12.set_taborder("15");
                p.Static12.set_text("학적상태");
                p.Static12.set_cssclass("sta_WF_labelLine");
                p.Static12.set_fittocontents("none");
                p.Static12.set_minwidth("80");
                p.Static12.set_maxwidth("");
                p.Static12.move("Static11:0","47","11.95%","46",null,null);

                p.Static13.set_taborder("16");
                p.Static13.set_cssclass("sta_WF_conLine");
                p.Static13.move("Static12:0","47",null,"46","7",null);

                p.Combo00.set_taborder("17");
                p.Combo00.set_text("");
                p.Combo00.set_index("-1");
                p.Combo00.move("Static10:8","52","25.20%","34",null,null);

                p.Combo01.set_taborder("18");
                p.Combo01.move("Static12:17","53",null,"34","11",null);

                p.Static14.set_taborder("19");
                p.Static14.set_text("소속");
                p.Static14.set_cssclass("sta_WF_labelLine");
                p.Static14.set_minwidth("80");
                p.Static14.set_maxwidth("");
                p.Static14.move("Static07:1","92","11.95%","136",null,null);

                p.Static15.set_taborder("20");
                p.Static15.move("Static14:0","92","320","46",null,null);

                p.Static16.set_taborder("21");
                p.Static16.move("Static14:0","137","320","46",null,null);

                p.Static17.set_taborder("22");
                p.Static17.move("Static14:0","182","320","46",null,null);

                p.Edit04.set_taborder("23");
                p.Edit04.set_displaynulltext("학과");
                p.Edit04.move("Static14:17","97","105","34",null,null);

                p.Edit05.set_taborder("24");
                p.Edit05.set_enable("false");
                p.Edit05.move("Edit04:2","97",null,"34","47",null);

                p.Edit06.set_taborder("26");
                p.Edit06.set_displaynulltext("전공");
                p.Edit06.move("Static14:17","142","105","34",null,null);

                p.Edit07.set_taborder("27");
                p.Edit07.set_enable("false");
                p.Edit07.move("Edit06:2","142",null,"34","47",null);

                p.Edit08.set_taborder("29");
                p.Edit08.set_displaynulltext("분반");
                p.Edit08.move("Static14:17","187","105","34",null,null);

                p.Edit09.set_taborder("30");
                p.Edit09.set_enable("false");
                p.Edit09.move("Edit08:2","187",null,"34","47",null);

                p.Edit01.set_taborder("6");
                p.Edit01.set_enable("false");
                p.Edit01.move("Static04:8","98","25.2%","34",null,null);

                p.Button00.set_taborder("25");
                p.Button00.set_cssclass("btn_WF_search");
                p.Button00.move("Edit05:2","97","36","34",null,null);

                p.Edit02.set_taborder("9");
                p.Edit02.set_enable("false");
                p.Edit02.move("Static06:8","143","25.2%","34",null,null);

                p.Button01.set_taborder("28");
                p.Button01.set_cssclass("btn_WF_search");
                p.Button01.move("Edit07:2","142","36","34",null,null);

                p.Edit03.set_taborder("12");
                p.Edit03.set_enable("false");
                p.Edit03.move("Static08:8","188","25.2%","34",null,null);

                p.Button02.set_taborder("31");
                p.Button02.set_cssclass("btn_WF_search");
                p.Button02.move("Edit09:2","187","36","34",null,null);

                p.Div04.set_taborder("32");
                p.Div04.set_text("Div04");
                p.Div04.set_url("Comm::CommImgFileupdown.xfdl");
                p.Div04.move("0","2","163","226",null,null);
                // this.Div01 }}


                // {{ this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00
                p = rootobj.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.form;

                p.Combo00.set_taborder("0");
                p.Combo00.set_innerdataset(Tab00_Tabpage1_form_Tab00_Tabpage1_form_Div00_form_Combo00_innerdataset);
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_enable("false");
                p.Combo00.set_text("선택");
                p.Combo00.set_value("선택");
                p.Combo00.set_index("0");
                p.Combo00.move("108","5","170","34",null,null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("년도/학기");
                p.Static00.set_cssclass("sta_WF_labelBasic");
                p.Static00.move("0","5","103","34",null,null);
                // this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00 }}


                // {{ this.Tab00.Tabpage1.form.Tab00.Tabpage1
                p = rootobj.Tab00.Tabpage1.form.Tab00.Tabpage1.form;

                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("dsLectureInfo");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cellmovingtype("none");
                p.Grid00.set_selecttype("row");
                p.Grid00.set_nodatatext("조회된 데이터가 없습니다");
                p.Grid00.move("0","47",null,null,"0","10");

                p.Div00.set_taborder("1");
                p.Div00.set_text("");
                p.Div00.move("10","2",null,"39","8",null);
                // this.Tab00.Tabpage1.form.Tab00.Tabpage1 }}


                // {{ this.Tab00.Tabpage1.form.Tab00.Tabpage2
                p = rootobj.Tab00.Tabpage1.form.Tab00.Tabpage2.form;

                p.Grid0404.set_taborder("0");
                p.Grid0404.set_autofittype("col");
                p.Grid0404.set_cellmovingtype("none");
                p.Grid0404.set_selecttype("row");
                p.Grid0404.set_nodatatext("현재 개발중 입니다.");
                p.Grid0404.move("0","47",null,null,"0","10");
                // this.Tab00.Tabpage1.form.Tab00.Tabpage2 }}


                // {{ this.Tab00.Tabpage1
                p = rootobj.Tab00.Tabpage1.form;

                p.Tab00.set_taborder("0");
                p.Tab00.set_tabindex("0");
                p.Tab00.set_selectedtabbuttonheight("35");
                p.Tab00.set_cssclass("tab_WF_subTab");
                p.Tab00.move("13",null,null,"241","17","0");

                p.Tab00.Tabpage1.set_text("이수과목조회");

                p.Tab00.Tabpage2.set_text("수강신청조회");
                // this.Tab00.Tabpage1 }}


                // {{ this.Tab00.Tabpage2
                p = rootobj.Tab00.Tabpage2.form;

                p.Grid00.set_taborder("0");
                p.Grid00.set_nodatatext("현재 개발중입니다");
                p.Grid00.move("16","10",null,null,"16","10");
                // this.Tab00.Tabpage2 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_iconSearch");
                p.Button00.set_hotkey("CTRL+SHIFT+U");
                p.Button00.move(null,"3","34","34","190",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_iconAdd");
                p.Button01.move(null,"3","34","34","154",null);

                p.Button02.set_taborder("2");
                p.Button02.set_cssclass("btn_WF_iconDel");
                p.Button02.move(null,"3","34","34","118",null);

                p.Button03.set_taborder("3");
                p.Button03.set_cssclass("btn_WF_iconSave");
                p.Button03.set_hotkey("CTRL+SHIFT+S");
                p.Button03.move(null,"3","34","34","82",null);

                p.Button04.set_taborder("4");
                p.Button04.set_cssclass("btn_WF_iconPrint");
                p.Button04.move(null,"3","34","34","46",null);

                p.Button05.set_taborder("5");
                p.Button05.set_cssclass("btn_WF_iconHelp");
                p.Button05.move(null,"3","34","34","10",null);
                // this.Div02 }}


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static00.set_taborder("0");
                p.Static00.set_text("학번/성명");
                p.Static00.set_cssclass("sta_WF_labelTop");
                p.Static00.move("0","-1","164","46",null,null);

                p.Edit00.set_taborder("1");
                p.Edit00.set_displaynulltext("학번");
                p.Edit00.move("171","5","130","34",null,null);

                p.Edit01.set_taborder("2");
                p.Edit01.set_displaynulltext("성명");
                p.Edit01.move("304","5","145","34",null,null);

                p.Button00.set_taborder("3");
                p.Button00.set_cssclass("btn_WF_search");
                p.Button00.move("451","5","34","34",null,null);
                // this.Div00 }}


                // {{ this.Div03
                p = rootobj.Div03.form;

                p.Static01.set_taborder("0");
                p.Static01.set_cssclass("sta_WF_helpImg");
                p.Static01.set_text("");
                p.Static01.set_visible("false");
                p.Static01.move(null,"-2","520","15","8",null);

                p.Static02.set_taborder("1");
                p.Static02.set_cssclass("sta_WF_helpBg");
                p.Static02.set_text("조회버튼을 클릭하면 학생 정보가 조회됩니다.");
                p.Static02.set_visible("false");
                p.Static02.move("10","13",null,"60","8",null);
                // this.Div03 }}
                p = rootobj;
                p.set_titletext("학적기본사항관리");
                p.set_scrollbartype("autoindicator");

                p.Static00.set_taborder("0");
                p.Static00.set_text("학적기본사항관리");
                p.Static00.set_cssclass("sta_WF_titleBig");
                p.Static00.move("10","17",null,"34","10",null);

                p.Div01.set_taborder("2");
                p.Div01.move("10","149",null,"235","10",null);

                p.Tab00.set_taborder("3");
                p.Tab00.set_tabindex("0");
                p.Tab00.set_selectedtabbuttonheight("35");
                p.Tab00.set_tabposition("left");
                p.Tab00.set_tabjustify("false");
                p.Tab00.move("10","Div01:6",null,null,"10","16");

                p.Tab00.Tabpage1.set_text("학적세부사항");

                p.Tab00.Tabpage2.set_text("수업/성적");

                p.Div02.set_taborder("4");
                p.Div02.move("0","54",null,"42","0",null);

                p.Div00.set_taborder("1");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_lineTop");
                p.Div00.move("10","96",null,"48","10",null);

                p.Div03.set_taborder("5");
                p.Div03.move(null,"92","519","76","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen,Desktop_screen",480,1300,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static02.set_maxheight("");
                p.Static02.set_minwidth("120");
                p.Static02.set_maxwidth("220");
                p.Static02.move("0","199","36.96%","60",null,null);

                p.Edit00.move("Static02:4","203",null,"52","5",null);

                p.Static04.set_maxheight("");
                p.Static04.set_minwidth("120");
                p.Static04.set_maxwidth("220");
                p.Static04.move("0","317","36.96%","60",null,null);

                p.Static05.move("Static04:0","317",null,"60","0",null);

                p.Edit01.set_minwidth("80");
                p.Edit01.set_maxwidth("");
                p.Edit01.move("Edit04:4","557",null,"52","60",null);

                p.Static06.set_maxheight("");
                p.Static06.set_minwidth("120");
                p.Static06.set_maxwidth("220");
                p.Static06.move("0","376","36.96%","60",null,null);

                p.Static07.move("Static06:0","376",null,"60","0",null);

                p.Edit02.set_minwidth("80");
                p.Edit02.set_maxwidth("");
                p.Edit02.move("Edit06:4","616",null,"52","60",null);

                p.Static08.set_maxheight("");
                p.Static08.set_minwidth("120");
                p.Static08.set_maxwidth("220");
                p.Static08.move("0","435","36.96%","60",null,null);

                p.Static09.move("Static08:0","435",null,"60","0",null);

                p.Edit03.set_minwidth("80");
                p.Edit03.set_maxwidth("");
                p.Edit03.move("Edit08:4","675",null,"52","60",null);

                p.Static10.set_maxheight("");
                p.Static10.set_minwidth("120");
                p.Static10.set_maxwidth("220");
                p.Static10.move("0","258","36.96%","60",null,null);

                p.Static11.set_text("");
                p.Static11.move("Static10:0","258",null,"60","0",null);

                p.Static12.set_text("학적상태");
                p.Static12.set_maxheight("");
                p.Static12.set_minwidth("120");
                p.Static12.set_maxwidth("220");
                p.Static12.move("0","494","36.96%","60",null,null);

                p.Combo00.move("Static12:4","498",null,"52","5",null);

                p.Combo01.move("Static10:4","262",null,"52","5",null);

                p.Static14.set_maxheight("");
                p.Static14.set_minwidth("120");
                p.Static14.set_maxwidth("220");
                p.Static14.move("0","553","36.96%","178",null,null);

                p.Edit05.move("Static04:4","321",null,"52","5",null);

                p.Button00.set_cssclass("btn_WF_search");
                p.Button00.move(null,"557","52","52","5",null);

                p.Edit07.move("Static06:4","380",null,"52","5",null);

                p.Button01.set_cssclass("btn_WF_search");
                p.Button01.set_text("");
                p.Button01.move(null,"616","52","52","5",null);

                p.Edit09.move("Static08:4","439",null,"52","5",null);

                p.Button02.set_cssclass("btn_WF_search");
                p.Button02.move(null,"675","52","52","5",null);

                p.Edit04.set_minwidth("60");
                p.Edit04.set_maxwidth("");
                p.Edit04.move("Static14:4","557","16.96%","52",null,null);

                p.Edit06.set_minwidth("60");
                p.Edit06.set_maxwidth("");
                p.Edit06.move("Static14:4","616","16.96%","52",null,null);

                p.Edit08.set_minwidth("60");
                p.Edit08.set_maxwidth("");
                p.Edit08.move("Static14:4","675","16.96%","52",null,null);

                p.Static03.move("Static02:0","199",null,"60","0",null);

                p.Static13.move("Static12:0","494",null,"60","0",null);

                p.Static15.set_text("");
                p.Static15.move("Static14:0","553",null,"60","0",null);

                p.Static16.move("Static14:0","612",null,"60","0",null);

                p.Static17.move("Static14:0","671",null,"60","0",null);

                p.Static01.set_text("");
                p.Static01.move("0","-1",null,"732","0",null);

                p.Div04.move("0","2",null,"226","0",null);
                // this.Div01 }}


                // {{ this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00
                p = rootobj.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.form;

                p.Combo00.move("106","0",null,"52","0",null);

                p.Static00.move("5","0","99","52",null,null);
                // this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00 }}


                // {{ this.Tab00.Tabpage1.form.Tab00.Tabpage1
                p = rootobj.Tab00.Tabpage1.form.Tab00.Tabpage1.form;

                p.Div00.move("0","8",null,"60","0",null);

                p.Grid00.move("0","74",null,null,"0","10");
                // this.Tab00.Tabpage1.form.Tab00.Tabpage1 }}


                // {{ this.Tab00.Tabpage1
                p = rootobj.Tab00.Tabpage1.form;

                p.Tab00.set_selectedtabbuttonheight("45");
                p.Tab00.move("5","14",null,null,"5","0");
                // this.Tab00.Tabpage1 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Button05.move("Button04:3","6",null,"52","10",null);

                p.Button04.move("Button03:3","6","15.42%","52",null,null);

                p.Button03.move("Button02:3","6","15.42%","52",null,null);

                p.Button02.move("Button01:3","6","15.42%","52",null,null);

                p.Button01.move("Button00:3","6","15.42%","52",null,null);

                p.Button00.move("10","6","15.42%","52",null,null);
                // this.Div02 }}


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Edit00.move("Static00:10","5","26.09%","52",null,null);

                p.Edit01.move("Edit00:3","5",null,"52","71",null);

                p.Button00.set_cssclass("btn_WF_search");
                p.Button00.move(null,"5","63","52","5",null);

                p.Static00.move("0","0","113","61",null,null);
                // this.Div00 }}


                // {{ this.Div03
                p = rootobj.Div03.form;

                p.Static01.set_visible("true");
                p.Static01.move("0","-2",null,"15","27",null);

                p.Static02.set_visible("true");
                p.Static02.move("10","13",null,"95","8",null);
                // this.Div03 }}
                p = rootobj;
                p.set_scrollbartype("auto autoindicator");

                p.Div00.move("10","141",null,"64","10",null);

                p.Tab00.set_selectedtabbuttonheight("45");
                p.Tab00.set_tabjustify("false");
                p.Tab00.set_tabposition("left");
                p.Tab00.move("10","945",null,"341","10",null);

                p.Tab00.Tabpage1.set_text("학적세부사항");

                p.Div01.move("10","208",null,"741","10",null);

                p.Div02.set_text("");
                p.Div02.move("0","75",null,"66","0",null);

                p.Static00.move("10","20",null,"34","10",null);

                p.Div03.set_visible("false");
                p.Div03.move("0","133",null,"118","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div01.form.Edit04","value","gds_stuInfo","DEPARTMENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.Edit06","value","gds_stuInfo","MAJOR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div01.form.Edit08","value","gds_stuInfo","DIVIDE_CLASS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div01.form.Combo00","value","gds_stuInfo","CAMPUS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div01.form.Combo01","value","gds_stuInfo","ACADEMIC_STATUS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div01.form.Edit00","value","gds_stuInfo","STUDENT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.Edit01","value","gds_stuInfo","STUDENT_NAME_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.Edit02","value","gds_stuInfo","STUDENT_NAME_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.Edit03","value","gds_stuInfo","STUDENT_NAME_HAN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::CommImgFileupdown.xfdl");
        };
        
        // User Script
        this.addIncludeScript("work01.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("work01.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("work01.xfdl", function() {
        /**
        *  Knu Poc 샘플
        *  @FileName 	work01.xfdl
        *  @Creator 	Presales
        *  @CreateDate 	2019.04.
        *  @Desction    함수 정의 및 개발
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.04.09    	Presales 	                최초 생성
        *******************************************************************************
        */
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.gds_stuInfo = nexacro.getApplication().gds_stuInfo;
        this.gds_comCode = nexacro.getApplication().gds_comCode;
        this.sortFlag = 0;
        this.delFlag = 0;
        this.setImageFlag = "N";
        this.serviceURL = "http://14.63.224.112/KnuPoc/service/";
        this.imageURL = "http://14.63.224.112/KnuPoc/image/";
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.work01_onload = function(obj,e)
        {
        	this.fn_comCode();
        };
        //Edit 옆 조회버튼
        this.Div00_Button00_onclick = function(obj,e)
        {
        	if(this.fn_IsNull(this.Div00.form.Edit00.value) && this.fn_IsNull(this.Div00.form.Edit01.value))
        	{
        		this.alert("학번 or 성명 정보를 입력해주시기 바랍니다");
        		return false;
        	}
        	this.fn_Search();
        };
        //상단 조회 버튼
        this.Div02_Button00_onclick = function(obj,e)
        {
        	this.setImageFlag = "N";

        	if(this.fn_IsNull(this.Div00.form.Edit00.value) && this.fn_IsNull(this.Div00.form.Edit01.value))
        	{
        		this.alert("학번 or 성명 정보를 입력해주시기 바랍니다");
        		return false;
        	}
        	this.fn_Search();
        };
        //학생정보 추가
        this.Div02_Button01_onclick = function(obj,e)
        {
        	this.setImageFlag = "Y";

        	this.Div01.form.Edit00.set_enable(true);
        	this.Div01.form.Edit01.set_enable(true);
        	this.Div01.form.Edit02.set_enable(true);
        	this.Div01.form.Edit03.set_enable(true);

        	this.gds_stuInfo.clearData();
        	this.Div01.form.Div04.form.ImageViewer00.set_image("");
        	this.Div01.form.Edit05.set_value("");
        	this.Div01.form.Edit07.set_value("");
        	this.Div01.form.Edit09.set_value("");
        	this.dsLectureInfo.clearData();
        	this.gds_stuInfo.addRow();
        };
        //학생정보 삭제
        this.Div02_Button02_onclick = function(obj,e)
        {
        	if(this.fn_IsNull(this.Div01.form.Edit00.value))
        	{
        		this.alert("삭제할 데이터가 없습니다");
        		return false;
        	}
        	if(this.confirm("삭제 후 저장 버튼을 눌러야 삭제가 완료됩니다."))
        	{
        		this.gds_stuInfo.deleteRow(0);
        		this.dsLectureInfo.deleteAll();
        		this.Div01.form.Div04.form.ImageViewer00.set_image("");
        		this.delFlag = 8;
        	}
        };
        //학생정보 저장
        this.Div02_Button03_onclick = function(obj,e)
        {
        	this.fn_Save();
        };
        // 엔터키로 검색
        this.fn_searchEnter = function (obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.Div01.form.Div04.form.ImageViewer00.set_image("");
        		this.fn_Search();
        	}
        };
        // 수강신청 정보 년도 선택
        this.Tab00_Tabpage1_Tab00_Tabpage1_Div00_Combo00_onitemchanged = function(obj,e)
        {
        	var strFilter = this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.form.Combo00.text;
        	this.dsLectureInfo.filter("YEAR_SEMESTER.indexOf('"+strFilter+"') > -1");
        	if(strFilter == "선택")
        	{
        		this.dsLectureInfo.filter("");
        	}
        };
        //출력
        this.Div02_Button04_onclick = function(obj,e)
        {
        	system.print( this );
        };

        // 풍선도움말
        this.Div02_Button05_onmouseenter = function(obj,e)
        {
        	this.Div03.set_visible(true);
        	this.Div03.form.Static01.set_visible(true);
        	this.Div03.form.Static02.set_visible(true);
        };

        this.Div02_Button05_onmouseleave = function(obj,e)
        {
        	this.Div03.set_visible(false);
        	this.Div03.form.Static01.set_visible(false);
        	this.Div03.form.Static02.set_visible(false);
        };
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /*******************************************************************************
         * Function Name: fn_comCode
         * Description  : 필요한 공통 코드들을 데이터셋에 저장하는 함수
         ******************************************************************************/
        this.fn_comCode = function()
        {
        		var strSvcId = "comCode"; // Service ID
        		var strScvUrl = this.serviceURL + "select.jsp?keywords=comCode"; // URL
        		var strInDs = ""; //InputDataSet
        		var strOutDs = "gds_comCode=comCode"; // OutputDataSet
        		var strArg = ""; // Argument
        		var strCallBackFunc = "fn_Callback"; // CallBack Function
        		var bAsync = true; //Async
        		this.transaction(strSvcId, strScvUrl, strInDs, strOutDs, strArg, strCallBackFunc, bAsync);
        }

        /*******************************************************************************
         * Function Name: fn_Search
         * Description  : 학생 정보를 조회하기 위해 호출하는 함수
         * Arguments    : strNo : 학번, strNm : 이름
         ******************************************************************************/
        this.fn_Search = function()
        {
        		var strSvcId = "search"; // Service ID
        		var strScvUrl = this.serviceURL + "select.jsp?keywords=search"; // URL
        		var strInDs = ""; //InputDataSet
        		var strOutDs = "gds_stuInfo=UserInfo"; // OutputDataSet
        		var strArg = "strNo=" + this.Div00.form.Edit00.value + " strNm="+this.Div00.form.Edit01.value; // Argument
        		var strCallBackFunc = "fn_Callback"; // CallBack Function
        		var bAsync = true; //Async
        		this.transaction(strSvcId, strScvUrl, strInDs, strOutDs, strArg, strCallBackFunc, bAsync);
        }

        /*******************************************************************************
         * Function Name: fn_LectureSearch
         * Description  : 학생 수강신청 정보를 조회하기 위해 호출하는 함수
         * Arguments    : strNo : 학번
         ******************************************************************************/
        this.fn_LectureSearch = function()
        {
        	var strSvcId = "lecture"; // Service ID
        	var strScvUrl = this.serviceURL + "select.jsp?keywords=lecture"; // URL
        	var strInDs = ""; //InputDataSet
        	var strOutDs = "dsLectureInfo=Lecture"; // OutputDataSet
        	var strArg = "strNo=" +this.gds_stuInfo.getColumn(0, "STUDENT_NO"); // Argument
        	var strCallBackFunc = "fn_Callback"; // CallBack Function
        	var bAsync = true; //Async
        	this.transaction(strSvcId, strScvUrl, strInDs, strOutDs, strArg, strCallBackFunc, bAsync);
        }

        /*******************************************************************************
         * Function Name: fn_Save
         * Description  : 학생 정보 변경을 저장하기 위해 호출하는 함수
         * Arguments    :
        ******************************************************************************/
        this.fn_Save = function ()
        {
        	var strSvcId = "save"; // Service ID
        	var strScvUrl = this.serviceURL + "save.jsp?path=image"; // URL
        	var strInDs = "InputDs=gds_stuInfo:U InputLecDs=dsLectureInfo:U"; //InputDataSet
        	var strCallBackFunc = "fn_Callback"; // CallBack Function
        	var bAsync = true; //Async
        	this.transaction(strSvcId, strScvUrl, strInDs, "", "", strCallBackFunc, bAsync);
        };

        /*******************************************************************************
         * Function Name: fn_Callback
         * Description  : Transacion 통신 후 CallBack 함수
         * Arguments    : svcID : Service ID, errorCode : 에러코드, errorMsg : 에러메세지
         * Return       :
         ******************************************************************************/
        this.fn_Callback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		trace("errMsg :::" + errorMsg);
        		return false;
        	}else{
        		if(svcID == 'comCode')
        		{
        			var CampusDs = new Dataset();
        			this.gds_comCode.filter("CM_CODE == 'CAMPUS_CODE'");
        			CampusDs.copyData(this.gds_comCode, true);
        			this.Div01.form.Combo00.set_innerdataset(CampusDs);
        			this.Div01.form.Combo00.set_codecolumn("CD_CODE");
        			this.Div01.form.Combo00.set_datacolumn("CAPTION");

        			var AcadeMicDs = new Dataset();
        			this.gds_comCode.filter("CM_CODE == 'ACADEMIC_STATUS_CODE'");
        			AcadeMicDs.copyData(this.gds_comCode, true);
        			this.Div01.form.Combo01.set_innerdataset(AcadeMicDs);
        			this.Div01.form.Combo01.set_codecolumn("CD_CODE");
        			this.Div01.form.Combo01.set_datacolumn("CAPTION");

        		} else if(svcID == 'search')
        		{
        			var sArguments =
        			{
        				CheckUser : this.gds_stuInfo
        			};

        			if(this.gds_stuInfo.rowcount > 1)
        			{
        				this.commUtil.popup(this, "OpenPopup", "work::Popup.xfdl", -1, -1, 400, 400, true, false, false, sArguments, "fnPopupCallBack");
        			}
        			else if(this.gds_stuInfo.rowcount == 1)
        			{
        				this.fn_LectureSearch();
        			}
        			else if(this.gds_stuInfo.rowcount <= 0)
        			{
        				this.alert("조회된 데이터가 없습니다");
        				this.Div00.form.Edit00.set_value("");
        				this.Div00.form.Edit01.set_value("");
        			}
        		}else if (svcID == 'save')
        		{
        			this.alert("저장완료");
        			if(this.delFlag == 8)
        			{
        				this.gds_stuInfo.clearData();
        				this.reload();
        			}

        			 this.Div00.form.Edit00.set_value(this.gds_stuInfo.getColumn(0, "STUDENT_NO"));
        			 this.fn_Search();
        			 this.Div00.form.Edit01.set_value("");
        			 this.delFlag = 0;
        		}
        		else if(svcID == 'lecture')
        		{
        		this.Div00.form.Edit00.set_value("");
        		this.Div00.form.Edit01.set_value("");
        		this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.form.Combo00.set_enable(true);

        		this.gds_comCode.filter("");

        		var strDepCdData = this.gds_comCode.lookup("CD_CODE", this.gds_stuInfo.getColumn(0, "DEPARTMENT_CODE"), "CAPTION");
        		var strMajCdData = this.gds_comCode.lookup("CD_CODE", this.gds_stuInfo.getColumn(0, "MAJOR_CODE"), "CAPTION");
        		var strDiviCdData = this.gds_comCode.lookup("CD_CODE", this.gds_stuInfo.getColumn(0, "DIVIDE_CLASS_CODE"), "CAPTION");
        		this.Div01.form.Edit05.set_value(strDepCdData);
        		this.Div01.form.Edit07.set_value(strMajCdData);
        		this.Div01.form.Edit09.set_value(strDiviCdData);

        		if(this.fn_IsNull(this.gds_stuInfo.getColumn(0, "FILE_NAME")))
        		{
        			this.Div01.form.Div04.form.ImageViewer00.set_image(this.imageURL + "default.png");
        		}
        		else
        		{
        			this.Div01.form.Div04.form.ImageViewer00.set_image(this.imageURL + this.gds_stuInfo.getColumn(0, "FILE_NAME"));
        		}
        			this.Div01.form.Div04.form.staHelpMessage.set_text("");
        			this.Div01.form.Div04.form.ImageViewer00.set_border("none");
        		}
        	}
        };

        /*******************************************************************************
         * Function Name: fnPopupCallBack
         * Description  : Popup을 닫을 때 발생하는 Callback 함수
         * Arguments    : svcID : Popup ID, popupArg : close 시 부모 화면으로 넘기는 Argment
         ******************************************************************************/
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "OpenPopup" :
        			this.gds_stuInfo.loadXML(popupArg);
        			this.fn_LectureSearch();
        			break;
        	}
        }

        /*******************************************************************************
         * Function Name: fn_IsNull
         * Description  : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Arguments    : Val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return       : Boolean,  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         이외의 경우 = false
         ******************************************************************************/
        this.fn_IsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (Val == null)
        	{
        		return true;
        	}
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (Val.length == 0)
        	{
        		return true;
        	}
        	return false;
        }

        this.Div01_Div04_ondrop = function(obj,e)
        {
        	if (this.setImageFlag == "N") {
        		return false;
        	}
        };

        this.work01_ondrop = function(obj,e)
        {
        	if (this.setImageFlag == "N") {
        		return false;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.work01_onload,this);
            this.addEventHandler("ondrop",this.work01_ondrop,this);
            this.Div01.form.Div04.addEventHandler("ondrop",this.Div01_Div04_ondrop,this);
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.form.Div00.form.Combo00.addEventHandler("onitemchanged",this.Tab00_Tabpage1_Tab00_Tabpage1_Div00_Combo00_onitemchanged,this);
            this.Div02.form.Button00.addEventHandler("onclick",this.Div02_Button00_onclick,this);
            this.Div02.form.Button01.addEventHandler("onclick",this.Div02_Button01_onclick,this);
            this.Div02.form.Button02.addEventHandler("onclick",this.Div02_Button02_onclick,this);
            this.Div02.form.Button03.addEventHandler("onclick",this.Div02_Button03_onclick,this);
            this.Div02.form.Button04.addEventHandler("onclick",this.Div02_Button04_onclick,this);
            this.Div02.form.Button05.addEventHandler("onmouseenter",this.Div02_Button05_onmouseenter,this);
            this.Div02.form.Button05.addEventHandler("onmouseleave",this.Div02_Button05_onmouseleave,this);
            this.Div00.form.Edit00.addEventHandler("onkeydown",this.fn_searchEnter,this);
            this.Div00.form.Edit01.addEventHandler("onkeydown",this.fn_searchEnter,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };

        this.loadIncludeScript("work01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
