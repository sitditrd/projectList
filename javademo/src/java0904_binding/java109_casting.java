package java0904_binding;

/*
 * 데이터 타입
 * 1. 기본데이터타입 : byte, short, int, long, float, double, boolean, char 
 * 2. 참조데이터타입 : array, class, interface
 * 
 * 인자전달방식
 * 1. call by value - 값복사 - 기본데이터 타입
 * 	void add(int a, int b) {}
 * 	add(10,20);
 * 
 * 2. call by reference - 주소복사 - 참조데이터 타입
 * 	void process(int[] arr) {}
 * 	process(new int[]){1,2,3};
 * 
 * 형변환(casting) - 기본데이터 타입
 * 
 * 1. 묵시적형변환 : 작 -> 큰
 * 2. 명시적형변환 : 큰 -> 작
 * 
 * 	int num = 3;
 *	double data = num; //묵시적형변환
 *	short val = (num)int; //명시적형변환
 * 
 * 객체형변환 - 참조데이터타입
 * 1. 상속관계일때 형변환이 가능하다(is a 관계일 때)
 * 2. 업캐스팅 발생된 후 다운캐스팅을 할 수 있다.
 * 
 * 업캐스팅(up-casting) : 부모객체로 자식객체를 참조하도록 형변환하는 기술 -> 객체간의 결합도를 낮추기 위해서 사용한다. 
 * 다운캐스팅(down-casting) : 업캐스팅을 다시 원상복귀해주는 형변한하는 기술
 * 
 * 다형성(polymorphism)
 * 1. 사전적 의미는 '여러가지 형태를 가질 수 있는 능력'을 의미한다.
 * 2. 자바에서는 현 타입의 참조변수로 여러 타입의 객체를 참조하는 기술이다.
 * 	예를 들면, 조상클래스 타입의 참조변수로 자손클래스의 인스턴스를 참조할 수 있도록 할 수 있다는 것이다.
 * 
 * 바인딩(binding) : 메소드 호출을 실제 메소드의 몸체와 연결하는 기술이다.
 * 
 * 1. 정적바인딩(static binding) : 컴파일단계에서 어떤 클래스의 어떤 메소드가 호출되는지 연결하는 기술
 * 
 * 2. 동적바인딩(dynamic binding) : 실행단계에서 어떤 클래스의 어떤 메소드가 호출되는지 연결하는 기술
 * 
 * 
 */

class Parent {
	void process() {
		System.out.println("Parent");
	}
}

class Child extends Parent {
	void call() {
		System.out.println("Child");
	}
	
	void process() {
		System.out.println("Child process");
	}
}

class Sun extends Parent {
	void prn() {
		System.out.println("Sun");
	}
	
	void process() {
		System.out.println("Sun process");
	}
}

class Outer {
	void prn() {
		System.out.println("Outer");
	}
}

public class java109_casting {

	public static void main(String[] args) {
		Parent p = new Parent();
		Outer t = new Outer();
		//p = t; //서로 독립된 객체끼리는 형변환이 되지 않는다.
		Child c = new Child();
		p=c; //is a관계이면 형변환이 가능하다. 업캐스팅 : 부모객체를 가지고 자식 객체를 참조한다. 
		p.process();
		//p.call(); //Parent에는 call이라는 메소드가 없기 떄문에 오류가 뜬다.
		
		Parent pt = new Child(); //객체생성하면서 바로 업캐스팅을 한 것이다.
		
		Child cn = (Child)pt;
		cn.process();
		cn.call();
		
		Parent pe = new Sun(); //객체생성하면서 바로 업캐스팅을 한 것이다.
		pe.process();
		
	}

}
