package java0907_api;

/*
 * sn변수에 저장된 문자열중에서 숫자갯수를 출력하는
 * 프로그램을 구현하시오.
 * [출력결과]
 * 숫자갯수 : 3
 */

public class java144_Wrapper {

	public static void main(String[] args) {
		String sn = "korea12 paran3";
		
		int count=0;
		/*char[] array = new char[sn.length()];
		array = sn.toCharArray();
		
		for(int i=0; i<array.length; i++) {
			if(array[i]-48 >= 0 && array[i]-48 <= 9) {
				count++;
			}
		}*/
		
		for(int i=0; i<sn.length(); i++) {
			if(Character.isDigit(sn.charAt(i)))
				count++;
		}
		
		System.out.println("숫자갯수 "+ ": " + count);
		
	}

}
