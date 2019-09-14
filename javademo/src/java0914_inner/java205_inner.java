package java0914_inner;

abstract class InnerAnonymous {
	abstract void prn();
}

class Test extends InnerAnonymous {
	@Override
	void prn() {
		System.out.println(10);
	}
}

class OuterAnonymous {
	private int x;
	
	public void call() {
		//원래는 추상클래스 가지고 객체를 생성할 수 없다.
		/*InnerAnonymous tt = new InnerAnonymous() { // InnerAnonymous 우리가 말하는 정의한 클래스가 아니다. 
												   // tt변수에 저장할수 있는 데이터 타입이다. tt의 범위는 InnerAnonymous안이다. 
												   // 안드로이드에서 많이 사용된다. WebApplication을 많이 사용하기 때문에 안드로이드도 해야한다.

			@Override
			void prn() {
				x = 5;
				System.out.println(x);
			}
		};
		
		tt.prn();*/
		
		//추상 메소드 하나만 호출하려면 아래와 같이 한다. 호출하려는 값이 여러개라면 위와 같이 InnerAnonymous를 가리키는 tt참조변수를 선언해야한다. 
		//이와같은 과정은 객체생성이 아니다. 
		
		new InnerAnonymous() {
			@Override
			void prn() {
				x = 5;
				System.out.println(x);
			}
		}.prn();           
	}
}

public class java205_inner {

	public static void main(String[] args) {
		Test t1 = new Test();
		t1.prn();
		
		Test t2 = new Test();
		t2.prn();
	}
}
