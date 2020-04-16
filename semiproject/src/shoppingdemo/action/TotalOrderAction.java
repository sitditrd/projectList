package shoppingdemo.action;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.CartDAO;
import shoppingdemo.dao.OrderDAO;
import shoppingdemo.dto.CartDTO;
import shoppingdemo.dto.ListPageDTO;

public class TotalOrderAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk");
		
		String item_name = "";
		int item_count=0;
		int list_total_price = 0;
		
		//날짜값을 계산하기 위함
		Calendar cal = Calendar.getInstance();
		String list_time = "";

		int year = cal.get(Calendar.YEAR);
		list_time = String.valueOf(year);
		list_time += "년-";

		int month = cal.get(Calendar.MONTH) + 1;
		list_time += String.valueOf(month);
		list_time += "월-";

		int date = cal.get(Calendar.DATE);
		list_time += String.valueOf(date);
		list_time += "일 ";
		
		int hour = cal.get(Calendar.HOUR_OF_DAY);
		list_time += String.valueOf(hour);
		list_time += "시:";

		int minute = cal.get(Calendar.MINUTE);
		list_time += String.valueOf(minute);
		list_time += "분:";

		int second = cal.get(Calendar.SECOND);
		list_time += String.valueOf(second);
		list_time += "초";
		
		//파라미터로 넘어오지는 않았지만 OrderAction이 발생했을 때 결제완료가 된 상태이기 때문에 state에 결제완료를 삽입.
		String state = "결제완료";
				
		///////////////////////////////////////////////////////////////////////////////////////////
		//배송지 정보에서의 form에서 사용자가 입력한 값을 submit해서 받아온 것...
		String receive_person = req.getParameter("receive_person");
		String receive_email = req.getParameter("receive_email1") + '@' + req.getParameter("receive_email2");
		String receive_phone = req.getParameter("receive_phone1") + '-' + req.getParameter("receive_phone2") + '-' +
		req.getParameter("receive_phone3");
		String receive_address = req.getParameter("receive_address1") + " " + req.getParameter("receive_address2");
		String paymethod = req.getParameter("paymethod");
		String total_price = req.getParameter("total_price");
		///////////////////////////////////////////////////////////////////////////////////////////

		CartDAO cart = CartDAO.getInstance();
		OrderDAO order = OrderDAO.getInstance();
		
		//order_detail에 전체 구매에 해당하는 dto객체를 aList에 저장해서 생성한 aList에 담음
		List<CartDTO> aList = new ArrayList<CartDTO>();
		aList = cart.ViewMethod(member_id);
		
		for(int i=0; i<aList.size(); i++) {
			if(i==0) {
				item_name = (String)(aList.get(i).getItem_name());
			} else {
				item_count++;
			}
		}
			
		if(item_count != 0) {
			item_name += "외" + item_count + "건"; 
		}
		
		for(int i=0; i<aList.size(); i++) {
			list_total_price += Integer.parseInt(aList.get(i).getItem_price());
		}
		
		//list에 저장
		order.ListInsertMethod(member_id, item_name, list_total_price, list_time, paymethod, state);
		
		//list_id 빼오는 로직
		int list_id = order.ExtractListIdMethod(member_id, item_name, list_total_price, list_time);
		
		//전체주문 일때 order_list에 저장
		order.OrderDetailInsertMethod2(list_id, aList, receive_person, receive_email, receive_phone, receive_address);
		
		//저장후에는 장바구니에서 삭제되야 한다.
		order.BasketTotalDeleteMethod(member_id);
		
		//라스트 페이징 기법 적용
		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		int cnt = order.rowTotalCount(member_id);

		if (cnt > 0) {
			
			ListPageDTO pdto = new ListPageDTO(currentPage, cnt); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", order.listMethod(pdto, member_id));
		}
		
	}
}
