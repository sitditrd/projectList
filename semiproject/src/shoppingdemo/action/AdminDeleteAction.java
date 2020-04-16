package shoppingdemo.action;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.AdminDeleteDAO;

public class AdminDeleteAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		HttpSession session = req.getSession();
		
		String category_name = req.getParameter("category_name");
		String item_name = req.getParameter("item_name");
		int item_price = Integer.parseInt(req.getParameter("item_price"));
		
		//category_id추출
		AdminDeleteDAO dao = AdminDeleteDAO.getInstance();
		int category_id = dao.ExtractCategoryId(category_name);
		
		//지정된 경로에서도 파일 이미지 삭제
		String filename = category_name + "/" + item_name + ".GIF";
		
		String directory = req.getRealPath("/"); 
		//C:\job\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps 까지의 주소가 req.getRealPath("/")로 받아온다.
		
		directory += "shopping/img/" + filename;
		File file = new File(directory);
		
		if(file.exists()) {
			
			//item table에서 사용자가 지정한 물품 삭제
			dao.AdminDeleteMethod(category_id, item_name, item_price);
			
			file.delete();
			session.setAttribute("flag", 1); 
			resp.sendRedirect("adminpage.do");
		}else {
			session.setAttribute("flag", 2);
			resp.sendRedirect("admindelete.do");
		}
	}
}
