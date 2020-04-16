package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import shoppingdemo.dao.CartDAO;
import shoppingdemo.dto.CartPageDTO;
import shoppingdemo.dto.ListPageDTO;

public class BasketAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk"); //getAttribute는 Object으로 받는다. 따라서 다운캐스팅이 필요 o
		
		String item_size = req.getParameter("size"); //getParameter는 String만 받는다. 따라서 다운캐스팅 필요 x
		String item_name = req.getParameter("name");
		
		//가격*개수 = 총가격
		int temp_item_price = Integer.parseInt(req.getParameter("price"))*Integer.parseInt(req.getParameter("amount"));
		
		String item_price = String.valueOf(temp_item_price);
		int item_id = Integer.parseInt(req.getParameter("item_id"));
		String category_id = req.getParameter("category_id");
		int item_amount = Integer.parseInt(req.getParameter("amount"));
		
		//cart table에 Insert시키는 작업
		CartDAO cart = CartDAO.getInstance();
		cart.InsertMethod(member_id, item_size, item_name, item_price, item_id, category_id, item_amount);
		
		//라스트 페이징 기법 적용
		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		int cnt = cart.rowTotalCount(member_id);

		if (cnt > 0) {
					
			CartPageDTO pdto = new CartPageDTO(currentPage, cnt); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", cart.listMethod(pdto, member_id));
			req.setAttribute("size", cart.listMethod(pdto, member_id).size());
		}

	}
}
