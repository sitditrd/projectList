package java0821_basic;

public class Java012_operator {

	public static void main(String[] args) {
		int a = 3;
		int b = 5;
		int c = 7;
		
		boolean res = (++a > b) && (++b < c); // &&연산자는 좌변이 false면 무조건 false로 처리한다. 
											 
		System.out.println("a=" + a);
		System.out.println("b=" + b);
		System.out.println("res=" + res);
		
		int x = 4;
		int y = 8;
		int z = 10;
		
		res = (x > ++y) || (++x > y);  // ||연산자는 좌변이 true면 무조건 true로 처리한다. 
		
		System.out.println("x="+ x);
		System.out.println("y="+ y);
		System.out.println("res="+ res);
	}

}