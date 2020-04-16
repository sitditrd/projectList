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
body {
	margin-top: 20px;
}

#contain {
	margin-left: 680px;
}

#list {
	text-align: center;
}

ol li {
	float: right;
	margin-right: 80px;
	list-style-type: none;
}

.center {
	text-align: center;
}

.btn {
	width: wrap;
	height: wrap;
	margin-left: 25px;
}
}
</style>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	$(document).ready(function() {

		$('#quantity').on("click", function() {
			if ($('#quantity').val() == 5) {
				alert("최대수량은 5개까지 입니다.");
			}
		});

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});

		var chk = '${sessionScope.logOk}';

		//Form 하나에는  submit하나만 사용할 수가 있다. Action을 설정할 수 있는 값이 한개이기 때문이다.
		//Form 하나에 submit을 여러개 사용하고 싶다면 아래와 같이 하면 된다.(attr값을 바꾸어주면 된다.)
		$('#basketbtn').on("click", function() {
			if (!(chk.length > 0)) {
				alert("로그인 후 이용해 주십시오.")
			} else {
				$('form').attr('action', 'basket.do');
				$('form').submit();
			}
		});

		$('#orderbtn').on("click", function() {
			if (!(chk.length > 0)) {
				alert("로그인 후 이용해 주십시오.")
			} else {
				$('form').attr('action', 'onlybuy.do');
				$('form').submit();
			}
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

	<div class="container center">

		<div class="bg-faded p-4 my-4">
			<!-- Page Content -->
			<div class="container">

				<!-- Portfolio Item Heading -->
				<h1 class="my-4" id="list">List_Detail</h1>

				<hr>
				<!-- Portfolio Item Row -->
				<div class="row">

					<div class="card h-100">
						<a href="#"> <img class="card-img-top"
							src="../shopping/img/${category}/${viewList.item_name}.GIF"
							alt="" style="width: 330px; height: 485px">
						</a>
					</div>

					<div class="col-md-8">

						<form method="post">

							<h3 class="my-3">Product name</h3>
							<!-- 파라미터를 넘겨주는 item_id를 input type을 hidden으로 준다.  -->
							<input type="hidden" name="item_id" value="${item_id}">

							<!-- 파라미터를 넘겨주는 category_id를 input type을 hidden으로 준다.  -->
							<input type="hidden" name="category_id" value="${category}">
							<input type="text" name="name" id="fname"
								value="${viewList.item_name}"
								style="text-align: center; border: 0px" readonly="readonly">
							<hr>
							<h3 class="my-3">Product color-size</h3>

							<select name="size">
								<option value="size-Large">size-Large</option>
								<option value="size-Middle">size-Middle</option>
								<option value="size-Small">size-Small</option>
							</select>
							<hr>

							<h3 class="my-3">Product count</h3>

							<td class="qty"><span class="quantity"> <input
									id="quantity" name="amount" style="" value="1" type="number"
									min="1" max="5" />
							</span></td>

							<hr>
							<h3 class="my-3">Product price</h3>
							<p id="price">
								<fmt:formatNumber value="${viewList.item_price}" type="number" />
								원
								<!-- 파라미터를 넘겨주는 price를 input type을 hidden으로 준다.  -->
								<input type="hidden" name="price" value="${viewList.item_price}">
							</p>

							<hr>
							<c:if test="${empty sessionScope.adminOk}">
								<ol class="btn">
									<li><input type="button"
										class="btn btn-info btn-block login" id="basketbtn"
										value="장바구니"></li>
									<li><input type="button"
										class="btn btn-primary btn-block login" id="orderbtn"
										value="구매하기"></li>
								</ol>
							</c:if>

						</form>
					</div>
				</div>
				<!-- /.row -->
			</div>

		</div>

	</div>
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