<%@page import="com.sun.media.sound.AlawCodec"%>
<%@page import="java.util.ArrayList"%>
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
	
	//System.out.println(ds.saveXml());
	return ds;
}
%>

<%
	PlatformData pdata = new PlatformData();
	
	int nErrorCode = 0;
	String strErrorMsg = "START";

	HttpPlatformRequest req = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	req.receiveData();
	
	PlatformData inPD = req.getData();
	
	VariableList    inVariableList  = inPD.getVariableList();
	
	int betweenDay = Integer.parseInt(request.getParameter("betweenDay"));
	int cnt = Integer.parseInt(request.getParameter("cnt"));
	
	String strColId = "";
	
	Connection con = null;
	Statement stmt = null;
	ResultSet rs   = null;
	
	try {
		try {	
			//JDBC 연결
			String url="jdbc:oracle:thin:@14.63.224.112:1521:xe";
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection(url,"POC_SKINNOVATION","a1234");
			
			stmt = con.createStatement();	
			StringBuffer sb = new StringBuffer();				

			nErrorCode = 0;
			strErrorMsg = "SUCC";
			
			for(int i=1; i<=betweenDay; i++)
			{
				strColId += " COL_" + i;
				
				if(i != betweenDay)
					strColId += ",";
				else
					break;
			}
			
			sb.append("SELECT ")
			.append(strColId)
  	  	  	.append(" FROM SK_DATA")
  	  	  	.append(" WHERE ROWNUM <= "+ cnt +" ");
			
			rs = stmt.executeQuery(sb.toString());
			pdata.addDataSet(makeDataSet(rs,"dsOutput"));
				
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