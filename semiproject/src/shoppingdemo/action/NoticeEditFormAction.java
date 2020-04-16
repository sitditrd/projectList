package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.NoticeDAO;

public class NoticeEditFormAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		int notice_id = Integer.parseInt(req.getParameter("notice_id"));

		NoticeDAO dao = NoticeDAO.getInstance();

		req.setAttribute("dto", dao.viewMethod(notice_id));

	}// end execute()

}// end class
