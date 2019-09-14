package java0904_binding;

public class java112_binding {

	public static void main(String[] args) {
		
		LgTv2 lg = new LgTv2("LG");
		process(lg);
		SamsungTv2 ss = new SamsungTv2("SAMSUNG");
		process(ss);

	}
	
	public static void process(HomeTv tv) { //업캐스팅 되었다.
										    //하나의 객체참조 메모리로 여러가지를 참조할 수 있다. 결합도가 낮아졌다.
		tv.trunOn();
		//tv.call(); //오류가 뜰 것이다. HomeTv에서는 정의가 안되있기 때문에 LgTv2에만 정의되있기 때문에.
		//tv.loc(); //오류가 뜰 것이다. HomeTv에서는 정의가 안되있기 떄문에 SamsungTv2에만 정의되있기 떄문에.
		
		//현재 어떤 객체가 넘어오는지를 구분하고 다운캐스팅한다.
		
		if(tv instanceof LgTv2) {
			LgTv2 lg = (LgTv2)tv; //다운캐스팅
			lg.call();
		}
		else if(tv instanceof SamsungTv2) {
			SamsungTv2 ss = (SamsungTv2)tv; //다운캐스팅
			ss.loc();
		}
	}
}
