package java0905_api;

/*
 * 정규식(Regular Expression)
 * 
 * 1. 정규식이란 텍스트 데이터 중에서 원하는 조건(패턴)과 일치하는 문자열을 찾아내기 위해 사용하는 것으로
 * 미리 정의된 기호와 문자를 이용해서 작성한 문자열을 말한다.
 * 
 */

public class java124_RegEx {

	public static void main(String[] args) {
		String sn = "java korea";
		String sg = "";
		String st = "java    korea";
		
		for(int i=0; i<sn.length(); i++) {
			if(sn.charAt(i) == 'a' || sn.charAt(i) == 'r') {
				sg += '_';
			}
			else {
				sg += sn.charAt(i);
			}
		}
		
		System.out.println(sg);
		
		System.out.println("regular expression을 이용한 문자변경");
		//System.out.println(sn.replaceAll("java", "jsp")); //java를 jsp로 바꾸어라
		
		//[]대괄호는 or을 의미한다.
		//sn변수에 저장된 문자열에서 a이거나 r이면 "_"으로 변경된다.
		System.out.println(sn.replaceAll("[ar]", "_")); 
		
		//sn변수에 저장된 문자열에서 a이거나 r이 포함되면 true 아니면 false를 리턴한다.
		System.out.println(sn.matches(".*[ar].*")); //.*[ar] : a/r로 끝나니? | [ar].* : a/r로 시작하니?
		
		//{2,3} 2개부터 3개 까지의 공백을 "@"으로 변경한다.
		System.out.println(st.replaceAll("\\s{2,3}", "@")); //최대 3개까지의 공백을 @로 대체하고 1개의 공백이 남는다. 
															//원래는 \s가 공백인데 문자열로 취급하기 위해서 \\s라고 한다. 
															//아니면 특수문자로 인식을 해버리기 때문이다. 
	}

}
