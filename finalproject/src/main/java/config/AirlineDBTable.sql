--회원
CREATE TABLE Customer(
   member_code number not null,
   member_id varchar2(20) not null,
   member_pwd varchar2(50) not null,
   member_name varchar2(50) not null,
   member_birth varchar2(20) not null,
   member_tel varchar2(100) not null,
   member_email varchar2(200) not null,
   member_addr varchar2(200) not null,
   constraint Customer_code_pk primary key(member_code)
);

create sequence Customer_seq
start with 1
increment by 1
nocache
nocycle;

select * from Customer

drop table Customer; 
drop sequence Customer_seq;

----------------------------------------------------------------------------------------------------------------------------------------------
--게시글분류
create table classification(
  class_code number,
  class_name varchar2(100),
  constraint class_code_pk primary key(class_code)
);

insert into classification values(1, '티켓상품문의');
insert into classification values(2, '티켓 상품변경/취소문의');
insert into classification values(3, '티켓 반품/교환문의');
insert into classification values(4, '예약문의');
insert into classification values(5, '입금문의');
insert into classification values(6, '기타문의');

drop table classification

----------------------------------------------------------------------------------------------------------------------------------------------
--게시글
create table board(
   	num number,
   	writer varchar2(20),
 	email varchar2(30),
	subject varchar2(50),
	reg_date DATE,
	readcount number default 0, 
	ref number, 
	re_step number, 
	re_level number, 
	content varchar2(100),
	ip varchar2(20),
    upload varchar2(300)
);

create sequence board_seq 
start with 1 
increment by 1
nocache
nocycle;

select * from board;

drop table board;
drop sequence board_seq;

--test------------------------------------------------------------------------------------------------
insert into board values(board_seq.nextval, '홍길동','young@aaaa.com','제목1',sysdate,0,board_seq.nextval,0,0,'내용 테스트.......','127.0.0.1','sample.txt');
------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------
--관리자
create table admin(
  admin_id varchar2(100),
  admin_password varchar2(100)
);

insert into admin values('admin', '1234');

----------------------------------------------------------------------------------------------------------------------------------------------
--공지사항
create table notice(
 notice_id number,
 notice_subject varchar2(200),
 notice_content varchar2(2000),
 notice_date DATE,
 notice_upload varchar2(300),
 constraint notice_id_pk primary key(notice_id)
);

create sequence notice_num_seq
start with 1
increment by 1
nocache
nocycle;

select * from notice

drop table notice
drop sequence notice_num_seq

--test--------------------------------------------------------------------------------------------------
insert into notice values(notice_num_seq.nextval, '티켓상품문의', '티켓의 상품에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 상품변경/취소문의', '티켓 상품 변경에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 반품/교환문의', '티켓 반품 및 교환에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '예약문의', '예약문의에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '입금문의', '입금문의에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '기타문의', '기타문의에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓상품문의', '티켓상품 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 상품변경/취소문의', '티켓 취소에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 반품/교환문의', '티켓 반품에 대하여 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '예약문의', '어제산 티켓의 예약에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '입금문의', '입금절차에 대해서 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '기타문의', '카드상품에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓상품문의', '티켓 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 상품변경/취소문의', '상품에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 반품/교환문의', '반품질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '예약문의', '예약문의 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '입금문의', '입금절차 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '기타문의', '기타 절차에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓상품문의', '티켓 상품문의에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 상품변경/취소문의', '상품 변경에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '티켓 반품/교환문의', '반품 절차에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '예약문의', '예약 및 변경에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '입금문의', '입금 날짜에 대해 질문합니다.', SYSDATE, 'img.jpg');
insert into notice values(notice_num_seq.nextval, '기타문의', '기타질의에 대해 질문합니다.', SYSDATE, 'img.jpg');

select b.* from
     (select rownum as rm, a.* from(
     select notice_id, notice_subject, notice_date from notice order by notice_id desc)a)b
     where b.rm >= 1 and b.rm <= 2

----------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------
--경유지
create table stopover(
	stopover_code number,
	airline_name varchar2(200),
	airline_nation varchar2(200),
	airline_site varchar2(200),
	route_depart_region varchar2(200),
	route_arrive_region varchar2(200),
	arrive_time varchar2(200), --공항도착시간
	depart_time varchar2(200), --공항출발시간
	route_before_estimate_time varchar2(200), --경유 공항까지 예상시간
	route_estimate_time varchar2(200), --공항대기시간
	route_after_estimate_time varchar2(200), --최종목적지 공항까지 예상시간
	route_flight_name varchar2(200), --항공편명
	constraint stopover_code_pk primary key(stopover_code)
);

