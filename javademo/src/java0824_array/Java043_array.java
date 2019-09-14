package java0824_array;

/*
 * num배열에 지정된 요소의 합계를 구하는 프로그램을 구현하시오.
 * 
 * [출력결과]
 * 45
 */

public class Java043_array {

	public static void main(String[] args) {
		int[] num = {22,3,8,12};
		int sum=0;
		int i=0;
		
		for(i=0; i<num.length; i++)
		{
			sum += num[i];
		}
		System.out.println(sum);
	}

}
