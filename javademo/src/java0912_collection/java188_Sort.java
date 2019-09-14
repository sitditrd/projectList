package java0912_collection;

public class java188_Sort {

	public static void main(String[] args) {
		String a = "ABCqwer";
		String b = "ABC";
		String d = "ABC";
		String e = "ab";
		
		System.out.println(b.compareTo(d)); //100프로 같으면 0값을 리턴한다. (대소문자 비교한다.)
		
		//'A' - 'a' => 65 - 97 = -32값을 리턴한다.
		System.out.println(d.compareTo(e));
		
		//앞에문자같고 길이가 다르면 길이를 비교한다. 
		System.out.println(a.compareTo(b));
	}

}
