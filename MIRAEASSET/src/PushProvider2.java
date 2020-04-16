import java.io.IOException;
import java.net.UnknownHostException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tobesoft.xpush.api.PushMessageProvider;
import com.tobesoft.xpush.fw.io.ConnectionClosedException;
import com.tobesoft.xpush.fw.service.provider.LoginFailException;
import com.tobesoft.xpush.fw.service.provider.PushMessage;
import com.tobesoft.xpush.fw.service.provider.XPushMessageException;

public class PushProvider2 extends HttpServlet{

	private static final long serialVersionUID = 1L;

	public PushProvider2() {
		super();
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println(">>> PushProvider2 start");
		
		String host = "localhost";
		int port = 10082;
		String id = "id";
		String password = "pw";
		int sleepTime = 2000;
		
		PushMessageProvider pushMessageProvider = new PushMessageProvider();
		
		try {
			pushMessageProvider.connect(host, port, id, password);
		} catch (UnknownHostException e) {
			e.printStackTrace();
			System.exit(0);
		} catch (IOException e) {
			e.printStackTrace();
			System.exit(0);
		} catch (LoginFailException e) {
			e.printStackTrace();
			System.exit(0);
		} catch (ConnectionClosedException e) {
			e.printStackTrace();
			System.exit(0);
		}

		try {
			while(true) {
				for (int i = 0; i < 10; i++) {
					String code = String.format("%03d", (int)(Math.random() * 700) + 1);
					PushMessage pushMessage1 = new PushMessage();
					pushMessage1.setCharsetName("utf-8");
					pushMessage1.setTopicType("LCHE");
					pushMessage1.setTopicId("CHE");
					pushMessage1.addData(code);
					pushMessage1.addData("100");
					pushMessageProvider.sendPushMessage(pushMessage1);
					
					System.out.println(">>> 주문지별 체결 : " + code);
					
					code = String.format("%03d", (int)(Math.random() * 600) + 1);
					PushMessage pushMessage2 = new PushMessage();
					pushMessage2.setCharsetName("utf-8");
					pushMessage2.setTopicType("RCHE");
					pushMessage2.setTopicId("CHE");
					pushMessage2.addData(code);
					pushMessage2.addData("100");
					pushMessageProvider.sendPushMessage(pushMessage2);
					
					System.out.println(">>> 종목별 체결 : " + code);
					
					code = String.format("%03d", (int)(Math.random() * 500) + 1);
					PushMessage pushMessage3 = new PushMessage();
					pushMessage3.setCharsetName("utf-8");
					pushMessage3.setTopicType("DCHE");
					pushMessage3.setTopicId("CHE");
					pushMessage3.addData(code);
					pushMessage3.addData("100");
					pushMessageProvider.sendPushMessage(pushMessage3);
					
					System.out.println(">>> 배분주문지별 체결 : " + code);
				}
	
				try {
					Thread.sleep(sleepTime);
				} catch (InterruptedException e) {
					return;
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (XPushMessageException e) {
			e.printStackTrace();
		}
	}
}
