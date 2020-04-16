package shoppingdemo.dto;

public class CartDTO {

	String member_id;
	String item_size;
	String item_name;
	String item_price;
	String category_id;
	int item_id;
	String item_amount;
	int num;

	public CartDTO() {
		
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}
	
	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}
	
	public String getItem_size() {
		return item_size;
	}

	public void setItem_size(String item_size) {
		this.item_size = item_size;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public String getItem_price() {
		return item_price;
	}

	public void setItem_price(String item_price) {
		this.item_price = item_price;
	}

	public int getItem_id() {
		return item_id;
	}

	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}

	public String getItem_amount() {
		return item_amount;
	}

	public void setItem_amount(String item_amount) {
		this.item_amount = item_amount;
	}
}
