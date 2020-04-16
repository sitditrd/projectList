package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.ItemDAO;

public class ListDetailAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String category_name = req.getParameter("category_name");
		int item_id = Integer.parseInt(req.getParameter("item_id"));
		String item_name = req.getParameter("item_name");
		String item_price = req.getParameter("item_price");

		ItemDAO dao = ItemDAO.getInstance();
		
		//dto로 setAttribute에 저장
		req.setAttribute("viewList", dao.viewMethod(item_name));
		//변수로 setAttribute에 저장
		req.setAttribute("category", category_name);
		//변수로 setAttribute에 저장
		req.setAttribute("item_id", item_id);
		
	}// end execute()
	
}// end class
