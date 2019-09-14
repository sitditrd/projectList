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
	text-align: center;
}

td {
	background-color: #FBEFF2;
}

th {
	background-color: #EFF5FB;
}
</style>

<title>Woman's Shop</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {

		/* $('input').click(function() {
		var index = $('input').index(this);

		url = "orderdetail.do?index="+ index;
		window.open(url, "order_detail","toolbar=no, width = 1400, height = 800, top = 100, left = 140");
		});
		 */

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

</head>

<body>
	<!-- 메인페이지 상단 메뉴 -->
	<c:if test="${empty sessionScope.adminOk}">
		<c:if test="${empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b"><a
						class="first-link text-uppercase text-expanded" href="notice.do">notice</a>
						<a class="first-link text-uppercase text-expanded" href="board.do">board</a>
						| <a class="list-link text-uppercase text-expanded"
						href="login.do">login</a> <a
						class="list-link text-uppercase text-expanded" href="register.do">join
							us</a> <a class="list-link text-uppercase text-expanded"
						href="search.do">search</a></li>
				</ul>
			</div>
		</c:if>

		<c:if test="${not empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b"><a
						class="list-link text-uppercase text-expanded">${sessionScope.logOk}님
							환영합니다!</a> | <a class="first-link text-uppercase text-expanded"
						href="notice.do">notice</a> <a
						class="first-link text-uppercase text-expanded" href="board.do">board</a>
						| <a class="list-link text-uppercase text-expanded" id="logout"
						href="logout.do">logout</a> <a
						class="list-link text-uppercase text-expanded"
						href="basketview.do">cart</a> <a
						class="list-link text-uppercase text-expanded" href="mypage.do">my
							page</a> <a class="list-link text-uppercase text-expanded"
						href="search.do">search</a></li>
				</ul>
			</div>
		</c:if>
	</c:if>

	<!-- 메인페이지 로고 -->
	<div class="logo logo-expand-lg logo-light py-lg-4" align="CENTER"
		id="logoImg">
		<a href="main.do"> <img src="../shopping/img/logo.JPG" />
		</a>
	</div>

	<!-- Navigation -->
	<nav class="navbar navbar-expand-sm navbar-light bg-faded py-lg-4">
		<div class="container">
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

	<!-- Page Content -->
	<div class="container">
		<!-- Page Heading -->
		<h1 class="my-4 pageHead">Order Detail</h1>
		<div class="row">
			<div class="orderListArea">
				<form method="post">
					<table border="1" width="1200" class="main_table"
						style="margin: auto; text-align: center;">
						<thead>
							<tr>
								<th scope="col" class="index"><h6>
										<strong>번호</strong>
									</h6></th>
								<th scope="col" class="order_date"><h6>
										<strong>주문일자</strong>
									</h6></th>
								<th scope="col" class="product_name"><h6>
										<strong>상품명</strong>
									</h6></th>
								<th scope="col" class="total_price"><h6>
										<strong>결제금액</strong>
									</h6></th>
								<th scope="col" class="order_detail"><h6>
										<strong>주문상세</strong>
									</h6></th>
								<th scope="col" class="order_delete"><h6>
										<strong>상태</strong>
									</h6></th>
							</tr>
						</thead>

						<tbody class="main">
							<c:forEach items="${requestScope.aList}" var="dto"
								varStatus="status" begin="0" step="1">
								<tr class="main_record">
									<c:if test="${dto.list_total_price ne 0}">
										<td class="index">${status.index+1}</td>

										<td class="order_date">${dto.list_date}</td>

										<td class="product_name">${dto.item_name}</td>

										<td class="total_price"><fmt:formatNumber
												value="${dto.list_total_price}" type="number" />원</td>

										<c:if test="${dto.state == '결제완료'}">
											<c:url var="link" value="orderdetail.do">
												<c:param name="index" value="${dto.num}" />
											</c:url>
											<td><a href="${link}" style="color: blue"
												onclick="window.open('${link}', 'order_detail', 'toolbar=no, width = 1400, height = 800, top = 100, left = 140');return false"><h6>
														<strong>주문상세</strong>
													</h6></a></td>
										</c:if>

										<c:if test="${dto.state == '취소완료'}">
											<c:url var="link2" value="orderdetail.do">
												<c:param name="index" value="${dto.num}" />
											</c:url>
											<td><a href="${link2}" style="color: red"
												onclick="window.open('${link2}', 'order_detail', 'toolbar=no, width = 1400, height = 800, top = 100, left = 140');return false"><h6>
														<strong>취소상세</strong>
													</h6></a></td>
										</c:if>

										<td class="order_state">
											<p>${dto.state}</p>
										</td>
									</c:if>
								</tr>
							</c:forEach>

							<!-- /.container -->
					</table>
				</form>
			</div>
		</div>

		<br /> <br />

		<!-- Pagination -->
		<!-- 이전 -->
		<c:if test="${not empty requestScope.aList}">
			<ul class="pagination justify-content-center">
				<c:if test="${pdto.startPage > pdto.blockPage}">
					<li class="page-item"><a class="page-link"
						aria-label="Previous"
						href="orderview.do?pageNum=${pdto.startPage - pdto.blockPage}">
							<span aria-hidden="true">&laquo;</span> <span class="sr-only">Previous</span>
					</a></li>
				</c:if>

				<!-- 페이지 -->
				<c:forEach begin="${pdto.startPage}" end="${pdto.endPage}" var="i">
					<li class="page-item"><a class="page-link"
						href="orderview.do?pageNum=${i}">${i}</a></li>
				</c:forEach>

				<!-- 다음 -->
				<c:if test="${pdto.totalPage > pdto.endPage}">
					<li class="page-item"><a class="page-link" aria-label="Next"
						href="orderview.do?pageNum=${pdto.startPage + pdto.blockPage}">
							<span aria-hidden="true">&raquo;</span> <span class="sr-only">Next</span>
					</a></li>
				</c:if>
			</ul>
		</c:if>

	</div>

	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<!-- Bootstrap core JavaScript -->
	<script src="../shopping/vendor/jquery/jquery.min.js"></script>
	<script src="../shopping/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<footer class="bg-faded text-center py-5">
		<div class="container">
			<p class="m-0">Copyright &copy; Your Website 2017</p>
		</div>
	</footer>

	<!-- Zoom when clicked function for Google Map -->
	<script>
		$('.map-container').click(function() {
			$(this).find('iframe').addClass('clicked')
		}).mouseleave(function() {
			$(this).find('iframe').removeClass('clicked')
		});
	</script>

</body>

</html>
