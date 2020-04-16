package shoppingdemo.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.controller.ShopController;
import shoppingdemo.dao.MemberDAO;
import shoppingdemo.dto.MemberDTO;


public class LoginAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		String fid = req.getParameter("id");
		String fpass = req.getParameter("password");
		MemberDTO dto = new MemberDTO();
		dto.setMember_id(fid);
		dto.setMember_pwd(fpass); 
		MemberDAO dao = MemberDAO.getInstance();
		int cnt = dao.memCheck(dto);
		
		//session객체값을 servlet에서 받아오려면 request객체를 이용해서 받아와야 한다. (jsp에서는 session.으로 접근하면 된다)
		//http 프로토콜은 client와 server의 연결이 한번 이루어지고 나면 연결이 끊어지기 때문에 연결을 지속시키는 session영역에 저장을 해야한다.
		//Client와 server의 연결을 지속시킬 목적으로 사용
		
		HttpSession session = req.getSession();
		
		if(cnt == 1) { //1이 넘었단 소리는 DB에 fid와 fpass가 일치하는 정보가 있다는 소리이므로 회원이라는 의미이다.
			ShopController.member_code = dao.memberCode(dto);
			
			session.setAttribute("logOk", fid); //Client를 구분하는 것을 fid로 구분하겠다.
			session.setAttribute("member_code", ShopController.member_code);
			session.setMaxInactiveInterval(30*60); //세션 최대허용시간 설정 - 30분 (사용자가 일정한 시간 동안 요청이 없으면 세션을 제거)
			session.setAttribute("chk", 1); 
			resp.sendRedirect("main.do"); 
		} else {
			//회원이 아니면
			session.setAttribute("chk", 2);
			resp.sendRedirect("login.do");
		}
	}
}
