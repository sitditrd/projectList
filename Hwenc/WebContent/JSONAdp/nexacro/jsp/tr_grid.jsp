<%@page import="com.nexacro17.xapi.tx.PlatformResponse"%>
<%@page import="com.nexacro17.xapi.tx.PlatformType"%>
<%@page import="com.nexacro17.xapi.tx.PlatformRequest"%>
<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="com.nexacro17.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.data.datatype.*" %>

<%
       String strCharset = "utf-8";

    /*********************************************************
     * request로 들어온 내용을 parsing하여
     * input variable list, input dataset list에 저장한다.
     * (nexacro 에서 보내온 데이터를 parsing한다.)
     *********************************************************/
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML);
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();

    String strUserID   = inVariableList.getString("test");
    //String strUserName = inVariableList.getString("username");
	
    //DataSet ds = inDataSetList.get("input");   	
	
	//System.out.println(ds.saveXml());
	
    /*********************************************************
     * response로 보낼 내용을 생성한다.
     * output variable list, output dataset list에 저장한다.
     * (nexacro 이 받을 수 있는 데이터 형태로 가공)
     *********************************************************/ 
     out.clear();
     out=pageContext.pushBody();    
     
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);   
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
    
	//platformResponse.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB); 

    //System.out.println("2초 대기 시작");
	//Thread.sleep(2000);
    //System.out.println("2초 대기 끝");

    try {
	   
       
        DataSet outDataSet0  = new DataSet("output");        
      // Output Dataset 컬럼 정의
       outDataSet0.addColumn("COL_YN",        DataTypes.STRING, 255);
       outDataSet0.addColumn( "Column1",        DataTypes.STRING, 255);    	
	    outDataSet0.addColumn("Column0",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column2",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column3",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column4",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column5",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column6",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column7",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column8",        DataTypes.STRING, 255);
        outDataSet0.addColumn("Column9",        DataTypes.STRING, 255);    	
	    outDataSet0.addColumn("Column10",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column11",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column12",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column13",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column14",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column15",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column16",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column17",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column18",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column19",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column20",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column21",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column22",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column23",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column24",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column25",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column26",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column27",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column28",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column29",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column30",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column31",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column32",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column33",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column34",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column35",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column36",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column37",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column38",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column39",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column40",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column41",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column42",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column43",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column44",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column45",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column46",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column47",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column48",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column49",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column50",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column51",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column52",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column53",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column54",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column55",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column56",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column57",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column58",        DataTypes.STRING, 255);
		outDataSet0.addColumn("Column59",        DataTypes.STRING, 255);
		
		
			
		int newRow = 0;
		
		for(int j = 0; j < 50000; j++)
		{
				newRow = outDataSet0.newRow();
				
				outDataSet0.set(newRow, "Column1",   "테스트 입니다.");		
				outDataSet0.set(newRow, "Column0",   "테스트 입니다.");		
				outDataSet0.set(newRow, "Column2",   "테스트 입니다.");	
				outDataSet0.set(newRow, "Column3",   "테스트 입니다.");		
				outDataSet0.set(newRow, "Column4",   "테스트 입니다.");		
				outDataSet0.set(newRow, "Column5",   "테스트 입니다.");	
				outDataSet0.set(newRow, "Column6",   "테스트 입니다.");		
				outDataSet0.set(newRow, "Column7",   "테스트 입니다.");		
				outDataSet0.set(newRow, "Column8",   "테스트 입니다.");	
				outDataSet0.set(newRow, "Column9",   "테스트 입니다.");		
				outDataSet0.set(newRow, "Column10",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column11",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column12",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column13",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column14",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column15",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column16",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column17",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column18",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column19",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column20",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column21",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column22",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column23",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column24",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column25",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column26",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column27",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column28",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column29",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column30",  "테스트 입니다.");
				outDataSet0.set(newRow, "Column31",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column32",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column33",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column34",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column35",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column36",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column37",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column38",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column39",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column40",  "테스트 입니다.");
				outDataSet0.set(newRow, "Column41",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column42",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column43",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column44",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column45",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column46",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column47",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column48",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column49",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column50",  "테스트 입니다.");
				outDataSet0.set(newRow, "Column51",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column52",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column53",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column54",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column55",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column56",  "테스트 입니다.");		
				outDataSet0.set(newRow, "Column57",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column58",  "테스트 입니다.");	
				outDataSet0.set(newRow, "Column59",  "테스트 입니다.");	
		}                            
		                             
		// Output Dataset 을 Output Dataset List 에 담는다.      									
        outDataSetList.add(outDataSet0);
        
        // Output Vairable 을 세팅한다.		        
		outVariableList.add("ErrorCode", 0);
        //outVariableList.add("ErrorMsg",  "조회 성공");		
		outVariableList.add("ErrorMsg", request.getRemoteAddr());        
		
    } catch(Exception e) {

        // Output Vairable 을 세팅한다.
        outVariableList.add("ErrorMsg",  e);
        outVariableList.add("ErrorCode", -1);		
        e.printStackTrace();

    } finally {

        // 조회 결과(Output Dataset List, Output Variable List)를 MiPlatform 으로 전송
        outPD.setDataSetList(outDataSetList);
        outPD.setVariableList(outVariableList);
        platformResponse.setData(outPD);
        platformResponse.sendData();
    }
%>