<%@ page import="com.nexacro17.xapi.tx.*"%>
<%@ page import="com.nexacro17.xapi.data.*"%>
<%@ page import="com.nexacro17.xapi.data.datatype.*"%>
<%@ page import="java.sql.*"%>
<%@ page contentType="text/xml; charset=UTF-8"%>
<%! 
public DataSet makeDataSet(ResultSet rs,String strDataSet)  throws ServletException, Exception
{
	DataSet ds = new DataSet(strDataSet);

	ResultSetMetaData rsmd = rs.getMetaData();
	
	int numberOfColumns = rsmd.getColumnCount();
	
	int    ColSize;
	
	for ( int j = 1 ; j <= numberOfColumns ; j++ )
	{
		String Colnm = rsmd.getColumnName(j);
		int    ColType = rsmd.getColumnType(j);  
		ColSize = rsmd.getColumnDisplaySize(j);

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
		Row = ds.newRow();
		for ( i = 0 ; i < numberOfColumns ; i++ )
		{
			if ( ds.getColumn(i).getDataType() == DataTypes.DATE )
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getDate(ds.getColumn(i).getName()));
			}        
			else
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getString(ds.getColumn(i).getName()));
			}        
		}	 
	}
	System.out.println(ds.saveXml());
	return ds;
}
%>

<%
	PlatformData pdata = new PlatformData();
	
	int nErrorCode = 0;
	String strErrorMsg = "START";
	
	// get parameter
	 String keywords = request.getParameter("keywords");

	HttpPlatformRequest req = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	req.receiveData();
	
	PlatformData inPD = req.getData();
	
	VariableList    inVariableList  = inPD.getVariableList();
	
	String strRowCount = inVariableList.getString("rowcount");
	String strNo = inVariableList.getString("strNo");
	String strNm = inVariableList.getString("strNm");

	DataSetList     inDataSetList   = inPD.getDataSetList();
	
	Connection con = null;
	Statement stmt = null;
	ResultSet rs   = null;
	
	try {
		try {	
			//JDBC 연결
			String url="jdbc:oracle:thin:@127.0.0.1:1521:XE";
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection(url,"POC_KNU","a1234");
			
			stmt = con.createStatement();	
			StringBuffer sb = new StringBuffer();				

			//FILE_KEY에 해당하는 FILE정보 
			nErrorCode = 0;
			strErrorMsg = "SUCC";
			
			if(keywords.equals("comCode"))
			{
				sb.append("SELECT  * ")
	  	  	  	.append(" FROM  CODE_DETAIL");
				rs = stmt.executeQuery(sb.toString());
				pdata.addDataSet(makeDataSet(rs,"comCode"));
			}
			
			if (keywords.equals("search"))
			{	
				sb.append("SELECT  a.*, b.* ")
	  	  	  	.append(" FROM ACADEMIC_BASICS a LEFT JOIN FILE_MAP b")
	  	  	  	.append(" ON a.STUDENT_NO=b.FILE_KEY")
	  	  	  	.append(" WHERE 1=1");
				System.out.println(sb.toString());
				if(strNo.equals("undefined") || strNo.equals(""))
				{
					sb.append(" AND STUDENT_NAME_KOR LIKE '%" + strNm +"%'")
					.append(" AND nvl(b.FM_SEQ, 1) = nvl((SELECT MAX(FM_SEQ) FROM FILE_MAP WHERE FILE_KEY = a.STUDENT_NO), 1)");
				}
				else if(strNm.equals("undefined") || strNm.equals(""))
				{
					sb.append(" AND a.STUDENT_NO LIKE '%" + strNo +"%'")
					.append(" AND nvl(b.FM_SEQ, 1) = nvl((SELECT MAX(FM_SEQ) FROM FILE_MAP WHERE FILE_KEY = a.STUDENT_NO), 1)");
				}
				else
				{
					sb.append(" AND a.STUDENT_NO LIKE '%" + strNo +"%'" + " AND a.STUDENT_NAME_KOR LIKE '%" + strNm +"%'")
					.append(" AND nvl(b.FM_SEQ, 1) = nvl((SELECT MAX(FM_SEQ) FROM FILE_MAP WHERE FILE_KEY = a.STUDENT_NO), 1)");
				}
				rs = stmt.executeQuery(sb.toString());
				pdata.addDataSet(makeDataSet(rs,"UserInfo"));
			}
			else if (keywords.equals("lecture"))
			{
				sb.append("SELECT  * ")
	  	  	  	.append(" FROM  APPLICATION_CLASSES")
				.append(" WHERE  STUDENT_NO LIKE '%" + strNo +"%'");
				
				rs = stmt.executeQuery(sb.toString());
				pdata.addDataSet(makeDataSet(rs,"Lecture"));	
			}
			else if (keywords.equals("surveyRead"))
			{
				sb.append("SELECT *")
	  	  	  	.append(" FROM  SURVEY_CONTENTS");
				
				rs = stmt.executeQuery(sb.toString());
	  	  		pdata.addDataSet(makeDataSet(rs,"surveyDs"));
	  	  		
	  	  		StringBuffer sb2 = new StringBuffer();
	  	  		sb2.append("SELECT *")
	  	  	  	.append(" FROM ANSWEAR_LIST");

				rs = stmt.executeQuery(sb2.toString());
	  	  		pdata.addDataSet(makeDataSet(rs,"answerDs"));	
			}
			
			nErrorCode = 0;
			strErrorMsg = "SUCC";
			
		} catch (Exception e) {
			nErrorCode = -1;
			strErrorMsg = e.getMessage();
		}
		
		if(rs   != null){	try{rs.close();}  catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(stmt != null){	try{stmt.close();}catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(con  != null){	try{con.close();} catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
	}  catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
	}

	VariableList varList = pdata.getVariableList();
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg", strErrorMsg);
	
	out.clear();
	
	HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	res.setData(pdata);
	res.sendData();
%>