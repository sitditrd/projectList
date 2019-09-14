package java0824_array.prob;
/*
 * 4행 4열 data배열에 가로 세로 합계를 구하는 프로그램을 구현하시오.
 * [출력결과]
 *  1   2   3   6
 *  4   5   6  15
 *  7   8   9  24
 * 12  15  18  45
 */

public class Prob_02 {

	public static void main(String[] args) {
		int[][] data = new int[4][4];
		int cnt = 1;
		int i=0,j=0;
		int garo=0, sero=0, total=0;
		// 여기를 구현하시오.
		
		for(i=0; i<=2; i++)
		{
			for(j=0; j<=2; j++)
			{
				data[i][j] = cnt++;
				garo += data[i][j];
			}
			data[i][j] = garo;
			total += garo;
			garo=0;
		}
		
		for(i=0; i<=2; i++)
		{
			for(j=0; j<=2; j++)
			{ 
				sero += data[j][i];
			}
			
			data[j][i] = sero;
			sero=0;
		}
		
		data[data.length-1][data[1].length-1] = total;
		
		for(i=0; i<data.length; i++)
		{
			for(j=0; j<data[i].length; j++)
			{
				System.out.printf("%4d", data[i][j]);
			}
			System.out.println();
		}
	}// end main()

}// end class
