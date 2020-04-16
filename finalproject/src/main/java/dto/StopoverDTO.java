package dto;

public class StopoverDTO {
	
	private int stopover_code;
	private String airline_name;
	private String airline_nation;
	private String airline_site;
	private String route_depart_region;
	private String route_arrive_region;
	private String arrive_time;
	private String depart_time;
	private String route_before_estimate_time;
	private String route_estimate_time;
	private String route_after_estimate_time;
	private String route_flight_name;
	
	public StopoverDTO() {
		
	}

	public int getStopover_code() {
		return stopover_code;
	}
	public void setStopover_code(int stopover_code) {
		this.stopover_code = stopover_code;
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
	public String getRoute_before_estimate_time() {
		return route_before_estimate_time;
	}
	public void setRoute_before_estimate_time(String route_before_estimate_time) {
		this.route_before_estimate_time = route_before_estimate_time;
	}
	public String getRoute_estimate_time() {
		return route_estimate_time;
	}
	public void setRoute_estimate_time(String route_estimate_time) {
		this.route_estimate_time = route_estimate_time;
	}
	public String getRoute_after_estimate_time() {
		return route_after_estimate_time;
	}
	public void setRoute_after_estimate_time(String route_after_estimate_time) {
		this.route_after_estimate_time = route_after_estimate_time;
	}
	public String getRoute_flight_name() {
		return route_flight_name;
	}
	public void setRoute_flight_name(String route_flight_name) {
		this.route_flight_name = route_flight_name;
	}
	
	
}
