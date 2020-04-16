package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.MemberDAO;
import shoppingdemo.dto.MemberDTO;

public class RegisterAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		// Parameter값 변수지정
		String member_id = req.getParameter("id");
		String member_pwd = req.getParameter("password");
		String member_name = req.getParameter("name");
		String member_birth = req.getParameter("year") + "/" + req.getParameter("month") + "/"
				+ req.getParameter("day");
		String member_tel = req.getParameter("phoneNum1") + "-" + req.getParameter("phoneNum2") + "-"
				+ req.getParameter("phoneNum3");
		String member_email = req.getParameter("email");
		String member_addr = req.getParameter("addr");

		MemberDAO dao = MemberDAO.getInstance();
		MemberDTO dto = new MemberDTO();

		// 객체 저장
		dto.setMember_id(member_id);
		dto.setMember_pwd(member_pwd);
		dto.setMember_name(member_name);
		dto.setMember_birth(member_birth);
		dto.setMember_tel(member_tel);
		dto.setMember_email(member_email);
		dto.setMember_addr(member_addr);

		dao.RegisterMethod(dto);

	}
}
