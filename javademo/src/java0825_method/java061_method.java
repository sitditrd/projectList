package java0825_method;

/*
 * [출력결과]
 * 20은 양수입니다.
 * 0은 0입니다.
 * -20은 음수입니다.
 */

public class java061_method {

	public static void main(String[] args) {
		process(20);
		process(0);
		process(-20);
	}
	
	public static void process(int num) {
		if(num > 0)
			System.out.println(num+"은 양수입니다.");
		else if(num < 0)
			System.out.println(num+"은 음수입니다.");
		else if(num == 0)
			System.out.println(num+"은 0입니다.");
	}

}
