package shoppingdemo.action;

import java.io.IOException;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.MemberDAO;
import shoppingdemo.dto.MemberDTO;

public class ModifyAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		
		String member_pwd = req.getParameter("password");
		String member_tel = req.getParameter("phoneNum1") + "-" + req.getParameter("phoneNum2") + "-"
				+ req.getParameter("phoneNum3");
		String member_email = req.getParameter("email");
		String member_addr = req.getParameter("addr");

		MemberDAO dao = MemberDAO.getInstance();
		MemberDTO dto = new MemberDTO();

		dto.setMember_id(member_id);
		dto.setMember_pwd(member_pwd);
		dto.setMember_tel(member_tel);
		dto.setMember_email(member_email);
		dto.setMember_addr(member_addr);
		
		dao.updateMember(dto, member_id);
	}
}
