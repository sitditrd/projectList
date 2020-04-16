--DROP TABLE
DROP TABLE MOTSYS
DROP TABLE EMP_INFO
DROP TABLE LECTURE_GUIDE
DROP TABLE LECTURE_CONSULTANT
DROP TABLE LECTURE_BOOK
DROP TABLE LECTURE_PLAN
DROP TABLE STUDENT_GRADE
DROP TABLE RANK_RATIO
DROP TABLE DISTRICT

--DROP SEQUENCE
DROP SEQUENCE MOTSYS_SEQ

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*MOTSYS*/
CREATE TABLE MOTSYS(
	MOTSYS_SEQ NUMBER,
	SYSTEM_CODE NUMBER,
	Bachelor_Ability_Type NUMBER,
	START_DATE VARCHAR2(10),
	START_TIME VARCHAR2(10),
	END_DATE VARCHAR2(10),
	END_TIME VARCHAR2(10),
	REMARK VARCHAR2(200)
);

CREATE SEQUENCE MOTSYS_SEQ
START WITH 1
INCREMENT BY 1
NOCACHE
NOCYCLE

INSERT INTO MOTSYS VALUES(MOTSYS_SEQ.NEXTVAL, 0, 0, '20180910', '09:00', '20190131', '23:59', '수행평가관리는종료일만적용됨, 성적입력은 정상대로');

SELECT *
FROM MOTSYS

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*EMP_INFO*/
CREATE TABLE EMP_INFO(
	EMP_NO NUMBER NOT NULL,
	EMP_NAME VARCHAR2(15) NOT NULL,
	EMP_REG_NUM NUMBER,
	WORK_FLAG NUMBER,
	DUTY_NAME VARCHAR2(30),
	WORK_NAME VARCHAR2(20),
	MAJOR_NAME NUMBER
);

INSERT INTO EMP_INFO VALUES(2007553, '박창민', '', 1, '', '', 1);
INSERT INTO EMP_INFO VALUES(2018024, '백근택', '', 1, '', '', 2);
INSERT INTO EMP_INFO VALUES(2018519, '나정호', '', 1, '', '', 3);

SELECT *
FROM EMP_INFO


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*LECTURE_GUIDE (강의목표, 강의진행방식, 평가방법)*/
CREATE TABLE LECTURE_GUIDE(
	GUIDE_KEY VARCHAR2(100) NOT NULL,
	G_GOAL VARCHAR2(2000), 
	G_PROCESS VARCHAR2(2000), 
	G_EVALUATE VARCHAR2(2000) 
);

INSERT INTO LECTURE_GUIDE VALUES
(
	 '060320'
	,'o 건축물의 설계와 시공에서 필요한 건축 재료에 대한 지식을 배양한다.      
o 건축물에 사용되는 건축 재료의 재료 특성에 대한 이해를 목표로 한다.      
o 건축물에 사용되는 재료의 종류 및 특징에 대한 이해를 목표로 한다.'
	,''
	,''
);

INSERT INTO LECTURE_GUIDE VALUES
(
	 '312650'
	,'회계학의 입문과목으로서 회계학이 무엇이며, 회계정보는 어떻게 생성되어 어떻게 이용되는 가를 학습하며,
회계학에서 사용되는 기본적인용어들을 이해하는 것이 주요 학습목표이다. 
이러한 회계용어와 복식부기의 원리를 기초로하여 회계정보의 생성과정과 분석방법을 학습한다.'
	,'기본교재에 대한 설명과 예제 및 문제풀이를 통한 학습이 주가된다.
학생들의 이해증진과 적극적인 수업참여를 통한 효과적인 회계학 
학습을 유도하기 위하여 수업중에 질의 응답이 병행된다.'
	,'중간고사 : 30% 
기말고사 : 30% 
출      석 : 20% 
과 제 물 : 20%'
);

