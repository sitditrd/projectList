<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>

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

.fadeInUp {
	-webkit-animation-name: fadeInUp;
	animation-name: fadeInUp;
}
</style>

<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Business Casual - Start Bootstrap Theme</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		var chk = '${sessionScope.chk}';

		if (chk == 2) {
			alert("아이디 비밀번호를 확인하세요.");
			<%
				session.setAttribute("chk", 0);
			%>
		}

		$('.loginForm').submit(function() {
			if ($('#fid').val() == '') {
				alert('아이디를 입력하세요.');
				return false;
			}

			if ($('#fpass').val() == '') {
				alert('비밀번호를 입력하세요.');
				return false;
			}
		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});

		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

	});

	//register 버튼 클릭시 회원등록으로 이동
	function goregisterform() {
		location.href = "register.do";
		return false;
	}
	//cancel 버튼 클릭시 메인화면으로 이동
	function gofirstform() {
		location.href = "main.do";
		return false;
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
	<div align="right">
		<ul class="navbar-nav mx-auto">
			<li class="nav-item px-lg-4" id="b"><a
				class="first-link text-uppercase text-expanded" href="notice.do">notice</a>
				<a class="first-link text-uppercase text-expanded" href="board.do">board</a>
				| <a class="list-link text-uppercase text-expanded" href="login.do">login</a>
				<a class="list-link text-uppercase text-expanded" href="register.do">join
					us</a> <a class="list-link text-uppercase text-expanded"
				href="search.do">search</a></li>
		</ul>
	</div>

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
		<div class="login-container">
			<div id="output"></div>
			<div class="avatar"></div>
			<div class="form-box">
				<form action="signIn.do" method="post" class="loginForm"
					id="loginForm">
					<input name="id" type="text" placeholder="username" id="fid">
					<input name="password" type="password" placeholder="password"
						id="fpass"> <a href="find.do">Don't you Remember?</a>
					<button class="btn btn-primary btn-block login" type="submit"
						id="btn-1">Login</button>
				</form>
				<button class="btn btn-info btn-block login"
					onclick="goregisterform()" id="btn-2">Register</button>
				<button class="btn btn-danger btn-block login"
					onclick="gofirstform()" id="btn-3">cancel</button>
			</div>
		</div>
	</div>
	
	<br/>
	<br/>

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
