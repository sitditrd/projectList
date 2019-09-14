package java0928_jdbc;

//DTO(Data Transfer Object) : 데이터 교환을 위한 객체
public class DepartmentDTO {
	//DTO 객체는 변수명을 지을 때는 컬럼명하고 같아야 한다. 
	private int department_id;
	private String department_name;
	private int manager_id;
	private int location_id;
	
	public DepartmentDTO() {
		
	}

	public int getDepartment_id() {
		return department_id;
	}

	public void setDepartment_id(int department_id) {
		this.department_id = department_id;
	}

	public String getDepartment_name() {
		return department_name;
	}

	public void setDepartment_name(String department_name) {
		this.department_name = department_name;
	}

	public int getManager_id() {
		return manager_id;
	}

	public void setManager_id(int manager_id) {
		this.manager_id = manager_id;
	}

	public int getLocation_id() {
		return location_id;
	}

	public void setLocation_id(int location_id) {
		this.location_id = location_id;
	}
	
}