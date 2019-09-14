package java0830_static_access.prob;

// -(private)    + (public)    #(protected)     X : default
/* 
 * -name:String                    
 * -dept:String 
 * -pay:int
 * -score:double
 * 
 * +setName(name:String):void
 * +setDept(dept:String):void
 * +setPay(pay:int):void
 * +setScore(score:double):void
 * +getName():String
 * +getDept():String
 * +getPay():int
 * +getScore():double
 * +setEmployee(name:String, dept:String, pay:int, score:double)
 * +toString():String 
 */
public class Employee {
	
	private String Name;
	private String Dept;
	private int Pay;
	private double Score;
	
	public Employee() {
		
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getDept() {
		return Dept;
	}

	public void setDept(String dept) {
		Dept = dept;
	}

	public int getPay() {
		return Pay;
	}

	public void setPay(int pay) {
		Pay = pay;
	}

	public double getScore() {
		return Score;
	}

	public void setScore(double score) {
		Score = score;
	}

	public void setEmployee(String string, String string2, int i, double d) {
		this.Name = string;
		this.Dept = string2;
		this.Pay = i;
		this.Score = d;
	}
	
	public String toString() {
		return "이름은 "+Name+"이고 "+Dept+"에 근무하며 "+"급여는 "+Pay+"원 입사성적은 "+Score+"입니다.";
	}
	
}
















