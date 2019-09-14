package java0821_basic;

/*
 * 연산자(operator)
 *  = 어떠한 기능을 수행하는 기호 (+, -, *, -, /, %, >, <, ==(같다), !=(다르다))
 * 
 * 피연선자(operand)
 * 
 * 연산자 종류
 * 1. 산술연산자 : +, -, *, /, %
 * 2. 비교연산자 : >, <, >=, <=, ==, !=
 * 3. 논리연산자 : &&(and), ||(or), !(not)
 * 4. 삼항연산자(조건연산자) : 조건식 ? 참 : 거짓
 * 5. 대입연산자 : =, +=, -=, *=, /=;
 * 6. 단항연산자 : ++(1씩증가), --(1씩감소)
 * 
 */
public class Java005_operator {

	public static void main(String[] args) {
		int kor = 10;
		int eng = 20;
		
		//int = int + int 같은 타입끼리 연산하면 같은 타입의 결과값이 리턴된다. 
		int result = kor + eng;
		//System.out.println();의 단축키 sysout + ctrl + space
		System.out.println(result);

		double avg = 4.5;
		
		double result2 = kor + avg; // 식의 결과값은 double로 리턴이 될 것이다. 이유는 연산후 리턴되는 값은 자료형이 더 큰 형으로 리턴된다. 
		
		System.out.println(result2);
		
		short a = 3;
		short b = 4;
		
		//short c = a+b; //이것을 주의해야 한다. => short c = (short)(a+b)
		               //int + int = int
		               //short + short = int
				       //byte + short = int
		               //char + short = int 
		               //byte + int = int
		               //byte + byte = int
		
		char data = 'a';
		System.out.println((char)(data-32));
	}

}