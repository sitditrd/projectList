package java0823_statement;

public class Java035_for {

	public static void main(String[] args) {
		// int i=0;

		/*
		 * for(i=1; i<=12; i++) { System.out.print(i+"\t");
		 * 
		 * if(i % 4 == 0) System.out.println(); }
		 */

		int cnt = 1;

		for (int i = 1; i <= 3; i++) {
			if (i != 1)
				System.out.println();
			for (int j = 1; j <= 4; j++) {
				System.out.print(cnt + "\t");
				cnt++;
			}
		}
	}

}
