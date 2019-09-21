package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import dto.MemberDTO;
import service.MemberService;

//http://localhost/myfinalproject/login.do
@Controller
public class LoginController {
	private MemberService service;
	
	public void setService(MemberService service) {
		this.service = service;
	}
	
	public LoginController() {
		
	}
	
	@RequestMapping("/login.do") 
	public String LoginProcess() {
		return "view/loginform";
	}
	
	@RequestMapping("/signIn.do")
	public String SignInProcess(String returnUrl, HttpServletRequest req, HttpServletResponse resp) {
		MemberDTO dto = new MemberDTO();
		
		String user_id = req.getParameter("user_id");
		String user_pw = req.getParameter("user_pw");
		
		dto.setMember_id(user_id);
		dto.setMember_pwd(user_pw);
		
		int cnt = service.memCheckProcess(dto);
		
		HttpSession session = req.getSession();
		
		if(cnt == 1) {
			session.setAttribute("logOk", user_id);
			session.setMaxInactiveInterval(30*60); //세션 최대허용시간 설정 - 30분 (사용자가 일정한 시간 동안 요청이 없으면 세션을 제거)
			session.setAttribute("chk", 1);

			if(returnUrl != "") {
				return "redirect:/"+returnUrl;
			}else {
				return "redirect:/home.do";
			}
		}else {
			session.setAttribute("chk", 2);
			return "redirect:/login.do";
		}
	}
	
	@RequestMapping("/logout.do")
	public String LogoutProcess(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		
		if (session.getAttribute("logOk") != null) {
			session.invalidate(); // 세션 연결 종료
		}else if (session.getAttribute("adminOk") != null) {
			session.invalidate(); // 세션 연결 종료
		}
		
		return "view/home";
	}
	
	@RequestMapping(value = "/idcheck.do")
	public @ResponseBody int IdCheckProcess(String user_id, String returnUrl) { //@ResponseBody 어노테이션은 메소드에서 return 값을 json으로 리턴한다.
		return service.searchProcess(user_id);
	}
	
	@RequestMapping(value = "reidcheck.do") 
	public @ResponseBody int ReIdCheckProcess(String user_id, HttpServletRequest req) { //@ResponseBody 어노테이션은 메소드에서 return 값을 json으로 리턴한다.
		HttpSession session = req.getSession();
		String id = (String)session.getAttribute("logOk");
		String id2 = (String)session.getAttribute("adminOk");
		
		int result = 0;
		
		if(id != null) { //일반 사용자의 아이디값 비교할 때 
			if(id.equals(user_id)) {
				result = 1;
			}else {
				result = 0;
			}
		}else if(id2 != null) { //관리자의 아이디값 비교할 때
			if(id2.equals(user_id)) {
				result = 1;
			}else {
				result = 0;
			}
		}
		
		return result;
	}
	
	@RequestMapping(value = "reidcheck2.do") 
	public @ResponseBody int ReIdCheckProcess2(String user_id, HttpServletRequest req) { //@ResponseBody 어노테이션은 메소드에서 return 값을 json으로 리턴한다.
		HttpSession session = req.getSession();
		String id = (String)session.getAttribute("adminOk");
		
		if(id != null) {
			return 1;
		}else {
			return 0;
		}
	}
}