insert into stopover values(1, '나리타항공', '일본', 'https://www.narita-airport.jp/kr/', '오사카, 일본 (KIX-간사이 국제공항)', '도쿄, 일본 (HND-하네다 공항)', '08:10', '08:50', '2h', '40m', '1h', 'MM568');
insert into stopover values(2, '간사이항공', '일본', 'https://www.narita-airport.jp/kr/', '오사카, 일본 (KIX-간사이 국제공항)', '도쿄, 일본 (HND-하네다 공항)', '11:10', '11:30', '2h', '20m', '1h10m', 'KJ568');

select * from stopover
drop table stopover;

----------------------------------------------------------------------------------------------------------------------------------------------
--좌석등급
create table seatgrade(
	grade_code number not null,
	grade_name varchar2(200),
	constraint grade_code_pk primary key(grade_code)
);

select * from seatgrade;
drop table seatgrade

----------------------------------------------------------------------------------------------------------------------------------------------
--좌석등급 데이터 삽입--
insert into seatgrade values(1, '일반석');
insert into seatgrade values(2, '비즈니스석');
insert into seatgrade values(3, '일등석');

----------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------
--항공기
create table plane(
   plane_code number not null, --항공기코드
   flight_name varchar2(200), --항공편명
   seating_capacity number(10), --좌석수
   airplane_model varchar2(200), --기종이름  
   airline_name varchar2(200), --항공사이름
   constraint plane_code_pk primary key(plane_code)
);

select * from plane;
drop table plane;

----------------------------------------------------------------------------------------------------------------------------------------------
--항공기 데이터 삽입 (왕복/편도(인천공항->하네다공항) 항공기 32대 필요)--

--03월05일 인천공항발 하네다공항도착
insert into plane values(1, 'MM808', 50, 'Airbus A330', '대한항공');
insert into plane values(2, 'AB808', 50, 'Airbus B747', '대한항공');
insert into plane values(3, 'KE2710', 50, 'Airbus B747', '아시아나항공');
insert into plane values(4, 'LE2452', 50, 'Airbus B767', '아시아나항공');
insert into plane values(5, 'MJ9232', 50, 'Airbus A380', 'JAL일본항공');
insert into plane values(6, 'MM822', 50, 'Airbus A350', 'JAL일본항공');
insert into plane values(7, 'AA808', 50, 'Airbus B747', '중국동방항공');
insert into plane values(8, 'BB808', 50, 'Airbus b777', '중국동방항공');
insert into plane values(9, 'CC008', 50, 'Airbus B767', 'ANA항공');
insert into plane values(10, 'CF708', 50, 'Airbus A330', 'ANA항공');
insert into plane values(11, 'A2e808', 50, 'Airbus A321', '진에어항공');
insert into plane values(12, 'AG108', 50, 'Airbus A321', '진에어항공');
insert into plane values(13, 'LL008', 50, 'Airbus A320', '티웨이항공');
insert into plane values(14, 'OP958', 50, 'Airbus H777', '티웨이항공');
insert into plane values(15, 'YT228', 50, 'Airbus K767', '이스타항공');
insert into plane values(16, 'YYUk08', 50, 'Airbus A323', '이스타항공');
insert into plane values(17, 'YAA228', 50, 'Airbus AB767', '에바항공');
insert into plane values(18, 'YDKk08', 50, 'Airbus GD323', '에바항공');
insert into plane values(19, 'ZN228', 50, 'Airbus HD767', '타이항공');
insert into plane values(20, 'AQUk08', 50, 'Airbus QQW323', '타이항공');
insert into plane values(21, 'ATL228', 50, 'Airbus QP767', '알래스카항공');
insert into plane values(22, 'CAUUk08', 50, 'Airbus QUY323', '알래스카항공');

