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
            this.set_titletext("다양한그리드기능");
            this.set_scrollbartype("autoindicator autoindicator");
            this.getSetter("classname").set("Functions");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column3\">321458</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">321458</Col><Col id=\"Column0\">강감찬</Col><Col id=\"Column2\">서울특별시 중구 세종대로 40</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">고려시대 명장. 본관은 금주, 초명은 은천. 귀주대첩 승리</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">425862</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">425862</Col><Col id=\"Column0\">김부식</Col><Col id=\"Column2\">경상북도 경주시 불국로 873-243</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">고려시대 문신. 본관은 경주, 자는 입지, 시호는 문열</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">57786</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">57786</Col><Col id=\"Column0\">정몽주</Col><Col id=\"Column2\">경기도 수원시 장안구 연무동 190</Col><Col id=\"Column1\">수정</Col><Col id=\"Column6\">고려 말 문신. 본관은 연일, 자는 달가. 시조 단심가를 지음</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">51651</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">51651</Col><Col id=\"Column0\">김유신</Col><Col id=\"Column2\">경상북도 영주시 부석사로 345</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column6\">삼국통일을 이룩한 신라 장군. 본관은 김해. 가야국의 시조 김수로왕(金首露王)의 12대손. 흥무대왕으로 추존</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">216548</Col><Col id=\"Column4\">20171005</Col><Col id=\"Column5\">216548</Col><Col id=\"Column0\">최무선</Col><Col id=\"Column2\">충청남도 부여군 정림로 83</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">고려 말, 조선 초 발명가. 본관은 영주. 원나라에서 화포제작법을 배워 우리나라에서도 제작함</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">216218</Col><Col id=\"Column4\">20171111</Col><Col id=\"Column5\">216218</Col><Col id=\"Column0\">정중부</Col><Col id=\"Column2\">경기도 여주시 북내면 상교리 411-1</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">고려시대 무신. 본관은 해주. 무신의 난으로 정권을 잡음</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">954561</Col><Col id=\"Column4\">20170101</Col><Col id=\"Column5\">954561</Col><Col id=\"Column0\">김부식</Col><Col id=\"Column2\">서울특별시 종로구 종로 99</Col><Col id=\"Column1\">수정</Col><Col id=\"Column6\">고려시대 문신. 본관은 경주, 자는 입지, 시호는 문열</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">2121684</Col><Col id=\"Column4\">20170201</Col><Col id=\"Column5\">2121684</Col><Col id=\"Column0\">안중근</Col><Col id=\"Column2\">경상북도 경주시 대경로 4859</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column6\">한말의 독립운동가. 본관은 순흥. 1909년(융희 2년)에 만주 하얼빈에서 이토 히로부미를 죽임. 건국훈장 대한민국장을 수상</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">6549845</Col><Col id=\"Column4\">20170601</Col><Col id=\"Column5\">6549845</Col><Col id=\"Column0\">안창호</Col><Col id=\"Column2\">경기도 이천시 관고동 501-7</Col><Col id=\"Column1\">조회</Col><Col id=\"Column6\">한말의 독립운동가·사상가. 호는 도산. 신민회를 조직. 《신한민보(新韓民報)》를 창간. 건국훈장 대한민국장을 수상함</Col><Col id=\"chk\"/></Row><Row><Col id=\"Column3\">65150</Col><Col id=\"Column4\">20170931</Col><Col id=\"Column5\">65150</Col><Col id=\"Column0\">유관순</Col><Col id=\"Column2\">충청남도 부여군 부여읍 동남리 산16-9</Col><Col id=\"Column1\">입력</Col><Col id=\"Column6\">한말의 독립운동가. 충남 천안 출생. 1919년 아우내 장터에서 3000여 군중에게 태극기를 나눠 주며 시위를 지휘하다가 일본 헌병대에 체포. 1920년 옥사함. 건국훈장 독립장을 수상</Col><Col id=\"chk\"/></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">이종무</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">전라북도 익산시 금마면 동고도리 1086</Col><Col id=\"Column3\">158886</Col><Col id=\"Column4\">20170429</Col><Col id=\"Column5\">158886</Col><Col id=\"Column6\">고려 말, 조선 초 무신. 본관은 장수. 일본 대마도를 정벌</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">한명회</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">부산광역시 연제구 경기장로 28</Col><Col id=\"Column3\">258624</Col><Col id=\"Column4\">20170111</Col><Col id=\"Column5\">258624</Col><Col id=\"Column6\">조선 전기의 문신. 본관은 청주, 자는 자준. 예종비 장순왕후와 성종비 공혜왕후의 부. 계유정난으로 정권을 받음. 세조 묘정에 배향</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">정몽주</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">제주특별자치도 제주시 일주동로 17</Col><Col id=\"Column3\">4569985</Col><Col id=\"Column4\">20170829</Col><Col id=\"Column5\">4569985</Col><Col id=\"Column6\">고려 말 문신. 본관은 연일, 자는 달가. 시조 단심가를 지음</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">문익점</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">경상남도 합천군 가야면 해인사길 122</Col><Col id=\"Column3\">1245568</Col><Col id=\"Column4\">20170605</Col><Col id=\"Column5\">1245568</Col><Col id=\"Column6\">고려시대 학자. 본관은 남평, 자는 일신, 시호는 충선. 원에서 목화씨를 가져와 재배함</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">최영</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">서울특별시 종로구 훈정동 1</Col><Col id=\"Column3\">336985</Col><Col id=\"Column4\">20170614</Col><Col id=\"Column5\">336985</Col><Col id=\"Column6\">고려 말 무신. 시호는 무민. 본관은 동주. 위화도회군으로 정권을 잃음</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">장영실</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">전라북도 남원시 산내면 대정리 975</Col><Col id=\"Column3\">578962</Col><Col id=\"Column4\">20170231</Col><Col id=\"Column5\">578962</Col><Col id=\"Column6\">조선 시대의 과학자. 본관은 아산. 기생의 아들. 해시계, 문시계, 측우기를 발명</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">곽재우</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">전라남도 구례군 마산면 화엄사로 539</Col><Col id=\"Column3\">11235</Col><Col id=\"Column4\">20170723</Col><Col id=\"Column5\">11235</Col><Col id=\"Column6\">조선 중기의 의병장. 본관은 현풍, 자는 계수. 임진왜란때 의병을 일으켜 왜군들을 무찌름. '망우집'을 지음</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">김시민</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">경상북도 안동시 서후면 봉정사길 222</Col><Col id=\"Column3\">569875</Col><Col id=\"Column4\">20170406</Col><Col id=\"Column5\">569875</Col><Col id=\"Column6\">조선 중기의 무신. 본관은 안동, 자는 면오. 임진왜란때 왜군들과 싸워 전사함. 선무공신 2등에 추록. 상락부원군에 추증</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">정양용</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">경상북도 영천시 청통면 거조길 400-67</Col><Col id=\"Column3\">5588966</Col><Col id=\"Column4\">20170308</Col><Col id=\"Column5\">5588966</Col><Col id=\"Column6\">조선 후기의 학자.문신, 본관은 나주, 호는 다산, 여유당. 수원 화성을 계획함. 《정다산전서(丁茶山全書)》을 저술(목민심서 등)</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">윤동주</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">전라북도 익산시 금마면 기양리 97번지</Col><Col id=\"Column3\">639996</Col><Col id=\"Column4\">20171205</Col><Col id=\"Column5\">639996</Col><Col id=\"Column6\">시인. 북간도에서 충생. 《서시(序詩)》,《또 다른 고향》,《별 헤는 밤》을 지음</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">이중섭</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">충청남도 보령시 성주면 성주리 80-4</Col><Col id=\"Column3\">859648</Col><Col id=\"Column4\">20170925</Col><Col id=\"Column5\">859648</Col><Col id=\"Column6\">한국의 서양화과. 호는 대향. 평양 출생. 작품으로 《소》《흰 소》등이 있음</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">박문수</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">충청남도 천안시 서북구 성환읍 대홍리 319-8</Col><Col id=\"Column3\">15698</Col><Col id=\"Column4\">20170722</Col><Col id=\"Column5\">15698</Col><Col id=\"Column6\">조선 후기의 문신. 본관은 고령, 자는 성보. 영조때 정미환국으로 영남 엄행어사로 나가 부정관리들을 적발함</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">황진이</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">서울특별시 종로구 율곡로 99</Col><Col id=\"Column3\">75489</Col><Col id=\"Column4\">20170614</Col><Col id=\"Column5\">75489</Col><Col id=\"Column6\">조선시대 시인, 명기(기생). 기생명은 명월.  《만월대 회고시》《박연폭포시》《봉별소양곡시》를 지음</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">김정호</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">충청북도 충주시 중앙탑면 탑평리 11</Col><Col id=\"Column3\">63963</Col><Col id=\"Column4\">20170416</Col><Col id=\"Column5\">63963</Col><Col id=\"Column6\">조선 후기 지리학자. 본관은 청도, 자는 백원. 《대동여지도》를 만듬</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">홍길동</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">서울특별시 용산구 서빙고로 137</Col><Col id=\"Column3\">668955</Col><Col id=\"Column4\">20170814</Col><Col id=\"Column5\">668955</Col><Col id=\"Column6\">허균이 지은 '홍길동전'의 주인공. 실존인물</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">신숙주</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">인천광역시 강화군 길상면 전등사로 37-41</Col><Col id=\"Column3\">754896</Col><Col id=\"Column4\">20170517</Col><Col id=\"Column5\">754896</Col><Col id=\"Column6\">조선 초기의 문신. 본관은 고령, 자는 범옹. 세종의 총애를 가장 많이 받은 학자이자, 계유정난으로 정난공신에 등록됨. 성종 묘정에 배향</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">한석봉</Col><Col id=\"Column1\">수정</Col><Col id=\"Column2\">경기도 안양시 만안구 예술공원로103번길 4</Col><Col id=\"Column3\">1258963</Col><Col id=\"Column4\">20170318</Col><Col id=\"Column5\">1258963</Col><Col id=\"Column6\">조선 중기의 서예가. 본관은 삼화, 호가 석봉이다. 왕희지, 안진경의 필법을 익혀 해.행.초 등 각 서체에 모두 뛰어남</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">전봉준</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">경상북도 봉화군 춘양면 서원촌길 8-14</Col><Col id=\"Column3\">458962</Col><Col id=\"Column4\">20170704</Col><Col id=\"Column5\">458962</Col><Col id=\"Column6\">조선 후기 동학농민운동의 지도자. 초명은 명숙, 별명이 녹두장군이다</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">김대건</Col><Col id=\"Column1\">조회</Col><Col id=\"Column2\">경기도 여주시 북내면 상교리 419-3번지</Col><Col id=\"Column3\">15756</Col><Col id=\"Column4\">20170114</Col><Col id=\"Column5\">15756</Col><Col id=\"Column6\">조선 최초의 신부. 본관은 김해, 세례명은 안드레아. 조선 후기 박해사건으로 가족들을 모두 잃음. 후에 25세로 순교함</Col></Row><Row><Col id=\"chk\"/><Col id=\"Column0\">방정환</Col><Col id=\"Column1\">입력</Col><Col id=\"Column2\">대구광역시 수성구 청호로 321</Col><Col id=\"Column3\">25896</Col><Col id=\"Column4\">20170326</Col><Col id=\"Column5\">25896</Col><Col id=\"Column6\">아동문학의 보급과 아동보호운동의 선구자인 아동문학가. 호는 소파. 어린이날을 공포</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">chkAll</Col><Col id=\"level\">0</Col><Col id=\"caption\">전체선택</Col><Col id=\"enable\">true</Col><Col id=\"type\">chk</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">chkClear</Col><Col id=\"level\">0</Col><Col id=\"caption\">선택취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">chk</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">hide</Col><Col id=\"level\">0</Col><Col id=\"caption\">숨기기</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">unhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">숨기기취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">unhideAll</Col><Col id=\"level\">0</Col><Col id=\"caption\">숨기기전체취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">none</Col><Col id=\"level\">0</Col><Col id=\"caption\">--------------------------</Col><Col id=\"icon\"/><Col id=\"enable\">false</Col><Col id=\"type\">head</Col></Row><Row><Col id=\"id\">asc</Col><Col id=\"level\">0</Col><Col id=\"caption\">오름차순</Col><Col id=\"icon\"/><Col id=\"enable\">true</Col><Col id=\"type\">head</Col></Row><Row><Col id=\"id\">desc</Col><Col id=\"level\">0</Col><Col id=\"caption\">내림차순</Col><Col id=\"icon\"/><Col id=\"enable\">true</Col><Col id=\"type\">head</Col></Row><Row><Col id=\"id\">clear</Col><Col id=\"level\">0</Col><Col id=\"caption\">정렬취소</Col><Col id=\"enable\">false</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">multiSort</Col><Col id=\"level\">0</Col><Col id=\"caption\">다중정렬</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">multiSortClear</Col><Col id=\"level\">0</Col><Col id=\"caption\">다중정렬취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">head</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">필터추가</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">filterClear</Col><Col id=\"level\">0</Col><Col id=\"caption\">필터제거</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">none</Col><Col id=\"level\">0</Col><Col id=\"caption\">--------------------------</Col><Col id=\"enable\">false</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">EXCEL</Col><Col id=\"level\">0</Col><Col id=\"caption\">EXCEL</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">export</Col><Col id=\"level\">1</Col><Col id=\"caption\">내보내기</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">import</Col><Col id=\"level\">1</Col><Col id=\"caption\">가져오기</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">none</Col><Col id=\"level\">0</Col><Col id=\"caption\">--------------------------</Col><Col id=\"icon\"/><Col id=\"enable\">false</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">FIX</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">shapeFix</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">shapeFree</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정 취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">rowFix</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">rowFree</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정 취소</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">fastvscrolltype</Col><Col id=\"level\">0</Col><Col id=\"caption\">스크롤옵션</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">default</Col><Col id=\"level\">1</Col><Col id=\"caption\">default</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">topdisplay</Col><Col id=\"level\">1</Col><Col id=\"caption\">상단표시</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">centerdisplay</Col><Col id=\"level\">1</Col><Col id=\"caption\">중앙표시</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">topbottomdisplay</Col><Col id=\"level\">1</Col><Col id=\"caption\">상단,하단표시</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">topcenterbottomdisplay</Col><Col id=\"level\">1</Col><Col id=\"caption\">상단,중앙,하단표시</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">trackbarfollow</Col><Col id=\"level\">1</Col><Col id=\"caption\">Row위치표시</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col></Row><Row><Col id=\"id\">gridFormat</Col><Col id=\"caption\">설정저장</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">gridFormatOrg</Col><Col id=\"caption\">원래대로</Col><Col id=\"enable\">true</Col><Col id=\"type\">body</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","0","200",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsList");
            obj.set_showselection("true");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"background: ;\" checkboxsize=\"17\" background=\"#f3f7f7\"/><Cell col=\"1\" style=\"background: ;\" text=\"성명\" expandshow=\"show\" expandimage=\"URL('imagerc::grd_sort.png')\" background=\"#f3f7f7\"/><Cell col=\"2\" style=\"background: ;\" text=\"타입\" expandshow=\"show\" expandimage=\"URL('imagerc::grd_sort.png')\" background=\"#f3f7f7\"/><Cell col=\"3\" style=\"background: ;\" text=\"주소\" expandshow=\"show\" expandimage=\"URL('imagerc::grd_sort.png')\" background=\"#f3f7f7\"/><Cell col=\"4\" style=\"background: ;\" text=\"설정금액\" expandshow=\"show\" expandimage=\"URL('imagerc::grd_sort.png')\" background=\"#f3f7f7\"/><Cell col=\"5\" style=\"background: ;\" text=\"생성일\" expandshow=\"show\" expandimage=\"URL('imagerc::grd_sort.png')\" background=\"#f3f7f7\"/><Cell col=\"6\" style=\"background: ;\" text=\"확인금액\" expandshow=\"show\" expandimage=\"URL('imagerc::grd_sort.png')\" background=\"#f3f7f7\"/><Cell col=\"7\" text=\"기타\" expandshow=\"show\" expandimage=\"URL('imagerc::grd_sort.png')\" background=\"#f3f7f7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxsize=\"17\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:Column2\" textAlign=\"left\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:Column3\" textAlign=\"right\" displaytype=\"maskeditcontrol\" maskeditformat=\"9,999\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:Column4\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:Column5\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"right\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:Column6\" textAlign=\"left\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel","0","143",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staName","10","153","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","82","153","128","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDate","217","153","88","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("생성일");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFrom","313","153","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20180101");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","459","153","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20191231");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","438","153","16","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","0","0",null,"130","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("그리드 컴포넌트에서 주로 사용하는 기능을 확인할 수 있습니다. 헤더와 바디 영역에서 마우스 우클릭 해보세요.\r\n- 정렬, 다중정렬, 컬럼 숨기기, 필터\r\n- 엑셀 내보내기/가져오기, 틀고정(열고정/행고정), 스크롤타입, 개인화기능(포맷저장)\r\n\r\n※ 스크롤타입의 경우 메뉴에서 설정값을 변경 후 Grid 스크롤 TrackBar 로 스크롤 시 해당 기능이 활성화 됩니다.");
            obj.getSetter("wordwrap").set("char");
            obj.set_cssclass("sta_WF_box03");
            this.addChild(obj.name, obj);

            obj = new Static("stcSelectType","587","153","88","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("선택타입");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSelectType","683","148","254","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_rowcount("2");
            var rdoSelectType_innerdataset = new nexacro.NormalDataset("rdoSelectType_innerdataset", obj);
            rdoSelectType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">row</Col><Col id=\"datacolumn\">행</Col></Row><Row><Col id=\"codecolumn\">multirow</Col><Col id=\"datacolumn\">다중행</Col></Row><Row><Col id=\"codecolumn\">area</Col><Col id=\"datacolumn\">영역</Col></Row><Row><Col id=\"codecolumn\">multiarea</Col><Col id=\"datacolumn\">다중영역</Col></Row><Row><Col id=\"codecolumn\">cell</Col><Col id=\"datacolumn\">셀</Col></Row></Rows>");
            obj.set_innerdataset(rdoSelectType_innerdataset);
            obj.set_text("row");
            obj.set_value("row");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,770,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.getSetter("classname").set("Functions");
                p.set_titletext("다양한그리드기능");
                p.set_scrollbartype("autoindicator autoindicator");

                p.grdList.set_taborder("0");
                p.grdList.getSetter("useinputpanel").set("false");
                p.grdList.set_cellmovingtype("col");
                p.grdList.set_cellsizingtype("col");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_showselection("true");
                p.grdList.set_selecttype("row");
                p.grdList.move("0","200",null,null,"20","20");

                p.staLabel.set_taborder("1");
                p.staLabel.set_cssclass("sta_WF_box02");
                p.staLabel.set_text("");
                p.staLabel.move("0","143",null,"50","20",null);

                p.staName.set_taborder("2");
                p.staName.set_text("성명");
                p.staName.set_cssclass("sta_WF_condition01");
                p.staName.move("10","153","64","30",null,null);

                p.edtSearch.set_taborder("3");
                p.edtSearch.set_autoselect("true");
                p.edtSearch.move("82","153","128","30",null,null);

                p.staDate.set_taborder("4");
                p.staDate.set_text("생성일");
                p.staDate.set_cssclass("sta_WF_condition01");
                p.staDate.move("217","153","88","30",null,null);

                p.calFrom.set_taborder("5");
                p.calFrom.set_dateformat("yyyy-MM-dd");
                p.calFrom.set_value("20180101");
                p.calFrom.set_autoselect("true");
                p.calFrom.move("313","153","120","30",null,null);

                p.calTo.set_taborder("6");
                p.calTo.set_dateformat("yyyy-MM-dd");
                p.calTo.set_value("20191231");
                p.calTo.set_autoselect("true");
                p.calTo.move("459","153","120","30",null,null);

                p.Static05.set_taborder("7");
                p.Static05.set_text("~");
                p.Static05.set_textAlign("center");
                p.Static05.move("438","153","16","30",null,null);

                p.staInfo.set_taborder("8");
                p.staInfo.set_text("그리드 컴포넌트에서 주로 사용하는 기능을 확인할 수 있습니다. 헤더와 바디 영역에서 마우스 우클릭 해보세요.\r\n- 정렬, 다중정렬, 컬럼 숨기기, 필터\r\n- 엑셀 내보내기/가져오기, 틀고정(열고정/행고정), 스크롤타입, 개인화기능(포맷저장)\r\n\r\n※ 스크롤타입의 경우 메뉴에서 설정값을 변경 후 Grid 스크롤 TrackBar 로 스크롤 시 해당 기능이 활성화 됩니다.");
                p.staInfo.getSetter("wordwrap").set("char");
                p.staInfo.set_cssclass("sta_WF_box03");
                p.staInfo.move("0","0",null,"130","20",null);

                p.stcSelectType.set_taborder("9");
                p.stcSelectType.set_text("선택타입");
                p.stcSelectType.set_cssclass("sta_WF_condition01");
                p.stcSelectType.move("587","153","88","30",null,null);

                p.rdoSelectType.set_taborder("10");
                p.rdoSelectType.set_innerdataset(rdoSelectType_innerdataset);
                p.rdoSelectType.set_codecolumn("codecolumn");
                p.rdoSelectType.set_datacolumn("datacolumn");
                p.rdoSelectType.set_direction("vertical");
                p.rdoSelectType.set_rowcount("2");
                p.rdoSelectType.set_value("row");
                p.rdoSelectType.set_index("0");
                p.rdoSelectType.move("683","148","254","40",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staInfo.move("10","50",null,"96","10",null);

                p.grdList.move("10","250",null,null,"10","10");

                p.staLabel.move("10","166",null,"74","10",null);

                p.staDate.move("29","206","80","24",null,null);

                p.calFrom.move("108","206","105","24",null,null);

                p.calTo.move("229","206","105","24",null,null);

                p.Static05.move("217","206","10","24",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Functions.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    grid > Functions
        *  @FileName  Functions.xfdl
        *  @Creator  presales
        *  @CreateDate  2020.02.06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020.02.06      presales                  최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        // 소팅 표시자 구분 (text or image)
        this.MARKER_TYPE = "image";

        // Grid Head에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정
        // [오름차순표시, 내림차순표시]
        this.MARKER = ["url('imagerc::grd_sort_up.png')", "url('imagerc::grd_sort_dn.png')", "url('imagerc::grd_sort.png')"];	//["▲", "▼"];

        this.varFlag = "";
        this.colIdx1 = "";

        // Filter 가능 표시 이미지
        this.FILTER_ENABLE_IMAGE_URL = "imagerc::grd_filter_combo.png";
        //this.FILTER_ENABLE_IMAGE_URL = "img::img_TreeClose.png";
        this.FILTER_ENABLE_IMAGE_SIZE = [30, 30];

        // Filter 적용 표시 이미지
        this.FILTER_APPLY_IMAGE_URL = "imagerc::grd_filter_check.png";
        this.FILTER_APPLY_IMAGE_SIZE = [30, 30];

        // 찾기 결과가 없을 때 표시할 메시지
        this.GRID_FIND_NO_RESULT_MESSAGE = "\"{0}\" 을(를) 더 이상 찾을 수 없습니다.";

        // 모두 바꾸기시 변경 개수를 표시할 메시지
        this.GRID_REPLACE_COUNT_MESSAGE = "{0}개 항목이 변경되었습니다.";

        this.nCell1 = "";
        this.cellFixFalg = "off";

        /*
        Grid 지원 String Mask 문자

        @ : 모든 Ascii 문자(한글등 다국언어 불가)
        # : 모든 10진수 숫자(0-9)
        * : 모든 알파벳 문자(a-zA-Z)
        9 : 모든 알파벳, 숫자(a-zA-Z0-9)
        A : 대문자 알파벳(A-Z)
        a : 소문자 알파벳(a-z)
        Z : 대문자 알파벳, 숫자(A-Z0-9)
        z : 소문자 알파벳, 숫자(a-z0-9)
        */

        this._stringMaskChar = {
            "@": /[\x20-\x7D]/, // /[\u0020-\u00ff]/,
            "#": /[0-9]/,
            "*": /[a-zA-Z]/,
            "9": /[a-zA-Z0-9]/,
            "A": /[A-Z]/,
            "a": /[a-z]/,
            "Z": /[A-Z0-9]/,
            "z": /[a-z0-9]/
        };

        this._chkEmpty = String.fromCharCode(0x08);

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description Form onload
        */
        this.Functions_onload = function(obj, e)
        {
            this.setTimer(1, 10);

        	this.fn_setCPGrid(this.grdList); // copy & paste
        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /************************************************************************************************
         * Function Name: fnCommChange
         * Description  : 그리드 SelectType 변경
         * Arguments    :
         * Return       :
        *************************************************************************************************/
        this.fnCommChange = function(obj,e)
        {
        	this.grdList.set_selecttype(e.postvalue);
        };

        /************************************************************************************************
         * Function Name: fnIsUndefined
         * Description  : value의 undefined 여부 반환.
         * Arguments    : @param {*} value 확인할 value.
         * Return       : @return {boolean} undefined 여부.
        *************************************************************************************************/
        this.fnIsUndefined = function(value)
        {
        	return value === undefined;
        };

        /************************************************************************************************
         * Function Name: fnIndexOf
         * Description  : 지정된 항목이 처음 나오는 배열 위치를 반환한다.
         * Arguments    : @param {array} array 검색 대상 Array.
        		 		  @param {object} item 찾고자 하는 Item.
        				  @param {number=} from 검색의 시작 위치 (default: 0).
        				  @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
         * Return       : @return {number} 검색된 배열 위치. 없다면 -1 리턴.
        *************************************************************************************************/
        this.fnIndexOf = function(array, item, from, strict)
        {
        	var len = array.length;

        	if (from == null)
        		from = 0;

        	strict == !!strict;

        	from = (from < 0) ? Math.ceil(from) : Math.floor(from);

        	if (from < 0)
        	{
        		from += len;
        	}

        	if (strict)
        	{
        		for (; from < len; from++)
        		{
        			if ( array[from] === item)
        			{
        				return from;
        			}
        		}
        	}
        	else
        	{
        		for (; from < len; from++)
        		{
        			if ( array[from] == item)
        			{
        				return from;
        			}
        		}
        	}

        	return -1;
        };

        /************************************************************************************************
         * Function Name: fnIndexOfIgnoreCase
         * Description  : 대소문자 구별없이 문자열의 위치를 검색한다.
         * Arguments    : @param {string} value 대상 문자열( 예 : "aaBBbbcc" )
        		  		  @param {string} sFind 찾을 문자열( 예 : "bb" )
        		          @param {number} nStart 검색 시작위치 (옵션 : Default=0) ( 예 : 1 )
         * Return       : @return {number} 검색된 문자열의 시작위치 ( 예 : 2 ). 실패 = -1.
        *************************************************************************************************/
        this.fnIndexOfIgnoreCase = function(value, sFind, nStart)
        {
        	return value.toLowerCase().indexOf(sFind.toLowerCase(), nStart);
        };

        /************************************************************************************************
         * Function Name: fnReplaceIgnoreCase
         * Description  : 대소문자 구별없이 주어진 문자열로 치환한다.
         * Arguments    : @param {string} sOrg 대상 문자열( 예 : "aaBBbbcc" )
        		  		  @param {string} sRepFrom 찾을 문자열( 예 : "bb" )
        		  		  @param {string} sRepTo 치환할 문자열 ( 예 : "xx" )
         * Return       : @return {string} 치환된 문자열 ( 예 : "aaxxxxccxx" ).
        *************************************************************************************************/
        this.fnReplaceIgnoreCase = function(sOrg, sRepFrom, sRepTo)
        {
        	var pos, nStart=0, sRet="";

        	while(1)
        	{
        		pos = this.fnIndexOfIgnoreCase(sOrg, sRepFrom, nStart);
        		if( pos < 0 )
        		{
        			sRet += sOrg.substr( nStart );
        			break;
        		}
        		else
        		{
        			sRet += sOrg.substr( nStart, pos - nStart);
        			sRet += sRepTo;
        			nStart = pos+sRepFrom.length;
        		}
        	}
        };

        /************************************************************************************************
         * Function Name: fnGetCurrentScrollBarSize
         * Description  : 스크롤바가 표시됐을 때에만 size를 반환한다.
         * Arguments    :  @param {XComp} XComp nexacro Component
        		  		   @param {string} type 스크롤바 종류(수평스크롤바:"horz", 수직스크롤바:"vert")

         * Return       :  @return {number} 스크롤바 size(스크롤바가 없거나 표시되지 않을 때는 0).
        *************************************************************************************************/
        this.fnGetCurrentScrollBarSize = function(XComp, type)
        {
        	if(XComp instanceof nexacro.Div)
        	{
        		XComp = XComp.form;
        	}
        	var scrollBar = (type == "horz") ? XComp.hscrollbar : XComp.vscrollbar;

        	return (scrollBar && scrollBar.visible ? (type == "horz" ? scrollBar.getOffsetHeight() : scrollBar.getOffsetWidth()) : 0);
        };

        /************************************************************************************************
         * Function Name: fnGetBorderWidth
         * Description  : nexacro Component의 border width(px)를 반환한다.
         * Arguments    : @param {XComp} xComp nexacro Component

         * Return       : @return {array.<number>} [ leftWdith, topWdith, rightWdith, bottomWdith ]
        *************************************************************************************************/
        this.fnGetBorderWidth = function(xComp)
        {
        	var border = xComp._getCurrentStyleBorder();
        	var leftWidth = 0,topWidth = 0,rightWidth = 0,bottomWidth = 0;

        	if (border)
        	{
        		leftWidth   = border.left.width;
        		topWidth    = border.top.width;
        		rightWidth  = border.right.width;
        		bottomWidth = border.bottom.width;

        		leftWidth   = nexacro.toNumber(leftWidth.replace("px",""), 0);
        		topWidth    = nexacro.toNumber(topWidth.replace("px",""), 0);
        		rightWidth  = nexacro.toNumber(rightWidth.replace("px",""), 0);
        		bottomWidth = nexacro.toNumber(bottomWidth.replace("px",""), 0);

        		return [leftWidth, topWidth, rightWidth, bottomWidth];
        	}

        	return [0, 0, 0, 0];
        };

        /************************************************************************************************
         * Function Name: fnLookup
         * Description  : 검색 시작 component를 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component 또는 object 반환.
         * Arguments    : @param {XComp} p 검색 시작 component.
        				  @param {string} name 찾을 대상 이름.
         * Return       : @return {XComp|object} 검색된 component 또는 object.
        *************************************************************************************************/
        this.fnLookup = function(p, name)
        {
        	var o;

        	while (p)
        	{
        		o = p.components;
        		if ( o && o[name] ) return o[name];

        		o = p.objects;
        		if ( o && o[name] ) return o[name];

        		p = p.parent;
        	}
        	return null;
        };

        /************************************************************************************************
         * Function Name: fnIsNumber
         * Description  : value의 number 여부 반환.
         * Arguments    : @param {*} value 확인할 value.
         * Return       : @return {boolean} number 여부.
        *************************************************************************************************/
        this.fnIsNumber = function(value)
        {
        	return typeof value === 'number' && isFinite(value);
        };

        /************************************************************************************************
         * Function Name: fnIsDate
         * Description  : value의 Date 여부 반환.
         * Arguments    : @param {date} value 확인할 value.
         * Return       : @return {boolean} Date 여부.
        *************************************************************************************************/
        this.fnIsDate = function(value)
        {
        	var str = Object.prototype.toString;
        	return str.call( value ) === '[object Date]';
        };

        /************************************************************************************************
         * Function Name: fnGetLastDayOfMonth
         * Description  : 해당월의 마지막 날짜를 숫자로 구하기.
         * Arguments    : @param {number | string} value 'yyyyMMdd' 형태의 날짜.
         * Return       : @return {number} 마지막 날짜 숫자값.
        *************************************************************************************************/
        this.fnGetLastDayOfMonth = function(value)
        {
        	var nMonth, nLastDate;

        	if ( this.fnIsDate(value) )
        	{
        		nMonth = value.getMonth() + 1;
        	}
        	else
        	{
        		nMonth = parseInt(value.substr(4,2), 10);
        	}
        	if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 )
        	{
        		nLastDate = 31;
        	}
        	else if( nMonth == 2 )
        	{
        		if( this.fnIsLeapYear(value) == true )
        		{
        			nLastDate = 29;
        		}
        		else
        		{
        			nLastDate = 28;
        		}
        	}
        	else
        	{
        		nLastDate = 30;
        	}

        	return nLastDate;
        };

        /************************************************************************************************
         * Function Name: fnIsLeapYear
         * Description  : 윤년 여부.
         * Arguments    : @param {string|number|date|nexacro.Date} value yyyyMMdd 형태의 날짜(문자열).<br>
        		           number 타입일 경우에는 yyyy.<br>
        		           JavaScript Date.<br>
        		           Dataset의 컬럼타입이 DATE인 컬럼값.
         * Return       : @return {boolean} 윤년 여부(입력되지 않은 경우는 false).
        *************************************************************************************************/
        this.fnIsLeapYear = function(value)
        {
        	var result;
        	var year;

        	if( this.fnIsEmpty(value) ) {
        		return false;

        	} else if ( this.fnIsString(value) ) {
        		year = parseInt(value.substring(0,4), 10);

        	} else if ( this.fnIsNumber(value) ) {
        		year = value;

        	} //dataset의 컬럼타입이 DATE인 경우 처리.
        	else if(value instanceof nexacro.Date) {
        		value = value.toString();

        		if(this.fnIsEmpty(value)) {
        			return false;
        		}

        		year = parseInt(value.substring(0,4), 10);

        	} else if( this.fnIsDate(value) ) {

        		year = value.getFullYear();
        	}


        	if ((year % 4) == 0)
        	{
        		if ((year % 100) != 0 || (year % 400) == 0){
        			result = true;
        		}
        		else
        		{
        			result = false;
        		}
        	}
        	else
        	{
        		result = false;
        	}

        	return result;
        };

        /************************************************************************************************
         * Function Name: fnIsEmpty
         * Description  : 널값 체크
         * Arguments    : @param value 체크할 value
         * Return       : @return {boolean} true/false
        *************************************************************************************************/
        this.fnIsEmpty = function(value)
        {
        	// null, undefined ==> true
        	if ( value == null ) return true;

        	// String, Array ==> length == 0
        	if ( this.fnIsString(value) || this.fnIsArray(value) )
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if ( this.fnIsObject(value) )
        	{
        		for (var p in value)
        		{
        			if ( value.hasOwnProperty(p) )
        			{
        				return false;
        			}
        		}
        		return true;
        	}
        };

        /************************************************************************************************
         * Function Name: fnIsString
         * Description  : value의 string 여부 반환
         * Arguments    : @param {*} value 확인할 value
         * Return       : @return {boolean} string 여부.
        *************************************************************************************************/
        this.fnIsString = function(value)
        {
        	return typeof value === 'string';
        };

        /************************************************************************************************
         * Function Name: fnIsNumber
         * Description  : value의 number 여부 반환
         * Arguments    : @param {*} value 확인할 value.
         * Return       : @return {boolean} number 여부.
        *************************************************************************************************/
        this.fnIsNumber = function(value)
        {
        	 return typeof value === 'number' && isFinite(value);
        };

        /************************************************************************************************
         * Function Name: fnIsObject
         * Description  : value의 number 여부 반환
         * Arguments    : @param {*} value 확인할 value.
         * Return       : @return {boolean} Object 여부.
        *************************************************************************************************/
        this.fnIsObject = function(value)
        {
        	if ( value === null || value === undefined ) return false;

        	// nexacro Component
        	if ( this.fnIsXComponent(value) ) return false;

        	// nexacro Object (e.g. Dataset)
        	if( value instanceof nexacro.Object ) return false;

        	return typeof value == "object" &&
        		   'constructor' in value &&
        		   value.constructor === Object;
        };

        /************************************************************************************************
         * Function Name: fnIsArray
         * Description  : value의 Array 여부 반환
         * Arguments    : @param {*} value 확인할 value
         * Return       : @return {boolean} Array 여부
        *************************************************************************************************/
        this.fnIsArray = function(value)
        {
        	var str = Object.prototype.toString;
        	return str.call( value ) === '[object Array]';
        };

        /************************************************************************************************
         * Function Name: fnIsXComponent
         * Description  : value의 nexacro component 여부 반환
         * Arguments    : @param {*} value 확인할 value
         * Return       : @return {boolean} nexacro component 여부
        *************************************************************************************************/
        this.fnIsXComponent = function(value)
        {
        	if ( value === null || value === undefined  ) return false;
        	return value instanceof nexacro.Component;
        };

        /**
        * 그리드 초기 설정
        * @param {Grid} obj 대상 Grid Component
        */
        this.fnSetGrid = function(obj)
        {
            obj.orgFormat = obj.getCurFormatString();

            this.fnGetGridFormat(obj);

            // 그리드 헤드 셀 클릭 정렬 기능 사용을 위한 초기화
            obj.addEventHandler("onheadclick", this.gridonheadclick, this);

            // 바꾸기 가능여부 속성 지정
            obj.replaceable = true;
            obj.hidelist = "";

            var form = obj.parent;
            var ds = form.gridSortRClickDataset; // 데이터셋 참조
            var pmnu = form.gridSortRClickPopupMenu; // 팝업메뉴 컴포넌트 참조

            // add oncellclick handler
            obj.addEventHandler("oncellclick", this.gridFindReplaceOnCellClickHandler, this);

            ds = this.dsGridPopupMenu;

            form.gridSortRClickDataset = this.dsGridPopupMenu;

            if (this.gfnIsNull(pmnu))
            {
                // add popupmenu component
                var name = this.gfnGetUniqueId("pmnu_");

                pmnu = new PopupMenu();
                pmnu.init(name, 0, 0, 68, 65);
                form.addChild(pmnu.name, pmnu);
                pmnu.set_innerdataset(ds);
                pmnu.set_idcolumn("id");
                pmnu.set_levelcolumn("level");
                pmnu.set_captioncolumn("caption");
                pmnu.set_iconcolumn("icon");
                pmnu.set_enablecolumn("enable");
        		pmnu.set_cssclass("pm_basic01");
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

        /**
        * 그리드 팝업 설정
        * @param {Grid} grid 대상 Grid Component
        */
        this.setPopDiv = function(grid)
        {
        	//this.initGridFindReplace(this.Grid00, true);
        	var pdiv = new PopupDiv();
        	var name = this.gfnGetUniqueId("pdiv_");
        	pdiv.init(name, 0, 0, 250, 310);

        	grid.parent.addChild(pdiv.name, pdiv);

        	pdiv.set_background("#f7f7f7");
        	pdiv.set_border("1px solid gray");
        	pdiv.addEventHandler("oncloseup", this.sortPdivOnCloseUpHandler, this);
        	pdiv.set_url("grid::GridSortPop.xfdl");
        	pdiv.show();

        	// 대상 그리드 참조
        	pdiv.grid = grid;

        	// 팝업 참조
        	grid.multiSortPopupDiv = pdiv;
        }

        /**
        * oncloseup Event Handler
        * @param {PopupDiv} obj Event가 발생한 PopupDiv Component
        * @param {CloseupEventInfo} e CloseupEventInfo
        */
        this.sortPdivOnCloseUpHandler = function(obj, e)
        {
            var grid = obj.grid;
            var items = obj.returnvalue;

            if (!this.gfnIsNull(items))
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

        /**
        * 다중 정렬 팝업창을 띄운다.
        * @param {Grid} grid 대상 Grid Component
        * @param {xPComp=} relativeComp 팝업창을 띄울 상대 위치(좌/하단) 기준 컴포넌트
        */
        this.popupMultipleSort = function(grid, relativeComp)
        {
        	var pdiv = grid.multiSortPopupDiv;
            var cells = [], column, text, index;
            var cellCnt = grid.getCellCount("head");

            for (var i = 1; i < cellCnt; i++)
            {
                index = this.getBodyCellIndex(grid, i);
                if (index > -1)
                {
                    column = this.getBindColumnNameByIndex(grid, index);
                    if (!this.gfnIsNull(column))
                    {
                        text = grid.getCellText(-1, i);
                        cells.push(
        					{
        						column: column,
        						index: i,
        						text: text
        					});
                    }
                }
            }

            // 팝업창에 정렬정보 지정
            pdiv.form.setSortInfo(grid, cells);
            pdiv.trackPopupByComponent(grid, 400, 60);
        }

        /******************************************************************************
        소팅 처리에 필요한 단위 function
        ******************************************************************************/
        /**
        * onmenuclick Event Handler
        * @param {PopupMenu} obj Event가 발생한 PopupMenu Component
        * @param {MenuClickEventInfo} e MenuClickEventInfo
        */
        this.sortPopupMenuOnMenuClickHandler = function(obj, e)
        {
            var selectId = e.id;
            var cell = obj.headCellIndex;
            var grid = obj.grid;

            if (obj.showFilter == true)
            {
                if (selectId != "filterClear")
                {
                    grid.set_cellmovingtype("col");
                    grid.set_cellsizingtype("col");
                    obj.showFilter = false;
                    this.hideHeadAppendFilter(grid);
                }
            }

            if (selectId == "chkAll")
            {
                this.fnBlockChk(grid);

            }
            else if (selectId == "chkClear")
            {
                this.fnBlockUnChk(grid);

            }
            else if (selectId == "hide")
            {
                this.fnHide(grid, cell);
            }
            else if (selectId == "unhide")
            {
                this.fnHideCancel(grid, cell);
            }
            else if (selectId == "unhideAll")
            {
                this.fnHideCancelAll(grid, cell);
            }
            else if (selectId == "asc" || selectId == "desc")
            {
                if (this.setSortStatus(grid, cell, false, (selectId == "asc" ? 1 : 2)))
                {
                    this.executeSort(grid);
                }
            }
            else if (selectId == "clear")
            {
                this.clearSort(grid, cell);
            }
            else if (selectId == "multiSort")
            {
                this.clearAllSort(grid);
                this.popupMultipleSort(grid, obj);
            }
            else if (selectId == "multiSortClear")
            {
                this.clearAllSort(grid);
            }
            else if (selectId == "find")
            {
                this.showGridFindReplace(grid, "find");
            }
            else if (selectId == "replace")
            {
                if (grid.replaceable)
                {
                    this.showGridFindReplace(grid, "replace");
                }
            }
            else if (selectId == "filter" || selectId == "filterClear")
            {
                if (obj.showFilter != true)
                {
                    grid.set_cellmovingtype("none");
                    grid.set_cellsizingtype("none");
        			obj.showFilter = true;
                    this.showHeadAppendFilter(grid);
                }
                else
                {
                    grid.set_cellmovingtype("col");
                    grid.set_cellsizingtype("col");
                    obj.showFilter = false;
                    this.hideHeadAppendFilter(grid);
                }
            }
            else if (selectId == "export")
            {
                this.fnExport(grid);
            }
            else if (selectId == "import")
            {
                this.fnImport(grid);
            }
            else if (selectId == "shapeFix")
            {
                this.fnCellFix(grid, this.colIdx);
            }
            else if (selectId == "shapeFree")
            {
                this.fnCellFree(grid);
            }
            else if (selectId == "rowFix")
            {
                this.fnRowFix(grid, this.rowIdx);
            }
            else if (selectId == "rowFree")
            {
                this.fnRowFree(grid);
            }
        	else if (selectId == "default" || selectId == "topdisplay" || selectId == "centerdisplay" || selectId == "topbottomdisplay"
        		|| selectId == "topcenterbottomdisplay" || selectId == "trackbarfollow")
        	{
        		grid.set_fastvscrolltype(selectId);
        	}
            else if (selectId == "gridFormat")
            {
                this.fnSetGridFormat(grid);
            }
            else if (selectId == "gridFormatOrg")
            {
                this.fnClearGridFormat(grid);
            }
        }

        /**
        * onrbuttondown Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {MouseEventInfo} e MouseEventInfo
        */
        this.sortGridOnRButtonDownHandler = function(obj, e)
        {
            var row = e.row;
            var cell = e.cell;
            this.colIdx = e.cell;
            this.rowIdx = e.row;
            var pmnu = obj.rClickPopupMenu;
            var ds = this.ds_menu;

            //head
            if (row == -1 && cell > -1)
            {
                if (obj.getCellProperty("head", e.col, "displaytype") == "checkbox")
                {
                    this.dsGridPopupMenu.filter("type == 'chk'");
                }
                else
                {
                    this.dsGridPopupMenu.filter("type == 'head'");

                    var bodyCellIndex = this.getBodyCellIndex(obj, cell);
                    if (bodyCellIndex > -1)
                    {
                        var rect = obj.getCellRect(row, cell);
                        var sortStatus = this.getSortStatus(obj, cell);

                        if (sortStatus == 1)
                        {
                            // 내림차순, 취소 가능
                            this.dsGridPopupMenu.setColumn(0, "enable", "false");
                            this.dsGridPopupMenu.setColumn(1, "enable", "true");
                            this.dsGridPopupMenu.setColumn(2, "enable", "true");
                        }
                        else if (sortStatus == 2)
                        {
                            // 오름차순, 취소 가능
                            this.dsGridPopupMenu.setColumn(0, "enable", "true");
                            this.dsGridPopupMenu.setColumn(1, "enable", "false");
                            this.dsGridPopupMenu.setColumn(2, "enable", "true");
                        }
                        else
                        {
                            // 오름차순, 내림차순 가능
                            this.dsGridPopupMenu.setColumn(0, "enable", "true");
                            this.dsGridPopupMenu.setColumn(1, "enable", "true");
                            this.dsGridPopupMenu.setColumn(2, "enable", "true");
                        }

                        // 대상 그리드와 셀 정보를 추가
                        pmnu.grid = obj;
                        pmnu.headCellIndex = cell;
                    }
                }
            }
            else
            {
                this.dsGridPopupMenu.filter("type == 'body'");
            }

            pmnu.trackPopupByComponent(obj, e.canvasx, e.canvasy);
        }

        /**
        * 정렬 상태를 얻어온다.
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex head cell index
        * @return {number} sort status (-1:N/A, 0: 초기상태, 1:오름차순상태, 2:내림차순상태)
        */
        this.getSortStatus = function(grid, headCellIndex)
        {
            var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);

            if (bodyCellIndex < 0) return -1;

            var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex);

            var cellInfos = grid._cellInfos;

            if (cellInfos && cellInfos[columnName])
            {
                return cellInfos[columnName].status;
            }
            return -1;
        }

        /**
        * 정렬 상태를 지정한다. (실제 소팅 처리는 executeSort 에서 담당한다.)
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex head cell index
        * @param {boolean=} isMultiple 다중선택여부
        * @param {number=} sortStatus 정렬상태 강제 지정 (미지정시 현재 상태 반전)
        * @return {boolean} 상태 변경 여부
        */
        this.setSortStatus = function(grid, headCellIndex, isMultiple, sortStatus)
        {
            // Cell별 정렬정보
            if (this.gfnIsNull(grid.cellInfos))
            {
                grid.cellInfos = {};
            }

            // 정렬대상컬럼 (순서중요)
            if (this.gfnIsNull(grid.sortItems))
            {
                grid.sortItems = [];
            }

            var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);
            if (bodyCellIndex < 0) return false;

            var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex);

            var cellInfo,
        	sortItem,
        	cellInfos = grid.cellInfos,
        	sortItems = grid.sortItems,
        	status;

            if (this.gfnIsNull(columnName))
            {
                //trace("Check Grid body cell bind value");
                return false;
            }

            if (columnName == "chk")
            {
        		return false;
            }

            if (this.gfnIsNull(isMultiple)) isMultiple = false;

            if (this.gfnIsNull(sortStatus)) sortStatus = -1;

            cellInfo = cellInfos[columnName];

            if (this.gfnIsNull(cellInfo))
            {
                var headText = grid.getCellText(-1, headCellIndex);
                cellInfo = cellInfos[columnName] = {
                    index: headCellIndex,
                    status: 0,
                    text: headText
                };
            }
            // set sort status
            if (isMultiple)
            {
                status = cellInfo.status;
                if (sortStatus == -1)
                {
                    if (status == 0)
                    {
                        cellInfo.status = 1;
                    }
                    else if (status == 1)
                    {
                        cellInfo.status = 2;
                    }
                    else if (status == 2)
                    {
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
                            if (status == 0)
                            {
                                cellInfo.status = 1;
                            }
                            else if (status == 1)
                            {
                                cellInfo.status = 2;
                            }
                            else if (status == 2)
                            {
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
                            if (sortItems[j] !== columnName)
                            {
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
                if (sortItems[i] == columnName)
                {
                    hasItem = true;
                    break;
                }
            }
            if (!hasItem)
            {
                sortItems.push(columnName);
            }
            return true;
        }

        /**
        * 정렬 적용
        * @param {Grid} grid 대상 Grid Component
        */
        this.executeSort = function(grid)
        {
            var cellInfo,
        	sortItem,
        	cellInfos = grid.cellInfos,
        	sortItems = grid.sortItems,
        	columnName,
        	headCellIndex,
        	status,
        	sortString = "";

            if (this.gfnIsNull(cellInfos) || this.gfnIsNull(sortItems)) return;

            // keystring 조합
            for (var i = 0, len = sortItems.length; i < len; i++)
            {
                columnName = sortItems[i];
                status = cellInfos[columnName].status;

                if (status > 0)
                {
                    sortString += (status == 1 ? "+" : "-") + columnName;
                }
            }

            var aaa = grid.getBindCellIndex("body", columnName);

            if (this.varFlag == "-" && aaa == this.colIdx1)
            {
                this.varFlag = "";
                this.clearSort(grid, aaa);
                return;
            }

            var ds = grid.getBindDataset();

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
                    if (gIndex < 0)
                    {
                        groupKeyString = "G:" + curKeyString;
                    }
                    else
                    {
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
                        if (temp.indexOf("G:") < 0)
                        {
                            groupKeyString = "G:" + temp;
                        }
                        else
                        {
                            groupKeyString = temp;
                        }
                    }
                }
            }

            if (sortString.length > 0)
            {
                var sortKeyString = "S:" + sortString;

                if (groupKeyString.length > 0)
                {
                    ds.set_keystring(sortKeyString + "," + groupKeyString);
                }
                else
                {
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

                marker = this.gfnDecode(status, 1, this.MARKER[0], 2, this.MARKER[1], this.MARKER[2]);

                if (this.MARKER_TYPE == "text")
                {
                    grid.setCellProperty("head", index, "text", text + marker);
                }
                else if (this.MARKER_TYPE == "image")
                {
                    grid.setCellProperty("head", index, "expandimage", marker);
                }
            }
        }

        /**
        * 주어진 head cell에 해당하는 정렬 상태를 제거한다.
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex head cell index
        */
        this.clearSort = function(grid, headCellIndex)
        {
            var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);

            if (bodyCellIndex < 0) return;

            var columnName = this.getBindColumnNameByIndex(grid, bodyCellIndex),
        	cellInfos = grid.cellInfos,
        	sortItems = grid.sortItems;

            if (this.gfnIsNull(cellInfos) || this.gfnIsNull(sortItems)) return;

            if (this.gfnIsNull(columnName) || this.gfnIsNull(cellInfos[columnName])) return;

            // 정렬상태를 변경
            cellInfos[columnName].status = 0;

            // 정렬실행
            this.executeSort(grid);

            // 컬럼정보제거
            for (var i = 0, len = sortItems.length; i < len; i++)
            {
                if (sortItems[i] == columnName)
                {
                    sortItems.splice(i, 1);
                    break;
                }
            }

            // Cell 정보제거
            delete cellInfos[columnName];
        }

        /**
        * 현재 적용된 모든 정렬 상태를 제거한다.
        * @param {Grid} grid 대상 Grid Component
        */
        this.clearAllSort = function(grid)
        {
            var cellInfos = grid.cellInfos;
            var sortItems = grid.sortItems;

            if (this.gfnIsNull(cellInfos) || this.gfnIsNull(sortItems)) return;

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

        /******************************************************************************
        utility function
        ******************************************************************************/

        /**
        * body cell index로 binding 된 컬럼명을 얻어온다.
        * @param {Grid} grid 대상 Grid Component
        * @param {number} index body cell index
        */
        this.getBindColumnNameByIndex = function(grid, index)
        {
            var text = "";
            var columnid = "";
            var subCell = grid.getCellProperty("body", index, "subcell");
            if (subCell > 0)
            {
                text = grid.getSubCellProperty("body", index, 0, "text");
            }
            else
            {
                text = grid.getCellProperty("body", index, "text");
            }

            if (!this.gfnIsNull(text))
            {
                if (text.search(/^BIND\(/) > -1)
                {
                    columnid = text.replace(/^BIND\(/, "");
                    columnid = columnid.substr(0, columnid.length - 1);
                }
                else if (text.search(/^bind:/) > -1)
                {
                    columnid = text.replace(/^bind:/, "");
                }
            }

            return columnid;
        }

        /**
        * head cell에 match되는 body cell을 얻어온다
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex head cell index
        */
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
            for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
            {
                var row = grid.getCellProperty("body", i, "row");
                if (maxBodyRow < row)
                {
                    maxBodyRow = row;
                }
            }

            if (maxHeadRow == 0 && maxBodyRow == 0)
            {
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

            if (maxHeadRow > maxBodyRow)
            {
                sRow = nRow - (maxHeadRow - maxBodyRow);
                sRow = (sRow < 0 ? 0 : sRow);
            }
            else
            {
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
                if (sRow == cRow && nCol == cCol && nColspan == cColspan)
                {
                    cellIndex = i;
                    break;
                }
            }
            return cellIndex;
        }

        //엑셀 export start==========================================================================================================================================================================================================

        /**
        * 엑셀 Export
        * @param {Grid} grid 대상 Grid Component
        */
        this.fnExport = function(grid)
        {
            if (this.gfnIsNull(this.ExcelExportObject00) == true)
            {
                this.ExcelExportObject00 = new ExcelExportObject();

                this.ExcelExportObject00.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
                this.ExcelExportObject00.addEventHandler("onerror", this.ExcelExportObject00_onerror, this);

                this.ExcelExportObject00.set_exportmessageprocess("%d [ %d / %d ]");
                this.ExcelExportObject00.set_exportuitype("exportprogress");
                this.ExcelExportObject00.set_exporteventtype("itemrecord");
                this.ExcelExportObject00.set_exporttype(nexacro.ExportTypes.EXCEL2007);
            }
            else
            {
                this.ExcelExportObject00.clear();
            }

            var ret = this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1","allband","","merge","","image","none");
        	var url = nexacro.getApplication().gvXeniUrl;
            this.ExcelExportObject00.set_exportfilename("ExcelExportTest");
            this.ExcelExportObject00.set_exporturl(url + "XExportImport");
            this.ExcelExportObject00.exportData();
        }

        /**
        * @description onsuccess
        */
        this.ExcelExportObject00_onsuccess = function(obj, e)
        {
        }

        /**
        * @description onprogress
        */
        this.ExcelExportObject00_onprogress = function(obj, e)
        {
        }
        //엑셀 export end==========================================================================================================================================================================================================


        //엑셀 import start========================================================================================================================================================================================================
        /**
        * 엑셀 import
        */
        this.fnImport = function()
        {
            this.importObj = null;

            if(this.importObj == null)
            {
                this.importObj = new nexacro.ExcelImportObject("Import00", this);
                this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
                this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
                this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
            }
        	var url = nexacro.getApplication().gvXeniUrl;
            this.importObj.set_importurl(url + "XImport");
            this.importObj.importData("", "[command=getsheetdata;output=outDs;body=Sheet1!B2;]", "[dsList=outDs]");
        }

        /**
        * @description onsuccess
        */
        this.Import00_onsuccess = function(obj, e)
        {

        }
        //=========================================================== 엑셀 import end =========================================================================================================================================

        //=========================================================== Filter start =============================================================================================================================================
        /******************************************************************************
        마우스 오버 필터 기능을 공통화한 function
        ******************************************************************************/

        /**
        * onlbuttondown Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridMouseEventInfo} e GridMouseEventInfo
        */
        this.filterGridOnLButtonDownHandler = function(obj, e)
        {
            // head cell resize 시 필터가능 버튼을 숨기기위한 설정
            if (e.row == -1)
            {
                obj.celLResizeLbuttondown = true;
            }
        }

        /**
        * onlbuttonup Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridMouseEventInfo} e GridMouseEventInfo
        */
        this.filterGridOnLButtonUpHandler = function(obj, e)
        {
            // head cell resize 시 필터가능 버튼을 숨기기위한 설정
            obj.celLResizeLbuttondown = false;

            // oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
            var resizer = obj._resizer_elem;
            var resizing = obj.colResizing;
            if (resizing && resizer && resizer._movedPos != 0)
            {
                this.arrangeOverFilterComps(obj);
            }
        }

        /**
        * onmousemove Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridMouseEventInfo} e GridMouseEventInfo
        */
        this.filterGridOnMouseMoveHandler = function(obj, e)
        {
            // oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
            var resizer = obj._resizer_elem;
            if (resizer && resizer._is_tracking)
            {
                obj.colResizing = true;

            }
            else
            {
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

                    if (filterImage.visible && filterImage._filtered)
                    {

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

                        if (xy[0] > -1 && xy[1] > -1)
                        {

                            filterImage.move(xy[0], xy[1]);
                            filterImage.set_visible(true);

                        }
                        else
                        {

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

                if (headCellIndex < 0)
                {

                    filterBtn.set_visible(false);
                    return;
                }

                if (this.getBodyCellIndex(obj, headCellIndex) > -1)
                {

                    var xy = this.getCompXYFromGridHeadCellRight(obj, headCellIndex, filterBtn);

                    if (xy[0] > -1 && xy[1] > -1)
                    {

                        filterBtn.move(xy[0], xy[1]);
                        filterBtn.set_visible(true);

                    }
                    else
                    {

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

        /**
        * onformatchanged Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridFormatChangedEventInfo} e GridFormatChangedEventInfo
        */
        this.headOverFilterOnFormatChanged = function(obj, e)
        {
            // 포맷변경시 필터처리를 위한 컴포넌트 제거
            // 셀 변경시 필터처리를 위한 컴포넌트 재배치
            switch (e.reason)
            {
        	case 10: //formatid
        	case 11: //formats
        		this.removeOverFilterComps(obj);
        		break;
        	case 21: //MoveCell
        	case 22: //colresize
        		this.arrangeOverFilterComps(obj);
        		break;
            }
        }

        /**
        * ondragmove Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridDragEventInfo} e GridDragEventInfo
        */
        this.filterGridOnDragMoveHandler = function(obj, e)
        {
            // cell moving 을 체크하기 위해 내부 속성 확인...
            if (obj._movingcell)
            {

                var curCol = e.col;
                var col, colspan;
                var merged = false;
                var movingStartCol = obj._movingcell._refobj._col;
                var movingEndCol = curCol;

                // 병합된 cell 이 존재하는 col 에 들어올 수 없으므로 체크
                for (var i = 0, len = obj.getCellCount("head"); i < len; i++)
                {

                    colspan = obj.getCellProperty("head", i, "colspan") - 1;

                    if (colspan > 0)
                    {

                        col = obj.getCellProperty("head", i, "col");

                        if ((col <= curCol && curCol <= (col + colspan)) || ((col + colspan) <= curCol && curCol <= col))
                        {

                            if (movingStartCol > movingEndCol)
                            {

                                movingEndCol = col;

                            }
                            else
                            {

                                movingEndCol = (col + colspan);
                            }
                            break;
                        }
                    }
                }

                if (movingStartCol != movingEndCol)
                {

                    obj.isMovingCell = true;
                    obj.movingStartCol = movingStartCol;
                    obj.movingEndCol = movingEndCol;
                    return;
                }
            }

            obj.isMovingCell = false;
        }

        /**
        * ondrop Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridDragEventInfo} e GridDragEventInfo
        */
        this.filterGridOnDropHandler = function(obj, e)
        {
            // onformatchanged 기능이 현재 없어서 movecell 이 발생될 때를 알 수 없다.
            // 따라서 ondragmove에서 moving 중인지 체크하고 ondrop 후 완료 판다.
            if (e.row == -1 && obj.isMovingCell)
            {

                var movingStartCol = obj.movingStartCol;
                var movingEndCol = obj.movingEndCol;
                this.moveColumnInfo(obj, movingStartCol, movingEndCol);
            }
        }

        /**
        * Grid head에 filer 기능 추가하기 초기화
        * @param {Grid} grid 대상 Grid Component
        */
        this.initGridHeadAppendFilter = function(grid)
        {
            // 필터영역(Div) 를 담아둘 속성 추가
            if (this.fnIsUndefined(grid.makeCompList))
            {

                grid.makeCompList = [];
            }

            // 필터적용 정보를 담아둘 속성 추가
            if (this.fnIsUndefined(grid.filterItems))
            {

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

        /**
        * onformatchanged Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridFormatChangedEventInfo} e GridFormatChangedEventInfo
        */
        this.headAppendFilterOnFormatChanged = function(obj, e)
        {
            // 포맷변경시 필터처리를 위한 컴포넌트 제거
            // 셀 변경시 필터처리를 위한 컴포넌트 재배치
            switch (e.reason)
            {
        	case 10: //formatid
        	case 11: //formats
        		this.removeFilterComps(obj);
        		break;
        	case 21: //MoveCell
        	case 22: //colresize
        		this.arrangeFilterComps(obj);
        		break;
            }
        }

        /**
        * ondrop Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridDragEventInfo} e GridDragEventInfo
        */
        this.headAppendFilterOnDropHandler = function(obj, e)
        {
            // onformatchanged 기능이 현재 없어서 movecell 이 발생될 때를 알 수 없다.
            // 따라서 ondrop 에서 내부 속성값을 체크하여 기능처리
            var s = e.sourcereferenceobject;
            var f = e.fromreferenceobject;

            if (s._type_name == "GridCell" && f._type_name == "GridCell")
            {

                if (s.parent == f.parent && s._cellidx != f._cellidx)
                {

                    this.arrangeFilterComps(obj);
                }
            }
        }

        /**
        * onlbuttonup Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridMouseEventInfo} e GridMouseEventInfo
        */
        this.headAppendFilterOnLButtonUpHandler = function(obj, e)
        {
            // oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
            var resizer = obj._resizer_elem;
            if (obj.colResizing && resizer && resizer._movedPos != 0)
            {

                this.arrangeFilterComps(obj);
            }
        }

        /**
        * onmousemove Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridMouseEventInfo} e GridMouseEventInfo
        */
        this.headAppendFilterOnMouseMoveHandler = function(obj, e)
        {
            // oncolresized 가 현재 지원되지 않아서 기능을 사용하기 위해 추가
            var resizer = obj._resizer_elem;
            if (resizer && resizer._is_tracking)
            {

                obj.colResizing = true;

            }
            else
            {

                obj.colResizing = false;
            }
        }

        /******************************************************************************
        필터 처리에 필요한 단위 기능 function
        ******************************************************************************/

        /**
        * 그리드 헤드 셀 우측영역에 위치할 컴포넌트의 좌표를 반환
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex Grid Head Cell Index
        * @param {XPComp} comp 대상 컴포넌트
        * @return {array} x, y 좌표 (위치할 수 없을 경우 -1)
        */
        this.getCompXYFromGridHeadCellRight = function(grid, headCellIndex, comp)
        {
            var col = grid.getCellProperty("head", headCellIndex, "col");
            var band = grid.getFormatColProperty(col, "band");
            var pivotIndex = this.gfnDecode(band, "left", -1, "right", -2, 0);
            var cellRect = grid.getCellRect(-1, headCellIndex, pivotIndex);

            var scrollWidth = this.fnGetCurrentScrollBarSize(grid, "vert");
            var gridLeft = grid.getOffsetLeft();
            var gridTop = grid.getOffsetTop();
            var gridAvailRight = gridLeft + grid.getOffsetWidth() - scrollWidth;

            var x = y = -1;

            if (gridLeft + cellRect.left < gridAvailRight)
            {

                if (cellRect.left < gridLeft)
                {
                    cellRect.left = 0;
                }

                if (gridLeft + cellRect.right > gridAvailRight)
                {
                    cellRect.right = gridAvailRight - gridLeft;
                }

                x = gridLeft + cellRect.left + (cellRect.width - comp.getOffsetWidth());
                y = gridTop + cellRect.top + Math.round((cellRect.height - comp.getOffsetHeight()) / 2);

                if (x < gridLeft)
                {
                    x = -1;
                }
                if (y < gridTop)
                {
                    y = -1;
                }
            }

            return [x, y];
        }

        /**
        * 필터 실행
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex head cell index
        * @param {string} filterString 적용할 조건식
        * @param {*=} filterData filter 조건 데이터
        */
        this.executeFilter = function(grid, headCellIndex, filterString, filterData)
        {
            var bodyCellIndex = this.getBodyCellIndex(grid, headCellIndex);
            var column = this.getBindColumnNameByIndex(grid, bodyCellIndex);
            var ds = grid.getBindDataset();
            var filterItems = grid.filterItems;
            var filterItem = filterItems[column];
            // 선택 컬럼명의 필터정보 확인 및 지정
            if (this.fnIsUndefined(filterItem))
            {
                filterItem = filterItems[column] = {
                    filterData: filterData,
                    filterString: filterString
                };

            }
            else
            {
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

                if (!this.gfnIsNull(tempString))
                {

                    resultString += (this.gfnIsNull(resultString) ? "" : " && ") + tempString;
                }
            }

            // 필터 적용
            ds.filter(resultString);
        }

        /**
        * Grid head append filter 보이기
        * @param {Grid} grid 대상 Grid Component
        */
        this.showHeadAppendFilter = function(grid)
        {
            var rowIdx = grid.appendContentsRow("head");
        	grid.setFormatRowProperty( rowIdx, "size", 34 );//추가된 head 높이조절 2019-11-21 bok

            // 추가된 head row index를 담아두자.
            grid.appendHeadRowIndex = rowIdx;

            this.arrangeFilterComps(grid);
        }

        /**
        * Grid head append filter 숨기기 (필터제거 포함)
        * @param {Grid} grid 대상 Grid Component
        */
        this.hideHeadAppendFilter = function(grid)
        {
            var index = grid.appendHeadRowIndex;
            if (!this.fnIsUndefined(index))
            {
                grid.deleteContentsRow("head", index);

                // Div 숨기기 및 값 초기화
                var comps = grid.parent.components;
                var comp, list;
        		list = grid.makeCompList;
                for (var i = 0, len = list.length; i < len; i++)
                {
                    comp = comps[list[i]];

                    if (comp)
                    {
                        comp.set_visible(false);
                        comp.form.initValue();
                    }
                }

                // 데이터셋 필터 제거
                var ds = grid.getBindDataset();
                ds.filter("");

                grid.appendHeadRowIndex = null;
            }
        }

        /**
        * Grid head over filter 기능에 추가된 컴포넌트 제거
        * @param {Grid} grid 대상 Grid Component
        */
        this.removeOverFilterComps = function(grid)
        {
            var form = grid.parent;
            var comps = form.components;
            var comp, list = grid.filterApplyComps;
            var removed;
            for (var i = 0, len = list.length; i < len; i++)
            {
                comp = comps[list[i]];
                if (comp)
                {
                    removed = form.removeChild(comp.name);
                    removed.destroy();
                }
            }
        }

        /**
        * Grid head over filter 기능에 필요한 컴포넌트 생성 및 위치 조정
        * @param {Grid} grid 대상 Grid Component
        */
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
                    if (xy[0] > -1 && xy[1] > -1)
                    {
                        comp.move(xy[0], xy[1]);
                        comp.set_visible(true);
                    }
                    else
                    {
                        comp.set_visible(false);
                    }
                }
            }
        }

        /**
        * Grid head append filter 기능에 추가된 컴포넌트 제거
        * @param {Grid} grid 대상 Grid Component
        */
        this.removeFilterComps = function(grid)
        {
            var form = grid.parent;
            var comps = form.components;
            var comp, list = grid.makeCompList;
            var removed;
            for (var i = 0, len = list.length; i < len; i++)
            {
                comp = comps[list[i]];
                if (comp)
                {
                    removed = form.removeChild(comp.name);
                    removed.destroy();
                }
            }
        }

        /**
        * Grid head append filter 기능에 필요한 컴포넌트 생성 및 위치 조정
        * @param {Grid} grid 대상 Grid Component
        */
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
                    pivotIndex = this.gfnDecode(band, "left", -1, "right", -2, 0);
                    rect = grid.getCellRect(-1, i, pivotIndex);
                    bodyCellIndex = this.getBodyCellIndex(grid, i);
                    column = this.getBindColumnNameByIndex(grid, bodyCellIndex);
                    type = grid.getCellProperty("body", bodyCellIndex, "displaytype");

                    if (this.fnIsUndefined(type)) type = "normal";

                    name = grid.name + "_headAppendComp" + seq;

                    var borderWidths = this.fnGetBorderWidth(grid);
                    l = gridPos[0] + rect.left;
                    t = gridPos[1] + rect.top + borderWidths[1];
                    w = rect.width - 1;
                    h = rect.height - 1;

                    // 컴포넌트가 존재하지 않으면 추가
                    if (this.fnIndexOf(list, name) < 0)
                    {
                        list.push(name);
                        comp = new Div(name, l, t, w, h);
        				//필터
        				//comp.style.set_border("0px none white");
                        comp.set_border("0px none white");
                        comp.form.set_scrollbartype("none");
        				comp.form.set_scrolltype("none");
                        comp.set_async(false);
                        comp.set_visible(false);
                        //comp.style.set_background("red");
                        form.addChild(comp.name, comp);

                        comp.set_url("grid::GridFilterDiv.xfdl");

                        comp.show();
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
                    if (!this.gfnIsNull(filterItem))
                    {
                        comp.filterData = filterItem.filterData;
                    }

                    // 필터타입 지정
                    comp.form.setFilterType();

                    // 위치 조정
                    if (l < gridPos[0])
                    {
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
                            if (grid.vscrollbar)
                            {
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

            if (!this.gfnIsNull(div)) div.setFocus();
        }

        /******************************************************************************
        utility function
        ******************************************************************************/

        /**
        * body cell index로 binding 된 컬럼명을 얻어온다.
        * @param {Grid} grid 대상 Grid Component
        * @param {number} index body cell index
        */
        this.getBindColumnNameByIndex = function(grid, index)
        {
            var text = "";
            var columnid = "";
            var subCell = grid.getCellProperty("body", index, "subcell");
            if (subCell > 0)
            {
                text = grid.getSubCellProperty("body", index, 0, "text");
            }
            else
            {
                text = grid.getCellProperty("body", index, "text");
            }

            if (!this.gfnIsNull(text))
            {
                if (text.search(/^BIND\(/) > -1)
                {
                    columnid = text.replace(/^BIND\(/, "");
                    columnid = columnid.substr(0, columnid.length - 1);
                }
                else if (text.search(/^bind:/) > -1)
                {
                    columnid = text.replace(/^bind:/, "");
                }
            }

            return columnid;
        }

        /**
        * head cell에 match되는 body cell을 얻어온다
        * @param {Grid} grid 대상 Grid Component
        * @param {number} headCellIndex head cell index
        */
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
        	for (var i = 0, len = grid.getCellCount("body"); i < len; i++)
        	{
        		var row = grid.getCellProperty("body", i, "row");
        		if (maxBodyRow < row)
        		{
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0)
        	{
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

        	if (maxHeadRow > maxBodyRow)
        	{
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	}
        	else
        	{
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
        		if (sRow == cRow && nCol == cCol && nColspan == cColspan)
        		{
        			cellIndex = i;
        			break;
        		}
        	}
        	return cellIndex;
        }

        //=========================================================== Find start ===================================================================

        /******************************************************************************
        찾기/바꾸기 기능을 공통화한 function
        ******************************************************************************/

        /**
        * oncellclick Event Handler
        * 셀 선택 시 바꾸기 창의 대상 칼럼 변경하기
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {GridClickEventInfo} e GridClickEventInfo
        */
        this.gridFindReplaceOnCellClickHandler = function(obj, e)
        {
            if (e.row > -1)
            {
                // 찾기/바꾸기 팝업이 떠 있는 상태라면 지정
                var name = "_GridFindPop";
                var form = obj.parent;
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
                        if (div.setColumnList)
                        {
                            div.setColumnList(obj);
                        }
                    }
                }
            }
        }

        /**
        * onrbuttondown Event Handler
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {MouseEventInfo} e MouseEventInfo
        */
        this.gridFindReplaceOnRButtonDownHandler = function(obj, e)
        {
            var col = e.col;
            var row = e.row;
            var cell = e.cell;
            var x = e.screenX;
            var y = e.screenY;

            // body
            if (row > -1 && cell > -1)
            {
                var pmnu = obj.rClickPopupMenu;

                // 팝업메뉴에 그리드 참조 속성 추가
                pmnu.grid = obj;

                pmnu.trackPopup(x, y);
            }
        }

        /**
        * 찾기/바꾸기 팝업
        * @param {Grid} grid 대상 Grid Component
        * @param {string} type 찾기(find) 또는 바꾸기 (replace)
        */
        this.showGridFindReplace = function(grid, type)
        {
            var name, url;
            var width, height;
            var form = grid.parent;
            var div;

            if (type == "find")
            {
                name = "_GridFindPop";
                url = "grid::GridFindPop.xfdl";
                width = 318;
                height = 200;

                div = form.components["_GridFindReplacePop"];
                if (div && div.visible)
                {
                    div.set_visible(false);
                }
            }
            else
            {
                name = "_GridFindReplacePop";
                url = "grid::GridFindReplacePop.xfdl";
                width = 318;
                height = 220;

                div = form.components["_GridFindPop"];
                if (div && div.visible)
                {
                    div.set_visible(false);
                }
            }

            div = form.components[name];
            if (this.gfnIsNull(div))
            {
                // add div component
                var x = Math.round((form.getOffsetWidth() - width) / 2);
                var y = Math.round((form.getOffsetHeight() - height) / 2);

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

                if (type == "replace")
                {
                    div.setColumnList(grid);
                }
                div.set_visible(true);
                div.setFocus();
                div.edt_find.setFocus();
            }
        }

        /**
        * 찾기/바꾸기 문자열 추가
        * @param {string} type 찾기(find) 또는 바꾸기(replace)
        * @param {string} text 대상 문자열
        */
        this.appendFindReplaceCache = function(type, text)
        {
            // 문자열 캐시 생성 (application에 추가)
            var stringCache = application.gridFindReplaceStringCache;
            if (this.fnIsUndefined(stringCache))
            {
                stringCache = {
                    'findList': [],
                    'replaceList': []
                };

                application.gridFindReplaceStringCache = stringCache;
            }

            // 목록에 없으면 첫번째에 삽입하고 이미 등록된 문자열은 첫번째로 이동
            var list = stringCache[type + "List"];
            var index = this.fnIndexOf(list, text);
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

        /**
        * 찾기/바꾸기 문자열 목록 얻어오기
        * @param {string} type 찾기find) 또는 바꾸기(replace)
        */
        this.getFindReplaceCache = function(type)
        {
            // 문자열 캐시
            var stringCache = application.gridFindReplaceStringCache;
            if (this.fnIsUndefined(stringCache))
            {
                return [];
            }

            return stringCache[type + "List"];
        }

        /**
        * 주어진 바디셀에 지정된 bind 정보를 통해
        * 데이터셋의 칼럼 타입을 반환.
        * @param {Grid} grid 대상 Grid Component
        * @param {number} cell 찾을 셀 인덱스
        * @return {boolean} 데이터 타입.
        */
        this.getBindColumnType = function(grid, cell)
        {
            var dataType = null;
            var dataset = grid.getBindDataset();
            var bindColid = grid.getCellProperty("body", cell, "text");
            bindColid = bindColid.replace("bind:", "");

            if (!this.gfnIsNull(bindColid))
            {
                var colInfo = dataset.getColumnInfo(bindColid);
                if (!this.gfnIsNull(colInfo))
                {
                    dataType = colInfo.type;
                }
            }

            return dataType;
        }

        /**
        * 주어진 문자열을 그리드에서 찾는다.
        * @param {Grid} grid 대상 Grid Component
        * @param {string} findText 찾을 문자열
        * @param {object} option 찾을 옵션
        * @return {array} 찾은 [행, 셀] 인덱스.
        */
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

            var dataset = grid.getBindDataset();
            var startCell = (position == "current" ? grid.currentcell : grid.lastFindCell);
            var startRow = (position == "current" ? grid.currentrow : grid.lastFindRow);

            // 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
            if (scope == "col" && !this.gfnIsNull(option.cell))
            {
                startCell = option.cell;
            }

            var findRow = findCell = -1;
            var rowCnt = dataset.rowcount;
            var bodyCellCnt = grid.getCellCount("body");

            // findText 를 가공하기 전에 찾을 문자열 목록에 등록
            this.appendFindReplaceCache("find", findText);

            // 대소문자 구분
            if (!strict)
            {
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
                        startCell = bodyCellCnt - 1;
                        startRow -= 1;
                        if (startRow < 0)
                        {
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
                        if (startRow > (rowCnt - 1))
                        {
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
                        if (this.compareFindText(grid, startRow, startCell, findText, condition, strict))
                        {
                            findRow = startRow;
                            findCell = startCell;
                            break;
                        }

                        // 방향 (이전, 다음)
                        if (direction == "prev")
                        {
                            startCell -= 1;
                            if (startCell < 0)
                            {
                                break;
                            }
                        }
                        else
                        {
                            startCell += 1;
                            if (startCell > (bodyCellCnt - 1))
                            {
                                break;
                            }
                        }
                    }

                    if (findRow > -1 && findCell > -1) break;

                    // 방향 (이전, 다음)
                    if (direction == "prev")
                    {
                        startRow -= 1;
                        if (startRow < 0)
                        {
                            startRow = rowCnt - 1;
                        }
                        startCell = (bodyCellCnt - 1);
                    }
                    else
                    {
                        startRow += 1;
                        if (startRow > (rowCnt - 1))
                        {
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
                    if (startCell < 0)
                    {
                        startCell = bodyCellCnt - 1;
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
                    if (this.compareFindText(grid, startRow, startCell, findText, condition, strict))
                    {
                        findRow = startRow;
                        findCell = startCell;
                        break;
                    }

                    // 방향 (이전, 다음)
                    if (direction == "prev")
                    {
                        startCell -= 1;
                        if (startCell < 0)
                        {
                            startCell = bodyCellCnt - 1;
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
                    if (startRow < 0)
                    {
                        startRow = rowCnt - 1;
                    }
                }
                else
                {
                    startRow += 1;
                    if (startRow > rowCnt)
                    {
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
                        if (startRow < 0)
                        {
                            startRow = rowCnt - 1;
                        }
                    }
                    else
                    {
                        startRow += 1;
                        if (startRow > (rowCnt - 1))
                        {
                            startRow = 0;
                        }
                    }

                    loopCnt--;
                }
            }

            // 마지막 찾은 위치 지정
            // 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
            if (findRow > -1 && findCell > -1)
            {
                grid.lastFindRow = findRow;
                grid.lastFindCell = findCell;
            }

            return [findRow, findCell];
        }

        /**
        * 주어진 행, 셀 인덱스에 해당하는 그리드 데이터와
        * 문자열을 비교하여 찾아진 결과를 반환
        * @param {Grid} grid 대상 Grid Component
        * @param {number} row 찾을 행 인덱스
        * @param {number} cell 찾을 셀 인덱스
        * @param {string} findText 찾을 문자열
        * @param {string} condition 찾을 조건(equal/inclusion)
        * @param {boolean} strict 대소문자 구분 (true/false)
        * @return {boolean} 찾기 성공.
        */
        this.compareFindText = function(grid, row, cell, findText, condition, strict)
        {
            var cellText = grid.getCellText(row, cell);
            var displayType = grid.getCellProperty("body", cell, "displaytype");

            // displayType 이 normal일 경우
            // dataType 을 체크하여 displayType 을 변경
            if (this.gfnIsNull(displayType) || displayType == "normal")
            {
                var dataType = this.getBindColumnType(grid, cell);
                switch (dataType)
                {
        		case 'INT':
        		case 'FLOAT':
        		case 'BIGDECIMAL':
        			displayType = "number";
        			break;
        		case 'DATE':
        		case 'DATETIME':
        		case 'TIME':
        			displayType = "date";
        			break;
        		default:
        			displayType = "strign";
                }
            }

            // currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
            if (displayType == "currency")
            {
                var code = cellText.charCodeAt(0);
                if (code == 65510 || code == 92)
                {
                    cellText = cellText.substr(1);
                }

                code = findText.charCodeAt(0);
                if (code == 65510 || code == 92)
                {
                    findText = findText.substr(1);
                }
            }

            // 대소문자 구분
            if (!strict)
            {
                cellText = cellText.toUpperCase();
            }

            // 일치/포함
            if (condition == "equal")
            {
                if (findText == cellText)
                {
                    return true;
                }
            }
            else
            {
                if (cellText.indexOf(findText) > -1)
                {
                    return true;
                }
            }

            return false;
        }

        /**
        * 찾기 결과를 그리드에 표시한다.
        * @param {Grid} grid 대상 Grid Component
        * @param {number} findRow 찾아진 행 인덱스
        * @param {number} findCell 찾아진 셀 인덱스
        */
        this.markGridFindResult = function(grid, findRow, findCell)
        {
            var dataset = grid.getBindDataset();

            dataset.set_rowposition(findRow);

            grid.setCellPos(findCell);
        }

        /**
        * 주어진 문자열을 그리드에서 찾아서 바꿀 문자열로 변경한다.
        * @param {Grid} grid 대상 Grid Component
        * @param {string} findText 찾을 문자열
        * @param {string} replaceText 바꿀 문자열
        * @param {object} option 찾을 옵션
        * @param {boolean} all 모두 바꾸기 여부
        * @return {number} 변경 항목 개수.
        */
        this.replaceGridText = function(grid, findText, replaceText, option, all)
        {
            // F3 발생 시 마지막 찾은 문자열 계속 찾기 위해 값 지정
            grid.lastFindText = findText;
            grid.lastFindOption = option;

            if (this.gfnIsNull(all))
            {
                all = false;
            }

            // 찾을 옵션 ( 바꾸기의 범위는 특정 칼럼만 지원)
            var direction = option.direction;
            var position = option.position;
            var condition = option.condition;
            var strict = option.strict;
            var cell = option.cell;

            var dataset = grid.getBindDataset();

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
                if (this.fnIsUndefined(lastReplaceRow))
                {
                    startRow = 0;
                }
                else
                {
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
            if (!strict)
            {
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
                    if (startRow < 0)
                    {
                        startRow = rowCnt - 1;
                    }
                }
                else
                {
                    startRow += 1;
                    if (startRow > (rowCnt - 1))
                    {
                        startRow = 0;
                    }
                }

                loopCnt--;
            }

            // 마지막 바꾸기 위치 지정
            grid.lastReplaceRow = findRow;

            return results;
        }

        /**
        * 바꾸기에 의해 찾아진 행, 셀 인덱스에 해당하는 데이터를 실제 변경한다.
        * @param {Grid} grid 대상 Grid Component
        * @param {number} findRow 찾아진 행 인덱스
        * @param {number} findCell 찾아진 셀 인덱스
        * @param {string} findText 찾을 문자열
        * @param {string} replaceText 바꿀 문자열
        * @param {boolean} strict 대소문자 구분
        */
        this.replaceGridCellText = function(grid, findRow, findCell, findText, replaceText, strict)
        {
            var result = {
                'replace': true,
                'message': '처리되었습니다.',
                'row': findRow,
                'cell': findCell
            };

            // expr 등에 의해 셀이 실제 입력 가능한지 테스트 후 처리
            var dataset = grid.getBindDataset();
            dataset.set_rowposition(findRow);
            grid.setCellPos(findCell);

            var editable = grid.showEditor(true);
            if (editable)
            {
                grid.showEditor(false);
            }
            else
            {
                return;
            }

            var mask = grid.getCellProperty("body", findCell, "mask");
            if (typeof mask == "object")
            {
                mask = mask.toString();
            }

            var displayType = grid.getCellProperty("body", findCell, "displaytype");
            var editType = grid.getCellProperty("body", findCell, "edittype");
            var text = grid.getCellProperty("body", findCell, "text");
            var bindColid = text.replace("bind:", "");

            // displayType 이 normal일 경우
            // dataType 을 체크하여 displayType 을 변경
            var dataType = this.getBindColumnType(grid, findCell);
            if (this.gfnIsNull(displayType) || displayType == "normal")
            {
                switch (dataType)
                {
        		case 'INT':
        		case 'FLOAT':
        		case 'BIGDECIMAL':
        			displayType = "number";
        			break;
        		case 'DATE':
        		case 'DATETIME':
        		case 'TIME':
        			displayType = "date";
        			break;
        		default:
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
                comboDataset = this.fnLookup(grid.parent, comboDataset);
                var comboCodeCol = grid.getCellProperty("body", findCell, "combocodecol");
                var comboDataCol = grid.getCellProperty("body", findCell, "combodatacol");

                var row = comboDataset.findRow(comboDataCol, replaceText);
                if (row > -1)
                {
                    replaceVal = comboDataset.getColumn(row, comboCodeCol);
                }
                else
                {
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
                    if (code == 65510 || code == 92)
                    {
                        findText = findText.substr(1);
                    }

                    code = replaceText.charCodeAt(0);
                    if (code == 65510 || code == 92)
                    {
                        replaceText = replaceText.substr(1);
                    }

                    code = displayValue.charCodeAt(0);
                    if (code == 65510 || code == 92)
                    {
                        displayValue = displayValue.substr(1);
                    }
                }

                // 셀에 보여지는 값에서 찾는 문자열 값을 변경

                // 대소문자 구분
                if (strict)
                {
                    displayValue = displayValue.replace(findText, replaceText);
                }
                else
                {
                    displayValue = this.fnReplaceIgnoreCase(displayValue, findText, replaceText);
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
                    if (this.gfnIsNull(mask))
                    {
                        mask = grid.controlcalendar.editformat;
                    }

                    var ret = this.replaceDateMaskValue(columnValue, displayValue, findText, replaceText, mask, strict);
                    replaceVal = ret[1];

                    if (ret[0] == false)
                    {
                        result.replace = false;
                        result.message = ret[2];
                    }
                }
            }
            else
            {
                if (this.gfnIsNull(mask))
                {
                    // 대소문자 구분
                    if (strict)
                    {
                        replaceVal = columnValue.replace(findText, replaceText);
                    }
                    else
                    {
                        replaceVal = this.fnReplaceIgnoreCase(columnValue, findText, replaceText);
                    }
                }
                else
                {
                    var maskChar = grid.getCellProperty("body", findCell, "maskchar");
                    replaceVal = this.replaceStringMaskValue(columnValue, displayValue, findText, replaceText, mask, maskChar, strict);
                }
            }

            if (result.replace)
            {
                dataset.setColumn(findRow, bindColid, replaceVal);
            }

            return result;
        }

        /**
        * 숫자형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
        * @param {string} numString 숫자형 문자열
        * @return {string} 변환값 문자열
        */
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
                if ((c == '+' || c == '-') && (bInside === false))
                {
                    // 부호는 숫자가 나오기 전에만 인정.
                    buf.push(c);
                    bInside = true;
                }
                else if (numReg.test(c))
                {
                    // 숫자인경우 인정.
                    buf.push(c);
                    bInside = true;
                }
                else if (c == "." && bPoint === false)
                {
                    // 소숫점은 1회만 인정.
                    buf.push(c);
                    bPoint = true;
                    bInside = true;
                }
                else if (c != ",")
                {
                    return "";
                }
            }
            return buf.join("");
        }

        /**
        * 날짜형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
        * @param {*} columnValue 변경전 데이터셋의 실제 값
        * @param {string} displayValue 보여지는 문자열
        * @param {string} findText 찾을 문자열
        * @param {string} replaceText 바꿀 문자열
        * @param {string} mask 마스크 속성값
        * @param {boolean} strict 대소문자 구분 여부
        * @return {object} 변환정보 (날짜여부, 변경된 문자열, 에러메시지)
        */
        this.replaceDateMaskValue = function(columnValue, displayValue, findText, replaceText, mask, strict)
        {
            if (this.gfnIsNull(replaceText))
            {
                // 바꿀 문자열이 빈값이 되지 않도록 패딩
                replaceText = replaceText.padRight(findText.length, " ");
            }

            // 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
            var replaceDisplayValue;

            // 대소문자 구분
            if (strict)
            {
                replaceDisplayValue = displayValue.replace(findText, replaceText);
            }
            else
            {
                replaceDisplayValue = this.fnReplaceIgnoreCase(displayValue, findText, replaceText);
            }

            // 바꿀 값이 없다면 값을 제거한다.
            if (this.gfnIsNull(replaceDisplayValue.trim()))
            {
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

            for (var i = 0, len = arrMask.length; i < len; i++)
            {
                checkMask = arrMask[i];
                if (!this.fnIsNumber(checkMask))
                {
                    switch (checkMask)
                    {
        			case 'yyyy':
        				tmpStr = replaceDisplayValue.substr(displayIndex, 4);

        				if (tmpStr.length != 4 || !nexacro.isNumeric(tmpStr))
        				{
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
        			case 'yy':
        			case 'MM':
        			case 'dd':
        			case 'hh':
        			case 'HH':
        			case 'mm':
        			case 'ss':
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
        						if (parseInt(tmpStr) < 1 || parseInt(tmpStr) > 12)
        						{
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
        						if (parseInt(tmpStr) < 0 || parseInt(tmpStr) > 23)
        						{
        							isDate = false;
        							errorMsg = "시간이 올바르지 않습니다.";
        						}
        					}
        					else if (checkMask == "mm" || checkMask == "ss")
        					{
        						if (parseInt(tmpStr) < 0 || parseInt(tmpStr) > 59)
        						{
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
            if (!this.gfnIsNull(checkYearValue) &&
                !this.gfnIsNull(checkMonthValue) && checkDayIndex > -1)
            {
                var dt = checkYearValue + checkMonthValue + "01";
                var inputDay = parseInt(dateValue[checkDayIndex]);
                var lastDay = this.fnGetLastDayOfMonth(dt);

                if (inputDay < 1 || inputDay > lastDay)
                {
                    isDate = false;

                    var isLeapYear = this.fnIsLeapYear(dt);
                    if (!isLeapYear && inputDay == 29)
                    {
                        errorMsg = "해당 연도는 윤년이 아닙니다.";
                    }
                    else
                    {
                        errorMsg = "일자가 올바르지 않습니다.";
                    }
                }
            }

            if (isDate)
            {
                return [isDate, dateValue.join("")];
            }
            else
            {
                return [isDate, errorValue.join(""), errorMsg];
            }
        }

        /**
        * 날짜형 마스크 구문을 분석합니다.
        * @param {string} mask 마스크 속성값
        * @return {array} 구문값
        */
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

            var dateMaskCache = application.dateMaskCache;
            if (this.fnIsUndefined(dateMaskCache))
            {
                application.dateMaskCache = {};

                dateMaskCache = application = dateMaskCache;
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
                if (tmpStr == "yyyy")
                {
                    arrMask[seq] = tmpStr;
                    i += 4;
                    seq++;
                    continue;
                }

                // ddd => 요일은 입력할 수 없다.
                tmpStr = mask.substr(i, 3);
                if (tmpStr == "ddd")
                {
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


        /**
        * 문자형 마스크 구문을 분석합니다.
        * @param {string} strMask 마스크 속성값
        * @param {string} maskChar 마스크 캐릭터
        * @return {array} 구문값
        */
        this.parseStringMask = function(strMask, maskChar)
        {
            var stringMaskCache = application.stringMaskCache;
            if (this.fnIsUndefined(stringMaskCache))
            {
                application.stringMaskCache = {};

                stringMaskCache = application.stringMaskCache;
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

            for (i = 0, nIdx = 0; i < len; i++)
            {
                if (bEscape == false && cMasks[i] == "'")
                { // Mask가 Quotation이 시작될 경우.
                    if (bQuote == false)
        			bQuote = true;
                    else
        			bQuote = false;
                    continue;
                }
                Mask = 0;
                if (bEscape == false && cMasks[i] == "\\" && !bQuote)
                { // Mask에서 Escape에 진입할 경우.
                    bEscape = true;
                    continue;
                }
                else if (bEscape)
                { // Mask에서 Escape를 사용할 경우.
                    bEscape = false;
                }
                else if (bQuote == false)
                { // Mask에서 Quotation 밖의 글자에 대해.
                    rmaskChar = ReserveMasks[cMasks[i]];
                    if (rmaskChar)
                    {
                        Mask = rmaskChar;
                    }
                    if (cMasks[i] == "{")
                    {
                        bPasswd = true;
                        continue;
                    }
                    if (cMasks[i] == "}")
                    {
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

        /**
        * 문자형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
        * @param {*} columnValue 변경전 데이터셋의 실제 값
        * @param {string} displayValue 보여지는 문자열
        * @param {string} findText 찾을 문자열
        * @param {string} replaceText 바꿀 문자열
        * @param {string} strMask 마스크 속성값
        * @param {string} maskChar 마스크 캐릭터
        * @param {boolean} strict 대소문자 구분 여부
        * @return {string} 변환값 문자열
        */
        this.replaceStringMaskValue = function(columnValue, displayValue, findText, replaceText, strMask, maskChar, strict)
        {
        	if (this.gfnIsNull(replaceText))
        	{
        		// 바꿀 문자열이 빈값이 되지 않도록 패딩
        		replaceText = replaceText.padRight(findText.length, this._chkEmpty);
        	}

        	// 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
        	var replaceDisplayValue;

        	// 대소문자 구분
        	if (strict)
        	{
        		replaceDisplayValue = displayValue.replace(findText, replaceText);
        	}
        	else
        	{
        		replaceDisplayValue = this.fnReplaceIgnoreCase(displayValue, findText, replaceText);
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
        				if (c == "*" || this.gfnIsNull(c) || c == this._chkEmpty)
        				{
        					c = arrOrg[i];
        				}
        			}
        			else
        			{
        				if (this.gfnIsNull(c) || c == this._chkEmpty)
        				{
        					c = "";
        				}
        			}
        			stringValues[i] = c;
        		}
        	}

        	return stringValues.join("");
        }

        //=========================================================== Find end ===================================================================


        //===================================================== fnBlockChk/unchk start ==========================================================

        /**
        * 그리드 전체선택 기능구현
        * @param {Grid} objGrid 해당 grid
        */
        this.fnBlockChk = function(objGrid)
        {
            var objDs = objGrid.getBindDataset();

            for (var i = 0; i <= objDs.rowcount; i++)
            {
                objDs.setColumn(i, "chk", "1");
            }
            objGrid.setCellProperty("Head", 0, "text", "1");
        }

        /**
        * 그리드 전체선택 기능구현
        * @param {Grid} objGrid 해당 grid
        */
        this.fnBlockUnChk = function(objGrid)
        {
        	var objDs = objGrid.getBindDataset();

        	for (var i = 0; i <= objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "chk", 0);
        	}
        	objGrid.setCellProperty("Head", 0, "text", "0");
        }

        //====================================================== fnBlockChk end ===============================================================

        //====================================================== Hide start ===============================================================

        /**
        * 그리드 열 숨기기
        * @param {Grid} objGrid 해당 grid
        * @param {number} nCell 해당 grid headCellIndex
        */
        this.fnHide = function(objGrid, nCell)
        {
            var nCol = objGrid.getCellProperty("Head", nCell, "col");

            objGrid.hidelist = objGrid.hidelist + nCell + "|" + objGrid.getFormatColProperty(nCol, "size") + "|";
            objGrid.setFormatColProperty(nCol, "size", 0);
        }

        /**
        * 그리드 열 숨기기 취소
        * @param {Grid} objGrid 해당 grid
        * @param {number} nCell 해당 grid headCellIndex
        */
        this.fnHideCancel = function(objGrid, nCell)
        {
            var arrHideList = objGrid.hidelist.split("|");
            objGrid.setFormatColProperty(arrHideList[arrHideList.length - 3], "size", arrHideList[arrHideList.length - 2]);
            objGrid.hidelist = objGrid.hidelist.replace(arrHideList[arrHideList.length - 3] + "|" + arrHideList[arrHideList.length - 2] + "|", "")
        }

        /**
        * 그리드 열 숨기기 전체취소
        * @param {Grid} objGrid 해당 grid
        * @param {number} nCell 해당 grid headCellIndex
        */
        this.fnHideCancelAll = function(objGrid, nCell)
        {
            var i;
            var arrHideList = objGrid.hidelist.split("|");

            for (i = arrHideList.length - 2; i > -1; i = i - 2)
            {
                objGrid.setFormatColProperty(arrHideList[i - 1], "size", arrHideList[i]);
            }
            objGrid.hidelist = "";
        }

        //====================================================== Hide end ===============================================================

        //===================================================== cellFix/Free start ========================================================

        /**
        * 그리드 열 고정
        * @param {Grid} objGrid 해당 grid
        * @param {number} nCell 해당 grid CellIndex
        */
        this.fnCellFix = function(objGrid, nCell)
        {
            nCell = this.colIdx;

            this.nCell1 = nCell;
            var nCol = objGrid.getCellProperty("Head", nCell, "col");
            var nColSpan = objGrid.getCellProperty("Head", nCell, "colspan");
            var nVal = objGrid.getCellpos
            var nMaxCol = 0;

            objGrid.set_enableredraw(false);
            if (nMaxCol < (nCol + nColSpan))
            {
                nMaxCol = nCol + nColSpan;
            }

            objGrid.setFormatColProperty(nMaxCol - 1, "band", "left");
            objGrid.fixCol = nMaxCol;

            objGrid.set_enableredraw(true);
            this.cellFixFalg = "on";
        }

        /**
        * 그리드 열 취소
        * @param {Grid} objGrid 해당 grid
        */
        this.fnCellFree = function(objGrid)
        {
            objGrid.set_enableredraw(false);

            objGrid.setFormatColProperty(0, "band", "body");

            objGrid.set_enableredraw(true);

            this.colIdx = -1;
            this.nCell1 = "";
            this.cellFixFalg = "off";
        }

        /**
        * 그리드 행 고정
        * @param {Grid} objGrid 해당 grid
        * @param {number} nCell 해당 grid RowIndex
        */
        this.fnRowFix = function(objGrid, nRow)
        {
            //선택된 Row가 없을 경우 리턴
            if (nRow < 0)
        	return;

            //선택된 Row로 행 고정
            objGrid.setFixedRow(nRow);
        }

        /**
        * 그리드 행 고정 취소
        * @param {Grid} objGrid 해당 grid
        */
        this.fnRowFree = function(objGrid)
        {
        	//행고정 초기화
        	objGrid.setFixedRow(-1);
        }

        //===================================================== cellFix/Free end ========================================================

        /**
        * 그리드 포맷 저장
        * @param {Grid} objGrid 해당 grid
        */
        this.fnSetGridFormat = function(objGrid)
        {
            nexacro.setPrivateProfile("usrGrid_formats", objGrid.getCurFormatString());
        }

        /**
        * 그리드 포맷 불러오기
        * @param {Grid} objGrid 해당 grid
        */
        this.fnGetGridFormat = function(objGrid)
        {
            var usrGrid_formats = nexacro.getPrivateProfile("usrGrid_formats");

            if (this.gfnIsNull(usrGrid_formats) == false)
            {
                objGrid.set_formats(("<Formats>" + usrGrid_formats + "</Formats>").replace("▼", "").replace("▲", ""));
            }
        }

        /**
        * 그리드 포맷 영역 초기화
        * @param {Grid} objGrid 해당 grid
        */
        this.fnClearGridFormat = function(objGrid)
        {
        	var usrGrid_formats = objGrid.orgFormat;
        	objGrid.set_formats(("<Formats>" + usrGrid_formats + "</Formats>").replace("▼", "").replace("▲", ""));
        	nexacro.setPrivateProfile("usrGrid_formats", "");

        	objGrid.set_fastvscrolltype("default");
        }

        //=========================================================== Filter End ===================================================================

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
        * @description Form timer
        */
        this.Functions_ontimer = function(obj, e)
        {
            if (e.timerid == 1)
            {
                this.killTimer(1);

                this.edtSearch.setFocus();
                //this.calFrom.set_value("20190101");
                //this.calTo.set_value(this.gfnGetDate());

                this.fnSetGrid(this.grdList);
            }
        }

        /**
        * @description gridonheadclick
        */
        this.gridonheadclick = function(obj, e)
        {
            var multiple = false;

            if (e.col == 0)
            {
                if (this.chkFlag == "1")
                {
                    this.fnBlockUnChk(obj);
                    this.chkFlag = "0";
                }
                else
                {
                    this.fnBlockChk(obj);
                    this.chkFlag = "1";
                }
            }
            else
            {
                // Shift 키
                if (e.shiftKey) multiple = true;

                // Ctrl 키
                if (e.ctrlKey) multiple = true;

                if (this.setSortStatus(obj, e.cell, multiple))
                {
                    this.executeSort(obj);
                }
            }
        }

        /**
        * @description userSearch
        */

        this.edt_Search_onkeydown = function(obj,e)
        {
        	var startDate = parseInt(this.calFrom.value);
        	var endDate = parseInt(this.calTo.value);

        	if(e.keycode == 13)
        	{
        		if(!this.edtSearch.text.length > 0)
        		{
        			this.dsList.filter("");
        		}
        		else
        		{
        			if(endDate > startDate)
        			this.dsList.filter("Column0 == '" + obj.text + "'");
        			else
        			alert("시작일은 종료일보다 클 수 없습니다.");
        		}
        	}
        };

        /**
        * @description onkeyup
        */

        this.edt_Search_onkeyup = function(obj,e)
        {
        	var startDate = parseInt(this.calFrom.value);
        	var endDate = parseInt(this.calTo.value);

        	if(endDate > startDate)
        		this.dsList.filter("String(Column0).indexOf('" + obj.text + "') >= 0");
        	else
        		alert("시작일은 종료일보다 클 수 없습니다.");
        };




        /************************************/
        this.targetGrid = null;

        this.fn_setCPGrid = function(obj)
        {
        	obj.pForm = this;
        	var form = obj.parent;

        	//add onkeydown handler
        	obj.addEventHandler("onkeydown", this.gridCopyOnkeydown, this);
        	this.addEventHandler("ontimer", this.gridCopyTimerHandler, form);
        };

        this.COL_SEPERATOR = "\t";
        this.ROW_SEPERATOR = "\r\n";

        /**
        * copy & paste 처리
        * @param {Grid} obj Event가 발생한 Grid Component
        * @param {KeyEventInfo} e KeyEventInfo
        * @memberOf nxlib.grid
        */

        this.gridCopyOnkeydown = function (obj, e)
        {
        	var keycode = e.keycode;
        	var form = obj.pForm;

        	if (system.navigatorname == "nexacro")
        	{
        		if (e.ctrlkey && !e.shiftkey && !e.altkey)
        		{
        			if(keycode == 67)
        			{
        				if(this.rdoSelectType.value == "row" || this.rdoSelectType.set_value == "multirow")
        				{
        					alert("선택타입이 row와 multirow인 경우는\n복사/붙여넣기 기능이 활성화되지 않습니다.");
        					return;
        				}

        				if(obj.selectstartrow.length >= 2 || obj.selectendrow.length >= 2 || obj.selectstartcol.length >= 2 || obj.selectendcol.length >= 2)
        				{
        					//가로영역 지정 변수
        					var nFlag1 = 0, nFlag3 = 0;

        					//세로영역 지정 변수
        					var nFlag2 = 0, nFlag4 = 0;

        					//nFlag1 가 1일때 : 여러개의 행 지정
        					//nFlag1 가 0일때 : 단일 행 지정
        					for(var i=1; i<obj.selectstartrow.length; i++)
        					{
        						if(obj.selectstartrow[0] != obj.selectstartrow[i])
        							nFlag1 = 1;
        					}

        					//nFlag2 가 1일때 : 여러개의 열 지정
        					//nFlag2 가 0일때 : 단일 열 지정
        					for(var i=1; i<obj.selectstartcol.length; i++)
        					{
        						if(obj.selectstartcol[0] != obj.selectstartcol[i])
        							nFlag2 = 1;
        					}

        					//가로영역 드래그 지정 후 CTRL 셀 지정시
        					//row가 같고 col이 다를 때
        					if(nFlag1 == 0 && nFlag2 == 1)
        					{
        						var clipText = "";

        						//nFlag3 가 0일때 : 하나의 col에 대해
        						//nFlag3 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							if(obj.selectstartrow[i] != obj.selectendrow[i])
        								nFlag3 = 1;
        						}

        						if(nFlag3 == 0)
        						{
        							//오름차순으로 정렬 : 순서대로 출력하기 위해
        							obj.selectstartcol.sort(function(left, right) {
        								return left-right;
        							});

        							obj.selectendcol.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartcol.length; k++)
        							{
        								for(var i=obj.selectstartcol[k]; i<=obj.selectendcol[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsNull(obj.getCellValue(obj.selectstartrow[k], i)))
        									{
        										value = obj.getCellValue(obj.selectstartrow[k], i);
        										clipText += value + this.COL_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag3 == 1)
        						{
        							var temp = Math.abs(obj.selectendrow[0] - obj.selectstartrow[0]);

        							var arrayRowIndex_Start = new Array();
        							var arrayRowIndex_End = new Array();
        							var arrayColIndex_Start = new Array();
        							var arrayColIndex_End = new Array();

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendrow[i] - obj.selectstartrow[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								arrayRowIndex_Start.push(nexacro.toNumber(obj.selectstartrow[i]));
        								arrayRowIndex_End.push(nexacro.toNumber(obj.selectendrow[i]));
        								arrayColIndex_Start.push(nexacro.toNumber(obj.selectstartcol[i]));
        								arrayColIndex_End.push(nexacro.toNumber(obj.selectendcol[i]));
        							}

        							//오름차순으로 정렬 : 최외각 좌표를 구하기 위해.
        							arrayRowIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayRowIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							var startrow = arrayRowIndex_Start[0];
        							var endrow = arrayRowIndex_End[arrayRowIndex_End.length-1];
        							var startcol = arrayColIndex_Start[0];
        							var endcol = arrayColIndex_End[arrayColIndex_End.length-1];

        							//최외각 좌표를 돌면서 멀티로 드래그한 영역에 좌표점이 있다면 아래의 로직을 수행한다.
        							for(var i = startrow; i <= endrow; i++)
        							{
        								for (var j = startcol; j <= endcol; j++)
        								{
        									for(var n = obj.selectstartrow[0]; n<=obj.selectendrow[0]; n++)
        									{
        										for(var p = 0; p < obj.selectendrow.length; p++)
        										{
        											for(var m = obj.selectstartcol[p]; m <= obj.selectendcol[p]; m++)
        											{
        												if(i == n && j == m)
        												{
        													var value = "";

        													if(!this.gfnIsNull(obj.getCellValue(i, j)))
        													{
        														value = obj.getCellValue(i, j);

        														if (j < endcol)
        															clipText += value + this.COL_SEPERATOR;
        														else
        															clipText += value + this.COL_SEPERATOR;
        														break;
        													}
        												}
        											}
        										}
        									}
        								}
        								clipText += this.ROW_SEPERATOR;
        							}
        					    }
        					}
        					//세로영역 드래그 지정 후 CTRL 셀 지정
        					//row가 다르고 col이 같을 때
        					else if(nFlag1 == 1 && nFlag2 == 0)
        					{
        						var clipText = "";

        						//nFlag4 가 0일때 : 하나의 col에 대해
        						//nFlag4 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartcol.length; i++)
        						{
        							if(obj.selectstartcol[i] != obj.selectendcol[i])
        								nFlag4 = 1;
        						}

        						if(nFlag4 == 0)
        						{
        							//오름차순으로 정렬
        							obj.selectstartrow.sort(function(left, right) {
        								return left-right;
        							});

        							//오름차순으로 정렬
        							obj.selectendrow.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartrow.length; k++)
        							{
        								for(var i=obj.selectstartrow[k]; i<=obj.selectendrow[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsNull(obj.getCellValue(i, obj.selectstartcol[k])))
        									{
        										value = obj.getCellValue(i, obj.selectstartcol[k]);
        										clipText += value + this.ROW_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag4 == 1)
        						{
        							var temp = Math.abs(obj.selectendcol[0] - obj.selectstartcol[0]);

        							for(var i=0; i<obj.selectstartcol.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendcol[i] - obj.selectstartcol[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var q=0; q<obj.selectstartrow.length; q++)
        							{
        								var startrow = obj.selectstartrow[q];
        								var endrow = obj.selectendrow[q];
        								var startcol = obj.selectstartcol[q];
        								var endcol = obj.selectendcol[q];

        								for(var i = startrow; i <= endrow; i++)
        								{
        									for (var j = startcol; j <= endcol; j++)
        									{
        										var value = "";

        										if(!this.gfnIsNull(obj.getCellValue(i, j)))
        										{
        											value = obj.getCellValue(i, j);

        											if(j < endcol)
        												clipText += value + this.COL_SEPERATOR;
        											else
        												clipText += value + this.COL_SEPERATOR;
        										}
        									}
        									clipText += this.ROW_SEPERATOR;
        								}
        						    }
        						}
        					}
        					//CTRL 셀만 지정시 (미완성)
        					else
        					{
        						alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        						return;

        						form.targetGrid = undefined;
        						var clipText = "";

        						//CTRL 여러개 셀 클릭 시 selectstartrow, selectendrow, selectstartcol, selectendcol의 각 구조는 배열로 넘어온다.
        						//기존의 로직을 수행하기 위해서는 구조를 변경해야한다.
        						var arrayRowIndex = new Array();
        						var arrayColIndex = new Array();

        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							arrayRowIndex.push(nexacro.toNumber(obj.selectstartrow[i]));
        							arrayColIndex.push(nexacro.toNumber(obj.selectstartcol[i]));
        						}

        						//오름차순으로 정렬
        						arrayRowIndex.sort(function(left, right) {
        							return left-right;
        						});

        						//오름차순으로 정렬
        						arrayColIndex.sort(function(left, right) {
        							return left-right;
        						});

        						var startrow = arrayRowIndex[0];
        						var endrow = arrayRowIndex[arrayRowIndex.length-1];
        						var startcol = arrayColIndex[0];
        						var endcol = arrayColIndex[arrayColIndex.length-1];

        						for(var i = startrow; i <= endrow; i++)
        						{
        							var nFlag = 0;

        							for (var j = startcol; j <= endcol; j++)
        							{
        								for(var pi=0; pi<obj.selectstartrow.length; pi++)
        								{
        									if(i == obj.selectstartrow[pi] && j == obj.selectstartcol[pi])
        									{
        										nFlag = 1;
        										var value = "";
        										var colFlag = 0;

        										if(!this.gfnIsNull(obj.getCellValue(i, j)))
        											value = obj.getCellValue(i, j);
        										else
        											colFlag = 1;

        										if (j < endcol && colFlag != 1)
        										{
        											clipText += value + this.COL_SEPERATOR;
        											colFlag = 0;
        										}
        										else
        											clipText += value + this.COL_SEPERATOR;
        										break;
        									}
        									else
        										nFlag = 0;
        								}
        							}

        							if(nFlag == 1)
        								clipText += this.ROW_SEPERATOR;
        						}
        					}

        					system.clearClipboard();
        					system.setClipboard("CF_TEXT", clipText);

        					form.targetGrid = obj;
        				}
        				else
        				{
        					var startrow = nexacro.toNumber(obj.selectstartrow);
        					var endrow = nexacro.toNumber(obj.selectendrow);
        					var startcol = nexacro.toNumber(obj.selectstartcol);
        					var endcol = nexacro.toNumber(obj.selectendcol);

        					var copyData = "";
        					var checkIndex = {};

        					form.targetGrid = null;

        					for (var i = startrow; i <= endrow; i++)
        					{
        						for (var j = startcol; j <= endcol; j++)
        						{
        							if (!checkIndex[j])
        							{
        								checkIndex[j] = 1;
        							}

        							var value = obj.getCellValue(i, j);

        							if (!this.gfn_isEmpty(value) && value != "undefined")
        							{
        								if (j < obj.selectendcol)
        								{
        									copyData += obj.getCellValue(i, j) + this.COL_SEPERATOR;
        								}
        								else
        								{
        									copyData += obj.getCellValue(i, j);
        								}
        							}
        						}

        						if (i < obj.selectendrow)
        						{
        							copyData += this.ROW_SEPERATOR;
        						}
        					}

        					copyData += this.ROW_SEPERATOR;

        					system.clearClipboard();
        					system.setClipboard("CF_TEXT", copyData);

        					form.targetGrid = obj;
        				}
        			}
        			else if (keycode == 86)
        			{
        				var copyData = system.getClipboard("CF_TEXT");
        				copyData = new String(copyData);
        				var rowData = copyData.split(this.ROW_SEPERATOR);
        				var rowDataCount = rowData.length - 1;

        				if (rowDataCount < 1)
        				{
        					e.stopPropagation();
        					return;
        				}

        				obj.set_enableevent(false);
        				obj.set_enableredraw(false);

        				var ds = obj.getBindDataset();
        				ds.set_enableevent(false);

        				var grdCellCount = obj.getCellCount("body");
        				var rowCount = ds.getRowCount();

        				var startrow = nexacro.toNumber(obj.selectstartrow);
        				var endrow = nexacro.toNumber(obj.selectendrow);
        				var startcol = nexacro.toNumber(obj.selectstartcol);
        				var endcol = 0;

        				var currRow = startrow;
        				var cellIndex = startcol;
        				var maxColumnCount = 0;

        				var checkIndex = {};

        				// check current cell editType
        				for (var i = 0; i < rowDataCount; i++)
        				{
        					if (rowCount <= currRow)
        					{
        						ds.addRow();
        					}

        					var columnData = rowData[i].split(this.COL_SEPERATOR);
        					var columnLoopCount = cellIndex + columnData.length;

        					if (columnLoopCount > grdCellCount)
        					{
        						columnLoopCount = grdCellCount;
        					}

        					if (maxColumnCount < columnLoopCount)
        					{
        						maxColumnCount = columnLoopCount;
        					}

        					var k = 0;
        					for (var j = cellIndex; j < columnLoopCount; j++)
        					{
        						if (!checkIndex[j])
        						{
        							checkIndex[j] = 1;
        						}

        						var colid = obj.getCellProperty("body", j, "text").substr(5);
        						var tempValue = columnData[k];
        						if (!this.gfn_isEmpty(tempValue) && tempValue != "undefined")
        						{
        							ds.setColumn(currRow, colid, tempValue);
        						}

        						k++;
        					}
        					currRow++;
        				}

        				ds.rowposition = currRow;

        				endrow = endrow + rowDataCount - 1;
        				endcol = maxColumnCount - 1;

        				obj.set_enableredraw(true);
        				obj.set_enableevent(true);
        				ds.set_enableevent(true);

        				obj.selectArea(startrow, startcol, endrow, endcol);

        				form.targetGrid = obj;

        				// grid enableredraw가 false일 경우
        				// event 전파과정에서 error발생을 막기위한 처리.2015.02.25 버전.
        				e.stopPropagation();
        			}
        		}
        	}
        	else
        	{
        		if (e.ctrlkey && !e.shiftkey && !e.altkey)
        		{
        			if(keycode == 67)
        			{
        				if(this.rdoSelectType.value == "row" || this.rdoSelectType.value == "multirow")
        				{
        					alert("선택타입이 row와 multirow인 경우는\n복사/붙여넣기 기능이 활성화되지 않습니다.");
        					return;
        				}
        				if(obj.selectstartrow.length >= 2 || obj.selectendrow.length >= 2 || obj.selectstartcol.length >= 2 || obj.selectendcol.length >= 2)
        				{
        					//가로영역 지정 변수
        					var nFlag1 = 0, nFlag3 = 0;

        					//세로영역 지정 변수
        					var nFlag2 = 0, nFlag4 = 0;

        					//nFlag1 가 1일때 : 여러개의 행 지정
        					//nFlag1 가 0일때 : 단일 행 지정
        					for(var i=1; i<obj.selectstartrow.length; i++)
        					{
        						if(obj.selectstartrow[0] != obj.selectstartrow[i])
        							nFlag1 = 1;
        					}

        					//nFlag2 가 1일때 : 여러개의 열 지정
        					//nFlag2 가 0일때 : 단일 열 지정
        					for(var i=1; i<obj.selectstartcol.length; i++)
        					{
        						if(obj.selectstartcol[0] != obj.selectstartcol[i])
        							nFlag2 = 1;
        					}

        					//가로영역 드래그 지정 후 CTRL 셀 지정시
        					//row가 같고 col이 다를 때
        					if(nFlag1 == 0 && nFlag2 == 1)
        					{
        						var clipText = "";

        						//nFlag3 가 0일때 : 하나의 col에 대해
        						//nFlag3 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							if(obj.selectstartrow[i] != obj.selectendrow[i])
        								nFlag3 = 1;
        						}

        						if(nFlag3 == 0)
        						{
        							//오름차순으로 정렬 : 순서대로 출력하기 위해
        							obj.selectstartcol.sort(function(left, right) {
        								return left-right;
        							});

        							obj.selectendcol.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartcol.length; k++)
        							{
        								for(var i=obj.selectstartcol[k]; i<=obj.selectendcol[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsNull(obj.getCellValue(obj.selectstartrow[k], i)))
        									{
        										value = obj.getCellValue(obj.selectstartrow[k], i);
        										clipText += value + this.COL_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag3 == 1)
        						{
        							var temp = Math.abs(obj.selectendrow[0] - obj.selectstartrow[0]);

        							var arrayRowIndex_Start = new Array();
        							var arrayRowIndex_End = new Array();
        							var arrayColIndex_Start = new Array();
        							var arrayColIndex_End = new Array();

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendrow[i] - obj.selectstartrow[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var i=0; i<obj.selectstartrow.length; i++)
        							{
        								arrayRowIndex_Start.push(nexacro.toNumber(obj.selectstartrow[i]));
        								arrayRowIndex_End.push(nexacro.toNumber(obj.selectendrow[i]));
        								arrayColIndex_Start.push(nexacro.toNumber(obj.selectstartcol[i]));
        								arrayColIndex_End.push(nexacro.toNumber(obj.selectendcol[i]));
        							}

        							//오름차순으로 정렬 : 최외각 좌표를 구하기 위해.
        							arrayRowIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayRowIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_Start.sort(function(left, right) {
        								return left-right;
        							});

        							arrayColIndex_End.sort(function(left, right) {
        								return left-right;
        							});

        							var startrow = arrayRowIndex_Start[0];
        							var endrow = arrayRowIndex_End[arrayRowIndex_End.length-1];
        							var startcol = arrayColIndex_Start[0];
        							var endcol = arrayColIndex_End[arrayColIndex_End.length-1];

        							//최외각 좌표를 돌면서 멀티로 드래그한 영역에 좌표점이 있다면 아래의 로직을 수행한다.
        							for(var i = startrow; i <= endrow; i++)
        							{
        								for (var j = startcol; j <= endcol; j++)
        								{
        									for(var n = obj.selectstartrow[0]; n<=obj.selectendrow[0]; n++)
        									{
        										for(var p = 0; p < obj.selectendrow.length; p++)
        										{
        											for(var m = obj.selectstartcol[p]; m <= obj.selectendcol[p]; m++)
        											{
        												if(i == n && j == m)
        												{
        													var value = "";

        													if(!this.gfnIsNull(obj.getCellValue(i, j)))
        													{
        														value = obj.getCellValue(i, j);

        														if (j < endcol)
        															clipText += value + this.COL_SEPERATOR;
        														else
        															clipText += value + this.COL_SEPERATOR;
        														break;
        													}
        												}
        											}
        										}
        									}
        								}
        								clipText += this.ROW_SEPERATOR;
        							}
        					    }
        					}
        					//세로영역 드래그 지정 후 CTRL 셀 지정
        					//row가 다르고 col이 같을 때
        					else if(nFlag1 == 1 && nFlag2 == 0)
        					{
        						var clipText = "";

        						//nFlag4 가 0일때 : 하나의 col에 대해
        						//nFlag4 가 1일때 : 다수의 col에 대해
        						for(var i=0; i<obj.selectstartcol.length; i++)
        						{
        							if(obj.selectstartcol[i] != obj.selectendcol[i])
        								nFlag4 = 1;
        						}

        						if(nFlag4 == 0)
        						{
        							//오름차순으로 정렬
        							obj.selectstartrow.sort(function(left, right) {
        								return left-right;
        							});

        							//오름차순으로 정렬
        							obj.selectendrow.sort(function(left, right) {
        								return left-right;
        							});

        							for(var k=0; k<obj.selectstartrow.length; k++)
        							{
        								for(var i=obj.selectstartrow[k]; i<=obj.selectendrow[k]; i++)
        								{
        									var value = "";

        									if(!this.gfnIsNull(obj.getCellValue(i, obj.selectstartcol[k])))
        									{
        										value = obj.getCellValue(i, obj.selectstartcol[k]);
        										clipText += value + this.ROW_SEPERATOR;
        									}
        								}
        							}
        						}
        						else if(nFlag4 == 1)
        						{
        							var temp = Math.abs(obj.selectendcol[0] - obj.selectstartcol[0]);

        							for(var i=0; i<obj.selectstartcol.length; i++)
        							{
        								if(i != 0)
        								{
        									if(temp != Math.abs(obj.selectendcol[i] - obj.selectstartcol[i]))
        									{
        										alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        										return;
        									}
        								}
        							}

        							for(var q=0; q<obj.selectstartrow.length; q++)
        							{
        								var startrow = obj.selectstartrow[q];
        								var endrow = obj.selectendrow[q];
        								var startcol = obj.selectstartcol[q];
        								var endcol = obj.selectendcol[q];

        								for(var i = startrow; i <= endrow; i++)
        								{
        									for (var j = startcol; j <= endcol; j++)
        									{
        										var value = "";

        										if(!this.gfnIsNull(obj.getCellValue(i, j)))
        										{
        											value = obj.getCellValue(i, j);

        											if(j < endcol)
        												clipText += value + this.COL_SEPERATOR;
        											else
        												clipText += value + this.COL_SEPERATOR;
        										}
        									}
        									clipText += this.ROW_SEPERATOR;
        								}
        						    }
        						}
        					}
        					//CTRL 셀만 지정시 (미완성)
        					else
        					{
        						alert("다중 선택 범위에서는 사용할 수 없는 명령입니다.");
        						return;

        						form.targetGrid = undefined;
        						var clipText = "";

        						//CTRL 여러개 셀 클릭 시 selectstartrow, selectendrow, selectstartcol, selectendcol의 각 구조는 배열로 넘어온다.
        						//기존의 로직을 수행하기 위해서는 구조를 변경해야한다.
        						var arrayRowIndex = new Array();
        						var arrayColIndex = new Array();

        						for(var i=0; i<obj.selectstartrow.length; i++)
        						{
        							arrayRowIndex.push(nexacro.toNumber(obj.selectstartrow[i]));
        							arrayColIndex.push(nexacro.toNumber(obj.selectstartcol[i]));
        						}

        						//오름차순으로 정렬
        						arrayRowIndex.sort(function(left, right) {
        							return left-right;
        						});

        						//오름차순으로 정렬
        						arrayColIndex.sort(function(left, right) {
        							return left-right;
        						});

        						var startrow = arrayRowIndex[0];
        						var endrow = arrayRowIndex[arrayRowIndex.length-1];
        						var startcol = arrayColIndex[0];
        						var endcol = arrayColIndex[arrayColIndex.length-1];

        						for(var i = startrow; i <= endrow; i++)
        						{
        							var nFlag = 0;

        							for (var j = startcol; j <= endcol; j++)
        							{
        								for(var pi=0; pi<obj.selectstartrow.length; pi++)
        								{
        									if(i == obj.selectstartrow[pi] && j == obj.selectstartcol[pi])
        									{
        										nFlag = 1;
        										var value = "";
        										var colFlag = 0;

        										if(!this.gfnIsNull(obj.getCellValue(i, j)))
        											value = obj.getCellValue(i, j);
        										else
        											colFlag = 1;

        										if (j < endcol && colFlag != 1)
        										{
        											clipText += value + this.COL_SEPERATOR;
        											colFlag = 0;
        										}
        										else
        											clipText += value + this.COL_SEPERATOR;
        										break;
        									}
        									else
        										nFlag = 0;
        								}
        							}

        							if(nFlag == 1)
        								clipText += this.ROW_SEPERATOR;
        						}
        					}

        					form.targetGrid = obj;
        					var ta = this._createTextarea(clipText);
        					form.targetGrid["ta"] = ta;
        					form.setTimer(777, 100);
        					e.stopPropagation();
        				}
        				else
        				{
        					var startrow = nexacro.toNumber(obj.selectstartrow);
        					var endrow = nexacro.toNumber(obj.selectendrow);
        					var startcol = nexacro.toNumber(obj.selectstartcol);
        					var endcol = nexacro.toNumber(obj.selectendcol);

        					var checkIndex = {};

        					form.targetGrid = undefined;

        					var clipText = "";

        					for (var i = startrow; i <= endrow; i++)
        					{
        						for (var j = startcol; j <= endcol; j++)
        						{
        							var value = "";
        							var colFlag = 0;

        							if(!this.gfnIsNull(obj.getCellValue(i, j)))
        							{
        								value = obj.getCellValue(i, j);
        							}
        							else
        								colFlag = 1;

        							if (j < endcol && colFlag != 1)
        							{
        								clipText += value + this.COL_SEPERATOR;
        								colFlag = 0;
        							}

        							else
        							{
        								clipText += value;
        							}
        						}

        						clipText += this.ROW_SEPERATOR;
        					}

        					form.targetGrid = obj;
        					var ta = this._createTextarea(clipText);
        					form.targetGrid["ta"] = ta;
        					form.setTimer(777, 100);
        					e.stopPropagation();
        				}
        			}
        			else if (keycode == 86)
        			{
        				form.targetGrid = obj;
        				form.targetEvent = e;

        				var ta = this._createTextarea('');
        				form.targetGrid["ta"] = ta;

        				form.setTimer(888, 100);

        				e.stopPropagation();
        			}
        		}
        	}
        };

        /**
        * 그리드 복사 타이머 이벤트
        * @param {Form} obj Event가 발생한 Form Component
        * @param {TimerEventInfo} e TimerEventInfo
        * @memberOf nxlib.grid
        */

        this.gridCopyTimerHandler = function (obj, e)
        {
        	if (nexacro._browser == "Runtime" || nexacro._browser == "IE")
        	{
        	}
        	else
        	{
        		var timerid = e.timerid;
        		obj.killTimer(timerid);

        		if (timerid == 777)
        		{
        			var ta = obj.targetGrid["ta"];

        			if (!ta)
        			{
        				return;
        			}

        			document.body.removeChild(ta);
        			obj.targetGrid["ta"] = undefined;
        		}
        		else if (timerid == 888)
        		{
        			var ta = obj.targetGrid["ta"];

        			if (!ta)
        			{
        				return;
        			}

        			var clipText = ta.value;
        			document.body.removeChild(ta);
        			this.pasteData(obj, clipText);

        			obj.targetGrid["ta"] = undefined;
        		}
        	}
        };

        /**
        * Textarea 생성 함수
        * @param {String} innerText 복사할 텍스트
        * @memberOf nxlib.grid
        */

        this._createTextarea = function (innerText)
        {
        	var ta = document.createElement('textarea');
        	ta.style.position = 'absolute';
        	ta.style.left = '-1000px';
        	ta.style.top = document.body.scrollTop + 'px';
        	ta.value = innerText;
        	document.body.appendChild(ta);
        	ta.select();

        	return ta;
        };

        /**
        * 붙여넣기
        * @param {Form} form Form object
        * @param {string} clipText 붙여 넣을 텍스트
        * @memberOf nxlib.grid
        */

        this.pasteData = function (form, clipText)
        {
        	var obj = form.targetGrid;

        	obj.set_enableevent(false);
        	obj.set_enableredraw(false);

        	var ds = obj.getBindDataset();
        	ds.set_enableevent(false);

        	var grdCellCount = obj.getCellCount("body");
        	var rowCount = ds.getRowCount();
        	var startrow = nexacro.toNumber(obj.selectstartrow),endrow = nexacro.toNumber(obj.selectendrow),startcol = nexacro.toNumber(obj.selectstartcol),endcol = nexacro.toNumber(obj.selectendcol);

        	var currRow = startrow;
        	var cellIndex = startcol;

        	copyData = clipText;

        	var rowData = copyData.split(/[\n\f\r]/);
        	var rowDataCount = rowData.length - 1;

        	var checkIndex = {

        	};

        	for (var i = 0; i < rowDataCount; i++)
        	{
        		if (rowCount <= currRow)
        		{
        			ds.addRow();
        		}

        		var columnData = rowData[i].split(this.COL_SEPERATOR);
        		var columnLoopCount = cellIndex + columnData.length;

        		if (columnLoopCount > grdCellCount)
        		{
        			columnLoopCount = grdCellCount;
        		}

        		var k = 0;
        		for (var j = cellIndex; j < columnLoopCount; j++)
        		{
        			if (!checkIndex[j])
        			{
        				checkIndex[j] = 1;
        			}

        			var colid = obj.getCellProperty("body", j, "text").substr(5);
        			var tempValue = columnData[k];
        			if (!this.gfn_isEmpty(tempValue) && tempValue != "undefined")
        			{
        				ds.setColumn(currRow, colid, tempValue);
        			}

        			k++;
        		}

        		currRow++;
        	}

        	ds.rowposition = currRow;

        	endrow = endrow + rowDataCount - 1;
        	endcol = columnLoopCount - 1;

        	obj.set_enableredraw(true);
        	obj.set_enableevent(true);
        	ds.set_enableevent(true);

        	obj.selectArea(startrow, startcol, endrow, endcol);
        };

        /**
        * alphabet character code.
        * @private
        * @constant
        * @memberOf Base
        */
        _ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70]

        /**
        * value의 빈값 여부 반환.
        * <pre>
        * 1. null, undefined type : true 반환
        * 2. string, array type : length 가 0인 경우 true 반환
        * 3. object type : 하위 속성이 존재할 경우 true 반환
        * 4. boolean, number, date type : false 반환
        * </pre>
        * @param {*} value 확인할 value.
        * @return {boolean} empty 여부.
        */

        this.gfn_isEmpty = function (value)
        {
        	// null, undefined ==> true
        	if (value === null || value === undefined) return true;

        	// String, Array ==> length == 0
        	if ( this.gfn_isString(value) || this.gfn_isArray(value) )
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if ( this.gfn_isObject(value) )
        	{
        		for (var p in value)
        		{
        			if ( value.hasOwnProperty(p) )
        			{
        				return false;
        			}
        		}
        		return true;
        	}

        	return false;
        }

        /**
        * value의 string 여부 반환
        * @param {*} value 확인할 value.
        * @return {boolean} string 여부.
        */

        this.gfn_isString = function(value)
        {
        	return typeof value === 'string';
        }

        /**
        * value의 Array 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} Array 여부.
        */

        this.gfn_isArray = function(value)
        {
        	//TODO
        	/*
        	V13에서는 아래처럼하자(또는 HTML5)
        	return Object.prototype.toString.call( value ) === '[object Array]';
        	*/

        	if ( value === null || value === undefined ) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	//if ( this.gfn_isXpComponent(value) ) return false;

        	return typeof value == "object" &&
        	'constructor' in value &&
        	value.constructor === Array;
        }

        /**
        * value의 XPLATFORM component 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} XPLATFORM component 여부.
        */

        this.gfn_isXpComponent = function(value)
        {
        	if ( value === null || value === undefined  ) return false;

        	// 9.2 Runtime 기준 XP Comp에 공통된 속성은 style
        	return ( 'style' in value ) &&
        	( typeof value.style == 'object' ) &&
        	( value.style.toString() == '[object StyleObject]' );
        }

        /**
        * value의 Object 여부 반환.
        * @param {*} value 확인할 value.
        * @return {boolean} Object 여부.
        */

        this.gfn_isObject = function(value)
        {
        	if ( value === null || value === undefined ) return false;

        	// constructor 에 접근시 XP Comp 는 에러발생
        	//if ( this.gfn_isXpComponent(value) ) return false;

        	return typeof value == "object" &&
        	'constructor' in value &&
        	value.constructor === Object;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Functions_onload,this);
            this.addEventHandler("ontimer",this.Functions_ontimer,this);
            this.grdList.addEventHandler("onkeydown",this.grdList_onkeydown,this);
            this.edtSearch.addEventHandler("onkeydown",this.edt_Search_onkeydown,this);
            this.edtSearch.addEventHandler("onkeyup",this.edt_Search_onkeyup,this);
            this.rdoSelectType.addEventHandler("onitemchanged",this.fnCommChange,this);
        };

        this.loadIncludeScript("Functions.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();