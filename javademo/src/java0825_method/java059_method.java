package java0825_method;

public class java059_method {

	public static void main(String[] args) {
		int data = 10;
		
		if(process(data)) {
			System.out.printf("%d(은) 짝수입니다.\n", data);
		}
		else {
			System.out.printf("%d(은) 홀수입니다.\n", data);
		}

	}

	public static boolean process(int data) { 
		boolean chk;
		
		if(data % 2 == 0)
			chk = true;
		else 
			
			chk = false;
		
		return chk;
	}
}
