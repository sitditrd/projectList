package java0904_api;

/*
 * [출력결과]
 *  홍길동님은 남성입니다.
 *  응삼이님은 여성입니다.
 *  잘못입력하셨습니다.
 */
public class Java123_String {

	public static void main(String[] args) {
		
		String p1 = "홍길동,561203-1597650";
		String p2 = "응삼이,030628-4056892";
		String p3 = "갑동이,900824-8052582";
		display(p1);
		display(p2);
		display(p3);
	}// end main( )

	public static void display(String str) {
		// 여기를 구현하세요.
		String[] arr = str.split(",");
		String str2 = arr[1];
		String[] arr2 = str2.split("-");
		
		char[] arr3 = arr2[1].toCharArray();
		
		
		if(arr3[0]-48 == 1 || arr3[0]-48 == 3) {
			System.out.println(arr[0]+"님은 남성입니다.");
			return;
		}
		else if(arr3[0]-48 == 2 || arr3[0]-48 == 4) {
			System.out.println(arr[0]+"님은 여성입니다.");
			return;
		}
		else {
			System.out.println("잘못 입력하셨습니다.");
			return;
		}
		
		
	}// end display()

}// end class
