import java.io.IOException;
import java.net.UnknownHostException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;
import com.tobesoft.xpush.api.PushMessageProvider;
import com.tobesoft.xpush.fw.io.ConnectionClosedException;
import com.tobesoft.xpush.fw.service.provider.LoginFailException;
import com.tobesoft.xpush.fw.service.provider.PushMessage;
import com.tobesoft.xpush.fw.service.provider.XPushMessageException;

public class PushProvider1  extends HttpServlet{
	
	private static final long serialVersionUID = 1L;

	public PushProvider1() {
		super();
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println(">>> Provider start");
		
		String host = "localhost";
		int port = 10082;
		String id = "id";
		String password = "pw";
		int sleepTime = 10000;
		
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
		
		for (int i = 0; i < 100; i++) {
			try {
				String key = "" + (i + 701);
				
				PushMessage pushMessage1 = new PushMessage();
				pushMessage1.setCharsetName("utf-8");
				pushMessage1.setTopicType("LADD");
				pushMessage1.setTopicId("ADD");
				pushMessage1.addData(key);
				pushMessage1.addData("주문지" + key);
				pushMessage1.addData("100");
				pushMessageProvider.sendPushMessage(pushMessage1);
				
				System.out.println(">>> 신규 배분 주문지 추가 : " + key);
				
				key = "" + (i + 601);
				
				PushMessage pushMessage2 = new PushMessage();
				pushMessage2.setCharsetName("utf-8");
				pushMessage2.setTopicType("RADD");
				pushMessage2.setTopicId("ADD");
				pushMessage2.addData(key);
				pushMessage2.addData("종목" + key);
				pushMessage2.addData("100");
				pushMessageProvider.sendPushMessage(pushMessage2);
				
				System.out.println(">>> 신규 종목 추가 : " + key);

				try {
					Thread.sleep(sleepTime);
				} catch (InterruptedException e) {
					return;
				}
			} catch (IOException e) {
				e.printStackTrace();
			} catch (XPushMessageException e) {
				e.printStackTrace();
			}
		}
	}
}
