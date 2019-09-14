package java0829_class;

/* 
 * 상품				가격		상품재고  팔린수량
 * Nikon            400000    30    50
 * Sony             450000    20    35
 * FujiFilm         350000    10    25
 * 
 */

class Goods {
	String name;
	int price;
	int numberOfStock;
	int sold;

	public Goods() {

	}

	public Goods(String name, int price, int numberOfStock, int sold) {
		super();
		this.name = name;
		this.price = price;
		this.numberOfStock = numberOfStock;
		this.sold = sold;
	}

	public void prn() {
		System.out.printf("%-14s %8d %5d %5d\n", name, price, numberOfStock, sold);
	}

}

public class java074_class {

	public static void main(String[] args) {
		/*
		 * Goods gd = new Goods("Nikon", 400000, 30, 50); gd.prn(); Goods gd2 = new
		 * Goods("Sony", 450000, 20, 35); gd2.prn(); Goods gd3 = new Goods("FujiFilm",
		 * 350000, 10, 25); gd3.prn();
		 */

		// 위를 배열로 생각해서 구현하도록 한다.

		Goods[] goodArray = new Goods[3];

		goodArray[0] = new Goods("Nikon", 400000, 30, 50);
		goodArray[1] = new Goods("Sony", 450000, 20, 35);
		goodArray[2] = new Goods("FujiFilm", 350000, 10, 25);

		/*
		 * for(int i=0; i<goodArray.length; i++) { goodArray[i].prn(); }
		 */

		display(goodArray);
	}

	public static void display(Goods[] goodArray) {
		for (int i = 0; i < goodArray.length; i++) {
			goodArray[i].prn();
		}
	}

}
