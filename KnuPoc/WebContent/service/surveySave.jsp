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
DataSet ds = in_pData.getDataSet("InSurveyDs");
DataSet AnswerDs = in_pData.getDataSet("InSurveyAnswerDs");
int nErrorCode = 0;
String strErrorMsg = "START";

try 
{	
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;
System.out.println(AnswerDs);
	String sql = "";
	try 
	{
		String url="jdbc:oracle:thin:@127.0.0.1:1521:XE";
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection(url,"POC_KNU","a1234");
		stmt = conn.createStatement();

		/******** 삭제 ********/
		for (int i = 0; i < ds.getRemovedRowCount(); i++) {
			String sCode = ds.getRemovedData(i, "SURVEY_CODE").toString();
			String sNo = ds.getRemovedData(i, "SURVEY_NO").toString();
            sql = "DELETE FROM SURVEY_CONTENTS";
            sql+=" WHERE SURVEY_CODE = '" + sCode + "'";
            sql+=" AND SURVEY_NO = '" + sNo + "'";
            int ret = stmt.executeUpdate(sql);
   			if(ret != 0)
   			{
   			  sql = "DELETE FROM ANSWEAR_LIST";
              sql+=" WHERE SURVEY_CODE = '" + sCode + "'";
              sql+=" AND SURVEY_NO = '" + sNo + "'";
              stmt.executeUpdate(sql);
   			}
		}

		/******** 추가, 수정 ********/
		for (int i = 0; i < ds.getRowCount(); i++) {
			if (ds.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
			 	sql = "INSERT INTO SURVEY_CONTENTS ( \n" +
					  "    SURVEY_CODE, \n" +
					  "    SURVEY_NO, \n" +
					  "    SURVEY_SUBSTANCE \n" +
					  ") VALUES ( \n" +
					  "    '" + ds.getString(i, "SURVEY_CODE") + "', \n" +
					  "    '" + ds.getString(i, "SURVEY_NO") + "', \n" +
					  "    '" + ds.getString(i, "SURVEY_SUBSTANCE") + "' \n" +
					  ") \n";
			 		stmt.executeUpdate(sql);
			}else if (ds.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				 sql = "UPDATE SURVEY_CONTENTS \n" +
					  "SET \n" +
					  "    SURVEY_SUBSTANCE = '" + ds.getString(i, "SURVEY_SUBSTANCE") + "' \n" +
					  "WHERE  SURVEY_CODE = '" + ds.getString(i, "SURVEY_CODE") + "' \n" + 
				 	  " AND SURVEY_NO = '" + ds.getString(i, "SURVEY_NO") + "'";
				 System.out.println(sql);
				stmt.executeUpdate(sql);
			}
		}
		
		for (int i = 0; i < AnswerDs.getRowCount(); i++) {
			if (AnswerDs.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				sql = "INSERT INTO ANSWEAR_LIST ( \n" +
					  "    SURVEY_CODE, \n" +
					  "    SURVEY_NO, \n" +
					  "    ANSWEAR_NO, \n" +
					  "    ANSWEAR_SUBSTANCE \n" +
					  ") VALUES ( \n" +
					  "    '" + AnswerDs.getString(i, "SURVEY_CODE") + "', \n" +
					  "    '" + AnswerDs.getString(i, "SURVEY_NO") + "', \n" +
					  "    '" + AnswerDs.getString(i, "ANSWEAR_NO") + "', \n" +
					  "    '" + AnswerDs.getString(i, "ANSWEAR_SUBSTANCE") + "' \n" +
					  ") \n";
			 		stmt.executeUpdate(sql); 
			}else if (AnswerDs.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				 sql = "UPDATE ANSWEAR_LIST \n" +
					  "SET \n" +
					  "  ANSWEAR_SUBSTANCE = '" + AnswerDs.getString(i, "ANSWEAR_SUBSTANCE") + "' \n" +
					  "WHERE  SURVEY_CODE = '" + AnswerDs.getString(i, "SURVEY_CODE") + "' \n" + 
				 	  " AND SURVEY_NO = '" + AnswerDs.getString(i, "SURVEY_NO") + "'" +
				 	  " AND ANSWEAR_NO = '" + AnswerDs.getString(i, "ANSWEAR_NO") + "'";
				stmt.executeUpdate(sql);
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
