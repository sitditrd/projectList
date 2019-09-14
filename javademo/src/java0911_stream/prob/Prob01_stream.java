package java0911_stream.prob;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.LineNumberReader;
import java.io.RandomAccessFile;
import java.util.RandomAccess;
import java.util.Scanner;

/*
 * [문제] 
 * input.txt 파일에는 팝송 가사가 들어있다. 
 * 이 파일에서 검색하고자 하는 문자열이 포함되어있는 라인의 번호와 
 * 가사를 콘솔에 출력하는 search(String inpu
 * tFile, String searchWord) 
 * 메서드를 구현하시오.
 * 
 * [프로그램 실행결과]
 * 5 line : It exists to give You comfort
 * 6 line : It is there to keep you warm
 * 9 line : When You are most alone
 * 10 line : The memory of love will bring you home
 * 14 line : It invites you to come closer
 * 15 line : It wants to show you more
 * 17 line : And even if you lose yourself
 * 20 line : will see you through
 * 39 line : My memories of love will be of you
 */

public class Prob01_stream {
	public static void main(String[] args) throws Exception {
		search(".\\src\\java0911_stream\\prob\\input.txt", "You");
	}// end main()

	private static void search(String inputFile, String searchWord) {
		//여기를 구현하세요.
		File file = new File(inputFile);
		int LineCount=0;
		String str = "";
		String[] data = new String[10010];
		
		Scanner sc = null;
		
		try {
			sc = new Scanner(file);
			
			while(sc.hasNextLine()) {
				LineCount++;
				str = sc.nextLine();
				data = str.split(" ");
				
				for(int i=0; i<data.length; i++) {
					if(data[i].equalsIgnoreCase(searchWord)) {
						System.out.printf("%d line : %s\n", LineCount, str);
					}
				}
			}
		} catch (FileNotFoundException e) {
			
			e.printStackTrace();
		} finally {
			sc.close();
		}

	}// end search()
}// end class
