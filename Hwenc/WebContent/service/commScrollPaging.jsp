<%@page import="com.sun.media.sound.AlawCodec"%>
<%@ page import="java.sql.*"%>
<%@ page import="com.nexacro17.xapi.data.*"%>
<%@ page import="com.nexacro17.xapi.tx.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.*"%>

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
	
	//Parameter
	int blockCount = Integer.parseInt(inVariableList.getString("blockCount"));
	int currentPage = Integer.parseInt(inVariableList.getString("currentPage")); 
		
	//시작레코드
	int nStartRow = (currentPage - 1) * blockCount + 1;
	//끝레코드
	int nEndRow = nStartRow + blockCount - 1;
	
	Connection con = null;
	Statement stmt = null;
	ResultSet rs   = null;
	
	try {
		
		//JDBC 연결
		String url="jdbc:oracle:thin:@14.63.224.112:1521:XE";
		Class.forName("oracle.jdbc.driver.OracleDriver");
		con = DriverManager.getConnection(url, "POC_HWENC", "a1234");
		stmt = con.createStatement();	
		
		StringBuffer sb = new StringBuffer();		
		
		sb.append("SELECT B.rm, B.COLUMN1, B.COLUMN2, B.COLUMN3, B.COLUMN4, B.COLUMN5, B.COLUMN6, B.COLUMN7, B.COLUMN8, B.COLUMN9, B.COLUMN10")
	  	.append(" FROM ( SELECT ROWNUM AS rm, A.* ")
	  	.append(" FROM ( SELECT * FROM HIGH_CAPACITY)A ")
	  	.append(" )B WHERE B.rm BETWEEN '"+ nStartRow +"' AND '" + nEndRow + "'");

		rs = stmt.executeQuery(sb.toString());
		pdata.addDataSet(makeDataSet(rs,"dsOutput"));
		
		sb = new StringBuffer();
		
		nErrorCode = 0;
		strErrorMsg = "SUCC";
		
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