package java0911_stream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;

public class java167_stream {

	public static void main(String[] args) {
		File file = new File("src/java0911_stream/score.txt");
		RandomAccessFile raf = null;
		
		try {
			
			/*
			 * "r" : 읽기(read)만 가능하다.
			 * "rw" : 읽기(read) 쓰기(write)가 가능하다. (w만 할수 없다.)
			 */
			
			raf = new RandomAccessFile(file,"r"); //throws처리가 되어있기 때문에 예외처리를 해주어야 한다.
												  //생략되었으므로 false처리 되어 updata처리가 된다. 
			
		System.out.println(raf.getFilePointer()); //현재 커서의 위치값을 가져오기 위해. 0이 출력될것이다.
		System.out.println((char)raf.read()); //한 문자를 읽어오기 위해. k가 출력될 것이다. 
		System.out.println(raf.getFilePointer()); //현재 커서의 위치값을 가져오기 위해. 1이 출력될것이다. 한문자를 읽어왓기ㅣ 떄문에
		System.out.println(raf.readLine()); //현재 커서 위치인 1부터 라인끝가지 읽어온다. 
		
		String line = raf.readLine(); //다음의 한 라인은 별도의 변수에 저장해놓는다. 
		System.out.printf("%s %d\n", line, line.length()); //변수에 저장해놓은 한라인을 출력하고 문자열 크기값을 리턴한다.
		
		System.out.println(raf.getFilePointer()); //현재 커서의 위치값을 가져오기 위해. 30이 출력될것이다.
												  //첫번째줄은 문자열 크기가 12에서 
												  //맨앞으로 옮기고(+1)다음라인으로 내려가고(+1)된다.
												  //14가되고 두번째도 마찬가지로 계산하면 최종 커서위치는 30이다.
		
		raf.seek(4); //커서의 위치값을 이동시킬 수 있는것.
		System.out.println(raf.readLine());
		
		//지정된 수 만큼 byte를 건너뛴다.
		//(현재 포인터가 있는 위치를 기준으로 건너뛴다.)
		raf.skipBytes(2);
		//raf.skipBytes(-6);//-값 음수는 무시한다. 따라서 직진밖에 없다. 
		System.out.println(raf.readLine());
		
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

}
