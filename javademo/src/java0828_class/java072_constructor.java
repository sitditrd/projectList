package java0828_class;

/*
 * this : 객체 자신을 의미한다.
 * this.멤버변수;
 * this.메소드();
 * this(); //생성자
 * 
 */

class Product {
	String code;
	String pname;
	int cnt;
	
	public Product() {}

	//마우스 오른쪽 클릭 -> source -> 밑에서 3번째 클릭하면 자동생성
	public Product(String code, String pname, int cnt) {
		super();
		this.code = code;
		this.pname = pname;
		this.cnt = cnt;
	}
	
	/*public Product(String code, String pname, int cnt) {
		this.code = code; //멤버변수와 매개변수가 같을 때 멤버변수에 this키워드를 명시한다. 
		                  //this는 맴버변수에만 붙일 수 있기 때문에 구분할 수 있다. 
		this.pname = pname;
		this.cnt = cnt;
	}*/
	
	public void prn() {
		System.out.printf("%s %s %d\n", code, pname, cnt);
	}
	
	public void call() {
		this.prn(); //이렇게 메소드를 호출할 수 있지만 일반적으로 이렇게 쓰지는 않는다.
	}
	
}
public class java072_constructor {

	public static void main(String[] args) {
		Product pt = new Product("a001", "육류", 2);
		pt.prn();
	}

}
