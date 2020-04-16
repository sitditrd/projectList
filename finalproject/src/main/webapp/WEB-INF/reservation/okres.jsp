<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Airline Ticketing System</title>

<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}

</style>

<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<script type="text/javascript" src="https://service.iamport.kr/js/iamport.payment-1.1.5.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
   $(document).ready(function() {
	  $('#back').click(function() {
			history.back(-1);
	  });
	   
     $('.btn_key').click(function() {
    	 var charge = '${ticketinfo.res_charge}'; 
    	 var charge = 100; 
         payment(charge);
     });
   });

   function payment(charge) {
	   IMP.init('imp49455545'); //iamport 대신 자신의 "가맹점 식별코드"를 사용하시면 됩니다
       IMP.request_pay({
           pg : 'inicis', // version 1.1.0부터 지원.
           pay_method : 'card',
           merchant_uid : 'merchant_' + new Date().getTime(),
           name : '주문명:결제테스트',
           amount : charge,
           buyer_email : 'iamport@siot.do',
           buyer_name : '구매자이름',
           buyer_tel : '010-',
           buyer_addr : '서울특별시 강남구 삼성동',
           buyer_postcode : '123-456',
           m_redirect_url : 'https://www.yourdomain.com/payments/complete'
       }, function(rsp) {
           if ( rsp.success ) {
               var msg = '결제가 완료되었습니다.';
               msg += '고유ID : ' + rsp.imp_uid;
               msg += '상점 거래ID : ' + rsp.merchant_uid;
               msg += '결제 금액 : ' + rsp.paid_amount;
               msg += '카드 승인번호 : ' + rsp.apply_num;
               $('#frm').attr('action','insert.do').submit();
           } else {
               var msg = '결제가 취소되었습니다.'  
           }
           alert(msg);
       });
   }
</script>
<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<!-- Custom fonts for this template-->
<link rel="stylesheet"
	href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<!-- Custom fonts for this template -->
<link
	href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet">
<link
	href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i"
	rel="stylesheet">
<!-- Custom fonts for this template2 -->
<link
	href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic"
	rel="stylesheet" type="text/css">
	
<!-- Custom styles for this template -->
<link href="css/business-casual.min.css" rel="stylesheet">
<link href="css/okres/global.cfdf203c.css" rel="stylesheet"
	type="text/css">
<link href="css/okres/flight.css" rel="stylesheet" type="text/css">
<link href="css/okres/public_flights_logo.css" rel="stylesheet"
	type="text/css">
<link href="css/okres/flights.css" rel="Stylesheet" type="text/css"
	media="all">
<script src="js/reservation/okRes.js"></script>
</head>

