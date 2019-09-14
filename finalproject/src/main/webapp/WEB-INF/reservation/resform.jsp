<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Airline Ticketing System</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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

<link href="css/reservation/resform.css" type="text/css"
	rel="stylesheet" />
<link href="css/reservation/global.cfdf203c.css" rel="stylesheet"
	type="text/css">
<link href="css/reservation/flights.css" rel="Stylesheet"
	type="text/css" media="all">
<link href="css/reservation/lang-kr.css" rel="stylesheet"
	type="text/css">

<script src="js/reservation/resform.js"></script>
<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}
</style>

<script type="text/javascript">
	var handled = false;
	
	function Upper(e, r) {
	   r.value = r.value.toUpperCase();
	}
	
	$(document).ready(function() {

		var overLayerShow = function() {
			$('.pop-passport').css('display', 'block');
		};

		var overLayerClose = function() {
			$('.pop-passport').css('display', 'none');
		};

		var containerClose = function() {
			$(this).parents('.pop-passport').hide();
		}

		//ShowRules() 닫기 버튼
		$('.icon-close-btn').bind('click', function() {
			containerClose.call(this);
			overLayerClose();
		});

	});
</script>

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
	
	<form name="frm" id="frm" method="post">
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

									<div class="step  " step="2">
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

						<div class="wrap">
							<div class="page-inner clearfix">
								<div class="mod-box mod-main mod-book-main mod-book-main-flight">

									<div class="flight-info J_FlightInfo" id="divFlightInfo"
										style="display: block;">
										<div class="flight-tit clearfix">
											<!-- <a href="javascript:;" class="policy J_PolicyShowBtn"
												id="policy" > 수하물 규정&amp;항공권 규정 </a> -->
											<h2 class="tit">
												${goDTO.go_Depart_Nation} <i class="f-icon-s icon-round-trip"></i> ${goDTO.go_Arrive_Nation}
											</h2>
										</div>

										<div class="flight-result">
											<div class="flight-item clearfix">
												<div class="flight-item-hd clearfix">
													<div class="flight-cell flight-round">
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="round-txt">가는편</span>
														<p class="round-date" style="width: max-content;">${goDTO.go_Depart_Date}</p>
													</div>
													<div class="flight-cell flight-airline">

														<div class="airline-brick">

															<div class="airline-name">${goDTO.go_airline_name}</div>
															<div class="airline-num">
																<span>${goDTO.go_airplane_model}</span> 
															</div>
															<div class="airline-num">
																<span>${goDTO.go_flight_name}</span> 
															</div>
														</div>

													</div>
													<div class="flight-cell flight-time">
														<div class="time-cell depart-time">
															<div class="time">${goDTO.go_Depart_time}&nbsp;</div>
															<div class="code">${goDTO.go_Depart_Airport_Name} T1</div>
														</div>
														<div class="time-cell flight-beeline">

															<div class="stop non-stop">
																<c:if test="${not empty stopoverDTO.stopover_code}">
																	<span style="color: red;">경유</span>
																</c:if>
																
																<c:if test="${empty stopoverDTO.stopover_code}">
																	<span style="color: green;">직항</span>
																</c:if>
															</div>

															<div class="line">
																<i class="triangle"></i>

															</div>

														</div>
														<div class="time-cell arrival-time">
															<div class="time">&nbsp;&nbsp;${goDTO.go_Arrive_time}</div>
															<div class="code">${goDTO.go_Arrive_Airport_Name} T1</div>
															<span class="dayplus"></span>
														</div>
													</div>
													<div class="flight-cell flight-duration">
														<div class="duration-time">
															<i class="f-icon-s icon-clock-light"></i> ${goDTO.go_route_estimate_time}
														</div>
														
														<c:if test="${not empty stopoverDTO.stopover_code}">
															<a href="javascript:;" class="flight-detail"
																data-origdestseqid="1">항공편 세부 정보 <i
																class="f-icon-s icon-arrow-down-s"></i></a>
														</c:if>
													</div>
												</div>
											<c:if test="${not empty stopoverDTO.stopover_code}">	
											<div class="flight-item-con" style="display: none;">
	                                          <div class="flight-item-con-inner">
	
	                                             <div class="item-con-airline clearfix">
	                                                <span class="item-con-logo"> <img
	                                                   src="./세부정보_files/ua(1).png" alt=""
	                                                   class="airline-logo"> ${goDTO.go_airline_name} |<em>${seat_grade} </em> ${goDTO.go_flight_name}
	                                                </span>  <span
	                                                   class="item-con-time"> <i
	                                                   class="f-icon-s icon-clock-light"></i> ${stopoverDTO.route_before_estimate_time}
	                                                </span>
	                                             </div>
	                                             <div class="item-con-brick flight-detail-from">
	
	                                                <i class="item-con-dot"></i>
	
	                                                <div class="item-con-times flight-detail-time">
	
	                                                   <span class="time">${goDTO.go_Depart_time}</span>
	                                                </div>
	                                                <div class="item-con-location">${dto.route_arrive_region} T1</div>
	                                             </div>
	
	                                             <div class="item-con-brick flight-detail-from">
	
	                                                <i class="item-con-arrive-dot"></i>
	
	                                                <div class="item-con-times flight-detail-time">
	                                                   <span class="date">${depart_date}</span> <span class="time">${stopoverDTO.arrive_time}</span>
	                                                </div>
	                                                <div class="item-con-location item-con-noline">${stopoverDTO.route_depart_region} I</div>
	                                             </div>
	
	                                             <div class="item-con-transfer">
	                                                <div class="info">
	                                                   <p>환승 | ${stopoverDTO.route_depart_region} | <i
                                                   class="f-icon-s icon-clock-light"></i> ${stopoverDTO.route_estimate_time}</p>

                                                </div>
                                             </div>

                                             <div class="item-con-airline clearfix">
                                                <span class="item-con-logo"> <img
                                                   src="./세부정보_files/ua(1).png" alt=""
                                                   class="airline-logo"> ${stopoverDTO.airline_name} |<em>${seat_grade} </em> ${stopoverDTO.route_flight_name}
                                                </span> | <span
                                                   class="item-con-time"> <i
                                                   class="f-icon-s icon-clock-light"></i> ${stopoverDTO.route_after_estimate_time}
                                                </span>
                                             </div>
                                             <div class="item-con-brick flight-detail-from">

                                                <i class="item-con-arrive-dot"></i>

                                                <div class="item-con-times flight-detail-time">

                                                   <span class="time">${stopoverDTO.depart_time}</span>
                                                </div>
                                                <div class="item-con-location">${stopoverDTO.route_depart_region} T3</div>
                                             </div>

                                             <div class="item-con-brick flight-detail-from">

                                                <i class="item-con-dot"></i>

                                                <div class="item-con-times flight-detail-time">
                                                   <span class="date">${arrive_date}</span> <span class="time">${goDTO.go_Arrive_time}</span>
                                                </div>
                                                <div class="item-con-location item-con-noline">${stopoverDTO.route_arrive_region} C</div>
                                             </div>


                                          </div>
                                       </div>
                                       </c:if>
									</div>
								</div>

										<c:if test="${flighttype == '1'}">
										<div class="flight-result">
											<div class="flight-item clearfix">
												<div class="flight-item-hd clearfix">
													<div class="flight-cell flight-round">
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="round-txt">오는편</span>
														<p class="round-date" style="width: max-content;">${returnDTO.return_Depart_Date}</p>
													</div>
													<div class="flight-cell flight-airline">


														<div class="airline-brick">

															<div class="airline-name">${returnDTO.return_airline_name}</div>
															<div class="airline-num">
																<span>${returnDTO.return_airplane_model}</span>
															</div>
															<div class="airline-num">
																<span>${returnDTO.return_flight_name}</span>
															</div>
														</div>


													</div>
													<div class="flight-cell flight-time">
														<div class="time-cell depart-time">
															<div class="time">${returnDTO.return_Depart_time}&nbsp;</div>
															<div class="code">${returnDTO.return_Depart_Airport_Name} T1</div>
														</div>
														<div class="time-cell flight-beeline">

															<div class="stop non-stop">
																<span style="color: green">직항</span>
															</div>

															<div class="line">
																<i class="triangle"></i>

															</div>

														</div>
														<div class="time-cell arrival-time">
															<div class="time">&nbsp;${returnDTO.return_Arrive_time}</div>
															<div class="code">${returnDTO.return_Arrive_Airport_Name} T1&nbsp;&nbsp;&nbsp;</div>
															<span class="dayplus"></span>
														</div>
													</div>
													<div class="flight-cell flight-duration">
														<div class="duration-time">
															<i class="f-icon-s icon-clock-light"></i> ${returnDTO.return_route_estimate_time}
														</div>
													</div>
												</div>
											</div>
										</div>
										</c:if>

										<div class="flight-modify"></div>
									</div>


									<div class="m-gst-info">
										<c:set var="count" value="1"/>
										<c:set var="ad" value="${adult }"/>
										<c:set var="ch" value="${children }"/>
										<c:set var="allper" value="${adult+children }"/>
										<script>
											var allper = '<c:out value="${allper}"/>';
										</script>
										<c:set var="personage" value="성인 항공권"/>
										
										<c:forEach begin="1" end="${adult+children}" var="per">
										<div class="m-pgr-info">
											<div class="passenger-item" id="passenger_${count }" info="" storage="" infoid="" person="ADT" passenger_type="">
												<h2 class="mod-tit">
													여행자 <span class="passenger-count">${per }</span> <span
														class="passenger-type">${personage }</span>
												</h2>
												
												<ul class="info-field-list passenger-field" style="list-style-type: none;">
													<li class="info-field-item tipName">
														<div class="field-cell name_c">
															<label class="field-key">성/ Surname</label>
															<div class="pos-wrapper">
																<div class="input-instance" style="display: none;" id="input-instance">
			                                                   		<p class="desc">승객의 이름은 선택한 신분증의 이름과 동일해야 합니다</p>
			                                                  		 <div class="card-con clearfix">
			                                                     	 	<span class="card-type fn_book_NameTip">여권</span>
			                                                      			<div tag="Surname" class="field">
			                                                         			<span class="label">성/ Surname</span> <span class="name">예: HONG</span>
			                                                     			</div>
			                                                     			
				                                                      <div tag="Givennames" class="field field-active">
				                                                         <span class="label">이름 /Given name(s)</span> <span
				                                                            class="name">예: GILDONG</span>
				                                                      </div>
			                                                  		 </div>
			                                               	 </div>
			                                                
			                                                <input class="c-ipt ipt-name ipt-surname"
			                                                		id = "surname_${count }"
																	placeholder="예: HONG" data-toggle="input-instance"
																	data-tag="Surname" type="text" name="surname"
																	onkeyup="Upper(event, this)"
					                                                onkeydown="if(event.keyCode==13) handled=true"
					                                                onblur="handled=false">
															</div>
															
														</div>
														
														<div class="field-cell name_c">
															<label class="field-key">이름 /Given name(s)</label>
															<div class="pos-wrapper">
															
															<div class="input-instance" style="display: none;"
				                                                   id="input-instance2">
				                                                   <p class="desc">승객의 이름은 선택한 신분증의 이름과 동일해야 합니다</p>
				                                                   <div class="card-con clearfix">
				                                                      <span class="card-type fn_book_NameTip">여권</span>
				                                                      <div tag="Surname" class="field">
				                                                         <span class="label">성/ Surname</span> <span
				                                                            class="name">예: HONG</span>
				                                                      </div>
				                                                      <div tag="Givennames" class="field field-active">
				                                                         <span class="label">이름 /Given name(s)</span> <span
				                                                            class="name">예: GILDONG</span>
				                                                      </div>
				                                                   </div>
				                                                </div>
				                                                
																<input class="c-ipt ipt-name ipt-givennames"
																	id="givennames_${count }"
																	placeholder="예: GILDONG" data-toggle="input-instance"
																	data-tag="Givennames" type="text" name="givennames"
																	onkeyup="Upper(event, this)"
					                                                onkeydown="if(event.keyCode==13) handled=true"
					                                                onblur="handled=false">
																<div class="input-instance" style="display: none;">
																	<p class="desc">승객의 이름은 선택한 신분증의 이름과 동일해야 합니다</p>
																	<div class="card-con clearfix">
																		<span class="card-type fn_book_NameTip">여권</span>
																		<div tag="Surname" class="field">
																			<span class="label">성/ Surname</span> <span
																				class="name">예: HONG</span>
																		</div>
																		<div tag="Givennames" class="field">
																			<span class="label">이름 /Given name(s)</span> <span
																				class="name">예: GILDONG</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="field-cell">
															<a id="ShowRules" href="javascript:showRules();"
																class="field-tip-link"> <i class="c-icon icon-info"></i>이름
																작성 팁!
															</a>
														</div> 
														
														<span id="ipt-name-error" class="msg-box msg-error"
				                                          style="display: none;">선택 신분증에 기재되어있는 영문이름으로 정확하게
				                                             		입력하세요. 이름 입력 시에는 발음기호, 하이픈 또는 기타 문자부호와 같은 특수문자 입력이 불가하며,
				                                             		성 입력 시에는 공백 입력이 불가합니다.
				                                         </span>
				
														<span id="ipt-name-error" class="msg-box msg-error"
														style="display: none;"></span>
														<p class="field-tip">승객의 이름은 선택한 신분증의 이름과 동일해야 합니다</p>
													</li>
													<li class="info-field-item tipID">
														<div class="field-cell">
															<label class="field-key">신분증 종류</label> <select
																class="c-sel sel-id-type" name="selidtype">
																<option value="2" selected="selected">여권</option>
															</select>
														</div>
														<div class="field-cell">
															<label class="field-key">신분증 번호를 입력하세요</label> <span
																class="pos-wrapper"> <input
																class="c-ipt ipt-id-num" 
																id = "ipt-id-num_${count }"
																placeholder="신분증 번호를 입력하세요"
																data-toggle="input-zoomer" type="text" name="idNumber">
															</span>
														</div> <span class="msg-box msg-error" style="display: none;"></span>
														<span id="ipt-password-error" class="msg-box msg-error"
                                          					style="display: none;">ID 번호를 확인해주십시오 (숫자나 문자만)</span>
														<p class="field-tip" id="passportDateTip">여권의 유효기간
															만료일은 출국일로부터 6개월 이상 유효해야 합니다.</p>
													</li>
													
													
													<c:set var="g_count" value="1"></c:set>
													<li class="info-field-item tipGender"><label
														class="field-key">성별</label>
														<div class="chk-new-group" >
															<label class="tab chk-btn chk-female_${count }" id="chk-female"> 
                                                				<i class="f-icon icon-new-female"></i>
																<input type="checkbox" name="gender" id="gender_f_${count }" class="gender_${count }" value="여성" style="display: none;"> 여성
															</label>
															<label class="tab chk-btn chk-male_${count }" id="chk-male"> 
																 <i class="f-icon icon-new-male"></i>
																 <input type="checkbox" name="gender" id="gender_m_${count }" class="gender_${count }" value="남성" style="display: none;" > 남성							
															 </label>
														</div>
														
														<span class="msg-box msg-error" style="display: none;"></span>
														<p class="field-tip field-tip-em"></p></li>
													<li class="info-field-item tipNation"><label
														class="field-key">신분증 발행 국가 또는 지역</label> <select
														class="c-sel sel-nationality" name="nationality">
															<option value="KR">한국</option>
															<option value="CN">중국</option>
															<option value="US">미국</option>
															<option value="CA">캐나다</option>
															<option value="TW">대만</option>
															<optgroup label="ㄱ">
																<option value="GH">가나</option>
																<option value="GA">가봉</option>
																<option value="GY">가이아나</option>
																<option value="GM">감비아</option>
																<option value="GP">과들루프</option>
																<option value="GT">과테말라</option>
																<option value="GU">괌</option>
																<option value="GD">그레나다</option>
																<option value="GE">그루지야</option>
																<option value="GR">그리스</option>
																<option value="GL">그린란드</option>
																<option value="GN">기니</option>
																<option value="GW">기니비사우</option>
															</optgroup>
															<optgroup label="ㄴ">
																<option value="NA">나미비아</option>
																<option value="NR">나우루</option>
																<option value="NG">나이지리아</option>
																<option value="SS">남 수단</option>
																<option value="AQ">남극 대륙</option>
																<option value="ZA">남아프리카공화국</option>
																<option value="NL">네덜란드</option>
																<option value="SX">네덜란드령 세인트마틴섬</option>
																<option value="AN">네덜란드령 앤틸리스제도</option>
																<option value="NP">네팔</option>
																<option value="NO">노르웨이</option>
																<option value="NZ">뉴질랜드</option>
																<option value="NC">뉴칼레도니아</option>
																<option value="NU">니우에</option>
																<option value="NE">니제르</option>
																<option value="NI">니카라과</option>
															</optgroup>
															<optgroup label="ㄷ">
																<option value="TW">대만</option>
																<option value="DK">덴마크</option>
																<option value="DM">도미니카 공화국</option>
																<option value="DO">도미니카 공화국</option>
																<option value="DE">독일</option>
																<option value="TL">동 티모르</option>
															</optgroup>
															<optgroup label="ㄹ">
																<option value="LA">라오스</option>
																<option value="LR">라이베리아</option>
																<option value="LV">라트비아</option>
																<option value="RU">러시아</option>
																<option value="LB">레바논</option>
																<option value="LS">레소토</option>
																<option value="RE">레위니옹</option>
																<option value="RO">루마니아</option>
																<option value="LU">룩셈부르크</option>
																<option value="RW">르완다</option>
																<option value="LY">리비아</option>
																<option value="LT">리투아니아</option>
																<option value="LI">리히텐슈타인</option>
															</optgroup>
															<optgroup label="ㅁ">
																<option value="MG">마다가스카르</option>
																<option value="MQ">마르티니크</option>
																<option value="MH">마셜 제도</option>
																<option value="YT">마요트</option>
																<option value="MO">마카오</option>
																<option value="MK">마케도니아</option>
																<option value="MW">말라위</option>
																<option value="MY">말레이시아</option>
																<option value="ML">말리</option>
																<option value="MX">멕시코</option>
																<option value="MC">모나코</option>
																<option value="MA">모로코</option>
																<option value="MU">모리셔스</option>
																<option value="MR">모리타니</option>
																<option value="MZ">모잠비크</option>
																<option value="MS">몬 세라</option>
																<option value="ME">몬테네그로</option>
																<option value="MD">몰도바</option>
																<option value="MV">몰디브</option>
																<option value="MT">몰타</option>
																<option value="MN">몽골</option>
																<option value="US">미국</option>
																<option value="VI">미국령 버진 아일랜드</option>
																<option value="UM">미국령 외교 섬</option>
																<option value="MM">미얀마</option>
																<option value="FM">미크로네시아</option>
															</optgroup>
															<optgroup label="ㅂ">
																<option value="VU">바누아투</option>
																<option value="BH">바레인</option>
																<option value="BB">바베이도스</option>
																<option value="VA">바티칸시국</option>
																<option value="BS">바하마</option>
																<option value="BD">방글라데시</option>
																<option value="BM">버뮤다제도</option>
																<option value="BJ">베냉</option>
																<option value="VE">베네수엘라</option>
																<option value="VN">베트남</option>
																<option value="BE">벨기에</option>
																<option value="BY">벨라루스</option>
																<option value="BZ">벨리즈</option>
																<option value="BQ">보네르 섬, 세인트 유스 타티 우스 섬 및 사바 섬</option>
																<option value="BA">보스니아헤르체고비나</option>
																<option value="BW">보츠와나</option>
																<option value="BO">볼리비아</option>
																<option value="BI">부룬디</option>
																<option value="BF">부르키나파소</option>
																<option value="BV">부베 섬</option>
																<option value="BT">부탄</option>
																<option value="MP">북 마리아나 제도</option>
																<option value="BG">불가리아</option>
																<option value="BR">브라질</option>
																<option value="BN">브루나이</option>
															</optgroup>
															<optgroup label="ㅅ">
																<option value="SA">사우디아라비아</option>
																<option value="GS">사우스 조지아 및 사우스 샌드위치 제도</option>
																<option value="SM">산마리노</option>
																<option value="ST">상투메프린시페</option>
																<option value="BL">생바르텔르미섬</option>
																<option value="EH">서사하라</option>
																<option value="SN">세네갈</option>
																<option value="RS">세르비아</option>
																<option value="SC">세이셸</option>
																<option value="MF">세인트 마틴</option>
																<option value="VC">세인트 빈센트 그레나딘</option>
																<option value="PM">세인트 피에르 미 클롱</option>
																<option value="SH">세인트 헬레나</option>
																<option value="LC">세인트루시아</option>
																<option value="KN">세인트키츠네비스</option>
																<option value="SO">소말리아</option>
																<option value="SB">솔로몬제도</option>
																<option value="SD">수단</option>
																<option value="SR">수리남</option>
																<option value="LK">스리랑카</option>
																<option value="SJ">스발 바르와 얀 메이 엔</option>
																<option value="SZ">스와질란드</option>
																<option value="SE">스웨덴</option>
																<option value="CH">스위스</option>
																<option value="ES">스페인</option>
																<option value="SK">슬로바키아</option>
																<option value="SI">슬로베니아</option>
																<option value="SY">시리아</option>
																<option value="SL">시에라리온</option>
																<option value="SG">싱가포르</option>
															</optgroup>
															<optgroup label="ㅇ">
																<option value="AE">아랍에미리트</option>
																<option value="AW">아루바</option>
																<option value="AM">아르메니아</option>
																<option value="AR">아르헨티나</option>
																<option value="AS">아메리칸 사모아</option>
																<option value="WS">아메리칸 사모아</option>
																<option value="IS">아이슬란드</option>
																<option value="HT">아이티</option>
																<option value="IE">아일랜드</option>
																<option value="AZ">아제르바이잔</option>
																<option value="AF">아프가니스탄</option>
																<option value="AD">안도라</option>
																<option value="AL">알바니아</option>
																<option value="DZ">알제리</option>
																<option value="AO">앙골라</option>
																<option value="AG">앤티가바부다</option>
																<option value="AI">앵귈라</option>
																<option value="ER">에리트레아</option>
																<option value="EE">에스토니아</option>
																<option value="EC">에콰도르</option>
																<option value="ET">에티오피아</option>
																<option value="SV">엘살바도르</option>
																<option value="GB">영국</option>
																<option value="VG">영국령 버진 아일랜드</option>
																<option value="IO">영국령 인도양 지역</option>
																<option value="YE">예멘</option>
																<option value="OM">오만</option>
																<option value="AU">오스트레일리아/호주</option>
																<option value="AT">오스트리아</option>
																<option value="HN">온두라스</option>
																<option value="JO">요르단</option>
																<option value="UG">우간다</option>
																<option value="UY">우루과이</option>
																<option value="UZ">우즈베키스탄</option>
																<option value="UA">우크라이나</option>
																<option value="WF">월리스 푸 투나</option>
																<option value="IQ">이라크</option>
																<option value="IR">이란</option>
																<option value="IL">이스라엘</option>
																<option value="EG">이집트</option>
																<option value="IT">이탈리아</option>
																<option value="IN">인도</option>
																<option value="ID">인도네시아</option>
																<option value="JP">일본</option>
															</optgroup>
															<optgroup label="ㅈ">
																<option value="JM">자메이카</option>
																<option value="ZM">잠비아</option>
																<option value="GQ">적도 기니</option>
																<option value="CN">중국</option>
																<option value="CF">중앙아프리카 공화국</option>
																<option value="DJ">지부티</option>
																<option value="GI">지브롤터</option>
																<option value="ZW">짐바브웨</option>
															</optgroup>
															<optgroup label="ㅊ">
																<option value="TD">차드</option>
																<option value="CZ">체코</option>
																<option value="CL">칠레</option>
															</optgroup>
															<optgroup label="ㅋ">
																<option value="CM">카메룬</option>
																<option value="CV">카보베르데</option>
																<option value="KZ">카자흐스탄</option>
																<option value="QA">카타르</option>
																<option value="KH">캄보디아</option>
																<option value="CA">캐나다</option>
																<option value="KE">케냐</option>
																<option value="KY">케이맨 제도</option>
																<option value="KM">코모로</option>
																<option value="CR">코스타리카</option>
																<option value="CI">코트 디부 아르</option>
																<option value="CO">콜롬비아</option>
																<option value="CG">콩고</option>
																<option value="CD">콩고 민주 공화국</option>
																<option value="CU">쿠바</option>
																<option value="KW">쿠웨이트</option>
																<option value="CC">코코스 군도</option>
																<option value="CK">쿡제도</option>
																<option value="CW">퀴라소섬/쿠라사우섬</option>
																<option value="HR">크로아티아</option>
																<option value="CX">크리스마스 섬</option>
																<option value="KG">키르기스스탄</option>
																<option value="KI">키리바시</option>
																<option value="CY">키프로스</option>
															</optgroup>
															<optgroup label="ㅌ">
																<option value="TJ">타지키스탄</option>
																<option value="TZ">탄자니아</option>
																<option value="TH">태국</option>
																<option value="TC">터크 스 케이 커스 제도</option>
																<option value="TR">터키</option>
																<option value="TG">토고</option>
																<option value="TK">토켈 라우</option>
																<option value="TO">통가</option>
																<option value="TM">투르크 메니스탄</option>
																<option value="TV">투발루</option>
																<option value="TN">튀니지</option>
																<option value="TT">트리니다드토바고</option>
															</optgroup>
															<optgroup label="ㅍ">
																<option value="PA">파나마</option>
																<option value="PY">파라과이</option>
																<option value="PK">파키스탄</option>
																<option value="PG">파푸아뉴기니</option>
																<option value="PW">팔라우공화국</option>
																<option value="PS">팔레스타인</option>
																<option value="FO">페로 제도</option>
																<option value="PE">페루</option>
																<option value="PT">포르투갈</option>
																<option value="FK">포클랜드 제도 (말 비나 스)</option>
																<option value="PL">폴란드</option>
																<option value="PR">푸에르토리코</option>
																<option value="FR">프랑스</option>
																<option value="TF">프랑스 남부 영토</option>
																<option value="GF">프랑스 령 기아나</option>
																<option value="PF">프랑스령 폴리네시아</option>
																<option value="FJ">피지</option>
																<option value="FI">핀란드</option>
																<option value="PH">필리핀</option>
																<option value="PN">핏 케언</option>
															</optgroup>
															<optgroup label="ㅎ">
																<option value="KR">한국</option>
																<option value="KP">북경선</option>
																<option value="HM">허드 섬 및 맥도널드 제도</option>
																<option value="HU">헝가리</option>
																<option value="NF">호주령 노퍽 섬</option>
																<option value="HK">홍콩</option>
															</optgroup>
													</select> <span class="msg-box msg-error" style="display: none;"></span>
													</li>
													<li class="info-field-item tipBirthday"><label
														class="field-key">생년월일</label> <select
														id = "sel-birth-year_${count }"
														class="c-sel sel-birth sel-birth-year" name="birth_year">
															<option value="0" disabled="" selected="">년</option>
															<option value="2018">2018 년</option>
															<option value="2017">2017 년</option>
															<option value="2016">2016 년</option>
															<option value="2015">2015 년</option>
															<option value="2014">2014 년</option>
															<option value="2013">2013 년</option>
															<option value="2012">2012 년</option>
															<option value="2011">2011 년</option>
															<option value="2010">2010 년</option>
															<option value="2009">2009 년</option>
															<option value="2008">2008 년</option>
															<option value="2007">2007 년</option>
															<option value="2006">2006 년</option>
															<option value="2005">2005 년</option>
															<option value="2004">2004 년</option>
															<option value="2003">2003 년</option>
															<option value="2002">2002 년</option>
															<option value="2001">2001 년</option>
															<option value="2000">2000 년</option>
															<option value="1999">1999 년</option>
															<option value="1998">1998 년</option>
															<option value="1997">1997 년</option>
															<option value="1996">1996 년</option>
															<option value="1995">1995 년</option>
															<option value="1994">1994 년</option>
															<option value="1993">1993 년</option>
															<option value="1992">1992 년</option>
															<option value="1991">1991 년</option>
															<option value="1990">1990 년</option>
															<option value="1989">1989 년</option>
															<option value="1988">1988 년</option>
															<option value="1987">1987 년</option>
															<option value="1986">1986 년</option>
															<option value="1985">1985 년</option>
															<option value="1984">1984 년</option>
															<option value="1983">1983 년</option>
															<option value="1982">1982 년</option>
															<option value="1981">1981 년</option>
															<option value="1980">1980 년</option>
															<option value="1979">1979 년</option>
															<option value="1978">1978 년</option>
															<option value="1977">1977 년</option>
															<option value="1976">1976 년</option>
															<option value="1975">1975 년</option>
															<option value="1974">1974 년</option>
															<option value="1973">1973 년</option>
															<option value="1972">1972 년</option>
															<option value="1971">1971 년</option>
															<option value="1970">1970 년</option>
															<option value="1969">1969 년</option>
															<option value="1968">1968 년</option>
															<option value="1967">1967 년</option>
															<option value="1966">1966 년</option>
															<option value="1965">1965 년</option>
															<option value="1964">1964 년</option>
															<option value="1963">1963 년</option>
															<option value="1962">1962 년</option>
															<option value="1961">1961 년</option>
															<option value="1960">1960 년</option>
															<option value="1959">1959 년</option>
															<option value="1958">1958 년</option>
															<option value="1957">1957 년</option>
															<option value="1956">1956 년</option>
															<option value="1955">1955 년</option>
															<option value="1954">1954 년</option>
															<option value="1953">1953 년</option>
															<option value="1952">1952 년</option>
															<option value="1951">1951 년</option>
															<option value="1950">1950 년</option>
															<option value="1949">1949 년</option>
															<option value="1948">1948 년</option>
															<option value="1947">1947 년</option>
															<option value="1946">1946 년</option>
															<option value="1945">1945 년</option>
															<option value="1944">1944 년</option>
															<option value="1943">1943 년</option>
															<option value="1942">1942 년</option>
															<option value="1941">1941 년</option>
															<option value="1940">1940 년</option>
															<option value="1939">1939 년</option>
															<option value="1938">1938 년</option>
															<option value="1937">1937 년</option>
															<option value="1936">1936 년</option>
															<option value="1935">1935 년</option>
															<option value="1934">1934 년</option>
															<option value="1933">1933 년</option>
															<option value="1932">1932 년</option>
															<option value="1931">1931 년</option>
															<option value="1930">1930 년</option>
															<option value="1929">1929 년</option>
															<option value="1928">1928 년</option>
															<option value="1927">1927 년</option>
															<option value="1926">1926 년</option>
															<option value="1925">1925 년</option>
															<option value="1924">1924 년</option>
															<option value="1923">1923 년</option>
															<option value="1922">1922 년</option>
															<option value="1921">1921 년</option>
															<option value="1920">1920 년</option>
															<option value="1919">1919 년</option>
															<option value="1918">1918 년</option>
													</select><select class="c-sel sel-birth sel-birth-month"
														id="sel-birth-month_${count }"
														name="birth_month">
															<option value="0" disabled="" selected="">월</option>
															<option value="1">1월</option>
															<option value="2">2월</option>
															<option value="3">3월</option>
															<option value="4">4월</option>
															<option value="5">5월</option>
															<option value="6">6월</option>
															<option value="7">7월</option>
															<option value="8">8월</option>
															<option value="9">9월</option>
															<option value="10">10월</option>
															<option value="11">11월</option>
															<option value="12">12월</option>
													</select><select class="c-sel sel-birth sel-birth-day"
														id="sel-birth-day_${count }"
														name="birth_day">
															<option value="0" disabled="" selected="">일</option>
															<option value="1">1 일</option>
															<option value="2">2 일</option>
															<option value="3">3 일</option>
															<option value="4">4 일</option>
															<option value="5">5 일</option>
															<option value="6">6 일</option>
															<option value="7">7 일</option>
															<option value="8">8 일</option>
															<option value="9">9 일</option>
															<option value="10">10 일</option>
															<option value="11">11 일</option>
															<option value="12">12 일</option>
															<option value="13">13 일</option>
															<option value="14">14 일</option>
															<option value="15">15 일</option>
															<option value="16">16 일</option>
															<option value="17">17 일</option>
															<option value="18">18 일</option>
															<option value="19">19 일</option>
															<option value="20">20 일</option>
															<option value="21">21 일</option>
															<option value="22">22 일</option>
															<option value="23">23 일</option>
															<option value="24">24 일</option>
															<option value="25">25 일</option>
															<option value="26">26 일</option>
															<option value="27">27 일</option>
															<option value="28">28 일</option>
															<option value="29">29 일</option>
															<option value="30">30 일</option>
															<option value="31">31 일</option>
													</select> <span class="msg-box msg-error" style="display: none;"></span>
														<p class="field-tip fn_book_passengerTypeTip"
															style="display: none;"></p>
														<p class="field-tip field-tip-em"></p></li>
												</ul>
												
											</div>
										</div>
										
										<c:set var="count" value="${ count+1}"/>
										<c:if test="${ad ne 0 }">
											<c:set var="ad" value="${ad-1 }"/>
										</c:if>
										
										<c:if test="${ad eq 0 }">
											<c:set var="personage" value="어린이 항공권"/>
											<c:if test="${ch ne 0 }">
												<c:set var="ch" value="${ch-1 }"/>
											</c:if>

										</c:if>

									</c:forEach>
									</div>
										
									<!-------------------------------------------  -->	

									<div class="p-pop pop-passport">
										<div class="pop-table">
											<!-- pop-releasable -->
											<div class="pop-cell">
												<div class="pop-con">
													<div class="pop-cnt">
														<div class="passport-bg">
															<h3>여권</h3>
															<div class="field">
																<label>성/ Surname</label> <span>SMITH</span>
															</div>
															<div class="field">
																<label>이름 /Given name(s)</label> <span>MARY
																	ISABELLE</span>
															</div>
														</div>
														<ol class="rule-tips">
															<li>
																<p>
																	여행자 이름 작성 시, 선택 신분증에 표기된 이름과 정확히 일치하게 작성해 주세요. ※ 한국인은
																	여권 영문 이름<br> 여행자 이름은 신분증 상에 표기된 영어 또는 중국어 병음으로 작성해
																	주세요 <br> 선택 신분증 상에 중국어 간체로 이름이 표기된 경우, 여행자 이름란에
																	반드시 표기대로 중국어 이름을 작성해 주세요
																</p>
															</li>
															<li>
																<p>한국인 이름을 제외한 여행자의 중간이름 입력 시, 아래 예시를 참고하여 이름과 중간이름
																	사이에 공백 한칸을 남겨주세요</p>
																<p>
																	<input class="c-ipt" type="text" readonly="readonly"
																		value="성"> <input class="c-ipt" type="text"
																		readonly="readonly" value="성 (중간 이름 포함)">
																</p>
															</li>
														</ol>
													</div>
													<span class="pop-close" data-dismiss="modal"><span
														class="c-icon icon-close-btn"></span></span>
												</div>
											</div>
										</div>
									</div>
									
									
									<div id="divMyPriceSum" class="m-summary-side is-active">
				                     <div class="summary-inner fold-container">
				                        <div class="summary-detail fold-content">
				                           <div id="adtPricePanel_Summary" class="detail-type" style="">
				                              <dl class="clearfix tit">
				                                 <dt>성인</dt>
				                                 <dd>
				                                    <span class="multi-num">× <em tag="adtCnt_Summary">${adult}</em></span>
				                                 </dd>
				                              </dl>
				                              
				                              <dl class="clearfix tit">
				                                 <dt>아이</dt>
				                                 <dd>
				                                    <span class="multi-num">× <em tag="adtCnt_Summary">${children}</em></span>
				                                 </dd>
				                              </dl>
				
				                              <dl class="clearfix">
				                                 <dt>항공 요금(가는날)</dt>
				                                 <dd>
				                                    <span class="c-price"> 
					                                    <fmt:formatNumber value="${first_route_charge}" />
					                                    <span class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              
				                              <c:if test="${flighttype == '1'}">
				                              <dl class="clearfix">
				                                 <dt>항공 요금(오는날)</dt>
				                                 <dd>
				                                    <span class="c-price"> 
					                                    <fmt:formatNumber value="${second_route_charge}" />
					                                    <span class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              </c:if>
				                            
				                           </div>
				                           
				                           <div class="detail-type" id="chdPricePanel_Summary"
				                              style="display: none">
				                              <dl class="clearfix type-item tit">
				                                 <dt>어린이</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="p_chdTotalPrice">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span> <span class="multi-num"> ×<em tag="chdCnt_Summary">0</em>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              <dl class="clearfix">
				                                 <dt>항공 요금</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="chdPrice_Summary">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              <dl class="clearfix">
				                                 <dt>예상세금&amp;기타요금</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="chdTaxFee_Summary">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                           </div>
				                           <div class="detail-type" id="infPricePanel_Summary"
				                              style="display: none">
				                              <dl class="clearfix type-item tit">
				                                 <dt>유아</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="p_infTotalPrice">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span> <span class="multi-num"> ×<em tag="infCnt_Summary">0</em>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              <dl class="clearfix">
				                                 <dt>항공 요금</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="infPrice_Summary">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              <dl class="clearfix">
				                                 <dt>예상세금&amp;기타요금</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="infTaxFee_Summary">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                           </div>
				
				                           <div
				                              class="check-list-addon detail-type detail-product detail-product-top">
				                              <dl class="clearfix" style="display: none">
				                                 <dt>항공 상해 보험</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num">0</strong>
				                                       <span class="price-currency">원</span>
				                                    </span> <span class="multi-num">×<em
				                                       id="insuranceCnt_summary">0</em></span>
				                                 </dd>
				                              </dl>
				
				
				                              <dl id="deliveryFeeDiv_Summary" class="clearfix "
				                                 style="display: none">
				                                 <dt>배송</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="deliveryFee_Summary">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              <dl class="clearfix" style="display: none;">
				                                 <!--TODO 多语言-->
				                                 <dt>위탁수하물 허용량</dt>
				                                 <dd>
				                                    <span class="c-price"> <strong class="price-num"
				                                       id="baggageFee_Summary">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                              <dl id="xHotelcouponFeeDiv_Summary" class="clearfix"
				                                 style="display: none;">
				                                 <dt>호텔 할인코드</dt>
				                                 <dd>
				                                    <span class="c-price"> <em class="price-num"
				                                       id="xhotelcouponFee_Summary">0</em> <span
				                                       class="price-currency">원</span>
				                                    </span> <span class="multi-num">×<em
				                                       id="xhotelcouponCnt_summary">1</em></span>
				                                 </dd>
				                              </dl>
				                              <!--放最后面-->
				                              <dl class="clearfix" id="promoAmountDiv_Summary"
				                                 style="display: none;">
				                                 <dt>할인액</dt>
				                                 <dd>
				                                    <span class="c-price"> - <strong class="price-num"
				                                       id="promoAmount_Summary">0</strong> <span
				                                       class="price-currency">원</span>
				                                    </span>
				                                 </dd>
				                              </dl>
				                           </div>
				                        </div>
				                        <div
				                           class="payment-price settlement-preferred fold-tit total-price clearfix">
				                           <div class="price-total">
				
				                              <span class="final" style="display: none"> <span
				                                 class="c-price"> <strong class="price-num"
				                                    cnyprice="1906" id="amountCur_Summary">317,667</strong> <span
				                                    class="price-currency">원</span>
				                              </span>
				                              </span>
				                           </div>
				                           <div id="balanceInfoTip_summary" class="info_tip">
				                              <dl class="price-total clearfix">
				                                 <dt>총 금액</dt>
				                                 <dd class="cny-reference" id="priceTip_summary">
				                                    <em tag="balanceAmountInSummary" id="amountCNY_Summary"> <fmt:formatNumber value="${res_charge}" /></em>
				                                    <dfn id="curr_priceTip">원</dfn>
				                                 </dd>
				                              </dl>
				
				                           </div>
				                        </div>
				                     </div>
				                  </div>

									<div class="m-settlement-currency mod-payment-method">
                              <h2 class="mod-tit">결제방법</h2>
                              <div class="mod-cont clearfix">
                                 <label class="currency">결제 통화를 선택하세요</label>
                                 <div class="ui-select-wrap">
                                    <a href="javascript:showCurrency();"
                                       class="ui-select ui-select-cnt"> <span class="amount">KRW</span>
                                       <span class="ui-arrow-wrap"><span class="ui-arrow"></span></span>
                                    </a>
                                    <div class="bank-cards">
                                       <div class="card-box" style="padding-top: 8px; padding-left: 10px;">
                                          <span data-tag="nocny-card-icon" data-flag="master"
                                             class="h-icon-box"><i
                                             class="s-card-icon s-icon-ms" title="Master Card"></i></span> <span
                                             data-tag="nocny-card-icon" data-flag="visa"
                                             class="h-icon-box"><i
                                             class="s-card-icon s-icon-visa" title="visa"></i></span> <span
                                             data-tag="nocny-card-icon" style="display:"
                                             data-flag="union" class="h-icon-box"><i
                                             class="s-card-icon s-icon-union" title="union"></i></span> <span
                                             data-tag="cny-card-icon" style="display:;"
                                             data-flag="jcb" class="h-icon-box"><i
                                             class="s-card-icon s-icon-jcb" title="jcb"></i></span> <span
                                             data-tag="cny-card-icon" style="display: none;"
                                             data-flag="ae" class="h-icon-box"><i
                                             class="s-card-icon s-icon-ae" title="ae"></i> <i
                                             class="f-icon icon-new-info"></i></span> <span
                                             data-tag="cny-card-icon" data-flag="cmoney"
                                             style="display: none;" class="h-icon-box"><i
                                             class="s-icon-cmoney" title="c-money"></i> <i
                                             class="f-icon icon-new-info"></i></span>
                                       </div>
                                       
                                    </div>
                              
    
                                    <div class="book-ui-droplist">
                                                <div class="hd-list book-currency-list"
                                                   style="display: none;">
                                                   <a href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="AUD" class="aa" id="0000017" name="AUD">AUD - 호주 달러</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="BRL" class="" id="0000041" name="BRL">BRL - 브라질 레알</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="CAD" class="" id="0000013" name="CAD">CAD - 캐나다 달러</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="CHF" class="" id="0000014" name="CHF">CHF - 스위스 프랑</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="CNY" class="" id="0000053" name="CNY">CNY - 중국 위안 (인민폐)</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="EUR" class="" id="0000003" name="EUR">EUR - 유로</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="GBP" class="" id="0000012" name="GBP">GBP - 영국 파운드</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="HKD" class="" id="0000015" name="HKD">HKD - 홍콩 달러</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="IDR" class="" id="0000029" name="IDR">IDR - 인도네시아 루피아</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="INR" class="" id="0000037" name="INR">INR - 인도 루피</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="JPY" class="" id="0000002" name="JPY">JPY - 일본 엔</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="KRW" class="active" id="원" name="원">KRW - 대한민국 한화(원)</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="MYR" class="" id="0000025" name="MYR">MYR - 말레이시아 링깃</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="NZD" class="" id="0000026" name="NZD">NZD - 뉴질랜드 달러</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="PHP" class="" id="0000034" name="PHP">PHP - 필리핀 페소</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="PLN" class="" id="0000045" name="PLN">PLN - 폴란드 즈워티</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="RUB" class="" id="0000043" name="RUB">RUB - 러시아 루블</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="SGD" class="" id="0000024" name="SGD">SGD - 싱가포르 달러</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="THB" class="" id="0000028" name="THB">THB - 태국 바트</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="TRY" class="" id="0000050" name="TRY">TRY - 터키 리라</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="TWD" class="" id="0000031" name="TWD">TWD - 신타이완 달러</a> <a
                                                      href="javascript:void(0)" rel="nofollow" divtype=""
                                                      data-currency="USD" class="" id="0000001" name="USD">USD - 미국 달러</a>
                                                </div>
                                             </div>
		                                 </div>
		                              </div>
		                              
		                              <script>
		                              	var korprice = '<fmt:formatNumber value="${res_charge}"/>';
		                              </script>
		                              
		                              <div class="m-total-price">
		                                 	총 금액 : <span id="submitTotalPrice">KRW <fmt:formatNumber value="${res_charge}"/></span>
		                              </div>
		                           </div>
									<input type="hidden" id="hidOpenUnionCurrencys"
										value="HKD,SGD,KRW,USD,GBP,AUD"> <input type="hidden"
										id="hidCNYCardIcons"
										value="visa,master,union,jcb,ae,cmoney,paypal"> <input
										type="hidden" id="hidOpenJcbCurrencys"
										value="CNY,JPY,USD,SGD,EUR,TWD,KRW,AUD,CAD,GBP,RUB,THB,HKD">
									<input type="hidden" id="hidIsOpenJcb" value="value">

									<div class="m-book-action">
										<div class="book-terms txt-center">
											「동의 후 계속」버튼을 클릭하면 <a target="_blank">규정, 제한 및 이용약관</a>에 대해 모두
											동의한 것으로&nbsp;간주됩니다
										</div>
										<div class="book-action">
											<a class="back-link" href="main.do" onclick="PopInfo.backFareFirst(0);">&lt; 취소하기</a>
											<input type="button" value="동의 후 계속" class="c-btn btn-key btn-xl" id="passengerSubmit">
										</div>
									</div>
								</div>
							</div>

						</div>

						<div id="confirmDiv" style="display: none;"></div>
						<div id="passengerOverlay" class="overlay-bg"></div>
						<div id="passengerMessage"
							class="PACK_BOX pack-box pack-pop pack-pop-ico">
							<div class="pop-con">
								<div class="pop-cnt">
									<i class="s-icon icon-warning-l"></i>
									<h2 id="tipMessage" class="pop-tit"></h2>
								</div>
								<div class="pop-action">
									<a id="returnHerd" href="javascript:;" class="c-btn btn-l"></a>
								</div>
							</div>
						</div>
						
						<div id="addButtonHover"
							class="pop_arrow_gray_TravelInsurance pop_tips_TravelInsurance"
							style="float: left; display: none;">
							<div class="pop_cont_TravelInsurance" style="display: none;">
								Limited to maximum of one policy per passenger.</div>
						</div>


					<div class="p-pop p-pop-ico" style="display: none;">
						<div class="pop-table">
							<div class="pop-cell">
								<div class="pop-con">
									<div class="pop-cnt">
										<i class="s-icon icon-warning-l"></i>
										<h2 tag="tipText" class="pop-tit"></h2>
									</div>
									<div class="pop-action">
										<a href="javascript:;" tag="leftBtn"
											class="c-btn btn-l btn-flat btn-outline">확인</a>
									</div>
									<span class="pop-close"><span
										class="c-icon icon-close-btn"></span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</section>

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
				<input type="hidden" value="${res_charge}" name="res_charge" id="res_charge">
				
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
				<input type="hidden" value="2" name="flighttype" id="flighttype">
				<input type="hidden" value="${ticketinfo.depart_region}" name="depart_region" id=" depart_region">
				<input type="hidden" value="${ticketinfo.arrive_region}" name="arrive_region" id="arrive_region">
				<input type="hidden" value="${ticketinfo.startDate}" name="startDate" id="startDate">
				<input type="hidden" value="${ticketinfo.endDate}" name="endDate" id="endDate">
				<input type="hidden" value="${ticketinfo.adult}" name="adult" id="adult">
				<input type="hidden" value="${ticketinfo.children}" name="children" id="children">
				<input type="hidden" value="${ticketinfo.laporseat}" name="laporseat" id="laporseat">
				<input type="hidden" value="${ticketinfo.seat_grade}" name="seat_grade" id="seat_grade">
				<input type="hidden" value="${res_charge}" name="res_charge" id="res_charge">
				
				<input type="hidden" value="${firstinfo.stopover_code}" name="stopover_code" id="stopover_code">
				<input type="hidden" value="${firstinfo.route_depart_region}" name="route_depart_region" id="route_depart_region">
				<input type="hidden" value="${firstinfo.route_arrive_region}" name="route_arrive_region" id="route_arrive_region">
				<input type="hidden" value="${firstinfo.route_depart_day}" name="route_depart_day" id="route_depart_day">
				<input type="hidden" value="${firstinfo.depart_time}" name="depart_time" id="depart_time">
				<input type="hidden" value="${firstinfo.arrive_time}" name="arrive_time" id="arrive_time">
				<input type="hidden" value="${firstinfo.airline_name}" name="airline_name" id="airline_name">
				<input type="hidden" value="${firstinfo.airplane_model}" name="airplane_model" id="airplane_model">
				<input type="hidden" value="${firstinfo.flight_name}" name="flight_name" id="flight_name">
				<input type="hidden" value="${firstinfo.route_estimate_time}" name="route_estimate_time" id="route_estimate_time">
				<input type="hidden" value="${firstinfo.airline_site}" name="airline_site" id="airline_site">
				<input type="hidden" value="${firstinfo.route_distance}" name="route_distance" id="route_distance">
				<input type="hidden" value="${firstinfo.route_charge}" name="route_charge" id="route_charge">
				<input type="hidden" value="${firstinfo.route_type}" name="route_type" id="route_type">
				<input type="hidden" value="${firstinfo.plane_code}" name="plane_code" id="plane_code">
			</c:otherwise>
		</c:choose>
		
	</form>


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
