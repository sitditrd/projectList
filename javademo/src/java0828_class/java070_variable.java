package java0828_class;

class MemberVar {
	//멤버변수는 초기값을 설정하지 않으면 jvm에서 기본값을 제공해준다. 
	byte var_byte; //기본값으로 0을 제공한다.
	short var_short; //0
	int var_int; //0
	long var_long; //0L
	float var_float; //0.0f
	double var_double; //0.0
	boolean var_boolean; //false
	char var_char; //\u0000
	int[] num; //null
}
public class java070_variable {

	public static void main(String[] args) {
		byte loc_byte = 0; //초기값을 반드시 설정해 주어야 한다. 지역변수는 기본값을 제공해주지 않기 때문이다.
		
		System.out.printf("loc_byte: %d\n", loc_byte);
		
		
		MemberVar mv = new MemberVar();
		System.out.printf("var_byte : %d\n", mv.var_byte);
		System.out.printf("var_short : %d\n", mv.var_short);
		System.out.printf("var_int : %d\n", mv.var_int);
		System.out.printf("var_long : %d\n", mv.var_long);
		System.out.printf("var_float : %.1f\n", mv.var_float);
		System.out.printf("var_double : %.1f\n", mv.var_double);
		System.out.printf("var_boolean : %s\n", mv.var_boolean);
		System.out.printf("var_char : %c\n", mv.var_char);
		System.out.printf("var_null : %d\n", mv.num);
	}

}
