package java0908_stream;
import java.io.IOException;
import java.io.InputStream;

public class java159_stream {

	public static void main(String[] args) {
		System.out.println("데이터 입력");
		
		//console이라는 대상에 읽어오기를 하는데 그것은 InputStream이다.
		
		//콘솔창 목적지에 InputStream으로 연결
		InputStream is = System.in;
		
		try {
			//한 바이트(1바이트)를 읽어와 유니코드로 리턴한다. (한글을(2바이트)를 처리할때는 다르게 처리해야 한다.)
			int line = is.read(); //Checked Exception에 throws처리가 되어있으므로 예외처리를 반드시 한다.
			System.out.println((char)line);
		} catch (IOException e) {
			e.printStackTrace();
		} 
		
	}

}
