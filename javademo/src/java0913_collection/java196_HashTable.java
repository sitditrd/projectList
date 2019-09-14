package java0913_collection;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Set;

/*
 * Hashtable
 * 1. Map인터페이스를 구현해놓은 클래스
 * 2. Map인터페이스를 구현해놓은 클래스들은 Key, value쌍으로 저장한다.
 * 3. value을 구분해주는 것은 key이므로 key은 중복을 허용하지 않는다.
 */

public class java196_HashTable {

	public static void main(String[] args) {
		//<key,value>를 선언해야 한다.
		Hashtable<Integer, String> table = new Hashtable<Integer, String>();
		
		table.put(10, "java");
		table.put(20, "jsp");
		table.put(30, "spring");
		
		System.out.println(table.get(20)); //jsp
		
		System.out.println("/////////////////////Enumeration/////////////////////");
		Enumeration<Integer> enu = table.keys(); //나열되어있는 것은 key값이다.
		
		while(enu.hasMoreElements()) {
			Integer key = enu.nextElement();
			System.out.printf("%d:%s\n", key, table.get(key));
		}
		
		System.out.println("/////////////////////Iterator/////////////////////");
		
		//HashSet과 TreeSet은 Set을 제공해주지만 HashTable, HashMap, TreeMap은 Set을 제공해주지 않아서 
		//Set을 따로 선언하고 iterator()을 선언한다.
		
		/* List와 Set 인터페이스의 특징 : 
		 * Collection 인터페이스를 상속받아 List와 Set인터페이스가 된다. List는 순서가 있는 Collection이고 Data중복을 허락한다. 
		 * 하지만 Set은 순서의 의미가 없으며 Data를 중복해서 포함할 수 없다.
		 * 
		 * Set 인터페이스의 특징 : HashSet의 Data 추출은 Iterator을 이용하면 된다. Iterator는 Collection내의 모든 Data에
		 * 접근할 수 있는 특징이 있다. 그리고 Data의 마지막에 상관하지 않고 검색하기 위한 인터페이스이다. Set의 Iterator() method로
		 * Iterator를 얻어 낼 수 있으며, Iterator의 hasNext() method를 이용해서 Data 끝을 만날 때까지 next() method를 
		 * 호출해서 Data를 추출할 수 있다
		 * 
		 * Map 인터페이스의 특징 : List와 Set이 순서나 집합적인 개념의 인터페이스라면 Map은 검색의 개념이 가미된 인터페이스이다. 
		 * 데이터를 삽입할 때 Key와 Value의 형태로 삽입되며, Key를 이용해서 Value를 얻을 수 있다. 
		 * 
		 * Sorted 인터페이스의 특징 : Set과 Map의 인터페이스를 상속받아 정렬기능이 추가된 것.
		 * 
		 * List -> Stack, Vector, ArrayList, LinkedList
		 * 
		 * Set -> HashSet
		 * 
		 * Map -> HashTable, HashMap
		 * 
		 * Sorted -> TreeSet, TreeMap
		 * 
		 */
		
		Set<Integer> set = table.keySet();
		Iterator<Integer> ite = set.iterator();
		
		while(ite.hasNext()) {
			Integer key = ite.next();
			System.out.printf("%d:%s\n", key, table.get(key));
		}
	}

}
