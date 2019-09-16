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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1648);
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


            obj = new Dataset("ds_listSub", this);
            obj._setContents("<ColumnInfo><Column id=\"product\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"thickness\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"product\">부품-A-1</Col><Col id=\"width\">20</Col><Col id=\"thickness\">90</Col><Col id=\"time\">1</Col></Row><Row><Col id=\"product\">부품-B-1</Col><Col id=\"width\">40</Col><Col id=\"thickness\">50</Col><Col id=\"time\">1</Col></Row><Row><Col id=\"product\">부품-C-1</Col><Col id=\"width\">40</Col><Col id=\"thickness\">50</Col><Col id=\"time\">2</Col></Row><Row><Col id=\"product\">부품-D-1</Col><Col id=\"width\">10</Col><Col id=\"thickness\">70</Col><Col id=\"time\">2</Col></Row><Row><Col id=\"product\">부품-E-1</Col><Col id=\"width\">30</Col><Col id=\"thickness\">65</Col><Col id=\"time\">3</Col></Row><Row><Col id=\"product\">부품-F-1</Col><Col id=\"width\">50</Col><Col id=\"thickness\">35</Col><Col id=\"time\">3</Col></Row><Row><Col id=\"product\">부품-G-1</Col><Col id=\"width\">35</Col><Col id=\"thickness\">15</Col><Col id=\"time\">4</Col></Row><Row><Col id=\"product\">부품-H-1</Col><Col id=\"width\">25</Col><Col id=\"thickness\">20</Col><Col id=\"time\">4</Col></Row><Row><Col id=\"product\">부품-I-1</Col><Col id=\"width\">15</Col><Col id=\"thickness\">25</Col><Col id=\"time\">5</Col></Row><Row><Col id=\"product\">부품-J-1</Col><Col id=\"width\">5</Col><Col id=\"thickness\">45</Col><Col id=\"time\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","10",null,"44","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#f6f6f6");
            obj.set_text("");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnIn",null,"64","30","30","45",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btnOut",null,"64","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToday","60","20","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("20190201");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt","10","104",null,"664","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
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

            obj = new Button("search",null,"10","43","44","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","20","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","61","100","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("간트 렌더링 시간 : ");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","120","61","100","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ComponentCount","282","20","132","24",null,null,null,null,null,null,this);
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

            obj = new Static("Static04","192","20","78","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("컴포넌트 개수");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph01","202","768",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B","10","768","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("B옆면");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C","10","923","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("C옆면");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","662","1397",null,"241","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"product\"/><Cell col=\"2\" text=\"width\"/><Cell col=\"3\" text=\"thickness\"/><Cell col=\"4\" text=\"time\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:product\" padding=\"0px 0px 0px 5px\"/><Cell col=\"2\" text=\"bind:width\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"3\" text=\"bind:thickness\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"4\" text=\"bind:time\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","1397",null,"241","Grid01:8",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"product\"/><Cell col=\"2\" text=\"width\"/><Cell col=\"3\" text=\"thickness\"/><Cell col=\"4\" text=\"time\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:product\" padding=\"0px 0px 0px 5px\"/><Cell col=\"2\" text=\"bind:width\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"3\" text=\"bind:thickness\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"4\" text=\"bind:time\" textAlign=\"center\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2","10","1233","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("2후판");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1","10","1078","64","155",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("1후판");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph03","202","1078",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph02","202","923",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divGantt_Graph04","202","1233",null,"155","10",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Width","74","768","56","83",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Width_Val","130","768","72","83",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Roll","74","894","128","29",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Thick","74","851","56","43",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_B_Thick_Val","130","851","72","43",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Roll","74","1049","128","29",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Thick_Val","130","1006","72","43",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Thick","74","1006","56","43",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Width","74","923","56","83",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Side_C_Width_Val","130","923","72","83",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Roll","74","1212","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Thick_Val","130","1145","72","35",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Thick","74","1145","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Width","74","1078","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_Width_Val","130","1078","72","67",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Roll","74","1367","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Roll단위");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Thick_Val","130","1300","72","35",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Thick","74","1300","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Width","74","1233","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("폭");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_Width_Val","130","1233","72","67",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_SlabThick_Val","130","1335","72","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_2_SlabThick","74","1335","56","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Slab두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_SlabThick_Val","130","1180","72","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Back_1_SlabThick","74","1180","56","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Slab두께");
            obj.set_border("1px solid #c7c7c7");
            obj.set_background("#eef1f5");
            obj.set_font("normal/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1648,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("poc02_Gantt.xfdl","lib::comLib_Comm.xjs");
        this.addIncludeScript("poc02_Gantt.xfdl","lib::CommUtil.xjs");
        this.addIncludeScript("poc02_Gantt.xfdl","lib::ext_CommEco.xjs");
        this.registerScript("poc02_Gantt.xfdl", function() {
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

        this.this_onload = function(obj,e)
        {
        	this.fnFormInit();

        	//화면 1본
        	//Static Component 2400 Settings
        	this.fnPosRandom();
        	this.set_formInit();

        	//화면 2본
        	//Static Component 1200 Settings
        	this.initGantt();
        	this.fnSetPosGraph();
        	this.fnSetObjInfo();
        };

        this.fnFormInit = function()
        {
        	if (this.parent.parent.parent.name=="divWork")
        	{
        		this.parent.parent.parent.parent.gfnCheckFormRanderTime();
        	}

        	this.baseDay = this.calToday.value;
        };

        this.fnSetStatic = function(objDs, nType, compLimit)
        {
        	var aryMonthInfo = ["201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909", "201910", "201911", "201912"];
        	var aryMonthDayInfo = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        	var nIndex = 0 , nCnt = 0 , nTotal = 0;

        	for(var i=1; i<11; i++) //Calendar Component의 월부터 nDiffDay를 조정하여 Static Component의 개수가 2400이 되도록 i값 범위 조정.
        	{
        		var aryCheck = new Array();
        		var aryMatrix = new Array();

        		while(true)
        		{
        			if(aryCheck[nIndex] > 0)
        			{
        				nIndex = Math.floor(Math.random() * (aryMonthDayInfo[i] - 1)) + 1;
        			}
        			else
        			{
        				aryCheck[nIndex] = 1;
        				aryMatrix.push(aryMonthInfo[i] + this.gfn_lPad(nIndex, "0", 2));
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

        	this.arrSelectSedules = []; //버튼의 갯수 조정 후 다시 검색할 시 선택된 Button 객체들 정보 초기화.

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
        	this.Grid00.set_binddataset(this.ds_list);
        	this.Grid01.set_binddataset(this.ds_listSub);
        	this.set_Schedules_Graph();
        };

        this.set_formInit = function()
        {
        	//orderTitle create
        	var strStaticText = "Production Orders";
        	var strStaticId = "stOrderTitle";

        	var objStatic;
        	objStatic = new Static();
        	objStatic.init(strStaticId, 0, 0, 150, 75);
        	objStatic.set_cssclass("sta_WF_box01L");
        	objStatic.set_text("Production Orders");

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

        	for(var i=0; i<this.arrMonth.length; i++)
        	{
        		//trace(arrMonth[i].month + "--" + arrMonth[i].startDay + "--" + arrMonth[i].endDay);
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
        				strStaticClass = "sta_WF_box01";
        			}
        			else if(lineNo == 3)
        			{
        				strStaticClass = "sta_WF_box02";
        			}
        			else if(lineNo == 1)
        			{
        				strStaticClass = "sta_WF_box03";
        			}
        			nWidth = this.nScheduleLeft + this.nScheduleWidth;
        		}
        		else
        		{
        			nRight = null;
        			nWidth = 150;

        			strStaticClass = "sta_WF_box02L";
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
        			objButton.set_cssclass("btn_WF_ganttFilter");

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
        		objButton.set_cssclass("btn_WF_gantt02");

        		if(!objParent.visible)
        		{
        			objButton.set_visible(false);
        		}

        		//mouse cursor 및 drag&drop 사용을 위한 event 설정
        		objButton.addEventHandler("ondrag", this.btn_ondrag, this);
        		//objButton.addEventHandler("onlbuttondown", this.btn_onlbuttondown, this);
        		objButton.addEventHandler("onmouseenter", this.Button00_onmouseenter, this);
        		objButton.addEventHandler("onmouseleave", this.Button00_onmouseleave, this);

        		this.divGantt.addChild(strBtnId,objButton);

        		objButton.show();
        		objButton.lineNo = lineNo;
        		objButton.orderDay	= orderDay;
        		objButton.orderType	= orderType;
        	}
        };

        this.btn_ondrag = function(obj,e)
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
        	this.setTimer(1, 500);
        };

        //this.btn_onlbuttondown = function(obj:nexacro.Button,e:nexacro.MouseEventInfo)
        this.Button00_onmouseenter = function(obj,e)
        {
        	this.killTimer(1);

        	var objSelectBtn, objSelectDiv;
        	var strSelectBtnId;
        	var arrbtnName;

        	//연결해지//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	if(this.arrSelectSedules.length > 0)
        	{
        		for(var i=0; i<this.arrSelectSedules.length; i++)
        		{
        			strSelectBtnId = this.arrSelectSedules[i];
        			arrbtnName = strSelectBtnId.split("_");

        			objSelectBtn = this.divGantt.form.components[strSelectBtnId];
        			objSelectBtn.set_cssclass("btn_WF_gantt02");
        		}
        		this.arrSelectSedules = [];
        	}

        	//[TEST] 캔버스
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
        	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        	//연결작업/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	var strOrderType = obj.orderType;
        	var orderDay, lineNo

        	this.dsSchedule.set_enableevent(false);
        	this.dsSchedule.set_filterstr("prod_type=='" + strOrderType+"'");

        	for(var i=0; i<this.dsSchedule.getRowCount(); i++)
        	{
        		lineNo		= this.dsSchedule.getColumn(i, "line_no");
        		orderDay	= this.dsSchedule.getColumn(i, "prod_day");
        		orderType	= this.dsSchedule.getColumn(i, "prod_type");

        		strSelectBtnId = this.dsSchedule.getColumn(i, "btn_id");
        		this.arrSelectSedules.push(strSelectBtnId);

        		objSelectBtn = this.divGantt.form.components[strSelectBtnId];

        		if (this.dsSchedule.getColumn(i, "line_no") != "3LD"
        			&& this.dsSchedule.getColumn(i, "line_no") != "1RH"
        			&& this.dsSchedule.getColumn(i, "line_no") != "2M/C") {
        			continue;
        		}
        		else
        			objSelectBtn.set_cssclass("btn_WF_gantt03");
        	}

        	//[TEST] 캔버스
        	for(var i = 0; i < this.dsSchedule.getRowCount(); i++)
        	{
        		if (i == this.dsSchedule.getRowCount() - 2)
        			break;

        		if (this.dsSchedule.getColumn(i, "line_no") != "3LD"
        			&& this.dsSchedule.getColumn(i, "line_no") != "1RH"
        			&& this.dsSchedule.getColumn(i, "line_no") != "2M/C") {
        			continue;
        		}

        		var strSelectBtnId = this.dsSchedule.getColumn(i, "btn_id");
        		var strNextBtnId;

        		if(this.dsSchedule.getColumn(i, "line_no") == "3LD")
        		{
        			strNextBtnId = this.dsSchedule.getColumn(i + 3, "btn_id");
        		}
        		else if(this.dsSchedule.getColumn(i, "line_no") == "1RH")
        		{
        			strNextBtnId = this.dsSchedule.getColumn(i + 7, "btn_id");
        		}
        		else if(this.dsSchedule.getColumn(i, "line_no") == "2M/C")
        		{
        			var strSelectBtnId = this.dsSchedule.getColumn(i, "btn_id");

        			for(var i=this.ds_list.rowcount-1; i>=this.ds_list.rowcount-9; i--)
        			{
        				var strNextBtnId = "B" + this.ds_list.getColumn(i, "product");

        			}

        			var objSelectBtn = this.divGantt.form.components[strSelectBtnId];
        			var objNextBtn = this.divGantt_Graph02.form.components[strNextBtnId];

        			var id, canvasLeft, canvasTop, width, height, x1, x2, y1, y2, bReverse

        			id = "canvasLine_" + strSelectBtnId;
        			width = (objNextBtn.left >= objSelectBtn.left) ? (objNextBtn.left + objNextBtn.width - objSelectBtn.left) : (objSelectBtn.left + objSelectBtn.width - objNextBtn.left);
        			//height = objNextBtn.top - (objSelectBtn.top + objSelectBtn.height);
        			height = objNextBtn.getOffsetHeight() + this.divGantt_Graph01.getOffsetHeight();

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

        			// objCanvas 생성
        			objCanvas.init(id, canvasLeft, canvasTop, width, height);
        			objCanvas.addEventHandler("onclick", this.canvas_onclick, this);
        			this.addChild(id, objCanvas);
        			objCanvas.show();
        			objCanvas.set_border("1px solid");

        			// 좌표
        			var canvasContext = objCanvas._canvas;

        			x1 = bReverse ? canvasContext.width - objSelectBtn.width / 2 : 0 + objSelectBtn.width / 2;
        			y1 = 0;
        			x2 = bReverse ? 0 + objSelectBtn.width / 2 : canvasContext.width - objSelectBtn.width / 2;
        			y2 = canvasContext.height;

        			canvasContext.setElementStrokeStyle("black");
        			canvasContext.setElementLineWidth(2);
        			canvasContext.beginPath(); //새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.

        			canvasContext.moveTo(x1, y1); //펜을 x1와 y1로 지정된 좌표로 옮깁니다.
        			canvasContext.lineTo(x2, y2); //현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        			canvasContext.closePath(); //현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.

        			canvasContext.stroke(); //윤곽선을 이용하여 도형을 그립니다.
        			canvasContext.save();

        			return;
        		}

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
        		objCanvas.set_border("1px solid");

        		// 좌표
        		var canvasContext = objCanvas._canvas;

        		x1 = bReverse ? canvasContext.width - objSelectBtn.width / 2 : 0 + objSelectBtn.width / 2;
        		y1 = 0;
        		x2 = bReverse ? 0 + objSelectBtn.width / 2 : canvasContext.width - objSelectBtn.width / 2;
        		y2 = canvasContext.height;

        		canvasContext.setElementStrokeStyle("black");
        		canvasContext.setElementLineWidth(2);
        		canvasContext.beginPath(); //새로운 경로를 만듭니다. 경로가 생성되었다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.

        		canvasContext.moveTo(x1, y1); //펜을 x1와 y1로 지정된 좌표로 옮깁니다.
        		canvasContext.lineTo(x2, y2); //현재 드로잉 위치에서 x2와 y2로 지정된 위치까지 선을 그립니다.

        		canvasContext.closePath(); //현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.

        		canvasContext.stroke(); //윤곽선을 이용하여 도형을 그립니다.
        		canvasContext.save();
        	}

        	this.dsSchedule.set_filterstr("");
        	this.dsSchedule.set_enableevent(true);
        	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        };

        this.divGantt_ondragmove = function(obj,e)
        {
        	var nLeft = e.canvasx - this.fv_clickPointX;
        	var nTop  = e.canvasy - this.fv_clickPointY;
        	this.fv_objDrag.move(nLeft, nTop);
        };

        this.divGantt_ondrop = function(obj,e)
        {
        	var nTop = this.fv_objDrag.getOffsetTop();
        	var nLeft = this.fv_objDrag.getOffsetLeft();

        	var strLineId = this.get_lineId(nTop);
        	var strDaysId = this.get_days(nLeft);

        	var objId = this.fv_objDrag.name;
        	var nObjRow = this.dsSchedule.findRow("btn_id",objId);

        	this.dsSchedule.setColumn(nObjRow,"line_no",strLineId);
        	this.dsSchedule.setColumn(nObjRow,"prod_day",strDaysId);

        	this.fv_objDrag.lineNo 		= strLineId;
        	this.fv_objDrag.orderDay	= strDaysId;

        	var objTemp = this.divGantt.form.components["staLine_" + strLineId];
        	var nMoveTop = objTemp.getOffsetTop();

        	objTemp = this.divGantt.form.components["stDay_" + strDaysId];
        	var nMoveLeft = objTemp.getOffsetLeft();

        	this.fv_objDrag.move(nMoveLeft,nMoveTop);
        };

        //left, top 좌표 기준으로 현재 background의 object 찾기
        this.get_lineId = function(nTop)
        {
        	//this.nScheduleHeight
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

        this.zoom_test_ontimer = function(obj, e)
        {
        	//[TEST] 캔버스
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

        this.fnSetLabel = function(arrInfo, objStatic, nInterval, objDiv)
        {
        	var strClass = "";
        	var strStaticId = "";

        	for(var i=0; i<arrInfo.length; i++)
        	{
        		strClass = "sta_WF_box01L";
        		strStaticId = "title" + "_" + arrInfo[i];

        		//graph
        		objStatic = new Static();
        		objStatic.init(strStaticId, null, this.staTop + nInterval, this.staWidth, this.staHeight, this.staRight);
        		objStatic.set_cssclass(strClass);

        		objDiv.addChild(strStaticId, objStatic);

        		objStatic.show();

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
        		strClass = "sta_WF_box01L";
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

        	//div_Side_B Header
        	var objStatic03 = "";

        	//div_Side_C
        	var objStatic04 = "";
        	var objStatic05 = "";

        	//div_Side_C Header
        	var objStatic06 = "";

        	//div_Back_1
        	var objStatic07 = "";
        	var objStatic08 = "";
        	var objStatic09 = "";

        	//div_Back_1 Header
        	var objStatic10 = "";

        	//div_Back_2
        	var objStatic11 = "";
        	var objStatic12 = "";
        	var objStatic13 = "";

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

        	//Div 영역(왼쪽하단) Label 범계표시.
        	this.fnSetLabel(this.arrinfo_Side_B_Width, objStatic01, 8, this.div_Side_B_Width_Val);
        	this.fnSetLabel(this.arrinfo_Side_B_Thick, objStatic02, 7, this.div_Side_B_Thick_Val);

        	this.fnSetLabel(this.arrinfo_Side_C_Width, objStatic03, 8, this.div_Side_C_Width_Val);
        	this.fnSetLabel(this.arrinfo_Side_C_Thick, objStatic04, 7, this.div_Side_C_Thick_Val);

        	this.fnSetLabel(this.arrinfo_Back_1_Width, objStatic05, 9, this.div_Back_1_Width_Val);
        	this.fnSetLabel(this.arrinfo_Back_1_Thick, objStatic06, 6, this.div_Back_1_Thick_Val);
        	this.fnSetLabel(this.arrinfo_Back_1_SlabThick, objStatic07, 6, this.div_Back_1_SlabThick_Val);

        	this.fnSetLabel(this.arrinfo_Back_2_Width, objStatic08, 9, this.div_Back_2_Width_Val);
        	this.fnSetLabel(this.arrinfo_Back_2_Thick, objStatic09, 6, this.div_Back_2_Thick_Val);
        	this.fnSetLabel(this.arrinfo_Back_2_SlabThick, objStatic10, 6, this.div_Back_2_SlabThick_Val);

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

        	var nUpLimit = this.arrTBLimit[index] - 25;
        	var nDownLimit = this.arrTBLimit[index] + 25;
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

        		if (objButton.getOffsetLeft() > 2060)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 12);
        		}
        		else if (objButton.getOffsetLeft() > 1900)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 11);
        		}
        		else if (objButton.getOffsetLeft() > 1620)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 10);
        		}
        		else if (objButton.getOffsetLeft() > 1440)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 9);
        		}
        		else if (objButton.getOffsetLeft() > 1260)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 8);
        		}
        		else if (objButton.getOffsetLeft() > 1080)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 7);
        		}
        		else if (objButton.getOffsetLeft() > 900)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 6);
        		}
        		else if (objButton.getOffsetLeft() > 720)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 5);
        		}
        		else if (objButton.getOffsetLeft() > 540)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 4);
        		}
        		else if (objButton.getOffsetLeft() > 360)
        		{
        			this.ds_list.setColumn(nRowCnt, "time", 3);
        		}
        		else if (objButton.getOffsetLeft() > 180)
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

        this.fn_comGridOnDrag = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "Grid00" :
        			this.fv_flag = "orgList";
        			this.arrRowInfo = obj.getSelectedRows();

        			var arrData = [];
        			arrData[0] = obj.getSelectedRows();
        			arrData[1] = obj.name;
        			arrData[2] = obj;

        			e.dragdata = arrData;

        			return true;
        			break;

        		case "Grid01" :
        			this.fv_flag = "newList";

        			var arrData = [];
        			arrData[0] = obj.getSelectedRows();
        			arrData[1] = obj.name;
        			arrData[2] = obj;

        			e.dragdata = arrData;

        			return true;
        			break;
        	}
        };

        this.fn_comGridOnDrop = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "Grid00" :
        			if (this.fv_flag == "orgList")
        			{
        				var nRowPos = e.row;
        				var nInsertRow = e.row;
        				var i;

        				for (i = 0; i < this.arrRowInfo.length; i++)
        				{
        					if (i > 0) {
        						nRowPos++;

        						this.ds_list.moveRow(this.arrRowInfo[i], nRowPos);
        					} else {
        						this.ds_list.moveRow(this.arrRowInfo[i], nRowPos);
        					}

        					this.ds_list.moveRow(this.arrRowInfo[i], nRowPos);
        				}

        				this.arrRowInfo = [];
        			}
         			else if (this.fv_flag == "newList")
        			{
        				var sSelectRows = e.dragdata[0];
        				var objDragName = e.dragdata[1];
        				var objDragGrid = e.dragdata[2];
        				var objDragDs = objDragGrid.getBindDataset();
        				var objDs = obj.getBindDataset();

        				if (objDragName != obj.name) {
        					this.gfn_SetMoveData(objDragDs, objDs, sSelectRows, e.row);
        				}
         			}

        			// 정렬 설정
        			//this.ds_list.set_keystring("S:product+time");
        			this.ds_list.set_keystring("S:time");

        			// 차트 생성
        			this.set_Schedules_Graph();
        			break;

        		case "Grid01" :
        			var sSelectRows = e.dragdata[0];
        			var objDragName = e.dragdata[1];
        			var objDragGrid = e.dragdata[2];
        			var objDragDs = objDragGrid.getBindDataset();
        			var objDs = obj.getBindDataset();

        			if (objDragName != obj.name) {
        				this.gfn_SetMoveData(objDragDs, objDs, sSelectRows, e.row);
        			}

        			// 동적 생성 Button 초기화
        			for (var i = this.divGantt_Graph01.form.components.length - 1; i >= 0; i--)
        			{
        				if (this.divGantt_Graph01.form.components[i] == "[object Button]") {
        					var objComp = this.divGantt_Graph01.form.removeChild(this.divGantt_Graph01.form.components[i].name);
        					objComp.destroy();
        				}
        			}

        			// 차트 생성
        			this.set_Schedules_Graph();
        			break;
        	}
        };

        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	var strNewVal = e.newvalue;

        	if (!this.gfn_IsNull(strNewVal) && this.fv_DragDataFlag != "drop")
        	{
        		// 동적 생성 Button 초기화
        		for (var i = this.divGantt_Graph01.form.components.length - 1; i >= 0; i--)
        		{
        			if (this.divGantt_Graph01.form.components[i] == "[object Button]") {
        				var objComp = this.divGantt_Graph01.form.removeChild(this.divGantt_Graph01.form.components[i].name);
        				objComp.destroy();
        			}
        		}

        		// 차트 생성
        		this.set_Schedules_Graph();

        		this.divGantt_Graph01.form.resetScroll();
        	}
        	else
        	{
        		return;
        	}
        };

        /*********************************************************************
         * 함 수 명 	: gfn_IsNull
         * 함수설명 	: NULL 여부 체크
         * 입    력 	: 문자열
         * 결    과 	: Boolean형의 여부	- null = true, Not Null = false
         *********************************************************************/
        this.gfn_IsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

        	var v_ChkStr = new String(sValue);

            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0) return true;

            return false;
        }

        /******************************************************************************
         * Function Name: gfn_SetMoveData
         * Description  : Dataset의 Data 이동
         * Arguments    : objFromDs		{object} 		값을 보내주는 Dataset
        				  objToDs		{object} 		값을 받는 Dataset
        				  FromRow		{array,number} 	보내주는 ROW
        				  nToRow		{number} 		받는 ROW
        				  sMoveType		{stirng]		Move Type(A : add row | I : insert row[default]);
         * Return       : d없음
         ******************************************************************************/
        this.gfn_SetMoveData = function(objFromDs, objToDs, FromRow, nToRow, sMoveType)
        {
        	if (this.gfn_IsNull(nToRow)) {
        		nToRow = -1;
        	}

        // 	if (this.gfn_IsNull(sMoveType)) {
        // 		sMoveType = "I";
        // 	}

        	var arrFromRow;
        	var nRow;
        	var nInsertRow = nToRow;
        	var i;

        	if (FromRow == -1) return;

        	if (typeof(FromRow) == "number") {
        		arrFromRow = [];
        		arrFromRow.push(FromRow);
        	} else {
        		arrFromRow = FromRow;
        	}

        	for (i = 0; i < arrFromRow.length; i++)
        	{
        		if (nToRow > -1)
        		{
        			if (sMoveType == "I") {
        				nRow = objToDs.insertRow(nInsertRow);
        			} else {
        				nRow = objToDs.addRow();
        			}
        		}
        		else
        		{
        			nRow = objToDs.addRow();
        		}

        		objToDs.copyRow(nRow, objFromDs, arrFromRow[i]);

        		nInsertRow++;
        	}

        	for (i = arrFromRow.length-1; i > -1; i--)
        	{
        		objFromDs.deleteRow(arrFromRow[i]);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.this_onload,this);
            this.addEventHandler("ontimer",this.zoom_test_ontimer,this);
            this.addEventHandler("ondragmove",this.gantt_ondragmove,this);
            this.btnIn.addEventHandler("onclick",this.btnZoom_onclick,this);
            this.btnOut.addEventHandler("onclick",this.btnZoom_onclick,this);
            this.divGantt.addEventHandler("ondragmove",this.divGantt_ondragmove,this);
            this.divGantt.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.divGantt.addEventHandler("onclick",this.divGantt_onclick,this);
            this.divGantt.form.pdiv_select.addEventHandler("onpopup",this.pdiv_select_onpopup,this);
            this.divGantt.form.pdiv_select.addEventHandler("oncloseup",this.pdiv_select_oncloseup,this);
            this.search.addEventHandler("onclick",this.Button02_onclick,this);
            this.cmb_ComponentCount.addEventHandler("onitemchanged",this.cmb_ComponentCount_onitemchanged,this);
            this.divGantt_Graph01.addEventHandler("ondrop",this.divGantt_Graph01_ondrop,this);
            this.div_Side_B.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.div_Side_C.addEventHandler("ondrop",this.divGantt_ondrop,this);
            this.Grid01.addEventHandler("ondrag",this.fn_comGridOnDrag,this);
            this.Grid01.addEventHandler("ondrop",this.fn_comGridOnDrop,this);
            this.Grid00.addEventHandler("ondrop",this.fn_comGridOnDrop,this);
            this.Grid00.addEventHandler("ondrag",this.fn_comGridOnDrag,this);
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

        this.loadIncludeScript("poc02_Gantt.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
