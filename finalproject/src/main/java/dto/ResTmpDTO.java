package dto;

public class ResTmpDTO {
	private String[] surname, givennames, selidtype, nationality, idNumber, gender;
	private String txtContactName, phoneCode, txtContactMobile,	txtContactEMail ,submitTotalPrice;
	private int[] birth_year, birth_month, birth_day;
	
	public ResTmpDTO() {
		
	}

	public String[] getSurname() {
		return surname;
	}

	public void setSurname(String[] surname) {
		this.surname = surname;
	}

	public String[] getGivennames() {
		return givennames;
	}

	public void setGivennames(String[] givennames) {
		this.givennames = givennames;
	}

	public String[] getSelidtype() {
		return selidtype;
	}

	public void setSelidtype(String[] selidtype) {
		this.selidtype = selidtype;
	}

	public String[] getNationality() {
		return nationality;
	}

	public void setNationality(String[] nationality) {
		this.nationality = nationality;
	}

	public String[] getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String[] idNumber) {
		this.idNumber = idNumber;
	}

	public String[] getGender() {
		return gender;
	}

	public void setGender(String[] gender) {
		this.gender = gender;
	}

	public String getTxtContactName() {
		return txtContactName;
	}

	public void setTxtContactName(String txtContactName) {
		this.txtContactName = txtContactName;
	}

	public String getPhoneCode() {
		return phoneCode;
	}

	public void setPhoneCode(String phoneCode) {
		this.phoneCode = phoneCode;
	}

	public String getTxtContactMobile() {
		return txtContactMobile;
	}

	public void setTxtContactMobile(String txtContactMobile) {
		this.txtContactMobile = txtContactMobile;
	}

	public String getTxtContactEMail() {
		return txtContactEMail;
	}

	public void setTxtContactEMail(String txtContactEMail) {
		this.txtContactEMail = txtContactEMail;
	}

	public String getSubmitTotalPrice() {
		return submitTotalPrice;
	}

	public void setSubmitTotalPrice(String submitTotalPrice) {
		this.submitTotalPrice = submitTotalPrice;
	}

	public int[] getBirth_year() {
		return birth_year;
	}

	public void setBirth_year(int[] birth_year) {
		this.birth_year = birth_year;
	}

	public int[] getBirth_month() {
		return birth_month;
	}

	public void setBirth_month(int[] birth_month) {
		this.birth_month = birth_month;
	}

	public int[] getBirth_day() {
		return birth_day;
	}

	public void setBirth_day(int[] birth_day) {
		this.birth_day = birth_day;
	}

	
	
}
