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

					<li class="nav-item px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="main.do"><i class="fa fa-fighter-jet" aria-hidden="true" id="link"></i> &nbsp;항공권 <span class="sr-only">(current)</span></a>
					</li>
					
					<li class="nav-item px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="weatherinfo.do"><i class="fa fa-sun-o" aria-hidden="true"></i> &nbsp;날씨</a>
					</li>
					
					<li class="nav-item px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="rate.do"><i class="fa fa-krw" aria-hidden="true"></i> &nbsp;환율</a>
					</li>
					
					<li class="nav-item active px-lg-4">
					<a class="nav-link text-uppercase text-expanded" href="time.do"><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;시차</a>
					</li>
					
				</ul>
			</div>
		</div>
	</nav>

	<section class="page-section cta" style="background-color: rgba(0,0,0,0.5);">
	
	

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<script language="JavaScript">
<!-- JavaScript
function airport(html_file)
{
     window.open
(html_file,'namo','width=670,height=490,resize=no');
}
// - JavaScript - -->
</script>
<script language="JavaScript">
<!--
function kim_1(ddd){
window.open(ddd,'ddd','width=670,height=490,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no')
}
//-->
</script>
<script language="JavaScript">
<!-- JavaScript
function jump2(asp_file)
{
     window.open
(asp_file,'namo','width=350,height=250,resize=no');
}
// - JavaScript - -->
</script>

<SCRIPT language=javascript>
<!--
function gettime()
{
    today = new Date();
    year = today.getFullYear();
    month =  today.getMonth();
    month = month + 1;
    day = today.getDate();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
}


function citytime()
{
    gettime();
    zone = document.clock.cityname.options[document.clock.cityname.selectedIndex].value;
    hours = parseInt(hours) + parseInt(zone);
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    }    
	
	
    document.clock.city.value= year + "년 " + month + "월 " + day + "일 " + hours + ":" + minutes + ":" + seconds;
    setTimeout("citytime()", 1000);
}

//-->
</SCRIPT>

<SCRIPT language=JavaScript>
<!--

function openLoginWindow(url) {

open (url,

        "LoginWindow",

        "toolbar=no,width=600,height=500,directories=no,status=no,scrollbars=yes,resizable=no");

}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->
</SCRIPT>

<SCRIPT language=JavaScript>
<!--
var timerID=null;
var timerRunning = false;
function stopclock () {
      if(timerRunning)
        clearTimeout(timerID);
        timerRunning = false;
}
function showtime1 () { /토론토/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 14;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form1.insik1.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime1()",1000);
        timerRunning=true;
}
function showtime2 () { /북경/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 1;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form2.insik2.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime2()",1000);
        timerRunning=true;
}

function showtime3 () { /워싱톤/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 13;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form3.insik3.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime3()",1000);
        timerRunning=true;
}

function showtime4 () { /동경/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() + 0;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form4.insik4.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime4()",1000);
        timerRunning=true;
}

function showtime5 () { /로스엔젤레스/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 17;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form5.insik5.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime5()",1000);
        timerRunning=true;
}

function showtime6 () { /홍콩/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 1;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form6.insik6.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime6()",1000);
        timerRunning=true;
}

function showtime7 () { /브에노아이레스/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 12;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form7.insik7.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime7()",1000);
        timerRunning=true;
}

function showtime8 () { /리오데자네이로/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 11;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 ) 
    {
     seconds ="0"+seconds;
    } 
        document.form8.insik8.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime8()",1000);
        timerRunning=true;
}

function showtime9 () { /시드니/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() + 2;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form9.insik9.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime9()",1000);
        timerRunning=true;
}

function showtime10 () { /런던/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 8;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form10.insik10.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime10()",1000);
        timerRunning=true;
}

function showtime11 () { /모스크바/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 6;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 ) {
     hours ="0"+hours;
    }
    if ( minutes <10 ) {
     minutes ="0"+minutes;
    }
    if ( seconds <10 ) {
     seconds ="0"+seconds;
    } 
        document.form11.insik11.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime11()",1000);
        timerRunning=true;
}


function showtime12() { /케이프타운/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() - 7;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if (hours < 0)
    {
     hours = hours + 24;
     day = day - 1;
    }
    
    if (hours > 23)
    {
     hours = hours - 24;
     day = day + 1;
    }
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    } 
        document.form12.insik12.value = timeValue = month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime12()",1000);
        timerRunning=true;
}


function showtime13() { /대한민국/
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var month=month + 1;
        var day=now.getDate()
        var hours=now.getHours() + 0;
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    if ( hours <10 )
    {
     hours ="0"+hours;
    }
    if ( minutes <10 )
    {
     minutes ="0"+minutes;
    }
    if ( seconds <10 )
    {
     seconds ="0"+seconds;
    }
        document.form13.insik13.value = year + "년 " + month + "월 " + day + "일 " + hours + ":" + minutes + ":" + seconds;
        timerID=setTimeout("showtime13()",1000);
        timerRunning=true;
}


