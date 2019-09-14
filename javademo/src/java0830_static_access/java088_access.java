package java0830_static_access;

public class java088_access {

	public static void main(String[] args) {
		java087_access p = new java087_access();
		//System.out.printf("var_private=%d", p.var_private); //private이기 떄문에 오류가 난다.
		System.out.printf("var_default=%d\n", p.var_default);
		System.out.printf("var_protected=%d\n", p.var_protected);
		System.out.printf("var_public=%d\n", p.var_public);
	}
}
