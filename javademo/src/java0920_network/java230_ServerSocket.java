package java0920_network;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class java230_ServerSocket {

	public static void main(String[] args) {
		try {
			//1단계 포트번호를 지정해서 서버 생성
			ServerSocket server = new ServerSocket(7777); //서버 소켓은 포트번호를 열어놓고 대기를 해야한다.
														  //그래야 사용자가 접속할 수 있기 때문이다.
			
			System.out.print("대기 : ");
			//2단계 클라이언트 요청이 들어올때까지 대기
			Socket socket = server.accept(); //클라이언트가 접속하게 되면 클라이언트의 정보를 socket타입으로 넘겨준다.
			System.out.println(socket);
			
				
			//4단계 입출력스트림 연결 : 반드시 소켓하고 입출력 스트림을 연결해야 자료의 이동이 가능하다.
			InputStream is = socket.getInputStream(); 
			OutputStream os = socket.getOutputStream();
			InputStreamReader ir = new InputStreamReader(is);
			BufferedReader br = new BufferedReader(ir);
			
			//5단계 클라이언트에서 보낸 메세지 읽음
			System.out.println(br.readLine());
			socket.close();
					
		} catch (IOException e) {
			e.printStackTrace();
		} 
	}

}
