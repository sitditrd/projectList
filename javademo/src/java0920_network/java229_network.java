package java0920_network;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class java229_network {

	public static void main(String[] args) {
		try {
			URL url = new URL("http://movie.daum.net/magazine/news/article?newsId=20170920135836264");
			
			System.out.printf("getHost() : %s\n", url.getHost());
			
			//웹문서를 가져오면 기본적으로 포트번호는 80을 가져온다. 지금은 별도로 제공하는 값이 없어서 -1값을 가져온다.
			System.out.printf("getPort() : %s\n", url.getPort());
			
			System.out.printf("getProtocol() : %s\n", url.getProtocol());
			
			//getPath()는 도메인에 접속하면 해당 정보는 폴더에 담겨있을 것이다. 이 때 폴더를 불러온 거라고 생각하면 된다.
			System.out.printf("getPath() : %s\n", url.getPath());
			
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
	}

}

