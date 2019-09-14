package java0920_network;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class java230_ClientSocket {

	public static void main(String[] args) {
		//대기상태의 서버에 접속을하려면 주소와 포트번호로 접속을 한다.
		try {
			//3단계 서버주소, 포트번호로 연결한다.
			Socket socket = new Socket("127.0.0.1", 7777);
			
			//4단계 입출력스트림 연결 : 반드시 소켓하고 입출력 스트림을 연결해야 자료의 이동이 가능하다.
			InputStream is = socket.getInputStream(); 
			OutputStream os = socket.getOutputStream();
			OutputStreamWriter ow = new OutputStreamWriter(os); //데이터를 쓰기 위해 연결한다.
			
			//5단계 서버에 정보를 보낸다.
			ow.write("클라이언트 정보 보냄");
			ow.close();
		} 
		catch (IOException e) {
			e.printStackTrace();
		}

	}
}

