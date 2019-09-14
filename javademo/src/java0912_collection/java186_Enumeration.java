package java0912_collection;

import java.util.Enumeration;
import java.util.Iterator;
import java.util.Vector;

//Enumeration은 Vector와 Hashtable에서만 제공이 되는 인터페이스이다.

public class java186_Enumeration {

	public static void main(String[] args) {
		Vector<Integer> v = new Vector<Integer>();
		v.add(new Integer(10));
		v.add(new Integer(20));
		v.add(new Integer(30));
		
		/*for(int i=0; i<v.size(); i++) {
			System.out.println(v.get(i));
		}*/ //이런식 말고 쭉 가져오도록 한다.
		
		//열거형
		Enumeration<Integer> enu = v.elements();
		while(enu.hasMoreElements()) { //has, is로 시작하는 메소드의 리턴타입은 boolean이다.
			System.out.println(enu.nextElement());
		}
		
		//jdk 5.0부터 개선된 루프가 사용되었기 때문에 Enumeration은 쓰지 않는다.
		
		//반복자
		Iterator<Integer> ite = v.iterator();
		while(ite.hasNext()) {
			System.out.println(ite.next());
		}
	}

}
