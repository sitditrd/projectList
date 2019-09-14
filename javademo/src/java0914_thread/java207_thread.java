package java0914_thread;

class User2 implements Runnable { //이 인터페이스 안에는 run()메소드 딱 한개밖에 없다.
	
	public User2() {
		
	}
	
	@Override
	public void run() {
		// thread로 실행시켜줄 문장들은 run()메소드에서 구현한다.
		for(int i=0; i<=5; i++) {
			System.out.printf("%s i=%d\n", Thread.currentThread().getName(), i); //Runnable인터페이스에는 getName메소드가 없어서 오류가 뜬다. 
																	             //따라서 현재 수행중인 스레드 이름을 가져오기 위해서 이와 같이 해결한다.
		}
	}
}


public class java207_thread {

	public static void main(String[] args) {
		User2 u = new User2();
		Thread th = new Thread(u);
		
		th.start();
	}

}
