package shoppingdemo.dto;

public class CancelDTO {
	 String cancel_pay;
	 String member_id;
	 
	public CancelDTO() {
		
	}
	 
	public String getCancel_pay() {
		return cancel_pay;
	}

	public void setCancel_pay(String cancel_pay) {
		this.cancel_pay = cancel_pay;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
	
}
