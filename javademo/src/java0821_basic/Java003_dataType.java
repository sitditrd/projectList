package java0821_basic;
/*
 * 리터럴(literal) : 그 자체의 값 (1,2,3, ..., 'a', 'b', 'c', ..., true, false)을 호칭한다.
 * 변수(variable) : 하나의 값을 저장하기 위한 메모리 공간
 * 데이터 타입(data type) : 값의 종류와 메모리 크기를 결정.
 * 
 * 자바에서 제공되는 데이터 타입
 * 
 * 기본 데이터 타입(primitive data type)
 * 
 * byte(1), short(2), int(4), long(8) => 정수
 * float(4), double(8) => 실수
 * char(2) => 문자
 * boolean(1) => 논리
 * 
 * cf) long data = 4; <- 자료형이 long타입인데 4의 정수형은 못들어가기 떄문에 long data = 4L;로 바꾸어주어야 한다.
 * cf) float data = 3.5; <- 자료형이 float타입인데 3.5의 정수형은 못들어가기 때문에 float data = 3.5F로 바꾸어주어야 한다.
 * 
 *
 * 참조 데이터 타입(reference data type)
 * 
 * 배열(array), 클래스(class), 인터페이스(interface)
 * 
 * 시스템에서 인식하는 데이터 타입 크기
 * 
 * byte < short < char < int < long < float < double
 * 
 */

public class Java003_dataType {

	public static void main(String[] args) {
		int data = 3; // int : 정수값을 저장할 수 있는 자료형
					  // data : 메모리를 관리한다. '변수'라고 한다.
		 			  // 3을 메모리에 저장한다. 
		
		data = 10; // data변수 영역의 값을 10으로 변경하겠다는 의미이다.
		
		System.out.println(data);
		
		//경우에 따라서 메모리 할당만 따로 하고 변수에 값을 나중에 넣어도 된다.
		
		int num;
		
		num = 20;
		
		//num변수에 저장된 값을 추출하여 출력한다.
		System.out.println(num);
		//num이라는 문자열을 출력하기 위해선 아래와 같은 과정을 거친다.
		System.out.println("num");

	} //end main
	
} //end class