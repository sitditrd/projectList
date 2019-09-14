package java0822_basic.prob;
import java.util.Scanner;

/*
 * num변수의 값이 10의 배수이면 1을 아니면 0을 res변수에 리턴하는 프로그램을 구하시오
 *
 */

public class Prob01 {

	public static void main(String[] args) {
		
		Scanner rd = new Scanner(System.in);
		
		int num, res;
		
		num = rd.nextInt();
		
		if(num % 10 == 0)
			res = 1;
		else
			res = 0;
		
		System.out.println(res);

	}

}