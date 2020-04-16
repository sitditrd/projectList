package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.MemberDAO;
import shoppingdemo.dto.MemberDTO;

public class ModifyViewAction {
	
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		MemberDAO dao = MemberDAO.getInstance();
		MemberDTO dto = dao.MemberView();
		
		String[] phoneNum = dto.getMember_tel().split("-");
		
		req.setAttribute("member_email", dto.getMember_email());
		req.setAttribute("member_addr", dto.getMember_addr());
		req.setAttribute("phoneNum1", phoneNum[0]);
		req.setAttribute("phoneNum2", phoneNum[1]);
		req.setAttribute("phoneNum3", phoneNum[2]);
		
	}// end execute()

}// end class