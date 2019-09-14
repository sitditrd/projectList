package dto;

public class ReserveDetailDTO {
	
	private int reserve_detail_code;
	private String passname;
	private String passgender;
	private String passbirth;
	private String passnumber;
	private String passcountry;
	
	public ReserveDetailDTO() {
		
	}

	public int getReserve_detail_code() {
		return reserve_detail_code;
	}

	public void setReserve_detail_code(int reserve_detail_code) {
		this.reserve_detail_code = reserve_detail_code;
	}

	public String getPassname() {
		return passname;
	}

	public void setPassname(String passname) {
		this.passname = passname;
	}

	public String getPassgender() {
		return passgender;
	}

	public void setPassgender(String passgender) {
		this.passgender = passgender;
	}

	public String getPassbirth() {
		return passbirth;
	}

	public void setPassbirth(String passbirth) {
		this.passbirth = passbirth;
	}

	public String getPassnumber() {
		return passnumber;
	}

	public void setPassnumber(String passnumber) {
		this.passnumber = passnumber;
	}

	public String getPasscountry() {
		return passcountry;
	}

	public void setPasscountry(String passcountry) {
		this.passcountry = passcountry;
	}
	
	
}
