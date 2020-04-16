<%@page import="shoppingdemo.dao.MemberDAO"%>
<%@page import="shoppingdemo.dto.MemberDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

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

#fid, #fpass, #fname, #fbirth, #ftel, #femail, #faddr, #btn-2 {
	margin-bottom: 10px;
}

#btn-1:hover:before, #btn-2:hover:before, #btn-3:hover:before {
	bottom: auto;
	top: 0;
}

.login-container {
	position: relative;
	width: 700px;
	margin: 80px auto;
	padding: 20px 40px 40px;
	text-align: left;
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

<title>Woman's Shop</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		
		$("#phoneSelect").val("${phoneNum1}");
		
		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});

	});

	function checkValue() {

		var check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
		var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

		var pwd = $('#fpass').val();
		var name = $('#fname').val();
		var phoneNum1 = $('#phoneSelect option:selected').val();
		var phoneNum2 = $('#phoneNum2').val();
		var phoneNum3 = $('#phoneNum3').val();
		var email = $('#femail').val();
		var addr = $('#faddr').val();

		if ($('#fpass').val() == '') {
			alert('비밀번호를 입력하세요.');
			$('#fpass').focus();
			return false;
			
		} else if (pwd.length<8 || pwd.length>16) {
			alert("암호는 8자이상 16자 이하여야 합니다.");
			$('#fpass').focus();
			return false;
			
		} else if (!check.test(pwd)) {
			alert('비밀번호는 영문,숫자,특수문자의 조합으로 입력해주세요');
			$('#fpass').focus();
			return false;

		} else if (phoneNum2.length < 4 || phoneNum3.length < 4) {
			alert('전화번호를 입력하세요.');
			$(this).focus();
			return false;
			
		} else if (special_pattern.test(phoneNum2)
				|| special_pattern.test(phoneNum3)) {
			alert('전화번호에 특수 문자는 사용할 수 없습니다.');
			$(this).focus();
			return false;
			
		} else if ($('#femail').val() == '') {
			alert('이메일를 입력하세요.');
			$('#femail').focus();
			return false;
			
		} else if ($('#faddr').val() == '') {
			alert('주소를 입력하세요.');
			$('#faddr').focus();
			return false;
			
		} else if (special_pattern.test(addr)) {
			alert('주소에 특수 문자는 사용할 수 없습니다.');
			$('#faddr').focus();
			return false;
		}
		alert('회원정보 수정 완료!');
		
		$("#phoneNum1").attr('value', $("#phoneSelect option:selected").val());
	}

	//cancel 버튼 클릭시 메인화면으로 이동
	function gofirstform() {
		location.href = "main.do";
		return false;
	}

	//leave 버튼 클릭시 회원탈퇴
	function godeleteform() {
		if (confirm("회원탈퇴 하시겠습니까?")) {
			alert("회원탈퇴가 되었습니다.")
			location.href = "deleteUp.do"
		} else {
			alert("회원탈퇴가 취소되었습니다.")
		}
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

	<div class="container">
		<div class="login-container">
			<div id="output"></div>
			<div class="avatar"></div>
			<div class="form-box">
				<form name="frm" action="modifyUp.do" method="post"
					onsubmit="return checkValue()">
					<lable id="two">Passward<input name="password"
						type="password" placeholder="password" id="fpass"></lable>
					<table>
						<tr id="three" style="line-height: 30px;">
							<td>Tel</td>
						</tr>

						<tr>
							<td><select name="phoneSelect" id="phoneSelect"
								class="form-control">
									<option value="010" selected>010</option>
									<option value="011" selected>011</option>
									<option value="016" selected>016</option>
									<option value="017" selected>017</option>
									<option value="018" selected>018</option>
									<option value="019" selected>019</option>
							</select><input type="hidden" name="phoneNum1" id="phoneNum1"> - <input
								type="text" name="phoneNum2" id="phoneNum2" class="form-control"
								size="5" maxlength="4" style="width: 80px;" value="${phoneNum2}"> - <input
								type="text" name="phoneNum3" id="phoneNum3" class="form-control"
								size="5" maxlength="4" style="width: 80px;" value="${phoneNum3}"></td>
						</tr>
					</table>
					<br />
					<lable id="four">Email<input name="email" type="text"
						placeholder="email" id="femail" value="${member_email}"></lable>
					<lable id="five">Addr<input name="addr" type="text"
						placeholder="addr" id="faddr" value="${member_addr}"></lable>
					<button class="btn btn-success btn-block login"
						onclick="gomodifyform()" type="submit" id="btn-1">modify</button>
				</form>
				<form name="frm" action="deleteUp.do" method="post"
					onsubmit="return godeleteform()">
					<button class="btn btn-info btn-block login" id="btn-4">leave</button>
				</form>
				<button class="btn btn-danger btn-block login"
					onclick="gofirstform()" id="btn-3">cancel</button>
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
