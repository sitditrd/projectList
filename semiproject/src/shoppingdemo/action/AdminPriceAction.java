package shoppingdemo.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.AdminPriceDAO;
import shoppingdemo.dao.OrderDAO;
import shoppingdemo.dto.AdminPageDTO;
import shoppingdemo.dto.OrderDTO;
import shoppingdemo.dto.OrderDetailDTO;

public class AdminPriceAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		List<OrderDTO> list = new ArrayList<OrderDTO>();
		
		AdminPriceDAO dao = AdminPriceDAO.getInstance();
		
		list=dao.AdminCheckOrder();
		
		int res_price=0;
		
		for(int i=0; i<list.size(); i++) {
			if(!(list.get(i).getState().equals("취소완료"))) 
				res_price += list.get(i).getList_total_price();
		}
		
		req.setAttribute("total_price", res_price);
		
		//라스트 페이징 기법 적용
		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		int cnt = dao.rowTotalCount();

		if (cnt > 0) {
			AdminPageDTO pdto = new AdminPageDTO(currentPage, cnt); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", dao.listMethod(pdto));
		}
		
	}//end execute()
}
