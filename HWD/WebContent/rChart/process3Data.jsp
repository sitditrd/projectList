<%@ page language="java" contentType="text/xml; charset=utf-8" %>
<%@ page import="java.util.*" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%
Random myRandom = new Random();
Date date = new Date();
int p0 = myRandom.nextInt(100);
int p1 = myRandom.nextInt(100);
int p2 = myRandom.nextInt(100);
int p3 = myRandom.nextInt(100);
int p4 = myRandom.nextInt(100);
int p5 = myRandom.nextInt(100);
int p6 = myRandom.nextInt(100);
int p7 = myRandom.nextInt(100);
int p8 = myRandom.nextInt(100);
int p9 = myRandom.nextInt(100);
int p10 = myRandom.nextInt(100);
int p11 = myRandom.nextInt(100);
int p12 = myRandom.nextInt(100);
int p13 = myRandom.nextInt(100);
int p14 = myRandom.nextInt(100);
int p15 = myRandom.nextInt(100);
int p16 = myRandom.nextInt(100);
int p17 = myRandom.nextInt(100);
int p18 = myRandom.nextInt(100);
int p19 = myRandom.nextInt(100);

// 데이트 포맷 형식은 반드시 "2010/02/15 20:30:00" 형태로 하여주십시오.
SimpleDateFormat dateFmt = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");

out.println("<items>");
out.println("<item>");
out.println("<Time>"+dateFmt.format(date)+"</Time>");
out.println("<P0>"+p0+"</P0>");
out.println("<P1>"+p1+"</P1>");
out.println("<P2>"+p2+"</P2>");
out.println("<P3>"+p3+"</P3>");
out.println("<P4>"+p4+"</P4>");
out.println("<P5>"+p5+"</P5>");
out.println("<P6>"+p6+"</P6>");
out.println("<P7>"+p7+"</P7>");
out.println("<P8>"+p8+"</P8>");
out.println("<P9>"+p9+"</P9>");
out.println("<P10>"+p10+"</P10>");
out.println("<P11>"+p11+"</P11>");
out.println("<P12>"+p12+"</P12>");
out.println("<P13>"+p13+"</P13>");
out.println("<P14>"+p14+"</P14>");
out.println("<P15>"+p15+"</P15>");
out.println("<P16>"+p16+"</P16>");
out.println("<P17>"+p17+"</P17>");
out.println("<P18>"+p18+"</P18>");
out.println("<P19>"+p19+"</P19>");
out.println("</item>");
out.println("</items>");
%>
