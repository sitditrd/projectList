<%@page import="shoppingdemo.dao.findDAO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>아이디 찾기</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>
	<%
		String name = request.getParameter("username");
		
		String phone = request.getParameter("phone");
		String phone2 = request.getParameter("phone2");
		String phone3 = request.getParameter("phone3");
		
		String p = phone+"-"+phone2+"-"+phone3;
		
		findDAO dao = findDAO.getInstance();
		String c = dao.findidMethod(name, phone);
		
		try{
	%>
	<form method="post" action="main.jsp">
	<%
		if(c!=null)
		{
	%>
			<b><font size="4" color="gray">검색 결과</font></b>
			<center>
			<hr size="1" width="460">
				<p><%=name%>님의 아이디는 <%=c%>입니다.</p> </br>
				<a href="JavaScript:window.close()" style="color: pink">닫기</a>
			</center>
	<% 			
			}
			else
			{
	%>			
	<b><font size="4" color="gray">검색 결과</font></b>
		<center>
			<hr size="1" width="460">
				<p>아이디 또는 이메일이 틀렸습니다</p></br>
				<a href="JavaScript:window.close()" style="color: pink">닫기</a>
				</center>
<% 
			}
			
		}catch(Exception e){}
	%>
	</form>
</body>
</html>