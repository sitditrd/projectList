<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
.hrLine {
	height: 2px;
	border: 0;
	background-color: #BDBDBD;
}

.content {
	margin-left: 100px;
	margin-right: 100px;
	margin-top: 100px;
	margin-bottom: 100px;
	margin-top: 100px;
}
</style>
<script type="text/javascript">
	$(document).ready(function() {

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#editBtn').click(function() {
			$('#editDeleteForm').attr('action', 'noticeEditForm.do');
			$('#editDeleteForm').submit();
		});

		$('#deleteBtn').click(function() {
			$('#editDeleteForm').attr('action', 'noticeDelete.do');
			$('#editDeleteForm').submit();
		});
		
		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});

	});

	function goNotice() {
		location.href = "notice.do?pageNum=${param.pageNum}";
		return false;
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
	<h1 class="my-4 pageHead">Notice</h1>
	<div class="container">
		<br />
		<hr class="hrLine">

		<h5 class="text-left" style="margin-left: 100px;">${dto.notice_subject}</h5>

		<p class="text-right" style="margin-right: 100px;">날짜 :
			${dto.notice_date}</p>

		<hr class="hrLine">

		<p class="content text-left">${dto.notice_content}</p>

		<hr class="hrLine">

		<c:if test="${not empty dto.notice_upload}">
			<p class="text-left" style="margin-left: 100px;">
				첨부파일 : <a href="download.do?notice_id=${dto.notice_id}">${dto.notice_upload}</a>
			</p>

			<hr class="hrLine">
		</c:if>

		<c:if test="${not empty sessionScope.adminOk}">
			<form id="editDeleteForm" name="editDeleteForm" method="post"
				enctype="application/x-www-form-urlencoded">
				<div class="text-left" style="margin-left: 100px;">
					<input type="button" value="수정" class="btn page-link" id="editBtn"
						style="margin-right: 20px;" /> <input type="button" value="삭제"
						class="btn page-link" id="deleteBtn" /> <input type="hidden"
						id="notice_id" name="notice_id" value="${dto.notice_id}" /> <input
						type="hidden" name="notice_upload" value="${dto.notice_upload}" />
					<input type="hidden" name="pageNum" value="${param.pageNum}" />
				</div>
			</form>
		</c:if>

		<div class="text-right" style="margin-right: 100px;">
			<input type="button" value="목록보기" class="btn page-link"
				onclick="goNotice()" />
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

</body>
</html>