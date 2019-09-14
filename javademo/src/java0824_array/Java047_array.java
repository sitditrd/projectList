package java0824_array;

/*
 * data배열에서 대문자의 점수를 출력하는 프로그램을 구현하세요.
 * 
 * [출력결과]
 * 대문자 갯수 : 2
 * 
 */

public class Java047_array {

	public static void main(String[] args) {
		char[] data = {'a', 'b', 'F', 'R', 'a'};
		
		int cnt=0;
		
		for(int i=0; i<data.length; i++)
		{
			if(data[i] >= 'A' && data[i] <= 'Z')
				cnt++;
		}
		System.out.println("대문자의 갯수 : "+cnt);
	}

}
