package shoppingdemo.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.OrderDAO;

public class AdminPriceDetailAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		int index = Integer.parseInt(req.getParameter("index"));
		req.setAttribute("index", index);
		
		OrderDAO dao = OrderDAO.getInstance();
		
		//주문자 이름 추출
		String member_id = dao.ExtractMemberId(index);
		String member_name = dao.ExtractOrderNameMethod(member_id);
		req.setAttribute("member_name", member_name);
				
		//주문 날짜 추출
		String order_date = dao.ExtractOrderDateMethod(index);
		req.setAttribute("order_date", order_date);
		
		//결제 금액 추출
		String total_price = dao.ExtractTotalPriceMethod(index);
		req.setAttribute("total_price", total_price);
		
		//결제 방법 추출
		String paymethod = dao.ExtractPaymethodMethod(index);
		req.setAttribute("paymethod", paymethod);
		
		//상태 추출
		String state = dao.ExtractStateMethod(index);
		req.setAttribute("state", state);
			
		//(수취인, 이메일, 전화번호, 주소, 주문상품정보(category_id, item_name필요), 수량, 가격, 사이즈)추출
		
		//전체 주문, 단품 주문일 때
		req.setAttribute("dto", dao.ExtractOrderProductandReceiveInfoMethod(index));
		//전체 주문, 단품 주문일 때
		req.setAttribute("aList", dao.ExtractOrderProductandReceiveInfoMethod2(index));
	}
}
