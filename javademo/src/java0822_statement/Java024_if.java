package java0822_statement;

/*
 * [출력결과]
 * station = "KBS", channel = 7 -> 닥터포스터
 * station = "KBS", channel = 9 -> 국수의 신
 * station = "MBC" -> 몬스터
 * station = "EBS" -> 한국기행=
 */

public class Java024_if {

	public static void main(String[] args) {
		int channel = 9;
		String station = "KBS";
		String announced = null;
		
		if(station == "KBS" && channel == 7)
			announced = "닥터포스터";
		else if(station == "KBS" && channel == 9)
			announced = "국수의 신";
		else if(station == "MBC")
			announced = "몬스터";
		else if(station == "EBS")
			announced = "한국기행";
		
		System.out.println(announced);
	}

}