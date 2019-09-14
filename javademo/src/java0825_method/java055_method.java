package java0825_method;

public class java055_method {

	public static void main(String[] args) {
		int a = 4, b = 2, c = 5;

		int[] num = new int[] { 2, 3 };
		int[] data = new int[] { 1, 5, 8, 9 };

		System.out.println(process(a, b, c));
		int hap = process(a, b, c);
		System.out.println(hap/3.0);
		
		System.out.println(plus(num)); //배열을 넘겨줄때 배열의 0번째 주소를 넘긴다. 
		System.out.println(plus(data));
	}

	public static int process(int x, int y, int z) { //기본 실제 값 4,2,5를 넘겨준다. //call by value

		return x + y + z;
	}

	public static int plus(int[] arr) { //참조 실제 값이 아니라 주소를 넘겨준다. //call by reference
		int sum = 0;

		for (int i = 0; i < arr.length; i++) { // 요소의 개수가 몇개가 넘어올 지 모르므로 length의 키워드를 사용해야한다.
			sum = sum + arr[i];
		}

		return sum;
	}

}
