package shoppingdemo.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.AdminListDAO;
import shoppingdemo.dto.AdminPageDTO;
import shoppingdemo.dto.MemberDTO;

public class AdminListCheckAction {
	
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		List<MemberDTO> aList = new ArrayList<MemberDTO>();
		
		AdminListDAO dao = AdminListDAO.getInstance();
		aList = dao.AdminListCheckMethod();
		
		int total_member = aList.size();
		req.setAttribute("total_member", total_member);
		
		//라스트 페이징 기법 적용
		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		int cnt = dao.rowTotalCount();

		if (cnt > 0) {
			AdminPageDTO pdto = new AdminPageDTO(currentPage, cnt); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", dao.listMethod(pdto));
		}
	}
}
