package java0908_stream;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class java161_stream {

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

		try {
			String line = br.readLine(); // 한라인을 읽어오는 메소드이다. 리턴타입은 문자열이다.
			System.out.println(line);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// 자원의 종료를 finally에서 해주어야 한다. 연결해준 반대로
		finally {
			try {
				// 연결 종료
				br.close();
				ir.close();
				is.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

}
