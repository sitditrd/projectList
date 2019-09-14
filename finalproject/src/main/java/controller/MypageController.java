package controller;

import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import dto.ReserveDTO;
import dto.ReservePageDTO;
import service.CancelService;
import service.MemberService;
import service.ReserveService;

//http://localhost/myfinalproject/resList.do
@Controller
public class MypageController {
	static int totalPages;
	static int current;
	private int currentPage;
	
	private ReserveService rservice;
	private MemberService mservice;
	private ReservePageDTO rpdto;
	private CancelService cancelservice;
	
	public MypageController() {
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
	
	//예약리스트
	@RequestMapping(value="/resList.do")
	public ModelAndView ResListProcess(HttpServletRequest req, ReservePageDTO pv) {
		ModelAndView mav = new ModelAndView();
		
		HttpSession session=req.getSession();
		String member_id = (String) session.getAttribute("logOk");
		
		String reserve_state = "예약완료";
		HashMap<String, Object> map = new HashMap<String, Object>(); //오로지 예약완료에 대해서 페이징 기법을 사용
		map.put("member_id", member_id);
		map.put("reserve_state", reserve_state);
		
		int totalRecord=rservice.countProcess(map);
				
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
		} 
		
		mav.addObject("size", totalRecord);
		mav.setViewName("mypage/reslist");
		return mav;
	}
	
	//예약리스트
	@RequestMapping(value="/rescancelList.do")
	public ModelAndView ResCancelListProcess(HttpServletRequest req, ReservePageDTO pv) {
		ModelAndView mav = new ModelAndView();
		
		HttpSession session=req.getSession();
		String member_id = (String) session.getAttribute("logOk");
		
		String reserve_state = "취소완료";
		HashMap<String, Object> map = new HashMap<String, Object>(); //오로지 취소완료에 대해서 페이징 기법을 사용
		map.put("member_id", member_id);
		map.put("reserve_state", reserve_state);
		
		int totalRecord=rservice.countProcess(map);
				
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
		} 
		
		mav.addObject("size", totalRecord);
		mav.setViewName("mypage/rescancellist");
		return mav;
	}
	
	@RequestMapping(value="/cancel.do")
	public String CancelProcess(int reserve_code, String reason_cancel, HttpServletRequest req) {
		//reserve table의 state를 취소완료로 변경한다.
		rservice.ReserveUpdateMethodProcess(reserve_code);
		
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		
		//cancel table에 취소내역을 저장한다.
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("member_id", member_id);
		map.put("reserve_code", reserve_code);
		map.put("reason_cancel", reason_cancel);
		
		cancelservice.InsertCancelMethodProcess(map);
		
		return "redirect:/resList.do";
	}
	
	//상세보기
	@RequestMapping(value="/resDetail.do")
	public ModelAndView ResDetailProcess(int reserve_code, HttpServletRequest req) {
		ModelAndView mav = new ModelAndView();
		
		HttpSession session=req.getSession();
		String user_id = (String)session.getAttribute("logOk");
		
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
		
		mav.setViewName("mypage/resdetail");
		return mav;
	}
	
	//상세보기
	@RequestMapping(value="/rescancelDetail.do")
	public ModelAndView ResDetail2Process(int reserve_code, HttpServletRequest req) {
		ModelAndView mav = new ModelAndView();
			
		HttpSession session=req.getSession();
		String user_id = (String)session.getAttribute("logOk");
			
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
			
		mav.setViewName("mypage/rescanceldetail");
		return mav;
	}
}
