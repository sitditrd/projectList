package java0829_class;

/*
 * 오버로딩(overloading)
 * 1. 하나의 클래스에 같은 이름의 메소드를 여러개 정의하는 것을 오버로딩이라한다.
 * 2. 오버로딩의 조건
 * 	1) 메소드의 이름이 같아야 한다.
 * 	2) 매개변수의 갯수 또는 데이터 타입이 달라야 한다.
 * 	3) 리턴타입은 오버로딩 성립에 영향을 주지 않는다.
 * 		
 */

class Calculator {
	void addValue(int x, int y) { //3 // 오버로딩이란, 객체지향에서는 매개변수를 다르게, 데이터타입을 다르게 지정을 한다. 그러면 오류가 안나기 때문이다.
									  // 이유 : 관리할 대상이 많아지기 때문에
		System.out.println(x + y); //4
	} //5

	void addValue(int x, int y, int z) { //7
		System.out.println(x + y + z); //8
	} //9
 
	void addValue(double x, double y) { //11
		System.out.println(x + y); //12
	} //13
	
	/*double addValue(double x, double y) { //이렇게 쓰면 오류가 뜰 것이다. 메소드가 중복되었기 때문이다. (리턴타입은 영향을 끼치지 않는다.)
									        //매개변수의 데이터 타입이 같으면 갯수라도 달라야 하는데 
									        //그렇치 못하여, 오버로딩이 성립이 되지 않는다.(똑같은 메소드로 인식을 한다.)
		return 0.0;
	}*/
}

public class java079_overloading {

	public static void main(String[] args) {
		Calculator cal = new Calculator(); //1
		
		cal.addValue((4), 8); //2
		cal.addValue(2,7,5); //6
		cal.addValue(1.0, 2.0); //10
	} //14
 
} //15
