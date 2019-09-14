package java0914_inner;

class OuterLocal {
	private int x;
	static int y;
	final private int z = 10;
	
	public void call(int a) { //2
		final int b = 20; //3
		int c = 30; //4
		
		//a = 200; //아래와는 다르게 a는 오류가 발생하지 않는다. 이때는 final로 붙어서 처리가 안되기 때문이다. 
		//System.out.println("a = " + a);
		
		class InnerLocal { //클래스는 정의를 해놓았다고 해서 메모리에 생성이 안된다. 메모리에 올려서 사용을 하려면 객체생성을 해야 한다. 
			void prn() { //7
				x = 5; //8
				y = 150;
				//a = 30; //오류가 나온다. a는 final로 붙어서 처리되기 때문이다.
				//즉, outer클래스의 메소드에 정의된 매개변수, 지역변수를 지역내부클래스에서 새로운 값을 할당할 수 없다.
				
				//c=40; //이것 역시 오류가 난다. 
					    //내부클래스에서는 외부클래스에 있는 메소드의 매개변수나 지역변수값을 변경할수가 없다. final로 처리하기 때문이다. 
						//단 출력은 가능하다. 변경된 값이 출력이 안된다는 것이다. 오직 참조만 가능하다.
				System.out.println("x = " + x); //9
				System.out.println("y = " + y);
				System.out.println("z = " + z);
				System.out.println("a = " + a);
				System.out.println("b = " + b);
				System.out.println("c = " + c);
			} //10
		} 
		
		InnerLocal inner = new InnerLocal(); //5
		inner.prn(); //6
		
	}//11
}

public class java204_inner {

	public static void main(String[] args) {
		OuterLocal outer = new OuterLocal(); 
		outer.call(100); //1
		
	} //12

}