function startclock(){
stopclock();
showtime1();
showtime2();
showtime3();
showtime4();
showtime5();
showtime6();
showtime7();
showtime8();
showtime9();
showtime10();
showtime11();
showtime12();
showtime13();
}
//-->
</SCRIPT>

<SCRIPT type=text/javascript>
function open_window(url, width, height) {
        newWindow = window.open(url,'newWindow','directories=no,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no,width='+width+',height='+height);
}
</SCRIPT>

<script language="JavaScript">
<!--
function namosw_exchange_src(name, rpath, nsdoc) 
{ 
  str = (navigator.appName == 'Netscape') ? nsdoc+'.'+name : 'document.all.'+name;
  img = eval(str);
  if (img) {
    if (img.altsrc == null) {
      img.altsrc = img.src;
      img.src    = rpath;
    } else {
      var temp   = img.src;
      img.src    = img.altsrc;
      img.altsrc = temp;
    }
  } 
}

function namosw_preload_img()
{ 
  var img_list = namosw_preload_img.arguments;
  if (document.preloadlist == null) 
    document.preloadlist = new Array();
  var top = document.preloadlist.length;
  for (var i=0; i < img_list.length; i++) {
    document.preloadlist[top+i]     = new Image;
    document.preloadlist[top+i].src = img_list[i];
  } 
}

//-->
</script>
<link rel="stylesheet" type="text/css" href="http://images2.jautour.com/jautour/styles/Content/product_schedule_new2016.css">
</head>

