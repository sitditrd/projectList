package java0822_statement;

/*
 * 조건식을 만족할때만 수행할 문장이 있는 경우
 * 
 * if(조건식) {
 * 수행할문장;
 * }
 */

public class Java018_if {

	public static void main(String[] args) {

		int num = 10;

		if (num > 0) {
			System.out.println(num+"은 자연수입니다.");
		}
		else {
			System.out.println("program end");
		}
	}

}