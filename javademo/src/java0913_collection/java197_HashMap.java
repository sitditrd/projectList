package java0913_collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

/*
 * HashMap
 * 1. Map인터페이스를 구현한 클래스이다.
 * 2. Hashtable은 동기화 되어있고, HashMap은 비동기화 처리한다.
 * 3. Hashtable과 HashMap의 다른 기능들은 거의 같다.
 */

public class java197_HashMap {

	public static void main(String[] args) {
		//<key,value>를 선언해야 한다.
		HashMap<Integer, Number> map = new HashMap<Integer, Number>();
		map.put(1, new Integer(10));
		map.put(2, new Double(4.5));
		map.put(3, new Float(2.3f));
		
		System.out.println(map.get(2)); //특정 키의 값을 불러오기 위하면 이와 같이 하면 된다.
		
		Set<Integer> set = map.keySet();
		Iterator<Integer> ite = set.iterator();
		while(ite.hasNext()) {
			Integer key = ite.next();
			System.out.printf("%d : %s\n", key, map.get(key));
		}
	}

}
