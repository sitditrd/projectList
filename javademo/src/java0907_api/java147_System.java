package java0907_api;
import java.text.SimpleDateFormat;

public class java147_System {

	public static void main(String[] args) {
		//currentTimeMillis() : 1970.1.1부터 초단위로 
		//누적한 값을 밀리세컨드로 리턴한다.
		//하루는 86400조이다. 1초는 1000 밀리세컨트이다.
		long curr = System.currentTimeMillis();
		/*System.out.println(curr);*/
		
		//날짜 시간형식을 제공해주는 클래스
		String pattern = "yyyy-MM-dd HH:mm:ss a EEEE";
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		
		//SimpleDataFormat : 날짜 시간 형식의 패턴을 제공해주는 클래스이다.
		//MM : 월, mm : 분
		//hh : 12시간, HH : 24시간
		
		String data = sdf.format(curr);
		System.out.println(data);
	}

}
