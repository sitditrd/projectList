package java0907_api.prob;

/*
 * 
 * 1 년도와 월을 입력받는다.
 * 2 process()메소드에서 달력에 표현해줄 값을 구해서 배열에 저장한
 *   다음 반환한다.
 * 3 prn()메소드에서 아래와 같이 출력한다.
 * 
 * 4 출력결과
 2012년도 5월
 일    월      화       수      목      금    토
 			1     2     3     4    5
 6     7     8     9    10    11   12
 13    14    15    16    17    18   19
 20    21    22    23    24    25   26
 27    28    29    30    31          

 4 문제해결
 * getActualMaximum(Calendar.DATE); //각 달의 마지막일
 * set(year,month,1) //Calendar객체에 새로운 날짜 설정
 * get(Calendar.DAY_OF_WEEK); //요일 출력  일요일=1, 토요일=7
 */
import java.util.Calendar;
import java.util.Scanner;

public class Prob004_Calendar {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("년도입력: ");
		int year = sc.nextInt();
		System.out.print("월입력: ");
		int month = sc.nextInt();
		prn(process(year, month), year, month);
	}// end main()

	public static int[][] process(int year, int month) {
		Calendar cal = Calendar.getInstance();

		int[][] data = new int[6][7];
		int cnt = 0, flag = 0;

		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, month - 1);

		int start_date = cal.get(Calendar.DAY_OF_WEEK) - 1;
		int finish_date = cal.getActualMaximum(Calendar.DATE);

		System.out.println(start_date);

		for (int i = 0; i < 1; i++) {
			for (int j = start_date; j < 7; j++) {
				data[i][j] = ++cnt;
			}

		}

		for (int i = 1; i < data.length - 1; i++) {
			for (int j = 0; j < data[i].length; j++) {
				data[i][j] = ++cnt;
				if (cnt == finish_date) {
					flag = 1;
					break;
				}
			}
			if (flag == 1)
				break;
		}

		return data;
	}

	public static void prn(int arr[][], int year, int month) {
		System.out.printf("%10d년도  %6d월\n", year, month);

		System.out.println("일       월       화       수       목      금       토");
		for (int i = 0; i < arr.length - 1; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				if (arr[i][j] == 0)
					System.out.print("     ");
				else 
					System.out.printf("%-3d  ", arr[i][j]);
			}
			System.out.println();
		}

	}// end prn()

}// end class