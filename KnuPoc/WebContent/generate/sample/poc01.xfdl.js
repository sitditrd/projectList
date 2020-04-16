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
            this.set_titletext("조회화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,708);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lst", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">계좌이체</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">RND카드</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">문헌구입비</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">회의비</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">기타수당</Col></Row><Row><Col id=\"data\">여비</Col><Col id=\"code\">6</Col></Row><Row><Col id=\"data\">선출장여비</Col><Col id=\"code\">7</Col></Row><Row><Col id=\"data\">교육훈련비</Col><Col id=\"code\">8</Col></Row><Row><Col id=\"data\">야근및특근식대</Col><Col id=\"code\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"지급유형\" type=\"STRING\" size=\"256\"/><Column id=\"내역서식\" type=\"STRING\" size=\"256\"/><Column id=\"예산비목\" type=\"STRING\" size=\"256\"/><Column id=\"지급처구분\" type=\"STRING\" size=\"256\"/><Column id=\"지급처\" type=\"STRING\" size=\"256\"/><Column id=\"증빙금액\" type=\"STRING\" size=\"256\"/><Column id=\"사용일자\" type=\"STRING\" size=\"256\"/><Column id=\"전송여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\"/><Col id=\"No\">1</Col><Col id=\"지급유형\">RND카드</Col><Col id=\"내역서식\">회의비</Col><Col id=\"예산비목\">회의비</Col><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">포램풍동점</Col><Col id=\"증빙금액\">65,000</Col><Col id=\"사용일자\">2018-03-06</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">2</Col><Col id=\"지급유형\">RND카드</Col><Col id=\"내역서식\">회의비</Col><Col id=\"예산비목\">회의비</Col><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">일산수산물시장</Col><Col id=\"증빙금액\">200,000</Col><Col id=\"사용일자\">2018-03-07</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">3</Col><Col id=\"지급유형\">RND카드</Col><Col id=\"내역서식\">회의비</Col><Col id=\"예산비목\">회의비</Col><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">(주)스타럭스 교토</Col><Col id=\"증빙금액\">47,800</Col><Col id=\"사용일자\">2018-03-15</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">4</Col><Col id=\"지급유형\">RND카드</Col><Col id=\"내역서식\">회의비</Col><Col id=\"예산비목\">회의비</Col><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">훈장골</Col><Col id=\"증빙금액\">170,000</Col><Col id=\"사용일자\">2018-03-19</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">5</Col><Col id=\"지급유형\">RND카드</Col><Col id=\"내역서식\">회의비</Col><Col id=\"예산비목\">회의비</Col><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">(주)송담 추어탕</Col><Col id=\"증빙금액\">45,000</Col><Col id=\"사용일자\">2018-03-20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Total", this);
            obj._setContents("<ColumnInfo><Column id=\"지급처구분\" type=\"STRING\" size=\"256\"/><Column id=\"지급처\" type=\"STRING\" size=\"256\"/><Column id=\"증빙금액\" type=\"STRING\" size=\"256\"/><Column id=\"예산비목\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">(주)스타벅스 교토</Col><Col id=\"증빙금액\">650000</Col><Col id=\"예산비목\">650000</Col></Row><Row><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">(주)스타벅스 교토</Col><Col id=\"증빙금액\">650000</Col><Col id=\"예산비목\">650000</Col></Row><Row><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">(주)스타벅스 교토</Col><Col id=\"증빙금액\">2000000</Col><Col id=\"예산비목\">478000</Col></Row><Row><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">포램풍동점</Col><Col id=\"증빙금액\">478000</Col><Col id=\"예산비목\">2000000</Col></Row><Row><Col id=\"지급처구분\">거래처</Col><Col id=\"지급처\">일산수산물시장</Col><Col id=\"증빙금액\">200500</Col><Col id=\"예산비목\">200500</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","0",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("연구비신청");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","34",null,"126","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_box01");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","11","11","80","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("연구책임자 ");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","87","11","94","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_value("김성민");
            obj.set_cssclass("edit_WF_basic");
            obj.set_text("김성민");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","181","11","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchSmall");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","Button00:3","11","93","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_value("20090095");
            obj.set_cssclass("edit_WF_basic");
            obj.set_text("20090095");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","306","11","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_refresh");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","379","11","48","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","417","11","62","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("교수");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","490","11","48","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","554","11","85","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("서울캠퍼스");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","641","11","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("의생명공학과");
            obj.set_cssclass("sta_WF_output");
            obj.set_font("normal/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","11","46","68","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("연구과제");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","87","46","139","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_value("S-2018-A0435-00015");
            obj.set_cssclass("edit_WF_basic");
            obj.set_text("S-2018-A0435-00015");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","226","46","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_SchSmall");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","259","46","220","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("의료기기 등 안전관리를 위한 기획연구");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","490","46","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("과제기간");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","554","46","85","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("2018-02-01");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","643","46","23","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","658","46","83","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("2018-02-01");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15",null,"46","70","30","47",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("과제년도");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16",null,"46","45","30","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("2018");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","11","81","67","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("지원기관");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","87","81","52","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("A0435");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","142","81","127","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("식품의약품안전처");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21","299","81","67","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("지원사업 ");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","362","81","52","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("00940");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","417","81","62","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("연구용역");
            obj.set_cssclass("sta_WF_output");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static25","490","81","67","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","554","81","85","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26",null,"81","80","30","168",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("보관철번호");
            obj.set_cssclass("sta_WF_label01LB");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03",null,"81","100","30","73",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_value("2017-1664-00");
            obj.set_cssclass("edit_WF_basic");
            obj.set_text("2017-1664-00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_detail",null,"81","61","30","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_btnY");
            obj.set_text("상세검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_expand","50.00%","159","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","170",null,"106","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("총연구비");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","Static01:-1","0","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("100,000,000");
            obj.set_cssclass("sta_WF_output01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","Static05:-1","0","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("미사용잔액①");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","Static02:-1","0","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_output01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","Static06:-1","0","167","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("이자수입액②");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","Static03:-1","0",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("17,058");
            obj.set_cssclass("sta_WF_output01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","0","33","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("기타수입액③");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","Static04:-1","33","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_output01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","Static08:-1","33","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("입금총액④");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","Static00:-1","33","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("100,000,000");
            obj.set_cssclass("sta_WF_outputBlue");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","Static09:-1","33","167","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("집행액⑤");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","Static10:-1","33",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("91,406,147");
            obj.set_cssclass("sta_WF_outputRed");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","0","66","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("집행대기액⑥");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","Static12:-1","66","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("-479,998");
            obj.set_cssclass("sta_WF_outputRed");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","Static13:-1","66","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("부가세⑦");
            obj.set_cssclass("sta_WF_label01T");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","Static14:-1","66","16.63%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("9,090,909");
            obj.set_cssclass("sta_WF_outputRed");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","Static15:-1","66","167","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("잔액\r\n(①+②+③+④-⑤-⑥-⑦)");
            obj.set_cssclass("sta_WF_label01R");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","Static16:-1","66",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_outputRed");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div03","0","282",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tab03","394","0","193","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("잔액조회");
            obj.set_cssclass("btn_WF_tab,");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_tab02","202","0","193","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("신청상세");
            obj.set_cssclass("btn_WF_tab,");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_tab01","10","0","193","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("신청차수");
            obj.set_cssclass("btn_WF_tabA");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div02","10",null,null,"377","10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_tabBorder");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","50",null,"274","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\" band=\"head\"/><Row size=\"34\"/><Row size=\"34\"/><Row size=\"34\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"지급유형\"/><Cell col=\"3\" text=\"내역서식\"/><Cell col=\"4\" text=\"예산비목\"/><Cell row=\"1\" text=\"지급처구분\"/><Cell row=\"1\" col=\"1\" text=\"지급처\"/><Cell row=\"1\" col=\"2\" text=\"증빙금액\"/><Cell row=\"1\" col=\"3\" text=\"사용일자\"/><Cell row=\"1\" col=\"4\" text=\"전송여부\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\"/><Cell col=\"2\" text=\"bind:지급유형\"/><Cell col=\"3\" text=\"bind:내역서식\"/><Cell col=\"4\" text=\"bind:예산비목\"/><Cell row=\"1\" text=\"bind:지급처구분\"/><Cell row=\"1\" col=\"1\" text=\"bind:지급처\"/><Cell row=\"1\" col=\"2\" text=\"bind:증빙금액\"/><Cell row=\"1\" col=\"3\" text=\"bind:사용일자\"/><Cell row=\"1\" col=\"4\" text=\"bind:전송여부\"/></Band><Band id=\"summary\"><Cell text=\"신청총액\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"114\"/><Column size=\"114\"/><Column size=\"114\"/><Column size=\"114\"/><Column size=\"114\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"지급유형상세\"/><Cell col=\"3\" text=\"내역서식상세\"/><Cell col=\"4\" text=\"예산비목상세\"/><Cell row=\"1\" text=\"지급처구분\"/><Cell row=\"1\" col=\"1\" text=\"지급처상세\"/><Cell row=\"1\" col=\"2\" text=\"증빙금액상세\"/><Cell row=\"1\" col=\"3\" text=\"사용일자상세\"/><Cell row=\"1\" col=\"4\" text=\"전송여부상세\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:No\"/><Cell col=\"2\" text=\"bind:지급유형\"/><Cell col=\"3\" text=\"bind:내역서식\"/><Cell col=\"4\" text=\"bind:예산비목\"/><Cell row=\"1\" text=\"bind:지급처구분\"/><Cell row=\"1\" col=\"1\" text=\"bind:지급처\"/><Cell row=\"1\" col=\"2\" text=\"bind:증빙금액\"/><Cell row=\"1\" col=\"3\" text=\"bind:사용일자\"/><Cell row=\"1\" col=\"4\" text=\"bind:전송여부\"/></Band></Format><Format id=\"format01\"><Columns><Column size=\"40\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"131\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"지급처구분\"/><Cell col=\"2\" text=\"지급처\"/><Cell col=\"3\" text=\"증빙금액\"/><Cell col=\"4\" text=\"예산비목\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:지급처구분\"/><Cell col=\"2\" text=\"bind:지급처\"/><Cell col=\"3\" text=\"bind:증빙금액\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:예산비목\" displaytype=\"number\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","10","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("계좌이체");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","83","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("RND카드");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","156","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("문헌구입비");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03","229","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("회의비");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button04","302","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("기타수당");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button05","375","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("여비");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button06","448","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("선출장여비");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button07","521","334","70","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("교육훈련비");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button08","594","334","90","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("야근및특근식대");
            obj.set_cssclass("btn_WF_blue01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","92","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("신청번호/상태 :");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","103","10","106","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("S-2-2018-03-1892");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","213","10","22","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("8차");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","249","10","74","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo01","326","10","164","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo02","493","10","74","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button09",null,"10","30","30","271",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_prev");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button10",null,"10","30","30","239",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_next");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_tabSrch01",null,"10","80","30","154",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_text("전자증빙출력");
            obj.set_cssclass("btn_WF_btnY");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_tabSrch02",null,"10","48","30","103",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_btnY");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_tabSrch03",null,"10","90","30","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_text("영수증첨부지");
            obj.set_cssclass("btn_WF_btnY");
            this.Div02.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,708,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static01.set_taborder("0");
                p.Static01.set_text("연구책임자 ");
                p.Static01.set_cssclass("sta_WF_label01LB");
                p.Static01.move("11","11","80","30",null,null);

                p.Edit00.set_taborder("30");
                p.Edit00.set_value("김성민");
                p.Edit00.set_cssclass("edit_WF_basic");
                p.Edit00.move("87","11","94","30",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_SchSmall");
                p.Button00.move("181","11","30","30",null,null);

                p.Edit01.set_taborder("3");
                p.Edit01.set_value("20090095");
                p.Edit01.set_cssclass("edit_WF_basic");
                p.Edit01.move("Button00:3","11","93","30",null,null);

                p.Button02.set_taborder("2");
                p.Button02.set_cssclass("btn_WF_refresh");
                p.Button02.move("306","11","30","30",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("직급");
                p.Static00.set_cssclass("sta_WF_label01LB");
                p.Static00.move("379","11","48","30",null,null);

                p.Static02.set_taborder("5");
                p.Static02.set_text("교수");
                p.Static02.set_cssclass("sta_WF_output");
                p.Static02.move("417","11","62","30",null,null);

                p.Static04.set_taborder("7");
                p.Static04.set_text("소속");
                p.Static04.set_cssclass("sta_WF_label01LB");
                p.Static04.move("490","11","48","30",null,null);

                p.Static03.set_taborder("6");
                p.Static03.set_text("서울캠퍼스");
                p.Static03.set_cssclass("sta_WF_output");
                p.Static03.move("554","11","85","30",null,null);

                p.Static05.set_taborder("8");
                p.Static05.set_text("의생명공학과");
                p.Static05.set_cssclass("sta_WF_output");
                p.Static05.set_font("normal/normal \"Arial\"");
                p.Static05.move("641","11","100","30",null,null);

                p.Static07.set_taborder("9");
                p.Static07.set_text("연구과제");
                p.Static07.set_cssclass("sta_WF_label01LB");
                p.Static07.move("11","46","68","30",null,null);

                p.Edit02.set_taborder("11");
                p.Edit02.set_value("S-2018-A0435-00015");
                p.Edit02.set_cssclass("edit_WF_basic");
                p.Edit02.move("87","46","139","30",null,null);

                p.Button01.set_taborder("10");
                p.Button01.set_cssclass("btn_WF_SchSmall");
                p.Button01.set_text("");
                p.Button01.move("226","46","30","30",null,null);

                p.Static08.set_taborder("12");
                p.Static08.set_text("의료기기 등 안전관리를 위한 기획연구");
                p.Static08.set_cssclass("sta_WF_output");
                p.Static08.move("259","46","220","30",null,null);

                p.Static10.set_taborder("13");
                p.Static10.set_text("과제기간");
                p.Static10.set_cssclass("sta_WF_label01LB");
                p.Static10.move("490","46","70","30",null,null);

                p.Static11.set_taborder("14");
                p.Static11.set_text("2018-02-01");
                p.Static11.set_cssclass("sta_WF_output");
                p.Static11.move("554","46","85","30",null,null);

                p.Static13.set_taborder("16");
                p.Static13.set_text("~");
                p.Static13.move("643","46","23","30",null,null);

                p.Static12.set_taborder("15");
                p.Static12.set_text("2018-02-01");
                p.Static12.set_cssclass("sta_WF_output");
                p.Static12.move("658","46","83","30",null,null);

                p.Static15.set_taborder("17");
                p.Static15.set_text("과제년도");
                p.Static15.set_cssclass("sta_WF_label01LB");
                p.Static15.move(null,"46","70","30","47",null);

                p.Static16.set_taborder("18");
                p.Static16.set_text("2018");
                p.Static16.set_cssclass("sta_WF_output");
                p.Static16.move(null,"46","45","30","10",null);

                p.Static17.set_taborder("19");
                p.Static17.set_text("지원기관");
                p.Static17.set_cssclass("sta_WF_label01LB");
                p.Static17.move("11","81","67","30",null,null);

                p.Static18.set_taborder("20");
                p.Static18.set_text("A0435");
                p.Static18.set_cssclass("sta_WF_output");
                p.Static18.move("87","81","52","30",null,null);

                p.Static20.set_taborder("21");
                p.Static20.set_text("식품의약품안전처");
                p.Static20.set_cssclass("sta_WF_output");
                p.Static20.move("142","81","127","30",null,null);

                p.Static21.set_taborder("22");
                p.Static21.set_text("지원사업 ");
                p.Static21.set_cssclass("sta_WF_label01LB");
                p.Static21.move("299","81","67","30",null,null);

                p.Static22.set_taborder("23");
                p.Static22.set_text("00940");
                p.Static22.set_cssclass("sta_WF_output");
                p.Static22.move("362","81","52","30",null,null);

                p.Static23.set_taborder("24");
                p.Static23.set_text("연구용역");
                p.Static23.set_cssclass("sta_WF_output");
                p.Static23.move("417","81","62","30",null,null);

                p.Static25.set_taborder("25");
                p.Static25.set_text("승인상태");
                p.Static25.set_cssclass("sta_WF_label01LB");
                p.Static25.move("490","81","67","30",null,null);

                p.Combo00.set_taborder("26");
                p.Combo00.set_text("Combo00");
                p.Combo00.set_index("-1");
                p.Combo00.move("554","81","85","30",null,null);

                p.Static26.set_taborder("27");
                p.Static26.set_text("보관철번호");
                p.Static26.set_cssclass("sta_WF_label01LB");
                p.Static26.move(null,"81","80","30","168",null);

                p.Edit03.set_taborder("29");
                p.Edit03.set_value("2017-1664-00");
                p.Edit03.set_cssclass("edit_WF_basic");
                p.Edit03.move(null,"81","100","30","73",null);

                p.btn_detail.set_taborder("28");
                p.btn_detail.set_cssclass("btn_WF_btnY");
                p.btn_detail.set_text("상세검색");
                p.btn_detail.move(null,"81","61","30","10",null);
                // this.Div00 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static01.set_taborder("0");
                p.Static01.set_text("총연구비");
                p.Static01.set_cssclass("sta_WF_label01T");
                p.Static01.move("0","0","16.63%","34",null,null);

                p.Static05.set_taborder("1");
                p.Static05.set_text("100,000,000");
                p.Static05.set_cssclass("sta_WF_output01");
                p.Static05.move("Static01:-1","0","16.63%","34",null,null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("미사용잔액①");
                p.Static02.set_cssclass("sta_WF_label01T");
                p.Static02.move("Static05:-1","0","16.63%","34",null,null);

                p.Static06.set_taborder("3");
                p.Static06.set_text("0");
                p.Static06.set_cssclass("sta_WF_output01");
                p.Static06.move("Static02:-1","0","16.63%","34",null,null);

                p.Static03.set_taborder("4");
                p.Static03.set_text("이자수입액②");
                p.Static03.set_cssclass("sta_WF_label01T");
                p.Static03.move("Static06:-1","0","167","34",null,null);

                p.Static07.set_taborder("5");
                p.Static07.set_text("17,058");
                p.Static07.set_cssclass("sta_WF_output01");
                p.Static07.move("Static03:-1","0",null,"34","0",null);

                p.Static04.set_taborder("6");
                p.Static04.set_text("기타수입액③");
                p.Static04.set_cssclass("sta_WF_label01T");
                p.Static04.move("0","33","16.63%","34",null,null);

                p.Static08.set_taborder("7");
                p.Static08.set_text("0");
                p.Static08.set_cssclass("sta_WF_output01");
                p.Static08.move("Static04:-1","33","16.63%","34",null,null);

                p.Static00.set_taborder("8");
                p.Static00.set_text("입금총액④");
                p.Static00.set_cssclass("sta_WF_label01T");
                p.Static00.move("Static08:-1","33","16.63%","34",null,null);

                p.Static09.set_taborder("9");
                p.Static09.set_text("100,000,000");
                p.Static09.set_cssclass("sta_WF_outputBlue");
                p.Static09.move("Static00:-1","33","16.63%","34",null,null);

                p.Static10.set_taborder("10");
                p.Static10.set_text("집행액⑤");
                p.Static10.set_cssclass("sta_WF_label01T");
                p.Static10.move("Static09:-1","33","167","34",null,null);

                p.Static11.set_taborder("11");
                p.Static11.set_text("91,406,147");
                p.Static11.set_cssclass("sta_WF_outputRed");
                p.Static11.move("Static10:-1","33",null,"34","0",null);

                p.Static12.set_taborder("12");
                p.Static12.set_text("집행대기액⑥");
                p.Static12.set_cssclass("sta_WF_label01T");
                p.Static12.move("0","66","16.63%","34",null,null);

                p.Static13.set_taborder("13");
                p.Static13.set_text("-479,998");
                p.Static13.set_cssclass("sta_WF_outputRed");
                p.Static13.move("Static12:-1","66","16.63%","34",null,null);

                p.Static14.set_taborder("14");
                p.Static14.set_text("부가세⑦");
                p.Static14.set_cssclass("sta_WF_label01T");
                p.Static14.move("Static13:-1","66","16.63%","34",null,null);

                p.Static15.set_taborder("15");
                p.Static15.set_text("9,090,909");
                p.Static15.set_cssclass("sta_WF_outputRed");
                p.Static15.move("Static14:-1","66","16.63%","34",null,null);

                p.Static16.set_taborder("16");
                p.Static16.set_text("잔액\r\n(①+②+③+④-⑤-⑥-⑦)");
                p.Static16.set_cssclass("sta_WF_label01R");
                p.Static16.move("Static15:-1","66","167","34",null,null);

                p.Static17.set_taborder("17");
                p.Static17.set_text("0");
                p.Static17.set_cssclass("sta_WF_outputRed");
                p.Static17.move("Static16:-1","66",null,"34","0",null);
                // this.Div01 }}


                // {{ this.Div03
                p = rootobj.Div03.form;

                p.btn_tab03.set_taborder("0");
                p.btn_tab03.set_text("잔액조회");
                p.btn_tab03.set_cssclass("btn_WF_tab,");
                p.btn_tab03.move("394","0","193","40",null,null);

                p.btn_tab02.set_taborder("1");
                p.btn_tab02.set_text("신청상세");
                p.btn_tab02.set_cssclass("btn_WF_tab,");
                p.btn_tab02.move("202","0","193","40",null,null);

                p.btn_tab01.set_taborder("2");
                p.btn_tab01.set_text("신청차수");
                p.btn_tab01.set_cssclass("btn_WF_tabA");
                p.btn_tab01.move("10","0","193","40",null,null);
                // this.Div03 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds_grd");
                p.Grid00.set_autosizingtype("none");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("10","50",null,"274","10",null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("계좌이체");
                p.Button00.set_cssclass("btn_WF_blue01");
                p.Button00.move("10","334","70","30",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("RND카드");
                p.Button01.set_cssclass("btn_WF_blue01");
                p.Button01.move("83","334","70","30",null,null);

                p.Button02.set_taborder("3");
                p.Button02.set_text("문헌구입비");
                p.Button02.set_cssclass("btn_WF_blue01");
                p.Button02.move("156","334","70","30",null,null);

                p.Button03.set_taborder("4");
                p.Button03.set_text("회의비");
                p.Button03.set_cssclass("btn_WF_blue01");
                p.Button03.move("229","334","70","30",null,null);

                p.Button04.set_taborder("5");
                p.Button04.set_text("기타수당");
                p.Button04.set_cssclass("btn_WF_blue01");
                p.Button04.move("302","334","70","30",null,null);

                p.Button05.set_taborder("6");
                p.Button05.set_text("여비");
                p.Button05.set_cssclass("btn_WF_blue01");
                p.Button05.move("375","334","70","30",null,null);

                p.Button06.set_taborder("7");
                p.Button06.set_text("선출장여비");
                p.Button06.set_cssclass("btn_WF_blue01");
                p.Button06.move("448","334","70","30",null,null);

                p.Button07.set_taborder("8");
                p.Button07.set_text("교육훈련비");
                p.Button07.set_cssclass("btn_WF_blue01");
                p.Button07.move("521","334","70","30",null,null);

                p.Button08.set_taborder("9");
                p.Button08.set_text("야근및특근식대");
                p.Button08.set_cssclass("btn_WF_blue01");
                p.Button08.move("594","334","90","30",null,null);

                p.Static00.set_taborder("10");
                p.Static00.set_text("신청번호/상태 :");
                p.Static00.move("10","10","92","30",null,null);

                p.Static01.set_taborder("11");
                p.Static01.set_text("S-2-2018-03-1892");
                p.Static01.move("103","10","106","30",null,null);

                p.Static02.set_taborder("12");
                p.Static02.set_text("8차");
                p.Static02.move("213","10","22","30",null,null);

                p.Combo00.set_taborder("13");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("249","10","74","30",null,null);

                p.Combo01.set_taborder("14");
                p.Combo01.set_text("Combo00");
                p.Combo01.move("326","10","164","30",null,null);

                p.Combo02.set_taborder("15");
                p.Combo02.set_text("Combo00");
                p.Combo02.move("493","10","74","30",null,null);

                p.Button09.set_taborder("16");
                p.Button09.set_cssclass("btn_WF_prev");
                p.Button09.move(null,"10","30","30","271",null);

                p.Button10.set_taborder("17");
                p.Button10.set_cssclass("btn_WF_next");
                p.Button10.move(null,"10","30","30","239",null);

                p.btn_tabSrch01.set_taborder("18");
                p.btn_tabSrch01.set_text("전자증빙출력");
                p.btn_tabSrch01.set_cssclass("btn_WF_btnY");
                p.btn_tabSrch01.move(null,"10","80","30","154",null);

                p.btn_tabSrch02.set_taborder("19");
                p.btn_tabSrch02.set_text("출력");
                p.btn_tabSrch02.set_cssclass("btn_WF_btnY");
                p.btn_tabSrch02.move(null,"10","48","30","103",null);

                p.btn_tabSrch03.set_taborder("20");
                p.btn_tabSrch03.set_text("영수증첨부지");
                p.btn_tabSrch03.set_cssclass("btn_WF_btnY");
                p.btn_tabSrch03.move(null,"10","90","30","10",null);
                // this.Div02 }}
                p = rootobj;
                p.set_titletext("조회화면");

                p.Static00.set_taborder("0");
                p.Static00.set_text("연구비신청");
                p.Static00.set_cssclass("sta_WF_title");
                p.Static00.move("10","0",null,"34","10",null);

                p.Div00.set_taborder("1");
                p.Div00.set_cssclass("div_WF_box01");
                p.Div00.set_text("");
                p.Div00.set_formscrollbartype("none none");
                p.Div00.move("10","34",null,"126","10",null);

                p.btn_expand.set_taborder("4");
                p.btn_expand.set_visible("false");
                p.btn_expand.move("50.00%","159","24","24",null,null);

                p.Div01.set_taborder("2");
                p.Div01.set_text("Div01");
                p.Div01.move("10","170",null,"106","10",null);

                p.Div03.set_taborder("5");
                p.Div03.set_text("Div03");
                p.Div03.move("0","282",null,"40","0",null);

                p.Div02.set_taborder("3");
                p.Div02.set_cssclass("div_WF_tabBorder");
                p.Div02.set_formscrollbartype("none none");
                p.Div02.move("10",null,null,"377","10","10");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,Tablet_screen",768,974,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static25.move("10","187","67","30",null,null);

                p.Combo00.move("Static25:13","187","35.12%","30",null,null);

                p.Static26.move("Combo00:16","187","80","30",null,null);

                p.btn_detail.set_cssclass("btn_WF_btnY");
                p.btn_detail.move("Edit03:3","187",null,"30","10",null);

                p.Edit03.move("Static26:4","187","21.98%","30",null,null);

                p.Static17.move("10","152","80","30",null,null);

                p.Static18.move("Static17:-1","152","17.43%","30",null,null);

                p.Static20.move("Static18:2","152","17.43%","30",null,null);

                p.Static21.move("Static20:16","152","80","30",null,null);

                p.Static22.move("Static21:5","152","97","30",null,null);

                p.Static23.set_text("연구용역");
                p.Static23.move("Static22:3","152",null,"30","10",null);

                p.Static15.move("Static12:16","117","80","30",null,null);

                p.Static16.set_text("2018");
                p.Static16.move("Static15:5","117",null,"30","10",null);

                p.Static10.move("10","117","80","30",null,null);

                p.Static11.move("Static10:-1","117","16.09%","30",null,null);

                p.Static12.move("Static11:18.33%","117","16.09%","30",null,null);

                p.Static13.set_textAlign("center");
                p.Static13.move("Static11:-1","117","23","30",null,null);

                p.Static01.move("10","12","80","30",null,null);

                p.Static07.move("10","47","80","30",null,null);

                p.Static00.move("10","82","80","30",null,null);

                p.Static02.move("Static00:-1","82","35.25%","30",null,null);

                p.Static03.move("Static04:5","82","13.00%","30",null,null);

                p.Static04.move("Static02:16","82","80","30",null,null);

                p.Static05.move("Static03:3","82",null,"30","10",null);

                p.Edit02.move("Static07:-1","47","31.23%","30",null,null);

                p.Static08.move("Button01:3","47",null,"30","10",null);

                p.Button00.move("Edit00:0","12","30","30",null,null);

                p.Edit01.move("Button00:3","12","31.23%","30",null,null);

                p.Button02.move("Edit01:-1","12","30","30",null,null);

                p.Button01.move("Edit02:0","47","30","30",null,null);

                p.Edit00.move("Static01:-1","12","31.23%","30",null,null);
                // this.Div00 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static16.move("0","148","186","38",null,null);

                p.Static17.move("Static16:-1","148",null,"38","0",null);

                p.Static04.move("Static07:-1","37","24.87%","38",null,null);

                p.Static08.set_text("0");
                p.Static08.move("Static04:-1","37",null,"38","0",null);

                p.Static00.move("0","74","186","38",null,null);

                p.Static09.set_text("100,000,000");
                p.Static09.move("Static00:-1","74","25.00%","38",null,null);

                p.Static10.move("Static09:-1","74","24.87%","38",null,null);

                p.Static11.set_text("0");
                p.Static11.move("Static10:-1","74",null,"38","0",null);

                p.Static12.move("0","111","186","38",null,null);

                p.Static13.move("Static12:-1","111","25.00%","38",null,null);

                p.Static14.move("Static13:-1","111","24.87%","38",null,null);

                p.Static15.move("Static14:-1","111",null,"38","0",null);

                p.Static03.move("0","37","186","38",null,null);

                p.Static07.move("Static03:-1","37","25.00%","38",null,null);

                p.Static06.set_text("0");
                p.Static06.move("Static02:-1","0",null,"38","0",null);

                p.Static02.move("Static05:-1","0","24.87%","38",null,null);

                p.Static05.move("Static01:-1","0","25.13%","38",null,null);

                p.Static01.move("0","0","186","38",null,null);
                // this.Div01 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Static02.move("220","5","48","30",null,null);

                p.Combo00.move("10","42","74","30",null,null);

                p.Combo01.move("87","42","130","30",null,null);

                p.Combo02.move("220","42","74","30",null,null);

                p.Button09.move(null,"42","30","30","255",null);

                p.Button10.move(null,"42","30","30","223",null);

                p.btn_tabSrch01.move(null,"42","80","30","140",null);

                p.btn_tabSrch02.move(null,"42","48","30","90",null);

                p.btn_tabSrch03.move(null,"42","78","30","10",null);

                p.Grid00.move("10","80",null,"280","10",null);

                p.Button00.move("11","371","100","30",null,null);

                p.Button01.move("114","371","100","30",null,null);

                p.Button02.move("217","371","100","30",null,null);

                p.Button03.move("320","371","100","30",null,null);

                p.Button04.move("423","371","100","30",null,null);

                p.Button05.move("11","404","100","30",null,null);

                p.Button06.move("114","404","100","30",null,null);

                p.Button07.move("217","404","100","30",null,null);

                p.Button08.move("320","404","100","30",null,null);

                p.Static00.move("10","5","92","30",null,null);

                p.Static01.set_text("S-2-2018-03-1892");
                p.Static01.move("103","5","106","30",null,null);
                // this.Div02 }}
                p = rootobj;
                p.Div02.move("10","509",null,null,"10","10");

                p.Div01.move("10","274",null,"192","10",null);

                p.Div00.set_text("");
                p.Div00.move("10","34",null,"230","10",null);

                p.btn_expand.set_visible("false");
                p.btn_expand.move("48.44%","263","24","24",null,null);

                p.Div03.move("0","470",null,"40","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","Phone_screen,Desktop_screen,Tablet_screen",480,1690,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.Div00
                p = rootobj.Div00.form;

                p.Static00.move("11","105","80","40",null,null);

                p.Static02.move("Static00:10","105",null,"40","10",null);

                p.Static03.move("Static04:10","155","168","40",null,null);

                p.Static04.move("11","155","80","40",null,null);

                p.Static05.set_maxwidth("");
                p.Static05.move("Static03:3","155",null,"40","10",null);

                p.Static07.move("11","205","80","40",null,null);

                p.Button01.move(null,"205","40","40","10",null);

                p.Static08.move("Static07:10","250",null,"40","10",null);

                p.Static10.move("11","300","80","40",null,null);

                p.Static11.move("Static10:10","300","32.75%","40",null,null);

                p.Static12.move("Static13:1","300",null,"40","10",null);

                p.Static13.move("Static11:14","300","23","40",null,null);

                p.Static15.move("11","350","80","40",null,null);

                p.Static16.move("Static15:10","350",null,"40","10",null);

                p.Edit02.move("Static07:10","205",null,"40","50",null);

                p.Static17.move("11","400","80","40",null,null);

                p.Static18.move("101","400","80","40",null,null);

                p.Static20.move("184","400",null,"40","10",null);

                p.Static21.move("11","450","80","40",null,null);

                p.Static22.move("Static21:10","450","80","40",null,null);

                p.Static23.move("Static22:3","450",null,"40","10",null);

                p.Static25.move("11","500","80","40",null,null);

                p.Combo00.move("Static25:10","500",null,"40","10",null);

                p.Static26.set_text("보관철번호");
                p.Static26.move("11","550","80","40",null,null);

                p.btn_detail.set_cssclass("btn_WF_btnY");
                p.btn_detail.move(null,"550","61","40","10",null);

                p.Edit03.move("101","550",null,"40","75",null);

                p.Button00.move(null,"10","40","40","10",null);

                p.Edit01.move("101","55",null,"40","49",null);

                p.Button02.move(null,"55","40","40","10",null);

                p.Static01.set_cssclass("sta_WF_label01LB");
                p.Static01.move("11","10","80","40",null,null);

                p.Edit00.move("101","10",null,"40","50",null);
                // this.Div00 }}


                // {{ this.Div01
                p = rootobj.Div01.form;

                p.Static03.set_text("이자수입액②");
                p.Static03.move("0","39","115","40",null,null);

                p.Static07.set_text("17,058");
                p.Static07.move("Static03:-1","39","25.00%","40",null,null);

                p.Static10.set_text("집행액⑤");
                p.Static10.move("Static09:-1","78","25.00%","40",null,null);

                p.Static11.set_text("91,406,147");
                p.Static11.move("Static10:-1","78",null,"40","0",null);

                p.Static16.move("0","156","115","40",null,null);

                p.Static17.set_text("0");
                p.Static17.move("Static16:-1","156",null,"40","0",null);

                p.Static06.move("Static02:-1","0",null,"40","0",null);

                p.Static09.set_text("100,000,000");
                p.Static09.move("Static00:-1","78","25.00%","40",null,null);

                p.Static15.set_text("");
                p.Static15.move("Static14:-1","117",null,"40","0",null);

                p.Static02.move("Static05:-1","0","25%","40",null,null);

                p.Static00.move("0","78","115","40",null,null);

                p.Static14.set_text("부가세⑦");
                p.Static14.move("Static13:-1","117","25.00%","40",null,null);

                p.Static05.move("Static01:-1","0","25%","40",null,null);

                p.Static08.set_text("0");
                p.Static08.move("Static04:-1","39",null,"40","0",null);

                p.Static13.set_text("17,058");
                p.Static13.move("Static12:-1","117","25.00%","40",null,null);

                p.Static01.move("0","0","115","40",null,null);

                p.Static04.move("Static07:-1","39","25.00%","40",null,null);

                p.Static12.move("0","117","115","40",null,null);
                // this.Div01 }}


                // {{ this.Div03
                p = rootobj.Div03.form;

                p.btn_tab01.move("10","0",null,"40","btn_tab02:-1",null);

                p.btn_tab02.set_cssclass("btn_WF_tab");
                p.btn_tab02.move("157","0",null,"40","btn_tab03:-1",null);

                p.btn_tab03.set_cssclass("btn_WF_tab");
                p.btn_tab03.move(null,"0","32.5%","40","10",null);
                // this.Div03 }}


                // {{ this.Div02
                p = rootobj.Div02.form;

                p.Grid00.move("10","162",null,"421","10",null);

                p.Button00.move("10","593","30.57%","40",null,null);

                p.Button01.set_text("RND카드");
                p.Button01.move("Button00:3","593","31.66%","40",null,null);

                p.Button02.set_text("문헌구입비");
                p.Button02.move("Button01:3","593",null,"40","10",null);

                p.Button03.set_text("회의비");
                p.Button03.move("10","638","30.57%","40",null,null);

                p.Button04.set_text("기타수당");
                p.Button04.move("Button03:3","638","31.66%","40",null,null);

                p.Button05.move("Button04:3","638",null,"40","10",null);

                p.Button06.move("10","683","30.57%","40",null,null);

                p.Button07.set_minwidth("66");
                p.Button07.set_maxwidth("");
                p.Button07.move("Button06:3","683","31.66%","40",null,null);

                p.Static00.set_cssclass("sta_WF_boldTxt");
                p.Static00.set_text("신청번호/상태");
                p.Static00.move("10","15","80","30",null,null);

                p.Static01.set_cssclass("sta_WF_basicTxt");
                p.Static01.set_text("S-2-2018-03");
                p.Static01.move("Static00:13","15","80","30",null,null);

                p.Button08.set_minwidth("88");
                p.Button08.set_maxwidth("");
                p.Button08.move("Button07:3","683",null,"40","10",null);

                p.Button09.move("10","110","40","40",null,null);

                p.Button10.move(null,"110","40","40","365",null);

                p.btn_tabSrch01.move(null,"110","95","40","185",null);

                p.btn_tabSrch02.move(null,"110","69","40","113",null);

                p.btn_tabSrch03.move(null,"110","100","40","10",null);

                p.Combo00.move("10","60","47.82%","40",null,null);

                p.Combo01.move("Combo00:3","60",null,"40","10",null);

                p.Combo02.move(null,"10","31.66%","40","10",null);

                p.Static02.set_cssclass("sta_WF_basicTxt");
                p.Static02.move("Static01:10","15","30","30",null,null);
                // this.Div02 }}
                p = rootobj;
                p.set_titletext("여비등록");
                p.set_scrollbartype("autoindicator");

                p.Div01.set_text("Div01");
                p.Div01.move("10","btn_expand:9",null,"204","10",null);

                p.Div02.set_text("");
                p.Div02.move("10","Div03:0",null,"748","10",null);

                p.btn_expand.set_visible("true");
                p.btn_expand.set_cssclass("btn_WF_expand");
                p.btn_expand.move("45.63%","Div00:-1","40","28",null,null);

                p.Div00.set_text("");
                p.Div00.move("10","45",null,"604","10",null);

                p.Static00.move("10","0",null,"45","10",null);

                p.Div03.set_text("Div03");
                p.Div03.move("0","Div01:3",null,"40","0",null);
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
        this.poc01_onload = function(obj,e)
        {
        	this.Div00.set_height(200);
        	this.resetScroll();
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	var objGrid = this.Div02.form.Grid00;

        	switch (obj.name)
        	{
        		case "btn_expand" :
        			var sFlag = obj.cssclass;

        			if (sFlag == "btn_WF_expand") {
        				this.Div00.set_height(604);
        				obj.set_cssclass("btn_WF_expandUp");
        			} else {
        				this.Div00.set_height(200);
        				obj.set_cssclass("btn_WF_expand");
        			}

        			this.resetScroll();
        			break;

        		case "btn_detail" :
        		case "btn_tabSrch01" :
        		case "btn_tabSrch02" :
        		case "btn_tabSrch03" :
        			alert(obj.text + "은(는) 개발 예정입니다.");
        			break;

        		case "btn_tab01" :
        			this.Div03.form.btn_tab01.set_cssclass("btn_WF_tabA");
        			this.Div03.form.btn_tab02.set_cssclass("btn_WF_tab,");
        			this.Div03.form.btn_tab03.set_cssclass("btn_WF_tab,");

        			objGrid.set_formatid("default");
        			objGrid.set_binddataset("ds_grd");
        			break;

        		case "btn_tab02" :
        			this.Div03.form.btn_tab01.set_cssclass("btn_WF_tab");
        			this.Div03.form.btn_tab02.set_cssclass("btn_WF_tabA,");
        			this.Div03.form.btn_tab03.set_cssclass("btn_WF_tab,");

        			objGrid.set_formatid("format00");
        			objGrid.set_binddataset("ds_grd");
        			break;

        		case "btn_tab03" :
        			this.Div03.form.btn_tab01.set_cssclass("btn_WF_tab");
        			this.Div03.form.btn_tab02.set_cssclass("btn_WF_tab,");
        			this.Div03.form.btn_tab03.set_cssclass("btn_WF_tabA,");

        			objGrid.set_formatid("format01");
        			objGrid.set_binddataset("ds_Total");
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.poc01_onload,this);
            this.Div00.form.btn_detail.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btn_expand.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div03.form.btn_tab03.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div03.form.btn_tab02.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div03.form.btn_tab01.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div02.form.btn_tabSrch01.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div02.form.btn_tabSrch02.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Div02.form.btn_tabSrch03.addEventHandler("onclick",this.fn_comBtnOnClick,this);
        };

        this.loadIncludeScript("poc01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
