package java0828_class;

/*
 * 메뉴명		가격		갯수
 * 떡볶이		2000	3
 * 김말이		500		2
 * 오뎅		300		4
 */

class MenuShop {
	String menu;
	int price;
	int cnt;
	
	int count() {
		return price * cnt;
	}
	
	void prn() {
		System.out.println("메뉴명 : " + menu);
		System.out.println("가격 : " + price);
		System.out.println("갯수 : " + cnt);
		System.out.println("메뉴금액 :" + count());
		System.out.println();
	}
	
}

public class java068_class {

	public static void main(String[] args) {
		int total=0;
		MenuShop Me = new MenuShop();
		Me.menu = "떡볶이";
		Me.price = 2000;
		Me.cnt = 3;
		Me.prn();
		total += Me.count();
		MenuShop Me2 = new MenuShop();
		Me2.menu = "김말이";
		Me2.price = 500;
		Me2.cnt = 2;
		Me2.prn();
		total += Me2.count();
		MenuShop Me3 = new MenuShop();
		Me3.menu = "오뎅";
		Me3.price = 300;
		Me3.cnt = 4;
		Me3.prn();
		total += Me3.count();
		System.out.println("============================");
		System.out.println("총금액 : " + total);
	}

}
