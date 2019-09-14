package java0908_api;

public class java156_exception {

	public static void main(String[] args) {
		String data1 = "12";
		String data2 = "0";

		try {
			int x = Integer.parseInt(data1);
			int y = Integer.parseInt(data2); // 여기서 NumberFormatException이 발생한다.
			process(x,y);
		} catch (NumberFormatException ex) {
			System.out.println("숫자를 입력하세요.");
		} catch(ArithmeticException ex) {
			System.out.println("분모는 0을 입력하세요.");
		}
		System.out.println("program end");
	}

	//throws : 예외처리를 현재 메소드를 호출하는 곳으로 떠 넘길때 사용한다. 
	//java.io, java.net 클래스에 많이 선언되있다. 
	
	public static void process(int x, int y) throws ArithmeticException{ //여러개면 ,로 나열해도 된다. 
		//이곳 메소드에서 발생하는 예외처리를 호출한 곳에서 처리하도록 할 수 있다. 
		int res = x / y;
		System.out.println(res);
		
	}

}
