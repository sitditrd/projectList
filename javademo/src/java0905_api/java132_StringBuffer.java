package java0905_api;
import java.util.StringTokenizer;

public class java132_StringBuffer {

	public static void main(String[] args) {
		//StringTokenizer(문자열, 구분자)
		StringTokenizer st = new StringTokenizer("java,jsp",",");
		
		//만약 구분자가 공백이라면 두번째 인자값은 아래와 같이 생략이 가능하다.
		//StringTokenizer st2 = new StringTokenizer("java jsp");
		
		//나누어진 문자열을 토큰이라고 한다. 갯수를 출력하고자 하면 아래와 같은 메소드가 필요하다.
		System.out.println("토큰갯수 : " + st.countTokens());
		
		//나누어진 문자열을 토큰이라고 한다. 내용을 출력하고자 하면 아래와 같은 메소드가 필요하다.
		/*for(int i=0; i<st.countTokens(); i++) {
			System.out.println(st.nextToken()); //처음 갯수가 2개이나 java라는 문자열을 가지고 오면서 메모리에서 지워버려서 중간에 
												//변수값이 1이 감소되어 조건식을 만족하지 않고 나와버려서 java만 출력된다. 따라서 아래와 같은
												//방법이 필요하다.
		}*/
		
		//메모리에 저장된 토큰이 있으면 true 없으면 false를 리턴한다. 
		while(st.hasMoreTokens()) { //is나 has로 시작하는 것들은 대부분 논리값을 리턴한다. 
			System.out.println(st.nextToken());
		}
	}

}
