package java0908_stream;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class java165_stream {

	public static void main(String[] args) {
		File file = new File("sample.txt");

		System.out.println(file.exists()); // 파일이 있냐 없냐를 논리값으로 리턴해준다.
		System.out.println(file.isFile()); // 파일인지 아닌지 구분할 때
		System.out.println(file.length()); // 파일의 크기를 알고싶을 때
		System.out.println(file.canRead()); // 파일을 읽을 수 있나 알고싶을 때

		FileWriter fw = null; // 이렇게 해야 finally에 fw가 접근하여 close를 쓸수 있다.

		try {
			fw = new FileWriter(file,false); //false는 Update기능(기존의 파일이 삭제가 되고 설정한 문자열을 저장)
											 //true는 Append기능(기존의 파일이 삭제가 되지 않고 설정한 문자열을 추가)
											 //FileWriter의 두번째 인자값이 아무것도 없다면 false가 된다. 
			// fw = new FileWriter("sample.txt"); //이것도 괜찮다.
			fw.write("java\r\n"); //줄바꿈을 하기 위해서는 \r\n이 필요하다.
			//write하게 되면 java라는 문자열은 buffer에 써진다. 
			fw.flush();//대상파일에 buffer의 내용을 보내고 buffer를 clear한다. 
			fw.write("jsp\r\n");
			
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				fw.close(); //close() : flush()기능 + 연결종료를 갖고 있는 것이다.
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}
}
