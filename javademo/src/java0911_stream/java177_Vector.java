package java0911_stream;
import java.util.Vector;

/*
 * 배열 : length키워드
 * 문자열 : length()메소드
 * 컬렉션 : size()메소드
 */

/*
 * 컬렉션 클래스를 선언하고 생성할 때 제너릭을 선언한다.
 * 제너릭(generic) : 컬렉션 클래스에 저장된 객체를 가져올 때 다운캐스팅하는 작업을 생략할 수 있도록 제공해주는 기능이다. 
 */

public class java177_Vector {

	public static void main(String[] args) {
		Vector<String> v = new Vector<String>();
		v.add(new String("java"));
		v.add(new String("jsp"));
		v.add(new String("spring")); 
		//업캐스팅이 되어 객채로 저장이 된 것이다.
		
		System.out.println("/////////일반 반복문/////////");
		for(int i=0; i<v.size(); i++) {
			String data = v.get(i); //하지만 이떄는 미리 제너릭를 설정해놓았기 때문에 
									//값을 불러올 때 일일히 다운캐스팅을 하지 않아도 된다.
			System.out.println(data);
		}
		
		//개선된 루프는 배열과 컬렉션에서 사용된다. 
		System.out.println("/////////개선된 반복문/////////");
		//for(데이터 타입 변수: 배열 or 컬렉션) {}
		for(String st : v) {
			System.out.println(st);
		}
		
		//Integer, Double, short, Long도 갖고 싶도록 하고 싶다. 그렇다면 Number로 선언하면 된다.
		Vector<Number> vt = new Vector<Number>();
		//Integer -> Number -> Object (up-casting)
		vt.add(new Integer(10));
		//Double -> Number -> Object (up-casting)
		vt.add(new Double(10.4));
		//Float -> Number -> Object (up-casting)
		vt.add(new Float(4.8F));
		
		//출력은 각각형에 맞게 해야한다. 아래와 같이.
		for(Number ne: vt) {
			if(ne instanceof Integer) {
				Integer it = (Integer)ne;
				System.out.println(it);
			} else if(ne instanceof Double) {
				Double de = (Double)ne;
				System.out.println(de);
			} else if(ne instanceof Float) {
				Float ft = (Float)ne;
				System.out.println(ft);
			}
		}
	}

}
