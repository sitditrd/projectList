package java0829_class;

/*
 * static이 선언된 메소드에서는 비-static지원(멤버변수, 메소드)를 호출할 수 없다.
 */

public class java085_static {

	public static void main(String[] args) {
		display();	
		//process(); //오류가 난다. 
					 //이유 : 같은 클래스일지라도 static이 선언된 매소드는 static이 아닌 메소드를 호출할 수 없다. 
					 //메모리에 로딩되는 시점이 다르기 때문이다.
		
					 //방법 : 아래와같다. 객체를 생성해서 호출해야한다. 
		java085_static js = new java085_static();
		js.process();
	}
	
	public static void display() {
		System.out.println("display");
	}
	
	public void process() {
		System.out.println("process");
	}

}