INSERT INTO LECTURE_GUIDE VALUES
(
	 '400160'
	,'* 운영체제의 종류, 역할, 구조를 살펴보고 컴퓨터의 구성과 성능 향상 기술을 익히도록 한다.
* 운영체제를 통한 자원관리 ( 프로세스, 작업, 기억장치, 입출력장치, 파일, 보안 ) 에 대해 이해한다.
* 프로세스와 스레드의 개념을 이해하고, CPU 스케쥴링 알고리즘을 공부한다.'
	,'강의
토의
퀴즈
발표'
	,'중간고사 : 30% 
기말고사 : 30% 
출      석 : 20% 
과 제 물 : 20%'
);

SELECT *
FROM LECTURE_GUIDE

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*LECTURE_CONSULTANT (교과목 상담시간)*/
CREATE TABLE LECTURE_CONSULTANT(
	CONSULTANT_KEY VARCHAR2(100) NOT NULL,
	C_DATE VARCHAR2(10), 
	C_START_DATE VARCHAR2(20), 
	C_END_DATE VARCHAR2(20), 
	C_REMARK VARCHAR2(1000)
);

INSERT INTO LECTURE_CONSULTANT VALUES
(
	 '400160'
	,'월'
	,'13:30'
	,'13:50'
	,''
);

INSERT INTO LECTURE_CONSULTANT VALUES
(
	 '400160'
	,'월'
	,'16:50'
	,'17:10'
	,''
);

SELECT *
FROM LECTURE_CONSULTANT

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*LECTURE_BOOK (강의교재)*/
CREATE TABLE LECTURE_BOOK(
	BOOK_KEY VARCHAR2(100) NOT NULL,
	B_TYPE NUMBER, 
	B_NAME VARCHAR2(500), 
	B_AUTHOR VARCHAR2(100), 
	B_PUBLISHER VARCHAR2(100), 
	B_PUBLISH_YEAR VARCHAR2(10) 
);

INSERT INTO LECTURE_BOOK VALUES
(
	 '060320'
	,1
	,'건축재료학'
	,'안동훈외 2건'
	,'예문사'
	,'2015'
);

INSERT INTO LECTURE_BOOK VALUES
(
	 '060320'
	,0
	,'건축재료'
	,'대한건축학회'
	,'기문당'
	,'2011'
);

INSERT INTO LECTURE_BOOK VALUES
(
	 '312650'
	,1
	,'기초회계원리'
	,'백근택'
	,'자체교제'
	,'2018'
);

INSERT INTO LECTURE_BOOK VALUES
(
	 '312650'
	,0
	,'IFRS회계원리'
	,'송상엽'
	,'웅지'
	,'2018'
);

INSERT INTO LECTURE_BOOK VALUES
(
	 '400160'
	,0
	,'추후 공지 또는 별도공지'
	,''
	,''
	,''
);

INSERT INTO LECTURE_BOOK VALUES
(
	 '400160'
	,3
	,''
	,''
	,''
	,''
);

