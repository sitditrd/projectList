package java0905_api;

/*
 * 스트링버퍼는 메모리에 저장되는 문자열을 변경할 수 있다.
 * insert, delete, append, reverse등이 있다.
 */

public class java130_StringBuffer {

	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer("java test");

		// 4인덱스에 ",jsp"문자열을 삽입한다.
		sb.insert(4, ",jsp"); // java,jsp test
		System.out.println(sb);

		// 4인덱스부터 8인덱스 미만 사이의 문자열을 삭제한다.
		sb.delete(4, 8); // java test
		System.out.println(sb);

		// 0인덱스의 문자를 삭제한다.
		sb.deleteCharAt(0); // ava test
		System.out.println(sb);

		// 문자열을 반대로 변경해서 리턴한다.
		sb.reverse(); // test avaj
		System.out.println(sb);

		// 위의 4가지 모두 스트링 버퍼로 리턴되는 것이다.
		System.out.println("==========================");

		// String타입의 문자열을 reverse할 때
		String data = "mybatis orm";
		StringBuffer sf = new StringBuffer(data);
		sf.reverse();
		System.out.println(sf);

		// char배열을 reverse할 때
		char[] arr = new char[] { 'k', 'o', 'r', 'e', 'a' };
		StringBuffer se = new StringBuffer(String.valueOf(arr)); //String에서 제공하는 valueOf를 쓰도록 한다.
																 //char배열을 문자열로 바꾸기 위하여
		se.reverse();
		System.out.println(se);
		
		System.out.println("///////////////////////////");
		
		//append를 이용한 char배열을 reverse하는 방법
		StringBuffer sa = new StringBuffer();
		sa.append(arr);
		sa.reverse();
		System.out.println(sa);
		
		System.out.println("///////////////////////////");
		display(String.valueOf(arr));
	}
	public static void display(String sg) {
		StringBuffer sn = new StringBuffer(sg);
		sn.reverse();
		System.out.println(sn);
	}
}
