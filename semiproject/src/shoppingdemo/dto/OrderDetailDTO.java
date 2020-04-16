package shoppingdemo.dto;

public class OrderDetailDTO {
	
	int list_id;
	String category_id;
	String item_name;
	int item_total;
	String item_size;
	int item_price;
	String receive_person;
	String receive_email;
	String receive_phone;
	String receive_address;
	
	
	public OrderDetailDTO() {
		
	}
	
	public String getItem_size() {
		return item_size;
	}

	public void setItem_size(String item_size) {
		this.item_size = item_size;
	}

	public int getItem_price() {
		return item_price;
	}

	public void setItem_price(int item_price) {
		this.item_price = item_price;
	}

	public int getList_id() {
		return list_id;
	}

	public void setList_id(int list_id) {
		this.list_id = list_id;
	}

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public int getItem_total() {
		return item_total;
	}

	public void setItem_total(int item_total) {
		this.item_total = item_total;
	}

	public String getReceive_person() {
		return receive_person;
	}

	public void setReceive_person(String receive_person) {
		this.receive_person = receive_person;
	}

	public String getReceive_email() {
		return receive_email;
	}

	public void setReceive_email(String receive_email) {
		this.receive_email = receive_email;
	}

	public String getReceive_phone() {
		return receive_phone;
	}

	public void setReceive_phone(String receive_phone) {
		this.receive_phone = receive_phone;
	}

	public String getReceive_address() {
		return receive_address;
	}

	public void setReceive_address(String receive_address) {
		this.receive_address = receive_address;
	}
	
}
