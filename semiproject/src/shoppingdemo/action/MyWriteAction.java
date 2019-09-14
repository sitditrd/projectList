package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.controller.ShopController;
import shoppingdemo.dao.BoardDAO;
import shoppingdemo.dto.BoardDTO;
import shoppingdemo.dto.PageDTO;

public class MyWriteAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);
		
		BoardDAO dao = BoardDAO.getInstance();
		
		int cnt = dao.rowTotalCount(0, ShopController.member_code);

		if (cnt > 0) {

			PageDTO pdto = new PageDTO(currentPage, cnt);
			
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", dao.MyWrite(pdto));

		}
		
	}// end execute()
	
}
