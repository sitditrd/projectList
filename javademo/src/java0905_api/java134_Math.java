package java0905_api;

import static java.lang.Math.E;
import static java.lang.Math.sqrt;
import static java.lang.Math.pow;

/*
 * 클래스에서 static 키워드가 선언된 멤버변수, 메소드를 호출할 때 
 * import static을 선언하면 클래스명 없이 바로 멤버변수, 메소드를 호출 할 수 있다.
 * 
 */

public class java134_Math {

	public static void main(String[] args) {
		System.out.println(Math.PI); //Math라는 클래스는 별도로 생성자가 정의되어 있지 않다.
		System.out.println(Math.max(10,20)); //인자값이 2개이므로 딱 2개만 비교할 수 있다.
		System.out.println(Math.min(10, 20)); //인자값이 2개이므로 딱 2개만 비교할 수 있다. 
		System.out.println(E);
		System.out.println(sqrt(25));
		System.out.println(pow(2,3));
	}
}
