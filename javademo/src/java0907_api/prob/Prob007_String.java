package java0907_api.prob;

/*
 * [출력결과]
 *  영어 소문자 갯수:3
 *  영어 대문자 갯수:3
 *  숫자 갯수:2
 */

public class Prob007_String {

	public static void main(String[] args) {
		String data = "ke4RdTA5";

		display(process(data));
	}// end main()

	public static char[] process(String data) {
		
		char[] array = new char[data.length()];
		array = data.toCharArray();
		return array;
	}// end process()

	public static void display(char[] arr) {
		
		int count1=0;
		int count2=0;
		int count3=0;
		
		for(int i=0; i<arr.length; i++) {
			if(arr[i] >= 'a' && arr[i] <='z') {
				count1++;
			}
			else if(arr[i] >= 'A' && arr[i] <= 'Z') {
				count2++;
			}
			else if(arr[i]-48 >= 0 && arr[i]-48 <= 9) {
				count3++;
			}
		}
		System.out.printf("영어 소문자 갯수 : %d\n영어 대문자 갯수 : %d\n숫자 갯수 : %d", count1, count2, count3);
		
	}// end display()

}// end class
