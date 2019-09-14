package java0912_collection;

import java.util.ArrayList;
import java.util.Comparator;

class Person implements Comparator<Person> {
	private String name;
	private int age;

	public Person() {

	}

	public Person(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}

	@Override
	public String toString() {
		return name + " " + age;
	}

	@Override
	// 이름은 오름차순, 나이는 내림차순
	public int compare(Person o1, Person o2) {
		/*
		 * //이름으로만 오름차순을 하려면 아래와 같이 하도록 한다. return o1.name.compareTo(o2.name);
		 */

		/*
		 * //이름으로만 내림차순을 하려면 아래와 같이 하도록 한다. return o2.name.compareTo(o1.name);
		 */

		// 나이 오름차순
		// return o1.age.compareTo(o2.age) //이렇게 하면 오류가 난다. 아래와 같이 하도록 한다.
		/*
		 * if(o1.age > o2.age) { return 1; } else if(o1.age < o2.age) { return -1; }
		 * else { return 0; }
		 */

		/*
		 * //나이 내림차순 if(o1.age < o2.age) { return 1; } else if(o1.age > o2.age) { return
		 * -1; } else { return 0; }
		 */

		// 이름 오름차순, 나이 내림차순

		//보통 성적을 매길 때 평균으로 내림차순 평균이 같으면 총점으로 내림차순한다.
		
		if (!(o1.name.equals(o2.name))) // 이름이 같지 않을 때만 오름차순 해준다.
			return o1.name.compareTo(o2.name);
		else if (o1.age > o2.age) { // 이름이 같을 때는 위를 수행하지 않고 나이를 내림차순으로 정렬한다.
			return -1;
		} else if (o1.age < o2.age) {
			return 1;
		} else {
			return 0;
		}
	}
}

public class Java189_Sort {

	public static void main(String[] args) {
		ArrayList<Person> ts = new ArrayList<Person>();
		ts.add(new Person("홍길동", 40));
		ts.add(new Person("가비", 30));
		ts.add(new Person("가비", 20));
		ts.add(new Person("나비", 15));
		ts.sort(new Person());
		System.out.println(ts);
	}// end main()

}// end class
