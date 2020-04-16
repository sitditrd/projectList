(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CategoryGrid");
            this.set_titletext("카테고리 그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"pro_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_nm\" type=\"STRING\" size=\"256\"/><Column id=\"list_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_amt\" type=\"INT\" size=\"256\"/><Column id=\"price\" type=\"INT\" size=\"256\"/><Column id=\"sal_sum\" type=\"INT\" size=\"256\"/><Column id=\"list_date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">37</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">814000</Col><Col id=\"list_date\">20031213</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">2</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">66000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">3</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">99000</Col><Col id=\"list_date\">20031213</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">300000</Col><Col id=\"list_date\">20050622</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">2</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">68000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">420000</Col><Col id=\"list_date\">20050608</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">1</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">23000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">3</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">69000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">4</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">92000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">9</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">207000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">23</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">529000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">300000</Col><Col id=\"list_date\">20050713</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이수진</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1485000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이순신</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">66</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">330000</Col><Col id=\"list_date\">20050518</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이순신</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">55</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">825000</Col><Col id=\"list_date\">20050705</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">120</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">3240000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">19</Col><Col id=\"price\">400000</Col><Col id=\"sal_sum\">7600000</Col><Col id=\"list_date\">20031016</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">강민규</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">440000</Col><Col id=\"list_date\">20031212</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">강민규</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">10</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">140000</Col><Col id=\"list_date\">20050705</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김영길</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">680000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">1400000</Col><Col id=\"list_date\">20050622</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1360000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김종오</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">13000</Col><Col id=\"sal_sum\">520000</Col><Col id=\"list_date\">20050628</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김종오</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20031224</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박수진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">77</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">2618000</Col><Col id=\"list_date\">20031117</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">77</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">2618000</Col><Col id=\"list_date\">20031117</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박운석</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박운석</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">35</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1155000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20030815</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">12</Col><Col id=\"price\">60000</Col><Col id=\"sal_sum\">720000</Col><Col id=\"list_date\">20030916</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">80</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">2640000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">장강훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">440000</Col><Col id=\"list_date\">20031212</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">3444</Col><Col id=\"sal_sum\">117096</Col><Col id=\"list_date\">20050610</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">황명희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">460000</Col><Col id=\"list_date\">20031205</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">김호연</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031203</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">민병철</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">340</Col><Col id=\"price\">24000</Col><Col id=\"sal_sum\">8160000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이금형</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">3300000</Col><Col id=\"list_date\">20031112</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이나영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">38</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1254000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">4500000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1287000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">25</Col><Col id=\"price\">13500</Col><Col id=\"sal_sum\">337500</Col><Col id=\"list_date\">20050706</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">김기수</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">35</Col><Col id=\"price\">35000</Col><Col id=\"sal_sum\">1225000</Col><Col id=\"list_date\">20031202</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">송인용</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">신태영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20040204</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">이기자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col><Col id=\"list_date\">20031204</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">지진희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col><Col id=\"list_date\">20030918</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">지진희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col><Col id=\"list_date\">20030918</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">김정훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">390000</Col><Col id=\"list_date\">20040210</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">김정훈</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이동범</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">100000</Col><Col id=\"list_date\">20040501</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이동범</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이창진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col><Col id=\"list_date\">20040408</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이창진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">50</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">750000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">김이규</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">김이규</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031002</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이광섭</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">36</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">900000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이광섭</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이종훈</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20040824</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이종훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20050504</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031016</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20050504</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031016</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">문정주</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">90</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030702</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">문정주</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">900000</Col><Col id=\"list_date\">20030702</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">박인식</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">690000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">박인식</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">690000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">고선경</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">540000</Col><Col id=\"list_date\">20030806</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">고선경</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">80</Col><Col id=\"price\">30000</Col><Col id=\"sal_sum\">2400000</Col><Col id=\"list_date\">20030925</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김기원</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">540000</Col><Col id=\"list_date\">20030806</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김기원</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">80</Col><Col id=\"price\">30000</Col><Col id=\"sal_sum\">2400000</Col><Col id=\"list_date\">20030925</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김홍철</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">60</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1980000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김홍철</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">230</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">7590000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">우온식</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">임진경</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">36</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">36000</Col><Col id=\"list_date\">20030804</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">임진경</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">36</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">36000</Col><Col id=\"list_date\">20030804</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">황인수</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">강인중</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">2000000</Col><Col id=\"list_date\">20040128</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">강인중</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">2000000</Col><Col id=\"list_date\">20040128</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">목진철</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">4000</Col><Col id=\"sal_sum\">120000</Col><Col id=\"list_date\">20040212</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">목진철</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">50</Col><Col id=\"price\">4900</Col><Col id=\"sal_sum\">245000</Col><Col id=\"list_date\">20040212</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">박제준</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">박제준</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">90</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">1350000</Col><Col id=\"list_date\">20031121</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">750000</Col><Col id=\"list_date\">20031121</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">60</Col><Col id=\"price\">66000</Col><Col id=\"sal_sum\">3960000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">60</Col><Col id=\"price\">66000</Col><Col id=\"sal_sum\">3960000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030801</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030801</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030801</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">권미자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">권미자</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">100000</Col><Col id=\"list_date\">20050706</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">200</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">600000</Col><Col id=\"list_date\">20030711</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">200</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">600000</Col><Col id=\"list_date\">20030711</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">100000</Col><Col id=\"list_date\">20050706</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길자</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031007</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031007</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김홍길</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">70</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">2310000</Col><Col id=\"list_date\">20031023</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김홍길</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">20</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">660000</Col><Col id=\"list_date\">20031023</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">박수인</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">박수인</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">배인덕</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">29000</Col><Col id=\"sal_sum\">986000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">배인덕</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">29000</Col><Col id=\"sal_sum\">986000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">심영수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20040501</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">심영수</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">15800</Col><Col id=\"sal_sum\">1580000</Col><Col id=\"list_date\">20040501</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">방수진</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">방수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">유영락</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">400000</Col><Col id=\"list_date\">20040210</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">유영락</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">50</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">500000</Col><Col id=\"list_date\">20040210</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">이미자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">60000</Col><Col id=\"sal_sum\">2700000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">이미자</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">30</Col><Col id=\"price\">50000</Col><Col id=\"sal_sum\">1500000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김도준</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col><Col id=\"list_date\">20040408</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김도준</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col><Col id=\"list_date\">20040408</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김인현</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20040824</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김인현</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20040824</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이진영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">90</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">2250000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이진영</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_amt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이창희</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031002</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이창희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031002</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이화룡</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_amt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이화룡</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">정인호</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">975000</Col><Col id=\"list_date\">20040207</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">정인호</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_amt\">39</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">975000</Col><Col id=\"list_date\">20040207</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">최수정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_amt\">100</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">4500000</Col><Col id=\"list_date\">20040519</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCategory","8","132",null,"53","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_border("2px solid orange");
            obj.set_background("linear-gradient(to right bottom,#ffffff 0%,#f1f1f1 100%)");
            obj.set_boxShadow("0px 0px 0px #ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","50",null,"0","0",null,null,null,null,this.divCategory.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("btn_WF_search01");
            this.divCategory.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","193",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"사업부\"/><Cell col=\"2\" text=\"사원\"/><Cell col=\"3\" text=\"교재명\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"총액\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"expr:dataset.parent.fn_setSubSumText(currow)\" treelevel=\"expr:dataset.parent.fv_arrGroupId.length&gt;0?dataset.parent.fv_arrGroupId.length-dataset.getRowLevel(currow):&quot;&quot;\"/><Cell col=\"1\" text=\"bind:pro_id\" font=\"9pt null\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:sal_nm\" font=\"9pt null\"/><Cell col=\"3\" text=\"bind:list_id\" font=\"9pt null\"/><Cell col=\"4\" text=\"bind:sal_amt\" textAlign=\"right\" font=\"9pt null\"/><Cell col=\"5\" text=\"bind:price\" textAlign=\"right\" font=\"9pt null\"/><Cell col=\"6\" text=\"bind:sal_sum\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stDragImg","77","742","114","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("lightgray");
            obj.set_border("2px dotted #808080");
            this.addChild(obj.name, obj);

            obj = new Static("stDragImg2","77","774","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("lightgray");
            obj.set_border("2px dotted #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","8","50",null,"71","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("  Grid에 있는 데이터 정보를 가시성 있게 보여질 수 있도록 구현한 것이며\r\n  Drag&Drop으로 배치할 수 있으며, 이때 데이터가 그룹핑되어 트리구조로 보이게 됩니다.");
            obj.set_cssclass("sta_TF_bg");
            obj.set_wordWrap("char");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","421","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("카테고리그리드");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CategoryGrid.xfdl", function() {
        this.fv_arrGroupId = [];
        this.fv_width = 50;
        this.fn_DragType;

        this.CategoryGrid_onload = function(obj,e)
        {
        };

        this.CategoryGrid_ondragmove = function(obj,e)
        {
        	this.stDragImg.move(e.clientx + 15, e.clienty + 15);
        	this.stDragImg2.move(e.clientx + 15, e.clienty + 15);
        };

        this.CategoryGrid_ondrop = function(obj,e)
        {
        	if (this.fn_DragType == "TREE")
        	{
        		var sGroupId = "";
        		var i;
        		var nCell;

        		this.Grid00.set_visible(false);

        		for (i = 0; i < this.fv_arrGroupId.length; i++)
        		{
        			sGroupId += "," + this.fv_arrGroupId[i];
        		}

        		sGroupId = sGroupId.replace("," + e.userdata, "");
        		sGroupId = sGroupId.substr(1);

        		this.fv_arrGroupId = [];

        		if (sGroupId.length != 0) this.fv_arrGroupId = sGroupId.split(",");

        		nCell = this.Grid00.getBindCellIndex("body", e.userdata);
        		this.Grid00.setFormatColProperty(nCell, "size", 120);

        		this.fn_setGroup();

        		this.fn_setTree();
        		this.Grid00.set_visible(true);
        	}

        	this.fn_DragImgClear();
        };

        this.divCategory_ondrop = function(obj,e)
        {
        	if (this.fn_DragType == "TREE")	return;

        	this.Grid00.setFormatColProperty(this.stDragImg.selcol, "size", 0);

        	this.fv_arrGroupId[this.fv_arrGroupId.length] = e.userdata;

        	this.fn_setGroup();
        	this.fn_setTree();

        	this.fn_DragImgClear();
        };

        this.Grid00_ondrag = function(obj,e)
        {
        	this.fn_DragType = "GRID";

        	if (e.row == -1) {
        		this.stDragImg.set_text(obj.getCellText(e.row, e.cell));
        		this.stDragImg.selcol = e.col;
        		this.stDragImg.set_visible(true);

        		e.userdata = obj.getCellProperty("body", e.cell, "text").toString().replace("bind:", "");

        		return true;
        	}
        };

        this.fn_setGroup = function()
        {
        	var sKeyString = "G:";
        	var i;

        	if (this.fv_arrGroupId.length == 0)
        	{
        		this.ds_grid.set_keystring("");
        	}
        	else
        	{
        		for (i = 0; i < this.fv_arrGroupId.length; i++)
        		{
        			if (i == 0)	{
        				sKeyString += this.fv_arrGroupId[i];
        			} else {
        				sKeyString += "," + this.fv_arrGroupId[i];
        			}
        		}

        		this.ds_grid.set_keystring(sKeyString);

        		this.Grid00.setFormatColProperty(0, "size", 150);
        	}
        };

        this.fn_setTree = function()
        {
        	var i = 0;
        	var objStatic;
        	var objLine;
        	var nCell;
        	var nLeft, nTop;
        	var objRmv;
        	var rtn;

        	for (i = this.divCategory.form.components.length - 1; i >= 0; i--)
        	{
        		this.divCategory.form.components[i].set_visible(false);
        	}

        	if (this.fv_arrGroupId.length == 0) {
        		this.Grid00.setFormatColProperty(0, "size", 0);
        		return;
        	}

        	for (i = 0; i < this.fv_arrGroupId.length; i++)
        	{
        		nLeft = 10 + i * (this.fv_width + 10);
        		nTop = 10;

        		if (Eco.isEmpty(this.divCategory.form.components["stGroup" + i]))
        		{
        			objStatic = new Div("stGroup" + i, nLeft, nTop, this.fv_width, 24);
        			this.divCategory.addChild(objStatic.name, objStatic);

        			nCell = this.Grid00.getBindCellIndex("body", this.fv_arrGroupId[i]);

        			objStatic.set_text(this.Grid00.getCellProperty("head", nCell, "text"));
        			objStatic.groupid = this.fv_arrGroupId[i];

        			objStatic.set_textAlign("center");
        			objStatic.set_background("#66a0ff");
        			objStatic.set_border("1 solid #f95d43ff ");
        			objStatic.set_borderRadius("2px");
        			objStatic.set_color("#ffffff");
        			objStatic.set_cursor("hand");
        			objStatic.set_font("bold 9 Malgun Gothic");
        			objStatic.set_padding("0 0 2 0");

        			objStatic.addEventHandler("ondrag", this.fn_TreeDrag, this);
        			objStatic.addEventHandler("ondrop", this.fn_TreeDrop, this);
        			objStatic.show();
        		}
        		else
        		{
        			nCell = this.Grid00.getBindCellIndex("body", this.fv_arrGroupId[i]);
        			this.divCategory.form.components["stGroup" + i].move(nLeft, nTop);
        			this.divCategory.form.components["stGroup" + i].set_text(this.Grid00.getCellProperty("head", nCell, "text"));
        			this.divCategory.form.components["stGroup" + i].groupid = this.fv_arrGroupId[i];
        			this.divCategory.form.components["stGroup" + i].set_visible(true);
        		}
        	}

        	this.divCategory.form.resetScroll();
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
        	if (this.fn_DragType != "GRID" && e.userdata != obj.groupid)
        	{
        		var sGroupId = "";
        		var i;

        		for (i = 0; i < this.fv_arrGroupId.length; i++)
        		{
        			sGroupId += "," + this.fv_arrGroupId[i];
        		}

        		if (sGroupId.indexOf("," + e.userdata + "," + obj.groupid) > -1) {
        			sGroupId = sGroupId.replace("," + e.userdata + "," + obj.groupid, "," + obj.groupid + "," + e.userdata);
        		} else {
        			sGroupId = sGroupId.replace("," + e.userdata, "");
        			sGroupId = sGroupId.replace("," + obj.groupid, "," + e.userdata + "," + obj.groupid);
        		}

        		sGroupId = sGroupId.substr(1);
        		this.fv_arrGroupId = sGroupId.split(",");

        		this.fn_setGroup();
        		this.fn_setTree();
        		this.fn_DragImgClear();

        		return true;
        	}
        };

        this.fn_setSubSumText = function(nRow)
        {
        	var nLevel = this.ds_grid.getRowLevel(nRow);

        	if (nLevel == 0) return "";

        	return this.ds_grid.getColumn(nRow + nLevel, this.fv_arrGroupId[this.fv_arrGroupId.length - (nLevel)]) + "(" + this.Grid00.getTreeChildCount(nRow) + ")";
        };

        this.fn_DragImgClear = function()
        {
        	this.stDragImg.set_visible(false);
        	this.stDragImg.filePath = "";
        	this.stDragImg.fileName = "";
        	this.stDragImg2.set_visible(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CategoryGrid_onload,this);
            this.addEventHandler("ondragmove",this.CategoryGrid_ondragmove,this);
            this.addEventHandler("ondrop",this.CategoryGrid_ondrop,this);
            this.divCategory.addEventHandler("ondrop",this.divCategory_ondrop,this);
            this.divCategory.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("ondrag",this.Grid00_ondrag,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
        };

        this.loadIncludeScript("CategoryGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
