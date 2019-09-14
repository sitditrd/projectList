package java0907_api;

import java.util.Calendar;

/*
 * 2016년 2월 마지막일과 요일을 구하는 프로그램을 구현하세요.
 * [출력결과]
 * 2016-2-29 일요일
 */

public class java149_Calendar {

	public static void main(String[] args) {
		Calendar cal = Calendar.getInstance();

		int year = 2016;
		int month = 2;
		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, month - 1);

		int date = cal.getActualMaximum(Calendar.DATE);

		int day = cal.get(Calendar.DAY_OF_WEEK);
		String week = "";

		switch (day) {
		case 1:
			week = "일";
			break;
		case 2:
			week = "월";
			break;
		case 3:
			week = "화";
			break;
		case 4:
			week = "수";
			break;
		case 5:
			week = "목";
			break;
		case 6:
			week = "금";
			break;
		case 7:
			week = "토";
			break;
		}

		System.out.printf("%d-%d-%d %s\n", year, month, date, week);

	}

}
