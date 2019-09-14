package java0822_statement;

/*
 * if안에 if
 * 
 * if(조건식1) {
 * 	if(조건식2){
 * 		수행할문장; //조건식 1과 조건식 2를 모두 만족할 때
 * 	}
 * 	else {
 * 		수행할문장; //조건식 1을 만족하고 조건식 2를 만족하지 않을 때
 * 	}
 * }
 * else {
 * 		수행할문장; //조건식1을 만족하지 않을 떄
 * }
 * 
 */

public class Java019_if {

	public static void main(String[] args) {
		
		boolean member = true; // 회원 or 비회원
		
		String grade="일반"; //회원등급을 구분하기 위한 변수이다.
		//회원이면서 Vip고객이면 30%적립, 회원이면서 Vip고객이 아니면 10%만 적립 그외에는 아무것도 없다.
		
		if(member) {
			if(grade == "vip") {
				System.out.println("30%적립");
			}
			else {
				System.out.println("10%적립");
			}
		}
		else {
			System.out.println("비회원");
		}
		
		System.out.println("고객님 감사합니다.");
	}

}