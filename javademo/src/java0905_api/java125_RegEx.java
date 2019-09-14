package java0905_api;

public class java125_RegEx {

	public static void main(String[] args) {
		String sn = "1a2345";
		String sb = "aaaaab";
		String st = "aetwefgcc";
		
		//a-zA-Z_*$가 sn변수에 포함이 되어 있으면 true, 아니면 false를 리턴한다. 
		System.out.println(sn.matches(".*[a-zA-Z_*$].*"));

		//sn변수에 0-9가 포함되어 있으면 true, 아니면 false로 나타낸다.
		System.out.println(sn.matches(".*[0-9].*"));
		System.out.println(sn.matches("\\d")); //위의 문장과 결과가 똑같다. 
		
		//sb변수에 저장된 값이 2로 시작되면 true,아니면 false를 리턴한다.
		System.out.println(sb.matches("2.*"));
		
		//sb변수에 저장된 값이 2로 시작해서 5로 끈나면 true 아니면 false를 리턴한다.
		System.out.println(sb.matches("2.*5"));
		
		//sb변수에 저장된 값이 a이거나 b로 시작하고 5자리 문자열이면 true 아니면 false를 리턴한다.
		System.out.println(sb.matches("[ab].{5}"));
		
		//st변수에 저장된 문자열이 a또는 b로 시작하고 cc로 끝나면서
		//사이에는 임의문자 최소 1개에서 5개를 포함한다.
		System.out.println(st.matches("[ab].{1,5}cc"));
	}

}
