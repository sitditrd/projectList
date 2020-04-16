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

<title>ticketdetail.jsp</title>

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
		$('#site').hover(function() {
			$(this).css('color', "blue");
		}, function(){
		    $(this).css("color", "white");
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

<!-- Page level plugin CSS-->
<link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">

<!-- Custom styles for this template-->
<link href="css/sb-admin.css" rel="stylesheet">
  
</head>

<body style="background-image: url('img/bg.jpg'); font-family: 'Lora'; background-attachment: fixed; background-position: center; background-size: cover;" id="body">
	<div class="card mb-3" style="width: 60%; height: 100%; background-color: rgba(0,0,0,0); float: none; margin: 0 auto; margin-top: 50px">
	
	<!-- 
		배경색 투명 : background-color: rgba(0,0,0,0)
		카드 가운데 정렬 : float: none; margin: 0 auto;
	 -->
	 
	 <!-- 
		 select option수정방법 : jquery.dataTables.js파일에서 아래의 과정을 거친다.
		1. "aLengthMenu": [ 5, 10, 25, 50, 100 ]에서 추가 후 
		2. "iDisplayLength": 5로 수정하면 select option이 5로 시작한다.
	  -->
	  
	<div class="card-header" align="center">
		<i class="fa fa-table" aria-hidden="true" style="color: white;"></i><span style="font-size: 20px; font-style: italic; font-weight: bold; color: white;"> &nbsp;&nbsp;Ticket Detail View</span>
    </div>
					
	<!-- 리스트 출력 -->
		<div class="row align-items-center justify-content-center">
			<div class="d-flex flex-row m-3">
				<table class="table table-bordered table-responsive m-1" style="color: white;">
					<tbody>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">출발지</td>
							<td class="text-center align-middle">${dto.route_depart_region}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">도착지</td>
							<td class="text-center align-middle">${dto.route_arrive_region}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">출발일</td>
							<td class="text-center align-middle">${dto.route_depart_day}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">출발시간</td>
							<td class="text-center align-middle">${dto.depart_time}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">도착시간</td>
							<td class="text-center align-middle">${dto.arrive_time}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">항공사</td>
							<td class="text-center align-middle">${dto.airline_name}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">항공기종</td>
							<td class="text-center align-middle">${dto.airplane_model}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">항공편명</td>
							<td class="text-center align-middle">${dto.flight_name}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">예상시간</td>
							<td class="text-center align-middle"><span><i class="fa fa-clock-o" aria-hidden="true"></i></span>&nbsp;${dto.route_estimate_time}</td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">사이트</td>
							<td class="text-center align-middle"><a href="${dto.airline_site}" target="_blank" style="color: white;" id="site">${dto.airline_site}</a></td>
						</tr>
						<tr>
							<td class="text-center align-middle" style="font-weight: bold; font-family: monospace; font-size: 15px">총거리</td>
							<td class="text-center align-middle">${dto.route_distance}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
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
