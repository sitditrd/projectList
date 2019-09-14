package shoppingdemo.action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LogoutAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
	HttpSession session = req.getSession();
		
		if (session.getAttribute("logOk") != null) {
			// 세션 연결 종료
			session.invalidate();
		} else if (session.getAttribute("adminOk") != null) {
			// 세션 연결 종료
			session.invalidate();
		}
		
		resp.sendRedirect("main.do");
	}
}
