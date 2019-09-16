<%@page import="javax.security.auth.message.callback.PrivateKeyCallback.Request"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.util.zip.*" %>
<%@ page import="java.text.*" %>
<%@ page import="java.sql.*"%>
<%@ page import="javax.sql.*"%>
<%@ page import="javax.naming.*"%>

<%!
static String _CHAR_SET = "UTF-8"; // Default character set
static	char a = (char) 0x1e;
static	char b = (char) 0x1f;

static	String RS = String.valueOf(a);	//A?A? record separated
static	String US = String.valueOf(b);	//row separated 

/**
* Dataset body 
* @param sb
* @param ds
* @return StringBuffer
* @throws Exception
*/
public static StringBuffer getCsvHead(StringBuffer sb) throws Exception {
	
	return getCsvHead(sb, _CHAR_SET);
}

/**
* SSV 
* @param sb
* @param chrset??
* @return StringBuffer
* @throws Exception
*/
public static StringBuffer getCsvHead(StringBuffer sb, String chrset) throws Exception {
	return sb.append("SSV:utf-8").append(RS);
}

/**
* Dataset head
* @param sb
* @param ds
* @return StringBuffer
* @throws Exception
*/

public static StringBuffer getCsvDsHead(StringBuffer sb, String dsName, ResultSet rs)
  throws Exception {
	sb.append("Dataset:").append(dsName).append(RS);
	sb.append("_RowType_"+US);
	ResultSetMetaData rsmd = rs.getMetaData();     // select 
	
	int columnCount = rsmd.getColumnCount();
	
	
	sb.append(
			  "VOLUME_TITLE:String(STRING)"+US
			 +"VOLUME_PUBLISHER:String(STRING)"+US
			 +"VOLUME_NAME:String(STRING)"+US
			 +"PUB_DATE:String(STRING)"+US
			 +"ART_STATE_NAME:String(STRING)"+US
			 +"REASON:String(STRING)"+US
			 +"ART_SELECTION_CNT:String(STRING)"+US
			 +"KINX_ART_BIB_CNT:String(STRING)"+US
			 +"ART_STATE_DATE:String(STRING)"+US
			 +"ER_YN:String(STRING)"+US
			 +"DL_HANDOVER_DT:String(STRING)"+US
			 +"JOURNAL_KIND_NAME:String(STRING)"+US
			 +"DATA_TYPE_NAME:String(STRING)"+US
			 +"TERM_NAME:String(STRING)"+US
			 +"ACQ_CNT:String(STRING)"+US
			 +"REMARK:String(STRING)"+US
			 +"ISSN:String(STRING)"+US
			 +"PUB_TYPE_NAME:String(STRING)"+US
			 +"CONTROL_NO:String(STRING)"+US
			 +"CALL_NO:String(STRING)"+US
			 +"VOLUME_ID:String(STRING)"+RS
			 );
	
	return sb;
}

public static StringBuffer getCsvDsBody(StringBuffer sb, ResultSet rs, HttpServletResponse response)
  throws Exception {
	tempCnt=0;
	int fetchSize = 1000;
	int flushCount = 0;
	int Row = 0;
	int i;
	
	while(rs.next())
	{
		sb.append("N"+US);
		sb.append(rs.getString("ROW_DATA"));
		sb.append(RS);
		
		flushCount++;
		if(flushCount==fetchSize)
		{
			flushBuffer(response, sb);
			flushCount=0;
			sb = new StringBuffer();
		}
	}
	return sb;
}

static int tempCnt=0;

private static void flushBuffer(HttpServletResponse response, StringBuffer buffer)
{
	try{
		PrintWriter out = response.getWriter();
		out.println(buffer);
	}catch(Throwable th){
		System.out.print( "flushBuffer() Exception :: " + th.getMessage());
	}
}


/**
 * SSV A?A?
 * @param str 
 * @return String 
 */
public static String replaceForCsv(String str) throws Exception {
  String sRtn = str;
  if (str!= null) {
    if (0 <= str.indexOf("\"")) {
      sRtn = str.replaceAll("\"", "\\\\\"");
    }
    if (0 <= str.indexOf(RS)) {
      sRtn = sRtn.replaceAll(RS, "\\\\n");
    }
  }
  return sRtn;
} 

