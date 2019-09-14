package java0908_api;

public class java152_exception {

	public static void main(String[] args) {
		int[] num = new int[] {10, 20, 30};
		
		//System.out.println(num[7]);
		//exception ArrayIndexOutOfBoundsException이라는 장치를 걸어놓았다. 
		//java.lang 패키지에 있다. 
		//따라서 예외를 처리하기 위해서는 아래와 같이 해주면 된다.
		
		/* 
		 * 예외가 발생되는 시점에 따라
		 1 checked exception
		 컴파일시점에 발생이 되므로 반드시 예외처리를 해야한다.
		 RuntimeException외 클래스들이다.
		 *
		 */
		
		try {
			System.out.println(num[7]);
		}
		catch(ArrayIndexOutOfBoundsException ex) {
			System.out.println("배열에 존재하지 않는 인덱스입니다.");
		}
		finally { //finally는 반드시 실행되는 키워드이다. (try를 실행하던 catch를 실행하던.)
			System.out.println("Program end");
		}
		

		try {
			System.out.println(num[1]);
		}
		catch(ArrayIndexOutOfBoundsException ex) {
			System.out.println("배열에 존재하지 않는 인덱스입니다.");
		}
		finally { //finally는 반드시 실행되는 키워드이다. (try를 실행하던 catch를 실행하던.)
			System.out.println("Program end");
		}
	}

}
