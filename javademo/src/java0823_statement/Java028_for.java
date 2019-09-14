package java0823_statement;

/*
 * for(초기식; 조건식; 증감식) {
 * 수행할 문장 ;
 * }
 * 
 * 1. 조건식이 true일때까지만 반복문을 수행한다.
 * 2. for문 실행순서
 * 초기식 -> 조건식(true) -> 수행할 문장 -> 증감식
 * 		-> 조건식(true) -> 수행할 문장 -> 증감식
 * 		-> 조건식(false) -> for문을 빠져나옴
 * 
 * 3. 초기식은 한번만 수행한다.
 * 4. 초기식, 조건식, 증감식은 생략할수 있지만 자리는 확보해야 한다. => for(;;){} 세미콜론이 필수
 * 5. 초기식, 증감식은 생략하거나 여러개 사용할 수 있다. 
 *    조건식은 생략하거나 한개만 사용한다. 
 *    for(int a = 3, b = 4; ;sum  += a, hap += b){}
 * 6. for문에서 조건식이 생략되면 무조건 true로 인식을 하는 것이다. 
 *    for문의 종료 시점을 정확히 파악할 수 없을 떄 for문을 무한루프로 실행한다. 
 */

public class Java028_for {

	public static void main(String[] args) {
		for(int i=1; i<=5; i++)
		{
			System.out.print(i+" ");
		}
	}

}
