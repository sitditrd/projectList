package java0904_api;

/*
 * 문자열 관련 클래스
 * java.lang.String
 * java.lang.StringBuffer
 * java.lang.StringBuilder
 * java.util.StringTokenizer
 * 
 */

public class java116_String {

	public static void main(String[] args) {
		String sn = "java";
		String sg = "java";
		String st = new String("java");
		String ss = new String("java");
		
		System.out.printf("sn == sg:%b\n", sn == sg); //주소 비교 (새로운 메모리 생성 안해서 true) 
													  //String은 == 로 비교하지 않는다.
		System.out.printf("st == ss:%b\n", st == ss); //주소 비교 (새로운 메모리를 생성해서 false)
		
		//equals() : 메모리에 저장된 문자열 비교
		System.out.printf("sn.equals(sg):%b\n", sn.equals(sg));
		System.out.printf("ss.equals(sg):%b\n", ss.equals(ss));
		//원래 equals는 주소,객체만을 비교하는 매소드이나 String에서는 오버라이딩을 해놓았기 때문에 안에 있는 값을 비교하도록 해놓았다.
		//toString() : 메모리에 저장된 문자열 리턴
		System.out.println(sn.toString());
		System.out.println(sn);
	}

}
