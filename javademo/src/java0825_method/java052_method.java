package java0825_method;

/*
 * method(메소드) 정의
 * 
 * 1. 값을 계산하기 위해서 사용되는 기능이다.
 * 2. 객체의 동작을 처리하기 위한 기능이다.
 * 
 * method 구조형태 : 메소드 선언부 + 메소드 구현부
 * 
 * 리턴데이터타입 메소드명(데이터타입 매개변수) --- 메소드 선언부의 구조
 * {
 * 
 * 	---메소드 구현부 : 메소드가 처리해야할 로직 구현;
 * 
 * 	return 값; ---메소드를 빠져나가기 위해
 * }
 * 
 * 1. 리턴값이 없고 매개변수도 없다.
 * 
 * void add() {
 * int x = 10;
 * int y = 20;
 * System.out.println(x+y);
 * return; //void타입이기 떄문에 리턴해주는 값을 주면 안된다.
 * }
 * 
 * add(); //로 호출하여 메소드를 사용할 수 있다. 
 * 
 * 2. 리턴값은 없고 매개변수는 있다.
 * 
 * void plus(int x, int y)
 * {
 * System.out.println(x+y);
 * }
 * 
 * plus(10, 20); //로 매개변수를 주어서 메소드를 호출하여 사용할 수 있다.
 * System.out.println(plus(10,20)); // 이렇게는 쓸 수 없다. 리턴값이 없는 void형인 메소드이기 때문이다. 
 * 
 * 3. 리턴값은 있으나 매개변수가 없다.
 * double avg() {
 * int total = 15;
 * return total/3.0; //리턴값의 타입이 메소드의 반환형 타입과 같아야 한다. 
 * }
 * 
 * double res = avg(); // 메소드를 호출하여 res변수에 값을 대입한다.
 * System.out.println(avg()); //이렇게 쓸수있다. 5.0이란 값을 메소드에서 double형으로 반환하기 때문이다. 
 * 
 * 4. 리턴값도 있고 매개변수도 있다.
 * 
 * double avg(int x, int y)
 * {
 * return((x+y)/2.0);
 * }
 * 
 * double res = avg(10.20);  //메소드를 호출하여 res변수에 값을 대입한다.
 * System.out.println(avg(10,20)); //이렇게 쓸수있다. 메소드에서 double형으로 반환하기 때문이다.
 * 
 */

public class java052_method {

	//중요!! 
	//프로그램을 실행하면 JVM(자바가상머신)에서 main스레드가 main()메소드를 호출한다.
	
	//main()메소드를 정의
	public static void main(String[] args) { //메소드 선언부 //1
	//이 바디문(중괄호)가 메소드 구현부이다. 
		System.out.println("main start"); //2
		
		makeTest(); //makeTest()라는 메소드를 호출한다 . //3
		
		System.out.println("main end");	//7
	} //end main //8
	
	//makeTest()메소드를 정의
	public static void makeTest() { //4
		System.out.println("makeTest run"); //5
	} //end makeTest //6

}//end class
