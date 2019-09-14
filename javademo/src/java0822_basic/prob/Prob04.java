package java0822_basic.prob;
import java.util.*;

/*
 * 사과를 담는데 필요한 바구니의 수를 구하는 코드이다.
 * 만약 사과의 수가 123개이고 하나의 바구니에는 10개의 사과를 담을 수 있다면, 13개의 바구니가 필요하다.
 */

public class Prob04 {

	public static void main(String[] args) {
		
		Scanner rd = new Scanner(System.in);
		
		int num, res = 0;
		
		num = rd.nextInt();
		
		if(num % 10 != 0)
		{
			res = num/10 + 1;
		}
		else if(num % 10 == 0)
		{
			res = num/10;
		}
		
		System.out.println(res+"개의 바구니가 필요합니다.");
		
	}

}