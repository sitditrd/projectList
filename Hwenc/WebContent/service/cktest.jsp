<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%
	request.setCharacterEncoding("euc-kr");
	
	String editor1;
	
	if(request.getParameter("editor1") != null)
	editor1 = request.getParameter("editor1");
	else editor1 = "";
	editor1 = editor1.replaceAll("\r\n",""); 
	//System.out.println("editor1==>"+editor1);
%>
<html>
<head>
	<title>WebEditor</title>
	<script type="text/javascript" src="./ckeditor/ckeditor.js"></script>
	<script>
		var editor;
		
		function fn_skChg(v_skin)
		{
			
			editor.destroy( true );
			
			switch (v_skin){
				case "0" : editor = CKEDITOR.replace( 'editor1',
								{
									skin : 'kama'
								}); 	
				break;
				case "1" : editor = CKEDITOR.replace( 'editor1',
								{
									skin : 'office2003'
								}); 	
				break;
				case "2" : editor = CKEDITOR.replace( 'editor1',
								{
									skin : 'v2'
								}); 	
				break;
				
			}
		}
	</script>
</head>
<body scroll="no">
	<form id="frmCkEditor" method="post" action="./ckviewer.jsp">
			<textarea name="editor1" id="editor1" ><%=editor1%></textarea>
			<script type="text/javascript">
				//CKEDITOR.replace( 'editor1' );
				editor = CKEDITOR.replace( 'editor1',
				{
					enterMode		: Number( "2" ),
					shiftEnterMode	: Number( "1" )
				});  //enterMode => 2 : <br>(= CKEDITOR.ENTER_BR), shiftEnterMode =>1 : <p>
			</script>
			<input id="btnSubmit" value="submit" type="submit" style="display:none" />
			<input id="skChgBtn" value="1" type="button" style="display:none" onclick="fn_skChg(this.value)" />
			<input id="editorData"  name="editorData" value="" type="hidden" />
			<input id="editorGetBtn" name="editorGetBtn" value="test" type="button" onclick="javascript:frmCkEditor.editorData.value = CKEDITOR.instances.editor1.getData();" style="display:none" />
			<input id="editorSetBtn" name="editorSetBtn" value="" type="button" onclick="javascript:CKEDITOR.instances.editor1.setData(frmCkEditor.editorData.value);"  style="display:none" />
	</form>
</body>
</html>