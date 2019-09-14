package java0828_class;

//홍길동 30 M
//갑동이 25 F

//사용자가 정의한 데이터 타입
class Person {
	// 멤버변수
	String name;
	int age;
	char gen;

	// 메소드
	void eat() {
		System.out.println("eat");
	}

	void run() {
		System.out.println("run");
	}
}

public class java065_class {

	public static void main(String[] args) {
		Person ps; // 객체참조변수 선언
		ps = new Person(); // 객체생성  -> 이것도 가능 Person ps = new Person();

		ps.name = "홍길동";
		ps.age = 30;
		ps.gen = '남';
		
		//멤버변수에 있는 값은 객체참조변수로 접근하여 출력가능하다. 
		System.out.printf("%s %d %c\n", ps.name, ps.age, ps.gen);
		ps.eat(); //System.out.println(ps.eat()); // eat의 리턴값이 void형이기 떄문에 이렇게는 사용할 수 없다.
		ps.run(); 
		
		Person pn = new Person();
		
		pn.name = "이영희";
		ps.age = 25;
		ps.gen = '여';
		
		System.out.printf("%s %d %c\n", pn.name, ps.age, ps.gen);
		pn.eat();
		pn.run();
	}

}
