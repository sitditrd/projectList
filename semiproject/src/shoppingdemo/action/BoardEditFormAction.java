package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.BoardDAO;
import shoppingdemo.dto.BoardDTO;


public class BoardEditFormAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		BoardDAO dao = BoardDAO.getInstance();
		BoardDTO dto = new BoardDTO();
		
		dto.setPost_id(Integer.parseInt(req.getParameter("post_id")));
		dto.setClass_name(req.getParameter("class_name"));
		dto.setMember_id(req.getParameter("member_id"));
		
		req.setAttribute("dto", dao.viewMethod(dto));

	}// end execute()

}// end class