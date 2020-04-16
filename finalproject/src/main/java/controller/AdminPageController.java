package controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import dto.MemberDTO;
import dto.ReserveDTO;
import dto.ReservePageDTO;
import service.CancelService;
import service.MemberService;
import service.ReserveService;

@Controller
public class AdminPageController {
	static int totalPages;
	static int current;
	private int currentPage;
	
	private ReserveService rservice;
	private MemberService mservice;
	private ReservePageDTO rpdto;
	private CancelService cancelservice;
	
	public AdminPageController() {
	}
	
	public void setRservice(ReserveService rservice) {
		this.rservice = rservice;
	}
	
	public void setMservice(MemberService mservice) {
		this.mservice = mservice;
	}
	
	public void setCancelservice(CancelService cancelservice) {
		this.cancelservice = cancelservice;
	}
	
	@RequestMapping(value="/adminresList.do")
	public ModelAndView AdminResListProcess(ReservePageDTO pv) {
		int total_price = 0;
		
		ModelAndView mav = new ModelAndView();
		
		String reserve_state = "예약완료";
		HashMap<String, Object> map = new HashMap<String, Object>(); //오로지 예약완료에 대해서 페이징 기법을 사용
		map.put("reserve_state", reserve_state);
		
		int totalRecord=rservice.admincountProcess(map);
		System.out.println(totalRecord);
		
		if(totalRecord >= 1) {
			if(pv.getCurrentPage() == 0) { //Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
			} else { //그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}
			
			rpdto = new ReservePageDTO(currentPage, totalRecord, reserve_state);
			
			mav.addObject("pv", rpdto);
			mav.addObject("aList", rservice.adminlistMethodProcess(rpdto));
			
			List<ReserveDTO> aList = new ArrayList<ReserveDTO>();
			aList = rservice.adminfullListMethodProcess(reserve_state);
			for(int i=0; i<aList.size(); i++) {
				total_price += aList.get(i).getReserve_total_price();
			}
			
			mav.addObject("total_price", total_price);
		} 
		
		mav.addObject("size", totalRecord);
		mav.setViewName("adminpage/reslist");
		return mav;
	}
	
	@RequestMapping(value="/adminrescancelList.do")
	public ModelAndView ResCancelListProcess(ReservePageDTO pv) {
		int total_price = 0;
		ModelAndView mav = new ModelAndView();
		
		String reserve_state = "취소완료";
		HashMap<String, Object> map = new HashMap<String, Object>(); //오로지 취소완료에 대해서 페이징 기법을 사용
		map.put("reserve_state", reserve_state);
		
		int totalRecord=rservice.admincountProcess(map);
				
		if(totalRecord >= 1) {
			if(pv.getCurrentPage() == 0) { //Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
			} else { //그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}
			
			rpdto = new ReservePageDTO(currentPage, totalRecord, reserve_state);
			
			mav.addObject("pv", rpdto);
			mav.addObject("aList", rservice.adminlistMethodProcess(rpdto));
			
			List<ReserveDTO> aList = new ArrayList<ReserveDTO>();
			aList = rservice.adminfullListMethodProcess(reserve_state);
			for(int i=0; i<aList.size(); i++) {
				total_price += aList.get(i).getReserve_total_price();
			}
			
			mav.addObject("total_price", total_price);
		} 
		
		mav.addObject("size", totalRecord);
		mav.setViewName("adminpage/rescancellist");
		return mav;
	}
	
	//상세보기
	@RequestMapping(value="/adminresDetail.do")
	public ModelAndView ResDetailProcess(int reserve_code) {
		ModelAndView mav = new ModelAndView();
			
		String user_id = rservice.extractMemberIdMethodProcess(reserve_code);
		
		//탑승자에 대한 정보를 추출
		mav.addObject("passenger", rservice.detailMethodProcess(reserve_code));
			
		//지역 및 날짜 항공사 및 좌석에 대한 정보를 추출
		mav.addObject("reserveDetail2DTO", rservice.detailMethod2Process(reserve_code));
			
		//reserve table에 대한 정보를 추출
		ReserveDTO dto = rservice.resMethodProcess(reserve_code);
		mav.addObject("reserve", dto);
			
		//사용자(로그인한)에 대한 객체를 추출
		mav.addObject("contact", mservice.searchContentProcess(user_id));
			
		//선택한 reserve_code저장
		mav.addObject("reserve_code", reserve_code);
			
		mav.setViewName("adminpage/resdetail");
		return mav;
	}
		
	//상세보기
	@RequestMapping(value="/adminrescancelDetail.do")
	public ModelAndView ResDetail2Process(int reserve_code) {
		ModelAndView mav = new ModelAndView();
				
		String user_id = rservice.extractMemberIdMethodProcess(reserve_code);
		
		//탑승자에 대한 정보를 추출
		mav.addObject("passenger", rservice.detailMethodProcess(reserve_code));
			
		//지역 및 날짜 항공사 및 좌석에 대한 정보를 추출
		mav.addObject("reserveDetail2DTO", rservice.detailMethod2Process(reserve_code));
				
		//reserve table에 대한 정보를 추출
		ReserveDTO dto = rservice.resMethodProcess(reserve_code);
		mav.addObject("reserve", dto);
			
		//사용자(로그인한)에 대한 객체를 추출
		mav.addObject("contact", mservice.searchContentProcess(user_id));
			
		//선택한 reserve_code저장(취소버튼을 누를 시에 파라미터로 값을 전달하기 위해서)
		mav.addObject("reserve_code", reserve_code);
			
		//취소사유에 대한 글을 받아오는 작업
		String cancel_reason = cancelservice.ExtractCancelWhyMethodProcess(reserve_code);
		mav.addObject("cancel_reason", cancel_reason);
				
		mav.setViewName("adminpage/rescanceldetail");
		return mav;
	}
	
	@RequestMapping(value="/adminmemList.do") 
	public ModelAndView memListProcess(ReservePageDTO pv) {
		int total_member = 0;
		
		ModelAndView mav = new ModelAndView();
		
		int totalRecord=mservice.countProcess();
		
		if(totalRecord >= 1) {
			if(pv.getCurrentPage() == 0) { //Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
			} else { //그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}
			
			rpdto = new ReservePageDTO(currentPage, totalRecord);
			
			mav.addObject("pv", rpdto);
			mav.addObject("aList", mservice.pagememListMethodProcess(rpdto));
			
			List<MemberDTO> aList = new ArrayList<MemberDTO>();
			aList = mservice.memListMethodProcess();
			total_member = aList.size();
			mav.addObject("total_member", total_member);
		} 
		
		mav.addObject("size", totalRecord);
		mav.setViewName("adminpage/memlist");
		return mav;
	}
	
	@RequestMapping(value="/memlistdetail.do")
	public ModelAndView memDetailProcess(int member_code) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("dto", mservice.extractIdMethodProcess(member_code));
		mav.setViewName("adminpage/memlistdetail");
		return mav;
	}
}
