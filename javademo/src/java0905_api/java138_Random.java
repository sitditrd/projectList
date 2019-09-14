package java0905_api;
import java.util.Random;

public class java138_Random {

	public static void main(String[] args) {
		Random ran = new Random();
		double rl = ran.nextDouble(); 
		// nextDouble이라는 메소드를 호출할 때 난수값이 발생하는 것이다.   
		// double로 리턴받고 싶으면 nextDouble int면 nextint등등으로 한다.
		System.out.println(rl);
		
		int r2 = ran.nextInt();
		System.out.println(r2);
		
		//0부터 ~ 10미만 난수 호출
		int r3 = ran.nextInt(10);
		System.out.println(r3);
		
		//1부터 ~ 10까지 난수 호출
		System.out.println(r3+1);
	}

}
