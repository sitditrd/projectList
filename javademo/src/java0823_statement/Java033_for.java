package java0823_statement;

/*
 * 1부터 10까지 짝수, 홀수누적을 계산하는 프로그램을 구현하시요.
 * [출력결과]
 * 짝수누적 : 30
 * 홀수누적 : 25
 * 
 */
public class Java033_for {

	public static void main(String[] args) {
		int sum = 0;
		int res1=0,res2=0;

		for (int i = 1; i <= 10; i++) {
			if(i % 2 == 0)
				res1 += i;
			else
				res2 += i;
		}
		System.out.println("짝수누적 : " + res1);
		System.out.println("홀수누적 : " + res2);

	}

}
