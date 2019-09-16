<%@ page contentType="text/html; charset=euc-kr"%><%@
page language="java"%><%@
page import="com.nexacro17.xapi.tx.*" %><%@
page import="com.nexacro17.xapi.data.*" %><%@
page import="com.nexacro17.xapi.data.datatype.*" %><%@
page import="java.sql.*"%>
<%
	/** XPlatform 기본객체(PlatformData) 생성하기 **/
	PlatformData pdata = new PlatformData();
	
	/** ErrorCode, ErrorMsg **/
	int nErrorCode = 0;
	String strErrorMsg = "START";
	
	/** PlatformRequest 만들기 & Data 읽기 **/
	HttpPlatformRequest req = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	req.receiveData();
	
	PlatformData inPD = req.getData();
	
	/** 변수리스트 읽기 **/
	VariableList    inVariableList  = inPD.getVariableList();
	
	/** 데이터셋 리스트 읽기 **/
	DataSetList     inDataSetList   = inPD.getDataSetList();
	
	/** 데이터셋 읽기 **/
	DataSet inDs = inDataSetList.get("dsInput");
	
	/** DB 연결 **/
	try
	{
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		try {
		
			String url="jdbc:oracle:thin:@14.63.224.112:1521:xe";
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection(url, "POC_DAELIMUNIVERSITY", "a1234");
			
			stmt = con.createStatement();
			
			/*Parameter*/
			String dsName = request.getParameter("dsName");
			String empNo = request.getParameter("empNo");
			String subjectKey = request.getParameter("subjectKey");
			
			/** SQL 수행구문 작성하기 **/
			String sql = "";
			con.setAutoCommit(false);
	
			int rowType = 0;
			int i = 0;
			
			for(i=0; i<inDs.getRowCount(); i++)
			{
				/** 현재 Row의 상태를 확인(신규, 수정 여부) **/
				rowType = inDs.getRowType(i);
				
				/** 신규 등록 처리를 위한 SQL **/
				if(rowType == DataSet.ROW_TYPE_INSERTED){
					sql = "INSERT INTO " + dsName + "("
								+" EMP_NO  "   
								+" ,SUBJECT_KEY  "   
								+" ,SUBJECT  "   
								+" ,GRADE  "   
								+" ,ROOM  "   
								+" ,NUM  " 
								+" ,SEQUENCENUM " 
								+" ,EMP_NAME   " 
								+" ,WORK_FLAG  " 
								+" ,JOB_FLAG   " 
								+" ,STUDY_FLAG " 
								+" ,MID_GRADE  " 
								+" ,FIN_GRADE  " 
								+" ,HOM_GRADE  " 
								+" ,CUR_GRADE  " 
								+" ,CYBER_FLAG  " 
								+" ,TOTAL_GRADE   " 
								+" ,RANK   " 
								+" ,PANDF   "   
								+" ,REJOIN_FLAG )"   
								+" VALUES "
								+" ( '" + inDs.getInt(i ,"EMP_NO") + "'"
								+" ,'" + inDs.getString(i ,"SUBJECT_KEY") + "'"
								+" ,'" + inDs.getString(i ,"SUBJECT") + "'"
								+" ,'" + inDs.getInt(i ,"GRADE") + "'"
								+" ,'" + inDs.getInt(i ,"ROOM") + "'"
								+" ,'" + inDs.getInt(i, "NUM") + "'"
								+" ,'" + inDs.getInt(i ,"SEQUENCENUM") + "'"
								+" ,'" + inDs.getString(i ,"EMP_NAME") + "'"
								+" ,'" + inDs.getInt(i ,"WORK_FLAG") + "'"
								+" ,'" + inDs.getInt(i ,"JOB_FLAG") + "'"
								+" ,'" + inDs.getInt(i ,"STUDY_FLAG") + "'"
								+" ,'" + inDs.getInt(i, "MID_GRADE") + "'"
								+" ,'" + inDs.getInt(i ,"FIN_GRADE") + "'"
								+" ,'" + inDs.getInt(i ,"HOM_GRADE") + "'"
								+" ,'" + inDs.getInt(i ,"CUR_GRADE") + "'"
								+" ,'" + inDs.getInt(i ,"CYBER_FLAG") + "'"
								+" ,'" + inDs.getInt(i ,"TOTAL_GRADE") + "'"
								+" ,'" + inDs.getString(i, "RANK") + "'"
								+" ,'" + inDs.getString(i ,"PANDF") + "'"
								+" ,'" + inDs.getInt(i, "REJOIN_FLAG") + "')";
					//System.out.println(sql);
					stmt.executeUpdate(sql);
					
				}
				/** 수정 처리를 위한 SQL **/
				else if(rowType == DataSet.ROW_TYPE_UPDATED){
					sql = " UPDATE " + dsName + " "
								+" SET EMP_NO  = '" + inDs.getInt(i,"EMP_NO") + "'"
								+" ,SUBJECT_KEY  = '" + inDs.getString(i,"SUBJECT_KEY") + "'"
								+" ,SUBJECT  = '" + inDs.getString(i,"SUBJECT") + "'"
								+" ,GRADE  = '" + inDs.getInt(i,"GRADE") + "'"
								+" ,ROOM  = '" + inDs.getInt(i,"ROOM") + "'"
								+" ,NUM  = '" + inDs.getInt(i,"NUM") + "'"
								+" ,SEQUENCENUM  = '" + inDs.getInt(i,"SEQUENCENUM") + "'"
								+" ,EMP_NAME  = '" + inDs.getString(i,"EMP_NAME") + "'"
								+" ,WORK_FLAG  = '" + inDs.getInt(i,"WORK_FLAG") + "'"
								+" ,JOB_FLAG  = '" + inDs.getInt(i,"JOB_FLAG") + "'"
								+" ,STUDY_FLAG  = '" + inDs.getInt(i,"STUDY_FLAG") + "'"
								+" ,MID_GRADE  = '" + inDs.getInt(i,"MID_GRADE") + "'"
								+" ,FIN_GRADE  = '" + inDs.getInt(i,"FIN_GRADE") + "'"
								+" ,HOM_GRADE  = '" + inDs.getInt(i,"HOM_GRADE") + "'"
								+" ,CUR_GRADE  = '" + inDs.getInt(i,"CUR_GRADE") + "'"
								+" ,CYBER_FLAG  = '" + inDs.getInt(i,"CYBER_FLAG") + "'"
								+" ,TOTAL_GRADE  = '" + inDs.getInt(i,"TOTAL_GRADE") + "'"
								+" ,RANK  = '" + inDs.getString(i,"RANK") + "'"
								+" ,PANDF  = '" + inDs.getString(i,"PANDF") + "'"
								+" ,REJOIN_FLAG  = '" + inDs.getInt(i,"REJOIN_FLAG") + "'"
								+" WHERE SEQUENCENUM = '" + inDs.getInt(i,"SEQUENCENUM") + "'"
								+" AND SUBJECT_KEY = '" + inDs.getString(i,"SUBJECT_KEY") + "'";
					
					stmt.executeUpdate(sql);
					
				}
			}
			
			/** 삭제 처리를 위한 SQL **/
			for(i=0; i<inDs.getRemovedRowCount();i++){
				sql = "DELETE FROM " + dsName + " WHERE SEQUENCENUM = '" + inDs.getRemovedData(i,"SEQUENCENUM") +"' AND SUBJECT_KEY = '" + inDs.getRemovedData(i,"SUBJECT_KEY") +"'";
				stmt.executeUpdate(sql);
			}
			con.commit();
			
			/** ErrorCode, ErrorMsg 처리하기 **/
			nErrorCode = 0;
			strErrorMsg  = "SUCC";
			
		}catch(SQLException e){
			con.rollback();
			
			/** ErrorCode, ErrorMsg 처리하기 **/
			nErrorCode = -1;
			strErrorMsg  = e.getMessage(); 
			
		}
		
		/** DB Close**/
		if(rs   != null){	try{rs.close();}  catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(stmt != null){	try{stmt.close();}catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(con  != null){	try{con.close();} catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
	}catch(Exception e){
	
		/** ErrorCdoe, ErrorMsg 처리하기 **/
		nErrorCode = -1;
		strErrorMsg  = e.getMessage(); 
		
	}
	
	/** ErrorCdoe, ErrorMsg 처리하기 **/
	VariableList varList = pdata.getVariableList();
	varList.add("ErrorCode",nErrorCode);
	varList.add("ErrorMsg",strErrorMsg);
	
	/** xml output 객체(PlatformResponse) 만들기 **/
	HttpPlatformResponse res = new HttpPlatformResponse(response,PlatformType.CONTENT_TYPE_XML,"UTF-8");
	res.setData(pdata);
	res.sendData();
%>