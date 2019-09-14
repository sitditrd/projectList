package java0907_api;

public class java143_Wrapper {

	public static void main(String[] args) {
		int x = 10;
		double y = 5.8;
		char[] data = {'a', 'b', 'c'};
		
		//기본 데이터 -> String으로 바꾸기 위해 java는 String의 valueOf 메소드를 제공해준다.
		
		String a = String.valueOf(x);
		String b = String.valueOf(y);
		String c = String.valueOf(data);
		System.out.printf("%s %s %s\n", a,b,c);
		
		//String -> 기본데이터
		String input = "1234";
		int k = Integer.parseInt(input);
		double m = Double.parseDouble(input);
		float n = Float.parseFloat(input);
		System.out.printf("%s %.1f %.1f\n", k, m, n);
	}

}
