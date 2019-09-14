package controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//http://localhost/myfinalproject/home.do
//http://localhost/myfinalproject/incheon.do
//http://localhost/myfinalproject/haneda.do
//http://localhost/myfinalproject/team.do

@Controller
public class AirlineController {
	@RequestMapping(value="/home.do") 
	
	public String HomeProcess() {
		return "view/home";
	}
	
	@RequestMapping(value="/weatherinfo.do") 
	public String aboutProcess() {
		return "view/weather";
	}
	
	@RequestMapping(value="/rate.do") 
	public String productProcess() {
		return "view/rate";
	}
	
	@RequestMapping(value="/time.do") 
	public String storeProcess() {
		return "view/time";
	}
	
	@RequestMapping(value="/mypage.do") 
	public String mypageProcess() {
		return "view/mypage";
	}
	
	@RequestMapping(value="/search.do") 
	public String searchProcess() {
		return "view/search";
	}
	
	@RequestMapping(value="/incheon.do") 
	public String incheonProcess() {
		return "view/incheon";
	}
	
	@RequestMapping(value="/haneda.do") 
	public String hanedaProcess() {
		return "view/haneda";
	}
	@RequestMapping(value="/team.do") 
	public String teamProcess() {
		return "view/team";
	}
	
	@RequestMapping(value="/adminpage.do") 
	public String adminpageProcess() {
	    return "view/adminpage";
    }
	//http://localhost:8090/myfinalproject/incheon.do
		@RequestMapping(value="/searchIncheon.do", produces="application/xml;charset=UTF-8")
		public @ResponseBody String process(String sigunguCode,String select) throws MalformedURLException, IOException {
			/*int totalRecord=rservice.countProcess(map);
			
			if(totalRecord >= 1) {
				if(pv.getCurrentPage() == 0) { //Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
					currentPage = 1;
					current = 1;
				} else { //그 다음부터 만족하는 조건
					currentPage = pv.getCurrentPage();
				}
				
				rpdto = new ReservePageDTO(member_id, currentPage, totalRecord, reserve_state);
				
				mav.addObject("pv", rpdto);
				mav.addObject("aList", rservice.listMethodProcess(rpdto));
			} */
			String input=null;
			String total="";
			String ServiceKey = "efHwLKAvAnCg%2BTjF7TTKo5QUjSqZ5qWgDPvL66CWBhxZL7Ife0yV1qwGJq%2F0ap5eCbzNJVq1%2B8tdd0%2Bv198AVQ%3D%3D";	//인증키
			String areaCode = "2";	//지역코드 (인천)
			if(select != "") {
				select = "&"+select;
			}
			
			String url="http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay?ServiceKey="+ServiceKey+"&areaCode="+areaCode+"&sigunguCode="+sigunguCode+"&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=300&pageNo=1"+select;
			HttpURLConnection con = (HttpURLConnection)new URL(url).openConnection();

			
			BufferedReader reader = new BufferedReader(new InputStreamReader(con.getInputStream()));
			while((input=reader.readLine())!=null) {
				total += input;
			}
			System.out.println(total);
			
			//for(int i=1; i<total.split("<title>").length;i++)
			//System.out.println(total.split("<title>")[i].split("</title>")[0]+ total.split("<title>").length);
			return total;
		}
		
		@RequestMapping(value="/map.do", produces="application/String;charset=UTF-8")
		public @ResponseBody String mapprocess(String addr) throws MalformedURLException, IOException {
			System.out.println(addr);
			return addr;
		}
}
