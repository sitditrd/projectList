package java0907_api;
import java.util.*;

/*
 * 이름, 학점을 입력하는 프로그램을 구현하시오
 * 입력 : 홍길동,80,93
 * 
 * [출력결과]
 * 이름 : 홍길동
 * 국어 : 80
 * 영어 : 93
 * 평균 : 86.5 (double로 계산)
 */

public class java146_Wrapper {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		String name = "";
		int Kor=0, Eng=0;
		double Avg = 0.0;
		
		String str = "";
		System.out.print("입력 : ");
		str = sc.nextLine();
		
		String[] divide = str.split(",");
		
		if(divide.length != 3) {
			System.out.println("이름, 국어, 영어로 입력하세요.");
			return;
		}
		
		name = divide[0];
		Kor = Integer.parseInt(divide[1]);
		Eng = Integer.parseInt(divide[2]);
		Avg = (Kor+Eng)/2.0;
		
		System.out.printf("이름 : %s\n 국어 : %d\n 영어 : %d\n 평균 : %.1f\n",name, Kor, Eng, Avg);
	}

}
