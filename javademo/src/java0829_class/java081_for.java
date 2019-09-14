package java0829_class;

public class java081_for {

	public static void main(String[] args) {
	
		int[] num = {10, 20, 30, 40, 50};
		
		//기존의 반복문
		for(int i=0; i<num.length; i++) {
			System.out.println(num[i]);
		}
		
		System.out.println("==========================");
		
		/*
		 * 개선된 루프(==확장된 루프)
		 * 
		 * for(데이터 타입의 자리 변수의 자리 : 배열 or 컬렉션) { //무조건 0번째 인덱스부터 하나하나접근해서 처리해야 할때 많이 쓴다.
		 * 									(반드시 0부터 하나하나 들려야 되는 경우이다.)
		 * 		수행할 문장;
		 * }
		 * 
		*/
		
		for(int data : num) {
			System.out.println(data);
		}
	}

}
