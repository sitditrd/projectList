package java0828_class;

/*
 * [사각형 도형]
 * 
 * 가로	세로		넓이구하다 		둘레구하다
 * 5	3		15			16
 * 7	4		28			22
 * 
 * [객체모델링과정]
 * 
 * 객체의 특징 : 가로, 세로
 * 객체의 기능 : 넓이를 구한다. 둘레를 구한다.
 * 
 * [출력결과]
 * [가로 5, 세로4의 사각형]
 * 넓이 : 15
 * 둘레 : 18
 */

class Rect {
	int width, height;
	
	int area() {
		return width * height;
	}
	
	int grith() {
		return (width + height) * 2;
	}
	
	void prn() {
		System.out.printf("[가로%d, 세로%d의 사각형]\n", width, height);
		System.out.println("넓이 : " + area());
		System.out.println("둘레 : " + grith());
	}
}

public class java067_class {

	public static void main(String[] args) {
		Rect re = new Rect();
		re.width = 5;
		re.height = 4;
		
		re.prn();
		
		System.out.println("=======================");
		
		Rect re2 = new Rect();
		re2.width = 7;
		re2.height = 4;
		re2.prn();
	}

}
