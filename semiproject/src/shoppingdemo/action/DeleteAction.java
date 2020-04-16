package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.CartDAO;

public class DeleteAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk"); 
		int index = Integer.parseInt(req.getParameter("index"));
		
		CartDAO dao = CartDAO.getInstance();
		dao.SuperDeleteMethod(index);
	}
}
