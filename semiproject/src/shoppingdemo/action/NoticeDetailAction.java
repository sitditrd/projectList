package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.NoticeDAO;

public class NoticeDetailAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		int noticeId = Integer.parseInt(req.getParameter("notice_id"));

		NoticeDAO dao = NoticeDAO.getInstance();
		
		req.setAttribute("dto", dao.viewMethod(noticeId));

	}// end execute()

}// end class
