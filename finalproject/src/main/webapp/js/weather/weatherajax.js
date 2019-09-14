/*	2018.02.07 
 *	made by KJH
 */
$(document).ready(function(){
		//최초1회만 자동실행하도록한다. 날씨페이지 초기 진입시 seoul 의 날씨를 받아오도록한다. 
	var city1="Seoul";
	console.log("onready status " + city1 );
		$.ajax({
			url:'weather.do?q='+city1,
			type:"GET",
			dataType:"json",//jsonp인지 json 인지 바꿔볼것. 
			 error: function(){
					alert("날씨정보 수신에 실패하였습니다.");
					console.log("weatherajax.js - 56line");
					},
			success:function(data){//성공식 콜백할 함수의 내용을 명시함. 
				console.log(data);
				var widget=show(data);
				$('#show').html(widget);//서버에서 통신을 하고 돌아온값을 html로 써준다. 
				$('#city').val('');//검색이 되었으면 검색창을 초기화 시켜준다. 
				
				 
				 //==========================================
				 //현재 날씨 정보를 받아오면 5일치를 받아온다. 
				 console.log("1name"+data.list[0].name);
				 console.log("2country"+data.list[0].sys.country);
				 var area = data.list[0].name;//지역명
				 var country = data.list[0].sys.country;//국가코드
				 $.ajax({
					 url:"forecast5days.do?area="+area+"&country="+country,
					 type:"GET",
					 error: function(){
							alert("날씨정보 수신에 실패하였습니다.");
							console.log("weatherajax.js - 32line");
							},
					 success:function(data1){
						 console.log("data1 출력되는곳");
						 console.log(data1);
						 console.log("5일치 일기예보끝. ");
						 var forecast_data=makeforecastlist(data1);
						 $('#forcast_list').html(forecast_data);
						  

						 
					 }
				 });
				 //=========================================
			}
		});	//ajax end
	
	
	
	/*weatherajax.js*/
	$('#submitWeather').click(function(){
		 
		var city=$("#city").val();
		console.log(" city 이름 출력 "+city);
		if(city != '' ){
			console.log("city ===" + city);
			console.log("weather.do?q="+city);
			$.ajax({
				url:'weather.do?q='+city,
				type:"GET",
				dataType:"json",//jsonp인지 json 인지 바꿔볼것.
				 error: function(){
						alert("날씨정보 수신에 실패하였습니다.");
						console.log("weatherajax.js-56line");
					 },
				success:function(data){//성공식 콜백할 함수의 내용을 명시함.
					console.log("아작스 내의 data"  + data);
					console.log(data);
					var widget=show(data);
					$('#show').html(widget);//서버에서 통신을 하고 돌아온값을 html로 써준다. 
					$('#city').val('');//검색이 되었으면 검색창을 초기화 시켜준다. 
					
					 
					 //==========================================
					 //현재 날씨 정보를 받아오면 5일치를 받아온다. 
					 console.log("1name"+data.list[0].name);
					 console.log("2country"+data.list[0].sys.country);
					 var area = data.list[0].name;//지역명
					 var country = data.list[0].sys.country;//국가코드
					 $.ajax({
						 url:"forecast5days.do?area="+area+"&country="+country,
						 type:"GET",
						 error: function(){
							alert("기상예보 수신에 실패하였습니다. - 88line"); 
						 },
						 success:function(data1){
							 console.log("!!! 검색된   data1 출력되는곳");
							 console.log(data1);
							 console.log("!!! 검색된   5일치 일기예보끝. ");
							 
							 var forecast_data=makeforecastlist(data1);
							 $('#forcast_list').html(forecast_data);
						
						 }
					 });
					 //=========================================
					 

				}//5일치 ajax 
			});//지역 당일날씨 ajax
			
		}else{
//			$('#error').html('filld cannot be empty');
			
			$('#error').html("<div class='alert alert-danger alert-dismissable text-center' #id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>필드가 비어있습니다. </a></div>");	
		}

		
	});//end onclick;
	
	
	
	
	//------------------------------------------------------
	 var delay=(function(){
			var timer=0;
			return function(callback, ms){
				clearTimeout(timer);
				timer=setTimeout(callback, ms);
			};
		 })();	//end delay
	//------------------------------------------------------
	 
	 $('#translate').keyup(function(){

		 console.log('0.5초 후에 ajax통신을 시작합니다.');
		//키입력시 0.5초 딜레이주기
	    delay(function(){
	        console.log('1초끝.');
	        //-----------------------------------
			 var search_word=$('#translate').val();
			 console.log(search_word);
			 if($('#translate').val()!=""){//만약 공백이 아니면 아작스통신으로 값을 받아오고
				 $.ajax({
					 url:"placetranslate.do?searchworld="+search_word,
					 type:"GET",
					 success:function(data){
						 console.log(data);
						 var receive_res = showtranslaate(data); //템플릿에 데이터처리ㄱㄱ
						 console.log("번역된 문자열값" +data.responseData.translatedText);
						 $('#trans_res').css({'display':'block'});
						 $('#trans_res').html(receive_res);
						 
						 $(document).on('click','#trans_res1',function(){
							$('#city').val($(this).val());
							$('#trans_res').css({'display':'none'});
							$('#translate').val("");	
						 });

						 
					 }
				 });//end ajax
			 }else if($('#translate').val()==""){
				 console.log("지우기 인식");
				 $('#trans_res').css({'display':'none'});
			 }
			 //ajax 로  번역된 단어가 지역검색창으로 넘어감
//			 search_word = $('#city').val($(this).val());	        
	        //--------------------------------------
	      }, 500 );//delay	    
	 });//
	 
	 
	


});//end document.

