package java0829_class;

/*
 * [프로그램 실행과정]
 * 1. 소스 코드 작성 Java083_static.java
 * 
 * 2. 컴파일(클래스 파일 생성) : javac java083_static.java
 * 
 * 3. 실행(클래스 파일실행) java java083_static
 * 
 * 4. 클래스 로딩-메모리로 읽어온다.(중요!!)
 * 	  (static으로 선언된 자원은 JVM method영역에 생성된다.)
 * 
 * 5. main()메소드 실행 - main 스레드에서 main()메소드를 호출한다. (중요!!)
 * 
 * 6. 객체생성(new)
 * 
 * 7. 맴버변수, 메소드 호출
 * 
 * 8. main()메소드 종료 - 프로그램 종료
*/ 

/*
 * [JVM의 구조]
 * 1. stack area : 메소드의 작업공간, 메소드가 호출되면
 * 	   메소드 수행에 필요한 메모리 공간을 할당받고 메소드가 종료되면 사용하던 메모리를 반환한다.
 * 
 * 2. heap area : 객체(인스턴스)가 생성되는 공간, new키워드에 의해서 생성되는 배열과 객체는 모두 여기에 생성된다.
 * 
 * 3. method area : 클래스 정보와 클래스 변수(static)가 저장되는 곳
 * 
 * static 
 * 1. 같은 데이터 타입으로 생성된 객체는 서로 공유한다.
 * 2. 클래스가 로딩되는 시점에 메모리에 저장된다.
 * 3. static 키워드가 선언된 메소드에서는 this, super키워드를 사용할 수 없다. 
 * 	  (static 키워드가 선언된 메소드가 위 실행과정 4번에서 생성되기 때문에 즉, new보다 빠르다.)
 */

class StaticEx {
	int x = 5;
	static int y = 10;

	public StaticEx() {

	}

	public void prn() {
		System.out.printf("%2d %2d\n", x, y);
	}
}

public class java083_static {

	public static void main(String[] args) {
		
		System.out.println("StaticEx.y="+StaticEx.y); 
		
		StaticEx Se = new StaticEx();
		System.out.printf("Se.x=%d Se.y=%d\n", Se.x, Se.y);

		StaticEx Ss = new StaticEx();
		System.out.printf("Ss.x=%d Ss.y=%d\n", Ss.x, Ss.y);

		Se.x = 20;
		Se.y = 30;
		System.out.printf("Se.x=%d Se.y=%d\n", Se.x, Se.y);
		System.out.printf("Ss.x=%d Ss.y=%d\n", Ss.x, Ss.y);

		/*
		 * Se.x=5 Se.y=10 
		 * Ss.x=5 Ss.y=10 
		 * Se.x=20 Se.y=30 
		 * Ss.x=5 Ss.y=30
		 * 
		 * static변수는 공유가 된다. 
		 */
		
		System.out.println("StaticEx.y="+StaticEx.y); //이것만 보고 class에서 맴버변수에 Static변수가 있다.
	}

}
