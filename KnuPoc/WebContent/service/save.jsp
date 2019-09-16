<%@page import="org.apache.commons.io.FileUtils"%>
<%@ page import="org.apache.commons.logging.*"%>
<%@ page import="com.nexacro17.xapi.data.*"%>
<%@ page import="com.nexacro17.xapi.tx.*"%>
<%@ page import="java.util.*"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.io.*"%>
<%@ page contentType="text/xml; charset=UTF-8"%>

<%
/****** Service API 초기화 ******/
HttpPlatformRequest pReq = new HttpPlatformRequest(request);
pReq.receiveData();
PlatformData in_pData = pReq.getData();

VariableList in_varList = in_pData.getVariableList();
DataSet ds = in_pData.getDataSet("InputDs");
DataSet LecDs = in_pData.getDataSet("InputLecDs");
int nErrorCode = 0;
String strErrorMsg = "START";

try 
{	
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;

	String sql = "";
	try 
	{
		String url="jdbc:oracle:thin:@127.0.0.1:1521:XE";
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection(url,"POC_KNU","a1234");
		stmt = conn.createStatement();

		String contextRealPath = request.getSession().getServletContext().getRealPath("/"); 
		String path = request.getParameter("path"); 
		String TempFilePath = contextRealPath +"upload"+ File.separator + "tempImage" + File.separator + ds.getString(0, "FILE_NAME");
		String RealFilePath = contextRealPath + path + File.separator +  ds.getString(0, "FILE_NAME");

		File upfile = new File(TempFilePath);
		File fileToMove = new File(RealFilePath);
		boolean isMoved = upfile.renameTo(fileToMove);

		/******** 삭제 ********/
		for (int i = 0; i < ds.getRemovedRowCount(); i++) {
			String sId = ds.getRemovedData(i, "STUDENT_NO").toString();
            sql = "DELETE FROM ACADEMIC_BASICS";
            sql+=" WHERE STUDENT_NO = '" + sId + "'";
            stmt.executeUpdate(sql);
            if(ds.getRemovedData(i, "FILE_KEY").toString() != null)
            {
            sql = "DELETE FROM FILE_MAP";
            sql+=" WHERE FILE_KEY = '" + sId + "'";
            stmt.executeUpdate(sql);
            RealFilePath = contextRealPath + path + File.separator +  ds.getRemovedData(i, "FILE_NAME").toString() ;
            File fileToDelete = new File(RealFilePath);
            if(fileToDelete.exists()){fileToDelete.delete();}
            }
		}

		for (int i = 0; i < LecDs.getRemovedRowCount(); i++) {
			String sId = LecDs.getRemovedData(i, "STUDENT_NO").toString();
            sql = "DELETE FROM APPLICATION_CLASSES";
            sql+=" WHERE STUDENT_NO = '" + sId + "'";
            System.out.println(sql);
            stmt.executeUpdate(sql);
		}
		
		/******** 추가, 수정 ********/
		for (int i = 0; i < ds.getRowCount(); i++) {
			
			/* // PK 중복 체크
			sql = "SELECT COUNT(STUDENT_NO) count FROM ACADEMIC_BASICS WHERE STUDENT_NO = '" + ds.getString(i, "STUDENT_NO") + "'";
			rs = stmt.executeQuery(sql);
			int count = 0;
			
			while (rs.next()) {
				count = rs.getInt("count");
			}
			
			if (count > 0) {
				nErrorCode = -1;
				throw new Throwable("중복된 id가 존재합니다.");
			} */
			
			if (ds.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
			 	sql = "INSERT INTO ACADEMIC_BASICS ( \n" +
					  "    STUDENT_NO, \n" +
					  "    STUDENT_NAME_KOR, \n" +
					  "    STUDENT_NAME_ENG, \n" +
					  "    STUDENT_NAME_HAN, \n" +
					  "    CAMPUS_CODE, \n" +
					  "    ACADEMIC_STATUS_CODE, \n" +
					  "    DEPARTMENT_CODE, \n" +
					  "    MAJOR_CODE, \n" +
					  "    DIVIDE_CLASS_CODE \n" +
					  ") VALUES ( \n" +
					  "    '" + ds.getString(i, "STUDENT_NO") + "', \n" +
					  "    '" + ds.getString(i, "STUDENT_NAME_KOR") + "', \n" +
					  "    '" + ds.getString(i, "STUDENT_NAME_ENG") + "', \n" +
					  "    '" + ds.getString(i, "STUDENT_NAME_HAN") + "', \n" +
					  "    '" + ds.getString(i, "CAMPUS_CODE") + "', \n" +
					  "     " + ds.getInt(i, "ACADEMIC_STATUS_CODE") + ", \n" +
					  "    '" + ds.getString(i, "DEPARTMENT_CODE") + "', \n" +
					  "    '" + ds.getString(i, "MAJOR_CODE") + "', \n" +
					  "    '" + ds.getString(i, "DIVIDE_CLASS_CODE") + "' \n" +
					  ") \n";
			 		stmt.executeUpdate(sql); 
			 		System.out.println(sql);
			 		//System.out.println(ds.getString(i, "FILE_NAME"));
					if(ds.getString(i, "FILE_NAME") != null)
					{
					sql = "INSERT INTO FILE_MAP ("
							+" FM_SEQ "   
							+" ,FILE_KEY "   
							+" ,FILE_NAME "   
							+" ,FILE_SIZE "   
							+" ,INSERT_DATE) "   
							+" VALUES "
							+" ( FILE_MAP_SEQ.NEXTVAL"
							+" ,'"+ ds.getString(i, "STUDENT_NO") +"'"
							+" ,'" + ds.getString(i, "FILE_NAME") + "'"
							+" ,'" + ds.getString(i, "FILE_SIZE") + "'"
							+" ,'" + ds.getString(i, "INSERT_DATE") + "')";
					stmt.executeUpdate(sql); 
					
					}
			 
			} else
			if (ds.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				 sql = "UPDATE ACADEMIC_BASICS \n" +
					  "SET \n" +
					  "    STUDENT_NAME_KOR = '" + ds.getString(i, "STUDENT_NAME_KOR") + "', \n" +
					  "    STUDENT_NAME_ENG = '" + ds.getString(i, "STUDENT_NAME_ENG") + "', \n" +
					  "    STUDENT_NAME_HAN = '" + ds.getString(i, "STUDENT_NAME_HAN") + "', \n" +
					  "    CAMPUS_CODE = '" + ds.getString(i, "CAMPUS_CODE") + "', \n" +
					  "    ACADEMIC_STATUS_CODE = '" + ds.getString(i, "ACADEMIC_STATUS_CODE") + "', \n" +
					  "    DEPARTMENT_CODE = '" + ds.getString(i, "DEPARTMENT_CODE") + "', \n" +
					  "    MAJOR_CODE = '" + ds.getString(i, "MAJOR_CODE") + "', \n" +
					  "    DIVIDE_CLASS_CODE = '" + ds.getString(i, "DIVIDE_CLASS_CODE") + "' \n" +
					  "WHERE STUDENT_NO = '" + ds.getString(i, "STUDENT_NO") + "' \n";
				stmt.executeUpdate(sql);
				
				sql = "INSERT INTO FILE_MAP ("
						+" FM_SEQ "   
						+" ,FILE_KEY "   
						+" ,FILE_NAME "   
						+" ,FILE_SIZE "   
						+" ,INSERT_DATE) "   
						+" VALUES "
						+" ( FILE_MAP_SEQ.NEXTVAL"
						+" ,'"+ ds.getString(i, "STUDENT_NO") +"'"
						+" ,'" + ds.getString(i, "FILE_NAME") + "'"
						+" ,'" + ds.getString(i, "FILE_SIZE") + "'"
						+" ,'" + ds.getString(i, "INSERT_DATE") + "')";
				stmt.executeUpdate(sql); 

/* 			 sql ="UPDATE FILE_MAP \n" +
				     "SET \n" +
					 " FILE_NAME ='" + ds.getString(i, "FILE_NAME") +  "', \n" +
					 " FILE_SIZE ='" + ds.getString(i, "FILE_SIZE") +  "', \n" +
					 " INSERT_DATE ='" + ds.getString(i, "INSERT_DATE") + "' \n" +
					 " WHERE FILE_KEY = '" + ds.getString(i, "STUDENT_NO") + "' \n" +
					 " AND FM_SEQ=(SELECT MAX(FM_SEQ) FROM FILE_MAP WHERE FILE_KEY = '" + ds.getString(i, "STUDENT_NO") + "')";  
				stmt.executeUpdate(sql);*/
				//log(sql);
			}
		}
	
		nErrorCode = 0;
		strErrorMsg = "SUCC";
	} 
	catch (SQLException e) 
	{
		nErrorCode = -1;
		strErrorMsg = "sql 에러" + sql + e.getMessage();
	}	
	
	/******** JDBC Close ********/
	if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
	if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
	if ( rs   != null ) try { rs.close();   } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
			
} 
catch (Throwable th) 
{
	nErrorCode = -1;
	strErrorMsg = th.getMessage();
}

//PlatformData 
PlatformData out_pData = new PlatformData();

VariableList out_varList = out_pData.getVariableList();
out_varList.add("ErrorCode", nErrorCode);
out_varList.add("ErrorMsg" , strErrorMsg);

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
pRes.setData(out_pData);

pRes.sendData();

%>
