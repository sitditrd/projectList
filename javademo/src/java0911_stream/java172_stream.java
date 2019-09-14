package java0911_stream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class java172_stream {

	public static void main(String[] args) {
		DataOutputStream ds = null;
		FileOutputStream fs = null;
		DataInputStream di = null;
		FileInputStream is = null;
		
		try {
			fs = new FileOutputStream("src/java0911_stream/sample.txt");
			ds = new DataOutputStream(fs); //같은 바이트 스트림이기 때문에 연결이 된다.
			ds.writeInt(65); //유니코드 값이다. 따라서 65면 'A'를 의미한다.
			ds.write(65); //이것도 위와 마찬가지이다.
			ds.writeDouble(10.5);
			ds.writeChar('a');
			ds.writeUTF("java");
			fs.flush();
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				ds.close();
				fs.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		System.out.println("==============================");
		
		try {
			is = new FileInputStream("src/java0911_stream/sample.txt");
			di = new DataInputStream(is);
			System.out.println(di.readInt());
			System.out.println(di.read());
			System.out.println(di.readDouble());
			System.out.println(di.readChar());
			System.out.println(di.readUTF());
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				di.close();
				is.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
