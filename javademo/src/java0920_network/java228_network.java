package java0920_network;
import java.net.InetAddress;
import java.net.UnknownHostException;

/*
 * 네트워크 : 두 대 이상의 컴퓨터를 케이블로 연결하여 구성하는 기능이다.
 * 클라이언트 / 서버 : 컴퓨터간의 관계를 역할로 구분하는 개념이다.
 * 서버 : 서비스를 제공하는 컴퓨터이다.
 * 클라이언트 : 서비스를 사용하는 컴퓨터이다.
 * 서비스 : 서버가 클라이언트로부터 요청받은 작업을 처리하여 그 결과를 제공하는 개념이다.
 * 
 * 네트워크에 관련된 정보 : java.net.*;
 * InetAddress : ip주소를 다루기 위한 클래스이다. 
 */

public class java228_network {

	public static void main(String[] args) {
		try {
			InetAddress ip = InetAddress.getByName("daum.net"); //해당메소드가 호출하는 메소드로 throws를 선언했기 때문에
															    //예외처리를 해주어야 한다.
			
			//host domain name 리턴
			System.out.printf("getHostName() : %s\n", ip.getHostName());
			
			//host ip 리턴
			System.out.printf("getHostAddress() : %s\n", ip.getHostAddress());
			
			//DNS server에서는 client가 DomainName을 입력하면 IpAddress로 바꾸어서 전달해준다. 
			
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
	}

}
