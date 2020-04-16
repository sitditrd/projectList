package dto;

public class TicketDTO {
	private int route_code;
	private int stopover_code;
	private int plane_code;
	private String airline_name;
	private String airline_nation;
	private String airline_site;
	private String route_depart_region;
	private String route_arrive_region;
	private String arrive_time;
	private String depart_time;
	private int route_charge;
	private String route_register_day;
	private String route_estimate_time;
	private String route_type;
	private String route_distance;
	private String route_depart_day;
	
	//항공편명, 항공기종(가상 DTO)
	private String airplane_model;
	private String flight_name;
	
	//항공기 좌석수 (가상 DTO)
	private int seat_capacity;
	
	public int getSeat_capacity() {
		return seat_capacity;
	}


	public void setSeat_capacity(int seat_capacity) {
		this.seat_capacity = seat_capacity;
	}


	public String getAirplane_model() {
		return airplane_model;
	}


	public void setAirplane_model(String airplane_model) {
		this.airplane_model = airplane_model;
	}


	public String getFlight_name() {
		return flight_name;
	}


	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}


	public TicketDTO() {
		
	}
	
	public String getRoute_depart_day() {
		return route_depart_day;
	}


	public void setRoute_depart_day(String route_depart_day) {
		this.route_depart_day = route_depart_day;
	}

	public String getRoute_distance() {
		return route_distance;
	}


	public void setRoute_distance(String route_distance) {
		this.route_distance = route_distance;
	}


	public int getRoute_code() {
		return route_code;
	}


	public void setRoute_code(int route_code) {
		this.route_code = route_code;
	}


	public int getStopover_code() {
		return stopover_code;
	}

	public void setStopover_code(int stopover_code) {
		this.stopover_code = stopover_code;
	}

	public int getPlane_code() {
		return plane_code;
	}

	public void setPlane_code(int plane_code) {
		this.plane_code = plane_code;
	}

	public String getAirline_name() {
		return airline_name;
	}

	public void setAirline_name(String airline_name) {
		this.airline_name = airline_name;
	}

	public String getAirline_nation() {
		return airline_nation;
	}

	public void setAirline_nation(String airline_nation) {
		this.airline_nation = airline_nation;
	}

	public String getAirline_site() {
		return airline_site;
	}

	public void setAirline_site(String airline_site) {
		this.airline_site = airline_site;
	}

	public String getRoute_depart_region() {
		return route_depart_region;
	}

	public void setRoute_depart_region(String route_depart_region) {
		this.route_depart_region = route_depart_region;
	}

	public String getRoute_arrive_region() {
		return route_arrive_region;
	}

	public void setRoute_arrive_region(String route_arrive_region) {
		this.route_arrive_region = route_arrive_region;
	}

	public String getArrive_time() {
		return arrive_time;
	}

	public void setArrive_time(String arrive_time) {
		this.arrive_time = arrive_time;
	}

	public String getDepart_time() {
		return depart_time;
	}

	public void setDepart_time(String depart_time) {
		this.depart_time = depart_time;
	}

	public int getRoute_charge() {
		return route_charge;
	}

	public void setRoute_charge(int route_charge) {
		this.route_charge = route_charge;
	}

	public String getRoute_register_day() {
		return route_register_day;
	}

	public void setRoute_register_day(String route_register_day) {
		this.route_register_day = route_register_day;
	}

	public String getRoute_estimate_time() {
		return route_estimate_time;
	}

	public void setRoute_estimate_time(String route_estimate_time) {
		this.route_estimate_time = route_estimate_time;
	}

	public String getRoute_type() {
		return route_type;
	}

	public void setRoute_type(String route_type) {
		this.route_type = route_type;
	}
	
}
