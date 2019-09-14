package java0914_collection;

//제너릭(generic) : 컬렉션 클래스에 저장된 객체를 가져올 때 다운캐스팅하는 작업을 생략할 수 있도록 제공해주는 기능이다. 

class Box<T> { // 제너릭을 주려면 임의의 문자를 넣는다.
	private T data;

	public Box() {

	}

	public Box(T data) {
		this.data = data;
	}

	public void setData(T data) { // setD하고 ctrl + space하면 자동완성이 된다.
		this.data = data;
	}

	public T getData() {
		return data;
	}
}

public class java199_User {

	public static void main(String[] args) {

		Box<Integer> box = new Box<Integer>(); // 위의 class에서 T는 자동으로 Integer가 된다.
		box.setData(new Integer(10));
		System.out.println(box.getData());
		
		Box<String> box2 = new Box<String>("java");
		System.out.println(box2.getData());
	}

}
