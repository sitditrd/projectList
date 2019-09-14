package java0821_basic;

//주석 : 프로그램에 대한 부가적인 설명 

//한문장에 대한 주석처리
/*여러문장에 대한 주석처리*/
/** document에 대한 주석처리 */

// 자동정렬시 단축키 ctrl + shift + f

public class Java002_value {
	
	public static void main(String[] args) { // 프로그램의 시작
		System.out.println(3); // 문장의 끝에는 ;(세미콜론이) 붙는다.
		System.out.println(3);
		// 프로그램에서 사용되는 모든 데이터는 일단 메모리에 저장되어야 한다.
		// 위의 3은 똑같은 값이지만 시스템에서는 다르다고 인식한다. 다른 주소값에 저장되기 때문이다.
		
		int num = 100; //변수선언 => 자료형 + 변수명 = 변수값
		System.out.println(num); //같은 주소의 메모리에 저장되어 있는 값을 불러온다.
		System.out.println(num); //같은 주소의 메모리에 저장되어 있는 값을 불러온다.
		
	}// end main //프로그램의 끝

}// end class