package java0831_practice;

/*
 * class Comic, Journal에서 class Book을 상속받아 아래와 같이 구현하세요.
 * 
 * [출력결과]
 * 
 * <<<Book>>>
 * 		ID: 1
 * 		Name: JuHwan Book
 * 
 * <<<Comic>>>
 * 		ID: 2
 * 		Name: Naruto
 * 		Publisher: Daewon
 * 
 * <<<Journal>>>
 * 		ID: 3
 * 		Name: Economics 101
 * 		Author: Sungrae
 * 
*/

class Book {
	private static int idCount=0;
	private String Name;
	private int id;
	
	public Book(String Name) {
		this.Name = Name;
		id = ++idCount;
	}
	
	public String toString() {
		return "\n\tID: " + id +"\n\tName: "+Name;
	}
	public void display() {
		System.out.println("<<<Book>>>" + this.toString());
	}
}

class Comic extends Book { //class Comic은 class Book을 상속받아 공통된 Name 멤버변수를 Super()로 전달합니다.

	private String Publisher;
	
	public Comic(String Name, String Publisher) {
		super(Name);
		this.Publisher = Publisher;
	}
	
	public String toString() {
		return super.toString() + "\n\tPublisher: " + Publisher;
	}
	
	public void display() {
		System.out.println("<<<Comic>>>"+ this.toString());
	}
}

class Journal extends Book { //class Journal은 class Book을 상속받아 공통된 Name 멤버변수를 Super()로 전달합니다.
	private String Author;
	public Journal(String Name, String Author) {
		super(Name);
		this.Author = Author;
		
	}
	
	public String toString() {
		return super.toString() + "\n\tAuthor: " + Author;
	}
	public void display() {
		System.out.println("<<<Journal>>>" + this.toString());
	}
}

public class Homework_inhritance_AnJuHwan {

	public static void main(String[] args) {
		Book book = new Book("JuHwan Book");
		Comic comic = new Comic("Naruto", "Daewon");
		Journal journal = new Journal("Economics 101", "Sungrae");
		book.display();
		comic.display();
		journal.display();
	}
}
