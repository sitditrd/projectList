<%@page import="com.sun.media.sound.AlawCodec"%>
<%@ page import="com.nexacro17.xapi.data.*" 
%><%@ page import="com.nexacro17.xapi.tx.*" 
%><%@ page import="java.sql.*"
%><%@ page contentType="text/xml; charset=UTF-8" 
%><%! 
public DataSet makeDataSet(ResultSet rs,String strDataSet)  throws ServletException, Exception
{
	DataSet ds = new DataSet(strDataSet);

	ResultSetMetaData rsmd = rs.getMetaData();     // select한 정보
	int numberOfColumns = rsmd.getColumnCount();   // select한 컬럼 수

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
%>

<%
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
//DataSetList     inDataSetList   = inPD.getDataSetList();

//Param Settings
DataSet ds_EMPLOYEE_ID = inPD.getDataSet("ds_EMPLOYEE_ID");
DataSet ds_FIRST_NAME = inPD.getDataSet("ds_FIRST_NAME");
DataSet ds_LAST_NAME = inPD.getDataSet("ds_LAST_NAME");
DataSet ds_EMAIL = inPD.getDataSet("ds_EMAIL");
DataSet ds_PHONE_NUMBER = inPD.getDataSet("ds_PHONE_NUMBER");
DataSet ds_HIRE_DATE = inPD.getDataSet("ds_HIRE_DATE");
DataSet ds_JOB_ID = inPD.getDataSet("ds_JOB_ID");
DataSet ds_SALARY = inPD.getDataSet("ds_SALARY");
DataSet ds_MANAGER_ID = inPD.getDataSet("ds_MANAGER_ID");
DataSet ds_DEPARTMENT_ID = inPD.getDataSet("ds_DEPARTMENT_ID");

String EMPLOYEE_ID = "";
String FIRST_NAME = "";
String LAST_NAME = "";
String EMAIL = "";
String JOB_ID = "";
String MANAGER_ID = "";
String DEPARTMENT_ID = "";

//ds_EMPLOYEE_ID
for(int i=0; i<ds_EMPLOYEE_ID.getRowCount(); i++)
{
	if(i == ds_EMPLOYEE_ID.getRowCount()-1)
		EMPLOYEE_ID += "'" +  ds_EMPLOYEE_ID.getString(i, "CAPTION") + "'";
	else
		EMPLOYEE_ID += "'" +  ds_EMPLOYEE_ID.getString(i, "CAPTION") + "'" + ",";
}	

//ds_FIRST_NAME
for(int i=0; i<ds_FIRST_NAME.getRowCount(); i++)
{
	if(i == ds_FIRST_NAME.getRowCount()-1)
		FIRST_NAME += "'" +  ds_FIRST_NAME.getString(i, "CAPTION") + "'";
	else
		FIRST_NAME += "'" +  ds_FIRST_NAME.getString(i, "CAPTION") + "'" + ",";
}

//ds_LAST_NAME
for(int i=0; i<ds_LAST_NAME.getRowCount(); i++)
{
	if(i == ds_LAST_NAME.getRowCount()-1)
		LAST_NAME += "'" +  ds_LAST_NAME.getString(i, "CAPTION") + "'";
	else
		LAST_NAME += "'" +  ds_LAST_NAME.getString(i, "CAPTION") + "'" + ",";
}

//ds_EMAIL
for(int i=0; i<ds_EMAIL.getRowCount(); i++)
{
	if(i == ds_EMAIL.getRowCount()-1)
		EMAIL += "'" +  ds_EMAIL.getString(i, "CAPTION") + "'";
	else
		EMAIL += "'" +  ds_EMAIL.getString(i, "CAPTION") + "'" + ",";
}

//ds_JOB_ID
for(int i=0; i<ds_JOB_ID.getRowCount(); i++)
{
	if(i == ds_JOB_ID.getRowCount()-1)
		JOB_ID += "'" +  ds_JOB_ID.getString(i, "CAPTION") + "'";
	else
		JOB_ID += "'" +  ds_JOB_ID.getString(i, "CAPTION") + "'" + ",";
}

//ds_MANAGER_ID
for(int i=0; i<ds_MANAGER_ID.getRowCount(); i++)
{
	if(i == ds_MANAGER_ID.getRowCount()-1)
		MANAGER_ID += "'" +  ds_MANAGER_ID.getString(i, "CAPTION") + "'";
	else
		MANAGER_ID += "'" +  ds_MANAGER_ID.getString(i, "CAPTION") + "'" + ",";
}

//ds_DEPARTMENT_ID
for(int i=0; i<ds_DEPARTMENT_ID.getRowCount(); i++)
{
	if(i == ds_DEPARTMENT_ID.getRowCount()-1)
		DEPARTMENT_ID += "'" +  ds_DEPARTMENT_ID.getString(i, "CAPTION") + "'";
	else
		DEPARTMENT_ID += "'" +  ds_DEPARTMENT_ID.getString(i, "CAPTION") + "'" + ",";
}

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
		conn = DriverManager.getConnection(url, "POC_GSCM", "a1234");
		stmt = conn.createStatement();	
		
		/** 쿼리 실행  **/
	  	StringBuffer sql = new StringBuffer();												
	  	sql.append("  SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, TO_CHAR(HIRE_DATE, 'yyyymmdd HH24MISS') AS HIRE_DATE, JOB_ID, SALARY, COMMISSION_PCT, MANAGER_ID, DEPARTMENT_ID ");
	  	sql.append("  FROM POC_TACTTIME ");
	  	sql.append("  WHERE 1=1");
	  	
	  	if(EMPLOYEE_ID.length() > 0)
	  		sql.append("  AND EMPLOYEE_ID IN (" + EMPLOYEE_ID + ")");
	  	
	  	if(FIRST_NAME.length() > 0)
	  		sql.append("  AND FIRST_NAME IN (" + FIRST_NAME + ")");
	  	
	  	if(LAST_NAME.length() > 0)
	  		sql.append("  AND LAST_NAME IN (" + LAST_NAME + ")");
	  	
	  	if(EMAIL.length() > 0)
	  		sql.append("  AND EMAIL IN (" + EMAIL + ")");
	  	
	  	if(ds_PHONE_NUMBER.getString(0, "CAPTION") != null)
	  		sql.append("  AND PHONE_NUMBER LIKE '%" + ds_PHONE_NUMBER.getString(0, "CAPTION") + "%'");
	  	
	  	if(ds_HIRE_DATE.getString(0, "CAPTION") != null && ds_HIRE_DATE.getString(0, "CAPTION").length() > 0)
	  	{
	  		sql.append("  AND HIRE_DATE BETWEEN TO_DATE('"+ ds_HIRE_DATE.getString(0, "CAPTION") +"', 'YYYY-MM-DD/HH24:MI:SS') AND TO_DATE('"+ ds_HIRE_DATE.getString(0, "CAPTION") +"', 'YYYY-MM-DD/HH24:MI:SS') ");
	  	}
	  	
	  	if(JOB_ID.length() > 0)
	  		sql.append("  AND JOB_ID IN (" + JOB_ID + ")");
	  	
	  	if(ds_SALARY.getString(0, "CAPTION") != null)
	  		sql.append("  AND SALARY LIKE '%" + ds_SALARY.getString(0, "CAPTION") + "%'");
	  	
	  	if(MANAGER_ID.length() > 0)
	  		sql.append("  AND MANAGER_ID IN (" + MANAGER_ID + ")");
	  	
	  	if(DEPARTMENT_ID.length() > 0)
	  		sql.append("  AND DEPARTMENT_ID IN (" + DEPARTMENT_ID + ")");
	  	
	  	sql.append("  ORDER BY EMPLOYEE_ID ASC");
	  	
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