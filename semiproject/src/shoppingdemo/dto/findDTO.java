package shoppingdemo.dto;

public class findDTO {

	String member_id;
	String member_pwd;
	String member_eamil;
	
	public findDTO() {
		
	}
	
	public findDTO(String id, String email) {
		
	}
	

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getMember_pwd() {
		return member_pwd;
	}

	public void setMember_pwd(String member_pwd) {
		this.member_pwd = member_pwd;
	}

	public String getMember_eamil() {
		return member_eamil;
	}

	public void setMember_eamil(String member_eamil) {
		this.member_eamil = member_eamil;
	}
	
}
