package java0911_stream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;

public class java168_stream {

	public static void main(String[] args) {
		File file = new File("src/java0911_stream/song.txt");
		RandomAccessFile raf = null;
		String stn = new String("/r/nMaroon 5 - Daylight, Sunday Morning\r\n"); //추가시킬 문자열을 미리 선언.
		
		//추가시키려면 song.txt에 있는 파일에 있는 총 길이를 구하여 추가하면된다.
		try {
			raf = new RandomAccessFile(file, "rw");
			
			//song.txt파일의 총 길이를 리턴한다. 
			long size = raf.length(); //length가 리턴되는게 long이기 때문에
			//커서를 파일의 끝으로 이동한다. 
			raf.seek(size);
			raf.writeBytes(stn);
			//raf는 flush를 제공하지 않기 때문에 finally에서 close를 해야 한다. 
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch(IOException e) {
			e.printStackTrace();
		} finally {
			try {
				raf.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
	}

}
