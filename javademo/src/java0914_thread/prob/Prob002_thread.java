/*
[문제2] Thread객체를 생성한후 다음과 같이 출력하시오

클래스명 : KoreanThread
클래스명 : EnglishLowerThread
클래스명 : EnglishUpperThread
클래스명 : Prob002_thread.java
		       EnglishLowerThread t1=new EnglishLowerThread();
			   EnglishUpperThread t2=new EnglishUpperThread();
			   KoreanThread t3=new KoreanThread();
	   
	           -- 사용자가 나머지 구현하시오--   
	           
[조건]	     
각각 데이타는 배열에 저장한후 사용한다

[출력화면]	 
abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ
*/

package java0914_thread.prob;

class KoreanThread extends Thread {
	char[] array = { 'ㄱ', 'ㄴ', 'ㄷ', 'ㅁ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' };

	@Override
	public void run() {
		for (int i = 0; i < array.length; i++) {
			System.out.printf("%c", array[i]);
		}
	}
}

class EnglishLowerThread extends Thread {
	char[] array = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
			'u', 'v', 'w', 'x', 'y', 'z' };

	@Override
	public void run() {
		for (int i = 0; i < array.length; i++) {
			System.out.printf("%c", array[i]);
		}
	}
}

class EnglishUpperThread extends Thread {
	char[] array = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
			'U', 'V', 'W', 'X', 'Y', 'Z' };

	@Override
	public void run() {
		for (int i = 0; i < array.length; i++) {
			System.out.printf("%c", array[i]);
		}
	}
}

public class Prob002_thread {

	public static void main(String[] args) {

		EnglishLowerThread t1 = new EnglishLowerThread();
		EnglishUpperThread t2 = new EnglishUpperThread();
		KoreanThread t3 = new KoreanThread();

		t1.start();
		try {
			t1.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println();
		
		t2.start();
		try {
			t2.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println();
		
		t3.start();
		try {
			t3.join();
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
		System.out.println();

	}// end main()

}// end class
