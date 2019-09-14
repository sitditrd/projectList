package shoppingdemo.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.AdminListDAO;
import shoppingdemo.dto.MemberDTO;

public class AdminListCheckDetailAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		int index = Integer.parseInt(req.getParameter("index"));
		
		AdminListDAO dao = AdminListDAO.getInstance();
		
		List<MemberDTO> aList = new ArrayList<MemberDTO>();
		
		aList = dao.AdminListCheckMethod();
		
		System.out.println(index);
		
		int item=0;
		for(int i=0; i<aList.size(); i++) {
			if(aList.get(i).getNum() == index) {
				item = i; //파라미터로 넘어온 index값과 일치하는 member_code값의 index를 추출
				break;
			}
		}
		
		String member_id = aList.get(item).getMember_id(); //member_code값이 있는 곳의 member_id를 추출
		
		req.setAttribute("dto", dao.AdminListCheckDetailMethod(member_id));
	}
}
