(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Dynamic");
            this.set_titletext("동적 그리드");
            this.set_stepshowtype("action");
            this.set_stepitemsize("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,691);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"사업부\" type=\"STRING\" size=\"256\"/><Column id=\"사원\" type=\"STRING\" size=\"256\"/><Column id=\"교재명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/><Column id=\"단가\" type=\"INT\" size=\"256\"/><Column id=\"총액\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">강남길</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">37</Col><Col id=\"단가\">22000</Col><Col id=\"총액\">814000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">강남길</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">2</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">66000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">강남길</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">3</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">99000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김길동</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">300000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김길동</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">2</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">68000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김길동</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">14000</Col><Col id=\"총액\">420000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김재동</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">575000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김재동</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">575000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김재동</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">575000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">1</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">23000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">3</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">69000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">4</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">92000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">9</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">207000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">23</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">529000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">300000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이수진</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1485000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이순신</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">66</Col><Col id=\"단가\">5000</Col><Col id=\"총액\">330000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이순신</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">55</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">825000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">조승우</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">120</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">3240000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">조승우</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">19</Col><Col id=\"단가\">400000</Col><Col id=\"총액\">7600000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">강민규</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">22000</Col><Col id=\"총액\">440000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">강민규</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">10</Col><Col id=\"단가\">14000</Col><Col id=\"총액\">140000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김영길</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">680000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김인하</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">14000</Col><Col id=\"총액\">1400000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김인하</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1360000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김종오</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">13000</Col><Col id=\"총액\">520000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김종오</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김진석</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김진석</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김진석</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박수진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">77</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">2618000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">77</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">2618000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박운석</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박운석</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">35</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1155000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">안재원</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">안재원</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">안재원</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">12</Col><Col id=\"단가\">60000</Col><Col id=\"총액\">720000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">이수영</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">이수영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1122000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">이수영</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">80</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">2640000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">장강훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">22000</Col><Col id=\"총액\">440000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">조승우</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">3444</Col><Col id=\"총액\">117096</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">황명희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">460000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">김호연</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">민병철</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">340</Col><Col id=\"단가\">24000</Col><Col id=\"총액\">8160000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이금형</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">3300000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이나영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">38</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1254000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이승헌</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">4500000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이승헌</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1287000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이승헌</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">13500</Col><Col id=\"총액\">337500</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">김기수</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">35</Col><Col id=\"단가\">35000</Col><Col id=\"총액\">1225000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">송인용</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">신태영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">이기자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1600000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">지진희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1122000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">지진희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1122000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">김정훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">390000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">김정훈</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">810000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이동범</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">1000</Col><Col id=\"총액\">100000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이동범</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이창진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">135000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이창진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">50</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">750000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">김이규</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">75</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1875000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">김이규</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이광섭</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">36</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">900000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이광섭</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">56</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1848000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이종훈</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이종훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">1035000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">문정주</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">90</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">문정주</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">900000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">박인식</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">690000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">박인식</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">690000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">고선경</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">540000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">고선경</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">80</Col><Col id=\"단가\">30000</Col><Col id=\"총액\">2400000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김기원</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">540000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김기원</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">80</Col><Col id=\"단가\">30000</Col><Col id=\"총액\">2400000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김홍철</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">60</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1980000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김홍철</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">230</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">7590000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">우온식</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">임진경</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">36</Col><Col id=\"단가\">1000</Col><Col id=\"총액\">36000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">임진경</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">36</Col><Col id=\"단가\">1000</Col><Col id=\"총액\">36000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">황인수</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">강인중</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">2000000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">강인중</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">2000000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">목진철</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">4000</Col><Col id=\"총액\">120000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">목진철</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">50</Col><Col id=\"단가\">4900</Col><Col id=\"총액\">245000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">박제준</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">박제준</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">90</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">1350000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">750000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">60</Col><Col id=\"단가\">66000</Col><Col id=\"총액\">3960000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">60</Col><Col id=\"단가\">66000</Col><Col id=\"총액\">3960000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">이미숙</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">이미숙</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">이미숙</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">임수근</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">임수근</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">임수근</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">곽희정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">곽희정</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">곽희정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">권미자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">권미자</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">5000</Col><Col id=\"총액\">100000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">200</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">200</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">5000</Col><Col id=\"총액\">100000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길자</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김홍길</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">70</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">2310000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김홍길</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">660000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">박수인</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">박수인</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">배인덕</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">29000</Col><Col id=\"총액\">986000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">배인덕</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">29000</Col><Col id=\"총액\">986000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">심영수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">심영수</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">15800</Col><Col id=\"총액\">1580000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">방수진</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">810000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">방수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">810000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">유영락</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">400000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">유영락</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">50</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">500000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">이미자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">60000</Col><Col id=\"총액\">2700000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">이미자</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">50000</Col><Col id=\"총액\">1500000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김도준</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">135000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김도준</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">135000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김인현</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김인현</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">56</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1848000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">1035000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">56</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1848000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">1035000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이진영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">90</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">2250000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이진영</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이창희</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이창희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이화룡</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">75</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1875000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이화룡</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">75</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1875000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">정인호</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">975000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">정인호</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">975000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">최수정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">4500000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_column", this);
            obj._setContents("<ColumnInfo><Column id=\"column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"column\">사업부</Col></Row><Row><Col id=\"column\">사원</Col></Row><Row><Col id=\"column\">교재명</Col></Row><Row><Col id=\"column\">수량</Col></Row><Row><Col id=\"column\">단가</Col></Row><Row><Col id=\"column\">총액</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multicolumn", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"column\">사업부</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">사원</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">교재명</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">수량</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">단가</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">총액</Col><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_updatecontrol("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list02","150","357",null,"216","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list02");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/></Rows><Band id=\"head\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list01","150","90",null,"216","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list01");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_visible("false");
            obj.set_border("1px solid rgba(156,156,156,1)");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list01Fake","150","90",null,"216","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/></Rows><Band id=\"head\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stDragImg","0","600","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_grd_move");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_column","10","90","130","217",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_column");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_dynamic");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"Column 정보\"/></Band><Band id=\"body\"><Cell text=\"bind:column\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_multiColumn","10","357","130","217",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_multicolumn");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_dynamic");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Column 정보\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:column\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","50","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("단건 처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","317","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("멀티 처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init02",null,"317","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::img_b_select.png\') no-repeat center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init01",null,"50","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\'imagerc::img_b_select.png\') no-repeat center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("동적 그리드");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_step2","0","0",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_step3","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("2");
            obj.set_text("File up down load 개발 예정");
            this.addChild(obj.name, obj);

            obj = new Div("div_step4","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Dynamic.xfdl", function() {
        /************************************************************************************************
         * 전역변수 영역
         *************************************************************************************************/
        this.fv_sTextVal = [];
        this.fv_dropFlag;
        this.fv_formats1;
        this.fv_formats2;

        /************************************************************************************************
         * Function Name: Dynamic_onload
         * Description  : Form onload
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.Dynamic_onload = function (obj, e)
        {
        	this.fv_formats1 = this.grd_list01.formats;
        	this.fv_formats2 = this.grd_list02.formats;
        	this.fv_formats3 = this.grd_multiColumn.formats;

        	this.div_step2.set_url("sample::DynamicTree.xfdl");
        	this.div_step3.set_url("sample::CategoryGrid.xfdl");
        	this.div_step4.set_url("sample::Portlet.xfdl");

        	this.setFocus();
        };

        /************************************************************************************************
         * Function Name: Dynamic_ondragmove
         * Description  : Form ondragmove
         컴포넌트 영역에서 드래그 동작중인 마우스가 이동할 때 발생
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.Dynamic_ondragmove = function (obj, e)
        {
        	this.stDragImg.move(e.clientx + 15, e.clienty + 15);
        };

        /************************************************************************************************
         * Function Name: Dynamic_ondrop
         * Description  : Form ondrop
         컴포넌트 영역에 드래그한 컴포넌트를 내려 놓을 때 발생
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.Dynamic_ondrop = function (obj, e)
        {
        	// Grid Drop 이 아닐경우 처리
        	var objComp = e.fromobject;

        	if (objComp != "[object Grid]") {
        		this.fn_DragImgClear();
        	}
        };

        /************************************************************************************************
         * Function Name: Dynamic_onkeydown
         * Description  : Form onkeydown
         단축키를 활용한 Event 처리
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.Dynamic_onkeydown = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	if (e.keycode == 39) // KeyBoard 중간 ->
        	{
        		if (nStepIdx == 0) {
        			this.setStepIndex(1);
        		} else if (nStepIdx == 1) {
        			this.setStepIndex(2);
        		} else if (nStepIdx == 2) {
        			this.setStepIndex(3);
        		}
        	}
        	else if (e.keycode == 37) // KeyBoard 중간 <-
        	{
        		if (nStepIdx == 1) {
        			this.setStepIndex(0);
        		} else if (nStepIdx == 2) {
        			this.setStepIndex(1);
        		} else if (nStepIdx == 3) {
        			this.setStepIndex(2);
        		}
        	}
        };

        /************************************************************************************************
         * Function Name: fn_comBtn
         * Description  : Button onclick
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.fn_comBtn = function (obj, e)
        {
        	switch (obj.name)
        	{
        		case "btn_init01":
        			// 초기화
        			this.grd_list01Fake.set_visible(true);
        			this.grd_list01.set_visible(false);

        			this.grd_list01.set_formats(this.fv_formats1);
        			this.grd_list01.set_nodatatext("데이터가 없습니다.");
        			this.ds_list01.clearData();
        			break;
        		case "btn_init02":
        			// 초기화
        			var i;

        			for (i = 0; i <= this.ds_column.getRowCount(); i++)
        			{
        				this.ds_multicolumn.setColumn(i, "chk", 0);
        			}

        			this.grd_list02.set_formats(this.fv_formats2);
        			this.ds_list02.clearData();
        			this.grd_list02.set_nodatatext("데이터가 없습니다.");
        			break;
        	}
        };

        /************************************************************************************************
         * Function Name: fn_ondrag
         * Description  : Grid ondrag
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.fn_ondrag = function (obj, e)
        {
        	var i, j;
        	var varProperty;

        	switch (obj.name)
        	{
        		case "grd_column":
        			// 단일 Column 이동
        			// 헤더가 클릭되었을경우 빈 column이 생기는 오류 방지
        			if (e.row < 0) {
        				return;
        			}

        			this.fv_dropFlag = "단일";
        			this.stDragImg.set_text(obj.getCellText(e.row, e.cell));
        			this.stDragImg.selcol = e.col;
        			this.stDragImg.set_visible(true);

        			e.userdata = obj.getCellProperty("body", e.cell, "text").toString().replace("bind:", "");

        			// Column Parsing 중복방지
        			var nCount = this.grd_list01.getCellCount("Head");
        			var sCol = this.stDragImg.text;

        			if (nCount > 0)
        			{
        				for (j = 0; j < nCount; j++)
        				{
        					varProperty = this.grd_list01.getCellProperty("Head", j, "text");

        					if (sCol == varProperty) {
        						return;
        					}
        				}
        			}

        			return true;
        			break;
        		case "grd_multiColumn":
        			// 멀티 Column 이동
        			this.fv_dropFlag = "멀티";

        			var sColId = this.ds_multicolumn.getColID(e.col);

        			if (sColId == "chk")
        			{
        				return;
        			}
        			else
        			{
        				var sChk;

        				// Check 된 데이터 없으면 Return
        				if (this.fv_sTextVal.length == 0 || this.fv_sTextVal == "") {
        					return;
        				}

        				for (i = 0; i < this.ds_multicolumn.rowcount; i++)
        				{
        					sChk = this.ds_multicolumn.getColumn(i, "chk");

        					if (sChk == 1) {
        						this.stDragImg.set_text(this.fv_sTextVal);
        						this.stDragImg.selcol = e.col;
        						this.stDragImg.set_visible(true);
        					}
        				}

        				e.userdata = obj.getCellProperty("body", e.cell, "text").toString().replace("bind:", "");

        				return true;
        			}
        			break;
        	}
        };

        /************************************************************************************************
         * Function Name: fn_ondrop
         * Description  : Grid ondrop
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.fn_ondrop = function (obj, e)
        {
        	var i;
        	var sColData;

        	if (this.fv_dropFlag == "단일")
        	{
        		// Grid Formats 정보 바꾸는 과정의 문제점으로 밑에 처럼 처리
        		this.grd_list01Fake.set_visible(false);
        		this.grd_list01.set_visible(true);

        		/* Grid Formats 생성 - Start */
        		this.grd_list01.appendContentsCol();

        		var nColIdx = this.grd_list01.getFormatColCount();
        		var nCellCnt = this.grd_list01.getCellCount("Head");
        		var sCol;
        		var objColumnInfo;

        		if (nCellCnt == 0) {
        			// Cell Count 가 0 이면, Head, Body Row 추가
        			this.grd_list01.appendContentsRow("head");
        			this.grd_list01.appendContentsRow("body");
        		}

        		var nRowCnt1 = this.ds_grid.rowcount;
        		var nRowCnt2 = this.ds_list01.rowcount;

        		if (nColIdx > 0) {
        			nColIdx -= 1;
        		}

        		sCol = this.stDragImg.text;

        		objColumnInfo = this.ds_grid.getColumnInfo(sCol);
        		this.ds_list01.addColumn(sCol, objColumnInfo.type, objColumnInfo.size);

        		for (i = 0; i < nRowCnt1; i++)
        		{
        			sColData = this.ds_grid.getColumn(i, sCol);

        			if (nRowCnt2 == 0) {
        				this.ds_list01.addRow();
        			}

        			this.ds_list01.setColumn(i, sCol, sColData);
        		}

        		this.grd_list01.setCellProperty("head", nColIdx, "text", sCol);
        		this.grd_list01.setCellProperty("body", nColIdx, "text", "bind:" + sCol);
        		this.grd_list01.setFormatColProperty(nColIdx, "size", 120);

        		this.grd_list01.setRealRowSize(-1, 30);
        		/* Grid Formats 생성 - End   */

        		// Grid Cell Focus 처리
        		this.grd_list01.setFocus();
        		this.ds_list01.set_rowposition(0);
        	}
        	else
        	{
        		// 멀티
        		// Grid Formats 초기화
        		this.grd_list02.setFormat("");
        		this.ds_list02.clearData();

        		/* Grid Formats 생성 - Start */
        		var nColIdx = 0;
        		var nCellCnt = this.grd_list02.getCellCount("Head");
        		var sCol;
        		var objColumnInfo;
        		var i, j;
        		var sColData;
        		var nRowCnt2;

        		if (nCellCnt == 0) {
        			this.grd_list02.appendContentsRow("head");
        			this.grd_list02.appendContentsRow("body");
        		}

        		var nRowCnt1 = this.ds_grid.rowcount;

        		for (i = 0; i < this.fv_sTextVal.length; i++)
        		{
        			if (nColIdx == i) {
        			} else {
        				this.grd_list02.appendContentsCol();
        				nColIdx += 1;
        			}

        			objColumnInfo = this.ds_grid.getColumnInfo(this.fv_sTextVal[i]);

        			this.ds_list02.addColumn(this.fv_sTextVal[i], objColumnInfo.type, objColumnInfo.size);

        			for (j = 0; j < nRowCnt1; j++)
        			{
        				sColData = this.ds_grid.getColumn(j, this.fv_sTextVal[i]);
        				nRowCnt2 = this.ds_list02.rowcount;

        				if (i == 0) {
        					this.ds_list02.addRow();
        				}

        				this.ds_list02.setColumn(j, this.fv_sTextVal[i], sColData);
        			}

        			this.grd_list02.setCellProperty("head", nColIdx, "text", this.fv_sTextVal[i]);
        			this.grd_list02.setCellProperty("body", nColIdx, "text", "bind:" + this.fv_sTextVal[i]);
        			this.grd_list02.setFormatColProperty(nColIdx, "size", 120);
        		}

        		this.grd_list02.setRealRowSize(-1, 30);
        		/* Grid Formats 생성 - End   */

        		// Grid Cell Focus 처리
        		this.grd_list02.setFocus();
        		this.ds_list02.set_rowposition(0);
        	}

        	this.fn_DragImgClear();
        };

        /************************************************************************************************
         * Function Name: grd_multiColumn_onheadclick
         * Description  : Grid onheadclick
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.grd_multiColumn_onheadclick = function (obj, e)
        {
        	// 전체선택, 전체해제 처리
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
        };

        /************************************************************************************************
         * Function Name: grd_multiColumn_oncellclick
         * Description  : Grid oncellclick
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.grd_multiColumn_oncellclick = function(obj,e)
        {
        	var sColId = this.ds_multicolumn.getColID(e.col);
        	var sColDeleteId;
        	var sChkFlag;
        	var nRowPos;
        	var nColDeleteIdx;

        	if (sColId == "chk")
        	{
        		nRowPos = this.ds_multicolumn.rowposition;
        		sChkFlag = this.ds_multicolumn.getColumn(nRowPos, sColId);
        		sColDeleteId = this.ds_multicolumn.getColumn(nRowPos, "column");

        		if (sChkFlag == 0) {
        			nColDeleteIdx = this.ds_list02.getColIndex(sColDeleteId);
        			this.ds_list02.deleteColumn(sColDeleteId);
        			this.grd_list02.deleteContentsCol("left", nColDeleteIdx);
        		}
        	}
        };

        /************************************************************************************************
         * Function Name: ds_multicolumn_oncolumnchanged
         * Description  : Dataset oncolumnchanged
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.ds_multicolumn_oncolumnchanged = function (obj, e)
        {
        	var nCnt = 0;
        	var sChkVal = "";
        	var i;
        	this.fv_sTextVal = [];

        	for (i = 0; i < obj.rowcount; i++)
        	{
        		sChkVal = obj.getColumn(i, "chk");

        		if (sChkVal == 1) {
        			this.fv_sTextVal[nCnt] = obj.getColumn(i, "column");
        			nCnt += 1;
        		}
        	}
        };

        /************************************************************************************************
         * Function Name: fn_DragImgClear
         * Description  : Drag Image 정보 Clear
         * Arguments    :
         * Return       :
         *************************************************************************************************/
        this.fn_DragImgClear = function ()
        {
        	this.stDragImg.set_visible(false);
        	this.stDragImg.filePath = "";
        	this.stDragImg.fileName = "";
        };

        /************************************************************************************************
         * Function Name: fn_BlockChk
         * Description  : Grid Check Column 전체선택 처리
         * Arguments    : objGrid – 해당 Grid
         * Return       :
         *************************************************************************************************/
        this.fn_BlockChk = function (objGrid)
        {
        	var objDs = objGrid.getBindDataset();
        	var nCnt = 0;
        	var i;

        	for (i = 0; i < objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "chk", "1");
        	}

        	objGrid.setCellProperty("Head", 0, "text", "1");
        };

        /************************************************************************************************
         * Function Name: fn_BlockUnChk
         * Description  : Grid Check Column 전체해제 처리
         * Arguments    : objGrid – 해당 Grid
         * Return       :
         *************************************************************************************************/
        this.fn_BlockUnChk = function (objGrid)
        {
        	var objDs = objGrid.getBindDataset();
        	var i;

        	for (i = 0; i < objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "chk", 0);
        	}

        	objGrid.setCellProperty("Head", 0, "text", "0");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Dynamic_onload,this);
            this.addEventHandler("ondragmove",this.Dynamic_ondragmove,this);
            this.addEventHandler("ondrop",this.Dynamic_ondrop,this);
            this.addEventHandler("onkeydown",this.Dynamic_onkeydown,this);
            this.grd_list02.addEventHandler("ondrop",this.fn_ondrop,this);
            this.grd_list01.addEventHandler("ondrop",this.fn_ondrop,this);
            this.grd_list01Fake.addEventHandler("ondrop",this.fn_ondrop,this);
            this.grd_column.addEventHandler("ondrag",this.fn_ondrag,this);
            this.grd_multiColumn.addEventHandler("ondrag",this.fn_ondrag,this);
            this.grd_multiColumn.addEventHandler("onheadclick",this.grd_multiColumn_onheadclick,this);
            this.grd_multiColumn.addEventHandler("oncellclick",this.grd_multiColumn_oncellclick,this);
            this.btn_init02.addEventHandler("onclick",this.fn_comBtn,this);
            this.btn_init01.addEventHandler("onclick",this.fn_comBtn,this);
            this.ds_multicolumn.addEventHandler("oncolumnchanged",this.ds_multicolumn_oncolumnchanged,this);
        };

        this.loadIncludeScript("Dynamic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();