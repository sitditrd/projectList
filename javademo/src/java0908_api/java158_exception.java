package java0908_api;

//사용자 정의 예외클래스
class UserException extends Exception { //Exception클래스를 만들기 위해선 상속받는다.
	public UserException(String message) {
		super(message);
	}
}

public class java158_exception {

	public static void main(String[] args) {
		int num = 5;
		process(num);
		System.out.println("Korea");
	}

	public static void process(int data) {
		// 10미만이 입력되었을 때 강제적으로 예외를 발생시키는 것.

		try {
			if (data < 10)
				throw new UserException("10이상만 입력하세요."); // 이렇게 하면 메시지로 출력이 된다.
		} catch (UserException ex) {
			System.out.println(ex.toString());
		}
	}

}
