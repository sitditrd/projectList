package interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginInterceptor extends HandlerInterceptorAdapter{
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		String uri = request.getRequestURI();
		
		uri = uri.substring(uri.lastIndexOf("/") + 1);
		
		//session값을 받아온다. 
		HttpSession session = request.getSession();
		
		//로그인 상태인지 아닌지 구분
		if(session.getAttribute("chk") == null) { //로그인 상태가 아니면
			response.sendRedirect("login.do?returnUrl=" + uri); 
			return false;
		} else { //로그인 상태이면
			return super.preHandle(request, response, handler); //기본형 return은 true이다. 
		}
	}
}
