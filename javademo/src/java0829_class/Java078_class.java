package java0829_class;

/*
 * [출력결과]
 * 기업은행 42523-52325 100000
 * 하나은행 52253-22623 153000
 * 신한은행 16239-95235 256000
 * 총납입액:509000
 */

//단위 클래스에서 this를 사용함은 현재메모리에 생성되있는 자신을 사용하는 것이다.
class CreditCard {
	String cardName;
	String cardNum;
	int pay;

	public CreditCard() {
	}

	public CreditCard(String cardName, String cardNum, int pay) { //생성자의 오버로딩이다. 
		super();
		this.cardName = cardName;
		this.cardNum = cardNum;
		this.pay = pay;
	}

	public void prn() {
		System.out.printf("%s %s %d\n", cardName, cardNum, pay);
	}

}// end CreditCard

public class Java078_class {

	public static void main(String[] args) {
		/// [출력결과]를 참조하여 구현하시요/////////////////
		int total=0;
		CreditCard[] Card = new CreditCard[3];
		Card[0] = new CreditCard("기업은행","42523-52335",100000);
		Card[1] = new CreditCard("하나은행","52253-22623",153000);
		Card[2] = new CreditCard("신한은행","16239-95235",256000);
		
		for(int i=0; i<Card.length; i++) {
			Card[i].prn();
			total += Card[i].pay;
		}
		System.out.println("총납입금액 : " + total);
	}// end main()

}// end class
