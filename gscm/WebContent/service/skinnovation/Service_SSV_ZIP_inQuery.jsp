<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.util.zip.*" %>
<%@ page import="java.text.*" %>
<%@ page import="java.sql.*"%>

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
public static StringBuffer getCsvDsBody(StringBuffer sb, ResultSet rs, GZIPOutputStream zipStream)
  throws Exception {
	tempCnt=0;
	int fetchSize = 1000;
	int flushCount = 0;
	int Row = 0;
	int i;
	
	//ResultSetMetaData rsmd = rs.getMetaData();     // select 
	//int columnCount = rsmd.getColumnCount();
	
	while(rs.next())
	{
		sb.append("N"+US);
		//for ( i = 1 ; i <= columnCount ; i++ )
		//{
			sb.append(rs.getString("ROW_DATA"));
			//sb.append(rs.getString(rsmd.getColumnName(i)));
			//sb.append(replaceForCsv(rs.getString(rsmd.getColumnName(i))));  // 성능이슈 발생하는 부분.
			//if(i<columnCount)sb.append(US);
		//}	 
		sb.append(RS);
		
		flushCount++;
		
		if(flushCount==fetchSize)
		{
			flushBuffer(zipStream, sb);
			flushCount=0;
			sb = new StringBuffer();
		}
	}
	return sb;
}

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
	
	return sb.append("SSV:euc-kr").append(RS);
}

/**
* VariableList
* @param sb
* @return StringBuffer
* @throws Exception
*/
/**
public StringBuffer getCsvVl(StringBuffer sb) throws Exception {
	if (outVaList != null) {
	  int size = outVaList.size();
	  
	  for (int i = 0; i < size; i++) {
		    Variable var = outVaList.get(i);
		    sb.append(var.getName())
		        .append("=").append(var.getString()).append(US);
	  }
	  if (0 < size) sb.replace(sb.length()-1, sb.length(), RS);
	}
	return sb;
}
*/

/**
* Dataset head
* @param sb
* @param ds
* @return StringBuffer
* @throws Exception
*/

public static StringBuffer getCsvDsHead(StringBuffer sb, String dsName, ResultSet rs, int dateDiff)
  throws Exception {
	sb.append("Dataset:").append(dsName).append(RS);
	sb.append("_RowType_"+US);
	ResultSetMetaData rsmd = rs.getMetaData();     // select 
	
	String strColId = "";
	
	/* int columnCount = rsmd.getColumnCount(); */
	
	for(int i=1; i<=dateDiff; i++)
	{
		if(dateDiff == 1)
		{
			strColId += "COL_" + i + ":INT(INT)"+RS;
		}
		else
		{
			if(i != dateDiff)
				strColId += "COL_" + i + ":INT(INT)"+US;
			else
				strColId += "COL_" + i + ":INT(INT)"+RS;
		}
	}
	
	sb.append(strColId);
	
	/* sb.append(
			  "DATA_TYPE_CODE:String(STRING)"+US
			 +"DATA_TYPE_CODE_NAME:String(STRING)"+US
			 +"MARC_TYPE_CODE:String(STRING)"+US
			 +"MARC_TYPE_CODE_NAME:String(STRING)"+US
			 +"DATA_DIV_CODE:String(STRING)"+US
			 +"DATA_DIV_CODE_NAME:String(STRING)"+US
			 +"MARC_KIND_CODE:String(STRING)"+US
			 +"TITLE:String(STRING)"+US
			 +"AUTHOR:String(STRING)"+US
			 +"PUBLISHER:String(STRING)"+US
			 +"PUB_YEAR:String(STRING)"+US
			 +"PLACE_CODE:String(STRING)"+US
			 +"CALL_NO:String(STRING)"+US
			 +"CLASSIFICATION_NO:String(STRING)"+US
			 +"VOLUMN_NO:String(STRING)"+US
			 +"LANG_CODE:String(STRING)"+US
			 +"CONTROL_NO:String(STRING)"+US
			 +"ISBN:String(STRING)"+US
			 +"BLIND_YN:String(STRING)"+RS
			 ); */
	
	//System.out.print(sb.toString());
	/**	
	for (int i = 1; i <= columnCount; i++) {
		String Colnm = rsmd.getColumnName(i);
		int    ColType = rsmd.getColumnType(i);  
		
		sb.append(rsmd.getColumnName(i)).append(":String(").append(rsmd.getColumnType(i)).append(")"+US);
	}
	if (0 < columnCount) sb.replace(sb.length()-1, sb.length(), RS);
	**/
	
	return sb;
}

static int tempCnt=0;