SELECT *
FROM LECTURE_BOOK

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*LECTURE_PLAN (주별 강의계획)*/
CREATE TABLE LECTURE_PLAN(
	PLAN_KEY VARCHAR2(100) NOT NULL,
	P_WEEK	NUMBER,
	P_CONTENT VARCHAR2(2000),
	P_APPARATUS VARCHAR2(2000),
	P_HOMEWORK VARCHAR2(2000),
	P_MATERIAL VARCHAR2(2000)
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,1
	,'[안전교육] 
[안전교육] 
[안전교육] 
- 교과목 오리엔테이션
- 자기진단 평가 안내
- 학습자용 워크노크 작성 요령에 대하여 안내한다.
- 수행평가 4-사례연구 과제에 대하여 설명한다.
- 건축재료의 발전에 관련된 프리젠테이션 자료를 준비해 교과목에 대한 흥미를 유발한다. 
- 건축재료의 분류방법과 일반적인 성질, 필요한 성능, 발전 방향 등에 대하여 설명한다.'
	,''
	,'1. 전반기_건축재료 카다로그 수집하여 종류별로 정리하기 (건축박람회 방문)
2. 후반기_건축물을 선정하여 재료 관련 조사 보고서 작성하기.'
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,2
	,'- 목재의 분류기준과 종류에 대하여 설명한다.
- 목재의 특성에 대하여 설명한다.
- 목재의 가공방법에 대하여 설명한다.
- 건축물에 사용된 목재의 예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,3
	,'- 점토제품의 특성에 대하여 설명한다.
- 점토제품의 종류에 대하여 설명한다.
- 석재의 특성에 대하여 설명한다.
- 석재의 종류에 대하여 설명한다.
- 건축물에 사용된 점토제품과 석재의 예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,4
	,'- 콘크리트를 구성하는 재료에 대하여 설명한다.
- 시멘트의 특성에 대하여 설명한다.
- 골재의 특성에 대하여 설명한다.
- 혼화재료 특성에 대하여 설명한다.
- 수행평가 1'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,5
	,'- 콘크리트의 특성에  대하여 설명한다.
- 콘크리트 배합 방법에 대하여 설명한다.
- 콘크리트의 특성을 경화전과 경화 후로 나누어 설명한다.
- 건축물에 사용되는 콘크리트 계열 제품에 대하여 설명한다.
- 건축물에 사용된 콘크리트와 관련 제품의  예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,6
	,'- 금속 재료의 특성을 철금속과 비철금속으로 구분하여 설명한다.
- 금속제품의 종류에 대하여 설명한다.
- 건축물에 사용된 금속제품의 예를 보여준다.
- 수행평가 2'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,7
	,'- 미장재료의 특징과 분류 방법에 대하여 설명한다.
- 각종 미장재료에 대하여 설명한다.
- 건축물에 사용된 미장재료의 예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,8
	,'[중간고사]'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,9
	,'- 유리재료의 특징과 분류 방법에 대하여 설명한다.
- 유리의 종류에 대하여 설명한다.
- 건축물에 사용된 유리재료의 예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,10
	,'- 합성수지 재료의 특성과 종류에 대하여 설명한다.
- 각종 합성수지 재료에 대하여 설명한다.
- 건축물에 사용된 합성수지, 고무재료의 예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,11
	,'- 도장재료의 특징과 분류 방법에 대하여 설명한다.
- 각종 도장재료에 대하여 설명한다.
- 건축물에 사용된 도장재료의 예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,12
	,'- 단열 재료의 특징과 분류 방법에 대하여 설명한다.
- 단열재료의 종류에 대하여 설명한다.
- 건축물에 사용된 단열재료의 예를 보여준다.
- 수행평가 3'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,12
	,'- 단열 재료의 특징과 분류 방법에 대하여 설명한다.
- 단열재료의 종류에 대하여 설명한다.
- 건축물에 사용된 단열재료의 예를 보여준다.
- 수행평가 3'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,13
	,'- 방수재료의 특성을 설명한다.
- 방수재료의 종류에 대하여 설명한다.
- 건축물에 사용된 방수재료의 예를 보여준다.'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,14
	,'- 건축물 부위별로 요구하는 재료의 성능에 대하여 설명한다.
- 건축물에 사용된 건축재료의 예를 보여준다.
- 수행평가 4'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '060320'
	,15
	,'[기말고사]'
	,''
	,''
	,'학습자용 워크북, 프리젠테이션자료'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,1
	,'[안전교육] 
[안전교육] 
[안전교육]
과목소개 및 강좌의 개요'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,2
	,'1. 회계원칙과 회계정보의 질적특성
2. 재무제표요소의 인식과 측정'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,3
	,'1. 현금성자산과 단기금융상품'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,4
	,'1.매출채권과 대손충당금'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,5
	,'1. 재고자산의 종류
2. 재고자산의 단가와 수량의 측정'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,6
	,'1. 유형자산의 특징과 취득원가
2. 감가상각비'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,7
	,'분개실습(1)'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,8
	,'[중간고사]'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,9
	,'1. 무형자산의 특징과 종류
2. 무형자산의 회계처리'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,10
	,'1. 부채의 종류와 분류
2. 유동부채와 비유동부채'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,11
	,'분개실습 (2)'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,12
	,'1. 자본과 주식
2. 주식의 소각과 취득
3. 자본의 구성항목'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,13
	,'1. 수익, 비용의 회계처리
2. 수익, 비용의 이연과 배분'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,14
	,'1. 재무재표의 결산
2. 결산회계처리'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '312650'
	,15
	,'[기말고사]'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,1
	,'[안전교육]	[안전교육]
 과목 소개 (운영체제의 개요) 및 운영방식
 평가 콘텐츠 구성 (중간, 기말)'
	,'빔 프로젝터'
	,'정보처리 산업기사
기출문제 검색, 정리'
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,2
	,'CH 1> 운영체제 소개
    운영체제의 종류, 역할, 구조
    운영체제에 대한 관점
    컴퓨터의 구조와 성능'
	,''
	,'오답 정리'
	,'수업 정리 퀴즈 인쇄물 배포'
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,3
	,'CH 2> 프로세스와 스레드 관리
     프로세스 제어 블록과 문맥 교환
     프로세스의 연산
     스레드
     동적 할당 영역, 시스템 호출'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,4
	,'CH 6> 프로세스 간 동기화 및 통신'
	,''
	,'파일, 파이프
 소켓 프로그래밍'
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,5
	,'CH 7> 교착 상태'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,6
	,'CH 5> CPU 스케쥴링과 알고리즘'
	,''
	,'정보처리 산업기사 점검 (풀이과정 명시)'
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,7
	,'CH 3>  메모리 관리'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,8
	,'[중간고사]'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,9
	,'CH 4> 가상 메모리'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,10
	,'CH 10> 입출력 시스템과 저장장치'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,11
	,'CH 11> 파일 시스템'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,12
	,'CH 12> 네트워크와 분산 시스템'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,13
	,'CH 1> 운영체제의 종류와 역사
*  유닉스 운영체제'
	,''
	,'정보처리 산업기사 점검 (풀이과정 명시)'
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,14
	,'보충 강의
  스마트폰 운영체제'
	,''
	,''
	,''
);

