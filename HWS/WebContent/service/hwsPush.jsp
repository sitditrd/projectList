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
/* String host = "127.0.0.1";
int port = 10082;
String id = "hr";
String password = "a1234"; */
String host = "14.63.224.112";
int port = 10082;
String id = "id";
String password = "pw"; 
int sleepTime = 1000; //메시지 PUSH 속도

private void provideMsg(String row, String col, String flag) {
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
		String key = "12345";
		
		PushMessage pushMessage1 = new PushMessage();
		pushMessage1.setCharsetName("utf-8");
		pushMessage1.setTopicType("GRP1");
		pushMessage1.setTopicId("BOK");

		
		//pushMessage1.addData(key);
		pushMessage1.addData(row);
		pushMessage1.addData(col);
		pushMessage1.addData(flag);
		pushMessageProvider.sendPushMessage(pushMessage1);
		
		System.out.println(">>> 푸쉬를 보낸다.row : " + row + ", col : " + col + ", flag : " + flag);
		

		try {
			Thread.sleep(sleepTime);
		} catch (InterruptedException e) {
			return;
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

/*
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
*/
System.out.println("varIn.getString(row)>>"+varIn.getString("row"));

if(runnable == null) {
	runnable = new Thread(new Runnable() {
		public void run() {
			provideMsg(varIn.getString("row"), varIn.getString("col"), varIn.getString("flag"));
		}
	});
	
	runnable.start();
}
%>