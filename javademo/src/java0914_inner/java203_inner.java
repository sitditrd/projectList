package java0914_inner;

class OuterStatic {
	private int x;
	static private int y;
	
	static void call() {
		y = 9;
		System.out.println(y);
	}
	
	static class InnerStatic { 
		int z;
		
		void prn() {
			//x = 40; //x변수에 static이 붙어있지 않아서 오류가 난다.
			//즉, 비 static 외부 자원을 static 내부클래스에서 참조할 수 없다는 말이다. 
			
			y = 20;
			z = 30;
			
			System.out.printf("%d %d\n", y, z);
		}
	}
}

public class java203_inner {

	public static void main(String[] args) {
		OuterStatic.call(); //call에 static이 선언되어 있으니까 객체를 생성안해도 이렇게 접근해서 실행할 수 있다.
		
		System.out.println("----------------------------------------");
		OuterStatic.InnerStatic inner = new OuterStatic.InnerStatic();
		inner.prn();
	}

}
