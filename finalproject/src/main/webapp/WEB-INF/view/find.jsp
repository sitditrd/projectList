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

<title>find.jsp</title>

<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}

#btn-1, #btn-2 {
	letter-spacing: 0;
	-webkit-transition: all .28s ease-in-out;
	transition: all .28s ease-in-out;
}

#btn-1:hover,
#btn-1:focus,
#btn-1:active,
#btn-2:hover,
#btn-2:focus,
#btn-2:active {
	letter-spacing: 5px;
}

#btn-1:after,
#btn-1:before,
#btn-2:after,
#btn-2:before {
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

#btn-1:hover:after,
#btn-1:hover:before,
#btn-2:hover:after,
#btn-2:hover:before {
	border-color: #fff;
	-webkit-transition: width 350ms ease-in-out;
	transition: width 350ms ease-in-out;
	width: 70%;
}

#btn-1:hover:before,
#btn-2:hover:before {
	bottom: auto;
	top: 0;
}

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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		
	});
	
	function gofind() {
		if ($('#username').val() == "") {
			alert('이름을 입력하세요');
			$('#username').focus();
			return false;
		} else if ($('#phone').val() == "") {
			alert('전화번호를 입력하세요');
			$('#phone').focus();
			return false;
		} else {
			$.ajax({
				type:'POST',
				dataType:'json',
				url:'gofind.do?username='+ $('#username').val() + "&phone="+ $('#phone').val(),
				success : function(res) {
					console.log(res);
					console.log(res.member_id);
					alert("사용자의 ID는 " + res.member_id + " 입니다.");
				}, 
				error : function(res) {
					console.log(res.statusText); //에러시 상태를 표시해준다.
					alert("올바른 이름과 전화번호를 입력하세요.");
				}
			});
		}
	}

	function goCheck() {
		if ($('#userid').val() == "") {
			alert('아이디를 입력하세요');
			return false;
		} else if ($('#useremail').val() == "") {
			alert('이메일을 입력하세요');
			return false;
		} else {
			$.ajax({
				type:'POST',
				dataType:'json',
				url:'gocheck.do?userId='+ $('#userid').val() + "&userEmail="+ $('#useremail').val(),
				success : function(res) {
					console.log(res);
					console.log(res.member_pwd);
					alert("사용자의 Password는 " + res.member_pwd + " 입니다.");
				}, 
				error : function(res) {
					console.log(res.statusText); //에러시 상태를 표시해준다.
					alert("올바른 아이디와 이메일을 입력하세요.");
				}
			});
		}
	}
	
	function logout() {
		alert("로그아웃 되었습니다.");
	}
	
</script>
	
<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<!-- Custom fonts for this template-->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    
<!-- Custom fonts for this template -->
<link
	href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet">
<link
	href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i"
	rel="stylesheet">

<!-- Custom fonts for this template2 -->
<link
	href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic"
	rel="stylesheet" type="text/css">

<!-- Custom styles for this template -->
<link href="css/business-casual.min.css" rel="stylesheet">

</head>

