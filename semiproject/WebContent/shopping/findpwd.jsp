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
		String id = request.getParameter("userid");
		String email = request.getParameter("useremail");
		findDAO dao = findDAO.getInstance();
		
		String c = dao.findMethod(id,email);
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
				<p><%=id%>님의 비밀번호는 <%=c%>입니다.</p> </br>
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