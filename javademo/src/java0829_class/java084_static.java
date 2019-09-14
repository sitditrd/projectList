package java0829_class;

/*
 * class 클래스명  {
 * 멤버변수
 * static{}
 * 생성자() {}
 * 메소드() {}
 * 내부 클래스;
 * }
 */

class OrderStatic {
	static {
		System.out.println("static");
	}
	
	public OrderStatic() {
		System.out.println("constructor");
	}
	
	public void prn() {
		System.out.println("prn");
	}
}

public class java084_static {

	public static void main(String[] args) {
		OrderStatic os = new OrderStatic();
		os.prn();
	}

}
