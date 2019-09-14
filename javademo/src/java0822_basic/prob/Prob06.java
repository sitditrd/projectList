package java0822_basic.prob;

import java.util.*;

/*
 * ko, en, jp 평균을 구해서 60점 이상이면 "합격", 60점 미만이면 "불합격"을 출력하는 프로그램을 구하여라. 
 */

public class Prob06 {

	public static void main(String[] args) {

		Scanner rd = new Scanner(System.in);

		int ko, en, jp;
		int total = 0;

		double avg;

		ko = rd.nextInt();
		en = rd.nextInt();
		jp = rd.nextInt();

		total = ko + en + jp;

		avg = (double) (total / 3.0);

		if (avg >= 65.0) 
		{
			System.out.println("평균 "+ avg + "점," + "합격입니다.");
		} 
		else 
		{
			System.out.println("평균 "+ avg + "점," + "불합격입니다.");
		}

	}

}
