package java0920_network;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.DataInput;
import java.io.DataInputStream;
import java.io.DataOutput;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Enumeration;
import java.util.Vector;

public class java231_ChatHandler implements Runnable {

	Socket socket;
	private DataInputStream dataIn;
	private DataOutputStream dataOut;
	private Thread th;
	private static Vector handlers = new Vector(); // 현재 서버에 접속되어있는 클라이언트 정보를 저장하기 위한 Vector이다.
												   // 서버에서 클라이언트의 메시지를 받으면 Vector에 저장되어 있는 클라이언트
												   // 정보를 받아와서 올바른 클라이언트에게 보내준다.
	
												   // A라는 클라이언트 접근시 B클라이언트 접근못하게 Vector사용한것이다.
												   // Vector는 Synchronized 되었기 때문이다.
	public java231_ChatHandler() {

	}

	public java231_ChatHandler(Socket socket) {
		this.socket = socket;
	}

	synchronized public void initStart() { //현재 접속되어 있는 클라이언트들끼리 공유가 되는 공유자원이다. 
										   //따라서 동기화를 걸어놓아야 한다. 
		if (th == null) {
			try {
				InputStream is = socket.getInputStream();
				OutputStream os = socket.getOutputStream();
				dataIn = new DataInputStream(new BufferedInputStream(is));
				dataOut = new DataOutputStream(new BufferedOutputStream(os));
				
				th = new Thread(this); //runnable을 상속받은 java231_ChatHandler을 뜻한다.
				th.start();
				
			} catch (IOException e) {
				//e.printStackTrace();
			}
		}
	}

	@Override
	public void run() { //run()이 호출이 되려면 start()가 호출되어야 한다.
		
		//현재 클라이언트의 정보를 현재 스레드에 넣어주어야 한다. (공유자원을 넣어주는 부분)
		handlers.addElement(this);
		
		//이제는 handlers에 있는 스레드에 다시 정보를 넣어주어야 한다. 클라이언트에게 정보를 다시 보내기 위해서 
		while(!Thread.interrupted()) { //스레드에 이상이없다면
			try {
				String message = dataIn.readUTF(); //보낼때 UTF했으니 받을때도 UTF한다. 
				broadcast(message);
			} catch (IOException e) {
				//e.printStackTrace();
			} 
		}
	}
	
	//다른 클라이언트가 접속하지 못하도록 동기화 처리한다.
	synchronized public void broadcast(String message) { //message는 Thread의 run메소드의 message값을 받기위한 매개변수이다.
		Enumeration enu = handlers.elements(); //백터에 있는 자원을 출력할때는 Enumeration을 이용한다.
		
		while(enu.hasMoreElements()) {
			java231_ChatHandler handler = (java231_ChatHandler)enu.nextElement(); //리턴타입은 오브젝트로 다운캐스팅하여 받는다.
			
			try {
				handler.dataOut.writeUTF(message);
				handler.dataOut.flush(); //버퍼를 비우면서 데이터를 보내야 값이 보내진다. 
			} catch (IOException e) {
				handler.stop();
			}
		}
	}
	
	//클라이언트가 접속을 끊을시 예외가 생기는 것을 처리해주는 과정
	//항상 동기화는 공유하고 있는 메소드에다 붙여주어야 한다. 
	synchronized public void stop() {
		if(th != null) {
			if(th != Thread.currentThread()) {
				th.interrupt();
				th = null;
				try {
					dataOut.close();
				} catch (IOException e) {
					//e.printStackTrace();
				}
			}
		}
	}
}
