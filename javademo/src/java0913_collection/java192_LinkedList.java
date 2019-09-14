package java0913_collection;
import java.util.LinkedList;

/*
 * stack(스택)
 * 1. LIFO(Last In First Out) : 마지막에 저장된 요소를 먼저 꺼낸다.
 * 2. 수식계산, 수식괄호검사, undo/redo, 뒤로/앞으로 
 */

public class java192_LinkedList {

	public static void main(String[] args) {
		LinkedList<String> nStack = new LinkedList<String>(); //LinkedList로 순차자료구조도 표현할 수 있지만
															  //Stack도 표현할 수 있다. 
		//값을 추가
		nStack.push(new String("java"));
		nStack.push(new String("jsp"));
		nStack.push(new String("spring"));
		
		System.out.println("size : " + nStack.size()); //원소가 3개가 들어있으므로 size는 3이 나올 것이다 .
		
		while(!nStack.isEmpty()) { //스택이 비어있지 않으면 가지고 오라는 의미
			System.out.println(nStack.pop());
		}
		
		System.out.println("size : " + nStack.size()); //원소를 모두 꺼냈으므로 size는 0이 나올 것이다. 
	}

}
