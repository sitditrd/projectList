package java0823_statement;

public class Java036_for {

	public static void main(String[] args) {
		int i=0,j=0;
		int cnt =1;
		
		/*for(i=1; i<=5; i++)
		{	
			for(j=1; j<=5; j++)
			{
				System.out.print(j+"\t");
			}
			System.out.println();
		}*/
		
		for(i=1; i<=5; i++)
		{
			cnt = 1;
			for(j=1; j<=5; j++)
			{
				System.out.print(cnt+" ");
				cnt++;
			}
			System.out.println();
		}
	}

}
