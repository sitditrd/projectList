package java0823_statement.prob;

/*
1+
1+2+
1+2+3+
1+2+3+4+
1+2+3+4+5=??

[출력결과]
sum=35
*/
public class Prob_03 {

	public static void main(String[] args) {
		int i=0,j=0;
		int sum=0;
		
		for(i = 1; i<=5; i++)
		{
			for(j=1; j<=i; j++)
			{
				sum += j;
			}
		}
		System.out.println(sum);
	}// end main()

}// end class