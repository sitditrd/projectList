package java0908_stream.prob;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/*[문제]
 * data.txt 파일에는 PRODUCT 테이블의 컬럼 이름들이 저장되어있다. 
 * 이 컬럼 이름들을 Java 의 변수명으로 변환하여 콘솔창에 출력하는
 *  makeVariable() 메소드를 구현하시오. 
 * Java 의 변수명은 camel case 가 적용된 형태로 변환해야 한다
 * 
 * <data.txt>파일의 형태는 아래와 같고  실행결과 처럼 나와야 한다.
 * PROD_NO
 * PROD_NAME
 * PRICE
 * AMOUNT
 * MAKER
 * REG_DATE

  [실행결과]
 * prodNo
 * prodName
 * price
 * amount
 * maker
 * regDate
 */

public class Prob002_stream {
	public static void main(String[] args) {
		String fileName = ".\\src\\java0908_stream\\prob\\data.txt";
		makeVariable(fileName);
	}// end main()

	private static void makeVariable(String fileName) {
		// 구현하세요.
		File file = new File(fileName);
		Scanner sc = null;
		String str = "";

		try {
			sc = new Scanner(file); // console일때는 예외처리를 안해도 되지만 file일때는 예외처리해주어야 한다.
									// 객체를 받을때는 throws가 선언되어 있기 때문이다.
			while (sc.hasNextLine()) {
				str = sc.nextLine();

				char[] array = new char[str.length()];

				array = str.toCharArray();

				for (int i = 0; i < array.length; i++) {
					if (array[i] >= 'A' && array[i] <= 'Z') {
						array[i] = (char) (array[i] + 32);
					}
				}

				for (int i = 0; i < array.length; i++) {
					if (array[i] == '_') {
						array[i + 1] = (char) (array[i + 1] - 32);
					}
				}

				for (int i = 0; i < array.length; i++) {
					if (array[i] != '_')
						System.out.print(array[i]);
				}

				System.out.println();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} finally {
			sc.close(); // 그대신 close()에는 throws가 선언이 되지 않아 예외처리를 할 필요가 없다.
		}

	}// end makeVariable()
}// end class
