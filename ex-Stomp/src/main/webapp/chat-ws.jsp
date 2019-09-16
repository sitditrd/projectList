<%@ page contentType="text/html; charset=UTF-8" trimDirectiveWhitespaces="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>채팅</title>
<!-- <script type="text/javascript" src="js/jquery-1.11.0.min.js"></script> -->
<!-- jquery말고 html dom객체를 사용하기 위해서 주석 처리 한다. -->

<script type="text/javascript">
	var wsocket;
	var gv_userName;
	var gv_totalCount;
	var gv_controlFlag=0;

	function connect() {
		wsocket = new WebSocket("ws://localhost:8080/ex-Stomp/chat-ws");
		wsocket.onopen = onOpen;
		wsocket.onmessage = onMessage;
		wsocket.onclose = onClose;
	}
	
	function disconnect() {
		wsocket.close(gv_userName);
		gv_totalCount--;
		
		if(window.NEXACROWEBBROWSER){
			window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "close:" + gv_totalCount);
		}else{
			window.document.title = "close:" + gv_totalCount;
		}
	}
	
	function onOpen(evt) {
		alert("연결되었습니다.");
		//appendMessage("연결되었습니다.");
	}
	
	function onMessage(evt) {
		var data = evt.data;
		if (data.substring(0, 4) == "msg:") {
			//appendMessage(data.substring(4));
			//alert(data.substring(4)); //userMessage
			
			//사용자 Message값 Parameter값으로 전달.
			if(window.NEXACROWEBBROWSER){
				window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "userMessage:" + data.substring(4))
			}else{
				window.document.title = "userMessage:" + data.substring(4);
			} 
		}else if(data.substring(0, 9) == "userSize:") {
			var strTemp = data.split(":");
			//alert(strTemp[1]); //userTotalCount
			
			var resTemp = strTemp[1].split(",");
			
			//총 인원 지정
			gv_totalCount = Number(resTemp[0]);
			
			//사용자 ID 지정
			var finalTemp = resTemp[1].split(" ");
			
			//사용자 Id가 마지막 id로 중복되는 것을 방지하기 위함.
			if(gv_controlFlag == 0) {
				//index는 0부터 시작.
				//$("#nickname").val(finalTemp[gv_totalCount-1]);
				
				//document.getElementById("nickname").value = finalTemp[gv_totalCount-1];
				gv_userName = finalTemp[gv_totalCount-1]; //index는 0부터 시작.
				gv_controlFlag = 1;
			}else {
				//gv_userName = document.getElementById("nickname").value;
			}
			
			//총 인원, 사용자 ID Parameter값으로 전달.
			if(window.NEXACROWEBBROWSER){
				window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "userSize:" + resTemp[0] + "," + resTemp[1]);
			}else{
				window.document.title = "userSize:" + resTemp[0] + "," + resTemp[1];
			}
		}
	}
	
	function onClose(evt) {
		alert("연결을 끊었습니다.");
		//appendMessage("연결을 끊었습니다.");
	}
	
	function send(textMessage) {
		//var nickname = $("#nickname").val();
		//var nickname = document.getElementById("nickname").value;
		//var msg = $("#message").val();
		//var msg = document.getElementById("message").value;
		
		//wsocket.send("msg:" + nickname + ":" + msg);
		wsocket.send("msg:" + gv_userName + ":" + textMessage);
		//$("#message").val("");
		//document.getElementById("message").value = "";
	}

	/* function appendMessage(msg) {
		//$("#chatMessageArea").append(msg+"<br>");
		//document.getElementById("chatMessageArea").append = "msg" + "<br>";
		//var chatAreaHeight = $("#chatArea").height();
		//var charAreaHeight = document.getElementById("chatArea").height;
		
		//var maxScroll = $("#chatMessageArea").height() - chatAreaHeight;
		//var maxScroll = document.getElementById("chatMessageArea").height;
		
		//$("#chatArea").scrollTop(maxScroll);
		//document.getElementById("chatArea").scrollTop = maxScroll;
	} */
	
	<!-- User Method-->
	function startInit() {
		connect();
	}
	
	function textMessage(textMessage) {
		//$("#nickname").val(gv_userName);
		//document.getElementById("nickname").value = gv_userName;
		//$("#message").val(textMessage);
		//document.getElementById("message").value = textMessage;
		send(textMessage);
		//appendMessage(gv_userName + ":" + textMessage);
	}
	
	/* $(document).ready(function() {
		$('#message').keypress(function(event){
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '13'){
				send();	
			}
			event.stopPropagation();
		}); 
		$('#sendBtn').click(function() { send(); });
		$('#enterBtn').click(function() { connect(); });
		$('#exitBtn').click(function() { disconnect(); });
	}); */
	
	/* window.onload = function() {
		document.getElementById("sendBtn").click(function() { send(); });
		document.getElementById("enterBtn").click(function() { connect(); });
		document.getElementById("exitBtn").click(function() { disconnect(); });
	} */
</script>

<style>
/* #chatArea {
	width: 200px; height: 100px; overflow-y: auto; border: 1px solid black;
} */
</style>
</head>
<body>
<!-- 	이름:<input type="text" id="nickname">
	<input type="button" id="enterBtn" value="입장">
	<input type="button" id="exitBtn" value="나가기">
    
    <h1>대화 영역</h1>
    <div id="chatArea"><div id="chatMessageArea"></div></div>
    <br/>
    <input type="text" id="message">
    <input type="button" id="sendBtn" value="전송"> -->
</body>
</html>