--03월12일 하네다공항발 인천공항도착
insert into plane values(23, 'KL801', 50, 'Airbus A325', '대한항공');
insert into plane values(24, 'QW602', 50, 'Airbus A326', '대한항공');
insert into plane values(25, 'WE506', 50, 'Airbus B779', '아시아나항공');
insert into plane values(26, 'CS406', 50, 'Airbus Z7611', '아시아나항공');
insert into plane values(27, 'ZG104', 50, 'Airbus A430', 'JAL일본항공');
insert into plane values(28, 'ZI204', 50, 'Airbus B7117', 'JAL일본항공');
insert into plane values(29, 'ZJ202', 50, 'Airbus B777F', '중국동방항공');
insert into plane values(30, 'MZIY378', 50, 'Airbus B888', '중국동방항공');
insert into plane values(31, 'SUEx07', 50, 'Airbus A320', 'ANA항공');
insert into plane values(32, 'CNez07', 50, 'Airbus A354', 'ANA항공');
insert into plane values(33, 'ccna02', 50, 'Airbus B771', '진에어항공');
insert into plane values(34, 'DKSb02', 50, 'Airbus b990', '진에어항공');
insert into plane values(35, 'AKSs02', 50, 'Airbus B766', '티웨이항공');
insert into plane values(36, 'DME101', 50, 'Airbus A123', '티웨이항공');
insert into plane values(37, 'VNJ001', 50, 'Airbus A330', '이스타항공');
insert into plane values(38, 'DKS201', 50, 'Airbus B747', '이스타항공');
insert into plane values(39, 'NC228', 50, 'Airbus JA9767', '에바항공');
insert into plane values(40, 'NAQUk08', 50, 'Airbus QQW323', '에바항공');
insert into plane values(41, 'YWW728', 50, 'Airbus KKM767', '타이항공');
insert into plane values(42, 'YDNJ08', 50, 'Airbus QQB323', '타이항공');
insert into plane values(43, 'YQAT208', 50, 'Airbus PIZ767', '알래스카항공');
insert into plane values(44, 'YZZk08', 50, 'Airbus ZJR323', '알래스카항공');
----------------------------------------------------------------------------------------------------------------------------------------------
--항공기 모델
create table plane_model (
	plane_code number, --항공기코드(fk)
	grade_code number, --좌석등급(fk)
	seat_capacity number(10), --좌석등급에 대한 좌석 수
	constraint plane_code_fk3 foreign key(plane_code) references plane(plane_code) on delete cascade,
	constraint grade_code_fk2 foreign key(grade_code) references seatgrade(grade_code) on delete cascade
);

select * from plane_model;
drop table plane_model;

----------------------------------------------------------------------------------------------------------------------------------------------
--test
UPDATE plane_model SET seat_capacity=4 WHERE plane_code = 23 and grade_code = 3;

--Airbus A330-300 항공기에 일반석 5석 삽입, 비즈니스석 10석 삽입, 일등석 35석 삽입--
--나머지 항공기도 동일한 작업을 수행하도록 한다.--
--Airbus A330-300 항공기에 퍼스트 클래스 5석 삽입--
insert into plane_model values(1, 1, 5);
insert into plane_model values(1, 2, 10);
insert into plane_model values(1, 3, 35);

insert into plane_model values(2, 1, 5);
insert into plane_model values(2, 2, 10);
insert into plane_model values(2, 3, 35);

insert into plane_model values(3, 1, 5);
insert into plane_model values(3, 2, 10);
insert into plane_model values(3, 3, 35);

insert into plane_model values(4, 1, 5);
insert into plane_model values(4, 2, 10);
insert into plane_model values(4, 3, 35);

insert into plane_model values(5, 1, 5);
insert into plane_model values(5, 2, 10);
insert into plane_model values(5, 3, 35);

insert into plane_model values(6, 1, 5);
insert into plane_model values(6, 2, 10);
insert into plane_model values(6, 3, 35);

insert into plane_model values(7, 1, 5);
insert into plane_model values(7, 2, 10);
insert into plane_model values(7, 3, 35);

insert into plane_model values(8, 1, 5);
insert into plane_model values(8, 2, 10);
insert into plane_model values(8, 3, 35);

insert into plane_model values(9, 1, 5);
insert into plane_model values(9, 2, 10);
insert into plane_model values(9, 3, 35);

insert into plane_model values(10, 1, 5);
insert into plane_model values(10, 2, 10);
insert into plane_model values(10, 3, 35);

insert into plane_model values(11, 1, 5);
insert into plane_model values(11, 2, 10);
insert into plane_model values(11, 3, 35);

insert into plane_model values(12, 1, 5);
insert into plane_model values(12, 2, 10);
insert into plane_model values(12, 3, 35);

insert into plane_model values(13, 1, 5);
insert into plane_model values(13, 2, 10);
insert into plane_model values(13, 3, 35);

insert into plane_model values(14, 1, 5);
insert into plane_model values(14, 2, 10);
insert into plane_model values(14, 3, 35);

insert into plane_model values(15, 1, 5);
insert into plane_model values(15, 2, 10);
insert into plane_model values(15, 3, 35);

insert into plane_model values(16, 1, 5);
insert into plane_model values(16, 2, 10);
insert into plane_model values(16, 3, 35);

insert into plane_model values(17, 1, 5);
insert into plane_model values(17, 2, 10);
insert into plane_model values(17, 3, 35);

insert into plane_model values(18, 1, 5);
insert into plane_model values(18, 2, 10);
insert into plane_model values(18, 3, 35);

