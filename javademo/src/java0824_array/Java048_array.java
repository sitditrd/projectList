package java0824_array;

public class Java048_array {

	public static void main(String[] args) {
		
		//3행 2열의 2차원배열
		int[][] num = new int[2][3];
		int i=0,j=0;
		int cnt=1;
		
		for(i=0; i<=2; i++)
		{
			for(j=0; j<=1; j++)
			{
				num[j][i] = cnt++;
			}
		}
		
		for(i=0; i<=1; i++)
		{
			for(j=0; j<=2; j++)
			{
				System.out.print(num[i][j]+"\t");
			}
			System.out.println();
		}

	}

}
