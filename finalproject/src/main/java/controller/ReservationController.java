package controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import dto.GoPaymentDTO;
import dto.ResTmpDTO;
import dto.ReserveDTO;
import dto.ReserveDetail2DTO;
import dto.ReserveDetailDTO;
import dto.ReturnPaymentDTO;
import dto.StopoverDTO;
import dto.TicketDTO;
import service.PlaneModelService;
import service.PlaneService;
import service.ReserveService;
import service.StopService;
import service.TicketService;

//http://localhost/myfinalproject/resForm.do

@Controller
public class ReservationController {
	private TicketService service;
	private PlaneService planeservice;
	private PlaneModelService planemodelservice;
	private StopService stopservice;
	private ReserveService reserveservice;
	
	public void setService(TicketService service) {
		this.service = service;
	}
	
	public void setPlaneservice(PlaneService planeservice) {
		this.planeservice = planeservice;
	}
	
	public void setStopservice(StopService stopservice) {
		this.stopservice = stopservice;
	}
	
	public void setPlanemodelservice(PlaneModelService planemodelservice) {
		this.planemodelservice = planemodelservice;
	}
	
	public void setReserveservice(ReserveService reserveservice) {
		this.reserveservice = reserveservice;
	}
	
	public ReservationController() {
		
	}
	
	@RequestMapping(value="/resForm.do")
	public ModelAndView OneWayProcess(String flighttype, String depart_region, String arrive_region, String startDate, String endDate, String adult, 
			String children, String laporseat, String airline_name, TicketDTO dto, String seat_grade) {
		ModelAndView mav = new ModelAndView();
		
		StopoverDTO stopoverDTO = new StopoverDTO();
		
		//첫번째 티켓의 경유지에 대한 정보(사용자 선택에 따라 유무)
		if(dto.getRoute_type().equals("경유")) {
			stopoverDTO = stopservice.searchObjMethodProcess(dto.getStopover_code());
			System.out.println("=============================================================================================================");
			System.out.println("stopover_code : " + stopoverDTO.getStopover_code());
			System.out.println("airline_name : " + stopoverDTO.getAirline_name());
			System.out.println("airline_nation : " + stopoverDTO.getAirline_nation());
			System.out.println("airline_site : " + stopoverDTO.getAirline_site());
			System.out.println("route_dapart_region : " + stopoverDTO.getRoute_depart_region());
			System.out.println("route_arrive_region : " + stopoverDTO.getRoute_arrive_region());
			System.out.println("arrive_time : " + stopoverDTO.getArrive_time());
			System.out.println("depart_time : " + stopoverDTO.getDepart_time());
			System.out.println("route_before_estimate_time : " + stopoverDTO.getRoute_before_estimate_time());
			System.out.println("route_estimate_time : " + stopoverDTO.getRoute_estimate_time());
			System.out.println("route_after_estimate_time : " + stopoverDTO.getRoute_after_estimate_time());
			System.out.println("route_flight_name : " + stopoverDTO.getRoute_flight_name());
			System.out.println("=============================================================================================================");
		}
		
		//사용자가 티켓에 대하여 원하는 정보를 기재하고 검색한 조건들
		System.out.println("티켓에 대한 사용자 정보 flighttype : " + flighttype); //왕복,편도 구분 <왕복 : 1, 편도 : 2>
		System.out.println("티켓에 대한 사용자 정보 depart_region : " + depart_region); //출발지
		System.out.println("티켓에 대한 사용자 정보 arrive_region : " + arrive_region); //도착지 
		System.out.println("티켓에 대한 사용자 정보 startDate : " + startDate); //가는날
		System.out.println("티켓에 대한 사용자 정보 endDate : " + endDate); //오는날
		System.out.println("티켓에 대한 사용자 정보 adult : " + adult); //성인
		System.out.println("티켓에 대한 사용자 정보 children : " + children); //아이
		System.out.println("티켓에 대한 사용자 정보 laporseat : " + laporseat); //보호구분(만1세 미만일 경우 : lap(무릎에 앉혀서 태움) 아니면 seat(좌석에 태움))
		System.out.println("티켓에 대한 사용자 정보 seat_grade : " + seat_grade); //좌석등급
		
		HashMap<String, Object> ticketinfo = new HashMap<String, Object>();
		//티켓에 대한 사용자 정보 ticketinfo map에 저장한다.
		ticketinfo.put("flighttype", flighttype);
		ticketinfo.put("depart_region", depart_region);
		ticketinfo.put("arrive_region", arrive_region);
		ticketinfo.put("startDate", startDate);
		ticketinfo.put("endDate", endDate);
		ticketinfo.put("adult", adult);
		ticketinfo.put("children", children);
		ticketinfo.put("laporseat", laporseat);
		ticketinfo.put("seat_grade", seat_grade);
		mav.addObject("ticketinfo", ticketinfo);
		
		//depart_region에서 나라명(payment_depart_nation)과 공항명칭(payment_depart_airport_name)을 추출하기 위한 작업
		int flag=0;
		char temp_arr[] = depart_region.toCharArray();
		String payment_depart_nation = "";
		String payment_depart_airport_name = "";
		String payment_arrive_nation = "";
		String payment_arrive_airport_name = "";
						
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들/////////////////////////////////////////////////////////
		//나라명 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == ',')
				break;
			else { 
				payment_depart_nation += temp_arr[i];
			}
		}
						
