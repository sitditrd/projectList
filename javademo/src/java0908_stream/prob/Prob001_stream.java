package java0908_stream.prob;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.FileSystemNotFoundException;
import java.util.Scanner;

/*
 * [문제]score.txt 파일의 점수 정보를 읽어 들여서 각 학생의 점수 총합을 
 *       콘솔창에 출력하는 입출력 프로그램을 main() 메서드에 구현하시오.
 * 
 * [프로그램 실행결과]
 * kim의 점수 통합 :146
 * hong의 점수 통합 :243
 * park의 점수 통합 :240
 */

public class Prob001_stream {

	public static void main(String[] args) {
		// 각 학생의 총점을 출력하는 프로그램을 구현하시오.

		File file = new File("./src/java0908_stream/prob/score.txt");
		Scanner sc = null;
		String str = "";
		String[] data = new String[10010];
		int sum=0;
		
		try {
			sc = new Scanner(file);
			
			while(sc.hasNextLine()) {
				str = sc.nextLine();
				data = str.split("[:/]");
				for(int i=1; i<data.length; i++) {
					sum += Integer.parseInt(data[i]);
				}
				System.out.printf("%s의 점수통합 : %d\n", data[0], sum);
				sum=0;
			}
		} catch(FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}
	}// end main()

}// end class
