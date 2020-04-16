<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.UUID"%>
<%
/*
Copyright [2013] [EcoSystem of TOBESOFT]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 
%>
 
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.FileUploadException"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.io.FilenameUtils"%>

<%@ page import="javax.servlet.http.HttpServlet"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Iterator"%>

<%@ page import="com.nexacro17.xapi.data.PlatformData" %>
<%@ page import="com.nexacro17.xapi.data.ColumnHeader" %>
<%@ page import="com.nexacro17.xapi.data.DataTypes" %>
<%@ page import="com.nexacro17.xapi.data.DataSet" %>
<%@ page import="com.nexacro17.xapi.data.DataSetList" %>
<%@ page import="com.nexacro17.xapi.data.VariableList" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformException" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformRequest" %>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformRequest" %>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformResponse" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformType" %>

<%
	//Check that we have a file upload request
	boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		
	String strNo = request.getParameter("strNo");
	
	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	if (isMultipart)
	{	
		/** DB 연결 **/
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		/** ErrorCode, ErrorMsg **/
		int nErrorCode = 0;
		String strErrorMsg = "START";
		
		/** File Save Path설정 **/
		String contextRealPath = request.getSession().getServletContext().getRealPath("/"); //root경로(데이터가 실제로 저장되는 서버경로를 구함)
		String path = request.getParameter("path"); //사용자경로(nexacro에서 정의한 경로)
		String saveDirectory = contextRealPath +"upload" + File.separator + "tempImage" + File.separator; //File.separator는 리눅스면 / 윈도우면 \를 추가해주는 구분자
		
		System.out.println("데이터 저장경로 : " + saveDirectory);
		
		// Create a factory for disk-based file items
		DiskFileItemFactory factory = new DiskFileItemFactory();
		
		// Sets the size threshold beyond which files are written directly to disk
		factory.setSizeThreshold(4096);
		
		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload(factory);
		
		// Specifies the character encoding to be used when reading the headers of individual part
		upload.setHeaderEncoding("utf-8");
	
		// Set overall request size constraint
		upload.setSizeMax(500 * 1024 * 1024); 
		
		// Sets the maximum allowed size of a single uploaded file
		upload.setFileSizeMax(500 * 1024 * 1024);
		
		try 
		{
			String url="jdbc:oracle:thin:@127.0.0.1:1521:xe";
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection(url, "KNU", "a1234");
			
			stmt = con.createStatement();
			
			/** SQL 수행구문 작성하기 **/
			String sql = "";
			con.setAutoCommit(false);
	
			int rowType = 0;
			int i = 0;
			
			File filePath = new File(saveDirectory); 
			if (!filePath.exists()) 
			{
				filePath.mkdirs();
			}
	
			factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
	
			// Parse the request
			List items = upload.parseRequest(request);
			Iterator iter = items.iterator();
			
			DataSet ds = new DataSet("ds_output");
			ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
			ds.addColumn(new ColumnHeader("filedate", DataTypes.STRING));
			
			// Parse the request
			while (iter.hasNext()) 
			{
				FileItem item = (FileItem) iter.next();
				
				// Process a file upload
				if (!item.isFormField()) 
				{
					// filename on the client
					String fieldName = item.getFieldName();
					String fileName = item.getName();
					long fileSize = item.getSize();
					
					if (fileName == null || fileName.equals(""))
					{
						continue;
					}
					else
					{
						//현재 시간 구하는 로직
						Calendar calendar = Calendar.getInstance(); 
						Date date = calendar.getTime();
						String today = (new SimpleDateFormat("yyyyMMddHHmmss").format(date));
						
						fileName = FilenameUtils.getName(today + fileName);
						File uploadedFile = new File(filePath + File.separator, fileName);
						
						item.write(uploadedFile);
						item.delete(); 
						
						int row = ds.newRow();
						ds.set(row, "filename", fileName);
						ds.set(row, "filesize", fileSize);
						ds.set(row, "filedate", today);
						
						UUID random = UUID.randomUUID(); //중복파일명을 처리하기 위해 난수 발생
					}
				}
			}
			con.commit();
			
			resData.addDataSet(ds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");
			
			/** ErrorCode, ErrorMsg 처리하기 **/
			nErrorCode = 0;
			strErrorMsg  = "SUCC";
		} 
		catch (FileUploadException e) 
		{
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", e);
			e.printStackTrace();
		} 
		catch (Exception e) 
		{
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", e);
			e.printStackTrace();
		}
		
		/** DB Close**/
		if(rs   != null){	try{rs.close();}  catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(stmt != null){	try{stmt.close();}catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(con  != null){	try{con.close();} catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
	}
	else
	{
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg", "Invalid Request");
	}
	
	HttpPlatformResponse res = new HttpPlatformResponse(response);
	res.setData(resData);
	res.sendData();
%>
