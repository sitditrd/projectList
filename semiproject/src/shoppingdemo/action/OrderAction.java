package shoppingdemo.action;

import java.text.NumberFormat;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.NoticeDAO;
import shoppingdemo.dao.OrderDAO;
import shoppingdemo.dto.ListPageDTO;
import shoppingdemo.dto.PageDTO;

public class OrderAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		//세션영역에 저장되어 있는 사용자 아이디값을 받아오기 위한 과정
		HttpSession session = req.getSession();
		String member_id = (String)session.getAttribute("logOk"); 
		
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
		
		//파라미터로 넘어온 total_price 값
		int price = Integer.parseInt(req.getParameter("total_price"));
				
		//파라미터로 넘어온 item_name 값
		String item_name = req.getParameter("item_name");
		
		//파라미터로 넘어온 category_id 값
		String category_id = req.getParameter("category_id");
		
		//파라미터로 넘어온 item_amount 값
		int item_total = Integer.parseInt(req.getParameter("item_amount"));
		
		//파라미터로 넘어온 item_size값
		String item_size = req.getParameter("item_size");
		
		//파라미터로 넘어온 item_price값
		int item_price = Integer.parseInt(req.getParameter("item_price"));
		
		//파라미터로 넘어오지는 않았지만 OrderAction이 발생했을 때 결제완료가 된 상태이기 때문에 state에 결제완료를 삽입.
		String state = "결제완료";
		
		///////////////////////////////////////////////////////////////////////////////////////////
		//배송지 정보에서의 form에서 사용자가 입력한 값을 submit해서 받아온 것...
		String receive_person = req.getParameter("receive_person");
		String receive_email = req.getParameter("receive_email1") + '@' + req.getParameter("receive_email2");
		String receive_phone = req.getParameter("receive_phone1") + '-' + req.getParameter("receive_phone2") + '-' +
				 			   req.getParameter("receive_phone3");
		String receive_address = req.getParameter("receive_address1") + " " + req.getParameter("receive_address2");
		
		//fmt형식에 따르게 하기 위해서.
		NumberFormat fmt = NumberFormat.getCurrencyInstance();
		int temp = Integer.parseInt(req.getParameter("total_price"));
		String res_price = fmt.format(temp);
		
		String total_price = res_price + "원";
	
		String paymethod = req.getParameter("paymethod");
		///////////////////////////////////////////////////////////////////////////////////////////
		
		//저장
		OrderDAO dao = OrderDAO.getInstance();
		
		//list에 저장
		dao.ListInsertMethod(member_id, item_name, price, list_time, paymethod, state);
		
		//list_id 빼오는 로직
		int list_id = dao.ExtractListIdMethod(member_id, item_name, price, list_time);
		
		//단품주문 일때 order_list에 저장
		dao.OrderDetailInsertMethod(list_id, category_id, item_name, item_total, item_size, item_price, receive_person, receive_email, receive_phone, receive_address);
		
		//저장후에는 장바구니에서 삭제되야 한다.
		String item_amount = String.valueOf(item_total);
		dao.BasketDeleteMethod(member_id, category_id, item_amount, item_size);
		
		//라스트 페이징 기법 적용
		String pageNum = req.getParameter("pageNum");

		if (pageNum == null || pageNum == "") {
			pageNum = "1";
		}

		int currentPage = Integer.parseInt(pageNum);

		int cnt = dao.rowTotalCount(member_id);

		if (cnt > 0) {
			
			ListPageDTO pdto = new ListPageDTO(currentPage, cnt); // 페이지 처리
			req.setAttribute("pdto", pdto);
			req.setAttribute("aList", dao.listMethod(pdto, member_id));
		}
		
	}
}
