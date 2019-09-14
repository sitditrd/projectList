package java0905_api;

public class java131_StringBuffer {

	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer("java test");
		/*String sb2 = sb.toString();
		display(sb2.toCharArray());*/
		display(sb.toString().toCharArray());
	}
	
	public static void display(char[] data) {
		for(char cn : data) {
			System.out.println(cn);
		}
	}

}
