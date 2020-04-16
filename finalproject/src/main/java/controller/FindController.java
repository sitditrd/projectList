package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import dto.MemberDTO;
import service.MemberService;

//http://localhost/myfinalproject/find.do
@Controller
public class FindController {
	private MemberService service;
	
	public void setService(MemberService service) {
		this.service = service;
	}
	
	public FindController() {
		
	}
	
	@RequestMapping(value="/find.do")
	public String FindIdPwdProcess() {
		return "view/find";
	}
	
	@RequestMapping(value = "/gofind.do")
	public @ResponseBody MemberDTO GoFindProcess(String username, String phone) { 
		MemberDTO dto = new MemberDTO();
		
		dto.setMember_name(username);
		dto.setMember_tel(phone);
		
		return service.searchidProcess(dto);
	}
	
	@RequestMapping(value = "/gocheck.do")
	public @ResponseBody MemberDTO GoCheckProcess(String userId, String userEmail) { 
		MemberDTO dto = new MemberDTO();
		
		dto.setMember_id(userId);
		dto.setMember_email(userEmail);
		
		return service.searchPwdProcess(dto);
	}
}
