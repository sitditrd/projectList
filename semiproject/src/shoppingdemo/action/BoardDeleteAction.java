package shoppingdemo.action;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.BoardDAO;


public class BoardDeleteAction {
	
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String fileName = req.getParameter("post_upload");

		if (fileName != null) {
			File file = new File("c:/temp/", fileName);
			file.delete();
		}

		BoardDAO dao = BoardDAO.getInstance();

		dao.deleteMethod(Integer.parseInt(req.getParameter("post_id")));

	}// end execute()

}// end class
