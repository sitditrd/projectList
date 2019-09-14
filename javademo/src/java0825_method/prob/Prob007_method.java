package java0825_method.prob;
/*
 * [출력결과]
 * 내림 차순 결과
    31
	22
	16
	11
	10
	9
    오름 차순 결과
	9
	10
	11
	16
	22
	31
 */

public class Prob007_method {

	public static void main(String[] args) {
		int[] arr = { 10, 22, 9, 16, 11, 31 };

		int[] result1 = sort(arr, "desc");

		int[] result2 = sort(arr, "asc");

		System.out.println("내림 차순 결과");
		for (int i = 0; i < result1.length; i++) {
			System.out.println(result1[i]);
		}

		System.out.println("오름 차순 결과");
		for (int i = 0; i < result2.length; i++) {
			System.out.println(result2[i]);
		}

	}// end main( )

	private static int[] sort(int[] array, String orderby) {
		// 구현하시오.
		int i = 0, j = 0;
		
		int[] result3;
		result3 = new int[array.length];
		
		for(i=0,j=0; i<array.length; i++,j++) {
			result3[j] = array[i]; 
		}
		
		if (orderby.equals("desc")) {

			for (i = 0; i < result3.length - 1; i++) {
				for (j = i + 1; j < result3.length; j++) {
					if (result3[i] < result3[j]) {
						int temp = result3[j];
						result3[j] = result3[i];
						result3[i] = temp;
					}
				}
			}

		}

		else if (orderby.equals("asc")) {
			for (i = 0; i < result3.length - 1; i++) {
				for (j = i + 1; j < result3.length; j++) {
					if (result3[i] > result3[j]) {
						int temp = result3[i];
						result3[i] = result3[j];
						result3[j] = temp;
					}
				}
			}
		}

		return result3;

	}// end sort( )
}