//document.on ready 에서 추가발생된 클래스 혹은 버튼일 경우에는 document.on을 사용한다.
$(document).on('click',function(){
	$('#trans_res_close').click(function(){
		$('#trans_res').css({'display':'none'});
		$('#translate').val("");	
	});
	


	
 });

/*function show(data){//웨더에 메인에있는 파라미터를 출력하길 원함. 데이터가 파싱됨.  
	console.log( "function show  함수 진입 " );
	return "<div style='color:white;'>지역명"+ data.list[0].name+ ", 국가코드 : " +data.list[0].sys.country +"</h1>"+
			"<div class='white'><strong>현재날씨</strong> : "+ data.list[0].weather[0].main +"</div>"+
			"<div class='white'><strong>Discription</strong> : <img src='http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png'>"+ data.list[0].weather[0].main +"</div>"+
			"<div class='white'><strong>현재날씨</strong> : <img src='http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png'>"+ data.list[0].weather[0].description +"</div>"+
			"<div class='white'><strong>온도</strong> : "+ data.list[0].main.temp + "&deg</div>"+
			"<div class='white'><strong>기압</strong> : "+ data.list[0].main.pressure + "hpa</div>"+
			"<div class='white'><strong>습도</strong> : "+ data.list[0].main.humidity + "%</div>"+
			"<div class='white'><strong>최저온도</strong> : "+ data.list[0].main.temp_min + "&deg</div>"+
			"<div class='white'><strong>최고온도</strong> : "+ data.list[0].main.temp_max + "&deg</div>"+
			"<div class='white'><strong>풍속</strong> : "+ data.list[0].wind.speed + "m/s</div>"+
			"<div class='white'><strong>바람방향</strong> : "+ data.list[0].wind.deg + "&deg</div>"+
			
			"<h1 class='white' style='display:none;'>------------------------------------------------------</h1>"
}*/
function show(data){
	//웨더에 메인에있는 파라미터를 출력하길 원함. 데이터가 파싱됨. 
	var week = new Array('일', '월', '화', '수', '목', '금', '토');
	var getdate= new Date();
	var dayofweek=week[getdate.getDay()];
	var strtemp = getdate.getMonth() + 1;
	var titledate = getdate.getFullYear()+" - "+("00"+strtemp).slice(-2)+" - "+("00"+getdate.getDate()).slice(-2) + " (" + dayofweek +")";
	console.log(titledate);
	
	console.log( "function show  함수 진입 " );
	if(data.count==0){
		return "<div class='main_info'  style='background-color:white; border-radius: 10px;'> 검색결과가 없습니다.<br/> 재검색 해주시기 바랍니다. <div>"
	}else{
	return "<div style='color:white; width:400px; margin:auto;'>국가명  : " +data.list[0].sys.country+"//  지역명 : "+ data.list[0].name +"</div>"+
			"		<div class='main_info'  style='background-color:white;'> "+
			"<span class='ico_state ws3'><img src='http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png' style='width: 100px;'>"+"</span>"+
			"<div class='info_data'>"+
			"	<ul class='info_list'>"+
			"		<li>"+
			"			<p class='info_temperature'>"+
			"				<span class='todaytemp'>"+ data.list[0].main.temp + "</span>"+
			"				<span class='tempmark'>"+
			"				<span class='blind'></span>℃</span>"+ 
			"			</p>"+
			"		</li>"+ 
			"		<li>"+
			"			<p class='cast_txt'> 현재날짜 : "+titledate+"</p>"+
			"		</li>"+
			"		<li>"+
			"			<p class='cast_txt'> 현재날씨 : "+data.list[0].weather[0].description+"</p>"+
			"		</li>"+
			"		<li>"+
			"			<span class='merge'>"+
			"				<span class='min'><span class='num'>최저 : "+ data.list[0].main.temp_min + "</span>˚</span>"+
			"				<span class='slash'>/</span>"+
			"				<span class='max'><span class='num'>최고 : "+ data.list[0].main.temp_max + "</span>˚</span>"+
			"			</span>"+
			"			<span class='bar'></span>"+
			/*"			<span class='sensible'>체감온도 <em><span class='num'>-12.3</span>˚</em> </span>"+*/
			"		</li>"+ 
			"		<li>"+
			/*"			<span class='indicator'> 자외선 <span class='lv1'><span class='num'>2</span>좋음<span class='ico'></span></span> </span>"+*/
			"		</li>"+
			"	</ul>"+
			"</div>"+
		"</div>"+
			"<h1 class='white' style='display:none;'>------------------------------------------------------</h1>"
	}
}




