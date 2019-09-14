package java0904_binding.prob;

/*
 * [데이타]
 * 이름       부서     구분        급여          수당         근무일         일당
 * 홍길동    영업부   정직원   450000  1000
 * 갑동이    기획부   계약직                                    20     10000
 * 
 * [출력결과]
 * 홍길동  총급여  451000
 * 갑동이  총급여  200000
 * 
 * 위의 [데이타]를 참조하여 [출력결과]가 나오도록 프로그램을 구현하세요.
 */

class Employee2 {
	String Name, Dept, Part;

	int Salary, Time_Salary, Workdays, Work_Salary;

	public Employee2() {
		super();
	}

	public Employee2(String name, String dept, String part, int salary, int time_Salary, int workdays,
			int work_Salary) {
		
		super();
		Name = name;
		Dept = dept;
		Part = part;
		Salary = salary;
		Time_Salary = time_Salary;
		Workdays = workdays;
		Work_Salary = work_Salary;
	}

	public String toString() {
		return Name + "  " + Dept + "  " + Part + "  " + Salary + "  " + Time_Salary + "  " + Workdays + "  "
				+ Work_Salary;
	}
}

public class Prob003_binding {

	public static void main(String[] args) {
		
		Employee2[] em = new Employee2[2];
		int[] total = new int[em.length];
		int index = 0;
		

		em[0] = new Employee2("홍길동", "영업부", "정직원", 450000, 1000, 0, 0);
		em[1] = new Employee2("갑동이", "기획부", "계약직", 0, 0, 20, 10000);

		System.out.println(prn());

		for (Employee2 em2 : em) {

			System.out.println(em2.toString());

			total[index++] = (em2.Salary + em2.Time_Salary) + em2.Work_Salary * em2.Workdays;

		}

		for (int i = 0; i < em.length; i++) {
			System.out.printf(em[i].Name + " 총급여 " + total[i]);
			System.out.println();
		}

	}// end main()

	public static String prn() {
		return "이름     " + "부서    " + "구분     " + "급여          " + "수당        " + "근무일   " + "일당   ";
	}

}// end class
