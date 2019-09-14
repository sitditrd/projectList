package java0831_abstract_interface;

/*
 * final 
 * 1. 변수 : 변수에 final을 명시하면 상수로 사용된다.
 * 
 * int num = 20;
 * num = 20;
 * 
 * final int DATA; 이렇게 못한다. final이 선언된것은 항상 숫자값을 넣어주어야 하기 떄문이다.
 * final int DATA=5; final의 변수는 일반변수와 구분하기 위해 대문자로 쓰도록 권장한다. 
 * DATA=15; 이렇게 못한다 새로운 값으로 할당 할 수 없기 때문이다.
 * 
 * 2. 메소드 : 메소드에 final을 명시하면 그 메소드는 오버라이딩을 할 수 없다.
 * final void prn() {};
 * 
 * 인터페이스에 있는 메소드에 final의 키워드를 선언할 수 없다. 이유는 오버라이딩을 해야하는 추상메소드이기 때문이다.(오버라이딩을 하지 못하기 때문)
 * 
 * 3. 클래스 : 클래스에 final을 명시하면 상속을 할 수 없다. 따라서 더이상 확장이 필요없거나 완벽한 클래스에 지정한다.
 * final class Test {}
 * 
 */

class FinalTest {
	final int CODE=1;
	
	void display() {
		//CODE = 10; //final이 선언되어 있는 변수는 새로운 값을 할당할 수 없다고 오류가 뜬다.
	}
	
	final void process() {
		System.out.println("process");
	}
	
	void call() {
		System.out.println("call");
	}
}

class UserFinal extends FinalTest {
	
	void call() {
		System.out.println("user call");
	}
	
	//void process() {} //오버라이딩이 안된다. 
}

final class Base {
	
}

/*class Expand extends Base { //final class Base는 서브클래스를 가질 수없다고 오류가 뜬다.
	
}*/


public class java108_final {

	public static void main(String[] args) {
		FinalTest ft = new FinalTest();
	}

}
