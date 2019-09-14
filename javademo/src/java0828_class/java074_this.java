package java0828_class;

/*
 * show()메소드를 아래와 같이 출력이 되도록 구현하세요.
 * 
 * [실행결과]
 * 노래제목 : Dansing Queen
 * 가수 : ABBA
 * 앨범 : Arrival
 * 작곡가 : Benny Andersson, Bjorn UIvaeus
 * 년도 : 1977
 * 트랙번호 : 2
 */

class Song {
	String title;
	String artist;
	String album;
	String[] composer;
	int year;
	int track;
	
	public Song() {
		
	}
	
	public Song(String title, String artist, String album, String[] composer, int year, int track) {
		this.title = title;
		this.artist = artist;
		this.album = album;
		this.composer = composer;
		this.year = year;
		this.track = track;
	}
	
	public void show() {
		System.out.printf("노래제목 : %s\n가수 : %s\n앨범 : %s\n", title, artist, album);
		System.out.print("작곡가 : ");
		for(int i=0; i<this.composer.length; i++) {
			
			/*System.out.printf("%s", this.composer[i]);
			if(i < composer.length-1)
				System.out.print(",");
			else
				System.out.println();*/
			
			String chk = i <composer.length-1 ? "," : "\n";
			System.out.printf("%s%s", composer[i], chk);
		}
		System.out.printf("년도 : %d\n트랙번호 : %d\n", year, track);
	}
}
public class java074_this {

	public static void main(String[] args) {
	Song s = new Song("Dansing Queen", "ABBA", "Arrival", 
			new String[] {"Benny Andersson", "Bjorn UIvaeus"}, 1977, 2);
	
	s.show();
	
	}

}
