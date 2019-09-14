package java0825_method;

public class java054_method {

	public static void main(String[] args) {
		int year = 2012;

		if (isLeapYear(year)) {
			System.out.printf("%d년도는 윤년입니다.\n", year);
		} else {
			System.out.printf("%d년도는 평년입니다.\n", year);
		}

	}

	public static boolean isLeapYear(int year) {

		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			return true;
		} else {
			return false;
		}

	}

}
