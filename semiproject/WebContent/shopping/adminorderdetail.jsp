<%@page import="shoppingdemo.dao.OrderDAO"%>
<%@page import="java.text.NumberFormat"%>
<%@page import="java.util.ArrayList"%>
<%@page import="shoppingdemo.dto.CartDTO"%>
<%@page import="java.util.List"%>
<%@page import="shoppingdemo.dao.CartDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<style type="text/css">
<
style>table {
	width: 100%;
	border-top: 1px solid #444444;
	border-collapse: collapse;
}

th, td {
	border-bottom: 1px solid #444444;
	padding: 10px;
}

td {
	background-color: #FBEFF2;
}

th {
	background-color: #EFF5FB;
}

.center {
	text-align: center;
}
</style>

<title>Woman's Shop</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});
	});
</script>

<!-- Bootstrap core CSS -->
<link href="../shopping/vendor/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">

<!-- Custom fonts for this template -->
<link
	href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic"
	rel="stylesheet" type="text/css">

<!-- Custom styles for this template -->
<link href="../shopping/css/business-casual.css" rel="stylesheet">


<!-- 부가적인 테마 -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

</head>

<body>
	<c:if test="${not empty sessionScope.adminOk}">
		<div align="right">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item px-lg-4" id="b"><a
					class="list-link text-uppercase text-expanded">${sessionScope.adminOk}님
						환영합니다!</a> | <a class="first-link text-uppercase text-expanded"
					href="notice.do">notice</a> <a
					class="first-link text-uppercase text-expanded" href="board.do">board</a>
					| <a class="list-link text-uppercase text-expanded" id="logout"
					href="logout.do">logout</a> <a
					class="list-link text-uppercase text-expanded" href="adminpage.do">admin
						page</a> <a class="list-link text-uppercase text-expanded"
					href="search.do">search</a></li>
			</ul>
		</div>
	</c:if>

	<!-- 메인페이지 로고 -->
	<div class="logo logo-expand-lg logo-light py-lg-4" align="CENTER"
		id="logoImg">
		<a href="main.do"> <img src="../shopping/img/logo.JPG" />
		</a>
	</div>

	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
		<div class="container">
			<a
				class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
				href="#"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarResponsive" aria-controls="navbarResponsive"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<form class="collapse navbar-collapse" id="navbarResponsive">
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav mx-auto" id="category">
						<li class="nav-item px-lg-4"><a
							class="nav-link text-uppercase text-expanded" href="#">outer</a>
						</li>
						<li class="nav-item px-lg-4"><a
							class="nav-link text-uppercase text-expanded" href="#">top</a></li>
						<li class="nav-item px-lg-4"><a
							class="nav-link text-uppercase text-expanded" href="#">pants</a></li>
						<li class="nav-item px-lg-4"><a
							class="nav-link text-uppercase text-expanded" href="#">dress</a></li>
						<li class="nav-item px-lg-4"><a
							class="nav-link text-uppercase text-expanded" href="#">accessary</a></li>
					</ul>
				</div>
				<input type="hidden" class="categoryId" name="categoryId" />
			</form>
		</div>
	</nav>


	<div class="container">
		<h1 class="my-4 pageHead" style="text-align: left">Order Shipping
			Information</h1>
		<div class="row">

			<form action="" method="post">
				<table border="1" width="1200" class="main_table">
					<tr>
						<td align="center">주문자 이름</td>
						<td><input type="text" class="col-sm-2" name="order_person"
							readonly="readonly" value="${member_name}"></input></td>
					</tr>

					<tr>
						<td align="center">주문 일자</td>
						<td><input type="text" class="col-sm-5" name="order_date"
							readonly="readonly" value="${order_date}"></input></td>
					</tr>

					<tr>
						<td align="center">결제 방식</td>
						<td><input type="text" class="col-sm-4" name="order_date"
							readonly="readonly" value="${paymethod}"></input></td>
					</tr>

				</table>
			</form>
		</div>
	</div>

	<div class="container">
		<h1 class="my-4 pageHead" style="text-align: left">Buyer
			Information</h1>
		<div class="row">

			<form action="" method="post">
				<table border="1" width="1200" class="main_table">
					<tr>
						<td align="center">수취인</td>
						<td><input type="text" class="col-sm-2" name="receive_person"
							readonly="readonly" value="${dto.receive_person}"></input></td>
					</tr>
					<tr>
						<td align="center">이메일</td>
						<td><input type="text" class="col-sm-3" name="receive_email"
							readonly="readonly" value="${dto.receive_email}"></input></td>
					</tr>
					<tr>
						<td align="center">전화번호</td>
						<td><input type="text" class="col-sm-2" name="receive_phone"
							maxlength="10" readonly="readonly" value="${dto.receive_phone}"></td>
					</tr>
					<tr>
						<td align="center" style="margin: auto; text-align: center;">주소</td>
						<td><input type="text" name="receive_address1" size="60"
							readonly="readonly" value="${dto.receive_address}"></input></td>
					</tr>
				</table>
			</form>
		</div>
	</div>

	<div class="container">
		<h1 class="my-4 pageHead" style="text-align: left">Order Product
			Information</h1>
		<div class="row">
			<div class="orderListArea">
				<table border="1" width="1200" class="main_table"
					style="margin: auto; text-align: center;">
					<thead>
						<tr>
							<th scope="col" class="index"><h6>
									<strong>번호</strong>
								</h6></th>
							<th scope="col" class="product_information"><h6>
									<strong>주문상품정보</strong>
								</h6></th>
							<th scope="col" class="product"><h6>
									<strong>수량</strong>
								</h6></th>
							<th scope="col" class="price"><h6>
									<strong>가격</strong>
								</h6></th>

							<th scope="col" class="size"><h6>
									<strong>사이즈</strong>
								</h6></th>
						</tr>
					</thead>

					<tbody class="main">
						<c:forEach items="${requestScope.aList}" var="aList"
							varStatus="status" begin="0" step="1">
							<tr class="main_record">
								<td class="index">1</td>

								<td class="product"><img
									src="../shopping/img/${aList.category_id}/${aList.item_name}.GIF"
									style="width: 309px; height: 370px">
									<p style="text-align: center;">${dto.item_name}</p></td>

								<td class="quantity">${aList.item_total}개</td>

								<td class="price"><fmt:formatNumber
										value="${aList.item_price}" type="number" />원</td>

								<td class="size">${aList.item_size}</td>
							</tr>
						</c:forEach>
						<!-- /.container -->
				</table>
			</div>
		</div>
	</div>

	<br />
	<br />

	<footer class="bg-faded text-center py-5">
		<div class="container">
			<p class="m-0">Copyright &copy; Your Website 2017</p>
		</div>
	</footer>

	<!-- Bootstrap core JavaScript -->
	<script src="../shopping/vendor/jquery/jquery.min.js"></script>
	<script src="../shopping/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- 우편 -->
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>

</body>

</html>
