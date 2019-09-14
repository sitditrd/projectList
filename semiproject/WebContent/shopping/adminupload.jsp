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
body {
	background: #eee url(http://subtlepatterns.com/patterns/sativa.png);
}

html, body {
	position: relative;
	height: 100%;
}

#btn-1 {
	margin-top: 30px;
}

#btn-1, #btn-2, #btn-3 {
	letter-spacing: 0;
	-webkit-transition: all .28s ease-in-out;
	transition: all .28s ease-in-out;
}

#btn-1:hover, #btn-1:focus, #btn-1:active, #btn-2:hover, #btn-2:focus,
	#btn-2:active, #btn-3:hover, #btn-3:focus, #btn-3:active {
	letter-spacing: 5px;
}

#btn-1:after, #btn-1:before, #btn-2:after, #btn-2:before, #btn-3:after,
	#btn-3:before {
	border: 1px solid rgba(255, 255, 255, 0);
	bottom: 0;
	content: " ";
	display: block;
	margin: 0 auto;
	position: relative;
	-webkit-transition: all .28s ease-in-out;
	transition: all .28s ease-in-out;
	width: 0;
}

#btn-1:hover:after, #btn-1:hover:before, #btn-2:hover:after, #btn-2:hover:before,
	#btn-3:hover:after, #btn-3:hover:before {
	border-color: #fff;
	-webkit-transition: width 350ms ease-in-out;
	transition: width 350ms ease-in-out;
	width: 70%;
}

#fpass {
	margin-top: 10px;
}

#btn-1:hover:before, #btn-2:hover:before, #btn-3:hover:before {
	bottom: auto;
	top: 0;
}

.login-container {
	position: relative;
	width: 300px;
	height: 650px;
	margin: 80px auto;
	padding: 20px 40px 40px;
	text-align: center;
	background: #fff;
	border: 1px solid #ccc;
}

#output {
	position: absolute;
	width: 300px;
	top: -75px;
	left: 0;
	color: #fff;
}

#output.alert-success {
	background: rgb(25, 204, 25);
}

#output.alert-danger {
	background: rgb(228, 105, 105);
}

.login-container::before, .login-container::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	top: 3.5px;
	left: 0;
	background: #fff;
	z-index: -1;
	-webkit-transform: rotateZ(4deg);
	-moz-transform: rotateZ(4deg);
	-ms-transform: rotateZ(4deg);
	border: 1px solid #ccc;
}

.login-container::after {
	top: 5px;
	z-index: -2;
	-webkit-transform: rotateZ(-2deg);
	-moz-transform: rotateZ(-2deg);
	-ms-transform: rotateZ(-2deg);
}

.avatar {
	width: 100px;
	height: 100px;
	margin: 10px auto 30px;
	border-radius: 100%;
	border: 2px solid #aaa;
	background-size: cover;
}

.form-box input {
	width: 100%;
	padding: 10px;
	text-align: center;
	height: 40px;
	border: 1px solid #ccc;;
	background: #fafafa;
	transition: 0.2s ease-in-out;
}

.form-box input:focus {
	outline: 0;
	background: #eee;
}

.form-box input[type="text"] {
	border-radius: 5px 5px 0 0;
	text-transform: lowercase;
}

.form-box input[type="password"] {
	border-radius: 0 0 5px 5px;
	border-top: 0;
}

.form-box button.login {
	margin-top: 5px;
	padding: 1px 1px;
}

.animated {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}

@
-webkit-keyframes fadeInUp { 0% {
	opacity: 0;
	-webkit-transform: translateY(20px);
	transform: translateY(20px);
}

}
@
keyframes fadeInUp { 0% {
	opacity: 0;
	-webkit-transform: translateY(20px);
	-ms-transform: translateY(20px);
	transform: translateY(20px);
}

}
.fadeInUp {
	-webkit-animation-name: fadeInUp;
	animation-name: fadeInUp;
}

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
	width: 1px;
}

.filebox label {
	display: block;
	padding: .5em .75em;
	text-align: center;
	font-size: inherit;
	line-height: inherit;
	vertical-align: middle;
	cursor: pointer;
	border: 1px solid #ebebeb;
	border-radius: .25em;
	font-size: inherit;
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
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	$(document)
			.ready(
					function() {

						$('#category li').click(function() {
							$(".categoryId").attr('value', $(this).index());
							$('#navbarResponsive').attr('action', 'list.do');
							$('#navbarResponsive').submit();
						});

						$('#logout').click(function() {
							alert('로그아웃되었습니다.');
						});

						$('#btn-1')
								.click(
										function() {

											var categoryName = $(
													"#itemCategory option:selected")
													.val();

											var fileName = $('.upload-hidden')[0].files[0].name
													.split('.').shift();

											var itemName = $('#item_name')
													.val();

											if (categoryName == 'category') {
												alert('상품의 종류를 선택하세요.');
												return false;
											}

											if (fileName != itemName) {
												alert('상품과 이미지의 이름이 같아야 합니다.');
												return false;
											}

											$(".optionIndex")
													.attr(
															'value',
															$(
																	"#itemCategory option")
																	.index(
																			$("#itemCategory option:selected")));

											$(".categoryName").attr('value',
													categoryName);

											$('#uploadForm').attr('action',
													'itemUpload.do');
											$('#uploadForm').submit();
												
											alert('상품이 업로드 되었습니다.')
										});
					});

	// 이미지 파일만 업로드 가능하게
	function fileCheck(obj) {
		pathPoint = obj.value.lastIndexOf('.');
		filePoint = obj.value.substring(pathPoint + 1, obj.length);
		fileType = filePoint.toLowerCase();

		if (!(fileType == "gif" || fileType == "jpg" || fileType == "png" || fileType == "jpeg")) {
			alert("이미지파일만 업로드 가능합니다.");
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
			
			
			$('#fileName').attr('value', filename.split('.')[0]);
			
			$('.upload-hidden').siblings('.upload-name').val(filename);

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

	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
		
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



	<div class="container">
		<div class="login-container">
			<div id="output"></div>
			<div class="avatar"></div>
			<div class="form-box">
				<form method="post" class="uploadForm" id="uploadForm"
					enctype="multipart/form-data" style="text-align: left;">

					<label>Category</label><br /> <select class="form-control"
						id="itemCategory" name="itemCategory">
						<option value="category">카테고리</option>
						<option value="outer">Outer</option>
						<option value="top">Top</option>
						<option value="pants">Pants</option>
						<option value="dress">Dress</option>
						<option value="accessary">Accessary</option>
					</select> <input type="hidden" class="optionIndex" name="optionIndex" /><input
						type="hidden" class="categoryName" name="categoryName" /> <br />

					<label style="margin-top: 10px">ItemName</label><br /> <input
						name="item_name" type="text" placeholder="Item name"
						id="item_name"> <label style="margin-top: 10px">ItemPrice</label>
					<input name="item_price" type="text" placeholder="Price"
						id="item_price"> <label style="margin-top: 10px">FileChoose</label>

					<div class="filebox form-group col-md-4 div-align-middle">
						<input class="upload-name" disabled="disabled" /> <label
							for="item_image" class="page-link">이미지찾기</label> <input
							type="file" class="upload-hidden" id="item_image"
							name="item_image" onchange="fileCheck(this)" accept="image/*" />
							<input type="hidden" name="fileName" id="fileName" />
					</div>

					<div class="container">
						<p style="font-size: x-small; color: red; text-align: center;">상품과
							이미지의 이름이 같아야 합니다.</p>
					</div>

					<button class="btn btn-primary btn-block login" type="button"
						id="btn-1">Upload</button>
				</form>
			</div>
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
