package java0831_abstract_interface;

import java.io.Serializable;

/*			class 			interface
 * 멤버변수	o				상수
 * 메소드 		선언부+구현부		선언부(추상메소드)
 * 생성자		o				x
 * 초기화블록	o				x
 * 내부클래스	o				o
 * 
 * extends	클래스에 클래스를 상속, 인터페이스에 인터페이스를 상속 
 * 			(단일상속)		     (다중상속)
 * 
 * 
 * implements : 클래스에 인터페이스 상속(다중상속)
 * 
 * 인터페이스(Interface)
 * 1. 추상메소드와 상수를 가지고 있는 형태이다.
 * 2. 클래스 작성에 도움을 줄 목적으로 제공이 되는 표준명세서이다.
 * 3. implements : 클래스에 인터페이스를 상속할 때 사용되는 키워드이다.
 * 4. 인터페이스는 접근제어자로 public만 제공한다.
 * 5. 인터페이스의 추상메소드에 abstract키워드를 명시하지 않아도 된다. 
 * 	    자바가상머신에서 자동으로 처리하기 때문에...
 * 			
 */

interface CarRun {
	//int carCount; //오류가 난다. 상수만 되기 떄문이다.
	int carCount=5; //인터페이스의 멤버변수를 선언할때 접근제어자를 안붙이면, JVM에서 public static final로 자동지정한다.
	
	//public carRun() {} //인터페이스는 생성자를 가질 수 없으므로 오류가 난다.
	
	//static {System.out.println("dd");} //static블록을 선언할 수 없다.
	
	void prn(); //public abstract의 키워드를 자동지정한다.
	
	//void display() {} //인터페이스의 모든 메소드는 추상메소드여야 하므로 구현부가 나오면 틀린다. 
	
	class Sun{} //내부 클래스는 허용한다.
}

class TruckRun implements CarRun, Serializable{ //인터페이스는 implement키워드를 통해 다중상속이 가능하다. 
	@Override
	public void prn() {
		System.out.println("prn");
	}
}
public class java105_interface {

	public static void main(String[] args) {
		System.out.println(CarRun.carCount); 
		
		TruckRun tr = new TruckRun();
		tr.prn();
	}
}
