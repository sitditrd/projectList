package java0914_collection;

/*
 * 1. 와일드카드(?)를 제공하는 이유
 * 	: 컬렉션에 저장되는 요소들이 특정한 객체로 정해진 살태에서 다른 객체형은 저장할 수 없는 상태였다. 
 *    하지만 때로는 기존과 같이 모든 객체들을 저장해야 할때가 있다.
 *   
 * 2. 와일드카드의 구성
 *  <?> : 모든 객체자료형에 대한 배치를 의미한다.
 *  <? super 객체자로형> : 명시된 객체자료형이나 객체자료형의 상위 객체들의 배치를 의미한다.
 *  <? extends 객체자료형> : 명시된 객체자료형이나 객체자료형으로 부터 상속받은 하위객체들의 배치를 의미한다. 
 * 
 */

class Seoul {
	public void showYou() {
		System.out.println("seoul");
	}
}

class Fruit extends Seoul {
	@Override
	public void showYou() {
		System.out.println("fruit");
	}
}

class Apple extends Fruit {
	@Override
	public void showYou() {
		System.out.println("apple");
	}
}

class Orange extends Fruit {
	@Override
	public void showYou() {
		System.out.println("orange");
	}
}

class FruitBox<T> {
	T item;

	public void store(T item) {
		this.item = item;
	}

	public T pullout() {
		return item;
	}
}

public class java201_User {

	public static void main(String[] args) {
		FruitBox<Apple> fApple = new FruitBox<Apple>();
		fApple.store(new Apple());
		openAndFruitBox(fApple);
		
		FruitBox<Seoul> fSeoul = new FruitBox<Seoul>();
		fSeoul.store(new Seoul());
		//openAndFruitBox(fSeoul);
	}

	public static void openAndFruitBox(FruitBox<? extends Fruit> param) {   // ? extends Fruit은 Fruit을 상속받은 객체가
																			// 제너릭 타입으로 올수 있다는 뜻
		
		param.pullout().showYou(); //여기서 param의 리턴형은 Fruit이다. (extends는 반환할때는 상속받은것의 최상위를 리턴한다. 하지만
																  //오버라이딩을 했으면 자식으로 넘어가서 자식것이 출력된다. )
	}
	
	public static void openAndSeoul(FruitBox<? super Seoul> param) { 
		
		((Seoul) param.pullout()).showYou(); //여기서 param의 리턴형은 Object이다. (super는 반환할때 상속의 최상위인 Object를 리턴한다. 하지만
																			 //오버라이딩을 했으면 자식으로 넘어가서 자식것이 출력된다.
																			 //출력되기 위해서는 다운캐스팅이 필요하다.)
	}

}
