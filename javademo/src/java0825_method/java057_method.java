package java0825_method;
/*
 * 자바에서 제공하는 데이터 타입(data type)
 * 1. 기본 데이터 타입 : byte, short, int ,long
 * 					float, double, char, boolean
 * 
 * 2. 참조 데이터 타입 : 배열, 클래스, 인터페이스
 * 
 * [인자(매개변수) 전달방식]
 * 1. call by value : 값을 복사
 * 인자값을 전달할 때 기본 데이터 타입을 넘겨주는 형식이다.
 * 
 * 2. call by reference : 주소를 복사
 * 인자값을 전달할 때 참조 데이터 타입을 넘겨주는 형식이다.
 * 
 */

public class java057_method {

	public static void main(String[] args) {
		int[] data = new int[] {10, 20};
		int a=10, b=20;
		System.out.printf("a=%d, b=%d\n", a,b);
		System.out.println("----callByValue----");
		callByValue(a,b);
		System.out.printf("\ndata[0]=%d, data[1]=%d\n", data[0], data[1]);
		System.out.print("----callByReferenece----\n");
		callByReference(data);
	}

	public static void callByValue(int x, int y) {
		int temp = x;
		x = y;
		y = temp;
		System.out.printf("x=%d, y=%d\n", x,y);
	}
	
	public static void callByReference(int[] data) {
		 int temp = data[0];
		 data[0] = data[1];
		 data[1] = temp;
		 System.out.printf("data[0]=%d, data[1]=%d\n", data[0], data[1]);
	}
}
