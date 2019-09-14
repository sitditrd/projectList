package java0824_array;

/*
 *  1 2 3 4 5 
 *  6 7 8 9 10
 *  11 12 13 14 15
 *  16 17 18 19 20
 *  
 *  [출력결과]
 *  
 *  1 2 * 4 5 
 *  * 7 8 * 10
 *  11 * 13 14 *
 *  16 17 * 19 20
 */
public class Java051_array {

	public static void main(String[] args) {
		int[][] num = new int[4][5];
		int cnt = 1;
		
		for(int i=0; i<num.length; i++)
		{
			for(int j=0; j<num[i].length; j++)
			{
				num[i][j] = cnt++;
			}
		}
		
		for(int i=0; i<num.length; i++)
		{
			for(int j=0; j<num[i].length; j++)
			{
				if(num[i][j] % 3 == 0)
					System.out.printf("   *");
				else
					System.out.printf("%4d", num[i][j]);
			}
			System.out.println();
		}

	}

}
