package Semi_Project;

public class PaymentDTO {
	public int Payment_UID;
	public int Total_Price;
	public String Payment_Option;
	public String Payment_Date;
	
	public PaymentDTO() {
		
	}
	
	public PaymentDTO(int total_Price, String payment_Option, String payment_Date) {
		super();
		this.Total_Price = total_Price;
		this.Payment_Option = payment_Option;
		this.Payment_Date = payment_Date;
	}
	
	public int getTotal_Price() {
		return Total_Price;
	}
	public void setTotal_Price(int total_Price) {
		Total_Price = total_Price;
	}
	public String getPayment_Option() {
		return Payment_Option;
	}
	public void setPayment_Option(String payment_Option) {
		Payment_Option = payment_Option;
	}
	public String getPayment_Date() {
		return Payment_Date;
	}
	public void setPayment_Date(String payment_Date) {
		Payment_Date = payment_Date;
	}
	
	
	
}
