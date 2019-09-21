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

<title>Airline Ticketing System</title>

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
	function logout() {
		alert("로그아웃 되었습니다.");
	}
</script>

<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<!-- Custom fonts for this template-->
<link rel="stylesheet"
   href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

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

<!-- Owl Carousel Assets -->
<link rel="stylesheet" href="assets/css/owl.carousel.css">
<link rel="stylesheet" href="assets/css/owl.carousel.min.css">
<link rel="stylesheet" href="assets/css/owl.theme.default.min.css">

<!-- Custom  Design assets -->
<link rel="stylesheet" type="text/css" href="assets/css/main.css">
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
		<div align="right" style="color: #111111c9 !important">
				<ul class="navbar-nav mx-auto" style="background-color: #111111c9 !important">
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

              <li class="nav-item px-lg-4">
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
   <section class="page-section clearfix">
      <div class="container">
         <div class="intro">
            <div id="carouselExampleIndicators" class="carousel slide"
               data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0"
                     class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                     <img class="intro-img img-fluid mb-3 mb-lg-0 rounded"
                        src="img/main3.jpg" alt="" />
                     <div class="carousel-caption d-none d-md-block">
                     
                     </div>
                  </div>
                  <div class="carousel-item">
                     <img class="intro-img img-fluid mb-3 mb-lg-0 rounded"
                        src="img/main2.jpg" alt="">
                     <div class="carousel-caption d-none d-md-block">
                     
                     </div>
                  </div>
                  <div class="carousel-item">
                     <img class="intro-img img-fluid mb-3 mb-lg-0 rounded"
                        src="img/main.jpg" alt="">
                     <div class="carousel-caption d-none d-md-block">
                     
                     </div>
                  </div>

                  <div class="intro-text left-0 text-center bg-faded p-5 rounded" style="background-color: rgba(0,0,0,0.3)">
                     <h2 class="section-heading mb-4">
                        <span class="section-heading-upper" style="color: white; font-family: sans-serif; font-size : 23px; text-align: center; font-style: italic;">Today's Weather</span> 
                     </h2>


