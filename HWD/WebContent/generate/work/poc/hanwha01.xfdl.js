(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hanwha01");
            this.set_titletext("New Form");
            this.set_scrollbartype("autoindicator autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"담보군\" type=\"STRING\" size=\"256\"/><Column id=\"선택\" type=\"STRING\" size=\"256\"/><Column id=\"중복\" type=\"STRING\" size=\"256\"/><Column id=\"담보명\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"보험기간\" type=\"STRING\" size=\"256\"/><Column id=\"납입기간\" type=\"STRING\" size=\"256\"/><Column id=\"가입금액\" type=\"STRING\" size=\"256\"/><Column id=\"보험료\" type=\"STRING\" size=\"256\"/><Column id=\"스코어\" type=\"STRING\" size=\"256\"/><Column id=\"기준\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"담보군\">사망/후유장애</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">보통약관(상해사망)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">119</Col><Col id=\"스코어\">53.90</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">상해사망(갱신형)</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">45</Col><Col id=\"스코어\">53.90</Col></Row><Row><Col id=\"담보군\">사망/후유장애</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">상해사망(연만기)</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">48</Col><Col id=\"스코어\">53.90</Col><Col id=\"보험기간\">20년만기</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">상해사망추가</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">113</Col><Col id=\"스코어\">53.90</Col><Col id=\"기준\"/><Col id=\"담보군\">사망/후유장애</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">교통상해사망</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"중복\">+</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">48</Col><Col id=\"스코어\">53.90</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">상해80%이상후유장해(1804)</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">20</Col><Col id=\"스코어\">42.44</Col><Col id=\"기준\"/><Col id=\"담보군\">사망/후유장애</Col><Col id=\"중복\">+</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">상해50%이상후유장해(1804)</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"중복\">+</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">42</Col><Col id=\"스코어\">42.44</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">상해후유장해(3-100%)(1804)</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"중복\">+</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">109</Col><Col id=\"스코어\">73.52</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">질병사망</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"중복\">+</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">888</Col><Col id=\"스코어\">76.67</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">질병사망(갱신형)</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">42</Col><Col id=\"스코어\">76.67</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">질병사망(연만기)</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"보험기간\">20년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">105</Col><Col id=\"스코어\">76.67</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">질병80%이상후유장해(1804)</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">345</Col><Col id=\"스코어\">175.77</Col><Col id=\"기준\"/><Col id=\"담보군\">사망/후유장애</Col><Col id=\"중복\">+</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">질병후유장해(3-100%)(1804)</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"중복\">+</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">3,790</Col><Col id=\"스코어\">57.07</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">질병후유장해(3-100%)(1804)(갱신형)</Col><Col id=\"담보군\">사망/후유장애</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">10</Col><Col id=\"스코어\">57.07</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">암(4대유사암제외)진단비</Col><Col id=\"담보군\">진단/수술</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,712</Col><Col id=\"스코어\">79.39</Col><Col id=\"기준\"/><Col id=\"중복\">+</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">암(4대유사암제외)진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">75</Col><Col id=\"스코어\">79.39</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">4대유사암진단비(기타피부암)</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">60</Col><Col id=\"스코어\">146.04</Col><Col id=\"기준\"/><Col id=\"담보군\">진단/수술</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">4대유사암진단비(갑상선암)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">33</Col><Col id=\"스코어\">146.04</Col><Col id=\"기준\"/><Col id=\"담보군\">진단/수술</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보명\">4대유사암진단비(제자리암)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">33</Col><Col id=\"스코어\">146.04</Col><Col id=\"기준\"/><Col id=\"담보군\">진단/수술</Col></Row><Row><Col id=\"담보명\">4대유사암진단비(경계성종양)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">84</Col><Col id=\"스코어\">146.04</Col><Col id=\"기준\"/><Col id=\"선택\">1</Col><Col id=\"담보군\">진단/수술</Col></Row><Row><Col id=\"담보명\">4대유사암진단비(기타피부암)(갱신형)</Col><Col id=\"선택\">1</Col><Col id=\"담보군\">진단/수술</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">2</Col><Col id=\"스코어\">146.04</Col></Row><Row><Col id=\"담보명\">4대유사암진단비(갑상선암)(갱신형)</Col><Col id=\"선택\">1</Col><Col id=\"담보군\">진단/수술</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">13</Col><Col id=\"스코어\">146.04</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보군\">진단/수술</Col><Col id=\"담보명\">4대유사암진단비(제자리암)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1</Col><Col id=\"스코어\">146.04</Col></Row><Row><Col id=\"선택\">1</Col><Col id=\"담보군\">진단/수술</Col><Col id=\"담보명\">4대유사암진단비(경계성종양)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">9</Col><Col id=\"스코어\">146.04</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">암(특정소액암및4대유사암제외)진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,550</Col><Col id=\"스코어\">62.75</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">암(특정소액암및4대유사암제외)진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">76</Col><Col id=\"스코어\">62.75</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">10대고액치료비암진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">845</Col><Col id=\"스코어\">74.09</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">10대고액치료비암진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">31</Col><Col id=\"스코어\">74.09</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">5대고액치료비암진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">271</Col><Col id=\"스코어\">74.09</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">계속암(재진단암)진단비Ⅱ</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">2,335</Col><Col id=\"스코어\">24.83</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">계속암(재진단암)진단비Ⅱ(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">30</Col><Col id=\"스코어\">3.31</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">소화기관암진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,067</Col><Col id=\"스코어\">98.02</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">호흡기관암진단비(호흡기 및 흉곽내기관)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">418</Col><Col id=\"스코어\">98.02</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">남성생식기관암진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">312</Col><Col id=\"스코어\">102.74</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">비뇨기관암(요로암)진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">150</Col><Col id=\"스코어\">102.74</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">소화기관암진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">31</Col><Col id=\"스코어\">98.02</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">호흡기관암진단비(호흡기 및 흉곽내기관)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">4</Col><Col id=\"스코어\">98.02</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">남성생식기관암진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">2</Col><Col id=\"스코어\">102.74</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">비뇨기관암(요로암)진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">10</Col><Col id=\"스코어\">102.74</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">암수술비Ⅱ</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">220</Col><Col id=\"스코어\">67.97</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">암수술비Ⅱ(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">9</Col><Col id=\"스코어\">67.97</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">암(4대유사암제외)수술비(1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">130</Col><Col id=\"스코어\">59.93</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">암(4대유사암제외)수술비(1회한)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">7</Col><Col id=\"스코어\">59.93</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌혈관질환진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,755</Col><Col id=\"스코어\">95.33</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">뇌혈관질환진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">45</Col><Col id=\"스코어\">95.33</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌졸중진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,453</Col><Col id=\"스코어\">97.27</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">뇌졸중진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">41</Col><Col id=\"스코어\">97.27</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌출혈진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">323</Col><Col id=\"스코어\">84.76</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">뇌출혈진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">21</Col><Col id=\"스코어\">84.76</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">계속(재진단)뇌출혈진단비</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">201</Col><Col id=\"스코어\">36.43</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">특정양성뇌종양진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">65</Col><Col id=\"스코어\">74.09</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌혈관질환수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">50</Col><Col id=\"스코어\">50.92</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">뇌혈관질환수술비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">7</Col><Col id=\"스코어\">50.92</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌혈관질환수술비(1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">40</Col><Col id=\"스코어\">50.92</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">뇌혈관질환수술비(1회한)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">6</Col><Col id=\"스코어\">50.92</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌졸중수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">44</Col><Col id=\"스코어\">42.48</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌졸중수술비(1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">32</Col><Col id=\"스코어\">42.48</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">허혈성심장질환진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">755</Col><Col id=\"스코어\">69.12</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">허혈성심장질환진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">69</Col><Col id=\"스코어\">69.12</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">급성심근경색증진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">374</Col><Col id=\"스코어\">59.65</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">급성심근경색증진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">22</Col><Col id=\"스코어\">59.65</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">계속(재진단)급성심근경색증진단비</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">757</Col><Col id=\"스코어\">21.85</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">허혈성심장질환수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">61</Col><Col id=\"스코어\">62.39</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">허혈성심장질환수술비(1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">51</Col><Col id=\"스코어\">62.39</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">급성심근경색증수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">19</Col><Col id=\"스코어\">102.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">급성심근경색증수술비(1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">17</Col><Col id=\"스코어\">102.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">상해수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">598</Col><Col id=\"스코어\">21.61</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">상해수술비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">363</Col><Col id=\"스코어\">21.61</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">교통상해수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">30</Col><Col id=\"스코어\">21.61</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">질병수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">1,633</Col><Col id=\"스코어\">106.98</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">질병수술비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">492</Col><Col id=\"스코어\">106.98</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">5대생활질병수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">41</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">56대질병수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">192</Col><Col id=\"스코어\">84.85</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">56대질병수술비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">42</Col><Col id=\"스코어\">84.85</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">7대질병수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">135</Col><Col id=\"스코어\">64.23</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">7대기관질병수술비(뇌혈관질환)(관혈, 비관혈)(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1000000</Col><Col id=\"보험료\">420</Col><Col id=\"스코어\">50.92</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">7대기관질병수술비(심장관련질병)(관혈, 비관혈)(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">915</Col><Col id=\"스코어\">102.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">7대기관질병수술비(간관련질병)(관혈, 비관혈)(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">43</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">7대기관질병수술비(신부전)(관혈, 비관혈)(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">65</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">7대기관질병수술비(폐질환)(관혈, 비관혈)(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">69</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">7대기관질병수술비(담낭,담도 및 췌장질환)(관혈, 비관혈)(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">95</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">7대기관질병수술비(특정장질환)(관혈, 비관혈)(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">44</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">3대안과질환수술비(연간1회한)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">242</Col><Col id=\"스코어\">157.58</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">3대안과질환수술비(연간1회한)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">4</Col><Col id=\"스코어\">157.58</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">상해상급종합병원수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">61</Col><Col id=\"스코어\">21.61</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">상해상급종합병원수술비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">37</Col><Col id=\"스코어\">21.61</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">질병상급종합병원수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">279</Col><Col id=\"스코어\">106.98</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">질병상급종합병원수술비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">74</Col><Col id=\"스코어\">106.98</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">추간판장애수술비</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">45</Col><Col id=\"스코어\">67.53</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">인공관절치환수술비(견관절, 고관절, 슬관절)(연간1회한, 급여)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">79</Col><Col id=\"스코어\">106.71</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">치핵수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">141</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">치핵수술비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">95</Col><Col id=\"스코어\">85.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">상해특정수혈치료비(연간3회한, 급여)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">14</Col><Col id=\"스코어\">29.16</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">질병특정수혈치료비(연간3회한, 급여)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">73</Col><Col id=\"스코어\">29.81</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">남성특정비뇨기계질환수술비</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">17</Col><Col id=\"스코어\">33.17</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">호흡기질환수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">50</Col><Col id=\"보험료\">6</Col><Col id=\"스코어\">23.48</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">5대장기이식수술비(1회한)</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">106</Col><Col id=\"스코어\">64.29</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">각막이식수술비(1회한)</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">25</Col><Col id=\"스코어\">64.29</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">조혈모세포이식수술비(1회한)</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">71</Col><Col id=\"스코어\">64.29</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">중대한특정상해수술비(1회한)</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">108</Col><Col id=\"스코어\">14.74</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">특정상해(머리,목)수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">106</Col><Col id=\"스코어\">6.04</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">관절증(엉덩,무릎)수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">22</Col><Col id=\"스코어\">106.71</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">장기요양진단비(1등급)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">662</Col><Col id=\"스코어\">59.80</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">장기요양진단비(1-2등급)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,365</Col><Col id=\"스코어\">59.80</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">장기요양진단비(1-3등급)(1804)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,775</Col><Col id=\"스코어\">59.80</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">장기요양진단비(1-4등급)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,903</Col><Col id=\"스코어\">59.80</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">경증이상치매진단비(90일이상)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">2,142</Col><Col id=\"스코어\">29.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">중증치매진단비Ⅱ(90일이상)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,684</Col><Col id=\"스코어\">29.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">중등도이상치매진단비(90일이상)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,953</Col><Col id=\"스코어\">29.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">중증치매간병자금Ⅱ(90일이상,10년간매월지급)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">17,929</Col><Col id=\"스코어\">29.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">활동불능진단비(90일이상)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,803</Col><Col id=\"스코어\">29.60</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">파킨슨병진단비</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">355</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">3대장애진단비</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">2,050</Col><Col id=\"스코어\">0.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">크론병진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">12</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">말기간경화진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">113</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">말기신부전증진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">294</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">말기폐질환진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">1,795</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">중대한재생불량성빈혈진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">89</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">특정류마티스관절염진단비</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">8</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">중증화상및부식진단비</Col><Col id=\"보험기간\">80세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">50</Col><Col id=\"스코어\">19.79</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">만성당뇨합병증진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">153</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">당뇨병(당화혈색소 6.5%이상)진단비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">441</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">당뇨병성 급성혼수진단비</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">181</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">인슐린치료비(1회한)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">133</Col><Col id=\"스코어\">29.81</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">실명진단비(질병)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">11</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">다리절단 발생금(질병)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">55</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">다리(발목상부)절단 발생금(질병)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">300</Col><Col id=\"보험료\">42</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">말기암호스피스통증완화입원치료비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">310</Col><Col id=\"스코어\">74.09</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">골절(치아파절포함)진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">1,057</Col><Col id=\"스코어\">58.49</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">골절(치아파절제외)진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">702</Col><Col id=\"스코어\">56.04</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">골절수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">164</Col><Col id=\"스코어\">44.11</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">5대골절진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">79</Col><Col id=\"스코어\">59.53</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">5대골절수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">15</Col><Col id=\"스코어\">44.11</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">깁스치료비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">208</Col><Col id=\"스코어\">29.37</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">화상진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">30만원</Col><Col id=\"보험료\">306</Col><Col id=\"스코어\">62.66</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">화상수술비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">5</Col><Col id=\"스코어\">133.86</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">상해흉터복원수술비Ⅱ</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1,000</Col><Col id=\"보험료\">318</Col><Col id=\"스코어\">4.00</Col></Row><Row><Col id=\"담보군\">진단/수술</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">결핵진단비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">79</Col><Col id=\"스코어\">32.00</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">상해입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">3,630</Col><Col id=\"스코어\">26.96</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">상해입원비(1일이상180일한도)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">2,010</Col><Col id=\"스코어\">26.96</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">상해상급종합병원입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">242</Col><Col id=\"스코어\">3.76</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">상해중환자실입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">326</Col><Col id=\"스코어\">3.76</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">상해중환자실입원비(1일이상180일한도)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">161</Col><Col id=\"스코어\">3.76</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">질병입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">10,191</Col><Col id=\"스코어\">39.99</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">질병입원비(1일이상180일한도)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">1,245</Col><Col id=\"스코어\">39.99</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">질병상급종합병원입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">1,413</Col><Col id=\"스코어\">16.02</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">질병중환자실입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">50</Col><Col id=\"스코어\">31.67</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">질병중환자실입원비(1일이상180일한도)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">4</Col><Col id=\"스코어\">31.67</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">암직접치료입원비Ⅱ(요양병원제외, 1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">1,380</Col><Col id=\"스코어\">45.71</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">암직접치료입원비Ⅱ(요양병원제외, 1일이상180일한도)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">50</Col><Col id=\"스코어\">45.71</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">암요양병원입원비Ⅱ(1일이상90일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">426</Col><Col id=\"스코어\">45.71</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">암요양병원입원비Ⅱ(1일이상90일한도)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">4</Col><Col id=\"스코어\">45.71</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">암요양병원입원비Ⅱ(1일이상60일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">338</Col><Col id=\"스코어\">45.71</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">암요양병원입원비Ⅱ(1일이상60일한도)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">3</Col><Col id=\"스코어\">45.71</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">항암방사선치료비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">617</Col><Col id=\"스코어\">56.29</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">항암방사선치료비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">19</Col><Col id=\"스코어\">56.29</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">항암약물치료비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">904</Col><Col id=\"스코어\">56.29</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">항암약물치료비(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">29</Col><Col id=\"스코어\">56.29</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">항암방사선치료비(특정유사암)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">15</Col><Col id=\"스코어\">56.29</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">항암약물치료비(특정유사암)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">3</Col><Col id=\"스코어\">0.00</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌경색증혈전용해치료비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">158</Col><Col id=\"스코어\">42.48</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">특정급성심근경색증혈전용해치료비</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">20</Col><Col id=\"스코어\">102.60</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌혈관질환직접치료입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">1,043</Col><Col id=\"스코어\">38.88</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">뇌졸중직접치료입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">732</Col><Col id=\"스코어\">38.88</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">허혈성심장질환직접치료입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">143</Col><Col id=\"스코어\">37.57</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">급성심근경색증직접치료입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">61</Col><Col id=\"스코어\">37.57</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">치매입원비(1일이상180일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">1,143</Col><Col id=\"스코어\">16.76</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">식중독입원비(4일이상120일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">12</Col><Col id=\"스코어\">29.81</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">특정상해(머리,목)입원비(4일이상120일한도)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">516</Col><Col id=\"스코어\">87.55</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">응급실내원치료비(응급)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">585</Col><Col id=\"스코어\">46.24</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">응급실내원치료비(비응급)</Col><Col id=\"보험기간\">100세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">1</Col><Col id=\"보험료\">171</Col><Col id=\"스코어\">96.44</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">특정전염병발생금</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">50</Col><Col id=\"보험료\">103</Col><Col id=\"스코어\">105.00</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">강력범죄발생금</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">20년납</Col><Col id=\"가입금액\">100</Col><Col id=\"보험료\">33</Col><Col id=\"스코어\">66.50</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">가족일상생활중배상책임(대물20만원공제)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">10,000</Col><Col id=\"보험료\">559</Col><Col id=\"스코어\">315.00</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">민사소송법률비용(실손)(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">전기납</Col><Col id=\"가입금액\">2,000</Col><Col id=\"보험료\">3,118</Col><Col id=\"스코어\">9.60</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">의료사고법률비용(실손)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">화재벌금(갱신형)</Col><Col id=\"보험기간\">03년만기</Col><Col id=\"납입기간\">6</Col><Col id=\"가입금액\">2,000</Col><Col id=\"보험료\">3</Col><Col id=\"스코어\">74.50</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"중복\">+</Col><Col id=\"담보명\">자동차사고부상발생금(1-14급)(차등지급)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">2</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">4,461</Col><Col id=\"스코어\">27.39</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\">1</Col><Col id=\"담보명\">자동차사고부상발생금(1-4급)(단일지급)</Col><Col id=\"보험기간\">110세만기</Col><Col id=\"납입기간\">2</Col><Col id=\"가입금액\">10</Col><Col id=\"보험료\">34</Col><Col id=\"스코어\">7.08</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">자동차사고변호사선임비용Ⅲ(운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">대인형사합의실손비(최대1억원한도, 운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">중상해대인형사합의실손비(최대1억원한도, 운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">보복운전피해보장(자가용운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">보복운전피해보장Ⅱ(자가용운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">원격지사고시운반비용(20Km초과)(자가용운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">자동차사고대인벌금(운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">자동차사고대물벌금(운전자용)</Col></Row><Row><Col id=\"담보군\">일당/기타</Col><Col id=\"선택\"/><Col id=\"담보명\">이륜자동차운전중상해부담보특별약관</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"선택\" type=\"INT\" size=\"256\"/><Column id=\"성명\" type=\"STRING\" size=\"256\"/><Column id=\"주민번호\" type=\"STRING\" size=\"256\"/><Column id=\"관계\" type=\"STRING\" size=\"256\"/><Column id=\"보험료\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"주민번호\">8612250000000</Col><Col id=\"선택\">1</Col><Col id=\"성명\">노순자</Col><Col id=\"관계\">0</Col><Col id=\"보험료\">13000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">본인</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">배우자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">자녀</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">형제</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">110세만기</Col><Col id=\"value\">110세만기</Col></Row><Row><Col id=\"code\">100세만기</Col><Col id=\"value\">100세만기</Col></Row><Row><Col id=\"code\">90세만기</Col><Col id=\"value\">90세만기</Col></Row><Row><Col id=\"code\">80세만기</Col><Col id=\"value\">80세만기</Col></Row><Row><Col id=\"code\">70세만기</Col><Col id=\"value\">70세만기</Col></Row><Row><Col id=\"code\">60세만기</Col><Col id=\"value\">60세만기</Col></Row><Row><Col id=\"code\">03년만기</Col><Col id=\"value\">03년만기</Col></Row><Row><Col id=\"code\">20년만기</Col><Col id=\"value\">20년만기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">30년납</Col><Col id=\"value\">30년납</Col></Row><Row><Col id=\"code\">25년납</Col><Col id=\"value\">25년납</Col></Row><Row><Col id=\"code\">20년납</Col><Col id=\"value\">20년납</Col></Row><Row><Col id=\"code\">15년납</Col><Col id=\"value\">15년납</Col></Row><Row><Col id=\"code\">10년납</Col><Col id=\"value\">10년납</Col></Row><Row><Col id=\"code\">5년납</Col><Col id=\"value\">5년납</Col></Row><Row><Col id=\"code\">전기납</Col><Col id=\"value\">전기납</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","832",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainBtn");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","446","90",null,null,"10","Static00:10",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("div_WF_hwBg03");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","5","8","77","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("담보필터");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","85","8","117","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_value("찾을담보명입력");
            obj.set_text("찾을담보명입력");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","212","8","58","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("가입");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","344","8","92","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("플랜기본값");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","448","8","102","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div02_form_Combo00_innerdataset = new nexacro.NormalDataset("Div02_form_Combo00_innerdataset", obj);
            Div02_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">플랜선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">고급플랜</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">실속플랜</Col></Row></Rows>");
            obj.set_innerdataset(Div02_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","Combo00:2","8","137","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div02_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div02_form_Combo00_00_innerdataset", obj);
            Div02_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">나만의설계선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">고장형설계</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">의료보장형설계</Col></Row></Rows>");
            obj.set_innerdataset(Div02_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02_00","Combo00_00:3","8","105","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("나만의설계등록");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","42",null,null,"5","168",null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("grd_WF_hwGrd03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"210\"/><Column size=\"46\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"122\"/><Column size=\"121\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"담보군\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"중복\"/><Cell col=\"3\" text=\"담보명\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"보험기간\"/><Cell col=\"6\" text=\"납입기간\"/><Cell col=\"7\" text=\"가입금액(만원)\"/><Cell col=\"8\" text=\"보험료(원)\"/><Cell col=\"9\" text=\"스코어\"/><Cell col=\"10\" text=\"기준\"/></Band><Band id=\"body\"><Cell text=\"bind:담보군\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:선택\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:중복\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:담보명\"/><Cell col=\"4\" text=\"bind:구분\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"combo\" combodataset=\"dsInPeriod\" combocodecol=\"code\" combodatacol=\"value\" text=\"bind:보험기간\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:납입기간\" displaytype=\"normal\" edittype=\"combo\" combodataset=\"dsPaPeriod\" combocodecol=\"code\" combodatacol=\"value\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:가입금액\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:보험료\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:스코어\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:기준\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02_01","5",null,"97","24",null,"137",null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("설계화면확대");
            obj.set_cssclass("btn_WF_hwBtn04");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","103",null,"75","24",null,"137",null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("표준모델");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00","180",null,"120","24",null,"137",null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("청약포인트(-14.1)");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00","302",null,"114","24",null,"137",null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("인수스코어(55.3)");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00",null,null,"146","24","4","137",null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("특정부위/질병 무담보");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01","5",null,"11.1%","54",null,"73",null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("담보설명");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","Static01_01:-3","Button02_01:10",null,"54","5",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("32");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","5","TextArea00:8","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("보장보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","Static01_01_00:-1","TextArea00:8","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("24");
            obj.set_format("###,###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","MaskEdit00:-1","TextArea00:8","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_text("최소보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","Static01_00_00_00:0","TextArea00:8","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("26");
            obj.set_format("###,###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","MaskEdit00_01:-2","TextArea00:8","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("환급금");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01","Static01_01_00_00:0","TextArea00:8","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("28");
            obj.set_format("###,###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","MaskEdit00_01_01:-2","TextArea00:8","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_text("합계보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","272","8","70","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_text("미가입");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","5","Static01_01_00:-1","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_text("적립보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","Static01_01_00_01:-1","MaskEdit00:-1","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("25");
            obj.set_format("###,###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","MaskEdit00_00:-1","Static01_00_00_00:-1","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_text("최대보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","Static01_00_00_00_01:0","MaskEdit00_01:-1","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("27");
            obj.set_format("###,###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","MaskEdit00_01_00:-2","Static01_01_00_00:-1","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_text("환급률");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00","Static01_01_00_00_00:0","MaskEdit00_01_01:-1","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("29");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","MaskEdit00_01_01_00:-2","Static01_00_00_00_00:-1","11.1%","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_text("적용보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"7.98%","57","5","7",null,"100",null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_text("보험료\r\n계산");
            obj.set_cssclass("btn_WF_hwBtn02");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_01","Static01_00_00_00_00:0","TextArea00:8","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("30");
            obj.set_format("###,###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_01_00","Static01_00_00_00_00_00:0","MaskEdit00_01_01_01:-1","93","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("31");
            obj.set_format("###,###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div01","9","258","431","534",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_hwBg");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","104","37","177","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">간편설계</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상세설계</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            obj.set_text("간편설계");
            obj.set_value("0");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","282","39","70","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","354","39","70","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","71","420","104",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_hwGrd03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"96\"/><Column size=\"128\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"주민번호\"/><Cell col=\"3\" text=\"관계\"/><Cell col=\"4\" text=\"보험료\"/></Band><Band id=\"body\"><Cell text=\"bind:선택\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:성명\" expandshow=\"show\" expandsize=\"25\" expandimage=\"url('theme::demo19/images/btn_WF_Search.png')\"/><Cell col=\"2\" text=\"bind:주민번호\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"######{#######}\"/><Cell col=\"3\" displaytype=\"combocontrol\" text=\"bind:관계\" combodataset=\"dsCode01\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" text=\"bind:보험료\" displaytype=\"number\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","4","182","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("연령");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","93","182","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","214","182","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","303","182","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01","4","211","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("직업(급수)");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01","93","211","332","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","4","240","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("운전형태");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","95","240","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","214","240","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("이륜차");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","303","240","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","4","269","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("알릴사항");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","93","269","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","214","269","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("임신주수");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","303","269","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","4","298","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("설계심사");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","93","298","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","214","298","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("설계추가");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","303","298","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01_00","4","327","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("동시설계");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01_00","93","327","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","214","327","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("동시설계P");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00","303","327","122","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","4","365","90","88",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("수익자");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_01","182","365","244","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","93","365","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("사망보험금");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00","93","394","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("사망외보험금");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00","182","394","244","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_01","93","423","90","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("지정대리인");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_01","182","423","244","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","43","470","100","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("보험신용정보");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","153","470","100","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("변경조건");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","263","470","100","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_text("누적확인");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","96","185","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("33");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","307","185","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_00_00_innerdataset", obj);
            Div01_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_00_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","96","214","205","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("회사 사무직 종사자");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","96","243","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_innerdataset", obj);
            Div01_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">비운전자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">자가용</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","307","243","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_00_innerdataset", obj);
            Div01_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">운전함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">운전안함</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","96","272","78","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("유");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","176","272","35","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_hwBtn06");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","311","303","22","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_00","332","301","90","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_text("실손의료비설계");
            obj.set_cssclass("btn_WF_hwBtn06");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","187","368","118","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_text("법정상속인");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02_00","273","367","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","307","368","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_01_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_01_innerdataset", obj);
            Div01_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">본인</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">법정상속인</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_01_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","187","397","118","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_text("LA2001");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","273","396","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","307","397","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_01_00_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_01_00_innerdataset", obj);
            Div01_form_Combo00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">본인</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">배우자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">자녀</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">형제</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">부모</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_01_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01","187","426","118","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_text("LA2001");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02_00_01","273","425","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01","307","426","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_01_01_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_01_01_innerdataset", obj);
            Div01_form_Combo00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">본인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">법정상속인</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_01_01_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","0","0",null,"30","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_text("피보험자");
            obj.set_cssclass("btn_WF_accoBtn");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","96","301","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("55");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","96","330","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("56");
            obj.set_text("LA200119999999-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","307","272","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("57");
            obj.set_text("0");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","307","330","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("58");
            obj.set_format("###,###,###");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02_00_02","Edit00_00:0","214","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_Search");
            obj.set_background("#f3f3f3");
            obj.set_border("1px solid #cbcbcb");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","325","214","25","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("60");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","Static00:0","214","73","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_02_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_02_innerdataset", obj);
            Div01_form_Combo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1급</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2급</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3급</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_02_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_Insurant","3","3","21","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("62");
            obj.set_text("");
            obj.set_cssclass("btn_WF_accordionBtn");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div03","9","Div01:0","431","534",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_hwBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","253","37","172","26",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div03_form_Radio00_innerdataset = new nexacro.NormalDataset("Div03_form_Radio00_innerdataset", obj);
            Div03_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">간편설계</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상세설계</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Radio00_innerdataset);
            obj.set_text("간편설계");
            obj.set_value("0");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01","4","251","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("수익자");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","93","251","332","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","4","280","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("계약자와관계");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","93","280","122","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","214","280","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","303","280","122","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","4","309","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","93","309","332","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01_00","4","378","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("설계금액");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01_00","93","378","122","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","214","378","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_text("잔여한도");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00","303","378","122","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","344","351","81","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","96","254","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("PoC-Test");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo00","96","283","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_Combo00_innerdataset = new nexacro.NormalDataset("Div03_form_Combo00_innerdataset", obj);
            Div03_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">본인</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">배우자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">자녀</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">형제</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">부모</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Combo00_innerdataset);
            obj.set_text("본인");
            obj.set_value("0");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","307","283","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div03_form_Combo00_00_innerdataset", obj);
            Div03_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">산업</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">국민</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">우리</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">우체국</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit01","96","312","220","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_text("12341234");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","5","35","120","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_text("계약자");
            obj.set_cssclass("sta_WF_title02");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_02","4","68","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_text("주피와관계");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_02","93","68","332","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01","96","73","205","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","307","71","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_Combo00_02_innerdataset = new nexacro.NormalDataset("Div03_form_Combo00_02_innerdataset", obj);
            Div03_form_Combo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">본인</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">배우자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">자녀</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">형제</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">부모</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Combo00_02_innerdataset);
            obj.set_text("본인");
            obj.set_value("0");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_00","4","97","90","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_02_00","93","97","332","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","175","100","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","323","102","22","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("26");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","348","100","74","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("27");
            obj.set_text("개인사업자");
            obj.set_cssclass("btn_WF_hwBtn06");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_01","4","126","90","46",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("28");
            obj.set_text("개인정보\r\n취득경로");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_02_01","93","126","332","46",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo00_03","96","137","220","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div03_form_Combo00_03_innerdataset = new nexacro.NormalDataset("Div03_form_Combo00_03_innerdataset", obj);
            Div03_form_Combo00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개척</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지인</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Combo00_03_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01_01","4","171","90","46",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("31");
            obj.set_text("수익자\r\n지정·변경");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01_01","93","171","122","46",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_01","214","171","90","46",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("33");
            obj.set_text("장애인보험\r\n전환특약");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_01","303","171","122","46",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","97","176","115","36",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var Div03_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div03_form_Radio00_00_innerdataset", obj);
            Div03_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">약정함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">약정안함</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Radio00_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","307","176","115","36",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var Div03_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("Div03_form_Radio00_00_00_innerdataset", obj);
            Div03_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">피보험자장애인</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수익자장애인</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Radio00_00_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","5","220","132","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("37");
            obj.set_text("만기중도환급수익자");
            obj.set_cssclass("sta_WF_title02");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_00_00","213","254","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("38");
            obj.set_type("number");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00","315","312","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00","341","312","81","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("40");
            obj.set_text("계좌확인");
            obj.set_cssclass("btn_WF_hwBtn06");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","5","346","132","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("41");
            obj.set_text("세제혜택 가입한도");
            obj.set_cssclass("sta_WF_title02");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","96","381","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("42");
            obj.set_value("0");
            obj.set_text("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01","4","413","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("43");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00","144","413","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("44");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_01","284","413","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("45");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_02","4","436","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("46");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_00","144","436","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("47");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_01_00","284","436","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("48");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_03","4","459","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("49");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_01","144","459","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("50");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_01_01","284","459","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("51");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_04","4","482","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("52");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_02","144","482","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("53");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_01_02","284","482","141","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("54");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","8","413","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("55");
            obj.set_text("연금저축");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","148","413","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("56");
            obj.set_text("60세 이상");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","288","413","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("57");
            obj.set_text("독립유공자");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","8","436","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("58");
            obj.set_text("월납식비과세");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","148","436","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("59");
            obj.set_text("장애인");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","288","436","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("60");
            obj.set_text("고엽제환자");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_02","8","459","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("61");
            obj.set_text("비월납식비과세");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_02","148","459","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("62");
            obj.set_text("기초수급");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_01","288","459","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("63");
            obj.set_text("민주518");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","8","482","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("64");
            obj.set_text("생계형(비과세종합)");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01_00","148","482","132","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("65");
            obj.set_text("국가유공자");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button03","-1","1","431","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("66");
            obj.set_text("계약추가사항(계약자/영수/기타사항)");
            obj.set_cssclass("btn_WF_accoBtnO");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","96","100","80","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("67");
            obj.set_text("PoC-Test");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit02","201","100","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("68");
            obj.set_text("8701101");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","307","381","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("69");
            obj.set_value("0");
            obj.set_text("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_AddContract","3","4","21","23",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("70");
            obj.set_text("");
            obj.set_cssclass("btn_WF_accordionBtnO");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","20","841","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최초 시작 시간");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","140","841","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_text("00:00:00.000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","547","841","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총 수행 시간 표시");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","270","841","147","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("최종 렌더링 완료 시간");
            obj.set_cssclass("sta_WF_hwLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","417","841","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_InitVal",null,"839","6.83%","24","93",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("값 초기화");
            obj.set_cssclass("btn_WF_hwBtn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SettingVal",null,"839","80","24","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("값 세팅");
            obj.set_cssclass("btn_WF_hwBtn01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","5",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_process");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","39",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_box06");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","28","49","52","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("상품");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","80","49","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("무배당 마이라이프 ");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","222","49","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("납입면제형(표준형)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","331","49","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","427","49","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("설계번호");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","495","49","178","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("LA200110310451-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","647","49","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","749","49","52","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("설계자");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01","804","49","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("8090179");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","895","49","30","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01_00","929","49","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("IT운영파트");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01_00_00","1049","49","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("배성민");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","90","430","165",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_hwBg03");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5","5","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("계약기본사항");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","80","24","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("할인상세");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","3","35","90","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("보험시기");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","92","35","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","302","35","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","213","35","90","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("유효설계");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","95","38","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","3","64","90","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("보험기간");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","92","64","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","213","64","90","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("납입기간");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","302","64","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","3","93","90","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("환급금");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","92","93","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","213","93","90","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("납입주기");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","302","93","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","3","122","90","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("갱신주기");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_01","92","122","332","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","306","38","86","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("20200208");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","392","40","28","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("까지");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","95","67","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">110세만기</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">100세만기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">90세만기</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">80세만기</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">70세만기</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">60세만기</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","95","96","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_innerdataset", obj);
            Div00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">만기환급</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">80세환급</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">70세환급</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">60세환급</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","95","125","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">3년</Col></Row><Row><Col id=\"datacolumn\">5년</Col><Col id=\"codecolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","306","67","114","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_01_innerdataset", obj);
            Div00_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">30년납</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">25년납</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">20년납</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">15년납</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">10년납</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5년납</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">전기납</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_01_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","306","96","114","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_01_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_01_00_innerdataset", obj);
            Div00_form_Combo00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">월납</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">3월납</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">6월납</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">일시납</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_01_00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div04","446","90",null,"732","10",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("div_WF_hwBg03");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00",null,"544","58","24","4",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_hwBtn07");
            this.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid01","5","571",null,null,"5","69",null,null,null,null,this.Div04.form);
            obj.set_taborder("10");
            obj.set_cssclass("grd_WF_hwGrd03");
            obj.set_binddataset("Ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"등록대상\"/><Cell col=\"1\" text=\"대표법정대리인\"/><Cell col=\"2\" text=\"법정대리인\"/><Cell col=\"3\" text=\"법정대리인1인사유\"/></Band><Band id=\"body\"><Cell text=\"bind:등록대상\"/><Cell col=\"1\" text=\"bind:대표법정대리인\"/><Cell col=\"2\" text=\"bind:법정대리인\"/><Cell col=\"3\" text=\"bind:법정대리인1인사유\"/></Band></Format></Formats>");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","5","Grid01:4","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("보장보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","Static01_01_00:-1","Grid01:4","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("121");
            obj.set_type("number");
            obj.set_format("###,###,###");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","MaskEdit02:-1","Grid01:4","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("최소보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00_00","Static01_00_00_00:0","Grid01:4","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("123");
            obj.set_format("###,###,###");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","MaskEdit02_00_00:-2","Grid01:4","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_text("환급금");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00_00_00_00","Static01_01_00_00:0","Grid01:4","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("125");
            obj.set_format("###,###,###");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","MaskEdit02_00_00_00_00:-2","Grid01:4","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("합계보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","5","Static01_01_00:-1","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("적립보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00","Static01_01_00_01:-1","MaskEdit02:-1","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("122");
            obj.set_format("###,###,###");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","MaskEdit02_00:-1","Static01_00_00_00:-1","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_text("최대보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00_00_00","Static01_00_00_00_01:0","MaskEdit02_00_00:-1","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("124");
            obj.set_format("###,###,###");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","MaskEdit02_00_00_00:-2","Static01_01_00_00:-1","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_text("환급률");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00_00_00_00_00","Static01_01_00_00_00:0","MaskEdit02_00_00_00_00:-1","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("126");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","MaskEdit02_00_00_00_00_00:-2","Static01_00_00_00_00:-1","11.22%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_text("적용보험료");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"7.98%","57","5","7",null,"100",null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_text("보험료\r\n계산");
            obj.set_cssclass("btn_WF_hwBtn02");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_00","5","541","171","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("13");
            obj.set_text("미성년자/법정대리인 조회");
            obj.set_cssclass("sta_WF_title02");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00_00",null,"544","58","24","64",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00_01",null,"544","58","24","124",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("12");
            obj.set_text("재조회");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_02","4","35","120","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("14");
            obj.set_text("자택(소재지)");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_02","Static01_01_02:-1","35",null,"30","5",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_00","4","64","120","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("16");
            obj.set_text("직장(본사)");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_02_00","Static01_01_02_00:-1","64",null,"30","5",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_00_00","4","93","120","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("18");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_02_00_00","Static01_01_02_00_00:-1","93","281","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_00_00_00","Static02_01_02_00_00:-1","93","14.84%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("20");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_02_00_00_00","Static01_01_02_00_00_00:-1","93",null,"30","5",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","5","7","120","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("22");
            obj.set_text("계약자 고객정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"7","80","24","5",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("23");
            obj.set_text("할인상세");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static01_01_02:3","38","24.31%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("24");
            obj.set_text("서울 중구 여의대로 56-1");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","Edit00:3","38","24.31%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("25");
            obj.set_text("02-316-1234-5678");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","Edit00_00:11","38","18.58%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("26");
            obj.set_text("(00-000-0001~3)");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","Static01_01_02_00:3","67","24.31%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("27");
            obj.set_text("서울 중구 여의대로 56-1");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","Edit00_01:3","67","24.31%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("28");
            obj.set_text("02-316-1234-5678");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00","Edit00_00_00:11","67","18.58%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("29");
            obj.set_text("(00-000-0001~3)");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","Static01_01_02_00_00:3","96","65","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("30");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","MaskEdit00:4","96","12","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("31");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","MaskEdit00:22","96","65","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("32");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_00","MaskEdit00_00:5","96","12","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("33");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","MaskEdit00_00:21","96","65","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("34");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","Static01_01_02_00_00_00:3","96",null,"24","9",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("35");
            obj.set_text("email2hanwha.com");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","132","135","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("36");
            obj.set_text("확인사항(고객정보)");
            obj.set_cssclass("sta_WF_title02");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02","4","162","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("37");
            obj.set_text("증권전달방법");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02","Static01_01_00_02:-1","162","25.31%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_03","Static02_01_00_02:2.48%","162","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("50");
            obj.set_text("서명방법");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static01_01_00_02:3","165",null,"24","Static01_01_00_02_03:12",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_innerdataset", obj);
            Div04_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">우편</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">방문</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00","4","191","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("40");
            obj.set_text("우편물수령처");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00","Static01_01_00_02_00:-1","191","25.31%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_00","Static02_01_00_02_00:2.48%","191","14.96%","46",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("53");
            obj.set_text("송환계약여부\r\n(타사포함)");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","Static01_01_00_02_00:3","194",null,"24","Static01_01_00_02_00_00:12",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_00_innerdataset", obj);
            Div04_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">자택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">직장</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_01","4","220","14.96%","46",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("43");
            obj.set_text("조세규정 확인대상\r\n(FATCA/CRS)");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_01","Static01_01_00_02_01:-1","220","25.31%","46",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_03","Static02_01_00_02_01:2.48%","236","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("55");
            obj.set_text("영수증");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","Static01_01_00_02_01:3","231",null,"24","Static01_01_00_03:12",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_01_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_01_innerdataset", obj);
            Div04_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">해당사항없음</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">해당함</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_01_innerdataset);
            obj.set_text("해당사항없음");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_02","4","265","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("46");
            obj.set_text("전자적 안내동의");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_02","Static01_01_00_02_02:-1","265","25.31%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Radio("Radio00","Static01_01_00_02_02:3","267","172","26",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div04_form_Radio00_innerdataset = new nexacro.NormalDataset("Div04_form_Radio00_innerdataset", obj);
            Div04_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지않음</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("\"\"");
            obj.set_index("-1");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"135","114","24","59.48%",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("49");
            obj.set_text("FATCA/CRS정보");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_03","Static01_01_00_02_03:-1","162",null,"30","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","Static01_01_00_02_03:3","165",null,"24","10",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_02_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_02_innerdataset", obj);
            Div04_form_Combo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">문서서명</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전자서명</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_02_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_00","Static01_01_00_02_00_00:-1","191",null,"46","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_03","Static01_01_00_03:-1","236","16.33%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_03","Static01_01_00_03:3","239","15.34%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_03_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_03_innerdataset", obj);
            Div04_form_Combo00_03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">영수증발행안함</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">영수증발행</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_03_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","Static02_01_00_03:-1","236","90","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("58");
            obj.set_text("영수증번호");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01","Static02_01_00_02_02:2.48%","265","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("59");
            obj.set_text("영수일자");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01","Static01_01:-1","265","16.33%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","Static01_01:3","268","15.34%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("61");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_00","Static02_01:-1","265",null,"30","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Static02_01:3","270","18.7%","20",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("63");
            obj.set_text("청약불가예외");
            obj.set_value("false");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","Static01_01_00_02_00_00:4","202","48","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("64");
            obj.set_text("예");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","CheckBox01:-7","202","120","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("65");
            obj.set_text("(타사송환         건)");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","Static03:15","202","71","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("66");
            obj.set_text("아니오");
            obj.set_value("true");
            obj.set_enable("false");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","CheckBox01_00:19.72%","202","74","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("67");
            obj.set_text("개인사업자");
            obj.set_cssclass("btn_WF_hwBtn06");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit01","CheckBox01:61","202","29","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("68");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","5","302","135","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("69");
            obj.set_text("확인사항(고객정보)");
            obj.set_cssclass("sta_WF_title02");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00_01_00",null,"305","114","24","50.5%",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("70");
            obj.set_text("FATCA/CRS정보");
            obj.set_cssclass("btn_WF_hwBtn03");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_04","4","332","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("71");
            obj.set_text("납입방법");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_04","Static01_01_00_02_04:-1","332",null,"30","50.5%",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_04","Static01_01_00_02_04:4","335","33.17%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("73");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_04_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_04_innerdataset", obj);
            Div04_form_Combo00_04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">즉시이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">카드이체</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_04_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_01","4","361","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("74");
            obj.set_text("예금주관계");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_01","Static01_01_00_02_00_01:-1","361",null,"30","50.5%",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","Static01_01_00_02_00_01:4","364","33.17%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("76");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_00_00_innerdataset", obj);
            Div04_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">본인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배우자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">부모</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">자녀</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_01_00","4","390","14.96%","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("78");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_01_00","Static01_01_00_02_00_01_00:-1","390",null,"60","50.5%",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","Static01_01_00_02_00_01_00:5","394","78","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("79");
            obj.set_text("개인");
            obj.set_value("false");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","CheckBox00_00:1","394","81","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("80");
            obj.set_text("사업자");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static01_01_00_02_00_01_00:4","420","69","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("81");
            obj.set_text("PoC_Test");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","Edit02:3","420","173","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("82");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_00","MaskEdit01:0","420","24","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("83");
            obj.set_cssclass("btn_WF_Search");
            obj.set_background("#f3f3f3");
            obj.set_border("1px solid #cbcbcb");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_01_01","4","449","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("84");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_01_01","Static01_01_00_02_00_01_01:-1","449",null,"30","50.5%",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","Static01_01_00_02_00_01_01:4","452","33.17%","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("86");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_00_00_00_innerdataset", obj);
            Div04_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국민</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">산업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">우리</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기업</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","4","478","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("87");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01","Static01_01_00_00_01:-1","478",null,"30","50.5%",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","Static01_01_00_00_01:4","481","162","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("89");
            obj.set_text("123412341234");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00","Edit01_00:2","481","24","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("90");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00","Edit01_00:28","481","76","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("91");
            obj.set_text("계좌확인");
            obj.set_cssclass("btn_WF_hwBtn06");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","50.25%","302","135","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("92");
            obj.set_text("확인사항(청약정보)");
            obj.set_cssclass("sta_WF_title02");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_04_00","50.37%","332","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("93");
            obj.set_text("납입방법");
            obj.set_cssclass("sta_WF_hwLabel01E");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_04_00","Static01_01_00_02_04_00:-1","332",null,"30","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_04_00","Static01_01_00_02_04_00:3","335",null,"24","10",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("95");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_04_00_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_04_00_innerdataset", obj);
            Div04_form_Combo00_04_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">자동이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">카드이체</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_04_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_01_02","50.37%","361","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("96");
            obj.set_text("예금주관계");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_01_02","Static01_01_00_02_00_01_02:-1","361",null,"30","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_01","Static01_01_00_02_00_01_02:3","364",null,"24","10",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("98");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_00_00_01_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_00_00_01_innerdataset", obj);
            Div04_form_Combo00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">본인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배우자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">부모</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">자녀</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_00_00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_01_00_00","50.37%","390","14.96%","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("100");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_01_00_00","Static01_01_00_02_00_01_00_00:-1","390",null,"60","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","Static01_01_00_02_00_01_00_00:4","394","78","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("101");
            obj.set_text("개인");
            obj.set_value("false");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","CheckBox00_00_01:1","394","81","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("102");
            obj.set_text("사업자");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit02_00","Static01_01_00_02_00_01_00_00:3","420","69","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("103");
            obj.set_text("PoC_Test");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_00","Edit02_00:3","420","172","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("104");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","MaskEdit01_00:-1","420","26","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("105");
            obj.set_cssclass("btn_WF_Search");
            obj.set_background("#f3f3f3");
            obj.set_border("1px solid #cbcbcb");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_01_01_00","50.37%","449","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("106");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_01_01_00","Static01_01_00_02_00_01_01_00:-1","449",null,"30","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00","Static01_01_00_02_00_01_01_00:3","452",null,"24","10",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("108");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_00_00_00_00_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_00_00_00_00_innerdataset", obj);
            Div04_form_Combo00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국민</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">산업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">우리</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기업</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","50.37%","478","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("109");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_00","Static01_01_00_00_01_00:-1","478",null,"30","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","Static01_01_00_00_01_00:4","481","162","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("111");
            obj.set_text("123412341234");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00","Edit01_00_00:1","481","24","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("112");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00","Button02_01_00_00_00:3","481","76","24",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("113");
            obj.set_text("계좌확인");
            obj.set_cssclass("btn_WF_hwBtn06");
            this.Div04.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00_00",null,"305","109","24","5",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("114");
            obj.set_text("초회동일여부");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00_02",null,"135","64","24","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("115");
            obj.set_text("EDD등록");
            obj.set_cssclass("btn_WF_hwBtn07");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00_02_00",null,"135","64","24","72",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("116");
            obj.set_text("CDD등록");
            obj.set_cssclass("btn_WF_hwBtn07");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00_00_02_01",null,"135","64","24","138",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("117");
            obj.set_text("부실유의");
            obj.set_cssclass("btn_WF_hwBtn07");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_00_01_01_00_00","50.37%","507","14.96%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("118");
            obj.set_text("이체일");
            obj.set_cssclass("sta_WF_hwLabel01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_02_00_01_01_00_00","Static01_01_00_02_00_01_01_00_00:-1","507",null,"30","6",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00_00","Static01_01_00_02_00_01_01_00_00:3","510",null,"24","10",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("120");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div04_form_Combo00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("Div04_form_Combo00_00_00_00_00_00_innerdataset", obj);
            Div04_form_Combo00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">5일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">10일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">15일</Col></Row></Rows>");
            obj.set_innerdataset(Div04_form_Combo00_00_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00_00_00_00_00_00","Static01_00_00_00_00:0","Grid01:4","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("127");
            obj.set_format("###,###,###");
            this.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00_00_00_00_00_00_00","Static01_00_00_00_00_00:0","MaskEdit02_00_00_00_00_00_00:-1","93","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("128");
            obj.set_format("###,###,###");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static01_00_00_00_02:-1","236","131","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("129");
            obj.set_text("ABCDEFGH");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","667","841","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_text("00:00:00.000");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,870,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hanwha01.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 국가 등록 (SC_NationSearchMM_S01)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.08.24
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        /*
        	status : 1(열림) / 0(닫힘)
        */
        this.flag_Insurant = 1; //피보험자는 열린상태
        this.flag_AddContract = 0; //계약추가사항은 닫힌상태

        this.o_InsurantHeight;

        this.o_AddContractButtonHeight;
        this.o_AddContractHeight;

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.hanwha01_onload = function(obj,e)
        {
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.Edit00.set_value("");
        	this.Edit00_00_00.set_value("");
        	this.Edit00_01.set_value("");

        	this.o_InsurantHeight = this.Div01.getOffsetHeight();
        	this.o_AddContractHeight = this.Div03.getOffsetHeight();

        	this.Div03.set_height(this.Div03.form.Button03.getOffsetHeight());
        	this.resetScroll();
        };

        this.fnFlipflop = function(objDiv, vType)
        {
        	if(objDiv == "Insurant")
        	{
        		//피보험자 펼침
        		if(vType > 0)
        		{
        			this.Div02.set_visible(true);
        			this.Div04.set_visible(false);

        			this.Div01.form.Button02.set_cssclass("btn_WF_accoBtn");
        			this.Div01.form.btn_Insurant.set_cssclass("btn_WF_accordionBtn");
        			this.Div01.set_height(this.o_InsurantHeight);

        			//계약추가사항 닫힘
        			this.flag_AddContract = 0;
        			this.fnFlipflop("AddContract", this.flag_AddContract);
        		}
        		else
        		{
        			//피보험자 닫힘
        			this.Div01.form.Button02.set_cssclass("btn_WF_accoBtnO");
        			this.Div01.form.btn_Insurant.set_cssclass("btn_WF_accordionBtnO");
        			this.Div01.set_height(this.Div01.form.Button02.getOffsetHeight());
        		}
        	}
        	else if(objDiv == "AddContract")
        	{
        		//계약추가사항 펼침
        		if(vType > 0)
        		{
        			this.Div02.set_visible(false);
        			this.Div04.set_visible(true);

        			this.Div03.form.Button03.set_cssclass("btn_WF_accoBtn");
        			this.Div03.form.btn_AddContract.set_cssclass("btn_WF_accordionBtn");
        			this.Div03.set_height(this.o_AddContractHeight);

        			//피보험자는 무조건 닫힘
        			this.flag_Insurant = 0;
        			this.fnFlipflop("Insurant", this.flag_Insurant);
        		}
        		//계약추가사항 닫힘
        		else
        		{
        			this.Div02.set_visible(true);
        			this.Div04.set_visible(false);

        			this.Div03.form.Button03.set_cssclass("btn_WF_accoBtnO");
        			this.Div03.form.btn_AddContract.set_cssclass("btn_WF_accordionBtnO");
        			this.Div03.set_height(this.Div03.form.Button03.getOffsetHeight());
        		}
        	}
        	this.resetScroll();
        };

        this.fnInitVal = function()
        {
        	this.Edit01.set_value("");
        	this.Edit02.set_value("");
        	this.Edit01_00.set_value("");
        	this.Edit01_01.set_value("");
        	this.Edit01_01_00.set_value("");
        	this.Edit01_01_00_00.set_value("");

        	this.Div00.form.Calendar00.set_value("");
        	this.Div00.form.Edit00.set_value("");
        	this.Div00.form.Combo00.set_value("");
        	this.Div00.form.Combo00_01.set_value("");
        	this.Div00.form.Combo00_00.set_value("");
        	this.Div00.form.Combo00_01_00.set_value("");
        	this.Div00.form.Combo00_00_00.set_value("");

        	this.Div01.form.Static00.set_text("");
        	this.Div01.form.Combo00_02.set_value("");
        	this.Div01.form.Edit00.set_value("");
        	this.Div01.form.Combo00_00_00.set_value("");
        	this.Div01.form.Edit00_00.set_value("");
        	this.Div01.form.Combo00.set_value("");
        	this.Div01.form.Combo00_00.set_value("");
        	this.Div01.form.Edit01.set_value("");
        	this.Div01.form.Edit02.set_value("");
        	this.Div01.form.Edit00_01.set_value("");
        	this.Div01.form.Edit00_01_00.set_value("");
        	this.Div01.form.MaskEdit00.set_value("");
        	this.Div01.form.Edit01_00.set_value("");
        	this.Div01.form.Edit01_00_00.set_value("");
        	this.Div01.form.Combo00_01_00.set_value("");
        	this.Div01.form.Edit01_00_01.set_value("");
        	this.Div01.form.Combo00_01_01.set_value("");
        	this.Div01.form.Radio00.set_value(0);
        	this.Div01.form.Combo00_01.set_value("");
        	this.Div01.form.Grid00.set_binddataset("");

        	this.Div02.form.TextArea00.set_value("");
        	this.Div02.form.MaskEdit00.set_value("");
        	this.Div02.form.MaskEdit00_00.set_value("");
        	this.Div02.form.MaskEdit00_01.set_value("");
        	this.Div02.form.MaskEdit00_01_00.set_value("");
        	this.Div02.form.MaskEdit00_01_01.set_value("");
        	this.Div02.form.MaskEdit00_01_01_00.set_value("");
        	this.Div02.form.MaskEdit00_01_01_01.set_value("");
        	this.Div02.form.MaskEdit00_01_01_01_00.set_value("");
        	this.Div02.form.Combo00.set_value("");
        	this.Div02.form.Combo00_00.set_value("");
        	this.Div02.form.Grid00.set_binddataset("");

        	this.Div03.form.Static00_01.set_text("");
        	this.Div03.form.Combo00_02.set_value("");
        	this.Div03.form.Edit00.set_value("");
        	this.Div03.form.Edit02.set_value("");
        	this.Div03.form.Combo00_03.set_value(0);
        	this.Div03.form.Radio00_00.set_value("");
        	this.Div03.form.Radio00_00_00.set_value("");
        	this.Div03.form.Edit00_00.set_value("");
        	this.Div03.form.MaskEdit01_00_00.set_value("");
        	this.Div03.form.Combo00.set_value("");
        	this.Div03.form.Combo00_00.set_value(0);
        	this.Div03.form.Edit01.set_value("");
        	this.Div03.form.Edit00_00_00.set_value("");
        	this.Div03.form.Edit00_00_00_00.set_value("");
        	this.Div03.form.CheckBox00_00.set_value("");
        	this.Div03.form.CheckBox00_01.set_value("");

        	this.Div04.form.Edit00.set_value("");
        	this.Div04.form.Edit00_00.set_value("");
        	this.Div04.form.Edit00_01.set_value("");
        	this.Div04.form.Edit00_00_00.set_value("");
        	this.Div04.form.MaskEdit00.set_value("");
        	this.Div04.form.MaskEdit00_00.set_value("");
        	this.Div04.form.MaskEdit00_00_00.set_value("");
        	this.Div04.form.Edit00_01_00.set_value("");
        	this.Div04.form.Combo00.set_value(0);
        	this.Div04.form.Combo00_00.set_value(0);
        	this.Div04.form.Combo00_01.set_value(0);
        	this.Div04.form.Radio00.set_value("");
        	this.Div04.form.Combo00_02.set_value(0);
        	this.Div04.form.Combo00_03.set_value(0);
        	this.Div04.form.Calendar00.set_value("");
        	this.Div04.form.Edit03.set_value("");
        	this.Div04.form.CheckBox00.set_value(false);
        	this.Div04.form.Combo00_04.set_value(0);
        	this.Div04.form.Combo00_00_00.set_value(0);
        	this.Div04.form.CheckBox00_00.set_value(false);
        	this.Div04.form.Edit02.set_value("");
        	this.Div04.form.MaskEdit01.set_value("");
        	this.Div04.form.Combo00_00_00_00_00.set_value(0);
        	this.Div04.form.Edit00_01_00.set_value("");
        	this.Div04.form.Combo00_04_00.set_value(0);
        	this.Div04.form.Combo00_00_00_01.set_value(0);
        	this.Div04.form.CheckBox00_00_01.set_value(false);
        	this.Div04.form.Edit02_00.set_value("");
        	this.Div04.form.MaskEdit01_00.set_value("");
        	this.Div04.form.Combo00_00_00_00_00_00.set_value(0);
        	this.Div04.form.Edit01_00_00.set_value("");
        	this.Div04.form.Edit01_00.set_value("");
        	this.Div04.form.Combo00_00_00_00_00_00.set_value(0);
        	this.Div04.form.MaskEdit02.set_value("");
        	this.Div04.form.MaskEdit02_00.set_value("");
        	this.Div04.form.MaskEdit02_00_00.set_value("");
        	this.Div04.form.MaskEdit02_00_00_00.set_value("");
        	this.Div04.form.MaskEdit02_00_00_00_00.set_value("");
        	this.Div04.form.MaskEdit02_00_00_00_00_00.set_value("");
        	this.Div04.form.MaskEdit02_00_00_00_00_00_00.set_value("");
        	this.Div04.form.MaskEdit02_00_00_00_00_00_00_00.set_value("");
        };

        this.fnSettingVal = function()
        {
        	this.Edit01.set_value("무배당 마이라이프 ");
        	this.Edit02.set_value("납입면제형(표준형)");
        	this.Edit01_00.set_value("LA200110310451-1");
        	this.Edit01_01.set_value("8090179");
        	this.Edit01_01_00.set_value("IT운영파트");
        	this.Edit01_01_00_00.set_value("배성민");

        	this.Div00.form.Calendar00.set_value("20200109");
        	this.Div00.form.Edit00.set_value("20200208");
        	this.Div00.form.Combo00.set_value("0");
        	this.Div00.form.Combo00_01.set_value("2");
        	this.Div00.form.Combo00_00.set_value("0");
        	this.Div00.form.Combo00_01_00.set_value("0");
        	this.Div00.form.Combo00_00_00.set_value("0");

        	this.Div01.form.Radio00.set_value(1);
        	this.Div01.form.Grid00.set_binddataset("dsList02");
        	this.Div01.form.Edit00.set_value("33");
        	this.Div01.form.Combo00_00_00.set_value(0);
        	this.Div01.form.Edit00_00.set_value("도시,교통계획 및 설계가");
        	this.Div01.form.Static00.set_text("1/A");
        	this.Div01.form.Combo00_02.set_value(0);
        	this.Div01.form.Combo00.set_value(0);
        	this.Div01.form.Combo00_00.set_value(1);
        	this.Div01.form.Edit01.set_value("유");
        	this.Div01.form.Edit02.set_value("0");
        	this.Div01.form.Edit00_01_00.set_value("LA200119999999-1");
        	this.Div01.form.MaskEdit00.set_value("10000");
        	this.Div01.form.Edit01_00.set_value("법정상속인");
        	this.Div01.form.Combo00_01_01.set_value(0);
        	this.Div01.form.Combo00_01.set_value(1);
        	this.Div01.form.Edit01_00_00.set_value("노순자");
        	this.Div01.form.Combo00_01_00.set_value(0)

        	this.Div02.form.TextArea00.set_value("7대기관질병수술비(뇌혈관질환)(관혈, 비관혈)(연간1회한)(CLA05916)\n약관에서 정한 \"뇌혈관질환\"으로 진단확정되고\n그 직접적인 치료를 목적으로 약관에서 정한 \"관혈수술\" 또는 \"비관혈수술\"을 받은 경우 각각 연간 1회에 한하여 아래의 금액을 지급\n-\"관혈수술\"시 보험가입금액 지급(단 계약일부터 경과기간이 1년미만인 경우 지급급액의 50%지급)\n-\"비관혈수술\"시 보험가입금액의 50%지급(단 계약일부터 경과기간이 1년미만인 경우 지급급액의 50%지급)");
        	this.Div02.form.MaskEdit00.set_value("104430");
        	this.Div02.form.MaskEdit00_00.set_value("895570");
        	this.Div02.form.MaskEdit00_01.set_value("104430");
        	this.Div02.form.MaskEdit00_01_00.set_value("236473");
        	this.Div02.form.MaskEdit00_01_01.set_value("625357634");
        	this.Div02.form.MaskEdit00_01_01_00.set_value("226.9");
        	this.Div02.form.MaskEdit00_01_01_01.set_value("1000000");
        	this.Div02.form.MaskEdit00_01_01_01_00.set_value("1000000");
        	this.Div02.form.Combo00.set_value(0);
        	this.Div02.form.Combo00_00.set_value(0);
        	this.Div02.form.Grid00.set_binddataset("dsList01");

        	this.Div03.form.Static00_01.set_text("주피보험자(POC용)는 계약자(POC용)의본인배우자부모배우자부모조부모자녀자녀배우자형제자매손자녀친척고용주(사업주)고용인(종업원)기타");
        	this.Div03.form.Combo00_02.set_value(0);
        	this.Div03.form.Edit00.set_value("PoC-Test");
        	this.Div03.form.Edit02.set_value("8701101");
        	this.Div03.form.Combo00_03.set_value(1);
        	this.Div03.form.Radio00_00.set_value(0);
        	this.Div03.form.Radio00_00_00.set_value(0);
        	this.Div03.form.Edit00_00.set_value("PoC-Test");
        	this.Div03.form.MaskEdit01_00_00.set_value("8701101");
        	this.Div03.form.Combo00.set_value(1);
        	this.Div03.form.Combo00_00.set_value(1);
        	this.Div03.form.Edit01.set_value("12341234");
        	this.Div03.form.Edit00_00_00.set_value("10,000,000");
        	this.Div03.form.Edit00_00_00_00.set_value("10,000,000");
        	this.Div03.form.CheckBox00_00.set_value("");
        	this.Div03.form.CheckBox00_01.set_value("");

        	this.Div04.form.Edit00.set_value("서울 중구 여의대로 56-1");
        	this.Div04.form.Edit00_00.set_value("02-316-1234-5678");
        	this.Div04.form.Edit00_01.set_value("서울 중구 여의대로 56-1");
        	this.Div04.form.Edit00_00_00.set_value("02-316-1234-5678");
        	this.Div04.form.MaskEdit00.set_value("010");
        	this.Div04.form.MaskEdit00_00.set_value("1234");
        	this.Div04.form.MaskEdit00_00_00.set_value("5678");
        	this.Div04.form.Edit00_01_00.set_value("email2hanwha.com");
        	this.Div04.form.Combo00.set_value(1);
        	this.Div04.form.Combo00_00.set_value(1);
        	this.Div04.form.Combo00_01.set_value(1);
        	this.Div04.form.Radio00.set_value(0);
        	this.Div04.form.Combo00_02.set_value(1);
        	this.Div04.form.Combo00_03.set_value(1);
        	this.Div04.form.Calendar00.set_value("20200110");
        	this.Div04.form.Edit03.set_value("ABCDEFGH");
        	this.Div04.form.CheckBox00.set_value(true);
        	this.Div04.form.Combo00_04.set_value(1);
        	this.Div04.form.Combo00_00_00.set_value(1);
        	this.Div04.form.CheckBox00_00.set_value(true);
        	this.Div04.form.Edit02.set_value("PoC_Test");
        	this.Div04.form.MaskEdit01.set_value("8701101");
        	this.Div04.form.Combo00_00_00_00_00.set_value(1);
        	this.Div04.form.Combo00_04_00.set_value(1);
        	this.Div04.form.Combo00_00_00_01.set_value(1);
        	this.Div04.form.CheckBox00_00_01.set_value(true);
        	this.Div04.form.Edit02_00.set_value("PoC_Test");
        	this.Div04.form.MaskEdit01_00.set_value("8701101");
        	this.Div04.form.Edit01_00_00.set_value("1234123412341234");
        	this.Div04.form.Edit01_00.set_value("123412341234");
        	this.Div04.form.Combo00_00_00_00_00_00.set_value(1);
        	this.Div04.form.MaskEdit02.set_value("104430");
        	this.Div04.form.MaskEdit02_00.set_value("895570");
        	this.Div04.form.MaskEdit02_00_00.set_value("104430");
        	this.Div04.form.MaskEdit02_00_00_00.set_value("236473");
        	this.Div04.form.MaskEdit02_00_00_00_00.set_value("625357634");
        	this.Div04.form.MaskEdit02_00_00_00_00_00.set_value("226.9");
        	this.Div04.form.MaskEdit02_00_00_00_00_00_00.set_value("1000000");
        	this.Div04.form.MaskEdit02_00_00_00_00_00_00_00.set_value("1000000");
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	var objDiv = obj.name.split("_")[1];

        	switch(obj.name)
        	{
        		//값초기화
        		case "btn_InitVal" :
        			var fv_StartTime = this.gfn_CheckTime();
        			this.Edit00.set_value(this.gfnFormat(fv_StartTime));

        			this.fnInitVal();

        			var fv_EndTime = this.gfn_CheckTime();
        			this.Edit00_00_00.set_value(this.gfnFormat(fv_EndTime));

        			var nDiffTime = this.gfn_diffTime(fv_StartTime, fv_EndTime, "ss");
        			this.Edit00_01.set_value(nDiffTime);
        			break;
        		//값세팅
        		case "btn_SettingVal" :
        			var fv_StartTime = this.gfn_CheckTime();
        			this.Edit00.set_value(this.gfnFormat(fv_StartTime));

        			this.fnSettingVal();

        			var fv_EndTime = this.gfn_CheckTime();
        			this.Edit00_00_00.set_value(this.gfnFormat(fv_EndTime));

        			var nDiffTime = this.gfn_diffTime(fv_StartTime, fv_EndTime, "ss");
        			this.Edit00_01.set_value(nDiffTime);
        			break;
        		case "btn_Insurant"  :
        			//피보험자 닫힘
        			if(this.flag_Insurant == 0)
        			{
        				this.flag_Insurant = 1;
        				this.fnFlipflop(objDiv, this.flag_Insurant);
        			}
        			//피보험자 펼침 (계약추가사항은 무조건 닫힘)
        			else
        			{
        				this.flag_Insurant = 0;
        				this.fnFlipflop(objDiv, this.flag_Insurant);
        			}
        			break;
        		case "btn_AddContract"  :
        			//계약추가사항 펼침 (피보험자는 무조건 닫힘)
        			if(this.flag_AddContract == 0)
        			{
        				this.flag_AddContract = 1;
        				this.fnFlipflop(objDiv, this.flag_AddContract);
        			}
        			//계약추가사항 닫힘
        			else
        			{
        				this.flag_AddContract = 0;
        				this.fnFlipflop(objDiv, this.flag_AddContract);
        			}
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hanwha01_onload,this);
            this.Div01.form.btn_Insurant.addEventHandler("onclick",this.comm_Click,this);
            this.Div03.form.btn_AddContract.addEventHandler("onclick",this.comm_Click,this);
            this.btn_InitVal.addEventHandler("onclick",this.comm_Click,this);
            this.btn_SettingVal.addEventHandler("onclick",this.comm_Click,this);
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.Static04_onclick,this);
            this.Static04_01.addEventHandler("onclick",this.Static04_onclick,this);
        };

        this.loadIncludeScript("hanwha01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
