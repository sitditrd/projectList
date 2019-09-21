<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title></title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width, height=device-height">
<meta http-equiv="Cache-Control" content="No-Cache">
<meta http-equiv="Pragma" content="No-Cache">
<meta http-equiv="Expires" content="-1">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<!-- Custom fonts for this template-->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<!-- Custom fonts for this template -->
<link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">
<!-- Custom fonts for this template2 -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
<!-- Custom styles for this template -->
<link href="css/business-casual.min.css" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="css/resdetail/icheck.css">
<link rel="stylesheet" type="text/css" href="css/resdetail/bootstrap.datepicker.css">
<link rel="stylesheet" type="text/css" href="css/resdetail/jquery.bxslider.css">
<link rel="stylesheet" type="text/css" href="css/resdetail/common_KR.css">
<link rel="stylesheet" type="text/css" href="css/resdetail/newstar.style.css">
<link rel="stylesheet" type="text/css" href="css/resdetail/newstar2.style.css">
<link rel="stylesheet" type="text/css" href="css/resdetail/newstar.style_KR.css">

<script type="text/javascript" src="./EastarJet_search_files/jui"></script>

<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}
</style>

<style>
table>tbody>tr>td {
	word-break: break-all;
}

table>tbody>tr>td {
	word-break: break-all;
}

table>tbody>tr>td {
	word-break: break-all;
}

table>tbody>tr>td {
	word-break: break-all;
}

table>tbody>tr>td {
	word-break: break-all;
}

table>tbody>tr>td {
	word-break: break-all;
}
</style>


<script type="text/javascript">
	$(document).ready(function() {
		$('#PNWRA00002_reservation_cancal_bu').click(function() {
			$('#PNWRA00004').show();
			$('.pop_mr_selpassenger').show();
		});

		$('.close').click(function() {
			$('#PNWRA00004').hide();
			$('.pop_mr_selpassenger').hide();
		});

		//예매취소사유 입력방식 선택
		$('#reason_select').change(function() {
			$('#reason_select option:selected').each(function() {
				if ($(this).val() == '0') {//기타일 경우
					$('#reason_write').val(''); //값 초기화
					$('#reason_write').attr("disabled", false); //활성화
				} else { //직접입력이 아닐 경우
					$('#reason_write').val($(this).text()); //선택값 입력
					$('#reason_write').attr("disabled", true); //비활성화
				}
			});
		});
		
		$('#PNWRA00004_journeyCancelBtn').click(function() {
			var temp = $('#reason_write').val();
			$('#reason_cancel').val(temp);
			$('#frm').attr('action','cancel.do?').submit();
		});

		/* //팝업창 확인 누르면 list쪽으로 이동
		$('#PNWRA00004_journeyCancelBtn').click(function() {
			$('.cta').attr('action','reslist.do?').html()).submit();

		}); */
	});

	function cancel_check() {

	};
</script>

</head>

