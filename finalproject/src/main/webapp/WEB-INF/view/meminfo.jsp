<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page session="true" %>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>mypage.jsp</title>

<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}

#btn-1, #btn-2, #btn-3 {
	letter-spacing: 0;
	-webkit-transition: all .28s ease-in-out;
	transition: all .28s ease-in-out;
}

#btn-1:hover,
#btn-1:focus,
#btn-1:active,
#btn-2:hover,
#btn-2:focus,
#btn-2:active,
#btn-3:hover,
#btn-3:focus,
#btn-3:active {
	letter-spacing: 5px;
}

#btn-1:after,
#btn-1:before,
#btn-2:after,
#btn-2:before,
#btn-3:after,
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

#btn-1:hover:after,
#btn-1:hover:before,
#btn-2:hover:after,
#btn-2:hover:before,
#btn-3:hover:after,
#btn-3:hover:before {
	border-color: #fff;
	-webkit-transition: width 350ms ease-in-out;
	transition: width 350ms ease-in-out;
	width: 70%;
}

#btn-1:hover:before,
#btn-2:hover:before,
#btn-3:hover:before {
	bottom: auto;
	top: 0;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
	function sample4_execDaumPostcode() {
		new daum.Postcode(
				{
					oncomplete : function(data) {
						// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

						// 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
						// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
						var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
						var extraRoadAddr = ''; // 도로명 조합형 주소 변수

						// 법정동명이 있을 경우 추가한다. (법정리는 제외)
						// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
						if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
							extraRoadAddr += data.bname;
						}
						// 건물명이 있고, 공동주택일 경우 추가한다.
						if (data.buildingName !== '' && data.apartment === 'Y') {
							extraRoadAddr += (extraRoadAddr !== '' ? ', '
									+ data.buildingName : data.buildingName);
						}
						// 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
						if (extraRoadAddr !== '') {
							extraRoadAddr = ' (' + extraRoadAddr + ')';
						}
						// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
						if (fullRoadAddr !== '') {
							fullRoadAddr += extraRoadAddr;
						}

						// 우편번호와 주소 정보를 해당 필드에 넣는다.
						document.getElementById('sample4_postcode').value = data.zonecode
								+ "  " + fullRoadAddr; //5자리 새우편번호 사용
						document.getElementById('sample4_roadAddress').value = fullRoadAddr;
						document.getElementById('sample4_jibunAddress').value = data.jibunAddress;

						// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
						if (data.autoRoadAddress) {
							//예상되는 도로명 주소에 조합형 주소를 추가한다.
							var expRoadAddr = data.autoRoadAddress
									+ extraRoadAddr;
							document.getElementById('guide').innerHTML = '(예상 도로명 주소 : '
									+ expRoadAddr + ')';

						} else if (data.autoJibunAddress) {
							var expJibunAddr = data.autoJibunAddress;
							document.getElementById('guide').innerHTML = '(예상 지번 주소 : '
									+ expJibunAddr + ')';

						} else {
							document.getElementById('guide').innerHTML = '';
						}
					}
				}).open();
	}
</script>

