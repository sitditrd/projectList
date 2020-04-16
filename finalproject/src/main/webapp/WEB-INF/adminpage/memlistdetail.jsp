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
										<strong>고객 번호<!--예매번호--></strong> <strong class="red"
											id="PNWRA00002_in_pnrNo">${dto.member_code}</strong>
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
									
								<div class="tabWrapBox wrap social_hide">
									<h3 class="thrdTit" style="margin-bottom: 30px">
										Member Information
										<!--예매자 정보-->
									</h3>
									
									<!-- 예매자 정보 테이블 web -->
									<table class="form showTable bbs_list m_hide">
										<caption>
											Member Information
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
												<td><p class="mb_10">${dto.member_name}</p></td>
												<th><span class="tit">비밀번호</span></th>
												<td><p class="mb_10">${dto.member_pwd}</p></td>
											</tr>
											<tr>
												<th><span class="tit">생일</span></th>
												<td><p class="mb_10">${dto.member_birth}</p></td>
												<th><span class="tit">연락처</span></th>
												<td><p class="mb_10">${dto.member_tel}</p></td>
											</tr>
											<tr>
												<th><span class="tit">이메일</span></th>
												<td><p class="mb_10">${dto.member_email}</p></td>
												<th><span class="tit">주소</span></th>
												<td><p class="mb_10">${dto.member_addr}</p></td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="btn_ul m2 c_wrap">
									<a id="PNWRA00002_list_bn"
										class="btn btn00 btn-color02 w_250 back"
										href="adminmemList.do?currentPage=${param.currentPage}">목록<!--목록--></a>
								</div>
							</section>
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