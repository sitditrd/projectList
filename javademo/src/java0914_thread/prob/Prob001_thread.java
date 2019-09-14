package java0914_thread.prob;

/* * [문제1] 자판기 프로그램을 만드시오

클래스명 : VendingMachine
               +getDrink():String
               +putDrink(drink String):void
클래스명 : Producer      <-- Thread상속
클래스명 : Consumer     <-- Thread상속
클래스명 : Prob001_thread.java
               VendingMachine vm=new VendingMachine();
     
               Producer p=new Producer(vm);
               Consumer c=new Consumer(vm);
     
		       Thread t1=new Thread(p, "생산자");
		       Thread t2=new Thread(c, "소비자");
		 
		       t1.start();
		       t2.start();
=============================================     
[출력화면]
생산자 : 음료수 No. 1 자판기에 넣기
소비자 : 음료수 No. 1 꺼내먹음
 
생산자 : 음료수 No. 2 자판기에 넣기
소비자 : 음료수 No. 2 꺼내먹음

생산자 : 음료수 No. 3 자판기에 넣기
소비자 : 음료수 No. 3 꺼내먹음
        :
        
생산자 : 음료수 No. 10 자판기에 넣기
소비자 : 음료수 No. 10 꺼내먹음 
 */

/*
 * wait(), notify()가 필요한 경우
 * 공유 데이터로 두 개 이상의 스레드가 데이터를 주고 받을 때
 * 
 * 동기화 메소드
 * wait() : 다른 스레드가 notify()를 불러줄 때까지 기다린다. 
 * notify() : wait()을 호출하여 대기중인 스레드를 깨운다.
 * wait(), notify(), notifyAll()은 Object의 메소드이다. 
 * 
 */

class VendingMachine {

	private String drink;

	synchronized public String getDrink() {
		if (this.drink == null) {
			try {
				wait();
			} catch (InterruptedException ex) {
				ex.printStackTrace();
			}
		}

		String returnValue = drink;
		
		try {
			Thread.currentThread().sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println(Thread.currentThread().getName() + drink + " 꺼내먹기");
		drink = null;
		notify();
		return returnValue;
	}

	synchronized public void putDrink(String drink) {

		if (this.drink != null) {
			try {
				wait();
			} catch (InterruptedException ex) {
				ex.printStackTrace();
			}
		}

		try {
			Thread.currentThread().sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		this.drink = drink;
		System.out.println(Thread.currentThread().getName() + drink + " 자판기에 넣기");
		notify();
	}

}

class Producer extends Thread {

	private VendingMachine vm;

	public Producer(VendingMachine vm) {
		this.vm = vm;
	}

	@Override
	public void run() {
		for (int i = 1; i <= 10; i++) {
			String data = " : " + "음료수 NO. " + i;
			vm.putDrink(data);
		}
	}

}

class Consumer extends Thread {

	private VendingMachine vm;

	public Consumer(VendingMachine vm) {
		this.vm = vm;
	}

	@Override
	public void run() {
		for (int i = 1; i <= 10; i++) {
			vm.getDrink();
		}
	}
}

public class Prob001_thread {

	public static void main(String[] args) {

		VendingMachine vm = new VendingMachine();

		Producer p = new Producer(vm);
		Consumer c = new Consumer(vm);

		Thread t1 = new Thread(p, "생산자");
		Thread t2 = new Thread(c, "소비자");

		t1.start();
		t2.start();

	}// end main()

}// end class