insert into plane_model values(19, 1, 5);
insert into plane_model values(19, 2, 10);
insert into plane_model values(19, 3, 35);

insert into plane_model values(20, 1, 5);
insert into plane_model values(20, 2, 10);
insert into plane_model values(20, 3, 35);

insert into plane_model values(21, 1, 5);
insert into plane_model values(21, 2, 10);
insert into plane_model values(21, 3, 35);

insert into plane_model values(22, 1, 5);
insert into plane_model values(22, 2, 10);
insert into plane_model values(22, 3, 35);

insert into plane_model values(23, 1, 5);
insert into plane_model values(23, 2, 10);
insert into plane_model values(23, 3, 35);

insert into plane_model values(24, 1, 5);
insert into plane_model values(24, 2, 10);
insert into plane_model values(24, 3, 35);

insert into plane_model values(25, 1, 5);
insert into plane_model values(25, 2, 10);
insert into plane_model values(25, 3, 35);

insert into plane_model values(26, 1, 5);
insert into plane_model values(26, 2, 10);
insert into plane_model values(26, 3, 35);

insert into plane_model values(27, 1, 5);
insert into plane_model values(27, 2, 10);
insert into plane_model values(27, 3, 35);

insert into plane_model values(28, 1, 5);
insert into plane_model values(28, 2, 10);
insert into plane_model values(28, 3, 35);

insert into plane_model values(29, 1, 5);
insert into plane_model values(29, 2, 10);
insert into plane_model values(29, 3, 35);

insert into plane_model values(30, 1, 5);
insert into plane_model values(30, 2, 10);
insert into plane_model values(30, 3, 35);

insert into plane_model values(31, 1, 5);
insert into plane_model values(31, 2, 10);
insert into plane_model values(31, 3, 35);

insert into plane_model values(32, 1, 5);
insert into plane_model values(32, 2, 10);
insert into plane_model values(32, 3, 35);

insert into plane_model values(33, 1, 5);
insert into plane_model values(33, 2, 10);
insert into plane_model values(33, 3, 35);

insert into plane_model values(34, 1, 5);
insert into plane_model values(34, 2, 10);
insert into plane_model values(34, 3, 35);

insert into plane_model values(35, 1, 5);
insert into plane_model values(35, 2, 10);
insert into plane_model values(35, 3, 35);

insert into plane_model values(36, 1, 5);
insert into plane_model values(36, 2, 10);
insert into plane_model values(36, 3, 35);

insert into plane_model values(37, 1, 5);
insert into plane_model values(37, 2, 10);
insert into plane_model values(37, 3, 35);

insert into plane_model values(38, 1, 5);
insert into plane_model values(38, 2, 10);
insert into plane_model values(38, 3, 35);

insert into plane_model values(39, 1, 5);
insert into plane_model values(39, 2, 10);
insert into plane_model values(39, 3, 35);

insert into plane_model values(40, 1, 5);
insert into plane_model values(40, 2, 10);
insert into plane_model values(40, 3, 35);

insert into plane_model values(41, 1, 5);
insert into plane_model values(41, 2, 10);
insert into plane_model values(41, 3, 35);

insert into plane_model values(42, 1, 5);
insert into plane_model values(42, 2, 10);
insert into plane_model values(42, 3, 35);

insert into plane_model values(43, 1, 5);
insert into plane_model values(43, 2, 10);
insert into plane_model values(43, 3, 35);

insert into plane_model values(44, 1, 5);
insert into plane_model values(44, 2, 10);
insert into plane_model values(44, 3, 35);


----------------------------------------------------------------------------------------------------------------------------------------------
--노선
create table route(
	stopover_code number, --경유코드(fk)
	route_code number not null, --노선코드
	plane_code number, --항공기코드(fk)
	airline_name varchar2(200), --항공사이름
	airline_nation varchar2(200), --국적
	airline_site varchar2(200), --홈페이지
	route_depart_day varchar2(200), --출발일
	route_depart_region varchar2(200), --출발지
	route_arrive_region varchar2(200), --도착지
	depart_time varchar2(200), --출발시간
	arrive_time varchar2(200), --도착시간
	route_charge number(10), --기본요금
	route_register_day DATE, --노선등록일
	route_estimate_time varchar2(200), --경로예상시간
	route_type varchar2(200), --경로타입
	route_distance varchar2(200), --총거리
 	constraint route_code_pk primary key(route_code),
 	constraint stopover_code_fk2 foreign key(stopover_code) references stopover(stopover_code) on delete cascade,
 	constraint plane_code_fk2 foreign key(plane_code) references plane(plane_code) on delete cascade
);

