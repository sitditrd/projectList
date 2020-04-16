nexacro.Form.prototype.ajax = function(url, settings) 
{
	var createCORSRequest = function(method, url) 
	{
		var xhr = new XMLHttpRequest();
		
		if (xhr) {
			// Most browsers.
			xhr.open(method, url, true);
		} else if (typeof XDomainRequest != "undefined") {
			// IE8
			xhr = new XDomainRequest();
			xhr.open(method, url);
		} else {
			// CORS not supported.
			xhr = null;
		}
		
		return xhr;
	};

	var pForm = this;
	var method = settings["method"]?settings["method"]:"GET";
	var xhr = createCORSRequest(method, encodeURI(url)); // 인터넷 주소에서 사용하는 :, ;, /, =, ?, & 등을 제외하고 인코딩 (파일명이 한글일 경우 처리를 위함)
	var sParam = JSON.stringify(settings["param"]);
	var sDataType = settings["dataType"]; // JSON 및 XML 처리 방식 구분
	var callback = settings["callback"];
	
	try {
		xhr.timeout = nexacro.getEnvironment().httptimeout * 1000; // time in milliseconds
		
		xhr.ontimeout = function(e) 
		{
			if (typeof callback == "function") {
				callback.call(pForm, -1, "Request Timeout");
			} else if (typeof callback == "string") {
				pForm[callback].call(pForm, -1, "Request Timeout");
			}
		};
	} catch (e) {}

	var reqEvt = function() 
	{
		var response;

		if (this.readyState === 4 && this.status === 200) 
		{
			if (sDataType == "JSON") {
				response = JSON.parse(this.responseText);
			} else {
				response = this.responseText;
			}
			
			if (typeof callback == "function") {
				callback.call(pForm, 0, response);
			} else if (typeof callback == "string") {
				pForm[callback].call(pForm, 0, response);
			}
		}
	};

	if (window.XDomainRequest) {
		xhr.onload = reqEvt;
	} else {
		xhr.onreadystatechange = reqEvt;
	}

		xhr.send(sParam);
};

if (nexacro._Browser != "Runtime") 
{
	if (window.console) 
	{
		window.trace = window.console.log;
		var console = window.console || { log: function() {} };
	}
}