package java0914_thread;

/*
 * 스레드 생성주기(Life Cycle)
 * 
 * start() - 실행준비상태(RUNNABLE) - run() - TERMINATED
 * 									- 대기상태(WAITING, NOT RUNNABLE)
 */

class LifeCycle extends Thread {
	public LifeCycle() {

	}

	@Override
	public void run() {
		System.out.println(getState()); //run이라는 메소드가 실행이되면 현재 실행이 되는 상태인 RUNNABLE상태가 된다.
		for (int i = 0; i <= 5; i++) {
			System.out.printf("%s i=%d\n", getName(), i);

			try {
				Thread.sleep(1000); // 1초 동안 대기상태(WAITING / NOT RUNNABLE)로 가라는 것이다. waiting상태는 찍어볼수 없고
									// sleep이라는 메소드를 만나면 waiting상태로 들어간다고 생각한다.
									// 즉 위의 명령어를 해석하면, 1000(1초)간 일시 정지 상태이다. 
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}

public class java208_thread {

	public static void main(String[] args) {
		LifeCycle cc = new LifeCycle(); //new한다고 해서 시작되는게 아니라 start를 해주어야 한다. 

		System.out.println(cc.getState()); // 현재 스레드의 상태값을 호출하기 위해서. NEW가 뜰 것이다.

		cc.start(); // 이렇게 해주면 main스레드랑 직접 정의한 스레드 2개가 돌아갈 것이다.
		
		try {
			cc.join(); //join에서 throws가 선언되어 있기 떄문에 호출하는 매소드에서 예외처리를 한다. 
			/*
			 * join메소드의 역할
			 * 
			 * 지정된 시간동안 스레드가 실행되도록 한다.
			 * 지정된 시간이 지나거나 종료가 되면 join()호출한
			 * 스레드로 다시 돌아와 실행을 계속 수행한다.
			 * 
			 * 즉, 여기서는 cc의 thread가 완전히 끝날 때까지 main thread는 대기상태인 것이다.
			 */
		} catch (InterruptedException e) {
			e.printStackTrace();
		} 
		
		System.out.println(cc.getState()); //cc의 thread는 모두 끝났기 때문에 TERMINATED로 된다. 
		System.out.println("main end"); //어떠한 경우에도 이 문장이 제일 나중에 수행되도록 하려면 위처럼 join메소드를 실행한다.
	}

}
