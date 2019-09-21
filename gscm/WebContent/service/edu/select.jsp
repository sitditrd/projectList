<%@ page import="com.nexacro17.xapi.data.*" 
%><%@ page import="com.nexacro17.xapi.tx.*" 
%><%@ page import="java.sql.*"
%><%@ page contentType="text/xml; charset=UTF-8" 
%><%! 
public DataSet makeDataSet(ResultSet rs,String strDataSet)  throws ServletException, Exception
{
	DataSet ds = new DataSet(strDataSet);

	ResultSetMetaData rsmd = rs.getMetaData();     // select 한 정보
	int numberOfColumns = rsmd.getColumnCount();   // select한 컬럼수

	int    ColSize;

	for ( int j = 1 ; j <= numberOfColumns ; j++ ) 
	{
		String Colnm = rsmd.getColumnName(j);
		int    ColType = rsmd.getColumnType(j);  
		ColSize = rsmd.getColumnDisplaySize(j);

		// select한 컬럼의 type에 맞게 데이타셋 컬럼을 생성 
		if ( ColType == Types.NUMERIC || ColType == Types.DOUBLE )
		{
			ds.addColumn(Colnm, DataTypes.DECIMAL,ColSize);
		}
		else if ( ColType == Types.VARCHAR )
		{
			ds.addColumn(Colnm, DataTypes.STRING,ColSize);
		}
		else if ( ColType == Types.DATE )
		{
			ds.addColumn(Colnm, DataTypes.DATE,ColSize);
		}
		else if ( ColType == Types.INTEGER )
		{
			ds.addColumn(Colnm, DataTypes.INT,ColSize);
		}
		else
		{
			ds.addColumn(Colnm, DataTypes.STRING,ColSize);
		}
	}

	int Row = 0;
	int i;

	while(rs.next())
	{
		Row = ds.newRow();    // 데이타셋 row 추가
		for ( i = 0 ; i < numberOfColumns ; i++ )
		{
			if ( ds.getColumn(i).getDataType() == DataTypes.DATE )
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getDate(ds.getColumn(i).getName()));  // 데이타저장
			}        
			else
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getString(ds.getColumn(i).getName()));  // 데이타저장
			}        
		}	 
	}
	return ds;
}
%><%
/** 4.	XPlatform 기본객체(PlatformData) 생성하기 **/
PlatformData pdata = new PlatformData();

/*********************************************************
 * request로 들어온 내용을 parsing하여
 * input variable list, input dataset list에 저장한다.
 * (MiPlatform 에서 보내온 데이터를 parsing한다.)
 *********************************************************/
PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, "utf-8");
platformRequest.receiveData();
PlatformData inPD = platformRequest.getData();

VariableList    inVariableList  = inPD.getVariableList();
DataSetList     inDataSetList   = inPD.getDataSetList();

/** 7-1. ErrorCode, ErrorMsg 선언부분 **/
int nErrorCode = 0;
String strErrorMsg = "START";
/** 5-1.	Database 연결 **/

try {

	Connection conn = null;
	Statement stmt = null;
	ResultSet rs   = null;

	try {	
		String url="jdbc:oracle:thin:@14.63.224.112:1521:XE";
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection(url,"POC_KNU","a1234");
		stmt = conn.createStatement();	
		
		/** 쿼리 실행  **/
	  	StringBuffer sql = new StringBuffer();												
	  	sql.append("  SELECT * from CODE_DETAIL ");

	  	rs = stmt.executeQuery(sql.toString());	
		
		pdata.addDataSet(makeDataSet(rs,"dsOutput"));	
		 
		/** 7-2. ErrorCode, ErrorMsg 처리하기 **/
		nErrorCode = 0;
		strErrorMsg = "SUCC";
		
	} catch (Exception e) {
		/** 7-3. ErrorCode, ErrorMsg 처리하기 **/
		nErrorCode = -1;
		strErrorMsg = e.getMessage();
	}
	/** 5-3. Database Close**/
	if(rs   != null){	try{rs.close();}  catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
	if(stmt != null){	try{stmt.close();}catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
	if(conn  != null){	try{conn.close();} catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
}  catch (Throwable th) {
	/** 7-4. ErrorCode, ErrorMsg 처리하기 **/
	nErrorCode = -1;
	strErrorMsg = th.getMessage();
}
/** 7-5. ErrorCode, ErrorMsg 처리하기 **/
VariableList varList = pdata.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);

/** 8. XML output 객체(PlatformResponse) 만들기 **/
HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML,"UTF-8");
res.setData(pdata);
res.sendData();
%>