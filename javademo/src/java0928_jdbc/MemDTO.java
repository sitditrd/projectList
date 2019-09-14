package java0928_jdbc;

public class MemDTO {
	//Mem table에 있는 변수와 변수명을 같게 만들어 준다.
	private int num;
	private String name;
	private int age;
	private String loc;
	
	public MemDTO() {
		
	}

	public MemDTO(String name, int age, String loc) {
		super();
		this.name= name;
		this.age = age;
		this.loc = loc;
	}
	
	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getLoc() {
		return loc;
	}

	public void setLoc(String loc) {
		this.loc = loc;
	}
}
