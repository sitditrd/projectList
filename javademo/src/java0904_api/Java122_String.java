package java0904_api;

/* 
 *  [출력결과]
 * 	 35276은 숫자입니다.
 * 	 2_8a은 문자입니다.
 */

public class Java122_String {

	public static void main(String[] args) {
		System.out.print("35276은 ");
		prnDisplay(numCheck("35276"));

		System.out.print("2_8a은 ");
		prnDisplay(numCheck("2_8a"));

	}// end main( )

	public static boolean numCheck(String data) {
		// data값이 숫자면 true 아니면 false을 반환하는 로직 구현
		
		char[] arr = data.toCharArray();
		int flag=0;
		for(int i=0; i<arr.length; i++) {
			if(arr[i]-48 >= 0 && arr[i]-48 <= 9)
				flag=0;
			else
				flag=1;
		}
		
		if(flag == 0) {
			return true;
		}
		else 
			return false;
		/*try {
			int i = Integer.parseInt(data);
			return true;
		}
		catch(Exception e) {
			return false;
		}*/
		
	}// end numCheck()

	public static void prnDisplay(boolean chk) {
		// chk값이 true이면 "숫자입니다."
		if(chk == true)
			System.out.println("숫자입니다.");
		else
			System.out.println("문자입니다.");
		// chk값이 false이면 "문자입니다." 로 출력하는 로직구현
		
	}// end prnDisplay()
}// end class