<!-- weather widget start -->
<div id="m-booked-bl-simple-week-vertical-48942" style="margin-bottom: 20px"> 
<div class="booked-wzs-160-275 weather-customize" style="background-color:#4987c9; width:350px;" id="width4 " >
 <a target="_blank" class="booked-wzs-top-160-275" href="http://www.booked.net/">
 <img src="//s.bookcdn.com/images/letter/s5.gif" alt="booked.net" /></a>
  <div class="booked-wzs-160-275_in"> <div class="booked-wzs-160-275-data"> 
  <div class="booked-wzs-160-275-left-img wrz-22"></div>
   <div class="booked-wzs-160-275-right">
    <div class="booked-wzs-day-deck">
     <div class="booked-wzs-day-val"> 
     <div class="booked-wzs-day-number">-7</div> 
     <div class="booked-wzs-day-dergee"> 
     <div class="booked-wzs-day-dergee-val">&deg;</div>
      <div class="booked-wzs-day-dergee-name">C</div>
       </div> 
       </div> 
       <div class="booked-wzs-day">
                                          <div class="booked-wzs-day-d">-7&deg;</div>
                                          <div class="booked-wzs-day-n">-7&deg;</div> </div> </div> <div class="booked-wzs-160-275-info"> <div class="booked-wzs-160-275-city">서울특별시</div> <div class="booked-wzs-160-275-date">금요일, 02</div> </div> </div> </div> <a target="_blank" href="http://booked.kr/weather/seoul-18406" class="booked-wzs-bottom-160-275" > <table cellpadding="0" cellspacing="0" class="booked-wzs-table-160"> <tr> <td class="week-day"> <span class="week-day-txt">목요일</span></td> <td class="week-day-ico"><div class="wrz-sml wrzs-01"></div></td> <td class="week-day-val">-7&deg;</td> <td class="week-day-val">-7&deg;</td> </tr> <tr> <td class="week-day"> <span class="week-day-txt">토요일</span></td> <td class="week-day-ico"><div class="wrz-sml wrzs-22"></div></td> <td class="week-day-val">-9&deg;</td> <td class="week-day-val">-14&deg;</td> </tr> <tr> <td class="week-day"> <span class="week-day-txt">일요일</span></td> <td class="week-day-ico"><div class="wrz-sml wrzs-01"></div></td> <td class="week-day-val">-9&deg;</td> <td class="week-day-val">-16&deg;</td> </tr> <tr> <td class="week-day"> <span class="week-day-txt">월요일</span></td> <td class="week-day-ico"><div class="wrz-sml wrzs-01"></div></td> <td class="week-day-val">-6&deg;</td> <td class="week-day-val">-19&deg;</td> </tr> <tr> <td class="week-day"> <span class="week-day-txt">화요일</span></td> <td class="week-day-ico"><div class="wrz-sml wrzs-01"></div></td> <td class="week-day-val">-3&deg;</td> <td class="week-day-val">-16&deg;</td> </tr> <tr> <td class="week-day"> <span class="week-day-txt">수요일</span></td> <td class="week-day-ico"><div class="wrz-sml wrzs-01"></div></td> <td class="week-day-val">-4&deg;</td> <td class="week-day-val">-17&deg;</td> </tr> </table> <div class="booked-wzs-center"> <span class="booked-wzs-bottom-l">7일 예보 보기</span> </div> </a> </div> </div><script type="text/javascript"> var css_file=document.createElement("link"); css_file.setAttribute("rel","stylesheet"); css_file.setAttribute("type","text/css"); css_file.setAttribute("href",'https://s.bookcdn.com/css/w/booked-wzs-widget-160x275.css?v=0.0.1'); document.getElementsByTagName("head")[0].appendChild(css_file); function setWidgetData(data) { if(typeof(data) != 'undefined' && data.results.length > 0) { for(var i = 0; i < data.results.length; ++i) { var objMainBlock = document.getElementById('m-booked-bl-simple-week-vertical-48942'); if(objMainBlock !== null) { var copyBlock = document.getElementById('m-bookew-weather-copy-'+data.results[i].widget_type); objMainBlock.innerHTML = data.results[i].html_code; if(copyBlock !== null) objMainBlock.appendChild(copyBlock); } } } else { alert('data=undefined||data.results is empty'); } } </script> <script type="text/javascript" charset="UTF-8" src="https://widgets.booked.net/weather/info?action=get_weather_info&ver=6&cityID=18406&type=4&scode=124&ltid=3457&domid=593&anc_id=44570&cmetric=1&wlangID=24&color=4987c9&wwidth=350&header_color=ffffff&text_color=333333&link_color=08488D&border_form=1&footer_color=ffffff&footer_text_color=333333&transparent=0"></script><!-- weather widget end -->
                     
                                          <div class="intro-button mx-auto">
                        <a class="btn btn-warning btn-xl" href="weatherinfo.do" style="opacity: 0.8">Visit Us Weather!</a>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Welcome Message -->
            <div class="text-center mt-4">
               <div class="text-heading text-muted text-lg">Welcome To
                  Airplane</div>
            </div>
         </div>
      </div>
      
         <div class="container" align="center" style="margin-top: 50px">
            <div>
               <iframe src="https://player.vimeo.com/video/187094433?color=383838&title=0&byline=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
               
               <div class="text-center mt-4">
                        <div class="text-heading text-muted text-lg"> SHARE THIS WITH YOUR FRIENDS </div>
                    </div>
                    
                    <br/>
                    
               <div class="social">
                  <ul>
                     <li><a href="#" class="fa fa-pinterest fa-2x" aria-hidden="true"></a></li>
                     <li><a href="#" class="fa fa-twitter fa-2x" aria-hidden="true"></a></li>
                     <li><a href="#" class="fa fa-linkedin fa-2x" aria-hidden="true"></a></li> 
                  </ul>
               </div>
            </div>
         </div>
    </div>
   </section>

	
   <section class="page-section cta" style="background-color: #111111b5">
      <div class="container">
         <div class="row">
            <div class="col-xl-9 mx-auto">
               <div class="cta-inner text-center rounded">
                  <h2 class="section-heading mb-4">
                     <span class="section-heading-upper">Our Promise</span> <span
                        class="section-heading-lower">To You</span>
                  </h2>
                  <p class="mb-0">When you walk into our shop to start your day,
                     we are dedicated to providing you with friendly service, a
                     welcoming atmosphere, and above all else, excellent products made
                     with the highest quality ingredients. If you are not satisfied,
                     please let us know and we will do whatever we can to make things
                     right!</p>
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

</html>