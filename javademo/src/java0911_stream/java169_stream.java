package java0911_stream;
import java.io.File;

public class java169_stream {

	public static void main(String[] args) {
		File file = new File("src/java0911_stream/temp");
		
		if(!file.isDirectory()) { //디렉토리가 없다면 실행해라 //나중에 게시판만들 때 많이 쓰인다.   
			//temp폴더를 생성
			file.mkdirs(); //2개이상은 s를 붙인다. 
		}
		
		System.out.println(file.isDirectory()); //확인하려고 출력해본다.
											    //true값이 나왔다면 경로에 temp폴더가 만들어져 있을 것이다.
												//경로에 생성하려고 했던 폴더가 나오지 않는다면 F5키를 누르면 된다.
												//(맥북은 fn+F5)
		
		file = new File("src/java0911_stream");
		System.out.println(file.exists());
		
		String[] list = file.list(); //이 list는 String배열로 리턴이 된다.
		
		for(String sn : list) {
			System.out.println(sn);
		}
		
		File[] listFile = file.listFiles(); //파일을 가져오겠다고 하면 이렇게 수행하면 된다.
		for(File fe : listFile) {
			System.out.println(fe.getName()); //파일의 이름을 가져오고 싶을 때
		}
		
		file = new File("src/java0911_stream/source.txt"); //파일을 삭제할 때
		if(file.exists()) { //지정한 경로에 있는 파일이 있으면
			file.delete();
			System.out.println("파일 삭제");
		}else {
			System.out.println("파일 없음");
		}
	}

}
