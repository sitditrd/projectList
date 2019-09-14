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

<title>notice.jsp</title>

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

<!-- Page level plugin CSS-->
<link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">

<!-- Custom styles for this template-->
<link href="css/sb-admin.css" rel="stylesheet">
  
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
	
	<div class="card-header" align="center">
		<span style="font-size: 50px; font-style: italic; font-weight: bold;">Notice</span>
    </div>
    
    <br/><br/>
    
	<div class="card mb-3" style="width: 60%; background-color: rgba(0,0,0,0); float: none; margin: 0 auto;" align="left">
	
	<!-- 
		배경색 투명 : background-color: rgba(0,0,0,0)
		카드 가운데 정렬 : float: none; margin: 0 auto;
	 -->
	 
	 <!-- 
		 select option수정방법 : jquery.dataTables.js파일에서 아래의 과정을 거친다.
		1. "aLengthMenu": [ 5, 10, 25, 50, 100 ]에서 추가 후 
		2. "iDisplayLength": 5로 수정하면 select option이 5로 시작한다.
	  -->
	  
	<div class="card-header" align="left">
		<i class="fa fa-table" aria-hidden="true"></i><span style="font-size: 20px; font-style: italic; font-weight: bold;"> &nbsp;&nbsp;Notice Table</span>
    </div>
    
	<!-- 리스트 출력 -->
		<div class="card-body">
			<div class="table-responsive">
					<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
						<thead>
							<tr>
								<th class="text-center" style="width: 15%">번호</th>
								<th class="text-center" style="width: 70%">제목</th>
								<th class="text-center" style="width: 15%">작성일</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${aList}" var="dto">
							<tr>
								<td class="text-center">${dto.notice_id}</td>
								
								<!-- 전달되는 파라미터가 여러개일 때 c:url을 이용 -->
								<td class="boardSubject">
								<c:url var="content" value="noticedetail.do">
									<c:param name="currentPage" value="${pv.currentPage}"/>
									<c:param name="num" value="${dto.notice_id}"/>
								</c:url>
								<a href="${content}" onMouseover="this.style.color='red'" onMouseout="this.style.color='black';" style="color: black;">${dto.notice_subject}</a>
								</td>
								
								<!-- 전달되는 파라미터가 1개일때는 아래와 같이 한다. -->
								<%-- <td class="text-center"><a href="view.do?num=${dto.notice_id}">${dto.notice_subject}</a></td>  --%>
								
								<td>${dto.notice_date}</td>
							</tr>
							</c:forEach>
						</tbody>
					</table>
			   </div>
			   <br/>
			   
			   <c:if test="${not empty sessionScope.adminOk}">
			   		<a class="btn page-link float-right" href="noticewriteform.do?currentPage=${pv.currentPage}" style="margin-right: 17px">글쓰기</a>
			   </c:if>
		</div>
	</div>
	
		<%-- <!-- 페이지 출력 시작 -->
		<p align="center">
		<!-- 페이지 이전  -->
		<c:if test = "${pv.startPage > 1}">
			<a href ="notice.do?currentPage=${pv.startPage - pv.blockPage}&searchKey=${pv.searchKey}&searchWord=${pv.searchWord}">&lt&lt</a>
		</c:if>
		
		<!-- 페이지를 출력하기 위해 -->
		<!-- request영역에 지정되어있는 값은 아래처럼 출력가능. -->
		<c:forEach begin="${pv.startPage}" end="${pv.endPage}" var="i">
			<span><a href="notice.do?currentPage=${i}&searchKey=${pv.searchKey}&searchWord=${pv.searchWord}">${i}</a></span> 
		<!-- notice.do를 실행하면서 클릭한 페이지 값을 넘겨주어야 한다. 그러면 ListAction에서 pageNum값에 따라서 PageDTO pdto가 적용이되고 listmethod(pdto)가 호출이된다.-->
		</c:forEach>
		
		<!-- 페이지 다음  -->
		<!-- end page가 total page보다 작을때만 다음버튼이 활성화 되야 한다. -->
		<c:if test = "${pv.endPage < pv.totalPage}">
			<a href ="notice.do?currentPage=${pv.startPage + pv.blockPage}&searchKey=${pv.searchKey}&searchWord=${pv.searchWord}">&gt&gt</a>
		</c:if>
		</p> --%>
		
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
	<!-- Page level plugin JavaScript-->
    <script src="vendor/datatables/jquery.dataTables.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.js"></script>
	<!-- Custom scripts for this page-->
    <script src="js/sb-admin-datatables.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin.min.js"></script>
</body>

<!-- Script to highlight the active date in the hours list -->
<script>
	$('.list-hours li').eq(new Date().getDay()).addClass('today');
</script>

</html>
