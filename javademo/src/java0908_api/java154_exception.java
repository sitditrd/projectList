package java0908_api;

public class java154_exception {

	public static void main(String[] args) {
		String data1 = "12";
		String data2 = "0";
		
		try {
			int x = Integer.parseInt(data1);
			int y = Integer.parseInt(data2); //여기서 NumberFormatException이 발생한다. 
			int res = x / y;
			System.out.println(res);
		}
		catch(NumberFormatException ex) {
			System.out.println("숫자를 입력하세요.");
		}
		catch(ArithmeticException ex) {
			System.out.println("분모는 0보다 큰수를 입력하세요.");
		}
		catch(RuntimeException ex) {
			System.out.println(ex.toString());
		}
		catch(Exception ex) { //예외 클래스 중에서 Exception이 최상위 클래스이기 때문에
							  //맨 위에 쓰면 다른것들은 오류가 뜬다. 따라서 다중 try~catch문을 쓸때는 제일 상위에 있는 클래스를 제일 
							  //아래에 위치해야 한다. 
			System.out.println(ex.toString());
		}
		System.out.println("program end");
	}
}

//상속관계
/*
 * 					Exception
 * 
 * 				RuntimeException
 * 
 * NumberFormatException ArithmeticException
 * 
 * 상속관계가 아닌 NumberFormatException과 ArithmeticException은 try~catch문의 순서에 상관이 없다. 
 */




