(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PoC_4_2");
            this.set_titletext("일반 컴포넌트 지원여부 확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">메리트 급여통장</Col><Col id=\"Column1\">급여생활자 우대통장</Col><Col id=\"Column2\">추천</Col><Col id=\"Column3\">자세히 보기</Col></Row><Row><Col id=\"Column0\">메리트 급여통장</Col><Col id=\"Column1\">급여생활자 우대통장</Col><Col id=\"Column3\">자세히 보기</Col></Row><Row><Col id=\"Column0\">메리트 급여통장</Col><Col id=\"Column1\">급여생활자 우대통장</Col><Col id=\"Column3\">자세히 보기</Col></Row><Row><Col id=\"Column0\">메리트 급여통장</Col><Col id=\"Column1\">급여생활자 우대통장</Col><Col id=\"Column3\">자세히 보기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput_2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">차명거래 금지에 관한 사항</Col><Col id=\"Column1\">금융실명거래 및 비밀보장에 관한 법류 제 3조 제3항에 따라 불법 재산의 은닉, 자금세탁 행위, 공중협박자금조달행위 및 강제 집행의 면탈. 그 밖의 탈법행위를 목적으로 타인의 실명으로 금융거래를 하여사는 아니되며, 이를 위반 시 5년 이하의 징역 또는 5천만원 이하의 벌금에 처할 수 있습니다.</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"Column0\">예금자 보호여부 및 보호한도 안내</Col><Col id=\"Column1\">본인이 가입하는 금융상품의 예금자 보호여부 및 보호한도 (원금과 소정의 이자를 합하여 1인당 5천만원)에 대해 이해하였음을 확인합니다.</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"Column0\">은행상품 구속행위 규제제도 안내</Col><Col id=\"Column1\">신용등급이 낮은(7등급 이하)인 경우, 은행법(제 52조의 2)상 구속행위 여부 판정에 따라 신규일 1개월 이내 본인명의 대출거래가 제한될 수 있습니다.</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"Column0\">통장양도 불법성 안내</Col><Col id=\"Column1\">현금카드, 공인인증서 등을 타인에게 양/수도 (대여, 보관, 전달, 유통 포함)하는 경우, 손해배상 책임을 부담할 수 있고, 전자금융거래법에 의해 처벌받을 수 있습니다. 또한 입출금이 자유로운 예금 약관에 따라 계좌개설 등 금융거래가 제한될 수 있습니다.</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Column0\">약관 및 상품설명서 제공에 대한 동의</Col><Col id=\"Column1\">상품 설명을 듣고 충분히 이해하였으며, 상품설명서의 약관을 수령함.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput_3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1일</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\">15일</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\">20일</Col><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\">25일</Col><Col id=\"Column1\">추천</Col></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\">-1일</Col></Row><Row><Col id=\"Column0\">+1일</Col><Col id=\"Column1\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","0","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8","56",null,"72","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("  원하는 상품을 선택해주세요.");
            obj.set_font("normal 700 18pt/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","8","137",null,null,"8","8",null,null,null,null,this);
            obj.set_positionstep("0");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("expand");
            obj.set_binddataset("dsOutput");
            obj.set_background("transparent");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"50%\" height=\"150\" border=\"1px solid gray\"><Cell id=\"Cell00\" left=\"16\" top=\"38\" width=\"1228\" height=\"29\" text=\"bind:Column0\" border=\"1px solid transparent\" font=\"12px Malgun Gothic\"/><Cell id=\"Cell01\" left=\"15\" top=\"73\" width=\"1228\" height=\"37\" text=\"bind:Column1\" border=\"1px solid transparent\" font=\"normal 700 20px/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell04\" top=\"9\" width=\"34\" height=\"27\" text=\"bind:Column2\" font=\"12px Malgun Gothic\" right=\"8\" border=\"1px solid transparent\"/><Cell id=\"Cell05\" top=\"109\" width=\"132\" height=\"32\" text=\"bind:Column3\" displaytype=\"buttoncontrol\" border=\"1px solid transparent\" right=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","56",null,"72","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("  꼭 알아야 할 내용을 확인해주세요.");
            obj.set_font("normal 700 18pt/normal \"Malgun Gothic\"");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","8","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","8","8","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","8","14","733","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일반 컴포넌트 지원여부 확인");
            obj.set_cssclass("sta_WF_title02");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","8","56",null,"72","-8",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("  급여 이체일을 선택해 주세요.");
            obj.set_font("normal 700 18pt/normal \"Malgun Gothic\"");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView01","8","137",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsOutput_2");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("collapse");
            obj.set_cssclass("Listview_WF_listBig");
            obj.set_cellcheckboxsize("30");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"156\"><Cell id=\"Cell00\" left=\"56\" top=\"38\" width=\"1196\" height=\"29\" text=\"bind:Column0\" border=\"1px solid transparent\" font=\"normal bold 20px/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell01\" left=\"56\" top=\"73\" width=\"1196\" height=\"37\" text=\"bind:Column1\" border=\"1px solid transparent\" font=\"normal 13px/normal &quot;Malgun Gothic&quot;\" wordWrap=\"char\"/><Cell id=\"Cell03\" left=\"1168\" top=\"9\" width=\"84\" height=\"21\" text=\"bind:Column2\" textAlign=\"center\" border=\"1px solid transparent\" font=\"normal bold 13px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell05\" left=\"9\" top=\"38\" width=\"39\" height=\"72\" border=\"1px solid transparent\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/></Band><Band id=\"detail\" width=\"100%\" height=\"24\"/></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView03","8","136",null,"120","8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsOutput_3");
            obj.set_positionstep("2");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("collapse");
            obj.set_background("transparent");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"15%\" height=\"118\" font=\"normal 12px/normal &quot;Malgun Gothic&quot;\"><Cell id=\"Cell01\" left=\"8\" top=\"8\" width=\"100\" height=\"101\" text=\"bind:Column0\" border=\"1px solid gray\" font=\"normal bold 30px/normal &quot;Gulim&quot;\" wordWrap=\"char\" textAlign=\"center\"/><Cell id=\"Cell03\" left=\"1168\" top=\"9\" width=\"84\" height=\"21\" text=\"bind:Column1\" textAlign=\"center\" border=\"1px solid transparent\" font=\"normal bold 13px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell00\" left=\"71\" top=\"14\" width=\"33\" height=\"23\" text=\"bind:Column1\" border=\"1px solid transparent\" font=\"12px Malgun Gothic\"/></Band><Band id=\"detail\" width=\"100%\" height=\"24\"/></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_Fold3","8","136",null,"305","8",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","-2","0",null,"85","2",null,null,null,null,null,this.div_Fold3.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("beige");
            this.div_Fold3.addChild(obj.name, obj);

            obj = new Div("Div00","0","-1",null,"85","0",null,null,null,null,null,this.div_Fold3.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("beige");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.div_Fold3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static80","1079","43",null,"42","0",null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static74","112","43","40","44",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","125","55","15","17",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("CheckBox00");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static76","152","43","351","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static77","503","43","192","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static78","695","43","193","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static79","887","43","194","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","162","52","334","24",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("8");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","513","52","172","27",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("9");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","704","52","174","27",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("10");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit07","896","52","174","27",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("11");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","1088","52",null,"27","10",null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("12");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static64","0","1","112","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","112","1","40","43",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("선택");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","152","1","352","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("필수항목");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static67","354","15","12","14",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static68","503","1","192","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("현수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static69","619","16","12","14",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static71","695","1","192","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("목표수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static73","887","1","192","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("실적");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static75","1079","1",null,"42","1",null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("달성율");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static70","817","16","12","14",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","112","43","40","44",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","43","112","42",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_MActiveGoalPlus","17","50","36","30",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("+");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_MActiveGoalMinus","61","50","36","30",null,null,null,null,null,null,this.div_Fold3.form.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.div_Fold3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","-1","Div00:0",null,"85","0",null,null,null,null,null,this.div_Fold3.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_Fold3.addChild(obj.name, obj);

            obj = new Div("Div00","-5","0",null,"85","1",null,null,null,null,null,this.div_Fold3.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("beige");
            this.div_Fold3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static81","4","0","112","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static82","116","0","40","43",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static83","156","0","352","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("기타항목");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static84","358","14","12","14",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static85","507","0","192","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("현수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static86","623","15","12","14",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static87","821","15","12","14",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("*");
            obj.set_color("red");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static88","699","0","192","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("목표수준");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static89","891","0","192","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("실적");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static90","1083","0",null,"42","2",null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("달성율");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static91","4","42","112","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_EActiveGoalPlus","21","48","36","30",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("+");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_EActiveGoalMinus","65","48","36","30",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("-");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static92","116","42","40","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","129","54","15","17",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("CheckBox00");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static93","156","42","352","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static94","507","42","191","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static95","699","42","193","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static96","891","42","194","42",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static97","1083","42",null,"42","1",null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","166","50","333","24",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("20");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","520","50","172","27",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("21");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","709","50","173","27",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("22");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","900","50","174","27",null,null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("23");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit09","1092","50",null,"27","11",null,null,null,null,null,this.div_Fold3.form.Div01.form.Div00.form);
            obj.set_taborder("24");
            this.div_Fold3.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:0",null,"133","1",null,null,null,null,null,this.div_Fold3.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("beige");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.div_Fold3.addChild(obj.name, obj);

            obj = new Static("Static98","0","0","400","42",null,null,null,null,null,null,this.div_Fold3.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("산출물");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none");
            obj.set_background("#f4f4f4");
            this.div_Fold3.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static99","0","41","400","95",null,null,null,null,null,null,this.div_Fold3.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("정상적 목표");
            obj.set_textAlign("center");
            obj.set_background("#f4f4f4");
            obj.set_border("1px solid,0px none");
            this.div_Fold3.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static100","399","41",null,"95","-1",null,null,null,null,null,this.div_Fold3.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,1px solid,1px solid");
            this.div_Fold3.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static101","399","0",null,"41","-1",null,null,null,null,null,this.div_Fold3.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_border("1px solid,0px none,0px none,1px solid");
            this.div_Fold3.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","408","50",null,"78","9",null,null,null,null,null,this.div_Fold3.form.Div02.form);
            obj.set_taborder("4");
            this.div_Fold3.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","8","56",null,"72","-41",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("  항목추가 / 항목삭제");
            obj.set_font("normal 700 18pt/normal \"Malgun Gothic\"");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PoC_4_2.xfdl","lib::comLib_Comm.xjs");
        this.registerScript("PoC_4_2.xfdl", function() {
        this.executeIncludeScript("lib::comLib_Comm.xjs"); /*include "lib::comLib_Comm.xjs"*/;

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_MActiveGoalPlus" :
        			var nIndex = 0, nCnt = 0;
        			var nLeft, nTop, nWidth, nHeight;
        			this.nP_Height = this.div_Fold3.form.Div00.getOffsetHeight();
        			this.nP_HInterval = 0;

        			while(true)
        			{
        				nIndex = this.gfn_lPad(nCnt, "0", 2);

        				if(!(this.div_Fold3.form.Div00.form.components["Div" + nIndex]))
        				{
        					var nResIndex = parseInt(nIndex) - 1;
        					nResIndex = this.gfn_lPad(nResIndex, "0", 2);

        					var obj = this.div_Fold3.form.Div00.form.components["Div" + nResIndex]
        					nLeft = obj.getOffsetLeft();
        					nTop = obj.getOffsetTop() + obj.getOffsetHeight();
        					nWidth = obj.getOffsetWidth();
        					nHeight = obj.getOffsetHeight();

        					//Div를 감싸고 있는 최외각점의 높이를 높힘.
        					this.nP_Height += obj.getOffsetHeight();
        					this.nP_HInterval = obj.getOffsetHeight();
        					break;
        				}
        				else
        					nCnt++;
        			}

        			var objComp = new Div();
        			objComp.init("Div" + nIndex, nLeft, nTop, nWidth, nHeight);
        			objComp.set_url("comm::ActiveForm.xfdl");
        			objComp.set_formscrolltype("none");
        			objComp.set_right(0);

        			this.div_Fold3.form.Div00.addChild("Div" + nIndex, objComp);
        			objComp.show();

        			//Div를 감싸고 있는 최외각점의 높이를 조절.
        			this.div_Fold3.form.Div00.setOffsetHeight(this.nP_Height);
        			this.div_Fold3.setOffsetHeight(this.div_Fold3.getOffsetHeight() + this.nP_HInterval);

        			this.resetScroll();
        			break;

        		case "btn_MActiveGoalMinus" :
        			var nIndex = 0, nCnt = 0;
        			var nLeft, nTop, nWidth, nHeight;
        			this.nP_HInterval = 0;

        			while(true)
        			{
        				nIndex = this.gfn_lPad(nCnt, "0", 2);

        				if(!(this.div_Fold3.form.Div00.form.components["Div" + nIndex]))
        				{
        					var nResIndex = parseInt(nIndex) - 1;
        					nResIndex = this.gfn_lPad(nResIndex, "0", 2);

        					var obj = this.div_Fold3.form.Div00.form.components["Div" + nResIndex]

        					//Div개수가 1개일때는 삭제하지 않는다.
        					if(obj.name == "Div00")
        						break;

        					this.nP_Height -= obj.getOffsetHeight();
        					this.nP_HInterval = obj.getOffsetHeight();

        					this.div_Fold3.form.Div00.form.removeChild(obj.name);

        					break;
        				}
        				else
        					nCnt++;
        			}

        			//Div를 감싸고 있는 최외각점의 높이를 조절.
        			this.div_Fold3.form.Div00.setOffsetHeight(this.nP_Height);
        			this.div_Fold3.setOffsetHeight(this.div_Fold3.getOffsetHeight() - this.nP_HInterval);
        			this.resetScroll();
        			break;
        		case "btn_EActiveGoalPlus" :
        			var nIndex = 0, nCnt = 0;
        			var nLeft, nTop, nWidth, nHeight;
        			this.nP_Height = this.div_Fold3.form.Div01.getOffsetHeight();
        			this.nP_HInterval = 0;

        			while(true)
        			{
        				nIndex = this.gfn_lPad(nCnt, "0", 2);

        				if(!(this.div_Fold3.form.Div01.form.components["Div" + nIndex]))
        				{
        					var nResIndex = parseInt(nIndex) - 1;
        					nResIndex = this.gfn_lPad(nResIndex, "0", 2);

        					var obj = this.div_Fold3.form.Div01.form.components["Div" + nResIndex]
        					nLeft = obj.getOffsetLeft();
        					nTop = obj.getOffsetTop() + obj.getOffsetHeight();
        					nWidth = obj.getOffsetWidth();
        					nHeight = obj.getOffsetHeight();

        					//Div를 감싸고 있는 최외각점의 높이를 높힘.
        					this.nP_Height += obj.getOffsetHeight();
        					this.nP_HInterval = obj.getOffsetHeight();
        					break;
        				}
        				else
        					nCnt++;
        			}

        			var objComp = new Div();
        			objComp.init("Div" + nIndex, nLeft, nTop, nWidth, nHeight);
        			objComp.set_url("comm::ActiveForm2.xfdl");
        			objComp.set_formscrolltype("none");
        			objComp.set_right(0);

        			this.div_Fold3.form.Div01.addChild("Div" + nIndex, objComp);
        			objComp.show();

        			//Div를 감싸고 있는 최외각점의 높이를 조절.
        			this.div_Fold3.form.Div01.setOffsetHeight(this.nP_Height);
        			this.div_Fold3.setOffsetHeight(this.div_Fold3.getOffsetHeight() + this.nP_HInterval);

        			this.resetScroll();
        			break;

        		case "btn_EActiveGoalMinus" :
        			var nIndex = 0, nCnt = 0;
        			var nLeft, nTop, nWidth, nHeight;
        			this.nP_HInterval = 0;

        			while(true)
        			{
        				nIndex = this.gfn_lPad(nCnt, "0", 2);

        				if(!(this.div_Fold3.form.Div01.form.components["Div" + nIndex]))
        				{
        					var nResIndex = parseInt(nIndex) - 1;
        					nResIndex = this.gfn_lPad(nResIndex, "0", 2);

        					var obj = this.div_Fold3.form.Div01.form.components["Div" + nResIndex]

        					//Div개수가 1개일때는 삭제하지 않는다.
        					if(obj.name == "Div00")
        						break;

        					this.nP_Height -= obj.getOffsetHeight();
        					this.nP_HInterval = obj.getOffsetHeight();

        					this.div_Fold3.form.Div01.form.removeChild(obj.name);

        					break;
        				}
        				else
        					nCnt++;
        			}

        			//Div를 감싸고 있는 최외각점의 높이를 조절.
        			this.div_Fold3.form.Div01.setOffsetHeight(this.nP_Height);
        			this.div_Fold3.setOffsetHeight(this.div_Fold3.getOffsetHeight() - this.nP_HInterval);
        			this.resetScroll();
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_Fold3.form.Div00.form.Div00.form.btn_MActiveGoalPlus.addEventHandler("onclick",this.comm_Click,this);
            this.div_Fold3.form.Div00.form.Div00.form.btn_MActiveGoalMinus.addEventHandler("onclick",this.comm_Click,this);
            this.div_Fold3.form.Div01.form.Div00.form.btn_EActiveGoalPlus.addEventHandler("onclick",this.comm_Click,this);
            this.div_Fold3.form.Div01.form.Div00.form.btn_EActiveGoalMinus.addEventHandler("onclick",this.comm_Click,this);
        };

        this.loadIncludeScript("PoC_4_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
