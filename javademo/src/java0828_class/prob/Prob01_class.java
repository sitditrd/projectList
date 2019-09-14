package java0828_class.prob;

/*피자의 반지름을 10, 도넛의 반지름은 2로 한다.
 * 
 * [실행결과]
 * 자바피자의 면적은 314.0
 * 자바도넛의 면적은 12.56
 */

class Circle {
	int radius; // 원의 반지름을 저장하는 멤버 변수
	String name; // 원의 이름을 저장하는 멤버 변수

	public double getArea() { // 멤버 메소드
		return 3.14 * radius * radius;
	}
}// end class////////////////////////

public class Prob01_class {

	public static void main(String[] args) {
		//여기를 구현하세요.////////////////////	
		Circle Cc = new Circle();
		Cc.radius = 10;
		Circle Cc2 = new Circle();
		Cc2.radius = 2;
		
		System.out.printf("자바도넛의 면적은 : %.2f\n", Cc.getArea());
		System.out.printf("자바도넛의 면적은 : %.2f\n", Cc2.getArea());
	}//end main()

}//end class
