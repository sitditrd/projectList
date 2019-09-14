package java0904_api;

/*
 * [출력결과]
 * 
 * aerok
 * korea
 */

public class java119_String {

	public static void main(String[] args) {
		String sn = "korea";
		char[] data = display(sn);
		System.out.println(data);
		System.out.println(sn);

	}
	
	public static char[] display(String alpa) {
		//alpa매개변수에 저장된 문자열을 reverse한 후 반환하는 프로그램을 구현하세요.
		String sn2 = alpa;
		char sn3[] = new char[sn2.length()];
		
		int index = 0;
		index = sn2.length()-1;
		for(int i=index, j=0; i>=0; i--, j++) {
			sn3[j] = sn2.charAt(i);
		}
		
		return sn3;
	}

}
