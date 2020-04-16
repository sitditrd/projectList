(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Arrangement");
            this.set_titletext("Arrangement");
            this.set_scrollbartype("autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">010-1234-5678</Col><Col id=\"Column3\">프리세일즈팀/마케팅그룹</Col><Col id=\"Column4\">서울시 커피구 초코동 123번지 호놀루루아파트 101동 12345호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","50",null,"49","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_box02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","21","11","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","96","11","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("투비소프트");
            obj.set_text("투비소프트");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","226","11","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검색일");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","301","11","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","424","11","12","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_label01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","438","11","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","568","11","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","643","11","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo00_innerdataset", obj);
            divSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">프리세일즈</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">영업지원</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">컨설팅</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo00_innerdataset);
            obj.set_text("프리세일즈");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"45","45","0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","21","51","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","96","51","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("남성");
            obj.set_value("M");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","226","51","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","21","91","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit01","96","91","741","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_value("최상의 제품과 최상의 서비스로 고객에게 성공적인 파트너로 성장하겠습니다.");
            obj.set_text("최상의 제품과 최상의 서비스로 고객에게 성공적인 파트너로 성장하겠습니다.");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit02","301","51","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_value("책임");
            obj.set_text("책임");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","442","51","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit03","517","51","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_value("이투비");
            obj.set_text("이투비");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","642","51","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_label01R");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit04","717","51","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_value("재직");
            obj.set_text("재직");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnMore","44.38%","divSearch:-1","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Div("divTile01","10","divSearch:37",null,"110","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","39",null,"69","0",null,null,null,null,null,this.divTile01.form);
            obj.set_taborder("1");
            obj.set_text("주)투비소프트\' 은 (이하 \'회사\'는) 고객님의 개인정보를 중요시하며, \"정보통신망 이용촉진 및 정보보호\"에 관한 법률을 준수하고 있습니다.\r\r\n\r\r\n\r\r\r\n\r\r\r\r\n회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.\r\r\r\n\r\r\n\r\r\r\n회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\r\r\r\r\n본 방침은 : 2014년 7월 31일 부터 시행됩니다\r\r\r\r\n이전 개인정보취급방침 보기 (2011년 11월 25일 ~ 2013년 2월 1일 적용)\r\r\r\r\n1. 수집하는 개인정보의 항목 및 수집 방법\r\r\r\r\n가. 수집하는 개인정보의 항목 \r\r\r\r\n\r\r\r\r\n[온라인 채용]\r\r\r\r\n수집항목 : 성명, 생년월일, 국적, 이메일 주소, 휴대폰번호, 학력, 경력사항(경력직), 주소, 병력(미필일 경우 미필사유), 사진, 보훈대상 여부(보훈 대상의 경우 보훈번호 포함), 장애사항, 자격사항, 가족사항, 포트폴리오, 수정용 비밀번호\r\r\r\r\n개인정보 수집방법 : 홈페이지(지원서 작성)\r\r\r\r\n\r\r\r\r\n[서비스문의]\r\r\r\r\nο 수집항목 : 성명, 전화번호 혹은 휴대전화번호, 이메일 주소, 소속/기관명\r\r\r\r\nο 개인정보 수집방법 : 홈페이지(문의 메일 작성)\r\r\r\r\n\r\r\r\r\n[이벤트응모]\r\r\r\r\nο 이벤트 응모 과정에서 이용자 고지 후 수집\r\r\r\r\n- 수집 항목: 성명, 이메일\r\r\r\r\nο 이벤트 경품 배송을 위해 이용자 고지 후 선택적 추가 수집\r\r\r\r\n- 모바일 상품: 휴대폰 번호\r\r\r\r\n- 배송 상품: 전화번호, 주소\r\r\r\r\n\r\r\r\r\n\r\r\r\r\n나. 개인정보 수집방법\r\r\r\r\n회사는 다음과 같은 방법으로 개인정보를 수집합니다.\r\r\r\r\n- 홈페이지 내 문의 메일 작성, 채용 지원서 작성, 이벤트 응모\r\r\r\r\n2. 개인정보의 수집 및 이용목적\r\r\r\r\n회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.\r\r\r\r\nο 온라인채용- 입사전형 진행, 입사 지원서 수정, 합격여부 확인, 입사 지원자와의 원활한 의사 소통, 채용자격요건(학력, 경력 등의 이력) 확인\r\r\r\r\nο 서비스문의 - 정확한 문의 내용 파악 및 확인, 문의에 대한 답변 진행, 답변 발송, 문의 고객과 의 원활한 의사소통\r\r\r\r\nο 마케팅 및 광고에 활용 - 서비스〮제품〮세미나 및 이벤트 등 광고성 정보 전달, 인구통계 학적 특성에 따른 서비스 제공 및 광고 게재, 웹진 메일 발송\r\r\r\r\n3. 개인정보의 보유 및 이용기간\r\r\r\r\n정보제공일로부터 서비스를 제공하는 기간 동안에 한하여 이용자의 개인정보를 보유 및 이용하게 됩니다. 본인 정보삭제를 요청하거나 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다. 단, 입사지원으로 인한 개인정보 수집은 입사지원서 제출일로부터 1년간 보유 후 파기됩니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_foldingBox");
            this.divTile01.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"40","0",null,null,null,null,null,this.divTile01.form);
            obj.set_taborder("0");
            obj.set_text("개인정보취급방침");
            obj.set_cssclass("sta_WF_foldingTle");
            this.divTile01.addChild(obj.name, obj);

            obj = new Button("btnDetailMore01",null,"1","38","38","1",null,null,null,null,null,this.divTile01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_expand");
            this.divTile01.addChild(obj.name, obj);

            obj = new Div("divTile02","10","divTile01:48",null,"110","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("1px solid #c7c7c7");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","39",null,"69","0",null,null,null,null,null,this.divTile02.form);
            obj.set_taborder("1");
            obj.set_text("제 1 장 총칙\r\n제 1 조 (목적)\r\n1. 이 약관은 ㈜투비소프트 (이하 \"회사\"라고 칭함) 가 운영하는 투비소프트 홈페이지 (www.tobesoft.co.kr) (이하 \"홈페이지\"이라 칭함)에서 제공하는 인터넷 관련 서비스(이하 \"서비스\"라 한다)를 이용함에 있어 회사와 이용자의 권리, 의무, 절차 및 책임사항을 규정함을 목적으로 합니다.\r\n2. 이 약관은 이 약관은 본 사이트가 제공하는 서비스 중에서 개인정보가 필요한 때에 효력이 발생합니다. 회사는 회사의 사정 변경이나 영업상 중요한 사유가 발생하면 약관을 변경 할 수 있으며, 변경된 약관은 회사의 홈페이지에 변경에 관한 통지가 게시되는 순간부터 효력을 발생합니다.\r\n3. 본 약관에 정하는 범위 이외의 이용자와 회사의 권리, 의무 및 책임사항에 관해서는 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의 규정에 따릅니다.\r\n제2조(정의)\r\n1. \"홈페이지\" 이란 ㈜투비소프트가 서비스 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 서비스 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 홈페이지를 운영하는 사업자의 의미로도 사용합니다.\r\n2. \"이용자\"란 \"홈페이지\"에 접속하여 이 약관에 따라 \"홈페이지\"가 제공하는 서비스를 받는 사용자를 말합니다.\r\n3. \"계약\"이라 함은 이용자가 \"홈페이지\"에 서비스를 신청하여 \"홈페이지\"가 이에 대해 승낙하는 것을 말합니다.\r\n제3조 (약관의 명시와 개정)\r\n1. \"홈페이지\"는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 홈페이지 내에 게시합니다.\r\n2. \"홈페이지\"는 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\r\n3. \"홈페이지\"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 홈페이지에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.\r\n4. \"홈페이지\"가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지 기간 내에 \"홈페이지\"에 송신하여 \"홈페이지\"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.\r\n5. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.\r\n제4조(서비스의 제공 및 변경)\r\n1. \"홈페이지\"는 다음과 같은 업무를 수행합니다. o\t(1) 서비스 또는 용역에 대한 정보 제공 o\t(2) 기타 \"홈페이지\"가 정하는 업무\r\n2. \"홈페이지\"는 서비스의 변경 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 서비스 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 서비스 용역의 내용 및 제공일자를 명시 하여 현재의 서비스 용역의 내용을 게시한 곳에 공지합니다.\r\n3. \"홈페이지\"가 제공하기로 이용자와 계약을 체결한 서비스의 내용을 서비스의 변경 또는 기술적 사양의 변경 등의 사유로 변경할 경우, \"홈페이지\"는 이로 인하여 이용자가 입은 손해를 배상할 수 있습니다. 단, \"홈페이지\"에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.\r\n제5조(서비스의 중단)\r\n1. \"홈페이지\"는 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.\r\n2. 제1항에 의한 서비스 중단의 경우에는 \"홈페이지\"는 제8조에 정한 방법으로 이용자에게 통지합니다.\r\n3. \"홈페이지\"는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상할 수 있습니다. 단 \"홈페이지\"에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.\r\n제6조(\"홈페이지\"의 의무)\r\n1. \"홈페이지는 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스 용역을 제공하는 데 최선을 다하여야 합니다.\r\n2. \"홈페이지\"는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을 갖추어야 합니다.\r\n제7조(이용자의 의무)\r\n이용자는 다음 행위를 하여서는 안됩니다.\r\n1. 신청 또는 변경 시 허위내용의 등록\r\n2. 타인의 정보 도용\r\n3. \"홈페이지\"에 게시된 정보의 변경\r\n4. \"홈페이지\"가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시\r\n5. \"홈페이지\" 기타 제3자의 저작권 등 지적재산권에 대한 침해\r\n6. \"홈페이지\" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위\r\n7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 미풍양속에 반하는 정보를 홈페이지에 공개 또는 게시하는 행위\r\n제8조(연결\"홈페이지\"과 피 연결\"홈페이지\" 간의 관계)\r\n1. 상위 \"홈페이지\"과 하위 \"홈페이지\"가 하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 \"홈페이지\"(웹사이트)이라고 하고 후자를 피 연결 \"홈페이지\"(웹사이트) 이라고 합니다.\r\n2. 연결 \"홈페이지\"는 피 연결 \"홈페이지\"가 독자적으로 제공하는 서비스 용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을 지지 않는다는 뜻을 연결 \"홈페이지\"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을 지지 않습니다.\r\n제9조(저작권의 귀속 및 이용제한)\r\n1. \"홈페이지\"가 작성한 저작물에 대한 저작권 기타 지적재산권은 \"홈페이지\"에 귀속합니다.\r\n2. 이용자는 \"홈페이지\"를 이용함으로써 얻은 정보를 \"홈페이지\"의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.\r\n3. 홈페이지\"은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.\r\n4. 이용자는 \"홈페이지\"가 제공하는 각종 서비스 등을 이용하는 과정에서 \"홈페이지\"에 게시 또는 등록한 각종 저작물을 \"홈페이지\"가 무상으로 사용하는 것을 허락합니다. 단, 이용자가 \"홈페이지\"에 대해 상기 사용권의 허락을 취소하는 통지를 한 경우에는 그러하지 아니합니다.\r\n제10조(분쟁해결)\r\n1. \"홈페이지\"는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자께 그 사유와 처리일정을 즉시 통보해 드립니다.\r\n2. \"홈페이지\"와 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.\r\n제11조(재판권 및 준거법)\r\n1. \"홈페이지\"와 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.\r\n2. \"홈페이지\"와 이용자간에 제기된 전자거래 소송에는 대한민국 법을 적용합니다.\r\n부칙\r\n㈁ 뉴스레터 수신에 대한 규정 \r\n뉴스레터 수신 희망자는 홈페이지의 정기 이벤트 메일을 수신할 수 있습니다. \r\n㈂ 본 약관은 2014년 7월 31일부터 시행하고, 종전의 약관은 본 약관으로 대체합니다.\r\n약관 버전번호: v3.0 \r\n약관 시행일자: 2014-07-31\r\n약관 변경일자: 2014-07-31 ");
            obj.set_cssclass("sta_WF_foldingBox");
            obj.set_fittocontents("height");
            this.divTile02.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"40","0",null,null,null,null,null,this.divTile02.form);
            obj.set_taborder("0");
            obj.set_text("이용약관");
            obj.set_cssclass("sta_WF_foldingTle");
            this.divTile02.addChild(obj.name, obj);

            obj = new Button("btnDetailMore02",null,"1","38","38","1",null,null,null,null,null,this.divTile02.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_expand");
            this.divTile02.addChild(obj.name, obj);

            obj = new Static("Static15","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용자 동의");
            obj.set_cssclass("sta_WF_title01");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,691,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Arrangement.xfdl", function() {
        this.Arrangement_onload = function(obj,e)
        {
        	this.divSearch.form.set_scrollbartype("none");
        	this.divSearch.form.set_scrolltype("none");

        	this.divTile01.form.set_scrollbartype("none");
        	this.divTile01.form.set_scrolltype("none");

        	this.divTile02.form.set_scrollbartype("none");
        	this.divTile02.form.set_scrolltype("none");

        	var sToday = this.fn_Today();

        	this.divSearch.form.Calendar00.set_value(sToday);
        	this.divSearch.form.Calendar01.set_value(sToday);
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnMore" :
        			if (this.divSearch.getOffsetHeight()==49) {
        				this.divSearch.setOffsetHeight(149);
        			} else {
        				this.divSearch.setOffsetHeight(49);
        			}

        			this.resetScroll();
        			break;

        		case "btnDetailMore01" :
        			if (this.divTile01.getOffsetHeight() == 110) {
        				this.divTile01.form.set_scrollbartype("autoindicator");
        				this.divTile01.form.set_scrolltype("both");
        				this.divTile01.setOffsetHeight(this.divTile01.form.Static01.getOffsetHeight() + 39);
        			} else {
        				this.divTile01.form.set_scrollbartype("none");
        				this.divTile01.form.set_scrolltype("none");
        				this.divTile01.setOffsetHeight(110);
        			}

        			this.resetScroll();
        			break;

        		case "btnDetailMore02" :
        			if (this.divTile02.getOffsetHeight() == 110) {
        				this.divTile02.form.set_scrollbartype("autoindicator");
        				this.divTile02.form.set_scrolltype("both");
        				this.divTile02.setOffsetHeight(this.divTile02.form.Static01.getOffsetHeight()+39);
        			} else {
        				this.divTile02.form.set_scrollbartype("none");
        				this.divTile02.form.set_scrolltype("none");
        				this.divTile02.setOffsetHeight(110);
        			}

        			this.resetScroll();
        			break;
        	}
        };

        this.divTile01_Static01_onsize = function(obj,e)
        {
        	if (this.divTile01.getOffsetHeight() != 110) {
        		this.divTile01.setOffsetHeight(e.cy + 39);
        	}
        };

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Arrangement_onload,this);
            this.btnMore.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.divTile01.form.Static01.addEventHandler("onsize",this.divTile01_Static01_onsize,this);
            this.divTile01.form.btnDetailMore01.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.divTile02.form.btnDetailMore02.addEventHandler("onclick",this.fn_comBtnOnClick,this);
        };

        this.loadIncludeScript("Arrangement.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