function makeforecastlist(data1){
	console.log("forecast function ");
	var week = new Array('일', '월', '화', '수', '목', '금', '토');
	var today_date=new Date();
	var forecastlst="";
	var item = 0;
		/*var makedate = new Date(data1.list[0].dt_txt);
		var dayofweek=week[makedate.getDay()];
		var titledate = makedate.getFullYear()+" - "+("00"+makedate.getMonth()).slice(-2)+" - "+("00"+makedate.getDate()).slice(-2);
		forecastlst+="<li class='forecast_daychange'><p>"+titledate+" ("+dayofweek+")</p></li>";*/
		
		/*for(var i=0; i<=data1.list.length; i++){*/
		for(var i in data1.list)
		{
			var setdate = data1.list[i].dt_txt;
			var getdate= new Date(setdate);
			var dayofweek=week[getdate.getDay()];
			var gettime= getdate.getHours();	//0일때 줄을 바꾸고 포문진행
			var gettemp=(data1.list[i].main.temp-273.15).toFixed(1); //수신값은 절대온도값(K)이므로 도씨로 바꾸기위해서 273.15를 빼줌.
			var getmaxtemp=(data1.list[i].main.temp_max-273.15).toFixed(1);//K-> 도씨변환 + 소수점첫째자리까지.
			var getmintemp=(data1.list[i].main.temp_min-273.15).toFixed(1);
			var strtemp = getdate.getMonth() + 1;
			var titledate = getdate.getFullYear()+" - "+("00"+strtemp).slice(-2)+" - "+("00"+getdate.getDate()).slice(-2);
			var getweathericon=data1.list[i].weather[0].icon;//아이콘경로
			
	          if(getdate.getDay()==today_date.getDay()){//시스템날짜와 검색된 날짜가 같으면 그냥넘긴다.
	             i+=1;
	             // console.log("i의값 " + i);
	          }else if((getdate.getDate()) == (today_date.getDate()+4)){
	             i+=1;
	          }else{
	             if(gettime==0){
	            	 forecastlst+="<li class='forecast_daychange'><p>"+titledate+" ("+dayofweek+")</p></li>";
	            	 item += 1;
	             }
	             console.log(item);
	             if(item >= 1) {
		             forecastlst+="   <li>";
		             forecastlst+="      <div class='forecast_date '><p>" + setdate + "</p></div><!--  날짜출력  -->";
		             forecastlst+="      <div class='forecast_day '><p>"+dayofweek+"요일</p></div><!-- 요일출력 -->";
		             forecastlst+="      <div class='forecast_icon '><img src='http://openweathermap.org/img/w/"+getweathericon+".png'></div><!-- 아이콘 -->";
		             forecastlst+="      <div class='forecast_temp'><p>"+gettemp+" °c</p></div><!-- 현재온도 -->";
		             forecastlst+="      <div class='forecast_minmax' style='display:none'><p>"+getmintemp+" / "+getmaxtemp+"</p></div><!-- 최저온도 최고온도 -->";
		             forecastlst+="   </li>"
	             }
	          }

		}
		forecastlst+="<div style='display:none;'></div>";

		return forecastlst
}



function showtranslaate(data){
	var transres="";
	var matches=data.matches;
	
	
	
	//id trans_res 에 값을 출력시켜준다. 
	 transres+=" ";
	transres+="<h5> 결과값 출력 </h5>";
	transres+="<h5>"+data.responseData.translatedText+"</h5>";
	transres+="<ul class='trans_res_list'>";
/*	transres+="	<li><p class='trans_searchres'>"+data.responseData.translatedText+"</p><button id='trans_res1' value="+data.responseData.translatedText+" class='btn btn-primary'> 선택 </button></li>";*/
	for(var i in matches)
	{
		transres+="	<li id='trans_res'><p class='trans_searchres'>"+data.matches[i].translation+"</p><button id='trans_res1' value='"+data.matches[i].translation+"' class='btn btn-primary'> 선택 </button></li>";
	}
	
	transres+="</ul>";
	transres+="<button id='trans_res_close' class='trans_res_close btn btn-primary'> 닫기 </button>";
			
	transres+="";
	
	return transres
}
















