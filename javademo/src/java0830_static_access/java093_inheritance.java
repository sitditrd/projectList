package java0830_static_access;

class MyGrand {
	public MyGrand() { //7
		System.out.println("MyGrand"); //8
	} //9
}

class MyFather extends MyGrand {
	public MyFather() { //5
		super(); //6
		System.out.println("MyFather"); //10
	} //11
}

class MyChild extends MyFather { 
	public MyChild() { //3
		//자손생성자에서는 반드시 부모생성자를 호출해야 한다.
		//부모생성자 호출이 생략되어 있으면 JVM에서 super()로 호출된다.
		super(); //4
		System.out.println("MyChild"); //12
	} //13
}
//상속관계에서 반드시 자식 클래스에 있는 생성자에서는 부모클래스에 있는 생성자를 호출해야한다.

//자식클래스에서 부모클래스에 있는 생성자를 호출한다. - super()
//자기자신을 의미하는 키워드 - this

public class java093_inheritance {

	public static void main(String[] args) { //1
		MyChild m = new MyChild(); //2

	} //14
	
} //15
