package controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WeatherController {
	
//http://localhost/myfinalproject/weatherinfo.do
@RequestMapping(value="/weather.do", produces="application/json;charset=UTF-8")/*  , method = RequestMethod.GET)*/ 
public @ResponseBody String weatherProcess(String q) throws IOException, MalformedURLException {
	System.out.println( "string city = " + q);
	String input= null;
	String total = "";
//	String url="api.openweathermap.org/data/2.5/find?q=Seoul&units=metric&APPID=047ea91a02e19c4e493ceb04d81879f6;";
	String url = "https://api.openweathermap.org/data/2.5/find?";
//			//url+= "q=Seoul";
			url+= "q="+URLEncoder.encode(q,"UTF-8");
			url+= "&units="+URLEncoder.encode("metric","UTF-8");//이부분은 도씨로 나오고 해제하면 켈빈(절대온도)로 나온다.
			url+= "&lang="+URLEncoder.encode("kr","UTF-8");//이부분은 도씨로 나오고 해제하면 켈빈(절대온도)로 나온다.
			url+= "&mode="+URLEncoder.encode("json","UTF-8");//json, xml 형태로 변경해서 출력할수있다
			url+= "&APPID="+URLEncoder.encode("b745470c39a17302bf5c0b3b15ceff3a","UTF-8");
		
			System.out.println("url !!!!!!!!!!!!!= " + url);
			HttpURLConnection con=
					(HttpURLConnection)new URL(url).openConnection();	
//			con.setRequestProperty("APPID", "047ea91a02e19c4e493ceb04d81879f6");
			con.setRequestMethod("GET");
			
			BufferedReader reader=new BufferedReader(new InputStreamReader(con.getInputStream()));
			while ((input = reader.readLine()) != null) {
				System.out.println("오늘날씨 input  부분 ============== " + input);
				total += input;
				
			}
			
			System.out.println(total);
			return total;
}//end weather process s

@RequestMapping(value="placetranslate.do", produces="application/json;charset=UTF-8")
public @ResponseBody String translateProcess(String searchworld) throws IOException, MalformedURLException{
	System.out.println( " 입력된 검색어  = " + searchworld);
//	https://mymemory.translated.net/ 에서 API 받아옴. 
	String input= null;
	String total = "";
	String url = "https://api.mymemory.translated.net/get?"+
			 "q="+URLEncoder.encode(searchworld,"UTF-8")
			 + "&langpair=ko|en";
	
	System.out.println("translate process URL 최종요청주소 = " + url);
	
	HttpURLConnection con = (HttpURLConnection)new URL(url).openConnection();	
	con.setRequestMethod("GET");
	BufferedReader reader=new BufferedReader(new InputStreamReader(con.getInputStream()));
	while ((input = reader.readLine()) != null) {
		
		total += input;
	}
	
	System.out.println(total);
	return total;
	

}//end translateProcess();



//5일치 날씨 동안의 날씨.
//http://api.openweathermap.org/data/2.5/forecast?q=Seoul,KR&mode=xml&APPID=a800c4782025d976527c2993ede7a105
@RequestMapping(value="forecast5days.do", produces="application/json;charset=UTF-8")
public @ResponseBody String forecast5daysProcess(String area, String country) throws IOException, MalformedURLException{
	System.out.println( " 입력된지역  = " + area + "//// 입력된 국가 " + country);
//	https://mymemory.translated.net/ 에서 API 받아옴. 
	String input= null;
	String total = "";
	String url="http://api.openweathermap.org/data/2.5/forecast"
			+ "?q="+URLEncoder.encode(area,"UTF-8")+","+URLEncoder.encode(country,"UTF-8")
			+ "&mode=json&"
			+ "APPID=b745470c39a17302bf5c0b3b15ceff3a";
	
	System.out.println("forcast5days process URL 최종요청주소 = " + url);
	
	HttpURLConnection con = (HttpURLConnection)new URL(url).openConnection();	
	con.setRequestMethod("GET");
	BufferedReader reader=new BufferedReader(new InputStreamReader(con.getInputStream()));
	while ((input = reader.readLine()) != null) {
		
		total += input;
	}
	
	System.out.println(total);
	return total;
	

}//end forecast5daysProcess();

}//end class 
