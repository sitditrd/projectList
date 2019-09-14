package java0821_basic;

public class Java016_print {
	public static void main(String[] args)
	{
		System.out.println("java"); // 줄바꿈이 된다.
		System.out.println("jsp");
		System.out.print("\t spring\n\t");
		System.out.print(" oracle\n\t"); // 줄바꿈이 되지 않는다.
		
		/*
		 * printf("출력형식", 값1, 값2, ...);
		 * 출력자료
		 * %d : 정수
		 * %f : 실수
		 * %c : 문자
		 * %s : 문자열
		 * %b : 논리
		 * %% : %
		 * \ : 컴퓨터에서 지원하는 문자를 표기할 때
		 * 
		 */
		System.out.printf("%s\n", " mabatis");
		System.out.printf("%d\n", 50);
		System.out.printf("%f\n", 4.5);
		System.out.printf("%c %b %d\n", 'a', true, 10);
		
		//소수를 첫번째까지 출력한다.
		System.out.printf("%.1f\n", 4.56);
		
		System.out.printf("%5.1f\n", 34.56);
		System.out.printf("%5.1f\n", 5124.56); //지정한 자리 수 무시하고 출력이 된다.
		System.out.printf("%5.2f\n", 4.567);
		System.out.printf("%5.2f\n", 24.567);
		System.out.printf("%5.2f\n", 124.567); //지정한 자리 수 무시하고 출력이 된다.
		System.out.printf("%5.2f\n", 124.5); //범위로 지정한 값에 소수점이 없으면 0으로 채운다.
		
		System.out.printf("%-5.2f\n", 4.56); //-값을 주면 왼쪽으로 정렬이 된다.
		
		//홍길동님의 평균은 95.0이므로 A학점입니다.
		
		System.out.printf("%s님의 평균은 %.1f이므로 %c학점입니다.\n", "홍길동", 95.0, 'A');
		
		System.out.printf("%d + %d = %d\n", 3 , 2, 3+2);
		
		System.out.printf("%d %% %d = %d\n", 3,2,3%2); // %를 기호로 쓰려면 %%로 붙이면 된다.
		
		System.out.printf("당신의 색깔은 \"%s\"입니다.\n", "파랑");
		
		System.out.printf("안녕\thello\n");
		
		/*
		 * 명명표기법(Name Notation)
		 * 
		1 명명표기법: 명칭규칙을 의미한다.
		2 식별자의 명칭은 프로젝트, 프로그래밍언어, 개발도구등에따라 다를 수 있다.
		3 명명 표기법을 따르는 목적은 가독성, 효율성을 높이기 위해서다.
		4  대표적인 표기법 종류: 헝가리안 표기법, 카멜표기법, 파스칼표기법, 스네이크 표기법
		
  		1) 헝가리안 표기법(Hungarian Notation): 데이터 종류  등의 약어를 이름 앞에 붙여 표기해주는 방법이다.
       	데이터 종류   Prefix  헝가리표기법
         	boolean     b            bCheck
         	char        c            cData
        	String       s            sName
        	
        	//자바에서는 카멜 표기법을 사용한다.
        	
  		2) 카멜 표기법(Camel Notation) : 이름의 시작은 소문자 두번째 단어부터는 그 단어의 시작글자만 대문자로 표기하는 방법이다.
                   	표기법이 낙타(카멜)의 모양과 비슷하여 카멜표기법이라한다.
      		valueChanged, appDomain
      		
  		3) 파스칼 표기법(Pascal Notation) : 모든 단어의 첫 글자를 대문자로 표기하는 방법이다.
     		ValueChanged, AppDomain
     		
  		4) 스네이크 표기법(Snake Notation) : 단어간의 연결을 언더바(_)로 표기하는 방법이다.
     		value_changed, app_domain
		 */
	}

}


