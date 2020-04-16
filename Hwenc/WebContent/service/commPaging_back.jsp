<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>

<%@ page contentType="text/xml; charset=UTF-8" %>

<%
	PlatformData pdata = new PlatformData();
	
	int nErrorCode = 0;
	String strErrorMsg = "START";
	
	HttpPlatformRequest req = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	req.receiveData();
	
	PlatformData inPD = req.getData();
	
	VariableList    inVariableList  = inPD.getVariableList();
	
	int iRowCnt	= inVariableList.getInt("blockCount");
    int iPageNo	= inVariableList.getInt("currentPage");

	DataSetList  inDataSetList   = inPD.getDataSetList();
	//iTotalRowCount : 조회된 전체 row count (select COUNT(*) from table명)
	int iTotalRowCount	= 9658;
	//Math.ceil(nTotlaRowCount/nRowCount)
	int nPageBlock	= (int)Math.ceil((double)iTotalRowCount/iRowCnt);
	int nStartRow	= iRowCnt * (iPageNo-1);
	int nEndRow		= nStartRow + iRowCnt;
	
	try {
		
		
		
		DataSet ds = new DataSet("output");
	
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
		
		pdata.addDataSet(ds);					
		nErrorCode = 0;
		strErrorMsg = "SUCC";
		
	}  catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
	}
	
	Variable pageBlockCount = new Variable("pageBlockCount");
	pageBlockCount.set(nPageBlock);
	
	Variable totRowCount = new Variable("totRowCount");
	totRowCount.set(iTotalRowCount);
		
	VariableList varList = pdata.getVariableList();
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg", strErrorMsg);
	
	varList.add(pageBlockCount);
	varList.add(totRowCount);
	
	out.clear();
	
	HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	res.setData(pdata);
	res.sendData();
%>