package java0904_api;

public class java117_String {

	public static void main(String[] args) {
		String str = new String("KoREa,jsp,java");
		
		System.out.println("문자열 길이 : " + str.length());
		System.out.println("대문자 : " + str.toUpperCase()); //모든문자를 대문자로 리턴해준다. 
		System.out.println("소문자 : " + str.toLowerCase()); //모든문자를 소문자로 리턴해준다.
		System.out.println("특정문자를 리턴 : " + str.charAt(1)); //특정문자를 리턴해준다.
		System.out.println("특정문자가 있는 인덱스를 리턴 : " + str.indexOf('a')); //인덱스를 리턴해준다.
		System.out.println("특정문자 유니코드값이 있는 인덱스를 리턴 : " + str.indexOf(97)); //인덱스를 리턴해준다.
		
		System.out.println("범위:" + str.substring(5)); //5인덱스부터 배열의 인덱스 끝까지를 리턴해준다. 
		System.out.println("범위:" + str.substring(2, 8)); //2인덱스부터 8미만까지를 리턴해준다.
		
		String[] arr = str.split(",");
		
		for(int i=0; i<arr.length; i++) {
			System.out.printf("arr[%d]=%s\n", i, arr[i]);
		}
		
		int x=10,y=20;
		
		System.out.printf("%d+%d=%d\n", x,y,x+y);
		
		
		String s1 = String.valueOf(x);
	    String s2 = String.valueOf(y);
	    System.out.printf("%s+%s=%s\n", s1,s2,s1+s2);
	    
	    char[] data = {'1', '2', '3'};
	    String s3 = String.valueOf(data);
	    System.out.println(s3);
	}

}
