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
.div-align-middle {
	display: table-cell;
	vertical-align: middle;
}

.boardHead {
	text-align: center;
	color: black;
	font-weight: normal;
}

.filebox input[type="file"] {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}

.filebox label {
	display: inline;
	padding: .5em .75em;
	font-size: inherit;
	line-height: normal;
	vertical-align: middle;
	cursor: pointer;
	border: 1px solid #ebebeb;
	border-radius: .25em;
} /* named upload */
.filebox .upload-name {
	display: inline-block;
	padding: .5em .75em; /* label의 패딩값과 일치 */
	font-size: inherit;
	font-family: inherit;
	line-height: normal;
	vertical-align: middle;
	background-color: #f5f5f5;
	border: 1px solid #ebebeb;
	border-bottom-color: #e2e2e2;
	border-radius: .25em;
	-webkit-appearance: none; /* 네이티브 외형 감추기 */
	-moz-appearance: none;
	appearance: none;
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

	// 이미지 파일만 업로드 가능하게
	function fileCheck(obj) {
		pathPoint = obj.value.lastIndexOf('.');
		filePoint = obj.value.substring(pathPoint + 1, obj.length);
		fileType = filePoint.toLowerCase();

		if (!(fileType == "gif" || fileType == "jpg" || fileType == "png" || fileType == "jpeg")) {
			alert("이미지 파일만 선택할 수 있습니다.");
			parentObj = obj.parentNode;
			node = parentObj.replaceChild(obj.cloneNode(true), obj);
			return false;
		} else {
			if (window.FileReader) {
				var filename = $('.upload-hidden')[0].files[0].name;
			} else {
				var filename = $('.upload-hidden').val().split('/').pop()
						.split('\\').pop();
			}

			$('.upload-hidden').siblings('.upload-name').val(filename);

		}
	}

	// 글쓰기 버튼 클릭시 name을 이용해서 값을 넘겨 줄 수 있도록 함 
	function process() {

		$(".optionIndex")
				.attr(
						'value',
						$("#boardTitle option").index(
								$("#boardTitle option:selected")));

		$('[name=post_content]').val(
				$('[name=post_content]').val().replace(/\n/gi, '<br/>'));
		return true;
	}

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

	<!-- 
		 서버에 페이지를 요청할때 파라미터로 파일첨부을 넘겨주면
  		 form요소에서 enctype="multipart/form-data", method="post" 을 설정한다.
 	-->

	<div class="container">
		<br />
		<form id="boardWrite" name="boardWrite" method="post"
			action="boardWrite.do" enctype="multipart/form-data"
			onsubmit="return process()">

			<!-- 답변글이면 -->
			<c:if test="${not empty param.post_id}">
				<input type="hidden" value="${param.post_id}" name="post_id" />
				<input type="hidden" value="${param.class_name}" name="class_name" />
				<input type="hidden" value="${param.class_code}" name="class_code" />
				<input type="hidden" value="${param.member_code}" name="member_code" />
				<input type="hidden" value="${param.ref}" name="ref" />
				<input type="hidden" value="${param.re_step}" name="re_step" />
				<input type="hidden" value="${param.re_level}" name="re_level" />
			</c:if>

			<table class="table">
				<colgroup>
					<col width="95">
					<col width="190">
					<col width="90">
					<col>
				</colgroup>
				<tbody>
					<tr>
						<th class="boardHead"><div>NAME</div></th>
						<td colspan="3">
							<div class="form-group col-md-4 div-align-middle">
								<c:if test="${not empty sessionScope.logOk}">
									<input class="form-control" type="text" id="member_id"
										name="member_id" value="${sessionScope.logOk}" readonly>
								</c:if>
								<c:if test="${not empty sessionScope.adminOk}">
									<input class="form-control" type="text" id="admin_id"
										name="admin_id" value="${sessionScope.adminOk}" readonly>
								</c:if>
							</div>
						</td>
					</tr>
					<tr>
						<th class="boardHead"><div>TITLE</div></th>
						<td colspan="3">
							<div class="form-group col-md-4 div-align-middle">

								<c:if test="${empty param.class_code}">

									<select name="boardTitle" id="boardTitle" class="form-control"><option
											value="">제목을 선택하세요</option>
										<option value="product">상품문의</option>
										<option value="beforedel">배송전 상품변경/취소문의</option>
										<option value="afterdel">배송후 반품/교환문의</option>
										<option value="delivery">배송문의</option>
										<option value="deposit">입금문의</option>
										<option value="etc">기타문의</option>
									</select>
									<input type="hidden" class="optionIndex" name="optionIndex" />

								</c:if>


								<c:if test="${not empty param.class_code}">

									<select name="boardTitle" id="boardTitle" class="form-control"
										disabled="disabled"><option value="class_name">${param.class_name}</option></select>
								</c:if>
							</div>
						</td>
					</tr>
					<tr>
						<th class="boardHead"><div>CONTENT</div></th>
						<td colspan="3">
							<div class="form-group col-md-4 div-align-middle">
								<textarea id="post_content" name="post_content"
									class="form-control" rows="10" cols="100"></textarea>
							</div>
						</td>
					</tr>
					<tr>
						<th class="boardHead"><div>FILE</div></th>
						<td colspan="3" id="">
							<div class="filebox form-group col-md-4 div-align-middle">
								<input class="upload-name" disabled="disabled" /> <label
									for="post_upload" class="page-link">파일찾기</label> <input
									type="file" class="upload-hidden" id="post_upload"
									name="post_upload" onchange="fileCheck(this)" accept="image/*" />
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="3" />
					</tr>
				</tbody>
			</table>

			<div class="text-right" style="margin-right: 100px;">

				<input type="submit" class="btn page-link" value="글쓰기"
					style="margin-right: 20px;"><input type="button"
					class="btn page-link" onclick="goBoard()" value="취소">
			</div>
			<c:if test="${not empty sessionScope.member_code}">
				<input type="hidden" name="member_code"
					value="${sessionScope.member_code}" />
			</c:if>
		</form>
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