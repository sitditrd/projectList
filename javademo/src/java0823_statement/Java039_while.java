package java0823_statement;

public class Java039_while {

	public static void main(String[] args) {
		int cnt = 1;

		while (true) { //while문에서는 조건식을 생략할 수 가 없다.
			System.out.println(cnt++);

			if (cnt == 6)
				break;
		}

	}

}
