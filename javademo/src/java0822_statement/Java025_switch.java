package java0822_statement;

/*
 * switch(식) {
 * 		case 값1 : 문장1; break;
 * 		case 값2 : 문장2; break;
 * 		case 값3 : 문장3; break;
 * 		default : 문장 4;
 * }
 * 
 * 식의 결과 타입 : byte, short, char, int, enum(jdk 7버전부터 추가되었다.), String(jdk 7버전부터 추가되었다.)
 * 
 * switch-case에서 break를 만나면 현재 수행중인 조건물을 완전히 빠져나와 다음 문장을 수행한다.
 * 
 */

public class Java025_switch {

	public static void main(String[] args) {
		int jumsu = 95;
		char res = 'f';
		
		//jumsu >= 90은 A / jumsu >= 80은 B / jumsu >= 70은 C
		//jumsu >= 60은 D / jumsu < 50은 F
		
		switch(jumsu / 10) {
		case 10 : res = 'A'; break;
		case 9 : res = 'A'; break;
		case 8 : res = 'B'; break;
		case 7 : res = 'C'; break;
		case 6 : res = 'D'; break;
		default : res = 'F'; 
		}
		
		System.out.println(jumsu+"점수는 "+res+"학점입니다.");
	}

}