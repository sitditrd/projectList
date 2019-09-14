package java0822_statement;

/*
 * data변수에 저장된 값이 영문자 대문자이면 "대문자"입니다.
 * 소문자이면 "소문자"입니다.
 * 
 * 그외는 "기타입니다."로 출력하는  프로그램을 구현하시오.
 * 
 * [출력결과]
 * 
 * data = 'O' = 대문자입니다.
 * data = 'd' = 소문자입니다.
 * data = '1' = 기타입니다. 
 */

public class Java021_if {

	public static void main(String[] args) {

		char data = 'd';

		if (data >= 'A' && data <= 'Z') {
			System.out.println("대문자입니다.");
		} else if (data >= 'a' && data <= 'z') {
			System.out.println("소문자입니다.");
		} else {
			System.out.println("기타입니다.");
		}

	}

}