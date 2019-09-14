package controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import dto.StopoverDTO;
import dto.TicketDTO;
import dto.TicketPageDTO;
import service.PlaneModelService;
import service.PlaneService;
import service.StopService;
import service.TicketService;

//http://localhost/myfinalproject/ticketlist.do
//전달사항! : FirstInfo에 담긴 airline_name은 결제 UI controller에서 service로 조인해서 불러와야 한다. 
@Controller
public class TicketController {

	private TicketService service;
	private PlaneService planeservice;
	private StopService stopservice;
	private PlaneModelService planemodelservice;
	
	private int currentPage;
	private TicketPageDTO pdto;

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
	
	public TicketController() {

	}

	// 편도일 때
	@RequestMapping(value = "ticketlist.do")
	public ModelAndView TicketSearchProcess(String flighttype, String depart_region, String arrive_region,
			String startDate, String endDate, String adult, String children, String laporseat, String airline_name,
			TicketPageDTO pv, String seat_grade) {

		int count = 0;
		int seat_option = 0;
		
		if(seat_grade.equals("일반석")) {
			seat_option = 3;
		}else if(seat_grade.equals("비즈니스석")) {
			seat_option = 2;
		}else if(seat_grade.equals("일등석")) {
			seat_option = 1;
		}
		
		ModelAndView mav = new ModelAndView();

		/*
		 * <파라미터 테스트 출력> System.out.println("왕복구분 : " + flighttype); //왕복 : 1 / 편도 : 2로
		 * 구분 System.out.println("출발지 : " + depart_region); //편도, 왕복일시
		 * System.out.println("도착지 : " + arrive_region); //편도, 왕복일시
		 * System.out.println("가는날 : " + startDate); //편도, 왕복일시
		 * System.out.println("오는날: " + endDate); //왕복일시 
		 * System.out.println("성인 : " + adult); //hidden System.out.println("아이 : " + children); //hidden
		 * System.out.println("보호구분 : " + laporseat); //hidden
		 * System.out.println("좌석등급 : " + seat_grade);
		 */
		
		if (airline_name == null) {
			airline_name = "all";
		}

		if (pv.getAirline_name() == null) {
			pv.setAirline_name("all");
		} else {
			pv.setAirline_name(airline_name);
		}

		if (pv.getSearchKey() == null) {
			pv.setSearchKey("all");
		}

		/////////////////////////////////////////////////////////////////////////////////////////////////////
		//startDate를 원하는 형식으로 뽑아오기 위한 과정(bxslider에서 항공사클릭시 startDate가 두번 넘어가서 아래의 로직으로 자르는 것이 필요.)
		///////////////////////////////////////////////////////////////////////////////////////////////////// 
		
		char[] temp = startDate.toCharArray();

		String res_startDate = "";
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;
			} else {
				res_startDate += temp[i];
			}
			if (count >= 1) {
				break;
			}
		}

		if (count == 0) {
			res_startDate = startDate;
		}

		count = 0; // count 초기화

		///////////////////////////////////////////////////////////////////////////////////////////////////////
		// depart_region을 원하는 형식으로 뽑아오기 위한 과정
		temp = depart_region.toCharArray();

		String res_depart_region = "";

		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;

				if (count >= 2) {
					break;
				}
				res_depart_region += temp[i];

			} else {
				res_depart_region += temp[i];
			}
		}

		if (count == 0) {
			res_depart_region = depart_region;
		}

		count = 0; // count 초기화
		/////////////////////////////////////////////////////////////////////////////////////////////////////

		HashMap<String, Object> map = new HashMap<String, Object>();
		// 항공사별 검색 정렬 옵션
		map.put("depart_region", res_depart_region); // 출발지역
		map.put("arrive_region", arrive_region); // 도착지역
		map.put("startDate", res_startDate); // 가는날
		map.put("endDate", endDate);
		map.put("airline_name", airline_name); // 항공사명
		map.put("searchKey", pv.getSearchKey()); // 정렬옵션

		// 결제UI까지 넘어가야할 옵션
		map.put("flighttype", flighttype); // 왕복,편도 구분옵션
		map.put("adult", adult); // 성인(명)
		map.put("children", children); // 아동(명)
		map.put("laporseat", laporseat); // 만1세미만 구분옵션
		
		int total = Integer.parseInt(adult) + Integer.parseInt(children);
		//성인과 아이수를 더한 총인원수를 저장(항공사별 항공기 좌석등급에 대한 좌석수를 불러올 때 해당인원을 수용할 수 있는 좌석이 아니면 보여주지 않기 위한 제어변수)
		map.put("total", total);

		// requestScope의 map영역에 map을 저장
		mav.addObject("map", map);
		
		// 현재 테이블에 저장되어 있는 레코드 수 -> 레코드 수를 기준으로 페이지 블록 처리를 하기 위해서
		int totalRecord = service.countProcess(map);

		if (totalRecord >= 1) {
			if (pv.getCurrentPage() == 0) { // Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
			} else { // 그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}

			pdto = new TicketPageDTO(currentPage, totalRecord, flighttype, res_startDate, endDate, adult, children, laporseat, res_depart_region, arrive_region,
					airline_name, pv.getSearchKey());
			mav.addObject("pv", pdto);

			// 페이징기법을 처리할때마다 list값을 받아와서 아래와 같이 조인하여 원하는 값을 받아오도록 한다.
			List<TicketDTO> ticketList = service.listProcess(pdto);

			// route table의 plane_code열로 plane table의 flight_name과 airplane_model열을 추출.
			for (int i = 0; i < ticketList.size(); i++) {
				ticketList.get(i).setFlight_name(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getFlight_name());
				ticketList.get(i).setAirplane_model(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getAirplane_model());
				
				HashMap<String, Object> seatOption = new HashMap<String, Object>();
				seatOption.put("plane_code", ticketList.get(i).getPlane_code());
				seatOption.put("grade_code", seat_option);
				
				ticketList.get(i).setSeat_capacity(planemodelservice.find_Seat_Method_Process(seatOption)); //plane_code와 seat_grade에 해당하는 좌석수가 리스트 돌아갈때마다 담긴다.
				
				// requestScope의 seatOption영역에 seatOption을 저장
			}

			/*
			 * 주의사항! tns오류가 난다면! 
			 * SQL> conn sys/a1234 as sysdba 
			 * SQL> alter system set processes=500 scope=spfile; 
			 * SQL> shut immediate; //마운트해제 
			 * SQL> startup //마운트
			 * 재시동
			 */

			mav.addObject("aList", ticketList); // route table과 plane table을 조인한 List를 aList영역에 저장.
		}

		mav.setViewName("view/ticketlist");
		mav.addObject("seat_grade", seat_grade);
		
		return mav;
	}

	@RequestMapping(value = "ticketdetail.do")
	public ModelAndView TicketDetailProcess(TicketDTO dto) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("dto", dto);
		mav.setViewName("view/ticketdetail");
		return mav;
	}

	// 왕복일 때
	@RequestMapping(value = "ticketlistround.do")
	public ModelAndView TicketSearchRoundProcess(String flighttype, String depart_region, String arrive_region,
			String startDate, String endDate, String adult, String children, String laporseat, String airline_name,
			TicketPageDTO pv, TicketDTO dto, String seat_grade) {

		int count = 0;
		
		int seat_option = 0;
		
		if(seat_grade.equals("일반석")) {
			seat_option = 3;
		}else if(seat_grade.equals("비즈니스석")) {
			seat_option = 2;
		}else if(seat_grade.equals("일등석")) {
			seat_option = 1;
		}
		
		int item = 0;
		
		/*
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
		*/
		
		ModelAndView mav = new ModelAndView();

		if (airline_name == null) {
			airline_name = "all";
		}

		if (pv.getAirline_name() == null) {
			pv.setAirline_name("all");
		} else {
			pv.setAirline_name(airline_name);
		}

		if (pv.getSearchKey() == null) {
			pv.setSearchKey("all");
		}

		/////////////////////////////////////////////////////////////////////////////////////////////////////
		// airline_name을 원하는 형식으로 뽑아오기 위한 과정
		char[] temp = airline_name.toCharArray();

		String res_airline_name = "";
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;
			}
			if (count >= 1) {
				item = i;
				break;
			}
		}

		for (int i = item + 1; i < temp.length; i++) {
			res_airline_name += temp[i];
		}

		if (count == 0) {
			res_airline_name = airline_name;
		}

		count = 0; // count 초기화

		/////////////////////////////////////////////////////////////////////////////////////////////////////
		// startDate를 원하는 형식으로 뽑아오기 위한 과정(bxslider에서 항공사클릭시 startDate가 두번 넘어가서 아래의 로직으로 자르는 것이 필요.)
		///////////////////////////////////////////////////////////////////////////////////////////////////// 
		
		temp = startDate.toCharArray();

		String res_startDate = "";
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;
			} else {
				res_startDate += temp[i];
			}
			if (count >= 1) {
				break;
			}
		}

		if (count == 0) {
			res_startDate = startDate;
		}

		count = 0; // count 초기화

		///////////////////////////////////////////////////////////////////////////////////////////////////////
		// depart_region을 원하는 형식으로 뽑아오기 위한 과정
		temp = depart_region.toCharArray();

		String res_depart_region = "";

		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;

				if (count >= 2) {
					break;
				}
				res_depart_region += temp[i];

			} else {
				res_depart_region += temp[i];
			}
		}

		if (count == 0) {
			res_depart_region = depart_region;
		}

		count = 0; // count 초기화
		/////////////////////////////////////////////////////////////////////////////////////////////////////

		//첫번째 티켓에 대한 정보를 dto로 받아서 map으로 저장후 ticketlistround.jsp에서 resForm.jsp로 전달한다.
		HashMap<String, Object> FirstInfo = new HashMap<String, Object>();
		FirstInfo.put("route_depart_region", dto.getRoute_depart_region());
		FirstInfo.put("route_arrive_region", dto.getRoute_arrive_region());
		FirstInfo.put("route_depart_day", dto.getRoute_depart_day());
		FirstInfo.put("depart_time", dto.getDepart_time());
		FirstInfo.put("arrive_time", dto.getArrive_time());
		FirstInfo.put("airline_name", dto.getAirline_name());
		FirstInfo.put("airplane_model", dto.getAirplane_model());
		FirstInfo.put("flight_name", dto.getFlight_name());
		FirstInfo.put("route_estimate_time", dto.getRoute_estimate_time());
		FirstInfo.put("airline_site", dto.getAirline_site());
		FirstInfo.put("route_distance", dto.getRoute_distance());
		FirstInfo.put("route_charge", dto.getRoute_charge());
		FirstInfo.put("route_type", dto.getRoute_type());
		FirstInfo.put("plane_code", dto.getPlane_code());
		
		//requestScope의 FirstInfo영역에 FirstInfo을 저장
		mav.addObject("FirstInfo", FirstInfo);
				
		//첫번째 티켓과 두번째 티켓(왕복에 대한 경우)에서 처음 사용자가 지정한 정보를 dto로 map으로 저장후 ticketlistround.jsp에서 resForm.jsp로 전달한다.
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		// 항공사별 검색 정렬 옵션
		map.put("depart_region", res_depart_region); // 출발지역
		map.put("arrive_region", arrive_region); // 도착지역
		map.put("startDate", res_startDate); // 가는날
		map.put("endDate", endDate); // 오는날
		map.put("airline_name", res_airline_name); // 항공사명
		map.put("searchKey", pv.getSearchKey()); // 정렬옵션

		// 결제UI까지 넘어가야할 옵션
		map.put("flighttype", flighttype); // 왕복,편도 구분옵션
		map.put("adult", adult); // 성인(명)
		map.put("children", children); // 아동(명)
		map.put("laporseat", laporseat); // 만1세미만 구분옵션
		
		int total = Integer.parseInt(adult) + Integer.parseInt(children);
		//성인과 아이수를 더한 총인원수를 저장(항공사별 항공기 좌석등급에 대한 좌석수를 불러올 때 해당인원을 수용할 수 있는 좌석이 아니면 보여주지 않기 위한 제어변수)
		map.put("total", total);

		// requestScope의 map영역에 map을 저장
		mav.addObject("map", map);

		// 현재 테이블에 저장되어 있는 레코드 수 -> 레코드 수를 기준으로 페이지 블록 처리를 하기 위해서
		int totalRecord = service.countProcess(map);

		if (totalRecord >= 1) {
			if (pv.getCurrentPage() == 0) { // Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
			} else { // 그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}

			pdto = new TicketPageDTO(currentPage, totalRecord, flighttype, res_startDate, endDate, adult, children, laporseat, res_depart_region, arrive_region,
					res_airline_name, pv.getSearchKey());
			mav.addObject("pv", pdto);

			// 페이징기법을 처리할때마다 list값을 받아와서 아래와 같이 조인하여 원하는 값을 받아오도록 한다.
			List<TicketDTO> ticketList = service.listProcess(pdto);

			// route table의 plane_code열로 plane table의 flight_name과 airplane_model열을 추출.
			for (int i = 0; i < ticketList.size(); i++) {
				ticketList.get(i).setFlight_name(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getFlight_name());
				ticketList.get(i).setAirplane_model(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getAirplane_model());
				
				HashMap<String, Object> seatOption = new HashMap<String, Object>();
				seatOption.put("plane_code", ticketList.get(i).getPlane_code());
				seatOption.put("grade_code", seat_option);
				
				ticketList.get(i).setSeat_capacity(planemodelservice.find_Seat_Method_Process(seatOption)); //plane_code와 seat_grade에 해당하는 좌석수가 리스트 돌아갈때마다 담긴다.
			}

			/*
			 * 주의사항! tns오류가 난다면! 
			 * SQL> conn sys/a1234 as sysdba 
			 * SQL> alter system set processes=500 scope=spfile; 
			 * SQL> shut immediate; //마운트해제 
			 * SQL> startup //마운트
			 * 재시동
			 */

			mav.addObject("aList", ticketList); // route table과 plane table을 조인한 List를 aList영역에 저장.
		}

		mav.addObject("dto", dto); //항공사 11개 검색 필터나 정렬 필터를 검색할때마다 dto를 .jsp로 계속해서 넘겨준다.
		
		if(dto.getRoute_type().equals("경유")) {
			mav.addObject("stop_code", dto.getStopover_code());
		}
		
		mav.addObject("seat_grade", seat_grade);
		mav.setViewName("view/ticketlistround");
		return mav;
	}

	// 왕복일 때 (항공사 11개 필터링 과정)
	@RequestMapping(value = "ticketlistroundswap1.do")
	public ModelAndView TicketSearchRoundSwap1Process(String flighttype, String depart_region, String arrive_region,
			String startDate, String endDate, String adult, String children, String laporseat, String airline_name,
			TicketPageDTO pv, TicketDTO dto, String seat_grade) {

		int count = 0;
		
		int seat_option = 0;
		
		if(seat_grade.equals("일반석")) {
			seat_option = 3;
		}else if(seat_grade.equals("비즈니스석")) {
			seat_option = 2;
		}else if(seat_grade.equals("일등석")) {
			seat_option = 1;
		}
		
		int item = 0;

		ModelAndView mav = new ModelAndView();

		if (airline_name == null) {
			airline_name = "all";
		}

		if (pv.getAirline_name() == null) {
			pv.setAirline_name("all");
		} else {
			pv.setAirline_name(airline_name);
		}

		if (pv.getSearchKey() == null) {
			pv.setSearchKey("all");
		}

		/////////////////////////////////////////////////////////////////////////////////////////////////////
		// airline_name을 원하는 형식으로 뽑아오기 위한 과정
		char[] temp = airline_name.toCharArray();

		String res_airline_name = "";
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;
			}
			if (count >= 1) {
				item = i;
				break;
			}
		}

		for (int i = item + 1; i < temp.length; i++) {
			res_airline_name += temp[i];
		}

		if (count == 0) {
			res_airline_name = airline_name;
		}

		count = 0; // count 초기화

		/////////////////////////////////////////////////////////////////////////////////////////////////////
		// startDate를 원하는 형식으로 뽑아오기 위한 과정(bxslider에서 항공사클릭시 startDate가 두번 넘어가서 아래의 로직으로 자르는 것이 필요.)
		///////////////////////////////////////////////////////////////////////////////////////////////////// 
		
		temp = startDate.toCharArray();

		String res_startDate = "";
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;
			} else {
				res_startDate += temp[i];
			}
			if (count >= 1) {
				break;
			}
		}

		if (count == 0) {
			res_startDate = startDate;
		}

		count = 0; // count 초기화

		///////////////////////////////////////////////////////////////////////////////////////////////////////
		// depart_region을 원하는 형식으로 뽑아오기 위한 과정
		temp = depart_region.toCharArray();

		String res_depart_region = "";

		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;

				if (count >= 2) {
					break;
				}
				res_depart_region += temp[i];

			} else {
				res_depart_region += temp[i];
			}
		}

		if (count == 0) {
			res_depart_region = depart_region;
		}

		count = 0; // count 초기화
		/////////////////////////////////////////////////////////////////////////////////////////////////////

		//첫번째 티켓에 대한 정보를 dto로 받아서 map으로 저장후 ticketlistround.jsp에서 resForm.jsp로 전달한다.
		HashMap<String, Object> FirstInfo = new HashMap<String, Object>();
		FirstInfo.put("route_depart_region", dto.getRoute_depart_region());
		FirstInfo.put("route_arrive_region", dto.getRoute_arrive_region());
		FirstInfo.put("route_depart_day", dto.getRoute_depart_day());
		FirstInfo.put("depart_time", dto.getDepart_time());
		FirstInfo.put("arrive_time", dto.getArrive_time());
		FirstInfo.put("airline_name", dto.getAirline_name());
		FirstInfo.put("airplane_model", dto.getAirplane_model());
		FirstInfo.put("flight_name", dto.getFlight_name());
		FirstInfo.put("route_estimate_time", dto.getRoute_estimate_time());
		FirstInfo.put("airline_site", dto.getAirline_site());
		FirstInfo.put("route_distance", dto.getRoute_distance());
		FirstInfo.put("route_charge", dto.getRoute_charge());
		FirstInfo.put("route_type", dto.getRoute_type());
				
		//requestScope의 FirstInfo영역에 FirstInfo을 저장
		mav.addObject("FirstInfo", FirstInfo);
						
		//첫번째 티켓과 두번째 티켓(왕복에 대한 경우)에서 처음 사용자가 지정한 정보를 dto로 map으로 저장후 ticketlistround.jsp에서 resForm.jsp로 전달한다.
		HashMap<String, Object> map = new HashMap<String, Object>();

		//출발지역과 도착지역은 액션이 걸릴때마다 바뀌어 주어야 하고 가는날과 오는날 또한 마찬가지이다.
		String strtemp = res_depart_region;
		res_depart_region = arrive_region;
		arrive_region = strtemp;
		
		strtemp = res_startDate;
		res_startDate = endDate;
		endDate = strtemp;
		
		// 항공사별 검색 정렬 옵션 
		map.put("depart_region", res_depart_region); // 출발지역
		map.put("arrive_region", arrive_region); // 도착지역
		map.put("startDate", res_startDate); // 가는날
		map.put("endDate", endDate); // 오는날
		map.put("airline_name", res_airline_name); // 항공사명
		map.put("searchKey", pv.getSearchKey()); // 정렬옵션

		// 결제UI까지 넘어가야할 옵션
		map.put("flighttype", flighttype); // 왕복,편도 구분옵션
		map.put("adult", adult); // 성인(명)
		map.put("children", children); // 아동(명)
		map.put("laporseat", laporseat); // 만1세미만 구분옵션

		int total = Integer.parseInt(adult) + Integer.parseInt(children);
		//성인과 아이수를 더한 총인원수를 저장(항공사별 항공기 좌석등급에 대한 좌석수를 불러올 때 해당인원을 수용할 수 있는 좌석이 아니면 보여주지 않기 위한 제어변수)
		map.put("total", total);
		
		// requestScope의 map영역에 map을 저장
		mav.addObject("map", map);

		// 현재 테이블에 저장되어 있는 레코드 수 -> 레코드 수를 기준으로 페이지 블록 처리를 하기 위해서
		int totalRecord = service.countProcess(map);

		if (totalRecord >= 1) {
			if (pv.getCurrentPage() == 0) { // Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
			} else { // 그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}

			pdto = new TicketPageDTO(currentPage, totalRecord, flighttype, res_startDate, endDate, adult, children, laporseat, res_depart_region, arrive_region,
					res_airline_name, pv.getSearchKey());
			mav.addObject("pv", pdto);

			// 페이징기법을 처리할때마다 list값을 받아와서 아래와 같이 조인하여 원하는 값을 받아오도록 한다.
			List<TicketDTO> ticketList = service.listProcess(pdto);

			// route table의 plane_code열로 plane table의 flight_name과 airplane_model열을 추출.
			for (int i = 0; i < ticketList.size(); i++) {
				ticketList.get(i).setFlight_name(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getFlight_name());
				ticketList.get(i).setAirplane_model(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getAirplane_model());
				
				HashMap<String, Object> seatOption = new HashMap<String, Object>();
				seatOption.put("plane_code", ticketList.get(i).getPlane_code());
				seatOption.put("grade_code", seat_option);
				
				ticketList.get(i).setSeat_capacity(planemodelservice.find_Seat_Method_Process(seatOption)); //plane_code와 seat_grade에 해당하는 좌석수가 리스트 돌아갈때마다 담긴다.
			}

			/*
			 * 주의사항! tns오류가 난다면! 
			 * SQL> conn sys/a1234 as sysdba 
			 * SQL> alter system set processes=500 scope=spfile; 
			 * SQL> shut immediate; //마운트해제 SQL> startup //마운트
			 * 재시동
			 */

			mav.addObject("aList", ticketList); // route table과 plane table을 조인한 List를 aList영역에 저장.
		}

		mav.addObject("dto", dto); //항공사 11개 검색 필터나 정렬 필터를 검색할때마다 dto를 .jsp로 계속해서 넘겨준다.
		
		if(dto.getRoute_type().equals("경유")) {
			mav.addObject("stop_code", dto.getStopover_code());
		}
		
		mav.addObject("seat_grade", seat_grade);
		mav.setViewName("view/ticketlistround");
		return mav;
	}

	// 왕복일 때 (검색 정렬 필터 과정)
	@RequestMapping(value = "ticketlistroundswap2.do")
	public ModelAndView TicketSearchRoundSwap2Process(String flighttype, String depart_region, String arrive_region,
			String startDate, String endDate, String adult, String children, String laporseat, String airline_name,
			TicketPageDTO pv, TicketDTO dto, String seat_grade) {

		int count = 0;
		int seat_option = 0;
		
		if(seat_grade.equals("일반석")) {
			seat_option = 3;
		}else if(seat_grade.equals("비즈니스석")) {
			seat_option = 2;
		}else if(seat_grade.equals("일등석")) {
			seat_option = 1;
		}
		
		int item = 0;

		ModelAndView mav = new ModelAndView();

		if (airline_name == null) {
			airline_name = "all";
		}

		if (pv.getAirline_name() == null) {
			pv.setAirline_name("all");
		} else {
			pv.setAirline_name(airline_name);
		}

		if (pv.getSearchKey() == null) {
			pv.setSearchKey("all");
		}

		/////////////////////////////////////////////////////////////////////////////////////////////////////
		// airline_name을 원하는 형식으로 뽑아오기 위한 과정
		char[] temp = airline_name.toCharArray();

		String res_airline_name = "";
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;
			}
			if (count >= 1) {
				item = i;
				break;
			}
		}

		for (int i = item + 1; i < temp.length; i++) {
			res_airline_name += temp[i];
		}

		if (count == 0) {
			res_airline_name = airline_name;
		}

		count = 0; // count 초기화

		/////////////////////////////////////////////////////////////////////////////////////////////////////
		// startDate를 원하는 형식으로 뽑아오기 위한 과정(bxslider에서 항공사클릭시 startDate가 두번 넘어가서 아래의 로직으로
		///////////////////////////////////////////////////////////////////////////////////////////////////// 자르는
		
		temp = startDate.toCharArray();

		String res_startDate = "";
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;
			} else {
				res_startDate += temp[i];
			}
			if (count >= 1) {
				break;
			}
		}

		if (count == 0) {
			res_startDate = startDate;
		}

		count = 0; // count 초기화

		///////////////////////////////////////////////////////////////////////////////////////////////////////
		// depart_region을 원하는 형식으로 뽑아오기 위한 과정
		temp = depart_region.toCharArray();

		String res_depart_region = "";

		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == ',') {
				count++;

				if (count >= 2) {
					break;
				}
				res_depart_region += temp[i];

			} else {
				res_depart_region += temp[i];
			}
		}

		if (count == 0) {
			res_depart_region = depart_region;
		}

		count = 0; // count 초기화
		/////////////////////////////////////////////////////////////////////////////////////////////////////
		
		//첫번째 티켓에 대한 정보를 dto로 받아서 map으로 저장후 ticketlistround.jsp에서 resForm.jsp로 전달한다.
		HashMap<String, Object> FirstInfo = new HashMap<String, Object>();
		FirstInfo.put("route_depart_region", dto.getRoute_depart_region());
		FirstInfo.put("route_arrive_region", dto.getRoute_arrive_region());
		FirstInfo.put("route_depart_day", dto.getRoute_depart_day());
		FirstInfo.put("depart_time", dto.getDepart_time());
		FirstInfo.put("arrive_time", dto.getArrive_time());
		FirstInfo.put("airline_name", dto.getAirline_name());
		FirstInfo.put("airplane_model", dto.getAirplane_model());
		FirstInfo.put("flight_name", dto.getFlight_name());
		FirstInfo.put("route_estimate_time", dto.getRoute_estimate_time());
		FirstInfo.put("airline_site", dto.getAirline_site());
		FirstInfo.put("route_distance", dto.getRoute_distance());
		FirstInfo.put("route_charge", dto.getRoute_charge());
		FirstInfo.put("route_type", dto.getRoute_type());
						
		//requestScope의 FirstInfo영역에 FirstInfo을 저장
		mav.addObject("FirstInfo", FirstInfo);
								
		//첫번째 티켓과 두번째 티켓(왕복에 대한 경우)에서 처음 사용자가 지정한 정보를 dto로 map으로 저장후 ticketlistround.jsp에서 resForm.jsp로 전달한다.
		HashMap<String, Object> map = new HashMap<String, Object>();

		//출발지역과 도착지역은 액션이 걸릴때마다 바뀌어 주어야 하고 가는날과 오는날 또한 마찬가지이다.
		String strtemp = res_depart_region;
		res_depart_region = arrive_region;
		arrive_region = strtemp;
		
		strtemp = res_startDate;
		res_startDate = endDate;
		endDate = strtemp;
		
		// 항공사별 검색 정렬 옵션
		map.put("depart_region", res_depart_region); // 출발지역
		map.put("arrive_region", arrive_region); // 도착지역
		map.put("startDate", res_startDate); // 가는날
		map.put("endDate", endDate); // 오는날
		map.put("airline_name", res_airline_name); // 항공사명
		map.put("searchKey", pv.getSearchKey()); // 정렬옵션

		// 결제UI까지 넘어가야할 옵션
		map.put("flighttype", flighttype); // 왕복,편도 구분옵션
		map.put("adult", adult); // 성인(명)
		map.put("children", children); // 아동(명)
		map.put("laporseat", laporseat); // 만1세미만 구분옵션

		int total = Integer.parseInt(adult) + Integer.parseInt(children);
		//성인과 아이수를 더한 총인원수를 저장(항공사별 항공기 좌석등급에 대한 좌석수를 불러올 때 해당인원을 수용할 수 있는 좌석이 아니면 보여주지 않기 위한 제어변수)
		map.put("total", total);
		
		// requestScope의 map영역에 map을 저장
		mav.addObject("map", map);

		// 현재 테이블에 저장되어 있는 레코드 수 -> 레코드 수를 기준으로 페이지 블록 처리를 하기 위해서
		int totalRecord = service.countProcess(map);

		if (totalRecord >= 1) {
			if (pv.getCurrentPage() == 0) { // Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
			} else { // 그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}

			pdto = new TicketPageDTO(currentPage, totalRecord, flighttype, res_startDate, endDate, adult, children, laporseat, res_depart_region, arrive_region,
					res_airline_name, pv.getSearchKey());
			mav.addObject("pv", pdto);

			// 페이징기법을 처리할때마다 list값을 받아와서 아래와 같이 조인하여 원하는 값을 받아오도록 한다.
			List<TicketDTO> ticketList = service.listProcess(pdto);

			// route table의 plane_code열로 plane table의 flight_name과 airplane_model열을 추출.
			for (int i = 0; i < ticketList.size(); i++) {
				ticketList.get(i).setFlight_name(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getFlight_name());
				ticketList.get(i).setAirplane_model(
						planeservice.searchMethodProcess(ticketList.get(i).getPlane_code()).getAirplane_model());
				
				HashMap<String, Object> seatOption = new HashMap<String, Object>();
				seatOption.put("plane_code", ticketList.get(i).getPlane_code());
				seatOption.put("grade_code", seat_option);
				
				ticketList.get(i).setSeat_capacity(planemodelservice.find_Seat_Method_Process(seatOption)); //plane_code와 seat_grade에 해당하는 좌석수가 리스트 돌아갈때마다 담긴다.
			}

			/*
			 * 주의사항! tns오류가 난다면! 
			 * SQL> conn sys/a1234 as sysdba 
			 * SQL> alter system set processes=500 scope=spfile; 
			 * SQL> shut immediate; //마운트해제 
			 * SQL> startup //마운트
			 * 재시동
			 */

			mav.addObject("aList", ticketList); // route table과 plane table을 조인한 List를 aList영역에 저장.
		}

		mav.addObject("dto", dto); //항공사 11개 검색 필터나 정렬 필터를 검색할때마다 dto를 .jsp로 계속해서 넘겨준다.
		
		if(dto.getRoute_type().equals("경유")) {
			mav.addObject("stop_code", dto.getStopover_code());
		}
		
		mav.addObject("seat_grade", seat_grade);
		mav.setViewName("view/ticketlistround");
		return mav;
	}
}
