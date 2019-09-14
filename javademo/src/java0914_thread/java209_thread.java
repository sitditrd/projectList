package java0914_thread;

class PriorityTest extends Thread { //우선순위가 높은 Thread에 cpu를 준다. 
	
	@Override
	public void run() {
		for (int i=0; i<=5; i++) {
			System.out.printf("%s priority=%d i=%d\n", getName(), getPriority(), i);
			//우선순위를 별도로 지정을 안하면 기본값은 5로 나온다.
			//자바에서는 1~10까지 우선순위를 주며 1이 가장 낮고 10이 가장 높은 것이다. 
		}
	}
}

public class java209_thread {

	public static void main(String[] args) {
		PriorityTest t1 = new PriorityTest(); //이름은 자동적으로 Thread-0...이렇게 생성되는데 직접 주고자 하면 아래와 같이 하면 된다.
		
		t1.setName("user");
		t1.start();
		
		PriorityTest t2 = new PriorityTest();
		t2.setPriority(Thread.MAX_PRIORITY); //지정된 Priority값 10이 나온다.
		t2.start(); //우선순위가 높다고 반드시 먼저 처리되는 것은 아니다. CPU작업시 어떠한 원인에 의해서 지연이 될 수 있기 때문이다.
		/*t2.setPriority(Thread.MIN_PRIORITY); //지정된 Priority값 1이 나온다.
		t2.setPriority(Thread.NORM_PRIORITY); //지정된 Priority값 5이 나온다.*/	
		
		PriorityTest t3 = new PriorityTest();
		t3.setPriority(8);
		t3.start();
		
		System.out.println("main end");
		
		//지금 여기서는 총 4개의 스레드가 돌아간다.
	}

}
