package java0913_collection;
import java.util.LinkedList;
import java.util.ListIterator;

public class java191_LinkedList {

	public static void main(String[] args) {
		LinkedList<String> aNode = new LinkedList<String>();
		
		aNode.add(new String("java"));
		aNode.add(new String("jsp"));
		aNode.add(new String("spring"));
		
		ListIterator<String> itr = aNode.listIterator(); //Previous를 사용하기 위해
		
		System.out.println("앞->뒤");
		
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		
		System.out.println("뒤->앞"); //먼저 앞에서 뒤로 수행을 해야 뒤에서 앞으로 수행을 할 수 있다. 
		
		while(itr.hasPrevious()) {
			System.out.println(itr.previous());
		}
		
	}

}