create sequence route_seq_num
start with 1
increment by 1
nocache
nocycle;

select * from route

drop table route;
drop sequence route_seq_num;

--test-------------------------------------------------------------------------------------------------------------------------------------------
select * from route 
order by route_charge asc

select b.* from
	     (select rownum as rm, a.* from(
	     select route_code, airline_name, depart_time, arrive_time, route_estimate_time, route_type from route order by route_code asc)a)b
	     where b.rm >= 1 and b.rm <= 2
	     
select count(*) from route where route_depart_day = '2018.03.12' and route_depart_region = '도쿄, 일본 (HND-하네다 공항)' 
and route_arrive_region = '서울, 한국 (ICN-인천국제공항)' and airline_name = '대한항공'

select b.* from
(select rownum as rm, a.* from(
select route_code, airline_name, depart_time, arrive_time, route_estimate_time, route_type, route_charge, plane_code, route_depart_region, route_arrive_region from route 
where route_depart_day = '2018.03.05' and route_depart_region = '서울, 한국 (ICN-인천국제공항)' and route_arrive_region = '도쿄, 일본 (HND-하네다 공항)' 
and airline_name = '대한항공'
order by route_code asc)a)b
where b.rm >= 1 and b.rm <= 5
--------------------------------------------------------------------------------------------------------------------------------------------------		


------------------------------------------------------------------------------------------------------------------------------------------------
--노선 데이터 삽입--

--서울, 한국 (ICN-인천국제공항) -> 도쿄, 일본 (HND-하네다 공항)
--가는날 예시(2018.03.05)22개 ~ 오는날 예시(2018.03.12)22개

--가는날 예시(2018.03.05)-------------------------------
insert into route values(
1,
route_seq_num.nextval,
1,
'대한항공',
'대한민국',
'https://kr.koreanair.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 09:10',
'2018-03-05 / 11:10',
840000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
2,
'대한항공',
'대한민국',
'https://kr.koreanair.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 12:10',
'2018-03-05 / 14:10',
830000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
3,
'아시아나항공',
'대한민국',
'http://flyasiana.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 07:10',
'2018-03-05 / 09:30',
940000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
4,
'아시아나항공',
'대한민국',
'http://flyasiana.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 06:10',
'2018-03-05 / 09:50',
930000,
sysdate,
'3h 40m',
'경유',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
5,
'JAL일본항공',
'대한민국',
'http://www.kr.jal.co.jp/krl/ko/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 09:10',
'2018-03-05 / 11:05',
2210000,
sysdate,
'1h 55m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
6,
'JAL일본항공',
'대한민국',
'http://www.kr.jal.co.jp/krl/ko/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 12:00',
'2018-03-05 / 01:55',
2240000,
sysdate,
'1h 55m',
'직항',
'1,220km'
);

insert into route values(
2,
route_seq_num.nextval,
7,
'중국동방항공',
'중국',
'http://www.easternair.co.kr/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 09:10',
'2018-03-05 / 12:40',
140000,
sysdate,
'3h 30m',
'경유',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
8,
'중국동방항공',
'중국',
'http://www.easternair.co.kr/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 12:10',
'2018-03-05 / 14:50',
130000,
sysdate,
'2h 40m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
9,
'ANA항공',
'대한민국',
'http://www.ana.co.jp/asw/wws/kr/k/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 18:10',
'2018-03-05 / 20:45',
1240000,
sysdate,
'2h 35m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
10,
'ANA항공',
'대한민국',
'http://www.ana.co.jp/asw/wws/kr/k/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 20:10',
'2018-03-05 / 22:45',
1230000,
sysdate,
'2h 35m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
11,
'진에어항공',
'대한민국',
'http://www.jinair.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 09:10',
'2018-03-05 / 11:30',
140000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
12,
'진에어항공',
'대한민국',
'http://www.jinair.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 16:10',
'2018-03-05 / 18:30',
140000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
13,
'티웨이항공',
'대한민국',
'http://www.flypeach.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 07:10',
'2018-03-05 / 09:10',
740000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
14,
'티웨이항공',
'대한민국',
'http://www.flypeach.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 15:10',
'2018-03-05 / 17:10',
750000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
15,
'이스타항공',
'대한민국',
'https://www.eastarjet.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 09:10',
'2018-03-05 / 11:30',
540000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
16,
'이스타항공',
'대한민국',
'https://www.eastarjet.com',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 09:30',
'2018-03-05 / 11:50',
550000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
17,
'에바항공',
'대만',
'https://www.evaair.com/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 07:30',
'2018-03-05 / 09:50',
350000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
18,
'에바항공',
'대만',
'https://www.evaair.com/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 18:30',
'2018-03-05 / 20:50',
360000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
19,
'타이항공',
'태국',
'https://www.thaiairways.com/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 22:30',
'2018-03-05 / 00:40',
450000,
sysdate,
'2h 10m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
20,
'타이항공',
'태국',
'https://www.thaiairways.com/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 13:30',
'2018-03-05 / 15:55',
440000,
sysdate,
'2h 25m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
21,
'알래스카항공',
'미국',
'https://www.alaskaair.com/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 16:30',
'2018-03-05 / 18:32',
650000,
sysdate,
'2h 02m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
22,
'알래스카항공',
'미국',
'https://www.alaskaair.com/',
'2018.03.05',
'서울, 한국 (ICN-인천국제공항)',
'도쿄, 일본 (HND-하네다 공항)',
'2018-03-05 / 09:30',
'2018-03-05 / 11:32',
640000,
sysdate,
'2h 02m',
'직항',
'1,220km'
);

