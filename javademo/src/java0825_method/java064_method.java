package java0825_method;

public class java064_method {

	public static void main(String[] args) {
		char[] data = new char[] { 'a', 'b', 'c' };

		System.out.println(data); // abc로 출력된다.
		System.out.printf("%c\n", data[0]); // a로 출력된다.

		System.out.printf("%s\n", data); // 이런식으로 주소값이 나온다 . [C@44e81672
		System.out.println("data" + data); // 이런식으로 주소값이 나온다 . data[C@44e81672
		
		int[] num = new int[] {1,2,3};
		System.out.println(num); // 이런식으로 주소값이 나온다. [I@60215eee
		
		String[] str = new String[] {"a", "b", "c"};
		System.out.println(str); // 이런식으로 주소값이 나온다. [Ljava.lang.String;@4ca8195f
	}
}
