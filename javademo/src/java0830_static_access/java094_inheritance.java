package java0830_static_access;

class SuperConst {
	int x, y;

	public SuperConst() {

	}

	public SuperConst(int x, int y) {
		this.x = x;
		this.y = y;
	}
}

class SubConst extends SuperConst {
	
	SubConst() {
		super(10, 40);
	}
}

/* 오류뜨는 이유 : 상속받은 자식은 JVM에서 기본생성자를 제공해서 부모클래스에서 기본생성자를 찾지만, 
 * 상속한 부모는 인자값이 있는 생성자를 사용하였기 때문에 JVM에서 부모클래스의 기본생성자가 생성되지 않아, 
 * 오류가 나는 것이다.
 */

public class java094_inheritance {

	public static void main(String[] args) {
		SubConst sc = new SubConst();
		System.out.printf("x = %d, y = %d\n", sc.x, sc.y);
	}

}
