<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Woman's Shop</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

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

<style type="text/css">
.wrap {
	padding-top: 50px;
	padding-left: 100px;
	padding-right: 100px;
	padding-bottom: 100px;
	margin-top: 50px;
	margin-left: 450px;
	margin-right: 450px;
	margin-bottom: 100px;
	border: 3px solid gray;
}

.select_menu {
	padding-left: 10px;
	padding-right: 10px;
	padding-bottom: 10px;
	margin-top: 10px;
	margin-left: 30px;
	margin-right: 30px;
	border: 3px solid gray;
}

.num {
	padding: 100px;
	padding-top: 20px;
	padding-left: 100px;
	padding-right: 100px;
	margin-top: 20px;
	margin-left: 500px;
	margin-right: 500px;
	margin-bottom: 20px;
}

.search_field {
	padding-left: 10px;
	padding-right: 10px;
	padding-bottom: 10px;
	margin-top: 10px;
	margin-left: 30px;
	margin-right: 30px;
	border: 3px solid #F2D5E9;
}
</style>

<script type="text/javascript">
	$(document).ready(function() {

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#searchBtn').click(function() {
			searchFunction();
		});

		$('#searchForm input').keydown(function(e) {
			if (e.keyCode == 13) {
				searchFunction();
			}
		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});

		$('[name=searchWord]').val('${searchWord}');
		switch ('${optionIndex}') {
		case '0':
			$('[value=all]').prop('selected', 'selected');
			break;
		case '1':
			$('[value=outer]').prop('selected', 'selected');
			break;
		case '2':
			$('[value=top]').prop('selected', 'selected');
			break;
		case '3':
			$('[value=pants]').prop('selected', 'selected');
			break;
		case '4':
			$('[value=dress]').prop('selected', 'selected');
			break;
		case '5':
			$('[value=accessary]').prop('selected', 'selected');
			break;
		}
	});

	function searchFunction() {
		$(".optionIndex").attr('value',
				$(".searchKey option").index($(".searchKey option:selected")));
		$('#searchForm').attr('action', 'searchList.do');
		$('#searchForm').submit();
	}
</script>
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

	<br />

	<h1 class="my-4 pageHead">Search</h1>
	<form class="searchForm" id="searchForm">
		<div class="search_field">
			<p class="text-center">
				<select class="searchKey form-control" name="searchKey">
					<option value="all">전체검색</option>
					<option value="outer">Outer</option>
					<option value="top">Top</option>
					<option value="pants">Pants</option>
					<option value="dress">Dress</option>
					<option value="accessary">Accessary</option>
				</select> <input type="text" name="searchWord" class="form-control col-sm-5" />
				<input type="button" value="검색" class="form-control page-link"
					id="searchBtn" />
			</p>
			<input type="hidden" class="optionIndex" name="optionIndex" />
		</div>
	</form>


	<!-- 상품 이미지 리스트 나오게 하기 -->
	<br />
	<c:if test="${searchResult == 1}">
		<div class="container" id="searchDiv">
			<div class="bg-faded p-4 my-4">
				<h2 class="text-center text-lg text-uppercase my-0">
					<strong>"${searchWord}"</strong>
					<p>검색결과</p>
				</h2>
				<c:if test="${not empty requestScope.aList}">
					<hr class="divider">
					<div class="row">
						<c:forEach items="${requestScope.aList}" var="dto">
							<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
								<div class="card h-100">
									<c:url var="link" value="listdetail.do">
										<c:param name="item_id" value="${dto.item_id}" />
										<c:param name="category_name" value="${dto.category_name}" />
										<c:param name="item_name" value="${dto.item_name}" />
										<c:param name="item_price" value="${dto.item_price}" />
									</c:url>
									<a href="${link}"> <img class="card-img-top"
										src="../shopping/img/${dto.category_name}/${dto.item_name}.GIF"
										alt=""></a>
									<div class="card-body">
										<h6 class="card-title">
											<a href="${link}">${dto.item_name}</a>
										</h6>
										<p class="card-text">
											<fmt:formatNumber value="${dto.item_price}" type="number" />
											원
										</p>
									</div>
								</div>
							</div>
						</c:forEach>
					</div>
				</c:if>
			</div>
			<c:if test="${not empty requestScope.aList}">
				<!-- 상품리스트 끝 -->
				<ul class="pagination justify-content-center">
					<c:if test="${pdto.startPage > pdto.blockPage}">
						<li class="page-item"><a class="page-link"
							aria-label="Previous"
							href="searchList.do?pageNum=${pdto.startPage - pdto.blockPage}&optionIndex=${optionIndex}&searchWord=${pdto.searchWord}">
								<span aria-hidden="true">&laquo;</span> <span class="sr-only">Previous</span>
						</a></li>
					</c:if>

					<!-- 페이지 -->
					<c:forEach begin="${pdto.startPage}" end="${pdto.endPage}" var="i">
						<li class="page-item"><a class="page-link"
							href="searchList.do?pageNum=${i}&optionIndex=${optionIndex}&searchWord=${pdto.searchWord}">${i}</a></li>
					</c:forEach>

					<!-- 다음 -->
					<c:if test="${pdto.totalPage > pdto.endPage}">
						<li class="page-item"><a class="page-link" aria-label="Next"
							href="searchList.do?pageNum=${pdto.startPage + pdto.blockPage}&optionIndex=${optionIndex}&searchWord=${pdto.searchWord}">
								<span aria-hidden="true">&raquo;</span> <span class="sr-only">Next</span>
						</a></li>
					</c:if>
				</ul>
			</c:if>
		</div>
	</c:if>

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
</body>
</html>