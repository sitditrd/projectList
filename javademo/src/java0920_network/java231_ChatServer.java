package java0920_network;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class java231_ChatServer {

	public static void main(String[] args) {
		try {
			ServerSocket server = new ServerSocket(7777); //포트번호를 열어놓는다.
			//클라이언트 여러명이 서버에 접속을 할 것이니까 계속 대기상태로 있어야 한다.
			while(true) {
				Socket client = server.accept();
				//서버에 접속한 클라이언트 IP주소가 뜬다.
				System.out.println("client가 " + client.getInetAddress().getHostAddress()+" 로 접속"); 
				
				//생성자를 호출하면서 서버 정보를 넘겨준다.
				java231_ChatHandler handler = new java231_ChatHandler(client); 
				handler.initStart();
				
			}
		} catch (IOException e) {
			//e.printStackTrace();
		} 
	}

	
}