public Connection getConnection(){

	Connection conn = null;
	try {
		Class.forName("oracle.jdbc.driver.OracleDriver");
	
		conn = DriverManager.getConnection("jdbc:oracle:thin:@14.63.224.112:1521:XE", "POC_NAL", "a1234");
	}
	catch (Exception e){
		System.out.println("========================\n");
		System.out.println("===getConnectionDev Error ====\n"+e+"\n");
		System.out.println("========================\n");
	}
	return conn;
}

%>

<%
out.clearBuffer();

/*********************************************************
 * request
 *********************************************************/
int nRowCount = Integer.parseInt(request.getParameter("rowcount")==null ? "0" : request.getParameter("rowcount"));
String type = (nRowCount == 0) ? "All" : "";

if(nRowCount==0 )
	nRowCount = 10;

/** 7-1. ErrorCode, ErrorMsg **/
int nErrorCode = 0;
String strErrorMsg = "START";

out.clearBuffer();

response.setHeader("Content-Type", "text/csv; charset=utf-8");

long starttime = System.currentTimeMillis();
long datasettime = 0;

Connection con = null;
Statement stmt = null;
ResultSet rs   = null;

try {

	StringBuffer resultSb = null;
	
	con = getConnection();
	stmt = con.createStatement();	
	stmt.setFetchSize(1000);
	
  StringBuffer sb = new StringBuffer();		
  	
  sb.append("SELECT VOLUME_TITLE        ||  '" + US + "'  ||  \n");
  sb.append("       VOLUME_PUBLISHER     ||  '" + US + "'  ||  \n");
  sb.append("       VOLUME_NAME     ||  '" + US + "'  ||  \n");
  sb.append("       PUB_DATE     ||  '" + US + "'  ||  \n");
  sb.append("       ART_STATE_NAME     ||  '" + US + "'  ||  \n");
  sb.append("       REASON     ||  '" + US + "'  ||  \n");
  sb.append("       ART_SELECTION_CNT     ||  '" + US + "'  ||  \n");
  sb.append("       KINX_ART_BIB_CNT     ||  '" + US + "'  ||  \n");
  sb.append("       ART_STATE_DATE     ||  '" + US + "'  ||  \n");
  sb.append("       ER_YN     ||  '" + US + "'  ||  \n");
  sb.append("       DL_HANDOVER_DT     ||  '" + US + "'  ||  \n");
  sb.append("       JOURNAL_KIND_NAME     ||  '" + US + "'  ||  \n");
  sb.append("       DATA_TYPE_NAME     ||  '" + US + "'  ||  \n");
  sb.append("       TERM_NAME     ||  '" + US + "'  ||  \n");
  sb.append("       ACQ_CNT     ||  '" + US + "'  ||  \n");
  sb.append("       REMARK     ||  '" + US + "'  ||  \n");
  sb.append("       ISSN     ||  '" + US + "'  ||  \n");
  sb.append("       PUB_TYPE_NAME     ||  '" + US + "'  ||  \n");
  sb.append("       CONTROL_NO     ||  '" + US + "'  ||  \n");
  sb.append("       CALL_NO     ||  '" + US + "'  ||  \n");
  sb.append("       VOLUME_ID AS ROW_DATA                    \n");
  sb.append("  FROM V1                     \n");
  sb.append("  WHERE 1=1                                \n");
  
  if(!(type.equals("All")))
  {
  	sb.append("  AND rownum <= " + (nRowCount-1) + "	       \n");
  }
  	
	rs = stmt.executeQuery(sb.toString());
	
	/** 7-2. ErrorCode, ErrorMsg **/
	nErrorCode = 0;
	strErrorMsg = "SUCC";
	
	resultSb = new StringBuffer(16384);
	
	getCsvHead(resultSb);
	
	resultSb.append("ErrorCode=0"+US+"ErrorMsg=SUCC"+US+"var1=1234"+RS);
	
	getCsvDsHead(resultSb, "output", rs);

	resultSb = getCsvDsBody(resultSb, rs, response);

	datasettime = System.currentTimeMillis() - starttime;	

	flushBuffer(response, resultSb);
} catch (Throwable th) {
	nErrorCode = -1;
	strErrorMsg = th.getMessage();
	System.out.print(strErrorMsg);
} finally {
	if(rs   != null){	rs.close();}
	if(stmt != null){	stmt.close();}
	if(con  != null){	con.close();}
}
%>