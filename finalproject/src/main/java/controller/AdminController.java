package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dto.AdminDTO;
import service.AdminService;

//http://localhost/myfinalproject/admin.do
@Controller
public class AdminController {
	
	private AdminService service;

	public void setService(AdminService service) {
		this.service = service;
	}
	
	public AdminController() {
		
	}
	
	@RequestMapping(value="/admin.do")
	public String AdminLoginProcess() {
		return "view/adminlogin";
	}
	
	@RequestMapping(value="/adminsignin.do") 
	public String AdminSignInProces(HttpServletRequest req, HttpServletResponse resp) {
		AdminDTO dto = new AdminDTO();
		
		String admin_id = req.getParameter("admin_id");
		String admin_password = req.getParameter("admin_password");
		
		dto.setAdmin_id(admin_id);
		dto.setAdmin_password(admin_password);
		
		int cnt = service.adminCheckProcess(dto);
		
		HttpSession session = req.getSession();
		
		if(cnt == 1) {
			session.setAttribute("adminOk", admin_id);
			session.setMaxInactiveInterval(30*60); //세션 최대허용시간 설정 - 30분 (사용자가 일정한 시간 동안 요청이 없으면 세션을 제거)
			session.setAttribute("chk", 1);
			return "view/home";
		}else {
			session.setAttribute("chk", 2);
		}
	
		return "view/adminlogin";
	}
	
}
