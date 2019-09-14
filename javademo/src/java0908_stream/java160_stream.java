package java0908_stream;
import java.io.IOException;
import java.io.InputStream;

/*
 *  carriage return : 줄의 처음으로 이동(유니코드 값으로 13)
 *  line feed : 다음 줄로 이동(10)
 */

public class java160_stream {

	public static void main(String[] args) {
		System.out.println("데이터 입력");
		InputStream is = System.in;
		int data;
		
		//abc를 입력했다면 a,b,c를 읽을 수 있다.
		try {
			/*
			 * 1. is.read()를 호출해서 문자를 읽어옴
			 * 2. read()에서 리턴해주는 문자를 data변수에 저장
			 * 
			 * 3. data변수의 값 과 13을 비교한다. 
			 */
			while((data=is.read()) != 13) { //더이상 리턴하는 값이 없다면 -1를 리턴한다.(이때는 File일때다.) 
											//Console일때는 Enter친 값(13)을 리턴한다.
				System.out.print((char)data);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
