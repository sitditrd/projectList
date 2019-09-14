package java0908_api;

public class java157_exception {

	// throw : 강제적으로 exception을 발생시킬 때 사용하나 거의 사용하지 않는다.
	public static void main(String[] args) {
		int num = 5;
		process(num);
		System.out.println("Korea");
	}

	public static void process(int data) {
		// 10미만이 입력되었을 때 강제적으로 예외를 발생시키는 것.

		try {
			if (data < 10)
				throw new ArithmeticException("10이상만 입력하세요."); // 이렇게 하면 메시지로 출력이 된다.
		} catch (ArithmeticException ex) {
			System.out.println(ex.toString());
		}
	}
}
