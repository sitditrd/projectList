package java0905_api;
import java.util.regex.Pattern;

public class java125_1_RegEx {

	public static void main(String[] args) {
		System.out.println("===========================");
		/*
		 * Pattern.matcher() : 빠르게 어떠한 text(String)이 주어진 Pattern에
		 *          있는지를 확인한다.
		 * Pattern.compile(): 여러개의 텍스트를 재사용 가능한 Pattern 
		 *          인스턴스로 컴파일 한다.
		 * find() : 최초의 패턴 위치로 이동한 뒤 True 반환, 없으면 false 
		 * find(int start) : start 위치 부터 find 
		 * start() : 매칭되는 패턴의 시작 인덱스 반환 
		 * start(int group) : group이 매칭되는 시작 인덱스 반환
		 * end() : 매칭된 패턴 한칸 뒤 인덱스 반환 
		 * end(int group) : 지정되 그룹이 매칭되는 한칸 뒤 인덱스 반환 
		 * group() : 최초로 그룹 매칭된 패턴을 반환 group(int group) : 그룹 매칭된 부분중 group번째 패턴을 반환 
		 * groupCount() : 패턴내 그룹핑(괄호로 묶은 패턴들)의 갯수 반환
		 * matches() : 패턴이 전체 문자열과 일치하면 True
		 */

		String input1 = "qweqwedk";
		String input2 = "maaaaa";
		String input3 = "252352";

		// \\w : 영문, 숫자를 파악하는 의미이다.     [0-9a-zA-Z]
		System.out.println(input1.matches("[\\w]{5,10}"));
		
		//위와 같은 의미
		//input1에서 Pattern [\\d]이 발견되면 true를 리턴해라
		System.out.println(Pattern.compile("[\\d]").matcher(input1).find());
		System.out.println(Pattern.compile("[a-zA-Z]").matcher(input1).find());
		
		System.out.println(input1.matches("[\\w]{5,10}") 
				 && input1.matches(".*\\d.*") 
				 && input1.matches(".*[a-zA-Z].*"));
		
		System.out.println(input1.matches("[\\w]{5,10}") && Pattern.compile("[\\d]").matcher(input1).find()
				&& Pattern.compile("[a-zA-Z]").matcher(input1).find());
		
		System.out.println(input2.matches("[\\w]{5,10}") && Pattern.compile("[\\d]").matcher(input2).find()
				&& Pattern.compile("[a-zA-Z]").matcher(input2).find());

		System.out.println(input3.matches("[\\w]{5,10}") && Pattern.compile("[\\d]").matcher(input3).find()
				&& Pattern.compile("[a-zA-Z]").matcher(input3).find());
	}

}
