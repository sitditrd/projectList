<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.data.datatype.*" %>
<%@ page import="java.sql.*"%>
<%@ page contentType="text/xml; charset=UTF-8" %>
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
	
	String strRowCount = inVariableList.getString("rowcount");
	
	DataSetList     inDataSetList   = inPD.getDataSetList();
	
	try {
	
		Connection con = null;
		Statement stmt = null;
		ResultSet rs   = null;
	
		try {	
			String url="jdbc:oracle:thin:@14.63.224.112:1521:xe";
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection(url, "POC_DAELIMUNIVERSITY", "a1234");
			
			stmt = con.createStatement();	
			StringBuffer sb = new StringBuffer();
			
			//Parameter 
			String dsName = request.getParameter("dsName");
			String lectureKey = request.getParameter("lectureKey");
			String empNo = request.getParameter("empNo");
			String workFlag = request.getParameter("workFlag");
		    String majorName = request.getParameter("majorName");
		    String type = request.getParameter("type");
			String subjectKey = request.getParameter("subjectKey");
			
			/*학사력관리*/
			if(dsName.equals("MOTSYS"))
			{
				sb.append("select  * ")
			  	.append(" from  MOTSYS ");
			  	
			  	rs = stmt.executeQuery(sb.toString());
				pdata.addDataSet(makeDataSet(rs, "dsOutput"));
			}
			
			/*교원조회*/
			else if(dsName.equals("EMP_INFO"))
			{
				/*교원조회 => 학과:전체일 때, 재직구분:전체일 때*/
				if(type.equals("0"))
				{
					sb.append("select  * ")
				  	.append(" from  EMP_INFO ");
				}
				
				/*교원조회 => 학과만:전체일 때*/
				if(type.equals("1"))
				{
					sb.append("select  * ")
				  	.append(" from  EMP_INFO ")
				  	.append(" where WORK_FLAG=" + workFlag);
			  	}
			  	
			  	/*교원조회 => 재직구분만:전체일 때*/
			  	if(type.equals("2"))
				{
					sb.append("select  * ")
				  	.append(" from  EMP_INFO ")
				  	.append(" WHERE MAJOR_NAME=" + majorName);
			  	}
			  	
			  	/*교원조회 => 학과:전체 아닐 때, 재직구분:전체 아닐 때*/
			  	if(type.equals("3"))
				{
					sb.append("select  * ")
				  	.append(" from  EMP_INFO ")
				  	.append(" where 1=1")
				  	.append(" AND WORK_FLAG=" + workFlag)
				  	.append(" AND MAJOR_NAME=" + majorName);
			  	}
			  	
			  	rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput"));
			}
			
			/*강의계획서 코드 수정 전(Multi Select 전)*/
			/* else if(dsName.equals("LECTURE_GUIDE"))
			{
				sb.append("select  * ")
			  	.append(" from  LECTURE_GUIDE ")
			  	.append(" where GUIDE_KEY=" + lectureKey);
			}
			else if(dsName.equals("LECTURE_CONSULTANT"))
			{
				sb.append("select  * ")
			  	.append(" from  LECTURE_CONSULTANT ")
			  	.append(" where CONSULTANT_KEY=" + lectureKey);
			}
			else if(dsName.equals("LECTURE_BOOK"))
			{
				sb.append("select  * ")
			  	.append(" from  LECTURE_BOOK ")
			  	.append(" where BOOK_KEY=" + lectureKey);
			}
			else if(dsName.equals("LECTURE_PLAN"))
			{
				sb.append("select  * ")
			  	.append(" from  LECTURE_PLAN ")
			  	.append(" where PLAN_KEY=" + lectureKey);
			} */
			
			/*강의계획서 코드 수정 후(Multi Select)*/
			else if(dsName.equals("LECTURE_GUIDE"))
			{
				sb = new StringBuffer();
			
				sb.append("select  * ")
				  .append(" from  LECTURE_GUIDE ")
				  .append(" where GUIDE_KEY=" + lectureKey);
				  	
			  	rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput"));
				
				/*수정사항 (하성원 수석)*/
				
				/*
				sb.setLength(0);
				sb = null; 
				의 작업은 아래처럼 new를 안해도 된다. (계속 생성하면 시간이 걸리기 때문.)
				*/
				
				sb = new StringBuffer();
				
				sb.append("select  * ")
				  .append(" from  LECTURE_BOOK ")
				  .append(" where BOOK_KEY=" + lectureKey);
				  	
				rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput2"));
				
				
				sb = new StringBuffer();
				
				sb.append("select  * ")
				  .append(" from  LECTURE_BOOK ")
				  .append(" where BOOK_KEY=" + lectureKey);
				  	
				rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput3"));
				
				sb = new StringBuffer();
				
				sb.append("select  * ")
				  .append(" from  LECTURE_PLAN ")
				  .append(" where PLAN_KEY=" + lectureKey);
				  	
				rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput4"));
			}
			
			/*성적입력 코드 수정 전(Multi Select 전)*/
		  	/* else if(dsName.equals("STUDENT_GRADE"))
			{
				sb.append("select  * ")
			  	.append(" from  STUDENT_GRADE ")
			  	.append(" where 1=1")
			  	.append(" AND EMP_NO = " + empNo)
			  	.append(" AND SUBJECT_KEY = " + subjectKey);
			}
			else if(dsName.equals("RANK_RATIO"))
			{
				sb.append("select  * ")
			  	.append(" from  RANK_RATIO ")
			  	.append(" where 1=1")
			  	.append(" AND EMP_NO = " + empNo)
			  	.append(" AND SUBJECT_KEY = " + subjectKey);
			}
			else if(dsName.equals("DISTRICT"))
			{
				sb.append("select  * ")
			  	.append(" from  DISTRICT ");
			} */
			
			/*성적입력 코드 수정 후(Multi Select)*/
			else if(dsName.equals("STUDENT_GRADE"))
			{				
				sb = new StringBuffer();
				
				sb.append("select  * ")
			  	.append(" from  STUDENT_GRADE ")
			  	.append(" where 1=1")
			  	.append(" AND EMP_NO = " + empNo)
			  	.append(" AND SUBJECT_KEY = " + subjectKey);
			  	
			  	rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput"));
				
				sb = new StringBuffer();
				
				sb.append("select  * ")
			  	.append(" from  RANK_RATIO ")
			  	.append(" where 1=1")
			  	.append(" AND EMP_NO = " + empNo)
			  	.append(" AND SUBJECT_KEY = " + subjectKey);
			  	
			  	rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput2"));
				
				sb = new StringBuffer();
				
				sb.append("select  * ")
			  	.append(" from  DISTRICT ");
			  	
			  	rs = stmt.executeQuery(sb.toString());	
				pdata.addDataSet(makeDataSet(rs, "dsOutput3"));
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