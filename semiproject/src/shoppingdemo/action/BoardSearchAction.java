package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.BoardDAO;
import shoppingdemo.dto.PageDTO;

public class BoardSearchAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String pageNum = req.getParameter("pageNum");
		int searchOptionIdx = Integer.parseInt(req.getParameter("searchOptionIdx"));

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);
		BoardDAO dao = BoardDAO.getInstance();
		int cnt = dao.rowTotalCount(searchOptionIdx,0);

		PageDTO pdto = new PageDTO(currentPage, cnt);
		req.setAttribute("pdto", pdto);
		req.setAttribute("aList", dao.listMethod(pdto));
		req.setAttribute("searchOptionIdx", searchOptionIdx);
		System.out.println("서치 = " + searchOptionIdx);

	}// end execute()

}// end class
