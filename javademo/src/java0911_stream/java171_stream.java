package java0911_stream;
import java.io.File;
import java.io.IOException;

public class java171_stream {

	public static void main(String[] args) {
		File file = new File("src/java0911_stream/prob.txt");
		
		if(!file.exists()) {
			try {
				file.createNewFile(); //파일이 존재하지 않을 때 생성하겠다는 의미이다.
				System.out.println("파일 생성");
			} catch (IOException e) {
				e.printStackTrace();
			} //예외처리하는 이유 : createNewFile메소드에 throws가 선언되어 있기 때문에 호출하는 메인 메소드에서 
		      //예외처리를 반드시 해주어야 한다. 
		} else {
			System.out.println("파일 존재");
		}
	}

}
