package java0911_stream.prob;
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Scanner;

/*
 * [문제]
 *  jumsu.txt 파일로부터 학생의 점수를 읽어들여 총점과 평균을 jumsu.txt 파일 끝에 덧붙여 출력하는 프로그램을 작성하시오.
    단, 평균점수는 소수점 첫 번째 자리까지만 남기고 나머지는 잘라낸다.(truncate) 
    
    [프로그램 실행결과]
        태연:65
	수영:97
	제시카:100
	티파니:86
	써니:88
	총점:436
	평균:87.2
 */

public class Prob02_stream {
	public static void main(String[] args) {
		// 프로그램을 구현하시오.
		File fr = new File(".\\src\\java0911_stream\\prob\\jumsu.txt");
		RandomAccessFile raf = null;
		Scanner sc = null;
		String str = "";
		String[] data = new String[10010];
		int total = 0;
		int totalCount = 0;
		double avg = 0.0;

		try {
			sc = new Scanner(fr);

			while (sc.hasNextLine()) {
				totalCount++;
				str = sc.nextLine();
				data = str.split(":");
				total += Integer.parseInt(data[1]);
			}

			avg = total / (double) (totalCount);
		} catch (FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}

		String final_total = String.valueOf(total);
		String final_avg = String.valueOf(avg);

		// 추가시키려면 song.txt에 있는 파일에 있는 총 길이를 구하여 추가하면된다.
		try {
			
			raf = new RandomAccessFile(fr, "rw");
			long size = raf.length(); // length가 리턴되는게 long이기 때문에
			// 커서를 파일의 끝으로 이동한다.
			raf.seek(size);
			raf.writeUTF("\n총점 : ");
			raf.writeBytes(final_total);
			raf.writeUTF("\n평균 : ");
			raf.writeBytes(final_avg);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				raf.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		try {
			sc = new Scanner(fr);

			while (sc.hasNextLine()) {
				str = sc.nextLine();
				System.out.println(str);
			}

		} catch (FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}
	}// end main()
}// end class