<body style="background-image: url('img/bg.jpg'); font-family: 'Lora'; background-attachment: fixed; background-position: center; background-size: cover;" id="body">
	<c:if test="${empty sessionScope.adminOk}">
		<c:if test="${empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b"><a class="first-link text-uppercase text-expanded" href="notice.do" id="link">notice</a>
					<a class="first-link text-uppercase text-expanded" href="boardlist.do" id="link">board |</a> 
					<a class="list-link text-uppercase text-expanded" href="login.do" id="link">login</a> 
					<a class="list-link text-uppercase text-expanded" href="register.do" id="link">join us</a> 
					<a class="list-link text-uppercase text-expanded" href="search.do" id="link">search</a></li>
				</ul>
			</div>
		</c:if>
		
		<c:if test="${not empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b">
					<a class="first-link text-uppercase text-expanded" href="#" id="link">${sessionScope.logOk}님</a>
					<a class="first-link text-uppercase text-expanded" href="notice.do" id="link">notice</a>
					<a class="first-link text-uppercase text-expanded" href="boardlist.do" id="link">board |</a> 
					<a class="list-link text-uppercase text-expanded" href="logout.do" id="link" onclick="logout()">logout</a> 
					<a class="list-link text-uppercase text-expanded" href="main.do" id="link">reserve</a> 
					<a class="list-link text-uppercase text-expanded" href="mypage.do" id="link">mypage</a>
					<a class="list-link text-uppercase text-expanded" href="search.do" id="link">search</a></li>
				</ul>
			</div>
		</c:if>
	</c:if>
	
	<c:if test="${not empty sessionScope.adminOk}">
		<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b">
					<a class="first-link text-uppercase text-expanded" href="#" id="link">${sessionScope.adminOk}님</a>
					<a class="first-link text-uppercase text-expanded" href="notice.do" id="link">notice</a>
					<a class="first-link text-uppercase text-expanded" href="boardlist.do" id="link">board |</a> 
					<a class="list-link text-uppercase text-expanded" href="logout.do" id="link" onclick="logout()">logout</a> 
					<a class="list-link text-uppercase text-expanded" href="adminpage.do" id="link">adminpage</a>
					<a class="list-link text-uppercase text-expanded" href="search.do" id="link">search</a></li>
				</ul>
		</div>
	</c:if>

	<h1 class="site-heading text-center text-white d-none d-lg-block">
      <span class="site-heading-upper text-primary mb-3"><a href="home.do" style="color: #FFAA28; text-decoration: none;">The AirLine Ticketing System</a></span> 
      <span class="site-heading-lower"><a href="home.do" style="color: white; text-decoration: none;">C_Trip</a></span> <i class="fa fa-plane" aria-hidden="true"></i>
   	</h1>
	
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav" style="background-color: #111111b5">
		<div class="container">
			<a
				class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
				href="#">Start Bootstrap</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarResponsive" aria-controls="navbarResponsive"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav mx-auto">

					<li class="nav-item active px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="main.do"><i class="fa fa-fighter-jet" aria-hidden="true" id="link"></i> &nbsp;항공권 <span class="sr-only">(current)</span></a>
					</li>
					
					<li class="nav-item px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="weatherinfo.do"><i class="fa fa-sun-o" aria-hidden="true"></i> &nbsp;날씨</a>
					</li>
					
					<li class="nav-item px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="rate.do"><i class="fa fa-krw" aria-hidden="true"></i> &nbsp;환율</a>
					</li>
					
					<li class="nav-item px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="time.do"><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;시차</a>
					</li>
					
				</ul>
			</div>
		</div>
	</nav>

	<section class="page-section cta">
		
	<div class="container col-sm-7 circle">
		<h1 class="my-4 text-uppercase font-italic pageHead" align="center">Find Id</h1>
		<br />
		<div>
			<h4 style="margin-left: 150px">이름과 전화번호를 정확하게 입력해 주세요.</h4>
			<h6 style="margin-left: 150px">회원정보에 입력된 정보와 일치 하지 않을 시 아이디가
				검색되지 않습니다.</h6>
		</div>
		<br /> <br />
		<p style="margin-left: 150px; font: italic;">Name</p>
		<input type="text" name="username" id="username"
			class="form-control col-sm-7" placeholder="이름을 입력하세요."
			style="margin-left: 150px"></input><br /> <br />
		<p style="margin-left: 150px; font: italic;">Phone</p>
		<input type="text" name="phone" id="phone"
			class="form-control col-sm-7" placeholder="전화번호를 입력하세요."
			style="margin-left: 150px"></input> <br /> <br />
		<hr color="#FAFAFA" size="50">
		<br />
		<div align="center">
			<button type="button" class="btn btn-success" onclick="gofind()"
				id="btn-1">확인</button>
			<button type="reset" class="btn btn-danger" onclick="history.go(-1)"
				id="btn-2" style="margin-left: 20px">취소</button>
		</div>
		<br /> 
		<br />
	</div>

	<div class="container col-sm-7 circle" style="margin-top: 100px">
		<h1 class="my-4 text-uppercase font-italic pageHead" align="center">Find Password</h1>
		<br />
		
		<div>
			<h4 style="margin-left: 150px">아이디와 이메일을 정확하게 입력해 주세요.</h4>
			<h6 style="margin-left: 150px">회원정보에 입력된 정보와 일치 하지 않을 시 비밀번호가 검색되지 않습니다.</h6>
		</div>
		
		<br /> 
		<br />
		
		<p style="margin-left: 150px; font: italic;">ID</p>
		<input type="text" name="userid" id="userid" class="form-control col-sm-7" placeholder="아이디를 입력하세요." style="margin-left: 150px"></input> 
		
		<br /> 
		<br />
		
		<p style="margin-left: 150px; font: italic;">Email</p>
		
		<input type="email" name="useremail" id="useremail" class="form-control col-sm-7" placeholder="이메일을 입력하세요." style="margin-left: 150px"></input> 
		<br /> 
		<br />
		
		<hr color="#FAFAFA" size="50">
		
		<br />
		
		<div align="center">
			<button type="button" class="btn btn-success" onclick="goCheck()" id="btn-1">확인</button>
			<button type="reset" class="btn btn-danger" onclick="history.go(-1)" id="btn-2" style="margin-left: 20px">취소</button>
		</div>
		
		<br /> 
		<br />
	</div>
	</section>

	<section class="page-section about-heading">
		<div class="container" >
			<img class="img-fluid rounded about-heading-img mb-3 mb-lg-0"
				src="img/about.jpg" alt="">
			<div class="about-heading-content">
				<div class="row">
					<div class="col-xl-9 col-lg-10 mx-auto">
						<div class="bg-faded rounded p-5">
							<h2 class="section-heading mb-4">
								<span class="section-heading-upper">Strong Coffee, Strong
									Roots</span> <span class="section-heading-lower">About Our Cafe</span>
							</h2>
							<p>Founded in 1987 by the Hernandez brothers, our
								establishment has been serving up rich coffee sourced from
								artisan farmers in various regions of South and Central America.
								We are dedicated to travelling the world, finding the best
								coffee, and bringing back to you here in our cafe.</p>
							<p class="mb-0">
								We guarantee that you will fall in <em>lust</em> with our
								decadent blends the moment you walk inside until you finish your
								last sip. Join us for your daily routine, an outing with
								friends, or simply just to enjoy some alone time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer class="footer text-faded text-center py-5">
		<div class="container">
			<p class="m-0 small">Copyright &copy; Your Website 2017</p>
		</div>
	</footer>

	<!-- Bootstrap core JavaScript -->
	<script src="vendor/jquery/jquery.min.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>

<!-- Script to highlight the active date in the hours list -->
<script>
	$('.list-hours li').eq(new Date().getDay()).addClass('today');
</script>

</html>