-----------------------------------------------------
--오는날 예시(2018.03.12)-------------------------------
insert into route values(
1,
route_seq_num.nextval,
23,
'대한항공',
'대한민국',
'https://kr.koreanair.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 09:10',
'2018-03-12 / 11:10',
840000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
24,
'대한항공',
'대한민국',
'https://kr.koreanair.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 12:10',
'2018-03-12 / 14:10',
830000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
25,
'아시아나항공',
'대한민국',
'http://flyasiana.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 07:10',
'2018-03-12 / 09:30',
940000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
26,
'아시아나항공',
'대한민국',
'http://flyasiana.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 06:10',
'2018-03-12 / 08:30',
930000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);


insert into route values(
1,
route_seq_num.nextval,
27,
'JAL일본항공',
'대한민국',
'http://www.kr.jal.co.jp/krl/ko/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12  / 09:10',
'2018-03-12 / 11:05',
2210000,
sysdate,
'1h 55m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
28,
'JAL일본항공',
'대한민국',
'http://www.kr.jal.co.jp/krl/ko/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12  / 12:00',
'2018-03-12 / 01:55',
2240000,
sysdate,
'1h 55m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
29,
'중국동방항공',
'중국',
'http://www.easternair.co.kr/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 09:10',
'2018-03-12 / 11:50',
140000,
sysdate,
'2h 40m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
30,
'중국동방항공',
'중국',
'http://www.easternair.co.kr/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 12:10',
'2018-03-12 / 14:50',
130000,
sysdate,
'2h 40m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
31,
'ANA항공',
'대한민국',
'http://www.ana.co.jp/asw/wws/kr/k/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 18:10',
'2018-03-12 / 20:45',
1240000,
sysdate,
'2h 35m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
32,
'ANA항공',
'대한민국',
'http://www.ana.co.jp/asw/wws/kr/k/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 20:10',
'2018-03-12 / 22:45',
1230000,
sysdate,
'2h 35m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
33,
'진에어항공',
'대한민국',
'http://www.jinair.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 09:10',
'2018-03-12 / 11:30',
140000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
34,
'진에어항공',
'대한민국',
'http://www.jinair.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 16:10',
'2018-03-12 / 18:30',
140000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
35,
'티웨이항공',
'대한민국',
'http://www.flypeach.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 07:10',
'2018-03-12 / 09:10',
740000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
36,
'티웨이항공',
'대한민국',
'http://www.flypeach.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 15:10',
'2018-03-12 / 17:10',
750000,
sysdate,
'2h',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
37,
'이스타항공',
'대한민국',
'https://www.eastarjet.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 09:10',
'2018-03-12 / 11:30',
540000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
38,
'이스타항공',
'대한민국',
'https://www.eastarjet.com',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 09:30',
'2018-03-12 / 11:50',
550000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
39,
'에바항공',
'대만',
'https://www.evaair.com/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 07:30',
'2018-03-12 / 09:50',
370000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
40,
'에바항공',
'대만',
'https://www.evaair.com/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 18:30',
'2018-03-12 / 20:50',
360000,
sysdate,
'2h 20m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
41,
'타이항공',
'태국',
'https://www.thaiairways.com/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 22:30',
'2018-03-12 / 00:40',
450000,
sysdate,
'2h 10m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
42,
'타이항공',
'태국',
'https://www.thaiairways.com/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 13:30',
'2018-03-12 / 15:55',
440000,
sysdate,
'2h 25m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
43,
'알래스카항공',
'미국',
'https://www.alaskaair.com/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 16:30',
'2018-03-12 / 18:32',
650000,
sysdate,
'2h 02m',
'직항',
'1,220km'
);

