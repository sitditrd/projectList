package shoppingdemo.action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.OrderDAO;

public class OrderDetailAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		
		int index = Integer.parseInt(req.getParameter("index"));
		req.setAttribute("index", index);
		
		OrderDAO dao = OrderDAO.getInstance();
		
		//주문자 이름 추출
		String member_name = dao.ExtractOrderNameMethod(member_id);
		req.setAttribute("member_name", member_name);
			
		//list_id 추출
		int list_id = index;
			
		//주문 날짜 추출
		String order_date = dao.ExtractOrderDateMethod(list_id);
		req.setAttribute("order_date", order_date);
		
		//결제 금액 추출
		String total_price = dao.ExtractTotalPriceMethod(list_id);
		req.setAttribute("total_price", total_price);
		
		//결제 방법 추출
		String paymethod = dao.ExtractPaymethodMethod(list_id);
		req.setAttribute("paymethod", paymethod);
		
		//상태 추출
		String state = dao.ExtractStateMethod(list_id);
		req.setAttribute("state", state);
			
		//(수취인, 이메일, 전화번호, 주소, 주문상품정보(category_id, item_name필요), 수량, 가격, 사이즈)추출
		
		//전체 주문, 단품 주문일 때
		req.setAttribute("dto", dao.ExtractOrderProductandReceiveInfoMethod(list_id));
		//전체 주문, 단품 주문일 때
		req.setAttribute("aList", dao.ExtractOrderProductandReceiveInfoMethod2(list_id));
	}
}
