package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.CartDAO;

public class OnlyBuyAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		
		String item_name = req.getParameter("name");
		String item_size = req.getParameter("size");
		
		//가격*개수 = 총가격
		int item_amount = Integer.parseInt(req.getParameter("amount"));
		
		int temp_item_price = Integer.parseInt(req.getParameter("price"))*item_amount;
		String item_price = String.valueOf(temp_item_price);
		
		int item_id = Integer.parseInt(req.getParameter("item_id"));
		String category_id = req.getParameter("category_id");
		
		CartDAO cart = CartDAO.getInstance();
		cart.InsertMethod(member_id, item_size, item_name, item_price, item_id, category_id, item_amount);
		
		
		req.setAttribute("dto", cart.BuyMethod(member_id, item_name, item_size, item_amount));
	}
}
