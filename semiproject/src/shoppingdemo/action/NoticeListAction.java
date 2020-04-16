package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.NoticeDAO;
import shoppingdemo.dto.PageDTO;

public class NoticeListAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		NoticeDAO dao = NoticeDAO.getInstance();
		int cnt = dao.rowTotalCount();

		if (cnt > 0) {

			PageDTO pdto = new PageDTO(currentPage, cnt); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", dao.listMethod(pdto));
		}

	}// end execute()

}// end class