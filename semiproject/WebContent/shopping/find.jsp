<%@page import="java.text.NumberFormat"%>
<%@page import="java.util.ArrayList"%>
<%@page import="shoppingdemo.dto.CartDTO"%>
<%@page import="java.util.List"%>
<%@page import="shoppingdemo.dao.CartDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<style type="text/css">
.circle {
	border-radius: 2px;
	border-radius: 20px;
	border-top: 1px solid gray;
	border-left: 1px solid gray;
	border-right: 1px solid gray;
	border-bottom: 1px solid gray;
	margin-left: 500px;
	background-color: white;
}

.left {
	text-align: left;
}

.form-group {
	width: 100%;
	margin-left: 150px;
	margin-right: 100px;
}

<
style>table {
	width: 100%;
	border-top: 1px solid #444444;
	border-collapse: collapse;
}

th, td {
	border-bottom: 1px solid #444444;
	padding: 10px;
}

td {
	background-color: #FFFFFF;
}

th {
	background-color: #EFF5FB;
}
</style>

<title>Woman's Shop</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
	
</script>

<script type="text/javascript">
	
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


<!-- 부가적인 테마 -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<script type="text/javascript">
	function gofind() {
		if ($('#username').val() == "") {
			alert('이름을 입력하세요');
			$('#username').focus();
			return false;
		} else if ($('#phone').val() == "") {
			alert('전화번호를 입력하세요');
			$('#phone').focus();

			return false;
		} else if ($('#phone1').val() == "") {
			alert('전화번호를 입력하세요');
			$('#phone1').focus();

			return false;
		} else if ($('#phone2').val() == "") {
			alert('전화번호를 입력하세요');
			$('#phone2').focus();
			return false;
		} else {
			url = "gofind.do?username=" + $('#username').val() + "&phone="
					+ $('#phone').val();
			window
					.open(url, "check",
							"toolbar=no, width = 450, height = 200, top = 200, left = 200");
		}
		/*
		else {
			//var URL = "페이지 주소.jsp?name= "+name +"&year=" + year
			url = "gofind.do?username=" + $('#username').val()+"&phone="+$('#phone').val()+"&phone2="+$('#phone2').val()+"&phone3="+$('#phone3').val();
			window.open(url, "check", "toolbar=no, width = 450, height = 200, top = 200, left = 200");
		}*/
	}

	function goCheck() {
		if ($('#userid').val() == "") {
			alert('아이디를 입력하세요');
			return false;
		} else if ($('#useremail').val() == "") {
			alert('이메일을 입력하세요');
			return false;
		} else {
			//var URL = "페이지 주소.jsp?name= "+name +"&year=" + year
			url = "gocheck.do?userid=" + $('#userid').val() + "&useremail="
					+ $('#useremail').val();
			window
					.open(url, "check",
							"toolbar=no, width = 450, height = 200, top = 200, left = 200");
		}
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

	<h1 class="my-4 pageHead">Find Id</h1>

	<div class="container col-sm-7 circle">
		<br />
		<div>
			<h4 style="margin-left: 150px">이름과 전화번호를 정확하게 입력해 주세요.</h4>
			<h6 style="margin-left: 150px">회원정보에 입력된 정보와 일치 하지 않을 시 아이디가
				검색되지 않습니다.</h6>
		</div>
		<br /> <br />
		<p style="margin-left: 150px">이름</p>
		<input type="text" name="username" id="username"
			class="form-control col-sm-7" placeholder="이름을 입력하세요"
			style="margin-left: 150px"></input><br /> <br />
		<p style="margin-left: 150px">전화번호</p>
		<input type="text" name="phone" id="phone"
			class="form-control col-sm-7" placeholder="전화번호를 입력하세요"
			style="margin-left: 150px"></input> <br /> <br />
		<hr color="#FAFAFA" size="50">
		<br />
		<div align="center">
			<button type="button" class="btn btn-primary" onclick="gofind()"
				id="btn-1">확인</button>
			<button type="reset" class="btn btn-danger" onclick="history.go(-1)"
				id="btn-2">취소</button>
		</div>
		<br /> <br />
	</div>

	<h1 class="my-4 pageHead">Find Password</h1>

	<div class="container col-sm-7 circle">
		<br />
		<div>
			<h4 style="margin-left: 150px">아이디와 이메일을 정확하게 입력해 주세요.</h4>
			<h6 style="margin-left: 150px">회원정보에 입력된 정보와 일치 하지 않을 시 비밀번호가
				검색되지 않습니다.</h6>
		</div>
		<br /> <br />
		<p style="margin-left: 150px">아이디</p>
		<input type="text" name="userid" id="userid"
			class="form-control col-sm-7" placeholder="이름을 입력하세요"
			style="margin-left: 150px"></input> <br /> <br />
		<p style="margin-left: 150px">이메일</p>
		<input type="email" name="useremail" id="useremail"
			class="form-control col-sm-7" placeholder="전화번호를 입력하세요"
			style="margin-left: 150px"></input> <br /> <br />
		<hr color="#FAFAFA" size="50">
		<br />
		<div align="center">
			<button type="button" class="btn btn-primary" onclick="goCheck()"
				id="btn-1">확인</button>
			<button type="reset" class="btn btn-danger" onclick="history.go(-1)"
				id="btn-2">취소</button>
		</div>
		<br /> <br />
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
	<!-- 우편 -->
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>

</body>

</html>
