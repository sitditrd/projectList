(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CellTypes");
            this.set_titletext("그리드 내 데이터 확장 표현기능");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj.set_keystring("G:pro_id, G:sal_nm");
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"pro_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_nm\" type=\"STRING\" size=\"256\"/><Column id=\"list_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_amt\" type=\"INT\" size=\"256\"/><Column id=\"price\" type=\"INT\" size=\"256\"/><Column id=\"sal_sum\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">37</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">814000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">2</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">66000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">3</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">99000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">300000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">2</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">68000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">420000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">1</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">23000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">3</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">69000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">4</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">92000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">9</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">207000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">23</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">529000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">300000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이수진</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1485000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이순신</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">66</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">330000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이순신</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">55</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">825000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">120</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">3240000</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">19</Col><Col id=\"price\">400000</Col><Col id=\"sal_sum\">7600000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">강민규</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">440000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">강민규</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">10</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">140000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김영길</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">680000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">1400000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1360000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김종오</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">13000</Col><Col id=\"sal_sum\">520000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김종오</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박수진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">77</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">2618000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">77</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">2618000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박운석</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1530000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박운석</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">35</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1155000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">12</Col><Col id=\"price\">60000</Col><Col id=\"sal_sum\">720000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">80</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">2640000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">장강훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">440000</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">3444</Col><Col id=\"sal_sum\">117096</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">황명희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">460000</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">김호연</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">민병철</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">340</Col><Col id=\"price\">24000</Col><Col id=\"sal_sum\">8160000</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이금형</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">3300000</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이나영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">38</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1254000</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">4500000</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1287000</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">13500</Col><Col id=\"sal_sum\">337500</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">김기수</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">35</Col><Col id=\"price\">35000</Col><Col id=\"sal_sum\">1225000</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">송인용</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">신태영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">이기자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">지진희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">지진희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">김정훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">390000</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">김정훈</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이동범</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">100000</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이동범</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이창진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이창진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">50</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">750000</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">김이규</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">김이규</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이광섭</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">36</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">900000</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이광섭</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이종훈</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이종훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">문정주</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">90</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">1800000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">문정주</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">900000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">박인식</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">690000</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">박인식</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">690000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">고선경</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">540000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">고선경</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">80</Col><Col id=\"price\">30000</Col><Col id=\"sal_sum\">2400000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김기원</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">540000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김기원</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">80</Col><Col id=\"price\">30000</Col><Col id=\"sal_sum\">2400000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김홍철</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">60</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1980000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김홍철</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">230</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">7590000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">우온식</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">임진경</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">36</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">36000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">임진경</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">36</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">36000</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">황인수</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">강인중</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">2000000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">강인중</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">2000000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">목진철</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">4000</Col><Col id=\"sal_sum\">120000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">목진철</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">50</Col><Col id=\"price\">4900</Col><Col id=\"sal_sum\">245000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">박제준</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">박제준</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">90</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">1350000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">750000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">60</Col><Col id=\"price\">66000</Col><Col id=\"sal_sum\">3960000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">60</Col><Col id=\"price\">66000</Col><Col id=\"sal_sum\">3960000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">권미자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">권미자</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">100000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">200</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">600000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">200</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">600000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">100000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길자</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김홍길</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">70</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">2310000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김홍길</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">660000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">박수인</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">박수인</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">배인덕</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">29000</Col><Col id=\"sal_sum\">986000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">배인덕</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">29000</Col><Col id=\"sal_sum\">986000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">심영수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">1000000</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">심영수</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">15800</Col><Col id=\"sal_sum\">1580000</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">방수진</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">방수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">유영락</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">400000</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">유영락</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">50</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">500000</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">이미자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">60000</Col><Col id=\"sal_sum\">2700000</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">이미자</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">50000</Col><Col id=\"sal_sum\">1500000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김도준</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김도준</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김인현</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김인현</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이진영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">90</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">2250000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이진영</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이창희</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이창희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이화룡</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이화룡</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">정인호</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">975000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">정인호</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">975000</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">최수정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">4500000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gropGrid", this);
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"pro_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_nm\" type=\"STRING\" size=\"256\"/><Column id=\"list_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_amt\" type=\"INT\" size=\"256\"/><Column id=\"price\" type=\"INT\" size=\"256\"/><Column id=\"sal_sum\" type=\"INT\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\"/><Col id=\"list_id\"/><Col id=\"sal_amt\"/><Col id=\"price\"/><Col id=\"sal_sum\"/><Col id=\"level\">0</Col></Row><Row><Col id=\"pro_id\">강남사업부_0101</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">3</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">99000</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강남사업부_0101</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">300000</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강남사업부_0101</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">2</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">68000</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강남사업부_0101</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">420000</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강남사업부_0101</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강남사업부_0101</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\"/><Col id=\"list_id\"/><Col id=\"sal_amt\"/><Col id=\"price\"/><Col id=\"sal_sum\"/><Col id=\"level\">0</Col></Row><Row><Col id=\"pro_id\">강서사업부_01</Col><Col id=\"sal_nm\"/><Col id=\"list_id\"/><Col id=\"sal_amt\"/><Col id=\"price\"/><Col id=\"sal_sum\"/><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강서사업부_0101</Col><Col id=\"sal_nm\">김영길</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">680000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">강서사업부_0101</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">1400000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">강서사업부_0101</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1360000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">강서사업부_0101</Col><Col id=\"sal_nm\">김종오</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">13000</Col><Col id=\"sal_sum\">520000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">강서사업부_02</Col><Col id=\"sal_nm\"/><Col id=\"list_id\"/><Col id=\"sal_amt\"/><Col id=\"price\"/><Col id=\"sal_sum\"/><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">강서사업부_0201</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">강서사업부_0201</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\"/><Col id=\"list_id\"/><Col id=\"sal_amt\"/><Col id=\"price\"/><Col id=\"sal_sum\"/><Col id=\"level\">0</Col></Row><Row><Col id=\"pro_id\">군자사업부_01</Col><Col id=\"sal_nm\"/><Col id=\"list_id\"/><Col id=\"sal_amt\"/><Col id=\"price\"/><Col id=\"sal_sum\"/><Col id=\"level\">1</Col></Row><Row><Col id=\"pro_id\">군자사업부_0101</Col><Col id=\"sal_nm\">이금형</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">3300000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">군자사업부_0101</Col><Col id=\"sal_nm\">이나영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">38</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1254000</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"pro_id\">군자사업부_0101</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">4500000</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data1</Col><Col id=\"Column2\">DataA</Col><Col id=\"Column3\">12345</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Data2</Col><Col id=\"Column2\">DataB</Col><Col id=\"Column3\">67890</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Data3</Col><Col id=\"Column2\">DataC</Col><Col id=\"Column3\">12345</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">Data4</Col><Col id=\"Column2\">DataD</Col><Col id=\"Column3\">67890</Col><Col id=\"Column4\">가A나B다C</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">Data5</Col><Col id=\"Column2\">DataE</Col><Col id=\"Column3\">12345</Col><Col id=\"Column4\">가A나B다C</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 확장 컴포넌트 ");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","58",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("그리드");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","4","40",null,null,"4","4",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"사업부\"/><Cell col=\"2\" text=\"사원\"/><Cell col=\"3\" text=\"교재명\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"총액\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" style=\"selectline: ;\" treelevel=\"expr:dataset.parent.fv_arrGroupId.length&gt;0?dataset.parent.fv_arrGroupId.length-dataset.getRowLevel(currow):&quot;&quot;\" text=\"expr:comp.parent.parent.parent.parent.fn_setSubSumText(currow)\"/><Cell col=\"1\" style=\"font:9 null;selectline: ;\" text=\"bind:pro_id\" suppress=\"1\"/><Cell col=\"2\" style=\"font:9 null;selectline: ;\" text=\"bind:sal_nm\" expr=\"dataset.getRowLevel(currow)==2?&quot;중계&quot;:sal_nm\" suppress=\"2\"/><Cell col=\"3\" style=\"font:9 null;selectline: ;\" text=\"bind:list_id\" expr=\"dataset.getRowLevel(currow)==&quot;1&quot;?&quot;소계&quot;:list_id\"/><Cell col=\"4\" style=\"align:right;font:9 null;\" text=\"bind:sal_amt\"/><Cell col=\"5\" style=\"align:right;font:9 null;\" text=\"bind:price\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:sal_sum\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;sal_amt&quot;)\" maskedittype=\"number\" maskedittrimtype=\"none\" displaytype=\"number\" maskeditmaskchar=\"-\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;price&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;sal_sum&quot;)\" displaytype=\"number\"/></Band></Format><Format id=\"User1\"><Columns><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"사업부\"/><Cell col=\"2\" text=\"사원\"/><Cell col=\"3\" text=\"교재명\"/><Cell col=\"4\" text=\"수량\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" style=\"selectline: ;\" treelevel=\"expr:dataset.parent.fv_arrGroupId.length&gt;0?dataset.parent.fv_arrGroupId.length-dataset.getRowLevel(currow):&quot;&quot;\" text=\"expr:comp.parent.parent.parent.parent.fn_setSubSumText(currow)\"/><Cell col=\"1\" style=\"font:9 null;selectline: ;\" text=\"bind:pro_id\" suppress=\"1\"/><Cell col=\"2\" style=\"font:9 null;selectline: ;\" text=\"bind:sal_nm\" expr=\"dataset.getRowLevel(currow)==2?&quot;중계&quot;:sal_nm\" suppress=\"2\"/><Cell col=\"3\" style=\"font:9 null;selectline: ;\" text=\"bind:list_id\" expr=\"dataset.getRowLevel(currow)==&quot;1&quot;?&quot;소계&quot;:list_id\"/><Cell col=\"4\" style=\"align:right;font:9 null;\" text=\"bind:sal_amt\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio00","70","10","228","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Tab00_Tabpage1_form_Radio00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Radio00_innerdataset", obj);
            Tab00_Tabpage1_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">grid</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">tree</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Radio00_innerdataset);
            obj.set_text("grid");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","60","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Type : ");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00","298","10","160","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("사용자 별 포맷 변경 : ");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","458","10","228","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Tab00_Tabpage1_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Radio00_00_innerdataset", obj);
            Tab00_Tabpage1_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">관리자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용자</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Radio00_00_innerdataset);
            obj.set_text("grid");
            obj.set_value("0");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("카테고리 그리드");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("divCategory","4","4",null,"47","4",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_background("#f2f2f2");
            obj.set_borderRadius("7px");
            obj.set_border("1px solid #e3e3e3");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("stDragImg2","1056","276","50","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Static03");
            obj.set_visible("false");
            obj.set_border("2 dotted #ff8e7c");
            obj.set_background("#fef5f3");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("stDragImg","1056","228","120","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Static03");
            obj.set_visible("false");
            obj.set_border("2 dotted #ff8e7c");
            obj.set_background("#fef5f3");
            obj.set_font("12px/normal \"나눔고딕\",\"Arial\"");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","4","99",null,null,"4","10",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_gropGrid");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"사업부\"/><Cell col=\"2\" text=\"사원\"/><Cell col=\"3\" text=\"교재명\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"총액\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" style=\"selectline: ;\" treelevel=\"expr:dataset.parent.fv_arrGroupId.length&gt;0?dataset.parent.fv_arrGroupId.length-dataset.getRowLevel(currow):&quot;&quot;\" text=\"expr:comp.parent.parent.parent.parent.fn_setSubSumText(currow)\"/><Cell col=\"1\" style=\"font:9 null;selectline: ;\" text=\"bind:pro_id\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/><Cell col=\"2\" style=\"font:9 null;selectline: ;\" text=\"bind:sal_nm\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" style=\"font:9 null;selectline: ;\" text=\"bind:list_id\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"4\" style=\"align:right;font:9 null;\" text=\"bind:sal_amt\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"5\" style=\"align:right;font:9 null;\" text=\"bind:price\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:sal_sum\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_treeState","4","61","150","28",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage2_form_cbo_treeState_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_cbo_treeState_innerdataset", obj);
            Tab00_Tabpage2_form_cbo_treeState_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">collapse,null</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">expand,all</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_cbo_treeState_innerdataset);
            obj.set_text("collapse,null");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("행 추가/삭제");
            this.Tab00.addChild(obj.name, obj);

            obj = new Radio("rdoOption","10","0","200","52",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("rdo_basic01");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Tab00_Tabpage3_form_rdoOption_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage3_form_rdoOption_innerdataset", obj);
            Tab00_Tabpage3_form_rdoOption_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AddRow</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">InsertRow</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage3_form_rdoOption_innerdataset);
            obj.set_text("AddRow");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btnAdd","21.26%","10","7.49%","32",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("삽입");
            obj.set_cssclass("btn_WF_basic03");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btnInit","29.05%","10","7.49%","32",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic03");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btnDelete","36.84%","10","7.49%","32",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic05");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grdList","10","52",null,"270","28",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new TextArea("txaOutputMsg","10","332",null,null,"28","10",null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_value("[ ================= OytPut Msg ================= ]");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("stDragImg2","1056","276","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static03");
            obj.set_visible("false");
            obj.set_border("2 dotted #ff8e7c");
            obj.set_background("#fef5f3");
            this.addChild(obj.name, obj);

            obj = new Static("stDragImg","1056","228","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static03");
            obj.set_visible("false");
            obj.set_border("2 dotted #ff8e7c");
            obj.set_background("#fef5f3");
            obj.set_font("12px/normal \"나눔고딕\",\"Arial\"");
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
        this.registerScript("GridType.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    Components.xfdl
        *  @Creator     presales
        *  @CreateDate  2020/02/06
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2020/02/06          presales                  최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.sKeyString="G:";
        this.gridColSize = "";
        this.fv_arrGroupId = new Array();
        this.fv_arrGroupId_02 = new Array();
        this.fv_arrColId = [];
        this.objFormats = "";
        this.fvMsg;
        this.fvMsgCnt = 0;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.CellTypes_onload = function(obj,e)
        {
        	this.objFormats = this.Tab00.Tabpage1.form.Grid00.formats;
        	this.fvMsg = this.Tab00.Tabpage3.form.txaOutputMsg.value + "\n";
        };

        this.CellTypes_ondragmove = function(obj,e)
        {
        	this.stDragImg.move(e.clientx+15, e.clienty+15);
        	this.stDragImg2.move(e.clientx+15, e.clienty+15);
        };

        this.CellTypes_ondrop = function(obj,e)
        {
        	var objGrid = this.Tab00.Tabpage2.form.Grid00;

        	if(this.fn_DragType=="TREE")
        	{
        		var sGroupId = "";
        		var i;
        		var nCell;

        		objGrid.set_visible(false);

        		for(i=0;i<this.fv_arrGroupId_02.length;i++)
        		{
        			sGroupId += ","+this.fv_arrGroupId_02[i];
        		}

        		sGroupId = sGroupId.replace("," + e.userdata, "");
        		sGroupId = sGroupId.substr(1);

        		this.fv_arrGroupId_02 = new Array();

        		if(sGroupId.length!=0)
        		this.fv_arrGroupId_02 = sGroupId.split(",");

        		nCell = objGrid.getBindCellIndex("body", e.userdata);
        		objGrid.setFormatColProperty(nCell, "size", 80);

        		this.fn_setGroup();

        		this.fn_setTree();
        		objGrid.set_visible(true);
        	}

        	this.fn_DragImgClear();
        };

         /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnSetInit = function()
        {
        	this.sKeyString="G:";
        	this.gridColSize = "";
        	this.fv_arrGroupId = [];
        	this.fv_arrColId = [];

        	this.Tab00.Tabpage1.form.Grid00.set_formats(this.objFormats);
        };

        this.fnSetTree = function()
        {
        	var nRow;
        	var objGrid = this.Tab00.Tabpage1.form.Grid00;

        	this.gridColSize = this.ds_grid.getColCount();

        	for(var i=1; i<=this.gridColSize; i++) {
        		//var cellText = objGrid.getCellText(-1, i); // 사업부, 사원, 교재명, 수량, 단가, 총액
        		//this.fv_arrGroupId[i] = cellText;

        		var cellID = objGrid.getCellProperty("body", i, "text").toString().replace("bind:",""); // pro_id, sal_nm, list_id, sal_amt, price, sal_sum

        		this.fv_arrGroupId[i-1] = cellID; //0번지부터 사용하기 위해서 -1을 수행.

        		this.fv_arrColId[i] = i;
        	}

        	//col값이 0이었던 size를 증가시킨다.
        	objGrid.setFormatColProperty(0, "size", 120);

        	//Grid00의 col값 중 1이상인 column size를 모두 0으로 초기화 한다.
        	for(var i=1; i<=this.gridColSize; i++) {
        		objGrid.setFormatColProperty(i, "size", 0);
        	}

        	//setGroup -> 그룹화작업을 수행한다.
        	for(var i=0; i<this.fv_arrGroupId.length; i++) {
        		if(i==0)
        		this.sKeyString += this.fv_arrGroupId[i];
        		else
        		this.sKeyString += "," + this.fv_arrGroupId[i];
        	}

        	//keyString -> 최종적으로 작업된 keyString을 적용한다.
        	this.ds_grid.set_keystring(this.sKeyString);
        };

        this.fn_setSubSumText = function(nRow)
        {
        	var objGrid = (this.Tab00.tabindex == 0) ? this.Tab00.Tabpage1.form.Grid00 : this.Tab00.Tabpage2.form.Grid00;

        	//getRowLevel() : Dataset이 그룹화되어 있을 경우에 지정한 Row의 레밸을 구하는 메소드입니다.
        	var nLevel = this.ds_grid.getRowLevel(nRow);

        	if(nLevel==0)
        	return "";

        	//getTreeChildCount() : Grid가 트리 형식일 때 특정 Row에 자식으로 존재하는 Row의 갯수를 반환하는 메소드입니다.
        	return this.ds_grid.getColumn(nRow+nLevel, this.fv_arrGroupId[this.fv_arrGroupId.length-(nLevel)])+"("+objGrid.getTreeChildCount(nRow)+")";
        	//this.fv_arrGroupId.length-(nLevel)]의 뜻 : 트리 구성을 하려면 역순으로 구성이 되야 하기 때문에 nLevel을 빼준다.
        };

        this.fn_setGroup = function()
        {
        	var i;
        	var sKeyString = "G:";
        	var objGrid = this.Tab00.Tabpage2.form.Grid00;

        	if(this.fv_arrGroupId_02.length == 0)
        	{
        		this.ds_grid.set_keystring("");
        	}
        	else
        	{
        		for(i=0;i<this.fv_arrGroupId_02.length;i++)
        		{
        			if(i==0)
        			sKeyString += this.fv_arrGroupId_02[i];
        			else
        			sKeyString += "," + this.fv_arrGroupId_02[i];
        		}

        		this.ds_grid.set_keystring(sKeyString);

        		objGrid.setFormatColProperty(0, "size", 150);
        	}
        };

        this.fn_setTree = function()
        {
        	var i=0;
        	var objStatic;
        	var objLine;
        	var nCell;
        	var nLeft, nTop;
        	var objRmv;
        	var rtn;

        	var objGrid = this.Tab00.Tabpage2.form.Grid00;
        	var divCategory = this.Tab00.Tabpage2.form.divCategory;

        	for(i=divCategory.form.components.length-1;i>=0;i--)
        	{
        		divCategory.form.components[i].set_visible(false);
        	}

        	if(this.fv_arrGroupId_02.length==0)
        	{
        		objGrid.setFormatColProperty(0, "size", 0);
        		return;
        	}

        	for(i=0;i<this.fv_arrGroupId_02.length;i++)
        	{
        		nLeft = 10+ i*(this.fv_width+10);
        		nTop = 10;

        		if(this.gfnIsNull(divCategory.form.components["stGroup"+i])==true)
        		{
        			objStatic = new Button("stGroup"+i, nLeft, nTop, this.fv_width, 26);
        			divCategory.form.addChild(objStatic.name, objStatic);

        			nCell = objGrid.getBindCellIndex( "body", this.fv_arrGroupId_02[i]);

        			objStatic.set_text(objGrid.getCellProperty("head", nCell, "text"));
        			objStatic.groupid = this.fv_arrGroupId_02[i];

        			objStatic.set_cssclass("btn_WF_basic01");
        			objStatic.addEventHandler("ondrag", this.fn_TreeDrag, this);
        			objStatic.addEventHandler("ondrop", this.fn_TreeDrop, this);
        			objStatic.show();
        		}else
        		{
        			nCell = objGrid.getBindCellIndex( "body", this.fv_arrGroupId_02[i]);
        			divCategory.form.components["stGroup"+i].move(nLeft, nTop);
        			divCategory.form.components["stGroup"+i].set_text(objGrid.getCellProperty("head", nCell, "text"));
        			divCategory.form.components["stGroup"+i].groupid = this.fv_arrGroupId_02[i];
        			divCategory.form.components["stGroup"+i].set_visible(true);
        		}
        	}
        	divCategory.form.resetScroll();
        };

        this.fn_DragImgClear = function()
        {
        	this.stDragImg.set_visible(false);
        	this.stDragImg.filePath = "";
        	this.stDragImg.fileName = "";
        	this.stDragImg2.set_visible(false);
        };

        this.fn_setLine = function(nLevel)
        {
        	if(nLevel==0)
        	{
        		return "1px solid #b1b5b9ff";
        	}else
        	{
        		//top, right, bottom, left
        		return "1px solid #b1b5b9ff, 0px solid #b1b5b9ff, 1px solid #b1b5b9ff, 0px solid #b1b5b9ff";
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.fn_comCboOnItemChanged = function(obj,e)
        {
        	var sTreeStatus = obj.text;

        	this.Tab00.Tabpage2.form.Grid00.set_treeinitstatus(sTreeStatus);
        };

        this.Grid00_ondrag = function(obj,e)
        {
        	this.fn_DragType = "GRID";

        	if(e.row == -1)
        	{
        		var cellText = obj.getCellText(e.row, e.cell);

        		if (!this.gfnIsNull(cellText))
        		{
        			this.stDragImg.set_text(obj.getCellText(e.row, e.cell));
        			this.stDragImg.selcol = e.col;
        			this.stDragImg.set_visible(true);
        			e.userdata = obj.getCellProperty("body", e.cell, "text").toString().replace("bind:", "");
        			return true;
        		}
        	}
        };

        this.divCategory_ondrop = function(obj,e)
        {
        	var objGrid = this.Tab00.Tabpage2.form.Grid00;

        	if(this.fn_DragType=="TREE")
        	return;

        	objGrid.setFormatColProperty(this.stDragImg.selcol, "size", 0);

        	this.fv_arrGroupId_02[this.fv_arrGroupId_02.length] = e.userdata;

        	this.fn_setGroup();
        	this.fn_setTree();

        	this.fn_DragImgClear();
        };

        this.fn_TreeDrag = function(obj, e)
        {
        	this.fn_DragType = "TREE";
        	this.stDragImg2.set_text(obj.text);
        	this.stDragImg2.set_visible(true);

        	e.userdata = obj.groupid;

        	return true;
        };

        this.fn_TreeDrop = function(obj, e)
        {
        	if(this.fn_DragType!="GRID" && e.userdata!=obj.groupid)
        	{
        		var sGroupId = "";
        		var i;

        		for(i=0;i<this.fv_arrGroupId_02.length;i++)
        		{
        			sGroupId += "," + this.fv_arrGroupId_02[i];
        		}

        		if(sGroupId.indexOf("," + e.userdata + "," + obj.groupid) > -1)
        		{
        			sGroupId = sGroupId.replace("," + e.userdata + ","+obj.groupid, "," + obj.groupid + ","+e.userdata);
        		}else
        		{
        			sGroupId = sGroupId.replace(","+e.userdata, "");
        			sGroupId = sGroupId.replace(","+obj.groupid, "," + e.userdata + ","+obj.groupid);
        		}

        		sGroupId = sGroupId.substr(1);
        		this.fv_arrGroupId_02 = sGroupId.split(",");
        		this.fn_setGroup();
        		this.fn_setTree();

        		this.fn_DragImgClear();

        		return true;
        	}
        };

        this.fnComRdoOnItemChanged = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "Radio00" :
        			var Type = this.Tab00.Tabpage1.form.Radio00.text;

        			if(Type == "grid")
        			{
        				this.Tab00.Tabpage1.form.Static00_00.set_visible(true);
        				this.Tab00.Tabpage1.form.Radio00_00.set_visible(true);

        				this.fnSetInit();
        			}
        			else if(Type == "tree")
        			{
        				this.Tab00.Tabpage1.form.Static00_00.set_visible(false);
        				this.Tab00.Tabpage1.form.Radio00_00.set_visible(false);

        				this.fnSetTree();
        			}
        			break;

        		case "Radio00_00" :
        			var Type = this.Tab00.Tabpage1.form.Radio00_00.text;

        			if(Type == "관리자")
        			{
        				this.Tab00.Tabpage1.form.Grid00.setFormat("default");
        			}
        			else if(Type == "사용자")
        			{
        				this.Tab00.Tabpage1.form.Grid00.setFormat("User1");
        			}
        			break;
        	}
        };

        this.Tab00_onchanged = function(obj,e)
        {
        	if(obj.tabindex == 0) //그리드
        	{
        		this.fnSetInit();
        	}
        	else if(obj.tabindex == 1) //카테고리 그리드
        	{
        		this.fv_width = 50;
        		this.fn_DragType;
        	}
        };

        this.fnComBtnOnClick = function(obj,e)
        {
        	var sOptionType = this.Tab00.Tabpage3.form.rdoOption.text;
        	var nRowPos;

        	switch (obj.name)
        	{
        		case "btnAdd" :
        			if (sOptionType == "AddRow") {
        				this.fvMsgCnt ++;

        				this.dsList.addRow();

        				this.fvMsg += " ========== " + this.fvMsgCnt +  " ========== " + "\n";
        				this.fvMsg += "> Evnet Object Id : " + obj.id + "\n";
        				this.fvMsg += "> Object Text : " + obj.text + "\n";
        				this.fvMsg += "> Action Type : " + this.Tab00.Tabpage3.form.rdoOption.text + "\n";
        				this.fvMsg += "> 추가 Row Index : " + nexacro.toNumber(this.dsList.rowposition + 1) + "\n";
        			} else {
        				nRowPos = this.dsList.rowposition;
        				this.dsList.insertRow(nRowPos);

        				this.fvMsg += "> Evnet Object Id : " + obj.id + "\n";
        				this.fvMsg += " > Object Text : " + obj.text + "\n";
        				this.fvMsg += "> Action Type : " + this.Tab00.Tabpage3.form.rdoOption.text + "\n";
        				this.fvMsg += "> 추가 Row Index : " + nexacro.toNumber(nRowPos + 1) + "\n";
        			}

        			this.Tab00.Tabpage3.form.txaOutputMsg.set_value(this.fvMsg);
        			break;

        		case "btnDelete" :
        			var nRowPos = this.dsList.rowposition;

        			this.dsList.deleteRow(nRowPos);

        			this.fvMsg += "> Evnet Object Id : " + obj.id + "\n";
        			this.fvMsg += " > Object Text : " + obj.text + "\n";
        			this.fvMsg += "> 삭제 Row Index : " + nexacro.toNumber(nRowPos + 1) + "\n";

        			this.Tab00.Tabpage3.form.txaOutputMsg.set_value(this.fvMsg);
        			break;

        		case "btnInit" :
        			this.fvMsgCnt = 0;
        			this.fvMsg = "";
        			this.Tab00.Tabpage3.form.txaOutputMsg.set_value("[ ================= OytPut Msg ================= ]");
        			this.dsList.reset();
        			this.resetScroll();
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.CellTypes_ondragmove,this);
            this.addEventHandler("ondrop",this.CellTypes_ondrop,this);
            this.addEventHandler("onload",this.CellTypes_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("ondrag",this.Grid00_ondrag,this);
            this.Tab00.Tabpage1.form.Radio00.addEventHandler("onitemchanged",this.fnComRdoOnItemChanged,this);
            this.Tab00.Tabpage1.form.Radio00_00.addEventHandler("onitemchanged",this.fnComRdoOnItemChanged,this);
            this.Tab00.Tabpage2.form.divCategory.addEventHandler("ondrop",this.divCategory_ondrop,this);
            this.Tab00.Tabpage2.form.Grid00.addEventHandler("ondrag",this.Grid00_ondrag,this);
            this.Tab00.Tabpage2.form.cbo_treeState.addEventHandler("onitemchanged",this.fn_comCboOnItemChanged,this);
            this.Tab00.Tabpage3.form.btnAdd.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Tab00.Tabpage3.form.btnInit.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Tab00.Tabpage3.form.btnDelete.addEventHandler("onclick",this.fnComBtnOnClick,this);
        };

        this.loadIncludeScript("GridType.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
