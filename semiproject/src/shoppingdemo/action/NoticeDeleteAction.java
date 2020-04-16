package shoppingdemo.action;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.NoticeDAO;

public class NoticeDeleteAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String fileName = req.getParameter("notice_upload");

		if (fileName != null) {
			File file = new File("c:/temp/", fileName);
			file.delete();
		}

		NoticeDAO dao = NoticeDAO.getInstance();

		dao.deleteMethod(Integer.parseInt(req.getParameter("notice_id")));

	}// end execute()

}// end class
