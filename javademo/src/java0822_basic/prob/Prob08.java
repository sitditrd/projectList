package java0822_basic.prob;
import java.util.*;


/*
 * 1. 가장 적은 동전으로 교환할 수 있는 프로그램을 작성하시오.
 * 
 * [출력결과]
 * 500원 : 15개
 * 100원 : 2개
 * 50원 : 1개
 * 20원 : 2개
 * 1원 : 7개
 */

public class Prob08 {

	public static void main(String[] args) {
		
		Scanner rd = new Scanner(System.in);
		
		int money;
		
		money = rd.nextInt();
		
		int A = money / 500;
		int B = (money % 500) / 100;
		int C = ((money % 500)%100) / 50;
		int D = (((money % 500)%100)%50) / 20;
		int E = ((((money % 500)%100)%50)%20) / 1;
		
		System.out.println("500원 : " + A + "개");
		System.out.println("100원 : " + B + "개");
		System.out.println("50원 : " + C + "개");
		System.out.println("20원 : " + D + "개");
		System.out.println("1원 : " + E + "개");
		
	}

}