<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<!-- saved from url=(0044)https://www.eastarjet.com/newstar/PGWRA00001 -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>Airline Ticketing System</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	$('#cancel_btn').click(function() {
		$('#frm').attr('action', 'adminrescancelList.do').submit();
	});
	
	$('#list_btn').click(function() {
		$('#frm').attr('action', 'adminresList.do').submit();
	});
});
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

<link rel="stylesheet" type="text/css"
	href="css/reslist/newstar.style.css">
<link rel="stylesheet" type="text/css" href="css/reslist/common_KR.css">


<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}
</style>


<script type="text/javascript">
	// 마우스 우클릭 차단
	document.oncontextmenu = function(e) {
		if (e) {
			e.preventDefault();
		} else {
			event.keyCode = 0;
			event.returnValue = false;
		}
	};
	

	function reserve(){
		$('.reserve_list').css('display', 'table');
		$('#list_btn').attr('class','btn btn01 btn-color-w1 on');
		$('#cancel_btn').attr('class','btn btn01 btn-color-w1');
	}
	
	function cancel(){
		$('.reserve_list').css('display', 'none');
		$('#cancel_btn').attr('class','btn btn01 btn-color-w1 on');
		$('#list_btn').attr('class','btn btn01 btn-color-w1');
	}
	

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
						class="list-link text-uppercase text-expanded" href="#" id="link">search</a></li>
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
			<div class="content">
				<section id="PNWRA00001" style="display: block;">
					<div style="font-size: 45px; font-weight: bold; font-family: sans-serif;">관리자 회원목록 조회</div>
					<br/>
					<br/>
					
					<div class="reserve_list">
					<table class="bbs_list reslist" id="reslist">
						<!-- web 테이블 -->
						<caption>
							회원목록내역
							<!-- 예매내역 -->
						</caption>
						<colgroup>
							<col style="width: 15%">
							<col style="width: 60%">
							<col style="width: 25%">
						</colgroup>
						<thead>
							<tr>
								<th scope="col">번호<!--예매번호--></th>
								<th scope="col">아이디<!--구분--></th>
								<th scope="col">상세보기<!-- 상세보기 --></th>
							</tr>
						</thead>

						<tbody id="PNWRA00001_bookingList">
							<c:if test="${size == 0}">
								<tr>
									<td colspan="3">조회된 데이터가 없습니다.</td>
								</tr>
							</c:if> 

							<c:forEach items="${aList}" var="dto">
								<tr>
									<td><a href="javascript:PNWRA00001_doMyBookingDetail(&#39;YEML8E&#39;);" class="red">${dto.member_code}</a></td>
									
									<td>${dto.member_id}</td>
									
									<td>
										<c:url var="content" value="memlistdetail.do">
											<c:param name="currentPage" value="${pv.currentPage}" />
											<c:param name="member_code" value="${dto.member_code}" />
										</c:url> 
										
										<a href="${content}" class="btn btn03 btn-color01">상세보기</a>
									</td>
								</tr>
							</c:forEach>
						</tbody>
						
						<tfoot>
							<tr>
								<td colspan="3" style="text-align: center">총 회원수 &nbsp;: &nbsp;<fmt:formatNumber
										value="${total_member}" type="number" />명
								</td>
							</tr>
						</tfoot>
						
					</table>

					<!-- 페이지 출력 시작 -->
					<ul class="pagination justify-content-center">
						<!-- 페이지 이전  -->
						<c:if test="${pv.startPage > 1}">
							<li class="page-item"><a class="page-link"
								aria-label="Previous"
								href="adminmemList.do?currentPage=${pv.startPage - pv.blockPage}">
									<span aria-hidden="true">&laquo;</span> <span class="sr-only">Previous</span>
							</a></li>
						</c:if>

						<!-- 페이지를 출력하기 위해 -->
						<!-- request영역에 지정되어있는 값은 아래처럼 출력가능. -->
						<c:forEach begin="${pv.startPage}" end="${pv.endPage}" var="i">

							<li class="page-item"><span> <a class="page-link"
									href="adminmemList.do?currentPage=${i}">${i}</a>
							</span></li>

						</c:forEach>

						<!-- 페이지 다음  -->
						<!-- end page가 total page보다 작을때만 다음버튼이 활성화 되야 한다. -->
						<c:if test="${pv.endPage < pv.totalPage}">
							<li class="page-item"><a class="page-link" aria-label="Next"
								href="adminmemList.do?currentPage=${pv.startPage + pv.blockPage}">
									<span aria-hidden="true">&raquo;</span> <span class="sr-only">Next</span>
							</a></li>
						</c:if>
					</ul>
					</div>
					<!-- ------------------------------- -->


					<div class="useInfoBpx subFontcol">
						<!-- 이용안내 -->
						<p>
							<strong>이용안내<!--이용안내--></strong>
						</p>
						<ul class="bu_l">
							<li>홈페이지에서는 구매한 내역에 한해 국내선 출발1시간, 국제선 출발 3시간 전까지만 홈페이지에서
								변경/취소가 가능하며 이후는 예약센터에서만 가능합니다. <br> <span class="red">(부가서비스의
									경우 서비스 별 이용규정이 상이하므로 해당 부가서비스 안내에서 확인 부탁드립니다.) </span> <!--출발 24시간 전까지만 홈페이지에서 변경/취소가 가능하며 이후는 예약센터에서만 가능합니다.-->
							</li>
							<li>공동운항편은 공항에서 해당 항공사 카운터에서 출국 수속을 해야 합니다.<!--공동운항편은 공항에서 해당 항공사 카운터에서 출국 수속을 해야 합니다.-->
							</li>
							<li>국제선 왕복일 경우 출발편을 탑승하지 않으면 자동으로 나머지 구간도 취소됩니다.<!--국제선 왕복일 경우 출발편을 탑승하지 않으면 자동으로 나머지 구간도 취소됩니다.--></li>
							<li>출발일을 기준으로 2년 이내 예매내역을 확인할 수 있습니다.<!--출발일을 기준으로 6개월 이내 예매내역을 확인할 수 있습니다.--></li>
						</ul>
					</div>

					<form id="frm">
					</form>
					
				</section>
				<strong> </strong>
			</div>
			<strong> </strong>
		</div>
	</section>
</body>
</html>