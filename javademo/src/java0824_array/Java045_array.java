package java0824_array;

/*
 * [출력결과]
 * 짝수 : 42
 * 홀수 : 3
 */
public class Java045_array {

	public static void main(String[] args) {
		int[] num = {22,3,8,12};
		int even=0;
		int odd=0;
		int i=0;
		
		for(i=0; i<num.length; i++)
		{
			if(num[i] % 2 == 0)
				even += num[i];
			else
				odd += num[i];
		}
		System.out.printf("짝수 : %d\n홀수 : %d", even, odd);

	}

}
