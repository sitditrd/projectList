package shoppingdemo.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.BoardDAO;
import shoppingdemo.dto.BoardDTO;

public class BoardDetailAction {
	
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		int post_id = Integer.parseInt(req.getParameter("post_id"));

		BoardDAO dao = BoardDAO.getInstance();

		dao.readCountMethod(post_id);

		BoardDTO dto = new BoardDTO();

		dto.setPost_id(post_id);
		
		if (req.getParameter("optionIndex") == null) 
			dto.setClass_name(req.getParameter("class_name"));
			
		else {
			dto.setClass_name(dao.classNameGet(Integer.parseInt(req.getParameter("optionIndex"))));
		}

		req.setAttribute("dto", dao.viewMethod(dto));

	}// end execute()

}// end class
