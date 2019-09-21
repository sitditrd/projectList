(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menuList");
            this.set_titletext("다양한 메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">010000</Col><Col id=\"caption\">대메뉴1</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">010100</Col><Col id=\"caption\">중메뉴1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">010101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010200</Col><Col id=\"caption\">중메뉴2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">010201</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010202</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010203</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020000</Col><Col id=\"caption\">대메뉴2</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">020100</Col><Col id=\"caption\">중메뉴1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">020101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020200</Col><Col id=\"caption\">중메뉴2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">020201</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020202</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020203</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030000</Col><Col id=\"caption\">대메뉴3</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">030100</Col><Col id=\"caption\">중메뉴1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">030101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030200</Col><Col id=\"caption\">중메뉴2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">030201</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030202</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030203</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040000</Col><Col id=\"caption\">대메뉴4</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">040100</Col><Col id=\"caption\">중메뉴1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">040101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040200</Col><Col id=\"caption\">중메뉴2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">040201</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040202</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040203</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050000</Col><Col id=\"caption\">대메뉴5</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">050100</Col><Col id=\"caption\">중메뉴1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">050101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050200</Col><Col id=\"caption\">중메뉴2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">050201</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050202</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050203</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060000</Col><Col id=\"caption\">대메뉴6</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">060100</Col><Col id=\"caption\">중메뉴1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">060101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060200</Col><Col id=\"caption\">중메뉴2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">060201</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060202</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060203</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">010000</Col><Col id=\"caption\">대메뉴1</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col></Row><Row><Col id=\"id\">010101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">1</Col><Col id=\"upid\">010000</Col></Row><Row><Col id=\"id\">010102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">1</Col><Col id=\"upid\">010000</Col></Row><Row><Col id=\"id\">010201</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">1</Col><Col id=\"upid\">010000</Col></Row><Row><Col id=\"id\">010202</Col><Col id=\"caption\">소메뉴4</Col><Col id=\"level\">1</Col><Col id=\"upid\">010000</Col></Row><Row><Col id=\"id\">010203</Col><Col id=\"caption\">소메뉴5</Col><Col id=\"level\">1</Col><Col id=\"upid\">010000</Col></Row><Row><Col id=\"id\">020000</Col><Col id=\"caption\">대메뉴2</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col></Row><Row><Col id=\"id\">020101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">1</Col><Col id=\"upid\">020000</Col></Row><Row><Col id=\"id\">020102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">1</Col><Col id=\"upid\">020000</Col></Row><Row><Col id=\"id\">020201</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">1</Col><Col id=\"upid\">020000</Col></Row><Row><Col id=\"id\">020202</Col><Col id=\"caption\">소메뉴4</Col><Col id=\"level\">1</Col><Col id=\"upid\">020000</Col></Row><Row><Col id=\"id\">020203</Col><Col id=\"caption\">소메뉴5</Col><Col id=\"level\">1</Col><Col id=\"upid\">020000</Col></Row><Row><Col id=\"id\">030000</Col><Col id=\"caption\">대메뉴3</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col></Row><Row><Col id=\"id\">030101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">1</Col><Col id=\"upid\">030000</Col></Row><Row><Col id=\"id\">030102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">1</Col><Col id=\"upid\">030000</Col></Row><Row><Col id=\"id\">030201</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">1</Col><Col id=\"upid\">030000</Col></Row><Row><Col id=\"id\">030202</Col><Col id=\"caption\">소메뉴4</Col><Col id=\"level\">1</Col><Col id=\"upid\">030000</Col></Row><Row><Col id=\"id\">030203</Col><Col id=\"caption\">소메뉴5</Col><Col id=\"level\">1</Col><Col id=\"upid\">030000</Col></Row><Row><Col id=\"id\">040000</Col><Col id=\"caption\">대메뉴4</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col></Row><Row><Col id=\"id\">040101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">1</Col><Col id=\"upid\">040000</Col></Row><Row><Col id=\"id\">040102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">1</Col><Col id=\"upid\">040000</Col></Row><Row><Col id=\"id\">040201</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">1</Col><Col id=\"upid\">040000</Col></Row><Row><Col id=\"id\">040202</Col><Col id=\"caption\">소메뉴4</Col><Col id=\"level\">1</Col><Col id=\"upid\">040000</Col></Row><Row><Col id=\"id\">040203</Col><Col id=\"caption\">소메뉴5</Col><Col id=\"level\">1</Col><Col id=\"upid\">040000</Col></Row><Row><Col id=\"id\">050000</Col><Col id=\"caption\">대메뉴5</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col></Row><Row><Col id=\"id\">050101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">1</Col><Col id=\"upid\">050000</Col></Row><Row><Col id=\"id\">050102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">1</Col><Col id=\"upid\">050000</Col></Row><Row><Col id=\"id\">050201</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">1</Col><Col id=\"upid\">050000</Col></Row><Row><Col id=\"id\">050202</Col><Col id=\"caption\">소메뉴4</Col><Col id=\"level\">1</Col><Col id=\"upid\">050000</Col></Row><Row><Col id=\"id\">050203</Col><Col id=\"caption\">소메뉴5</Col><Col id=\"level\">1</Col><Col id=\"upid\">050000</Col></Row><Row><Col id=\"id\">060000</Col><Col id=\"caption\">대메뉴6</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col></Row><Row><Col id=\"id\">060101</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">1</Col><Col id=\"upid\">060000</Col></Row><Row><Col id=\"id\">060102</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">1</Col><Col id=\"upid\">060000</Col></Row><Row><Col id=\"id\">060201</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">1</Col><Col id=\"upid\">060000</Col></Row><Row><Col id=\"id\">060202</Col><Col id=\"caption\">소메뉴4</Col><Col id=\"level\">1</Col><Col id=\"upid\">060000</Col></Row><Row><Col id=\"id\">060203</Col><Col id=\"caption\">소메뉴5</Col><Col id=\"level\">1</Col><Col id=\"upid\">060000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">010101</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">소메뉴1</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010102</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">소메뉴2</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010201</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">소메뉴3</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010202</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">소메뉴4</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010203</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">소메뉴5</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Menu1", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">인사기본</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">인사신청</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">다면평가</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020100</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">급여관리</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020200</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">퇴직연금신청</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020300</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">복리후생</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030100</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">근태신청</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030200</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">근태내역</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040100</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">경력개발</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040200</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">교육관리</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090100</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">요구기능시연</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090200</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">추가기능시연</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gds_Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">인사정보</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">인사기본</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010101</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">인사기본사항</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010102</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">자기신고(본인)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">인사신청</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010201</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">자격증 신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010202</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">제증명 신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">010203</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">사진변경 신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">다면평가</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010301</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">다면평가수행(부하)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010302</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">다면평가수행(동료)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">010303</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">다면평가수행(상사)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">020000</Col><Col id=\"MENU_NM\">노무정보</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\"/><Col id=\"SORT\">1</Col><Col id=\"UP_MENU_CD\">0</Col></Row><Row><Col id=\"MENU_CD\">020100</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">급여관리</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020101</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">계좌변경 신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020102</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">급여명세서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">020103</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">퇴직금 예상액</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">020104</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">연말정산 기초자료</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col></Row><Row><Col id=\"MENU_CD\">020105</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">갑근세 납세필 증명 신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">5</Col></Row><Row><Col id=\"MENU_CD\">020106</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">원천징수영수증 </Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">6</Col></Row><Row><Col id=\"MENU_CD\">020107</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">퇴직연금 관리</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">7</Col></Row><Row><Col id=\"MENU_CD\">020108</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">과세이연(IRA)자료</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">8</Col></Row><Row><Col id=\"MENU_CD\">020109</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">퇴직연금최초불입내역</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">9</Col></Row><Row><Col id=\"MENU_CD\">020200</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">퇴직연금신청</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020201</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">가입신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020202</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">제도변경신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">020203</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">사업자변경신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">020204</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">중도인출신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col></Row><Row><Col id=\"MENU_CD\">020205</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">담보대출신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">5</Col></Row><Row><Col id=\"MENU_CD\">020206</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">추가불입신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">6</Col></Row><Row><Col id=\"MENU_CD\">020300</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">복리후생</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020301</Col><Col id=\"UP_MENU_CD\">020300</Col><Col id=\"MENU_NM\">가족관리</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020302</Col><Col id=\"UP_MENU_CD\">020300</Col><Col id=\"MENU_NM\">사회보험 자격관리</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">020303</Col><Col id=\"UP_MENU_CD\">020300</Col><Col id=\"MENU_NM\">대부신청(주택자금)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">030000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">근태관리</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030100</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">근태신청</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030101</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">휴가원 신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030102</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">휴가원 취소</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">030103</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">결근원 신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">030104</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">현장출근계 신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col></Row><Row><Col id=\"MENU_CD\">030105</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">지참,조퇴계 신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">5</Col></Row><Row><Col id=\"MENU_CD\">030106</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">대근원/변경원 신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">6</Col></Row><Row><Col id=\"MENU_CD\">030107</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">대근원/변경원 취소</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">7</Col></Row><Row><Col id=\"MENU_CD\">030108</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">연차적치 신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">8</Col></Row><Row><Col id=\"MENU_CD\">030109</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">(사전,사후)초과근무신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">9</Col></Row><Row><Col id=\"MENU_CD\">030110</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">출장신청서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">10</Col></Row><Row><Col id=\"MENU_CD\">030111</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">출장결과보고서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">11</Col></Row><Row><Col id=\"MENU_CD\">030112</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">출장취소</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">12</Col></Row><Row><Col id=\"MENU_CD\">030113</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">여비불지급출장명령서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">13</Col></Row><Row><Col id=\"MENU_CD\">030114</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">국외출장명령서</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">14</Col></Row><Row><Col id=\"MENU_CD\">030115</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">항공마일리지입력</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">15</Col></Row><Row><Col id=\"MENU_CD\">030116</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">항공마일리지조회</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">16</Col></Row><Row><Col id=\"MENU_CD\">030200</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">근태내역</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030201</Col><Col id=\"UP_MENU_CD\">030200</Col><Col id=\"MENU_NM\">개인별 근무일정(조회)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030202</Col><Col id=\"UP_MENU_CD\">030200</Col><Col id=\"MENU_NM\">근무조별 근무일정</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">030203</Col><Col id=\"UP_MENU_CD\">030200</Col><Col id=\"MENU_NM\">근무변경조회(근무교대)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">040000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">KOSPO아카데미</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040100</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">경력개발</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040101</Col><Col id=\"UP_MENU_CD\">040100</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_NM\">로드맵조회</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040200</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">교육관리</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040201</Col><Col id=\"MENU_NM\">연간교육계획</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040202</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_NM\">직무역량대표교육과정</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">040203</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_NM\">직무별역량</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">040204</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_NM\">교육신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col></Row><Row><Col id=\"MENU_CD\">040205</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_NM\">개인별교육현황</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">5</Col></Row><Row><Col id=\"MENU_CD\">040206</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_NM\">어학성적등록신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">6</Col></Row><Row><Col id=\"MENU_CD\">090000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">기능시연</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090100</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">요구기능시연</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090101</Col><Col id=\"UP_MENU_CD\">090100</Col><Col id=\"MENU_NM\">자격증신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">poc01.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090102</Col><Col id=\"UP_MENU_CD\">090100</Col><Col id=\"MENU_NM\">휴가원신청</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">poc02.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090103</Col><Col id=\"UP_MENU_CD\">090100</Col><Col id=\"SORT\">3</Col><Col id=\"MENU_NM\">원천징수영수증</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">poc03.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090200</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">추가기능시연</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\"/></Row><Row><Col id=\"MENU_CD\">090201</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">1</Col><Col id=\"MENU_NM\">다양한그리드 기능 구현</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample01.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090202</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">2</Col><Col id=\"MENU_NM\">트리그리드, 소계/합계</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample02.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090203</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">3</Col><Col id=\"MENU_NM\">다양한그리드 표현</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample03.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090204</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">4</Col><Col id=\"MENU_NM\">상세정보보기(오픈API연동)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample04.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090205</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">5</Col><Col id=\"MENU_NM\">카테고리그리드</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample05.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090206</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">6</Col><Col id=\"MENU_NM\">그리드 값계산</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample06.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090207</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">7</Col><Col id=\"MENU_NM\">동적컴포넌트생성(일정관리)</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample07.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090208</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"MENU_NM\">다양한 메뉴구성</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample08.xfdl</Col><Col id=\"SORT\">8</Col></Row><Row><Col id=\"MENU_CD\">090209</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"MENU_NM\">인재프로필</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">poc04.xfdl</Col><Col id=\"SORT\">9</Col></Row><Row><Col id=\"MENU_CD\">100000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">Template</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\"/></Row><Row><Col id=\"MENU_CD\">100100</Col><Col id=\"UP_MENU_CD\">100000</Col><Col id=\"MENU_NM\">Step</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\">template</Col><Col id=\"PGM_ID\">temp_step.xfdl</Col></Row><Row><Col id=\"MENU_CD\">100200</Col><Col id=\"UP_MENU_CD\">100000</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">2</Col><Col id=\"MENU_NM\">ListDetail</Col><Col id=\"PGM_PATH\">template</Col><Col id=\"PGM_ID\">tempListDetail.xfdl</Col></Row><Row><Col id=\"MENU_CD\">100300</Col><Col id=\"UP_MENU_CD\">100000</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">3</Col><Col id=\"MENU_NM\">ListDetail_H</Col><Col id=\"PGM_PATH\">template</Col><Col id=\"PGM_ID\">tempListDetail_H.xfdl</Col></Row><Row><Col id=\"MENU_CD\">100400</Col><Col id=\"UP_MENU_CD\">100000</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">4</Col><Col id=\"MENU_NM\">MasterDetail</Col><Col id=\"PGM_PATH\">template</Col><Col id=\"PGM_ID\">tempMasterDetail.xfdl</Col></Row><Row><Col id=\"MENU_CD\">100500</Col><Col id=\"UP_MENU_CD\">100000</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">5</Col><Col id=\"MENU_NM\">MasterDetail_Tab</Col><Col id=\"PGM_PATH\">template</Col><Col id=\"PGM_ID\">tempMasterDetail_tab.xfdl</Col></Row><Row><Col id=\"MENU_CD\">100600</Col><Col id=\"UP_MENU_CD\">100000</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">6</Col><Col id=\"MENU_NM\">Suttle</Col><Col id=\"PGM_PATH\">template</Col><Col id=\"PGM_ID\">tempShuttle.xfdl</Col></Row><Row><Col id=\"MENU_CD\">100700</Col><Col id=\"UP_MENU_CD\">100000</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">7</Col><Col id=\"MENU_NM\">SingleDetail</Col><Col id=\"PGM_PATH\">template</Col><Col id=\"PGM_ID\">tempSingleDetail.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Menu2", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">인사기본</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">인사신청</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">다면평가</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020100</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">급여관리</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"caption\">모두펼침</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"caption\">모두닫기</Col><Col id=\"level\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Menu("Menu00","10","94",null,"33","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_captioncolumn("caption");
            obj.set_cssclass("gd_LT_menu");
            obj.set_border("2px solid #0a49af");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","727","157","220","132",null,null,null,null,null,null,this);
            obj.set_innerdataset("Dataset00");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_captioncolumn("caption");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","10","60","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상단메뉴 컴포넌트");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","140","60","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_cssclass("btn_cp_popMenu");
            obj.set_background("URL(\"imagerc::img_icon_plus.png\") no-repeat center center linear-gradient(to top,#eaeaea,#ffffff) transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","147","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("좌측메뉴 예시");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLeftMenu","10","181","182",null,null,"10",null,null,null,null,this);
            obj.set_cssclass("gd_LT_menu");
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"149\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시스템 목록\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" style=\"padding:5 5 5 5;\" text=\"bind:caption\" treestartlevel=\"0\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","386","181",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","0",null,null,"5","0",null,null,null,null,this.divMenu.form);
            obj.set_cssclass("gd_LT_menu");
            obj.set_taborder("0");
            obj.set_binddataset("Dataset02");
            obj.getSetter("useinputpanel").set("false");
            obj.set_useselcolor("false");
            obj.getSetter("scrollbars").set("none");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell style=\"padding:5 5 5 5;\" text=\"bind:caption\"/></Band></Format></Formats>");
            this.divMenu.addChild(obj.name, obj);

            obj = new Grid("Grid00","202","181","174",null,null,"10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_Menu1");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:MENU_NM\" treestartlevel=\"1\" treelevel=\"bind:MENU_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu1","201","312","176","150",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","5",null,null,"5","5",null,null,null,null,this.divMenu1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_Menu2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\" style=\"border:0 none #808080ff ;selectline:0 none #808080ff ;cellline:0 none #808080ff ;\"><Cell text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.divMenu1.addChild(obj.name, obj);

            obj = new PopupMenu("popMenu","727","313","99","50",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_PopMenu");
            obj.set_idcolumn("id");
            obj.set_captioncolumn("caption");
            obj.set_levelcolumn("level");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Menu Navigation");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MenuList.xfdl", function() {
        this.fv_timerIdx = 0;
        this.fv_timerMax = 20;
        this.fv_pageHeight = 122;
        this.objTarget;
        this.objTarget_befor = "";
        this.fv_Row;

        this.menuList_onload = function(obj,e)
        {
        	this.fn_setMenu3();
        }

        this.menuList_ontimer = function(obj,e)
        {
        	if (e.timerid == 1)
        	{
        		var objTile;
        		var nValue = this.fv_pageHeight - this.fn_moveAni(this.fv_timerIdx, 0, this.fv_pageHeight, this.fv_timerMax);
        		var nTop;

        		this.fv_timerIdx++;

        		for (i = 0; i < this.divMenu.form.components.length; i++)
        		{
        			objTile = this.divMenu.form.components[i];

        			nTop = nexacro.toNumber(objTile.orgTop)

        			if (objTile.orgTop > this.objTarget_befor.orgTop) {
        				nTop = nTop + nValue;
        			}

        			objTile.setOffsetTop(nTop);
        		}

        		this.divMenu.form.Grid00.setOffsetHeight(nValue);

        		if (this.fv_timerIdx == this.fv_timerMax)
        		{
        			var nTop = this.objTarget.getOffsetBottom();
        			this.divMenu.form.Grid00.move(0, nTop, null, 0, 0, null);

        			this.fv_timerIdx = 0;

        			this.killTimer(1);
        			this.setTimer(2, 10);
        		}
        	}
        	else if (e.timerid == 2)
        	{
        		var objTile;
        		var nValue = this.fn_moveAni(this.fv_timerIdx, 0, this.fv_pageHeight, this.fv_timerMax);
        		var nTop;

        		this.fv_timerIdx++;

        		for(i=0;i<this.divMenu.form.components.length;i++)
        		{
        			objTile = this.divMenu.form.components[i];

        			nTop = nexacro.toNumber(objTile.orgTop)

        			if (objTile.orgTop > this.objTarget.orgTop) {
        				nTop = nTop + nValue;
        				objTile.setOffsetTop(nTop);
        			}
        		}

        		this.divMenu.form.Grid00.setOffsetHeight(nValue + 2);

        		if(this.fv_timerIdx==this.fv_timerMax)
        		{
        			this.fv_timerIdx = 0;

        			this.objTarget_befor = this.objTarget;

        			this.killTimer(2);
        		}
        	}
        	else if (e.timerid == 3)
        	{
        		this.divMenu1.set_visible(false);
        		this.killTimer(3);
        	}
        }

        this.btnMenu_onclick = function(obj, e)
        {
        	this.objTarget = obj;
        	var nTop = this.objTarget.getOffsetBottom();

        	if (this.objTarget_befor!="") {
        		this.setTimer(1, 10);
        	} else {
        		this.divMenu.form.Grid00.move(0, nTop, null, 0, 0, null);
        		this.setTimer(2, 10);
        	}
        }

        this.Button00_onclick = function(obj,  e)
        {
        	this.PopupMenu00.trackPopupByComponent(obj, 0, 26);
        }

        this.Grid00_onmousemove = function(obj, e)
        {
        	if(this.fv_Row!=e.row)
        	{
        		if(e.row<0)
        		{
        			this.divMenu1.set_visible(false);
        			return;
        		}

        		var nLeft = obj.getOffsetLeft() + obj.getOffsetWidth();
        		var nTop = obj.getOffsetTop() + (e.row * 24);

        		this.fv_Row = e.row;
        		this.divMenu1.set_visible(true);
        		this.divMenu1.move(nLeft - 30, nTop);

        		sMENU_CD = this.ds_Menu1.getColumn(this.fv_Row, "MENU_CD");

        		this.gds_Menu.filter("UP_MENU_CD=='" + sMENU_CD + "'");
        		this.ds_Menu2.copyData(this.gds_Menu, true);
        		this.gds_Menu.filter("");
        		this.divMenu1.resize(this.divMenu1.getOffsetWidth(), 24 * this.ds_Menu2.rowcount + 13);

        		this.killTimer(3);
        		this.setTimer(3, 3000);
        	}
        }

        this.grdLeftMenu_onrbuttonup = function(obj,e)
        {
        	this.popMenu.col = e.col;

        	this.popMenu.trackPopupByComponent(obj, e.canvasx, e.canvasy);
        };

        this.popMenu_onmenuclick = function(obj,e)
        {
        	switch (e.id)
        	{
        		case "01" :
        			this.grdLeftMenu.set_treeinitstatus("expand,null");
        			break;

        		case "02" :
        			this.grdLeftMenu.set_treeinitstatus("collapse,null");
        			break;
        	}
        };

        this.fn_setMenu3 = function()
        {
        	var i;
        	var objBtn;
        	var nTop = 0;
        	var sMenuNm;

        	this.Dataset01.filter("level==0");

        	for (i = 0; i < this.Dataset01.rowcount; i++)
        	{
        		sMenuNm = this.Dataset01.getColumn(i, "caption");

        		objBtn = new Button("btnMenu"+i, 0, nTop, null, 33, 0, null);
        		this.divMenu.addChild(objBtn.name, objBtn);

        		objBtn.show();

        		objBtn.set_cssclass("btn_WF_basic01");
        		objBtn.set_text(sMenuNm);
        		objBtn.orgTop = nTop;

        		objBtn.addEventHandler("onclick", this.btnMenu_onclick, this);
        		nTop = objBtn.getOffsetBottom()+2;
        	}
        	this.divMenu.form.btnMenu0.click();
        };

        this.fn_moveAni = function (t, b, c, d)
        {
        	t /= d/2;
        	if (t < 1) return c/2*t*t*t + b;
        	t -= 2;
        	return c/2*(t*t*t + 2) + b;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.menuList_onload,this);
            this.addEventHandler("ontimer",this.menuList_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.grdLeftMenu.addEventHandler("oncellclick",this.grdLeftMenu_oncellclick,this);
            this.grdLeftMenu.addEventHandler("onrbuttonup",this.grdLeftMenu_onrbuttonup,this);
            this.Grid00.addEventHandler("onmousemove",this.Grid00_onmousemove,this);
            this.popMenu.addEventHandler("onmenuclick",this.popMenu_onmenuclick,this);
        };

        this.loadIncludeScript("MenuList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
