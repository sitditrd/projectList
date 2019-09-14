package java0908_api;

public class java153_exception {

	public static void main(String[] args) {
		StringBuffer sb = null;
		try {
			sb.reverse();
		}
		catch(NullPointerException ex) { //메모리에 가르키는 문자열값이 없으므로.
			sb = new StringBuffer("java");
			System.out.println(sb.reverse());
		}
		System.out.println("program end");
		//finally는 try나 catch가 끝나고나서 반드시 finally를 해주어야 한다면 그 떄 finally를 써야 한다. 
		
		
	}

}
