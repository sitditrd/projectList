package java0822_basic.prob;
import java.util.*;

/*
 * 평년, 윤년을 구하는 프로그램을 작성하시오.
 */

public class Prob05 {

	public static void main(String[] args) {
		
		Scanner rd = new Scanner(System.in);
		
		int year;
		
		year = rd.nextInt();
		
		if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
			System.out.println(year+"년도는 윤년입니다.");
		else
			System.out.println(year+"년도는 평년입니다.");
	}

}