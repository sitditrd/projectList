package java0911_stream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

/*
 * 직렬화(serializable)
 * 
 * 1. 객체를 연속적인 데이터로 변환하는 것이다. 반대로는 역직렬화이다.
 * 2. 객체의 멤버변수들의 값을 일렬로 나열하는 것이다.
 * 3. 객체를 저장하기 위해서는 객체를 직렬화해야 한다.
 * 4. 객체를 저장한다는 것은 객체의 멤버변수의 값을 저장한다는 것이다.
 * 5. 객체를 직렬화하여 입출력할 수 있는 스트림
 * ObjectInputStream, ObjectOutputStream
 */

class Phone implements Serializable{ //객체를 직렬화하기 위해서는 이렇게 선언해야 한다. 
	String name;
	transient int price; //직렬화에서 제외시킬 변수는 transient라는 키워드를 달아준다.
	
	public Phone() {
		
	}

	public Phone(String name, int price) {
		super();
		this.name = name;
		this.price = price;
	}	
	
	public String toString() {
		return name+"\t"+price;
	}
}

public class java174_stream {

	public static void main(String[] args) {
		File file = new File("src/java0911_stream/phone.dat");
		FileOutputStream fs = null;
		ObjectOutputStream os = null;
		FileInputStream fi = null;
		ObjectInputStream oi = null;
		
		try {
			fs = new FileOutputStream(file);
			os = new ObjectOutputStream(fs);
			Phone p = new Phone("android", 5000);
			//file에 객체를 저장을 시켜주기 위해서는 직렬화가 되있어야 저장이 된다. 
			//serializable interface에 저장되어 있는 메소드는 아무것도 없다. 
			os.writeObject(p);
			os.writeObject(new String("java"));
			os.flush();
			System.out.println("객체 저장");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				os.close();
				fs.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		System.out.println("////////////////////////////");
		
		try {
			fi = new FileInputStream(file);
			oi = new ObjectInputStream(fi);
			
			Phone p = (Phone)oi.readObject(); //Phone으로 가져오기 위해 다운캐스팅이 필요하다.
			System.out.println(p.toString());
			String sn = (String)oi.readObject(); //String으로 가져오기 위해 다운캐스팅이 필요하다.
			System.out.println(sn.toString());
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
}
