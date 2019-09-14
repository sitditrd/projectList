package java0907_api.prob;

/*
 * javac Prob002_String.java
 * java Prob001_String JAva Test
 */
/*1 프로그램 실행할때  "JAva Test" 문자열을 args배열에서 값을 받아 출력결과에 같이
 *  나오도록 프로그램을 구현하시오.
 *  java Prob002_String JAva Test
 *   * 
 * 2 출력결과
 *   source : JAva Test 
 *   convert: jaVA tEST
 *   length: 9
 *   reverse : tseT 
 *   avAJ
 */

public class Prob002_String {

	public static void main(String[] args) {

		String item = "";
		
		for (int i = 0; i < args.length; i++) {
			item += args[i];
			if (i != args.length - 1) {
				item += " ";
			}
		}

		StringBuffer sb = new StringBuffer(item);

		System.out.println("source : " + sb);

		String convert = "";

		convert = sb.toString();
		char[] array = new char[convert.length()];
		array = convert.toCharArray();
		for (int i = 0; i < array.length; i++) {
			if (array[i] != ' ') {
				if (array[i] >= 'a' && array[i] <= 'z') {
					array[i] = (char) (array[i] - 32);
				} else {
					array[i] = (char) (array[i] + 32);
				}
			}
		}
		convert = String.valueOf(array);
		System.out.println("convert : " + convert);

		System.out.println("length : " + sb.length());

		System.out.println("reverse : " + sb.reverse());

	}

}// end class
