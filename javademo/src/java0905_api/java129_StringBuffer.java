package java0905_api;

/*
 * java.lang.String : 불변
 * java.lang.StringBuffer : 가변, 비동기화
 * java.lang.StringBuilder : 가변, 동기화
 * 
 */

public class java129_StringBuffer {

	public static void main(String[] args) {
		String sg = new String("java test");
		String ss = sg.replace("java", "jsp");
		System.out.println("ss:" + ss);
		System.out.println("sg:" + sg);
		
		/*
		 * <내부실행동작>
		 * sg -> java test : String
		 *       jsp test : String Buffer(스트링버퍼에는 replace명령어를 통해 java를 jsp로 바꾼다.)
		 * ss -> jsp test : String  
		 * 
		 */
		
		System.out.println("==========================");
		StringBuffer sb = new StringBuffer("spring test");
		sb.replace(0, 6, "framework"); //변경할 문자를 인덱스로 주어진다. 두번째 인덱스는 미만이다. 
		
		System.out.println("sb:" + sb);
	}
}