<body bgcolor="white" text="black" link="#003399" vlink="#996699" alink="blue" onLoad="startclock();" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<div class="wordTimeWrap" style="margin: 0 auto;">
    <table border="0" cellspacing="0" width="670">
		<tr>
			<td width="670" valign="top"><div class="title" style="text-align: center;">세계의 시간/시차정보</div></td>
		</tr>
		<tr>
			<td width="670" valign="top">
	 
				<table border="0" cellpadding="0" cellspacing="0" width="620" height="343">
					<tr>
						<td width="600" valign="top">
							<div align="center">
								<table class="selectBoxArea" border="0" cellpadding="0" cellspacing="0" width="640">
									<tr>
										<td>
											<form name="form13" method="get">
												<p align="center" style="line-height:150%;" class="pbox">
													<input class="tit" type="text" name="한국" value="현재한국시간"  size="14">
													<input class="txt" type="text" name="insik13" size="25">
												</p>
											</form>
										</td>
										<td>
											<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
													<td align="left">
														<form name="clock" method="get">
															<p align="center"style="line-height:150%;" class="pbox">
																<select class="selectAreatxt" name="cityname" onChange="citytime()">
																	<option selected value="0">도시,지역명</option>
																	<option value="+1">골드코스트</option>
																	<option value="+1">괌</option>
																	<option value="-6">나이로비</option>
																	<option value="-8">나폴리</option>
																	<option value="-3">뉴델리</option>
																	<option value="-14">뉴욕</option>
																	<option value="-8">니스</option>
																	<option value="-3">다카</option>
																	<option value="-14">달라스</option>
																	<option value="-9">더블린</option>
																	<option value="-16">덴버</option>
																	<option value="-17">라스베가스</option>
																	<option value="-1">랑카위</option>
																	<option value="-9">런던</option>
																	<option value="-8">로마</option>
																	<option value="-17">로스엔젤레스</option>
																	<option value="+4">로토루아</option>
																	<option value="-14">리마</option>
																	<option value="-9">리스본</option>
																	<option value="-11">리오데자네이루</option>
																	<option value="-1">마닐라</option>
																	<option value="-8">마드리드</option>
																	<option value="-14">마이애미</option>
																	<option value="-1">마카오</option>
																	<option value="-15">멕시코시티</option>
																	<option value="+2">멜버른</option>
																	<option value="-6">모스크바</option>
																	<option value="-14">몬트리얼</option>
																	<option value="-8">뮌헨</option>
																	<option value="-8">밀라노</option>
																	<option value="-6">바그다드</option>
																	<option value="-8">바르샤바</option>
																	<option value="-8">바르셀로나</option>
																	<option value="-2">방콕</option>
																	<option value="-8">베를린</option>
																	<option value="-8">베네치아</option>
																	<option value="-8">베른</option>
																	<option value="-7">베이루트</option>
																	<option value="-17">벤쿠버</option>
																	<option value="-14">보고타</option>
																	<option value="-1">보라카이</option>
																	<option value="-3">봄베이</option>
																	<option value="-13">보스톤</option>
																	<option value="-8">부다페스트</option>
																	<option value="-12">부에노스아이레스</option>
																	<option value="-1">북경</option>
																	<option value="-8">브뤼셀</option>
																	<option value="+1">브리스번</option>
																	<option value="+2">블라디보스톡</option>
																	<option value="-8">비엔나</option>
																	<option value="-1">사이판</option>
																	<option value="-20">사모아</option>
																	<option value="-14">산티아고</option>
																	<option value="-11">상파울로</option>
																	<option value="-1">상하이</option>
																	<option value="-16">샌프란시스코</option>
																	<option value="-5">생테떼부르그</option>
																	<option value="-1">소주</option>
																	<option value="+2">솔로몬</option>
																	<option value="-8">스톡홀롬</option>
																	<option value="+2">시드니</option>
																	<option value="-17">시애틀</option>
																	<option value="-15">시카고</option>
																	<option value="-1">싱가포르</option>
																	<option value="-7">아테네</option>
																	<option value="-8">암스텔담</option>
																	<option value="-14">애틀랜타</option>
																	<option value="-18">앵커리지</option>
																	<option value="-15">에드먼턴</option>
																	<option value="-7">예루살렘</option>
																	<option value="-8">오슬로</option>
																	<option value="+4">오클랜드</option>
																	<option value="-7">요하네스버그</option>
																	<option value="+0">울란바토르</option>
																	<option value="-14">워싱턴 DC</option>
																	<option value="+4">웰링턴</option>
																	<option value="-7">이스탄불</option>
																	<option value="-8">인스부르크</option>
																	<option value="-2">자카르타</option>
																	<option value="-8">잘츠부르크</option>
																	<option value="-8">제네바</option>
																	<option value="-8">취리히</option>
																	<option value="-13">카라카스</option>
																	<option value="-9">카사블랑카</option>
																	<option value="-7">카이로</option>
																	<option value="-6">카잔</option>
																	<option value="-7">케이프타운</option>
																	<option value="-15">켈거리</option>
																	<option value="-8">코펜하겐</option>
																	<option value="-1">쿠알라룸푸르</option>
																	<option value="-15">쿠웨이트</option>
																	<option value="-14">퀘벡</option>
																	<option value="+4">퀸즈타운</option>
																	<option value="+4">크라이스트처치</option>
																	<option value="-8">킨샤사</option>
																	<option value="-1">타이페이</option>
																	<option value="-4">타슈켄트</option>
																	<option value="-14">토론토</option>
																	<option value="+0">토쿄</option>
																	<option value="-8">파리</option>
																	<option value="-2">파타야</option>
																	<option value="-1">퍼스</option>
																	<option value="-8">폼베이</option>
																	<option value="-2">푸켓</option>
																	<option value="-15">페닉스</option>
																	<option value="-2">프놈펜</option>
																	<option value="-8">프라하</option>
																	<option value="-8">프랑크푸르트</option>
																	<option value="-8">피렌체</option>
																	<option value="+4">피지</option>
																	<option value="-2">하노이</option>
																	<option value="-8">하이델베르그</option>
																	<option value="-7">헬싱키</option>
																	<option value="-19">호놀룰루</option>
																	<option value="-2">호치민</option>
																	<option value="-1">홍콩</option>
																	</select>
																<input class="inputTimetxt" type="text" name="city" value="현지시간" size="25" onFocus="this.blur()" >
															</p>
														</form>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td width="620" colspan="2"></td>
									</tr>
								</table>
							</div>
						</td>
					</tr>			
					<tr>
						<td width="600" valign="top">
							<table border="0" cellpadding="0" cellspacing="0" width="620">
								<div class="posiR">
									<div class="posiA_1">
										<form name="form1" method="get">
											<div class="txt_area">토론토</div>
											<input type="text" name="insik1" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_2">
										<form name="form2" method="get">
											<div class="txt_area">북경</div>
											<input type="text" name="insik2" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_3">
										<form name="form3" method="get">
											<div class="txt_area">워싱턴 DC</div>
											<input type="text" name="insik3" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_4">
										<form name="form4" method="get">
											<div class="txt_area">동경</div>
											<input type="text" name="insik4" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_5">
										<form name="form5" method="get">
											<div class="txt_area">로스엔젤레스</div>
											<input type="text" name="insik5" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_6">
										<form name="form6" method="get">
											<div class="txt_area">홍콩</div>
											<input type="text" name="insik6" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_7">
										<form name="form7" method="get">
											<div class="txt_area">브에노아이레스</div>
											<input type="text" name="insik7" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_8">
										<form name="form8" method="get">
											<div class="txt_area">리오데자네이로</div>
											<input type="text" name="insik8" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_9">
										<form name="form9" method="get">
											<div class="txt_area">시드니</div>
											<input type="text" name="insik9" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_10">
										<form name="form10" method="get">
											<div class="txt_area">런던</div>
											<input type="text" name="insik10" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_11">
										<form name="form11" method="get">
											<div class="txt_area">모스크바</div>
											<input type="text" name="insik11" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
									<div class="posiA_12">
										<form name="form12" method="get">
											<div class="txt_area">케이프타운</div>
											<input type="text" name="insik12" size="13" class="cw" style="font-family:돋움; font-size:9pt; border-width:1; border-color:black;">
										</form>
									</div>
								</div>
								<tr>									
									<td width="620" rowspan="12">
										<p class="map_bg" align="center" style="line-height:150%;"><img src="http://images2.jautour.com/jautour/images/travelinfo/time_map.jpg" border="0"  alt="세계시간시차표">
									</td>
								</tr>
							</table>   
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
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
