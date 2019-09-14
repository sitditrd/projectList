package java0831_abstract_interface;

/*
 * 클래스 종류 : 클래스, 추상클래스, 인터페이스
 * 
 * 클래스 : 모든 매소드가 구현이 되있는 클래스
 * 추상 클래스 : 메소드중에 선언부만 정의되어 있는것을 하나라도 가진 클래스
 * 인터페이스 : 모든 메소드가 선언부만 가지고 있는 클래스
 * 
 * 메소드 정의 : 메소드 선언부 + 메소드 구현부
 * public void prn()-선언부 {
 * -구현부
 * }
 * 
 * 추상메소드 : 선언부만 정의되어 있는 메소드이다. ex) abstract public void prn(); 
 * 
 * 추상 클래스 : 위와 같은 추상메소드를 하나라도 있는 클래스 ex) abstract public class Test(); or public abstract class Test();
 * 
 * 추상클래스 제공 목적 : 추상메소드를 강제적으로 오버라이딩하고 객체생성을 할 수 없도록 하기 위해서 제공한다.
 */

/*
 * Car : 속도, 색상, 움직인다, 속도를 높인다, 멈춘다. work();
 * Senda : (속도, 색상, 움직인다, 속도를 높인다. 멈춘다.) 사람을 태운다.
 * Truck : (속도, 색상, 움직인다, 속도를 높인다. 멈춘다.) 짐을 싣는다.
 * (공통점)->은 상위클래스로 뺀다. 주업무는 같고 하는일이 다르기 때문이다. 
 * 
 * Car : 속도, 색상, 움직인다, 속도를 높인다, 멈춘다. work();(특정작업을 하는 것(추상메소드를 만들어 놓고))
 * 
 * Senda extends Car work중 ->사람을 태운다.
 * (여기서 work() 추상메소드를 정확히 구현하여 하는일만 다르게 구현하는 것 이다.(오버라이딩) => Car와 하는일이 다르기 때문에)
 * 
 * Truck extends Car work중 ->짐을 싣는다.
 * (여기서 work() 추상메소드를 정확히 구현하여 하는일만 다르게 구현하는 것 이다.(오버라이딩) => Car와 하는일이 다르기 때문에)
 * 
 * 결과적으로 상위클래스로 갈수록 추상메소드가 많아진다. 
 */

abstract class CarAbs { //추상메소드를 하나 가지고 있으니 추상클래스로 선언을 해주어야 한다. 
	int speed;
	String color;
	
	void upSpeed(int speed) { 
		this.speed = speed;
	}
	
	abstract void work(); //이렇게 선언부만 있는 추상메소드라 한다.
}

class TruckAbs extends CarAbs { //추상클래스를 상속을 받고 추상클래스의 추상메소드를 오버라이딩 안하면 하위클래스에서 상속을 받아도 오류가 난다.ㅂ
	@Override //따라서 오류를 없애기 위해서는 추상메소드를 오버라이딩 해주어야 한다. 
	void work() {
		System.out.println("트럭에 짐을 싣고 있다.");
	}
}

class SendaAbs extends CarAbs {
	@Override
	void work() {
		System.out.println("승용차가 사람을 태우고 있습니다.");
	}
}

public class java102_abstract {

	public static void main(String[] args) {
		
		//CarAbs ca = new CarAbs(); //추상클래스는 객체생성을 할 수 가 없다. 
							      //이유 : 완벽한 클래스가 아니기 때문이다.(추상메소드를 하나라도 가지고 있는 추상클래스)
		TruckAbs truck = new TruckAbs();
		truck.work();
		
		SendaAbs senda = new SendaAbs();
		senda.work();
	}

}
