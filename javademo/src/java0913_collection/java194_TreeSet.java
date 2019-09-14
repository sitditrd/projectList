package java0913_collection;
import java.util.TreeSet;

import java.util.Iterator;

/*
 * List, Set, Map 참고 사이트
 * http://darksilber.tistory.com/entry/HashMap-HashTable-HashSet-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%99%B8-%EA%B8%B0%ED%83%80
 * 
 */

public class java194_TreeSet {

	public static void main(String[] args) {
		TreeSet<Integer> tree= new TreeSet<Integer>(); //자바에서 컬렉션 이름에 tree가 들어가면 정렬시킨다는 의미이다.
													  //TreeSet은 정렬하면서 중복된 값을 허용을 하지 않는다.
		tree.add(new Integer(10));
		tree.add(new Integer(40));
		tree.add(new Integer(20));
		tree.add(new Integer(30));
		tree.add(new Integer(20)); //TreeSet은 중복된 값을 허용하지 않는다. 
		
		System.out.println("오름차순");
		//기본적으로 Tree는 오름차순으로 정렬을 해준다.
		Iterator<Integer> ite = tree.iterator();
		while(ite.hasNext()) {
			System.out.println(ite.next());
		}
		
		System.out.println("내림차순");
		ite = tree.descendingIterator(); 
		while(ite.hasNext()) {
			System.out.println(ite.next());
		}
	}

}
