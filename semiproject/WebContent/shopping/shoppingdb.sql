--회원
CREATE TABLE member(
   member_code number not null,
   member_id varchar2(20) not null,
   member_pwd varchar2(50) not null,
   member_name varchar2(50) not null,
   member_birth varchar2(20) not null,
   member_tel varchar2(100) not null,
   member_email varchar2(200) not null,
   member_addr varchar2(200) not null,
   constraint member_code_pk primary key(member_code)
);

create sequence member_num_seq
start with 1
increment by 1

select * from member

drop table member;
drop sequence member_num_seq;

--카테고리
create table category(
   category_id number not null,
   category_name varchar2(100),
   constraint category_id_pk primary key(category_id)
);

drop table category;

----------------------------------------------------------------------------------------------------------------------------------------------
--카테고리 데이터 삽입--
insert into category values(1, 'outer');
insert into category values(2, 'top');
insert into category values(3, 'pants');
insert into category values(4, 'dress');
insert into category values(5, 'accessary');
----------------------------------------------------------------------------------------------------------------------------------------------

--상품
create table item(
   item_id number not null,
   category_id number(10),
   item_name varchar2(100),
   item_price number(10),
   constraint item_id_pk primary key(item_id),
   constraint category_id_fk foreign key(category_id) references category(category_id)
);

create sequence item_num_seq
start with 1
increment by 1

drop table item;
drop sequence item_num_seq;
----------------------------------------------------------------------------------------------------------------------------------------------
--상품 데이터 삽입--
insert into item values(item_num_seq.nextval, 1, '디즈체크롱코트', 59000);
insert into item values(item_num_seq.nextval, 1, '로딩떡볶이코트', 70000);
insert into item values(item_num_seq.nextval, 1, '롤링힐루즈가디건', 60000);
insert into item values(item_num_seq.nextval, 1, '모어댄무적패딩', 80000);
insert into item values(item_num_seq.nextval, 1, '베리앤무스탕', 64000);
insert into item values(item_num_seq.nextval, 1, '블렌핸드메이드코트', 60000);
insert into item values(item_num_seq.nextval, 1, '에이든투버튼코트', 47000);
insert into item values(item_num_seq.nextval, 1, '젠느핸드메이드코트', 67000);
insert into item values(item_num_seq.nextval, 1, '크림무스탕코트', 59000);
insert into item values(item_num_seq.nextval, 1, '패미닌목도리패딩', 54000);

insert into item values(item_num_seq.nextval, 2, '라핀스 스트라이프', 40000);
insert into item values(item_num_seq.nextval, 2, '런즈 베이직 티', 30000);
insert into item values(item_num_seq.nextval, 2, '레이어드 맨투맨', 34000);
insert into item values(item_num_seq.nextval, 2, '르에트 롱 티', 35000);
insert into item values(item_num_seq.nextval, 2, '마도르티', 37000);
insert into item values(item_num_seq.nextval, 2, '반폴라티', 37000);
insert into item values(item_num_seq.nextval, 2, '셀루이 진주', 37000);
insert into item values(item_num_seq.nextval, 2, '어턴 스트라이프', 54000);
insert into item values(item_num_seq.nextval, 2, '프린팅 후드티', 54000);
insert into item values(item_num_seq.nextval, 2, '히트텍 티', 54000);

insert into item values(item_num_seq.nextval, 3, '163부츠컷팬츠', 40000);
insert into item values(item_num_seq.nextval, 3, '437롤업팬츠', 43000);
insert into item values(item_num_seq.nextval, 3, '716딥스키니', 50000);
insert into item values(item_num_seq.nextval, 3, '나팔밴딩슬랙스', 46000);
insert into item values(item_num_seq.nextval, 3, '대박핏슬랙스', 42000);
insert into item values(item_num_seq.nextval, 3, '로데인팬츠', 38000);
insert into item values(item_num_seq.nextval, 3, '롤업데일리팬츠', 39000);
insert into item values(item_num_seq.nextval, 3, '리얼일자핏팬츠', 34000);
insert into item values(item_num_seq.nextval, 3, '부츠컷스판팬츠', 40000);
insert into item values(item_num_seq.nextval, 3, '흑청부츠컷팬츠', 36000);

insert into item values(item_num_seq.nextval, 4, '가을아침 원피스', 50000);
insert into item values(item_num_seq.nextval, 4, '걸쉽원피스', 54000);
insert into item values(item_num_seq.nextval, 4, '러피안 원피스', 55000);
insert into item values(item_num_seq.nextval, 4, '메링드 벨벳원피스', 47000);
insert into item values(item_num_seq.nextval, 4, '멜버른원피스', 57000);
insert into item values(item_num_seq.nextval, 4, '밀크티체크원피스', 53000);
insert into item values(item_num_seq.nextval, 4, '블라썸니트원피스', 55000);
insert into item values(item_num_seq.nextval, 4, '쉐입레더원피스', 43000);
insert into item values(item_num_seq.nextval, 4, '컬러몬드원피스', 60000);
insert into item values(item_num_seq.nextval, 4, '퍼픔랩원피스', 47000);

