package java0911_stream.prob;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.LineNumberReader;
import java.util.Iterator;
import java.util.Scanner;
import java.util.stream.Stream;

/*
 * [문제]
 *  sun.txt파일에서 데이터를 읽어온후 ‘\t’와 ‘ ‘을 ‘-‘ 로 변환하여
 *  프로그램을 구현하시오.
 *   
 * [프로그램 실행결과]
 * hello-world-!!!
 * java-programming
 * jsp-servlet-programming!
 */

public class Prob03_stream {
	public static void main(String args[]) {
		String[] lines = readLines(".\\src\\java0911_stream\\prob\\sun.txt");
		
		for (int i = 0; i < lines.length; i++) {
			printLine(lines[i]);
		}
	}

	public static String[] readLines(String fileName) {
		/*
		 * 파라미터로 전달받은 txt파일을 읽어 들여, 파일의 줄 수에 해당하는 String[]을 생성하여 해당 String[]에 한
		 * 라인씩 저장해서 반환한다.
		 */
		Scanner sc = null;
		int index=0;
		String str="", str2="", str3="";
		String[] data = new String[10010];
		
		try {
			File file = new File(fileName);
			sc = new Scanner(file);
			
			while(sc.hasNextLine()) {
				str = sc.nextLine();
				str2 = str.replace("\t", "-");
				str3 = str2.replace(" ", "-");
				data[index++] = str3;
			} 
		}catch(FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}
		
		String[] data2 = new String[index];
		for(int i=0; i<index; i++) {
			data2[i] = data[i];
		}
		
		return data2;
	}// end readLines()

	public static void printLine(String line) {
		/*
		 * 문자열을 받아들여 ‘\t’와 ‘ ‘을 ‘-‘ 로 변환하여 콘솔에 출력한다.
		 */
		System.out.println(line);
		
	}// end printLine()
}// end class
