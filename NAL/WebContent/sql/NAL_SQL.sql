--입력관리
CREATE TABLE V1
(
	 VOLUME_TITLE	VARCHAR2(500 CHAR)
	,VOLUME_PUBLISHER	VARCHAR2(200 CHAR)
	,VOLUME_NAME	VARCHAR2(500)
	,PUB_DATE	VARCHAR2(10)
	,ART_STATE_NAME	VARCHAR2(4000)
	,REASON	VARCHAR2(12)
	,ART_SELECTION_CNT	VARCHAR2(60)
	,KINX_ART_BIB_CNT	NUMBER
	,ART_STATE_DATE	VARCHAR2(10)
	,ER_YN	VARCHAR2(1)
	,DL_HANDOVER_DT	CHAR(14 CHAR)
	,JOURNAL_KIND_NAME	VARCHAR2(4000)
	,DATA_TYPE_NAME	VARCHAR2(4000)
	,TERM_NAME	VARCHAR2(4000)
	,ACQ_CNT	NUMBER
	,REMARK	VARCHAR2(4000 CHAR)
	,ISSN	VARCHAR2(9 CHAR)
	,PUB_TYPE_NAME	VARCHAR2(4000)
	,CONTROL_NO	VARCHAR2(14 CHAR)
	,CALL_NO	VARCHAR2(100 CHAR)
	,VOLUME_ID	VARCHAR2(10)
);

INSERT INTO V1 VALUES('Animal systematics, evolution and diversity = ASED', 'The Korean Society of Systematic Zoology', '제34권 제1호 (2018년 1월)', '2018-01-31', '색인완료', '', '', '9', '2018-08-13', 'N', '', '등재학술지', '전자자료', '계간', '1', '', '', '22346953', 'SERL1201300034', 'P 592 ㅎ155', '2750298');
INSERT INTO V1 VALUES('대한금연학회지= Journal of the Korean society for research on nicotine and tobacco', '대한금연학회', '제1권 제2호 (2010년 7월)', '2018-01-31', '색인완료', '', '', '5', '2010-07-31', 'Y', '', '일반학술지', '인쇄물(책자)', '반년간', '2', '', '', '20930828', 'SERL1000018114', 'P 613  ㄷ242', '1815126');
INSERT INTO V1 VALUES('조명·전기설비학회논문지= Journal of Korean institute of illuminating and electrical installation engineers', '한국조명·전기설비학회', '제24권 제9호 (2010년 9월)', '2010-09-30', '색인완료', '', '', '23', '2018-08-13', 'N', '', '등재학술지', '인쇄물(책자)', '월간', '2', '', '', '12294691', 'SERL1000009978', 'P 621.32 ㅈ391', '1815143');
INSERT INTO V1 VALUES('조명·전기설비학회논문지= Journal of Korean institute of illuminating and electrical installation engineers', '한국조명·전기설비학회', '제24권 제8호 (2010년 8월)', '2010-08-31', '색인완료', '', '', '20', '2018-08-13', 'N', '', '등재학술지', '인쇄물(책자)', '월간', '2', '', '', '12294691', 'SERL1000009978', 'P 621.32 ㅈ391', '1808850');
INSERT INTO V1 VALUES('挑園區農業改良場硏究彙報= Bulletin of the Taoyuan District agricultural research and extersion station, COA', '臺灣省挑園區農業改良場', '第62號 (2007年 12月)', '2007-12-15', '비색인', '', '', '0', '2018-08-13', 'N', '', '일반학술지', '인쇄물(책자)', '반년간', '1', '', '','02575523', 'SERL3000001405', 'PG 630.7 ㄷ323ㄴ', '1818327');

--단건 INSERT시에 대량의 데이터를 삽입하기에 오랜 시간이 걸리기 때문에 아래의 과정을 통해 테이블에 삽입하도록 한다.
INSERT INTO V1
SELECT *
FROM V1 
--WHERE ROWNUM <= 10

SELECT *
FROM V1

SELECT COUNT(*)
FROM V1

--서지관리
CREATE TABLE V2
(
	 DATA_TYPE_CODE VARCHAR2(10 CHAR)
	,DATA_TYPE_CODE_NAME VARCHAR2(4000)
	,MARC_TYPE_CODE VARCHAR2(10 CHAR)
	,MARC_TYPE_CODE_NAME VARCHAR2(4000)
	,DATA_DIV_CODE VARCHAR2(10 CHAR)	
	,DATA_DIV_CODE_NAME VARCHAR2(4000)
	,MARC_KIND_CODE VARCHAR2(10 CHAR)
	,TITLE VARCHAR2(500 CHAR)
	,AUTHOR VARCHAR2(500 CHAR)
	,PUBLISHER	VARCHAR2(200 CHAR)
	,PUB_YEAR	VARCHAR2(50 CHAR)
	,PLACE_CODE	VARCHAR2(10 CHAR)
	,CALL_NO	VARCHAR2(100 CHAR)
	,CLASSIFICATION_NO	VARCHAR2(50 CHAR)
	,VOLUMN_NO	VARCHAR2(50 CHAR)
	,LANG_CODE	VARCHAR2(10 CHAR)
	,CONTROL_NO	VARCHAR2(14 CHAR)
	,ISBN	VARCHAR2(50 CHAR)
	,BLIND_YN	CHAR(1 CHAR)
);

INSERT INTO V2 VALUES('10', '인쇄물(책자)', 'BK', '단행본', '30', '동양도서', '3', 'スコットランドの都市 : 英國にみるもう一つの都市形成の文化史論', '小林照夫 著', '白桃書房', '2001', '', '307.10942  ㄱ327ㅅ', '307.10942', '', 'jpn', 'MONO3200202994', '456155050X', 'N');
INSERT INTO V2 VALUES('10', '인쇄물(책자)', 'BK', '단행본', '30', '동양도서', '3', 'グロ-カル時代の地域づくり', '恩田守雄 著', '學文社', '2002', '', '307.1  ㅇ344ㄱ', '307.1', '', 'jpn', 'MONO3200203958', '4762011045', 'N');
INSERT INTO V2 VALUES('10', '인쇄물(책자)', 'BK', '단행본', '30', '동양도서', '3', 'まちづくり條例のつくり方 : まちをつくるシステム', '野口和雄 著', '野口和雄 著', '2002', '', '307.10953  ㄴ251ㅁ', '307.10953', '', 'jpn', 'MONO3200204031', '4880373540', 'N');
INSERT INTO V2 VALUES('10', '인쇄물(책자)', 'BK', '단행본', '10', '국내도서', '3', '과학기술 국민이해 제고를 위한 포럼 개최', '과학기술부', '과학기술부', '2000', '', '607  ㄱ373ㄱ', '607', '', 'kor', 'MONO1200101571', '', 'N');

--단건 INSERT시에 대량의 데이터를 삽입하기에 오랜 시간이 걸리기 때문에 아래의 과정을 통해 테이블에 삽입하도록 한다.
INSERT INTO V2
SELECT *
FROM V2 
--WHERE ROWNUM <= 10

SELECT *
FROM V2

SELECT COUNT(*)
FROM V2

--테이블 용량 확인하는 방법
SELECT owner,segment_name,segment_type,sum(bytes)/1024/1024 as MB
FROM dba_segments
WHERE segment_type='TABLE'
AND segment_name = 'TESTDB'
GROUP BY owner,segment_name,segment_type;