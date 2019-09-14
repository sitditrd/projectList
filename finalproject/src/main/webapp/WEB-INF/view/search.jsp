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

<title>search.jsp</title>

<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}
</style>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">

	$(document).ready(function() {
		
	});
	
	function logout() {
		alert("로그아웃 되었습니다.");
	}
</script>

<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<link href="vendor/bootstrap/css/bootstrap.search.css" rel="stylesheet">

<link href="vendor/bootstrap/css/bootstrap.search2.css" rel="stylesheet">


</head>

<body>

<section class="page-section cta">

<div id="bk-wrap">
      <div id="bk-no-blur"></div>
      <div id="bk-blur"></div>
    </div>

    <div id="bk-shadow"></div>
    <p id="logo">Travel Hotel</p>
    <a href="#" id="menu-link">
      <span class="menu-sub">Browse Our</span>
      <span class="menu-main">Searchs</span>
    </a>
    <div id="menu-wrap">
      <div id="menu-inner">
        <h1 id="menu-title">Menus</h1>
        <a href="#" id="close">x</a>
        <div id="menu-cards">
          <div class="menu-card">
            <a href="incheon.do"><img src="http://chulsa.kr/files/attach/images/71/480/305/813_7.jpg" alt="Incheon International Airport"></a>
            <h3 align="center">Domestic Search Process</h3>
          </div>
          <div class="menu-card">
            <a href="haneda.do"><img src="http://www.cinecine.co.kr/forum/img_attach/2011/06/20110609161244.jpg" alt="Haneda Airport"></a>
            <h3 align="center">Oversee Search Process</h3>
          </div>
          <div class="menu-card">
            <a href="team.do"><img src="https://t-ec.bstatic.com/images/hotel/max1280x900/439/43915613.jpg" alt="drinks"></a>
            <h3 align="center">Project Team</h3>
          </div>
        </div>
      </div>
    </div>
<script>
    
  var $menuWrap = $('#menu-wrap'),
    $body = $('body'),
    $menuTitle = $('#menu-title'),
    $close = $('#close'),
    $menuCards = $('.menu-card'),
    $menuInner = $('#menu-inner'),
    $menuLink = $('#menu-link');

  setCardHeight();
  $(window).resize(setCardHeight);

  $menuLink.on('click', function(e) {
    e.preventDefault();
    showOverlay();
  });

  $close.on('click', function(e) {
    e.preventDefault();
    hideOverlay();
  });

  function showOverlay() {
    $body.addClass('menu-on');
    $menuWrap.addClass('display').addClass('visible');
    setTimeout(function() {
      $menuTitle.addClass('on');
      $close.addClass('on');
    }, 200);
    $menuCards.each(function(i) {
      var $card = $(this);
      setTimeout(function() {
        $card.addClass('on');
      }, 200 + 50 * i);
    });
  }

  function hideOverlay() {
    $body.removeClass('menu-on');
    $menuCards.removeClass('on');
    $menuTitle.removeClass('on');
    $close.removeClass('on');
    setTimeout(function() {
      $menuWrap.removeClass('display').removeClass('visible');
    }, 350);
  }

  function setCardHeight() {
    var windowWidth = $(window).width();
    var topVal;
    if (windowWidth >= 1300) {
      topVal = ($(window).height() - 700) / 2;
    } else {
      topVal = ($(window).height() - 200 - (windowWidth / 1300 * 513)) / 2;
    }
    if (topVal < 10) {
      topVal = 10;
    }
    $menuInner.css('top', topVal);
  }

</script>
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
