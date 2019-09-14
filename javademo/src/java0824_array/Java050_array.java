package java0824_array;

/*
 * 홍길동 90 85 40
 * 
 * 갑둥이 100 34 75
 * 
 * [출력결과]
 * 
 * 홍길동 90 85 40 215 71.7
 * 갑둥이 100 35 75 210 70.0
 * 
 */

public class Java050_array {

	public static void main(String[] args) {
		String[] name = new String[] { "홍길동", "갑동이" };
		int[][] jumsu = new int[][] { { 90, 85, 40 }, { 100, 35, 75 } };

		int i, j, total = 0;
		double avg = 0;

		for (i = 0; i < jumsu.length; i++) {
			System.out.printf("%s ", name[i]);

			for (j = 0; j < jumsu[i].length; j++) {
				total += jumsu[i][j];
			}

			avg = (double) (total / 3);

			for (j = 0; j < jumsu[i].length; j++) {
				System.out.print(jumsu[i][j] + " ");
			}

			System.out.println(total + " " + avg);

			total = 0;

		}
	}

}
