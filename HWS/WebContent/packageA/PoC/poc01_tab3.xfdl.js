(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("poc01");
            this.set_titletext("속성변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataSelected", this);
            obj._setContents("<ColumnInfo><Column id=\"header\" type=\"STRING\" size=\"256\"/><Column id=\"bindColumn\" type=\"STRING\" size=\"256\"/><Column id=\"coSize\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"textAlign\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataAll", this);
            obj._setContents("<ColumnInfo><Column id=\"header\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"bindColumn\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"coSize\" type=\"STRING\" size=\"256\"/><Column id=\"textAlign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"group\">ITEM</Col><Col id=\"bindColumn\">Number</Col><Col id=\"name\">Number</Col><Col id=\"coSize\">100</Col><Col id=\"textAlign\">left</Col></Row><Row><Col id=\"bindColumn\">Description</Col><Col id=\"name\">Description</Col><Col id=\"group\">ITEM</Col><Col id=\"coSize\">140</Col><Col id=\"textAlign\">left</Col></Row><Row><Col id=\"bindColumn\">Nominator</Col><Col id=\"name\">Nominator</Col><Col id=\"group\">ITEM</Col><Col id=\"coSize\">100</Col><Col id=\"textAlign\">left</Col></Row><Row><Col id=\"bindColumn\">AFG</Col><Col id=\"group\">AFC</Col><Col id=\"name\">아프가니스탄</Col></Row><Row><Col id=\"bindColumn\">AUS</Col><Col id=\"group\">AFC</Col><Col id=\"name\">오스트레일리아</Col></Row><Row><Col id=\"bindColumn\">BHR</Col><Col id=\"group\">AFC</Col><Col id=\"name\">바레인</Col></Row><Row><Col id=\"bindColumn\">BAN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">방글라데시</Col></Row><Row><Col id=\"bindColumn\">BHU</Col><Col id=\"group\">AFC</Col><Col id=\"name\">부탄</Col></Row><Row><Col id=\"bindColumn\">BRU</Col><Col id=\"group\">AFC</Col><Col id=\"name\">브루나이</Col></Row><Row><Col id=\"bindColumn\">CAM</Col><Col id=\"group\">AFC</Col><Col id=\"name\">캄보디아</Col></Row><Row><Col id=\"bindColumn\">CHN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">중국</Col></Row><Row><Col id=\"bindColumn\">TPE</Col><Col id=\"group\">AFC</Col><Col id=\"name\">중화 타이베이</Col></Row><Row><Col id=\"bindColumn\">HKG</Col><Col id=\"group\">AFC</Col><Col id=\"name\">홍콩</Col></Row><Row><Col id=\"bindColumn\">IND</Col><Col id=\"group\">AFC</Col><Col id=\"name\">인도</Col></Row><Row><Col id=\"bindColumn\">IDN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">인도네시아</Col></Row><Row><Col id=\"bindColumn\">IRN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">이란</Col></Row><Row><Col id=\"bindColumn\">IRQ</Col><Col id=\"group\">AFC</Col><Col id=\"name\">이라크</Col></Row><Row><Col id=\"bindColumn\">JPN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">일본</Col></Row><Row><Col id=\"bindColumn\">JOR</Col><Col id=\"group\">AFC</Col><Col id=\"name\">요르단</Col></Row><Row><Col id=\"bindColumn\">PRK</Col><Col id=\"group\">AFC</Col><Col id=\"name\">조선민주주의인민공화국</Col></Row><Row><Col id=\"bindColumn\">KOR</Col><Col id=\"group\">AFC</Col><Col id=\"name\">대한민국</Col></Row><Row><Col id=\"bindColumn\">KUW</Col><Col id=\"group\">AFC</Col><Col id=\"name\">쿠웨이트</Col></Row><Row><Col id=\"bindColumn\">KGZ</Col><Col id=\"group\">AFC</Col><Col id=\"name\">키르기스스탄</Col></Row><Row><Col id=\"bindColumn\">LAO</Col><Col id=\"group\">AFC</Col><Col id=\"name\">라오스</Col></Row><Row><Col id=\"bindColumn\">LIB</Col><Col id=\"group\">AFC</Col><Col id=\"name\">레바논</Col></Row><Row><Col id=\"bindColumn\">MAC</Col><Col id=\"group\">AFC</Col><Col id=\"name\">마카오</Col></Row><Row><Col id=\"bindColumn\">MAS</Col><Col id=\"group\">AFC</Col><Col id=\"name\">말레이시아</Col></Row><Row><Col id=\"bindColumn\">MDV</Col><Col id=\"group\">AFC</Col><Col id=\"name\">몰디브</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">MNG</Col><Col id=\"name\">몽골</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">MYA</Col><Col id=\"name\">미얀마</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">NEP</Col><Col id=\"name\">네팔</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">OMA</Col><Col id=\"name\">오만</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">PAK</Col><Col id=\"name\">파키스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">PLE</Col><Col id=\"name\">팔레스타인</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">PHI</Col><Col id=\"name\">필리핀</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">QAT</Col><Col id=\"name\">카타르</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">KSA</Col><Col id=\"name\">사우디아라비아</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">SIN</Col><Col id=\"name\">싱가포르</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">SRI</Col><Col id=\"name\">스리랑카</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">SYR</Col><Col id=\"name\">시리아</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">TJK</Col><Col id=\"name\">타지키스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">THA</Col><Col id=\"name\">태국</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">TLS</Col><Col id=\"name\">동티모르</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">TKM</Col><Col id=\"name\">투르크메니스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">UAE</Col><Col id=\"name\">아랍에미리트</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">UZB</Col><Col id=\"name\">우즈베키스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">VIE</Col><Col id=\"name\">베트남</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"bindColumn\">YEM</Col><Col id=\"name\">예멘</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">ALG</Col><Col id=\"name\">알제리</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">ANG</Col><Col id=\"name\">앙골라</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">BEN</Col><Col id=\"name\">베냉</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">BOT</Col><Col id=\"name\">보츠와나</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">BFA</Col><Col id=\"name\">부르키나파소</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">BDI</Col><Col id=\"name\">부룬디</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">CMR</Col><Col id=\"name\">카메룬</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">CPV</Col><Col id=\"name\">카보베르데</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">CTA</Col><Col id=\"name\">중앙아프리카 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">CHA</Col><Col id=\"name\">차드</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">COM</Col><Col id=\"name\">코모로</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">CGO</Col><Col id=\"name\">콩고 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">COD</Col><Col id=\"name\">콩고 민주 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">CIV</Col><Col id=\"name\">코트디부아르</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">DJI</Col><Col id=\"name\">지부티</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">EGY</Col><Col id=\"name\">이집트</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">EQG</Col><Col id=\"name\">적도 기니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">ERI</Col><Col id=\"name\">에리트레아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">SWZ</Col><Col id=\"name\">에스와티니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">ETH</Col><Col id=\"name\">에티오피아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">GAB</Col><Col id=\"name\">가봉</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">GAM</Col><Col id=\"name\">감비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">GHA</Col><Col id=\"name\">가나</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">GUI</Col><Col id=\"name\">기니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">GNB</Col><Col id=\"name\">기니비사우</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">KEN</Col><Col id=\"name\">케냐</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">LES</Col><Col id=\"name\">레소토</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">LBR</Col><Col id=\"name\">라이베리아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">LBY</Col><Col id=\"name\">리비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">MAD</Col><Col id=\"name\">마다가스카르</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">MWI</Col><Col id=\"name\">말라위</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">MLI</Col><Col id=\"name\">말리</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">MTN</Col><Col id=\"name\">모리타니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">MRI</Col><Col id=\"name\">모리셔스</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">MAR</Col><Col id=\"name\">모로코</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">MOZ</Col><Col id=\"name\">모잠비크</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">NAM</Col><Col id=\"name\">나미비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">NIG</Col><Col id=\"name\">니제르</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">NGA</Col><Col id=\"name\">나이지리아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">RWA</Col><Col id=\"name\">르완다</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">STP</Col><Col id=\"name\">상투메 프린시페</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">SEN</Col><Col id=\"name\">세네갈</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">SEY</Col><Col id=\"name\">세이셸</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">SLE</Col><Col id=\"name\">시에라리온</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">SOM</Col><Col id=\"name\">소말리아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">RSA</Col><Col id=\"name\">남아프리카 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">SUD</Col><Col id=\"name\">수단</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">SSD</Col><Col id=\"name\">남수단</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">TAN</Col><Col id=\"name\">탄자니아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">TOG</Col><Col id=\"name\">토고</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">TUN</Col><Col id=\"name\">튀니지</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">UGA</Col><Col id=\"name\">우간다</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">ZAM</Col><Col id=\"name\">잠비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"bindColumn\">ZIM</Col><Col id=\"name\">짐바브웨</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">AIA</Col><Col id=\"name\">앵귈라</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">ATG</Col><Col id=\"name\">앤티가 바부다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">ARU</Col><Col id=\"name\">아루바</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">BAH</Col><Col id=\"name\">바하마</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">BRB</Col><Col id=\"name\">바베이도스</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">BLZ</Col><Col id=\"name\">벨리즈</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">BER</Col><Col id=\"name\">버뮤다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">VGB</Col><Col id=\"name\">영국령 버진아일랜드</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">CAN</Col><Col id=\"name\">캐나다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">CAY</Col><Col id=\"name\">케이맨 제도</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">CRC</Col><Col id=\"name\">코스타리카</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">CUB</Col><Col id=\"name\">쿠바</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">CUW</Col><Col id=\"name\">퀴라소</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">DMA</Col><Col id=\"name\">도미니카 연방</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">DOM</Col><Col id=\"name\">도미니카 공화국</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">SLV</Col><Col id=\"name\">엘살바도르</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">GRN</Col><Col id=\"name\">그레나다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">GUA</Col><Col id=\"name\">과테말라</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">GUY</Col><Col id=\"name\">가이아나</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">HAI</Col><Col id=\"name\">아이티</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">HON</Col><Col id=\"name\">온두라스</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">JAM</Col><Col id=\"name\">자메이카</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">MEX</Col><Col id=\"name\">멕시코</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">MSR</Col><Col id=\"name\">몬트세랫</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">NCA</Col><Col id=\"name\">니카라과</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">PAN</Col><Col id=\"name\">파나마</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">PUR</Col><Col id=\"name\">푸에르토리코</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">SKN</Col><Col id=\"name\">세인트키츠 네비스</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">LCA</Col><Col id=\"name\">세인트루시아</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">VIN</Col><Col id=\"name\">세인트빈센트 그레나딘</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">SUR</Col><Col id=\"name\">수리남</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">TRI</Col><Col id=\"name\">트리니다드 토바고</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">TCA</Col><Col id=\"name\">터크스 케이커스 제도</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">USA</Col><Col id=\"name\">미국</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"bindColumn\">VIR</Col><Col id=\"name\">미국령 버진아일랜드</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">ARG</Col><Col id=\"name\">아르헨티나</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">BOL</Col><Col id=\"name\">볼리비아</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">BRA</Col><Col id=\"name\">브라질</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">CHI</Col><Col id=\"name\">칠레</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">COL</Col><Col id=\"name\">콜롬비아</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">ECU</Col><Col id=\"name\">에콰도르</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">PAR</Col><Col id=\"name\">파라과이</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">PER</Col><Col id=\"name\">페루</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">URU</Col><Col id=\"name\">우루과이</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"bindColumn\">VEN</Col><Col id=\"name\">베네수엘라</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">ASA</Col><Col id=\"name\">아메리칸사모아</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">COK</Col><Col id=\"name\">쿡 제도</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">FIJ</Col><Col id=\"name\">피지</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">GUM</Col><Col id=\"name\">괌</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">NCL</Col><Col id=\"name\">누벨칼레도니</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">NZL</Col><Col id=\"name\">뉴질랜드</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">PNG</Col><Col id=\"name\">파푸아뉴기니</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">SAM</Col><Col id=\"name\">사모아</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">SOL</Col><Col id=\"name\">솔로몬 제도</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">TAH</Col><Col id=\"name\">타히티</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">TGA</Col><Col id=\"name\">통가</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"bindColumn\">VAN</Col><Col id=\"name\">바누아투</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ALB</Col><Col id=\"name\">알바니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">AND</Col><Col id=\"name\">안도라</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ARM</Col><Col id=\"name\">아르메니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">AUT</Col><Col id=\"name\">오스트리아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">AZE</Col><Col id=\"name\">아제르바이잔</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">BLR</Col><Col id=\"name\">벨라루스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">BEL</Col><Col id=\"name\">벨기에</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">BIH</Col><Col id=\"name\">보스니아 헤르체고비나</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">BUL</Col><Col id=\"name\">불가리아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">CRO</Col><Col id=\"name\">크로아티아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">CYP</Col><Col id=\"name\">키프로스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">CZE</Col><Col id=\"name\">체코</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">DEN</Col><Col id=\"name\">덴마크</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ENG</Col><Col id=\"name\">잉글랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">EST</Col><Col id=\"name\">에스토니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">FRO</Col><Col id=\"name\">페로 제도</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">FIN</Col><Col id=\"name\">핀란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">FRA</Col><Col id=\"name\">프랑스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">GEO</Col><Col id=\"name\">조지아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">GER</Col><Col id=\"name\">독일</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">GIB</Col><Col id=\"name\">지브롤터</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">GRE</Col><Col id=\"name\">그리스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">HUN</Col><Col id=\"name\">헝가리</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ISL</Col><Col id=\"name\">아이슬란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ISR</Col><Col id=\"name\">이스라엘</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ITA</Col><Col id=\"name\">이탈리아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">KAZ</Col><Col id=\"name\">카자흐스탄</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">KVX</Col><Col id=\"name\">코소보</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">LVA</Col><Col id=\"name\">라트비아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">LIE</Col><Col id=\"name\">리히텐슈타인</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">LIT</Col><Col id=\"name\">리투아니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">LUX</Col><Col id=\"name\">룩셈부르크</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">MKD</Col><Col id=\"name\">북마케도니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">MLT</Col><Col id=\"name\">몰타</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">MDA</Col><Col id=\"name\">몰도바</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">MNE</Col><Col id=\"name\">몬테네그로</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">NED</Col><Col id=\"name\">네덜란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">NIR</Col><Col id=\"name\">북아일랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">NOR</Col><Col id=\"name\">노르웨이</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">POL</Col><Col id=\"name\">폴란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">POR</Col><Col id=\"name\">포르투갈</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">IRL</Col><Col id=\"name\">아일랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ROU</Col><Col id=\"name\">루마니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">RUS</Col><Col id=\"name\">러시아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">SMR</Col><Col id=\"name\">산마리노</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">SCO</Col><Col id=\"name\">스코틀랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">SRB</Col><Col id=\"name\">세르비아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">SVK</Col><Col id=\"name\">슬로바키아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">SVN</Col><Col id=\"name\">슬로베니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">ESP</Col><Col id=\"name\">스페인</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">SWE</Col><Col id=\"name\">스웨덴</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">SUI</Col><Col id=\"name\">스위스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">TUR</Col><Col id=\"name\">터키</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">UKR</Col><Col id=\"name\">우크라이나</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"bindColumn\">WAL</Col><Col id=\"name\">웨일스</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataSelectedUp", this);
            obj._setContents("<ColumnInfo><Column id=\"header\" type=\"STRING\" size=\"256\"/><Column id=\"bindColumn\" type=\"STRING\" size=\"256\"/><Column id=\"coSize\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"textAlign\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","315","10","376",null,null,"15",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_box06");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAll","20","10","255",null,null,"15",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsDataAll");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Group\"/><Cell col=\"1\" text=\"Code\"/></Band><Band id=\"body\"><Cell text=\"bind:group\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:bindColumn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSelected","320","50","365",null,null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDataSelected");
            obj.set_selecttype("multirow");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"97\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Group\"/><Cell col=\"1\" text=\"Code\"/><Cell col=\"2\" text=\"Column Sizes\"/></Band><Band id=\"body\"><Cell text=\"bind:group\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:bindColumn\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:coSize\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftToRight","283","101","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_moveRight");
            this.addChild(obj.name, obj);

            obj = new Button("btnRightToLeft","283","130","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_moveLeft");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","346","20","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_moveDown");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","320","20","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_moveUp");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","612","18","73","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("reset");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","537","18","73","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic04");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","700","10","240",null,null,"15",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_box05");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","857","88","73","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","711","22","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Group");
            obj.set_cssclass("sta_WF_label01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","711","52","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Code");
            obj.set_cssclass("sta_WF_label01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","780","25","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_text("YOUNG STEEL KOREA CO.,LTD.");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","780","55","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",950,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01_tab3.xfdl", function() {

        this.poc01_onload = function(obj,e)
        {
        	this.dsDataSelected.copyData(this.getOwnerFrame().form.dsGrdHeader);

        	var arrRow = [];
        	for(var i = 0 ; i < this.dsDataSelected.rowcount ; i++)
        	{
        		var row = this.dsDataAll.findRow("bindColumn",this.dsDataSelected.getColumn(i, "bindColumn"));
        		if(row > -1)arrRow.push(row);
        	}

        	//dataalll셋팅-위에랑 중복ㅇ니거 빼기
        	this.dsDataAll.deleteMultiRows(arrRow);
        	this.dsDataAll.applyChange();
        };




        this.btnLeftToRight_onclick = function(obj,e)
        {
        	var arrRow = this.grdAll.getSelectedRows();
        	var nToRow;
        	var nCnt = arrRow.length;

        	this.grdSelected.clearSelect();
        	for(var i = 0 ; i < nCnt ; i++)
        	{
        		nToRow = this.dsDataSelected.addRow();
        		this.dsDataSelected.copyRow(nToRow, this.dsDataAll, arrRow[i]);
        		this.grdSelected.selectRow(nToRow);
        	}

        	for(var i = nCnt -1 ; i > -1 ; i--)
        	{
        		this.dsDataAll.deleteRow(arrRow[i]);
        	}

        	this.grdAll.clearSelect();
        };

        this.btnRightToLeft_onclick = function(obj,e)
        {
        	var arrRow = this.grdSelected.getSelectedRows();
        	var nToRow;
        	var nCnt = arrRow.length;
        	var keyValue = new Array;

        	for(var i = nCnt -1 ; i > -1 ; i--)
        	{
        		keyValue.push(this.dsDataSelected.getColumn(arrRow[i], "code"));
        		nToRow = this.dsDataAll.addRow();
        		this.dsDataAll.copyRow(nToRow, this.dsDataSelected, arrRow[i]);
        		this.dsDataSelected.deleteRow(arrRow[i]);
        	}

        	//정렬
        	this.dsDataAll.set_keystring("");
        	this.dsDataAll.set_keystring("S:-coSize+group+code");

        // 	var nRow = -1;
        // 	//해당 row를 찾아간다.
        // 	for(var i = 0 ; i < nCnt ; i++)
        // 	{
        // 		nRow = this.dsDataAll.findRow("Column0", keyValue[i]);
        // 		this.grdAll.selectRow(nRow);
        // 	}
        // 	this.dsDataAll.set_rowposition(nRow);
        };

        this.btnOk_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("ViewFilterAll", this.dsDataAll.saveXML());
        	nexacro.setPrivateProfile("ViewFilterSelect", this.dsDataSelected.saveXML());
        	//로컬저장
        // 	var rtn = "";
        // 	for(var i = 0 ; i < this.dsDataSelected.rowcount ; i++)
        // 	{
        // 		rtn += this.dsDataSelected.getColumn(i, "code") + ", ";
        // 	}
        // 	rtn = rtn.substr(0, rtn.length -2);
        //	this.close(this.dsDataSelected);
        	this.opener.lookupFunc("fn_popCallback").call("ViewFilter", this.dsDataSelected, this);
        	//this.close();
        };

        this.btnUp_onclick = function(obj,e)
        {
        	var nRow = this.dsDataSelected.rowposition;
        	this.dsDataSelected.exchangeRow(nRow,nRow-1);
        	this.dsDataSelected.set_rowposition(nRow-1);
        	this.grdSelected.clearSelect();
        	this.grdSelected.selectRow(nRow-1);
        };

        this.btnDown_onclick = function(obj,e)
        {
        	var nRow = this.dsDataSelected.rowposition;
        	this.dsDataSelected.exchangeRow(nRow, nRow+1);
        	this.dsDataSelected.set_rowposition(nRow+1);
        	this.grdSelected.clearSelect();
        	this.grdSelected.selectRow(nRow+1);
        };

        this.Button09_onclick = function(obj,e)
        {
        	this.close();
        };


        this.Button00_onclick = function(obj,e)
        {
        	this.dsDataSelected.copyData(this.getOwnerFrame().form.dsGrdHeader);
        	this.dsDataAll.reset();
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	if( this.Edit07.value == undefined || this.Edit07.value == null || this.Edit07.value =="" ||
        	    this.Edit05.value == undefined || this.Edit05.value == null || this.Edit05.value =="")
        	{
        		alert("항목을 입력해주세요");
        		return;
        	}
        	var nRow = this.dsDataSelected.addRow();
        	this.dsDataSelected.setColumn(nRow, "group",this.Edit07.value);
        	this.dsDataSelected.setColumn(nRow, "header",this.Edit07.value);
        	this.dsDataSelected.setColumn(nRow, "bindColumn",this.Edit05.value);


        	var nRow = this.dsDataSelectedUp.addRow();
        	this.dsDataSelectedUp.setColumn(nRow, "group",this.Edit07.value);
        	this.dsDataSelectedUp.setColumn(nRow, "header",this.Edit07.value);
        	this.dsDataSelectedUp.setColumn(nRow, "bindColumn",this.Edit05.value);


        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	this.dsDataSelected.deleteRow(this.dsDataSelected.rowposition);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.poc01_onload,this);
            this.addEventHandler("ontimer",this.poc01_ontimer,this);
            this.btnLeftToRight.addEventHandler("onclick",this.btnLeftToRight_onclick,this);
            this.btnRightToLeft.addEventHandler("onclick",this.btnRightToLeft_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };

        this.loadIncludeScript("poc01_tab3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();