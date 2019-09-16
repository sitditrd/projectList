package egov.sample.stomp.ws;

/*
 *  HashMap은 Map을 구현한다. Key와 value를 묶어 하나의 entry로 저장한다는 특징을 갖는다. 그리고 hashing을 사용하기 때문에 많은 양의 데이터를 검색하는데 뛰어난 성능을 보인다.
 *  Map 인터페이스의 한 종류로 ("key", value)로 이루어져 있다.
 *  key 값은 중복이 불가능하고 value는 중복이 가능하다. value에 null값도 가능하다.
 *  멀티쓰레드에서 동시에 HashMap을 건드려 Key - value 값을 사용하면 문제가 될 수 있다. 멀티쓰레드에서는 HashTable을 쓴다.
 */

import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

//import com.mysql.fabric.xmlrpc.base.Array;

public class ChatWebSocketHandler extends TextWebSocketHandler {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(EchoHandler.class);
	
	private static int checkNames[] = new int[110];
	private static int validationCheckFlag = 0;

	private static Map<String, String> userNamesMap = new HashMap<String, String>();
	private Map<String, WebSocketSession> users = new ConcurrentHashMap<>();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		String strTemp = "";
		String strTemp2 = "";
		
		log(session.getId() + " 연결 됨");
		users.put(session.getId(), session);
		
		//난수발생
		int randomIdx = (int)(Math.random() * 100 + 1);
		
		//중복난수 방지
		while(validationCheckFlag == 0) {
			if(checkNames[randomIdx] == 0) {
				checkNames[randomIdx] += 1;
				validationCheckFlag = 1;
			}else {
				randomIdx = (int)(Math.random() * 100 + 1);
			}
		}
		
		//초기화
		validationCheckFlag=0;
		
		//insert
		userNamesMap.put(session.getId(), "user" + randomIdx);
		
		//~님이 입장하셨습니다. 구현하기 위해 임시로 문자열을 담아둔다.
		strTemp2 = userNamesMap.get(session.getId());
		
		Iterator<String> iterator = userNamesMap.keySet().iterator();
		
		while(iterator.hasNext()) {
			String key = (String)iterator.next();
			strTemp += userNamesMap.get(key) + " ";
		} 
		
		//ws프로토콜로 묶인 웹브라우저에게 모두 WebSocketSession의 정보 Parsing.
		for (WebSocketSession s : users.values()) {
			s.sendMessage(new TextMessage("userSize:" + strTemp2 +  "," + users.size() + "," + strTemp));
		}
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		String strTemp = "";
		String strTemp2 = "";
		
		//~님이 퇴장하셨습니다. 구현하기 위해 임시로 문자열을 담아둔다.
		strTemp2 = userNamesMap.get(session.getId());
		
		//delete
		userNamesMap.remove(session.getId());
		
		log(session.getId() + " 연결 종료됨");
		users.remove(session.getId());
		
		Iterator<String> iterator = userNamesMap.keySet().iterator();
		
		while(iterator.hasNext()) {
			String key = (String)iterator.next();
			strTemp += userNamesMap.get(key) + " ";
		} 
		
		//ws프로토콜로 묶인 웹브라우저에게 모두 WebSocketSession의 정보 Parsing.
		for (WebSocketSession s : users.values()) {
			s.sendMessage(new TextMessage("delete:" + strTemp2 + "," + users.size() + "," + strTemp));
		}
	}

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		log(session.getId() + "로부터 메시지 수신: " + message.getPayload());
		
		//ws프로토콜로 묶인 웹브라우저에게 모두 WebSocketSession의 정보 Parsing.
		for (WebSocketSession s : users.values()) {
			s.sendMessage(message);
			log(s.getId() + "에 메시지 발송: " + message.getPayload());
		}
	}

	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		log(session.getId() + " 익셉션 발생: " + exception.getMessage());
	}

	private void log(String logmsg) {
		LOGGER.info(new Date() + " : " + logmsg);
	}
}
