package java0914_collection;

class Average<T extends Number> { // Integer, Double , Short, Float등등 Number를 상속받은 것만 T에 들어갈 수 있다.
									// String은 안된다.
	private T[] list;

	public Average() {

	}

	public Average(T[] list) {
		this.list = list;
	}

	public double findAverage() {
		double sum = 0.0;

		for (T data : list)
			sum = sum + data.doubleValue();

		return sum / list.length;
	}
}

public class java200_User {

	public static void main(String[] args) {
		Integer it[] = new Integer[] { 1, 5, 3, 2 };
		Average<Integer> av = new Average<Integer>(it);
		System.out.println(av.findAverage());

		Double de[] = new Double[] { 4.2, 10.3, 2.8 };
		Average<Double> ag = new Average<Double>(de);
		System.out.println(ag.findAverage());

		// Average<String> ae = null; //오류가 뜬다. T는 extends Number이기 때문이다 . Bound mismatch Exception이 나온다.

		Number nb[] = new Number[] { 2, 5.3F, 4.5 };
		Average<Number> aa = new Average<Number>(nb);
		System.out.println(aa.findAverage());
	}

}
