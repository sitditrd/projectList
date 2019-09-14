package java0828_class;

class Employees {
	
	String name;
	String dept;
	int salary;
	
	public Employees() { //2
		this("홍길동", "보류", 3000); //3 생성자에서 생성자를 사용할 때 this를 사용할 수 있다.
	} //9
	public Employees(String name, String dept, int salary) { //4
		this.name = name; //5
		this.dept = dept; //6
		this.salary = salary; //7
	} //8
	
	public void prn() { //11
		System.out.printf("%s %s %d\n", name, dept, salary); //12
	} //13
}
public class java073_this {

	public static void main(String[] args) {
		Employees emp = new Employees("용팔이", "기획", 5000);
		emp.prn();
		
		Employees emp2 = new Employees(); //1
		emp2.prn(); //10

	} //14

} //15