insert into route values(
1,
route_seq_num.nextval,
44,
'알래스카항공',
'미국',
'https://www.alaskaair.com/',
'2018.03.12',
'도쿄, 일본 (HND-하네다 공항)',
'서울, 한국 (ICN-인천국제공항)',
'2018-03-12 / 09:30',
'2018-03-12 / 11:32',
640000,
sysdate,
'2h 02m',
'직항',
'1,220km'
);

----------------------------------------------------------------------------------------------------------------------------------------------
--예약

--편도일때 항공기 코드 1개 들어감
--편도(경유)일때 항공기 코드 2개 들어감

--왕복일때 항공기 코드 2개 들어감
--왕복(경유)일때 항공기 코드 3개 들어감
   
create table reserve( 
   reserve_code number not null, --예약코드(pk)
   ticket_type number,	--(왕복,편도)구분여부
   member_id varchar2(200), --회원번호(fk) : 회원번호로 하지않고 세션영역에 저장해놓은 회원아이디로 할 것. 회원아이디에 한하여 예약내역 취소내역을 확인할 수 있다. 
   reserve_depart_day varchar2(200), --출발일
   reserve_journey varchar2(200), --여정
   reserve_state varchar2(200), --결제상태(실시간적 상태를 알려줌)
   reserve_total_price number(10), --결제요금(총 결제 금액) -> 다음 jsp로 넘겨줌
   reserve_paymethod varchar2(200), --결제방법(항상 카카오페이로 등록) -> 다음 jsp로 넘겨줌
   reserve_date DATE, --결제날짜(결제한 날짜) ->다음 jsp로 넘겨줌
   constraint reserve_code_pk primary key(reserve_code)
);

create sequence reserve_num_seq
start with 1
increment by 1
nocache
nocycle;

select * from reserve;

delete from reserve
drop table reserve;
drop sequence reserve_num_seq;

-------------test------------------------------------------------------------------------------------------------------------------------------
insert into reserve values(reserve_num_seq.nextval, 1,'sitditrd', '2018.03.05 / 08:00', '서울, 인천공항(ICN) -> 일본 하네다공항(HCN)', '예약완료', 300000,'카카오페이', sysdate);
insert into reserve values(reserve_num_seq.nextval, 1,'sitditrd', '2018.03.05 / 08:00', '서울, 인천공항(ICN) -> 일본 하네다공항(HCN)', '예약완료', 300000,'카카오페이', sysdate);
insert into reserve values(reserve_num_seq.nextval, 1,'sitditrd', '2018.03.05 / 08:00', '서울, 인천공항(ICN) -> 일본 하네다공항(HCN)', '예약완료', 300000,'카카오페이', sysdate);
insert into reserve values(reserve_num_seq.nextval, 1,'sitditrd', '2018.03.05 / 08:00', '서울, 인천공항(ICN) -> 일본 하네다공항(HCN)', '예약완료', 300000,'카카오페이', sysdate);
insert into reserve values(reserve_num_seq.nextval, 1,'sitditrd', '2018.03.05 / 08:00', '서울, 인천공항(ICN) -> 일본 하네다공항(HCN)', '예약완료', 300000,'카카오페이', sysdate);
insert into reserve values(reserve_num_seq.nextval, 1,'sitditrd', '2018.03.05 / 08:00', '서울, 인천공항(ICN) -> 일본 하네다공항(HCN)', '예약완료', 300000,'카카오페이', sysdate);
insert into reserve values(reserve_num_seq.nextval, 1,'sitditrd', '2018.03.05 / 08:00', '서울, 인천공항(ICN) -> 일본 하네다공항(HCN)', '예약완료', 300000,'카카오페이', sysdate);
-------------test------------------------------------------------------------------------------------------------------------------------------
select count(*) 
from reserve
where member_id = 'sitditrd'
		
select reserve_code, ticket_type, ro.depart_time, ro.route_depart_region, ro.route_arrive_region, reserve_total_seat
from reserve re, route ro
where member_id = 'sitditrd'
and re.route_code = ro.route_code
order by reserve_code desc
		
select b.* from
(select rownum as rm, a.* from(
select * from board 
order by ref desc, re_step asc)a)b
where b.rm >= 1 and b.rm <= 3
		
select b.* from
(select rownum as rm, a.* from(
select reserve_code, ticket_type, ro.depart_time, ro.route_depart_region, ro.route_arrive_region, reserve_total_seat
from reserve re, route ro
where member_id = 'sitditrd'
and re.route_code = ro.route_code
order by reserve_code desc)a)b
where b.rm >= 1 and b.rm <= 3

