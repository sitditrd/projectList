package java0823_statement;

/*
 * do {
 * 	수행할 문장; //수행할 문장을 한번 실행하고 조건식으로 간다.
 * }while(조건식); // 여기에서는 반드시 세미콜론을 찍는다. 
 */

public class Java040_do_while {

	public static void main(String[] args) {
		char chk='y';
		
		do {
			System.out.println("주문하시겠습니까?(y/n)");
		}while(chk == 'z'); // 이와 같은 경우에는 false이기 때문에 반복문을 빠져나온다. 
	}

}
