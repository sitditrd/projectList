package java0824_array;

/*
 * 변수 : 하나의 값을 저장하기 위한 기억공간이다. 
 * 
 * 배열 : 
 * 1. 같은 데이터 타입의 여러 변수를 하나의 묶음으로 다루는 것이다.
 * 2. 많은 양의 값(데이터)를 다룰 떄 유용하다.
 * 3. 배열의 각 요소는 서로 연속적이다. 
 * 
 */

public class Java041_array {

	public static void main(String[] args) {
		/*int ko = 90;
		int en = 80;
		int jp = 40;
		*/
		
		//배열선언
		int[] array; //int array[];도 된다.
		
		//new키워드를 이용해서 배열을 생성한다.
		//배열의 크기는 3개 * 4byte 크기는 12byte이다.
		//각 요소마다 인덱스가 0부터 붙는다. 
		array = new int[3]; //참조데이터 타입은 메모리를 확보하기 new의 키워드를 해주어야 한다. 
		                    //new의 명령어로서 Stack에서 heap영역에 메모리를 확보할 수 있는 것이다.
		
		//new키워드로 배열생성을 안하고 바로 초기화함.
		
		int[] array2 = {1,2,3,4};
		
		for(int i=0; i<array.length; i++)
		{
			System.out.printf("array[%d]=%d\n", i, array[i]);
		}
		
		for(int i=0; i<array2.length; i++)
		{
			System.out.println(array2[i]);
		}
	}

}
