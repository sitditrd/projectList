package dto;

public class ReserveDetail2DTO {
	
	private int reserve_detail2_code;
	private String detail_depart_region;
	private String detail_arrive_region;
	private String detail_depart_day;
	private String detail_arrive_day;
	private String detail_airline_name;
	private String detail_airplane_model;
	private String detail_flight_name;
	private String detail_seat_grade;
	private int detail_seat_total;
	private String detail_stopover_type;
	
	public ReserveDetail2DTO() {
		
	}
	
	public String getDetail_airline_name() {
		return detail_airline_name;
	}


	public void setDetail_airline_name(String detail_airline_name) {
		this.detail_airline_name = detail_airline_name;
	}


	public String getDetail_airplane_model() {
		return detail_airplane_model;
	}


	public void setDetail_airplane_model(String detail_airplane_model) {
		this.detail_airplane_model = detail_airplane_model;
	}


	public int getReserve_detail2_code() {
		return reserve_detail2_code;
	}

	public void setReserve_detail2_code(int reserve_detail2_code) {
		this.reserve_detail2_code = reserve_detail2_code;
	}

	public String getDetail_depart_region() {
		return detail_depart_region;
	}

	public void setDetail_depart_region(String detail_depart_region) {
		this.detail_depart_region = detail_depart_region;
	}

	public String getDetail_arrive_region() {
		return detail_arrive_region;
	}

	public void setDetail_arrive_region(String detail_arrive_region) {
		this.detail_arrive_region = detail_arrive_region;
	}

	public String getDetail_depart_day() {
		return detail_depart_day;
	}

	public void setDetail_depart_day(String detail_depart_day) {
		this.detail_depart_day = detail_depart_day;
	}

	public String getDetail_arrive_day() {
		return detail_arrive_day;
	}

	public void setDetail_arrive_day(String detail_arrive_day) {
		this.detail_arrive_day = detail_arrive_day;
	}

	public String getDetail_flight_name() {
		return detail_flight_name;
	}

	public void setDetail_flight_name(String detail_flight_name) {
		this.detail_flight_name = detail_flight_name;
	}

	public int getDetail_seat_total() {
		return detail_seat_total;
	}

	public void setDetail_seat_total(int detail_seat_total) {
		this.detail_seat_total = detail_seat_total;
	}

	public String getDetail_seat_grade() {
		return detail_seat_grade;
	}

	public void setDetail_seat_grade(String detail_seat_grade) {
		this.detail_seat_grade = detail_seat_grade;
	}

	public String getDetail_stopover_type() {
		return detail_stopover_type;
	}

	public void setDetail_stopover_type(String detail_stopover_type) {
		this.detail_stopover_type = detail_stopover_type;
	}

}
