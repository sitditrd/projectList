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
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"사업부\" type=\"STRING\" size=\"256\"/><Column id=\"사원\" type=\"STRING\" size=\"256\"/><Column id=\"교재명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/><Column id=\"단가\" type=\"INT\" size=\"256\"/><Column id=\"총액\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">강남길</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">37</Col><Col id=\"단가\">22000</Col><Col id=\"총액\">814000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">강남길</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">2</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">66000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">강남길</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">3</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">99000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김길동</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">300000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김길동</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">2</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">68000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김길동</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">14000</Col><Col id=\"총액\">420000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김재동</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">575000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김재동</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">575000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">김재동</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">575000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">1</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">23000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">3</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">69000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">4</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">92000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">9</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">207000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">박수용</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">23</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">529000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">300000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이수진</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1485000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이순신</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">66</Col><Col id=\"단가\">5000</Col><Col id=\"총액\">330000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">이순신</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">55</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">825000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">조승우</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">120</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">3240000</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"사원\">조승우</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">19</Col><Col id=\"단가\">400000</Col><Col id=\"총액\">7600000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">강민규</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">22000</Col><Col id=\"총액\">440000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">강민규</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">10</Col><Col id=\"단가\">14000</Col><Col id=\"총액\">140000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김영길</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">680000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김인하</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">14000</Col><Col id=\"총액\">1400000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김인하</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1360000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김종오</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">13000</Col><Col id=\"총액\">520000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김종오</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김진석</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김진석</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">김진석</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박수진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">77</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">2618000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">77</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">2618000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박운석</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">박운석</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">35</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1155000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">안재원</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">안재원</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">안재원</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">12</Col><Col id=\"단가\">60000</Col><Col id=\"총액\">720000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">이수영</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">이수영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1122000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">이수영</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">80</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">2640000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">장강훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">22000</Col><Col id=\"총액\">440000</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">조승우</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">3444</Col><Col id=\"총액\">117096</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"사원\">황명희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">460000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">김호연</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">민병철</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">340</Col><Col id=\"단가\">24000</Col><Col id=\"총액\">8160000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이금형</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">3300000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이나영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">38</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1254000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이승헌</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">4500000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이승헌</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1287000</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"사원\">이승헌</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">25</Col><Col id=\"단가\">13500</Col><Col id=\"총액\">337500</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">김기수</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">35</Col><Col id=\"단가\">35000</Col><Col id=\"총액\">1225000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">송인용</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">신태영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">이기자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1600000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">지진희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1122000</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"사원\">지진희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1122000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">김정훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">390000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">김정훈</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">810000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이동범</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">1000</Col><Col id=\"총액\">100000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이동범</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이창진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">135000</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"사원\">이창진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">50</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">750000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">김이규</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">75</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1875000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">김이규</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이광섭</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">36</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">900000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이광섭</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">56</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1848000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이종훈</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"사원\">이종훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">1035000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">강상진</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">문정주</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">90</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">문정주</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">900000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">박인식</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">690000</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"사원\">박인식</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">690000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">고선경</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">540000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">고선경</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">80</Col><Col id=\"단가\">30000</Col><Col id=\"총액\">2400000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김기원</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">540000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김기원</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">80</Col><Col id=\"단가\">30000</Col><Col id=\"총액\">2400000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김홍철</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">60</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1980000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">김홍철</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">230</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">7590000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">우온식</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">임진경</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">36</Col><Col id=\"단가\">1000</Col><Col id=\"총액\">36000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">임진경</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">36</Col><Col id=\"단가\">1000</Col><Col id=\"총액\">36000</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"사원\">황인수</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">강인중</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">2000000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">강인중</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">20000</Col><Col id=\"총액\">2000000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">목진철</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">4000</Col><Col id=\"총액\">120000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">목진철</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">50</Col><Col id=\"단가\">4900</Col><Col id=\"총액\">245000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">박제준</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">박제준</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">90</Col><Col id=\"단가\">15000</Col><Col id=\"총액\">1350000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">750000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">60</Col><Col id=\"단가\">66000</Col><Col id=\"총액\">3960000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">안영희</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">60</Col><Col id=\"단가\">66000</Col><Col id=\"총액\">3960000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">이미숙</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">이미숙</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">이미숙</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">990000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">임수근</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">임수근</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"사원\">임수근</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1530000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">곽희정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">곽희정</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">곽희정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">1800000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">권미자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">권미자</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">5000</Col><Col id=\"총액\">100000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">200</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">200</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">5000</Col><Col id=\"총액\">100000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길자</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김길자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">1215000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김홍길</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">70</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">2310000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">김홍길</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">660000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">박수인</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">박수인</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">40000</Col><Col id=\"총액\">1600000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">배인덕</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">29000</Col><Col id=\"총액\">986000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">배인덕</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">29000</Col><Col id=\"총액\">986000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">심영수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"사원\">심영수</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">15800</Col><Col id=\"총액\">1580000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">방수진</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">810000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">방수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">27000</Col><Col id=\"총액\">810000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">유영락</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">400000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">유영락</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">50</Col><Col id=\"단가\">10000</Col><Col id=\"총액\">500000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">이미자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">60000</Col><Col id=\"총액\">2700000</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"사원\">이미자</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"단가\">50000</Col><Col id=\"총액\">1500000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김도준</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">135000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김도준</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">3000</Col><Col id=\"총액\">135000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김인현</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">김인현</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">782000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">56</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1848000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">1035000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">56</Col><Col id=\"단가\">33000</Col><Col id=\"총액\">1848000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">박인수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"단가\">23000</Col><Col id=\"총액\">1035000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이진영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">90</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">2250000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이진영</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">40</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1000000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이창희</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이창희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"단가\">34000</Col><Col id=\"총액\">1156000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이화룡</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">75</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1875000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">이화룡</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">75</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">1875000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">정인호</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">975000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">정인호</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"단가\">25000</Col><Col id=\"총액\">975000</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"사원\">최수정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"단가\">45000</Col><Col id=\"총액\">4500000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"column\">사업부</Col></Row><Row><Col id=\"column\">사원</Col></Row><Row><Col id=\"column\">교재명</Col></Row><Row><Col id=\"column\">수량</Col></Row><Row><Col id=\"column\">단가</Col></Row><Row><Col id=\"column\">총액</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMulticolumn", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"column\">사업부</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">사원</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">교재명</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">수량</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">단가</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"column\">총액</Col><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList02","137","477",null,"290","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsList02");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/></Rows><Band id=\"head\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","129","133",null,"216","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList01");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/></Rows><Band id=\"head\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stDragImg","830","46","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_grd_move");
            this.addChild(obj.name, obj);

            obj = new Grid("grdColumn","0","133","120","217",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsColumn");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_dynamic");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"column\"/></Band><Band id=\"body\"><Cell text=\"bind:column\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiColumn","0","477","120","217",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMulticolumn");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_dynamic");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"column\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:column\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","95","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("단건 처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","442","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("멀티 처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit02",null,"439","80","30","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit01",null,"96","80","30","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","0","0",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("그리드 컬럼을 동적으로 생성합니다.\r\n왼쪽의 카테고리를 오른쪽의 그리드로 drag&drop 할 경우 컬럼이 동적으로 생성되며, 단건/다건 처리가 가능합니다.");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
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
        this.registerScript("Dynamic.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    grid > Dynamic
        *  @FileName  Dynamic.xfdl
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
        this.fvTextVal = [];
        this.fvDropFlag;
        this.fvFormats1;
        this.fvFormats2;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description Form onload
        */
        this.Dynamic_onload = function (obj, e)
        {
        	this.fvFormats1 = this.grdList01.formats;
        	this.fvFormats2 = this.grdList02.formats;
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
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
           컴포넌트 영역에서 드래그 동작중인 마우스가 이동할 때 발생
         * @description Form ondragmove
        */
        this.Dynamic_ondragmove = function (obj, e)
        {
        	this.stDragImg.move(e.clientx + 15, e.clienty + 15);
        };

        /**
           컴포넌트 영역에 드래그한 컴포넌트를 내려 놓을 때 발생
         * @description Form ondrop
        */
        this.Dynamic_ondrop = function (obj, e)
        {
        	// Grid Drop이 아닐경우 처리
        	var objComp = e.fromobject;

        	if (objComp != "[object Grid]") {
        		this.fnDragImgClear();
        	}
        };

        /**
           컴포넌트 영역에 드래그한 컴포넌트를 내려 놓을 때 발생
         * @description Form ondrop
        */
        this.fnComBtnOnClick = function(obj, e)
        {
        	switch (obj.name)
        	{
        		case "btnInit01":
        			// 초기화
        			this.dropFlag = 0;
        			this.grdList01.set_formats(this.fvFormats1);
        			this.grdList01.set_nodatatext("데이터가 없습니다.");
        			this.dsList01.clearData();
        			break;
        		case "btnInit02":
        			// 초기화
        			this.grdList02.set_formats(this.fvFormats2);
        			this.grdList02.set_nodatatext("데이터가 없습니다.");
        			this.dsList02.clearData();
        			break;
        	}
        };

        /**
         * @description Grid ondrag
        */
        this.fnOndrag = function (obj, e)
        {
        	switch (obj.name)
        	{
        		case "grdColumn":
        			// 단일 Column 이동
        			// 헤더가 클릭되었을경우 빈 column이 생기는 오류 방지
        			if (e.row < 0) {
        				return;
        			}

        			this.fvDropFlag = "단일";
        			this.stDragImg.set_text(obj.getCellText(e.row, e.cell));
        			this.stDragImg.selcol = e.col;
        			this.stDragImg.set_visible(true);

        			e.userdata = obj.getCellProperty("body", e.cell, "text").toString().replace("bind:", "");

        			// Column Parsing 중복방지
        			var nCount = this.grdList01.getCellCount("Head");
        			var sCol = this.stDragImg.text;
        			var sProperty;
        			var j;

        			if (nCount > 0)
        			{
        				for (j = 0; j < nCount; j++)
        				{
        					sProperty = this.grdList01.getCellProperty("Head", j, "text");

        					if (sCol == sProperty) {
        						this.fnDragImgClear();
        						return;
        					}
        				}
        			}

        			return true;
        			break;
        		case "grdMultiColumn":
        			// 멀티 Column 이동
        			this.fvDropFlag = "멀티";

        			var sColId = this.dsMulticolumn.getColID(e.col);

        			if (sColId == "chk")
        			{
        				return;
        			}
        			else
        			{
        				var sChk;

        				// Check 된 데이터 없으면 Return
        				if (this.fvTextVal.length == 0 || this.fvTextVal == "") {
        					return;
        				}

        				var i;

        				for (i = 0; i < this.dsMulticolumn.rowcount; i++)
        				{
        					sChk = this.dsMulticolumn.getColumn(i, "chk");

        					if (sChk == 1) {
        						this.stDragImg.set_text(this.fvTextVal);
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

        /**
         * @description Grid ondrop
        */
        this.dropFlag = 0;

        this.fnOndrop = function (obj, e)
        {
        	if (this.fvDropFlag == "단일")
        	{
        		if (obj.name != "grdList01") {
        			this.fnDragImgClear();

        			return;
        		}

        		var nColIdx;
        		var nCellCnt;
        		var sCol;
        		var objColumnInfo;

        		var nRowCnt1 = this.dsGrid.rowcount;
        		var nRowCnt2 = this.dsList01.rowcount;

        		if (this.dropFlag == 1)
        		{
        			/* Grid Formats 생성 - Start */
        			this.grdList01.appendContentsCol();

        			nColIdx = this.grdList01.getFormatColCount();
        			nCellCnt = this.grdList01.getCellCount("Head");

        			if (nCellCnt == 0) {
        				// Cell Count가 0 이면, Head, Body Row 추가
        				this.grdList01.appendContentsRow("head");
        				this.grdList01.appendContentsRow("body");
        			}

        			if(nColIdx > 0) {
        				nColIdx -= 1;
        			}
        		}
        		else
        		{
        			this.grdList01.appendContentsRow("body");
        			nColIdx = 0;
        			this.dropFlag = 1;
        		}

        		sCol = this.stDragImg.text;

        		objColumnInfo = this.dsGrid.getColumnInfo(sCol);
        		this.dsList01.addColumn(sCol, objColumnInfo.type, objColumnInfo.size);

        		var i;
        		var sColData;

        		for (i = 0; i < nRowCnt1; i++)
        		{
        			sColData = this.dsGrid.getColumn(i, sCol);

        			if (nRowCnt2 == 0) {
        				this.dsList01.addRow();
        			}

        			this.dsList01.setColumn(i, sCol, sColData);
        		}

        		this.grdList01.setCellProperty("head", nColIdx, "text", sCol);
        		this.grdList01.setCellProperty("body", nColIdx, "text", "bind:" + sCol);
        		this.grdList01.setFormatColProperty(nColIdx, "size", 120);
        		/* Grid Formats 생성 - End   */

        		// Grid Cell Focus 처리
        		this.grdList01.setFocus();
        		this.dsList01.set_rowposition(0);
        	}
        	else
        	{
        		this.dropFlag = 0;
        		// 멀티
        		if (obj.name != "grdList02") {
        			this.fnDragImgClear();

        			return;
        		}

        		// Grid Formats 초기화
        		this.grdList02.setFormat("");
        		this.dsList02.clearData();

        		/* Grid Formats 생성 - Start */
        		var nColIdx = 0;
        		var nCellCnt = this.grdList02.getCellCount("Head");
        		var sCol;
        		var objColumnInfo;

        		if (nCellCnt == 0) {
        			this.grdList02.appendContentsRow("head");
        			this.grdList02.appendContentsRow("body");
        		}

        		var nRowCnt1 = this.dsGrid.rowcount;
        		var i, j;

        		for (i = 0; i < this.fvTextVal.length; i++)
        		{
        			if (nColIdx == i) {

        			} else {
        				this.grdList02.appendContentsCol();
        				nColIdx += 1;
        			}

        			objColumnInfo = this.dsGrid.getColumnInfo(this.fvTextVal[i]);

        			this.dsList02.addColumn(this.fvTextVal[i], objColumnInfo.type, objColumnInfo.size);

        			for (j = 0; j < nRowCnt1; j++)
        			{
        				var sColData = this.dsGrid.getColumn(j, this.fvTextVal[i]);
        				var nRowCnt2 = this.dsList02.rowcount;

        				if (i == 0) {
        					this.dsList02.addRow();
        				}

        				this.dsList02.setColumn(j, this.fvTextVal[i], sColData);
        			}

        			this.grdList02.setCellProperty("head", nColIdx, "text", this.fvTextVal[i]);
        			this.grdList02.setCellProperty("body", nColIdx, "text", "bind:" + this.fvTextVal[i]);
        			this.grdList02.setFormatColProperty(nColIdx, "size", 120);
        		}

        		this.grdList02.setRealRowSize(-1, 30);
        		/* Grid Formats 생성 - End   */

        		// Grid Cell Focus 처리
        		this.grdList02.setFocus();
        		this.dsList02.set_rowposition(0);
        	}

        	this.fnDragImgClear();
        };

        /**
         * @description Grid onheadclick
        */
        this.grdMultiColumn_onheadclick = function (obj, e)
        {
        	// 전체선택, 전체해제 처리
        	if (e.col == 0)
        	{
        		if (this.chkFlag == "1") {
        			this.fnBlockUnChk(obj);
        			this.chkFlag = "0";
        		} else {
        			this.fnBlockChk(obj);
        			this.chkFlag = "1";
        		}
        	}
        };

        /**
         * @description  Dataset oncolumnchanged
        */
        this.dsMulticolumn_oncolumnchanged = function (obj, e)
        {
        	var nCnt = 0;
        	var sChkVal = "";
        	var i;

        	this.fvTextVal = [];

        	for (i = 0; i < obj.rowcount; i++)
        	{
        		sChkVal = obj.getColumn(i, "chk");

        		if (sChkVal == 1) {
        			this.fvTextVal[nCnt] = obj.getColumn(i, "column");
        			nCnt += 1;
        		}
        	}
        };

        /**
         * @description Drag Image 정보 Clear
        */
        this.fnDragImgClear = function ()
        {
        	this.stDragImg.set_visible(false);
        	this.stDragImg.filePath = "";
        	this.stDragImg.fileName = "";
        };

        /**
         * @description Grid Check Column 전체선택 처리
        */
        this.fnBlockChk = function (objGrid)
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

        /**
         * @description Grid Check Column 전체해제 처리
        */
        this.fnBlockUnChk = function (objGrid)
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
            this.grdList02.addEventHandler("ondrop",this.fnOndrop,this);
            this.grdList01.addEventHandler("ondrop",this.fnOndrop,this);
            this.grdColumn.addEventHandler("ondrag",this.fnOndrag,this);
            this.grdMultiColumn.addEventHandler("ondrag",this.fnOndrag,this);
            this.grdMultiColumn.addEventHandler("onheadclick",this.grdMultiColumn_onheadclick,this);
            this.btnInit02.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnInit01.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.dsMulticolumn.addEventHandler("oncolumnchanged",this.dsMulticolumn_oncolumnchanged,this);
        };

        this.loadIncludeScript("Dynamic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
