package java0830_static_access;

//단일 클래스에서는 오버로딩이 있지만 상속관계에서는 오버라이딩이 있다.

//오버로딩 : 이름이 같은 매소드를 여러개 정의할 수 있는 기능이다. 
//오버라이딩 : 조상클래스의 메소드를 자손클래스에서 재정의하는 기능이다.

/*
 * 오버라이딩(overriding)
 * 1 조상클래스의 메소드를 자손클래스에서 재정의(메소드 구현부)하는 기능이다.
 * 2 메소드의 선언부는 그대로 사용한다.(리턴데이터타입, 메소드명, 매개변수)
 *   단, 접근제어자는 같거나 크면된다.
 *   private < default < protected < public
 * 3 오버라이딩은 상속을 받은 후 할 수 있다.
 * 
 *  super
 *  1. 자손클래스에서 조상클래스를 호출할 때 사용한다.
 *  2. super.멤버변수
 *     super.메소드 ( )
 *     super( ) => 생성자
 *    
 *  단일클래스                    상속관계의 자손클래스
 *   overloading  vs  overriding
 *   this         vs  super   
 *
 */

class First {
	int a = 10;
	void prn() {
		System.out.println("a = "+a);
	}
}

class Second extends First {
	int b = 20;
	
	@Override // 5.0버전에서부터 @Override의 기능을 추가하여 오버라이딩이 정확하게 되는지를 판단해준다.
	 protected void prn() { //오버라이딩시 상속의 관계여야 하면서, 접근제어자가 더 커야 한다. 
		 					//따라서 여기는 protected거나 public이여야 한다. 
		System.out.println("b = "+b);
	}
	
	//메인에서 오버라이딩 된 메소드 전을 출력하려면 아래와 같이 한다. (반드시 상속받은 클래스에서 해야한다.)
	
	/*public void call() {
		super.prn();
		this.prn(); //prn()도 상관없다.
	}*/
	
	public static void display() {
		System.out.println("display");
	}
	
	public static void call() { //static이 선언된 메소드에서는 super나 this를 사용할 수 없다.
								//static은 클래스가 선언되는 시점에 생성되는데 super와 this는 new한 다음에
								//즉 객체 생성이 완료된후 생성이 되기 때문에 생성시점차이로 인해 오류가 나는 것이다. 
		/*
		super.prn();
		this.prn(); //prn()도 상관없다.
		*/
		display(); //이렇게는 사용할 수 있다. static 메소드를 불러오는 것이기 때문이다.
		//this.display(); //는 되지 않는다. 
	}
	
}

public class java096_inheritance {

	public static void main(String[] args) {
	
		Second sd = new Second();
		//sd.prn(); //오버라이딩이 된 prn메소드를 호출한다. 
		
		sd.call();
	}

}
