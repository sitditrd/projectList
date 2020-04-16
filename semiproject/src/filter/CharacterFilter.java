package filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

//Filter은 클라이언트에서 요청한 페이지를 수행하기 전후로 처리한다.

@WebFilter("/*") //모든 페이지 요청이 들어오면 이렇게 수행을 하라. 
				 //페이지 요청이 들어오면 전후로 실행되는 것이 Filter이다.
public class CharacterFilter implements Filter{

	//필터가 웹콘테이너에서 삭제될 때 호출한다. 
	@Override
	public void destroy() {
		
		
	}
	
	/* 체인을 따라 다음에 존재하는 필터로 이동한다.
	 * 체인의 가장 마지막에는 클라이언트가 요청한
	 * 최종 자원이 위치한다.*/
	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {
		//doFilter메소드가 호출이 되어 먼저 아래 2줄을 실행하고 chain으로 요청한 페이지가 실행이 될 수 있도록 한다.
		//System.out.println("before");
		req.setCharacterEncoding("UTF-8"); //캐릭터 인코딩을 여기서 잡는다.
		
		chain.doFilter(req, resp);//요청한 페이지가 실행이 될 수 있도록 한다.
		
		//System.out.println("after");
	}

	//필터가 웹 콘테이너에 생성한 후 초기화할 때 호출한다.
	@Override
	public void init(FilterConfig arg0) throws ServletException {
		
		
	}

}
