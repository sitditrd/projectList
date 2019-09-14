package java0908_api;
import java.io.*;

public class java155_exception {

	public static void main(String[] args) {
		File file = new File("sample.txt");
		FileReader fr = null;
		
		try {
			//FileNotFoundException은 checked exception(컴파일 단계에서 exception처리 나는 것)이다.
			//반드시 try~catch~finally(예외처리)를 한다.
			
			fr = new FileReader(file); 
			System.out.println(fr.read());
		} catch (FileNotFoundException e) {
			e.printStackTrace(); //예외가 발생한 경로를 추적해서 보여주는 것이다.
		} catch (IOException e) {
			e.printStackTrace(); //예외가 발생한 경로를 추적해서 보여주는 것이다.
		} 
		
	}

}
