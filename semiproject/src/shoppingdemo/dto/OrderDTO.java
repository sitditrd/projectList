package shoppingdemo.dto;

public class OrderDTO {
	
	int num;

	String member_id;
	String item_name;
	int list_total_price;
	String list_date;
	String state;

	public OrderDTO() {
		
	}
	
	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}
	
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public int getList_total_price() {
		return list_total_price;
	}

	public void setList_total_price(int list_total_price) {
		this.list_total_price = list_total_price;
	}

	public String getList_date() {
		return list_date;
	}

	public void setList_date(String list_date) {
		this.list_date = list_date;
	}
}
