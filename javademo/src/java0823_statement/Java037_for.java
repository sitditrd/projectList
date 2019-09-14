package java0823_statement;

/*
 * 반복문에서 특정 위치로 이동(continue)를 하거나 빠져나올때(break)
 * 반복문은 label명을 선언하고 호출하면 된다.
 */
public class Java037_for {

	public static void main(String[] args) {
		move: //label 선언
			
		for(int i=1; i<=3; i++) {
			for(int j=1; j<=2; j++) {
				System.out.printf("j = %d ", j);
				//continue move; //label을 타고 i++증감식으로 이동한다. 결과값은 j는 1만 3번 출력될 것이다. label을 타고 i++증감식으로 이동하여 
							   //i가 3번 돌기 떄문이다.
				break move; //label을 타고 반복문을 완전히 빠져나간다.
			}
			System.out.printf("i = %d", i);
			System.out.println();
		}
	}

}
