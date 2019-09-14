package java0920_network;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;
public class java227_network {

	public static void main(String[] args) {

		try {
			URL url = new URL("https://www.daum.net"); //URL을 받아온다.
			URLConnection conn = url.openConnection();; //커넥션 객체값 받아온다.
			Scanner sc = null;
			sc = new Scanner(conn.getInputStream()); //읽어온 페이지의 내용을 읽어오기 위해선
											         //getInputStream으로 연결한다.
			while (sc.hasNextLine())
				System.out.println(sc.nextLine());

		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
