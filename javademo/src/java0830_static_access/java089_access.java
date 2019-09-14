package java0830_static_access;

class MeTest {
	private MeTest() { //생성자에도 접근제어자를 붙일 수 있다.
		System.out.println("private");
	}
	
	MeTest(int a) {
		System.out.println(a);
	}
}

public class java089_access {

	public static void main(String[] args) {
		//MeTest mt = new MeTest(); //생성자에게 접근할 수 없다. private으로 설정되있기 때문에 다른 클래스라서 객체참조변수를 쓸수가 없다.
		
		MeTest ts = new MeTest(10); //이 경우 생성자가 default이기 떄문에 접근이 가능하다.
		
	}

}
