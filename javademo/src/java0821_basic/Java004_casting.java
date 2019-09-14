package java0821_basic;

public class Java004_casting {

	public static void main(String[] args) {
		int x = 3;
		double y = 4.5;
		
		y = (double)5; 
		//int형 -> double형  : 작은것에서 큰것으로 변환이 될때는 자동으로 형변환을 해주기 때문에 이때는 묵시적 형변환이라고 한다. (굳이 캐스팅 타입을 명시하지 않아도 된다.)
		
		x = (int)2.6;
		//double -> int형 큰것에서 작은것으로 변환이 되기 위해서는 캐스팅 연산자를 해주어한다. 이를 명시적 형변환이라고 한다.
		
		System.out.println(y);
		System.out.println(x);
		
		char data = 'a';
		
		//char = int (큰거에서 작은거 묵시적형변환)
		data = 65;
		// char형 변수에 정수값을 집어넣을 때는 유니코드 값으로 변경이 되어 인식한다.
		System.out.println(data);
		
		/*
		 * 컴퓨터 : 0,1만 인식
		 * 문자 5 -> 101로 이진수로 바뀌어서 저장이 된다.
		 * 자바에서는 아스키코드값이 아닌 유니코드를 사용한다.
		 * 문자 'A' = 65
		 * 문자 'a' = 97
		 * 대문자와 소문자의 차이 = 32
		 * 숫자 0 = 48
		 */
		
		char alpa = 'A';
		alpa += 32;
		System.out.println(alpa);
		
		x = '0'; //문자->숫자 / 숫자->문자는 유니코드가 자동으로 변환되기 떄문에 캐스팅연산자를 안해주어도 된다.
		System.out.println(x);
		
		int a = 20;
		short b = (short)a;
		
		short d = 50; 
		d = (short)a; //큰값에서 작은값으로 들어가면 명시적 형변환을 해주어야한다.
		
		System.out.println(b);
		System.out.println(d);
		
		byte c = 40; //큰값에서 작은값으로 들어가면 명시적형변환을 해주어야한다. 하지만 이 경우는 안해주어도 된다.
		
		System.out.println(c);
		
	} //end main

} // end class

