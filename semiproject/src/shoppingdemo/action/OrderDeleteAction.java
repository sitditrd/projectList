package shoppingdemo.action;

import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import shoppingdemo.dao.CancelDAO;
import shoppingdemo.dao.OrderDAO;

public class OrderDeleteAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		String member_id = (String) session.getAttribute("logOk");

		// 파라미터값으로 넘어온 상세정보 버튼 index값
		int index = Integer.parseInt(req.getParameter("index"));

		// 파라미터값으로 넘어오지 않았지만 OrderDeleteAction이 발생했기 때문에 취소완료를 삽입.
		String state = "취소완료";

		// 날짜값을 계산하기 위함
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

		OrderDAO dao = OrderDAO.getInstance();

		// list_id 추출
		int list_id = index;

		// total_price 추출
		String total_price = dao.ExtractTotalPriceMethod(list_id);

		// 주문취소
		dao.OrderDeleteMethod(list_id, state);

		// 취소테이블에 삽입
		CancelDAO cancel = CancelDAO.getInstance();
		cancel.CancelInsertMethod(list_time, total_price, member_id);

	}
}
