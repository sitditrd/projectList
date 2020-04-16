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

<title>incheon.jsp</title>

<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}

#map {
	width: 100%;
	height: 500px;
}

.controls {
	margin-top: 10px;
	border: 1px solid transparent;
	border-radius: 2px 0 0 2px;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	height: 32px;
	outline: none;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

#searchInput {
	background-color: #fff;
	font-family: Roboto;
	font-size: 15px;
	font-weight: 300;
	margin-left: 12px;
	padding: 0 11px 0 13px;
	text-overflow: ellipsis;
	width: 50%;
}

#searchInput:focus {
	border-color: #4d90fe;
}

#selecttable {
	background-color: transparent;
	margin-left: 70px;
	margin-bottom: 50px;
	color: white;
	font-size: 20px;
	display: inline-grid;
}

label {
	margin-right: 10px;
}

#btn {
	background: #d00b40;
	border: 1px solid #d00b40;
	color: #fff;
	line-height: 36px;
	height: 36px;
	font-size: 1em !important;
	border-radius: 5px;
}

#btn:hover {
	background: #fff;
	color: #d00b40;
}

</style>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 35.5493932, lng: 139.77983859999995},
      zoom: 13
    });
    var input = document.getElementById('searchInput');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
  
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
      
        //Location details
        for (var i = 0; i < place.address_components.length; i++) {
            if(place.address_components[i].types[0] == 'postal_code'){
                document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
            }
            if(place.address_components[i].types[0] == 'country'){
                document.getElementById('country').innerHTML = place.address_components[i].long_name;
            }
        }
        document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').innerHTML = place.geometry.location.lat();
        document.getElementById('lon').innerHTML = place.geometry.location.lng();
    });
}
   $(document).ready(function() {

      $('#btn').click(function(){
         var select = $('input:radio[name="stay"]:checked').val();
         $.ajax({
            type:'GET',
            dataType:'xml',
            url:'searchIncheon.do?sigunguCode='+$("#sidonggu option:checked").val()+'&select='+$('input:radio[name="stay"]:checked').val(),
            success:viewMessage,
            error:function(xhr, textStatus, error){
               alert(xhr.status);
            }
         });
      });
   });
   
   function logout() {
      alert("로그아웃 되었습니다.");
   }
   

   
   function viewMessage(res){   //res : controller의 total값을 받는 변수
      $('.listing-block').empty();

      console.log(res);
      var xmlData = $(res).find("item");
	  
      $.each(xmlData, function(index,value){

         $('.listing-block').append('<div class="media" id="'+$(this).find("addr1").text()+'">'
                        +'<img class="d-flex align-self-start" src="'+$(this).find("firstimage").text()+'">'
                        +'<div class="media-body pl-3">'
                        + '<div class="price">'+$(this).find("title").text()+'</div>'
                        +'<div class="address">'+$(this).find("addr1").text() + $(this).find("addr2").text() +'</div>'
                        +'<div class="tel">'+$(this).find("tel").text()+'</div>'
                        +'</div></div>');
         
         
         //$('.media table').append("<tr><td>"+$(this).find("addr1").text()+"</td><td><img src='"+$(this).find("firstimage").text()+"'/></td></tr>");
      });
      
      $('.media').click(function(){

    	 $.ajax({
             type:'GET',
             url:'map.do?addr='+$(this).attr('id'),
             success:mapMessage,
             error:function(xhr, textStatus, error){
                alert(xhr.status);
             }
          });
    
      });
         
   }
   
   function mapMessage(res){
	   console.log(res);

	  $('#searchInput').val(res);
   }
   

  
</script>

<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<link href="vendor/bootstrap/css/bootstrap.search.css" rel="stylesheet">


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

<!-- Page level plugin CSS-->
<link href="vendor/datatables/dataTables.bootstrap4.css"
	rel="stylesheet">

<!-- Custom styles for this template-->
<link href="css/sb-admin.css" rel="stylesheet">

</head>

