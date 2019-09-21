(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("zoom_test");
            this.set_titletext("간트차트 표현");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1462);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLine", this);
            obj._setContents("<ColumnInfo><Column id=\"line_area\" type=\"STRING\" size=\"256\"/><Column id=\"line_id\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"visible\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"line_area\">1</Col><Col id=\"line_id\">1</Col><Col id=\"title\">전로</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">1</Col><Col id=\"line_id\">1LD</Col><Col id=\"title\">1LD</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">1</Col><Col id=\"line_id\">2LD</Col><Col id=\"title\">2LD</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">1</Col><Col id=\"line_id\">3LD</Col><Col id=\"title\">3LD</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">1</Col><Col id=\"line_id\">4LD</Col><Col id=\"title\">4LD</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">1</Col><Col id=\"line_id\">5LD</Col><Col id=\"title\">5LD</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">2</Col><Col id=\"line_id\">2</Col><Col id=\"title\">2차정련</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">2</Col><Col id=\"line_id\">1RH</Col><Col id=\"title\">1RH</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">2</Col><Col id=\"line_id\">2RH</Col><Col id=\"title\">2RH</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">2</Col><Col id=\"line_id\">1LF</Col><Col id=\"title\">1LF</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">2</Col><Col id=\"line_id\">2LF</Col><Col id=\"title\">2LF</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">2</Col><Col id=\"line_id\">3RH</Col><Col id=\"title\">3RH</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">2</Col><Col id=\"line_id\">4RH</Col><Col id=\"title\">4RH</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">3</Col><Col id=\"line_id\">3</Col><Col id=\"title\">연주(C:40,H:233)</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">3</Col><Col id=\"line_id\">1M/C</Col><Col id=\"title\">1M/C</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">3</Col><Col id=\"line_id\">2M/C</Col><Col id=\"title\">2M/C</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">3</Col><Col id=\"line_id\">3M/C</Col><Col id=\"title\">3M/C</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">3</Col><Col id=\"line_id\">4M/C</Col><Col id=\"title\">4M/C</Col><Col id=\"visible\">1</Col></Row><Row><Col id=\"line_area\">3</Col><Col id=\"line_id\">5M/C</Col><Col id=\"title\">5M/C</Col><Col id=\"visible\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Main", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section1_part1", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section1_part2", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section1_part3", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section1_part4", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section1_part5", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section2_part1", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section2_part2", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section2_part3", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section2_part4", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section2_part5", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section2_part6", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section3_part1", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section3_part2", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section3_part3", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section3_part4", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Section3_part5", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"line_no\" type=\"STRING\" size=\"256\"/><Column id=\"prod_day\" type=\"STRING\" size=\"256\"/><Column id=\"prod_type\" type=\"STRING\" size=\"256\"/><Column id=\"btn_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"product\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"thickness\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_objList", this);
            obj._setContents("<ColumnInfo><Column id=\"obj\" type=\"STRING\" size=\"256\"/><Column id=\"objNm\" type=\"STRING\" size=\"256\"/><Column id=\"objLeft\" type=\"STRING\" size=\"256\"/><Column id=\"objTop\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ObjInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Cast번호</Col><Col id=\"CAPTION\">CH353 / 58분</Col></Row><Row><Col id=\"CODE\">Heaf번호</Col><Col id=\"CAPTION\">N40143</Col></Row><Row><Col id=\"CODE\">예정번호</Col><Col id=\"CAPTION\">MH8625</Col></Row><Row><Col id=\"CODE\">출강목표</Col><Col id=\"CAPTION\">C09920L5DC</Col></Row><Row><Col id=\"CODE\">상태</Col><Col id=\"CAPTION\">편성분</Col></Row><Row><Col id=\"CODE\">폭/기반</Col><Col id=\"CAPTION\">1030</Col></Row><Row><Col id=\"CODE\">주조개시</Col><Col id=\"CAPTION\">11일 20시 38분</Col></Row><Row><Col id=\"CODE\">주조완료</Col><Col id=\"CAPTION\">11일 21시 35분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ObjTotalInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">왼쪽</Col></Row><Row><Col id=\"CAPTION\">오른쪽</Col></Row><Row><Col id=\"CAPTION\">분리</Col></Row><Row><Col id=\"CAPTION\">연주 준비시간 변경</Col></Row><Row><Col id=\"CAPTION\">메모 등록</Col></Row><Row><Col id=\"CAPTION\">감변교환</Col></Row><Row><Col id=\"CAPTION\">재료교환</Col></Row><Row><Col id=\"CAPTION\">CAST선택</Col></Row><Row><Col id=\"CAPTION\">Heat 상세 정보 조회</Col></Row><Row><Col id=\"CAPTION\">Cast 상세 정보 조회</Col></Row><Row><Col id=\"CAPTION\">Cast 분석</Col></Row><Row><Col id=\"CAPTION\">선택초기화</Col></Row><Row><Col id=\"CAPTION\">다시 그리기 영역 표시</Col></Row><Row><Col id=\"CAPTION\">디버거</Col></Row><Row><Col id=\"CAPTION\">설정...</Col></Row><Row><Col id=\"CAPTION\">전역 설정...</Col></Row><Row><Col id=\"CAPTION\">Adobe Flash Player 12.0.0.38 정보...</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","78",null,"44","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#f6f6f6");
            obj.set_text("");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnIn",null,"130","30","30","45",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btnOut",null,"130","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToday","60","88","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("20190201");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt","10","168",null,"664","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_select","249","158","210","216",null,null,null,null,null,null,this.divGantt.form);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.divGantt.addChild(obj.name, obj);

            obj = new Grid("grd_select","0","0",null,null,"0","0",null,null,null,null,this.divGantt.form.pdiv_select.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsLine");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"60\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell text=\"bind:line_id\"/><Cell col=\"1\" text=\"bind:visible\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.divGantt.form.pdiv_select.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_select00","508","168","210","195",null,null,null,null,null,null,this.divGantt.form);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.divGantt.addChild(obj.name, obj);

            obj = new Grid("grd_ObjInfo","0","0","209","194",null,null,null,null,null,null,this.divGantt.form.pdiv_select00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_ObjInfo");
            obj.set_scrolltype("none");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CAPTION\"/></Band></Format></Formats>");
            this.divGantt.form.pdiv_select00.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_select01","780","72","211","412",null,null,null,null,null,null,this.divGantt.form);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.divGantt.addChild(obj.name, obj);

            obj = new Grid("grd_ObjInfo","0","0","209","410",null,null,null,null,null,null,this.divGantt.form.pdiv_select01.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_visible("true");
            obj.set_binddataset("ds_ObjTotalInfo");
            obj.set_background("(bottomatbottombottom,bottom,bottom) #ededed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CAPTION\"/></Band></Format></Formats>");
            this.divGantt.form.pdiv_select01.addChild(obj.name, obj);

            obj = new Button("search",null,"78","43","44","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","88","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","137","100","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("간트 렌더링 시간 : ");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","120","137","100","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ComponentCount","282","88","132","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var cmb_ComponentCount_innerdataset = new nexacro.NormalDataset("cmb_ComponentCount_innerdataset", obj);
            cmb_ComponentCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">50개</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">100개</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">150개</Col></Row></Rows>");
            obj.set_innerdataset(cmb_ComponentCount_innerdataset);
            obj.set_text("150개");
            obj.set_value("15");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","192","88","78","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("컴포넌트 개수");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph01","202","832",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_border("1px solid #c7c7c7");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B","10","832","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("B옆면");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C","10","987","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("C옆면");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2","10","1297","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2후판");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1","10","1142","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("1후판");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph03","202","1142",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph02","202","987",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph04","202","1297",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Width","74","832","56","83",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Width_Val","130","832","72","83",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Roll","74","958","128","29",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Thick","74","915","56","43",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Thick_Val","130","915","72","43",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Roll","74","1113","128","29",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Thick_Val","130","1070","72","43",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Thick","74","1070","56","43",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Width","74","987","56","83",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Width_Val","130","987","72","83",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Roll","74","1276","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Thick_Val","130","1209","72","35",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Thick","74","1209","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Width","74","1142","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Width_Val","130","1142","72","67",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Roll","74","1431","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Thick_Val","130","1364","72","35",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Thick","74","1364","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Width","74","1297","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Width_Val","130","1297","72","67",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_SlabThick_Val","130","1399","72","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_SlabThick","74","1399","56","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Slab두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_SlabThick_Val","130","1244","72","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_SlabThick","74","1244","56","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Slab두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","10",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("간트차트 표현");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","44",null,"34","266",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("간트차트 영역에서 마우스 오버 시, 해당되는 객체끼리 선이 연결됩니다. 추가적으로 객체를 클릭하거나 마우스 우클릭 시 팝업창이 열립니다.");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1462,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PoC_3.xfdl","lib::comLib_Comm.xjs");
        this.addIncludeScript("PoC_3.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("PoC_3.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("PoC_3.xfdl", function() {
        this.executeIncludeScript("lib::comLib_Comm.xjs"); /*include "lib::comLib_Comm.xjs"*/;
        this.executeIncludeScript("lib::CommUtil.xjs"); /*include "lib::CommUtil.xjs"*/;
        this.executeIncludeScript("lib::ext_CommEco.xjs"); /*include "lib::ext_CommEco.xjs"*/;
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //화면 1본
        this.dayWidth = 25;
        this.baseDay;
        this.diffDays;

        this.nMonthTop	= 0;
        this.nWeekTop	= 25;
        this.nDayTop	= 50;
        this.nScheduleLeft, this.nScheduleWidth;
        this.nScheduleHeight = 30;

        this.arrWeek = new Array();
        this.arrMonth = new Array();
        this.arrSelectSedules = new Array();

        this.fv_clickPointX;
        this.fv_clickPointY;
        this.fv_objDrag;

        this.fv_InitFlag = 0;
        this.fv_CmbFlag = 0;

        //Random Position
        this.aryMonthInfo = ["201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909", "201910", "201911", "201912"];
        this.aryMonthDayInfo = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

        //Section (전로, 2차정련, 연주)
        this.arrTopFirstSection = new Array("#c1c1c1","#bef87c","#f7c153","#fab7fa","#f6f687");
        this.arrTopSecondSection = new Array("#c1c1c1","#53bef7");
        this.arrTopThirdSection = new Array("#c1c1c1","#f5be18","#cea3f9","#f786f6","#83f18c");

        //enterObj, toSecondObj, toThirdObj Key값 생성.
        this.arr_1_SectionType = ["1LD", "2LD", "3LD", "4LD", "5LD"];
        this.arr_2_SectionType = ["1RH", "2RH", "1LF", "2LF", "3RH", "4RH"];
        this.arr_3_SectionType = ["1M/C", "2M/C", "3M/C", "4M/C", "5M/C"];

        this.this_onload = function(obj,e)
        {
        	this.fnFormInit();

        	//화면 1본
        	//Static Component Maximum 2400 Settings
        	this.fnPosRandom();
        	this.set_formInit();

        	//화면 2본
        	//Static Component Maximum 1200 Settings
        	this.initGantt();
        	this.fnSetPosGraph();
        	this.fnSetObjInfo();
        };

        this.fnFormInit = function()
        {
        	this.baseDay = this.calToday.value;
        };

        this.fnSetStatic = function(objDs, nType, compLimit)
        {
        	var nIndex = 0 , nCnt = 0 , nTotal = 0;

        	for(var i=1; i<11; i++) //Calendar Component의 월부터 nDiffDay를 조정하여 Static Component의 개수가 2400이 되도록 i값 범위 조정.
        	{
        		var aryCheck = new Array();
        		var aryMatrix = new Array();

        		while(true)
        		{
        			if(aryCheck[nIndex] > 0)
        			{
        				nIndex = Math.floor(Math.random() * (this.aryMonthDayInfo[i] - 1)) + 1;
        			}
        			else
        			{
        				aryCheck[nIndex] = 1;
        				aryMatrix.push(this.aryMonthInfo[i] + this.gfn_lPad(nIndex, "0", 2));
        				nCnt++;
        			}

        			if(nCnt > compLimit)
        				break;
        		}

        		nCnt = 0;
        		aryMatrix.sort();

        		for(var j=1, jL=aryMatrix.length; j<jL; j++)
        		{
        			var nRow = objDs.addRow();
        			objDs.setColumn(nRow, "line_no", nType);
        			objDs.setColumn(nRow, "prod_day", aryMatrix[j]);
        			objDs.setColumn(nRow, "prod_type", "A" + this.gfn_lPad(++nTotal, "00", 2));
        		}
        	}
        };

        this.fnPosRandom = function()
        {
        	//Max Limit : Static / 150
        	this.fnSetStatic(this.ds_Section1_part1, "1LD", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section1_part2, "2LD", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section1_part3, "3LD", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section1_part4, "4LD", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section1_part5, "5LD", this.cmb_ComponentCount.value);

        	this.fnSetStatic(this.ds_Section2_part1, "1RH", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section2_part2, "2RH", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section2_part3, "1LF", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section2_part4, "2LF", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section2_part5, "3RH", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section2_part6, "4RH", this.cmb_ComponentCount.value);

        	this.fnSetStatic(this.ds_Section3_part1, "1M/C", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section3_part2, "2M/C", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section3_part3, "3M/C", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section3_part4, "4M/C", this.cmb_ComponentCount.value);
        	this.fnSetStatic(this.ds_Section3_part5, "5M/C", this.cmb_ComponentCount.value);

        	this.ds_Main.appendData(this.ds_Section1_part1);
        	this.ds_Main.appendData(this.ds_Section1_part2);
        	this.ds_Main.appendData(this.ds_Section1_part3);
        	this.ds_Main.appendData(this.ds_Section1_part4);
        	this.ds_Main.appendData(this.ds_Section1_part5);

        	this.ds_Main.appendData(this.ds_Section2_part1);
        	this.ds_Main.appendData(this.ds_Section2_part2);
        	this.ds_Main.appendData(this.ds_Section2_part3);
        	this.ds_Main.appendData(this.ds_Section2_part4);
        	this.ds_Main.appendData(this.ds_Section2_part5);
        	this.ds_Main.appendData(this.ds_Section2_part6);

        	this.ds_Main.appendData(this.ds_Section3_part1);
        	this.ds_Main.appendData(this.ds_Section3_part2);
        	this.ds_Main.appendData(this.ds_Section3_part3);
        	this.ds_Main.appendData(this.ds_Section3_part4);
        	this.ds_Main.appendData(this.ds_Section3_part5);

        	this.dsSchedule.assign(this.ds_Main);
        };

        this.fnSetInit = function()
        {
        	//Static Position 재조정
        	this.ds_Section1_part1.clearData();
        	this.ds_Section1_part2.clearData();
        	this.ds_Section1_part3.clearData();
        	this.ds_Section1_part4.clearData();
        	this.ds_Section1_part5.clearData();
        	this.ds_Section2_part1.clearData();
        	this.ds_Section2_part2.clearData();
        	this.ds_Section2_part3.clearData();
        	this.ds_Section2_part4.clearData();
        	this.ds_Section2_part5.clearData();
        	this.ds_Section2_part6.clearData();
        	this.ds_Section3_part1.clearData();
        	this.ds_Section3_part2.clearData();
        	this.ds_Section3_part3.clearData();
        	this.ds_Section3_part4.clearData();
        	this.ds_Section3_part5.clearData();
        	this.ds_Main.clearData();

        	//Static Components delete
        	for(var i=0; i<this.dsSchedule.rowcount; i++)
        	{
        		var lineNo		= this.dsSchedule.getColumn(i, "line_no");
        		var orderDay	= this.dsSchedule.getColumn(i, "prod_day");
        		var orderType	= this.dsSchedule.getColumn(i, "prod_type");

        		var strBtnId = "objSchedule_" + lineNo + "_" + orderDay + "_" + orderType;

        		var obj = this.divGantt.form.components[strBtnId];
        		obj.destroy();
        	}
        };

        this.btnZoom_onclick = function(obj,e)
        {
        	//zoom in out
        	var st = new Date();

        	if(obj.name == "btnIn")
        	{
        		if(this.dayWidth > 25)
        		{
        			this.dayWidth -= 25;
        		}
        	}
        	else if(obj.name == "btnOut")
        	{
        		if(this.dayWidth < 150)
        		{
        			this.dayWidth += 25;
        		}
        	}

        	this.set_ganttSize();

        	var ed = new Date();
        	this.Static01.set_text((ed - st) / 1000 + " 초");
        };

        this.Button02_onclick = function(obj, e)
        {
        	this.cmb_ComponentCount.set_enable(true);

        	//화면 1본
        	if(this.fv_InitFlag == 1)
        	{
        		this.fnSetInit();
        		this.fnPosRandom();
        	}

        	var st = new Date();
        	this.set_Schedules(); //Static Button 생성
        	var ed = new Date();
        	this.Static01.set_text((ed - st) / 1000 + " 초");

        	//화면 2본
        	this.set_Schedules_Graph();
        };

        this.set_formInit = function()
        {
        	//orderTitle create
        	var strStaticText = this.calToday.value;
        	var strYear = strStaticText.substr(0,4);
        	var strMonth = strStaticText.substr(4,2);
        	var strDay = strStaticText.substr(6,2);
        	strStaticText = strYear + "." + strMonth + "." + strDay;

        	var strStaticId = "stOrderTitle";

        	var objStatic;
        	objStatic = new Static();
        	objStatic.init(strStaticId, 0, 0, 150, 75);
        	objStatic.set_cssclass("sta_WF_box01L");
        	objStatic.set_text(strStaticText);

        	this.divGantt.addChild(strStaticId, objStatic);
        	objStatic.show();

        	strStaticText = null;
        	strStaticId = null;
        	objStatic	= null;

        	this.nScheduleLeft = 150;

        	//월, 주, 일 title 생성
        	var diffMonth = this.gfn_addMonth(this.baseDay, 10); //Row당 Static의 최대치는 150개 조정.
        	var nDiffDay  = this.gfn_getDiffDay(this.baseDay, diffMonth) - 1;

        	var objAddDate;
        	var curtWeek  = this.getWeekOfYear(this.baseDay);
        	var endWeek	  = this.getWeekOfYear(diffMonth);

        	var weekStartDay = this.baseDay;
        	var weekEndDay;

        	var nArr = 0;
        	var nArr2 = 0;

        	var nCurMonth = this.gfn_getYearMonth(weekStartDay);

        	this.arrWeek.push({week:curtWeek, startDay:weekStartDay, endDay:weekStartDay});
        	this.arrMonth.push({month:nCurMonth, startDay:weekStartDay, endDay:weekStartDay});

        	var nDayLeft, nDayTop, nDayWidth, nDayHeight;

        	nDayTop = this.nDayTop;
        	nDayHeight = 25;
        	nDayWidth  = this.dayWidth;
        	nDayLeft   = this.nScheduleLeft;

        	this.diffDays = nDiffDay;

        	//일별 그리기
        	for(var i=0; i<nDiffDay; i++)
        	{
        		objAddDate = this.gfn_addDate(this.baseDay, i);

        		strStaticId = "stDay_" + objAddDate;
        		strStaticText = objAddDate.substr(6,2);

        		objStatic = new Static();
        		objStatic.init(strStaticId, nDayLeft, nDayTop, nDayWidth, nDayHeight);
        		objStatic.set_cssclass("sta_WF_box01L");
        		objStatic.set_text(strStaticText);

        		this.divGantt.addChild(strStaticId, objStatic);
        		objStatic.show();

        		//getWeekOfYear : 해당일에 대한 주차를 구하는 메소드
        		if(curtWeek == this.getWeekOfYear(objAddDate))
        		{
        			this.arrWeek[nArr].endDay = objAddDate;
        		}
        		else
        		{
        			curtWeek ++;
        			this.arrWeek.push({week:curtWeek,startDay:objAddDate,endDay:objAddDate});
        			nArr++;
        		}

        		if(nCurMonth == this.gfn_getYearMonth(objAddDate))
        		{
        			this.arrMonth[nArr2].endDay = objAddDate;
        		}
        		else
        		{
        			nCurMonth = this.gfn_getYearMonth(objAddDate);
        			this.arrMonth.push({month:nCurMonth,startDay:objAddDate,endDay:objAddDate});
        			nArr2++;
        		}

        		nDayLeft = nDayLeft + nDayWidth;

        		if(i == (nDiffDay-1))
        		{
        			//마지막일 경우 간트차트가 나타나게 될 일정 div의 최종 width를 구해야함
        			this.nScheduleWidth = objStatic.getOffsetLeft() + objStatic.getOffsetWidth() - this.nScheduleLeft;
        		}
        	}

        	strStaticText = null;
        	strStaticId = null;
        	objStatic	= null;

        	var objWeek;
        	var objTemp;

        	var nWeekLeft, nWeekTop, nWeekWidth, nWeekHeight;
        	nWeekTop = this.nWeekTop;
        	nWeekHeight = 25;

        	//주차별 그리기
        	for(var i=0; i<this.arrWeek.length; i++)
        	{
        		objWeek = this.arrWeek[i];
        		strStaticId = "stWeek_" + objWeek.week;
        		strStaticText = "Wk " + this.gfn_lPad(objWeek.week,"0",2);

        		objTemp = this.divGantt.form.components["stDay_" + objWeek.startDay];
        		nWeekLeft = objTemp.getOffsetLeft();

        		objTemp = this.divGantt.form.components["stDay_" + objWeek.endDay];

        		nWeekWidth = objTemp.getOffsetLeft() + objTemp.getOffsetWidth() - nWeekLeft;

        		objStatic = new Static();
        		objStatic.init(strStaticId,nWeekLeft,nWeekTop,nWeekWidth,nWeekHeight);
        		objStatic.set_cssclass("sta_WF_box01L");
        		objStatic.set_text(strStaticText);
        		objStatic.startDay = objWeek.startDay;
        		objStatic.endDay = objWeek.endDay;

        		this.divGantt.addChild(strStaticId,objStatic);
        		objStatic.show();
        	}

        	objTemp = null;
        	var objMonth;
        	var nMonthLeft, nMonthTop, nMonthWidth, nMonthHeight;
        	nMonthTop = this.nMonthTop;
        	nMonthHeight = 25;

        	//월별 그리기
        	for(var i=0; i<this.arrMonth.length; i++)
        	{
        		objMonth = this.arrMonth[i];
        		strStaticId = "stMonth_" + objMonth.month;
        		strStaticText = " " +  objMonth.month;

        		objTemp = this.divGantt.form.components["stDay_" + objMonth.startDay];
        		nMonthLeft = objTemp.getOffsetLeft();

        		objTemp = this.divGantt.form.components["stDay_" + objMonth.endDay];
        		nMonthWidth = objTemp.getOffsetLeft() + objTemp.getOffsetWidth() - nMonthLeft;

        		objStatic = new Static();
        		objStatic.init(strStaticId, nMonthLeft, nMonthTop, nMonthWidth, nMonthHeight);
        		objStatic.set_cssclass("sta_WF_box01L");
        		objStatic.set_text(strStaticText);
        		objStatic.startDay = objMonth.startDay;
        		objStatic.endDay = objMonth.endDay;

        		this.divGantt.addChild(strStaticId, objStatic);
        		objStatic.show();
        	}

        	this.set_createDiv();
        };

        this.set_createDiv = function()
        {
        	var nTop = 75;
        	var nWidth = this.nScheduleLeft + this.nScheduleWidth;
        	var nHeight = this.nScheduleHeight;
        	var nnRight;

        	var strStaticText;
        	var strStaticId;
        	var objDiv = this.divGantt;
        	var objStatic;
        	var strStaticClass = "sta_WF_Text";

        	var lineNo;
        	var objButton, strButtonId;

        	for(var i=0; i<this.dsLine.getRowCount(); i++)
        	{
        		lineNo = this.dsLine.getColumn(i, "line_id");

        		if(lineNo < 10)
        		{
        			if(lineNo == 2)
        			{
        				strStaticClass = "sta_WF_box02";
        			}
        			else if(lineNo == 3)
        			{
        				strStaticClass = "sta_WF_box03";
        			}
        			else if(lineNo == 1)
        			{
        				strStaticClass = "sta_WF_box01";
        			}
        			nWidth = this.nScheduleLeft + this.nScheduleWidth;
        		}
        		else
        		{
        			nRight = null;
        			nWidth = 150;

        			strStaticClass = "sta_WF_box01L";

        			if(lineNo == "1LD" || lineNo == "2LD" || lineNo == "3LD" || lineNo == "4LD" || lineNo == "5LD")
        			{
        				strStaticClass = "sta_WF_box01_1LD";
        			}
        			else if(lineNo == "1RH" || lineNo == "2RH" || lineNo == "1LF" || lineNo == "2LF" || lineNo == "3RH" || lineNo == "4RH")
        			{
        				strStaticClass = "sta_WF_box01_RH";
        			}
        			else if(lineNo == "1M/C" )
        			{
        				strStaticClass = "sta_WF_box01_1MC";
        			}
        			else if(lineNo == "2M/C" )
        			{
        				strStaticClass = "sta_WF_box01_2MC";
        			}
        			else if(lineNo == "3M/C" )
        			{
        				strStaticClass = "sta_WF_box01_3MC";
        			}
        			else if(lineNo == "4M/C" )
        			{
        				strStaticClass = "sta_WF_box01_4MC";
        			}
        			else if(lineNo == "5M/C" )
        			{
        				strStaticClass = "sta_WF_box01_5MC";
        			}
        			else
        			{
        				strStaticClass = "sta_WF_box01L";
        			}

        			strStaticId = "line_" + lineNo;

        			objStatic = new Static();
        			objStatic.init(strStaticId, this.nScheduleLeft, nTop, this.nScheduleWidth, this.nScheduleHeight);
        			objStatic.set_cssclass("sta_WF_box03L");
        			objDiv.addChild(strStaticId, objStatic);
        			//objStatic.show();
        		}

        		strStaticId = "staLine_" + lineNo;
        		strStaticText = this.dsLine.getColumn(i,"title");
        		objStatic = new Static();
        		objStatic.init(strStaticId, 0, nTop, nWidth, this.nScheduleHeight);
        		objStatic.set_cssclass(strStaticClass);
        		objStatic.set_text(strStaticText);
        		objDiv.addChild(strStaticId, objStatic);
        		objStatic.show();

        		if(lineNo < 10)
        		{
        			strButtonId	   = "btnSelect_"+ lineNo;
        			objButton = new Button();
        			objButton.init(strButtonId,130,nTop,20,this.nScheduleHeight);
        			//objButton.set_cssclass("btn_WF_ganttFilter");
        			objButton.set_text("▼");
        			objButton.lineNo = lineNo;
        			objButton.addEventHandler("onclick",this.btnSelect_onclick,this);

        			objDiv.addChild(strButtonId,objButton);
        			objButton.show();
        		}
        		nTop += nHeight;
        	}
        	this.divGantt.form.resetScroll();
        };

        this.set_ganttSize = function()
        {
        	var nLeft = this.nScheduleLeft;
        	var nHeight = 25;
        	var nWidth;
        	var objAddDate;
        	var strStaticId, objStatic;

        	for(var i=0; i<this.diffDays; i++)
        	{
        		objAddDate = this.gfn_addDate(this.baseDay,i);
        		strStaticId = "stDay_" + objAddDate;

        		objStatic = this.divGantt.form.components[strStaticId];
        		objStatic.move(nLeft,this.nDayTop,this.dayWidth,nHeight);

        		nLeft += this.dayWidth;

        		if(i==(this.diffDays-1))
        		{
        			this.nScheduleWidth = objStatic.getOffsetLeft() + objStatic.getOffsetWidth() - this.nScheduleLeft;
        		}
        	}

        	var objTemp;

        	for(var i=0; i<this.arrWeek.length;i++)
        	{
        		objTemp = this.arrWeek[i];

        		objStatic = this.divGantt.form.components["stDay_"+objTemp.startDay];
        		nLeft = objStatic.getOffsetLeft();

        		objStatic = this.divGantt.form.components["stDay_"+objTemp.endDay];
        		nWidth = objStatic.getOffsetLeft() + objStatic.getOffsetWidth() - nLeft;

        		strStaticId = "stWeek_" + objTemp.week;
        		objStatic = this.divGantt.form.components[strStaticId];
        		objStatic.move(nLeft,this.nWeekTop,nWidth,nHeight);
        	}

        	for(var i=0; i<this.arrMonth.length; i++)
        	{
        		objTemp = this.arrMonth[i];

        		objStatic = this.divGantt.form.components["stDay_"+objTemp.startDay];
        		nLeft = objStatic.getOffsetLeft();

        		objStatic = this.divGantt.form.components["stDay_"+objTemp.endDay];
        		nWidth = objStatic.getOffsetLeft() + objStatic.getOffsetWidth() - nLeft;

        		strStaticId = "stMonth_" + objTemp.month;
        		objStatic = this.divGantt.form.components[strStaticId];
        		objStatic.move(nLeft,this.nMonthTop,nWidth,nHeight);
        	}

        	var strLineNo;

        	for(var i=0; i<this.dsLine.getRowCount(); i++)
        	{
        		strLineNo = this.dsLine.getColumn(i,"line_id");

        		if(strLineNo == 1 || strLineNo == 2 || strLineNo == 3)
        		{
        			nWidth = this.nScheduleLeft + this.nScheduleWidth;
        			strStaticId = "staLine_"
        		}
        		else
        		{
        			nWidth = this.nScheduleWidth;
        			strStaticId = "line_";
        		}
        		objStatic = this.divGantt.form.components[strStaticId+strLineNo];
        		objStatic.setOffsetWidth(nWidth);
        	}

        	this.set_scheduleSize();

        	this.divGantt.form.resetScroll();
        };

        this.set_scheduleSize = function ()
        {

        	var lineNo, orderDay, orderType;
        	var strBtnId, objStatic, objButton;
        	var nLeft, nTop, nWidth, nHeight;

        	for(var i=0; i<this.dsSchedule.getRowCount(); i++)
        	{
        		lineNo		= this.dsSchedule.getColumn(i,"line_no");
        		orderDay	= this.dsSchedule.getColumn(i,"prod_day");
        		orderType	= this.dsSchedule.getColumn(i,"prod_type");

        		strBtnId = this.dsSchedule.getColumn(i,"btn_id");;
        		objButton = this.divGantt.form.components[strBtnId];

        		objStatic = this.divGantt.form.components["stDay_" + orderDay];
        		nLeft	= objStatic.getOffsetLeft();

        		objStatic = this.divGantt.form.components["staLine_" + lineNo];
        		nTop	= objStatic.getOffsetTop();
        		nWidth	= this.dayWidth;
        		nHeight	= this.nScheduleHeight;

        		objButton.move(nLeft, nTop, nWidth, nHeight);

        		if(objStatic.visible)
        		{
        			objButton.set_visible(true);
        		}
        		else
        		{
        			objButton.set_visible(false);
        		}
        	}
        };

        this.set_Schedules = function()
        {
        	var nLeft, nWidth, nTop, nHeight;
        	var lineNo, orderDay, orderType;
        	var objStatic, strStaticName, objParent;
        	var strBtnId;
        	this.fv_InitFlag = 1;

        	for(var i=0; i<this.dsSchedule.getRowCount(); i++)
        	{
        		lineNo		= this.dsSchedule.getColumn(i,"line_no");
        		orderDay	= this.dsSchedule.getColumn(i,"prod_day");
        		orderType	= this.dsSchedule.getColumn(i,"prod_type");

        		objParent	= this.divGantt.form.components["line_" + lineNo];
        		objStatic	= this.divGantt.form.components["stDay_" + orderDay];

        		nLeft	= objStatic.getOffsetLeft();
        		nWidth	= objStatic.getOffsetWidth();
        		nTop	= objParent.getOffsetTop();
        		nHeight	= this.nScheduleHeight;

        		strBtnId = "objSchedule_" + lineNo + "_" + orderDay + "_" + orderType;

        		this.dsSchedule.setColumn(i, "btn_id", strBtnId);

        		var objButton = new Button();
        		objButton.init(strBtnId, nLeft, nTop, nWidth, nHeight);
        		objButton.set_text(i + 1);

        		//랜덤함수 다시 짤 것.
        		var nIndex = Math.floor(Math.random() * (5)-1) + 1;
        		var nIndex2 = Math.floor(Math.random() * (2)-1) + 1;
        		var nIndex3 = Math.floor(Math.random() * (5)-1) + 1;

        		var sType = this.dsSchedule.getColumn(i, "line_no");
        		var strBackgroundColor = "";

        		//전로
        		if(sType == "1LD" || sType == "2LD" || sType == "3LD" || sType == "4LD" || sType == "5LD")
        		{
        			strBackgroundColor = this.arrTopFirstSection[nIndex];
        		}
        		//2차정련
        		else if(sType == "1RH" || sType == "2RH" || sType == "1LF" || sType == "2LF" || sType == "3RH" || sType == "4RH")
        		{
        			strBackgroundColor = this.arrTopSecondSection[nIndex2];
        		}
        		//연주
        		else if(sType == "1M/C" || sType == "2M/C" || sType == "3M/C" || sType == "4M/C" || sType == "5M/C")
        		{
        			strBackgroundColor = this.arrTopThirdSection[nIndex3];
        		}

        		objButton.set_background(strBackgroundColor);

        		if(!objParent.visible)
        		{
        			objButton.set_visible(false);
        		}

        		//mouse cursor 및 drag&drop 사용을 위한 event 설정
        		objButton.addEventHandler("ondrag", this.btn_ondrag, this);
        		objButton.addEventHandler("onmouseenter", this.Button00_onmouseenter, this);
        		objButton.addEventHandler("onmouseleave", this.Button00_onmouseleave, this);
        		objButton.addEventHandler("onclick", this.Button00_onmouseonclick, this);

        		this.divGantt.addChild(strBtnId, objButton);

        		objButton.show();
        		objButton.lineNo = lineNo;
        		objButton.orderDay	= orderDay;
        		objButton.orderType	= orderType;
        	}
        };

        this.btn_ondrag = function(obj, e)
        {
        	//타일내 클릭 좌표값
        	obj.bringToFront();
        	var objParentDiv = obj.parent.parent;
        	this.fv_clickPointX = e.canvasx ;
        	this.fv_clickPointY = e.canvasy ;

        	//클릭된 타일 컴포넌트 지정
        	this.fv_objDrag = obj;
        	return true;
        };

        this.Button00_onmouseleave = function(obj, e)
        {
        	// 동적 생성 Button 초기화
        	if(this.arrKeyObj.length > 0)
        	{
        		for(var i=0; i<this.arrKeyObj.length; i++)
        		{
        			strSelectBtnId = this.arrKeyObj[i];
        			objSelectBtn = this.divGantt.form.components[strSelectBtnId];
        			objSelectBtn.set_cssclass("");
        			objSelectBtn.set_background(this.arrSelectSedulesColor[i]);
        		}
        	}

        	// Canvas 초기화 (divGantt영역에서의)
        	for (var i = 0; i < this.divGantt.form.components.length; i++)
        	{
        		if (this.divGantt.form.all[i] == "[object CanvasComp]")
        		{
        			//trace(i + " :: " + this.divGantt.form.all[i].name);
        			var objName = this.divGantt.form.all[i].name;
        			this.divGantt.form.removeChild(objName);
        			i--;
        		}
        	}

        	// Canvas 초기화 (this.form영역에서의)
        	for (var i = this.components.length - 1; i >= 0; i--)
        	{
        		if (this.components[i] == "[object CanvasComp]")
        		{
        			//trace(i + " :: " + this.all[i].name);
        			var objComp = this.removeChild(this.components[i].name);
        			objComp.destroy();
        		}
        	}
        };

        this.fnSetLastLineTo = function(selectedObj)
        {
        	//divGantt.form에 Canvas를 그리는 것이 아니라 form에 Canvas를 그리는 것이기 때문에, 가변 변수로 위치 조정이 필요함. (하드 코딩으로 조정.)
        	var nInterval = 0;

        	var strSelectBtnId = selectedObj;

        	var strStandard = "B" + this.ds_list.getColumn(this.ds_list.rowcount-8, "product"); //B영역의 Basic Graph Static Component에서 끝에서 8번째 Component를 기준.
        	var objSelectBtn = this.divGantt.form.components[strSelectBtnId];
        	var objStandardBtn = this.divGantt_Graph02.form.components[strStandard];

        	var strNextBtnId;

        	if(objSelectBtn.left < objStandardBtn.left) //bReverse(true)
        	{
        		strNextBtnId = "B" + this.ds_list.getColumn(this.ds_list.rowcount-1, "product");
        		nInterval = 10;
        	}
        	else if(objSelectBtn.left > objStandardBtn.left) //bReverse(false)
        	{
        		strNextBtnId = "B" + this.ds_list.getColumn(this.ds_list.rowcount-8, "product");
        		nInterval = 205;
        	}

        	var objNextBtn = this.divGantt_Graph02.form.components[strNextBtnId];

        	var id, canvasLeft, canvasTop, width, height, x1, x2, y1, y2, bReverse

        	id = "canvasLine_" + strSelectBtnId;
        	width = (objNextBtn.left >= objSelectBtn.left) ? (objNextBtn.left + objNextBtn.width + 194 - objSelectBtn.left) : (objSelectBtn.left + objSelectBtn.width - objNextBtn.left - 194);
        	height = (this.divGantt.getOffsetHeight() - objSelectBtn.top + objSelectBtn.getOffsetHeight()) + this.divGantt_Graph01.getOffsetHeight();

        // 			trace("objNextBtn.top : " + objNextBtn.top + "\n" + "objSelectBtn.top : "
        // 			+ objSelectBtn.top + "\n" + "objSelectBtn.height : " + objSelectBtn.height);

        	var bReverse = (objNextBtn.left < objSelectBtn.left);

        	if (bReverse)
        	{
        		canvasLeft = objNextBtn.left;
        		canvasTop = objSelectBtn.top + objSelectBtn.height;
        	}
        	else
        	{
        		canvasLeft = objSelectBtn.left;
        		canvasTop = objSelectBtn.top + objSelectBtn.height;
        	}

        	var objCanvas = new nexacro.CanvasComponent();

        // 			trace("id : " + id + "\n" + "width : " + width + "\n" + "height : " + height
        // 				   + "\n" + "canvasLeft : " + canvasLeft + "\n" + "canvasTop" + canvasTop);

        	//objCanvas 생성
        	objCanvas.init(id, canvasLeft + nInterval, objSelectBtn.top + objSelectBtn.height + 152, width, height + 9);
        	objCanvas.addEventHandler("onclick", this.canvas_onclick, this);
        	this.addChild(id, objCanvas);
        	objCanvas.show();
        	//objCanvas.set_border("1px solid");

        	//좌표
        	var canvasContext = objCanvas._canvas;
        	var nAdd=5, nCnt=1, nMultiple=1;

        	x1 = bReverse ? canvasContext.width - objSelectBtn.width : objSelectBtn.width;
        	y1 = 16;
        	x2 = bReverse ? objSelectBtn.width - 5 : canvasContext.width - objSelectBtn.width;
        	y2 = canvasContext.height;

        	canvasContext.setElementStrokeStyle("black");
        	canvasContext.setElementLineWidth(1);
        	canvasContext.beginPath(); //새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.

        	while(nCnt <= 5)
        	{
        		if(bReverse)
        		{
        			if(nCnt==1)
        			{
        				canvasContext.moveTo(x1, y1); //펜을 x1와 y1로 지정된 좌표로 옮깁니다.
        				canvasContext.lineTo(x2, y2); //현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        			}
        			else
        			{
        				canvasContext.moveTo(x1, y1); //펜을 x1와 y1로 지정된 좌표로 옮깁니다.
        				canvasContext.lineTo(x2-(nAdd*nMultiple++), y2); //현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        			}
        		}
        		else
        		{
        			if(nCnt==1)
        			{
        				canvasContext.moveTo(x1, y1); //펜을 x1와 y1로 지정된 좌표로 옮깁니다.
        				canvasContext.lineTo(x2, y2); //현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        			}
        			else
        			{
        				canvasContext.moveTo(x1, y1); //펜을 x1와 y1로 지정된 좌표로 옮깁니다.
        				canvasContext.lineTo(x2+(nAdd*nMultiple++), y2); //현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.
        			}
        		}
        		nCnt++;
        	}

        	canvasContext.closePath(); //현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
        	canvasContext.stroke(); //윤곽선을 이용하여 도형을 그립니다.
        	canvasContext.save(); //canvasContext에 대한 정보 저장합니다.
        };

        this.fnSetLineTo = function(enterObj, toSecondObj, toThirdObj)
        {
        	this.arrKeyObj = new Array();
        	this.arrSelectSedulesColor = new Array();

        	for(var i=0; i<this.dsSchedule.getRowCount(); i++)
        	{
        		lineNo		= this.dsSchedule.getColumn(i, "line_no");
        		orderDay	= this.dsSchedule.getColumn(i, "prod_day");
        		orderType	= this.dsSchedule.getColumn(i, "prod_type");

        		strSelectBtnId = this.dsSchedule.getColumn(i, "btn_id");

        		if (this.dsSchedule.getColumn(i, "line_no") != enterObj
        			&& this.dsSchedule.getColumn(i, "line_no") != toSecondObj
        			&& this.dsSchedule.getColumn(i, "line_no") != toThirdObj) {
        			continue;
        		}
        		else
        		{
        			var strBtnId = "objSchedule_" + lineNo + "_" + orderDay + "_" + orderType;
        			var objSelectBtn = this.divGantt.form.components[strBtnId];

        			//arrKeyObj : enterObj, toSecondObj, toThirdObj Object Info
        			this.arrKeyObj.push(strBtnId);
        			this.arrSelectSedulesColor.push(objSelectBtn.background);

        			objSelectBtn.set_background("");
        			objSelectBtn.set_cssclass("btn_WF_gantt03");
        		}
        	}

        	for(var i=0; i<this.arrKeyObj.length; i++)
        	{
        		if(i != this.arrKeyObj.length-1)
        		{
        			var strSelectBtnId = this.arrKeyObj[i];
        			var strNextBtnId = this.arrKeyObj[i+1];

        			var objSelectBtn = this.divGantt.form.components[strSelectBtnId];
        			var objNextBtn = this.divGantt.form.components[strNextBtnId];

        			var canvasLeft, canvasTop, x1, x2, y1, y2;

        			var id = "canvasLine_" + strSelectBtnId;

        			var width = (objNextBtn.left >= objSelectBtn.left) ? (objNextBtn.left + objNextBtn.width - objSelectBtn.left) : (objSelectBtn.left + objSelectBtn.width - objNextBtn.left);
        			var height = objNextBtn.top - (objSelectBtn.top + objSelectBtn.height);

        			var bReverse = (objNextBtn.left < objSelectBtn.left);

        			if (bReverse)
        			{
        				canvasLeft = objNextBtn.left;
        				canvasTop = objSelectBtn.top + objSelectBtn.height;
        			}
        			else
        			{
        				canvasLeft = objSelectBtn.left;
        				canvasTop = objSelectBtn.top + objSelectBtn.height;
        			}

        			var objCanvas = new nexacro.CanvasComponent();

        			objCanvas.init(id, canvasLeft, canvasTop, width, height);
        			objCanvas.addEventHandler("onclick", this.canvas_onclick, this);
        			this.divGantt.form.addChild(id, objCanvas);

        			objCanvas.show();
        			//objCanvas.set_border("1px solid");

        			// 좌표
        			var canvasContext = objCanvas._canvas;

        			x1 = bReverse ? canvasContext.width - objSelectBtn.width : 0 + objSelectBtn.width;
        			y1 = 0;
        			x2 = bReverse ? 0 + objSelectBtn.width : canvasContext.width - objSelectBtn.width;
        			y2 = canvasContext.height;

        			canvasContext.setElementStrokeStyle("black");
        			canvasContext.setElementLineWidth(1);
        			canvasContext.beginPath(); //새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.

        			canvasContext.moveTo(x1, y1); //펜을 x1와 y1로 지정된 좌표로 옮깁니다.
        			canvasContext.lineTo(x2, y2); //현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        			canvasContext.closePath(); //현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.

        			canvasContext.stroke(); //윤곽선을 이용하여 도형을 그립니다.
        			canvasContext.save();
        		}
        		else //두번째 객체에서 세번째 객체 잇는 부분.
        		{
        			var strSelectBtnId = this.arrKeyObj[i];

        			if(toThirdObj == "1M/C")
        			{
        				this.fnSetLastLineTo(strSelectBtnId);
        			}
        			else if(toThirdObj == "2M/C")
        			{
        				this.fnSetLastLineTo(strSelectBtnId);
        			}
        			else if(toThirdObj == "3M/C")
        			{
        				this.fnSetLastLineTo(strSelectBtnId);
        			}
        			else if(toThirdObj == "4M/C")
        			{
        				this.fnSetLastLineTo(strSelectBtnId);
        			}
        			else if(toThirdObj == "5M/C")
        			{
        				this.fnSetLastLineTo(strSelectBtnId);
        			}
        		}
        	}

        	this.dsSchedule.filter(""); //filter 초기화
        	this.dsSchedule.set_enableevent(true);
        	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        };

        this.fvDragFlag = 0;

        this.divGantt_pdiv_select00_oncloseup = function(obj,e)
        {
        	this.Button00_onmouseleave();
        };

        this.divGantt_pdiv_select01_oncloseup = function(obj,e)
        {
        	this.Button00_onmouseleave();
        };

        this.Button00_onmouseonclick = function(obj, e)
        {
        	if(this.fvDragFlag == 0)
        	{
        		var objBase = this.divGantt.form.components[obj.name];
        		this.divGantt.form.pdiv_select00.trackPopupByComponent(objBase, 0, objBase.getOffsetHeight());
        	}
        }

        this.Button00_onmouseenter = function(obj, e)
        {
        	this.fvDragFlag = 0;
        	var objSelectBtn, objSelectDiv;
        	var strSelectBtnId;
        	var arrbtnName;

        	//연결작업/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	var strOrderType = obj.orderType;
        	var orderDay, lineNo

        	this.dsSchedule.set_enableevent(false);
        	this.dsSchedule.set_filterstr("prod_type=='"+ strOrderType + "'");

        	var sType = obj.name.split("_")[1];
        	//trace("sType : " + sType);

        	//Key Mapping값 생성
        	var enterObj;
        	var toSecondObj;
        	var toThirdObj;

        	// 지정된 범위의 정수 1개를 랜덤하게 반환하는 함수
        	// n1 은 "하한값", n2 는 "상한값"
        	var randomRange = function randomRange(n1, n2) {
        		return Math.floor( (Math.random() * (n2 - n1 + 1)) + n1 );
        	};

        	if(sType == "1LD" || sType == "2LD" || sType == "3LD" || sType == "4LD" || sType == "5LD")
        	{
        		enterObj = sType;
        		toSecondObj = this.arr_2_SectionType[randomRange(0,5)];
        		toThirdObj = this.arr_3_SectionType[randomRange(0,4)];
        	}
        	else if(sType == "1RH" || sType == "2RH" || sType == "1LF" || sType == "2LF" || sType == "3RH" || sType == "4RH")
        	{
        		enterObj = this.arr_1_SectionType[randomRange(0,4)];
        		toSecondObj = sType;
        		toThirdObj = this.arr_3_SectionType[randomRange(0,4)];
        	}
        	else if(sType == "1M/C" || sType == "2M/C" || sType == "3M/C" || sType == "4M/C" || sType == "5M/C")
        	{
        		enterObj = this.arr_1_SectionType[randomRange(0,4)];
        		toSecondObj = this.arr_2_SectionType[randomRange(0,5)];
        		toThirdObj = sType;
        	}
        	//trace("enterObj : " + enterObj + "\n" + "toSecondObj : " + toSecondObj + "\n" + "toThirdObj : " + toThirdObj);

        	this.fnSetLineTo(enterObj, toSecondObj, toThirdObj);
        };

        this.divGantt_ondragmove = function(obj,e)
        {
        	this.fvDragFlag = 1;
        	var nLeft = e.canvasx - this.fv_clickPointX;
        	var nTop  = e.canvasy - this.fv_clickPointY;
        	this.fv_objDrag.move(nLeft, nTop);
        };

        this.divGantt_ondrop = function(obj, e)
        {
        	this.Button00_onmouseleave();

        	var nTop = this.fv_objDrag.getOffsetTop();
        	var nLeft = this.fv_objDrag.getOffsetLeft();

        	var strLineId = this.get_lineId(nTop);
        	var strDaysId = this.get_days(nLeft);

        	var objId = this.fv_objDrag.name;

        // 	var nObjRow = this.dsSchedule.findRow("btn_id", objId);
        //  this.dsSchedule.setColumn(nObjRow, "line_no", strLineId);
        //  this.dsSchedule.setColumn(nObjRow, "prod_day", strDaysId);

        	objTemp = this.divGantt.form.components["stDay_" + strDaysId];
        	var nMoveLeft = objTemp.getOffsetLeft();

        	var objTemp = this.divGantt.form.components["staLine_" + strLineId];
        	var nMoveTop = objTemp.getOffsetTop();

        	this.fv_objDrag.move(nMoveLeft, nMoveTop);
        };

        //left, top 좌표 기준으로 현재 background의 object 찾기
        this.get_lineId = function(nTop)
        {
        	var nThisTop  = nTop - 75;
        	var nRow = Math.round( nThisTop / this.nScheduleHeight );

        	if(nRow < 0)
        	{
        		nRow = 0;
        	}

        	var lineNo = this.dsLine.getColumn(nRow,"line_id");

        	if(lineNo < 10)
        	{
        		lineNo = this.dsLine.getColumn(nRow+1,"line_id");
        	}

        	return lineNo;
        }

        this.get_days = function(nLeft)
        {
        	var nThisLeft = nLeft - 150;
        	var nRow = Math.round( nThisLeft/this.dayWidth );

        	if(nRow < 0){	nRow = 0; 	}

        	var objAddDate = this.gfn_addDate(this.baseDay,nRow);
        	return objAddDate;
        }

        this.set_scheduleVisible = function ()
        {
        	var nTop, nLeft, nWidth, nHeight;

        	nTop = 75;
        	nLeft = 0;	//this.nScheduleLeft
        	nHeight = this.nScheduleHeight;
        	nWidth  = 0;	//nScheduleWidth
        	var strLineNo, boolVisile;
        	var objStatic, objButton;

        	for(var i=0; i<this.dsLine.getRowCount(); i++)
        	{
        		strLineNo = this.dsLine.getColumn(i,"line_id");
        		boolVisile= this.dsLine.getColumn(i,"visible");

        		objStatic = this.divGantt.form.components["staLine_"+strLineNo];

        		if(boolVisile==1)
        		{
        			objStatic.set_visible(boolVisile);
        			objStatic.setOffsetTop(nTop);
        			objStatic = this.divGantt.form.components["line_"+strLineNo];

        			if(!this.gfn_isNull(objStatic))
        			{
        				objStatic.set_visible(boolVisile);
        				objStatic.setOffsetTop(nTop);
        			}

        			objButton = this.divGantt.form.components["btnSelect_"+strLineNo];
        			if(!this.gfn_isNull(objButton))
        			{
        				objButton.setOffsetTop(nTop);
        			}

        			nTop += nHeight;
        		}
        		else
        		{

        			objStatic.set_visible(boolVisile);
        			objStatic = this.divGantt.form.components["line_"+strLineNo];

        			if(!this.gfn_isNull(objStatic))
        			{
        				objStatic.set_visible(boolVisile);
        			}
        		}
        	}
        	this.set_scheduleSize();
        };

        this.btnSelect_onclick = function(obj,e)
        {
        	var objBase = this.divGantt.form.components["staLine_" + obj.lineNo];
        	this.dsLine.set_filterstr("line_area ==" + obj.lineNo + " && line_id != " + obj.lineNo);
        	this.divGantt.form.pdiv_select.trackPopupByComponent(objBase, 0, objBase.getOffsetHeight());
        };

        this.pdiv_select_onpopup = function(obj,e)
        {
        	var nTotRow = this.dsLine.getRowCount();
        	var divSize = (25*nTotRow)+3;

        	obj.setOffsetHeight(divSize);
        };

        this.pdiv_select_oncloseup = function(obj,e)
        {
        	this.dsLine.set_filterstr("");
        	this.set_scheduleVisible();
        };

        this.canvas_onclick = function(obj,e)
        {
        	//trace(obj.name + " :: 캔버스 클릭");
        };

        this.divGantt_onclick = function(obj,e)
        {
        	//trace("div 클릭");
        };

        this.cmb_ComponentCount_onitemchanged = function(obj,e)
        {
        	this.fnSetInit();
        	this.fnPosRandom();
        	this.set_Schedules();
        };

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //화면 2본

        //변수 초기화
        // 폭
        this.arrinfo_Side_B_Width = new Array("1600","1400","1200","1000","800", "600");
        // 두께
        this.arrinfo_Side_B_Thick = new Array("1","5","10");

        // 폭
        this.arrinfo_Side_C_Width = new Array("1600","1400","1200","1000","800", "600");
        // 두께
        this.arrinfo_Side_C_Thick = new Array("1","5","10");

        // 폭
        this.arrinfo_Back_1_Width = new Array("4000", "2000", "3000", "1000");
        // 두께
        this.arrinfo_Back_1_Thick = new Array("5","50");
        // Slab 두께
        this.arrinfo_Back_1_SlabThick = new Array("200","120");

        // 폭
        this.arrinfo_Back_2_Width = new Array("4000", "2000", "3000", "1000");
        // 두께
        this.arrinfo_Back_2_Thick = new Array("5","50");
        // Slab 두께
        this.arrinfo_Back_2_SlabThick = new Array("200","120");

        // divGantt_Graph01,02,03,04영역의 컴포넌트 값 초기화.
        this.arrTime_1 = new Array();
        this.arrTimeLength = 0;

        // 상단, 하단 임계치
        this.arrTBLimit = new Array();

        // 선택된 Button 정보
        this.arrRowInfo = new Array();

        // 시간표에 사용되는 static 컴포넌트 정보
        this.staWidth = 20;
        this.staHeight = 4;
        this.staLeft = 0;
        this.staRight = 0;
        this.staTop = 0;

        // drag&drop 사용 시 필요한 정보변수
        this.fv_clickPointX_Graph;
        this.fv_clickPointY_Graph;
        this.fv_objDrag_Graph;
        this.fv_flag;
        this.fv_DragDataFlag;

        // Dataset ExtractRows
        this.aryRows = new Array();

        this.fnSetPosGraph = function()
        {
        	var nTime = 0;
        	var nRow = "";

        	for(var i=0; i<=308; i++)
        	{
        		if(i % 60 == 0)
        		{
        			nTime += 1;
        			this.arrTimeLength++;
        		}

        		nRow = this.ds_list.addRow();

        		this.ds_list.setColumn(nRow, "product", "부품" + i);
         		this.ds_list.setColumn(nRow, "width", i);
         		this.ds_list.setColumn(nRow, "thickness", i);
         		this.ds_list.setColumn(nRow, "time", nTime);
        	}
        };

        this.fnSetObjInfo = function()
        {
        	//(메인 Div 표현)
        	for(var i=1; i<=this.arrTimeLength; i++)
        	{
        		this.arrTime_1[i] = i;
        	}
        };

        this.fnSetLabel = function(arrInfo, objStatic, nInterval, objDiv, objText, nBal, nWid, nHei, nRig)
        {
        	var strClass = "";
        	var strStaticId = "";
        	var strStaticId2 = "";

        	for(var i=0; i<arrInfo.length; i++)
        	{
        		strClass = "sta_WF_box01L";
        		strStaticId = "title" + "_" + arrInfo[i];
        		strStaticId2 = arrInfo[i];

        		//Label Component
        		objStatic = new Static();
        		objStatic.init(strStaticId, null, this.staTop + nInterval, this.staWidth, this.staHeight, this.staRight);
        		objStatic.set_cssclass(strClass);

        		//Label Text
        		objText = new Static();
        		objText.init(strStaticId2, null, this.staTop + nInterval - nBal, nWid, nHei, nRig);
        		objText.set_text(arrInfo[i]);

        		objDiv.addChild(strStaticId, objStatic);
        		objDiv.addChild(strStaticId2, objText);

        		objStatic.show();
        		objText.show();

        		this.staTop += this.staHeight + nInterval;
        	}

        	this.staTop = 0;
        };

        this.fnSetChartHeader = function(nType, nCnt, objStatic, objDiv)
        {
        	var strText = "";
        	var strClass = "";
        	var strStaticId = "";

        	for(var j=1; j<=nCnt; j++)
        	{
        		strText = j;
        		strClass = "sta_WF_box01L_bottom";
        		strStaticId = "stc_" + nType + strText;

        		objStatic = new Static();
        		objStatic.init(strStaticId, this.staLeft, objDiv.getOffsetHeight()-30, 187.7, 30);
        		objStatic.set_cssclass(strClass);
        		objStatic.set_text(strText);

        		objDiv.addChild(strStaticId, objStatic);
        		objStatic.show();

        		this.staLeft += 187.7;
        	}

        	objDiv.form.resetScroll();
        	this.staLeft = 0;
        };

        this.fnSetLine = function(objDiv, objStatic, nInterval, nIntervalLimit)
        {
        	strClass = "sta_WF_box01L";
        	strStaticId = "stc_" + objDiv.name + "Line";

        	objStatic = new Static();

        	this.arrTBLimit.push(objDiv.getOffsetHeight() - (nInterval * nIntervalLimit)); //divGantt_Graph01,02,03,04의 영역에서의 상단 임계치 하단 임계치.

        	objStatic.init(strStaticId, this.staLeft, objDiv.getOffsetHeight()-nInterval, 100000, 3);
        	objStatic.set_cssclass(strClass);

        	objDiv.addChild(strStaticId, objStatic);
        	objStatic.show();
        };

        this.initGantt = function()
        {
        	//div_Side_B
        	var objStatic01 = "";
        	var objStatic02 = "";
        	var objText01 = "";
        	var objText02 = "";

        	//div_Side_B Header
        	var objStatic03 = "";

        	//div_Side_C
        	var objStatic04 = "";
        	var objStatic05 = "";
        	var objText03 = "";
        	var objText04 = "";

        	//div_Side_C Header
        	var objStatic06 = "";

        	//div_Back_1
        	var objStatic07 = "";
        	var objStatic08 = "";
        	var objStatic09 = "";
        	var objText05 = "";
        	var objText06 = "";
        	var objText07 = "";

        	//div_Back_1 Header
        	var objStatic10 = "";

        	//div_Back_2
        	var objStatic11 = "";
        	var objStatic12 = "";
        	var objStatic13 = "";
        	var objText08 = "";
        	var objText09 = "";
        	var objText10 = "";

        	//div_Back_2 Header
        	var objStatic14 = "";

        	//divGantt_Graph Line
        	var objStatic15 = "";
        	var objStatic16 = "";
        	var objStatic17 = "";
        	var objStatic18 = "";

        	var strText = "";
        	var strArea = 0;
        	var i, j;

        	//Div영역(왼쪽하단) Label 범계표시.
        	this.fnSetLabel(this.arrinfo_Side_B_Width, objStatic01, 8, this.div_Side_B_Width_Val, objText01, 3, 36, 14, 23);
        	this.fnSetLabel(this.arrinfo_Side_B_Thick, objStatic02, 7, this.div_Side_B_Thick_Val, objText02, 3, 30, 14, 7);

        	this.fnSetLabel(this.arrinfo_Side_C_Width, objStatic03, 8, this.div_Side_C_Width_Val, objText03, 3, 36, 14, 23);
        	this.fnSetLabel(this.arrinfo_Side_C_Thick, objStatic04, 7, this.div_Side_C_Thick_Val, objText04, 3, 30, 14, 7);

        	this.fnSetLabel(this.arrinfo_Back_1_Width, objStatic05, 9, this.div_Back_1_Width_Val, objText05, 3, 36, 14, 23);
        	this.fnSetLabel(this.arrinfo_Back_1_Thick, objStatic06, 6, this.div_Back_1_Thick_Val, objText06, 3, 30, 14, 7);
        	this.fnSetLabel(this.arrinfo_Back_1_SlabThick, objStatic07, 6, this.div_Back_1_SlabThick_Val, objText07, 3, 30, 14, 16);

        	this.fnSetLabel(this.arrinfo_Back_2_Width, objStatic08, 9, this.div_Back_2_Width_Val, objText08, 3, 36, 14, 23);
        	this.fnSetLabel(this.arrinfo_Back_2_Thick, objStatic09, 6, this.div_Back_2_Thick_Val, objText09, 3, 30, 14, 7);
        	this.fnSetLabel(this.arrinfo_Back_2_SlabThick, objStatic10, 6, this.div_Back_2_SlabThick_Val, objText10, 3, 30, 14, 16);

        	//Div 영역 차트 그리기
        	this.fnSetChartHeader("A", 30, objStatic03, this.divGantt_Graph01);
        	this.fnSetChartHeader("B", 30, objStatic06, this.divGantt_Graph02);
        	this.fnSetChartHeader("C", 30, objStatic10, this.divGantt_Graph03);
        	this.fnSetChartHeader("D", 30, objStatic14, this.divGantt_Graph04);

        	//Div 영역 차트 중앙라인 그리기
        	this.fnSetLine(this.divGantt_Graph01, objStatic15, 74, 1.5);
        	this.fnSetLine(this.divGantt_Graph02, objStatic16, 74, 1.5);

        	this.fnSetLine(this.divGantt_Graph03, objStatic17, 91, 1.3); //Slab Div추가로 1.5->1.3으로 조정
        	this.fnSetLine(this.divGantt_Graph04, objStatic18, 91, 1.3); //Slab Div추가로 1.5->1.3으로 조정
        };

        this.fnSetGraph = function(nType, index, objDiv)
        {
        	var nLeft = 3;
        	var nWidth = 3;
        	var nTop = 0;
        	var nHeight = 50;
        	var objStatic, objButton;
        	var strBtnId, strStaticName, strTime, strArea;
        	var i, j;

        	//Dataset Event 처리를 위한 Flag 값
        	this.fv_DragDataFlag = "";

        	var nTopSwitch1 = 1;
        	var nTopSwitch2 = -1;

        	var nTopInit1 = 1; //1->0->1->0
        	var nTopInit2 = 0; //0->1->0->1

        	var nUpLimit = this.arrTBLimit[index] - 8;
        	var nDownLimit = this.arrTBLimit[index] + 8;
        	var nArrLimit = new Array(nUpLimit, nDownLimit);

        	var nIndex = 1;
        	var nCompCnt = 0;

        	if(nType == "A" || nType == "C")
        		nTop = nArrLimit[1];
        	else if(nType == "B" || nType == "D")
        		nTop = nArrLimit[0];

        	for (i=1; i<this.arrTime_1.length; i++)
        	{
        		strArea = this.arrTime_1[i];
        		strStaticName = "stc_" + nType + this.arrTime_1[i];

        		objStatic = objDiv.form.components[strStaticName];

        		for (j=0; j<this.ds_list.getRowCount(); j++)
        		{
        			strBtnId = nType + this.ds_list.getColumn(j, "product");
        			strTime = this.ds_list.getColumn(j, "time");
        			nCompCnt++;

        			if(strArea == strTime)
        			{
        				//Grid에서 row chage후 다시 그리기 위함.
        				objDiv.form.removeChild(strBtnId);

        				objButton = new Button();
        				objButton.init(strBtnId, nLeft, nTop, nWidth, nHeight);
        				objButton.set_cssclass("btn_WF_gantt02");

        				//drag&drop 사용을 위한 event 설정.
        				objButton.addEventHandler("onclick", this.btn_onclick, this);
        				objButton.addEventHandler("ondrag", this.btn_ondrag_Graph, this);

        				objDiv.addChild(strBtnId, objButton);

        				objButton.show();
        				nLeft += 3;

        				if((nType == "A" || nType == "C"))
        				{
        					if(nCompCnt >= 60)
        					{
        						nTopSwitch1 *= -1;
        						nTopInit1 += nTopSwitch1;
        						nTop = nArrLimit[nTopInit1];
        						nCompCnt=0;
        					}
        				}
        				else if((nType == "B" || nType == "D"))
        				{
        					if(nCompCnt >= 60)
        					{
        						nTopSwitch2 *= -1;
        						nTopInit2 += nTopSwitch2;
        						nTop = nArrLimit[nTopInit2];
        						nCompCnt=0;
        					}
        				}
        			}
        			else //divGantt_Graph01,02,03,04의 헤더영역의 범위가 달라질 때
        			{
        				nCompCnt=0;
        				nLeft = objStatic.getOffsetLeft() + 3;
        			}
        		}
        	}
        };

        this.set_Schedules_Graph = function()
        {
        	this.fnSetGraph("A", 0, this.divGantt_Graph01);
        	this.fnSetGraph("B", 1, this.divGantt_Graph02);
        	this.fnSetGraph("C", 2, this.divGantt_Graph03);
        	this.fnSetGraph("D", 3, this.divGantt_Graph04);
        };

        this.btn_onclick = function(obj,e)
        {
        	var i;
        	var strCssClass = obj.cssclass;

        	if (strCssClass == "btn_WF_gantt02")
        	{
        		obj.set_cssclass("btn_WF_ganttSub");

        		var nAddRow = this.ds_objList.addRow();
        		this.ds_objList.setColumn(nAddRow, "obj", obj);
        		this.ds_objList.setColumn(nAddRow, "objNm", obj.name);
        	}
        	else
        	{
        		obj.set_cssclass("btn_WF_gantt02");

        		var strColNm;
        		for (i = 0; i < this.ds_objList.getRowCount(); i++)
        		{
        			strColNm = this.ds_objList.getColumn(i, "objNm");

        			if (strColNm == obj.name) {
        				this.ds_objList.deleteRow(i);
        			}
        		}
        	}
        }

        this.btn_ondrag_Graph = function(obj, e)
        {
         	// 타일내 클릭 좌표값
         	this.fv_clickPointX_Graph = e.canvasx + obj.parent.parent.getOffsetLeft();
         	this.fv_clickPointY_Graph = e.canvasy + obj.parent.parent.getOffsetTop();

         	// 클릭된 타일 컴포넌트 지정
         	this.fv_objDrag_Graph = obj;

         	return true;
        };

        this.gantt_ondragmove = function(obj, e)
        {
        	//현재 겹치는 시간에 대해서는 고려되지 않음
         	var sObjText;
        	var objButton;
        	var nLeft, nTop, nObjLeft, nObjTop;
        	var i, j;

        	for (i = 0; i < this.ds_objList.getRowCount(); i++)
        	{
        		sObjText = this.ds_objList.getColumn(i, "objNm");

        		nLeft = e.canvasx - this.fv_clickPointX_Graph;
        		nTop  = e.canvasy - this.fv_clickPointY_Graph;

        		objButton = this.divGantt_Graph01.form.components[sObjText];

        		//선택 된 Button 위치 설정
        		for (j = 0; j <= i; j++)
        		{
        			nLeft += 15;
        		}

        		objButton.move(nLeft, nTop);
        	}
        };

        this.divGantt_Graph01_ondrop = function(obj,e)
        {
        	var i;
        	var sObjText;
        	var objButton;
        	var nBtnIndex;
        	var nRowCnt = this.ds_list.rowcount -1;

        	// Dataset Event 처리를 위한 Flag 값
        	this.fv_DragDataFlag = "drop";

        	for (i = 0; i < this.ds_objList.getRowCount(); i++)
        	{
        		sObjText = this.ds_objList.getColumn(i, "objNm");
        		objButton = this.divGantt_Graph01.form.components[sObjText];

        		objButton.set_cssclass("btn_WF_gantt02");

        		nBtnIndex = this.ds_list.findRow("product", sObjText);

        		this.ds_list.moveRow(nBtnIndex, nRowCnt);

        		if (objButton.getOffsetLeft() > 2252.4)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 12);
        		}
        		else if (objButton.getOffsetLeft() > 2064.7)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 11);
        		}
        		else if (objButton.getOffsetLeft() > 1877)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 10);
        		}
        		else if (objButton.getOffsetLeft() > 1689.3)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 9);
        		}
        		else if (objButton.getOffsetLeft() > 1501.6)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 8);
        		}
        		else if (objButton.getOffsetLeft() > 1126.2)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 7);
        		}
        		else if (objButton.getOffsetLeft() > 938.5)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 6);
        		}
        		else if (objButton.getOffsetLeft() > 750.8)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 5);
        		}
        		else if (objButton.getOffsetLeft() > 563.1)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 4);
        		}
        		else if (objButton.getOffsetLeft() > 375.4)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 3);
        		}
        		else if (objButton.getOffsetLeft() > 187.7)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 2);
        		}
        		else
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 1);
        		}
        	}

        	// 선택 된 Button 해제
        	this.ds_objList.clearData();

        	// 정렬 설정
        	//this.ds_list.set_keystring("S:product+time");
        	this.ds_list.set_keystring("S:time");

        	// 차트 생성
        	this.set_Schedules_Graph();
        };

        this.divGantt_onrbuttondown = function(obj,e)
        {
        	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(nexacro.Application.mainframe, 0))+10;
        	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(nexacro.Application.mainframe, 0))+10;

        	this.divGantt.form.pdiv_select01.trackPopup(x, y);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.this_onload,this);
            this.addEventHandler("ondragmove",this.gantt_ondragmove,this);
            this.btnIn.addEventHandler("onclick",this.btnZoom_onclick,this);
            this.btnOut.addEventHandler("onclick",this.btnZoom_onclick,this);
            this.divGantt.addEventHandler("ondragmove",this.divGantt_ondragmove,this);
            this.divGantt.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.divGantt.addEventHandler("onclick",this.divGantt_onclick,this);
            this.divGantt.addEventHandler("onrbuttondown",this.divGantt_onrbuttondown,this);
            this.divGantt.form.pdiv_select.addEventHandler("onpopup",this.pdiv_select_onpopup,this);
            this.divGantt.form.pdiv_select.addEventHandler("oncloseup",this.pdiv_select_oncloseup,this);
            this.divGantt.form.pdiv_select00.addEventHandler("onpopup",this.pdiv_select_onpopup,this);
            this.divGantt.form.pdiv_select00.addEventHandler("oncloseup",this.divGantt_pdiv_select00_oncloseup,this);
            this.divGantt.form.pdiv_select01.addEventHandler("onpopup",this.pdiv_select_onpopup,this);
            this.divGantt.form.pdiv_select01.addEventHandler("oncloseup",this.divGantt_pdiv_select01_oncloseup,this);
            this.search.addEventHandler("onclick",this.Button02_onclick,this);
            this.cmb_ComponentCount.addEventHandler("onitemchanged",this.cmb_ComponentCount_onitemchanged,this);
            this.divGantt_Graph01.addEventHandler("ondrop",this.divGantt_Graph01_ondrop,this);
            this.div_Side_B.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_C.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.divGantt_Graph03.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.divGantt_Graph02.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.divGantt_Graph04.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_B_Width.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_B_Width_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_B_Roll.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_B_Thick.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_B_Thick_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_C_Roll.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_C_Thick_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_C_Thick.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_C_Width.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_C_Width_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1_Roll.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1_Thick_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1_Thick.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1_Width.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1_Width_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2_Roll.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2_Thick_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2_Thick.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2_Width.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2_Width_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2_SlabThick_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_2_SlabThick.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1_SlabThick_Val.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Back_1_SlabThick.addEventHandler("ondrop",this.divGantt_ondrop,this);
        };

        this.loadIncludeScript("PoC_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
