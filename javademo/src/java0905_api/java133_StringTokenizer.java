package java0905_api;
import java.util.StringTokenizer;

public class java133_StringTokenizer {

	public static void main(String[] args) {
		//구분자가 연속적으로 입력되어 있으면 두번째 구분자부터는 무시를 한다.
		StringTokenizer st = new StringTokenizer("java,,jsp/spring",",/");
		System.out.println(st.countTokens());
		while(st.hasMoreTokens()) {
			System.out.println(st.nextToken());
		}
		
		System.out.println("////////////////////////////////////////");
		
		//split은 StringTokenizer와 다르게 구분자가 입력되어 있는 개수만큼 나눈다. 따라서 위와는 다르게 토큰이 4개로 출력이 되는 것이다.
		String data[] = "java,,jsp/spring".split("[,/]");
		System.out.println(data.length); //이곳의 두번째인덱스는 공백이아니라 ""의 형태이다.
		
		for(String ss : data)
			System.out.println(ss);
	}

}
