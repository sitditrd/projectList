(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Functions");
            this.set_titletext("그리드기능");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"Chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column3\">3000</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">3000</Col><Col id=\"Column9\">3000</Col><Col id=\"Column8\">인천시 서구 가좌동 118</Col><Col id=\"Column0\">이승환</Col><Col id=\"Column2\">인천시 서구 가좌동 118</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">이승환</Col><Col id=\"Column7\">조회</Col><Col id=\"Column10\">20170101</Col><Col id=\"Column11\">3000</Col></Row><Row><Col id=\"Column3\">4000</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">4000</Col><Col id=\"Column9\">4000</Col><Col id=\"Column8\">경기도 시흥시 정왕동 104 (2가)</Col><Col id=\"Column0\">이승한</Col><Col id=\"Column2\">경기도 시흥시 정왕동 104 (2가)</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">이승한</Col><Col id=\"Column7\">입력</Col><Col id=\"Column10\">20170201</Col><Col id=\"Column11\">4000</Col></Row><Row><Col id=\"Column3\">50000</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">50000</Col><Col id=\"Column9\">50000</Col><Col id=\"Column8\">경기도 이천시 관고동 501-7</Col><Col id=\"Column0\">이철우</Col><Col id=\"Column2\">경기도 이천시 관고동 501-7</Col><Col id=\"Column1\">수정</Col><Col id=\"Column6\">이철우</Col><Col id=\"Column7\">수정</Col><Col id=\"Column10\">20170601</Col><Col id=\"Column11\">50000</Col></Row><Row><Col id=\"Column3\">51651</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">51651</Col><Col id=\"Column9\">51651</Col><Col id=\"Column8\">서울특별시 영등포구 여의도동 1</Col><Col id=\"Column0\">강순희</Col><Col id=\"Column2\">서울특별시 영등포구 여의도동 1</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column6\">강순희</Col><Col id=\"Column7\">삭제</Col><Col id=\"Column10\">20170931</Col><Col id=\"Column11\">51651</Col></Row><Row><Col id=\"Column3\">216548</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">216548</Col><Col id=\"Column9\">216548</Col><Col id=\"Column8\">서울특별시 강서구 화곡동 98-252</Col><Col id=\"Column0\">배재현</Col><Col id=\"Column2\">서울특별시 강서구 화곡동 98-252</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">배재현</Col><Col id=\"Column7\">조회</Col><Col id=\"Column10\">20171005</Col><Col id=\"Column11\">216548</Col></Row><Row><Col id=\"Column3\">216218</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">216218</Col><Col id=\"Column9\">216218</Col><Col id=\"Column8\">서울특별시 강동구 명일동 257</Col><Col id=\"Column0\">강공작</Col><Col id=\"Column2\">서울특별시 강동구 명일동 257</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">강공작</Col><Col id=\"Column7\">입력</Col><Col id=\"Column10\">20171111</Col><Col id=\"Column11\">216218</Col></Row><Row><Col id=\"Column3\">954561</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">954561</Col><Col id=\"Column9\">954561</Col><Col id=\"Column8\">서울특별시 강서구 등촌동 631-6</Col><Col id=\"Column0\">김명기</Col><Col id=\"Column2\">서울특별시 강서구 등촌동 631-6</Col><Col id=\"Column1\">수정</Col><Col id=\"Column6\">김명기</Col><Col id=\"Column7\">수정</Col><Col id=\"Column10\">20170101</Col><Col id=\"Column11\">954561</Col></Row><Row><Col id=\"Column3\">2121684</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">2121684</Col><Col id=\"Column9\">2121684</Col><Col id=\"Column8\">경기도 광명시 옥길동 370</Col><Col id=\"Column0\">변길용</Col><Col id=\"Column2\">경기도 광명시 옥길동 370</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column6\">변길용</Col><Col id=\"Column7\">삭제</Col><Col id=\"Column10\">20170201</Col><Col id=\"Column11\">2121684</Col></Row><Row><Col id=\"Column3\">6549845</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">6549845</Col><Col id=\"Column9\">6549845</Col><Col id=\"Column8\">서울특별시 영등포구 신길동 116-15 지하</Col><Col id=\"Column0\">설동옥</Col><Col id=\"Column2\">서울특별시 영등포구 신길동 116-15 지하</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">설동옥</Col><Col id=\"Column7\">조회</Col><Col id=\"Column10\">20170601</Col><Col id=\"Column11\">6549845</Col></Row><Row><Col id=\"Column3\">65150</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">65150</Col><Col id=\"Column9\">65150</Col><Col id=\"Column8\">서울특별시 성북구 돈암동 636</Col><Col id=\"Column0\">허승조</Col><Col id=\"Column2\">서울특별시 성북구 돈암동 636</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">허승조</Col><Col id=\"Column7\">입력</Col><Col id=\"Column10\">20170931</Col><Col id=\"Column11\">65150</Col></Row><Row><Col id=\"Column3\">251654</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">251654</Col><Col id=\"Column9\">251654</Col><Col id=\"Column8\">인천시 부평구 부개동 부개동 12-213</Col><Col id=\"Column0\">정상윤</Col><Col id=\"Column2\">인천시 부평구 부개동 부개동 12-213</Col><Col id=\"Column1\">수정</Col><Col id=\"Column6\">정상윤</Col><Col id=\"Column7\">수정</Col><Col id=\"Column10\">20171005</Col><Col id=\"Column11\">251654</Col></Row><Row><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">999999</Col><Col id=\"Column3\">9999999</Col><Col id=\"Column9\">9999999</Col><Col id=\"Column8\">서울특별시 관악구 신림동 산 56-1 서울대학교수의과대학 3층</Col><Col id=\"Column0\">임해천</Col><Col id=\"Column2\">서울특별시 관악구 신림동 산 56-1 서울대학교수의과대학 3층</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column6\">임해천</Col><Col id=\"Column7\">삭제</Col><Col id=\"Column10\">20171111</Col><Col id=\"Column11\">999999</Col></Row><Row><Col id=\"Column0\">지일성</Col><Col id=\"Column2\">경기도 고양시 덕양구 삼송동 26-8</Col><Col id=\"Column3\">3000</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">3000</Col><Col id=\"Column6\">지일성</Col><Col id=\"Column7\">조회</Col><Col id=\"Column8\">경기도 고양시 덕양구 삼송동 26-8</Col><Col id=\"Column9\">3000</Col><Col id=\"Column1\">조회</Col><Col id=\"Column10\">20170101</Col><Col id=\"Column11\">3000</Col></Row><Row><Col id=\"Column0\">홍길동</Col><Col id=\"Column2\">경기도 광주시 오포읍 양벌리 126</Col><Col id=\"Column3\">4000</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">4000</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">입력</Col><Col id=\"Column8\">경기도 광주시 오포읍 양벌리 126</Col><Col id=\"Column9\">4000</Col><Col id=\"Column1\">입력</Col><Col id=\"Column10\">20170201</Col><Col id=\"Column11\">4000</Col></Row><Row><Col id=\"Column0\">김옥녀</Col><Col id=\"Column2\">충청북도 청주시 흥덕구 봉명동 2677 2층</Col><Col id=\"Column3\">50000</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">50000</Col><Col id=\"Column6\">김옥녀</Col><Col id=\"Column7\">수정</Col><Col id=\"Column8\">충청북도 청주시 흥덕구 봉명동 2677 2층</Col><Col id=\"Column9\">50000</Col><Col id=\"Column1\">수정</Col><Col id=\"Column10\">20170601</Col><Col id=\"Column11\">50000</Col></Row><Row><Col id=\"Column0\">김석준</Col><Col id=\"Column2\">서울특별시 강서구 염창동 249-8 외1필지1층</Col><Col id=\"Column3\">51651</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">51651</Col><Col id=\"Column6\">김석준</Col><Col id=\"Column7\">삭제</Col><Col id=\"Column8\">서울특별시 강서구 염창동 249-8 외1필지1층</Col><Col id=\"Column9\">51651</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column10\">20170931</Col><Col id=\"Column11\">51651</Col></Row><Row><Col id=\"Column0\">이정택</Col><Col id=\"Column2\">서울특별시 영등포구 신길동 197-2</Col><Col id=\"Column3\">216548</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">216548</Col><Col id=\"Column6\">이정택</Col><Col id=\"Column7\">조회</Col><Col id=\"Column8\">서울특별시 영등포구 신길동 197-2</Col><Col id=\"Column9\">216548</Col><Col id=\"Column1\">조회</Col><Col id=\"Column10\">20171005</Col><Col id=\"Column11\">216548</Col></Row><Row><Col id=\"Column0\">이정택</Col><Col id=\"Column2\">서울특별시 구로구 구로동 147-12</Col><Col id=\"Column3\">216218</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">216218</Col><Col id=\"Column6\">이정택</Col><Col id=\"Column7\">입력</Col><Col id=\"Column8\">서울특별시 구로구 구로동 147-12</Col><Col id=\"Column9\">216218</Col><Col id=\"Column1\">입력</Col><Col id=\"Column10\">20171111</Col><Col id=\"Column11\">216218</Col></Row><Row><Col id=\"Column0\">이정택</Col><Col id=\"Column2\">서울특별시 영등포구 문래동6가 5-2 문래아카데미1층 10</Col><Col id=\"Column3\">954561</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">954561</Col><Col id=\"Column6\">이정택</Col><Col id=\"Column7\">수정</Col><Col id=\"Column8\">서울특별시 영등포구 문래동6가 5-2 문래아카데미1층 10</Col><Col id=\"Column9\">954561</Col><Col id=\"Column1\">수정</Col><Col id=\"Column10\">20170101</Col><Col id=\"Column11\">954561</Col></Row><Row><Col id=\"Column0\">박천수</Col><Col id=\"Column2\">서울특별시 구로구 구로동 549-43</Col><Col id=\"Column3\">2121684</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">2121684</Col><Col id=\"Column6\">박천수</Col><Col id=\"Column7\">삭제</Col><Col id=\"Column8\">서울특별시 구로구 구로동 549-43</Col><Col id=\"Column9\">2121684</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column10\">20170201</Col><Col id=\"Column11\">2121684</Col></Row><Row><Col id=\"Column0\">이정녀</Col><Col id=\"Column2\">경기 광명시 광명동 150-50</Col><Col id=\"Column3\">6549845</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">6549845</Col><Col id=\"Column6\">이정녀</Col><Col id=\"Column7\">조회</Col><Col id=\"Column8\">경기 광명시 광명동 150-50</Col><Col id=\"Column9\">6549845</Col><Col id=\"Column1\">조회</Col><Col id=\"Column10\">20170601</Col><Col id=\"Column11\">6549845</Col></Row><Row><Col id=\"Column0\">여상락</Col><Col id=\"Column2\">서울시 구로구 구로동 45</Col><Col id=\"Column3\">65150</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">65150</Col><Col id=\"Column6\">여상락</Col><Col id=\"Column7\">입력</Col><Col id=\"Column8\">서울시 구로구 구로동 45</Col><Col id=\"Column9\">65150</Col><Col id=\"Column1\">입력</Col><Col id=\"Column10\">20170931</Col><Col id=\"Column11\">65150</Col></Row><Row><Col id=\"Column0\">정동옥</Col><Col id=\"Column2\">서울 영등포구 대림동 965-5</Col><Col id=\"Column3\">251654</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">251654</Col><Col id=\"Column6\">정동옥</Col><Col id=\"Column7\">수정</Col><Col id=\"Column8\">서울 영등포구 대림동 965-5</Col><Col id=\"Column9\">251654</Col><Col id=\"Column1\">수정</Col><Col id=\"Column10\">20171005</Col><Col id=\"Column11\">251654</Col></Row><Row><Col id=\"Column0\">김동성</Col><Col id=\"Column2\">경기 광명시 철산동 56-151</Col><Col id=\"Column3\">9999999</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">999999</Col><Col id=\"Column6\">김동성</Col><Col id=\"Column7\">삭제</Col><Col id=\"Column8\">경기 광명시 철산동 56-151</Col><Col id=\"Column9\">9999999</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column10\">20171111</Col><Col id=\"Column11\">999999</Col></Row><Row><Col id=\"Column0\">이부종</Col><Col id=\"Column2\">인천 서구 가좌동 30-73</Col><Col id=\"Column3\">3000</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">3000</Col><Col id=\"Column6\">이부종</Col><Col id=\"Column7\">조회</Col><Col id=\"Column8\">인천 서구 가좌동 30-73</Col><Col id=\"Column9\">3000</Col><Col id=\"Column1\">조회</Col><Col id=\"Column10\">20170101</Col><Col id=\"Column11\">3000</Col></Row><Row><Col id=\"Column0\">김용섭</Col><Col id=\"Column2\">인천 부평구 일신동 107</Col><Col id=\"Column3\">4000</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">4000</Col><Col id=\"Column6\">김용섭</Col><Col id=\"Column7\">입력</Col><Col id=\"Column8\">인천 부평구 일신동 107</Col><Col id=\"Column9\">4000</Col><Col id=\"Column1\">입력</Col><Col id=\"Column10\">20170201</Col><Col id=\"Column11\">4000</Col></Row><Row><Col id=\"Column0\">구자문</Col><Col id=\"Column2\">인천 남동구 간석동 224-548</Col><Col id=\"Column3\">50000</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">50000</Col><Col id=\"Column6\">구자문</Col><Col id=\"Column7\">수정</Col><Col id=\"Column8\">인천 남동구 간석동 224-548</Col><Col id=\"Column9\">50000</Col><Col id=\"Column1\">수정</Col><Col id=\"Column10\">20170601</Col><Col id=\"Column11\">50000</Col></Row><Row><Col id=\"Column0\">신하영</Col><Col id=\"Column2\">서울 관악구 봉천동 1706 우성타운상가지하1층</Col><Col id=\"Column3\">51651</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">51651</Col><Col id=\"Column6\">신하영</Col><Col id=\"Column7\">삭제</Col><Col id=\"Column8\">서울 관악구 봉천동 1706 우성타운상가지하1층</Col><Col id=\"Column9\">51651</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column10\">20170931</Col><Col id=\"Column11\">51651</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">chkAll</Col><Col id=\"level\">0</Col><Col id=\"caption\">전체선택</Col><Col id=\"enable\">true</Col><Col id=\"type\">chk</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">chkClear</Col><Col id=\"level\">0</Col><Col id=\"caption\">선택취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">chk</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">hide</Col><Col id=\"level\">0</Col><Col id=\"caption\">숨기기</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">unhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">숨기기취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">unhideAll</Col><Col id=\"level\">0</Col><Col id=\"caption\">숨기기전체취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">none</Col><Col id=\"level\">0</Col><Col id=\"caption\">-----------</Col><Col id=\"icon\"/><Col id=\"enable\">false</Col><Col id=\"type\">head</Col></Row><Row><Col id=\"id\">asc</Col><Col id=\"level\">0</Col><Col id=\"caption\">오름차순</Col><Col id=\"icon\"/><Col id=\"enable\">true</Col><Col id=\"type\">head</Col></Row><Row><Col id=\"id\">desc</Col><Col id=\"level\">0</Col><Col id=\"caption\">내림차순</Col><Col id=\"icon\"/><Col id=\"enable\">true</Col><Col id=\"type\">head</Col></Row><Row><Col id=\"id\">clear</Col><Col id=\"level\">0</Col><Col id=\"caption\">정렬취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">multiSort</Col><Col id=\"level\">0</Col><Col id=\"caption\">다중정렬</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">multiSortClear</Col><Col id=\"level\">0</Col><Col id=\"caption\">다중정렬취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">필터추가</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">filterClear</Col><Col id=\"level\">0</Col><Col id=\"caption\">필터제거</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">none</Col><Col id=\"level\">0</Col><Col id=\"caption\">-----------</Col><Col id=\"enable\">false</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">EXCEL</Col><Col id=\"level\">0</Col><Col id=\"caption\">EXCEL</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">export</Col><Col id=\"level\">1</Col><Col id=\"caption\">export</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">import</Col><Col id=\"level\">1</Col><Col id=\"caption\">import</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">none</Col><Col id=\"level\">0</Col><Col id=\"caption\">-----------</Col><Col id=\"icon\"/><Col id=\"enable\">false</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">FIX</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">shapeFix</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">shapeFree</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정 취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">rowFix</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">rowFree</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정 취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">gridFormat</Col><Col id=\"caption\">설정저장</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">gridFormatOrg</Col><Col id=\"caption\">원래대로</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","8","153",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj.set_cssclass("grd_WF_cellC");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"350\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"350\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"타입\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"설정금액\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"확인금액\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"타입\"/><Cell col=\"9\" text=\"주소\"/><Cell col=\"10\" text=\"설정금액\"/><Cell col=\"11\" text=\"생성일\"/><Cell col=\"12\" text=\"확인금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Column4\" displaytype=\"date\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:Column5\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:Column9\" displaytype=\"number\" textAlign=\"right\" verticalAlign=\"middle\"/><Cell col=\"11\" text=\"bind:Column10\" displaytype=\"date\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:Column11\" displaytype=\"number\" textAlign=\"right\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","8","50",null,"95","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("  그리드 컴포넌트에서 주로 사용하는 기능을 확인할 수 있습니다. 헤더와 바디 영역에서 마우스 우클릭 해보세요.\r\n - 정렬, 다중정렬, 컬럼 숨기기, 필터\r\n - 엑셀 내보내기/가져오기, 틀고정(열고정/행고정), 스크롤타입, 개인화기능(포맷저장)\r\n\r\n ※ 스크롤타입의 경우 메뉴에서 설정값을 변경 후 Grid   스크롤 TrackBar 로 스크롤 시 해당 기능이 활성화 됩니다.");
            obj.set_cssclass("sta_TF_bg");
            obj.set_wordWrap("char");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다양한 그리드 기능");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("그리드기능");

                p.grd_list.set_taborder("1");
                p.grd_list.set_binddataset("ds_list");
                p.grd_list.set_cellmovingtype("col");
                p.grd_list.set_cellsizingtype("col");
                p.grd_list.set_selecttype("multirow");
                p.grd_list.set_cssclass("grd_WF_cellC");
                p.grd_list.move("8","153",null,null,"8","8");

                p.Static07.set_taborder("1");
                p.Static07.set_text("  그리드 컴포넌트에서 주로 사용하는 기능을 확인할 수 있습니다. 헤더와 바디 영역에서 마우스 우클릭 해보세요.\r\n - 정렬, 다중정렬, 컬럼 숨기기, 필터\r\n - 엑셀 내보내기/가져오기, 틀고정(열고정/행고정), 스크롤타입, 개인화기능(포맷저장)\r\n\r\n ※ 스크롤타입의 경우 메뉴에서 설정값을 변경 후 Grid   스크롤 TrackBar 로 스크롤 시 해당 기능이 활성화 됩니다.");
                p.Static07.set_cssclass("sta_TF_bg");
                p.Static07.set_wordWrap("char");
                p.Static07.set_color("white");
                p.Static07.set_font("normal bold 10pt/normal \"Arial\"");
                p.Static07.move("8","50",null,"95","8",null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("다양한 그리드 기능");
                p.Static00.set_cssclass("sta_WF_title01");
                p.Static00.move("10","0","421","50",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",1980,1020,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
        this.registerScript("Functions.xfdl", function() {
        this.Functions_onload = function(obj,e)
        {

        	//this.setWaitCursor(true);
        	this.setTimer(1, 10);
        };

        this.Functions_ontimer = function(obj,e)
        {
        	if (e.timerid == 1)
        	{
        		this.grd_list.set_binddataset(this.ds_list.name);
        		this.fn_setGrid(this.grd_list);
        		this.killTimer(1);
        	}
        };

        /************************************************************************************************
         * Even   : fn_setGrid
         * Desc   : Grid 우 클릭 메뉴 셋팅
         ************************************************************************************************/
        this.fn_setGrid = function(obj)
        {
        	obj.orgFormat = obj.getCurFormatString();

        	this.fn_getGridFormat(obj);

        	// 그리드 헤드 셀 클릭 정렬 기능 사용을 위한 초기화
        	obj.addEventHandler("onheadclick", this.gridonheadclick, this);

        	// 바꾸기 가능여부 속성 지정
        	obj.replaceable = true;
        	obj.hidelist = "";

        	var form = obj.parent;
        	var ds = form.gridSortRClickDataset;		// 데이터셋 참조
        	var pmnu = form.gridSortRClickPopupMenu;	// 팝업메뉴 컴포넌트 참조

        	// add oncellclick handler
        	obj.addEventHandler("oncellclick", this.gridFindReplaceOnCellClickHandler, this);

        	ds = this.ds_popupMenu;

        	form.gridSortRClickDataset = this.ds_popupMenu;

        	if (this.gfn_IsEmpty(pmnu))
        	{
        		// add popupmenu component
        		var name = this.gfn_getUniqueId("pmnu_");

        		pmnu = new PopupMenu();
        		pmnu.init(name, 0, 0, 200, 200);
        		form.addChild(pmnu.name, pmnu);
        		pmnu.set_innerdataset(ds);
        		pmnu.set_idcolumn("id");
        		pmnu.set_levelcolumn("level");
        		pmnu.set_captioncolumn("caption");
        		pmnu.set_iconcolumn("icon");
        		pmnu.set_enablecolumn("enable");
        		pmnu.addEventHandler("onmenuclick", this.sortPopupMenuOnMenuClickHandler, this);
        		pmnu.show();
        		pmnu.grid = obj;
        		form.gridSortRClickPopupMenu = pmnu;
        	}

        	// 그리드 이벤트에서 팝업메뉴를 참조하기 위해 추가
        	obj.rClickPopupMenu = pmnu;

        	// add onrbuttondown handler
        	obj.addEventHandler("onrbuttondown", this.sortGridOnRButtonDownHandler, this);

        	// Grid head에 filer 기능 추가하기 초기화
        	this.initGridHeadAppendFilter(obj);

        	this.setPopDiv(obj);
        }

        /************************************************************************************************
         * Even   : gridonheadclick
         * Desc   : Grid Head Click
         ************************************************************************************************/
        this.gridonheadclick = function (obj,e)
        {
        	var multiple = false;

        	if (e.col == 0)
        	{
        		if (this.chkFlag == "1") {
        			this.fn_BlockUnChk(obj);
        			this.chkFlag = "0";
        		} else {
        			this.fn_BlockChk(obj);
        			this.chkFlag = "1";
        		}
        	}
        	else
        	{
        		// Shift 키
        		if (e.shiftkey) multiple = true;

        		// Ctrl 키
        		if (e.ctrlkey) multiple = true;

        		if (this.setSortStatus(obj, e.cell, multiple)) {
        			this.executeSort(obj);
        		}
        	}
        }

        /************************************************************************************************
         * Even   : setPopDiv
         * Desc   : Grid Head 우 클릭 메뉴 중 다중정렬 Popup 셋팅
         ************************************************************************************************/
        this.setPopDiv = function(grid)
        {
        	var pdiv = new PopupDiv();
        	var name = this.gfn_getUniqueId("pdiv_");

        	pdiv.init(name, 0, 0, 250, 300);
        	grid.parent.addChild(pdiv.name, pdiv);
        	pdiv.set_background("#e8e8e8ff");
        	pdiv.set_border("1px solid gray");
        	pdiv.addEventHandler("oncloseup", this.sortPdivOnCloseUpHandler, this);
        	pdiv.set_url("comm::comGridSortPop.xfdl");
        	pdiv.show();

        	// 대상 그리드 참조
        	pdiv.grid = grid;

        	// 팝업 참조
        	grid.multiSortPopupDiv = pdiv;
        }

        /************************************************************************************************
         * Even   : sortPdivOnCloseUpHandler (oncloseup Event Handler)
         * Desc   : obj Event 가 발생한 PopupDiv Component
         ************************************************************************************************/
        this.sortPdivOnCloseUpHandler = function(obj, e)
        {
        	var grid = obj.grid;
        	var items = obj.returnvalue;

        	if (!this.gfn_IsEmpty(items))
        	{
        		this.clearAllSort(grid);

        		var item;
        		for (var i = 0, len = items.length; i < len; i++)
        		{
        			item = items[i];
        			this.setSortStatus(grid, item.index, true, item.status);
        		}

        		this.executeSort(grid);
        	}
        }

        /************************************************************************************************
         * Even   : popupMultipleSort
         * Desc   : 다중정렬 Popup 호출
         * Param : {grid} 대상 Grid Component
                        {relativeComp} 팝업창을 띄울 상대 위치(좌/하단) 기준 컴포넌트
         ************************************************************************************************/
        this.popupMultipleSort = function(grid, relativeComp)
        {
        	var pdiv = grid.multiSortPopupDiv;
        	var x, y;

        	if (this.gfn_IsEmpty(relativeComp)) {
        		x = nexacro.System.getCursorX();
        		y = nexacro.System.getCursorY();
        	} else {
        		x = nexacro.System.getCursorX();
        		y = nexacro.System.getCursorY();
        	}

        	var cells = [], column, text, index;
        	var cellCnt = grid.getCellCount("head");
        	for (var i = 1; i < cellCnt; i++)
        	{
        		index = this.getBodyCellIndex(grid, i);
        		if (index > -1)
        		{
        			column = this.getBindColumnNameByIndex(grid, index);
        			if (!this.gfn_IsEmpty(column))
        			{
        				text = grid.getCellText(-1, i);
        				cells.push({column:column, index:i, text:text});
        			}
        		}
        	}

        	// 팝업창에 정렬정보 지정
        	pdiv.form.setSortInfo(grid, cells);
        	pdiv.trackPopupByComponent(grid, 400, 60);
        }

        /************************************************************************************************
        * 우 클릭 메뉴 Popup 관련 function 및 Event
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : sortPopupMenuOnMenuClickHandler (onmenuclick Event Handler)
         * Desc   : Grid 우 클릭 메뉴 Click
         * Param : {obj} Event가 발생한 PopupMenu Component
                        {e} MenuClickEventInfo
         ************************************************************************************************/
        this.sortPopupMenuOnMenuClickHandler = function(obj, e)
        {
        	var selectId = e.id;
        	var cell  = obj.headCellIndex;
        	var grid = obj.grid;

        	if (obj.showFilter == true)
        	{
        		if (selectId != "filterClear") {
        			grid.set_cellmovingtype("col");
        			grid.set_cellsizingtype("col");
        			obj.showFilter = false;
        			this.hideHeadAppendFilter(grid);
        		}
        	}

        	if (selectId == "chkAll") { // 전체선택
        		this.fn_BlockChk(grid);
        	} else if (selectId == "chkClear") { // 전체해제
        		this.fn_BlockUnChk(grid);
        	} else if (selectId == "hide") { // 컬럼 숨기기
        		this.fn_Hide(grid, cell);
        	} else if (selectId == "unhide") { // 컬럼 숨기기 해제
        		this.fn_Hide_Cancel(grid, cell);
        	} else if (selectId == "unhideAll") { // 컬럼 숨기기 전체 해제
        		this.fn_Hide_CancelAll(grid, cell);
        	} else if (selectId == "asc" || selectId == "desc") { // 오름차순, 내림차순
        		if (this.setSortStatus(grid, cell, false, (selectId == "asc" ? 1 : 2))) {
        			this.executeSort(grid);
        		}
        	} else if (selectId == "clear") { // 정렬 취소
        		this.clearSort(grid, cell);
        	} else if (selectId == "multiSort") { // 다중정렬
        		this.clearAllSort(grid);
        		this.popupMultipleSort(grid, obj);
        	} else if (selectId == "multiSortClear") { // 다중정렬 해제
        		this.clearAllSort(grid);
        	} else if (selectId == "find") { // 찾기
        		this.showGridFindReplace(grid, "find");
        	} else if (selectId == "replace") { // 바꾸기
        		if (grid.replaceable) {
        			this.showGridFindReplace(grid, "replace");
        		}
        	} else if (selectId == "filter" || selectId == "filterClear") {	// 필터 추가, 필터 해제
        		if  (obj.showFilter != true ) {
        			grid.set_cellmovingtype("none");
        			grid.set_cellsizingtype("none");
        			obj.showFilter = true;
        			this.showHeadAppendFilter(grid);
        		} else {
        			grid.set_cellmovingtype("col");
        			grid.set_cellsizingtype("col");
        			obj.showFilter = false;
        			this.hideHeadAppendFilter(grid);
        		}
        	} else if (selectId == "export") { // Excel Export
        		this.fn_export(grid);
        	} else if (selectId == "import")  { // Excel Import
        		this.fn_import(grid);
        	} else if (selectId == "shapeFix") { // 열 고정
        		this.fn_cellFix(grid, this.colIdx);
        	} else if (selectId == "shapeFree") { // 열 고정 해제
        		this.fn_cellFree(grid);
        	} else if (selectId == "rowFix") { // 행 고정
        		this.fn_rowFix(grid, this.rowIdx);
        	} else if (selectId == "rowFree") { // 행 고정 해제
        		this.fn_rowFree(grid);
        	} else if (selectId == "gridFormat") { // 설정 저장
        		this.fn_setGridFormat(grid);
        	} else if (selectId == "gridFormatOrg") { // 원래대로
        		this.fn_clearGridFormat(grid);
        	}
        }

        /************************************************************************************************
         * Even   : sortGridOnRButtonDownHandler (onrbuttondown Event Handler)
         * Desc   : Grid 우 클릭 메뉴 Click
         * Param : {obj} Event가 발생한 Grid Component
                        {e} MouseEventInfo
         ************************************************************************************************/
        this.sortGridOnRButtonDownHandler = function(obj, e)
        {
        	var row = e.row;
        	var cell = e.cell;

        	this.colIdx = e.cell;
        	this.rowIdx = e.row;

        	var pmnu = obj.rClickPopupMenu;
        	var ds = this.ds_menu;

        	// head
        	if (row == -1 && cell > -1)
        	{

        		if (obj.getCellProperty("head", e.col, "displaytype") == "checkbox")
        		{
        			this.ds_popupMenu.filter("type == 'chk'");
        		}
        		else
        		{
        			this.ds_popupMenu.filter("type == 'head'");

        			var bodyCellIndex = this.getBodyCellIndex(obj, cell);

        			if (bodyCellIndex > -1)
        			{
        				var rect = obj.getCellRect(row, cell);
        				var sortStatus = this.getSortStatus(obj, cell);

        				if (sortStatus == 1) {
        					// 내림차순, 취소 가능
        					this.ds_popupMenu.setColumn(0, "enable", "false");
        					this.ds_popupMenu.setColumn(1, "enable", "true");
        					this.ds_popupMenu.setColumn(2, "enable", "true");
        				} else if (sortStatus == 2) {
        					// 오름차순, 취소 가능
        					this.ds_popupMenu.setColumn(0, "enable", "true");
        					this.ds_popupMenu.setColumn(1, "enable", "false");
        					this.ds_popupMenu.setColumn(2, "enable", "true");
        				} else {
        					// 오름차순, 내림차순 가능
        					this.ds_popupMenu.setColumn(0, "enable", "true");
        					this.ds_popupMenu.setColumn(1, "enable", "true");
        					this.ds_popupMenu.setColumn(2, "enable", "true");
        				}

        				// 대상 그리드와 셀 정보를 추가
        				pmnu.grid = obj;
        				pmnu.headCellIndex = cell;
        			}
        		}
        	}
        	else
        	{
        		this.ds_popupMenu.filter("type == 'body'");
        	}

        	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(nexacro.Application.mainframe, 0))+10;
        	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(nexacro.Application.mainframe, 0))+10;

        	pmnu.trackPopup(x, y);
        }

        /************************************************************************************************
        * 정렬 관련 function 처리
        ************************************************************************************************/
        // 소팅 표시자 구분 (text or image)
        this.MARKER_TYPE = "text";

        // Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정
        // [오름차순표시, 내림차순표시]
        this.MARKER = ["▲", "▼"];

        /************************************************************************************************
         * Even   : getSortStatus
         * Desc   : 정렬 상태 가져오기
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} headCellIndex head cell index
         ************************************************************************************************/
        this.getSortStatus = function(grid, headCellIndex)
        {
        	var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);

        	if (bodyCellIndex < 0) return -1;

        	var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex);
        	var cellInfos = grid._cellInfos;

        	if (cellInfos && cellInfos[columnName]) {
        		return cellInfos[columnName].status;
        	}

        	return -1;
        }

        /************************************************************************************************
         * Even   : setSortStatus
         * Desc   : 정렬 상태 셋팅 (실제 정렬 처리는 executeSort 에서 담당)
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} headCellIndex head cell index
                        {isMultiple} 다중선택여부
                        {sortStatus} 정렬상태 강제 지정 (미지정시 현재 상태 반전)
         * Return : {boolean} 상태 변경 여부
         ************************************************************************************************/
        this.setSortStatus = function(grid, headCellIndex, isMultiple, sortStatus)
        {
        	// Cell별 정렬정보
        	if (this.gfn_IsNull(grid.cellInfos)) {
        		grid.cellInfos = {};
        	}

        	// 정렬대상컬럼 (순서중요)
        	if (this.gfn_IsNull(grid.sortItems)) {
        		grid.sortItems = [];
        	}

        	var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);
        	if (bodyCellIndex < 0) return false;

        	var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex);

        	var cellInfo, sortItem, cellInfos = grid.cellInfos, sortItems = grid.sortItems, status;

        	if (this.gfn_IsEmpty(columnName)) {
        		trace("Check Grid body cell bind value");

        		return false;
        	}

        	if (this.gfn_IsEmpty(isMultiple)) isMultiple = false;

        	if (this.gfn_IsEmpty(sortStatus)) sortStatus = -1;

        	cellInfo = cellInfos[columnName];

        	if (this.gfn_IsEmpty(cellInfo)) {
        		var headText = grid.getCellText(-1, headCellIndex);
        		cellInfo = cellInfos[columnName] = { index: headCellIndex, status: 0, text: headText };
        	}

        	// set sort status
        	if (isMultiple)
        	{
        		status = cellInfo.status;

        		if (sortStatus == -1)
        		{
        			if (status == 0)  {
        				cellInfo.status = 1;
        			} else if (status == 1) {
        				cellInfo.status = 2;
        			} else if (status == 2) {
        				cellInfo.status = 1;
        			}
        		}
        		else
        		{
        			cellInfo.status = sortStatus;
        		}
        	}
        	else
        	{
        		for (var p in cellInfos)
        		{
        			if (!cellInfos.hasOwnProperty(p)) return;

        			cellInfo = cellInfos[p];

        			if (cellInfo.index == headCellIndex)
        			{
        				status = cellInfo.status;

        				if (sortStatus == -1)
        				{
        					if (status == 0) {
        						cellInfo.status = 1;
        					} else if (status == 1) {
        						cellInfo.status = 2;
        					} else if (status == 2) {
        						cellInfo.status = 1;
        					}
        				}
        				else
        				{
        					cellInfo.status = sortStatus;
        				}
        			}
        			else
        			{
        				cellInfo.status = 0;
        			}

        			if (cellInfo.status == 0)
        			{
        				for (var j = 0, len2 = sortItems.length; j < len2; j++)
        				{
        					if (sortItems[j] !== columnName) {
        						sortItems.splice(j, 1);

        						break;
        					}
        				}
        			}
        		}
        	}

        	var hasItem = false;

        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		if (sortItems[i] == columnName) {
        			hasItem = true;
        			break;
        		}
        	}

        	if (!hasItem) {
        		sortItems.push(columnName);
        	}

        	return true;
        }

        /************************************************************************************************
         * Even   : executeSort
         * Desc   : 정렬 적용
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.varFlag = "";
        this.colIdx1 = "";

        this.executeSort = function(grid)
        {
        	var cellInfo, sortItem, cellInfos = grid.cellInfos, sortItems = grid.sortItems,
        	      columnName, headCellIndex, status, sortString = "";

        	if (this.gfn_IsEmpty(cellInfos) || this.gfn_IsEmpty(sortItems)) return;

        	// keystring 조합
        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		columnName = sortItems[i];
        		status = cellInfos[columnName].status;

        		if (status > 0) {
        			sortString += (status == 1 ? "+" : "-") + columnName;
        		}
        	}

        	var nCellIdx = grid.getBindCellIndex("body", columnName)

        	if (this.varFlag == "-" &&  nCellIdx == this.colIdx1) {
        		this.varFlag="";
        		this.clearSort(grid, nCellIdx);

        		return;
        	}

        	var ds = this.gfn_Lookup(grid.parent, grid.binddataset);

        	// keystring 확인
        	var curKeyString = ds.keystring;
        	var groupKeyString = "";

        	if (curKeyString.length > 0 && curKeyString.indexOf(",") < 0)
        	{
        		var sIndex = curKeyString.indexOf("S:");
        		var gIndex = curKeyString.indexOf("G:");

        		if (sIndex > -1)
        		{
        			groupKeyString = "";
        		}
        		else
        		{
        			if (gIndex < 0) {
        				groupKeyString = "G:"+curKeyString;
        			} else {
        				groupKeyString = curKeyString;
        			}
        		}
        	}
        	else
        	{
        		var temps = curKeyString.split(",");
        		var temp;

        		for (var i = 0, len = temps.length; i < len; i++)
        		{
        			temp = temps[i];

        			if (temp.length > 0 && temp.indexOf("S:") < 0)
        			{
        				if (temp.indexOf("G:") < 0) {
        					groupKeyString = "G:"+temp;
        				} else {
        					groupKeyString = temp;
        				}
        			}
        		}
        	}

        	if (sortString.length > 0)
        	{
        		var sortKeyString = "S:" + sortString;

        		if (groupKeyString.length > 0) {
        			ds.set_keystring(sortKeyString + "," + groupKeyString);
        		} else {
        			ds.set_keystring(sortKeyString);
        		}

        		grid.sortKeyString = sortKeyString;
        	}
        	else
        	{
        		ds.set_keystring(groupKeyString);

        		grid.sortKeyString = "";
        	}

        	this.varFlag = ds.keystring.substr(2, 1);
        	this.colIdx1 = grid.getBindCellIndex("body", columnName);

        	// 정렬표시
        	var index, text, marker, style;

        	for (var p in cellInfos)
        	{
        		if (!cellInfos.hasOwnProperty(p)) return;

        		cellInfo = cellInfos[p];
        		status = cellInfo.status;
        		index = cellInfo.index;
        		text = cellInfo.text;

        		marker = this.decode(status, 1, this.MARKER[0], 2, this.MARKER[1], "");
        		if (this.MARKER_TYPE == "text") {
        			if(this.gfn_IsEmpty(marker)==true)
        			{
        				grid.setCellProperty( "head", index, "text", text);
        			}else
        			{
        				grid.setCellProperty( "head", index, "text", text + marker);
        			}
        		} else if ( this.MARKER_TYPE == "image" ) {
        			var background = marker + " 50 5";
        		}
        	}
        }

        /************************************************************************************************
         * Even   : clearSort
         * Desc   : 주어진 head cell 에 해당하는 정렬 상태 제거
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} head cell index
         ************************************************************************************************/
        this.clearSort = function(grid, headCellIndex)
        {
        	var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);

        	if (bodyCellIndex < 0) return;

        	var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex), cellInfos = grid.cellInfos, sortItems = grid.sortItems;

        	if (this.gfn_IsEmpty(cellInfos) || this.gfn_IsEmpty(sortItems)) return;

        	if (this.gfn_IsEmpty(columnName) || this.gfn_IsEmpty(cellInfos[columnName])) return;

        	// 정렬상태를 변경
        	cellInfos[columnName].status = 0;

        	// 정렬실행
        	this.executeSort(grid);

        	// 컬럼정보제거
        	for (var i = 0, len = sortItems.length; i < len; i++)
        	{
        		if (sortItems[i] == columnName) {
        			sortItems.splice(i, 1);
        			break;
        		}
        	}

        	// Cell 정보제거
        	delete cellInfos[columnName];
        }

        /************************************************************************************************
         * Even   : clearAllSort
         * Desc   : 현재 적용된 모든 정렬 상태 제거
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.clearAllSort = function(grid)
        {
        	var cellInfos = grid.cellInfos;
        	var sortItems = grid.sortItems;

        	if (this.gfn_IsEmpty(cellInfos) || this.gfn_IsEmpty(sortItems)) return;

        	// 모든 정렬상태를 원래로 되돌림.
        	for (var p in cellInfos)
        	{
        		if (!cellInfos.hasOwnProperty(p)) return;

        		cellInfos[p].status = 0;
        	}

        	// 정렬실행
        	this.executeSort(grid);

        	// 정보 초기화
        	grid.cellInfos = {};
        	grid.sortItems = [];
        }

        /************************************************************************************************
        * 정렬 utility 관련 function 처리
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : getBindColumnNameByIndex
         * Desc   : body cell index로 binding 된 컬럼명 가져오기
         * Param : {grid} 대상 Grid Component
                        {index} index body cell index
         * Return : {boolean} Column Id
         ************************************************************************************************/
        this.getBindColumnNameByIndex = function(grid, index)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = grid.getCellProperty("body", index, "subcell");

        	if (subCell > 0) {
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	} else {
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if (!this.gfn_IsEmpty(text))
        	{
        		if (text.search(/^BIND\(/) > -1)  {
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		} else if ( text.search(/^bind:/) > -1 ) {
        			columnid = text.replace(/^bind:/, "");
        		}
        	}

        	return columnid;
        }

        /************************************************************************************************
         * Even   : getBodyCellIndex
         * Desc   : head cell에 match되는 body cell 가져오기
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} headCellIndex head cell index
         * Return : {boolean} Cell Index
         ************************************************************************************************/
        this.getBodyCellIndex = function(grid, headCellIndex)
        {
        	// Max Head Row Index
        	var maxHeadRow = 0;

        	for (var i = 0, len = grid.getCellCount("head"); i < len; i++)
        	{
        		var row = grid.getCellProperty("head", i, "row");
        		if (maxHeadRow < row)
        		{
        			maxHeadRow = row;
        		}
        	}
        	// Max Body Row Index
        	var maxBodyRow = 0;
        	for (var i=0, len=grid.getCellCount("body"); i<len; i++)
        	{
        		var row = grid.getCellProperty("body", i, "row");

        		if (maxBodyRow < row) {
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0) {
        		return headCellIndex;
        	}

        	// Body Row 가 1개 이상일 경우
        	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
        	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
        	var cellIndex = -1;
        	var sRow = -1;
        	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
        	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
        	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));

        	if (maxHeadRow > maxBodyRow) {
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	} else {
        		sRow = nRow;
        	}

        	var cRow, cCol, cColspan;

        	for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
        	{
        		cRow = parseInt(grid.getCellProperty("body", i, "row"));
        		cCol = parseInt(grid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

        		// 실제로 매칭되는 body cell 이 없지만 colspan으로 첫번째 항목을 찾을 경우..
        		if (sRow == cRow && nCol == cCol && nColspan == cColspan) {
        			cellIndex = i;

        			break;
        		}
        	}

        	return cellIndex;
        }

        /************************************************************************************************
        * Excel 관련 function 처리
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : fn_export
         * Desc   : Excel Export
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.fn_export = function(grid)
        {
        	if (this.gfn_IsNull(this.ExcelExportObject00) == true) {
        		this.ExcelExportObject00 = new ExcelExportObject();
        		this.ExcelExportObject00.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
        		this.ExcelExportObject00.addEventHandler("onerror", this.ExcelExportObject00_onerror, this);
        		this.ExcelExportObject00.set_exportmessageprocess("%d [ %d / %d ]");
        		this.ExcelExportObject00.set_exportuitype("exportprogress");
        		this.ExcelExportObject00.set_exporteventtype("itemrecord");
        		this.ExcelExportObject00.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	} else {
        		this.ExcelExportObject00.clear();
        	}

        	var ret = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1");

        	//this.ExcelExportObject00.set_commcompress(compress);
        	this.ExcelExportObject00.set_exportfilename("ExcelExportTest");
        	this.ExcelExportObject00.set_exporturl("http://localhost/nexacro17-xeni/XExportImport");
        	this.ExcelExportObject00.exportData();
        }

        /************************************************************************************************
         * Even   : ExcelExportObject00_onsuccess
         * Desc   : Excel Export onsuccess
         ************************************************************************************************/
        this.ExcelExportObject00_onsuccess = function(obj, e)
        {
        }

        /************************************************************************************************
         * Even   : fn_import
         * Desc   : Excel Export onprogress
         ************************************************************************************************/
        this.ExcelExportObject00_onprogress = function(obj, e)
        {
        }

        /************************************************************************************************
         * Even   : fn_import
         * Desc   : Excel Import
         ************************************************************************************************/
        this.fn_import = function()
        {
        	if (this.importObj == null) {
        		this.importObj = new nexacro.ExcelImportObject("Import00",this);
        		this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        		this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        		this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
        	}

        	this.importObj.set_importurl("http://localhost/nexacro17-xeni/XImport");
        	this.importObj.importData("", "[command=getsheetdata;output=outDs;body=Sheet1!B2;]", "[ds_list=outDs]");
        }

        /************************************************************************************************
         * Even   : Import00_onsuccess
         * Desc   : Excel Import onsuccess
         ************************************************************************************************/
        this.Import00_onsuccess = function(obj,  e)
        {
        	//this.txt_result.set_value(this.txt_result.value + "\n"+this.successcount+"=========== onsuccess event start============");
        	//this.txt_result.set_value(this.txt_result.value + "\ne.eventid: " + e.eventid);
        	//this.txt_result.set_value(this.txt_result.value + "\ne.fromobject: " + e.fromobject);
        	//this.txt_result.set_value(this.txt_result.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	//this.txt_result.set_value(this.txt_result.value + "\ne.url: " +  e.url);
        	//trace("import success");
        }

        /************************************************************************************************
        * Filter 관련 function 처리 (Mouse Over Filter 기능을 공통화 한 function)
        ************************************************************************************************/
        // Filter 가능 표시 이미지
        this.FILTER_ENABLE_IMAGE_URL = "Img::grd_filter_combo.png";
        this.FILTER_ENABLE_IMAGE_SIZE = [21, 20];

        // Filter 적용 표시 이미지
        this.FILTER_APPLY_IMAGE_URL = "Img::grd_filter_check.png";
        this.FILTER_APPLY_IMAGE_SIZE = [21, 20];

        /************************************************************************************************
         * Even   : filterGridOnLButtonDownHandler
         * Desc   : onlbuttondown Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} GridMouseEventInfo
         ************************************************************************************************/
        this.filterGridOnLButtonDownHandler = function(obj, e)
        {
        	// head cell resize 시 필터가능 버튼을 숨기기위한 설정
        	if (e.row == -1) {
        		obj.celLResizeLbuttondown = true;
        	}
        }

        /************************************************************************************************
         * Even   : filterGridOnLButtonUpHandler
         * Desc   : onlbuttonup Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} GridMouseEventInfo
         ************************************************************************************************/
        this.filterGridOnLButtonUpHandler = function(obj, e)
        {
        	// head cell resize 시 필터가능 버튼을 숨기기 위한 설정
        	obj.celLResizeLbuttondown = false;

        	// oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
        	var resizer = obj._resizer_elem;
        	var resizing = obj.colResizing;

        	if (resizing && resizer && resizer._movedPos != 0) {
        		this.arrangeOverFilterComps(obj);
        	}
        }

        /************************************************************************************************
         * Even   : filterGridOnMouseMoveHandler
         * Desc   : onmousemove Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} GridMouseEventInfo
         ************************************************************************************************/
        this.filterGridOnMouseMoveHandler = function(obj, e)
        {
        	// oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
        	var resizer = obj._resizer_elem;

        	if (resizer && resizer._is_tracking) {
        		obj.colResizing = true;
        	} else {
        		obj.colResizing = false;
        	}

        	// head cell resize 시 필터 관련 버튼을 숨기기 위한 설정
        	var filterImage;
        	var filterImages = obj.filterApplyComps;

        	if (obj.celLResizeLbuttondown && e.row == -1)
        	{
        		var filterBtn = obj.filterButton;
        		filterBtn.set_visible(false);

        		for (var i = 0, len = filterImages.length; i < len; i++)
        		{
        			filterImage = filterImages[i];

        			if (filterImage.visible && filterImage._filtered) {
        				filterImages[i].set_visible(false);
        			}
        		}

        		return;
        	}
        	else
        	{
        		var xy;

        		for (var i = 0, len = filterImages.length; i < len; i++)
        		{
        			filterImage = filterImages[i];

        			if (filterImage.visible == false && filterImage.filtered)
        			{
        				xy = this.getCompXYFromGridHeadCellRight(obj, filterImage.headCellIndex, filterImage);

        				if (xy[0] > -1 && xy[1] > -1) {
        					filterImage.move(xy[0], xy[1]);
        					filterImage.set_visible(true);
        				} else {
        					filterImage.set_visible(false);
        				}
        			}
        		}
        	}

        	if (filterImage.filterPopupDiv.visible) return;

        	var x = e.clientX;
        	var y = e.clientY;
        	var headRowSize = obj.getRealRowFullSize("head");
        	var filterBtn = obj.filterButton;

        	if (y < headRowSize)
        	{
        		var headCellIndex = e.cell;

        		if (headCellIndex < 0) {
        			filterBtn.set_visible(false);
        			return;
        		}

        		if (this.getBodyCellIndex(obj, headCellIndex) > -1)
        		{
        			var xy = this.getCompXYFromGridHeadCellRight(obj, headCellIndex, filterBtn);

        			if (xy[0] > -1 && xy[1] > -1) {
        				filterBtn.move(xy[0], xy[1]);
        				filterBtn.set_visible(true);
        			} else {
        				filterBtn.set_visible(false);
        			}

        			filterBtn.headCellIndex = headCellIndex;
        		}
        		else
        		{
        			filterBtn.set_visible(false);
        		}
        	}
        	else
        	{
        		filterBtn.set_visible(false);
        	}
        }

        /************************************************************************************************
         * Even   : headOverFilterOnFormatChanged
         * Desc   : onformatchanged Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} GridFormatChangedEventInfo
         ************************************************************************************************/
        this.headOverFilterOnFormatChanged = function(obj, e)
        {
        	// 포맷변경시 필터처리를 위한 컴포넌트 제거
        	// 셀 변경시 필터처리를 위한 컴포넌트 재배치
        	switch (e.reason)
        	{
        		case 10:	// formatid
        		case 11:	// formats
        			this.removeOverFilterComps(obj);
        		break;

        		case 21:	// MoveCell
        		case 22:	// colresize
        			this.arrangeOverFilterComps(obj);
        		break;
        	}
        }

        /************************************************************************************************
         * Even   : filterGridOnDragMoveHandler
         * Desc   : ondragmove Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} GridDragEventInfo
         ************************************************************************************************/
        this.filterGridOnDragMoveHandler = function(obj, e)
        {
        	// cell moving 을 체크하기 위해 내부 속성 확인...
        	if ( obj._movingcell )
        	{
        		var curCol = e.col;
        		var col, colspan;
        		var merged = false;
        		var movingStartCol = obj._movingcell._refobj._col;
        		var movingEndCol = curCol;

        		// 병합된 cell 이 존재하는 col 에 들어올 수 없으므로 체크
        		for (var i = 0, len = obj.getCellCount("head");  i < len;  i++)
        		{
        			colspan = obj.getCellProperty("head", i, "colspan") - 1;

        			if (colspan > 0)
        			{
        				col = obj.getCellProperty("head", i, "col");

        				if ((col <= curCol && curCol <= (col + colspan)) || ((col + colspan) <= curCol && curCol <= col))
        				{
        					if (movingStartCol > movingEndCol) {
        						movingEndCol = col;
        					} else {
        						movingEndCol = (col + colspan);
        					}
        					break;
        				}
        			}
        		}

        		if (movingStartCol != movingEndCol) {
        			obj.isMovingCell = true;
        			obj.movingStartCol = movingStartCol;
        			obj.movingEndCol = movingEndCol;

        			return;
        		}
        	}

        	obj.isMovingCell = false;
        }

        /************************************************************************************************
         * Even   : filterGridOnDropHandler
         * Desc   : ondrop Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} GridDragEventInfo
         ************************************************************************************************/
        this.filterGridOnDropHandler = function(obj, e)
        {
        	// onformatchanged 기능이 현재 없어서 movecell 이 발생될 때를 알 수 없다.
        	// 따라서 ondragmove에서 moving 중인지 체크하고 ondrop 후 완료 판다.
        	if (e.row == - 1 && obj.isMovingCell) {
        		var movingStartCol = obj.movingStartCol;
        		var movingEndCol = obj.movingEndCol;

        		this.moveColumnInfo(obj, movingStartCol, movingEndCol);
        	}
        }

        /************************************************************************************************
         * Even   : initGridHeadAppendFilter
         * Desc   : Grid head filer 기능 추가하기 초기화
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.initGridHeadAppendFilter = function(grid)
        {
        	// 필터영역(Div) 를 담아둘 속성 추가
        	if (this.gfn_IsUndefined(grid.makeCompList)) {
        		grid.makeCompList = [];
        	}

        	// 필터적용 정보를 담아둘 속성 추가
        	if (this.gfn_IsUndefined(grid.filterItems)) {
        		grid.filterItems = {};
        	}

        	// add ondragmove handler
        	grid.addEventHandler("ondragmove", this.filterGridOnDragMoveHandler, this);

        	// add ondrop handler
        	grid.addEventHandler("ondrop", this.headAppendFilterOnDropHandler, this);

        	// add onlbuttonup handler
        	grid.addEventHandler("onlbuttonup", this.headAppendFilterOnLButtonUpHandler, this);

        	// add onmousemove handler
        	grid.addEventHandler("onmousemove", this.headAppendFilterOnMouseMoveHandler, this);

        	// add onhscroll handler
        	grid.addEventHandler("onhscroll", this.arrangeFilterComps, this);
        }

        /************************************************************************************************
         * Even   : headAppendFilterOnFormatChanged
         * Desc   : onformatchanged Event Handler
         * Param : {grid} Event가 발생한 Grid Component
                        {e} GridFormatChangedEventInfo
         ************************************************************************************************/
        this.headAppendFilterOnFormatChanged = function(obj, e)
        {
        	// 포맷변경시 필터처리를 위한 컴포넌트 제거
        	// 셀 변경시 필터처리를 위한 컴포넌트 재배치
        	switch (e.reason)
        	{
        		case 10:	// formatid
        		case 11:	// formats
        			this.removeFilterComps(obj);
        			break;

        		case 21:	// MoveCell
        		case 22:	// colresize
        			this.arrangeFilterComps(obj);
        			break;
        	}
        }

        /************************************************************************************************
         * Even   : headAppendFilterOnDropHandler
         * Desc   : ondrop Event Handler
         * Param : {grid} Event가 발생한 Grid Component
                        {e} GridDragEventInfo
         ************************************************************************************************/
        this.headAppendFilterOnDropHandler = function(obj, e)
        {
        	// onformatchanged 기능이 현재 없어서 movecell 이 발생될 때를 알 수 없다.
        	// 따라서 ondrop 에서 내부 속성값을 체크하여 기능처리
        	var s = e.sourcereferenceobject;
        	var f = e.fromreferenceobject;

        	if (s._type_name == "GridCell" && f._type_name == "GridCell")
        	{
        		if (s.parent == f.parent && s._cellidx != f._cellidx) {
        			this.arrangeFilterComps(obj);
        		}
        	}
        }

        /************************************************************************************************
         * Even   : headAppendFilterOnLButtonUpHandler
         * Desc   : onlbuttonup Event Handler
         * Param : {grid} Event가 발생한 Grid Component
                        {e} GridMouseEventInfo
         ************************************************************************************************/
        this.headAppendFilterOnLButtonUpHandler = function(obj, e)
        {
        	// oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
        	var resizer = obj._resizer_elem;

        	if (obj.colResizing && resizer && resizer._movedPos != 0) {
        		this.arrangeFilterComps(obj);
        	}
        }

        /************************************************************************************************
         * Even   : headAppendFilterOnMouseMoveHandler
         * Desc   : onmousemove Event Handler
         * Param : {grid} Event가 발생한 Grid Component
                        {e} GridMouseEventInfo
         ************************************************************************************************/
        this.headAppendFilterOnMouseMoveHandler = function(obj, e)
        {
        	// oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
        	var resizer = obj._resizer_elem;

        	if (resizer && resizer._is_tracking) {
        		obj.colResizing = true;
        	} else {
        		obj.colResizing = false;
        	}
        }

        /************************************************************************************************
        * Filter 처리 관련 단위 기능 function
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : getCompXYFromGridHeadCellRight
         * Desc   : Grid Head Cell 우측영역에 위치 할 컴포넌트 좌표 반환
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} Grid Head Cell Index
                        {comp} 대상 컴포넌트
         * Return : {array} x, y 좌표 (위치할 수 없을 경우 -1)
         ************************************************************************************************/
        this.getCompXYFromGridHeadCellRight = function(grid, headCellIndex, comp)
        {
        	var col = grid.getCellProperty("head", headCellIndex, "col");
        	var band = grid.getFormatColProperty(col, "band");
        	var pivotIndex = this.decode(band, "left", -1, "right", -2, 0);
        	var cellRect = grid.getCellRect(-1, headCellIndex, pivotIndex);

        	var scrollWidth = this.gfn_getCurrentScrollBarSize(grid, "vert");
        	var gridLeft = grid.getOffsetLeft();
        	var gridTop = grid.getOffsetTop();
        	var gridAvailRight = gridLeft + grid.getOffsetWidth() - scrollWidth;

        	var x = y = -1;

        	if (gridLeft + cellRect.left < gridAvailRight)
        	{
        		if (cellRect.left < gridLeft ) {
        			cellRect.left = 0;
        		}

        		if (gridLeft + cellRect.right > gridAvailRight) {
        			cellRect.right = gridAvailRight - gridLeft;
        		}

        		x = gridLeft + cellRect.left + (cellRect.width - comp.getOffsetWidth());
        		y = gridTop + cellRect.top + Math.round((cellRect.height - comp.getOffsetHeight())/2);

        		if (x < gridLeft) { x = -1; }
        		if (y < gridTop) { y = -1; }
        	}

        	return [x, y];
        }

        /************************************************************************************************
         * Even   : executeFilter
         * Desc   : Filter 실행
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} Grid Head Cell Index
                        {filterString} 적용할 조건식
                        {filterData} 조건 데이터
         ************************************************************************************************/
        this.executeFilter = function(grid, headCellIndex, filterString, filterData)
        {
        	var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);
        	var column = this.getBindColumnNameByIndex(grid, bodyCellIndex);
        	var ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        	var filterItems = grid.filterItems;
        	var filterItem = filterItems[column];

        	// 선택 컬럼명의 필터정보 확인 및 지정
        	if (this.gfn_IsUndefined(filterItem)) {
        		filterItem = filterItems[column] = { filterData: filterData, filterString: filterString };
        	} else {
        		filterItem.filterData = filterData;
        		filterItem.filterString = filterString;
        	}

        	// 필터정보에서 필터스트링 조합
        	var resultString = "";
        	var tempString = "";

        	for (var p in filterItems)
        	{
        		if (!filterItems.hasOwnProperty(p)) return;

        		filterItem = filterItems[p];
        		tempString = filterItem.filterString;

        		if (!this.gfn_IsEmpty(tempString)) {
        			resultString += (this.gfn_IsEmpty(resultString) ? "" : " && ") + tempString;
        		}
        	}

        	// 필터 적용
        	ds.filter(resultString);
        }

        /************************************************************************************************
         * Even   : showHeadAppendFilter
         * Desc   : Grid head append filter 보이기
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.showHeadAppendFilter = function(grid)
        {
        	var rowIdx = grid.appendContentsRow("head");
        	var nHeight = grid.getFormatRowProperty(rowIdx-1, "size");

        	grid.setFormatRowProperty(rowIdx, "size", nHeight);

        	// 추가된 head row index를 담아두자.
        	grid.appendHeadRowIndex = rowIdx;

        	this.arrangeFilterComps(grid);
        }

        /************************************************************************************************
         * Even   : hideHeadAppendFilter
         * Desc   : Grid head append filter 숨기기 (필터제거 포함)
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.hideHeadAppendFilter = function(grid)
        {
        	var index = grid.appendHeadRowIndex;

        	if (!this.gfn_IsUndefined(index))
        	{
        		grid.deleteContentsRow("head", index);

        		// Div 숨기기 및 값 초기화
        		var comps = grid.parent.components;
        		var comp, list = grid.makeCompList;

        		for (var i = 0, len = list.length; i < len; i++)
        		{
        			comp = comps[list[i]];

        			if (comp) {
        				comp.set_visible(false);
        				comp.form.initValue();
        			}
        		}

        		// 데이터셋 필터 제거
        		var ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        		ds.filter("");
        		grid.appendHeadRowIndex = null;
        	}
        }

        /************************************************************************************************
         * Even   : removeOverFilterComps
         * Desc   : Grid head over filter 기능에 추가된 컴포넌트 제거
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.removeOverFilterComps = function(grid)
        {
        	var form = grid.parent;
        	var comps = form.components;
        	var comp, list = grid.filterApplyComps;
        	var removed;

        	for (var i = 0, len = list.length; i < len; i++)
        	{
        		comp = comps[list[i]];

        		if (comp) {
        			removed = form.removeChild(comp.name);
        			removed.destroy();
        		}
        	}
        }

        /************************************************************************************************
         * Even   : arrangeOverFilterComps
         * Desc   : Grid head over filter 기능에 필요한 컴포넌트 생성 및 위치 조정
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.arrangeOverFilterComps = function(grid)
        {
        	var form = grid.parent;
        	var comp, comps = grid.filterApplyComps;
        	var xy;

        	for (var i = 0, len = comps.length; i < len; i++)
        	{
        		comp = comps[i];

        		if (comp && comp.filtered)
        		{
        			xy = this.getCompXYFromGridHeadCellRight(grid, compheadCellIndex, comp);

        			if (xy[0] > -1 && xy[1] > -1) {
        				comp.move(xy[0], xy[1]);
        				comp.set_visible(true);
        			} else {
        				comp.set_visible(false);
        			}
        		}
        	}
        }

        /************************************************************************************************
         * Even   : removeFilterComps
         * Desc   : Grid head append filter 기능에 추가된 컴포넌트 제거
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.removeFilterComps = function(grid)
        {
        	var form = grid.parent;
        	var comps = form.components;
        	var comp, list = grid.makeCompList;
        	var removed;

        	for (var i = 0, len = list.length; i < len; i++)
        	{
        		comp = comps[list[i]];

        		if (comp) {
        			removed = form.removeChild(comp.name);
        			removed.destroy();
        		}
        	}
        }

        /************************************************************************************************
         * Even   : arrangeFilterComps
         * Desc   : Grid head append filter 기능에 필요한 컴포넌트 생성 및 위치 조정
         * Param : {grid} 대상 Grid Component
         ************************************************************************************************/
        this.arrangeFilterComps = function(grid)
        {
        	var form = grid.parent;
        	var index = grid.appendHeadRowIndex;
        	var rect, rects = [];
        	var cellCnt = grid.getCellCount("head");
        	var bodyCellIndex, column, comp, name, type;
        	var l, t, w, h;
        	var list = grid.makeCompList;
        	var seq = 0;
        	var gridLeftPos = grid.getOffsetLeft();
        	var gridTopPos = grid.getOffsetTop();
        	var gridPos = [gridLeftPos, gridTopPos, gridLeftPos + grid.getOffsetWidth(), gridTopPos + grid.getOffsetBottom()];
        	var first = true;
        	var col, band, pivotIndex;

        	// 각 cell 영역에 필터 입력 영역 생성
        	for (var i = 0; i < cellCnt; i++)
        	{
        		if (grid.getCellProperty("head", i, "row") == index)
        		{
        			col = grid.getCellProperty("head", i, "col");
        			band = grid.getFormatColProperty(col, "band");
        			pivotIndex = this.decode(band, "left", -1, "right", -2, 0);
        			rect = grid.getCellRect(-1, i, pivotIndex);
        			bodyCellIndex = this.getBodyCellIndex(grid, i);
        			column = this.getBindColumnNameByIndex(grid, bodyCellIndex);
        			type = grid.getCellProperty("body", bodyCellIndex, "displaytype");

        			if (this.gfn_IsUndefined(type)) type = "normal";

        			name = grid.name + "_headAppendComp" + seq;

        			var borderWidths = this.gfn_getBorderWidth(grid);

        			l = gridPos[0] + rect.left;
        			t = gridPos[1] + rect.top + borderWidths[1];
        			w = rect.width - 1;
        			h = rect.height - 1;

        			// 컴포넌트가 존재하지 않으면 추가
        			if (this.gfn_ArrayIndexOf(list, name) < 0)
        			{
        				list.push(name);
        				comp = new Div(name, l , t, w, h);
        				form.addChild(comp.name, comp);
        				comp.show();
        				comp.set_border("0px none white");
        				comp.form.set_scrollbartype("none");
        				comp.set_async(false);
        				comp.set_visible(false);


        				comp.set_url("comm::comGridFilterDiv.xfdl");
        			}
        			else
        			{
        				comp = form.components[name];
        			}

        			// Div에 참조값 지정
        			comp.grid = grid;
        			comp.headCellIndex = i;
        			comp.bodyCellIndex = bodyCellIndex;
        			comp.filterType = type;
        			comp.filterColumn = column;

        			var filterItems = grid.filterItems;
        			var filterItem = filterItems[column];

        			if (!this.gfn_IsEmpty(filterItem)) {
        				comp.filterData = filterItem.filterData;
        			}

        			// 필터타입 지정
        			comp.form.setFilterType();

        			// 위치 조정
        			if (l < gridPos[0]) {
        				l = gridPos[0];
        			}

        			if (l + grid.vscrollbar.getOffsetWidth() > gridPos[2])
        			{
        				comp.set_visible(false);
        			}
        			else
        			{
        				var scrollWidth = grid.vscrollbar.getOffsetWidth();

        				if ((l + w) > gridPos[2] - scrollWidth)
        				{
        					w = gridPos[2] - l;

        					if (grid.vscrollbar) {
        						w = w - scrollWidth - 1;
        					}
        				}

        				comp.move(l + 1, t + 1, w, h);
        				comp.set_visible(true);
        			}

        			seq++;
        		}
        	}

        	var div = form.components[list[0]];

        	if (!this.gfn_IsEmpty(div)) div.setFocus();
        }

        /************************************************************************************************
        * Filter utility 관련 function 처리
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : getBindColumnNameByIndex
         * Desc   : body cell index로 binding 된 컬럼명 가져오기
         * Param : {grid} 대상 Grid Component
                        {index} body cell index
         ************************************************************************************************/
        this.getBindColumnNameByIndex = function(grid, index)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = grid.getCellProperty("body", index, "subcell");

        	if (subCell > 0) {
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	} else {
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if (!this.gfn_IsEmpty(text))
        	{
        		if (text.search(/^BIND\(/) > -1) {
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		} else if ( text.search(/^bind:/) > -1 ) {
        				columnid = text.replace(/^bind:/, "");
        		}
        	}

        	return columnid;
        }

        /************************************************************************************************
         * Even   : getBodyCellIndex
         * Desc   : head cell에 match되는 body cell 가져오기
         * Param : {grid} 대상 Grid Component
                        {headCellIndex} head cell index
         ************************************************************************************************/
        this.getBodyCellIndex = function(grid, headCellIndex)
        {
        	// Max Head Row Index
        	var maxHeadRow = 0;
        	for (var i = 0, len = grid.getCellCount("head"); i < len; i++)
        	{
        		var row = grid.getCellProperty("head", i, "row");

        		if (maxHeadRow < row) {
        			maxHeadRow = row;
        		}
        	}

        	// Max Body Row Index
        	var maxBodyRow = 0;
        	for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
        	{
        		var row = grid.getCellProperty("body", i, "row");
        		if (maxBodyRow < row) {
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0) {
        		return headCellIndex;
        	}

        	// Body Row 가 1개 이상일 경우
        	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
        	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
        	var cellIndex = -1;
        	var sRow = -1;
        	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
        	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
        	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));

        	if (maxHeadRow > maxBodyRow) {
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	} else {
        		sRow = nRow;
        	}

        	var cRow, cCol, cColspan;
        	for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
        	{
        		cRow = parseInt(grid.getCellProperty("body", i, "row"));
        		cCol = parseInt(grid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

        		// 실제로 매칭되는 body cell 이 없지만 colspan으로 첫번째 항목을 찾을 경우..
        		//if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan))
        		if (sRow == cRow && nCol == cCol && nColspan == cColspan) {
        			cellIndex = i;

        			break;
        		}
        	}

        	return cellIndex;
        }

        /************************************************************************************************
        * 칮기 관련 function 처리 (찾기/바꾸기 기능을 공통화한 function)
        ************************************************************************************************/
        // 찾기 결과가 없을 때 표시할 메시지
        this.GRID_FIND_NO_RESULT_MESSAGE = "\"{0}\" 을(를) 더 이상 찾을 수 없습니다.";

        // 모두 바꾸기시 변경 개수를 표시할 메시지
        this.GRID_REPLACE_COUNT_MESSAGE = "{0}개 항목이 변경되었습니다.";

        /************************************************************************************************
         * Even   : gridFindReplaceOnCellClickHandler
         * Desc   : oncellclick Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} GridClickEventInfo
         ************************************************************************************************/
        this.gridFindReplaceOnCellClickHandler = function(obj, e)
        {
        	if ( e.row > -1 )
        	{
        		// 찾기/바꾸기 팝업이 떠 있는 상태라면 지정
        		var name = "_GridFindPop";
        		var form = obj.parent.parent;
        		var div = form.components[name];

        		if (div && div.visible)
        		{
        			div.targetGrid = obj;
        		}
        		else
        		{
        			name = "_GridFindReplacePop";
        			div = form.components[name];

        			if (div && div.visible)
        			{
        				div.targetGrid = obj;

        				if (div.setColumnList ) {
        					div.setColumnList(obj);
        				}
        			}
        		}
        	}
        }

        /************************************************************************************************
         * Even   : gridFindReplaceOnRButtonDownHandler
         * Desc   : onrbuttondown Event Handler
         * Param : {obj} Event가 발생한 Grid Component
                        {e} MouseEventInfo
         ************************************************************************************************/
        this.gridFindReplaceOnRButtonDownHandler = function(obj, e)
        {
        	var col = e.col;
        	var row = e.row;
        	var cell = e.cell;
        	var x = e.screenX;
        	var y = e.screenY;

        	// body
        	if (row > -1 && cell > -1) {
        		var pmnu = obj.rClickPopupMenu;

        		// 팝업메뉴에 그리드 참조 속성 추가
        		pmnu.grid = obj;

        		pmnu.trackPopup(x, y);
        	}
        }

        /************************************************************************************************
         * Even   : showGridFindReplace
         * Desc   : 찾기/바꾸기 팝업
         * Param : {grid} 대상 Grid Component
                        {type} 찾기(find) 또는 바꾸기 (replace)
         ************************************************************************************************/
        this.showGridFindReplace = function(grid, type)
        {
        	var name, url;
        	var width, height;
        	var form = grid.parent;
        	var div;

        	if (type == "find")
        	{
        		name = "_GridFindPop";
        		url = "comm::commGridFindPop.xfdl";
        		width = 318;
        		height = 200;

        		div = form.components["_GridFindReplacePop"];

        		if (div && div.visible ) {
        			div.set_visible(false);
        		}
        	}
        	else
        	{
        		name = "_GridFindReplacePop";
        		url = "comm::commGridFindReplacePop.xfdl";
        		width = 318;
        		height = 220;

        		div = form.components["_GridFindPop"];

        		if (div && div.visible) {
        			div.set_visible(false);
        		}
        	}

        	div = form.components[name];

        	if (this.gfn_IsEmpty(div))
        	{
        		// add div component
        		var x = Math.round((form.getOffsetWidth()-width)/2);
        		var y = Math.round((form.getOffsetHeight()-height)/2);

        		div = new Div();
        		div.init(name, x, y, width, height);
        		div.set_border("1px solid gray");
        		form.addChild(div.name, div);

        		// 찾기/바꾸기 대상 그리드 지정
        		div.targetGrid = grid;

        		div.set_async(false);
        		div.show();

        		div.set_url(url);
        	}
        	else
        	{
        		// 찾기/바꾸기 대상 그리드 지정
        		div.targetGrid = grid;

        		if (type == "replace") {
        			div.setColumnList(grid);
        		}

        		div.set_visible(true);
        		div.setFocus();
        		div.edt_find.setFocus();
        	}
        }

        /************************************************************************************************
         * Even   : appendFindReplaceCache
         * Desc   : 찾기/바꾸기 문자열 추가
         * Param : {type} 찾기(find) 또는 바꾸기(replace)
                        {text} 대상 문자열
         ************************************************************************************************/
        this.appendFindReplaceCache = function(type, text)
        {
        	// 문자열 캐시 생성 (nexacro.Application에 추가)
        	var stringCache = nexacro.Application.gridFindReplaceStringCache;

        	if (this.gfn_IsUndefined(stringCache)) {
        		stringCache = { 'findList': [], 'replaceList': [] };

        		nexacro.Application.gridFindReplaceStringCache = stringCache;
        	}

        	// 목록에 없으면 첫번째에 삽입하고 이미 등록된 문자열은 첫번째로 이동
        	var list = stringCache[type+"List"];
        	var index = this.gfn_ArrayIndexOf(list, text);
        	if (index < 0)
        	{
        		list.splice(0, 0, text);
        	}
        	else
        	{
        		var i, tmp;
        		index = parseInt(index, 10);

        		if (index !== 0 &&
        			0 <= index && index <= list.length &&
        			0 <= 0 && 0 <= list.length)
        		{
        			tmp = list[index];
        			if (index < 0)
        			{
        				for (i = index; i < 0; i++)
        				{
        					list[i] = list[i + 1];
        				}
        			}
        			else
        			{
        				for (i = index; i > 0; i--)
        				{
        					list[i] = list[i - 1];
        				}
        			}
        			list[0] = tmp;
        		}
        	}
        }

        /************************************************************************************************
         * Even   : getFindReplaceCache
         * Desc   : 찾기/바꾸기 문자열 목록 가져오기
         * Param : {type} 찾기(find) 또는 바꾸기(replace)
         ************************************************************************************************/
        this.getFindReplaceCache = function(type)
        {
        	// 문자열 캐시
        	var stringCache = nexacro.Application.gridFindReplaceStringCache;
        	if (this.gfn_IsUndefined(stringCache)) {
        		return [];
        	}

        	return stringCache[type+"List"];
        }

        /************************************************************************************************
         * Even   : getBindColumnType
         * Desc   : 주어진 Body Cell 에 지정 된 bind 정보를 통해 Dataset Column Type 을 반환
         * Param : {grid} 대상 Grid Component
        				{cell} 찾을 셀 인덱스
         * Return : {boolean} 데이터 타입
         ************************************************************************************************/
        this.getBindColumnType = function(grid, cell)
        {
        	var dataType = null;
        	var dataset = this.gfn_Lookup(grid.parent, grid.binddataset);
        	var bindColid = grid.getCellProperty("body", cell, "text");
        	bindColid = bindColid.replace("bind:", "");

        	if (!this.gfn_IsEmpty(bindColid))
        	{
        		var colInfo = dataset.getColumnInfo(bindColid);

        		if (!this.gfn_IsEmpty(colInfo)) {
        			dataType = colInfo.type;
        		}
        	}

        	return dataType;
        }

        /************************************************************************************************
         * Even   : findGridText
         * Desc   : 주어진 문자열을 Grid 에서 찾기
         * Param : {grid} 대상 Grid Component
        				{findText} findText 찾을 문자열
        				{option} 찾을 옵션
         * Return : {array} 찾은 [행, 셀] 인덱스
         ************************************************************************************************/
        this.findGridText = function(grid, findText, option)
        {
        	// F3 발생 시 마지막 찾은 문자열 계속 찾기 위해 값 지정
        	grid.lastFindText = findText;
        	grid.lastFindOption = option;

        	// 찾을 옵션
        	var direction = option.direction;
        	var position = option.position;
        	var scope = option.scope;
        	var condition = option.condition;
        	var strict = option.strict;

        	var dataset = this.gfn_Lookup(grid.parent, grid.binddataset);
        	var startCell = (position == "current" ? grid.currentcell : grid.lastFindCell);
        	var startRow = (position == "current" ? grid.currentrow : grid.lastFindRow);

        	// 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
        	if (scope == "col" && !this.gfn_IsEmpty(option.cell)) {
        		startCell = option.cell;
        	}

        	var findRow = findCell = -1;
        	var rowCnt = dataset.rowcount;
        	var bodyCellCnt = grid.getCellCount("body");

        	// findText 를 가공하기 전에 찾을 문자열 목록에 등록
        	this.appendFindReplaceCache("find", findText);

        	// 대소문자 구분
        	if (!strict) {
        		findText = findText.toUpperCase();
        	}

        	// 전체 범위 찾기
        	if (scope == "all")
        	{
        		// 시작 cell 조정
        		if (direction == "prev")
        		{
        			startCell -= 1;

        			if (startCell < 0)
        			{
        				startCell = bodyCellCnt-1;
        				startRow -= 1;

        				if (startRow < 0) {
        					startRow = rowCnt - 1;
        				}
        			}
        		}
        		else
        		{
        			startCell += 1;

        			if (startCell > (bodyCellCnt - 1))
        			{
        				startCell = 0;
        				startRow += 1;

        				if (startRow > (rowCnt - 1)) {
        					startRow = 0;
        				}
        			}
        		}

        		var loopCnt = rowCnt;
        		while (loopCnt > 0)
        		{
        			while (true)
        			{
        				// 문자열 비교
        				if (this.compareFindText(grid, startRow, startCell, findText, condition, strict)) {
        					findRow = startRow;
        					findCell = startCell;

        					break;
        				}

        				// 방향 (이전, 다음)
        				if (direction == "prev")
        				{
        					startCell -= 1;

        					if (startCell < 0) {

        						break;
        					}
        				}
        				else
        				{
        					startCell += 1;

        					if (startCell > (bodyCellCnt - 1)) {
        						break;
        					}
        				}
        			}

        			if (findRow > -1 && findCell > -1) break;

        			// 방향 (이전, 다음)
        			if (direction == "prev")
        			{
        				startRow -= 1;

        				if (startRow < 0) {
        					startRow = rowCnt - 1;
        				}

        				startCell = (bodyCellCnt - 1);
        			}
        			else
        			{
        				startRow += 1;

        				if (startRow > (rowCnt - 1)) {
        					startRow = 0;
        				}

        				startCell = 0;
        			}

        			loopCnt--;
        		}
        	}
        	else if (scope == "row")
        	{
        		// 행 범위 찾기
        		// 시작 cell 조정
        		if (direction == "prev")
        		{
        			startCell -= 1;

        			if (startCell < 0) {
        				startCell = bodyCellCnt-1;
        			}
        		}
        		else
        		{
        			startCell += 1;

        			if (startCell > (bodyCellCnt - 1))
        			{
        				startCell = 0;
        			}
        		}

        		var loopCnt = startCell + bodyCellCnt;
        		while (loopCnt > 0)
        		{
        			// 문자열 비교
        			if (this.compareFindText(grid, startRow, startCell, findText, condition, strict)) {
        				findRow = startRow;
        				findCell = startCell;

        				break;
        			}

        			// 방향 (이전, 다음)
        			if (direction == "prev")
        			{
        				startCell -= 1;

        				if (startCell < 0) {
        					startCell = bodyCellCnt - 1;
        				}
        			}
        			else
        			{
        				startCell += 1;

        				if (startCell > (bodyCellCnt - 1)) {
        					startCell = 0;
        				}
        			}

        			loopCnt--;
        		}
        	}
        	else if (scope == "col")
        	{
        		// 열 범위 찾기
        		// 시작 cell 조정
        		if (direction == "prev")
        		{
        			startRow -= 1;

        			if (startRow < 0) {
        				startRow = rowCnt - 1;
        			}
        		}
        		else
        		{
        			startRow += 1;

        			if (startRow > rowCnt) {
        				startRow = 0;
        			}
        		}

        		var loopCnt = rowCnt;
        		while (loopCnt > 0)
        		{
        			// 문자열 비교
        			if (this.compareFindText(grid, startRow, startCell, findText, condition, strict))
        			{
        				findRow = startRow;
        				findCell = startCell;

        				break;
        			}

        			// 방향 (이전, 다음)
        			if (direction == "prev")
        			{
        				startRow -= 1;

        				if (startRow < 0) {
        					startRow = rowCnt - 1;
        				}
        			}
        			else
        			{
        				startRow += 1;

        				if (startRow > (rowCnt - 1)) {
        					startRow = 0;
        				}
        			}

        			loopCnt--;
        		}
        	}

        	// 마지막 찾은 위치 지정
        	// 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
        	if (findRow > -1 && findCell > -1) {
        		grid.lastFindRow = findRow;
        		grid.lastFindCell = findCell;
        	}

        	return [findRow, findCell];
        }

        /************************************************************************************************
         * Even   : compareFindText
         * Desc   : 주어진 행, 셀 인덱스에 해당하는 그리드 데이터와 문자열을 비교하여 찾아진 결과를 반환
         * Param : {grid} 대상 Grid Component
                        {row} 찾을 행 인덱스
                        {cell} 찾을 셀 인덱스
                        {findText} f찾을 문자열
                        {condition} 찾을 조건(equal/inclusion)
                        {strict} 대소문자 구분 (true/false)
         * Return : {boolean} 찾기 성공
         ************************************************************************************************/
        this.compareFindText = function(grid, row, cell, findText, condition, strict)
        {
        	var cellText = grid.getCellText(row, cell);
        	var displayType = grid.getCellProperty("body", cell, "displaytype");

        	// displayType 이 normal일 경우
        	// dataType 을 체크하여 displayType 을 변경
        	if (this.gfn_IsEmpty(displayType) || displayType == "normal")
        	{
        		var dataType = this.getBindColumnType(grid, cell);
        		switch (dataType)
        		{
        			case 'INT' :
        			case 'FLOAT' :
        			case 'BIGDECIMAL' :
        				displayType = "number";
        				break;

        			case 'DATE' :
        			case 'DATETIME' :
        			case 'TIME' :
        				displayType = "date";
        				break;

        			default :
        				displayType = "strign";
        		}
        	}

        	// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
        	if (displayType == "currency")
        	{
        		var code = cellText.charCodeAt(0);
        		if (code == 65510 || code == 92) {
        			cellText = cellText.substr(1);
        		}

        		code = findText.charCodeAt(0);
        		if (code == 65510 || code == 92) {
        			findText = findText.substr(1);
        		}
        	}

        	// 대소문자 구분
        	if (!strict) {
        		cellText = cellText.toUpperCase();
        	}

        	// 일치/포함
        	if (condition == "equal")
        	{
        		if (findText == cellText) {
        			return true;
        		}
        	}
        	else
        	{
        		if (cellText.indexOf(findText) > -1) {
        			return true;
        		}
        	}

        	return false;
        }

        /************************************************************************************************
         * Even   : markGridFindResult
         * Desc   : 찾기 결과를 그리드에 표시
         * Param : {grid} 대상 Grid Component
                        {findRow} findRow 찾아진 행 인덱스
                        {findCell} findCell 찾아진 셀 인덱스
         ************************************************************************************************/
        this.markGridFindResult = function(grid, findRow, findCell)
        {
        	var dataset = this.gfn_Lookup(grid.parent, grid.binddataset);

        	dataset.set_rowposition(findRow);

        	grid.setCellPos(findCell);

        	/*
        	찾아진 결과를 표시할 방법을 고민해보자

        	var col = grid.getCellProperty("body", findCell, "col");
        	var band = grid.getFormatColProperty(col, "band");
        	var pivotIndex = Base.decode(band, "left", -1, "right", -2, 0);

        	var rect = grid.getCellRect(findRow, findCell, pivotIndex);
        	var l = grid.getOffsetLeft() + rect.left;
        	var t = grid.getOffsetTop() + rect.top + 2;
        	var w = rect.width;
        	var h = rect.height;

        	var name = "_findBlickCell";
        	var blinkCellObj = grid.parent.components[name];

        	if ( this.gfn_IsEmpty(blinkCellObj) )
        	{
        	blinkCellObj = new Static();
        	blinkCellObj.init(name, l, t, w, h);
        	blinkCellObj.style.set_border("1px dotted red");
        	blinkCellObj.style.set_background("transparent");
        	grid.parent.addChild(name, blinkCellObj);
        	blinkCellObj.show();
        	}

        	blinkCellObj.move(l, t, w, h);
        	*/
        }

        /************************************************************************************************
         * Even   : replaceGridText
         * Desc   : 주어진 문자열을 그리드에서 찾아서 바꿀 문자열로 변경
         * Param : {grid} 대상 Grid Component
                        {findRow} findRow 찾아진 행 인덱스
                        {replaceText} replaceText 바꿀 문자열
                        {option} all 모두 바꾸기 여부
                        {all} findCell 찾아진 셀 인덱스
         * Return : {number} 변경 항목 개수
         ************************************************************************************************/
        this.replaceGridText = function(grid, findText, replaceText, option, all)
        {
        	// F3 발생 시 마지막 찾은 문자열 계속 찾기 위해 값 지정
        	grid.lastFindText = findText;
        	grid.lastFindOption = option;

        	if (this.gfn_IsEmpty(all)) {
        		all = false;
        	}

        	// 찾을 옵션 ( 바꾸기의 범위는 특정 칼럼만 지원)
        	var direction = option.direction;
        	var position = option.position;
        	var condition = option.condition;
        	var strict = option.strict;
        	var cell = option.cell;

        	var dataset = this.gfn_Lookup(grid.parent, grid.binddataset);

        	// 바꾸기의 범위는 특정 칼럼만 지원
        	var startCell = option.cell;
        	var startRow;

        	if (position == "current")
        	{
        		startRow = grid.currentrow;
        	}
        	else
        	{
        		var lastReplaceRow = grid.lastReplaceRow;
        		if (this.gfn_IsUndefined( lastReplaceRow)) {
        			startRow = 0;
        		} else {
        			startRow = lastReplaceRow;
        		}
        	}

        	var results = [];
        	var findRow = findCell = -1;
        	var rowCnt = dataset.rowcount;
        	var bodyCellCnt = grid.getCellCount("body");

        	// 바꿀 문자열 목록에 등록
        	this.appendFindReplaceCache("replace", replaceText);

        	// 대소문자 구분
        	if (!strict) {
        		findText = findText.toUpperCase();
        	}

        	// 열 범위 바꾸기
        	var result;
        	var loopCnt = rowCnt;
        	while (loopCnt > 0)
        	{
        		// 문자열 비교
        		if (this.compareFindText(grid, startRow, startCell, findText, condition, strict))
        		{
        			findRow = startRow;
        			findCell = startCell;
        			result = this.replaceGridCellText(grid, findRow, findCell, findText, replaceText, strict);
        			results.push(result);

        			if (!all) break;
        		}

        		// 방향 (이전, 다음)
        		if (direction == "prev")
        		{
        			startRow -= 1;
        			if (startRow < 0) {
        				startRow = rowCnt-1;
        			}
        		}
        		else
        		{
        			startRow += 1;

        			if (startRow > (rowCnt - 1)) {
        				startRow = 0;
        			}
        		}

        		loopCnt--;
        	}

        	// 마지막 바꾸기 위치 지정
        	grid.lastReplaceRow = findRow;

        	return results;
        }

        /************************************************************************************************
         * Even   : replaceGridCellText
         * Desc   : 바꾸기에 의해 찾아진 행, 셀 인덱스에 해당하는 데이터를 실제 변경
         * Param : {grid} 대상 Grid Component
                        {findRow} 찾아진 행 인덱스
                        {findCell} 찾아진 셀 인덱스
                        {findText} 찾을 문자열
                        {replaceText} 바꿀 문자열
                        {strict} 대소문자 구분 (true/false)
         * Return : {boolean} strict 대소문자 구분
         ************************************************************************************************/
        this.replaceGridCellText = function(grid, findRow, findCell, findText, replaceText, strict)
        {
        	var result = { 'replace': true, 'message': '처리되었습니다.', 'row': findRow, 'cell': findCell };

        	// expr 등에 의해 셀이 실제 입력 가능한지 테스트 후 처리
        	var dataset = this.gfn_Lookup(grid.parent, grid.binddataset);
        	dataset.set_rowposition(findRow);
        	grid.setCellPos(findCell);

        	var editable = grid.showEditor(true);
        	if (editable) {
        		grid.showEditor(false);
        	} else {
        		return;
        	}

        	var mask = grid.getCellProperty("body", findCell, "mask");
        	if (typeof mask == "object") {
        		mask = mask.toString();
        	}

        	var displayType = grid.getCellProperty("body", findCell, "displaytype");
        	var editType = grid.getCellProperty("body", findCell, "edittype");
        	var text = grid.getCellProperty("body", findCell, "text");
        	var bindColid = text.replace("bind:", "");

        	// displayType 이 normal일 경우
        	// dataType 을 체크하여 displayType 을 변경
        	var dataType = this.getBindColumnType(grid, findCell);
        	if (this.gfn_IsEmpty(displayType) || displayType == "normal")
        	{
        		switch (dataType)
        		{
        			case 'INT' :
        			case 'FLOAT' :
        			case 'BIGDECIMAL' :
        				displayType = "number";
        				break;

        			case 'DATE' :
        			case 'DATETIME' :
        			case 'TIME' :
        				displayType = "date";
        				break;

        			default :
        				displayType = "string";
        		}
        	}

        	var replace;
        	var replaceVal;
        	var columnValue = dataset.getColumn(findRow, bindColid);
        	var displayValue = grid.getCellText(findRow, findCell);

        	if (displayType == "combo" && editType == "combo")
        	{
        		// 변경될 문자열에 해당하는 콤보리스트 존재 시 변경
        		var comboDataset = grid.getCellProperty("body", findCell, "combodataset");
        		comboDataset = this.gfn_Lookup(grid.parent, comboDataset);
        		var comboCodeCol = grid.getCellProperty("body", findCell, "combocodecol");
        		var comboDataCol = grid.getCellProperty("body", findCell, "combodatacol");

        		var row = comboDataset.findRow(comboDataCol, replaceText);
        		if (row > -1) {
        			replaceVal = comboDataset.getColumn(row, comboCodeCol);
        		} else {
        			result.replace = false;
        			result.message = "바꿀 문자열에 해당하는 데이터 없음";
        		}
        	}
        	else if (displayType == "number" || displayType == "currency")
        	{
        		// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 변경
        		if (displayType == "currency")
        		{
        			var code = findText.charCodeAt(0);
        			if (code == 65510 || code == 92) {
        				findText = findText.substr(1);
        			}

        			code = replaceText.charCodeAt(0);
        			if (code == 65510 || code == 92) {
        				replaceText = replaceText.substr(1);
        			}

        			code = displayValue.charCodeAt(0);
        			if (code == 65510 || code == 92) {
        				displayValue = displayValue.substr(1);
        			}
        		}

        		// 셀에 보여지는 값에서 찾는 문자열 값을 변경

        		// 대소문자 구분
        		if (strict) {
        			displayValue = displayValue.replace(findText, replaceText);
        		} else {
        			displayValue = this.gfn_ReplaceIgnoreCase(displayValue, findText, replaceText);
        		}

        		// 숫자형 이외 제거
        		replaceVal = this.replaceNumberMaskValue(displayValue);
        	}
        	else if (displayType == "date")
        	{
        		if (columnValue == null)
        		{
        			// 값이 없을때 보이는 "0000-01-01" 과 같이
        			// 텍스트에서 찾아 질 경우가 있다.
        			result.replace = false;
        			result.message = "유효한 날짜가 아닙니다.";
        		}
        		else
        		{
        			// mask 속성이 없으면 calendar 의 editformat을 가져옴 (yyyy-MM-dd)
        			if (this.gfn_IsEmpty(mask)) {
        				mask = grid.controlcalendar.editformat;
        			}

        			var ret = this.replaceDateMaskValue(columnValue, displayValue, findText, replaceText, mask, strict);
        			replaceVal = ret[1];

        			if (ret[0] == false) {
        				result.replace = false;
        				result.message = ret[2];
        			}
        		}
        	}
        	else
        	{
        		if (this.gfn_IsEmpty(mask))
        		{
        			// 대소문자 구분
        			if (strict) {
        				replaceVal = columnValue.replace(findText, replaceText);
        			} else {
        				replaceVal = this.gfn_ReplaceIgnoreCase(columnValue, findText, replaceText);
        			}
        		}
        		else
        		{
        			var maskChar = grid.getCellProperty("body", findCell, "maskchar");
        			replaceVal = this.replaceStringMaskValue(columnValue, displayValue, findText, replaceText, mask, maskChar, strict);
        		}
        	}

        	if (result.replace) {
        		dataset.setColumn(findRow, bindColid, replaceVal);
        	}

        	return result;
        }

        /************************************************************************************************
         * Even   : replaceNumberMaskValue
         * Desc   : 숫자형으로 마스크 처리된 문자열에서 실제 값 가져오기
         * Param : {numString} 숫자형 문자열
         * Return : {string} 변환값 문자열
         ************************************************************************************************/
        this.replaceNumberMaskValue = function(numString)
        {
        	numString = numString.trim();

        	var numReg = /[0-9]/;
        	var bPoint = false; // 소숫점은 1개만 인정.
        	var bInside = false; // 부호는 숫자가 나오기 전에만 인정.
        	var c, buf = [];

        	for (var i = 0, len = numString.length; i < len; i++)
        	{
        		c = numString.charAt(i);
        		if (( c == '+' || c == '-') && ( bInside === false))  {
        			// 부호는 숫자가 나오기 전에만 인정.
        			buf.push(c);
        			bInside = true;
        		} else if (numReg.test(c))  {
        			// 숫자인경우 인정.
        			buf.push(c);
        			bInside = true;
        		} else if (c == "." && bPoint === false) {
        			// 소숫점은 1회만 인정.
        			buf.push(c);
        			bPoint = true;
        			bInside = true;
        		} else if(c != ",") {
        			return "";
        		}
        	}

        	return buf.join("");
        }

        /************************************************************************************************
         * Even   : replaceDateMaskValue
         * Desc   : 날짜형으로 마스크 처리된 문자열에서 실제 값 가져오기
         * Param : {columnValue} 변경전 데이터셋의 실제 값
                        {displayValue} 보여지는 문자열
                        {findText} 찾을 문자열
                        {replaceText} 바꿀 문자열
                        {mask} 마스크 속성값
                        {strict} 대소문자 구분 여부
         * Return : {object} 변환정보 (날짜여부, 변경된 문자열, 에러메시지)
         ************************************************************************************************/
        this.replaceDateMaskValue = function(columnValue, displayValue, findText, replaceText, mask, strict)
        {
        	if (this.gfn_IsEmpty(replaceText)) {
        		// 바꿀 문자열이 빈값이 되지 않도록 패딩
        		replaceText = replaceText.padRight(findText.length, " ");
        	}

        	// 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
        	var replaceDisplayValue;

        	// 대소문자 구분
        	if (strict) {
        		replaceDisplayValue = displayValue.replace(findText, replaceText);
        	} else {
        		replaceDisplayValue = this.gfn_ReplaceIgnoreCase(displayValue, findText, replaceText);
        	}

        	// 바꿀 값이 없다면 값을 제거한다.
        	if (this.gfn_IsEmpty(replaceDisplayValue.trim())) {
        		return [true, null];
        	}

        	// 2. mask 문자 분리
        	var arrMask = this.parseDateMask(mask);

        	// 3. 변경한 값과 마스크 값을 비교하면서 실제 값을 추출하고 유효날짜 판단
        	var tmpStr = "";
        	var isDate = true;
        	var errorMsg = "";
        	var valueIndex = 0;
        	var displayIndex = 0;
        	var dateValue = [];
        	var errorValue = [];
        	var checkMask;
        	var checkDayIndex = -1;
        	var checkYearValue = "";
        	var checkMonthValue = "";

        	for ( var i = 0, len = arrMask.length; i < len ; i++)
        	{
        		checkMask = arrMask[i];
        		if (!this.gfn_IsNumber(checkMask))
        		{
        			switch (checkMask)
        			{
        				case 'yyyy' :
        					tmpStr = replaceDisplayValue.substr(displayIndex, 4);

        					if (tmpStr.length != 4 || !nexacro.isNumeric(tmpStr)) {
        						isDate = false;
        						errorMsg = "연도가 올바르지 않습니다.";
        					}

        					// 일자체크를 위해
        					checkYearValue = tmpStr;

        					dateValue[dateValue.length] = tmpStr.trim(" ");
        					errorValue[errorValue.length] = tmpStr.trim(" ");
        					displayIndex += 4;
        					valueIndex += 4;
        					break;

        				case 'yy' :
        				case 'MM' :
        				case 'dd' :
        				case 'hh' :
        				case 'HH' :
        				case 'mm' :
        				case 'ss' :
        					tmpStr = replaceDisplayValue.substr(displayIndex, 2);

        					if (tmpStr.length == 2 && nexacro.isNumeric(tmpStr))
        					{
        						if (checkMask == "yy")
        						{
        							// 앞 두자리를 원본 데이터로 채운다.
        							tmpStr = columnValue.substr(valueIndex, 2) + tmpStr;

        							// 일자체크를 위해
        							checkYearValue = tmpStr;
        						}
        						else if (checkMask == "MM")
        						{
        							if (parseInt(tmpStr) < 1 || parseInt(tmpStr) > 12) {
        								isDate = false;
        								errorMsg = "월이 올바르지 않습니다.";
        							}

        							// 일자체크를 위해
        							checkMonthValue = tmpStr;
        						}
        						else if (checkMask == "dd")
        						{
        							// 윤년을 적용하기 위해서는 연도가 필요한데
        							// 무조건 연도(yyyy, yy)가 일(dd) 보다 앞에 온다는
        							// 보장이 없으므로 루프가 끝난 후 체크한다.
        							checkDayIndex = dateValue.length;
        						}
        						else if (checkMask == "hh" || checkMask == "HH")
        						{
        							if (parseInt(tmpStr) < 0 || parseInt(tmpStr) > 23) {
        								isDate = false;
        								errorMsg = "시간이 올바르지 않습니다.";
        							}
        						}
        						else if (checkMask == "mm" || checkMask == "ss")
        						{
        							if (parseInt(tmpStr) < 0 || parseInt(tmpStr) > 59) {
        								isDate = false;
        								errorMsg = "분이 올바르지 않습니다.";
        							}
        						}
        					}
        					else
        					{
        						isDate = false;
        						errorMsg = "날짜 형식이 올바르지 않습니다.";
        					}

        					dateValue[dateValue.length] = tmpStr.trim(" ");
        					errorValue[errorValue.length] = tmpStr.trim(" ");
        					displayIndex += 2;
        					valueIndex += 2;
        					break;
        			} // end switch
        		}
        		else
        		{
        			// dateValue 는 실제 적용할 값이므로 skip 하자
        			// 마스크 문자가 아닌 경우 표시문자 이므로 원래 값의 것을 사용
        			errorValue[errorValue.length] = displayValue.charAt(checkMask);
        			displayIndex += 1;
        		}
        	}

        	// 일자 유효 체크
        	if (!this.gfn_IsEmpty(checkYearValue) &&
        		!this.gfn_IsEmpty(checkMonthValue) && checkDayIndex > -1)
        	{
        		var dt = checkYearValue + checkMonthValue + "01";
        		var inputDay = parseInt(dateValue[checkDayIndex]);
        		var lastDay = this.gfn_getLastDayOfMonth(dt);

        		if (inputDay < 1 || inputDay > lastDay)
        		{
        			isDate = false;

        			var isLeapYear = this.gfn_IsLeapYear(dt);
        			if (!isLeapYear && inputDay == 29) {
        				errorMsg = "해당 연도는 윤년이 아닙니다.";
        			} else {
        				errorMsg = "일자가 올바르지 않습니다.";
        			}
        		}
        	}

        	if (isDate) {
        		return [isDate, dateValue.join("")];
        	} else {
        		return [isDate, errorValue.join(""), errorMsg];
        	}
        }

        /************************************************************************************************
         * Even   : parseDateMask
         * Desc   : 날짜형 마스크 구문을 분석
         * Param : {mask} 마스크 속성값
         * Return : {array} 구문값
         ************************************************************************************************/
        this.parseDateMask = function(mask)
        {
        	/*
        	Grid 지원 Date Mask 문자
        	yyyy,yy : 년도
        	MM : 월
        	dd : 일
        	ddd : 요일
        	hh : 시간
        	mm : 분
        	ss : 초
        	그리드 mask 속성이 없으면 Calendar의 editformat을 가져오는데
        	더 많은 mask 문자를 지원한다.
        	하지만 그리드에서는 제대로 동작하지 않으므로 제외하도록 한다.
        	*/

        	var dateMaskCache = nexacro.Application.dateMaskCache;
        	if (this.gfn_IsUndefined(dateMaskCache)) {
        		nexacro.Application.dateMaskCache = {};

        		dateMaskCache = nexacro.Application = dateMaskCache;
        	}

        	var arrMask = dateMaskCache[mask];
        	if (arrMask) return arrMask;

        	arrMask = [];

        	var maskArr = mask.split("");
        	var tmpStr = "";
        	var tokenStr = "";
        	var seq = 0;

        	for (var i = 0, len = mask.length; i < len;)
        	{
        		tmpStr = mask.substr(i, 4);
        		if (tmpStr == "yyyy") {
        			arrMask[seq] = tmpStr;
        			i += 4;
        			seq++;

        			continue;
        		}

        		// ddd => 요일은 입력할 수 없다.
        		tmpStr = mask.substr(i, 3);
        		if (tmpStr == "ddd") {
        			//arrMask[seq] = tmpStr;
        			i += 3;
        			//seq++;
        			continue;
        		}

        		// hh의 경우 (Calendar는 HH이며 그리드는 둘다 동작함)
        		tmpStr = mask.substr(i, 2);
        		if (tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
        			tmpStr == "HH" || tmpStr == "hh" || tmpStr == "mm" || tmpStr == "ss")
        		{
        			arrMask[seq] = tmpStr;
        			i += 2;
        			seq++;

        			continue;
        		}

        		tokenStr = maskArr[i];

        		// 입력되지 않으므로 skip.
        		if (tokenStr == "H" || tokenStr == "M" ||
        			tokenStr == "d" || tokenStr == "m" || tokenStr == "s")
        		{
        			//arrMask[seq] = tokenStr;
        			//seq++;
        		}
        		else
        		{
        			arrMask[seq] = i;
        			seq++;
        		}

        		i++;
        	}

        	dateMaskCache[mask] = arrMask;

        	return arrMask;
        }

        /************************************************************************************************
         * Even   : _stringMaskChar
         * Desc   : Grid 지원 String Mask 문자
         * @ : 모든 Ascii 문자(한글등 다국언어 불가)
        	# : 모든 10진수 숫자(0-9)
        	* : 모든 알파벳 문자(a-zA-Z)
        	9 : 모든 알파벳, 숫자(a-zA-Z0-9)
        	A : 대문자 알파벳(A-Z)
        	a : 소문자 알파벳(a-z)
        	Z : 대문자 알파벳, 숫자(A-Z0-9)
        	z : 소문자 알파벳, 숫자(a-z0-9)
         ************************************************************************************************/
        this._stringMaskChar = {
        	"@" : /[\x20-\x7D]/, // /[\u0020-\u00ff]/,
        	"#" : /[0-9]/,
        	"*" : /[a-zA-Z]/,
        	"9" : /[a-zA-Z0-9]/,
        	"A" : /[A-Z]/,
        	"a" : /[a-z]/,
        	"Z" : /[A-Z0-9]/,
        	"z" : /[a-z0-9]/
        };

        /************************************************************************************************
         * Even   : parseStringMask
         * Desc   : 문자형 마스크 구문을 분석
         * Param : {strMask} 마스크 속성값
        				{maskChar} 마스크 캐릭터
         * Return : {array} 구문값
         ************************************************************************************************/
        this._chkEmpty = String.fromCharCode(0x08);

        this.parseStringMask = function(strMask, maskChar)
        {
        	var stringMaskCache = nexacro.Application.stringMaskCache;
        	if (this.gfn_IsUndefined(stringMaskCache)) {
        		nexacro.Application.stringMaskCache = {};

        		stringMaskCache = nexacro.Application.stringMaskCache;
        	}

        	var res = stringMaskCache[strMask];
        	if (res) return res;

        	var len = strMask.length,
        	arrMask = [],
        	arrPass = [],
        	arrOrgMask = [],
        	bQuote = false,
        	bEscape = false,
        	bPasswd = false,
        	Mask = 0,
        	i, nIdx,
        	cMasks = strMask.split(""),
        	rmaskChar,
        	ReserveMasks = this._stringMaskChar;

        	for (i = 0, nIdx = 0; i < len ; i++)
        	{
        		if (bEscape == false && cMasks[i] == "'") // Mask가 Quotation이 시작될 경우
        		{
        			if (bQuote == false)
        				bQuote = true;
        			else
        				bQuote = false;
        			continue;
        		}

        		Mask = 0;
        		if (bEscape == false && cMasks[i] == "\\" && !bQuote) // Mask에서 Escape에 진입할 경우
        		{
        			bEscape = true;

        			continue;
        		}
        		else if (bEscape) // Mask에서 Escape를 사용할 경우
        		{
        			bEscape = false;
        		}
        		else if (bQuote == false) // Mask에서 Quotation 밖의 글자에 대해
        		{
        			rmaskChar = ReserveMasks[cMasks[i]];
        			if (rmaskChar)  {
        				Mask = rmaskChar;
        			}

        			if (cMasks[i] == "{") {
        				bPasswd = true;

        				continue;
        			}

        			if (cMasks[i] == "}") {
        				bPasswd = false;

        				continue;
        			}
        		}

        		arrMask[nIdx] = Mask;
        		arrPass[nIdx] = bPasswd;
        		arrOrgMask[nIdx] = cMasks[i];
        		nIdx++;
        	}

        	res = [arrMask, arrPass, arrOrgMask];
        	stringMaskCache[strMask] = res;

        	return res;
        }

        /************************************************************************************************
         * Even   : executeSort
         * Desc   : 문자형으로 마스크 처리된 문자열에서 실제 값 가져오기
         * Param : {columnValue} 변경 전 데이터셋의 실제 값
                        {displayValue} 보여지는 문자열
                        {findText} 찾을 문자열
                        {replaceText} 바꿀 문자열
                        {strMask} 마스크 속성값
                        {maskChar} 마스크 캐릭터
                        {strict} 대소문자 구분 여부
         * Return : {string} 변환값 문자열
         ************************************************************************************************/
        this.replaceStringMaskValue = function(columnValue, displayValue, findText, replaceText, strMask, maskChar, strict)
        {
        	if (this.gfn_IsEmpty(replaceText)) {
        		// 바꿀 문자열이 빈값이 되지 않도록 패딩
        		replaceText = replaceText.padRight(findText.length, this._chkEmpty);
        	}

        	// 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
        	var replaceDisplayValue;

        	// 대소문자 구분
        	if (strict) {
        		replaceDisplayValue = displayValue.replace(findText, replaceText);
        	} else {
        		replaceDisplayValue = this.gfn_ReplaceIgnoreCase(displayValue, findText, replaceText);
        	}

        	// 2. mask 문자 분리
        	var maskInfo = this.parseStringMask(strMask, maskChar);

        	// 3. 마스크 문자에 매칭되는 실제 값을 추출
        	var arrMask = maskInfo[0],
        	arrPass = maskInfo[1],
        	arrVal = replaceDisplayValue.split(""),
        	arrOrg = columnValue.split(""),
        	stringValues = [],
        	c;

        	for (var i = 0, len = arrMask.length; i < len; i++)
        	{
        		if (arrMask[i] != 0)
        		{
        			c = arrVal[i];

        			if (arrPass[i])
        			{
        				// 패스워드인데 바꿀 단어가 그대로 이거나 없다면 원본값
        				if (c == "*" || this.gfn_IsEmpty(c) || c == this._chkEmpty) {
        					c = arrOrg[i];
        				}
        			}
        			else
        			{
        				if (this.gfn_IsEmpty(c) || c == this._chkEmpty) {
        					c = "";
        				}
        			}

        			stringValues[i] = c;
        		}
        	}

        	return stringValues.join("");
        }

        /************************************************************************************************
        * 전체 선택, 전체 해제
        ************************************************************************************************/
        this.fn_BlockChk = function(objGrid)
        {
        	var objDs = eval("this." + objGrid.binddataset);

        	for (var i = 0; i <= objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "Chk", "1");
        	}

        	objGrid.setCellProperty("Head", 0, "text", "1");
        }

        this.fn_BlockUnChk = function(objGrid)
        {
        	var objDs = eval("this." + objGrid.binddataset);

        	for (var i = 0; i <= objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "Chk", 0);
        	}

        	objGrid.setCellProperty("Head", 0, "text", "0");
        }

        /************************************************************************************************
        * 컬럼 숨기기, 숨기기 해제, 숨기기 전체 해제
        ************************************************************************************************/
        this.fn_Hide = function(objGrid, nCell)
        {
        	var nCol = objGrid.getCellProperty("Head", nCell, "col");

        	objGrid.hidelist = objGrid.hidelist + nCell + "|" + objGrid.getFormatColProperty(nCol, "size") + "|";
        	objGrid.setFormatColProperty(nCol, "size", 0);
        }

        this.fn_Hide_Cancel = function(objGrid, nCell)
        {
        	var arrHideList = objGrid.hidelist.split("|");
        	objGrid.setFormatColProperty(arrHideList[arrHideList.length - 3], "size", arrHideList[arrHideList.length - 2]);
        	objGrid.hidelist = objGrid.hidelist.replace(arrHideList[arrHideList.length - 3] + "|" + arrHideList[arrHideList.length - 2] + "|",  "")
        }

        this.fn_Hide_CancelAll = function(objGrid, nCell)
        {
        	var i;
        	var arrHideList = objGrid.hidelist.split("|");

        	for (i = arrHideList.length - 2; i > -1; i = i - 2)
        	{
        		objGrid.setFormatColProperty(arrHideList[i-1],"size",arrHideList[i]);
        	}

        	objGrid.hidelist = "";
        }

        /************************************************************************************************
        * Grid Cell Resize
        ************************************************************************************************/
        this.gfn_cellReSizeAll = function(obj)
        {
        	var i;
        	var objDs =  eval ("this." + obj.binddataset);
        	var bindId;
        	var strCnt;
        	var objFont;
        	var objTextSize;
        	var nMaxTextSize;
        	var font = obj.currentstyle.font;

        	for (j = 0; j < obj.getCellCount("Body"); j++)
        	{
        		bindId = obj.getCellProperty("body", j, "text").toString().replace("bind:", "");
        		strCnt = obj.getCellText(-1, j);
        		nMaxTextSize = 0;

        		for (i = 0; i < objDs.rowcount; i++)
        		{
        			var objTxt = objDs.getColumn(i, bindId);

        			objTextSize = nexacro._getTextSize2(objTxt, font.size, false, "");

        			if (nMaxTextSize<objTextSize[0]) { nMaxTextSize = objTextSize[0]; }
        		}

        		obj.setRealColSize(j,nMaxTextSize + 100);
        	}

        	obj.setFormatRowProperty(0, "size", 35);
        	obj.setFormatRowProperty(1, "size", 31);
        }

        /************************************************************************************************
         * Even   : gfn_getObjFont
         * Desc   : Font Object 생성 반환
         * Param : {iFontSize} 지정할 Font Size
                        {sFontName} 지정할 Font 종류(ex: 맑은고딕, 돋움체...)
         * Return : {object} Font object
         ************************************************************************************************/
        this.gfn_getObjFont = function(iFontSize, sFontName)
        {
        	var objFont = new Font;
        	objFont.size = iFontSize;
        	objFont.name = sFontName;
        	objFont.bold = true;

        	return objFont;
        }

        /************************************************************************************************
         * Even   : gfn_getTextSize
         * Desc   : 1depth 메뉴 Text Size 반환
         * Param : {sText} 사이즈를 계산할 텍스트
                        {objFont} Font정보를 가지고 있는 object
                        {iLimitWidth} Option : word wrap이 일어나는 문자열 길이 제한 정수 값
                        {sConstWordWrapOption} Option : word wrap 옵션
         * Return : {object} 계산된 사이즈가 저장된  Size object
         ************************************************************************************************/
        this.gfn_getTextSize = function(sText, objFont, iLimitWidth, sConstWordWrapOption)
        {
        	// 	var objPainter = this.canvas.getPainter();
        	// 	if(gfn_IsNull(objPainter)==false)
        	// 	{
        	// 		var objTextSize = objPainter.getTextSize(sText, objFont);
        	// 		return objTextSize;
        	// 	}else
        	// 	{
        	// 		return false;
        	// 	}
        }

        /************************************************************************************************
        * Grid 행 고정, 열 고정
        ************************************************************************************************/
        this.nCell1 = "";
        this.cellFixFalg = "off";

        this.fn_cellFix = function(objGrid, nCell)
        {
        	nCell  = this.colIdx;

        	this.nCell1 = nCell;
        	var nCol = objGrid.getCellProperty("Head", nCell, "col");
        	var nColSpan = objGrid.getCellProperty("Head", nCell, "colspan");
        	var nVal = objGrid.getCellpos
        	var nMaxCol = 0;

        	objGrid.set_enableredraw(false);

        	if (nMaxCol < (nCol+nColSpan)) {
        		nMaxCol = nCol+nColSpan;
        	}

        	objGrid.setFormatColProperty(nMaxCol-1, "band", "left");
        	objGrid.setCellProperty( "Body", nMaxCol-1, "line", "1 solid #bcbcbcff,2px solid black");  //1px solid #b1b5b9ff,1px solid blue
        	objGrid.setCellProperty( "Body", nMaxCol-1, "selectline", "1 solid #bcbcbcff ,2px solid black");  //1px solid #b1b5b9ff,1px solid blue
        	objGrid.fixCol = nMaxCol;

        	objGrid.set_enableredraw(true);
        	this.cellFixFalg = "on";
        }

        this.fn_cellFree = function(objGrid)
        {
        	objGrid.set_enableredraw(false);

        	objGrid.setFormatColProperty(0, "band", "body");
        	objGrid.setCellProperty( "Body", objGrid.fixCol-1, "line", "");  //1px solid #b1b5b9ff,1px solid blue
        	objGrid.setCellProperty( "Body", objGrid.fixCol-1, "selectline", "");  //1px solid #b1b5b9ff,1px solid blue

        	objGrid.set_enableredraw(true);

        	this.colIdx = -1;
        	this.nCell1 = "";
        	this.cellFixFalg = "off";
        }

        this.fn_rowFix = function(objGrid, nRow)
        {
        	// 선택된 Row가 없을 경우 리턴
        	if (nRow < 0) return;

        	// 선택된 Row로 행 고정
        	objGrid.setFixedRow(nRow);
        }

        this.fn_rowFree = function(objGrid)
        {
        	// 행고정 초기화
        	objGrid.setFixedRow(-1);
        }

        /************************************************************************************************
        * 사용자 function
        ************************************************************************************************/
        this.fn_setGridFormat = function(objGrid)
        {
        	nexacro.setPrivateProfile("usrGrid_formats", objGrid.getCurFormatString());
        }

        this.fn_getGridFormat = function(objGrid)
        {
        	var usrGrid_formats = nexacro.getPrivateProfile("usrGrid_formats");

        	if (this.gfn_IsNull(usrGrid_formats)==false) {
        		objGrid.set_formats(("<Formats>" + usrGrid_formats + "</Formats>").replace("▼","").replace("▲",""));
        	}
        }

        this.fn_clearGridFormat = function(objGrid)
        {
        	var usrGrid_formats = objGrid.orgFormat;
        	objGrid.set_formats(("<Formats>" + usrGrid_formats + "</Formats>").replace("▼","").replace("▲",""));
        	nexacro.setPrivateProfile("usrGrid_formats", "");
        }

        /************************************************************************************************
        * 공통 function
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : gfn_IsNull
         * Desc   : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Param : {Val} 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return : {boolean}  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true 이외의 경우 = false
         ************************************************************************************************/
        this.gfn_IsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") {
        		return true;
        	}

        	if (Val == null) {
        		return true;
        	}

        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) {
        		return true;
        	}

        	if (Val.length == 0) {
        		return true;
        	}

        	return false;
        }

        /************************************************************************************************
         * Even   : gfn_IsEmpty
         * Desc   : value의 빈값 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} empty 여부
         ************************************************************************************************/
        this.gfn_IsEmpty = function(value)
        {
        	// null, undefined ==> true
        	if (value === null || value === undefined) return true;

        	// String, Array ==> length == 0
        	if (this.gfn_IsString(value) || this.gfn_IsArray(value))
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if (this.gfn_IsObject(value))
        	{
        		for (var p in value)
        		{
        			if (value.hasOwnProperty(p)) {
        				return false;
        			}
        		}

        		return true;
        	}

        	return false;
        }

        /************************************************************************************************
         * Even   : gfn_IsUndefined
         * Desc   : value의 undefined 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} undefined 여부
         ************************************************************************************************/
        this.gfn_IsUndefined = function(value)
        {
        	return value === undefined;
        }

        /************************************************************************************************
         * Even   : gfn_IsString
         * Desc   : value의 string 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} string 여부
         ************************************************************************************************/
        this.gfn_IsString = function(value)
        {
        	return typeof value === 'string';
        }

        /************************************************************************************************
         * Even   : gfn_IsNumber
         * Desc   : value의 number 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} number 여부
         ************************************************************************************************/
        this.gfn_IsNumber = function(value) {
        	return typeof value === 'number' && isFinite(value);
        }

        /************************************************************************************************
         * Even   : gfn_IsDate
         * Desc   : value의 Date 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} Date 여부
         ************************************************************************************************/
        this.gfn_IsDate = function(value)
        {
        	if (typeof value == 'object' && value instanceof Date) {
        		return true;
        	}

        	return false;
        }

        /************************************************************************************************
         * Even   : gfn_IsArray
         * Desc   : value의 Array 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} Array 여부
         ************************************************************************************************/
        this.gfn_IsArray = function(value)
        {
        	if (value === null || value === undefined) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	if (this.gfn_IsXpComponent(value)) return false;

        	return typeof value == "object" &&
        	'constructor' in value &&
        	value.constructor === Array;
        }

        /************************************************************************************************
         * Even   : gfn_IsObject
         * Desc   : value의 Object 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} Object 여부
         ************************************************************************************************/
        this.gfn_IsObject = function(value)
        {
        	if (value == null || value == undefined) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	if (this.gfn_IsXpComponent(value)) return false;

        	// 신규추가 2013.11.27 pbh. 데이터셋과 같은 xp object 거르기.
        	if (!this.gfn_IsEmpty(value._type)) {
        		if(value._type.substr(0,4) == "TOBE")  return false;
        	}

        	return typeof value == "object" &&
        	'constructor' in value &&
        	value.constructor === Object;
        }

        /************************************************************************************************
         * Even   : gfn_IsXpComponent
         * Desc   : value의 component 여부 반환
         * Param : {value} 확인할 value
         * Return : {boolean} component 여부
         ************************************************************************************************/
        this.gfn_IsXpComponent = function(value)
        {
        	if (value == null || value == undefined ) return false;

        	return value instanceof nexacro.Component;
        }

        /************************************************************************************************
         * Even   : gfn_getUniqueId
         * Desc   : 유일한 ID 를 반환
         * Param : {prefix} id 앞에 붙일 문자열
         * Return : {string} id
         ************************************************************************************************/
        this.gfn_getUniqueId = function(prefix)
        {
        	if (this.gfn_IsEmpty(prefix)) prefix = "";

        	var _ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
        	var seq = 0;
        	var seq0;
        	var tmpArray = new Array(36);
        	var idx = -1;

        	while (seq < 8)
        	{
        		tmpArray[++idx] = _ALPHA_CHAR_CODES[Math.floor(Math.random() * 16)];
        		seq++;
        	}

        	seq = 0;

        	while (seq < 3)
        	{
        		tmpArray[++idx] = 95;
        		seq0 = 0;

        		while (seq0 < 4)
        		{
        			tmpArray[++idx] = _ALPHA_CHAR_CODES[Math.floor(Math.random() * 16)];
        			seq0++;
        		}

        		seq++;
        	}

        	tmpArray[++idx] = 95;

        	var tmpStr = new Date().getTime();

        	tmpStr = ("0000000" + tmpStr.toString(16).toUpperCase()).substr(-8);

        	seq = 0;

        	while (seq < 8)
        	{
        		tmpArray[++idx] = tmpStr.charCodeAt(seq);
        		seq++;
        	}


        	seq = 0;

        	while (seq < 4)
        	{
        		tmpArray[++idx] = _ALPHA_CHAR_CODES[Math.floor(Math.random() * 16)];
        		seq++;
        	}

        	return prefix + String.fromCharCode.apply(null, tmpArray);
        }

        /************************************************************************************************
         * Even   : gfn_Lookup
         * Desc   : 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * Param : {p} 찾을 대상
                        {name} id 앞에 붙일 문자열
         * Return : {string} 검색된 component object
         ************************************************************************************************/
        this.gfn_Lookup = function(p, name)
        {
        	var o;

        	while (p)
        	{
        		o = p.components;

        		if (o && o[name]) return o[name];

        		o = p.objects;

        		if (o && o[name]) return o[name];

        		p = p.parent;
        	}

        	return null;
        }

        /************************************************************************************************
         * Even   : decode
         * Desc   : 입력된 값 또는 수식을 검사해 적당한 값을 Return
         * Param : 1. 비교값
                        2. CASE
        				3. 결과값 (2, 3 반복)
        				(2, 3 반복)
        				4. 디폴트값
        				디
         * Return : decode에 의해서 선택된 값
         ************************************************************************************************/
        this.decode = function()
        {
        	var i;
        	var count = arguments.length;

        	for (i = 1 ; i < count ; i += 2)
        	{
        		if (arguments[0] == arguments[i]) {
        			return arguments[i + 1];
        		}
        	}

        	return arguments[i - 2];
        }

        /************************************************************************************************
         * Even   : gfn_getCurrentScrollBarSize
         * Desc   : 스크롤바가 표시됐을 때에만 size를 반환
         * Param : {xpComp} Component
                        {string} type 스크롤바 종류(수평스크롤바:"horz", 수직스크롤바:"vert")
         * Return : {number} 스크롤바 size(스크롤바가 없거나 표시되지 않을 때는 0)
         ************************************************************************************************/
        this.gfn_getCurrentScrollBarSize = function(xpComp, type)
        {
        	var scrollBar = (type == "horz") ? xpComp.hscrollbar : xpComp.vscrollbar;

        	return (scrollBar && scrollBar.visible ? (type == "horz" ? scrollBar.height : scrollBar.width) : 0);
        }

        /************************************************************************************************
         * Even   : gfn_getBorderWidth
         * Desc   : Component의 boder width를 리턴
         * Param : {xpComp} Component
         * Return : {array.<number>} [ leftWdith, topWdith, rightWdith, bottomWdith ]
         ************************************************************************************************/
        this.gfn_getBorderWidth  = function(xpComp)
        {
        	var currentBorder = xpComp.border;

        	if (currentBorder)
        	{
        		//trace("1번: top_width=" + currentBorder.top_width);
        		//trace("2번: _getBorderTopWidth=" + currentBorder._getBorderTopWidth());

        		var leftWidth = 0, topWidth = 0, rightWidth = 0, bottomWidth = 0;
        		leftWidth = currentBorder.left_width;
        		topWidth = currentBorder.top_width;
        		rightWidth = currentBorder.right_width;
        		bottomWidth = currentBorder.bottom_width;

        		leftWidth   = nexacro.toNumber(leftWidth.replace("px",""));
        		topWidth    = nexacro.toNumber(topWidth.replace("px",""));
        		rightWidth  = nexacro.toNumber(rightWidth.replace("px",""));
        		bottomWidth = nexacro.toNumber(bottomWidth.replace("px",""));

        		return [leftWidth, topWidth, rightWidth, bottomWidth];
        	}
        	else
        	{
        		return [0, 0, 0, 0];
        	}
        }

        this.gfn_ArrayIndexOf = function(array, item, from, strict)
        {
        	var len = array.length;
        	var from = Number(arguments[2]) || 0;
        	var strict = arguments[3] || false;

        	from = (from < 0) ? Math.ceil(from) : Math.floor(from);

        	if (from < 0) {
        		from += len;
        	}

        	if (strict)
        	{
        		for (; from < len; from++)
        		{
        			if (from in array && array[from] == item) {
        				return from;
        			}
        		}
        	}
        	else
        	{
        		for (; from < len; from++)
        		{
        			if (from in array && array[from] == item) {
        				return from;
        			}
        		}
        	}

        	return -1;
        }

        /************************************************************************************************
         * Even   : gfn_ReplaceIgnoreCase
         * Desc   : 문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환
         * Param : {sOrg} 원래 문자열(ex : "aaBBbbcc")
                        {sRepFrom} 찾고자 하는 문자열(ex : "bb")
        				{sRepTo} 치환될 문자열 (ex : "xx")
         * Return : {number} 치환된 문자열 (ex : "aaxxxxccxx")
         ************************************************************************************************/
        this.gfn_ReplaceIgnoreCase = function(sOrg, sRepFrom, sRepTo)
        {
        	var pos, nStart = 0, sRet = "";

        	while(1)
        	{
        		pos = sOrg.toLowerCase().indexOf(sRepFrom.toLowerCase(), nStart)

        		if (pos < 0) {
        			sRet += sOrg.substr( nStart );

        			break;
        		} else {
        			sRet += sOrg.substr( nStart, pos - nStart);
        			sRet += sRepTo;
        			nStart = pos+sRepFrom.length;
        		}
        	}

        	return sRet;
        }

        /************************************************************************************************
         * Even   : gfn_IsLeapYear
         * Desc   : 윤년 여부
         * Param : {value} yyyyMMdd형태의 날짜 (ex : "20121122")
         * Return : {boolean} 윤년 여부.입력되지 않은 경우도 false
         ************************************************************************************************/
        this.gfn_IsLeapYear = function(value)
        {
        	var result;
        	var year;

        	if (this.gfn_IsString(value)) {
        		year = parseInt(value.substring(0,4), 10);
        	}

        	if ((year % 4) == 0)
        	{
        		if ((year % 100) != 0 || (year % 400) == 0) {
        			result = true;
        		} else {
        			result = false;
        		}
        	}
        	else
        	{
        		result = false;
        	}

        	return result;
        }

        /************************************************************************************************
         * Even   : gfn_getLastDayOfMonth
         * Desc   : 해당월의 마지막 날짜를 숫자로 구하기
         * Param : {value} yyyyMMdd형태의 날짜 (ex : "20121122")
         * Return : {number} 마지막 날짜 숫자값 (ex : 30)
         ************************************************************************************************/
        this.gfn_getLastDayOfMonth = function(value)
        {
        	var nMonth, nLastDate;

        	if (this.gfn_IsDate(value)) {
        		nMonth = value.getMonth() + 1;
        	} else {
        		nMonth = parseInt(value.substr(4,2), 10);
        	}

        	if (nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12)
        	{
        		nLastDate = 31;
        	}
        	else if (nMonth == 2)
        	{
        		if (this.gfn_IsLeapYear(value) == true) {
        			nLastDate = 29;
        		} else {
        			nLastDate = 28;
        		}
        	}
        	else
        	{
        		nLastDate = 30;
        	}

        	return nLastDate;
        }


        this.Button00_onclick = function(obj,e)
        {
        	//trace(this.parent.parent.parent.parent.name);
        	//system.print(this.parent.parent.parent.parent, true,  "middle", "center", true, "portrait"); //portrait,landscape
        	system.print(this, true,  "top", "left", true, "landscape"); //portrait,landscape
        	//system.print(this, true,  "top", "left", true, "portrait"); //portrait,landscape
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Functions_onload,this);
            this.addEventHandler("ontimer",this.Functions_ontimer,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
        };

        this.loadIncludeScript("Functions.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
