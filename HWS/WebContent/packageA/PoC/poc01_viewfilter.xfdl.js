(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("w_dpsvusp00000");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataAll", this);
            obj.set_keystring("S:-coSize+group+code");
            obj._setContents("<ColumnInfo><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"coSize\" type=\"STRING\" size=\"256\"/><Column id=\"textAlign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"group\">ITEM</Col><Col id=\"code\">Number</Col><Col id=\"name\">Number</Col><Col id=\"coSize\">100</Col><Col id=\"textAlign\">left</Col></Row><Row><Col id=\"code\">Description</Col><Col id=\"name\">Description</Col><Col id=\"group\">ITEM</Col><Col id=\"coSize\">140</Col><Col id=\"textAlign\">left</Col></Row><Row><Col id=\"code\">Nominator</Col><Col id=\"name\">Nominator</Col><Col id=\"group\">ITEM</Col><Col id=\"coSize\">100</Col><Col id=\"textAlign\">left</Col></Row><Row><Col id=\"code\">AFG</Col><Col id=\"group\">AFC</Col><Col id=\"name\">아프가니스탄</Col></Row><Row><Col id=\"code\">AUS</Col><Col id=\"group\">AFC</Col><Col id=\"name\">오스트레일리아</Col></Row><Row><Col id=\"code\">BHR</Col><Col id=\"group\">AFC</Col><Col id=\"name\">바레인</Col></Row><Row><Col id=\"code\">BAN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">방글라데시</Col></Row><Row><Col id=\"code\">BHU</Col><Col id=\"group\">AFC</Col><Col id=\"name\">부탄</Col></Row><Row><Col id=\"code\">BRU</Col><Col id=\"group\">AFC</Col><Col id=\"name\">브루나이</Col></Row><Row><Col id=\"code\">CAM</Col><Col id=\"group\">AFC</Col><Col id=\"name\">캄보디아</Col></Row><Row><Col id=\"code\">CHN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">중국</Col></Row><Row><Col id=\"code\">TPE</Col><Col id=\"group\">AFC</Col><Col id=\"name\">중화 타이베이</Col></Row><Row><Col id=\"code\">HKG</Col><Col id=\"group\">AFC</Col><Col id=\"name\">홍콩</Col></Row><Row><Col id=\"code\">IND</Col><Col id=\"group\">AFC</Col><Col id=\"name\">인도</Col></Row><Row><Col id=\"code\">IDN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">인도네시아</Col></Row><Row><Col id=\"code\">IRN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">이란</Col></Row><Row><Col id=\"code\">IRQ</Col><Col id=\"group\">AFC</Col><Col id=\"name\">이라크</Col></Row><Row><Col id=\"code\">JPN</Col><Col id=\"group\">AFC</Col><Col id=\"name\">일본</Col></Row><Row><Col id=\"code\">JOR</Col><Col id=\"group\">AFC</Col><Col id=\"name\">요르단</Col></Row><Row><Col id=\"code\">PRK</Col><Col id=\"group\">AFC</Col><Col id=\"name\">조선민주주의인민공화국</Col></Row><Row><Col id=\"code\">KOR</Col><Col id=\"group\">AFC</Col><Col id=\"name\">대한민국</Col></Row><Row><Col id=\"code\">KUW</Col><Col id=\"group\">AFC</Col><Col id=\"name\">쿠웨이트</Col></Row><Row><Col id=\"code\">KGZ</Col><Col id=\"group\">AFC</Col><Col id=\"name\">키르기스스탄</Col></Row><Row><Col id=\"code\">LAO</Col><Col id=\"group\">AFC</Col><Col id=\"name\">라오스</Col></Row><Row><Col id=\"code\">LIB</Col><Col id=\"group\">AFC</Col><Col id=\"name\">레바논</Col></Row><Row><Col id=\"code\">MAC</Col><Col id=\"group\">AFC</Col><Col id=\"name\">마카오</Col></Row><Row><Col id=\"code\">MAS</Col><Col id=\"group\">AFC</Col><Col id=\"name\">말레이시아</Col></Row><Row><Col id=\"code\">MDV</Col><Col id=\"group\">AFC</Col><Col id=\"name\">몰디브</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">MNG</Col><Col id=\"name\">몽골</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">MYA</Col><Col id=\"name\">미얀마</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">NEP</Col><Col id=\"name\">네팔</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">OMA</Col><Col id=\"name\">오만</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">PAK</Col><Col id=\"name\">파키스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">PLE</Col><Col id=\"name\">팔레스타인</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">PHI</Col><Col id=\"name\">필리핀</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">QAT</Col><Col id=\"name\">카타르</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">KSA</Col><Col id=\"name\">사우디아라비아</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">SIN</Col><Col id=\"name\">싱가포르</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">SRI</Col><Col id=\"name\">스리랑카</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">SYR</Col><Col id=\"name\">시리아</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">TJK</Col><Col id=\"name\">타지키스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">THA</Col><Col id=\"name\">태국</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">TLS</Col><Col id=\"name\">동티모르</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">TKM</Col><Col id=\"name\">투르크메니스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">UAE</Col><Col id=\"name\">아랍에미리트</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">UZB</Col><Col id=\"name\">우즈베키스탄</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">VIE</Col><Col id=\"name\">베트남</Col></Row><Row><Col id=\"group\">AFC</Col><Col id=\"code\">YEM</Col><Col id=\"name\">예멘</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">ALG</Col><Col id=\"name\">알제리</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">ANG</Col><Col id=\"name\">앙골라</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">BEN</Col><Col id=\"name\">베냉</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">BOT</Col><Col id=\"name\">보츠와나</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">BFA</Col><Col id=\"name\">부르키나파소</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">BDI</Col><Col id=\"name\">부룬디</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">CMR</Col><Col id=\"name\">카메룬</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">CPV</Col><Col id=\"name\">카보베르데</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">CTA</Col><Col id=\"name\">중앙아프리카 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">CHA</Col><Col id=\"name\">차드</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">COM</Col><Col id=\"name\">코모로</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">CGO</Col><Col id=\"name\">콩고 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">COD</Col><Col id=\"name\">콩고 민주 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">CIV</Col><Col id=\"name\">코트디부아르</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">DJI</Col><Col id=\"name\">지부티</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">EGY</Col><Col id=\"name\">이집트</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">EQG</Col><Col id=\"name\">적도 기니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">ERI</Col><Col id=\"name\">에리트레아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">SWZ</Col><Col id=\"name\">에스와티니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">ETH</Col><Col id=\"name\">에티오피아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">GAB</Col><Col id=\"name\">가봉</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">GAM</Col><Col id=\"name\">감비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">GHA</Col><Col id=\"name\">가나</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">GUI</Col><Col id=\"name\">기니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">GNB</Col><Col id=\"name\">기니비사우</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">KEN</Col><Col id=\"name\">케냐</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">LES</Col><Col id=\"name\">레소토</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">LBR</Col><Col id=\"name\">라이베리아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">LBY</Col><Col id=\"name\">리비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">MAD</Col><Col id=\"name\">마다가스카르</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">MWI</Col><Col id=\"name\">말라위</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">MLI</Col><Col id=\"name\">말리</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">MTN</Col><Col id=\"name\">모리타니</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">MRI</Col><Col id=\"name\">모리셔스</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">MAR</Col><Col id=\"name\">모로코</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">MOZ</Col><Col id=\"name\">모잠비크</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">NAM</Col><Col id=\"name\">나미비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">NIG</Col><Col id=\"name\">니제르</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">NGA</Col><Col id=\"name\">나이지리아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">RWA</Col><Col id=\"name\">르완다</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">STP</Col><Col id=\"name\">상투메 프린시페</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">SEN</Col><Col id=\"name\">세네갈</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">SEY</Col><Col id=\"name\">세이셸</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">SLE</Col><Col id=\"name\">시에라리온</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">SOM</Col><Col id=\"name\">소말리아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">RSA</Col><Col id=\"name\">남아프리카 공화국</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">SUD</Col><Col id=\"name\">수단</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">SSD</Col><Col id=\"name\">남수단</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">TAN</Col><Col id=\"name\">탄자니아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">TOG</Col><Col id=\"name\">토고</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">TUN</Col><Col id=\"name\">튀니지</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">UGA</Col><Col id=\"name\">우간다</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">ZAM</Col><Col id=\"name\">잠비아</Col></Row><Row><Col id=\"group\">CAF</Col><Col id=\"code\">ZIM</Col><Col id=\"name\">짐바브웨</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">AIA</Col><Col id=\"name\">앵귈라</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">ATG</Col><Col id=\"name\">앤티가 바부다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">ARU</Col><Col id=\"name\">아루바</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">BAH</Col><Col id=\"name\">바하마</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">BRB</Col><Col id=\"name\">바베이도스</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">BLZ</Col><Col id=\"name\">벨리즈</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">BER</Col><Col id=\"name\">버뮤다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">VGB</Col><Col id=\"name\">영국령 버진아일랜드</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">CAN</Col><Col id=\"name\">캐나다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">CAY</Col><Col id=\"name\">케이맨 제도</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">CRC</Col><Col id=\"name\">코스타리카</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">CUB</Col><Col id=\"name\">쿠바</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">CUW</Col><Col id=\"name\">퀴라소</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">DMA</Col><Col id=\"name\">도미니카 연방</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">DOM</Col><Col id=\"name\">도미니카 공화국</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">SLV</Col><Col id=\"name\">엘살바도르</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">GRN</Col><Col id=\"name\">그레나다</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">GUA</Col><Col id=\"name\">과테말라</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">GUY</Col><Col id=\"name\">가이아나</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">HAI</Col><Col id=\"name\">아이티</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">HON</Col><Col id=\"name\">온두라스</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">JAM</Col><Col id=\"name\">자메이카</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">MEX</Col><Col id=\"name\">멕시코</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">MSR</Col><Col id=\"name\">몬트세랫</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">NCA</Col><Col id=\"name\">니카라과</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">PAN</Col><Col id=\"name\">파나마</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">PUR</Col><Col id=\"name\">푸에르토리코</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">SKN</Col><Col id=\"name\">세인트키츠 네비스</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">LCA</Col><Col id=\"name\">세인트루시아</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">VIN</Col><Col id=\"name\">세인트빈센트 그레나딘</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">SUR</Col><Col id=\"name\">수리남</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">TRI</Col><Col id=\"name\">트리니다드 토바고</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">TCA</Col><Col id=\"name\">터크스 케이커스 제도</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">USA</Col><Col id=\"name\">미국</Col></Row><Row><Col id=\"group\">CONCACAF</Col><Col id=\"code\">VIR</Col><Col id=\"name\">미국령 버진아일랜드</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">ARG</Col><Col id=\"name\">아르헨티나</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">BOL</Col><Col id=\"name\">볼리비아</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">BRA</Col><Col id=\"name\">브라질</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">CHI</Col><Col id=\"name\">칠레</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">COL</Col><Col id=\"name\">콜롬비아</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">ECU</Col><Col id=\"name\">에콰도르</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">PAR</Col><Col id=\"name\">파라과이</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">PER</Col><Col id=\"name\">페루</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">URU</Col><Col id=\"name\">우루과이</Col></Row><Row><Col id=\"group\">CONMEBOL</Col><Col id=\"code\">VEN</Col><Col id=\"name\">베네수엘라</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">ASA</Col><Col id=\"name\">아메리칸사모아</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">COK</Col><Col id=\"name\">쿡 제도</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">FIJ</Col><Col id=\"name\">피지</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">GUM</Col><Col id=\"name\">괌</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">NCL</Col><Col id=\"name\">누벨칼레도니</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">NZL</Col><Col id=\"name\">뉴질랜드</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">PNG</Col><Col id=\"name\">파푸아뉴기니</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">SAM</Col><Col id=\"name\">사모아</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">SOL</Col><Col id=\"name\">솔로몬 제도</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">TAH</Col><Col id=\"name\">타히티</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">TGA</Col><Col id=\"name\">통가</Col></Row><Row><Col id=\"group\">OFC</Col><Col id=\"code\">VAN</Col><Col id=\"name\">바누아투</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ALB</Col><Col id=\"name\">알바니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">AND</Col><Col id=\"name\">안도라</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ARM</Col><Col id=\"name\">아르메니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">AUT</Col><Col id=\"name\">오스트리아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">AZE</Col><Col id=\"name\">아제르바이잔</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">BLR</Col><Col id=\"name\">벨라루스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">BEL</Col><Col id=\"name\">벨기에</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">BIH</Col><Col id=\"name\">보스니아 헤르체고비나</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">BUL</Col><Col id=\"name\">불가리아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">CRO</Col><Col id=\"name\">크로아티아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">CYP</Col><Col id=\"name\">키프로스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">CZE</Col><Col id=\"name\">체코</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">DEN</Col><Col id=\"name\">덴마크</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ENG</Col><Col id=\"name\">잉글랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">EST</Col><Col id=\"name\">에스토니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">FRO</Col><Col id=\"name\">페로 제도</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">FIN</Col><Col id=\"name\">핀란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">FRA</Col><Col id=\"name\">프랑스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">GEO</Col><Col id=\"name\">조지아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">GER</Col><Col id=\"name\">독일</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">GIB</Col><Col id=\"name\">지브롤터</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">GRE</Col><Col id=\"name\">그리스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">HUN</Col><Col id=\"name\">헝가리</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ISL</Col><Col id=\"name\">아이슬란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ISR</Col><Col id=\"name\">이스라엘</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ITA</Col><Col id=\"name\">이탈리아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">KAZ</Col><Col id=\"name\">카자흐스탄</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">KVX</Col><Col id=\"name\">코소보</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">LVA</Col><Col id=\"name\">라트비아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">LIE</Col><Col id=\"name\">리히텐슈타인</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">LIT</Col><Col id=\"name\">리투아니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">LUX</Col><Col id=\"name\">룩셈부르크</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">MKD</Col><Col id=\"name\">북마케도니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">MLT</Col><Col id=\"name\">몰타</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">MDA</Col><Col id=\"name\">몰도바</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">MNE</Col><Col id=\"name\">몬테네그로</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">NED</Col><Col id=\"name\">네덜란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">NIR</Col><Col id=\"name\">북아일랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">NOR</Col><Col id=\"name\">노르웨이</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">POL</Col><Col id=\"name\">폴란드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">POR</Col><Col id=\"name\">포르투갈</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">IRL</Col><Col id=\"name\">아일랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ROU</Col><Col id=\"name\">루마니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">RUS</Col><Col id=\"name\">러시아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">SMR</Col><Col id=\"name\">산마리노</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">SCO</Col><Col id=\"name\">스코틀랜드</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">SRB</Col><Col id=\"name\">세르비아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">SVK</Col><Col id=\"name\">슬로바키아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">SVN</Col><Col id=\"name\">슬로베니아</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">ESP</Col><Col id=\"name\">스페인</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">SWE</Col><Col id=\"name\">스웨덴</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">SUI</Col><Col id=\"name\">스위스</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">TUR</Col><Col id=\"name\">터키</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">UKR</Col><Col id=\"name\">우크라이나</Col></Row><Row><Col id=\"group\">UEFA</Col><Col id=\"code\">WAL</Col><Col id=\"name\">웨일스</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataSelected", this);
            obj._setContents("<ColumnInfo><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"coSize\" type=\"STRING\" size=\"256\"/><Column id=\"textAlign\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","315","10","256",null,null,"60",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_box06");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,null,"80","30","20","19",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exit");
            obj.set_cssclass("btn_WF_basic05");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"80","30","103","19",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAll","20","10","255",null,null,"60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsDataAll");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Group\"/><Cell col=\"1\" text=\"Code\"/></Band><Band id=\"body\"><Cell text=\"bind:group\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSelected",null,"49","248",null,"23","65",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDataSelected");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Group\"/><Cell col=\"1\" text=\"Code\"/></Band><Band id=\"body\"><Cell text=\"bind:group\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftToRight","283","170","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_moveRight");
            this.addChild(obj.name, obj);

            obj = new Button("btnRightToLeft","283","199","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_moveLeft");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","541","20","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_moveDown");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","515","20","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_moveUp");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",590,460,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("poc01_viewfilter.xfdl", function() {

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


        this.w_dpsvusp00000_onload = function(obj,e)
        {
        	if(nexacro.getPrivateProfile("ViewFilterSelect") != null && nexacro.getPrivateProfile("ViewFilterSelect") != "" && nexacro.getPrivateProfile("ViewFilterSelect") != undefined)
        	{
        		this.dsDataAll.loadXML(nexacro.getPrivateProfile("ViewFilterAll"));
        		this.dsDataSelected.loadXML(nexacro.getPrivateProfile("ViewFilterSelect"));
         		this.dsDataAll.set_keystring("S:-coSize+group+code");
        // 		this.dsDataSelected.set_keystring("S:-coSize+group+code");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.w_dpsvusp00000_onload,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnLeftToRight.addEventHandler("onclick",this.btnLeftToRight_onclick,this);
            this.btnRightToLeft.addEventHandler("onclick",this.btnRightToLeft_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
        };

        this.loadIncludeScript("poc01_viewfilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
