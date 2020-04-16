<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.File" %>
<%@ page import="java.io.FileInputStream" %>
<%@ page import="java.io.InputStreamReader" %>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="javax.servlet.http.HttpServletResponse" %>
<%!
char a = (char) 0x1e;
char b = (char) 0x1f;
String RS = String.valueOf(a);
String US = String.valueOf(b);

private void flush(HttpServletResponse httpResponse, StringBuffer sb) throws Exception {
	PrintWriter out = null;
	out = httpResponse.getWriter();
	out.print(sb);
}
%><%
out.clearBuffer();
int nCnt = 0;
int nFirstCnt = 0;
int len = 0;
String isCompress = null;
FileInputStream fis = null;
InputStreamReader isr = null;
BufferedReader bs = null;
StringBuffer sbSsv = null;

try {
String rowcount = request.getParameter("rowcount");
String datatype = request.getParameter("datatype");
	
	if ("".equals(rowcount))	rowcount = "1000";
	if ("".equals(datatype))	datatype = "2";

	if ("2".equals(datatype))
	{
		sbSsv = new StringBuffer();
		sbSsv.append("SSV:UTF-8"+RS);
		sbSsv.append("ErrorCode=0"+US+"ErrorMsg=SUCCESS"+RS);
		sbSsv.append("Dataset:").append("output").append(RS);
		sbSsv.append("_RowType_"+US);
		sbSsv.append("grp1:STRING(10)"+US+"grp2:STRING(10)"+US+"grp3:STRING(10)"+US+"cd:STRING(10)"+US);
		sbSsv.append("txt1:STRING(10)"+US+"txt2:STRING(10)"+US+"txt3:STRING(10)"+US);
		sbSsv.append("cmb1:STRING(10)"+US+"cmb2:STRING(10)"+US+"cmb3:STRING(10)"+US);
		sbSsv.append("rdo1:STRING(10)"+US+"rdo2:STRING(10)"+US+"rdo3:STRING(10)"+US);
		sbSsv.append("chk1:STRING(10)"+US+"chk2:STRING(10)"+US+"chk3:STRING(10)"+US);
		sbSsv.append("cal1:STRING(10)"+US+"cal2:STRING(10)"+US+"cal3:STRING(10)"+US); 
		
		for (int i = 1; i < 39; i++) {
			sbSsv.append(US + "val" + i + ":int(10)");
		} 
		
		sbSsv.append(RS);
	   	
	   	fis = new FileInputStream(new File(getServletContext().getRealPath("/") + "service/poc_" + rowcount + ".dat"));
		isr = new InputStreamReader(fis, "utf-8");
		bs = new BufferedReader(isr);
	    len = 0;
	    while ((len = bs.read()) != -1) {
	    	sbSsv.append((char)len);
	    	if(len == 30) {
	    		if(nCnt == nFirstCnt) {
	    			flush(response, sbSsv);
	        		sbSsv = new StringBuffer();	
	    			nCnt = 0;
	    		} else {
	    			nCnt++;	
	    		}
	    	}
	    }
	    flush(response, sbSsv);
	}
	else if ("0".equals(datatype))
	{
		sbSsv = new StringBuffer();
		fis = new FileInputStream(new File(getServletContext().getRealPath("/") + "service/poc_" + rowcount + ".xml"));
		isr = new InputStreamReader(fis, "utf-8");
		bs = new BufferedReader(isr);
	    len = 0;
	    while ((len = bs.read()) != -1) {
	    	sbSsv.append((char)len);
	    	if(len == 30) {
	    		if(nCnt == nFirstCnt) {
	    			flush(response, sbSsv);
	        		sbSsv = new StringBuffer();	
	    			nCnt = 0;
	    		} else {
	    			nCnt++;	
	    		}
	    	}
	    }
	    flush(response, sbSsv);
	}
	else if ("4".equals(datatype))
	{
		sbSsv = new StringBuffer();
		fis = new FileInputStream(new File(getServletContext().getRealPath("/") + "service/poc_" + rowcount + ".json"));
		isr = new InputStreamReader(fis, "utf-8");
		bs = new BufferedReader(isr);
	    len = 0;
	    while ((len = bs.read()) != -1) {
	    	sbSsv.append((char)len);
	    	if(len == 30) {
	    		if(nCnt == nFirstCnt) {
	    			flush(response, sbSsv);
	        		sbSsv = new StringBuffer();	
	    			nCnt = 0;
	    		} else {
	    			nCnt++;	
	    		}
	    	}
	    }
	    flush(response, sbSsv);
	}
    
} catch(Exception e) {
    e.printStackTrace();
}


try {
	if(isr != null) {
		isr.close();
	}
	if(fis != null) {
		fis.close();	    		
	}
	if(bs != null) {
		bs.close();
	}
} catch (Exception e) {
	e.printStackTrace();
}
%>