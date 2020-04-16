<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.io.FileOutputStream" %>
<%@ page import="java.nio.charset.StandardCharsets" %>
<%@ page import="java.util.Base64" %>
<%@ page import="com.nexacro17.xapi.data.DataSet" %>
<%@ page import="com.nexacro17.xapi.data.PlatformData" %>
<%@ page import="com.nexacro17.xapi.data.VariableList" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformException" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformRequest" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformResponse" %>
<%@ page import="com.nexacro17.xapi.tx.PlatformType" %>
<%
out.clearBuffer();
PlatformRequest platformReq = new PlatformRequest(request.getInputStream());
try {
    platformReq.receiveData();
} catch (PlatformException e) {
    e.printStackTrace();
}

PlatformData platformDataIn = platformReq.getData();
DataSet inDs = platformDataIn.getDataSet("input");

String RealPath = request.getSession().getServletContext().getRealPath("/upload/");
String Path = "nexacro";
String fileName = inDs.getString(0, "fileName") + ".png";
String imgRes = inDs.getString(0, "stadiumImg");
String[] base64 = imgRes.split(",");
FileOutputStream outFile = null;

outFile = new FileOutputStream(RealPath + Path + "/" + fileName);
byte[] imageByteArray = Base64.getDecoder().decode(base64[1].getBytes(StandardCharsets.UTF_8));
outFile.write(imageByteArray);


PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML);
PlatformData outPD = new PlatformData();
VariableList outVarList = outPD.getVariableList();
outVarList.add("ErrorCode", 0);
outVarList.add("ErrorMsg", "Success");

//7. send response data to nexacro platform client
platformResponse.setData(outPD);
try {
    platformResponse.sendData();
} catch (PlatformException e) {
    e.printStackTrace();
}

if(outFile != null) {
    outFile.close();
}
%>