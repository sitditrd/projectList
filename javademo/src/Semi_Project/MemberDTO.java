package Semi_Project;

public class MemberDTO {

	String id;
	String pwd;
	String name;
	String carnum;
	String phone;
	String sex;

	String sector; // 좌석
	String parkname; // 다른 주차장 이름 받아서 gui에서 확인해서 if문 돌려서 강남이면 돌리고 역삼이면 다른 쿼리문 돌리고

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	int number;

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public MemberDTO(String sector) {
		this.sector = sector;
	}

	public MemberDTO() {
	}

	public MemberDTO(String id, String pwd) {
		this.id = id;
		this.pwd = pwd;
	}

	public MemberDTO(String id, String pwd, String name, String phone, String sex, String carnum) {

		this.id = id;
		this.pwd = pwd;
		this.name = name;
		this.carnum = carnum;
		this.phone = phone;
		this.sex = sex;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCarnum() {
		return carnum;
	}

	public void setCarnum(String carnum) {
		this.carnum = carnum;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

}
