package java0907_api;
import java.util.Calendar;

public class java148_Calender {

	public static void main(String[] args) {
		Calendar cal = Calendar.getInstance();
		
		int year = cal.get(Calendar.YEAR);

		//MONTH은 1월 일때 0으로 리턴한다. 따라서 +1을 해주어야 한다. 
		//가져올때는 +1, 저장할 때는 -1을 한다. 
		int month = cal.get(Calendar.MONTH)+1;
		
		int date = cal.get(Calendar.DATE);
	
		//int hour = cal.get(Calendar.HOUR); //12시간 단위로 가져온다. cf)24시간 단위가 아니다!!
		int hour = cal.get(Calendar.HOUR_OF_DAY); //이렇게 처리를 할 경우 24시간 단위로 나온다.
		int minute = cal.get(Calendar.MINUTE); 
		int second = cal.get(Calendar.SECOND); 
		
		System.out.printf("%d-%d-%d %d:%d:%d\n", year, month, date, hour, minute, second);
		
		//이번달의 마지막일을 리턴할때는 아래와 같은 매소드를 사용한다.
		System.out.println(cal.getActualMaximum(Calendar.DATE));
		
		//오늘의 요일 리턴(일요일 -> 1)
		System.out.println(cal.get(Calendar.DAY_OF_WEEK));
		
		//날짜를 새로 세팅하겠다. 오늘의 날로부터 5일 전
		cal.add(Calendar.DATE, -5);
		System.out.println(cal.get(Calendar.DATE));
		
		cal.set(2017, 2, 1); //저장할때는 -1뺀값을 해주어야 하고 //아래처럼 가져올 때는 +1을 해주어야 한다. 
		System.out.printf("%d-%d-%d\n", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH)+1, cal.get(Calendar.DATE));
	}

}
