package java0825_method.prob;

public class Prob006_method {

	public static void main(String[] args) {
		System.out.println("<< 15 까지의 소수 >>");
		primeNumber(15);
		System.out.println("<< 32 까지의 소수 >>");
		primeNumber(32);
	}//end main( )

	private static void primeNumber(int num) {
		// 구현하세요.
		int i=0,j=0;
		
		for(i=1; i<=num; i++)
		{
			for(j=2; j<=num; j++)
			{
				if(i%j == 0)
					
					break;
			}
			if(i == j)
				System.out.println(i+" ");
		}

	}// end primeNumber( )
}//end class