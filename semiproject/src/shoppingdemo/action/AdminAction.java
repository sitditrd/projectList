package shoppingdemo.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.MemberDAO;
import shoppingdemo.dto.MemberDTO;

public class AdminAction {

public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
		String admin_id = req.getParameter("admin_id");
		String admin_password = req.getParameter("admin_password");
		
		MemberDTO dto = new MemberDTO();
		
		dto.setAdmin_id(admin_id);
		dto.setAdmin_password(admin_password); 
		
		MemberDAO dao = MemberDAO.getInstance();
		
		boolean chk = dao.adminChk(dto);
		
		HttpSession session = req.getSession();
		
		if(chk) { 
			session.setAttribute("adminOk", admin_id); //Client를 구분하는 것을 fid로 구분하겠다.
			session.setMaxInactiveInterval(30*60); //세션 최대허용시간 설정 - 30분 (사용자가 일정한 시간 동안 요청이 없으면 세션을 제거)
			session.setAttribute("chk", 1); 
			resp.sendRedirect("main.do"); 
		} else {
			session.setAttribute("chk", 2);
			resp.sendRedirect("admin.do");
		}
	}// end execute()
	
}// end class
