package java0822_basic.prob;
import java.util.Scanner;

/*
 *  data변수의 값이 대문자이면 'A'를 소문자이면 'a'를 출력하는 프로그램을 구현하라.
 */

public class Prob02 {

	public static void main(String[] args) {
		
		Scanner rd = new Scanner(System.in);
		
		char ch;
	
		ch = rd.next().charAt(0);
		
		if(ch >= 97)
		{
			System.out.println((char)(ch-32));
		}
		else
		{
			System.out.println((char)(ch+32));
		}
	}

}
