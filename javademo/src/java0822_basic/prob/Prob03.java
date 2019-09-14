package java0822_basic.prob;
import java.util.*;

/*
 * num수의 절대값을 출력하는 프로그램을 구하시오.
 * 
 */

public class Prob03 {

	public static void main(String[] args) {
		
		Scanner rd = new Scanner(System.in);
		
		int num;
		
		num = rd.nextInt();
		
		if(num < 0)
		{
			num *= -1;
		}
		
		System.out.println(num);
	}

}
