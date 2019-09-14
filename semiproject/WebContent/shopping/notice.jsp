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
	padding-bottom: 50px;
	margin-top: 50px;
	margin-left: 300px;
	margin-right: 300px;
	margin-bottom: 50px;
	border: 3px solid gray;
}

.wrap_menu {
	padding-top: 10px;
	padding-left: 10px;
	padding-right: 10px;
	padding-bottom: 10px;
	margin-top: 10px;
	margin-left: 30px;
	margin-right: 30px;
	border: 3px solid white;
	background-color: white;
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

.boardSubject {
	cursor: pointer;
	overflow: hidden;
	text-overflow: ellipsis;
}

a {
	color: black;
	text-decoration: none;
	background-color: transparent;
	-webkit-text-decoration-skip: objects
}

a:hover {
	color: #424242;
}
</style>
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

	<!-- 게시판 -->
	<br />
	<h1 class="my-4 pageHead">Notice</h1>
	<div class="container">

		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th class="text-center" style="width: 15%">번호</th>
					<th class="text-center" style="width: 70%">제목</th>
					<th class="text-center" style="width: 15%">작성일</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${requestScope.aList}" var="dto">
					<tr>
						<c:url var="link" value="noticeDetail.do">
							<c:param name="notice_id" value="${dto.notice_id}" />
							<c:param name="pageNum" value="${pdto.currentPage}" />
						</c:url>
						<td class="text-center">${dto.notice_id}</td>
						<td class="boardSubject"><nobr>
								<a href="${link}">${dto.notice_subject}</a>
							</nobr></td>
						<td class="text-center">${dto.notice_date}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>

		<c:if test="${not empty sessionScope.adminOk}">
			<a class="btn page-link float-right"
				href="noticeWriteForm.do?pageNum=${param.pageNum}">글쓰기</a>
		</c:if>

		<br /> <br />
		<c:if test="${not empty requestScope.aList}">
			<ul class="pagination justify-content-center">
				<c:if test="${pdto.startPage > pdto.blockPage}">
					<li class="page-item"><a class="page-link"
						aria-label="Previous"
						href="notice.do?pageNum=${pdto.startPage - pdto.blockPage}"> <span
							aria-hidden="true">&laquo;</span> <span class="sr-only">Previous</span>
					</a></li>
				</c:if>

				<!-- 페이지 -->
				<c:forEach begin="${pdto.startPage}" end="${pdto.endPage}" var="i">
					<li class="page-item"><a class="page-link"
						href="notice.do?pageNum=${i}">${i}</a></li>
				</c:forEach>

				<!-- 다음 -->
				<c:if test="${pdto.totalPage > pdto.endPage}">
					<li class="page-item"><a class="page-link" aria-label="Next"
						href="notice.do?pageNum=${pdto.startPage + pdto.blockPage}"> <span
							aria-hidden="true">&raquo;</span> <span class="sr-only">Next</span>
					</a></li>
				</c:if>
			</ul>
		</c:if>

		<br /> <br />
		<br /> <br />
		<br /> <br />

	</div>

	<footer class="bg-faded text-center py-5">
		<div class="container">
			<p class="m-0">Copyright &copy; Your Website 2017</p>
		</div>
	</footer>

</body>
</html>