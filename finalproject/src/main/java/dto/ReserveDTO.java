package dto;

import java.sql.Date;

public class ReserveDTO {
	private int reserve_code;
	private int ticket_type;
	private String member_id;
	private String reserve_depart_day;
	private String reserve_journey;
	private String reserve_state;
	private int reserve_total_price;
	private String reserve_paymethod;
	private String reserve_date;
	
	public ReserveDTO() {
		
	}

	public int getReserve_code() {
		return reserve_code;
	}

	public void setReserve_code(int reserve_code) {
		this.reserve_code = reserve_code;
	}

	public int getTicket_type() {
		return ticket_type;
	}

	public void setTicket_type(int ticket_type) {
		this.ticket_type = ticket_type;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getReserve_depart_day() {
		return reserve_depart_day;
	}

	public void setReserve_depart_day(String reserve_depart_day) {
		this.reserve_depart_day = reserve_depart_day;
	}

	public String getReserve_journey() {
		return reserve_journey;
	}

	public void setReserve_journey(String reserve_journey) {
		this.reserve_journey = reserve_journey;
	}

	public String getReserve_state() {
		return reserve_state;
	}

	public void setReserve_state(String reserve_state) {
		this.reserve_state = reserve_state;
	}

	public String getReserve_paymethod() {
		return reserve_paymethod;
	}

	public void setReserve_paymethod(String reserve_paymethod) {
		this.reserve_paymethod = reserve_paymethod;
	}

	public String getReserve_date() {
		return reserve_date;
	}

	public void setReserve_date(String reserve_date) {
		this.reserve_date = reserve_date;
	}

	public int getReserve_total_price() {
		return reserve_total_price;
	}

	public void setReserve_total_price(int reserve_total_price) {
		this.reserve_total_price = reserve_total_price;
	}
	
}
