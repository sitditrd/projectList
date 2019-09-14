package java0830_static_access;

class Parent {
	String name;
	int age;
	
	public Parent() {
		
	}
	
	public Parent(String name, int age) { //5
		this.name = name; //6
		this.age = age; //7
	} //8
}

class Sun extends Parent{
	
	String dept;
	
	public Sun() {
		
	}
	
	public Sun(String name, int age, String dept) { //3
		//this.dept = dept; //순서가 먼저오면 안된다. super()는 항상 먼저 와야 한다.
		super(name, age); //상속받은 부모클래스에 알맞는 생성자가 있으므로. //4
		this.dept = dept; //9
	} //10
	
	public void prn() { //12
		System.out.printf("%s %d %s\n", name, age, dept); //13
	} //14
	
}
public class java095_inheritance {

	public static void main(String[] args) { //1
		Sun ss = new Sun("홍길동", 50, "기획부"); //2
		ss.prn(); //11
	} //15

} //16
