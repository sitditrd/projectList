<%@page import="java.text.NumberFormat"%>
<%@page import="shoppingdemo.dto.CartDTO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="shoppingdemo.dao.CartDAO"%>
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

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- 
         객체 받아오는 방법 정리 :
	var Node = document.getElementById("");  : Id로 Dom Elements를 받는경우
	var Node = document.getElementsByTagName(""); : Tag로 Dom Elements를 받는경우
	var Node = document.getElementsByName(""); : Name으로 Dom Elements를 받는경우
 -->

<script type="text/javascript">
	$(document).ready(function() {

		/* $('input').click(function() {
			var index = $('input').index(this);
		
			if (index % 2 != 0) { //단품취소
				$('form').attr('action', 'delete.do?index=' + index);
				$('form').submit();
			} else { //단품결제
				$('form').attr('action', 'buy.do?index=' + index);
				$('form').submit();
			}
		}); */

		/* $('#del').click(function() {
			$('form').attr('action', 'delete.do');
			$('form').submit();
		}); */

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});

	});

	//전체삭제기능
	function totaldelmethod() {
		$('form').attr('action', 'totaldelete.do');
		$('form').submit();
	}

	//전체주문기준
	function totalbuymethod() {

		var size = '${requestScope.size}';

		if (size != 0) {
			$('form').attr('action', 'totalbuy.do');
			$('form').submit();
		} else {
			alert("결재시 장바구니에는 1개 이상의 품목이 담겨야 합니다.");
		}
	}
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
					class="list-link text-uppercase text-expanded" href="#">admin
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

	<%
		CartDAO dao = CartDAO.getInstance();
		List<CartDTO> arr = new ArrayList<CartDTO>();

		String member_id = (String) session.getAttribute("logOk");
		arr = dao.ViewMethod(member_id);

		int total_price = 0;

		for (int i = 0; i < arr.size(); i++) {
			total_price += Integer.parseInt(arr.get(i).getItem_price());
		}

		//NumberFormat형식을 이용한다.
		NumberFormat fmt = NumberFormat.getCurrencyInstance();
		String res_price = fmt.format(total_price);
	%>

	<!-- Page Content -->
	<div class="container">
		<!-- Page Heading -->
		<h1 class="my-4 pageHead">My Cart</h1>
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
								<th scope="col" class="product"><h6>
										<strong>상품명</strong>
									</h6></th>
								<th scope="col" class="price"><h6>
										<strong>가격</strong>
									</h6></th>
								<th scope="col" class="quantity"><h6>
										<strong>개수</strong>
									</h6></th>
								<th scope="col" class="size"><h6>
										<strong>사이즈</strong>
									</h6></th>
								<th scope="col" class="delete"><h6>
										<strong>삭제</strong>
									</h6></th>
								<th scope="col" class="buy"><h6>
										<strong>구매하기</strong>
									</h6></th>
							</tr>
						</thead>

						<tbody class="main">
							<c:forEach items="${requestScope.aList}" var="dto"
								varStatus="status" begin="0" step="1">
								<tr class="main_record">
									<td class="index">${status.index+1}</td>
									<td class="product"><img
										src="../shopping/img/${dto.category_id}/${dto.item_name}.GIF"
										style="width: 250px; height: 200px">
										<p style="text-align: center;">${dto.item_name}</p></td>

									<td class="price"><fmt:formatNumber
											value="${dto.item_price}" type="number" />원</td>

									<td class="quantity">${dto.item_amount}개</td>

									<td class="size">${dto.item_size}</td>

									<c:url var="link" value="delete.do">
										<c:param name="index" value="${dto.num}" />
									</c:url>

									<td><a href="${link}" style="color: red"><h6>
												<strong>삭제</strong>
											</h6></a></td>

									<c:url var="link2" value="buy.do">
										<c:param name="index" value="${dto.num}" />
									</c:url>

									<td><a href="${link2}" style="color: green"><h6>
												<strong>구매</strong>
											</h6></a></td>

									<!-- <td class="delete"><input type="button"
										class="btn btn-danger btn-block login" id="del" value="삭제">
									</td> -->

									<!--<td class="buy"><input type="button"
										class="btn btn-success btn-block login" id="pay" value="구매">
									</td> -->
								</tr>
							</c:forEach>
						<tfoot>
							<tr>
								<td colspan="5">Total_Price : <%=res_price%>
								</td>
								<td colspan="1">
									<button type="submit" class="btn btn-danger btn-block login"
										id="deletebtn" onclick="totaldelmethod()">전체삭제</button>
								</td>

								<td colspan="1">
									<button type="submit" class="btn btn-success btn-block login"
										id="buybtn" onclick="totalbuymethod()">전체구매</button>
								</td>
							</tr>

						</tfoot>

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
						href="basketview.do?pageNum=${pdto.startPage - pdto.blockPage}">
							<span aria-hidden="true">&laquo;</span> <span class="sr-only">Previous</span>
					</a></li>
				</c:if>

				<!-- 페이지 -->
				<c:forEach begin="${pdto.startPage}" end="${pdto.endPage}" var="i">
					<li class="page-item"><a class="page-link"
						href="basketview.do?pageNum=${i}">${i}</a></li>
				</c:forEach>

				<!-- 다음 -->
				<c:if test="${pdto.totalPage > pdto.endPage}">
					<li class="page-item"><a class="page-link" aria-label="Next"
						href="basketview.do?pageNum=${pdto.startPage + pdto.blockPage}">
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