package java0912_collection;

import java.util.ArrayList;

/*
 * Vector의 ArrayList
 * 1. Vector은 동기화 처리가 되어 있고 ArrayList은 비동기화 처리한다.
 * 2. Vector와 ArrayList은 메모리에 요소를 처리할 때 배열의 구조를 따른다.
 * 3. Vector와 ArrayList의 클래스는 처리방법이 비슷하다.
 * 4. Vector와 ArrayList으로 요소와 삽입, 삭제를 처리하는 것은 좋은 방법이 아니다.
 */

/*
 * ArrayList의 특성
 * Generic 클래스 배열을 저장할 수 있도록 생성한 클래스이다.
 * 
 * 제너릭(generic) : 컬렉션 클래스에 저장된 객체를 가져올 때 다운캐스팅하는 작업을 생략할 수 있도록 제공해주는 기능이다. 
 * 
 * 변수.add() : 원소추가
 * 변수.get() : 원소참조
 * 변수.set() : 특정 인덱스의 원소 변경
 * 변수.remove() : 특정 인덱스의 원소 삭제
 * 
 * 내부적으로 ArrayList는 Object의 자료형의 배열을 이용하고 있으므로 어떤 자료형의 데이터도 저장할 수 있다.
 * 서로 다른 자료형을 저장하는 것은 타입 안정성을 해치게 된다. 
 * 
 */

public class java182_ArrayList {

	public static void main(String[] args) {
		ArrayList<Integer> aList = new ArrayList<Integer>();
		aList.add(new Integer(10));
		aList.add(new Integer(20));
		aList.add(new Integer(30));
		
		for(int i=0; i<aList.size(); i++) {
			System.out.println(aList.get(i));
		}

	}

}
