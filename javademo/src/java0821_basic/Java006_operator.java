package java0821_basic;

public class Java006_operator {

	public static void main(String[] args) {
		int a = 10;
		int b = 3;
		
		System.out.println(a/b);
		//3
		System.out.println(a%b);
		//1
		System.out.println((double)(a/b)); //계산이 되고 double로 묵시적 형변환을 해준다. 
		//3.0
		System.out.println((double)a/b); //처음부터 double로 계산이 된다.
		//3.3333333333333....
		
	} //end main
} //end class