<body style="background-image: url('img/bg.jpg'); font-family: 'Lora'; background-attachment: fixed; background-position: center; background-size: cover;" id="body">
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

					<li class="nav-item active px-lg-4"><a
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
			<div class="row">
				<div class="col-xl-9 mx-auto">
					<div class="cta-inner text-center rounded">
						<div id="_dropBoxTemp_" style="display: none;"></div>

						<div class="hd-inner">
							<div class="hd-header">
								<div class="hd-toggle-con hd-toggle-full">
									<button type="button" id="hd-toggle-menu"
										class="hd-toggle hd-toggle-menu"
										data-menu-class="hd-menu-show-all" data-target="#hd-menu">
										<span class="hd-toggle-bar"></span> <span
											class="hd-toggle-bar"></span> <span class="hd-toggle-bar"></span>
									</button>
								</div>
							</div>

							<div id="hd-menu" class="hd-menu">
								<div class="trip mod-step-bars clearfix">
									<div class="step active  complete  " step="1">
										<span class="txt">여행자 정보</span>
										<p class="bar">
											<b class="num"><i class="f-icon-s icon-right-w"></i><span
												class="digit">1</span></b>
										</p>
									</div>

									<div class="step active  complete  " step="2">
										<span class="txt">확인</span>
										<p class="bar">
											<b class="num"><i class="f-icon-s icon-right-w"></i><span
												class="digit">2</span></b>
										</p>
									</div>

									<div class="step   last-step" step="3">
										<span class="txt">결제</span>
										<p class="bar">
											<b class="num"><i class="f-icon-s icon-right-w"></i><span
												class="digit">3</span></b>
										</p>
									</div>
								</div>
							</div>
						</div>

						<input type="hidden" id="PostHiddenFields"
							value="&lt;input type=&#39;hidden&#39; id=&#39;TempOrderID&#39; name=&#39;TempOrderID&#39; value=&#39;9415762&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;OrderId&#39; name=&#39;OrderId&#39; value=&#39;5466301173&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;IsExpress&#39; name=&#39;IsExpress&#39; value=&#39;true&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;AutoBookStatus&#39; name=&#39;AutoBookStatus&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;AutoBookSN&#39; name=&#39;AutoBookSN&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;IsDelay&#39; name=&#39;IsDelay&#39; value=&#39;false&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;ReservationToken&#39; name=&#39;ReservationToken&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;SubOrderID&#39; name=&#39;SubOrderID&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;PartitionSearchToken&#39; name=&#39;PartitionSearchToken&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;InputPassengerInfo&#39; name=&#39;InputPassengerInfo&#39; value=&#39;%5b%7b%22InfoID%22%3a0%2c%22PassengerName%22%3a%22HONG%2fGILDONG%22%2c%22Nationality%22%3a%22KR%22%2c%22NationalityFullName%22%3a%22%ed%95%9c%ea%b5%ad%22%2c%22IDCardType%22%3a2%2c%22IDCardNo%22%3a%22W123%22%2c%22Gender%22%3a%22F%22%2c%22Birthday%22%3a%2212%2f19%2f2000%22%2c%22Year%22%3a2000%2c%22Month%22%3a12%2c%22Day%22%3a19%2c%22ChildrenToAdultFlightTicket%22%3afalse%2c%22TravelerType%22%3a%22ADT%22%2c%22InsuranceCount%22%3a0%2c%22TravelInsuranceCount%22%3a0%7d%5d&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;XProductInfo&#39; name=&#39;XProductInfo&#39; value=&#39;[%]7b[%]22HasFreeCoupon[%]22[%]3afalse[%]2c[%]22XHotelCouponProductList[%]22[%]3a[%]5b[%]5d[%]7d&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;CouponDescriptionInfo&#39; name=&#39;CouponDescriptionInfo&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;MerchantId&#39; name=&#39;MerchantId&#39; value=&#39;200203&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;DedutionAmount&#39; name=&#39;DedutionAmount&#39; value=&#39;0&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;FDedutionAmount&#39; name=&#39;FDedutionAmount&#39; value=&#39;0&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;BalanceAmount&#39; name=&#39;BalanceAmount&#39; value=&#39;522334&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;CouponPayWay&#39; name=&#39;CouponPayWay&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;CouponCardNoRange&#39; name=&#39;CouponCardNoRange&#39; value=&#39;&#39; /&gt;&lt;input type=&#39;hidden&#39; id=&#39;CreateOrderDate&#39; name=&#39;CreateOrderDate&#39; value=&#39;1/23/2018 3:20:57 PM&#39; /&gt;">

					<form id="frm">
						<div class="container">
							<div class="b_main pad_main">
									<div class="trip_summary" id="divFlightInfo">
										<div id="flightInfo0"
											class="flightIntro_box fold-container fold-collapse">
											<div class="hd fold-tit">
												<p class="time">
													<strong style="font-size: 21px; font-weight: bold;">가는편 - 
														<c:if test="${ticketinfo.flighttype =='1'}">
															<strong>
															${ticketinfo.endDate}
															</strong>
														</c:if>
														
														<c:if test="${ticketinfo.flighttype =='2'}">
															<strong>
															${ticketinfo.startDate}
															</strong>
														</c:if>
													</strong>
												</p>
												
												<c:if test="${ticketinfo.flighttype == '1'}">
													<p class="city">
													<strong style="font-size: 15px; font-family: fantasy; margin-top: 10px;">출발 : ${ticketinfo.arrive_region}</strong>
													</p>
												
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: fantasy; margin-top: 10px;">도착 : ${ticketinfo.depart_region}</strong>
													</p>
												</c:if>
												
												<c:if test="${ticketinfo.flighttype == '2'}">
													<p class="city">
													<strong style="font-size: 15px; font-family: fantasy;">출발 : ${ticketinfo.depart_region}</strong>
													</p>
												
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: fantasy;">도착 : ${ticketinfo.arrive_region}</strong>
													</p>
												</c:if>
												
												<c:if test="${ticketinfo.flighttype == '2'}">
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: sans-serif;">출발시간 : ${ticketDTO.depart_time}</strong>
													</p>
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: sans-serif;">도착시간 : ${ticketDTO.arrive_time}</strong>
													</p>
												</c:if>
												
												<c:if test="${ticketinfo.flighttype == '1'}">
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: sans-serif;">출발시간 : ${firstinfo.depart_time}</strong>
													</p>
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: sans-serif;">도착시간 : ${firstinfo.arrive_time}</strong>
													</p>
												</c:if>
												<br/>
												
											</div>
										</div>
										
										<c:if test="${ticketinfo.flighttype == '1'}">
											<div id="flightInfo1"
												class="flightIntro_box fold-container fold-collapse">
												<div class="hd fold-tit">
													<p class="time">
													<strong style="font-size: 21px; font-weight: bold;">오는편 - 
														<strong>
															${ticketinfo.startDate}
														</strong>
													</strong>
													</p>
													<p class="city">
													<strong style="font-size: 15px; font-family: fantasy;">출발 : ${ticketinfo.depart_region}</strong>
													</p>
													
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: fantasy;">도착 : ${ticketinfo.arrive_region}</strong>
													</p>
													
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: sans-serif;">출발시간 : ${ticketDTO.depart_time}</strong>
													</p>
													<p class="city" style="margin-top: 6px;">
														<strong style="font-size: 15px; font-family: sans-serif;">도착시간 : ${ticketDTO.arrive_time}</strong>
													</p>
												</div>
											</div>
										</c:if>
									</div>

								<div class="module_box passenger_box" style="color:#333;font:12px/1.5 arial, sans-serif;-webkit-text-size-adjust:none; border: 1.5px solid #e6a756;">
									<h2 class="tit" style="font-size: 21px; font-weight: bold;">탑승객 정보</h2>
									<div class="bd clearfix" style="">
										<c:set var="i" value="0"/>
										<c:forEach var="dto" items="${dto.surname }" >
											<ul class="textInfo_list" style="border: none;">
												<li class="name" style="padding-top: 2px;">
													<strong>${resTmpDTO.surname[i] }/${resTmpDTO.givennames[i] }</strong>&nbsp;
													<em class="sub_text">(성/이름 (중간 이름 포함))</em>
													<input type="hidden" value="${resTmpDTO.surname[i]}" name="surname">
													<input type="hidden" value="${resTmpDTO.givennames[i]}" name="givennames">
												</li>
												
												<c:if test="${resTmpDTO.nationality[i] eq 'KR'}">
													<li>
														<span class="keyName">신분증 발행 국가 또는 지역</span> <strong>한국</strong>
														<input type="hidden" value="${resTmpDTO.nationality[i]}" name="nationality">
													</li>
												</c:if>
												
												<c:if test="${resTmpDTO.nationality[i] ne 'KR'}">
													<li>
														<span class="keyName">신분증 발행 국가 또는 지역</span>
														<strong>${resTmpDTO.nationality[i]}</strong>
														<input type="hidden" value="${resTmpDTO.nationality[i]}" name="nationality">
													</li>
												</c:if>
												
												<li>
													<span class="keyName">신분증 종류</span> 
													<strong>여권</strong>
													<input type="hidden" value="${resTmpDTO.selidtype[i]}" name="selidtype">
												</li>
												
												<li>
													<span class="keyName">신분증 번호</span> 
													<strong>${resTmpDTO.idNumber[i] }</strong>
													<input type="hidden" value="${resTmpDTO.idNumber[i]}" name="idNumber">
												</li>
												
												<li>
													<span class="keyName">성별</span> 
													<strong>${resTmpDTO.gender[i]}</strong>
													<input type="hidden" value="${resTmpDTO.gender[i]}" name="gender">
												</li>
												
												<li>
													<span class="keyName">생년월일</span>
													<strong>${resTmpDTO.birth_month[i]}/${resTmpDTO.birth_day[i]}/${resTmpDTO.birth_year[i]}</strong>
													<em class="sub_text">(MM/DD/YYYY)</em>
													<input type="hidden" value="${resTmpDTO.birth_year[i]}" name="birth_year">
													<input type="hidden" value="${resTmpDTO.birth_month[i]}" name="birth_month">
													<input type="hidden" value="${resTmpDTO.birth_day[i]}" name="birth_day">
												</li>
												
												<li>
													<span class="keyName">운임 조건</span> 
													<strong>성인(만12+)</strong>
												</li>
											</ul>
											
											<c:set var="i" value="${i + 1}"/>
											
										</c:forEach>
									</div>
								</div>
								<div id="valueAddedBaggageContainer"></div>

								<div class="module_box contacts_box" style="border: 1.5px solid #e6a756;">
									<div id="div_summary"
										class="mod-payment-summary mod-payment-summary-flight m-pay-sum-f m-multi-type">
										<h2 class="tit" style="font-size: 21px; font-weight: bold;">결제 정보</h2>
										<div id="div_summary_content" class="mod-cnt fold-container"
											style="padding-left: 30px; padding-right: 30px; padding-top: 10px; padding-bottom: 10px;">
											<div class="payment-check-list fold-content">
												<dl id="adtPricePanel_Summary" class="clearfix type-item"
													style="">
													<dt style="font-size: 15px;">성인</dt>
													<dd>
														<span class="multi-num">×<em tag="adtCnt_Summary"> ${ticketinfo.adult}</em></span>
													</dd>
													<dt style="margin-top: 12px; font-size: 15px;">아이</dt>
													<dd>
														<span class="multi-num">×<em tag="adtCnt_Summary"> ${ticketinfo.children}</em></span>
													</dd>
													<dt style="margin-top: 12px; font-size: 15px;">항공요금(가는날)</dt>
													<dd>
														<span class="c-price">
														<em class="price-num">
															<c:if test="${ticketinfo.flighttype == '2'}">
																<fmt:formatNumber value="${ticketDTO.route_charge}" />
															</c:if>
															<c:if test="${ticketinfo.flighttype == '1'}">
																<fmt:formatNumber value="${firstinfo.route_charge}" />
															</c:if>
														</em>
															<span class="price-currency">원</span> </span>
													</dd>
													<c:if test="${ticketinfo.flighttype == '1'}">
														<dt style="margin-top: 12px; font-size: 15px;">항공요금(오는날)</dt>
														<dd>
															<span class="c-price"> <em class="price-num">
															<fmt:formatNumber value="${ticketDTO.route_charge}" />
															</em>
																<span class="price-currency">원</span> </span>
														</dd>
													</c:if>
												</dl>
											</div>
											<div class="payment-price settlement-preferred fold-tit" style="border-top: 0px;">
												<dl class="price-total">
													<dt style="margin-top: 6px; font-size: 23px">총 금액</dt>
													<dd class="final">
														<span class="c-price"> <em class="price-num"
															cnyprice="3134" id="amountCur_Summary" style="font-size: 23px">
															<fmt:formatNumber value="${ticketinfo.res_charge}" />
															</em> <span
															class="price-currency">원</span>
														</span>
													</dd>
												</dl>
											</div>
										</div>
									</div>
								</div>

								<div class="book_action">
									<a class="back" rel="nofollow" href="#" id="back"> &lt; 뒤로가기</a> <input
										id="IMP.request_pay" class="btn_key" type="button"
										value="결제">
								</div>
								
								<div id="paymentSubmit" style="display: none;"></div>

								<div class="show_aside">
									<span class="arrow_left"><span class="arrow_01">◆</span><span
										class="arrow_02">◆</span></span>
								</div>
							</div>

							<div
								style="position: fixed; top: 0; right: 0; left: 0; bottom: 0; opacity: 0.5; z-index: 900; display: none;"
								class="temp_bg" id="popTipBG"></div>

							<div id="popInfoCont"
								style="width: 690px; z-index: 900; border: 0 solid #dcdcdc; position: absolute;">
							</div>

							<div id="confirmOverlay" class="overlay-bg"
								style="display: none;"></div>
							<div id="cofirmMessage"
								class="PACK_BOX pack-box pack-pop pack-pop-ico"
								style="display: none;">
								<div class="pop-con">
									<div class="pop-cnt">
										<i class="s-icon icon-warning-l"></i>
										<h2 id="conTipMessage" class="pop-tit"></h2>
									</div>
									<div class="pop-action">
										<a id="conReturnHerd" href="javascript:;" class="c-btn btn-l"></a>
									</div>
								</div>
							</div>

								<!-- 티켓에 대한 정보와 사용자에 대한 정보 전달 작업(왕복, 편도) -->
								<c:choose>
									<c:when test="${ticketinfo.flighttype == '1'}">
										<input type="hidden" value="${ticketinfo.flighttype}" name="flighttype" id="flighttype">
										<input type="hidden" value="${ticketinfo.depart_region}" name="depart_region" id=" depart_region">
										<input type="hidden" value="${ticketinfo.arrive_region}" name="arrive_region" id="arrive_region">
										<input type="hidden" value="${ticketinfo.startDate}" name="startDate" id="startDate">
										<input type="hidden" value="${ticketinfo.endDate}" name="endDate" id="endDate">
										<input type="hidden" value="${ticketinfo.adult}" name="adult" id="adult">
										<input type="hidden" value="${ticketinfo.children}" name="children" id="children">
										<input type="hidden" value="${ticketinfo.laporseat}" name="laporseat" id="laporseat">
										<input type="hidden" value="${ticketinfo.seat_grade}" name="seat_grade" id="seat_grade">
										<input type="hidden" value="${ticketinfo.res_charge}" name="res_charge" id="res_charge">
										
										<input type="hidden" value="${firstinfo.route_depart_region}" name="first_route_depart_region" id="route_depart_region">
										<input type="hidden" value="${firstinfo.route_arrive_region}" name="first_route_arrive_region" id="route_arrive_region">
										<input type="hidden" value="${firstinfo.route_depart_day}" name="first_route_depart_day" id="route_depart_day">
										<input type="hidden" value="${firstinfo.depart_time}" name="first_depart_time" id="depart_time">
										<input type="hidden" value="${firstinfo.arrive_time}" name="first_arrive_time" id="arrive_time">
										<input type="hidden" value="${firstinfo.airline_name}" name="first_airline_name" id="airline_name">
										<input type="hidden" value="${firstinfo.airplane_model}" name="first_airplane_model" id="airplane_model">
										<input type="hidden" value="${firstinfo.flight_name}" name="first_flight_name" id="flight_name">
										<input type="hidden" value="${firstinfo.route_estimate_time}" name="first_route_estimate_time" id="route_estimate_time">
										<input type="hidden" value="${firstinfo.airline_site}" name="first_airline_site" id="airline_site">
										<input type="hidden" value="${firstinfo.route_distance}" name="first_route_distance" id="route_distance">
										<input type="hidden" value="${firstinfo.route_charge}" name="first_route_charge" id="route_charge">
										<input type="hidden" value="${firstinfo.route_type}" name="first_route_type" id="route_type">
										<input type="hidden" value="${firstinfo.plane_code}" name="first_plane_code" id="plane_code">
										
										<input type="hidden" value="${secondinfo.route_depart_region}" name="route_depart_region" id="route_depart_region">
										<input type="hidden" value="${secondinfo.route_arrive_region}" name="route_arrive_region" id="route_arrive_region">
										<input type="hidden" value="${secondinfo.route_depart_day}" name="route_depart_day" id="route_depart_day">
										<input type="hidden" value="${secondinfo.depart_time}" name="depart_time" id="depart_time">
										<input type="hidden" value="${secondinfo.arrive_time}" name="arrive_time" id="arrive_time">
										<input type="hidden" value="${secondinfo.airline_name}" name="airline_name" id="airline_name">
										<input type="hidden" value="${secondinfo.airplane_model}" name="airplane_model" id="airplane_model">
										<input type="hidden" value="${secondinfo.flight_name}" name="flight_name" id="flight_name">
										<input type="hidden" value="${secondinfo.route_estimate_time}" name="route_estimate_time" id="route_estimate_time">
										<input type="hidden" value="${secondinfo.airline_site}" name="airline_site" id="airline_site">
										<input type="hidden" value="${secondinfo.route_distance}" name="route_distance" id="route_distance">
										<input type="hidden" value="${secondinfo.route_charge}" name="route_charge" id="route_charge">
										<input type="hidden" value="${secondinfo.plane_code}" name="plane_code" id="plane_code">
										<input type="hidden" value="${stop_code}" name="stop_code" id="stop_code">
									</c:when>
									
									<c:otherwise> <!-- flighttype이 2여야 하는데 넘어가지 않으므로 이런식으로 짠다. -->
										<input type="hidden" value="${ticketinfo.flighttype}" name="flighttype" id="flighttype">
										<input type="hidden" value="${ticketinfo.depart_region}" name="depart_region" id=" depart_region">
										<input type="hidden" value="${ticketinfo.arrive_region}" name="arrive_region" id="arrive_region">
										<input type="hidden" value="${ticketinfo.startDate}" name="startDate" id="startDate">
										<input type="hidden" value="${ticketinfo.endDate}" name="endDate" id="endDate">
										<input type="hidden" value="${ticketinfo.adult}" name="adult" id="adult">
										<input type="hidden" value="${ticketinfo.children}" name="children" id="children">
										<input type="hidden" value="${ticketinfo.laporseat}" name="laporseat" id="laporseat">
										<input type="hidden" value="${ticketinfo.seat_grade}" name="seat_grade" id="seat_grade">
										<input type="hidden" value="${ticketinfo.res_charge}" name="res_charge" id="res_charge">
										
										<input type="hidden" value="${ticketDTO.route_depart_region}" name="route_depart_region" id="route_depart_region">
										<input type="hidden" value="${ticketDTO.route_arrive_region}" name="route_arrive_region" id="route_arrive_region">
										<input type="hidden" value="${ticketDTO.route_depart_day}" name="route_depart_day" id="route_depart_day">
										<input type="hidden" value="${ticketDTO.depart_time}" name="depart_time" id="depart_time">
										<input type="hidden" value="${ticketDTO.arrive_time}" name="arrive_time" id="arrive_time">
										<input type="hidden" value="${ticketDTO.airline_name}" name="airline_name" id="airline_name">
										<input type="hidden" value="${ticketDTO.airplane_model}" name="airplane_model" id="airplane_model">
										<input type="hidden" value="${ticketDTO.flight_name}" name="flight_name" id="flight_name">
										<input type="hidden" value="${ticketDTO.route_estimate_time}" name="route_estimate_time" id="route_estimate_time">
										<input type="hidden" value="${ticketDTO.airline_site}" name="airline_site" id="airline_site">
										<input type="hidden" value="${ticketDTO.route_distance}" name="route_distance" id="route_distance">
										<input type="hidden" value="${ticketDTO.route_charge}" name="route_charge" id="route_charge">
										<input type="hidden" value="${ticketDTO.route_type}" name="route_type" id="route_type">
										<input type="hidden" value="${ticketDTO.stopover_code}" name="stopover_code" id="stopover_code">
										<input type="hidden" value="${ticketDTO.plane_code}" name="plane_code" id="plane_code">
								 </c:otherwise>
								</c:choose>
							</form>
							<div id="ssoIframe" style="display: none;"></div>
						</div>
					</div>
				</div>
			</div>
	</section>

	<footer class="footer text-faded text-center py-5">
		<div class="container">
			<p class="m-0 small">Copyright &copy; Your Website 2017</p>
		</div>
	</footer>

	<!-- Bootstrap core JavaScript -->
	<script src="vendor/jquery/jquery.min.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>

</html>