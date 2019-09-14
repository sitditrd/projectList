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
	background-color: #FBEFF2;
}

th {
	background-color: #EFF5FB;
}
</style>

<title>Woman's Shop</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
	$(document).ready(function() {
		$('#category li').click(function() {
			$(".categoryId").attr('value', $(this).index());
			$('#navbarResponsive').attr('action', 'list.do');
			$('#navbarResponsive').submit();
		});

		$('#btn-1').click(function() {
			if ($('#receive_person').val() == "") {
				alert('받는 분을 입력하세요');
				$('#receive_person').focus();
				return false;
			} else if ($('#receive_person').val() == " ") {
				alert('공백은 입력될 수 없습니다.');
				$('#receive_person').focus();
				return false;
			}

			//
			else if ($('#receive_email1').val() == "") {
				alert('이메일을 입력하세요')
				$('#receive_email1').focus();
				return false;
			} else if ($('#receive_email1').val() == " ") {
				alert('공백은 입력될 수 없습니다.')
				$('#receive_email1').focus();
				return false;
			}
			//
			else if ($('#receive_phone2').val() == "") {
				alert('전화번호를 입력하세요');
				$('#receive_phone2').focus();
				return false;
			} else if ($('#receive_phone2').val() == " ") {
				alert('공백은 입력될 수 없습니다.')
				$('#receive_phone2').focus();
				return false;
			} else if ($('#receive_phone3').val() == "") {
				alert('전화번호를 입력하세요');
				$('#receive_phone3').focus();
				return false;
			} else if ($('#receive_phone3').val() == " ") {
				alert('공백은 입력될 수 없습니다.')
				$('#receive_phone3').focus();
				return false;
			}
			//
			else if ($('#sample4_postcode').val() == "") {
				alert('주소를 입력하세요.')
				$('#sample4_postcode').focus();
				return false;
			} else if ($('#sample4_postcode').val() == " ") {
				alert('공백은 입력될 수 없습니다.')
				$('#sample4_postcode').focus();
				return false;
			} else if ($('#sample_jibunAddress').val() == "") {
				alert('상세주소를 입력하세요.')
				$('#sample_jibunAddress').focus();
				return false;
			} else if ($('#sample_jibunAddress').val() == " ") {
				alert('공백은 입력될 수 없습니다.')
				$('#sample_jibunAddress').focus();
				return false;
			} else {
				$('form').attr('action', 'totalorder.do');
				$('form').submit();
			}
			alert('결제가 완료되었습니다.')
		});

		$('#btn-3').click(function() {
			if (confirm('결제를  취소하시겠습니까?')) {
				$('form').attr('action', 'main.do');
				$('form').submit();
				alert('결제를 취소하였습니다.')
			} else {
				location.place('main.do')
			}

		});

		$('#logout').click(function() {
			alert('로그아웃되었습니다.');
		});

	});
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

	<%
		CartDAO dao = CartDAO.getInstance();
		List<CartDTO> arr = new ArrayList<CartDTO>();

		String member_id = (String) session.getAttribute("logOk");
		arr = dao.ViewMethod(member_id);

		int total_price = 0;

		for (int i = 0; i < arr.size(); i++) {
			total_price += Integer.parseInt(arr.get(i).getItem_price());
		}

		//NumberFormat형식을 이용한다.
		NumberFormat fmt = NumberFormat.getCurrencyInstance();
		String res_price = fmt.format(total_price);
	%>

	<div class="container">
		<h1 class="my-4 pageHead">Payment</h1>
		<div class="row">
			<div class="orderListArea">
				<table border="1" width="1200" class="main_table"
					style="margin: auto; text-align: center;">
					<thead>
						<tr>
							<th scope="col" class="index"><h6>
									<strong>번호</strong>
								</h6></th>
							<th scope="col" class="product"><h6>
									<strong>상품명</strong>
								</h6></th>
							<th scope="col" class="price"><h6>
									<strong>가격</strong>
								</h6></th>
							<th scope="col" class="quantity"><h6>
									<strong>개수</strong>
								</h6></th>
							<th scope="col" class="size"><h6>
									<strong>사이즈</strong>
								</h6></th>
						</tr>
					</thead>

					<tbody class="main">
						<c:forEach items="${requestScope.aList}" var="dto"
							varStatus="status" begin="0" step="1">
							<tr class="main_record">
								<td class="index">${status.index+1}</td>

								<td class="product"><img
									src="../shopping/img/${dto.category_id}/${dto.item_name}.GIF"
									style="width: 309px; height: 370px">

									<p style="text-align: center;">${dto.item_name}</p></td>

								<td class="price"><fmt:formatNumber
										value="${dto.item_price}" type="number" />원</td>

								<td class="quantity">${dto.item_amount}개</td>

								<td class="size">${dto.item_size}</td>
							</tr>
						</c:forEach>
					<tfoot>
						<tr>
							<td colspan="5">Total_Price : <%=res_price%>원
							</td>
						</tr>
					</tfoot>
					<!-- /.container -->
				</table>
			</div>
		</div>
	</div>

	<div class="container">
		<h1 class="my-4 pageHead">Order Shipping Place</h1>
		<div class="row">

			<form action="" method="post">
				<table border="1" width="1200" class="main_table">
					<tr>
						<td align="center">받으시는 분</td>
						<td><input type="text" class="col-sm-3" name="receive_person"
							id="receive_person"></input></td>
					</tr>

					<tr>
						<td align="center">이메일</td>
						<td><input type="text" name="receive_email1"
							id="receive_email1"></input> @ <select name="receive_email2"
							style="width: 100px; height: 25px;">
								<option value="naver.com">naver.com</option>
								<option value="hanmail.net">hanmail.net</option>
								<option value="nate.com">nate.com</option>
						</select></td>
					</tr>
					<tr>
						<td align="center">전화번호</td>
						<td><select name="receive_phone1"
							style="width: 100px; height: 25px;">
								<option value="010">010</option>
								<option value="011">011</option>
								<option value="016">016</option>
								<option value="017">017</option>
								<option value="019">019</option>
								<option value="070">070</option>
						</select> - <input type="text" name="receive_phone2" id="receive_phone2"
							maxlength="10"></input> - <input type="text"
							name="receive_phone3" id="receive_phone3" maxlength="10"></input></td>
					</tr>
					<tr>
						<td align="center" style="margin: auto; text-align: center;">주소</td>
						<td><input type="text" id="sample4_postcode"
							name="receive_address1" size="60" placeholder="지번+주소"></input>
							&nbsp; <input type="button" id="sample4_postcode"
							class="btn btn-default" value="우편번호체크"
							onClick="sample4_execDaumPostcode()"></input> <br> </br> <input
							type="text" id="sample_jibunAddress" name="receive_address2"
							placeholder="상세주소" size="30"></input></td>
					</tr>

					<tr>
						<td align="center">결제방식</td>
						<td><select name="paymethod">
								<option value="계좌이체">계좌이체</option>
								<option value="신용카드">신용카드</option>
								<option value="문화상품권">문화상품권</option>
						</select></td>
					</tr>

					<tr>
						<td align="center">총결제금액</td>
						<td><input name="total_price" value="<%=res_price%>원"></input>
							<input type="hidden" name="total_price" value="<%=res_price%>">
						</td>
					</tr>

					<tr>
						<td colspan="2" align="center"><input type="button"
							class="btn btn-primary" value="결제하기" id="btn-1"></input> <input
							type="reset" class="btn btn-danger" value="취소하기" id="btn-3"></input>
						</td>
					</tr>

				</table>
			</form>
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
	<!-- 우편 -->
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>

</body>

</html>
