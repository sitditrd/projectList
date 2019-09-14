package java0823_statement;

public class Java029_for {

	public static void main(String[] args) {
		int sum = 0; 
		
		/*초기값을 설정안하면 오류가 난다. 
		자바는 원칙적으로 JVM에서 메모리를 관리한다. 
		JVM의 영역중 Stack / Heap / method 영역이 있는데 이 상황에서는,
		Stack 영역에 sum, i 각각 4바이트 메모리가 잡히고 null값이 있다.*/
		
		int i;
		
		for(i=1; ;i++)
		{
			sum += i; //위의 상황(sum을 초기화 하지 않은 상태)에서 sum = sum + i를 실행할때 
					  //sum값이 null값인데 값을 불러오라고 하니 에러가 나는 것이다.
			if(sum >= 15)
				break; //조건을 만족할 시 현재 수행중인 반복문을 빠져나온다는 의미이다.
		}
		
		System.out.printf("i = %d sum = %d\n", i, sum);
	}

}
