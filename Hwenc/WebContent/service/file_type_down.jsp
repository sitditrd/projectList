<%@ page language="java" pageEncoding="UTF-8" buffer="20kb" trimDirectiveWhitespaces="true" %>
<%@ page import="java.net.URLEncoder" %>
<%@ page import="com.nexacro17.xapi.data.ColumnHeader" %>
<%@ page import="com.nexacro17.xapi.data.DataSet" %>
<%@ page import="com.nexacro17.xapi.data.DataTypes" %>
<%@ page import="com.nexacro17.xapi.data.PlatformData" %>
<%@ page import="com.nexacro17.xapi.data.VariableList" %>
<%@ page import="com.nexacro17.xapi.data.DataSetList" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformException" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformRequest" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformResponse" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformType" %>
<%@ page import="org.json.simple.JSONArray" %>
<%@ page import="org.json.simple.JSONObject" %>
<%@ page import="org.json.simple.JSONValue" %>

<%!
   private String getBrowser(HttpServletRequest request) {
        String header = request.getHeader("User-Agent");
        if (header.contains("MSIE")) {
            return "MSIE";
        } else if (header.contains("Chrome")) {
            return "Chrome";
        } else if (header.contains("Opera")) {
            return "Opera";
        } else if (header.contains("Trident")) {
            return "Trident";//for IE11
        }
        return "Firefox";
    }

	/**
	 * Dataset to Json  
	 * @param DataSet
	 * @return String
	 */
	private String getJson(DataSet currentDs){
		JSONObject rootJson = new JSONObject();
		
		JSONArray  jsonDataArray = new JSONArray();
		
		for(int rowIndex=0; rowIndex < currentDs.getRowCount();rowIndex++) {
		
			JSONObject jsonElement   = new JSONObject();
			for(int col=0; col< currentDs.getColumnCount();col++) {
			
				ColumnHeader columnHeader = currentDs.getColumn(col);
				String columnName = columnHeader.getName();
				String dataValue  = currentDs.getString(rowIndex, columnName);
				
				//logger.info("-.columnName >"+columnName + " -.dataValue >" +dataValue);
				//set json value
				jsonElement.put(columnName, dataValue);
			}
			jsonDataArray.add(jsonElement);
		}
		rootJson.put("Dataset", jsonDataArray);
		
		return JsonEnterConvert(rootJson.toJSONString());
	}
	
	 /**
     * Json beautifier.
     * @param String json
     * @return String json
     */
    private String JsonEnterConvert(String json) {
        
        if( json == null || json.length() < 2 )
            return json;
        
        final int len = json.length();
        final StringBuilder sb = new StringBuilder();
        char c;
        String tab = "";
        boolean beginEnd = true;
        for( int i=0 ; i<len ; i++ ){
            c = json.charAt(i);
            switch( c ){
            case '{': case '[':{
                sb.append( c );
                if( beginEnd ){
                    tab += "\t";
                    sb.append("\n");
                    sb.append( tab );
                }
                break;
            }
            case '}': case ']':{
                if( beginEnd ){
                    tab = tab.substring(0, tab.length()-1);
                    sb.append("\n");
                    sb.append( tab );
                }
                sb.append( c );
                break;
            }
            case '"':{
                if( json.charAt(i-1)!='\\' )
                    beginEnd = ! beginEnd;
                sb.append( c );
                break;
            }
            case ',':{
                sb.append( c );
                if( beginEnd ){
                    sb.append("\n");
                    sb.append( tab );
                }
                break;
            }
            default :{
                sb.append( c );
            }
            }// switch end
            
        }
        if( sb.length() > 0 )
            sb.insert(0, '\n');
        return sb.toString();
    }
%><%
	//file type
	String sFileType = request.getParameter("filetype");
	
	//response file type
	String fileName = sFileType + "_data." + sFileType;

    String header = getBrowser(request);
    if (header.contains("MSIE") || header.contains("Trident")) {
        String docName = URLEncoder.encode(fileName, "UTF-8").replaceAll("\\+", "%20");
        response.setHeader("Content-Disposition", "attachment;filename=" + docName + ";");
    } else if (header.contains("Firefox")) {
        String docName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + docName + "\"");
    } else if (header.contains("Opera")) {
        String docName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + docName + "\"");
    } else if (header.contains("Chrome")) {
        String docName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + docName + "\"");
    }

    response.setContentType("application/octet-stream");

    response.setHeader("Content-Transfer-Encoding", "binary;");
    response.setHeader("Pragma", "no-cache;");
    response.setHeader("Expires", "-1;");

    out.clearBuffer();
    out.print("\ufeff"); //for UTF-8 data & print

    //dataset receive
    String sDsData = java.net.URLDecoder.decode(request.getParameter("ds_data"),"utf-8");
    
	//out print
	if(sFileType.equals("xml")){
		//String sDsData = request.getParameter("ds_data");
	
		//DataSet ds_ouput = new DataSet();
		//ds_ouput.loadXml(java.net.URLDecoder.decode(sDsData,"utf-8"));
		
		//out.print(ds_ouput.saveXml());
		out.print(sDsData);  //print just receive data
	}
	else if(sFileType.equals("json")){
		DataSet ds_ouput = new DataSet();
		ds_ouput.loadXml(java.net.URLDecoder.decode(sDsData,"utf-8"));
		out.print(getJson(ds_ouput));  //print object ds -> json
	}
	else if(sFileType.equals("csv")){
		out.print(sDsData);  //print just receive data
	}
	else if(sFileType.equals("txt")){
		out.print(sDsData);  //print just receive data
	}
%>