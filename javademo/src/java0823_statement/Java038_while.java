package java0823_statement;

/*
 * do(조건식) {
 * 	수행할문장;
 * }
 * 
 * while문은 조건식을 생략할 수 있다. 
 */

public class Java038_while {

	public static void main(String[] args) {
		
		/*for(int i=1; i<=5; i++)
		{
			System.out.println(i);
		}*/
		
		/*int i=1;
		
		while(i<=5)
		{	
			System.out.println(i);
			i++;
		}*/
		
		/*int i=0;
		
		while(++i<=5) // 연산자 우선순위에 의하여 증감연산자 먼저 수행하고 while문을 수행한다. 
		{
			System.out.println(i);
		}*/
		
		int i=0;
		
		while(i++<=5) // 연산자 우선순위에 의하여 비교연산자를 먼저 수행하고 후위 연산자를 수행하여 while문을 수행한다.
		{
			System.out.println(i);
		}

	}

}
