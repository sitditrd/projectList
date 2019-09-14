package java0908_stream;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class java166_stream {

	public static void main(String[] args) {
		//가장 기본적인 방법 FileReader를 사용하여 파일을 읽어온다. read()밖에 지원하지 않는다.
		File file = new File("sample.txt");
		FileReader fr = null;

		int data;

		try {
			fr = new FileReader(file);
			// read() : 파일의 끝일 때 -1을 리턴한다.
			while ((data = fr.read()) != -1) {
				System.out.print((char) data);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				fr.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		System.out.println("//////////////////////////////////");

		// 한 라인씩 읽어오기 위해서 아래와 같이 한다. 읽어오는 속도를 향상시키기 위해서
		BufferedReader br = null;

		try {
			fr = new FileReader(file);
			br = new BufferedReader(fr); // 둘다 문자스트림이기 때문에 연결이 가능하다.
			String line = "";

			// 파일의 끝이면 readLine()은 null을 리턴한다.
			while ((line = br.readLine()) != null) {
				System.out.print(line);
				System.out.println();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				// 연결종료
				br.close();
				fr.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		System.out.println("/////////////////////////////////");

		Scanner sc = null;

		try {
			sc = new Scanner(file); // console일때는 예외처리를 안해도 되지만 file일때는 예외처리해주어야 한다.
									// 객체를 받을때는 throws가 선언되어 있기 때문이다.
			while (sc.hasNextLine()) {
				System.out.print(sc.nextLine());
				System.out.println();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} finally {
			sc.close(); // 그대신 close()에는 throws가 선언이 되지 않아 예외처리를 할 필요가 없다.
		}
	}
}
