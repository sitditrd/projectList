package java0911_stream;
import java.util.Vector;

public class java175_Vector {

	public static void main(String[] args) {
		Vector v = new Vector();
		//Integer는 Object를 상속받았다. : up - casting되었다.
		
		v.add(new Integer(10)); //인덱스 번호가 0부터 저장이 된다.
		v.add(new Integer(20)); //1
		v.add(new Integer(30)); //2
		//int -> Integer -> Object
		//	auto-boxing up-casting이 일어났다. <1>
		v.add(40); //객체만 저장될 수 있는데 어떻게 해서 저장될 있을까? 
				   //이유 : <1>참고
		
		for(int i=0; i<v.size(); i++) { //v.size() : 요소의 개수를 리턴해준다.
			//Object -> Integer : down - casting되었다.
			
			Integer it = (Integer)v.get(i); //리턴해주는 것은 오브젝트이므로 받으려고 하는 데이터 타입은 Integer이기 때문에
											//오류가 난다.
			System.out.println(it);
		}

	}

}
