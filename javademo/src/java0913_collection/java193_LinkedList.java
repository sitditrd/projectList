package java0913_collection;
import java.util.LinkedList;

/*
 * Queue(큐)
 * 1. FIFO(First In First Out) : 제일 먼저 저장한 요소를 제일 먼저 꺼내온다.
 * 
 * 2. 최근사용문서, 인쇄작업대기목록, 버퍼
 */

public class java193_LinkedList {

	public static void main(String[] args) {
		
		//LinkedList는 순차자료구조(List), Stack외에 Queue도 제공된다.
		//삽입 / 출력
		//add / get -> 메모리에서 완전히 꺼내오지 x
		//push / pop -> 메모리에서 완전히 꺼내오지 o
		//offer / poll -> 메모리에서 완전히 꺼내오지 o
		
		LinkedList<String> nQueue = new LinkedList<String>();
		
		//Queue를 저장할 때는 offer를 이용하여 값을 저장한다.
		nQueue.offer(new String("java")); 
		nQueue.offer(new String("jsp"));
		nQueue.offer(new String("spring"));
		
		//Queue의 원소를 가져올 때는 poll를 이용하여 값을 저장한다.
		System.out.println("size : "+nQueue.size());
		
		while(!nQueue.isEmpty()) {
			System.out.println(nQueue.poll()); //Stack처럼 메모리에서 완전히 꺼네오기 때문에 size값은 0이 될것이다.
		}
		
		System.out.println("size : "+nQueue.size());
	}

}
