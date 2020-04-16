package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.ItemDAO;
import shoppingdemo.dto.PageDTO;

public class ListAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String pageNum = req.getParameter("pageNum");
		int cateId = Integer.parseInt(req.getParameter("categoryId")) + 1;

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		ItemDAO dao = ItemDAO.getInstance();
		int cnt = dao.rowTotalCount(null, cateId);

		if (cnt > 0) {

			PageDTO pdto = new PageDTO(currentPage, cnt); // 페이지 처리
			
			String cateName = dao.listMethod(pdto).get(0).getCategory_name();
			String transName = cateName.substring(0, 1).toUpperCase();
			transName += cateName.substring(1);
			
			req.setAttribute("pdto", pdto); 
			req.setAttribute("aList", dao.listMethod(pdto));
			req.setAttribute("category", transName);
			req.setAttribute("categoryId", cateId-1);
			
		}

	}// end execute()

}// end class
