package java0904_api;

/*
 * [출력결과]
 * 
 * ip:127.0.0.1
 * port:8080
 * 
 */

public class java118_String {

	public static void main(String[] args) {
		
		String sn = "127.0.0.1:8080";
		
		/*String[] arr = sn.split(":");
		
		for (int i = 0; i < arr.length; i++) {
			if(i == 0)
				System.out.printf("ip : %s\n", arr[i]);
			else if(i == 1)
				System.out.printf("port : %s\n", arr[i]);
		}*/
		
		int index = sn.indexOf(":");
		System.out.println("ip : "+sn.substring(0,index));
		System.out.println("port : "+sn.substring(index+1));
	}

}