insert into item values(item_num_seq.nextval, 5, '가넷', 20000);
insert into item values(item_num_seq.nextval, 5, '그말한마디', 15000);
insert into item values(item_num_seq.nextval, 5, '그햄', 13000);
insert into item values(item_num_seq.nextval, 5, '달콤눈꽃', 14000);
insert into item values(item_num_seq.nextval, 5, '밀키베이비', 25000);
insert into item values(item_num_seq.nextval, 5, '베이비소울', 11000);
insert into item values(item_num_seq.nextval, 5, '웜클래식바나나핀', 7000);
insert into item values(item_num_seq.nextval, 5, '윈드림', 18000);
insert into item values(item_num_seq.nextval, 5, '천사의축복', 15000);
insert into item values(item_num_seq.nextval, 5, '키르케', 8000);

----------------------------------------------------------------------------------------------------------------------------------------------

--주문
create table list( --해당하는 DTO는 OrderDTO이다. 
   list_id number not null,
   member_id varchar2(200),
   item_name varchar2(200),
   list_total_price number(30),
   list_date varchar2(200),
   paymethod varchar2(200),
   state varchar2(200),
   constraint list_id_pk primary key(list_id)
);

create sequence list_num_seq
start with 1
increment by 1

drop table list;
drop sequence list_num_seq;

--주문상세
create table order_detail( --해당하는 DTO는 OrderDetailDTO이다.   
	list_id number,
	category_id varchar2(200),
	item_name varchar2(200),
	item_total number,
	item_size varchar2(200),
	item_price number(20),
	receive_person varchar2(200), --받으시는 분
	receive_email varchar2(200), --이메일
	receive_phone varchar2(200), --전화번호
	receive_address varchar2(400), --주소
	constraint list_id_fk foreign key(list_id) references list(list_id) on delete cascade
); 

drop table order_detail;

--장바구니
create table cart( --해당하는 DTO는 cartDTO이다.
	cart_id number,
	member_id varchar2(30),
	item_size varchar2(30),
	item_name varchar2(30),
	item_price number(20),
	item_id number,
	category_id varchar2(30), 
	item_amount varchar2(20),
	constraint cart_id primary key(cart_id),
    constraint item_id_fk2 foreign key(item_id) references item(item_id) on delete cascade
);

create sequence cart_id_seq
start with 1
increment by 1

drop table cart; 
drop sequence cart_id_seq;

--취소
create table cancel(
   cancel_id number,
   cancel_day varchar2(80),
   cancel_pay varchar2(20),
   member_id varchar2(200),
   constraint cancel_id_pk primary key(cancel_id)
);

create sequence cancel_num_seq
start with 1
increment by 1

drop table cancel;
drop sequence cancel_num_seq;

--취소상세
create table cancel_detail(
   item_id number,
   cancel_id number,
   cancel_total number,
   constraint item_id_fk3 foreign key(item_id) references item(item_id),
   constraint cancel_id_fk foreign key(cancel_id) references cancel(cancel_id) on delete cascade
);

drop table cancel_detail;

--게시글분류
create table classification(
  class_code number,
  class_name varchar2(100),
  constraint class_code_pk primary key(class_code)
);

insert into classification values(1, '상품문의');
insert into classification values(2, '배송전 상품변경/취소문의');
insert into classification values(3, '배송후 반품/교환문의');
insert into classification values(4, '배송문의');
insert into classification values(5, '입금문의');
insert into classification values(6, '기타문의');

drop table classification;

--게시글
create table posts(
  post_id number,
  post_content varchar2(2000),
  post_date DATE,
  post_views number(10),
  ref number(10),
  re_step number(10),
  re_level number(10),
  member_code number,
  class_code number,
  post_upload varchar2(300),
  constraint post_id_pk primary key(post_id),
  constraint member_code_fk4 foreign key(member_code) references member(member_code) on delete cascade,
  constraint class_code_fk foreign Key(class_code) references classification(class_code) on delete cascade
);

create sequence posts_num_seq
start with 1
increment by 1

create sequence posts_ref_seq
start with 1
increment by 1

drop sequence posts_num_seq;
drop sequence posts_ref_seq;
drop table posts;

--관리자
create table admin(
  admin_id varchar2(100),
  admin_password varchar2(100)
);

insert into admin values('admin', '1234')

drop table admin

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

drop table notice;
drop sequence notice_num_seq;
-----------------------------------------------------------------------
