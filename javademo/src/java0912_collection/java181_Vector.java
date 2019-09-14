package java0912_collection;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.Vector;



/* [프로그램 출력결과]
		 kim   56  78   12  146
		 hong   46  100  97  243
		 park   96  56   88  240
*/
class Sawon {
	String name;
	int one;
	int two;
	int three;

	public Sawon() {

	}

	public Sawon(String name, int one, int two, int three) {
		super();
		this.name = name;
		this.one = one;
		this.two = two;
		this.three = three;
	}

	private int count() {
		return one + two + three;
	}

	@Override
	public String toString() {
		return name + " " + one + " " + two + " " + three + " " + count();
	}

}// end Sawon

public class java181_Vector {

	public static void main(String[] args) {
		String sn = "./src/java0912_collection/score.txt";
		Vector<Sawon> vt = lines(sn);
		prnDisplay(vt);

	}

	private static Vector<Sawon> lines(String strName) {
		// strName 매개변수의 값을 이용해서 Vector에 데이터를 저장한후
		// 리턴하는 프로그램을 구현하시오.
		File file = new File(strName);
		Scanner sc = null;
		String str = "";
		String[] data = new String[10010];
		
		Vector<Sawon> vt2 = new Vector<Sawon>();
		
		try {
			sc = new Scanner(file);
			while(sc.hasNextLine()) {
				str = sc.nextLine();
				data = str.split("[:/]");
				vt2.add(new Sawon(data[0], Integer.parseInt(data[1]),
						Integer.parseInt(data[2]),Integer.parseInt(data[3])));
			}
		} catch(FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}
		return vt2;
	}

	private static void prnDisplay(Vector<Sawon> vt) {
		// vt에 저장된 객체들을 출력결과와 같이 프로그램을 구현하시오.
		
		for(Sawon sa : vt) {
			System.out.println(sa.toString());
		}
	}

}
