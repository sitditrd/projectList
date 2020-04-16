package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.CartDAO;

public class TotalBuyAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk"); //getAttribute는 Object로 받는다. 따라서 다운캐스팅이 필요 o
		
		CartDAO cart = CartDAO.getInstance();
		//cart table에 있는 값을 뿌리는 작업
		req.setAttribute("aList", cart.ViewMethod(member_id));	
	}
}
