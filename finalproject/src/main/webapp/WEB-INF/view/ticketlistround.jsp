<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html class="no-js  launch-view-flight   no-inline-fields" data-version="v2.166.1.4e1c8f445ddee5a86dbadb0c116a1c899bcba51e" data-language="ko_KR" lang="ko" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>ticketlistround.jsp</title>
<style type="text/css">
#link {
	color: white;
}

#link:hover {
	color: gray;
}

table {
	margin-left: auto !important;
	margin-right: auto !important;
}

td { 
	vertical-align: middle !important; <!-- <td> 셀 가운데 정렬 -->
}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		var airlien_name;
		
		//선택된 좌석등급을 자동으로 select option에서 선택하게 해주는 작업
		switch('${seat_grade}') {
			case '일반석' :  $('[value="일반석"]').prop('selected', 'selected');
						  break;
			case '비즈니스석' : $('[value="비즈니스석"]').prop('selected', 'selected');
			 			  break;
			case '일등석' : $('[value="일등석"]').prop('selected', 'selected');
							 break;
		}
		
		$('#flight-type-roundtrip-flp').val('1'); //처음시작은 무조건 왕복으로 시작(사용자가 선택하지 않아도)
		
		/* //select의 선택된 요소를 불러옴.
		$("#flight-children-flp").change(function() {
			 //alert($(this).val()); //alert($(this).children("option:selected").text());
			 var item = $(this).val();
			 
	         if(item == '0') { //아동(만1-17)에서 0명을 사용자가 골랐을 때 아동 1나이를 고를 수 있는 label visibility 속성을 hidden으로 지정.
	        	$('#tripperOption').remove(); 
	         } else if(item == '2') { //처음에 추가한 아동 1나이를 고를 수 있는 label을 지우고 2개를 append해야하는 상황.
	        	 $('#tripperOption').remove(); 
	         } else if(item == '3') {
	        	 $('#tripperOption').remove(); 
	         } else if(item == '4') {
	        	 $('#tripperOption').remove(); 
	         } else if(item == '5') {
	        	 $('#tripperOption').remove(); 
	         }
		}); */

		$('#flight-type-roundtrip-flp').click(function() { //왕복
			$('#flight-type-roundtrip-flp').val('1');
		});
		
		$('#flight-type-one-way-flp').click(function() { //편도
			$('#flight-type-one-way-flp').val('2');
		});
		
		$('.port_img').click(function() {
			airline_name = $(this).children().attr("src"); //클릭한 객체의 자식 img경로를 받아옴.

			//항공명을 뽑아오기 위한 과정.
			airline_name = airline_name.substring(airline_name.indexOf("/")+1);
			airline_name = airline_name.substring(airline_name.indexOf("/")+1);
			airline_name = airline_name.substring(0, airline_name.indexOf("."));
			
			event();
		});
		
		function event() {
			$('#airline_name').val(airline_name); //hidden속성으로 항공사명을 저장.
			
			if(!($('#searchKey').val())) { //값이 없을 때 (처음은 searchKey를 all로 주어야 한다.)
				$('#searchKey').val('all');
			} 
			
			//왕복일 때(depart_region과 arrive_region을 swap시키고 / startDate와 endDate를 swap시킨다.) 이어야 하므로 다른 action이 필요하다. 또한 action전에 dto를 다시 전달해야 한다.
			$('#gcw-flights-form-flp').attr('action', 'ticketlistroundswap1.do').submit();
		}
		
		//select option값이 변경될 때 마다 불러와서 hidden에 저장한다.
		$('#searchOption').change(function() {
			$('#searchKey').val($('#searchOption option:checked').text());
		});
		
		//페이지 변경 후 select option값이 변경된 것으로 남아있게 하는 작업
		switch('${pv.searchKey}') {
			case 'all' :  $('[value=all]').prop('selected', 'selected');
						  break;
			case '최저가' : $('[value="최저가"]').prop('selected', 'selected');
			 			  break;
			case '최고가' : $('[value="최고가"]').prop('selected', 'selected');
							 break;
			case '최단시간' :  $('[value="최단시간"]').prop('selected', 'selected');
							 break;
			case '최장시간' : $('[value="최장시간"]').prop('selected', 'selected'); 
							 break;
			case '빠른 출발순' : $('[value="빠른 출발순"]').prop('selected', 'selected'); 
			 				 break;
			case '늦은 출발순' : $('[value="늦은 출발순"]').prop('selected', 'selected'); 
			 			     break;
			case '빠른 도착순' : $('[value="빠른 도착순"]').prop('selected', 'selected'); 
		   					 break;
			case '늦은 도착순' : $('[value="늦은 도착순"]').prop('selected', 'selected'); 
		    				 break;
		}
	});
	
	function searchBtn() {
		if(!($('#airline_name').val())) { //값이 없을 때
			$('#airline_name').val(('${map.airline_name}')); 
		//hidden input요소에 값이 없을 때만 //mav.addObject("map", map);에 저장된 것을 불러와 저장한다. (bxslider선택 후 select option 선택시 airline_name값은 비어있어서  map.airline_name로 다시 저장시키고 action처리한다.) 
		}
		
		if(!($('#searchKey').val())) { //값이 없을 때 
			$('#searchKey').val(('${map.searchKey}'));
		//hidden input요소에 값이 없을 때만 //mav.addObject("map", map);에 저장된 것을 불러와 저장한다. (bxslider선택 후 select option 선택시 airline_name값은 비어있어서  map.airline_name로 다시 저장시키고 action처리한다.)
		}
		
		//dto값을 받아서 저장한 값을 hidden으로 저장하여 검색 필터링이나, 항공사 필터링시 파라미터로 전달한다. 
		
		//왕복일 때(depart_region과 arrive_region을 swap시키고 / startDate와 endDate를 swap시킨다.) 이어야 하므로 다른 action이 필요하다. 또한 action전에 dto를 다시 전달해야 한다.
		$('#gcw-flights-form-flp').attr('action', 'ticketlistroundswap2.do').submit();
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
<link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">

<!-- Custom fonts for this template2 -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">

<!-- Custom styles for this template -->
<link href="css/business-casual.min.css" rel="stylesheet">

<!-- Page level plugin CSS-->
<link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">

<!-- Custom styles for this template-->
<link href="css/sb-admin.css" rel="stylesheet">

<link rel="dns-prefetch" href="//a.intentmedia.net" />
<link rel="dns-prefetch" href="//images.trvl-media.com" />
<link rel="dns-prefetch" href="//a.travel-assets.com/" />
<link rel="dns-prefetch" href="//b.travel-assets.com/" />
<link rel="dns-prefetch" href="//c.travel-assets.com/" />
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32" />
<link rel='stylesheet' type='text/css' href='//a.travel-assets.com/uitoolkit/2-166/4e1c8f445ddee5a86dbadb0c116a1c899bcba51e/core/minifiedCss/brands/expedia-responsive.css' />
<link href="//b.travel-assets.com/bundles/storefront-web/homepage-bundle/homepage-mercury-style-805603057dd5e1bb22b7aeb81d27e3f8-min.css" media="all" rel="stylesheet" type="text/css" />
<link href="//b.travel-assets.com/bundles/mercury-web/mercury/styles-d93e254a8d712005709e16ea0afc541c-min.css" media="all" rel="stylesheet" type="text/css" />

<!--Google Font link-->
<link rel="stylesheet" href="assets/css/slick/slick.css"> 
<link rel="stylesheet" href="assets/css/slick/slick-theme.css">
<link rel="stylesheet" href="assets/css/animate.css">
<link rel="stylesheet" href="assets/css/iconfont.css">
<link rel="stylesheet" href="assets/css/font-awesome.min.css">
<link rel="stylesheet" href="assets/css/bootstrap.css">
<link rel="stylesheet" href="assets/css/magnific-popup.css">
<link rel="stylesheet" href="assets/css/bootsnav.css">
<!--Theme custom css -->
<link rel="stylesheet" href="assets/css/style.css">

<!--Theme Responsive css-->
<link rel="stylesheet" href="assets/css/responsive.css" />

<script src="assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>
<body style="background-image: url('img/bg.jpg'); font-family: 'Lora'; background-attachment: fixed; background-position: center; background-size: cover;" id="body">
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
						class="list-link text-uppercase text-expanded" href="#" id="link">search</a></li>
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
						<a class="list-link text-uppercase text-expanded" href="#"
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
					class="list-link text-uppercase text-expanded" href="#" id="link">adminpage</a>
					<a class="list-link text-uppercase text-expanded" href="#"
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

					<li class="nav-item active px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="main.do"><i
							class="fa fa-fighter-jet" aria-hidden="true" id="link"></i>
							&nbsp;항공권 <span class="sr-only">(current)</span></a></li>

					<li class="nav-item px-lg-4"><a
						class="nav-link text-uppercase text-expanded" href="weatherinfo.do"><i
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

	<section class="page-section clearfix">
		<script>!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.conditionizr=t()}(this,function(){"use strict";function e(e,n,r){function i(n){var i,o=r?e:t+e+("style"===n?".css":".js");switch(n){case"script":i=document.createElement("script"),i.src=o;break;case"style":i=document.createElement("link"),i.href=o,i.rel="stylesheet";break;case"class":document.documentElement.className+=" "+e}!!i&&(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}for(var o=n.length;o--;)i(n[o])}var t,n={};return n.config=function(r){t=r.assets||"";for(var i in r.tests)n[i]&&e(i,r.tests[i])},n.add=function(e,t){n[e]="function"==typeof t?t():t},n.on=function(e,t){(n[e]||/\!/.test(e)&&!n[e.slice(1)])&&t()},n.load=n.polyfill=function(t,r){for(var i=r.length;i--;)n[r[i]]&&e(t,[/\.js$/.test(t)?"script":"style"],!0)},n}),conditionizr.add("chrome",!!window.chrome&&/google/i.test(navigator.vendor)),conditionizr.add("firefox","InstallTrigger"in window),conditionizr.add("ie8",!!Function("/*@cc_on return (@_jscript_version > 5.7 && !/^(9|10)/.test(@_jscript_version)); @*/")()),conditionizr.add("ie9",!!Function("/*@cc_on return (/^9/.test(@_jscript_version) && /MSIE 9.0(?!.*IEMobile)/i.test(navigator.userAgent)); @*/")()),conditionizr.add("ie10",!!Function("/*@cc_on return (/^10/.test(@_jscript_version) && /MSIE 10.0(?!.*IEMobile)/i.test(navigator.userAgent)); @*/")()),conditionizr.add("ie11",/(?:\sTrident\/7\.0;.*\srv:11\.0)/i.test(navigator.userAgent)),conditionizr.add("ios",/iP(ad|hone|od)/i.test(navigator.userAgent)),conditionizr.add("safari",function(e){return"[object SafariRemoteNotification]"===e.toString()}(!window.safari||safari.pushNotification)),conditionizr.add("lt-ie11",conditionizr.ie10||conditionizr.ie9||conditionizr.ie8),conditionizr.add("lt-ie10",conditionizr.ie9||conditionizr.ie8),conditionizr.add("lt-ie9",conditionizr.ie8),conditionizr.add("phantomjs",/\sPhantomJS\/[[0-9]+]/.test(navigator.userAgent)),conditionizr.config({tests:{chrome:["class"],safari:["class"],firefox:["class"],ie11:["class"],ie10:["class"],ie9:["class"],ie8:["class"],"lt-ie11":["class"],"lt-ie10":["class"],"lt-ie9":["class"],ios:["class"],phantomjs:["class"]}}),function(e){"use strict";function t(t){e.console&&e.console.log&&e.console.log(t)}function n(e){var t,n,o,a=[];for(delete e[v],t=0;t<e[f][h];t++){if(n=e[f][t],o=i(n),!o)return e[v]=n,r(n,e),!1;a.push(o)}return a}function r(e,t){var n,r=!1;if("require"!==t[l])for(n=0;n<e[m].length;n++)if(t[l]===e[m][n][l]){r=!0;break}r||e[m].push(t)}function i(t){var r,a;if(t[y]=!0,t[g])return t[g];if(t[p]){if(r=n(t),t[g])return t[g];if(r){for(t[g]=t[p].apply(e,r)||o(t),a=0;a<t[m][h];a++)i(t[m][a]);return t[m]=[],t[g]}}return!1}function o(e){var t;for(t=0;t<e[f][h];t++)if("exports"===e[f][t][l])return e[f][t][g];return{}}function a(e){var t=!1;return!e[g]&&e[y]&&(e[p]?e[v]&&(t=a(e[v])):t=e),t}function s(e,t,n){var r,i,o;if(!(e[g]||t&&t[g])){if(t){if(e===t)return n}else for(t=e,n=[],o=t[f][h],r=0;r<o;r++)if(!t[f][r][g]&&t[f][r]===t)return n.push(t),n;for(o=t[f][h],r=0;r<o;r++)if(i=s(e,t[f][r],n),void 0!==i&&!t[f][r][g])return n.push(t[f][r]),n}}function c(e){var t,n,r,i=[];for("string"==typeof e&&(e=[e]),t=0;t<e[h]&&(n=e[t],""!==n);t++)r=b[n],"exports"===n?r=new x(n,[],function(){return{}}):r||(r=b[n]=new x(n,[],(void 0))),i.push(r);return i}function u(e){var t,n=!1;for(t=0;t<e[m][h];t++){if("require"===e[m][t][l]){n=!0;break}n=u(e[m][t])}return n}var d,l="name",f="deps",m="waiting",p="factory",h="length",g="value",v="blockedBy",y="executed",b={},w=[],E=function(){return!1};if(window.define&&window.define.amd)return void t("modulizr is already defined. You should probably be careful about including it twice. We have been nice and refused to overwrite all your dependencies");var x=function(e,t,n){var r=this;r[l]=e,r[f]=t,r[p]=n,r[m]=[]};x.prototype.toString=function(){return this[l]},e.define=e.modulizr=d=function(e,n,r){var o,a;if("function"==typeof n&&(r=n,n=[]),n=c(n),o=b[e],o&&o[p]?(a=e?e:"no id",w.push(a),t("Duplicate module: "+a)):o?(o[f]=n,o[p]=r,u(o)&&i(o)):o=b[e]=new x(e,n,r),s(o))throw new Error("Dependency is circular")},d.amd={},e.require=d.require=function(){var e,t,n,r,o=arguments,a=[];if(e=c(o[0]),!e||0===e[h])throw new Error("Require without dependency. This is redundant.");for(t=1===o[h]?E:2===o[h]?"function"==typeof o[1]?o[1]:E:o[1],i(new x("require",e,t)),n=0;n<e.length;n++)r=e[n][g],r||(r=void 0),a.push(r);return 1===a.length?a[0]:a},d._reset=function(){for(var e in b)e=b[e],delete e.value},d._clear=function(){for(var e in b)delete b[e]},d._printWaitingDependencies=function(){var e,n,r;for(e in b)n=b[e],n[m][h]>0&&(r=n[l]+"["+n[m].join(",")+"]",t(r))},d._getBlockingUndefined=function(){var e,t,n,r,i=[];for(e in b)if(e=b[e],t=a(e)){for(r=!1,n=0;n<i.length;n++)if(i[n]===t.name){r=!0;break}r||i.push(t.name)}return i},d._printDuplicateModules=function(){t(w.length>0?w.join(", "):"No duplicate modules detected.")},d._printDependencies=function(){var e,n,r;for(e in b)n=b[e],r=n[l]+"("+n[f].join(",")+")["+n[m].join(",")+"]",t(r);t("() - this node's dependencies, [] - dependencies that are currently waiting on this node")},d._buildDepList=function(e,t,n){var r;for(r=0;r<t.length;r++)b.hasOwnProperty(t[r])&&(e[t[r]]=!0,d._buildDepList(e,b[t[r]][n],n))},d._toDot=function(e,t){var n,r,i,o,a,s={},c="";e?"string"==typeof e&&(e=[e]):e=Object.keys(b),d._buildDepList(s,e,t);for(n in s)if(b.hasOwnProperty(n))for(r=b[n],i=r[l].replace(/[-\/._]/g,"_"),a=0;a<r[t].length;a++)o=r[t][a][l].replace(/[-\/._]/g,"_"),c+=i+" -> "+o+";\n";return"digraph G { \n"+c+"}"},d._depsToDot=function(e){return d._toDot(e,f)},d._waitingToDot=function(e){return d._toDot(e,m)},d._getDependencyMap=function(){return b}}("undefined"!=typeof window?window:this),window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(x.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&b[i]!==n)return"pfx"!=t||i}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+T.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(i,t):(i=(e+" "+M.join(r+" ")+r).split(" "),c(i,t,n))}function d(){p.input=function(n){for(var r=0,i=n.length;r<i;r++)A[n[r]]=!!(n[r]in w);return A.list&&(A.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,i,o,a=0,s=e.length;a<s;a++)w.setAttribute("type",i=e[a]),r="text"!==w.type,r&&(w.value=E,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&w.style.WebkitAppearance!==n?(g.appendChild(w),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?w.checkValidity&&w.checkValidity()===!1:w.value!=E)),k[e[a]]=!!r;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,w=t.createElement("input"),E=":)",x=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),z="Webkit Moz O ms",T=z.split(" "),M=z.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},S={},k={},A={},_=[],j=_.slice,N=function(e,n,r,i){var o,a,s,c,u=t.createElement("div"),d=t.body,l=d||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:v+(r+1),u.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(d?u:l).innerHTML+=o,l.appendChild(u),d||(l.style.background="",l.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(l)),a=n(u,e),d?u.parentNode.removeChild(u):(l.parentNode.removeChild(l),g.style.overflow=c),!!a},D=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return N("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},L=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty;f=o(F,"undefined")||o(F.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(j.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(j.call(arguments)))};return r}),S.flexbox=function(){return u("flexWrap")},S.flexboxlegacy=function(){return u("boxDirection")},S.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},S.webgl=function(){return!!e.WebGLRenderingContext},S.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",x.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},S.geolocation=function(){return"geolocation"in navigator},S.hashchange=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},S.history=function(){return!(!e.history||!history.pushState)},S.rgba=function(){return r("background-color:rgba(0,0,0,0)"),a(b.backgroundColor,"none")},S.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},S.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},S.backgroundsize=function(){return u("backgroundSize")},S.borderimage=function(){return u("borderImage")},S.borderradius=function(){return u("borderRadius")},S.boxshadow=function(){return u("boxShadow")},S.textshadow=function(){return""===t.createElement("div").style.textShadow},S.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},S.cssanimations=function(){return u("animationName")},S.csscolumns=function(){return u("columnCount")},S.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},S.cssreflections=function(){return u("boxReflect")},S.csstransforms=function(){return!!u("transform")},S.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},S.csstransitions=function(){return u("transition")},S.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},S.generatedcontent=function(){var e;return N(["#",v,"{font:0/0 a}#",v,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},S.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},S.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect},S.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C.svg};for(var P in S)f(S,P)&&(l=P.toLowerCase(),p[l]=S[P](),_.push((p[l]?"":"no-")+l));return p.input||d(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function o(e,n,r){if(n||(n=t),d)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),c=s.length;a<c;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=i(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||s(e,r),e}var u,d,l="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,d=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:f.shivCSS!==!1,supportsUnknownElements:d,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};e.html5=y,c(t)}(this,t),p._version=m,p._prefixes=x,p._domPrefixes=M,p._cssomPrefixes=T,p.mq=D,p.hasEvent=L,p.testProp=function(e){return s([e])},p.testAllProps=u,p.testStyles=N,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+_.join(" "):""),p}(this,this.document),Modernizr.addTest("pointerevents",function(){var e,t=document.createElement("x"),n=document.documentElement,r=window.getComputedStyle;return"pointerEvents"in t.style&&(t.style.pointerEvents="auto",t.style.pointerEvents="x",n.appendChild(t),e=r&&"auto"===r(t,"").pointerEvents,n.removeChild(t),!!e)}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("placeholder",function(){return!!("placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea")))}),function(e,t){t.formvalidationapi=!1,t.formvalidationmessage=!1,t.addTest("formvalidation",function(){var n=e.createElement("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var r,i=!1;return t.formvalidationapi=!0,n.addEventListener("submit",function(e){window.opera||e.preventDefault(),e.stopPropagation()},!1),n.innerHTML='<input name="modTest" required><button></button>',t.testStyles("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(n),r=n.getElementsByTagName("input")[0],r.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),t.formvalidationmessage=!!r.validationMessage,n.getElementsByTagName("button")[0].click()}),i})}(document,window.Modernizr),Modernizr.addTest("details",function(){var e,t,n,r=document,i=r.createElement("details");return"open"in i&&(t=r.body||function(){var t=r.documentElement;return e=!0,t.insertBefore(r.createElement("body"),t.firstElementChild||t.firstChild)}(),i.innerHTML="<summary>a</summary>b",i.style.display="block",t.appendChild(i),n=i.offsetHeight,i.open=!0,n=n!=i.offsetHeight,t.removeChild(i),e&&t.parentNode.removeChild(t),n)}),Modernizr.addTest("datalistelem",Modernizr.input.list),function(){var e=new Image;e.onerror=function(){Modernizr.addTest("datauri",function(){return!1})},e.onload=function(){Modernizr.addTest("datauri",function(){return 1==e.width&&1==e.height})},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}(),Modernizr.addTest("json",!!window.JSON&&!!JSON.parse),Modernizr.selectorSupported=function(e){var t,n,r,i=document,o=i.documentElement,a=o.getElementsByTagName("head")[0],s=i.implementation||{hasFeature:function(){return!1}},n=i.createElement("style");return n.type="text/css",(a||o).insertBefore(n,(a||o).firstChild),r=n.sheet||n.styleSheet,!(!r||!e)&&(t=s.hasFeature("CSS2","")?function(e){try{r.insertRule(e+"{ }",0),r.deleteRule(r.cssRules.length-1)}catch(t){return!1}return!0}:function(e){return r.cssText=e+" { }",0!==r.cssText.length&&!/unknown/i.test(r.cssText)&&0===r.cssText.indexOf(e)})(e)},Modernizr.addTest("win8touch",!!navigator.msMaxTouchPoints),Modernizr.addTest("checkedselector",function(){return Modernizr.selectorSupported(":checked")}),Modernizr.addTest("highres",function(){for(var e="2.99/2",t="1.499",n=["only screen and (-o-min-device-pixel-ratio:"+e+")","only screen and (min--moz-device-pixel-ratio:"+t+")","only screen and (-webkit-min-device-pixel-ratio:"+t+")","only screen and (min-device-pixel-ratio:"+t+")"],r=!1,i=n.length-1;i>=0;i--)if(r=Modernizr.mq(n[i]))return r;return r}),Modernizr.addTest("ipad",function(){return!!navigator.userAgent.match(/iPad/i)}),Modernizr.addTest("iphone",function(){return!!navigator.userAgent.match(/iPhone/i)}),Modernizr.addTest("ipod",function(){return!!navigator.userAgent.match(/iPod/i)}),Modernizr.addTest("android",function(){return!!navigator.userAgent.match(/android/i)}),Modernizr.addTest("appleios",function(){return Modernizr.ipad||Modernizr.ipod||Modernizr.iphone}),Modernizr.addTest("positionfixed",function(){var e=document.createElement("div"),t=e.cloneNode(!1),n=!1,r=document.body||function(){return n=!0,document.documentElement.appendChild(document.createElement("body"))}(),i=r.style.cssText;r.style.cssText="padding:0;margin:0",e.style.cssText="position:fixed;top:42px",r.appendChild(e),r.appendChild(t);var o=e.offsetTop!==t.offsetTop;return r.removeChild(e),r.removeChild(t),r.style.cssText=i,n&&document.documentElement.removeChild(r),navigator.userAgent.match(/OS (\d)/i),o&&(!Modernizr.appleios||Modernizr.appleios&&RegExp.$1>=5)}),function(){"use strict";window.define.amd={jQuery:!0}}(),define("loadcss",[],function(){function e(e,t,n,r){"use strict";var i=window.document.createElement("link"),o=t||window.document.getElementsByTagName("script")[0],a=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",r&&(i.onload=r),o.parentNode.insertBefore(i,o),i.onloadcssdefined=function(e){for(var t,n=0;n<a.length;n++)a[n].href&&a[n].href===i.href&&(t=!0);t?e():setTimeout(function(){i.onloadcssdefined(e)})},i.onloadcssdefined(function(){i.media=n||"all"}),i}return e});</script>

		<script>
	      window.ewe_performance = window.ewe_performance || {};
	      var luxShim=function(a,b){"use strict";var c=function(){function d(){if(m&&m.now)return m.now();var a=Date.now?Date.now():+new Date;return a-n}function e(a){if(m){if(m.mark)return m.mark(a);if(m.webkitMark)return m.webkitMark(a)}j.push({name:a,entryType:"mark",startTime:d(),duration:0})}function f(a,b,c){if("undefined"==typeof b&&g(l)&&(b=l),m){if(m.measure)return b?c?m.measure(a,b,c):m.measure(a,b):m.measure(a);if(m.webkitMeasure)return m.webkitMeasure(a,b,c)}var e=0,f=d();if(b){var h=g(b);if(h)e=h.startTime;else{if(!(m&&m.timing&&m.timing[b]))return;e=m.timing[b]-m.timing.navigationStart}}if(c){var i=g(c);if(i)f=i.startTime;else{if(!(m&&m.timing&&m.timing[c]))return;f=m.timing[c]-m.timing.navigationStart}}k.push({name:a,entryType:"measure",startTime:e,duration:f-e})}function g(a){return h(a,i())}function h(a,c){var d;for(d=c.length-1;d>=0;d--){var e=c[d];if(a===e.name)return e}return b}function i(){if(m){if(m.getEntriesByType)return m.getEntriesByType("mark");if(performance.webkitGetEntriesByType)return performance.webkitGetEntriesByType("mark")}return j}var j="undefined"!=typeof c&&"undefined"!=typeof c.gaMarks?c.gaMarks:[],k="undefined"!=typeof c&&"undefined"!=typeof c.gaMeasures?c.gaMeasures:[],l="LUX_start",m=a.performance,n="undefined"!=typeof c&&c.ns?c.ns:Date.now?Date.now():+new Date;return m&&m.timing&&m.timing.navigationStart&&(n=m.timing.navigationStart),{mark:e,measure:f,gaMarks:j,gaMeasures:k}}();c.ns=Date.now?Date.now():+new Date,c.ac=[],c.cmd=function(a){c.ac.push(a)},a.LUX=a.LUX||c,a.LUX.mark=a.LUX.mark||c.mark,a.LUX.measure=a.LUX.measure||c.measure},initializeEWEPerformanceScripts=function(a){"use strict";var b=1,c=[],d={isPerfLoggingEnabled:function(){var c=100,d=1,e=a.ewe_performance.config.logAllTraffic,f=Math.floor(Math.random()*(c-d+1))+d;return"number"==typeof a.ewe_performance.config.percentOfTrafficToLog&&a.ewe_performance.config.percentOfTrafficToLog>=0&&a.ewe_performance.config.percentOfTrafficToLog<=100&&(b=a.ewe_performance.config.percentOfTrafficToLog),e||f<=b},mark:function(b){a.LUX.mark(b)},measure:function(b,c,d){a.LUX.measure(b,c,d)},markPageUsable:function(){d.mark("Page Usable")},getPageUsableTime:function(){var b="Page Usable",c=[];if(a.performance){if(a.performance.getEntriesByName)return a.performance.getEntriesByName(b,"mark");if(a.performance.webkitGetEntriesByName)return a.performance.webkitGetEntriesByName(b,"mark")}for(var d=a.LUX.gaMarks||[],e=0;e<d.length;e++)d[e].name===b&&"mark"===d[e].entryType&&c.push(d[e]);return c},getPercentOfTrafficToLog:function(){return b},addData:function(b,d){a.LUX&&"function"==typeof a.LUX.addData?a.LUX.addData(b,d):c.push(function(){a.LUX.addData(b,d)})}};if(a.ewe_performance=a.ewe_performance||{},a.ewe_performance.config=a.ewe_performance.config||{},a.ewe_performance.config.luxID=a.ewe_performance.config.luxID||"32872331",a.ewe_performance.mark=d.mark,a.ewe_performance.measure=d.measure,a.ewe_performance.markPageUsable=d.markPageUsable,a.ewe_performance.getPageUsableTime=d.getPageUsableTime,a.ewe_performance.isPerfLoggingEnabled=d.isPerfLoggingEnabled,a.ewe_performance.getPercentOfTrafficToLog=d.getPercentOfTrafficToLog,a.ewe_performance.addData=d.addData,a.ewe_performance.isPerfLoggingEnabled()){var e;e=document.createElement("script"),e.async=!0,e.type="text/javascript",e.src="https://cdn.speedcurve.com/js/lux.js?id="+encodeURIComponent(a.ewe_performance.config.luxID),e.onload=function(){for(var a,b=0;b<c.length;b++)if(a=c[b],"function"==typeof a)try{a()}catch(d){console.error("Error invoking queued ewe_performance function "+d)}},document.getElementsByTagName("head")[0].appendChild(e)}};luxShim(window),initializeEWEPerformanceScripts(window);
	        ewe_performance.addData('application','storefront-web');
	        ewe_performance.addData('mercury',true);
   	   </script>

		<script>window.start_of_document= +new Date();window.initialLaunchView = 'flight';</script>

		<script type="text/javascript" src="//c.travel-assets.com/globalcontrols-service/content/5c620eb9bd44000b38e2cb042ca045709e843616/scripts/16/ko_KR/globalcontrols-min.js" async defer></script>
			
		<!--PGC globalcontrols []-->
		<script src="//a.travel-assets.com/bundles/storefront-web/homepage-bundle/homepage-mercury-script-16-ko_KR-89923346f04da80a3ab19482ac345838-min.js" type="text/javascript" async></script>
		
		<script>
        // register PAGES USABLE metric as depending on the gcwForm script executing and available
        require('gcwForm', function(gcwForm) {
            ewe_performance.markPageUsable();
            if (console && typeof console.timeStamp === 'function') {
            console.timeStamp("mark page usable");
            }
        });
    	</script>
    	
		<script>
        if(typeof calc != "undefined" && typeof tracker != "undefined"){
            calc.headerLoadTime = +new Date();
            tracker.triggerOneEvent("headerPainted");
        }
        require(['perfLogging'],function(perfLogging){
            perfLogging.headerPainted();
        })
   		</script>
   		 
		<script> var uitkformatter = { dependency: ['uitk_localized_dateApi', 'uitk_localized_priceApi', 'uitk_localized_config'] }; </script>
		<script async defer src="//www.expedia.com/i18n/16/ko_KR/KRW/currencyFormats.js?module=exp_currencyformats_KRW"></script>
		<script>     define('exp_currencyformats', [                    'exp_currencyformats_KRW'                ], function() {         return window.uitkformatter;       });   </script>
		<script async defer src="//b.travel-assets.com/uitoolkit/2-166/4e1c8f445ddee5a86dbadb0c116a1c899bcba51e/core/js/uitk-localize-bundle-min.js"></script>
		<script async defer src="https://b.travel-assets.com/typeahead-web/1-141/68857cee469cfdc2a005526faf56c1ef72638f80/script/universal_typeahead_bundle.min.js"></script>
		<script async defer src="https://b.travel-assets.com/typeahead-web/1-141/68857cee469cfdc2a005526faf56c1ef72638f80/script/ko_KR/locale_specific_file.min.js"></script>
		<script async defer src="https://b.travel-assets.com/typeahead-web/1-141/68857cee469cfdc2a005526faf56c1ef72638f80/script/vendor/handlebars.runtime.amd.min.js"></script>

		<script async defer>
		define('typeahead/core/context', function() {
		    return {
		        serviceUrl: '//suggest.expedia.com',
		        locale: 'ko_KR',
		        siteid: 16,
		        environment: 'prod'
		    };
		});
		</script>

		<script src="https://a.travel-assets.com/bundles/mercury-web/mercury/script-36f93485e5de2766a2aad3be80ee2576-min.js" type="text/javascript" defer async></script>
		<section id="WizardHero"
			class="hero-banner-wrap theme-inverse-hero wizard-hero mercury hero-no-title background d-col-ads core-wizard-loaded siteid-16">
			<div class="hero-banner background" id="hero-banner">
				<div class="hero-banner-gradient">
					<div class="cols-row hero-banner-inner">
						<section>
							<div class="hero-banner-box cf" style="width: 68%; height: 70%; float: none; margin: 0 auto;">
								<h6 class="wizard-tabs launch-page-title" align="center" style="font-size: 60px !important; font-style: italic; position: absolute; font-family: fantasy;">AirLine Search</h6>
								<div id="flight-tabs" class="cols-row theme-inverse-pills wizard-tabs cols-nested" data-control="tabs" data-tab-state="false">
									<div class="tabs-wrapper">
										<ul class="tabs cf col">
											<li class="tab" role="presentation" style="display: list-item;">
												<button class="gcw-storeable " data-lob="flight" data-section-id="#section-flight-tab-flp" id="tab-flight-tab-flp" type="button" data-gcw-storeable-name="" style="visibility: hidden;">
													<p>
													<span class="icons-container"> 
														<span class="uitk-icon uitk-icon-flights" data-control="uitk-icon" aria-hidden="true"> 
															<svg class="uitk-icon-svg"> <use xlink:href="#uitk-icon-flights" /></svg>
														</span>
													</span> 
													<span class="tab-label">항공<span class="visuallyhidden">Tab 1 of 2</span></span>
													</p>
												</button>
											</li>
											<li class="tab" role="presentation" style="display: list-item;"></li>
										</ul>
									</div>
									<div class="tabs-container col">
										<section class="tab-pane cf gcw-section-flights-tab"
											id="section-flight-tab-flp">
											<form id="gcw-flights-form-flp" class="gcw-form flights  gcw-lessThanNTravelers gcw-childAgesAllProvided gcw-unattendedInfantInLap gcw-allFlightsComplete gcw-allOriginsAreDifferentFromDestinations paandi-form no-gcw-traveler-selector" data-gcw-key="flp" data-gcw-max-travelers="6"
												action="ticketlist.do" method="GET" data-gcw-processing-function="flights" data-gcw-datapreloading-function="flights"
												data-gcw-controller="flights" data-locale="ko_KR" data-siteid="16" data-location-search-type="uta" data-lob-form="flight"
												data-gcw-current-package-type="flight">
												<div class="mobile-hero-banner-title">항공 검색</div>
												<div class="alert alert-error  validation-alert hidden"
													aria-hidden="true" role="alert">
													<span class="icon icon-warn" aria-hidden="true"></span>
													<h5 class="alert-title">아래에서 오류를 수정해 주세요.</h5>
													<div class="alert-message">
														<ul class="validation-alert-list"></ul>
													</div>
												</div>

												<fieldset class="sub-nav-select" style="background: none;">
													<div class="sub-nav-select-container" align="center">
														
														<div class="col gcw-sub-nav-option-wrapper" style="display: inline-block !important;">
															<input id="flight-type-roundtrip-flp" type="radio"
																name="flighttype"
																class=" gcw-storeable gcw-sub-nav-option"
																data-gcw-storeable-name="gcw-flights-sub-nav-roundtrip"
																data-gcw-sub-nav-option-name="roundtrip" checked=""
																autocomplete="off" value=""></input> <label
																id="flight-type-roundtrip-label-flp" class="check col"
																for="flight-type-roundtrip-flp"> <span
																class="inline-label">왕복</span>
															</label>
														</div>

														<div class="col gcw-sub-nav-option-wrapper" style="position: absolute; float: left; margin-left: 50px">
															<input id="flight-type-one-way-flp" type="radio"
																name="flighttype"
																class="gcw-storeable gcw-sub-nav-option"
																data-gcw-storeable-name="gcw-flights-sub-nav-oneway"
																data-gcw-sub-nav-option-name="oneway" autocomplete="off" value=""></input>
															<label id="flight-type-one-way-label-flp"
																class="check col" for="flight-type-one-way-flp">
																<span class="inline-label">편도</span>
															</label>
														</div>
													</div>

												<br/>
												</fieldset>
												<div class="cols-nested" style="margin-top: 18px;">
													<div class="col gcw-location-field"
														data-gcw-field-available-for-sub-nav-option="roundtrip,oneway,multi">
														<div class="autocomplete pin-left theme-standard"
															data-control="autocomplete">
															<div class="input-btn-group">
																<label class="text icon-before autocomplete-arrow gcw-flights-from" for="flight-origin-flp"> 
																<span class="label">출발지</span>
																	<input aria-autocomplete="list"
																	aria-owns="typeaheadDataPlain" autocomplete="off"
																	class="clear-btn-input gcw-storeable text gcw-origin gcw-required gcw-distinct-locations "
																	data-gcw-field-type="출발지"
																	data-gcw-storeable-name="gcw-origin"
																	data-js-theme="autocomplete" data-lob="FLIGHTS"
																	data-locale="ko_KR" data-mask="95" data-minchar="1"
																	data-provide="utypeahead"
																	data-template="hbs/templates/destinationCustom"
																	data-tooltip-id="typeaheadDataPlain" data-version="v4"
																	data-airport_code_element="flight-origin-flp-airport_code"
																	data-hotel_id_element="flight-origin-flp-hotel_id"
																	data-lat_long_element="flight-origin-flp-lat_long"
																	data-region_id_element="flight-origin-flp-region_id"
																	data-region_type_element="flight-origin-flp-region_type"
																	data-station_code_element="flight-origin-flp-station_code"
																	data-point_of_supply_element="flight-origin-flp-point_of_supply"
																	data-city_element="flight-origin-flp-city"
																	data-country_code_element="flight-origin-flp-country_code"
																	data-category_element="flight-origin-flp-category"
																	data-heds_element="flight-origin-flp-heds"
																	data-search_name_element="flight-origin-flp-search_name"
																	data-ta_element="flight-origin-flp-ta"
																	id="flight-origin-flp" placeholder="도시 또는 공항"
																	spellcheck="false" type="text" name="depart_region"/> <span class="icon"
																	aria-hidden="true" style="pointer-events: none">
																		<svg xmlns:xlink="http://www.w3.org/1999/xlink"
																			class="uitk-icon-svg">
                <use xlink:href="#uitk-icon-location" />
              </svg>
																</span>
																</label>
																<button class="btn btn-clear" data-control="clear-field"
																	disabled="" type="button">
																	<span class="btn-label"> <span class="icon"
																		aria-hidden="true"> <svg
																				xmlns:xlink="http://www.w3.org/1999/xlink"
																				class="uitk-icon-svg">
                    <use xlink:href="#uitk-icon-close" />
                  </svg>
																	</span> <span class="alt">Clear field: 출발지. Field
																			value: <span class="field-value" /></span>
																	</span>
																</button>
															</div>
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-airport_code"
																id="flight-origin-flp-airport_code" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-hotel_id"
																id="flight-origin-flp-hotel_id" type="hidden" value="" />
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-lat_long"
																id="flight-origin-flp-lat_long" type="hidden" value="" />
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-region_id"
																id="flight-origin-flp-region_id" type="hidden" value="" />
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-region_type"
																id="flight-origin-flp-region_type" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-station_code"
																id="flight-origin-flp-station_code" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-point_of_supply"
																id="flight-origin-flp-point_of_supply" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-city"
																id="flight-origin-flp-city" type="hidden" value="" /> <input
																class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-country_code"
																id="flight-origin-flp-country_code" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-category"
																id="flight-origin-flp-category" type="hidden" value="" />
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-heds"
																id="flight-origin-flp-heds" type="hidden" value="" /> <input
																class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-search_name"
																id="flight-origin-flp-search_name" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-origin-ta"
																id="flight-origin-flp-ta" type="hidden" value="" />
															<div class="autocomplete-dropdown" style="display: none;"></div>
														</div>
													</div>
													<div class="col gcw-location-field"
														data-gcw-field-available-for-sub-nav-option="roundtrip,oneway,multi">
														<div class="autocomplete pin-left theme-standard"
															data-control="autocomplete">
															<div class="input-btn-group">
																<label
																	class="text icon-before autocomplete-arrow gcw-flights-to"
																	for="flight-destination-flp"> <span
																	class="label">목적지</span> <input
																	aria-autocomplete="list" aria-owns="typeaheadDataPlain"
																	autocomplete="off"
																	class="clear-btn-input gcw-storeable text gcw-destination gcw-required gcw-distinct-locations "
																	data-dest="true" data-gcw-field-type="목적지"
																	data-gcw-storeable-name="gcw-destination"
																	data-js-theme="autocomplete" data-lob="FLIGHTS"
																	data-locale="ko_KR" data-mask="95" data-minchar="1"
																	data-provide="utypeahead"
																	data-template="hbs/templates/destinationCustom"
																	data-tooltip-id="typeaheadDataPlain" data-version="v4"
																	data-airport_code_element="flight-destination-flp-airport_code"
																	data-hotel_id_element="flight-destination-flp-hotel_id"
																	data-lat_long_element="flight-destination-flp-lat_long"
																	data-region_id_element="flight-destination-flp-region_id"
																	data-region_type_element="flight-destination-flp-region_type"
																	data-station_code_element="flight-destination-flp-station_code"
																	data-point_of_supply_element="flight-destination-flp-point_of_supply"
																	data-city_element="flight-destination-flp-city"
																	data-country_code_element="flight-destination-flp-country_code"
																	data-category_element="flight-destination-flp-category"
																	data-heds_element="flight-destination-flp-heds"
																	data-search_name_element="flight-destination-flp-search_name"
																	data-ta_element="flight-destination-flp-ta"
																	id="flight-destination-flp" placeholder="도시 또는 공항"
																	spellcheck="false" type="text" name="arrive_region"/> <span class="icon"
																	aria-hidden="true" style="pointer-events: none">
																		<svg xmlns:xlink="http://www.w3.org/1999/xlink"
																			class="uitk-icon-svg">
                <use xlink:href="#uitk-icon-location" />
              </svg>
																</span>
																</label>
																<button class="btn btn-clear" data-control="clear-field"
																	disabled="" type="button">
																	<span class="btn-label"> <span class="icon"
																		aria-hidden="true"> <svg
																				xmlns:xlink="http://www.w3.org/1999/xlink"
																				class="uitk-icon-svg">
                    <use xlink:href="#uitk-icon-close" />
                  </svg>
																	</span> <span class="alt">Clear field: 목적지. Field
																			value: <span class="field-value" /></span>
																	</span>
																</button>
															</div>
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-airport_code"
																id="flight-destination-flp-airport_code" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-hotel_id"
																id="flight-destination-flp-hotel_id" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-lat_long"
																id="flight-destination-flp-lat_long" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-region_id"
																id="flight-destination-flp-region_id" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-region_type"
																id="flight-destination-flp-region_type" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-station_code"
																id="flight-destination-flp-station_code" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-point_of_supply"
																id="flight-destination-flp-point_of_supply"
																type="hidden" value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-city"
																id="flight-destination-flp-city" type="hidden" value="" />
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-country_code"
																id="flight-destination-flp-country_code" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-category"
																id="flight-destination-flp-category" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-heds"
																id="flight-destination-flp-heds" type="hidden" value="" />
															<input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-search_name"
																id="flight-destination-flp-search_name" type="hidden"
																value="" /> <input class="gcw-storeable"
																data-gcw-storeable-name="gcw-destination-ta"
																id="flight-destination-flp-ta" type="hidden" value="" />
															<div class="autocomplete-dropdown" style="display: none;"></div>
														</div>
													</div>
												</div>
												<fieldset class="room-data">
													<div class="cols-nested">
														<div class="col gcw-date-field"
															data-gcw-field-available-for-sub-nav-option="oneway,multi">
															<div id="flight-departing-wrapper-single-flp"
																data-control="datepicker"
																class="datepicker theme-standard pin-left"
																data-last-valid-date="2019.12.21" data-auto-pos="true">
																<label
																	class="datepicker-label datepicker-arrow text icon-before gcw-flights-start-date"
																	for="flight-departing-single-flp"> <span
																	class="label">가는날</span> <input
																	id="flight-departing-single-flp"
																	class="text datepicker-trigger-input gcw-start-date gcw-storeable gcw-required gcw-valid-date"
																	type="text" placeholder="yyyy.mm.dd"
																	data-gcw-date-format="yyyy.mm.dd" autocomplete="off"
																	data-gcw-storeable-name="gcw-start-date"
																	data-gcw-field-type="가는날" name="startDate"> <span
																	class="icons-container"> <span
																		class="uitk-icon uitk-icon-calendar"
																		data-control="uitk-icon" aria-hidden="true"> <svg
																				class="uitk-icon-svg">
                    <use xlink:href="#uitk-icon-calendar" />
                  </svg>
																	</span>
																</span>
																</label>
																<div class="datepicker-dropdown" aria-hidden="true"></div>
															</div>
														</div>
														<div class="col gcw-date-field"
															data-gcw-field-available-for-sub-nav-option="roundtrip">
															<div id="flight-departing-wrapper-flp"
																data-control="datepicker"
																class="datepicker theme-standard pin-left"
																data-end-date="#flight-returning-wrapper-flp"
																data-last-valid-date="2019.12.21"
																data-default-range-length="0"
																data-max-range-length="331" data-auto-pos="true">
																<label
																	class="datepicker-label datepicker-arrow text icon-before gcw-flights-start-date"
																	for="flight-departing-flp"> <span class="label">가는날</span>
																	<input id="flight-departing-flp"
																	class="text datepicker-trigger-input gcw-start-date gcw-update-date-range gcw-storeable gcw-required gcw-valid-date"
																	type="text" placeholder="yyyy.mm.dd"
																	data-gcw-date-format="yyyy.mm.dd" autocomplete="off"
																	data-min-range-length="0"
																	data-gcw-storeable-name="gcw-start-date"
																	data-gcw-field-type="가는날" name="startDate"> <span
																	class="icons-container"> <span
																		class="uitk-icon uitk-icon-calendar"
																		data-control="uitk-icon" aria-hidden="true"> <svg
																				class="uitk-icon-svg">
														                <use xlink:href="#uitk-icon-calendar" />
														              </svg>
																	</span>
																</span>
																</label>
																<div class="datepicker-dropdown" aria-hidden="true"></div>
															</div>
														</div>
														<div class="col gcw-date-field"
															data-gcw-field-available-for-sub-nav-option="roundtrip">
															<div id="flight-returning-wrapper-flp"
																data-control="datepicker"
																class="datepicker theme-standard pin-left"
																data-start-date="#flight-departing-wrapper-flp"
																data-auto-pos="true">
																<label
																	class="datepicker-label datepicker-arrow text icon-before gcw-flights-end-date gcw-flights-input-multi"
																	for="flight-returning-flp"> <span class="label">오는날</span>
																	<input id="flight-returning-flp"
																	class="text datepicker-trigger-input gcw-end-date gcw-update-date-range gcw-storeable gcw-required gcw-valid-date"
																	type="text" placeholder="yyyy.mm.dd"
																	data-gcw-date-format="yyyy.mm.dd" autocomplete="off"
																	data-gcw-storeable-name="gcw-end-date"
																	data-gcw-field-type="오는날" name="endDate"> <span
																	class="icons-container"> <span
																		class="uitk-icon uitk-icon-calendar"
																		data-control="uitk-icon" aria-hidden="true"> <svg
																				class="uitk-icon-svg">
                <use xlink:href="#uitk-icon-calendar" />
              </svg>
																	</span>
																</span>
																</label>
																<div class="datepicker-dropdown"
																	style="right: auto; left: -2px;" aria-hidden="true"></div>
															</div>
														</div>
														
														<div class="col gcw-date-field">
															<div data-max-range-length="331" data-auto-pos="true">
																<label
																class="select icon icon-toggle180 col gcw-traveller-field"
																> <span class="label">좌석등급
																</span> <select id="seat_grade"
																type="select"
																autocomplete="off" name="seat_grade">
																	<option value="일반석">일반석</option>
																	<option value="비즈니스석">비즈니스석</option>
																	<option value="일등석">일등석</option>
																</select>
																</label>
																<div class="datepicker-dropdown" aria-hidden="true"></div>
															</div>
														</div>
														
														<div
															data-gcw-field-available-for-sub-nav-option="roundtrip,oneway,multi"
															class="available-for-flights gcw-clear-both">
															<label
																class="select icon icon-toggle180 col gcw-traveller-field"
																for="flight-adults-flp"> <span class="label">성인(만
																	18+)</span> <select id="flight-adults-flp"
																class="num-adults gcw-storeable"
																data-gcw-storeable-name="gcw-num-adults-1" type="select"
																autocomplete="off" name="adult">
																	<option value="1" selected="selected">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																	<option value="4">4</option>
																	<option value="5">5</option>
																	<option value="6">6</option>
															</select>
															</label> <label
																class="select icon icon-toggle180 col gcw-traveller-field"
																for="flight-children-flp"> <span class="label">아동(만
																	0-17)</span> <select id="flight-children-flp"
																class="num-children gcw-toggles-fields gcw-storeable seat-children gcw-toggles-field-by-value"
																data-gcw-storeable-name="gcw-num-children-1"
																data-gcw-toggled-field-class="gcw-child-field"
																data-gcw-toggled-field-parent-class="room-data"
																data-gcw-toggled-element-by-value="flight-children-help-flp,0"
																type="select" autocomplete="off" name="children">
																	<option value="0">0</option>
																	<option value="1" selected="selected">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																	<option value="4">4</option>
																	<option value="5">5</option>
															</select>
															</label>
														</div>
													</div>
													<div
														class="cols-nested children-data gcw-toggles-fields available-for-flights"
														data-gcw-field-available-for-sub-nav-option="roundtrip,oneway,multi">
														<!-- <label
																class="select icon icon-toggle180 col gcw-traveller-field"
																for="flight-children-flp"
																id="tripperOption"> <span class="label">아동 (만 0-17) 나이선택</span>
																<select
															id="flight-age-select-2-flp"
															class="gcw-storeable gcw-toggles-field-by-value gcw-child-age-select"
															data-gcw-storeable-name="gcw-child-age-1-2"
															data-gcw-toggled-element-by-value="gcw-young-child-note,1"
															type="select" autocomplete="off">
																<option value="" selected="selected">나이(만)</option>
																<option value="0">만 1세 미만</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
														</select>
															</label> --> <label id="flight-age-select-2-label-flp"
															class="select icon icon-toggle180 col gcw-child-field gcw-disabled"
															for="flight-age-select-2-flp"> <span
															class="label">아동 (만 0-17) 나이선택</span> <select
															id="flight-age-select-2-flp"
															class="gcw-storeable gcw-toggles-field-by-value gcw-child-age-select"
															data-gcw-storeable-name="gcw-child-age-1-2"
															data-gcw-toggled-element-by-value="gcw-young-child-note,1"
															type="select" autocomplete="off">
																<option value="" selected="selected">나이(만)</option>
																<option value="0">만 1세 미만</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
														</select>
														</label> <label id="flight-age-select-3-label-flp"
															class="select icon icon-toggle180 col gcw-child-field gcw-disabled"
															for="flight-age-select-3-flp"> <span
															class="label">아동 (만 0-17) 나이선택</span> <select
															id="flight-age-select-3-flp"
															class="gcw-storeable gcw-toggles-field-by-value gcw-child-age-select"
															data-gcw-storeable-name="gcw-child-age-1-3"
															data-gcw-toggled-element-by-value="gcw-young-child-note,1"
															type="select" autocomplete="off">
																<option value="" selected="selected">나이(만)</option>
																<option value="0">만 1세 미만</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
														</select>
														</label> <label id="flight-age-select-4-label-flp"
															class="select icon icon-toggle180 col gcw-child-field gcw-disabled"
															for="flight-age-select-4-flp"> <span
															class="label">아동 (만 0-17) 나이선택</span> <select
															id="flight-age-select-4-flp"
															class="gcw-storeable gcw-toggles-field-by-value gcw-child-age-select"
															data-gcw-storeable-name="gcw-child-age-1-4"
															data-gcw-toggled-element-by-value="gcw-young-child-note,1"
															type="select" autocomplete="off">
																<option value="" selected="selected">나이(만)</option>
																<option value="0">만 1세 미만</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
														</select>
														</label> <label id="flight-age-select-5-label-flp"
															class="select icon icon-toggle180 col gcw-child-field gcw-disabled"
															for="flight-age-select-5-flp"> <span
															class="label">아동 (만 0-17) 나이선택</span> <select
															id="flight-age-select-5-flp"
															class="gcw-storeable gcw-toggles-field-by-value gcw-child-age-select"
															data-gcw-storeable-name="gcw-child-age-1-5"
															data-gcw-toggled-element-by-value="gcw-young-child-note,1"
															type="select" autocomplete="off">
																<option value="" selected="selected">나이(만)</option>
																<option value="0">만 1세 미만</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
														</select>
														</label> <label id="flight-age-select-6-label-flp"
															class="select icon icon-toggle180 col gcw-child-field gcw-disabled"
															for="flight-age-select-6-flp"> <span
															class="label">아동 (만 0-17) 나이선택</span> <select
															id="flight-age-select-6-flp"
															class="gcw-storeable gcw-toggles-field-by-value gcw-child-age-select"
															data-gcw-storeable-name="gcw-child-age-1-6"
															data-gcw-toggled-element-by-value="gcw-young-child-note,1"
															type="select" autocomplete="off">
																<option value="" selected="selected">나이(만)</option>
																<option value="0">만 1세 미만</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
														</select>
														</label>
													</div>
												</fieldset>
												
												<div class="cols-nested gcw-multidest-flights-container gcw-disabled" data-gcw-field-available-for-sub-nav-option="multi">
													<div class="col">
														<fieldset id="flightlegs-list-fieldset-2-flp"
															class="flights gcw-multi-flight-data"
															data-gcw-additional-fields="flightlegs">
															<div class="cols-nested">
																<div class="col gcw-multidest-location-field">
																	<div class="autocomplete pin-left theme-standard"
																		data-control="autocomplete">
																		<div class="input-btn-group">
																			<label
																				class="text icon-before autocomplete-arrow gcw-flights-from"
																				for="flight-2-origin-flp"> <span
																				class="label">출발지</span> <input
																				aria-autocomplete="list"
																				aria-owns="typeaheadDataPlain" autocomplete="off"
																				class="clear-btn-input gcw-storeable text gcw-origin multidest-field"
																				data-gcw-field-available-for-sub-nav-option="multi"
																				data-gcw-storeable-name="gcw-origin-2"
																				data-js-theme="autocomplete" data-lob="FLIGHTS"
																				data-locale="ko_KR" data-mask="95" data-minchar="1"
																				data-provide="utypeahead"
																				data-template="hbs/templates/destinationCustom"
																				data-tooltip-id="typeaheadDataPlain"
																				data-version="v4"
																				data-airport_code_element="flight-2-origin-flp-airport_code"
																				data-hotel_id_element="flight-2-origin-flp-hotel_id"
																				data-lat_long_element="flight-2-origin-flp-lat_long"
																				data-region_id_element="flight-2-origin-flp-region_id"
																				data-region_type_element="flight-2-origin-flp-region_type"
																				data-station_code_element="flight-2-origin-flp-station_code"
																				data-point_of_supply_element="flight-2-origin-flp-point_of_supply"
																				data-city_element="flight-2-origin-flp-city"
																				data-country_code_element="flight-2-origin-flp-country_code"
																				data-category_element="flight-2-origin-flp-category"
																				data-heds_element="flight-2-origin-flp-heds"
																				data-search_name_element="flight-2-origin-flp-search_name"
																				data-ta_element="flight-2-origin-flp-ta"
																				id="flight-2-origin-flp" placeholder="도시 또는 공항"
																				spellcheck="false" type="text" name="depart_region" /> <span class="icon"
																				aria-hidden="true" style="pointer-events: none">
																					<svg xmlns:xlink="http://www.w3.org/1999/xlink"
																						class="uitk-icon-svg">
																		                <use xlink:href="#uitk-icon-location" />
																		            </svg>
																			</span>
																			</label>
																			
																			<button class="btn btn-clear"
																				data-control="clear-field" disabled="" type="button">
																				<span class="btn-label"> <span class="icon"
																					aria-hidden="true"> <svg
																							xmlns:xlink="http://www.w3.org/1999/xlink"
																							class="uitk-icon-svg">
																                    <use xlink:href="#uitk-icon-close" />
																                  </svg>
																				</span> 
																					<span class="alt">Clear field: 출발지. Field value: 
																					<span class="field-value" /></span>
																				</span>
																			</button>
																			
																		</div>
																		<input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-airport_code"
																			id="flight-2-origin-flp-airport_code" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-hotel_id"
																			id="flight-2-origin-flp-hotel_id" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-lat_long"
																			id="flight-2-origin-flp-lat_long" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-region_id"
																			id="flight-2-origin-flp-region_id" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-region_type"
																			id="flight-2-origin-flp-region_type" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-station_code"
																			id="flight-2-origin-flp-station_code" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-point_of_supply"
																			id="flight-2-origin-flp-point_of_supply"
																			type="hidden" value="" /> <input
																			class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-city"
																			id="flight-2-origin-flp-city" type="hidden" value="" />
																		<input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-country_code"
																			id="flight-2-origin-flp-country_code" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-category"
																			id="flight-2-origin-flp-category" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-heds"
																			id="flight-2-origin-flp-heds" type="hidden" value="" />
																		<input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-search_name"
																			id="flight-2-origin-flp-search_name" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-origin-2-ta"
																			id="flight-2-origin-flp-ta" type="hidden" value="" />
																		<div class="autocomplete-dropdown"
																			style="display: none;"></div>
																	</div>
																</div>
																<div class="col gcw-multidest-location-field">
																	<div class="autocomplete pin-left theme-standard"
																		data-control="autocomplete">
																		<div class="input-btn-group">
																			<label
																				class="text icon-before autocomplete-arrow gcw-flights-to"
																				for="flight-2-destination-flp"> <span
																				class="label">목적지</span> <input
																				aria-autocomplete="list"
																				aria-owns="typeaheadDataPlain" autocomplete="off"
																				class="clear-btn-input gcw-storeable text gcw-destination multidest-field "
																				data-gcw-field-available-for-sub-nav-option="multi"
																				data-dest="true"
																				data-gcw-storeable-name="gcw-destination-2"
																				data-js-theme="autocomplete" data-lob="FLIGHTS"
																				data-locale="ko_KR" data-mask="95" data-minchar="1"
																				data-provide="utypeahead"
																				data-template="hbs/templates/destinationCustom"
																				data-tooltip-id="typeaheadDataPlain"
																				data-version="v4"
																				data-airport_code_element="flight-2-destination-flp-airport_code"
																				data-hotel_id_element="flight-2-destination-flp-hotel_id"
																				data-lat_long_element="flight-2-destination-flp-lat_long"
																				data-region_id_element="flight-2-destination-flp-region_id"
																				data-region_type_element="flight-2-destination-flp-region_type"
																				data-station_code_element="flight-2-destination-flp-station_code"
																				data-point_of_supply_element="flight-2-destination-flp-point_of_supply"
																				data-city_element="flight-2-destination-flp-city"
																				data-country_code_element="flight-2-destination-flp-country_code"
																				data-category_element="flight-2-destination-flp-category"
																				data-heds_element="flight-2-destination-flp-heds"
																				data-search_name_element="flight-2-destination-flp-search_name"
																				data-ta_element="flight-2-destination-flp-ta"
																				id="flight-2-destination-flp" placeholder="도시 또는 공항"
																				spellcheck="false" type="text" name="arrive_airport"/> <span class="icon"
																				aria-hidden="true" style="pointer-events: none">
																					<svg xmlns:xlink="http://www.w3.org/1999/xlink"
																						class="uitk-icon-svg">
																		                <use xlink:href="#uitk-icon-location" />
																		            </svg>
																			</span>
																			</label>
																			<button class="btn btn-clear"
																				data-control="clear-field" disabled="" type="button">
																				<span class="btn-label"> <span class="icon"
																					aria-hidden="true"> <svg
																							xmlns:xlink="http://www.w3.org/1999/xlink"
																							class="uitk-icon-svg">
																						                    <use xlink:href="#uitk-icon-close" />
																						                 </svg>
																				</span> <span class="alt">Clear field: 목적지. Field
																						value: <span class="field-value" /></span>
																				</span>
																			</button>
																		</div>
																		<input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-airport_code"
																			id="flight-2-destination-flp-airport_code"
																			type="hidden" value="" /> <input
																			class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-hotel_id"
																			id="flight-2-destination-flp-hotel_id" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-lat_long"
																			id="flight-2-destination-flp-lat_long" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-region_id"
																			id="flight-2-destination-flp-region_id" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-region_type"
																			id="flight-2-destination-flp-region_type"
																			type="hidden" value="" /> <input
																			class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-station_code"
																			id="flight-2-destination-flp-station_code"
																			type="hidden" value="" /> <input
																			class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-point_of_supply"
																			id="flight-2-destination-flp-point_of_supply"
																			type="hidden" value="" /> <input
																			class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-city"
																			id="flight-2-destination-flp-city" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-country_code"
																			id="flight-2-destination-flp-country_code"
																			type="hidden" value="" /> <input
																			class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-category"
																			id="flight-2-destination-flp-category" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-heds"
																			id="flight-2-destination-flp-heds" type="hidden"
																			value="" /> <input class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-search_name"
																			id="flight-2-destination-flp-search_name"
																			type="hidden" value="" /> <input
																			class="gcw-storeable"
																			data-gcw-storeable-name="gcw-destination-2-ta"
																			id="flight-2-destination-flp-ta" type="hidden"
																			value="" />
																		<div class="autocomplete-dropdown"
																			style="display: none;"></div>
																	</div>
																</div>
																<div class="col gcw-multidest-date-field">
																	<div id="flight-2-departing-wrapper-flp"
																		data-control="datepicker"
																		class="datepicker theme-standard pin-left"
																		data-auto-pos="true">
																		<label
																			class="datepicker-label datepicker-arrow text icon-before"
																			for="flight-2-departing-flp"> <span
																			class="label">가는날</span> <input
																			id="flight-2-departing-flp"
																			class="text datepicker-trigger-input multidest-field gcw-start-date gcw-storeable gcw-valid-date-or-empty gcw-multidest-date"
																			type="text" placeholder="yyyy.mm.dd"
																			data-gcw-date-format="yyyy.mm.dd" autocomplete="off"
																			data-gcw-storeable-name="gcw-multidest-start-date-2">
																			<span class="icons-container"> <span
																				class="uitk-icon uitk-icon-calendar"
																				data-control="uitk-icon" aria-hidden="true">
																					<svg class="uitk-icon-svg">
																                        <use xlink:href="#uitk-icon-calendar" />
																                     </svg>
																			</span>
																		</span>
																		</label>
																		<div class="datepicker-dropdown" style="right: auto; left: -2px;" aria-hidden="true"></div>
																	</div>
																</div>
															</div>
														</fieldset>
													</div>
												</div>
												
												<fieldset class="cols-nested gcw-disabled">
													<p href="#" class="link gcw-age-rules" id="flight-children-help-flp" target="_blank">항공사 나이 규정<span class="visuallyhidden">&nbsp;새 창에서 열기</span> 
														<span aria-hidden="true" class="icon icon-popup"></span>
													</p>
												</fieldset>
												
												<div id="flight-lap-or-seat-container-flp" class="cols-row gcw-young-child-note gcw-disabled">
													<fieldset>
														<span class="gcw-disabled gcw-young-child-note-in-seats">만
															2세 미만의 유아는 좌석에 앉히셔야 합니다.</span> <span
															class="gcw-disabled gcw-young-child-note-in-laps">만
															2세 미만의 유아는 무릎에 앉히셔야 합니다.</span>
														<legend class="col gcw-young-child-legend">만 2세
															미만의 유아는 무릎에 앉히셔야 합니다.</legend>
														<span class="gcw-young-child-note-radio-wrapper"> <input
															id="flight-children-in-lap-flp" type="radio"
															name="laporseat" value="lap" checked="true"
															autocomplete="off"
															data-gcw-storeable-name="gcw-children-lap"
															class="gcw-storeable gcw-young-child"> <label
															id="flight-children-in-lap-label-flp" class="check col"
															for="flight-children-in-lap-flp"> <span
																class="inline-label">무릎에</span>
														</label> <input id="flight-children-in-seat-flp" type="radio"
															name="laporseat" value="seat"
															data-gcw-storeable-name="gcw-children-seat"
															class="gcw-storeable gcw-young-child" autocomplete="off">
															<label id="flight-children-in-seat-label-flp"
															class="check col" for="flight-children-in-seat-flp">
																<span class="inline-label">좌석에</span>
														</label>
														</span>
													</fieldset>
												</div>
													
												<div class="cols-nested" style="text-align: center;">
													<label class="col search-btn-col">
														<button type="submit"
															class="btn-primary btn-action gcw-submit" id="searchBtn">
															<span class="btn-label">검색하기</span>
														</button>
													</label>
												</div>
												<!-- hidden -->
												<input type="hidden" value="" name="airline_name" id="airline_name">
												<input type="hidden" value="" name="searchKey" id="searchKey">
												<input type="hidden" value="${dto.route_depart_region}" name="route_depart_region" id="route_depart_name">
												<input type="hidden" value="${dto.route_arrive_region}" name="route_arrive_region" id="route_arrive_region">
												<input type="hidden" value="${dto.route_depart_day}" name="route_depart_day" id="route_depart_day">
												<input type="hidden" value="${dto.depart_time}" name="depart_time" id="depart_time">
												<input type="hidden" value="${dto.arrive_time}" name="arrive_time" id="arrive_time">
												<input type="hidden" value="${dto.airplane_model}" name="airplane_model" id="airplane_model">
												<input type="hidden" value="${dto.flight_name}" name="flight_name" id="flight_name">
												<input type="hidden" value="${dto.route_estimate_time}" name="route_estimate_time" id="route_estimate_time">
												<input type="hidden" value="${dto.airline_site}" name="airline_site" id="airline_site">
												<input type="hidden" value="${dto.route_distance}" name="route_distance" id="route_distance"> 
												<input type="hidden" value="${dto.route_charge}" name="route_charge" id="route_charge">
												<input type="hidden" value="${dto.route_type}" name="route_type" id="route_type">
												<input type="hidden" value="${dto.stopover_code}" name="stopover_code" id="stopover_code">
												<input type="hidden" value="${dto.plane_code}" name="plane_code" id="plane_code">
											</form>
										</section>
									</div>
								</div>
								<script>
							      if (ewe_performance) {
							        window.requestAnimationFrame(function() {
							          ewe_performance.mark('mercury_wizard_painted');
							        });
							      }
							    </script>

								<!-- Wizard Error Messages -->
								<div class="gcw-error-messages-wrapper">
									<span id="gcw_requiredFieldErrorMessage">아래의 강조 표시된 {0}
										필드를 입력해 주세요.</span> <span id="gcw_is_valid_date">날짜는 {0} 형식이어야
										합니다.</span> <span id="gcw_date_range">날짜는 {0} ~ {1}에 해당해야 합니다.</span>
									<span id="gcw_max_date">날짜는 {0} 이전이어야 합니다.</span> <span
										id="gcw_min_date">날짜는 {0} 또는 이후여야 합니다.</span> <span
										id="gcw_min_range">날짜는 최소한 {0}일의 간격이 있어야 합니다.</span> <span
										id="gcw_max_range">날짜의 간격이 {0}일을 넘으면 안 됩니다.</span> <span
										id="gcw_max_range_nights">날짜의 간격이 {0}일을 넘으면 안 됩니다.</span> <span
										id="gcw_distinct_locations">출발지와 다른 목적지를 선택해 주세요.</span> <span
										id="gcw_less_than_n_travelers">1~{0}명의 여행객에 대해서만 예약하실 수
										있습니다. 검색 조건의 여행객 인원을 조정해 주세요.</span> <span
										id="gcw_child_ages_all_provided">아래에 아동의 만 나이를 입력해 주세요.</span>
									<span id="gcw_unattended_infant_in_lap">무릎에 앉히는 각 유아는 만
										12세 이상의 여행객과 동반하셔야 합니다.</span> <span id="gcw_isChildAloneAbove13">혼자
										여행하려면 만 13세 이상이어야 합니다. 그렇지 않으면 만 16세 이상과 동반해야 합니다.</span> <span
										id="gcw_isChildAloneAboveNAge">만 {0}세 이하의 어린이는 혼자 여행할 수
										없습니다. 어린이는 만 {1}세 이상의 보호자와 동반해야 합니다.</span> <span
										id="gcw_isChildAlone">어린이는 혼자 여행할 수 없습니다.</span> <span
										id="gcw_packagesPartialDateMessage">부분 체크인 및 체크아웃 날짜는
										도착 날짜와 출발 날짜 사이여야 합니다. 날짜를 다시 확인해 주세요.</span> <span
										id="gcw_carsTimeErrorMessage">반납 날짜 및 시간은 인수 날짜 및 시간보다
										최소한 2시간 이후여야 합니다.</span> <span id="gcw_carsPickUpTooSoonMessage">인수
										시간은 현재 시간에서 {0}시간 이후여야 합니다.</span> <span
										id="gcw_multiDestOriginErrorMessage">여행 {0}에 대해 어디서
										출발하시는지 알려주세요.</span> <span id="gcw_multiDestErrorDestinationMessage">여행
										{0}에 대해 어디로 가시는지 알려주세요.</span> <span
										id="gcw_multiDestDateErrorMessage">다음 형식으로 여행 {0}에 대한
										날짜를 입력해 주세요: {1}</span> <span id="gcw_originErrorMessage">어디서
										출발하시는지 알려주세요.</span> <span id="gcw_destinationErrorMessage">어디로
										가시는지 알려주세요.</span> <span id="gcw_departureDateErrorMessage">다음
										형식으로 가는 날짜를 입력해 주세요: {0}</span> <span id="gcw_returnDateErrorMessage">다음
										형식으로 오는 날짜를 입력해 주세요: {0}</span> <span id="gcw_multidest_date">출발
										날짜는 이전 출발 날짜보다 이후여야 합니다. 출발 날짜를 수정해 주세요.</span> <span
										id="gcw_rails_origin_from_TA">제공된 옵션에서 출발지를 선택해 주세요.</span> <span
										id="gcw_rails_destination_from_TA">제공된 옵션에서 목적지를 선택해
										주세요.</span> <span id="gcw_railscardNumber">레일카드 수는 여행객 수를 초과할
										수 없습니다.</span> <span id="gcw_railscardTypeSelected">레일카드 유형을
										제공해 주세요.</span> <span id="gcw_railsTimeErrorMessage">돌아오는 날짜와
										시간은 출발 날짜와 시간 이후여야 합니다.</span> <span id="gcw_youth_ages_all_provided">아래에
										청소년의 나이를 입력해 주세요.</span> <span id="gcw_senior_ages_all_provided">아래에
										고령자의 나이를 입력해 주세요.</span> <span id="gcw_driver_age_blank">아래에
										운전자 나이를 입력해 주세요.</span> <span id="gcw_driver_age_invalid">운전자
										나이는 만 18~99세여야 합니다.</span> <span
										id="gcw_railcardsCombinationValidation">일부 BahnCard는 함께
										사용하실 수 없습니다.</span> <span id="gcw_railsOriginMissing">출발역을 선택해
										주세요.</span> <span id="gcw_railsDestinationMissing">도착역을 선택해
										주세요.</span> <span id="gcw_railsDepartureDateMissing">가는 날짜를
										올바르게 선택해 주세요.</span> <span id="gcw_railsReturnDateMissing">오는
										날짜를 올바르게 선택해 주세요.</span> <span id="gcw_railsInvalidChildAge">아동
										여행객의 나이를 입력해 주세요.</span> <span id="gcw_railsInvalidYouthAge">청소년
										여행객의 나이를 입력해 주세요.</span> <span id="gcw_railsInvalidSeniorAge">고령자
										여행객의 나이를 입력해 주세요.</span> <span
										id="gcw_railsSameOriginDestinationError">도착역을 출발역과 다르게
										선택해 주세요.</span> <span id="gcw_railsInvalidPaxCount">이 여행의 인원을
										1~{0}명 범위로 입력해 주세요.</span> <span id="gcw_railsRouteNotSupported">현재
										이 노선은 지원되지 않습니다.</span> <span
										id="gcw_gtDepartureArrivalTimingDifferenceErrorMessage">출발
										항공편 시간은 적어도 도착 항공편의 2시간 이후여야 합니다.</span>
								</div>
								<!-- End Wizard Error Messages -->
							</div>
						</section>
					</div>
				</div>
			</div>
		<br/>
	</section>

	<!-- 만약 배경만 투명하게 하고 글자는 투명하지 않게 하려면 opacity 속성을 쓰지 말고, 배경색을 RGBA 색상을 이용하여 정한다.. -->
	<section class="page-section cta" style= "background-color: rgba( 0, 0, 0, 0.5 );">
		 <!--product section-->
	            <section id="product" class="product">
	                <div class="container">
	                    <div class="main_product roomy-80">
	                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
	                            <!-- Indicators -->
	                            <ol class="carousel-indicators">
	                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
	                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
	                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
	                            </ol>
	 
	                            <!-- Wrapper for slides -->
	                            <div class="carousel-inner" role="listbox">
	                                <div class="item active">
	                                    <div class="container">
	                                        <div class="row">
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/all.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>모든 항공사</h5>
	                                                        <h6>ALL OF AIRLINES</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/대한항공.png" style="width: 250px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>대한 항공</h5>
	                                                        <h6>KOEARN AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/아시아나항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>아시아나 항공</h5>
	                                                        <h6>ASIANA AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/중국동방항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>중국동방항공</h5>
	                                                        <h6>CHINA EAST AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	
	                                <div class="item">
	                                    <div class="container">
	                                        <div class="row">
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/ANA항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>ANA 항공</h5>
	                                                        <h6>ANA AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/진에어항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>진에어 항공</h5>
	                                                        <h6>JIN AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/JAL일본항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>JAL 일본항공</h5>
	                                                        <h6>JAL JAPANESE AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/이스타항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>이스타 항공</h5>
	                                                        <h6>EASTER AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="item">
	                                    <div class="container">
	                                        <div class="row">
	                                           <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/티웨이항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>티웨이 항공</h5>
	                                                        <h6>T'WAY AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/에바항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>에바항공</h5>
	                                                        <h6>EVA AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/타이항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>타이항공</h5>
	                                                        <h6>THAI AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="col-sm-3">
	                                                <div class="port_item xs-m-top-30">
	                                                    <div class="port_img">
	                                                        <img src="assets/images/알래스카항공.png" alt="" style="width: 252px; height: 250px"/>
	                                                        <div class="port_overlay text-center">
	                                                        </div>
	                                                    </div>
	                                                    <div class="port_caption m-top-20" align="center">
	                                                        <h5>알래스카항공</h5>
	                                                        <h6>ALASKA AIR</h6>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	
	                            <!-- Controls -->
	                            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
	                                <i class="fa fa-angle-left" aria-hidden="true"></i>
	                                <span class="sr-only">Previous</span>
	                            </a>
	
	                            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
	                                <i class="fa fa-angle-right" aria-hidden="true"></i>
	                                <span class="sr-only">Next</span>
	                            </a>
	                        </div>
	                    </div><!-- End off row -->
	                </div><!-- End off container -->
	            </section><!-- End off Product section -->
	            
	            <br/><br/>
	            
		<div class="card mb-3" style="width: 1600px; background-color: white; float: none; margin: 0 auto;" align="left">
		<div class="card-header" align="left">
			<span style="font-size: 20px; font-style: italic; font-weight: bold;"> &nbsp;&nbsp;<i class="fa fa-paper-plane"></i>&nbsp;&nbsp;오는날</span>
	    </div>
	    
		<!-- 리스트 출력 -->
			<div class="card-body">
			<!-- class="form-control"로 주고 글자를 맨 오른쪽으로 옮기어서 강제로 위치변경한다. -->
				<form id="option" method="post" name="ticketSearch" class="form-control" style="text-align: right; background: none; border: 0px">
					<select id="searchOption" name="searchOption" style="height: 38px; width: 180px">
						<option value="all" style="font-style: normal; font-weight: bold;">전체보기</option>
						<option value="최저가" style="font-style: normal; font-weight: bold;">최저가</option>
						<option value="최고가" style="font-style: normal; font-weight: bold;">최고가</option>
						<option value="최단시간" style="font-style: normal; font-weight: bold;">최단시간</option>
						<option value="최장시간" style="font-style: normal; font-weight: bold;">최장시간</option>
						<option value="빠른 출발순" style="font-style: normal; font-weight: bold;">빠른 출발순</option>
						<option value="늦은 출발순" style="font-style: normal; font-weight: bold;">늦은 출발순</option>
						<option value="빠른 도착순" style="font-style: normal; font-weight: bold;">빠른 도착순</option>
						<option value="늦은 도착순" style="font-style: normal; font-weight: bold;">늦은 도착순</option>
					</select> 
					<input type="button" class="btn page-link float-right" value="검색" onclick="searchBtn()" style="margin-left: 15px">
				</form>
				<br/>
				<div class="table-responsive">
						<table class="table table-bordered" width="100%" cellspacing="0" border="1">
							<thead>
								<tr>
									<th class="text-center" style="width: 11%">항공사</th>
									<th class="text-center" style="width: 10%">항공편명</th>
									<th class="text-center" style="width: 14%">출발시간</th>
									<th class="text-center" style="width: 14%">도착시간</th>
									<th class="text-center" style="width: 8%">예상시간</th>
									<th class="text-center" style="width: 10%">경로타입</th>
									<th class="text-center" style="width: 10%">항공운임료</th>
									<th class="text-center" style="width: 9%">세부정보</th>
									<th class="text-center" style="width: 16%">비고</th>
								</tr>
							</thead>
							<tbody>
							  <c:forEach items="${aList}" var="dto">
							   <c:if test="${dto.seat_capacity >= map.total}">
								<tr>
									<td class="text-center">
										<p href="#" style="text-decoration: none; font-size: 15px; font-family: sans-serif;">
											<img class="card-img-top" src="img/${dto.airline_name}.png" alt="" style="width: 36px; height: 36px;">
											&nbsp;${dto.airline_name}
											<p>${dto.airplane_model}</p>
										</p>
									</td>
									
									<td class="text-center">${dto.flight_name}</td>
									
									<td class="text-center">
										<input type="text" value="${dto.depart_time}" style="CURSOR:hand; text-align: center; border: none; color: gray; font-family: inherit;" title="${dto.route_depart_region}" readonly="readonly"> 
									</td>
									
									<td class="text-center">
										<input type="text" value="${dto.arrive_time}" style="CURSOR:hand; text-align: center; border: none; color: gray; font-family: inherit;" title="${dto.route_arrive_region}" readonly="readonly"> 
									</td>
									
									<td class="text-center">
										<span><i class="fa fa-clock-o" aria-hidden="true"></i></span>&nbsp;${dto.route_estimate_time}
									</td>
									
									<td class="text-center">${dto.route_type}</td>
									
									<td class="text-center">
										￦<fmt:formatNumber value="${dto.route_charge}" type="number" />원
									</td>
									
									<td class="text-center">
									<c:url var="content" value="ticketdetail.do">
									    <c:param name="route_depart_region" value="${dto.route_depart_region}"></c:param> <!-- 출발지 -->
										<c:param name="route_arrive_region" value="${dto.route_arrive_region}"></c:param> <!-- 도착지 -->
										<c:param name="route_depart_day" value="${dto.route_depart_day}"></c:param> <!-- 출발일 --> 
										<c:param name="depart_time" value="${dto.depart_time}"></c:param> <!-- 출발시간 --> 
										<c:param name="arrive_time" value="${dto.arrive_time}"></c:param> <!-- 도착시간 -->
										<c:param name="airline_name" value="${dto.airline_name}"></c:param> <!-- 항공사 -->
										<c:param name="airplane_model" value="${dto.airplane_model}"></c:param> <!-- 항공기종 -->
										<c:param name="flight_name" value="${dto.flight_name}"></c:param> <!-- 항공편명 -->
										<c:param name="route_estimate_time" value="${dto.route_estimate_time}"></c:param> <!-- 예상시간 -->
										<c:param name="airline_site" value="${dto.airline_site}"></c:param> <!-- 사이트 -->
										<c:param name="route_distance" value="${dto.route_distance}"></c:param> <!-- 총거리 -->   
									</c:url>
										<a href="${content}" style="text-decoration: none; font-size: 15px; font-family: sans-serif;"
										onclick="window.open('${content}', 'ticket_detail', 'toolbar=no, width = 700, height = 700, top = 100, left = 600');return false">
										세부정보 확인
										</a>
									</td>
									 
									<!-- 왕복, 편도에 따라서 Controller에서 RequestMapping action을 구분 -->
									<!-- 왕복  : 결제 UI로 넘어가기 전 오는날을 선택한다. -->
									<!-- 편도  : 결제 UI로 바로 사용자 정보가 넘어간다. -->
									
									<!-- 사용자 정보 파라미터(두번째 티켓(오는날)에 대한 정보) -->
								    <td class="text-center">
									<c:url var="content" value="resFormRound.do">
										<c:param name="route_depart_region" value="${dto.route_depart_region}"></c:param> <!-- 출발지 -->
										<c:param name="route_arrive_region" value="${dto.route_arrive_region}"></c:param> <!-- 도착지 -->
										<c:param name="route_depart_day" value="${dto.route_depart_day}"></c:param> <!-- 출발일 --> 
										<c:param name="depart_time" value="${dto.depart_time}"></c:param> <!-- 출발시간 --> 
										<c:param name="arrive_time" value="${dto.arrive_time}"></c:param> <!-- 도착시간 -->
										<c:param name="airline_name" value="${dto.airline_name}"></c:param> <!-- 항공사 -->
										<c:param name="airplane_model" value="${dto.airplane_model}"></c:param> <!-- 항공기종 -->
										<c:param name="flight_name" value="${dto.flight_name}"></c:param> <!-- 항공편명 -->
										<c:param name="route_estimate_time" value="${dto.route_estimate_time}"></c:param> <!-- 예상시간 -->
										<c:param name="airline_site" value="${dto.airline_site}"></c:param> <!-- 사이트 -->
										<c:param name="route_distance" value="${dto.route_distance}"></c:param> <!-- 총거리 -->   
										<c:param name="route_charge" value="${dto.route_charge}"></c:param> <!-- 기본요금 -->
										<c:param name="plane_code" value="${dto.plane_code}"></c:param> <!-- 항공기 코드 -->
							
									<!-- 사용자 정보 파라미터(첫번째 티켓(가는날)에 대한 정보) -->
										<c:param name="first_route_depart_region" value='${FirstInfo.route_depart_region}'></c:param>
										<c:param name="first_route_arrive_region" value='${FirstInfo.route_arrive_region}'></c:param> 
										<c:param name="first_route_depart_day" value='${FirstInfo.route_depart_day}'></c:param> 
										<c:param name="first_depart_time" value='${FirstInfo.depart_time}'></c:param> 
										<c:param name="first_arrive_time" value='${FirstInfo.arrive_time}'></c:param> 
										<c:param name="first_airline_name" value='${FirstInfo.airline_name}'></c:param> 
										<c:param name="first_airplane_model" value='${FirstInfo.airplane_model}'></c:param> 
										<c:param name="first_flight_name" value='${FirstInfo.flight_name}'></c:param>  
										<c:param name="first_route_estimate_time" value='${FirstInfo.route_estimate_time}'></c:param> 
										<c:param name="first_airline_site" value='${FirstInfo.airline_site}'></c:param>  
										<c:param name="first_route_distance" value='${FirstInfo.route_distance}'></c:param>   
										<c:param name="first_route_charge" value='${FirstInfo.route_charge}'></c:param>   
										<c:param name="first_route_type" value="${FirstInfo.route_type}"></c:param>
										<c:param name="first_plane_code" value="${FirstInfo.plane_code}"></c:param>
										
									<!-- 사용자가 티켓 검색 시 입력했던 정보 -->
									    <c:param name="flighttype" value='${map.flighttype}'></c:param>
										<c:param name="depart_region" value='${map.depart_region}'></c:param> 
										<c:param name="arrive_region" value='${map.arrive_region}'></c:param> 
										<c:param name="startDate" value='${map.startDate}'></c:param> 
										<c:param name="endDate" value='${map.endDate}'></c:param> 
										<c:param name="adult" value='${map.adult}'></c:param> 
										<c:param name="children" value='${map.children}'></c:param> 
										<c:param name="laporseat" value='${map.laporseat}'></c:param>  
										<c:param name="airline_name" value='${map.airline_name}'></c:param>  
										<c:param name="seat_grade" value="${seat_grade}"></c:param>
										
									<!-- 경유지에 대한 정보(첫번째 티켓 선택시에만 경유지를 추가해주어서 두번째 티켓에서는 경유지를 신경쓰지 않아도 된다.
									         따라서 ${dto.route_type}과 ${dto.stopover_code}를 파라미터로 보내지 않고 첫번째 티켓에 대한 경유지 코드만 파라미터로 보내면 된다. -->
										<c:if test="${not empty stop_code}">
											<c:param name="stop_code" value="${stop_code}"></c:param>	
										</c:if>
									</c:url>
									
									<a href="${content}" style="text-decoration: none; font-size: 15px; font-family: sans-serif; color: gray; font-weight: bold;">
										선택하기<br/><span style="color: gray;">( </span><span style="color: red;">좌석 수 : ${dto.seat_capacity}</span><span style="color: gray;"> )</span>
									</a>
									</td>
								  </tr>
							    </c:if>
							  </c:forEach> 
							</tbody>
						</table>
				   </div>
				   <br/>
				   
				<!-- 페이지 출력 시작 -->
				<ul class="pagination justify-content-center">
				<!-- 페이지 이전  -->
				<c:if test = "${pv.startPage > 1}">
					<li class="page-item">
						<a class="page-link" aria-label="Previous" href ="ticketlistround.do?currentPage=${pv.startPage - pv.blockPage}&searchKey=${pv.searchKey}&searchWord=${pv.searchWord}">
							<span aria-hidden="true">&laquo;</span> 
							<span class="sr-only">Previous</span>
						</a>
					</li>
				</c:if>
				
				<!-- 페이지를 출력하기 위해 -->
				<!-- request영역에 지정되어있는 값은 아래처럼 출력가능. -->
				<c:forEach begin="${pv.startPage}" end="${pv.endPage}" var="i"> 
				
				<li class= "page-item" >
					<span>
						<a class= "page-link" href="ticketlistround.do?currentPage=${i}&searchKey=${map.searchKey}&searchWord=${pv.searchWord}&flighttype=${pv.flighttype}&startDate=${pv.startDate}&endDate=${pv.endDate}&adult=${pv.adult}&children=${pv.children}&laporseat=${pv.laporseat}&depart_region=${pv.depart_region}&arrive_region=${pv.arrive_region}&airline_name=${map.airline_name}
						&route_depart_region=${dto.route_depart_region}&route_arrive_region=${dto.route_arrive_region}&route_depart_day=${dto.route_depart_day}&plane_code=${dto.plane_code}
						&depart_time=${dto.depart_time}&arrive_time=${dto.arrive_time}&airplane_model=${dto.airplane_model}&flight_name=${dto.flight_name}&route_estimate_time=${dto.route_estimate_time}
						&airline_site=${dto.airline_site}&route_distance=${dto.route_distance}&route_charge=${dto.route_charge}&route_type=${dto.route_type}&stopover_code=${dto.stopover_code}&seat_grade=${seat_grade}">${i}</a>
					</span> 
				</li>
			
				</c:forEach>
							
				<!-- 페이지 다음  -->
				<!-- end page가 total page보다 작을때만 다음버튼이 활성화 되야 한다. -->
				<c:if test = "${pv.endPage < pv.totalPage}">
					<li class="page-item">
						<a class="page-link" aria-label="Next" href ="ticketlistround.do?currentPage=${pv.startPage + pv.blockPage}&searchKey=${pv.searchKey}&searchWord=${pv.searchWord}">
							<span aria-hidden="true">&raquo;</span> 
							<span class="sr-only">Next</span>
						</a>
					</li>
				</c:if> 
				</ul>
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
		
		
  
		<div class="site-content-wrap">
			<script
				src="//a.travel-assets.com/bundles/storefront-web/moduleRegistry-bundle/moduleRegistry-6019061f997dd309836a46cff4346d40-min.js"
				type="text/javascript" defer></script>
			<script
				src="//a.travel-assets.com/bundles/storefront-web/secondaryContent-bundle/bannerConsolidation-cc74f7c6105b7fbf9808ee77736f67cf-min.js"
				type="text/javascript" defer></script>
			<script
				src="//a.travel-assets.com/bundles/storefront-web/ads-bundle/ads-mercury-fe8117576613bd29a4db7281683b5ff2-min.js"
				type="text/javascript" defer async></script>
			<script
				src="//a.travel-assets.com/bundles/storefront-web/metrics-bundle/metrics-a2b13b405bd5670bbda385ee0b6a0f9c-min.js"
				type="text/javascript" defer async></script>

			<script async defer
				src='https://www.googletagservices.com/tag/js/gpt.js'></script>
			<script async defer
				src='//a.travel-assets.com/ads/2.0/c04f072a569dabe62dc18513eedfa513da13c6a1/expads-min.js'></script>

		 <!-- 뒷배경 -->
          <script>
              window.isAdblockerDisabled = false;
              require("jquery",function($) {
                $.ajax({
                  url: "//a.travel-assets.com/ads/2.0/18527546adb4ba9d335f0b2e503fa1c260f6e5b9/expadsblocked.js"
                })
                .always(function() {
                  (function (window) {
                    if (!window.isAdblockerDisabled) {
                      var element = document.getElementById('hero-banner');
                      if (element !== null) {
                          element.style.backgroundImage = 'url(img/airline.jpg)';
                          element.style.backgroundRepeat = 'no-repeat';
                          element.style.backgroundSize = 'cover';
                          element.setAttribute('alt', 'background image');
                      }
                    }
                  })(window);
                });
              })
           </script>

		   <script>
           	 	require('svgIcons', function(){});
     	   </script>

			<script>define('uitk_messages',['uitk_i18n'],function(I18n){I18n.translations=I18n.translations||{};I18n.translations['ko_KR']={"cancel":"취소","tabs_no_total":"탭","close_button_menu_closed":"닫기 버튼이 선택되어 메뉴가 닫혔습니다.","map_complimentary_info":"추가 지도 정보","date_picker_show_months":"표시 중","media_gallery_next_default":"다음 사진, 총 {{arg0}}개 항목.","carousel_single_item_in_view":"{{arg0}}: {{arg1}}개 항목({{arg2}}개 중)","off_canvas_toggle_closed":"사이드바가 닫혔습니다.","twitter":"트위터","carousel_group_number_label":"그룹","start_day_of_the_week":"0","resp_sort_bar_more_label":"더 보기","selected":"선택됨","current_page":"현재 페이지","pagination_showing_results":"총 {{arg2}}개 결과 중 {{arg0}} ~ {{arg1}}번째 표시 중","date_separator":".","pagination_select_page":"페이지 선택","months":"[1월, 2월, 3월, 4월, 5월, 6월, 7월, 8월, 9월, 10월, 11월, 12월]","resp_sort_bar_results_label":"{{arg0}} 버튼이 선택되었습니다. {{arg2}}개 중 {{arg1}}번 버튼","map_close":"지도 닫기","carousel_multiple_items_in_view":"{{arg0}}: {{arg1}} ~ {{arg2}}개 항목({{arg3}}개 중)","drawer_filter_close":"필터 패널이 현재 닫혔습니다. 콘텐츠 영역으로 다시 돌아왔습니다.","pagination_goto_page":"페이지로 이동","content_slider_previous_label":"이전 페이지","pagination_top_of_page":"페이지 맨 위로","playback_change_search":"검색 조건 변경","date_picker_date_disabled":"날짜 해제됨","carousel_previous_label":"{{arg0}}: 이전 그룹","airport":"공항","media_gallery_no_image":"사진 없음","pagination_prev":"이전","item_selected_menu_closed":"{{arg0}} 항목을 선택하셔서 메뉴가 닫혔습니다.","date_picker_close_hint":"달력을 닫거나 계속하여 날짜를 선택하세요.","date_picker_start_valid_range":"유효한 날짜 범위의 시작","modal_loader_title":"로드 중...","carousel_beginning":"첫 번째 항목입니다.","drawer_nav_open":"기본 탐색이 현재 열렸습니다.","date_picker_use_hint_touch":"아래 표에서 날짜를 선택하세요.","clear_button_screen_reader_text":"필드 지우기: {{arg0}}. 필드 값:","off_canvas_close":"사이드바 닫기","field_cleared":"필드가 지워졌습니다.","off_canvas_toggle_opened":"사이드바가 열렸습니다.","carousel_next_label":"{{arg0}}: 다음 그룹","trainstation":"기차역","city":"지역/도시","collapsed":"축소됨","media_gallery_previous_image_button":"이전 사진 버튼,","share_with":"다음과 공유:","date_picker_next_month":"다음 달","content_slider_next_label":"다음 페이지","remove":"삭제","modal_loader_text_default":"로딩 중","expanded":"확장됨","rating_stars_text":"({{arg0}}점 만점)","media_gallery_count":"{{arg1}}개 중 {{arg0}}개.","tabs_control":"{{arg1}}개 중 {{arg0}}번 탭","date_picker_prev_month":"이전 달","metrostation":"지하철역","resp_sort_bar_sort_label":"정렬 기준:","hotel":"호텔","media_gallery_next_image_button":"다음 사진 버튼,","drawer_default_close":"서랍이 현재 닫혔습니다. 콘텐츠 영역으로 다시 돌아왔습니다.","share":"공유하기","pagination_showing_results_in_pages":"{{arg0}}/{{arg1}}페이지 표시 중","close":"닫기","email":"이메일","sort_bar_toggle_column":"열 토글","address":"주소","drawer_nav_close":"기본 탐색이 현재 닫혔습니다. 콘텐츠 영역으로 다시 돌아왔습니다.","date_picker_full_days_of_the_week":"[일요일, 월요일, 화요일, 수요일, 목요일, 금요일, 토요일]","facebook":"Facebook","date_picker_date_empty":"비어 있음","date_picker_use_hint":"날짜를 입력하거나 아래 표에서 선택하세요.","date_picker_date_hbs_placeholder":"yyyy년 mm월 dd일","google_plus":"Google+","days_of_the_week":"[일, 월, 화, 수, 목, 금, 토]","pinterest":"Pinterest","tweet":"트윗하기","typeahead_results_displayed_one":"1개의 제안 항목이 있습니다. 화살표 키를 사용하여 목록을 탐색하실 수 있습니다.","date_picker_end_valid_range":"유효한 날짜 범위의 끝","media_gallery_previous_default":"이전 사진, 총 {{arg0}}개 항목.","media_gallery_showing_item":"총 {{arg1}}개 중 {{arg0}}개 항목 표시 중입니다.","pagination_next":"다음","attraction":"관광 명소","carousel_end":"더 이상 항목이 없습니다.","drawer_default_open":"서랍이 현재 열렸습니다.","carousel_default_name":"캐로셀","content_slider_page_number_label":"페이지","nights_text":"[1박, 박]","date_format":"yymmdd","typeahead_results_displayed_other":"{{arg0}}개의 제안 항목이 있습니다. 화살표 키를 사용하여 목록을 탐색하실 수 있습니다.","pagination_go_to_page":"{{arg0}}페이지로 이동","drawer_filter_open":"필터 패널이 현재 열렸습니다."};});</script>

			<script>
      			define('uitk_domReady', function(){
        		return true;
     		 });
    		</script>
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
	
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin.min.js"></script>
	<script async defer
		src="//c.travel-assets.com/uitoolkit/2-166/4e1c8f445ddee5a86dbadb0c116a1c899bcba51e/core/js/uitk-jquery-jstemplate-bundle-min.js"></script>
	<script async defer
		src="//a.travel-assets.com/uitoolkit/2-166/4e1c8f445ddee5a86dbadb0c116a1c899bcba51e/core/js/uitk-core-bundle-min.js"></script>
	<script async defer
		src="//www.expedia.com/i18n/16/ko_KR/dateTimeFormats.js?module=exp_datetimeformats"></script>
		
	<!-- bxslider -->
	<!-- JS includes -->
    <script src="assets/js/vendor/jquery-1.11.2.min.js"></script>
    <script src="assets/js/vendor/bootstrap.min.js"></script>

    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/jquery.magnific-popup.js"></script>
    <script src="assets/js/jquery.easing.1.3.js"></script>
    <script src="assets/css/slick/slick.js"></script>
    <script src="assets/css/slick/slick.min.js"></script>
    <script src="assets/js/jquery.collapse.js"></script>
    <script src="assets/js/bootsnav.js"></script>

    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
