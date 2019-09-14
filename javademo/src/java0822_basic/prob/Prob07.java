package java0822_basic.prob;
import java.util.*;


/*
 * jumsu변수에 저장된 값에 따라 상, 중 , 하를 출력하는 프로그램을 작성하시오.
 * jumsu변수의 값이 80이상이면 "상", 80미만 60이상이면 "중", 65미만이면 "하"로 출력하시오.
 */

public class Prob07 {

	public static void main(String[] args)
	{
		/*
		Scanner rd = new Scanner(System.in);
		int jumsu;
		char res;
		
		jumsu = rd.nextInt();
		
		if(jumsu >= 80)
			res = '상';
		else if(jumsu >= 60 && jumsu < 80)
			res = '중';
		else
			res = '하';
		
		System.out.println(res);
		*/
		
		//삼항연산자 계산법
		int jumsu = 70;
		
		//방법 1
		//char res = jumsu >= 65 ? (jumsu >= 80 ? '상' : '중') : '하';
		
		//방법 2
		char res = jumsu >= 80 ? '상' : (jumsu >= 65 ? '중' : '하');
		
		System.out.printf("%c", res);
		
	}

}
