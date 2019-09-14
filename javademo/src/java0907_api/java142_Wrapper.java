package java0907_api;

/*
 * 기본자료형을 클래스로 정의해놓은 것을 Wrapper라 한다. 
 * 
 * char -> Character
 * byte -> Byte
 * short -> Short
 * int -> Integer 
 * long -> Long
 * float -> Float
 * double -> Double
 * boolean -> Boolean
 * 
 * 2. 메모리에 저장된 값을 다른 자료형으로 변환해주는 메소드를 제공하기 위해서 Wrapper클래스를 제공한다.
 * 
 * 3. auto boxing과 auto unboxing은 jdk5.0에서 추가된 기능이다.
 * auto boxing -> 스택 -> 힙영역에 복사
 * auto unboxing -> 힙 -> 스택영역에 복사
 */

public class java142_Wrapper {

	public static void main(String[] args) {
		String data = "1234";
		
		//String -> Integer객체로 가져오겠다.
		Integer it = new Integer(data);
		
		//Integer -> int
		int num = it.intValue();
		System.out.println("num = "+num);
		
		//Integer -> double 
		double pro = it.doubleValue();
		System.out.println("pro = "+pro);
		
		//Integer -> long
		long nn = it.longValue();
		System.out.println("nn = " + nn);
	
		//String -> Float객체로 가져오겠다.
		Float ft = new Float(data);
		
		//Float -> int
		int fx = ft.intValue();
		System.out.println("fx = "+fx);
		
		//float -> double
		double de = ft.doubleValue();
		System.out.println("de = "+de);
		
		//String -> int
		int num1 = Integer.parseInt(data);
		System.out.println("num1 = "+num1);
		
		//String -> double
		double num2 = Double.parseDouble(data);
		System.out.println("num2 = "+num2);
		
		int x = 10; //stack 
		//Integer ig = new Integer(x); //이렇게 하면 heap에 저장이 된다.
		//위의 과정이 jdk5.0이후 부터 아래와 같이 해도 동일하다. 
		Integer ie = x; //auto boxing(stack -> heap)
		
		//int k = ie.intValue(); //heap->stack
		int y = ie; //auto unboxing(heap -> stack)
		System.out.println("y = " + y);
	}

}
