package java0904_binding;

/*
 * 정적 바인딩 : 컴파일 시점에서 포인터 변수의 자료형에 의해서 호출될 함수가 결정 되는 것
 * 
 * 동적 바인딩 : 컴파일할 때 호출할 멤버함수를 결정하지 않고, 프로그램이 실행되는 동안에, 
 * 함수 호출이 실제로 일어나는 시점에서 멤버함수가 어떤 클래스의 멤버함수인지를 결정하도록 하는 것.
 * 
 * 프로그램 실행 중에 포인터 변수가 가리키는 실체는 매번 변경되므로 동일한 포인터 변수로 함수를 
 * 호출하더라도 바인딩 되는 함수가 융통성 있게 바뀌어 호출되는 것.
 * 
 */

class BindTest extends Object {
	String stn;
	
	public BindTest() {
		
	}
	
	public BindTest(String stn) {
		this.stn = stn;
	}
	
	@Override
	public String toString() {
		return stn;
	}
}

public class java110_binding {

	public static void main(String[] args) {
		
		BindTest bt = new BindTest("test"); //객체의 생성범위와 참조하는 범위가 같다. 
		Object obj = bt; //업캐스팅이 발생된것이다.
		
		System.out.println(bt.toString()); //객체의 생성범위와 참조범위가 같을 때 정적바인딩이라고 한다.
		System.out.println(obj.toString()); //동적바인딩이 발생된것이다.
		
		process(bt); //동적바인딩이 발생된것이다.
		process(new String("java")); //정적바인딩이 발생된 것이다.
		
	}
	
	//is-a(상속) -> (up-casting)업캐스팅->dynamic binding(동적바인딩)
	public static void process(Object obj) { 
		System.out.println(obj.toString());
	}

}
