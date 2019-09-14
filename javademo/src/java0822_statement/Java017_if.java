package java0822_statement;
import java.util.*;

/*
 * 제어문(control statement) : 문장의 흐름을 제어해주는 기능이다.
 * 
 * 1. 종류
 * 조건문 : if-else, switch-case
 * 반복문 : for, while, do-while
 * 기타 : break, continue, label
 * 
 * if(조건식)
 * {
 * 	수행할 문장; //조건식이 참일 때 수행한다.
 * }
 * else
 * {
 * 	수행할 문장; //조건식이 거짓 일때 수행한다.
 * }
 * 
 */

public class Java017_if {

	public static void main(String[] args) {
		
		Scanner rd = new Scanner(System.in);
		
		int num;
		
		num = rd.nextInt();
		
		if(num % 2 == 0) {
			System.out.println(num+"은 짝수입니다.");
		}
		else {
			System.out.println(num+"은 홀수입니다.");
		}
		
	}

}