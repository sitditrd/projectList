package shoppingdemo.action;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.ItemDAO;
import shoppingdemo.dto.PageDTO;

public class SearchListAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		String searchKey = req.getParameter("optionIndex");
		String searchWord = req.getParameter("searchWord");

		HashMap<String, String> map = new HashMap<String, String>();
		map.put("searchKey", searchKey);
		map.put("searchWord", searchWord);

		int currentPage = Integer.parseInt(pageNum);

		ItemDAO dao = ItemDAO.getInstance();
		int cnt = dao.rowTotalCount(map, 0);

		if (cnt > 0) {
			PageDTO pdto = new PageDTO(currentPage, cnt, searchKey, searchWord); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", dao.searchListMethod(pdto));
		}
		req.setAttribute("optionIndex", searchKey);
		req.setAttribute("searchWord", searchWord);
		req.setAttribute("searchResult", 1);

	}// end execute()

}// end class
