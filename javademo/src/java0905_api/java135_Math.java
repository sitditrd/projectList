package java0905_api;
import static java.lang.Math.*;

public class java135_Math {

	public static void main(String[] args) {
		double ran = random(); //0.0부터 1.0까지의 난수를 발생시킨다.
		System.out.println(ran); 
		
		ran = ran*10; // 0.0 ~ 10.0사이의 난수가 발생한다.
		System.out.println(ran); //1의자리에 올수잇는 값은 0~9이다. 
		
		int num = (int)floor(ran); //소수이하는 버리고 0~10미만을 리턴한다. 
		System.out.println(num);
		
		System.out.println((int)-7.8); //-7을 리턴
		System.out.println(floor(-7.8)); //-8을 리턴
		
		System.out.println((int)7.8); //7을 리턴
		System.out.println(floor(7.8)); //7을 리턴
		
		//양수일때는 (int)만 해주어도 되지만 음수가 들어올경우는 (int)floor를 해야한다.
		
	}
}
