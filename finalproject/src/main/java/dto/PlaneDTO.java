package dto;

public class PlaneDTO {
	
	private int plane_code;
	private String flight_name;
	private int seating_capacity;
	private String airplane_model;
	private String airline_name;
	
	public PlaneDTO() {
		
	}

	public int getPlane_code() {
		return plane_code;
	}

	public void setPlane_code(int plane_code) {
		this.plane_code = plane_code;
	}

	public String getFlight_name() {
		return flight_name;
	}

	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}

	public int getSeating_capacity() {
		return seating_capacity;
	}

	public void setSeating_capacity(int seating_capacity) {
		this.seating_capacity = seating_capacity;
	}

	public String getAirplane_model() {
		return airplane_model;
	}

	public void setAirplane_model(String airplane_model) {
		this.airplane_model = airplane_model;
	}

	public String getAirline_name() {
		return airline_name;
	}

	public void setAirline_name(String airline_name) {
		this.airline_name = airline_name;
	}
	
	
}
