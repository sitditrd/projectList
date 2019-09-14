package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import dto.MemberDTO;
import service.MemberService;

//http://localhost/myfinalproject/register.do
@Controller
public class RegisterController {
	private MemberService service;
	
	public void setService(MemberService service) {
		this.service = service;
	}
	
	public RegisterController() {
		
	}
	
	@RequestMapping(value="/register.do") 
		public String RegisterProcess() {
			return "view/register";
	}
	
	@RequestMapping(value = "/signUp.do", method=RequestMethod.POST)
	public String SignUpProcess(HttpServletRequest req, HttpServletResponse resp) {
		MemberDTO dto = new MemberDTO();
		
		//Parameter값 변수지정
		String member_id = req.getParameter("id");
		String member_pwd = req.getParameter("password");
		String member_name = req.getParameter("name");
		String member_birth = req.getParameter("birth");
		String member_tel = req.getParameter("tel");
		String member_email = req.getParameter("email");
		String member_addr = req.getParameter("address");

		dto.setMember_id(member_id);
		dto.setMember_pwd(member_pwd);
		dto.setMember_name(member_name);
		dto.setMember_birth(member_birth);
		dto.setMember_tel(member_tel);
		dto.setMember_email(member_email);
		dto.setMember_addr(member_addr);

		//객체 저장
		service.insProcess(dto);
		
		return "view/home";
	}
}
