package java0825_method;

/*
 * [출력결과]
 * 
 * 문자열의 길이 : 4
 * 2인덱스의 요소값 가져오기 : v
 */

public class java060_method {

	public static void main(String[] args) {
		char[] data = new char[] {'j', 'A', 'v', 'a'};
		System.out.println("문자열의 길이 : " + Length(data));
		System.out.println("2인덱스의 요소값 가져오기 : " + charAt(data, 2));

	}
	
	public static int Length(char[] data) {
		
		int cnt=0;
		
		for(int i=0; i<data.length; i++)
		{
			if(data[i] != 0)
				cnt++;
		}
		
		return cnt;
	}
	
	public static char charAt(char[] data, int index) {
	
		int cnt = -1;
		int su = index;
		int su2=0;
		
		for(int i=0; i<=data.length; i++)
		{
			if(data[i] != 0)
				cnt++;
			
			if(cnt == su) {
				su2 = i;
				break;
			}
		}
		
		return data[su2];
				
	}


}
