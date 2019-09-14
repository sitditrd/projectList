package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.controller.ShopController;
import shoppingdemo.dao.CartDAO;
import shoppingdemo.dao.OrderDAO;
import shoppingdemo.dto.ListPageDTO;

public class OrderViewAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk"); //getAttribute는 Object로 받는다. 따라서 다운캐스팅이 필요 o
		
		OrderDAO order = OrderDAO.getInstance();
		
		//라스트 페이징 기법 적용
		String pageNum = req.getParameter("pageNum");
		
		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		int cnt = order.rowTotalCount(member_id);

		if (cnt > 0) {
			
			ListPageDTO pdto = new ListPageDTO(currentPage, cnt); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", order.listMethod(pdto, member_id));
		}
		
	}
}
