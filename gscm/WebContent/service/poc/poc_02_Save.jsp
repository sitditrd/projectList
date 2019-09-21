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
DataSet ds = in_pData.getDataSet("dsInput");

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
		String url="jdbc:oracle:thin:@14.63.224.112:1521:XE";
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection(url,"POC_GSCM", "a1234");
		stmt = conn.createStatement();;


		/******** 추가, 수정 ********/
		for (int i = 0; i < ds.getRowCount(); i++)
		{
			if (ds.getRowType(i) == DataSet.ROW_TYPE_INSERTED) 
			{
			 	sql = "INSERT INTO POC_TACTTIME ( \n" +
					  "    FIRST_NAME, \n" +
					  "    LAST_NAME \n" +
					  ") VALUES ( \n" +
					  "    '" + ds.getString(i, "FIRST_NAME") + "', \n" +
					  "    '" + ds.getString(i, "LAST_NAME") + "' \n" +
					  ") \n";
			 	
			 		stmt.executeUpdate(sql); 
			 		
			 		//System.out.println(sql);
			 
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
