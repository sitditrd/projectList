package java0905_api;


/*
 * 난수값을 이용해서 소수점 첫째자리까지 반올림을해서 구하시오.
 * 
 * ex) 0.5689.... => 5.7
 */

public class java136_Math {

	public static void main(String[] args) {
		double nan = Math.random();
		System.out.println(nan);
		//System.out.println(Math.round(nan)); //반올림 시켜주는 메소드이다.
		nan = nan*100;
		
		nan = Math.round(nan);
		
		double num = nan / 10.0;
		
		System.out.println(num);
		
		System.out.println("//////////////////////////");
		double res = Math.random();
		
		System.out.println((double)Math.round(res*100)/10);
		//System.out.println(Math.round(res*100)/10.0); //위와 같은 의미이다.
		
	}

}
