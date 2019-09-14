package java0912_collection.prob;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

/*
 * [문제]
 * phone.txt파일에 저장된 값들을  phoneProduct()메서드에서
 * SmartPhone에 저장한 후 ArrayList에 추가한후 리턴하고,
 * phoneList()메소드에서 프로그램 실행결과처럼 출력하는 프로그램을
 * 구현하시오.
 * 
 * [프로그램 실행결과]
 * << 1 번째 상품 >>
	제품 아이디 : PROD-00001
	제품명 : 아이폰5
	가격 : 940000
	수량 : 4
	제조사 : 애플
   << 2 번째 상품 >>
	제품 아이디 : PROD-00002
	제품명 : 갤럭시S
	가격 : 860000
	수량 : 3
	제조사 : 삼성전자

 */
public class Prob003_ArrayList {

	public static void main(String[] args) {
		String pathFile = ".\\src\\java0912_collection\\prob\\phone.txt";
		ArrayList<SmartPhone> phoneList = phoneProduct(pathFile);
		prnDisplay(phoneList);
	}// end main()

	private static ArrayList<SmartPhone> phoneProduct(String pathFile) {
		// phone.txt파일의 데이터를 ArrayList에 저장한후 리턴하는 프로그램을 구현하시오.
		ArrayList<SmartPhone> al = new ArrayList<SmartPhone>();
		File file = new File(pathFile);
		Scanner sc = null;
		String str = "";

		try {
			sc = new Scanner(file);
			while (sc.hasNextLine()) {
				str = sc.nextLine();
				SmartPhone sm = new SmartPhone(); // 61번 라인의 al.add(sm);을 할때에는 sm의 주소값을 저장하기 때문에 
												  // 각각의 클래스 값을 arrayList에 담고싶다면
												  // 라인이 바뀔때마다 맴버변수참조연산자를 선언해주어야 한다. 
												  // 즉, try선언문 안에 넣어주어야 한다는 의미이다. 
				
				String[] data = str.split(":"); //split의 리턴타입은 스트링 배열이다.

				sm.setProductId(data[0]);
				sm.setMaker(data[4]);
				sm.setName(data[1]);

				sm.setPrice(Integer.parseInt(data[2]));
				sm.setAmount(Integer.parseInt(data[3]));

				al.add(sm);
			}
		} catch (FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}

		return al;
	}// end phoneProduct( )

	private static void prnDisplay(ArrayList<SmartPhone> phoneList) {
		// phoneList매개변수의 저장된 값을 출력하는 프로그램을 구현하시오.

		int index = 1;
		for (SmartPhone sp : phoneList) {
			System.out.printf("<< %d 번째 상품 >>\n", index);
			index++;
			System.out.println("제품 아이디 : " + sp.getProductId() + "\n" + "제품명 : " + sp.getName() + "\n" + "가격 : "
					+ sp.getPrice() + "\n" + "수량 : " + sp.getAmount() + "\n" + "제조사 : " + sp.getMaker() + "\n");
		}

		/*
		 * for (int i = 0; i < phoneList.size(); i++) {
		 * System.out.printf("제품 아이디 : %s\n제품명 : %s\n가격 : %d\n수량 : %d\n제조사 : %s\n",
		 * phoneList.get(i).getProductId(), phoneList.get(i).getName(),
		 * phoneList.get(i).getPrice(), phoneList.get(i).getAmount(),
		 * phoneList.get(i).getMaker() + "\n"); }
		 */
	}// end prnDisplay( )

}// end class