<script type="text/javascript">
var flag;
	$(document).ready(function() {
		
	});
	
	function logout() {
		alert("로그아웃 되었습니다.");
	}
	
	function back() {
		history.back(1);
	}
	
	//아이디 중복체크
	function overlapCheck() {
		
	}

	function viewMessage(res){

	}

	function checkValue() {
			var check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
			var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	
			var pwd = $('#fpass').val();
			var name = $('#fname').val();
			var birth = $('#fbirth').val();
		    var phone = $('#ftel').val();
			var email = $('#femail').val();
			var addr = $('#faddr').val();
	
			if ($('#fid').val() == '') {
				alert('아이디를 입력하세요.');
				$('#fid').focus();
				return false;
	
			} else if ($('#fpass').val() == '') {
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
	
			} else if ($('#fname').val() == '') {
				alert('이름을 입력하세요.');
				$('#fname').focus();
				return false;
	
			} else if (special_pattern.test(name)) {
				alert('이름에 특수 문자는 사용할 수 없습니다.');
				$('#fname').focus();
				return false;
	
			} else if (phone.length < 12) {
				alert('전화번호를 입력하세요.');
				$(this).focus();
				return false;
	
			} else if (birth.length < 8) {
				alert('생년월일를 입력하세요.');
				$(this).focus();
				return false;
	
			} else if (special_pattern.test(phone)) {
				alert('전화번호에 특수 문자는 사용할 수 없습니다.');
				$(this).focus();
				return false;
	
			} else if (special_pattern.test(birth)) {
				alert('생년월일에 특수 문자는 사용할 수 없습니다.');
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
			} else if ($('#sample4_postcode').val() == "") {
				alert('주소를 입력하세요.')
				$('#sample4_postcode').focus();
				return false;
			} else if ($('#sample4_postcode').val() == " ") {
				alert('공백은 입력될 수 없습니다.')
				$('#sample4_postcode').focus();
				return false;
			} else {
				alert("사용자 정보가 변경 되었습니다.");
			}
	 }
	
	function godeleteform() {
		if (confirm("회원탈퇴 하시겠습니까?")) {
			alert("회원탈퇴가 되었습니다.")
			location.href = "delete.do"
		} else {
			alert("회원탈퇴가 취소되었습니다.")
		}
		return false;
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
	<section class="page-section cta">
		  <div class="container" style="width:800px">
    <div class="card card-register mx-auto mt-5">
      <div class="card-header" style="font-size: 40px; font-style: italic;" align="center">Mypage</div>
      <div class="card-body">
        <form name="frm" action="modify.do" method="post" onsubmit="return checkValue()">
          <div class="form-group">
            <label for="exampleInputEmail1" style="font-style: italic;">ID</label>
            <input class="form-control" name="member_id" id="fid" type="text" aria-describedby="emailHelp" value="${sessionScope.logOk}" readonly="readonly">
          </div>
          <br/>
          <div class="form-group">
            <label for="exampleInputEmail1" style="font-style: italic;">Password</label>
            <input class="form-control" name="member_pwd" id="fpass" type="password" aria-describedby="emailHelp" value="${dto.member_pwd}">
          </div>
         
          <div class="form-group">
            <label for="exampleInputEmail1" style="font-style: italic;">Name</label>
            <input class="form-control" name="member_name" id="fname" type="text" aria-describedby="emailHelp"  value="${dto.member_name}" >
          </div>
          
          <div class="form-group">
            <label for="exampleInputEmail1" style="font-style: italic;">Birth</label>
            <input class="form-control" name="member_birth" id="fbirth" type="text" aria-describedby="emailHelp" value="${dto.member_birth}">
          </div>
            
         <div class="form-group">
            <label for="exampleInputEmail1" style="font-style: italic;">Tel</label>
            <input class="form-control" name="member_tel" id="ftel" type="text" aria-describedby="emailHelp" value="${dto.member_tel}">
          </div>
          
          <div class="form-group">
            <label for="exampleInputEmail1" style="font-style: italic;">Email</label>
            <input class="form-control" name="member_email" id="femail" type="email" aria-describedby="emailHelp" value="${dto.member_email}">
          </div>
          
           <div class="form-group">
            <label for="exampleInputEmail1" style="font-style: italic;">Address</label>
            <input class="form-control" name="member_addr" id="sample4_postcode" type="text" aria-describedby="emailHelp" placeholder="Enter Address" value="${dto.member_addr}">
			<input type="button" id="sample4_postcode" class="btn btn-default" value="우편번호체크" onClick="sample4_execDaumPostcode()" style="margin-top: 10px;">
          </div>
          
          <button class="btn btn-primary btn-block" type="submit" id="btn-2">Modfiy</button>
        </form>
        
         <a class="btn btn-success btn-block" href="#" onclick="godeleteform()" id="btn-3" style="margin-top: 10px">Leave</a>
         <a class="btn btn-danger btn-block" href="#" onclick="back()" id="btn-3" style="margin-top: 10px">Cancel</a>
     
      </div>
    </div>
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

<!-- 우편 -->
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>

</html>
