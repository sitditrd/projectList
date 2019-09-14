package java0821_basic;

public class Java009_operator {

	public static void main(String[] args) {
		int i=5;
		int j=0;
		
		//전위형 : 값이 참조되기 전에 증가시킨다.
		//i변수의 값이 1증가하고 j변수에 대입된다.
		//j=++i;
		
		j = i++;
		//후위형 : 값이 참조된 후에 증가시킨다.
		//j변수에 대입이되고 i의 값이 증가한다.
		System.out.println("j=" + j);
		System.out.println("i=" + i);
	}

}