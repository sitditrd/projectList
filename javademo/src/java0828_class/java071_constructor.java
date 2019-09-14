package java0828_class;

/*
 * 생성자(constructor)
 * 1. 멤버변수를 초기화하기 위한 목적으로 사용한다. (한번만 호출)
 * 2. 클래스명과 같다.
 * 3. 클래스는 한 개 이상의 생성자를 갖는다.
 * 4. 생성자는 리턴타입이 없다.
 * 5. 클래스에 생성자가 정의되어 있지 않으면 JVM에서 기본생성자를 제공한다. 
 * 6. 기본생성자는 클래스의 접근페이지를 그대로 사용한다. 
 */

class HandPhone {
	String name;
	String number;
	
	HandPhone() {} //자바 가상머신(JVM)에서 제공하는 기본생성자이다. 
	
	HandPhone(String n, String b) {
		name = n;
		number = b;
	} // <- 이것처럼  클래스에 하나라도 생성자가 정의되어 있으면 JVM은 기본생성자를 제공해주지 않는다.
	
	void prn() {
		System.out.printf("%s %s\n", name, number);
	}
}
public class java071_constructor {

	public static void main(String[] args) {
		HandPhone ph = new HandPhone();
		ph.name = "홍길동";
		ph.number = "010-2563-9029";
		ph.prn();
		
		HandPhone ne = new HandPhone("이영희", "010-9725-8253");
		ne.prn();
	}

}
