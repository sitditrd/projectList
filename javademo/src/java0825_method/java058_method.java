package java0825_method;

/*
 * [출력결과]
 * e의 대문자는 E입니다. 
 */

public class java058_method {

	public static void main(String[] args) {

		char data = 'e';
		char code = process(data);
		System.out.printf("%c의 대문자는 %c입니다.\n", data, code);
	}

	public static char process(char data) {

		char ch = 0;
		
		if (data >= 'a' && data <= 'z')
			ch = (char)(data - 32);
		
		return ch;
	}

}
