package java0912_collection;
import java.util.*;

//오름차순
class Ascending implements Comparator<Integer> {
	@Override
	public int compare(Integer o1, Integer o2) {
		System.out.println(((o1+"/ "+o2+" ")+o1.compareTo(o2)));
		return o1.compareTo(o2);
	}
	//String도 그렇지만 Integer도 Comparator를 상속받아서 앞에것이 크면 1을 리턴하고 뒤에 것이 크면 -1을 리턴하도록 오버라이딩 해놓았다.	
}

//내림차순
class Descending implements Comparator<Integer> {
	@Override
	public int compare(Integer o1, Integer o2) {
		return o2.compareTo(o1);
	}
}

public class java187_Sort {

	public static void main(String[] args) {
		Integer[] arr = new Integer[] {1,3,5,2,4};
		ArrayList<Integer> aList = new ArrayList<Integer>(Arrays.asList(arr));
		aList.sort(new Ascending());
		System.out.println(aList);
		aList.sort(new Descending());
		System.out.println(aList);
		
		System.out.println("//////////////////////////////");
		//오름차순(기본)-아무것도 지정하지 않았을 때
		Collections.sort(aList); //java.util.클래스에 저장되어 있다. 
		System.out.println(aList);
		
		//내림차순
		Collections.sort(aList, new Descending());
		System.out.println(aList);
		
		System.out.println("//////////////////////////////");
		
		ListIterator<Integer> ite = aList.listIterator();
		while(ite.hasNext()) {
			System.out.println(ite.next());
		}
		System.out.println("=============================");
		while(ite.hasPrevious()) {
			System.out.println(ite.previous());
		}
	}
}
