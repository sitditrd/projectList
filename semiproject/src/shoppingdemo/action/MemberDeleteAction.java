package shoppingdemo.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.MemberDAO;
import shoppingdemo.dao.OrderDAO;
import shoppingdemo.dto.MemberDTO;

public class MemberDeleteAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String) session.getAttribute("logOk");
		
		MemberDAO dao = MemberDAO.getInstance();
		OrderDAO order = OrderDAO.getInstance();
		
		//Member table에서 삭제
		dao.MemberDelete(member_id);
		
		//기존의 사용자의 물품 구매 List table삭제
		order.ListTotalDeleteMethod(member_id);
		
		//기존의 사용자의 장바구니 cart table삭제
		order.BasketTotalDeleteMethod(member_id);
		
		//세션영역 비활성화
		session.invalidate();
	}
}
