package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.BoardDAO;
import shoppingdemo.dto.MemberDTO;
import shoppingdemo.dto.PageDTO;

public class BoardListAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);
		
		BoardDAO dao = BoardDAO.getInstance();
		
		int cnt = dao.rowTotalCount(0,0);

		if (cnt > 0) {

			PageDTO pdto = new PageDTO(currentPage, cnt);
			
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", dao.listMethod(pdto));

		}

	}// end execute()

}// end class