private static void flushBuffer(GZIPOutputStream zipStream, StringBuffer buffer)
{
	try{
		byte[] zipHTMLArray = buffer.toString().getBytes("UTF-8");
		zipStream.write(  zipHTMLArray, 0, zipHTMLArray.length );      
		zipStream.flush();
		//System.out.print( "speedTest_dr.jsp.flushBuffer() ["+(tempCnt++)+"], size="+zipHTMLArray.length + "\n");
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
	
	try 
	{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection("jdbc:oracle:thin:@14.63.224.112:1521:XE", "POC_SKINNOVATION", "a1234");
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
int nRowCount = Integer.parseInt(request.getParameter("cnt")==null ? "0" : request.getParameter("cnt"));
int dateDiff = Integer.parseInt(request.getParameter("betweenDay"));

if(nRowCount == 0)
	nRowCount = 10;

/** 7-1. ErrorCode, ErrorMsg **/
int nErrorCode = 0;
String strErrorMsg = "START";

out.clearBuffer();

//response.setHeader("Content-Type", "text/xml; charset=UTF-8");
response.setHeader("Accept-Encoding", "gzip, deflate");
response.setHeader("X-Compression", "gzip");
response.setHeader("Content-Encoding", "gzip");
//response.setHeader("Content-Type", "text/html");
response.setHeader("Content-Type", "text/xml");

GZIPOutputStream zipStream = new GZIPOutputStream(  new BufferedOutputStream( response.getOutputStream() ) ) ;

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

	String strColId = "";
	String strSSVFormat = "        ||  '" + US + "'  ||  \n";
	String strSSVEndFormat = " AS ROW_DATA\n";
	
	for(int i=1; i<=dateDiff; i++)
	{
		if(dateDiff == 1)
		{
			strColId += " COL_" + i + " AS ROW_DATA \n";
		}
		else
		{
			strColId += " COL_" + i;
			
			if(i != dateDiff)
				strColId += strSSVFormat;
			else if(i == dateDiff)
				strColId += strSSVEndFormat;
		}
	}

	sb.append("SELECT ")
	.append(strColId)
	.append(" FROM SK_DATA \n")
	.append(" WHERE ROWNUM <= "+ nRowCount +" \n");
	
	/* sb.append("SELECT DATA_TYPE_CODE        ||  '" + US + "'  ||  \n");
	sb.append("       DATA_TYPE_CODE_NAME     ||  '" + US + "'  ||  \n");
	sb.append("       MARC_TYPE_CODE     ||  '" + US + "'  ||  \n");
	sb.append("       MARC_TYPE_CODE_NAME     ||  '" + US + "'  ||  \n");
	sb.append("       DATA_DIV_CODE     ||  '" + US + "'  ||  \n");
	sb.append("       DATA_DIV_CODE_NAME     ||  '" + US + "'  ||  \n");
	sb.append("       MARC_KIND_CODE     ||  '" + US + "'  ||  \n");
	sb.append("       TITLE     ||  '" + US + "'  ||  \n");
	sb.append("       AUTHOR     ||  '" + US + "'  ||  \n");
	sb.append("       PUBLISHER     ||  '" + US + "'  ||  \n");
	sb.append("       PUB_YEAR     ||  '" + US + "'  ||  \n");
	sb.append("       PLACE_CODE     ||  '" + US + "'  ||  \n");
	sb.append("       CALL_NO     ||  '" + US + "'  ||  \n");
	sb.append("       CLASSIFICATION_NO     ||  '" + US + "'  ||  \n");
	sb.append("       VOLUMN_NO     ||  '" + US + "'  ||  \n");
	sb.append("       LANG_CODE     ||  '" + US + "'  ||  \n");
	sb.append("       CONTROL_NO     ||  '" + US + "'  ||  \n");
	sb.append("       ISBN     ||  '" + US + "'  ||  \n");
	sb.append("       BLIND_YN AS ROW_DATA                    \n");
	sb.append("  FROM V2                     \n");
	sb.append("  WHERE 1=1                                \n");
	sb.append("  AND rownum <= " + (nRowCount) + "	       \n"); */

	//System.out.print(sb.toString());
	
	rs = stmt.executeQuery(sb.toString());

	/** 7-2. ErrorCode, ErrorMsg **/
	nErrorCode = 0;
	strErrorMsg = "SUCC";
	
	resultSb = new StringBuffer(16384);
	
	getCsvHead(resultSb);
	
	resultSb.append("ErrorCode=0"+US+"ErrorMsg=SUCC"+RS);
	
	//resultSb.append("ErrorCode=0"+US+"ErrorMsg=SUCC"+US+"var1=1234"+RS);
	
	getCsvDsHead(resultSb, "dsOutput", rs, dateDiff);

	resultSb = getCsvDsBody(resultSb, rs, zipStream);

	datasettime = System.currentTimeMillis() - starttime;	

	flushBuffer(zipStream, resultSb);
	
	zipStream.close(); 
	
} catch (Throwable th) {
	nErrorCode = -1;
	strErrorMsg = th.getMessage();
	System.out.print(strErrorMsg);
} finally {
	if(zipStream   != null){	zipStream.close();}
	if(rs   != null){	rs.close();}
	if(stmt != null){	stmt.close();}
	if(con  != null){	con.close();}
}
%>