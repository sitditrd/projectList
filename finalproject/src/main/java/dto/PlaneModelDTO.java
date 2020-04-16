package dto;

public class PlaneModelDTO {
	private int plane_code;
	private int grade_code;
	private int seat_capacity;
	
	public PlaneModelDTO() {
		
	}

	public int getPlane_code() {
		return plane_code;
	}

	public void setPlane_code(int plane_code) {
		this.plane_code = plane_code;
	}

	public int getGrade_code() {
		return grade_code;
	}

	public void setGrade_code(int grade_code) {
		this.grade_code = grade_code;
	}

	public int getSeat_capacity() {
		return seat_capacity;
	}

	public void setSeat_capacity(int seat_capacity) {
		this.seat_capacity = seat_capacity;
	}
	
}
