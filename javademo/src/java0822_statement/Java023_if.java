package java0822_statement;

//[출력결과]
//4월의 마지막일은 30일입니다.

public class Java023_if {

	public static void main(String[] args) {
		int month = 4; //월
		int lastDay = -1; //마지막 일
		
		if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 11 || month == 12) {
			lastDay = 31;
			System.out.println(month+"월의 마지막 일은 " + lastDay + "입니다.");
		}
		else if(month == 4 || month == 6 || month == 9 || month == 11) {
			lastDay = 30;
			System.out.println(month+"월의 마지막 일은 " + lastDay + "입니다.");
		}
		else {
			lastDay = 28;
			System.out.println(month+"월의 마지막 일은 " + lastDay + "입니다.");
		}
		
	}

}