----------------------------------------------------------------------------------------------------------------------------------------------
--예약상세(탑승자 정보)
create table reserve_detail(
	reserve_detail_code number, 
	passname varchar2(100), --탑승자 이름
	passgender varchar2(100), --탑승자 성별
	passbirth varchar2(100), --탑승자 생년월일
	passnumber varchar2(100), --탑승자 여권번호
	passcountry varchar2(100), --탑승자 여권발행국가
    constraint reserve_detail_code_fk foreign key(reserve_detail_code) references reserve(reserve_code) on delete cascade
);

select * from reserve_detail
drop table reserve_detail
------------------test------------------------------------------------------------------------------------------------------------------------
insert into reserve_detail values(1, '안주환','male','1999-09-09','m1234','대한민국');
insert into reserve_detail values(1, '안주환','male','1988-08-08','m4321','대한민국');
insert into reserve_detail values(2, '안주환','male','1999-09-09','m1234','대한민국');
insert into reserve_detail values(2, '안주환','male','1988-08-08','m4321','대한민국');
insert into reserve_detail values(3, '안주환','male','1988-08-08','m4321','대한민국');
insert into reserve_detail values(4, '안주환','male','1988-08-08','m4321','대한민국');
insert into reserve_detail values(5, '안주환','male','1988-08-08','m4321','대한민국');
insert into reserve_detail values(6, '안주환','male','1988-08-08','m4321','대한민국');
insert into reserve_detail values(7, '안주환','male','1988-08-08','m4321','대한민국');

------------------test------------------------------------------------------------------------------------------------------------------------
select * from reserve_detail where reserve_code = 1

select reserve_code, passname, passgender, passbirth, passnumber, passcountry from reserve_detail where reserve_code = 1
----------------------------------------------------------------------------------------------------------------------------------------------
--예약상세(항공티켓정보)
create table reserve_detail2(
	reserve_detail2_code number,
	detail_depart_region varchar2(200), --출발지
	detail_arrive_region varchar2(200), --도착지
	detail_depart_day varchar2(200), --출발일
	detail_arrive_day varchar2(200), --도착일
	detail_airline_name varchar2(200), --항공사
	detail_airplane_model varchar2(200), --항공기종
	detail_flight_name varchar2(200), --항공편명
	detail_seat_grade varchar2(200), --좌석등급
	detail_seat_total number(10), --좌석수
	detail_stopover_type varchar2(200), --경유구분(경유구분에 따라서 td셀의 background색을 변경함)
	constraint reserve_detail2_code_fk foreign key(reserve_detail2_code) references reserve(reserve_code) on delete cascade
);

select * from reserve_detail2
drop table reserve_detail2
----------------------------------------------------------------------------------------------------------------------------------------------
--환불
create table cancel(
   cancel_code number,	--환불코드 (pk)
   member_id varchar2(200),	--환불하는사람아이디
   reserve_code	number,	--예약코드
   cancel_day DATE,		--취소날짜
   cancel_reason varchar2(600),		--사유
   constraint cancel_code_pk primary key(cancel_code)
);

create sequence cancel_num_seq
start with 1
increment by 1
nocache
nocycle;

select * from cancel
drop sequence cancel_num_seq;

----------------------------------------------------------------------------------------------------------------------------------------------
--DROP 테이블
DROP TABLE Customer CASCADE CONSTRAINTS;
DROP TABLE reserve CASCADE CONSTRAINTS;
DROP TABLE reserve_detail CASCADE CONSTRAINTS;
DROP TABLE cancel CASCADE CONSTRAINTS;
DROP TABLE cancel_detail CASCADE CONSTRAINTS;
DROP TABLE classification CASCADE CONSTRAINTS;
DROP TABLE board CASCADE CONSTRAINTS;
DROP TABLE admin CASCADE CONSTRAINTS;
DROP TABLE notice CASCADE CONSTRAINTS;
DROP TABLE classify CASCADE CONSTRAINTS;
DROP TABLE route CASCADE CONSTRAINTS;
DROP TABLE stopover CASCADE CONSTRAINTS;
DROP TABLE plane CASCADE CONSTRAINTS;
DROP TABLE plane_model CASCADE CONSTRAINTS;
DROP TABLE seatgrade CASCADE CONSTRAINTS;
DROP TABLE seatcode CASCADE CONSTRAINTS;

--drop SEQUENCE 
DROP SEQUENCE Customer_seq;
DROP SEQUENCE reserve_num_seq;
DROP SEQUENCE cancel_num_seq;
DROP SEQUENCE board_seq;
DROP SEQUENCE notice_num_seq;
DROP SEQUENCE route_seq_num;
