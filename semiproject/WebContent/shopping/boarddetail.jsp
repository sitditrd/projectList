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
</style>
<script type="text/javascript">
	$(document).ready(function() {

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#editBtn').click(function() {
			$('#editDeleteForm').attr('action', 'boardEditForm.do');
			$('#editDeleteForm').submit();
		});

		$('#deleteBtn').click(function() {
			$('#editDeleteForm').attr('action', 'boardDelete.do');
			$('#editDeleteForm').submit();
		});

		$('#replyBtn').click(function() {
			$('#editDeleteForm').attr('action', 'boardWirteForm.do');
			$('#editDeleteForm').submit();
		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});
	});

	function goBoard() {
		location.href = "board.do?pageNum=${param.pageNum}";
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
	<h1 class="my-4 pageHead">Board</h1>
	<div class="container">
		<br />
		<hr class="hrLine">

		<h5 class="text-left" style="margin-left: 100px;">${dto.class_name}</h5>

		<p class="text-right" style="margin-right: 100px;">
			글쓴이 :
			<c:if test="${dto.re_level != 0}">관리자</c:if>
			<c:if test="${dto.re_level == 0}">${dto.member_id}</c:if>
		</p>

		<p class="text-right" style="margin-right: 100px;">날짜 :
			${dto.post_date} | 조회수 : ${dto.post_views}</p>

		<hr class="hrLine">

		<p class="text-left"
			style="margin-left: 100px; margin-right: 100px; margin-top: 100px; margin-bottom: 100px;">${dto.post_content}</p>

		<hr class="hrLine">

		<c:if test="${not empty dto.post_upload}">
			<p class="text-left" style="margin-left: 100px;">
				첨부파일 : <a href="download.do?post_id=${dto.post_id}">${dto.post_upload}</a>
			</p>

			<hr class="hrLine">
		</c:if>

		<div class="text-left" style="margin-left: 100px;">



			<form id="editDeleteForm" name="editDeleteForm" method="post"
				enctype="application/x-www-form-urlencoded">

				<c:if test="${not empty sessionScope.adminOk && dto.re_level eq 0}">

					<input type="button" value="답글" class="btn page-link" id="replyBtn"
						style="margin-right: 20px;" />
				</c:if>

				<c:if
					test="${empty sessionScope.adminOk && sessionScope.member_code eq dto.member_code && dto.re_level eq 0}">
					<input type="button" value="수정" class="btn page-link" id="editBtn"
						style="margin-right: 20px;" />
					<input type="button" value="삭제" class="btn page-link"
						id="deleteBtn" />

				</c:if>

				<input type="hidden" name="post_id" value="${dto.post_id}" /> <input
					type="hidden" name="class_name" value="${dto.class_name}" /> <input
					type="hidden" name="class_code" value="${dto.class_code}" /> <input
					type="hidden" name="member_id" value="${dto.member_id}" /> <input
					type="hidden" name="member_code" value="${dto.member_code}" /> <input
					type="hidden" name="post_upload" value="${dto.post_upload}" /> <input
					type="hidden" name="ref" value="${dto.ref}" /> <input
					type="hidden" name="re_step" value="${dto.re_step}" /> <input
					type="hidden" name="re_level" value="${dto.re_level}" /> <input
					type="hidden" name="pageNum" value="${param.pageNum}" />
			</form>

		</div>

		<div class="text-right" style="margin-right: 100px;">
			<input type="button" value="목록보기" class="btn page-link"
				onclick="goBoard()" />
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