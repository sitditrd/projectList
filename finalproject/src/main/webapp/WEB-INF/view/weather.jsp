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

<title>Business Casual - Start Bootstrap Theme</title>

<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	
	$(document).ready(function() {
		$('#submitWeather').click(function() {
			var item = $('#city').val().toUpperCase();
			$('#Option').val(item);
		});
	});
	
	function logout() {
		alert("로그아웃 되었습니다.");
	}
</script>

<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<!-- Custom fonts for this template-->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<!-- Custom fonts for this template -->
<link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">
<!-- Custom fonts for this template2 -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
	
<!-- Custom styles for this template -->
<link href="css/business-casual.min.css" rel="stylesheet">
<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
<link href="css/weather.css" rel="stylesheet">
<link rel="stylesheet" href="https://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" />

</head>

<body style="background-image: url('img/bg.jpg'); font-family: 'Lora'; background-attachment: fixed; background-position: center; background-size: cover;"
	id="body">
	<c:if test="${empty sessionScope.adminOk}">
		<c:if test="${empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b"><a
						class="first-link text-uppercase text-expanded" href="notice.do"
						id="link">notice</a> <a
						class="first-link text-uppercase text-expanded"
						href="boardlist.do" id="link">board |</a> <a
						class="list-link text-uppercase text-expanded" href="login.do"
						id="link">login</a> <a
						class="list-link text-uppercase text-expanded" href="register.do"
						id="link">join us</a> <a
						class="list-link text-uppercase text-expanded" href="search.do" id="link">search</a></li>
				</ul>
			</div>
		</c:if>

		<c:if test="${not empty sessionScope.logOk}">
			<div align="right">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item px-lg-4" id="b"><a
						class="first-link text-uppercase text-expanded" href="#" id="link">${sessionScope.logOk}님</a>
						<a class="first-link text-uppercase text-expanded"
						href="notice.do" id="link">notice</a> <a
						class="first-link text-uppercase text-expanded"
						href="boardlist.do" id="link">board |</a> <a
						class="list-link text-uppercase text-expanded" href="logout.do"
						id="link" onclick="logout()">logout</a> <a
						class="list-link text-uppercase text-expanded" href="main.do" id="link">reserve</a>
						<a class="list-link text-uppercase text-expanded" href="mypage.do"
						id="link">mypage</a> <a
						class="list-link text-uppercase text-expanded" href="search.do" id="link">search</a></li>
				</ul>
			</div>
		</c:if>
	</c:if>

	<c:if test="${not empty sessionScope.adminOk}">
		<div align="right">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item px-lg-4" id="b"><a
					class="first-link text-uppercase text-expanded" href="#" id="link">${sessionScope.adminOk}님</a>
					<a class="first-link text-uppercase text-expanded" href="notice.do"
					id="link">notice</a> <a
					class="first-link text-uppercase text-expanded" href="boardlist.do"
					id="link">board |</a> <a
					class="list-link text-uppercase text-expanded" href="logout.do"
					id="link" onclick="logout()">logout</a> <a
					class="list-link text-uppercase text-expanded" href="adminpage.do" id="link">adminpage</a>
					<a class="list-link text-uppercase text-expanded" href="search.do"
					id="link">search</a></li>
			</ul>
		</div>
	</c:if>
	
	<h1 class="site-heading text-center text-white d-none d-lg-block">
      <span class="site-heading-upper text-primary mb-3"><a href="home.do" style="color: #FFAA28; text-decoration: none;">The AirLine Ticketing System</a></span> 
      <span class="site-heading-lower"><a href="home.do" style="color: white; text-decoration: none;">C_Trip</a></span> <i class="fa fa-plane" aria-hidden="true"></i>
   	</h1>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
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
				
					<li class="nav-item px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="main.do"><i class="fa fa-fighter-jet" aria-hidden="true" id="link"></i> &nbsp;항공권 <span class="sr-only">(current)</span></a>
					</li>
					
					<li class="nav-item active px-lg-4">
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

<section class="page-section about-heading" style="background-color: rgba(0,0,0,0.5);">
	<div class="container" style="width: 100%">
    
   	    <!--
			
			<div class="row format-group form-inline" id="rowDiv">
					<span class="white">1. 지역검색 </span>
					<input type="text" name="translate" id="translate" class="form-control" placeholder="번역할 지역명 입력(한글)"/>
					<div class="trans_res" id="trans_res">
						<button id="trans_res_close"  class="trans_res_close btn btn-primary"> 닫기 </button>
					결과값 출력란.
					</div>
			</div> 
			
	    -->
		<div class="topcontainer">
		<div>x</div>
		<div>x</div>
			<div class="row" style="margin-bottom:20px;" align="center">
				<h3 class="text=center text-primary"> 지역명을 입력해주세요 ( 영문 ) </h3>
				<span id="error"></span>
		    </div>
		    
		    <div class="row format-group form-inline" id="rowDiv" align="center">
				<input type="text" name="city" id="city" class="form-control" placeholder="City Name"/>
				<button id="submitWeather" class="btn btn-primary"> search city</button>
			</div>
		</div>
		
		<br>
		
		<div class="forecast_container" style="background-color: rgba(255,255,255,1.0);">
		
		<div align="center"><input type="text" id="Option" value="SEOUL" style="text-align: center; border: none; font-size: 40px; font-family: cursive; margin-top: 18px" readonly="readonly"/></div>
		<div style="color: rgba(0,0,0,0);">x</div>
			<div style="clear:both;"></div>
			<div id="show" style="border: 3px dashed gray; width: 410px; height: 280px; float:none; margin: 0 auto;"></div>
			<br/>
				
			<ul class="forecast_form" id="forcast_list">
				<li>
					<div class="forecast_date "><p>10월 10일</p></div><!--  날짜출력  -->
					<div class="forecast_day "><p>화</p></div><!-- 요일출력 -->
					<div class="forecast_icon "><div></div></div><!-- 아이콘 -->
					<div class="forecast_minmax "><p>15도</p></div><!-- 최저온도 최고온도 -->
					<div class="forecast_minmax "><p>10도 20도</p></div><!-- 최저온도 최고온도 -->
				</li>
				
	
				
			</ul>
		</div>	
	</div> <!--  end container -->
</section>

<footer class="footer text-faded text-center py-5">
	<div class="container">
		<p class="m-0 small">Copyright &copy; Your Website 2017</p>
	</div>
</footer>

<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- custom upload Javascript  -->
<script src="js/weather/weather.js"></script>
<script src="js/weather/weatherajax.js"></script>
<!-- 구글차트 -->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>




<!-- 날짜선택기  -->

<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="//code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
<script>
// 날짜 선택기 
$.datepicker.setDefaults({
	    dateFormat: 'yy-mm-dd',
	    prevText: '이전 달',
	    nextText: '다음 달',
	    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	    showMonthAfterYear: true,
	    yearSuffix: '년'
	  });


$(function() {
  $("#datepicker1, #datepicker2").datepicker({ minDate: 0});
});

//날짜 선택기 끝.
</script> -->

<!-- 날짜 선택기 끝.  -->


</body>

</html>
