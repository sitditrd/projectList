package java0907_api;
import java.util.GregorianCalendar;

public class java150_GregorianCalendar {

	public static void main(String[] args) {
		//그레고리안 캘린터에는 윤년 & 평년을 구하는 알고리즘이 구현되어 있다.
		int year = 2016;
		GregorianCalendar gre = new GregorianCalendar();
		
		//윤년이면 true를 리턴을 하고, 평년이면 false값을 리턴한다. 
		if(gre.isLeapYear(year)) {
			System.out.println(year+"년도는 윤년입니다.");
		}
		else {
			System.out.println(year+"년도는 평년입니다.");
		}
	}

}