INSERT INTO LECTURE_PLAN VALUES
(
	 '400160'
	,15
	,'[기말고사]'
	,''
	,''
	,''
);

SELECT *
FROM LECTURE_PLAN

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

--STUDENT_GRADE
CREATE TABLE STUDENT_GRADE
(
	EMP_NO NUMBER NOT NULL,
	SUBJECT_KEY VARCHAR2(100) NOT NULL,
	SUBJECT VARCHAR2(100),
	GRADE NUMBER,
	ROOM NUMBER,
	NUM NUMBER,
	SEQUENCENUM NUMBER,
	EMP_NAME VARCHAR2(30),
	WORK_FLAG NUMBER,
	JOB_FLAG NUMBER,
	STUDY_FLAG NUMBER,
	MID_GRADE NUMBER,
	FIN_GRADE NUMBER,
	HOM_GRADE NUMBER,
	CUR_GRADE NUMBER,
	CYBER_FLAG NUMBER,
	TOTAL_GRADE NUMBER,
	RANK VARCHAR2(10),
	PANDF VARCHAR2(10),
	REJOIN_FLAG NUMBER
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'1'
	,'201806401'
	,'권혁진'
	,'1'
	,''
	,''
	,'30'
	,'30'
	,'20'
	,'20'
	,''
	,'100'
	,'A+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'3'
	,'201806403'
	,'문신웅'
	,'1'
	,''
	,''
	,'30'
	,'28'
	,'20'
	,'20'
	,''
	,'98'
	,'A+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'4'
	,'201806404'
	,'박형우'
	,'1'
	,''
	,''
	,'21'
	,'25'
	,'15'
	,'16'
	,''
	,'77'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'5'
	,'201806405'
	,'유서준'
	,'1'
	,''
	,''
	,'24'
	,'24'
	,'20'
	,'20'
	,''
	,'88'
	,'B+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'6'
	,'201806406'
	,'이민교'
	,'1'
	,''
	,''
	,'20'
	,'20'
	,'20'
	,'16'
	,''
	,'76'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'7'
	,'201806407'
	,'이충훈'
	,'1'
	,''
	,''
	,'21'
	,'21'
	,'20'
	,'16'
	,''
	,'78'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'8'
	,'201806408'
	,'이현식'
	,'1'
	,''
	,''
	,'25'
	,'25'
	,'20'
	,'16'
	,''
	,'86'
	,'B+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'10'
	,'201806410'
	,'전성황'
	,'1'
	,''
	,''
	,'22'
	,'22'
	,'15'
	,'16'
	,''
	,'75'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'11'
	,'201806411'
	,'전환성'
	,'1'
	,''
	,''
	,'25'
	,'25'
	,'20'
	,'16'
	,''
	,'86'
	,'B+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'12'
	,'201806412'
	,'정종학'
	,'1'
	,''
	,''
	,'30'
	,'24'
	,'20'
	,'20'
	,''
	,'94'
	,'A0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'13'
	,'201806413'
	,'주윤주'
	,'1'
	,''
	,''
	,'25'
	,'25'
	,'20'
	,'20'
	,''
	,'90'
	,'A0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'14'
	,'201806414'
	,'최지현'
	,'1'
	,''
	,''
	,'25'
	,'25'
	,'20'
	,'16'
	,''
	,'76'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'15'
	,'201806415'
	,'피정민'
	,'1'
	,''
	,''
	,'20'
	,'20'
	,'20'
	,'16'
	,''
	,'76'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2007553
	,'060320'
	,'건축전문학사'
	,'1'
	,'4'
	,'16'
	,'201806416'
	,'홍지환'
	,'1'
	,''
	,''
	,'24'
	,'24'
	,'20'
	,'20'
	,''
	,'88'
	,'B+'
	,''
	,''
);


INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'1'
	,'201831301'
	,'고경민'
	,'1'
	,''
	,''
	,'30'
	,'27'
	,'20'
	,'20'
	,''
	,'97'
	,'A+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'2'
	,'201831302'
	,'김선규'
	,'1'
	,''
	,''
	,'30'
	,'15'
	,'20'
	,'20'
	,''
	,'85'
	,'B+'
	,''
	,''
);


INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'3'
	,'201831303'
	,'원유미'
	,'1'
	,''
	,''
	,'30'
	,'26'
	,'20'
	,'20'
	,''
	,'96'
	,'A+'
	,''
	,''
);


INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'4'
	,'201831304'
	,'이주영'
	,'1'
	,''
	,''
	,'30'
	,'20'
	,'20'
	,'20'
	,''
	,'90'
	,'A0'
	,''
	,''
);


INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'5'
	,'201831305'
	,'정선길'
	,'1'
	,''
	,''
	,'30'
	,'27'
	,'20'
	,'20'
	,''
	,'97'
	,'A+'
	,''
	,''
);


INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'6'
	,'201831306'
	,'정희훈'
	,'1'
	,''
	,''
	,'30'
	,'20'
	,'20'
	,'20'
	,''
	,'90'
	,'A0'
	,''
	,''
);


INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'8'
	,'201831308'
	,'조윤진'
	,'1'
	,''
	,''
	,'30'
	,'26'
	,'20'
	,'20'
	,''
	,'96'
	,'A+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018024
	,'312650'
	,'경영전문학사(내)'
	,'1'
	,'3'
	,'9'
	,'201831309'
	,'황현욱'
	,'1'
	,''
	,''
	,'30'
	,'20'
	,'20'
	,'20'
	,''
	,'90'
	,'A0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'1'
	,'201540124'
	,'윤여준'
	,'1'
	,''
	,''
	,'28'
	,'23'
	,'20'
	,'20'
	,''
	,'91'
	,'A0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'2'
	,'201540107'
	,'김정민'
	,'1'
	,''
	,''
	,'28'
	,'22'
	,'20'
	,'18'
	,''
	,'88'
	,'B+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'3'
	,'201540112'
	,'박민재'
	,'1'
	,''
	,''
	,'21'
	,'10'
	,'19'
	,'20'
	,''
	,'70'
	,'C0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'4'
	,'201540220'
	,'안효준'
	,'1'
	,''
	,''
	,'16'
	,'19'
	,'20'
	,'20'
	,''
	,'75'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'5'
	,'201440225'
	,'이호범'
	,'1'
	,''
	,''
	,'26'
	,'23'
	,'20'
	,'20'
	,''
	,'86'
	,'B+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'6'
	,'201440103'
	,'김동영'
	,'1'
	,''
	,''
	,'23'
	,'17'
	,'20'
	,'20'
	,''
	,'80'
	,'B0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'7'
	,'201740207'
	,'김준홍'
	,'1'
	,''
	,''
	,'25'
	,'15'
	,'20'
	,'20'
	,''
	,'80'
	,'B0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'30'
	,'201740230'
	,'정희헌'
	,'1'
	,''
	,''
	,'25'
	,'15'
	,'20'
	,'20'
	,''
	,'80'
	,'B0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'33'
	,'201740133'
	,'이호준'
	,'1'
	,''
	,''
	,'28'
	,'23'
	,'20'
	,'20'
	,''
	,'89'
	,'B+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'36'
	,'201440236'
	,'허재혁'
	,'1'
	,''
	,''
	,'28'
	,'28'
	,'20'
	,'20'
	,''
	,'96'
	,'A+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'94'
	,'201540102'
	,'김광찬'
	,'1'
	,''
	,''
	,'22'
	,'13'
	,'20'
	,'20'
	,''
	,'75'
	,'C+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'95'
	,'201540104'
	,'김세빈'
	,'1'
	,''
	,''
	,'30'
	,'25'
	,'20'
	,'20'
	,''
	,'95'
	,'A+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'97'
	,'201540204'
	,'김경태'
	,'1'
	,''
	,''
	,'15'
	,'15'
	,'20'
	,'20'
	,''
	,'70'
	,'C0'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'98'
	,'201540221'
	,'오효근'
	,'1'
	,''
	,''
	,'23'
	,'25'
	,'20'
	,'20'
	,''
	,'88'
	,'B+'
	,''
	,''
);

INSERT INTO STUDENT_GRADE VALUES
(
	 2018519
	,'400160'
	,'콘텐츠보안코스'
	,'2'
	,'2'
	,'99'
	,'201540121'
	,'유경민'
	,'1'
	,''
	,''
	,'29'
	,'30'
	,'20'
	,'20'
	,''
	,'99'
	,'A+'
	,''
	,''
);


SELECT *
FROM STUDENT_GRADE

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

--RANK_RATIO
CREATE TABLE RANK_RATIO
(
	EMP_NO NUMBER,
	SUBJECT_KEY VARCHAR2(100),
	RANK VARCHAR2(10),
	NUM NUMBER,
	RATIO NUMBER
);

INSERT INTO RANK_RATIO VALUES
(
	 2007553
	,'060320'
	,''
	,''
	,100
);

INSERT INTO RANK_RATIO VALUES
(
	 2018024
	,'312650'
	,''
	,''
	,100
);

INSERT INTO RANK_RATIO VALUES
(
	 2018519
	,'400160'
	,''
	,''
	,100
);

SELECT *
FROM RANK_RATIO

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

--DISTRICT
CREATE TABLE DISTRICT
(
	RANK VARCHAR2(100),	
	STAND VARCHAR2(100),
	RATIO NUMBER
);

INSERT INTO DISTRICT VALUES
(
	 'A'
	,'30%이하'
	,0
);

INSERT INTO DISTRICT VALUES
(
	 'A,B'
	,'70%이하'
	,0
);

SELECT *
FROM DISTRICT
