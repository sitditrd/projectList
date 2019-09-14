package java0914_thread;

/*
 * 프로세스 : 메모리에서 실행중인 프로그램이다.
 * 스레드(thread) : 프로세스에서 독립적으로 실행되는 단위이다.
 * 게임프로그램 -음악,채팅,게임
 * 
 * 자바에서 스레드 생성을 위해 제공해주는 2가지 방법
 * 1. java.lang.Thead클래스
 * 2. java.lang.Runnable인터페이스
 * 
 * 스케줄링
 *  : 스레드가 생성되어 실행될 때 필요한 시스템의 여러 자원을 해당
 *  스레드에게 할당하는 작업
 *  
 * 선점형 스케줄링
 *  : 하나의 스레드가 cpu을 할당받아 실행하고 있을 때 우선순위가
 *   높은 다른 스레드가 cpu를 강제로 빼앗가 사용할 수 있는 스케줄링 기법이다.
 */

class User extends Thread {
	public User() {
		
	}
	
	//스레드를 만들려면 Thread에서 제공되는 run이라는 메소드를 오버라이딩을 해주어야 한다.
	@Override
	public void run() {
		
		// thread로 실행시켜줄 문장들은 run()메소드에서 구현한다.
		for(int i=0; i<=5; i++) {
			System.out.printf("%s i=%d\n", getName(), i);
		}
	}
}

public class java206_thread {

	//실행 -> main 스레드 -> main()
	public static void main(String[] args) {
		User u = new User();
		
		//u.run(); //이렇게 하면 단일 스레드만 돌아간다. 스레드를 돌리기 위해서는 start라는 메소드를 호출해야한다.
		
		u.start(); //run이라는 메소드가 thread로 실행이되게 하려면 ,이렇게 start로 실행해야한다. 
				   //start메소드 호출시 run메소드는 돌아가면서 main메소드는 같은 시점에 돌아간다. 
				   //우선순위가 높은 Thread에 cpu를 주기 때문에 사실상 동시에 돌아가진 않고 cpu를 선점하면서 두개가 돌아가는 것이다.
				   //그 속도가 빨라서 동시에 돌아가는 것 처럼 보이는 것이다.
		
		for(int j=0; j<=5; j++) {
			//currentThread는 static이 선언되있다. 
			System.out.printf("%s j=%d\n", Thread.currentThread().getName(), j); //User u로 스레드 1개 만들어서 Thread-0이 호출
			// getName() : 현재 실행중인 스레드명을 리턴해준다.
		}
		
		System.out.println("main thread end");
	}

}