<body
	style="background-image: url('img/bg.jpg'); font-family: 'Lora'; background-attachment: fixed; background-position: center; background-size: cover;"
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
						class="list-link text-uppercase text-expanded" href="search.do"
						id="link">search</a></li>
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
						class="list-link text-uppercase text-expanded" href="main.do"
						id="link">reserve</a> <a
						class="list-link text-uppercase text-expanded" href="mypage.do"
						id="link">mypage</a> <a
						class="list-link text-uppercase text-expanded" href="search.do"
						id="link">search</a></li>
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
					class="list-link text-uppercase text-expanded" href="adminpage.do"
					id="link">adminpage</a> <a
					class="list-link text-uppercase text-expanded" href="search.do"
					id="link">search</a></li>
			</ul>
		</div>
	</c:if>

	<h1 class="site-heading text-center text-white d-none d-lg-block">
		<span class="site-heading-upper text-primary mb-3"><a
			href="home.do" style="color: #FFAA28; text-decoration: none;">The
				AirLine Ticketing System</a></span> <span class="site-heading-lower"><a
			href="home.do" style="color: white; text-decoration: none;">C_Trip</a></span>
		<i class="fa fa-plane" aria-hidden="true"></i>
	</h1>

	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav"
		style="background-color: #111111b5">
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

					<li class="nav-item active px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="main.do"><i
							class="fa fa-fighter-jet" aria-hidden="true" id="link"></i>
							&nbsp;항공권 <span class="sr-only">(current)</span></a></li>

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="weather.do"><i
							class="fa fa-sun-o" aria-hidden="true"></i> &nbsp;날씨</a></li>

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="rate.do"><i
							class="fa fa-krw" aria-hidden="true"></i> &nbsp;환율</a></li>

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="time.do"><i
							class="fa fa-calendar" aria-hidden="true"></i> &nbsp;시차</a></li>

				</ul>
			</div>
		</div>
	</nav>
	<section class="page-section cta"
		style="background-color: rgba(0, 0, 0, 0.5)">
		<section class="head">
			<div class="container">
				<h2 class="text-center">
					<span>Search Result Location</span> 
				</h2>
			</div>
		</section>

		<table id="selecttable">

			<colgroup>
				<col width="20%" />
				<col width="80%" />
			</colgroup>
			<tr>
				<th style="padding-right: 70px; padding-bottom: 10px">지역</th>
				<td style="padding-bottom: 10px"><select>
						<option value="2" selected="selected">인천</option>
				</select> <select id="sidonggu" style="margin-left: 20px">
						<option value="" selected="selected">시군구 선택</option>
						<option value="1">강화군</option>
						<option value="2">계양구</option>
						<option value="3">남구</option>
						<option value="4">남동구</option>
						<option value="5">동구</option>
						<option value="6">부평구</option>
						<option value="7">서구</option>
						<option value="8">연수구</option>
						<option value="9">옹진구</option>
						<option value="10">중구</option>
				</select></td>
			</tr>

			<tr>
				<th>숙박선택</th>
				<td><label for="all"><input type="radio" name="stay"
						value="" checked="checked" id="all">전체</label> <label
					for="goodStay"><input type="radio" name="stay"
						value="goodStay=1" id="goodStay">굿스테이</label> <label for="hanOk"><input
						type="radio" name="stay" value="hanOk=1" id="hanOk">한옥</label> <label
					for="benikia"><input type="radio" name="stay"
						value="benikia=1" id="benikia">베니키아</label> <input type="button"
					id="btn" value="검색" /></td>
			</tr>
		</table>

		<div class="clearfix"></div>
		<section class="search-box">
			<div class="container-fluid">
				<div class="row" style="width: 1900px;">
					<div class="col-md-5 listing-block"
						style="background-color: rgba(0, 0, 0, 0.5);"></div>

					<div class="col-md-7 map-box mx-0 px-0">
						<div id="map"
							style="width: 1100px; height: 600px; margin-left: 50px;"></div>
						<script
							src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAvw4f6_2MaLmUa65wOpfCD6-piC_zYIRw&libraries=places&callback=initMap"
							async defer></script>
						<br />
						<div class="container">
							<div class="row">
								<input id="searchInput" class="controls" type="text"
									placeholder="Enter a location">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>


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
	<script src="vendor/jquery/jquery.search.js"></script>


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