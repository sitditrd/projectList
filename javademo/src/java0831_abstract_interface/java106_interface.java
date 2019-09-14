package java0831_abstract_interface;
import java.io.Serializable;

interface SampleA {
	void prn();
}

interface SampleB extends SampleA, Serializable { //인터페이스에 인터페이스를 상속할때는 extends를 쓴다.
												  //하지만 class에서 상속할때는 implements를 쓴다. 
	void call();
}

class Animal {
	void play() {
		System.out.println("animal");
	}
}

//extends -------- implements -----------

class Life extends Animal implements SampleB{ //이곳에 SampleB와 Animal을 상속받고 싶을 때 extends -> implements를 해야한다는 뜻이다.
	
	@Override
	public void prn() {
		System.out.println("prn");
	}
	
	@Override
	public void call() {
		System.out.println("call");
	}
}

public class java106_interface {

	public static void main(String[] args) {
		Life Li = new Life();
		Li.prn();
		Li.call();
	}

}
