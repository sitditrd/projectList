<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
a.menu:hover {
	color: black;
	text-decoration: none;
}

a.menu:link {
	color: black;
	text-decoration: none;
}

a.menu:visited {
	color: black;
	text-decoration: none;
}

a.menu:active {
	color: black;
	text-decoration: none;
}
</style>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	$(document).ready(function() {

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#cart').click(function() {
			$('#cart').attr('action', 'basket.do');
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

	<div class="container">
			<!-- Page Heading -->
			<h1 class="my-4 pageHead">My Page</h1>
			<div class="row">
					<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
						<div class="card h-100">				
							<a href="modify.do">
							<img class="card-img-top" src="../shopping/img/mypage/회원정보수정.jpg" alt=""></a>
							<div class="card-body">
								<h6 class="card-title">
									<a href="modify.do"><h6>회원정보수정</h6></a>
								</h6>
							</div>
						</div>
					</div>
					
					<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
						<div class="card h-100">				
							<a href="orderview.do?">
							<img class="card-img" src="../shopping/img/mypage/주문내역조회.jpg" alt=""></a>
							<div class="card-body">
								<h6 class="card-title">
									<a href="orderview.do?"><h6>주문내역조회</h6></a>
								</h6>
							</div>
						</div>
					</div>
					
					<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
						<div class="card h-100">				
							<a href="Mywrite.do">
							<img class="card-img-top" src="../shopping/img/mypage/내가쓴글보기.jpg" alt=""></a>
							<div class="card-body">
								<h6 class="card-title">
									<a href="Mywrite.do"><h6>내가쓴글보기</h6></a>
								</h6>
							</div>
						</div>
					</div>
					
					<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
						<div class="card h-100">				
							<a href="basketview.do">
							<img class="card-img-top" src="../shopping/img/mypage/관심상품.jpg" alt=""></a>
							<div class="card-body">
								<h6 class="card-title">
									<a href="basketview.do"><h6>관심상품</h6></a>
								</h6>
							</div>
						</div>
					</div>
			</div>
	</div>
	
	<br/>
	<br/>
		
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
