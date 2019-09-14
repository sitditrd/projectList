<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Woman's Shop</title>
<style type="text/css">
<
style>table {
	width: 100%;
	border: 1px solid #444444;
	border-collapse: collapse;
}

th, td {
	border: 1px solid #444444;
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

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	$(document).ready(function() {

		/* $('input').click(function() {
		var index = $('input').index(this);	
		
		url = "adminorderdetail.do?index=" + index;
		window.open(url, "adminorderdetail", "toolbar=no, width = 1400, height = 800, top = 100, left = 140"); 
		});
		 */

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#cart').click(function() {
			$('#cart').attr('action', 'basketview.do');
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


	<!--  관리자페이지 - 주문확인    -->
	<br />
	<h1 class="my-4 pageHead">Admin Check Order</h1>

	<div class="container">

		<table width="1200">
			<thead>
				<tr>
					<th class="text-center" style="width: 4%">번호</th>
					<th class="text-center" style="width: 11%">구매자 아이디</th>
					<th class="text-center" style="width: 20%">상품이름</th>
					<th class="text-center" style="width: 12%">가격</th>
					<th class="text-center" style="width: 23%">구매일</th>
					<th class="text-center" style="width: 10%">상태</th>
					<th class="text-center" style="width: 15%">상세보기</th>
				</tr>
			</thead>

			<tbody>
				<c:forEach items="${requestScope.aList}" var="dto"
					varStatus="status" begin="0" step="1">
					<tr class="main_record">

						<c:if test="${dto.list_total_price ne 0}">
							<td class="text-center">${status.index+1}</td>

							<td class="text-center">${dto.member_id }</td>

							<td class="text-center">${dto.item_name }</td>

							<td class="text-center">${dto.list_total_price}</td>

							<td class="text-center">${dto.list_date }</td>

							<td class="text-center">${dto.state}</td>


							<c:url var="link" value="adminorderdetail.do">
								<c:param name="index" value="${dto.num}" />
							</c:url>

							<td><a href="${link}" style="color: blue"
								onclick="window.open('${link}', 'adminorderdetail.do', 'toolbar=no, width = 1400, height = 800, top = 100, left = 140');return false"><h6>
										<strong>상세보기</strong>
									</h6></a></td>
						</c:if>
					</tr>
				</c:forEach>
			</tbody>

			<tfoot>
				<tr>
					<td colspan="7" style="text-align: center">총 매출액 : <fmt:formatNumber
							value="${total_price}" type="number" />원
					</td>
				</tr>
			</tfoot>
		</table>

		<br /> <br />

		<!-- Pagination -->
		<!-- 이전 -->
		<c:if test="${not empty requestScope.aList}">
			<ul class="pagination justify-content-center">
				<c:if test="${pdto.startPage > pdto.blockPage}">
					<li class="page-item"><a class="page-link"
						aria-label="Previous"
						href="adminorder.do?pageNum=${pdto.startPage - pdto.blockPage}">
							<span aria-hidden="true">&laquo;</span> <span class="sr-only">Previous</span>
					</a></li>
				</c:if>

				<!-- 페이지 -->
				<c:forEach begin="${pdto.startPage}" end="${pdto.endPage}" var="i">
					<li class="page-item"><a class="page-link"
						href="adminorder.do?pageNum=${i}">${i}</a></li>
				</c:forEach>

				<!-- 다음 -->
				<c:if test="${pdto.totalPage > pdto.endPage}">
					<li class="page-item"><a class="page-link" aria-label="Next"
						href="adminorder.do?pageNum=${pdto.startPage + pdto.blockPage}">
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

	<!-- /.container -->
	<footer class="bg-faded text-center py-5">
		<div class="container">
			<p class="m-0">Copyright &copy; Your Website 2017</p>
		</div>
	</footer>

	<!-- Bootstrap core JavaScript -->
	<script src="../shopping/vendor/jquery/jquery.min.js"></script>
	<script src="../shopping/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>
</html>