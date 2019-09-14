package java0908_stream;

import java.io.BufferedReader;
import java.io.IOError;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class java162_stream {

	public static void main(String[] args) {
		System.out.println("데이터입력 : ");

		// 바이트 스트림
		// 1바이트만 처리
		InputStream is = System.in;

		// 바이트스트림과 문자스트림을 연결한다.
		// InputStreamReader은 InputStream과 BufferedReader를 이어주는 메소드이다.
		InputStreamReader ir = new InputStreamReader(is);

		// 문자 스트림
		// 2바이트만 처리
		BufferedReader br = new BufferedReader(ir);
		
		int x,y;
		
		try {
			System.out.print("x : ");
			x = Integer.parseInt(br.readLine());
			System.out.print("y : ");
			y = Integer.parseInt(br.readLine());
			System.out.printf("%d + %d = %d\n", x,y,x+y);
		}
		catch(IOException e) {
			System.out.println(e.toString());
		}
		finally {
			try {
				//연결 종료
				br.close();
				ir.close();
				is.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
