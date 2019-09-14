package java0908_stream;
import java.util.InputMismatchException;
import java.util.Scanner;

public class java163_stream {

	public static void main(String[] args) {
		System.out.println("데이터입력 : ");

		Scanner sc = new Scanner(System.in);

		int x, y;

		try {
			System.out.print("x : ");
			x = sc.nextInt();
			System.out.print("y : ");
			y = sc.nextInt();
			System.out.printf("%d + %d = %d\n", x, y, x + y);
		} catch (InputMismatchException ex) { //Unchecked Exception이다.
			System.out.println(ex.toString());
		} finally {
			sc.close();
		}

	}
}
