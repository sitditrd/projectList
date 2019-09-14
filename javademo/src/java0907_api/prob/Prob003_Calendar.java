package java0907_api.prob;
import java.util.Calendar;

/*
 * [출력결과]
 * <4시부터 12시 미만일때>
 * 지금은 5시 35분입니다.
 * Good Morning
 * 
 * <12시부터 18시 미만일때>
 * 지금은 16시 49분입니다.
 * Good Afternoon
 * 
 * <18시부터 22시 미만일때>
 * 지금은 20시 30분입니다.
 * Good Evening
 * 
 *  <그외 일때>
 *  Good Night
 */


public class Prob003_Calendar {
	public static void main(String[] args) {
		Calendar cal = Calendar.getInstance();
		int hour = cal.get(Calendar.HOUR_OF_DAY); //이렇게 처리를 할 경우 24시간 단위로 나온다.
		int minute = cal.get(Calendar.MINUTE); 
		
		if(hour >= 4 && hour < 12) {
			System.out.printf("지금은 %d시 %d분입니다.\n", hour, minute);
			System.out.println("Good Morning");
		}
		else if(hour >= 12 && hour < 18) {
			System.out.printf("지금은 %d시 %d분입니다.\n", hour, minute);
			System.out.println("Good Afternoon");
		}
		else if(hour >= 18 && hour < 22) {
			System.out.printf("지금은 %d시 %d분입니다.\n", hour, minute);
			System.out.println("Good Evening");
		}
		else {
			System.out.println("Good Night");
		}
			
	}//end main()
}//end class
