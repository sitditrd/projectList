package java0830_static_access.prob;

/*
 * 품목 : apple 수량 : 5 단가 : 1200원 금액 : 6000원
 *
 * apple 1200원 짜리 5개 구입하면 6000원이 필요함
 */

//-(private)    + (public)    #(protected)     X : default

/*   클래스명 : Sales
 *   -item:String
 *   -qty:int
 *   -cost:int
 *   
 *   +setItem(item String):void
 *   +setQty(qty int):void
 *   +setCost(cost int):void
 *   +getItem():String
 *   +getQty():int
 *   +getCost():int
 *   +toString():String         ==> 출력
 *   +getPrice():int             ==> 수량 * 단가를 리턴
 */
class Sales {
	private String item;
	private int qty;
	private int cost;

	public Sales() {

	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public int getPrice(int cost, int qty) {
		return this.cost * this.qty;
	}
	
	public String toString() {
		return "품목 : "+item+" 수량 : "+qty+" 단가 : "+cost+"원 금액 : "+this.getPrice(cost, qty);
	}

}// end class Sales

public class Prob02_class {
	public static void main(String[] args) {
		Sales ss = new Sales();
		// 테스트를 할때는 아래 주석을 해제하세요.

		ss.setItem("apple");
		ss.setQty(5);
		ss.setCost(1200);

		System.out.println(ss.toString());

	}// end main()
}// end class Prob02_class