<body
	style="background-image: url('img/bg.jpg'); font-family: 'Lora'; background-attachment: fixed; background-position: center; background-size: cover;"
	id="body">
	<c:if test="${empty sessionScope.adminOk}">
		<c:if test="${empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b"><a
						class="first-link text-uppercase text-expanded" href="notice.do"
						id="link">notice</a> <a
						class="first-link text-uppercase text-expanded"
						href="boardlist.do" id="link">board |</a> <a
						class="list-link text-uppercase text-expanded" href="login.do"
						id="link">login</a> <a
						class="list-link text-uppercase text-expanded" href="register.do"
						id="link">join us</a> <a
						class="list-link text-uppercase text-expanded" href="search.do" id="link">search</a></li>
				</ul>
			</div>
		</c:if>

		<c:if test="${not empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b"><a
						class="first-link text-uppercase text-expanded" href="#" id="link">${sessionScope.logOk}님</a>
						<a class="first-link text-uppercase text-expanded"
						href="notice.do" id="link">notice</a> <a
						class="first-link text-uppercase text-expanded"
						href="boardlist.do" id="link">board |</a> <a
						class="list-link text-uppercase text-expanded" href="logout.do"
						id="link" onclick="logout()">logout</a> <a
						class="list-link text-uppercase text-expanded" href="main.do" id="link">reserve</a>
						<a class="list-link text-uppercase text-expanded" href="mypage.do"
						id="link">mypage</a> <a
						class="list-link text-uppercase text-expanded" href="search.do" id="link">search</a></li>
				</ul>
			</div>
		</c:if>
	</c:if>

	<c:if test="${not empty sessionScope.adminOk}">
		<div align="right">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item px-lg-4" id="b"><a
					class="first-link text-uppercase text-expanded" href="#" id="link">${sessionScope.adminOk}님</a>
					<a class="first-link text-uppercase text-expanded" href="notice.do"
					id="link">notice</a> <a
					class="first-link text-uppercase text-expanded" href="boardlist.do"
					id="link">board |</a> <a
					class="list-link text-uppercase text-expanded" href="logout.do"
					id="link" onclick="logout()">logout</a> <a
					class="list-link text-uppercase text-expanded" href="adminpage.do" id="link">adminpage</a>
					<a class="list-link text-uppercase text-expanded" href="search.do"
					id="link">search</a></li>
			</ul>
		</div>
	</c:if>

	<h1 class="site-heading text-center text-white d-none d-lg-block">
		<span class="site-heading-upper text-primary mb-3"><a
			href="home.do" style="color: #FFAA28; text-decoration: none;">The
				AirLine Ticketing System</a></span> <span class="site-heading-lower"><a
			href="home.do" style="color: white; text-decoration: none;">C_Trip</a></span>
		<i class="fa fa-plane" aria-hidden="true"></i>
	</h1>

	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav" style="background-color: #111111b5">
		<div class="container">
			<a
				class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
				href="#">Start Bootstrap</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarResponsive" aria-controls="navbarResponsive"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav mx-auto">

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="main.do"><i
							class="fa fa-fighter-jet" aria-hidden="true" id="link"></i>
							&nbsp;항공권 <span class="sr-only">(current)</span></a></li>

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="weatherinfo.do"><i
							class="fa fa-sun-o" aria-hidden="true"></i> &nbsp;날씨</a></li>

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="rate.do"><i
							class="fa fa-krw" aria-hidden="true"></i> &nbsp;환율</a></li>

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="time.do"><i
							class="fa fa-calendar" aria-hidden="true"></i> &nbsp;시차</a></li>

				</ul>
			</div>
		</div>
	</nav>

	<section class="page-section cta">
		<div class="container">
			<div class="row" style="background-color: rgba(255, 255, 255, .85);">
				<div class="col-xl-9 mx-auto" style="margin-top: 50px;">
					<!-- content -->
					<div id="container" style="min-height: 650px;">
						<div class="content">
							<section id="PNWRA00002" class="mr0101" style="display: block;">
								<div class="txtbox_i txtbox_i2 mt_25 ">
									<!-- 꽉찬회색 박스 -->
									<p class="l_Txt">
										<strong>예매번호<!--예매번호--></strong> <strong class="red"
											id="PNWRA00002_in_pnrNo">${param.reserve_code} </strong>
									</p>
									<span class="r_Txt social_hide"> <a
										id="PNWRA00002_self_checkin_bu" href="javascript:;"
										class="btn btn03 btn-color02" style="display: none;">셀프체크인</a>
										<!-- 셀프 체크인 --> <a id="PNWRA00002_reservation_confirm_bu"
										href="javascript:;" class="btn btn03 btn-color02"
										style="display: none;">예매확인증<!--예매확인증--></a> <a
										id="PNWRA00002_webcheckin_bu" href="javascript:;"
										class="btn btn03 btn-color02" style="display: none;">웹체크인</a>
									</span>
								</div>

								<div class="tabWrapBox wrap">
									<h3 class="thrdTit">
										지역 및 날짜
										<!--여정정보-->
									</h3>
									<!--------------------- 여정정보 테이블 web  -------------------------------->
									<table class="bbs_list m_hide">
										<caption>
											지역 및 날짜
											<!--여정정보-->
										</caption>
										<colgroup>
											<col style="width: 27%">
											<col style="width: 27%">
											<col style="width: 23%">
											<col style="width: 23%">
										</colgroup>
										<thead>
											<tr>
												<th scope="col">출발지<!--출발지--></th>
												<th scope="col">도착지<!--도착지--></th>
												<th scope="col">출발일<!--출발일--></th>
												<th scope="col">도착일<!--도착일--></th>
											</tr>
										</thead>
										<tbody id="PNWRA00002_journeyList">
											<c:forEach var="dto" items="${reserveDetail2DTO}">
												<tr>
													<c:if test="${dto.detail_stopover_type != '경유'}">
														<td class="bgCol_fafafa">${dto.detail_depart_region}</td>
														<td class="bgCol_fafafa">${dto.detail_arrive_region}</td>
														<td class="bgCol_fafafa">${dto.detail_depart_day}</td>
														<td class="bgCol_fafafa">${dto.detail_arrive_day}</td>
													</c:if>
													<c:if test="${dto.detail_stopover_type == '경유'}">
														<td style="background-color: #b5a2a34f">${dto.detail_depart_region}</td>
														<td style="background-color: #b5a2a34f">${dto.detail_arrive_region}</td>
														<td style="background-color: #b5a2a34f">${dto.detail_depart_day}</td>
														<td style="background-color: #b5a2a34f">${dto.detail_arrive_day}</td>
													</c:if>
												</tr>
											</c:forEach>
										</tbody>
									</table>
									<!--0930 수정-->
									<ul class="f_left mb_10">
										<li class="bu">해당 항공 스케줄은 정부인가 조건에 따라 예고없이 변경될 수 있습니다.<!-- 항공편 스케줄 및 기종은 부득이한 사유로 예고 없이 변경될 수 있습니다. --></li>
										<li class="bu" style="display: none;">
											<!-- 코드쉐어 안내문 -->
										</li>
									</ul>
								</div>

								<div class="tabWrapBox wrap">
									<!--------------------- //여정정보 테이블 web  -------------------------------->
									<h3 class="thrdTit">
										항공사 및 좌석
										<!--여정정보-->
									</h3>
									<table class="bbs_list m_hide">
										<caption>
											항공사 및 좌석
											<!--여정정보-->
										</caption>
										<colgroup>
											<col style="width: 30%">
											<col style="width: 21%">
											<col style="width: 21%">
											<col style="width: 21%">
										</colgroup>
										<thead>
											<tr>
												<th scope="col">항공사<!--출발지--></th>
												<th scope="col">항공기종<!--도착지--></th>
												<th scope="col">항공편명<!--출발일--></th>
												<th scope="col">좌석등급<!--도착일--></th>
											</tr>
										</thead>
										<tbody id="PNWRA00002_journeyList">
											<c:forEach var="dto" items="${reserveDetail2DTO}">
												<tr>
													<td>${dto.detail_airline_name}</td>
													<td>${dto.detail_airplane_model}</td>
													<td>${dto.detail_flight_name}</td>
													<td>${dto.detail_seat_grade}</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
									
								<div class="tabWrapBox wrap social_hide">
									<h3 class="thrdTit">
										탑승자정보
										<!--탑승자정보-->
									</h3>
									<!-- 탑승자정보 테이블 web -->
									<table class="bbs_list m_hide">
										<caption>
											탑승자별 상세내역
											<!--탑승자별 상세내역-->
										</caption>
										<colgroup>
											<col style="width: 16%">
											<col style="width: 15%">
											<col style="width: 16%">
											<col style="width: 25%">
											<col style="width: 30%">
											<col>
										</colgroup>
										<thead>
											<tr>
												<th scope="col">성명<!--성명--></th>
												<th scope="col">성별<!--성별--></th>
												<th scope="col">생년월일<!--생년월일--></th>
												<th scope="col">여권번호<!--여권번호--></th>
												<th scope="col">여권발행국가<!--여권발행국--></th>
											</tr>
										</thead>
										<tbody id="PNWRA00002_passengerList">
											<c:forEach var="pass" items="${passenger}">
												<tr>
													<td>${pass.passname}</td>
													<td>${pass.passgender}</td>
													<td>${pass.passbirth}</td>
													<td>${pass.passnumber}</td>
													<td>${pass.passcountry}</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>


								</div>
								<div class="tabWrapBox wrap social_hide">
									<h3 class="thrdTit">
										예매자 정보
										<!--예매자 정보-->
									</h3>
									<!-- 예매자 정보 테이블 web -->
									<table class="form showTable bbs_list m_hide">
										<caption>
											예매자 정보
											<!--예매자 정보-->
										</caption>
										<colgroup>
											<col style="width: 150px">
											<col>
											<col style="width: 150px">
											<col>
										</colgroup>
										<tbody id="PNWRA00002_contactList">
											<tr>
												<th><span class="tit">이름</span></th>
												<td><p class="mb_10">${contact.member_name}</p></td>
												<th><span class="tit">연락처</span></th>
												<td><p class="mb_10">${contact.member_tel}</p></td>
											</tr>
											<tr>
												<th><span class="tit">이메일</span></th>
												<td><p class="mb_10">${contact.member_email}</p></td>
												<th><span class="tit">탑승자대표 연락처</span></th>
												<td><p class="mb_10">82+-${contact.member_tel}</p></td>
											</tr>
										</tbody>
									</table>
								</div>


								<div class="tabWrapBox wrap social_hide">
									<!-- 결제정보 테이블 web -->
									<h3 class="thrdTit">
										결제정보
										<!--결제정보-->
									</h3>
									<table class="bbs_list m_hide">
										<caption>
											결제정보
											<!--결제정보-->
										</caption>
										<colgroup>
											<col style="width: 18%">
											<col style="width: 28%">
											<col style="width: 25">
											<col style="width: *">
										</colgroup>
										<thead>
											<tr>
												<th scope="col">구분<!--구분--></th>
												<th scope="col">날짜<!--날짜--></th>
												<th scope="col">금액<!--금액--></th>
												<th scope="col">결제수단<!--결제수단--></th>
											</tr>
										</thead>
										<tbody id="PNWRA00002_paymentList">
										    <tr>
											    <c:if test="${reserve.reserve_state == '예약완료'}">
											    	<td>Approved</td>
											    </c:if>
											    <c:if test="${reserve.reserve_state == '취소완료'}">
											    	<td>Canceled</td>
											    </c:if>
												<td>${reserve.reserve_date} (GMT+9)</td>
												<td><fmt:formatNumber value="${reserve.reserve_total_price}" type="number" />원</td>
												<td>${reserve.reserve_paymethod}</td>
										    </tr>
										</tbody>
									</table>


									<!--0801 추가-->
									<div class="pay_confirm" id="PNWRA00002_payment_box"
										style="display: none;">
										<p class="price">
											결제 예정금액
											<!--결제 예정금액-->
											<strong class="red" id="PNWRA00002_balanceDue_text"
												style="display: none;"></strong><label
												id="PNWRA00002_currencyCode_text" style="display: none;"></label>
										</p>
										<a id="PNWRA00002_payment_bu" href="javascript:;"
											class="btn btn00 btn-color04" style="display: none;">결 제<!--결제--></a>
									</div>
									<div class="pay_confirm" id="PNWRA00002_refund_box"
										style="display: none;">
										<p class="price">
											환불예정금액
											<!--환불예정금액-->
											<strong class="red" id="PNWRA00002_balanceDue_refund_text"
												style="display: none;"></strong><label
												id="PNWRA00002_currencyCode_refund_text"
												style="display: none;"></label>
										</p>
										<a id="PNWRA00002_refund_bu" href="javascript:;"
											class="btn btn00 btn-color04" style="display: none;">환 불<!--환불--></a>
									</div>
									<!--//0801 추가-->
								</div>

								<div class="btn_ul m2 c_wrap">
									<a id="PNWRA00002_list_bn"
										class="btn btn00 btn-color02 w_250 back"
										href="adminresList.do?currentPage=${param.currentPage }">목록<!--목록--></a>
								</div>
							</section>
						  
							<div id="PNWRA00004" class="id_pop">
								<div id="popft" style="display: block;"></div>
								<div class="popCon active id_alertHtml pop_mr_selpassenger"
									style="top: 25%; left: 35%;">
									<div class="top">
										<strong class="pop_tit">예매 취소<!--탑승자선택--></strong>
									</div>
									<div class="msg_wrap t_center">
										<div class="c_wrap msg">
											<!-- content -->
											<div class="wrap load_inner" id="pop_mr_selpassenger">
												<div class="t_left">
													<div class="top_txt">
														<strong class="d1" style="font-size: 1.250em;">취소
															사유<!--취소 사유-->
														</strong>
														<p class="cancel">
															<select name="reason_select" id="reason_select"
																style="margin-right: 40px; height: 30px;">
																<option value="1">선택하세요</option>
																<option value="다른 사이트 이용">다른사이트 이용</option>
																<option value="일정 변경">일정 변경</option>
																<option value="0">기타</option>
															</select> <input type="text" name="reason_write"
																disabled="disabled" id="reason_write" value=""
																style="height: 30px;">

														</p>
													</div>

													<div class="tabWrapBox" style="margin-top: 40px">
														<!-- 유의사항 -->
														<h3 class="thrdTit">
															유의 사항
															<!--유의 사항-->
														</h3>
														<div class="halfBox halfBox2">
															<!-- 이용안내 -->
															<ul class="bu_l">
																<li class="red">국제선 왕복일 경우 돌아오는 항공편 취소 시 해당 국가에서
																	입국이 거절될 수 있습니다.<!--국제선 왕복일 경우 돌아오는 항공편 취소 시 해당 국가에서 입국이 거절될 수 있습니다.-->
																</li>
																<li>여정취소 후 남은 좌석수 상황에 따라 취소된 항공권을 다시 예매하지 못할 수
																	있습니다.<!--여정취소 후 남은 좌석수 상황에 따라 취소된 항공권을 다시 예매하지 못할 수 있습니다.-->
																	<!-- 여정취소 후 남은 좌석수 상황에 따라 취소된 항공권을 다시 예매하지 못할 수 있습니다. -->
																</li>
															</ul>
														</div>
														<label class="icheck req"> <input type="checkbox"
															name="PNWRA00004_agree" value="Y"><strong>상기
																내용을 확인</strong>을 확인하였으며 동의합니다.<!--<strong>상기 내용을 확인</strong>을 확인하였으며 동의합니다.-->
															<!-- <strong>상기 내용을 확인</strong>하였으며 동의합니다. -->
														</label>
													</div>

													<div class="btn_ul m2 c_wrap mo_type">
														<a id="PNWRA00004_journeyCancelBtn"
															href="javascript:cancel_check;"
															class="btn btn01 btn-color04 w_250 focus_tab">확 인<!--확인--></a>
													</div>
												</div>
											</div>
											<div class="close">
												<a href="javascript:jf5.panel.close(&#39;PNWRA00004&#39;);"
													class="closePpo href"><img src="images/pop_close.png"
													alt="닫기"></a>
												<!--닫기-->
											</div>
											<!-- content -->
											<form id="frm">
											<!-- hidden -->
												<input type="hidden" value="${reserve_code}" name="reserve_code" id="reserve_code">
												<input type="hidden" value="" name="reason_cancel" id="reason_cancel">
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- content -->
				</div>
			</div>
		</div>
	</section>
	<div class="func_back">
		<a href="https://www.eastarjet.com/newstar/PGWRA00002#"
			onclick="javascript:history.go(-1);return false;">이전 페이지로 가기</a>
	</div>
</body>
</html>