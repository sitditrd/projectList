package java0823_statement;

//3의 배수만 제외하고 출력하는 프로그램

public class Java034_for {

	public static void main(String[] args) {
		for (int i = 1; i <= 10; i++) {
			/*
			 * if(i % 3 != 0) System.out.println(i);
			 */

			if (i % 3 == 0) {
				continue; // continue는 반복문에서만 사용된다. continue를 실행하면 조건이 걸린 바디문은 무시한다.
			}

			System.out.println(i);

		}

	}

}
