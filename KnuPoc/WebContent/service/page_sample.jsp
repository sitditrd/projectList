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
	System.out.println(ds.saveXml());
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
	
	int iRowCnt	= inVariableList.getInt("rowCount");
    int iPageNo	= inVariableList.getInt("PageNo");
	String multiple = inVariableList.getString("multiple");
	int index = Integer.parseInt(request.getParameter("index"));
	
	DataSetList  inDataSetList   = inPD.getDataSetList();
	//iTotalRowCount : 조회된 전체 row count (select COUNT(*) from table명)
	/* int iTotalRowCount	= 25;
	int nPageBlock	= (int)Math.ceil((double)iTotalRowCount/iRowCnt);  */
	int nStartRow = iRowCnt * (iPageNo-1) + index;
	int nEndRow	= (nStartRow + iRowCnt) - index; 
	
	System.out.println("nStartRow : " + nStartRow + "::::nEndRow ::" + nEndRow);
	Connection con = null;
	Statement stmt = null;
	ResultSet rs   = null;
	
	try {
		
		//JDBC 연결
		String url="jdbc:oracle:thin:@127.0.0.1:1521:XE";
		Class.forName("oracle.jdbc.driver.OracleDriver");
		con = DriverManager.getConnection(url,"POC_KNU","a1234");
		
		stmt = con.createStatement();	
		StringBuffer sb = new StringBuffer();		
		
		/* DataSet ds = new DataSet("output");
	
		ds.addColumn("Column0",	DataTypes.INT	, 10);
		ds.addColumn("Column1",	DataTypes.STRING, 10);
		ds.addColumn("Column2",	DataTypes.STRING, 10);
		ds.addColumn("Column3",	DataTypes.STRING, 10);
		ds.addColumn("Column4",	DataTypes.STRING, 10);
		ds.addColumn("Column5",	DataTypes.STRING, 10);
		ds.addColumn("Column6",	DataTypes.STRING, 10);
		ds.addColumn("Column7",	DataTypes.STRING, 10);
		ds.addColumn("Column8",	DataTypes.STRING, 10);
		ds.addColumn("Column9",	DataTypes.STRING, 10);
		ds.addColumn("Column10",	DataTypes.STRING, 10);
		
		int nRow;

		for(int i = nStartRow; i < nEndRow; i++) {
			if(i+1 > iTotalRowCount)
			{
				break;
			}
			
			nRow = ds.newRow();

			ds.set(nRow, "Column0", i+1);
			ds.set(nRow, "Column1", "test");
			ds.set(nRow, "Column2", "test");
			ds.set(nRow, "Column3", "test");
			ds.set(nRow, "Column4", "test");
			ds.set(nRow, "Column5", "test");
			ds.set(nRow, "Column6", "test");
			ds.set(nRow, "Column7", "test");
			ds.set(nRow, "Column8", "test");
			ds.set(nRow, "Column9", "test");
			ds.set(nRow, "Column10", "test");
		}
		
		pdata.addDataSet(ds);			 */		
		sb.append("SELECT B.* ")
	  	.append(" FROM ( SELECT ROWNUM AS rm, A.* ")
	  	.append(" FROM ( SELECT * FROM SURVEY_CONTENTS WHERE SURVEY_CODE = '"+multiple+"' ORDER BY SURVEY_CODE, SURVEY_NO)A ")
	  	.append(" )B WHERE B.RM BETWEEN '"+ nStartRow +"' AND '" + nEndRow + "'");

		/* sb.append("select b.* from \n")
		  .append(" (select rownum rm, t.* FROM SURVEY_CONTENTS t")
		  .append(" WHERE SURVEY_CODE = '"+multiple+"') b")
		  .append(" WHERE b.rm >= "+ nStartRow +" AND b.rm <= "+nEndRow)
		  .append(" ORDER BY SURVEY_CODE, SURVEY_NO"); */
		rs = stmt.executeQuery(sb.toString());
		pdata.addDataSet(makeDataSet(rs,"PageoutDs"));
		
		sb = new StringBuffer();
		sb.append("SELECT COUNT(*) AS CNT FROM SURVEY_CONTENTS WHERE SURVEY_CODE = '"+multiple+"'");
		rs = stmt.executeQuery(sb.toString());
		pdata.addDataSet(makeDataSet(rs, "TotalRowCnt"));
		
	    sb = new StringBuffer();
	  	sb.append("SELECT *")
	  	.append(" FROM ANSWEAR_LIST");
	  	rs = stmt.executeQuery(sb.toString());
	  	pdata.addDataSet(makeDataSet(rs,"answerDs"));
	  	
		nErrorCode = 0;
		strErrorMsg = "SUCC";
		
	}  catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
	}
	
	/* Variable pageBlockCount = new Variable("pageBlockCount");
	pageBlockCount.set(nPageBlock);
	
	Variable totRowCount = new Variable("totRowCount");
	totRowCount.set(iTotalRowCount); */
		
	VariableList varList = pdata.getVariableList();
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg", strErrorMsg);
	
	/* varList.add(pageBlockCount);
	varList.add(totRowCount); */
	
	out.clear();
	
	HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	res.setData(pdata);
	res.sendData();
%>