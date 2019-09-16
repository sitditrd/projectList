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
		conn = DriverManager.getConnection(url,"POC_KNU","a1234");
		stmt = conn.createStatement();;

		/******** 삭제 ********/
		for (int i = 0; i < ds.getRemovedRowCount(); i++) {
			String sId = ds.getRemovedData(i, "CM_CODE").toString();
            sql = "DELETE FROM CODE_DETAIL";
            sql+=" WHERE CM_CODE='"+ sId +"'";
            stmt.executeUpdate(sql);
		}

		/******** 추가, 수정 ********/
		for (int i = 0; i < ds.getRowCount(); i++) {
	
			if (ds.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
				System.out.println("ddd");
			 	sql = "INSERT INTO CODE_DETAIL ( \n" +
					  "    CM_CODE, \n" +
					  "    CD_CODE, \n" +
					  "    CAPTION \n" +
					  ") VALUES ( \n" +
					  "    '" + ds.getString(i, "CM_CODE") + "', \n" +
					  "    '" + ds.getString(i, "CD_CODE") + "', \n" +
					  "    '" + ds.getString(i, "CAPTION") + "' \n" +
					  ") \n";
			 		stmt.executeUpdate(sql); 
			 		System.out.println(sql);
			 
			} else
			if (ds.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
				 sql = "UPDATE CODE_DETAIL \n" +
					  "SET \n" +
					  "    CD_CODE = '" + ds.getString(i, "CD_CODE") + "', \n" +
					  "    CAPTION = '" + ds.getString(i, "CAPTION") + "' \n" +
					  " WHERE CM_CODE = '" + ds.getString(i, "CM_CODE") + "' \n";
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
