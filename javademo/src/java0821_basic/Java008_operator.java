package java0821_basic;

public class Java008_operator {

	public static void main(String[] args) {
		int x = 3;
		++x; // x = x+1과 같다. 처리되는 속도는 ++x가 훨씬 빠르다.
		//증가연산자 : 변수의 값을 1증가한다.
		System.out.println("x="+x);
		
		int y = 5;
		--y; // y = y-1과 같다. 
		//감소연산자 : 변수의 값을 1감소한다.
		System.out.println("y="+y);
		
		//cf 리터럴값은 (증가, 감소)연산자를 사용할수 없다. 10++, 10--는 없다는 것이다.
		
		//keyword(예약어) : 프로그램에서 어떤 의미를 부여해서 정의해놓은 단어
		
		final int DATA=5; // final을 붙이면 변수를 상수 취급한다. 따라서 변수를 대문자로 쓴다.(관례)
		//final 예약어가 선언될 변수를 "상수"로 만든다.
		//상수에는 증가연산자, 감소연산자를 사용할 수없다. 즉 DATA++이 안된다는 것이다. 
	
	}

}