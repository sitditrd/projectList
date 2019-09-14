package java0831_abstract_interface;

/* 
 * -(private) +(public) *(protected)
 * class와 interface를 이용하여 성적처리
 * 클래스명 : User
 *  -name:String
 *  +User()
 *  +User(name:String)
 *  +toString():String
 *  
 *  인터페이스명 : Score
 *  +sol:int  (초기값:20)
 *  +getScore():int
 *  
 *  인터페이스명 : Print
 *  +toPaint():String
 *  
 *  클래스명 :UserTest에 위에서 정의한 클래스,인터페이스 상속받음
 *  [출력화면]
 *  이름 : 홍길동
 *  점수 : 60점
 */

interface Score {
	public int sol = 20; // static final이 빠져있는 상태이다.
					     // 기본적으로 interface멤버변수는 static final인데 JVM에서 자동으로 붙여서 처리한다.

	public abstract int getScore();
}

interface Print {

	public abstract String toPaint();
}

class User extends Object { // 클래스중 제일 상위클래스인 Object를 상속받고 있다.(안써주어도 JVM에서 처리 가능하다.)
	private String name;

	public User() {

	}

	public User(String name) {
		this.name = name;
	}

	@Override // 이렇게 했을때 오류가 안뜬다는 것은 오버라이드라는 것이다.
	public String toString() { // Object라는 클래스에 정의되있는 메소드를 class User에서 오버라이딩한 메소드이다.
		return "이름 : " + name;
	}
}

class UserTest extends User implements Score, Print {

	int Score;

	UserTest(String name, int Score) {
		super(name);
		this.Score = Score;
	}

	public int getScore() {
		return Score;
	}

	public String toPaint() {
		return toString() + "\n" + "점수 : " + getScore()*20;
	}
}

public class java107_interface {

	public static void main(String[] args) {

		UserTest ut = new UserTest("홍길동", 3);

		System.out.println(ut.toPaint());
	}// end main( )

}// end class
