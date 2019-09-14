package java0905_api.prob;
import java.util.StringTokenizer;

/*
 * [출력결과]
 * Samsung 상품 정보
 * 제품번호 : PROD-00001, 제품명 : 갤럭시S, 수량 : 5, 가격 : 940000
 */

public class Prob001_String {

	public static void main(String[] args) {
		String msg = "PROD-00001**Samsung**갤럭시S**5**940000";
		Product prod = createProduct(msg);
		System.out.println(prod.getMaker() + " 상품 정보");
		System.out.println(prod.toString());
	}//end main()

	private static Product createProduct(String message) {
		//매개변수로 들어온 문자열을 적절히 이용하여 
		//Product 객체를 생성후 리턴하는createProduct() 메서드를 구현하시오.
		//String->int : Integer.parseInt("10");
		
		String[] str = message.split("\\*{2}");
		
		/*StringTokenizer st = new StringTokenizer(message,"**");
		String[] str = new String[5];
		int cnt=0;
		
		while(st.hasMoreTokens()) {
			str[cnt++] = (st.nextToken());
		}*/
		
		Product prod2 = new Product();
		prod2.setProductId(str[0]);
		prod2.setMaker(str[1]);
		prod2.setName(str[2]);
		prod2.setAmount(Integer.parseInt(str[3]));
		prod2.setPrice(Integer.parseInt(str[4]));
		
		return prod2;
	}// end creatProduct
}// end class






