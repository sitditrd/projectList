package java0821_basic;

public class Java007_operator {

	public static void main(String[] args) {
		int a = 3;
		int b = 4;
		
		System.out.println(a+b); //산술연산자
		System.out.println(a+"는(은) 3입니다."); //+는 문자열 연결의 의미로 사용된다.
		System.out.println("a="+a);
		
		System.out.println("결과 = "+ a+b); // (결과는 3)과 4가 연결되어 결과는 34가 된다
										  // 따라서 ("결과 = "+ (a+b)) 안에 괄호를 먼저 씌어야 한다.
		
	}

}