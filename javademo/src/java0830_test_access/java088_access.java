package java0830_test_access;
import java0830_static_access.*;

public class java088_access extends java087_access { //자식, 부모

	public static void main(String[] args) {
		java087_access p = new java087_access();
		java088_access p2 = new java088_access();
		//System.out.printf("var_private=%d", p.var_private); //패키지가 다르니까 접근을 못한다. (오류)
		//System.out.printf("var_default=%d\n", p.var_default); //패키지가 다르니까 접근을 못한다.(오류)
		//System.out.printf("var_protected=%d\n", p.var_protected); //패키지가 다르니까 접근을 못한다. (오류)
		
		//cf) protected는 상속의 경우일 경우 다른 패키지라도 불러오기가 가능하다.(아래의 경우)
		System.out.printf("var_protected=%d\n",p2.var_protected); //패키지가 달라도 부모클래스의 자원의 접근제어가 protected이고
																  //상속을 받은 클래스에서 부모클래스의 있는 자원을 호출할 수 있다.
							
		System.out.printf("var_public=%d\n", p.var_public); //패키지가 달라도 접근이 가능하도록 설정이 되있다. 
	}

}