		//공항명칭 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				break;
			}
			if(flag>=1) {
				payment_depart_airport_name += temp_arr[i];
			}
			else if(temp_arr[i] == '(') { 
				flag++;
			}
		}
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		temp_arr = arrive_region.toCharArray();
		flag=0;
				
		//나라명 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == ',')
				break;
			else { 
				payment_arrive_nation += temp_arr[i];
			}
		}
								
		//공항명칭 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				break;
			}
			if(flag>=1) {
				payment_arrive_airport_name += temp_arr[i];
			}
			else if(temp_arr[i] == '(') { 
				flag++;
			}
		}
		//cf)오는날은 swap으로 변경한다.
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		GoPaymentDTO goDTO = new GoPaymentDTO();
				
		goDTO.setGo_Depart_Nation(payment_arrive_nation); //서울
		goDTO.setGo_Arrive_Nation(payment_depart_nation); //도쿄
		goDTO.setGo_Depart_Airport_Name(payment_arrive_airport_name); //ICN
		goDTO.setGo_Arrive_Airport_Name(payment_depart_airport_name); //HND
		System.out.println("=============================================================================================================");
		
		//사용자가 가는날에 대한 티켓을 선택한 티켓 정보
		System.out.println("가는날에 대한 티켓 정보 route_depart_region : " + dto.getRoute_depart_region());
		System.out.println("가는날에 대한 티켓 정보 route_arrive_region : " + dto.getRoute_arrive_region());
		System.out.println("가는날에 대한 티켓 정보 route_depart_day : " + dto.getRoute_depart_day());
		System.out.println("가는날에 대한 티켓 정보 depart_time : " + dto.getDepart_time());
		System.out.println("가는날에 대한 티켓 정보 arrive_time : " + dto.getArrive_time());
		
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들/////////////////////////////////////////////////////////
		//년,월,일(payment_depart_date)을 덧붙여주고 시간(payment_depart_time)을 자른다.(가는날)
		String payment_depart_date="";
		String temp_time[] = dto.getDepart_time().split("/");
		temp_arr = temp_time[0].toCharArray();
		String payment_depart_time = temp_time[1];
		
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				temp_arr[i] = '년';
				break;
			}
		}
		
		for(int i=0; i<=temp_arr.length; i++) {
			if(i==temp_arr.length) {
				payment_depart_date += '일';
			}else {
				if(temp_arr[i] == '-') {
					temp_arr[i] = '월';
					payment_depart_date += temp_arr[i];
				} else if(temp_arr[i] != ' '){
					payment_depart_date += temp_arr[i];
				}
			}
		}
		
		//년,월,일(payment_depart_date)을 덧붙여주고 시간(payment_depart_time)을 자른다.(가는날)
		String payment_arrive_date="";
		temp_time = dto.getArrive_time().split("/");
		temp_arr = temp_time[0].toCharArray();
		String payment_arrive_time = temp_time[1];
		
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				temp_arr[i] = '년';
				break;
			}
		}
		
		for(int i=0; i<=temp_arr.length; i++) {
			if(i==temp_arr.length) {
				payment_arrive_date += '일';
			}else {
				if(temp_arr[i] == '-') {
					temp_arr[i] = '월';
					payment_arrive_date += temp_arr[i];
				} else if(temp_arr[i] != ' ') {
					payment_arrive_date += temp_arr[i];
				}
			}
		}
		
		goDTO.setGo_Depart_Date(payment_depart_date);
		goDTO.setGo_Depart_time(payment_depart_time);
		goDTO.setGo_Arrive_Date(payment_arrive_date);
		goDTO.setGo_Arrive_time(payment_arrive_time);
		
		String strtemp[] = payment_depart_date.split("년");
		String strtemp2[] = payment_depart_date.split("년");
		
		System.out.println("payment_depart_date : " + payment_depart_date);
		System.out.println("payment_depart_time : " + payment_depart_time);
		System.out.println("payment_arrive_date : " + payment_arrive_date);
		System.out.println("payment_arrive_time : " + payment_arrive_time);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들////////////////////////////////////////////////////////
		//airline_name을 원하는 형식으로 뽑기 위한 과정
		int count=0;
		char temp[] = dto.getAirline_name().toCharArray();

		String res_airline_name = "";

		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;

				if (count >= 1) {
					break;
				}

			} else {
				res_airline_name += temp[i];
			}
		}

		if (count == 0) {
			res_airline_name = dto.getAirline_name();
		}
		
		count = 0; // count 초기화
		
		goDTO.setGo_airline_name(res_airline_name);
		goDTO.setGo_airplane_model(dto.getAirplane_model());
		goDTO.setGo_flight_name(dto.getFlight_name());
		goDTO.setGo_route_estimate_time(dto.getRoute_estimate_time());
		System.out.println("가는날에 대한 티켓 정보 airline_name : " + res_airline_name);
		System.out.println("가는날에 대한 티켓 정보 airplane_model : " + dto.getAirplane_model());
		System.out.println("가는날에 대한 티켓 정보 flight_name : " + dto.getFlight_name());
		System.out.println("가는날에 대한 티켓 정보 route_estimate_time : " + dto.getRoute_estimate_time());
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들////////////////////////////////////////////////////////
	
		System.out.println("가는날에 대한 티켓 정보 airline_site : " + dto.getAirline_site());
		System.out.println("가는날에 대한 티켓 정보 route_distance : " + dto.getRoute_distance());
		System.out.println("가는날에 대한 티켓 정보 route_charge : " + dto.getRoute_charge());
		
		//가는날에 대한 티켓 정보 map에 저장
		HashMap<String, Object> firstinfo = new HashMap<String, Object>();
		firstinfo.put("stopover_code", dto.getStopover_code());
		firstinfo.put("route_depart_region", dto.getRoute_depart_region());
		firstinfo.put("route_arrive_region", dto.getRoute_arrive_region());
		firstinfo.put("route_depart_day", dto.getRoute_depart_day());
		firstinfo.put("depart_time", dto.getDepart_time());
		firstinfo.put("arrive_time", dto.getArrive_time());
		firstinfo.put("airline_name", res_airline_name);
		firstinfo.put("airplane_model", dto.getAirplane_model());
		firstinfo.put("flight_name", dto.getFlight_name());
		firstinfo.put("route_estimate_time", dto.getRoute_estimate_time());
		firstinfo.put("airline_site", dto.getAirline_site());
		firstinfo.put("route_distance", dto.getRoute_distance());
		firstinfo.put("route_type", dto.getRoute_type());
		firstinfo.put("route_charge", dto.getRoute_charge());
		firstinfo.put("plane_code", dto.getPlane_code());
		mav.addObject("firstinfo", firstinfo);
		
		mav.addObject("goDTO", goDTO);
		
		//성인
		mav.addObject("adult", adult);
		//아이
		mav.addObject("children", children);
		
		//가는날 항공기 요금(항공사 마다 다름)
		mav.addObject("first_route_charge", dto.getRoute_charge());
	
		if(Integer.parseInt(children) == 0) {
			children = "1";
		}
		
		int res_charge = Integer.parseInt(adult) *  Integer.parseInt(children) * (dto.getRoute_charge());
		
		//최종항공기 요금
		//비즈니스석 x 3.0배
		//일등석 x 6.0배
		if(seat_grade.equals("비즈니스석")) {
			res_charge = res_charge * 3;
		}else if(seat_grade.equals("일등석")) {
			res_charge = res_charge * 6;
		}
		
		mav.addObject("res_charge", res_charge);
		
		//왕복구분
		mav.addObject("flighttype", flighttype);
		
		if(dto.getRoute_type().equals("경유")) {
			mav.addObject("stopoverDTO", stopoverDTO);
			mav.addObject("arrive_date", strtemp[1]); //월,일만 들어간 문자열
			mav.addObject("depart_date", strtemp2[1]); //월,일만 들어간 문자열
		}
		
		mav.setViewName("reservation/resform");
		mav.addObject("seat_grade", seat_grade);
		return mav;
	}
	
	@RequestMapping(value="/resFormRound.do")
	public ModelAndView RoundProcess(String flighttype, String depart_region, String arrive_region, String startDate, String endDate, String adult, String children, String laporseat, String airline_name,
			String first_route_depart_region, String first_route_arrive_region, String first_route_depart_day, String first_depart_time, String first_arrive_time, String first_airline_name, String first_airplane_model,
			String first_flight_name, String first_route_estimate_time, String first_airline_site, String first_route_distance, String first_route_charge, String first_route_type, String first_plane_code,
			TicketDTO dto, String stop_code, String seat_grade) {
		ModelAndView mav = new ModelAndView();
		int count = 0;
		
		StopoverDTO stopoverDTO = new StopoverDTO();
		
		//첫번째 티켓의 경유지에 대한 정보(사용자 선택에 따라 유무)
		if(stop_code != null) {
			stopoverDTO = stopservice.searchObjMethodProcess(Integer.parseInt(stop_code));
			System.out.println("=============================================================================================================");
			System.out.println("stopover_code : " + stopoverDTO.getStopover_code());
			System.out.println("airline_name : " + stopoverDTO.getAirline_name());
			System.out.println("airline_nation : " + stopoverDTO.getAirline_nation());
			System.out.println("airline_site : " + stopoverDTO.getAirline_site());
			System.out.println("route_dapart_region : " + stopoverDTO.getRoute_depart_region());
			System.out.println("route_arrive_region : " + stopoverDTO.getRoute_arrive_region());
			System.out.println("arrive_time : " + stopoverDTO.getArrive_time());
			System.out.println("depart_time : " + stopoverDTO.getDepart_time());
			System.out.println("route_before_estimate_time : " + stopoverDTO.getRoute_before_estimate_time());
			System.out.println("route_estimate_time : " + stopoverDTO.getRoute_estimate_time());
			System.out.println("route_after_estimate_time : " + stopoverDTO.getRoute_after_estimate_time());
			System.out.println("route_flight_name : " + stopoverDTO.getRoute_flight_name());
			System.out.println("=============================================================================================================");
		}
		
		//사용자가 티켓에 대하여 원하는 정보를 기재하고 검색한 조건들
		System.out.println("티켓에 대한 사용자 정보 flighttype : " + flighttype); //왕복,편도 구분 <왕복 : 1, 편도 : 2>
		System.out.println("티켓에 대한 사용자 정보 depart_region : " + arrive_region); //출발지
		System.out.println("티켓에 대한 사용자 정보 arrive_region : " + depart_region); //도착지 
		System.out.println("티켓에 대한 사용자 정보 startDate : " + endDate); //가는날
		System.out.println("티켓에 대한 사용자 정보 endDate : " + startDate); //오는날
		System.out.println("티켓에 대한 사용자 정보 adult : " + adult); //성인
		System.out.println("티켓에 대한 사용자 정보 children : " + children); //아이
		System.out.println("티켓에 대한 사용자 정보 laporseat : " + laporseat); //보호구분(만1세 미만일 경우 : lap(무릎에 앉혀서 태움) 아니면 seat(좌석에 태움))
		System.out.println("티켓에 대한 사용자 정보 seat_grade : " + seat_grade); //좌석등급
		
		HashMap<String, Object> ticketinfo = new HashMap<String, Object>();
		//티켓에 대한 사용자 정보 ticketinfo map에 저장한다.
		ticketinfo.put("flighttype", flighttype);
		ticketinfo.put("depart_region", depart_region);
		ticketinfo.put("arrive_region", arrive_region);
		ticketinfo.put("startDate", startDate);
		ticketinfo.put("endDate", endDate);
		ticketinfo.put("adult", adult);
		ticketinfo.put("children", children);
		ticketinfo.put("laporseat", laporseat);
		ticketinfo.put("seat_grade", seat_grade);
		mav.addObject("ticketinfo", ticketinfo);
		
		//depart_region에서 나라명(payment_depart_nation)과 공항명칭(payment_depart_airport_name)을 추출하기 위한 작업
		int flag=0;
		char temp_arr[] = depart_region.toCharArray();
		String payment_depart_nation = "";
		String payment_depart_airport_name = "";
		String payment_arrive_nation = "";
		String payment_arrive_airport_name = "";
				
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들/////////////////////////////////////////////////////////
		//나라명 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == ',')
				break;
			else { 
				payment_depart_nation += temp_arr[i];
			}
		}
				
		//공항명칭 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				break;
			}
			if(flag>=1) {
				payment_depart_airport_name += temp_arr[i];
			}
			else if(temp_arr[i] == '(') { 
				flag++;
			}
		}
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		temp_arr = arrive_region.toCharArray();
		flag=0;
		
		//나라명 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == ',')
				break;
			else { 
				payment_arrive_nation += temp_arr[i];
			}
		}
						
		//공항명칭 추출(가는날)
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				break;
			}
			if(flag>=1) {
				payment_arrive_airport_name += temp_arr[i];
			}
			else if(temp_arr[i] == '(') { 
				flag++;
			}
		}
		//cf)오는날은 swap으로 변경한다.
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		GoPaymentDTO goDTO = new GoPaymentDTO();
		ReturnPaymentDTO returnDTO = new ReturnPaymentDTO();
		
		goDTO.setGo_Depart_Nation(payment_arrive_nation); //서울
		goDTO.setGo_Arrive_Nation(payment_depart_nation); //도쿄
		goDTO.setGo_Depart_Airport_Name(payment_arrive_airport_name); //ICN
		goDTO.setGo_Arrive_Airport_Name(payment_depart_airport_name); //HND
		
		returnDTO.setReturn_Depart_Nation(payment_depart_nation); //도쿄
		returnDTO.setReturn_Arrive_Nation(payment_arrive_nation); //서울
		returnDTO.setReturn_Depart_Airport_Name(payment_depart_airport_name); //HND
		returnDTO.setReturn_Arrive_Airport_Name(payment_arrive_airport_name); //ICN
		
		System.out.println("depart_name : " + payment_depart_nation);
		System.out.println("depart_airport_name : " + payment_depart_airport_name);
		System.out.println("arrive_name : " + payment_arrive_nation);
		System.out.println("arrive_airport_name : " + payment_arrive_airport_name);
		System.out.println("=============================================================================================================");
		
		//사용자가 가는날에 대한 티켓을 선택한 티켓 정보
		System.out.println("가는날에 대한 티켓 정보 route_depart_region : " + first_route_depart_region);
		System.out.println("가는날에 대한 티켓 정보 route_arrive_region : " + first_route_arrive_region);
		System.out.println("가는날에 대한 티켓 정보 route_depart_day : " + first_route_depart_day);
		System.out.println("가는날에 대한 티켓 정보 depart_time : " + first_depart_time);
		System.out.println("가는날에 대한 티켓 정보 arrive_time : " + first_arrive_time);
		
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들/////////////////////////////////////////////////////////
		//년,월,일(payment_depart_date)을 덧붙여주고 시간(payment_depart_time)을 자른다.(가는날)
		String payment_depart_date="";
		String temp_time[] = first_depart_time.split("/");
		temp_arr = temp_time[0].toCharArray();
		String payment_depart_time = temp_time[1];
						
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				temp_arr[i] = '년';
				break;
			}
		}
				
		for(int i=0; i<=temp_arr.length; i++) {
			if(i==temp_arr.length) {
				payment_depart_date += '일';
			}else {
				if(temp_arr[i] == '-') {
					temp_arr[i] = '월';
					payment_depart_date += temp_arr[i];
				} else if(temp_arr[i] != ' '){
					payment_depart_date += temp_arr[i];
				}
			}
		}
		
		//년,월,일(payment_depart_date)을 덧붙여주고 시간(payment_depart_time)을 자른다.(가는날)
		String payment_arrive_date="";
		temp_time = first_arrive_time.split("/");
		temp_arr = temp_time[0].toCharArray();
		String payment_arrive_time = temp_time[1];
				
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				temp_arr[i] = '년';
				break;
			}
		}
		
		for(int i=0; i<=temp_arr.length; i++) {
			if(i==temp_arr.length) {
				payment_arrive_date += '일';
			}else {
				if(temp_arr[i] == '-') {
					temp_arr[i] = '월';
					payment_arrive_date += temp_arr[i];
				} else if(temp_arr[i] != ' ') {
					payment_arrive_date += temp_arr[i];
				}
			}
		}
		
		goDTO.setGo_Depart_Date(payment_depart_date);
		goDTO.setGo_Depart_time(payment_depart_time);
		goDTO.setGo_Arrive_Date(payment_arrive_date);
		goDTO.setGo_Arrive_time(payment_arrive_time);
		
		String strtemp[] = payment_arrive_date.split("년");
		String strtemp2[] = payment_depart_date.split("년");
		
		System.out.println("payment_depart_date : " + payment_depart_date);
		System.out.println("payment_depart_time : " + payment_depart_time);
		System.out.println("payment_arrive_date : " + payment_arrive_date);
		System.out.println("payment_arrive_time : " + payment_arrive_time);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
		//airline_name을 원하는 형식으로 뽑기 위한 과정
		char temp[] = first_airline_name.toCharArray();

		String res_airline_name = "";

		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;

				if (count >= 1) {
					break;
				}

			} else {
				res_airline_name += temp[i];
			}
		}

		if (count == 0) {
			res_airline_name = first_airline_name;
		}

		count = 0; // count 초기화
		
		//원하는 airline_name을 뽑기 위한 과정
		res_airline_name = planeservice.find_airline_name_Process(first_flight_name);
		
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들////////////////////////////////////////////////////////
		goDTO.setGo_airline_name(res_airline_name);
		goDTO.setGo_airplane_model(first_airplane_model);
		goDTO.setGo_flight_name(first_flight_name);
		goDTO.setGo_route_estimate_time(first_route_estimate_time);
		
		System.out.println("가는날에 대한 티켓 정보 airline_name : " + res_airline_name);
		System.out.println("가는날에 대한 티켓 정보 airplane_model : " + first_airplane_model);
		System.out.println("가는날에 대한 티켓 정보 flight_name : " + first_flight_name);
		System.out.println("가는날에 대한 티켓 정보 route_estimate_time : " + first_route_estimate_time);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		System.out.println("가는날에 대한 티켓 정보 airline_site : " + first_airline_site);
		System.out.println("가는날에 대한 티켓 정보 route_distance : " + first_route_distance);
		System.out.println("가는날에 대한 티켓 정보 route_charge : " + first_route_charge);
		System.out.println("=============================================================================================================");
		
		//가는날에 대한 티켓 정보 map에 저장
		HashMap<String, Object> firstinfo = new HashMap<String, Object>();
		firstinfo.put("route_depart_region", first_route_depart_region);
		firstinfo.put("route_arrive_region", first_route_arrive_region);
		firstinfo.put("route_depart_day", first_route_depart_day);
		firstinfo.put("depart_time", first_depart_time);
		firstinfo.put("arrive_time", first_arrive_time);
		firstinfo.put("airline_name", res_airline_name);
		firstinfo.put("airplane_model", first_airplane_model);
		firstinfo.put("flight_name", first_flight_name);
		firstinfo.put("route_estimate_time", first_route_estimate_time);
		firstinfo.put("airline_site", first_airline_site);
		firstinfo.put("route_distance", first_route_distance);
		firstinfo.put("route_charge", first_route_charge);
		firstinfo.put("route_type", first_route_type);
		firstinfo.put("plane_code", first_plane_code);
		mav.addObject("firstinfo", firstinfo);
				
		//사용자가 오는날에 대한 티켓을 선택한 티켓 정보
		System.out.println("오는날에 대한 티켓 정보 route_depart_region : " + dto.getRoute_depart_region());
		System.out.println("오는날에 대한 티켓 정보 route_arrive_region : " + dto.getRoute_arrive_region());
		System.out.println("오는날에 대한 티켓 정보 route_depart_day : " + dto.getRoute_depart_day());
		System.out.println("오는날에 대한 티켓 정보 depart_time : " + dto.getDepart_time());
		System.out.println("오는날에 대한 티켓 정보 arrive_time : " + dto.getArrive_time());
		
		/////////////////////////////////////////////////////////GoPaymentDTO에 저장할 값들/////////////////////////////////////////////////////////
		//년,월,일(payment_depart_date)을 덧붙여주고 시간(payment_depart_time)을 자른다.(가는날)
		payment_depart_date="";
		temp_time = dto.getDepart_time().split("/");
		temp_arr = temp_time[0].toCharArray();
		payment_depart_time = temp_time[1];
		
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
			temp_arr[i] = '년';
			break;
			}
		}
		
		for(int i=0; i<=temp_arr.length; i++) {
			if(i==temp_arr.length) {
				payment_depart_date += '일';
			}else {
				if(temp_arr[i] == '-') {
					temp_arr[i] = '월';
					payment_depart_date += temp_arr[i];
				} else if(temp_arr[i] != ' '){
					payment_depart_date += temp_arr[i];
				}
			}
		}
		
		//년,월,일(payment_depart_date)을 덧붙여주고 시간(payment_depart_time)을 자른다.(가는날)
		payment_arrive_date="";
		temp_time = dto.getArrive_time().split("/");
		temp_arr = temp_time[0].toCharArray();
		payment_arrive_time = temp_time[1];
		
		for(int i=0; i<temp_arr.length; i++) {
			if(temp_arr[i] == '-') {
				temp_arr[i] = '년';
				break;
			}
		}
		
		for(int i=0; i<=temp_arr.length; i++) {
			if(i==temp_arr.length) {
				payment_arrive_date += '일';
			}else {
				if(temp_arr[i] == '-') {
					temp_arr[i] = '월';
					payment_arrive_date += temp_arr[i];
				} else if(temp_arr[i] != ' ') {
					payment_arrive_date += temp_arr[i];
				}
			}
		}
		
		returnDTO.setReturn_Depart_Date(payment_depart_date);
		returnDTO.setReturn_Depart_time(payment_depart_time);
		returnDTO.setReturn_Arrive_Date(payment_arrive_date);
		returnDTO.setReturn_Arrive_time(payment_arrive_time);
		
		System.out.println("payment_depart_date : " + payment_depart_date);
		System.out.println("payment_depart_time : " + payment_depart_time);
		System.out.println("payment_arrive_date : " + payment_arrive_date);
		System.out.println("payment_arrive_time : " + payment_arrive_time);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//airline_name을 원하는 형식으로 뽑기 위한 과정
		temp = dto.getAirline_name().toCharArray();

		res_airline_name = "";

		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;

				if (count >= 1) {
					break;
				}

			} else {
				res_airline_name += temp[i];
			}
		}

		if (count == 0) {
			res_airline_name = dto.getAirline_name();
		}

		count = 0; // count 초기화
		
		/////////////////////////////////////////////////////////returnPaymentDTO에 저장할 값들////////////////////////////////////////////////////////
		returnDTO.setReturn_airline_name(res_airline_name);
		returnDTO.setReturn_airplane_model(dto.getAirplane_model());
		returnDTO.setReturn_flight_name(dto.getFlight_name());
		returnDTO.setReturn_route_estimate_time(dto.getRoute_estimate_time());
		
		System.out.println("오는날에 대한 티켓 정보 airline_name : " + res_airline_name);
		System.out.println("오는날에 대한 티켓 정보 airplane_model : " + dto.getAirplane_model());
		System.out.println("오는날에 대한 티켓 정보 flight_name : " + dto.getFlight_name());
		System.out.println("오는날에 대한 티켓 정보 route_estimate_time : " + dto.getRoute_estimate_time());
		/////////////////////////////////////////////////////////returnPaymentDTO에 저장할 값들////////////////////////////////////////////////////////
		
		System.out.println("오는날에 대한 티켓 정보 airline_site : " + dto.getAirline_site());
		System.out.println("오는날에 대한 티켓 정보 route_distance : " + dto.getRoute_distance());
		System.out.println("오는날에 대한 티켓 정보 route_charge : " + dto.getRoute_charge());
		
		//오는날에 대한 티켓 정보 map에 저장
		HashMap<String, Object> secondinfo = new HashMap<String, Object>();
		secondinfo.put("route_depart_region", dto.getRoute_depart_region());
		secondinfo.put("route_arrive_region", dto.getRoute_arrive_region());
		secondinfo.put("route_depart_day", dto.getRoute_depart_day());
		secondinfo.put("depart_time", dto.getDepart_time());
		secondinfo.put("arrive_time", dto.getArrive_time());
		secondinfo.put("airline_name", res_airline_name);
		secondinfo.put("airplane_model", dto.getAirplane_model());
		secondinfo.put("flight_name", dto.getFlight_name());
		secondinfo.put("route_estimate_time", dto.getRoute_estimate_time());
		secondinfo.put("airline_site", dto.getAirline_site());
		secondinfo.put("route_distance", dto.getRoute_distance());
		secondinfo.put("route_charge", dto.getRoute_charge());
		secondinfo.put("plane_code", dto.getPlane_code());
		mav.addObject("secondinfo", secondinfo);
		
		mav.addObject("goDTO", goDTO);
		mav.addObject("returnDTO", returnDTO);
		
		if(stop_code != null) {
			mav.addObject("stopoverDTO", stopoverDTO);
			mav.addObject("arrive_date", strtemp[1]); //월,일만 들어간 문자열
			mav.addObject("depart_date", strtemp2[1]); //월,일만 들어간 문자열
		}
		
		mav.addObject("dto", dto);
		
		//성인
		mav.addObject("adult", adult);
		//아이
		mav.addObject("children", children);
		
		//가는날 항공기 요금(항공사 마다 다름)
		mav.addObject("first_route_charge", first_route_charge);
	
		//오는날 항공기 요금(항공사 마다 다름)
		mav.addObject("second_route_charge", dto.getRoute_charge());
		
		if(Integer.parseInt(children) == 0) {
			children = "1";
		}
		
		int res_charge = Integer.parseInt(adult) *  Integer.parseInt(children) * (dto.getRoute_charge() + Integer.parseInt(first_route_charge));
		
		//최종항공기 요금
		//비즈니스석 x 3.0배
		//일등석 x 6.0배
		if(seat_grade.equals("비즈니스석")) {
			res_charge = res_charge * 3;
		}else if(seat_grade.equals("일등석")) {
			res_charge = res_charge * 6;
		}
				
		//최종항공기 요금
		mav.addObject("res_charge", res_charge);
		
		//왕복구분
		mav.addObject("flighttype", flighttype);
		
		mav.setViewName("reservation/resform");
		mav.addObject("seat_grade", seat_grade);
		mav.addObject("stop_code", stop_code);
		return mav;
	}
	
	//왕복, 편도, 각각의 경유가 껴있을 때 값분리해서 도출하고 좌석수 변동으로 넘어간다.
	@RequestMapping(value="/okRes.do", method=RequestMethod.POST) 
	public ModelAndView OkProcess(HttpServletRequest req, String[] surname, ResTmpDTO dto, String flighttype, String depart_region, String arrive_region, String startDate, String endDate, String adult, String children,
			String laporseat, String seat_grade, String res_charge, String first_route_depart_region, String first_route_arrive_region, String first_route_depart_day, String first_depart_time, String first_arrive_time, String first_plane_code,
			String first_airline_name, String first_airplane_model, String first_flight_name, String first_route_estimate_time, String first_airline_site, String first_route_distance, String first_route_charge, String first_route_type, String stopover_code, TicketDTO ticketDTO, String stop_code) {
		ModelAndView mav = new ModelAndView();
		
		StopoverDTO stopoverDTO = new StopoverDTO();
		
		//편도일 경우
		if(flighttype.equals("2")) {
			System.out.println("===========================================================================================================");
			System.out.println("티켓에 대한 사용자 정보 flighttype : " + flighttype); //왕복,편도 구분 <왕복 : 1, 편도 : 2>
			System.out.println("티켓에 대한 사용자 정보 depart_region : " + arrive_region); //출발지
			System.out.println("티켓에 대한 사용자 정보 arrive_region : " + depart_region); //도착지 
			System.out.println("티켓에 대한 사용자 정보 startDate : " + startDate); //가는날
			System.out.println("티켓에 대한 사용자 정보 endDate : " + endDate); //오는날
			System.out.println("티켓에 대한 사용자 정보 adult : " + adult); //성인
			System.out.println("티켓에 대한 사용자 정보 children : " + children); //아이
			System.out.println("티켓에 대한 사용자 정보 laporseat : " + laporseat); //보호구분(만1세 미만일 경우 : lap(무릎에 앉혀서 태움) 아니면 seat(좌석에 태움))
			System.out.println("티켓에 대한 사용자 정보 seat_grade : " + seat_grade); //좌석등급
			System.out.println("res_charge : " + res_charge);
			
			//티켓에 대한 정보 map에 저장
			HashMap<String, Object> ticketinfo = new HashMap<String, Object>();
			ticketinfo.put("flighttype", flighttype);
			ticketinfo.put("depart_region", depart_region);
			ticketinfo.put("arrive_region", arrive_region);
			ticketinfo.put("startDate", startDate);
			ticketinfo.put("endDate", endDate);
			ticketinfo.put("adult", adult);
			ticketinfo.put("children", children);
			ticketinfo.put("laporseat", laporseat);
			ticketinfo.put("seat_grade", seat_grade);
			ticketinfo.put("flighttype", flighttype);
			ticketinfo.put("res_charge", res_charge);
			mav.addObject("ticketinfo", ticketinfo);
			
			System.out.println();
			System.out.println("가는날에 대한 티켓 정보 route_depart_region : " + ticketDTO.getRoute_depart_region());
			System.out.println("가는날에 대한 티켓 정보 route_arrive_region : " + ticketDTO.getRoute_arrive_region());
			System.out.println("가는날에 대한 티켓 정보 route_depart_day : " + ticketDTO.getRoute_depart_day());
			System.out.println("가는날에 대한 티켓 정보 depart_time : " + ticketDTO.getDepart_time());
			System.out.println("가는날에 대한 티켓 정보 arrive_time : " + ticketDTO.getArrive_time());
			System.out.println("가는날에 대한 티켓 정보 airline_name : " + ticketDTO.getAirline_name());
			System.out.println("가는날에 대한 티켓 정보 airplane_model : " + ticketDTO.getAirplane_model());
			System.out.println("가는날에 대한 티켓 정보 flight_name : " + ticketDTO.getFlight_name());
			System.out.println("가는날에 대한 티켓 정보 route_estimate_time : " + ticketDTO.getRoute_estimate_time());
			System.out.println("가는날에 대한 티켓 정보 airline_site : " + ticketDTO.getAirline_site());
			System.out.println("가는날에 대한 티켓 정보 route_distance : " + ticketDTO.getRoute_distance());
			System.out.println("가는날에 대한 티켓 정보 route_charge : " + ticketDTO.getRoute_charge());
			System.out.println("가는날에 대한 티켓 정보 route_type : " + ticketDTO.getRoute_type());
			System.out.println("가는날에 대한 티켓 정보 plane_code : " + ticketDTO.getPlane_code());
			
			//가는날에 대한 정보 ticketDTO에 저장
			mav.addObject("ticketDTO", ticketDTO);
			
			System.out.println();
			//첫번째 티켓의 경유지에 대한 정보(사용자 선택에 따라 유무)
			if(ticketDTO.getRoute_type().equals("경유")) {
				stopoverDTO = stopservice.searchObjMethodProcess(ticketDTO.getStopover_code());
				System.out.println("stopover_code : " + stopoverDTO.getStopover_code());
				System.out.println("airline_name : " + stopoverDTO.getAirline_name());
				System.out.println("airline_nation : " + stopoverDTO.getAirline_nation());
				System.out.println("airline_site : " + stopoverDTO.getAirline_site());
				System.out.println("route_dapart_region : " + stopoverDTO.getRoute_depart_region());
				System.out.println("route_arrive_region : " + stopoverDTO.getRoute_arrive_region());
				System.out.println("arrive_time : " + stopoverDTO.getArrive_time());
				System.out.println("depart_time : " + stopoverDTO.getDepart_time());
				System.out.println("route_before_estimate_time : " + stopoverDTO.getRoute_before_estimate_time());
				System.out.println("route_estimate_time : " + stopoverDTO.getRoute_estimate_time());
				System.out.println("route_after_estimate_time : " + stopoverDTO.getRoute_after_estimate_time());
				System.out.println("route_flight_name : " + stopoverDTO.getRoute_flight_name());
				
				mav.addObject("stopoverDTO", stopoverDTO); //okres 페이지에서 route_type이 경유인지 확인하고 확인되면 ticketDTO.getStopover_code()을 보내준다.
														   //보내주고 거기서 code로 경유지에 대한 객체를 추출한다.
				System.out.println("=============================================================================================================");
			}
		}
		
		//왕복일 경우
		if(flighttype.equals("1")) {
			System.out.println("===========================================================================================================");
			System.out.println("티켓에 대한 사용자 정보 flighttype : " + flighttype); //왕복,편도 구분 <왕복 : 1, 편도 : 2>
			System.out.println("티켓에 대한 사용자 정보 depart_region : " + arrive_region); //출발지
			System.out.println("티켓에 대한 사용자 정보 arrive_region : " + depart_region); //도착지 
			System.out.println("티켓에 대한 사용자 정보 startDate : " + endDate); //가는날
			System.out.println("티켓에 대한 사용자 정보 endDate : " + startDate); //오는날
			System.out.println("티켓에 대한 사용자 정보 adult : " + adult); //성인
			System.out.println("티켓에 대한 사용자 정보 children : " + children); //아이
			System.out.println("티켓에 대한 사용자 정보 laporseat : " + laporseat); //보호구분(만1세 미만일 경우 : lap(무릎에 앉혀서 태움) 아니면 seat(좌석에 태움))
			System.out.println("티켓에 대한 사용자 정보 seat_grade : " + seat_grade); //좌석등급
			System.out.println("res_charge : " + res_charge);
			
			//티켓에 대한 정보 map에 저장
			HashMap<String, Object> ticketinfo = new HashMap<String, Object>();
			ticketinfo.put("flighttype", flighttype);
			ticketinfo.put("depart_region", depart_region);
			ticketinfo.put("arrive_region", arrive_region);
			ticketinfo.put("startDate", startDate);
			ticketinfo.put("endDate", endDate);
			ticketinfo.put("adult", adult);
			ticketinfo.put("children", children);
			ticketinfo.put("laporseat", laporseat);
			ticketinfo.put("seat_grade", seat_grade);
			ticketinfo.put("flighttype", flighttype);
			ticketinfo.put("res_charge", res_charge);
			mav.addObject("ticketinfo", ticketinfo);
			
			System.out.println();
			
			System.out.println("가는날에 대한 티켓 정보 route_depart_region : " + first_route_depart_region);
			System.out.println("가는날에 대한 티켓 정보 route_arrive_region : " + first_route_arrive_region);
			System.out.println("가는날에 대한 티켓 정보 route_depart_day : " + first_route_depart_day);
			System.out.println("가는날에 대한 티켓 정보 depart_time : " + first_depart_time);
			System.out.println("가는날에 대한 티켓 정보 arrive_time : " + first_arrive_time);
			System.out.println("가는날에 대한 티켓 정보 airline_name : " + first_airline_name);
			System.out.println("가는날에 대한 티켓 정보 airplane_model : " + first_airplane_model);
			System.out.println("가는날에 대한 티켓 정보 flight_name : " + first_flight_name);
			System.out.println("가는날에 대한 티켓 정보 route_estimate_time : " + first_route_estimate_time);
			System.out.println("가는날에 대한 티켓 정보 airline_site : " + first_airline_site);
			System.out.println("가는날에 대한 티켓 정보 route_distance : " + first_route_distance);
			System.out.println("가는날에 대한 티켓 정보 route_charge : " + first_route_charge);
			System.out.println("가는날에 대한 티켓 정보 route_type : " + first_route_type);
			System.out.println("가는날에 대한 티켓 정보 plane_code : " + first_plane_code);
			
			//가는날에 대한 티켓 정보 map에 저장
			HashMap<String, Object> firstinfo = new HashMap<String, Object>();
			firstinfo.put("route_depart_region", first_route_depart_region);
			firstinfo.put("route_arrive_region", first_route_arrive_region);
			firstinfo.put("route_depart_day", first_route_depart_day);
			firstinfo.put("depart_time", first_depart_time);
			firstinfo.put("arrive_time", first_arrive_time);
			firstinfo.put("airline_name", first_airline_name);
			firstinfo.put("airplane_model", first_airplane_model);
			firstinfo.put("flight_name", first_flight_name);
			firstinfo.put("route_estimate_time", first_route_estimate_time);
			firstinfo.put("airline_site", first_airline_site);
			firstinfo.put("route_distance", first_route_distance);
			firstinfo.put("route_charge", first_route_charge);
			firstinfo.put("route_type", first_route_type);
			firstinfo.put("plane_code", first_plane_code);
			mav.addObject("firstinfo", firstinfo);
			
			System.out.println();
			
			System.out.println("오는날에 대한 티켓 정보 route_depart_region : " + ticketDTO.getRoute_depart_region());
			System.out.println("오는날에 대한 티켓 정보 route_arrive_region : " + ticketDTO.getRoute_arrive_region());
			System.out.println("오는날에 대한 티켓 정보 route_depart_day : " + ticketDTO.getRoute_depart_day());
			System.out.println("오는날에 대한 티켓 정보 depart_time : " + ticketDTO.getDepart_time());
			System.out.println("오는날에 대한 티켓 정보 arrive_time : " + ticketDTO.getArrive_time());
			System.out.println("오는날에 대한 티켓 정보 airline_name : " + ticketDTO.getAirline_name());
			System.out.println("오는날에 대한 티켓 정보 airplane_model : " + ticketDTO.getAirplane_model());
			System.out.println("오는날에 대한 티켓 정보 flight_name : " + ticketDTO.getFlight_name());
			System.out.println("오는날에 대한 티켓 정보 route_estimate_time : " + ticketDTO.getRoute_estimate_time());
			System.out.println("오는날에 대한 티켓 정보 airline_site : " + ticketDTO.getAirline_site());
			System.out.println("오는날에 대한 티켓 정보 route_distance : " + ticketDTO.getRoute_distance());
			System.out.println("오는날에 대한 티켓 정보 route_charge : " + ticketDTO.getRoute_charge());
			System.out.println("오는날에 대한 티켓 정보 plane_code : " + ticketDTO.getPlane_code());
			
			//오는날에 대한 정보 ticketDTO에 저장
			mav.addObject("ticketDTO", ticketDTO);
			
			//오는날에 대한 티켓 정보 map에 저장
			HashMap<String, Object> secondinfo = new HashMap<String, Object>();
			secondinfo.put("route_depart_region", ticketDTO.getRoute_depart_region());
			secondinfo.put("route_arrive_region", ticketDTO.getRoute_arrive_region());
			secondinfo.put("route_depart_day", ticketDTO.getRoute_depart_day());
			secondinfo.put("depart_time", ticketDTO.getDepart_time());
			secondinfo.put("arrive_time", ticketDTO.getArrive_time());
			secondinfo.put("airline_name", ticketDTO.getAirline_name());
			secondinfo.put("airplane_model", ticketDTO.getAirplane_model());
			secondinfo.put("flight_name", ticketDTO.getFlight_name());
			secondinfo.put("route_estimate_time", ticketDTO.getRoute_estimate_time());
			secondinfo.put("airline_site", ticketDTO.getAirline_site());
			secondinfo.put("route_distance", ticketDTO.getRoute_distance());
			secondinfo.put("route_charge", ticketDTO.getRoute_charge());
			secondinfo.put("plane_code", ticketDTO.getPlane_code());
			mav.addObject("secondinfo", secondinfo);
			
			//첫번째 티켓의 경유지에 대한 정보(사용자 선택에 따라 유무)
			if(first_route_type.equals("경유")) { //첫번째 티켓에만 경유지가 있으므로 first_route_type만 신경쓰면 된다.
				System.out.println();
				stopoverDTO = stopservice.searchObjMethodProcess(Integer.parseInt(stop_code));
				System.out.println("stopover_code : " + stopoverDTO.getStopover_code());
				System.out.println("airline_name : " + stopoverDTO.getAirline_name());
				System.out.println("airline_nation : " + stopoverDTO.getAirline_nation());
				System.out.println("airline_site : " + stopoverDTO.getAirline_site());
				System.out.println("route_dapart_region : " + stopoverDTO.getRoute_depart_region());
				System.out.println("route_arrive_region : " + stopoverDTO.getRoute_arrive_region());
				System.out.println("arrive_time : " + stopoverDTO.getArrive_time());
				System.out.println("depart_time : " + stopoverDTO.getDepart_time());
				System.out.println("route_before_estimate_time : " + stopoverDTO.getRoute_before_estimate_time());
				System.out.println("route_estimate_time : " + stopoverDTO.getRoute_estimate_time());
				System.out.println("route_after_estimate_time : " + stopoverDTO.getRoute_after_estimate_time());
				System.out.println("route_flight_name : " + stopoverDTO.getRoute_flight_name());
				
				mav.addObject("stopoverDTO", stopoverDTO); 
				mav.addObject("stop_code", stop_code); //okres 페이지에서 first_route_type이 경유인지 확인하고 확인되면 stop_code를 보내준다.
													   //보내주고 거기서 stop_code로 경유지에 대한 객체를 추출한다.
			}
			System.out.println("===========================================================================================================");
		}
		
		mav.addObject("dto",  dto);
		mav.setViewName("reservation/okres");
		return mav;
	}
	
	
	@RequestMapping(value="/exchange.do", produces="application/json;charset=UTF-8")
	public @ResponseBody String process(@RequestBody String ITEM_CODE1) throws MalformedURLException, IOException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Calendar cal = Calendar.getInstance();
       
        String strToday = sdf.format(cal.getTime());
		String input=null;
		String total="";
		String url = "http://ecos.bok.or.kr/api/StatisticSearch/8M0VDN9M5Z5RI20VACQR/json/kr/1/10/036Y001/DD/"+strToday+"/"+strToday+"/"+ITEM_CODE1;
		HttpURLConnection con = (HttpURLConnection)new URL(url).openConnection();
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(con.getInputStream()));
		while((input=reader.readLine())!=null) {
			total += input;
		}
		System.out.println(total);
		return total;
	}
	
	@RequestMapping(value="/insert.do")
	public String InsertProcess(ResTmpDTO dto, String flighttype, String depart_region, String arrive_region, String startDate, String endDate, String adult, String children,
			String laporseat, String seat_grade, String res_charge, String first_route_depart_region, String first_route_arrive_region, String first_route_depart_day, String first_depart_time, String first_arrive_time, String first_plane_code,
			String first_airline_name, String first_airplane_model, String first_flight_name, String first_route_estimate_time, String first_airline_site, String first_route_distance, String first_route_charge, String first_route_type, 
			TicketDTO ticketDTO, String stop_code, HttpServletRequest req) {

		StopoverDTO stopoverDTO = new StopoverDTO();
	
		//탑승자 정보
		String[] surname = dto.getSurname();
		String[] givenames = dto.getGivennames();
		String[] selidtype = dto.getSelidtype();
		String[] nationlity = dto.getNationality();
		String[] idNumber = dto.getIdNumber();
		String[] gender = dto.getGender();
		int[] birth_year = dto.getBirth_year();
		int[] birth_month = dto.getBirth_month();
		int[] birth_day = dto.getBirth_day();
		
		for(int i = 0; i<dto.getSurname().length; i++) {
			System.out.println((i+1) + "번째  surname : " +  surname[i]);
			System.out.println((i+1) + "번째  givenames : " +  givenames[i]);
			System.out.println((i+1) + "번째  selidtype : " +  selidtype[i]);
			System.out.println((i+1) + "번째  nationlity : " +  nationlity[i]);
			System.out.println((i+1) + "번째  idNumber : " +  idNumber[i]);
			System.out.println((i+1) + "번째  gender : " +  gender[i]);
			System.out.println((i+1) + "번째  bitrh_year : " +  birth_year[i]);
			System.out.println((i+1) + "번째  birth_month : " +  birth_month[i]);
			System.out.println((i+1) + "번째  birth_day : " +  birth_day[i]);
			System.out.println();
		}
		
		int seat_option = 0;

		if(seat_grade.equals("일반석")) {
			seat_option = 3;
		}else if(seat_grade.equals("비즈니스석")) {
			seat_option = 2;
		}else if(seat_grade.equals("일등석")) {
			seat_option = 1;
		}
		
		//성인수와 아이의 수를 더한다.
		int seat_count = Integer.parseInt(adult) + Integer.parseInt(children);
		
		//왕복일시 (가는편, 오는편에 대한 항공기 좌석수 차감)
		if(flighttype.equals("1")) {
			System.out.println("가는 편 plane_code : " + first_plane_code);
			System.out.println("오는 편 plane_code : " + ticketDTO.getPlane_code());
			
			//가는편 비행기 좌석수 차감
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("seat_count", seat_count);
			map.put("grade_code", seat_option);
			map.put("plane_code", first_plane_code);
			
			planemodelservice.update_seatcount_Method_Process(map);
			
			//오는편 비행기 좌석수 차감
			map = new HashMap<String, Object>();
			map.put("seat_count", seat_count);
			map.put("grade_code", seat_option);
			map.put("plane_code", ticketDTO.getPlane_code());
			
			planemodelservice.update_seatcount_Method_Process(map);
		}
				
		//편도일시 (가는편에 대한 항공기 좌석수 차감)
		if(flighttype.equals("2")) {
			System.out.println("가는 편 plane_code : " + ticketDTO.getPlane_code());
			
			//가는편 비행기 좌석수 차감
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("seat_count", seat_count);
			map.put("grade_code", seat_option);
			map.put("plane_code", ticketDTO.getPlane_code());
			
			planemodelservice.update_seatcount_Method_Process(map);
		}
		
		//reserve table에 저장
		HttpSession session=req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		
		ReserveDTO reserveDTO = new ReserveDTO();
		
		reserveDTO.setTicket_type(Integer.parseInt(flighttype));
		reserveDTO.setMember_id(member_id);
		
		if(first_depart_time != null) {
			reserveDTO.setReserve_depart_day(first_depart_time);
		}else if(ticketDTO.getDepart_time() != null){
			reserveDTO.setReserve_depart_day(ticketDTO.getDepart_time());
		}
		
		if(flighttype.equals("1")) {
			reserveDTO.setReserve_journey(arrive_region + " -> " + depart_region);
		}else if(flighttype.equals("2")) {
			reserveDTO.setReserve_journey(depart_region + " -> " + arrive_region);
		}
		
		reserveDTO.setReserve_state("예약완료");
		reserveDTO.setReserve_total_price(Integer.parseInt(res_charge));
		reserveDTO.setReserve_paymethod("카카오페이");
		
		reserveservice.ReserveInsertMethodProcess(reserveDTO);

		//방금 들어간 예약 코드를 추출한다.(가장 높은 예약 코드만 가져오면 된다.)
		int reserve_code = reserveservice.ExtractReserveCodeMethodProcess();
		System.out.println(reserve_code);
		
		//성명, 성별, 생년월일, 여권번호, 발행국가를 reserve_code를 빼와서 배열의 길이만큼 insert한다.
		ReserveDetailDTO reservedetailDTO = new ReserveDetailDTO();
		
		for(int i = 0; i<dto.getSurname().length; i++) {
			reservedetailDTO.setReserve_detail_code(reserve_code); //코드
			reservedetailDTO.setPassname(surname[i] + givenames[i]); //성명
			reservedetailDTO.setPassgender(gender[i]); //성별
			
			//0붙고 안붙는 알고리즘
			if(birth_month[i] < 10 && birth_day[i] < 10) {
				reservedetailDTO.setPassbirth(birth_year[i] + "-" + "0"+birth_month[i] + "-" + "0"+birth_day[i]); //생년월일(모두 10보다 작을 때 0을 붙여준다.)
			} else if(birth_month[i] < 10) {
				reservedetailDTO.setPassbirth(birth_year[i] + "-" + "0"+birth_month[i] + "-" +birth_day[i]); //생년월일(한쪽이 10보다 작을 때 0을 붙여준다.)
			} else if(birth_day[i] < 10) {
				reservedetailDTO.setPassbirth(birth_year[i] + "-" + birth_month[i] + "-" + "0"+birth_day[i]); //생년월일(한쪽이 10보다 작을 때 0을 붙여준다.)
			} else {
				reservedetailDTO.setPassbirth(birth_year[i] + "-" + birth_month[i] + "-" + birth_day[i]); //생년월일(조건에 해당되지 않으면 그냥 출력한다.)
			}
			
			reservedetailDTO.setPassnumber(idNumber[i]); //여권번호
			reservedetailDTO.setPasscountry(nationlity[i]); //발행국가
			reserveservice.ReserveInsertDetailMethodProcess(reservedetailDTO);
		}
		
		System.out.println("보람씨가 참고하실 변수");
		//편도일 경우
		if(flighttype.equals("2")) {
			System.out.println("===========================================================================================================");
			System.out.println("티켓에 대한 사용자 정보 flighttype : " + flighttype); //왕복,편도 구분 <왕복 : 1, 편도 : 2>
			System.out.println("티켓에 대한 사용자 정보 depart_region : " + arrive_region); //출발지
			System.out.println("티켓에 대한 사용자 정보 arrive_region : " + depart_region); //도착지 
			System.out.println("티켓에 대한 사용자 정보 startDate : " + startDate); //가는날
			System.out.println("티켓에 대한 사용자 정보 endDate : " + endDate); //오는날
			System.out.println("티켓에 대한 사용자 정보 adult : " + adult); //성인
			System.out.println("티켓에 대한 사용자 정보 children : " + children); //아이
			System.out.println("티켓에 대한 사용자 정보 laporseat : " + laporseat); //보호구분(만1세 미만일 경우 : lap(무릎에 앉혀서 태움) 아니면 seat(좌석에 태움))
			System.out.println("티켓에 대한 사용자 정보 seat_grade : " + seat_grade); //좌석등급
			System.out.println("최종금액 : res_charge : " + res_charge);
			
			System.out.println();
			
			System.out.println("가는날에 대한 티켓 정보 route_depart_region : " + ticketDTO.getRoute_depart_region()); //출발지 
			System.out.println("가는날에 대한 티켓 정보 route_arrive_region : " + ticketDTO.getRoute_arrive_region()); //도착지
			System.out.println("가는날에 대한 티켓 정보 route_depart_day : " + ticketDTO.getRoute_depart_day());
			System.out.println("가는날에 대한 티켓 정보 depart_time : " + ticketDTO.getDepart_time()); //출발일
			System.out.println("가는날에 대한 티켓 정보 arrive_time : " + ticketDTO.getArrive_time()); //도착일
			System.out.println("가는날에 대한 티켓 정보 airline_name : " + ticketDTO.getAirline_name()); //항공사
			System.out.println("가는날에 대한 티켓 정보 airplane_model : " + ticketDTO.getAirplane_model()); //항공기종
			System.out.println("가는날에 대한 티켓 정보 flight_name : " + ticketDTO.getFlight_name()); //항공편명
																								//좌석등급(seat_grade), 좌석수(seat_count)
			System.out.println("가는날에 대한 티켓 정보 route_estimate_time : " + ticketDTO.getRoute_estimate_time());
			System.out.println("가는날에 대한 티켓 정보 airline_site : " + ticketDTO.getAirline_site());
			System.out.println("가는날에 대한 티켓 정보 route_distance : " + ticketDTO.getRoute_distance());
			System.out.println("가는날에 대한 티켓 정보 route_charge : " + ticketDTO.getRoute_charge());
			System.out.println("가는날에 대한 티켓 정보 route_type : " + ticketDTO.getRoute_type());
			
			//신규 reserve_code를 빼와서 출발지, 도착지, 출발일, 도착일, 항공사, 항공기종, 항공편명, 좌석등급, 좌석수를  insert한다.
			ReserveDetail2DTO reservedetail2DTO = new ReserveDetail2DTO();
			reservedetail2DTO.setReserve_detail2_code(reserve_code); //코드
			reservedetail2DTO.setDetail_depart_region(ticketDTO.getRoute_depart_region()); //출발지
			
			reservedetail2DTO.setDetail_arrive_region(ticketDTO.getRoute_arrive_region()); //도착지
			reservedetail2DTO.setDetail_depart_day(ticketDTO.getDepart_time()); //출발일
			reservedetail2DTO.setDetail_arrive_day(ticketDTO.getArrive_time()); //도착일
			
			reservedetail2DTO.setDetail_airline_name(ticketDTO.getAirline_name()); //항공사
			reservedetail2DTO.setDetail_airplane_model(ticketDTO.getAirplane_model()); //항공기종
			reservedetail2DTO.setDetail_flight_name(ticketDTO.getFlight_name());//항공편명
			
			reservedetail2DTO.setDetail_seat_grade(seat_grade); //좌석등급
			reservedetail2DTO.setDetail_seat_total(seat_count); //좌석수
			reservedetail2DTO.setDetail_stopover_type("편도"); //경유구분
			
			reserveservice.ReserveInsertDetail2MethodProcess(reservedetail2DTO);
			
			System.out.println();
			//첫번째 티켓의 경유지에 대한 정보(사용자 선택에 따라 유무)
			if(ticketDTO.getRoute_type().equals("경유")) {
				
				stopoverDTO = stopservice.searchObjMethodProcess(ticketDTO.getStopover_code());
				System.out.println("stopover_code : " + stopoverDTO.getStopover_code());
				System.out.println("airline_name : " + stopoverDTO.getAirline_name());
				System.out.println("airline_nation : " + stopoverDTO.getAirline_nation());
				System.out.println("airline_site : " + stopoverDTO.getAirline_site());
				System.out.println("route_dapart_region : " + stopoverDTO.getRoute_depart_region()); 
				System.out.println("route_arrive_region : " + stopoverDTO.getRoute_arrive_region());
				System.out.println("arrive_time : " + stopoverDTO.getArrive_time());
				System.out.println("depart_time : " + stopoverDTO.getDepart_time());
				System.out.println("route_before_estimate_time : " + stopoverDTO.getRoute_before_estimate_time());
				System.out.println("route_estimate_time : " + stopoverDTO.getRoute_estimate_time());
				System.out.println("route_after_estimate_time : " + stopoverDTO.getRoute_after_estimate_time());
				System.out.println("route_flight_name : " + stopoverDTO.getRoute_flight_name());
				
				//경유지가 있다면 경유지에 대한 정보도 신규 reserve_code에 대하여 저장을 한다.
				reservedetail2DTO = new ReserveDetail2DTO();
				reservedetail2DTO.setReserve_detail2_code(reserve_code); //코드
				reservedetail2DTO.setDetail_depart_region(stopoverDTO.getRoute_depart_region()); //출발지
				
				reservedetail2DTO.setDetail_arrive_region(stopoverDTO.getRoute_arrive_region()); //도착지
				
				//날짜가 붙어있지 않아서 임시방편
				String strtemp = " ";
				char[] chtemp = ticketDTO.getDepart_time().toCharArray();
				
				for(int i=0; i<strtemp.length(); i++) {
					if(chtemp[i] == '/') {
						strtemp += chtemp[i];
						break;
					}
					strtemp += chtemp[i];
				}
				
				reservedetail2DTO.setDetail_depart_day(strtemp + " " + stopoverDTO.getArrive_time()); //출발일
				reservedetail2DTO.setDetail_arrive_day(strtemp + " " + stopoverDTO.getDepart_time()); //도착일
				
				reservedetail2DTO.setDetail_airline_name(stopoverDTO.getAirline_name()); //항공사
				reservedetail2DTO.setDetail_airplane_model("Airbus LKI453"); //항공기종 (경유지에 항공기종은 없어서 임시방편으로 넣음)
				reservedetail2DTO.setDetail_flight_name(stopoverDTO.getRoute_flight_name());//항공편명
				
				reservedetail2DTO.setDetail_seat_grade(seat_grade); //좌석등급
				reservedetail2DTO.setDetail_seat_total(seat_count); //좌석수
				reservedetail2DTO.setDetail_stopover_type("경유"); //경유구분
				
				reserveservice.ReserveInsertDetail2MethodProcess(reservedetail2DTO);
				System.out.println("=============================================================================================================");
			}
		}
		
		//왕복일 경우
		if(flighttype.equals("1")) {
			System.out.println("===========================================================================================================");
			System.out.println("티켓에 대한 사용자 정보 flighttype : " + flighttype); //왕복,편도 구분 <왕복 : 1, 편도 : 2>
			System.out.println("티켓에 대한 사용자 정보 depart_region : " + arrive_region); //출발지
			System.out.println("티켓에 대한 사용자 정보 arrive_region : " + depart_region); //도착지 
			System.out.println("티켓에 대한 사용자 정보 startDate : " + endDate); //가는날
			System.out.println("티켓에 대한 사용자 정보 endDate : " + startDate); //오는날
			System.out.println("티켓에 대한 사용자 정보 adult : " + adult); //성인
			System.out.println("티켓에 대한 사용자 정보 children : " + children); //아이
			System.out.println("티켓에 대한 사용자 정보 laporseat : " + laporseat); //보호구분(만1세 미만일 경우 : lap(무릎에 앉혀서 태움) 아니면 seat(좌석에 태움))
			System.out.println("티켓에 대한 사용자 정보 seat_grade : " + seat_grade); //좌석등급
			System.out.println("최종 금액 : res_charge : " + res_charge);
			
			System.out.println();
			
			System.out.println("가는날에 대한 티켓 정보 route_depart_region : " + first_route_depart_region);
			System.out.println("가는날에 대한 티켓 정보 route_arrive_region : " + first_route_arrive_region);
			System.out.println("가는날에 대한 티켓 정보 route_depart_day : " + first_route_depart_day);
			System.out.println("가는날에 대한 티켓 정보 depart_time : " + first_depart_time);
			System.out.println("가는날에 대한 티켓 정보 arrive_time : " + first_arrive_time);
			System.out.println("가는날에 대한 티켓 정보 airline_name : " + first_airline_name);
			System.out.println("가는날에 대한 티켓 정보 airplane_model : " + first_airplane_model);
			System.out.println("가는날에 대한 티켓 정보 flight_name : " + first_flight_name);
			System.out.println("가는날에 대한 티켓 정보 route_estimate_time : " + first_route_estimate_time);
			System.out.println("가는날에 대한 티켓 정보 airline_site : " + first_airline_site);
			System.out.println("가는날에 대한 티켓 정보 route_distance : " + first_route_distance);
			System.out.println("가는날에 대한 티켓 정보 route_charge : " + first_route_charge);
			System.out.println("가는날에 대한 티켓 정보 route_type : " + first_route_type);
		
			System.out.println();
			
			System.out.println("오는날에 대한 티켓 정보 route_depart_region : " + ticketDTO.getRoute_depart_region());
			System.out.println("오는날에 대한 티켓 정보 route_arrive_region : " + ticketDTO.getRoute_arrive_region());
			System.out.println("오는날에 대한 티켓 정보 route_depart_day : " + ticketDTO.getRoute_depart_day());
			System.out.println("오는날에 대한 티켓 정보 depart_time : " + ticketDTO.getDepart_time());
			System.out.println("오는날에 대한 티켓 정보 arrive_time : " + ticketDTO.getArrive_time());
			System.out.println("오는날에 대한 티켓 정보 airline_name : " + ticketDTO.getAirline_name());
			System.out.println("오는날에 대한 티켓 정보 airplane_model : " + ticketDTO.getAirplane_model());
			System.out.println("오는날에 대한 티켓 정보 flight_name : " + ticketDTO.getFlight_name());
			System.out.println("오는날에 대한 티켓 정보 route_estimate_time : " + ticketDTO.getRoute_estimate_time());
			System.out.println("오는날에 대한 티켓 정보 airline_site : " + ticketDTO.getAirline_site());
			System.out.println("오는날에 대한 티켓 정보 route_distance : " + ticketDTO.getRoute_distance());
			System.out.println("오는날에 대한 티켓 정보 route_charge : " + ticketDTO.getRoute_charge());
			
			//신규 reserve_code를 빼와서 출발지, 도착지, 출발일, 도착일, 항공사, 항공기종, 항공편명, 좌석등급, 좌석수를  insert한다.
			//가는날에 대한 티켓정보 저장
			ReserveDetail2DTO reservedetail2DTO = new ReserveDetail2DTO();
			reservedetail2DTO.setReserve_detail2_code(reserve_code); //코드
			reservedetail2DTO.setDetail_depart_region(first_route_depart_region); //출발지
			
			reservedetail2DTO.setDetail_arrive_region(first_route_arrive_region); //도착지
			reservedetail2DTO.setDetail_depart_day(first_depart_time); //출발일
			reservedetail2DTO.setDetail_arrive_day(first_arrive_time); //도착일
			
			reservedetail2DTO.setDetail_airline_name(first_airline_name); //항공사
			reservedetail2DTO.setDetail_airplane_model(first_airplane_model); //항공기종
			reservedetail2DTO.setDetail_flight_name(first_flight_name);//항공편명
			
			reservedetail2DTO.setDetail_seat_grade(seat_grade); //좌석등급
			reservedetail2DTO.setDetail_seat_total(seat_count); //좌석수
			reservedetail2DTO.setDetail_stopover_type("왕복"); //경유구분
			
			reserveservice.ReserveInsertDetail2MethodProcess(reservedetail2DTO);
			
			//첫번째 티켓의 경유지에 대한 정보(사용자 선택에 따라 유무)
			if(first_route_type.equals("경유")) { //첫번째 티켓에만 경유지가 있으므로 first_route_type만 신경쓰면 된다.
				System.out.println();
				stopoverDTO = stopservice.searchObjMethodProcess(Integer.parseInt(stop_code));
				System.out.println("stopover_code : " + stopoverDTO.getStopover_code());
				System.out.println("airline_name : " + stopoverDTO.getAirline_name());
				System.out.println("airline_nation : " + stopoverDTO.getAirline_nation());
				System.out.println("airline_site : " + stopoverDTO.getAirline_site());
				System.out.println("route_dapart_region : " + stopoverDTO.getRoute_depart_region());
				System.out.println("route_arrive_region : " + stopoverDTO.getRoute_arrive_region());
				System.out.println("arrive_time : " + stopoverDTO.getArrive_time());
				System.out.println("depart_time : " + stopoverDTO.getDepart_time());
				System.out.println("route_before_estimate_time : " + stopoverDTO.getRoute_before_estimate_time());
				System.out.println("route_estimate_time : " + stopoverDTO.getRoute_estimate_time());
				System.out.println("route_after_estimate_time : " + stopoverDTO.getRoute_after_estimate_time());
				System.out.println("route_flight_name : " + stopoverDTO.getRoute_flight_name());
				
				//경유지가 있다면 경유지에 대한 정보도 신규 reserve_code에 대하여 저장을 한다.
				reservedetail2DTO = new ReserveDetail2DTO();
				reservedetail2DTO.setReserve_detail2_code(reserve_code); //코드
				reservedetail2DTO.setDetail_depart_region(stopoverDTO.getRoute_depart_region()); //출발지
				
				reservedetail2DTO.setDetail_arrive_region(stopoverDTO.getRoute_arrive_region()); //도착지
				
				//날짜가 붙어있지 않아서 임시방편
				String strtemp = " ";
				char[] chtemp = first_depart_time.toCharArray();
				
				for(int i=0; i<strtemp.length(); i++) {
					if(chtemp[i] == '/') {
						strtemp += chtemp[i];
						break;
					}
					strtemp += chtemp[i];
				}
				
				reservedetail2DTO.setDetail_depart_day(strtemp + " " + stopoverDTO.getArrive_time()); //출발일
				reservedetail2DTO.setDetail_arrive_day(strtemp + " " + stopoverDTO.getDepart_time()); //도착일
				reservedetail2DTO.setDetail_airline_name(stopoverDTO.getAirline_name()); //항공사
				
				if(stopoverDTO.getStopover_code() == 1) {
					reservedetail2DTO.setDetail_airplane_model("Airbus ZJY455"); //항공기종 (경유지에 항공기종은 없어서 임시방편으로 넣음)
				} else if(stopoverDTO.getStopover_code() == 2){
					reservedetail2DTO.setDetail_airplane_model("Airbus ADN455"); //항공기종 (경유지에 항공기종은 없어서 임시방편으로 넣음)
				}
				
				reservedetail2DTO.setDetail_flight_name(stopoverDTO.getRoute_flight_name());//항공편명
				reservedetail2DTO.setDetail_seat_grade(seat_grade); //좌석등급
				reservedetail2DTO.setDetail_seat_total(seat_count); //좌석수
				reservedetail2DTO.setDetail_stopover_type("경유"); //경유구분
				
				reserveservice.ReserveInsertDetail2MethodProcess(reservedetail2DTO);
			}
			System.out.println("===========================================================================================================");
			
			//오는날에 대한 티켓정보 저장
			reservedetail2DTO = new ReserveDetail2DTO();
			
			reservedetail2DTO.setReserve_detail2_code(reserve_code); //코드
			reservedetail2DTO.setDetail_depart_region(ticketDTO.getRoute_depart_region()); //출발지
			
			reservedetail2DTO.setDetail_arrive_region(ticketDTO.getRoute_arrive_region()); //도착지
			reservedetail2DTO.setDetail_depart_day(ticketDTO.getDepart_time()); //출발일
			reservedetail2DTO.setDetail_arrive_day(ticketDTO.getArrive_time()); //도착일
			
			reservedetail2DTO.setDetail_airline_name(ticketDTO.getAirline_name()); //항공사
			reservedetail2DTO.setDetail_airplane_model(ticketDTO.getAirplane_model()); //항공기종
			reservedetail2DTO.setDetail_flight_name(ticketDTO.getFlight_name());//항공편명
			
			reservedetail2DTO.setDetail_seat_grade(seat_grade); //좌석등급
			reservedetail2DTO.setDetail_seat_total(seat_count); //좌석수
			reservedetail2DTO.setDetail_stopover_type("왕복"); //경유구분
			
			reserveservice.ReserveInsertDetail2MethodProcess(reservedetail2DTO);
		}
		return "redirect:/resList.do";
	}
}



