<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.lang.*" %>
<%@ page import="java.io.*" %>

<%
    StringBuffer sb = new StringBuffer();

    sb.append("{");
    sb.append("\"datatype\":\"JSON\",");
    sb.append("\"codepage\":\"utf-8\",");
    sb.append("\"parameters\":{\"ErrorCode\":\"0\",\"ErrorMsg\":\"JSON 조회 성공\"},");
    sb.append("\"datasets\":");
    sb.append("["); 
    
    sb.append("{");
    
    sb.append("\"ds_id\":\"indata\",");
    sb.append("\"ds_colinfo\":");
    sb.append("{");
    sb.append("\"constcolumn\":{},");
    sb.append("\"column\":");
    sb.append("[");
    sb.append("{\"id\":\"_RowType_\",\"type\":\"STRING\",\"size\":\"1\"},");
    sb.append("{\"id\":\"col1\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col2\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col3\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col4\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col5\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col6\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col7\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col8\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col9\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col10\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col11\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col12\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col13\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col14\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col15\",\"type\":\"STRING\",\"size\":\"256\"},");
    sb.append("{\"id\":\"col16\",\"type\":\"STRING\",\"size\":\"256\"},");
	sb.append("{\"id\":\"col17\",\"type\":\"STRING\",\"size\":\"256\"}");
    
    sb.append("]");
    sb.append("},");
    sb.append("\"ds_rows\":");
    sb.append("{");
    sb.append("\"row\":");
    sb.append("[");
    sb.append("{\"_RowType_\":\"N\",\"col1\":\"가나\",\"col2\":\"다라마123\"}");
    
    for(int i = 0; i < 100; i++)
	{
	        sb.append(",");
	        //sb.append("{\"_RowType_\":\"N\"}");
	        sb.append("{\"_RowType_\":\"N\",\"col1\":\"가나\",\"col2\":\"다라마123\",\"col3\":\"테스트 입니다.\",\"col4\":\"동해물과 백두산이\",\"col5\":\"마르고\",\"col6\":\"123456841\",\"col7\":\"투비소프트입니다.\",\"col8\":\"기술지원팀\",\"col9\":\"가나\",\"col10\":\"가나\",\"col11\":\"가나\",\"col12\":\"가나\",\"col13\":\"가나\",\"col14\":\"가나\",\"col15\":\"가나\",\"col16\":\"가나\",\"col17\":\"가나\"}");
	}
	    
    sb.append("]");
    sb.append("}");
    sb.append("}");
    sb.append("]");
    sb.append("}");

    out.print(sb.toString());

%>
