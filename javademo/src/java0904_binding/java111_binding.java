package java0904_binding;

public class java111_binding {

	public static void main(String[] args) {
		display(4.5, 6.3);
		display(10,20); //묵시적 형변환이 되어 넘겨진다. 
		
		LgTv lg = new LgTv("LG");
		processLg(lg);
		
		SamsungTv ss = new SamsungTv("Samsung");
		processSamsung(ss);
	}
	
	//결합도(의존성)이 높다. -> 유지보수와 확장성이 약해진다. 
	public static void processLg(LgTv lg) { //lg 매개변수의 받아들일 수 있는 범위가 작다. -> 결합도가 높다. 
											//방법은 java112_binding에 소개했다.  
		lg.trunOn();
	}
	
	public static void processSamsung(SamsungTv ss) {
		ss.trunOn();
	}
	
	public static void display(double x, double y) {
		System.out.println(x+y);
	}
}
