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
.wrap {
	padding-top: 50px;
	padding-left: 100px;
	padding-right: 100px;
	padding-bottom: 100px;
	margin-top: 50px;
	margin-left: 300px;
	margin-right: 300px;
	margin-bottom: 100px;
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
	$(document).ready(
			function() {

				$('#category li').click(function() {
					$(".categoryId").attr('value', $(this).index());
					$('#navbarResponsive').attr('action', 'list.do');
					$('#navbarResponsive').submit();
				});

				$('#seachList').change(
						function() {
							$(".searchOptionIdx").attr(
									'value',
									$("#seachList option").index(
											$("#seachList option:selected")));

							$('#boardSearch').attr('action', 'boardSearch.do');
							$('#boardSearch').submit();

						});

				switch ('${searchOptionIdx}') {
				case '0':
					$('[value=all]').prop('selected', 'selected');
					break;
				case '1':
					$('[value=1]').prop('selected', 'selected');
					break;
				case '2':
					$('[value=2]').prop('selected', 'selected');
					break;
				case '3':
					$('[value=3]').prop('selected', 'selected');
					break;
				case '4':
					$('[value=4]').prop('selected', 'selected');
					break;
				case '5':
					$('[value=5]').prop('selected', 'selected');
					break;
				case '6':
					$('[value=6]').prop('selected', 'selected');
					break;
				}

			});
	
	function warning(){
		alert("본인만 볼 수 있습니다.");
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
						href="logout.do">logout</a><a
						class="list-link text-uppercase text-expanded" href="basket.do">cart</a>
						<a class="list-link text-uppercase text-expanded" href="#">my
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

	<!-- 게시판 -->
	<br />
	<h1 class="my-4 pageHead">Board</h1>
	<div class="container">
		<div class="form-group col-md-4 div-align-middle">
			<form id="boardSearch" name="boardSearch">
				<select class="form-control" id="seachList" name="seachList"><option
						value="all">전체보기</option>
					<option value="1">상품문의</option>
					<option value="2">배송전 상품변경/취소문의</option>
					<option value="3">배송후 반품/교환문의</option>
					<option value="4">배송문의</option>
					<option value="5">입금문의</option>
					<option value="6">기타문의</option>
				</select> <input type="hidden" class="searchOptionIdx" name="searchOptionIdx">
			</form>
		</div>
		<br />

		<!-- 게시판 목록 DB이용해서 수정해야함 -->
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th class="text-center" style="width: 15%">번호</th>
					<th class="text-center" style="width: 50%">제목</th>
					<th class="text-center" style="width: 15%">글쓴이</th>
					<th class="text-center" style="width: 10%">작성일</th>
					<th class="text-center" style="width: 10%">조회수</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${requestScope.aList}" var="dto">
					<tr>
						<c:url var="link" value="boardDetail.do">
							<c:param name="post_id" value="${dto.post_id}" />
							<c:param name="class_name" value="${dto.class_name}" />
							<c:param name="member_id" value="${dto.member_id}" />
							<c:param name="re_level" value="${dto.re_level}" />
							<c:param name="pageNum" value="${pdto.currentPage}" />
						</c:url>
						<td class="text-center">${dto.post_id}</td>
						<td class="boardSubject"><nobr>
								<c:if test="${dto.re_level != 0}">
									<img src="../shopping/img/level.gif" width="${10*dto.re_level}"
										height="50%" />
									<img src="../shopping/img/re.gif" />
								</c:if>
								<c:if test="${dto.member_code ne sessionScope.member_code && empty sessionScope.adminOk}">
									<a onclick="warning()">${dto.class_name}</a>
								</c:if>
								<c:if test="${dto.member_code eq sessionScope.member_code || not empty sessionScope.adminOk}">
									<a href="${link}">${dto.class_name}</a>
								</c:if>

							</nobr></td>
						<td class="text-center"><c:if test="${dto.re_level != 0}">관리자</c:if>
							<c:if test="${dto.re_level == 0}">${dto.member_id}</c:if></td>
						<td class="text-center">${dto.post_date}</td>
						<td class="text-center">${dto.post_views}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>

		<c:if test="${not empty sessionScope.logOk}">
			<a class="btn page-link float-right"
				href="boardWirteForm.do?pageNum=${param.pageNum}">글쓰기</a>
		</c:if>
		<br /> <br />

		<c:if test="${not empty requestScope.aList}">
			<div class="text-center">
				<ul class="pagination justify-content-center">
					<!-- 이전 -->
					<c:if test="${pdto.startPage > pdto.blockPage}">
						<!-- startPage에 저장될 수 있는 값은 1, 7, ...  -->
						<li class="page-item"><a class="page-link"
							aria-label="Previous"
							href="board.do?pageNum=${pdto.startPage - pdto.blockPage}&categoryId=${categoryId}">
								<span aria-hidden="true">&laquo;</span> <span class="sr-only">Previous</span>
						</a></li>
					</c:if>

					<!-- 페이지 -->
					<c:forEach begin="${pdto.startPage}" end="${pdto.endPage}" var="i">
						<!-- var는 첫번호와 끝번호 사이의 숫자를 출력하기 위해 선언함 -->

						<li class="page-item"><a class="page-link"
							href="board.do?pageNum=${i}&categoryId=${categoryId}">${i}</a></li>
						<!-- 현재 페이지 값=i -->

					</c:forEach>

					<!-- 다음 -->
					<c:if test="${pdto.totalPage > pdto.endPage}">
						<li class="page-item"><a class="page-link" aria-label="Next"
							href="board.do?pageNum=${pdto.startPage + pdto.blockPage}&categoryId=${categoryId}">
								<span aria-hidden="true">&raquo;</span> <span class="sr-only">Next</span>
						</a></li>
					</c:if>

				</ul>
			</div>
		</c:if>

		<br /> <br />
	</div>
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