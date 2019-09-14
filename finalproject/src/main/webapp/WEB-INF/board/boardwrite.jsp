<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>boardwrite.jsp</title>

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

	$(document).ready(function(){
		 $('#btnList').bind('click',function(){
			 $('#frm').attr('action','boardlist.do').submit();		
		 });
		  
		 $('#btnSave').bind('click',function(){
			 $('[name=content]').val($('[name=content]').val().replace(/\n/gi, '<br/>'));			
			 $('#frm').attr('action','boardwrite.do').submit();
		 });
		
		 //첨부파일 용량체크
		 $('#filepath').on('change',function(){						 
			if(this.files && this.files[0]){				 
				if(this.files[0].size>1000000000){
					alert("1GB바이트 이하만 첨부할 수 있습니다.");				
					$('#filepath').val('');				
					return false;
				}				
		    }
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
		<span class="site-heading-upper text-primary mb-3"><a href="main.do" style="color: #FFAA28; text-decoration: none;">The AirLine Ticketing System</a></span> 
		<span class="site-heading-lower"><a href="main.do" style="color: white; text-decoration: none;">C_Trip</a></span>
		<i class="fa fa-plane" aria-hidden="true"></i>
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

	<div class="card-header" align="center">
		<span style="font-size: 50px; font-style: italic; font-weight: bold;">Notice</span>
    </div>
	
	<br/><br/>
	<!-- 리스트 출력 -->
	<div class="container">
	
	<div class="card-header" align="left">
		<i class="fa fa-cog fa-spin fa-2x fa-fw"></i><span style="font-size: 20px; font-style: italic; font-weight: bold;"> &nbsp;&nbsp;BoardWrite Table</span>
	</div>
		<form name="frm" id="frm" method="post" enctype="multipart/form-data">

		<table class="table table-bordered" width="100%" cellspacing="0">

			<tr>
				<td width="20%" align="center">글쓴이</td>
				<td>
					<c:if test="${empty sessionScope.adminOk}">
						<input type="text" name="writer" size="100%" maxlength="10" style="background: none; border: none;" value="${sessionScope.logOk}" readonly="readonly"/>
					</c:if>
					
					<c:if test="${not empty sessionScope.adminOk}">
						<input type="text" name="writer" size="100%" maxlength="10" style="background: none; border: none;" value="${sessionScope.adminOk}" readonly="readonly"/>
					</c:if>
				</td>
			</tr>

			<tr>
				<td width="20%" align="center">Email</td>
				<td><input name="email" size="100%" type="email" aria-describedby="emailHelp" maxlength="30" style="background: none; border: none;" placeholder="Enter Email."/></td>
			</tr>

			<tr>
			<td width="20%" align="center">제목</td>
				<td>				
				<c:if test="${dto!=null}">
				<div style="font-size: 15ffpx; font-style: italic; font-weight: bold;">[ 답변 &nbsp;]</div>
				</c:if> 			 
				
				<!-- <input type="text" name="subject" size="100" style="background: none; border: none;" placeholder="Enter Reply."/> -->
				<select name="subject" style="background: none; border: 0.5px dotted black; margin-top: 10px">
					<option value="all">전체보기</option>
					<option value="티켓상품문의">티켓상품문의</option>
					<option value="티켓 상품변경/취소문의">티켓 상품변경/취소문의</option>
					<option value="티켓 반품/교환문의">티켓 반품/교환문의</option>
					<option value="예약문의">예약문의</option>
					<option value="입금문의">입금문의</option>
					<option value="기타문의">기타문의</option>
				</select> 
				</td>
			</tr>

			<tr>
				<td width="20%" align="center">내용</td>
				<td><textarea name="content" rows="13" cols="102" style="background: none; border: none;" placeholder="Enter Content."></textarea></td>
			</tr>

			<tr>
				<td width="20%" align="center">첨부파일</td>
				<td><input type="file" name="filename" id="filepath"/>
			</tr>
		</table>
		
			<!-- 답변글일때.... -->
			 <c:if test="${dto!=null}">
				<input type="hidden" name="num" id="num" value="${dto.num}" />
				<input type="hidden" name="currentPage" id="currentPage" value="${currentPage}" />
				<input type="hidden" name="ref" value="${dto.ref}" />
				<input type="hidden" name="re_step" value="${dto.re_step}" />
				<input type="hidden" name="re_level" value="${dto.re_level}" />
			</c:if> 
			
			<input class="btn page-link float-right" type="button" id="btnSave" value="저장" />
			<input class="btn page-link float-right" type="button" id="btnList" value="리스트" style="margin-right: 13px;"/> 
		</form>
	</div>
	
	</section>
	
	<section class="page-section about-heading">
		<div class="container">
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
