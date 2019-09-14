var paramName;

function getQuerystring(paramName) {
	var _tempUrl = window.location.search.substring(1); // url에서 처음부터 '?'까지 삭제
	var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기
	for (var i = 0; _tempArray.length; i++) {
		var _keyValuePair = _tempArray[i].split('='); // '=' 을 기준으로 분리하기
		if (_keyValuePair[0] == paramName) // _keyValuePair[0] : 파라미터 명
		{
			// _keyValuePair[1] : 파라미터 값
			return _keyValuePair[1];
		}
	}
} // end distingParam()

function parseWeather() {
	loadJSON(function(response) {
		var jsonData = JSON.parse(response);
	});
}

function loadJSON(callback) // url의 json 데이터 불러오는 함수
{
	var url1 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
	var url2 = "Seoul";
	var url3 = ",KR&cnt=7&APPID=b745470c39a17302bf5c0b3b15ceff3a";
	var fullurl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Busan,KR&cnt=7&APPID=b745470c39a17302bf5c0b3b15ceff3a";
	var url = url1 + url2 + url3;

	var request = new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open('GET', url, true);
	request.onreadystatechange = function() {
		console.log("온레디 스테이트체인지 함수 통과 ");
		if (request.readyState == 4 && request.status == "200") {
			console.log("콜백 통과 callback(request.responseText 부분. ) ");
			callback(request.responseText);
		}
	};
	request.send(null);
}

window.onload = function() {
	parseWeather();
	$('#trans_res_close').click(function() {
		console.log("닫기버튼 인식 ");
	});
}