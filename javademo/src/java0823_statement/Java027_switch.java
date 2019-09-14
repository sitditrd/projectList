package java0823_statement;

//계산기 프로그램

public class Java027_switch {

	public static void main(String[] args) {
		char ope = '/';
		int numX = 10;
		int numY = 5;
		int res = 0;
		
		switch(ope)
		{
		case '+' : res = numX + numY; break;
		case '-' : res = numX - numY; break;
		case '/' : 
			if(numX == 0) {
			System.out.println("나누고자하는 값은 0이 아니여야 합니다."); 
			}
			else {
				res = numX / numY;
			}
			break;
		case '*' : res = numX * numY; break;
		
		}
		
		System.out.println(res);
	}

}