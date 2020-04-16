<%@page import="shoppingdemo.dao.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>idcheck.jsp</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	
</script>
</head>
<body>
	<%
		//아이디값 Request영역으로 받아와서 res값이 true면 사용중 아이디 false면 사용 가능한 아이디 
		String id = request.getParameter("id");
		MemberDAO dao = MemberDAO.getInstance();
		boolean res = dao.searchMethod(id);

		if (res) {
	%>
	<center>
		<h4>이미 사용중인 ID 입니다.</h4>
		<script type="text/javascript">
		 window.opener.document.getElementById("chk2").value="N" //새로 열린 자식객체창에서 부모객체창의 값을 참조할 수 있다. 
		</script>
	</center>
	<%
		} else {
	%>
	<center>
		<h4>
			<%=id%>는 사용가능한 ID입니다.
		</h4>
		<script type="text/javascript">
		 window.opener.document.getElementById("chk2").value="Y";
		
		</script>
	</center>
	<%
		}
	%>

</body>
</html>