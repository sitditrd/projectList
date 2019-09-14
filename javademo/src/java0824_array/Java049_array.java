package java0824_array;

public class Java049_array {

	public static void main(String[] args) {
		int[][] num = new int[][] {{1,2}, {3,4}, {5,6}};
		
		for(int row=0; row<num.length; row++)
		{
			for(int col=0; col<num[row].length; col++)
			{
				System.out.printf("%4d", num[row][col]);
			}
			System.out.println();
		}
	}

}
