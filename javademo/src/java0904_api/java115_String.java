package java0904_api;

//Object의 toString()의 매소드가 처리되는 과정

class StringTest {
	private char[] arr;
	
	public StringTest() {
		
	}
	
	public StringTest(char[] arr) {
		this.arr = arr;
	}
	
	public int length() {
		return arr.length;
	}
	
	public char charAt(int index) {
		return arr[index];
	}
}

public class java115_String {

	public static void main(String[] args) {
		StringTest st = new StringTest(new char[] {'j', 'a', 'v', 'a'});
		System.out.println(st.length());
		System.out.println(st.charAt(2));
		
	}

}
