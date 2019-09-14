package java0907_api;
import java.util.*;


/*
 * 단입력 : 5
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
계속하시겠습니까?(종료 : n, 계속 : 아무키)a
단입력 : 3
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
계속하시겠습니까?(종료 : n, 계속 : 아무키)n
프로그램종료
 */

public class java141_Scanner {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Scanner sc2 = new Scanner(System.in);
		
		int num=0;
		int flag=0;
		
		while(flag == 0) {
			System.out.print("단입력 : ");
			num = sc.nextInt();
			
			for(int j=1; j<=9; j++) {
				System.out.printf("%d * %d = %d\n", num, j, num*j);
			}
		
			System.out.print("계속하시겠습니까?(종료 : n, 계속 : 아무키)");
			String str="";
			str = sc2.nextLine();
			if(str.equals("n")) {
				System.out.println("프로그램종료");
				flag=1;
			}
			else {
				flag=0;
			}
			
		}
		
	}

}
