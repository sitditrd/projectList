package java0825_method;

/*
 * [출력결과]
 * tset avaj
 * java test 
 */

public class java063_method {

	public static void main(String[] args) {
		char[] arr = {'j', 'a', 'v', 'a', ' ', 't', 'e', 's', 't'};
		
		System.out.println(reverse(arr));
		System.out.println(arr);

	}
	
	public static char[] reverse(char[] data) {
		
		int i=0, j=0;
		char[] arr2;
		arr2 = new char[10010];
		
		for(i=data.length-1, j=0; i>=0; i--, j++)
		{
			arr2[j] = data[i];
		}
			
		return arr2;
	}

}
