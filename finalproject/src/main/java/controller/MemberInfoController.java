package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import dto.MemberDTO;
import service.MemberService;

//http://localhost/myfinalproject/meminfo.do

@Controller
public class MemberInfoController {
	private MemberService service;
	
	public void setService(MemberService service) {
		this.service = service;
	}
	
	public MemberInfoController() {
		
	}
	
	@RequestMapping(value="/meminfo.do")
	public ModelAndView MemberInfoProcess(HttpServletRequest req) {
		ModelAndView mav = new ModelAndView();		
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		MemberDTO dto = service.searchContentProcess(member_id);
		mav.addObject("dto", dto);
		mav.setViewName("view/meminfo");	
		return mav;
	}
	
	@RequestMapping(value="/delete.do")
	public ModelAndView MemberDeleteProcess(HttpServletRequest req) {
		ModelAndView mav = new ModelAndView();		
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		
		service.reserveDeleteMethodProcess(member_id); //예약 테이블에서 사용자 정보 삭제(예약이 구현되면 실행한다.)
		service.deleteProcess(member_id); //Customer Table에서 사용자 기록 삭제
		
		//세션 연결종료
		if (session.getAttribute("logOk") != null) {
			session.invalidate(); // 세션 연결 종료
		}else if (session.getAttribute("adminOk") != null) {
			session.invalidate(); // 세션 연결 종료
		}
		
		mav.setViewName("view/home");
		return mav;
	}
	
	@RequestMapping(value="/modify.do")
	public ModelAndView MemberUpdateProcess(HttpServletRequest req, MemberDTO dto) {
		ModelAndView mav = new ModelAndView();
		
		service.updateProcess(dto); //Customer Table에서 사용자 정보 수정
		
		mav.setViewName("view/home");
		return mav;
	}
}
