package java0824_array;

/*
 * 배열은 기본적으로 고정배열이다.
 * 2차원 배열부터는 가변배열을 제공한다.
 * 가변배열을 제공하는 이유는 메모리 손실을 최소화 하기 위해서이다.
 */

public class Java052_array {

	public static void main(String[] args) {
		//가변배열을 생성할때는 제일 마지막의 배열크기는 지정하지 않는다.
		int[][] num = new int[3][];
		num[0] = new int[2]; //0행 2열
		num[1] = new int[3]; //1행 3열
		num[2] = new int[4]; //2행 4열
		
		num = new int[][] {{1,2}, {3,4,5}, {6,7,8,9}}; //각행마다 열의 크기가 다르므로 이런식으로 값을 지정할 수 도 있다.
		
		for(int i=0; i<num.length; i++)
		{
			for(int j=0; j<num[i].length; j++)
			{
				System.out.printf("%4d", num[i][j]);
			}
			System.out.println();
		}
	}

}
