<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="java.io.IOException" %>
<%@ page import="java.net.UnknownHostException" %>
<%@ page import="com.nexacro17.xapi.data.PlatformData" %>
<%@ page import="com.nexacro17.xapi.data.VariableList" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformException" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformRequest" %>
<%@ page import="com.tobesoft.xpush.api.PushMessageProvider" %>
<%@ page import="com.tobesoft.xpush.fw.io.ConnectionClosedException" %>
<%@ page import="com.tobesoft.xpush.fw.service.provider.LoginFailException" %>
<%@ page import="com.tobesoft.xpush.fw.service.provider.PushMessage" %>
<%@ page import="com.tobesoft.xpush.fw.service.provider.XPushMessageException" %>

<%!
Thread runnable = null;
String host = "14.63.224.112";
int port = 10082;
String id = "id";
String password = "pw";
int sleepTime = 2000; //메시지 PUSH 속도

private void provideMsg() {
	PushMessageProvider pushMessageProvider = new PushMessageProvider();
	try {
		pushMessageProvider.connect(host, port, id, password);
	} catch (UnknownHostException e) {
		e.printStackTrace();
		System.exit(0);
	} catch (IOException e) {
		e.printStackTrace();
		System.exit(0);
	} catch (LoginFailException e) {
		e.printStackTrace();
		System.exit(0);
	} catch (ConnectionClosedException e) {
		e.printStackTrace();
		System.exit(0);
	}
	
	try {
		while(true) {
			for (int i = 0; i < 10; i++) {
				String code = String.format("%03d", (int)(Math.random() * 700) + 1);
				PushMessage pushMessage1 = new PushMessage();
				pushMessage1.setCharsetName("utf-8");
				pushMessage1.setTopicType("LCHE");
				pushMessage1.setTopicId("CHE");
				pushMessage1.addData(code);
				pushMessage1.addData("100");
				pushMessageProvider.sendPushMessage(pushMessage1);
				
				System.out.println(">>> 주문지별 체결 : " + code);
				
				code = String.format("%03d", (int)(Math.random() * 600) + 1);
				PushMessage pushMessage2 = new PushMessage();
				pushMessage2.setCharsetName("utf-8");
				pushMessage2.setTopicType("RCHE");
				pushMessage2.setTopicId("CHE");
				pushMessage2.addData(code);
				pushMessage2.addData("100");
				pushMessageProvider.sendPushMessage(pushMessage2);
				
				System.out.println(">>> 종목별 체결 : " + code);
				
				code = String.format("%03d", (int)(Math.random() * 500) + 1);
				PushMessage pushMessage3 = new PushMessage();
				pushMessage3.setCharsetName("utf-8");
				pushMessage3.setTopicType("DCHE");
				pushMessage3.setTopicId("CHE");
				pushMessage3.addData(code);
				pushMessage3.addData("100");
				pushMessageProvider.sendPushMessage(pushMessage3);
				
				System.out.println(">>> 배분주문지별 체결 : " + code);
			}

			try {
				Thread.sleep(sleepTime);
			} catch (InterruptedException e) {
				return;
			}
		}
	} catch (IOException e) {
		e.printStackTrace();
	} catch (XPushMessageException e) {
		e.printStackTrace();
	}
	
	try {
		pushMessageProvider.close();
	} catch (IOException e) {
		e.printStackTrace();
	}
	
	runnable.interrupt();
	runnable = null;
}
%>

<%
out.clearBuffer();
PlatformRequest platReq = new PlatformRequest(request.getInputStream());
try {
	platReq.receiveData();
} catch (PlatformException e) {
	e.printStackTrace();
}
PlatformData platformDataIn = platReq.getData(); 
VariableList varIn = platformDataIn.getVariableList();
if(varIn.getString("url") != null) {
	if(!varIn.getString("url").isEmpty()) {
		host = varIn.getString("url");
	}
}

if(varIn.getString("slpTm") != null) {
	if(!varIn.getString("slpTm").isEmpty()) {
		sleepTime = Integer.parseInt(varIn.getString("slpTm"));
	}
}

if(runnable == null) {
	runnable = new Thread(new Runnable() {
		public void run() {
			provideMsg();
		}
	});
	
	runnable.start();
}
%>
</body>
</html>