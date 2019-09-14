package java0828_class;

/*
 * [도서관리]
 * 
 * 제목			대출여부
 * 칼의 노래		대출중
 * 어두운 상점의 거리	대출가능
 * 
 * [객체모델링 과정]
 * 객체의 특징 : 책제목, 대출여부
 * 객체의 기능 : 대출여부를 처리한다.
 * 
 */

class Book {
	String title; //3 //7
	boolean state; //5 //9
	
	String process() {
		if(state) {
			return "대출가능";
		}
		else {
			return "대출중";
		}
	}
	
}

public class java066_class {

	public static void main(String[] args) {
		Book bk = new Book(); //1
 		bk.title = "칼의 노래"; //2
		bk.state = false; //4
		Book bk2 = new Book(); //5
		bk2.title = "어두운 상점의 거리"; //6
		bk2.state = true; //8
		
		System.out.printf("%s, %s\n", bk.title, bk.process());
		System.out.printf("%s, %s\n", bk2.title, bk2.process());
	}

}
