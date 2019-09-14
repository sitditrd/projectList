package java0907_api;
import java.util.Scanner;

public class java140_Scanner {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		/*System.out.print("부서 : ");*/
		String dept = sc.next(); //nextLine처럼 문자열로 리턴되지만 한라인 모두를 리턴하는게 아니라 한글자를 리턴한다.
		
		/*System.out.print("연봉 : ");*/
		int salary = sc.nextInt();
		
		/*System.out.print("평균 : ");*/
		double avg = sc.nextDouble();
		
		//주석처리 하고 실행하고 Console창에 공백으로 값을 각각 주어도 된다.
		
		System.out.printf("%s %d %.1f\n", dept, salary, avg);
		sc.close(); //연결을 종료시줄 때 해주면 좋다.(메모리에서 제거한다.)
		
	}

}
