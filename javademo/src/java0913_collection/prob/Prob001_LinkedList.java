package java0913_collection.prob;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.LinkedList;
import java.util.Scanner;

/*
 * LinkedList
 * 1 List : 순서적으로 데이터를 저장
 * 2 Stack : LIFO
 * 3 Queue : FIFO
 */

public class Prob001_LinkedList {

	public static void main(String[] args) {
		/*
		 * booklist.txt파일의 데이터를 Stack으로 처리하여 출력되도록 프로그램을 구현하시오. 
		 * title publisher writer price(순으로 출력하시오.)
		 * 
		 * JSP Programming JSPPub JSPExpert 21000 
		 * Servlet Programming WeBBest GoodName 20000 
		 * JDBC Programming JDBCBest NaDo SQL 30000 
		 * SQL Fundmental SQLBest Na SQL 47000 
		 * Java Programming JavaBest Kim kava 25000
		 * 
		 */

		File file = new File(".\\src\\java0913_collection\\prob\\booklist.txt");

		Scanner sc = null;
		String str = "";
		LinkedList<Book> nStack = new LinkedList<Book>();

		try {
			sc = new Scanner(file);

			while (sc.hasNextLine()) {
				str = sc.nextLine();
				String[] data = str.split("/");

				nStack.push(new Book(data[0], data[1], data[2], data[3]));

				Book bk2 = nStack.pop(); // nStack이 pop할 때 반환형은 Book클래스형이기 때문에
									     // 리턴타입을 Book으로 받고 설정한 맴버변수접근자 bk2로 접근하여 출력한다.

				nStack.push(bk2);
				
				/*System.out.print(bk2.getTitle() + " " + bk2.getPublisher() + " " + bk2.getWriter() + " "
						+ bk2.getPrice() + "\n");*/
			}
		} catch (FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}
		
		while(!nStack.isEmpty()){
			//stack객체변수에서 데이터를 가져와서 book변수에 저장한다.
			Book book=nStack.pop();
			System.out.printf("%s %s %s %s\n",book.getTitle(),book.getPublisher(),
					     book.getWriter(), book.getPrice());
		}

	}// end main()

}// end class
